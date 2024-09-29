<svelte:head>
  <title>Contact me</title>
</svelte:head>

<script>
  import { base } from "$app/paths";
</script>


<main>

  <img src="{base}/images/Jin_Gao_CV_2024_TA.png" alt="CV_1" />

  <h2>Contact me</h2>

  <form id="contactForm" action="mailto:gaojin@mit.edu" method="GET">
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" placeholder="subject" />
    </div>
    <div class="form-group">
      <label for="body">Message:</label>
      <textarea id="body" name="body" placeholder="Enter your message"
      ></textarea>
    </div>
    <button type="submit">Send</button>
  </form>

  <!-- <img src="{base}/images/Jin_Gao_CV_2024_1.png" alt="CV_1" />
  <img src="{base}/images/Jin_Gao_CV_2024_2.png" alt="CV_1" /> -->


</main>

<style>
  h1,
  h2 {
    color: #333;
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
  }

  mytitle,
  bgtitle {
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }
  smtitle {
    display: block;
    font-style: italic;
    margin-top: 5px;
  }
  time {
    display: block;
    font-weight: bold;
    color: #555;
    margin-top: 5px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    font-weight: bold;
  }
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
