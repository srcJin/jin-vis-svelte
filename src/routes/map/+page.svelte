<script>
  import mapboxgl from "mapbox-gl";
  import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { get } from "svelte/store";
  import { writable } from 'svelte/store';

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2FvLWppbiIsImEiOiJjbHVvbG04bHcwZ291Mm9wYnNtOXoxc2hpIn0.jzRU-2gQOYtcfk7JLIHdcg";

  let map;
  let stations = writable([]); 

  let mapViewChanged = 0;

  onMount(async () => {
    console.log("Fetching stations...");
    const fetchedStations  = await d3.csv("bluebikes-stations.csv", (row) => ({
      ...row,
      Lat: +row.Lat,
      Long: +row.Long,
    }));

    // Set the data into the writable store
    stations.set(fetchedStations);

    console.log("Stations fetched:", fetchedStations);
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

  $: map?.on("move", evt => mapViewChanged++);

    // display stations
    function getCoords(station) {
        console.log(station);
        let point = new mapboxgl.LngLat(+station.Long, +station.Lat);
        let { x, y } = map.project(point);
      return { cx: x, cy: y };
    }
</script>

<div>
    <h1>Bluebikes Stations</h1>



    <div id="map">

        {#key mapViewChanged}
        <div>
            {#each $stations as station}
            <svg>
                <circle
                    cx={getCoords(station).cx}
                    cy={getCoords(station).cy}
                    r="5"
                    fill="blue"
                />
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
</style>
