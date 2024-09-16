<script>
  // No script needed for now, but you can add any JavaScript here if needed later.
</script>

<svelte:head>
  <title>China Covid Risk Historical Map</title>
</svelte:head>

<main>
  <h1>China Covid Risk Historical Map</h1>
  <h3>Individual Project</h3>

  <h2><a href="http://gaoj.in/covidriskmap/">Visit the live demo</a></h2>
  

  <h2>Project Description</h2>
  <p>
    January 8th, 2023 is the date that China officially announces the end of the
    lockdown policy of COVID-19, which is also the 3-year anniversary of the
    date when China officially announces the acknowledgment of this new kind of
    virus. Over the three-year process of dynamic-zero-covid policy
    implementation, we see the time when the infection had been successfully
    controlled or beyond the control by the end of 2022. The covid risk control
    policy plays a vital part in this journey. As a memo, this project records
    the whole process from the beginning to the end of covid risk level policy.
  </p>


  <!-- coviddemo.gif -->
    <img src="/images/projects/covid_map/coviddemo.gif" alt="Covid Risk Level Map" />

  <h2>UX/UI Design</h2>
  <h3>UI Mockup</h3>
  <img src="/images/projects/covid_map/Draft_JG_01.png" alt="UI Mockup" />

  <p>
    The main theme color for this web page is red, because I want people to
    recognize the Covid is a severe virus and many people suffered from it. I
    keep all the information in one page, which makes it easier for people to
    navigate between sections and make the flow of viewing smooth. I designed
    the main feature - map fit one page. When in desktop mode, the controller
    panels are placed on the right side of the map, making it easier for people
    to swipe between the dates and learn about the information. Each session
    should be separated with a proper spacing. The top navigation bar, serves as
    a guide for the users, should always stays on top for easier navigation. The
    texts should be large and easy to read in both mobile and desktop
    environment. So I tried to limit the amount of information displayed in one
    page, carefully aligned them with proper spacing, making it easier to read.
    The page should have a branding, which includes a title, an icon and
    favicon.
  </p>

  <h2>Features</h2>

  <h3>Navigation Bar</h3>
  <img src="/images/projects/covid_map/Untitled.png" alt="Navigation Bar">
  <img src="/images/projects/covid_map/Untitled_1.png" alt="Responsive Navigation Bar">
  <ul>
      <li>Site icon and favicon</li>
      <li>Mobile responsive: Auto-hide the title and collapse to a hamburger menu button</li>
      <li>Dropdown menu</li>
      <li>Click to jump to the related part of the page</li>
      <li>Always on top of the page</li>
  </ul>

  <h3>Header Carousel</h3>
  <img src="/images/projects/covid_map/1.png" alt="Header Carousel">
  <ul>
      <li>Carousel between images</li>
      <li>Overlay texts with a button</li>
      <li>Click the “Show Map” button to scroll down to the map section</li>
  </ul>

  <h3>Map</h3>
  <div class="gallery">
    <img src="/images/projects/covid_map/2.png" alt="Interactive Map">
    <img src="/images/projects/covid_map/Untitled_2.png" alt="Map Controls">
    <img src="/images/projects/covid_map/Untitled_3.png" alt="Map Zoom">
    <img src="/images/projects/covid_map/Untitled_4.png" alt="Detailed Risk Point Info">
