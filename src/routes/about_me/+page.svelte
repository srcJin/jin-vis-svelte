<svelte:head>
  <title>Contact me</title>
</svelte:head>

<script>
  import { base } from "$app/paths";
</script>


<main>
  <mytitle>Jin Gao</mytitle>
  <h1>Contact me</h1>

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

  <h1>CV</h1>
  <h2>Education</h2>
  <bgtitle>Massachusetts Institute of Technology</bgtitle>
  <smtitle>Cambridge, MA, USA</smtitle>
  <time>Sep 2021 – Exp. 2025</time>
  <ul>
    <li>
      Master of Science of Architecture Studies (SMArchS): Architecture and
      Urbanism
    </li>
    <li>
      Pursue a Dual Degree in Master of Electrical Engineering and Computer
      Science
    </li>
    <li>
      Courseworks: City Science (A+), AI, Decision Making and Society (A+),
      Tangible Interface (A+), Software Design (A)
    </li>
    <li>
      Teaching Assistant for 4.032/4.033 Information Design and Visualization
      with Ben Fry
    </li>
  </ul>

  <bgtitle>Chongqing University</bgtitle>
  <smtitle>Chongqing, China</smtitle>
  <time>Sep 2015 – Jun 2020</time>
  <ul>
    <li>
      Bachelor of Architecture, GPA: 3.86/4.0, Ranking: 2/127, Average Grade:
      90.11/100
    </li>
  </ul>

  <bgtitle>Politecnico di Milano</bgtitle>
  <smtitle>Milan, Italy</smtitle>
  <time>Sep 2017 – Mar 2018</time>
  <ul>
    <li>Exchange Student in Architectural Design, Average Grade: 28/30</li>
  </ul>

  <bgtitle>Short-Term Educations</bgtitle>
  <ul>
    <li>
      Trent Global College, Software Development Bootcamp <smtitle
        >Sep 2022 – May 2023</smtitle
      >
    </li>
    <li>
      National University of Singapore: Summer Program <smtitle
        >Jul 2018</smtitle
      >
    </li>
    <li>
      Hong Kong University: City Metamorphosis Summer Program <smtitle
        >Aug 2018</smtitle
      >
    </li>
  </ul>

  <h2>Professional Experience</h2>
  <bgtitle>Product Intern</bgtitle> <smtitle>Unity Technologies</smtitle>
  <time>Jul 2023 – Sep 2023</time>
  <ul>
    <li>
      Product development and management of 3D interactive maps and navigation
      solutions for future electric vehicles using Unity software.
    </li>
  </ul>

  <bgtitle>AI Research Intern</bgtitle> <smtitle>Digital Blue Foam</smtitle>
  <time>Oct 2022 – Mar 2023</time>
  <ul>
    <li>
      Developed an AI-powered online platform for the urban and building
      industry. Led product design, management, and prototype development.
    </li>
  </ul>

  <bgtitle>Volunteer Architect</bgtitle>
  <smtitle>Bridge to China, Hong Kong</smtitle> <time>Jun 2019 – Apr 2022</time>
  <ul>
    <li>
      Conducted project from initial design to final construction for Du'an
      Charity Canteen, Guangxi. Key cooperator between different stakeholders.
    </li>
  </ul>

  <bgtitle>Intern Designer</bgtitle> <smtitle>URBANUS Shenzhen Office</smtitle>
  <time>Mar 2021 – Jun 2021</time>
  <ul>
    <li>
      Urban Design Research of Urban Village in Shenzhen. Computational Façade
      Development using Grasshopper.
    </li>
  </ul>

  <bgtitle>Intern Architect</bgtitle>
  <smtitle>Land-Based Rationalism DRC (Cui Kai Office), CADG</smtitle>
  <time>Oct 2019 – Jan 2020</time>
  <ul>
    <li>
      Schematic Design of 2021 Nanjing International Horticultural Expo, Future
      Garden. Design development of Dinosaur Museum Project, Yunyang, Chongqing.
    </li>
  </ul>

  <h2>Selected Awards</h2>
  <ul>
    <li>MIT Intro to Deep Learning Pitch Silver Prize <time>2024</time></li>
    <li>Young Climate Prize (25 winners worldwide) <time>2023</time></li>
    <li>ULI Urban Design Competition - Finalist Award <time>2022</time></li>
    <li>MIT Graduate Student Fellowship <time>2021</time></li>
    <!-- Additional awards go here -->
  </ul>

  <h2>Skills</h2>
  <ul>
    <li>
      Language: Mandarin, English (TOEFL 110, IELTS 7.5, GRE: 329 (159+170+3.5))
    </li>
    <li>
      Design & Visualization: Adobe Suite, Rhino, Grasshopper, Sketchup,
      ArchiCAD, Lumion, Vray, KUKA, Unity, Figma
    </li>
    <li>Data Analysis: ArcGIS Pro, QGIS, Excel</li>
    <li>
      Programming: JavaScript (Three.js, Vue, Express, MySQL, MongoDB), Python
    </li>
  </ul>

  <h2>Publication & Presentations</h2>
  <bgtitle>AI Agent as Urban Planner</bgtitle>
  <ul>
    <li>
      Steering Stakeholder Dynamics in Urban Planning via Consensus-based
      Multi-Agent Reinforcement Learning. Under peer review UAI.
    </li>
  </ul>

  <bgtitle>From Sketch to Design</bgtitle>
  <ul>
    <li>
      A Cross-scale Workflow for Procedural Generative Urban Design. First
      Author, Full paper accepted, CAADRIA 2024.
    </li>
  </ul>

  <!-- Continue with other publications and presentations -->

  <h2>Research Experience</h2>
  <bgtitle>Researcher</bgtitle> <smtitle>Tongji-MIT City Science Group</smtitle>
  <time>Jun 2023 – Present</time>
  <ul>
    <li>
      Applied multi-agent reinforcement learning research with computer
      scientists and urban planners.
    </li>
  </ul>

  <h2>Extra-Curriculum & Volunteer</h2>
  <bgtitle>Smart CLT Workshop</bgtitle> <time>Jun 2023</time>
  <ul>
    <li>
      Digital Future 2023. Reinventing CLT material sustainably with MIT
      Senseable City Lab and Carlo Ratti Studio.
    </li>
  </ul>

  <bgtitle
    >A Co-Design Experience: Technologies for Rural Sustainability in Colombia</bgtitle
  > <time>Jan 2022 – Oct 2022</time>
  <ul>
    <li>
      Optimization and monitoring of beehives in rural Colombia with MIT Media
      Lab Space Enabled Group.
    </li>
  </ul>

  <h2>Groups & Leadership</h2>
  <bgtitle>Co-president</bgtitle>
  <smtitle>MIT China SA+P Student Association</smtitle>
  <time>Oct 2021-Present</time>
  <ul>
    <li>Organized semester-long lecture series and community events.</li>
  </ul>

  <bgtitle>Member</bgtitle>
  <smtitle>MIT China Student and Scholar Association</smtitle>
  <time>Sep 2021-Present</time>
  <ul>
    <li>Continuing involvement in association activities.</li>
  </ul>
</main>

<style>
  main {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  h1,
  h2 {
    color: #333;
    font-weight: bold;
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
