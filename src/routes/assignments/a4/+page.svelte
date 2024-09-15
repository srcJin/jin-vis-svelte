<svelte:head>
<title>Assignment 4</title>
</svelte:head>

<header>
    <h1>
        <small>Assignment 4</small>
        Persuasive or Deceptive Visualization?
    </h1>

    <p><strong>Jin Gao</strong> - <em>gaojin@mit.edu</em></p>
</header>

<main>

    <h2>Proposition: Is Police Misconduct a Group Practice Influenced by Peer Practices?</h2>
    <p>
        <b>The New York police system is a vast interpersonal network with
            complex social relationships. In the process of law enforcement, the
            role played by the police is not merely individual but reflects
            collective decision-making.
        </b>
    </p>
    <p>Based on the given data, I am interested in exploring:</p>

    <ul>
        <li>
            Is there a correlation between police interpersonal relationships and
            social networks and their misconduct?
        </li>
        <li>
            Do more experienced police officers have a higher common rate of
            misconduct?
        </li>
        <li>
            In neighboring jurisdictions, where police social connections are
            stronger, is there a higher rate of collective misconduct?
        </li>
    </ul>
    <p>
        Can we use Persuasive and Deceptive Visualization to express conflicting
        viewpoints, namely:
    </p>
    <ul>
        <li>
            New York police misconduct is collective, with some police misconduct
            being contagious, meaning some areas' police have a higher rate of
            misconduct, while other "cleaner" police groups are not inclined to
            misconduct.
        </li>
        <li>
            New York police misconduct is individual, their decisions and the
            society they are in are unrelated.
        </li>
    </ul>
</main>

<main>
    <h2>Background Information</h2>
    <p> These are background information extend the given data to better </p>

    <figure>
        <img src="/images/a4/new_york_police_hierarchy.png" alt="The Hierarchy of the New York Police System"
            class="image-xxl" />
        <figcaption>The Hierarchy of the New York Police System.</figcaption>
    </figure>
    <p>
        This diagram provides a detailed view of the organizational structure
        within the NYPD. It is critical for us to understand the hierarchy
        between officers.
    </p>
    <ref>References:
        <a href="https://glloverov.xyz/product_details/26536766.html">GLLoverov</a>,
        <a href="https://en.wikipedia.org/wiki/Organization_of_the_New_York_City_Police_Department">Wikipedia -
            Organization of the NYPD</a>
    </ref>

    <!-- New York Precincts Mapping -->
    <figure>
        <img src="/images/a4/GIS.png" alt="New York Precincts Mapping" class="image-m" />
        <figcaption>New York Precincts Mapping</figcaption>
    </figure>
    <p>
        Linking geographical data to New York Police Precincts provides an
        intuitive visualization that relates directly to urban spaces, offering
        a new layer of insight into the spatial distribution of police
        activities and complaints.
    </p>
    <ref>Reference:
        <a href="https://data.cityofnewyork.us/Public-Safety/Police-Precincts/78dh-3ptz">NYC Open Data - Police
            Precincts</a>
    </ref>
</main>

<main>
    <h2>Exploratory Data Visualization</h2>
    <p>
        Here I collected some existing figure and my new figures showing the
        general picture of the data
    </p>

    <figure>
        <img src="/images/a4/case_study_1.png" alt="Case Study 1: Analysis of Complaints in Major US Cities"
            class="image-m" />
        <figcaption>
            <strong>Case Study 1:</strong> Analysis of Complaints in Major US
            Cities. This case study highlights that a small share of US police
            officers are responsible for a third of complaints in large cities.
        </figcaption>
    </figure>
    <p>
        This detailed analysis reveals significant disparities in police conduct
        across major urban areas, prompting discussions on accountability and
        reform.
    </p>
    <ref>Reference:
        <a
            href="https://www.reddit.com/r/dataisbeautiful/comments/hyiot3/oc_nypd_complaint_records_source_propublica/">Reddit
            - DataIsBeautiful</a>
    </ref>

    <figure>
        <img src="/images/a4/case_study_2.jpg" alt="Case Study 2: Average Time an NYPD Complaint Remains Open"
            class="image-m" />
        <figcaption>
            <strong>Case Study 2:</strong> Average Time an NYPD Complaint Remains
            Open. This visualization offers insights into the resolution timeline
            for complaints filed against NYPD officers.
        </figcaption>
    </figure>
    <p>
        The study provides a critical examination of the procedural delays in
        addressing complaints, highlighting areas for improvement in police
        accountability mechanisms.
    </p>
    <ref>Reference:
        <a
            href="https://www.reddit.com/r/dataisbeautiful/comments/hyiot3/oc_nypd_complaint_records_source_propublica/">Reddit
            - DataIsBeautiful</a>
    </ref>

    <!-- Additional Case Studies (Assuming similar to Case Study 2) -->
    <figure>
        <img src="/images/a4/case_study_3.jpg" alt="Further Analysis on NYPD Complaints" class="image-m" />
        <figcaption>
            Further examinations reveal consistent patterns in the average time an
            NYPD complaint remains open, underscoring systemic issues in complaint
            resolution processes.
        </figcaption>
    </figure>
    <!-- Reference similar to Case Study 2 -->
