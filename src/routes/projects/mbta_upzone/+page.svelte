<svelte:head>
    <title>MBTA Upzone +</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
</script>

<main>
    <h1>MBTA Upzone +</h1>
    <h2>6.C85 Final Project</h2>
    <h2>
        <a href="https://srcjin.github.io/vis-final/" target="_blank">Live Demo</a>
    </h2>

    <h3>Collaborator: Juan Atehortua Paredes, Chenan Shen, Yining Bei </h3>

    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/j7f_YoQA1ww?si=hplz09Ej6V1o-BSi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    <h2>Abstract</h2>

    <div class="content">
        <div class="text-full">
            <p>
                The "MBTA Upzone+" project offers an innovative interactive tool designed to visualize and explore the implications of the Massachusetts Bay Transportation Authority (MBTA) Communities Act, which aims to mitigate housing shortages by promoting multi-family zoning near transit stations. Focusing on the town of Milton, MA, the project aims to provide a comprehensive view of potential upzoning impacts. This project targets residents of Milton and the general public, aiming to enhance their understanding of transit-oriented development and encourage support for sustainable urban planning solutions. This tool fosters informed community participation and demonstrates the potential of interactive decision-making and visualization tools for the public sector.
            </p>
        </div>
    </div>

    <h2>Background</h2>

    <h3>Problem Statement</h3>

        <div class="text-full">
            <p>
                The MBTA Communities Act is designed to address the housing shortage in Massachusetts by mandating the creation of zoning districts for multi-family housing in communities served by the Massachusetts Bay Transportation Authority. This law aims to increase housing availability, reduce sprawl, and enhance public transit usage by encouraging development near transit stations.
            </p>
            <p>
                However, Milton has expressed resistance to this act. In February, residents of Milton voted against a zoning plan previously approved by the Town Meeting (Fig. 1). Consequently, the town is now facing a lawsuit from Attorney General Andrea Campbell for not meeting the December 31, 2023, compliance deadline. In fact, despite the compliance of most MBTA communities, Milton is one of only two MBTA communities that have not complied with the requirements. Local opposition stems from concerns about increased density and its potential impacts on the town’s character and infrastructure.
            </p>
            <p>
                This project expands on the upzone plan originally proposed by Milton, incorporating various data sources and interactive elements. The objective is to enhance the tool’s capability to deliver comprehensive information, allowing users to visualize and better understand the upzone plan.
            </p>

        <div class="image-full">
            <img src= "{base}/images/projects/mbta_upzone/image1.png" alt="Placeholder for Fig 1" />

    </div>

    <h3>About MBTA Communities ACT</h3>
    <div class="content">
        <div class="text-left">
            <p>
                "MBTA communities" are 65 cities and towns that host MBTA service. Motivation: an MBTA community shall have at least one zoning district of reasonable size in which multi-family housing is permitted as of right.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image10.png" alt="Placeholder for About MBTA Communities ACT" />
        </div>
    </div>

    <h3>Target Audience</h3>
    <div class="content">
        <div class="text-full">
            <p>
                <strong>Audience:</strong> Residents in Milton and the general public, including local residents and newcomers. <br>
                <strong>Goal:</strong> The main objectives are to visualize the advantages of transit-oriented development and to clarify the concept of an up-zoned built environment. <br>
                <strong>Takeaway Message:</strong> The upzone density requirement is not far from the current density. Developing areas around transit stations can greatly enhance accessibility to essential urban resources. An effective transportation system can be achieved by increasing residential density near transit stations, encouraging more people to utilize public transit.
            </p>
        </div>
    </div>
    
    <h2>Design Decision</h2>

    <h3>Decision 1: Scrolly-Telling Intro Page</h3>
    <div class="content">
        <div class="text-left">
            <p>
                In designing the introduction page, our goal was to create a seamless and engaging user experience through simple scrolling. The page layout starts with charts that set the stage by detailing the background and the specific housing challenges. These visuals guide the audience to a navigation button at the end of the page, which leads to the main interactive map, encouraging exploration and engagement.
            </p>
            <p>
                We tried to incorporate visual elements into each section, including the explanation of the MBTA Act. This visual strategy is aimed at keeping the content light and digestible, preventing reader fatigue from lengthy text blocks.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image00.png" alt="Placeholder for Scrolly-Telling Intro Page" />
        </div>
    </div>

    <h3>Decision 2: Slider</h3>
    <div class="content">
        <div class="text-left">
            <p>
                In the interactive map page, the slider is a pivotal feature. It serves two main functions: allowing users to adjust the number of units on each selected parcel and providing detailed information about those parcels. The slider's minimum value indicates the current number of units in a selected parcel, while the gray range highlights the density gap between the current state and the MBTA's required density of 15 units per acre.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image2.png" alt="Placeholder for Fig 2" />

        </div>
    </div>

    <h3>Decision 3: Side Panel</h3>
    <div class="content">
        <div class="text-left">
            <p>
                Another significant feature in the interactive map is the side panel. This is where the distribution of each selected parcel's density will be displayed according to each sub-district. The scatter plot reactively shows the different nature of different upzone sub-districts and also integrates visual representations of corresponding building types for each density level, such as the front-gabled roof.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image3.png" alt="Placeholder for Fig 3" />

        </div>
    </div>

    <h3>Decision 4: Transit View</h3>
    <div class="content">
        <div class="text-left">
            <p>
                To emphasize the importance of the MBTA stations in the MBTA Communities Act, we allow the user to click on any station to show our "transit view" visualization. This consists of the map zooming out, showing points of interest (POI) around Boston (hospitals, schools, libraries, etc.), and showing the 15, 30, and 60-minute isochrones originating from the station.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image4.png" alt="Placeholder for Fig 4" />

        </div>
    </div>

    <h3>Decision 5: Interactive Tutorial</h3>
    <div class="content">
        <div class="text-left">
            <p>
                To guide the user in learning to use the tool interactively, we designed a tutorial component for the application. This tutorial is a vibrant, step-by-step journey to empower new users to effectively navigate and utilize the tool by understanding its zoning laws and transportation system.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image5.png" alt="Placeholder for Fig 5" />

        </div>
    </div>

    <h2>Data Analysis</h2>

    <div class="content">
        <div class="text-full">
            <p>
                We focus mainly on Milton and visualize the upzoning household-job dynamics in relation to public transport commute time. We use the US Census LODES Dataset [2] filtered to jobs where the employee lives in Milton. When we upzone a parcel, we calculate the commute of the new residents by computing the isochrone centered around the parcel for 15, 30, and 60 minutes on public transportation from TravelTime API [3]. We sample randomly 1000 times from filtered jobs data and aggregate the jobs within each isochrone to generate our commute estimates. (<a href="https://colab.research.google.com/" target="_blank">Data Processing Colab</a>)
            </p>
        </div>
    </div>

    <h3>Result 1: Housing Crisis in Milton</h3>

    <div class="content">
        <div class="text-left">
            <p>
                In addressing the pressing housing crisis in Boston, our analysis begins by comparing single-family home prices across MA with those in the broader U.S. market. The data reveal that prices in Massachusetts have escalated to nearly double the national average, highlighting a severe housing crisis within the state. Zooming in on Milton, we observe a stark contrast in housing production trends over the decades. Despite the rising prices, new housing development has sharply declined, with the majority of homes built before 1980. This drop in production exacerbates the housing scarcity, further inflaming market prices.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image6.png" alt="Placeholder for Fig 6" />
        </div>
    </div>

    <div class="content">
        <div class="text-left">
            <p>
                After explaining the MBTA Act, which is a legislative effort to address these challenges, our analysis of compliance across these municipalities shows a mixed response, with Milton being one of the two towns that rejected the act. Overall, before the audience interacts with our map, it is essential to understand the housing problem and why our focus is specifically on Milton. This backdrop ensures a clear context as users explore the interactive elements.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image7.png" alt="Placeholder for Fig 7" />
        </div>
    </div>

    <h3>Result 2: Feasibility</h3>

    <div class="content">
        <div class="text-full">
            <p>
                The tool's analysis highlights that the upzone plan is highly feasible. For instance, in the Eliot Street Corridor, despite the substantial gap between current density and the MBTA's required density of 15 units per acre, most parcels are small, with a maximum unit limit of three. This limitation ensures that the unique characteristics of the district remain intact. Conversely, Milton Ave and East Milton Square have the capacity for much higher densities, which can balance the lower-density areas and meet the MBTA Act's overall average density requirement.
            </p>
        </div>
    </div>

    <div class="content">
        <div class="text-left">
            <p>
                The scatter plot reflects that a significant portion of parcels in the upzoning districts already exceed the required 15 units per acre, underscoring that upzoning is feasible and unlikely to disrupt the district's character. This balance suggests that strategic upzoning can alleviate density pressures in certain areas while preserving the overall characteristics of the community.
            </p>
        </div>
        <div class="image-right">
            <img src= "{base}/images/projects/mbta_upzone/image8.png" alt="Placeholder for Density Visualizer" />
        </div>
    </div>

    <h3>Result 3: Resource Accessibility</h3>

    <div class="content">
        <div class="text-full">
            <p>
                By aggregating important resource locations in the map and examining the driving and public transport isochrones in different locations around Boston, we see that locations close to MBTA stations have comparable commute times to said resources when taking public transportation vs driving. This is in contrast to areas in the Boston area with little accessibility to public transport, where the difference in commute time to reach resources like hospitals and libraries becomes much more stark between the modes of transportation.
            </p>
            <p>
                This further provides reasoning on the responsibility that MBTA communities like Milton have to upzone areas around the stations.
            </p>
        </div>
    </div>

    <h2>Project Reflection</h2>

    <div class="content">
        <div class="text-full">
            <p>
                Reflecting on this project, we realized that the interactive tool has the potential to significantly enhance community engagement and understanding of urban planning proposals. The incorporation of interactive features like sliders provided a user-friendly way to explore complex zoning information, which likely increased accessibility and clarity for all users, including those less familiar with such data.
            </p>
            <p>
                Our approach to integrating detailed visual representations of potential developmental impacts helped demystify the rezoning process and showcased how proposed changes could realistically affect the community. This project also highlighted the importance of community input and the potential for visual tools to facilitate more informed discussions.
            </p>
            <p>
                These lessons underscore the value of merging technical data analysis with user-friendly interfaces to foster broader community involvement and support. As we look forward to future projects, applying these insights can guide more effective and engaging data storytelling efforts, especially in contexts like local government or community-focused initiatives where clear communication and public participation are crucial.
            </p>
        </div>
    </div>

    <h2>References</h2>
    <ul>
        <li><a href="https://www.mass.gov/info-details/multi-family-zoning-requirement-for-mbta-communities" target="_blank">[1] Multi-Family Zoning Requirement for MBTA Communities | Mass.gov</a></li>
        <li><a href="https://lehd.ces.census.gov/data/" target="_blank">[2] US Census Bureau Center for Economic Studies Publications and Reports Page</a></li>
        <li><a href="https://docs.traveltime.com/api/reference/isochrones-fast" target="_blank">[3] Isochrones (Fast) API Reference Page | TravelTime API Documentation</a></li>
    </ul>
</main>



<style>
    .content {
        display: flex;
        align-items: flex-start; /* Ensures both text and image are aligned at the top */
        margin-bottom: 2rem;
    }

    .text-full {
        width: 100%;
        padding-right: 1rem;
    }

    .text-left {
        width: 66%;
        padding-right: 1rem;
    }

    .image-right {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-full {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-right img {
        max-width: 100%;
        height: auto;
    }

    .image-full img{
        max-width: 100%;
    }
</style>