<script>
  import mapboxgl from "mapbox-gl";
  import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onMount } from "svelte";

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2FvLWppbiIsImEiOiJjbHVvbG04bHcwZ291Mm9wYnNtOXoxc2hpIn0.jzRU-2gQOYtcfk7JLIHdcg";

    let map

    onMount(() => {
        map = new mapboxgl.Map({
        container: 'map', // the id of the container element
        style: 'mapbox://styles/gao-jin/cm0zebjvq00jf01p431j3bavz', // stylesheet location
        center: [-71.0936142, 42.3591965], // starting position [lng, lat]
        zoom: 12 // starting zoom
        });
})


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