</main>

<main>
    <h2>Persuasive Drawing</h2>

    <section>
        <figure>
            <img src="/images/a4/persuasive.png" alt="" />
            <figcaption>
                The Police Misconduct is a Collective Practice Influenced by Their Surroundings : a Drawing
                Highlighting Dinstive Precinct Social Networks
            </figcaption>
        </figure>

        <h3 style="text-align: center;">
            <a href="/projects/police_misconduct">Click here for the animated version</a>
          </h3>

        <h3>Design Decisions and Rationale:</h3>

        <ul>

            <li> (+0.5) Complexity inside simplicity: This is a complex chart with more than 200 dots and 1000 connections.
                I want to use this chart to draw the underlying social network and their influences of collective
                misconduct. To Disjointed force charts can effectively depict complex networks with numerous nodes
                and connections,
                which is suitable for representing the intricate relationships within a police department. It allows
                the viewer to see how cases are distributed across different precincts without becoming overwhelmed
                by the details of each connection.</li>
            <li>
                (+1) Expressing hierarchy through direct visualized languags: In this chart, police officer with higher
                number of abuse will have bigger circles, and the darker the color is, the higher level they are.
            </li>

            <figure>
                <img src="/images/a4/persuasive_detail.png" alt="" class="image-m" />
                <figcaption>
                    An extract of a typical social network in a precinct to help explain this drawing. It shows how
                    the police officers are organized and their inner connections between people. Each dot represent
                    one police officer. The large dots represent a larger number of misconduct.
                </figcaption>
            </figure>

            <li>(+2) Visualization of Collective Behavior: By clustering cases around precincts, the design
                underscores
                the concept that misconduct is not an isolated incident but a collective behavior that can be
                influenced by an officer's immediate environment and culture within their precinct.</li>
            <li>(+1) Highlighting of Problematic Precincts: Circles with a distinctive dotted outline can signify
                precincts
                with a higher number of cases, thus drawing attention to potential hotspots of misconduct and
                suggesting a need for targeted reforms or interventions.</li>
            <li>(+2) Protect the police officer's personal information: This drawing shows the the top 5 person on
                numbers of misconduct. Technically I can show their name, but I hide them by only show which
                pcecinct they come from and the count of their misconduct. This is to highlight the top dots while
                keeping the sensitive information. </li>
        </ul>


    </section>

    <section>
        <h2>Deceptive Drawing</h2>

        <figure>
            <img src="/images/a4/deceptive2.png" alt="" />
            <figcaption>
                The Police Misconduct is Only a Small Scale Individual Practice, Not Directly Influenced by
                Their Work Social Networks in Particular Precincts
            </figcaption>
        </figure>


        <h3>Design Decisions and Rationale:</h3>

        <ul>
            <li> This is a deceptive drawing that misguides people to focus more on innocent polices instead
                of the misconducted ones. I want to stress the idea that the policeman's misconduct is not a
                collective practice. The police officers who lead on misconduct behaviors does not cluster,
                instead, they are distributed everywhere in New York. So I draw a percentage bar chart deliberately
                hide their inner social connections and absolute value.

            </li>
            <li>(-1) Deceptive Positions: In this deceptive chart, I intentionally bring the total number of police
                members in the chart, and place "no abuse" to the visual center. In this way, people's attention
                will first focus on "no abuse", then the police who have misconduct behaviors. I also diliberately
                separate the junior and senior positions, placed them on top and bottom of the "no abuse" bar, to
                disguide people the even if there are problem, it should be the junior level's problem, not the
                seniors'. In fact, it mislead people to avoid the fact that the number of senior member is much less
                than juniors, and their effect of misconduct is much more severe than juniors.
            </li>

            <li>(-2) Deceptive Color: The color palette has been intentionally adjusted to disguide people. The
                large porportion is grey, and the misconduct junior level officers are colored to a calming color
                blue, only the senior level, which has marginal porportion to the total numbers, is colored in red.
                This treatment guide people to focus on no abuse first, and treat "junior" not as serious as it
                should be, leading people to
                easily conclude that "no abuse is the common practice" so this may not be related to the social
                atmosphere of a few specific precincts.
            </li>

            <li>(-1) Deceptive Data Processing: I intentionally set the Y-axis as a percentage, rather than an
                absolute value, to narrow down the visual percentage of misconduct in police departments with a
                large number of members. Comparing the absolute value chart below, we can see that the proportion of
                misconduct appears to be larger, because the larger the police station, the more likely it is that
                there will be a higher number of misconduct, and the easier it is to attract attention and
                vigilance.
            </li>
            <figure>
                <img src="/images/a4/deceptive2-ref.png" alt="" class="image-l" />
                <figcaption>
                    Reference chart for using absolute value as y axis
                </figcaption>
            </figure>
            <ref>
                Additional Data Source for Total Police Members:
                https://app.powerbigov.us/view?r=eyJrIjoiOGNhMjVhYTctMjk3Ny00MTZjLTliNDAtY2M2ZTQ5YWI3N2ViIiwidCI6IjJiOWY1N2ViLTc4ZDEtNDZmYi1iZTgzLWEyYWZkZDdjNjA0MyJ9
            </ref>
        </ul>
    </section>