</div>
  <ul>
      <li>A slider bar to select a date and display the date selected</li>
      <li>Start Animation and Pause button</li>
      <li>Select the date by using a calendar, the dates available to be selected are restricted to the dates with data</li>
      <li>Event panel to display the key events corresponding to the current date in both Chinese and English</li>
      <li>Marker clusters with customized styles and icons</li>
      <li>Hide and show the markers and the color mapping layers</li>
      <li>Legends that will be automatically updated when switching to another layer</li>
      <li>The date slider, events and map are synced. Once the date has been changed, other panels will be live updated</li>
      <li>Full Screen and zoom in/out buttons</li>
      <li>Customized layer controller buttons</li>
      <li>Map Themes: switch between different map provider</li>
  </ul>

  <h3>Statistic Charts</h3>
  <img src="/images/projects/covid_map/3.png" alt="Statistic Charts">
  <ul>
      <li>Display three types of data in three synchronized charts: the amount of risk areas, the risk areas of key provinces, and the infection cases numbers</li>
      <li>Brush to specify a range of date</li>
      <li>Synchronized mouse pop-up panels</li>
      <li>Lazy load when scrolling to a specific part of the page (here is 500px from the top)</li>
  </ul>

  <h3>Info Session</h3>
  <img src="/images/projects/covid_map/4.png" alt="Information Session">
  <ul>
      <li>Mobile responsive Bootstrap cards</li>
  </ul>

  <h3>Timeline</h3>
  <img src="/images/projects/covid_map/5.png" alt="Timeline">
  <ul>
      <li>Mobile responsive layout using CSS media query</li>
      <li>Display the key events throughout the three-year journey with corresponding pictures</li>
      <li>Dual language texts</li>
  </ul>

  <!-- <h2>Data Processing using Node.js</h2>
  <h3>Risk Area Data Processing</h3> -->
  <!-- Omitted detailed code snippets for brevity, but they can be included here -->

  <h2>User Stories</h2>
  <p>
      A general user who wants to learn about the history of covid risk level policy will first get an impression by the carousel, which displayed several key images showing the effects lockdown has done on people’s mind and body. They will then be guided to the map page, to leave a first impression on the progress of the lockdown policy and key events. Along with the charts below to give people a second impression showing the data in a flattened way. For users who want to know more about the policy, they will then scroll down to the info session, which provides a more detailed description of the policy itself. Lastly, users may scroll down to trace the key events happened in the 3-year process by viewing the timeline.
  </p>

  <h2>Technologies Used</h2>
  <ul>
      <li>Bootstrap 5: <a href="https://getbootstrap.com/">https://getbootstrap.com/</a></li>
      <li>Bootstrap 5 Datepicker: <a href="https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js">https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js</a></li>
      <li>Leaflet: <a href="https://leafletjs.com/">https://leafletjs.com/</a></li>
      <li>leaflet.fullscreen: <a href="https://github.com/brunob/leaflet.fullscreen">https://github.com/brunob/leaflet.fullscreen</a></li>
      <li>Leaflet.ChineseTmsProviders: <a href="https://github.com/htoooth/Leaflet.ChineseTmsProviders">https://github.com/htoooth/Leaflet.ChineseTmsProviders</a></li>
      <li>Leaflet.ActiveLayers: <a href="https://github.com/vogdb/Leaflet.ActiveLayers">https://github.com/vogdb/Leaflet.ActiveLayers</a></li>
      <li>leaflet.markercluster: <a href="https://github.com/Leaflet/Leaflet.markercluster">https://github.com/Leaflet/Leaflet.markercluster</a></li>
      <li>apexCharts.js: <a href="https://apexcharts.com/">https://apexcharts.com/</a></li>
      <li>Node.js</li>
  </ul>

  <h2>Known Bugs</h2>
  <ul>
      <li>When click the Start Animation twice in a sequence, the pause button doesn’t function</li>
      <li>The legend could not be automatically hidden when switch to another mapping layer</li>
      <li>The full screen button icon is not displayed properly in some screen sizes</li>
      <li>The risk level data has too many addresses, I haven’t finished geocode them all. So some date, especially after November 2023, is not able to be displayed properly</li>
  </ul>

  <h2>Deployment</h2>
  <p>
      I am hosting my files on <a href="https://www.vpsor.cn/">https://www.vpsor.cn/</a> web hosting service. This server is linked to my personal domain. I used FTP to upload the web page and related files into web/covidriskmap. There is no related Database.
  </p>

  <h2>Credits and Acknowledgment</h2>
  <ul>
      <li>Timeline: <a href="https://codepen.io/alvarotrigo/pen/MWEgejK">https://codepen.io/alvarotrigo/pen/MWEgejK</a></li>
      <li>Navbar: <a href="https://codepen.io/ceomaverick/pen/PooZevQ">https://codepen.io/ceomaverick/pen/PooZevQ</a></li>
      <li>Carousel: <a href="https://getbootstrap.com/docs/5.2/components/carousel/">https://getbootstrap.com/docs/5.2/components/carousel/</a></li>
      <li>Slider: <a href="https://www.w3schools.com/howto/howto_js_rangeslider.asp">https://www.w3schools.com/howto/howto_js_rangeslider.asp</a></li>
      <li>Calendar: <a href="https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js">https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js</a></li>
  </ul>
</main>

<style>
    img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 5px; /* Optional: for rounded corners */

    }
    ul {
        margin-left: 20px;
    }
    li {
        margin-bottom: 10px;
    }
    h2 {
        margin-top: 40px;
    }

    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>
