<svelte:head>
<title>Contact me</title>
</svelte:head>


<h1>CV</h1>


<h1>Contact me</h1>

<form id="contactForm" action="mailto:gaojin@mit.edu" method="GET">
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" placeholder="subject" />
    </div>
    
    <div class="form-group">
      <label for="body">Message:</label>
      <textarea id="body" name="body" placeholder="Enter your message"></textarea>
    </div>
    
    <button type="submit">Send</button>
  </form>

  