</main>

<main>
    <h2>Data Transformation:</h2>
            <h3>Step1: extract core data related to social network and police's information</h3>

    <figure>
        <img src="/images/a4/processing1.png" alt="" class="image-l" />
        <figcaption>
            Step1: extract core data related to social network and police's information
        </figcaption>
    </figure>
    <p>1. Retain unique_mos_id for further data linkage (vlookup) usage</p>
    <p>2. Transform each person's case into one line, with catagories </p>
    <p> We found that the fedo_type has four catagories : Abuse of Authority, Discourtesy, Offensive Language,
        Force. We can pivot the data into one line as an attribute of the person.
    </p>
    <h4>Data Processing Code for Step 1: Data Pivoting</h4>

    <!-- <pre><code class="language-python">
            import pandas as pd

            # Load the uploaded CSV file
            file_path = "process1.csv"
            data = pd.read_csv(file_path)

            fado_types = ["Abuse of Authority", "Discourtesy", "Offensive Language", "Force"]


            # Calculate the most common precinct and rank_incident for each Full Name
            data["precinct"] = data.groupby("full_name")["precinct"].transform(
                lambda x: x.mode()[0]
            )
            data["rank_incident"] = data.groupby("full_name")["rank_incident"].transform(
                lambda x: x.mode()[0]
            )
            data["shield_no"] = data.groupby("full_name")["shield_no"].transform(
                lambda x: x.mode()[0]
            )

            # Now we'll pivot the data again with this simplification
            simplified_data = pd.DataFrame()

            for name, group in data.groupby("full_name"):
                record = {
                    "full_name": name,
                    "shield_no": group["shield_no"].iloc[0],  # Most common precinct
                    "precinct": group["precinct"].iloc[0],  # Most common precinct
                    "rank_incident": group["rank_incident"].iloc[0],  # Most common rank_incident
                    "mos_age_list": group["mos_age_incident"].unique().tolist(),
                }

                # For each fado type, compile IDs and counts
                for fado_type in fado_types:
                    fado_group = group[group["fado_type"] == fado_type]
                    record[f"{fado_type}_ids"] = fado_group["unique_mos_id"].tolist()
                    record[f"{fado_type}_count"] = len(fado_group)

                record_df = pd.DataFrame([record])

                simplified_data = pd.concat([simplified_data, record_df], ignore_index=True)

            # Rename columns to match the requested format more closely
            simplified_data.columns = simplified_data.columns.str.replace(" ", "_").str.replace(
                "of_Authority", "of_Authority"
            )

            # Save the simplified DataFrame to a new CSV file
            output_file_path_simplified = "pivoted_data.csv"
            simplified_data.to_csv(output_file_path_simplified, index=False)

            output_file_path_simplified

        </code></pre> -->

    <figure>
        <img src="/images/a4/processing2.png" alt="" class="image-xxl" />
        <figcaption>
            Step1 Result: pivoted data
        </figcaption>
    </figure>
            <h3>Step2: ranking and grouping according to its prescient number and rank incident.</h3>

    <figure>
        <img src="/images/a4/processing3.png" alt="" class="image-m" />
        <figcaption>
            Step2: ranking and grouping according to its prescient number and rank indecent.
        </figcaption>
    </figure>
    <p>After removing zero data and extreme data(we have an officer withprecinct 1000!), we get a cleaner table
        with police officer's name, their beloning precient, their rank and their total abuse count. </p>

        <h3>
            Step3: Small scale test for disjoint graph visualization</h3>
    <figure>
        <img src="/images/a4/processing4.png" alt="" class="image-s" />
        <figcaption>
            Step3 Result</figcaption>
    </figure>
    <p>Adjusted Data Structure for our disjoint forced graph:</p>
    <!-- <pre><code class="language-python">
            nodes: [
            {
              id: "Andrew Puglisi",
              radius: 2,
              citing_patents_count: 2,
              total_abuse_count: 9,
              rank_incident: "Sergeant",
              precinct: 1
            },],
            links: [
            {
              source:
                "Brian Ilund",
              target: "Andrew Wunsch",
              value: 2,
            },]

        </code></pre> -->

        <h3>
            Step4: Calculating the social network according to d3.js's input data structure</h3>

    <p>Now we have a cleaned data with the key information we want. We need to predict their social network
        using their rank and precinct </p>
    <p>According to the background knowledge mentioned at the beginning, the rank of the police officers is:
    </p>

    <p>We then write a script to transform the csv file to our desired json format, and create the link using
        their connection hierarchy</p>
    <figure>
        <img src="/images/a4/processing6.png" alt="" class="image-m" />
        <figcaption>
            Our first attempt on visualization is ok but not optimal, because we indluded too many unnecessary
            data and connection. We will then change the logic following a strict hierarchy and remove unnessary
            data.
        </figcaption>
    </figure>
    <h4>Data Processing Code Step 4: csv to social network map JSON</h4>
    <!-- <pre><code class="language-python">
            import csv
            import json
            
            # Your connections logic
            connection_logic = [
                {
                    "role": "Inspector",
                    "connections": [
                        {"to": "Deputy Inspector", "weight": 10},
                    ],
                },
                {
                    "role": "Deputy Inspector",
                    "connections": [
                        {"to": "Captain", "weight": 8},
                    ],
                },
                {
                    "role": "Captain",
                    "connections": [
                        {"to": "Lieutenant", "weight": 6},
                    ],
                },
                {
                    "role": "Lieutenant",
                    "connections": [
                        {"to": "Sergeant", "weight": 4},
                    ],
                },
                {
                    "role": "Sergeant",
                    "connections": [
                        {"to": "Detective", "weight": 2},
                    ],
                },
                {
                    "role": "Detective",
                    "connections": [
                        {"to": "Police Officer", "weight": 1},
                    ],
                },
                {
                    "role": "Police Officer",
                    "connections": [],
                },
            ]
            
            # Transform the connection logic into a more accessible format
            connections_map = {item["role"]: item["connections"] for item in connection_logic}
            
            # Step 2: Reading from the CSV file and processing the data
            nodes = []
            links = []  # Initialized to generate meaningful links based on role connections
            
            # Assuming the path is updated to the correct CSV location
            csv_file_path = "process2_morethan25.csv"
            
            # Read the CSV data, ensuring correct handling of delimiters and column headers
            # Read the CSV data, converting officers to a list for reusability
            with open(csv_file_path, mode="r", encoding="utf-8-sig") as file:
                reader = csv.DictReader(file)
                officers = list(reader)  # Convert to a list to iterate multiple times
            
            # Generate nodes from officers
            for officer in officers:
                # skip Total_Abuse_count > 3 case
            
                nodes.append(
                    {
                        "id": officer["full_name"],
                        "total_abuse_count": int(officer["Total_Abuse_count"]),
                        "rank_incident": officer["rank_incident"],
                        "precinct": int(officer["precinct"]),
                    }
                )
            
            
            # Generate links based on precinct and role connections
            for officer in officers:
                officer_role = officer["rank_incident"]
                officer_precinct = int(officer["precinct"])
                for connection in connections_map.get(officer_role, []):
                    target_role = connection["to"]
                    weight = connection["weight"]
                    # Find officers in the same precinct with the target role
                    for target_officer in [
                        o
                        for o in officers
                        if int(o["precinct"]) == officer_precinct
                        and o["rank_incident"] == target_role
                    ]:
                        links.append(
                            {
                                "source": officer["full_name"],
                                "target": target_officer["full_name"],
                                "value": weight,
                            }
                        )
            
            # Step 3: Writing the processed data to a JSON file
            json_data = {"nodes": nodes, "links": links}
            json_file_path = "process2_processed2-25.json"
            with open(json_file_path, "w") as json_file:
                json.dump(json_data, json_file, indent=4)
            
            json_file_path
            
        </code></pre> -->

    <h2> Data processing for deceptive drawing</h2>

    <h3> Step 1: Data Grouping: count the number of abuse, not by person to person, but the collective numbers </h3>
    <!-- <code><pre>
        import pandas as pd
        # load data
        csv_file_path = "process3.csv"
            df.to_csv(csv_file_path, index=False)

            # Now, let's load the CSV file as if it was uploaded
            data = pd.read_csv(csv_file_path)

        # Creating a DataFrame
        df = pd.DataFrame(data)

        # Categorizing and counting by rank
        rank_abuse_count = df.groupby(["precinct", "rank_incident"]).size().reset_index(name="count_of_people_abused")

        # Save to CSV
        rank_abuse_count.to_csv("/mnt/data/abuse_count_by_rank.csv", index=False)
    </code></pre> -->

    <h3> Step 2: Data Pivoting: merge data by precincts</h3>
    <!-- <code><pre>

        pivot_df = df.pivot_table(index='precinct', columns='rank_incident', values='count_of_people_abused', fill_value=0)

    </code></pre> -->
    <figure>
        <img src="/images/a4/pivoted.png" alt="" class="image-l" />
        <figcaption>
            Pivoted data with statistics.
        </figcaption>
    </figure>

