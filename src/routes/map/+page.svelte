<script>
  import mapboxgl from "mapbox-gl";
  import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
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

  $: timeFilterLabel = new Date(0, 0, 0, 0, timeFilter)
                     .toLocaleString("en", {timeStyle: "short"});

  onMount(async () => {
    console.log("Fetching stations...");

    let fetchedStations = await d3.csv("bluebikes-stations.csv", (row) => ({
      ...row,
      Lat: +row.Lat,
      Long: +row.Long,
    }));

    let fetchedTrips = await d3.csv("bluebikes-traffic-2024-03.csv", (row) => ({
      ...row,
      // ride_id : A unique id of the ride
      // bike_type : electric or classic
      // started_at : the date and time the trip started in ISO 8601 format (e.g. "2019-12-13 13:28:04.2860" )
      // ended_at : the date and time the trip ended in ISO 8601 format (e.g. "2019-12-13 13:33:57.4370" )
      // start_station_id : the ID of the station where the trip started (e.g. A32000 )
      // end_station_id : the ID of the station where the trip ended (e.g. A32000 )
      // is_member : whether the rider is a member or not ( 1 or 0 )

      ride_id: row.ride_id,
      bike_type: row.bike_type,
      started_at: row.started_at,
      ended_at: row.ended_at,
      start_station_id: row.start_station_id,
      end_station_id: row.end_station_id,
      is_member: row.is_member,
    }));

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
      return station;
    });

    // Set the scale domain after the data is loaded
    radiusScale.domain([0, d3.max(llstations, (d) => d.totalTraffic)]);

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
</script>

<div>
  <h1>Bluebikes Stations</h1>
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
              cx={getCoords(station).cx}
              cy={getCoords(station).cy}
              r={radiusScale(station.totalTraffic)}
              fill="steelblue"
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
    flex: 1;
    min-height: 400px;
  }

  svg {
    position: absolute;
    z-index: 1;
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
</style>
