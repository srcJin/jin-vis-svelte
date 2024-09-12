<script>
  import mapboxgl from "mapbox-gl";
  import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onMount } from "svelte";

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2FvLWppbiIsImEiOiJjbHVvbG04bHcwZ291Mm9wYnNtOXoxc2hpIn0.jzRU-2gQOYtcfk7JLIHdcg";

  let map;

  onMount(() => {
    map = new mapboxgl.Map({
      container: "map", // the id of the container element
      style: "mapbox://styles/gao-jin/cm0zebjvq00jf01p431j3bavz", // stylesheet location
      center: [-71.0936142, 42.3591965], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    // Wait for the style to load before adding sources and layers
    map.on('style.load', () => {
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
          'line-color': 'green',
          'line-width': 3
        },
      });

      map.addLayer({
        id: "bike-routes-cambridge", // A unique name for our layer
        type: "line", // Type of layer to render (e.g. line, circle, fill)
        source: "cambridge_route", // The id we specified in `addSource()`
        paint: {
          'line-color': 'green',
          'line-width': 3
        },
      });

    });




  });
</script>

<body>
  <div>
    <div id="map"></div>
  </div>
</body>

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
</style>