</main>
<main>
    <section>
        <h2>Final Reflection</h2>

        <!-- After documenting these decisions, write a 2�C3 paragraph final reflection on your overall design process across both visualizations. What was straightforward or difficult? What surprised you? How do you now define ��ethical analysis and visualization��? What bounds (if any) can you draw to distinguish ��acceptable�� persuasive choices vs. ��misleading�� ones (and if none, why not)? -->

        <p>Through the analysis of police misconduct data, the project critically evaluates how data
            visualization techniques can be employed to shape narratives and influence perceptions. I was intrigued
            by the profound impact design and presentation choices have on data interpretation, especially on
            complex and sensitive issues.</p>

        <p>I was astonished by how data, when presented selectively or with particular design choices, can lead to
            vastly different interpretations. In this project, the persuasive
            visualization suggesting a collective nature of misconduct prompts considerations of systemic issues
            within the NYPD, while the deceptive visualization portraying misconduct as an individualized
            problem shifts the focus away from structural reforms.</p>

        <p>The most difficult part this assignment is stay coherent on two sides of one particular problem. It
            influenced all of my design decisions, from processing the data and prove/unprove the problem by raising
            questions. The real challenge emerged when I attempted to create visualizations that supported opposing
            narratives from the same dataset - they may end up with different type of chars, different trails and
            deliberate tricks to mislead people. Minor adjustments in design elements, such as color, scale, and
            selective data inclusion, could drastically shift the narrative and influence the viewer's perception
            and conclusions. </p>

        <p>The project also raises important questions about accountability, transparency, and the role
            of data in public discourse. If we want to persuade people, must we indlude all the details? The answer
            might be false.As a creator, navigating these ethical dilemmas responsibly, aiming to enlighten rather
            than deceive, becomes an important technique and a thing to really take care of. </p>

    </section>
    
