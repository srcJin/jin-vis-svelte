<script>
  import { base } from "$app/paths";
  import mapboxgl from "mapbox-gl";
  import "../../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { get } from "svelte/store";
  import { writable } from "svelte/store";

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2FvLWppbiIsImEiOiJjbHVvbG04bHcwZ291Mm9wYnNtOXoxc2hpIn0.jzRU-2gQOYtcfk7JLIHdcg";

  let map;
  let stations = writable([]);

  let trips = [];

  let mapViewChanged = 0;
  let radiusScale = d3.scaleSqrt().range([0, 25]);

  let timeFilter = -1; // Time in minutes, -1 means no filtering

  let filteredTrips, filteredArrivals, filteredDepartures, filteredStations;

  let departuresByMinute = Array.from({ length: 1440 }, () => []);
  let arrivalsByMinute = Array.from({ length: 1440 }, () => []);

  $: timeFilterLabel = new Date(0, 0, 0, 0, timeFilter).toLocaleString("en", {
    timeStyle: "short",
  });

  function filterByMinute(tripsByMinute, minute) {
    let minMinute = (minute - 60 + 1440) % 1440;
    let maxMinute = (minute + 60) % 1440;

    if (minMinute > maxMinute) {
      let beforeMidnight = tripsByMinute.slice(minMinute);
      let afterMidnight = tripsByMinute.slice(0, maxMinute);
      return beforeMidnight.concat(afterMidnight).flat();
    } else {
      return tripsByMinute.slice(minMinute, maxMinute).flat();
    }
  }

  let stationFlow = d3.scaleQuantize().domain([0, 1]).range([0, 0.5, 1]);
  console.log("stationFlow", stationFlow(0.8));

  onMount(async () => {
    console.log("Fetching stations...");

    let fetchedStations = await d3.csv(base + "/bluebikes-stations.csv", (row) => ({
      ...row,
      Lat: +row.Lat,
      Long: +row.Long,
    }));

    let fetchedTrips = await d3
      .csv("/bluebikes-traffic-2024-03.csv")
      .then((trips) => {
        for (let trip of trips) {
          trip.started_at = new Date(trip.started_at);
          trip.ended_at = new Date(trip.ended_at);

          let startedMinutes = minutesSinceMidnight(trip.started_at);
          departuresByMinute[startedMinutes].push(trip);

          let endedMinutes = minutesSinceMidnight(trip.ended_at);
          arrivalsByMinute[endedMinutes].push(trip);
        }
        return trips;
      });

    console.log("Here 1");
    // Example to populate departures and arrivals
    let departures = d3.rollup(
      fetchedTrips,
      (v) => v.length,
      (d) => d.start_station_id
    );

    console.log("Here 2");
    let arrivals = d3.rollup(
      fetchedTrips,
      (v) => v.length,
      (d) => d.end_station_id
    );

    console.log("Here 3");

    let llstations = fetchedStations.map((station) => {
      let id = station.Number;
      station.arrivals = arrivals.get(id) ?? 0;
      station.departures = departures.get(id) ?? 0;
      station.totalTraffic = station.arrivals + station.departures;
      // console.log("llstations calc", station.departures, station.totalTraffic)
      // console.log("llstations calc2", station.departures/station.totalTraffic)
      return station;
    });

    // // Set the scale domain after the data is loaded
    // radiusScale.domain([0, d3.max(llstations, (d) => d.totalTraffic)]);

    console.log("Here 4");

    // Set the data into the writable store
    stations.set(llstations);

    trips = fetchedTrips;

    console.log("Trips fetched:", trips);

    console.log("Fetching stations...");
    console.log("Stations fetched:", llstations);

    // console.log("Stations fetched:", fetchedStations);
    console.log("Initializing map...");

    map = new mapboxgl.Map({
      container: "map", // the id of the container element
      style: "mapbox://styles/gao-jin/cm0zebjvq00jf01p431j3bavz", // stylesheet location
      center: [-71.0936142, 42.3591965], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    console.log("Map initialized");

    // for (let station of stations) {
    //   let { cx, cy } = getCoords(station);
    //   console.log(cx, cy);
    // }

    // Wait for the style to load before adding sources and layers
    map.on("style.load", () => {
      map.addSource("boston_route", {
        type: "geojson",
        data: "https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",
      });

      map.addSource("cambridge_route", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson",
      });

      map.addLayer({
        id: "bike-routes", // A unique name for our layer
        type: "line", // Type of layer to render (e.g. line, circle, fill)
        source: "boston_route", // The id we specified in `addSource()`
        paint: {
          "line-color": "green",
          "line-width": 3,
        },
      });

      map.addLayer({
        id: "bike-routes-cambridge", // A unique name for our layer
        type: "line", // Type of layer to render (e.g. line, circle, fill)
        source: "cambridge_route", // The id we specified in `addSource()`
        paint: {
          "line-color": "green",
          "line-width": 3,
        },
      });
    });
  });

  $: map?.on("move", (evt) => mapViewChanged++);

  // display stations
  function getCoords(station) {
    // console.log(station);
    let point = new mapboxgl.LngLat(+station.Long, +station.Lat);
    let { x, y } = map.project(point);
    return { cx: x, cy: y };
  }

  function minutesSinceMidnight(date) {
    return date.getHours() * 60 + date.getMinutes();
  }

  // function getMixedColor(departures, totalTraffic) {
  //   const ratio = Math.min(1, Math.max(0, departures / totalTraffic)); // Calculate the ratio
  //   console.log("ratio", ratio);
  //   const colorScale = d3.interpolate("black", "white"); // Use D3 to interpolate between departure and arrival colors
  //   console.log("colorScale", colorScale(ratio));
  //   return colorScale(ratio); // Mix colors based on the ratio
  // }

  function getMixedColor(departures, totalTraffic) {
  if (totalTraffic === 0) {
    return "grey"; 
  } else {
    const ratio = Math.min(1, Math.max(0, departures / totalTraffic)); 

    if (ratio < 0.45) {
      return d3.interpolate("lightblue", "blue")(ratio / 0.45); 
    }
    
    else if (ratio >= 0.45 && ratio < 0.55) {
      return d3.interpolate("rgb(225, 178, 225)", "purple")((ratio - 0.45) / 0.1); 
    } 

    else if (ratio >= 0.55) {
      return d3.interpolate("rgb(227, 191, 126)", "orange")((ratio - 0.55) / 0.45); 
    }
  }
}
  $: filteredTrips =
    timeFilter === -1
      ? trips
      : trips.filter((trip) => {
          let startedMinutes = minutesSinceMidnight(trip.started_at);
          departuresByMinute[startedMinutes].push(trip);
          let endedMinutes = minutesSinceMidnight(trip.started_at);
          arrivalsByMinute[endedMinutes].push(trip);
          return (
            Math.abs(startedMinutes - timeFilter) <= 60 ||
            Math.abs(endedMinutes - timeFilter) <= 60
          );
        });

  $: filteredArrivals = d3.rollup(
    filterByMinute(arrivalsByMinute, timeFilter), // Use filtered trips by minute
    (v) => v.length, // Grouping function for counting arrivals
    (d) => d.end_station_id // Key by end station ID
  );

  $: filteredDepartures = d3.rollup(
    filterByMinute(departuresByMinute, timeFilter), // Use filtered trips by minute
    (v) => v.length, // Grouping function for counting departures
    (d) => d.start_station_id // Key by start station ID
  );

  $: filteredStations = $stations.map((station) => {
    station = { ...station }; // Cloning to avoid modifying the original data
    station.arrivals = filteredArrivals.get(station.Number) ?? 0;
    station.departures = filteredDepartures.get(station.Number) ?? 0;
    station.totalTraffic = station.arrivals + station.departures;

    // console.log("calc", station.departures, station.totalTraffic)
    // console.log("calc2", station.departures/station.totalTraffic)

    return station;
  });

  $: radiusScale = d3
    .scaleSqrt()
    .domain([0, d3.max(filteredStations, (d) => d.totalTraffic)])
    .range(timeFilter === -1 ? [0, 15] : [0, 5]); // Smaller range when no filter is applied
</script>

<div>
  <h1 class="big-title">Lab 8: Geospatial visualizations</h1>
  <h1>🚴🏼‍♀️ Bikewatching</h1>
  <label>
    Filter by time:
    <input
      bind:value={timeFilter}
      type="range"
      min="-1"
      max="1440"
      on:input={(e) => (timeFilter = parseInt(e.target.value))}
    />
    {#if timeFilter === -1}
      <em style="display: block;">(any time)</em>
    {:else}
      <time style="display: block;">{timeFilterLabel}</time>
    {/if}
  </label>
  <div id="map">
    {#key mapViewChanged}
      <div>
        {#each $stations as station}
          <svg>
            <circle
              fill={getMixedColor(station.departures, station.totalTraffic)}
              cx={getCoords(station).cx}
              cy={getCoords(station).cy}
              r={radiusScale(station.totalTraffic)}
              fill-opacity="0.6"
              stroke="white"
              pointer-events="auto"
            >
              <title
                >{station.totalTraffic} trips ({station.departures} departures, {station.arrivals}
                arrivals)</title
              >
            </circle>
          </svg>
        {/each}
      </div>
    {/key}
  </div>

  
  <div class="legend">
    <div class="legend-block">
      <div class="legend-color none"></div>
      <span class="legend-label">None</span>

    </div>
    <div class="legend-block">
      <div class="legend-color departures"></div>
      <span class="legend-label">More departures</span>

    </div>
    <div class="legend-block">
      <div class="legend-color balanced"></div>
      <span class="legend-label">Balanced</span>

    </div>
    <div class="legend-block">
      <div class="legend-color arrivals"></div>
      <span class="legend-label">More arrivals</span>

    </div>
  </div>
</div>

<style>
  body {
    font:
      100%/1.5 system-ui,
      sans-serif;
    display: flex;
    flex-flow: column;
    max-width: 80em;
    min-height: 100vh;
    box-sizing: border-box;
    margin: auto;
    padding: 1em;
  }

  #map {
    margin-top:2em;
    flex: 1;
    min-height: 400px;
  }

  svg {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  circle {
    transition: all 0.3s ease;
  }

  circle:hover {
    fill-opacity: 1;
    stroke-width: 2px;
  }

  em {
    color: grey;
    font-style: italic;
  }

  input[type="range"] {
    width: 300px; /* Adjust the width as needed */
  }

  .legend {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  padding: 1em;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.legend-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.legend-label {
  margin-bottom: 0.2em;
}

.legend-color {
  width: 100px;
  height: 20px;
  border-radius: 4px;
}

/* Define each color block's gradient */
.none {
  background-color: grey; /* Static grey color */
}

.departures {
  background: linear-gradient(to right, lightblue, blue); 
}

.balanced {
  background: linear-gradient(to right, rgb(225, 178, 225), purple); 
}

.arrivals {
  background: linear-gradient(to right, rgb(227, 191, 126), orange); 
}
</style>
