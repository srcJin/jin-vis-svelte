<svelte:head>
  <title>Urban Mediators</title>
</svelte:head>

<main>
  <h1>Urban Mediators</h1>
  <h2>An AI-driven multi-stakeholder urban planning game</h2>

  <h3>Individual Project</h3>

  <img
    class="img-small"
    src= "{base}/images/projects/urban_mediators/urban_mediators1.jpg"
    alt="Urban Mediators Game Visual"
  />

  <p>
    Urban Mediators is a web-based strategic board game for 3-8 players,
    designed to immerse you in the complexities of urban planning and
    management. Each game lasts between 90 to 120 minutes, during which players
    role-play as city decision-makers striving to develop the city through
    resource management, policy making, and crisis resolution.
  </p>

  <img
    src= "{base}/images/projects/urban_mediators/urban_mediators.gif"
    alt="Urban Mediators Game Visual"
  />

  <h2 style = "text-align: center">
    <a href="https://urban-mediators-frontend.onrender.com/" target="_blank"
      >Live Demo</a
    >
  </h2>

  <h2>Game Components</h2>

  <img
    class="img-small"
    src= "{base}/images/projects/urban_mediators/urban_mediators2.png"
    alt="Urban Mediators Game Visual"
  />

  <ul>
    <li>
      Game Board: A configurable 10x10 grid that maps out buildable areas,
      existing structures, and natural features like water and mountains.
    </li>

    <img
      class="img-small"
      src= "{base}/images/projects/urban_mediators/urban_mediators10.png"
      alt="Urban Mediators Game Visual"
    />

    <li>
      Role Cards: Detail the responsibilities and powers of various city roles,
      including the Mayor, Bank Manager, Developer, Urban Planner, Community
      Mediator, Environmentalist, Artist, and Lawyer.
    </li>

    <img
      src= "{base}/images/projects/urban_mediators/urban_mediators3.png"
      alt="Urban Mediators Game Visual"
    />



    <li>
      Action Cards: Provide specific actions that each role can execute to
      influence the game dynamics.
    </li>
    <li>
      Event Cards: Introduce city-wide economic, environmental, or social events
      that all players must address.
    </li>
    <li>
      Project Cards: Represent construction projects like residential buildings
      and commercial centers that can be initiated within the city.
    </li>
  </ul>

  <h2>Setup and Gameplay</h2>

  <img
    src= "{base}/images/projects/urban_mediators/urban_mediators5.png"
    alt="Urban Mediators Game Visual"
  />

  <p>
    The game starts by setting up the city map, assigning roles and distributing
    initial resources based on the roles. Players then proceed through rounds
    that consist of several phases:
  </p>
  <ol>
    <li>
      Update Phase: New macroeconomic information is revealed, impacting city
      statistics such as population growth and tax rates. An event card is drawn
      and its effects are addressed.
    </li>
    <li>
      Action Phase: Players act in turn according to their role cards, making
      strategic decisions to develop the city and achieve their personal and
      collective objectives.
    </li>

    <img
    src= "{base}/images/projects/urban_mediators/urban_mediators4.png"
    alt="Urban Mediators Game Visual"
  />


    <li>
      Negotiation and Voting Phase: Players discuss proposed projects and
      policies and use negotiation chips to gain support. Decisions are made
      through collective voting, often requiring legal checks by the Lawyer
      role.
    </li>
    <img
    class="img-small"
    src= "{base}/images/projects/urban_mediators/urban_mediators6.png"
    alt="Urban Mediators Game Visual"
  />

    <li>
      Implementation Phase: Decisions are enacted, altering the city's various
      metrics and updating the players' resource states.
    </li>
    <li>
      Round Conclusion: Check if any player has met the game's victory
      conditions, such as achieving certain levels of population satisfaction or
      economic performance. If not, prepare for the next round.
    </li>
  </ol>

  <h2>Game Modes and Victory Conditions</h2>
  <p>Urban Mediators can end in two main ways:</p>
  <ul>
    <li>
      Collective Victory: All players win by achieving the city's macro goals
      within a set number of rounds. Players are ranked based on their
      contributions and the achievement of personal goals.
    </li>
    <li>
      Individual Victory: More competitive; players strive to complete personal
      objectives before others. If no one achieves their goals by the final
      round, the player closest to their goals wins.
    </li>
  </ul>
</main>

<style>
  img {
    width: 100%;
    height: auto;
    margin: 20px auto; /* Center the image horizontally */
    display: block; /* Ensure the image is treated as a block element */
  }

  .img-small {
    width: 50%;
    height: auto;
    margin-top: 20px;
  }
</style>