</main>
    <p>Note: ChatGPT, Excel, Tableau, ArcGIS are used in intermediate plot generation, helping generate data
        analysis code, grammar check and writing improvements.</p>




<style>


    /* @import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.css"); */

:root {
	--color-neutral-95: hsl(220 10% 95%);
	--color-neutral-90: hsl(220 10% 90%);
	--color-neutral-80: hsl(220 10% 80%);
	--color-neutral-70: hsl(220 10% 70%);
	--color-neutral-60: hsl(220 10% 60%);
	--color-neutral-50: hsl(220 10% 50%);
	--color-neutral-40: hsl(220 10% 40%);
	--color-neutral-30: hsl(220 10% 30%);
	--color-neutral-20: hsl(220 10% 20%);
	--color-neutral-10: hsl(220 10% 10%);
    --font-base: Helvetica, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

}




html {
	font: 100%/1.5 var(--font-base);
	counter-reset: figure;
	background: var(--color-neutral-95);
	max-width: min(75vw, 80em);
	margin: 0 auto;
}

/* Headings */

h1, h2, h3, h4, h5, h6 {
	line-height: 1.1;
	font-weight: 600;
	text-wrap: balance;
}

h1, h2 {
	border-bottom: 1px solid var(--color-neutral-80);
	padding-bottom: .2em;
}

h1 {
	margin-block: 1em .5rem;
	font-size: clamp(2.5em, 150% + 2vh + 2vw, 10vmin);
	font-weight: 700;

	small {
		display: block;
		width: fit-content;
		padding: .2em .5em;
		margin-inline: auto;
		color: white;
		background: var(--color-neutral-40);
		font-size: 40%;
		text-transform: uppercase;
		white-space: nowrap;
	}
}

h2 {
	font-size: 180%;
	color: var(--color-neutral-30);
}

h3 {
    margin-top: 2em;
	font-size: 150%;
}

ref {
	font-size: 85%;

}
/* Lists */

ul, ol {
	padding-inline-start: 2em;
}

li {
	&::marker {
		color: var(--color-neutral-40);
	}

		margin-top: .2em;

}

/* Sectioning elements */

header {
	padding-block: 1em;
	text-align: center;
}

main {
	background: white;
	color: var(--color-neutral-20);
	border-radius: 1rem;
	padding: 0.1rem 2rem;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-top: 2em;

}

/* Figures */

figure {
    margin: 1em 0;
    padding: .5rem;
    margin-inline: -.5em;
    border: 1px solid var(--color-neutral-80);
    box-shadow: 0 .1em .2em var(--color-neutral-95);
    text-align: center;
    background: white;
    margin-top: 1.5em;
}

figure > img, figure > embed, figure > video {
    max-width: 100%;
    height: auto;
}



figure > figcaption {
    font: 500 75% var(--font-sans);
    background: var(--color-neutral-95);
    padding: .5rem;
    margin: -.5rem;
    margin-top: .3rem;
    counter-increment: figure;
    text-align: center;
}

figure > figcaption::before {
    content: "Figure " counter(figure) ": ";
    font-weight: bold;
    color: var(--color-neutral-40);
}

figure > figcaption a:not(:hover, :focus, :active) {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: color-mix(in lab, currentColor, transparent 70%);
}


/* Customization */
description  {
    display: block;
    font-size: 90%;
	color: var(--color-neutral-30);
    text-align: left !important;
    margin-top: 20px; 
    margin-bottom: 20px;
    max-width: 800px; 
    margin-left: auto;
    margin-right: auto;
}

.image-s,
.image-m,
.image-l {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

/* Default sizes for larger screens */
.image-s { width: 30%; }
.image-m { width: 50%; }
.image-l { width: 60%; }
.image-xl { width: 75%; }
.image-xxl { width: 90%; }


/* Responsive adjustments for screens smaller than 768px */
@media (max-width: 768px) {
    .image-s,
    .image-m,
    .image-l {
        width: 90%; /* Adjust this value as needed for mobile devices */
    }
}


.center-text {
    text-align: center;
    margin-top: 1em;
}
</style>