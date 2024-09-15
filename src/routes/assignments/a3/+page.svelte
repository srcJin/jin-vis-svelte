<svelte:head>
<title>Assignment 3</title>
</svelte:head>


<header>
    <h1>
        <small>Assignment 3</small>
        Visualization Design
    </h1>

    <p>
        <strong>Jin Gao</strong> - <em>gaojin@mit.edu</em>
    </p>
</header>

<main>
    <section>
        <h2>Phase One: Sketching Visualizations</h2>

        <h3> Design-Research Question: </h3>
        <h3> Generational Echoes: Tracing the Dynamics of Birth and Mortality in America, 1900-2000 </h3>
        
        <h4>Introduction</h4>
        <p>
        The 20th century was a period of profound transformation for the United States, marked by significant population growth influenced by both internal developments and global events. The provided dataset offers the starting and ending points. However, history is continuous. Can we use visualization to express this process?
        </p>
        
        <p>
        In this visualization, I aim to show the dramatic changes in the US population due to the impacts of major events that occurred during the 20th century. With the provided data showing population change over a 100-year gap, I was curious about the intermediate stages, what caused the changes in population, and what reasons are deeply rooted in time.
        </p>
        
        <p>
        However, seldom do people live more than 100 years, meaning these two groups of people have few direct connections. To answer my question, we have to introduce two additional pieces of data:
        </p>
        
        <ul>
        <li>The middle state: the population state in the 1950s</li>
        <li>The mortality statistics: providing mortality information with reasons for death</li>
        </ul>
        
        <h3>The 1900s</h3>
        <p>
        The 1900s marked the beginning of the United States's unprecedented changes. Transitioning from a primarily agrarian society to an industrial powerhouse, and the invention of automobility, triggered significant urbanization and industrialization. It marked the beginning of the Progressive Movement. Citizens started to become aware of the social problems of poverty, labor rights, and women's suffrage, which triggered significant strikes and the rise of labor unions.
        </p>
        
        <h3>The 1950s</h3>
        <p>
        The 1950s served as a pivotal point for our visualization. Marked by the aftermath of World War II, the beginning of the Cold War, and significant social and economic transformations, this era experienced the baby boom, rapid urbanization, and migration patterns that significantly influenced the growth and distribution of the United States' population.
        </p>
        
        <h3>The 2000s</h3>
        <p>
        The end of the 20th century, also the beginning of the 21st century, was marked by profound technological advancements, globalization, and significant social changes that continued to reshape the population landscape of the United States. This era shows the maturation of the baby boom generation and the advanced medical achievements that significantly lowered the death rate.
        </p>
        
        <p>
        I manually cleaned and integrated two additional data sets into the given dataset. The data processing process is recorded as an appendix in the last section of this assignment.
        </p>
    
        <figure>
            <img src="/images/a3/sketch1-2.jpg" alt="sketch 1" class="image-l" />
            <figcaption>
                Sketch 1: A modified Sankey diagram to represent the population flow
            </figcaption>
        </figure>
        
        <h4>
            Design Rationale for Sketch 1:
        </h4>
        
        <ul>
            <li>Express Relationships: Using the style of Sankey diagrams, this sketch aims to show the three interconnected generations of the population and their relationships, in a simplified way.
        
                <img src="/images/a3/sankey_reference.jpg" alt="sankey_reference" class="image-s"/>
                <figcaption class="center-text">Sankey Reference</figcaption>
            </li>
            <li>Efficiency and simplicity: It is effective at depicting the flow of populations or resources between different states or groups. The division between the age groups is clear.</li>
            <li>High Adaptability: The efficient layout offers plenty of room to mark key historical events, explanations. It's also effective to accommodate additional data for future changes.  </li>
        </ul>
        
        <figure>
            <img src="/images/a3/sketch2-2.jpg" alt="sketch 2" class="image-l" />
            <figcaption>
              Sketch 2: A manga to show the dramatic path from the 1900s to the 2000s.
            </figcaption>
        </figure>
        
        <h4>
            Design Rationale for Sketch 2:
        </h4>

        <ul>
            <li>Instead of directly showing the data as a statistical result, this sketch aims to use narrative cartoons to show the changes in people's lifestyles and living environments through depictable figures: the change in dwelling styles, the break of gender discrimination, the adaptation of car transportation, and the rise of high-density cities. These changes indirectly reflect the actual amount of data but directly answer the question we proposed for this visualization.</li>
            <li>The cartoonized, story-based approach makes it easier for the audience to accept and become interested in reading in detail. The success of this style requires multiple layers of storytelling and uses a lot of detail on different scales. Once successful, it will maximize the expansion of the audience and spread the ideas more intuitively and broadly.
                
            <img src="/images/a3/sketch_2_reference.jpg" alt="reference" class="image-s"/>
            <figcaption class="center-text">Reference</figcaption>
            </li>
            <li>The drawback of this approach is that the cartoon format makes precise data difficult to read. It's more like a painting than a display of data. This kind of bias might lead the audience to overlook the associated data's accuracy. However, we can mitigate this issue through design, such as limiting the freedom of expression and incorporating chart-like elements into the overall image.</li>
            <li>Charts may further be considered as a combination of multiple charts, which may exceed the scope of the assignment requirements.</li>
        </ul>
        
        <figure>
            <img src="/images/a3/sketch3-2.jpg" alt="sketch 3" class="image-l" />
            <figcaption>
              Sketch 3: The 20th Century Pinball Machine: a dynamic visualization for dramatic events on population change
            </figcaption>
        </figure>
          
        <h4>
            Design Rationale for Sketch 3:
        </h4>

        <p>Inspiration: Galton Board</p>
        <img src="/images/a3/galton_board.jpg" alt="galton board" class="image-s"  />

        <p>
            Galton Board, used to demonstrate binomial distribution in probability theory, shows a dynamic process of randomness. Inspired by this process, I have transformed this experience into a synesthetic form of data visualization. This approach is aimed at articulating the inherent randomness present in the fluctuations of population over the centuries.
          </p>
          <ul>
            <li>Gamified visualization: this sketch represents the flow of population as an arcade game in three stages. Compared to directly expressing data with bars, this design uses metaphorical techniques, expressing the randomness of history and the unpredictable, often ironic outcomes of human lives through the form of a pinball machine, making the process more interesting to the audience.</li>
            <li>Compared to the previous image, this visualization design is more abstract and may require more time to fully understand its meaning. However, this also stimulates the audience's interest in actively exploring it. Different baskets represent different historical events, which are related to the explanations on either side of the image, enriching the layers of information.</li>
            <li>The downside of this design is the inevitably lengthy proportions, making it difficult to display fully on widescreen and small screens, or making the text too small.</li>
            <li>This design offers the possibility of dynamic presentation. We can completely turn it into a web-based game, writing some collision and gravity physics rules to drive the movement of these balls, ultimately displaying a dynamically changing process of American population change throughout the 20th century.</li>
          </ul>
          
          <h3>Reflection</h3>
          
          <p>
            In the sketch assignment, I strived to find an interesting and innovative way to visualize population statistics and their related historical events. From abstract (Sketch 1), to concrete (Sketch 2), to a gamified semi-abstract (Sketch 3), I tried three ways of visualizing the historical process over the past century. In my opinion, they do not have a superiority or inferiority; it's just necessary to determine our evaluation criteria based on the target audience. In the Final Design below, I chose Sketch 3 as the object for further development. First, through a certain level of abstraction, this visualization method achieves a balance between workload, expression accuracy, and fun. Second, it prepares for future dynamic visualization or gamified visualization phases, allowing for animation without changing the original design. Finally, I believe it has strong extensibility; beyond the 1900, 1950, 2000 nodes, we can add more years to the original design, like adding more levels to a game, making the visualization more interesting.
          </p>
          
    </section>

    <section>
        <h2>Phase Two: Final Design</h2>
    
        <figure>
            <img src="/images/a3/final-2.png" alt="Final Design" />
            <figcaption>
                The 20th Century Pinball Machine: a Visualization for Dramatic Events on Population Change
            </figcaption>
        </figure>
    </section>
    
    <section>
        <h2>Design Process & Design Decisions</h2>


        <h3>Refine and reasoning the problem from the dataset</h3>
    
        <figure>
            <img src="/images/a3/intermediate2.png" alt="Intermediate Plot 2" class="image-s" />
            <figcaption>
                Intermediate Plot 2: Baby Boom
            </figcaption>

            <img src="/images/a3/intermediate3.png" alt="Intermediate Plot 3" class="image-s" />
            <figcaption>
                Intermediate Plot 3: Fertility Rate
            </figcaption>
        </figure>
    
        <p>
            The After War Baby Boom: The end of World War II in 1945 brought a sense of relief and optimism to the U.S. population. The economy was booming, and there was a widespread belief in the possibility of a prosperous future for the next generation. So many families gave birth to their children, which leads to an excessive high birth rate.
        </p>
    
        <figure>
            <img src="/images/a3/intermediate4.png" alt="Intermediate Plot 4" class="image-l" />
            <figcaption>
                Intermediate Plot 4: Mortality Rate
            </figcaption>
        </figure>
    
        <p>
            We see an unstable mortality rate during the war period (1910 to 1940). This includes World War I (1914-1918), the Great Depression (1929), and World War II (1939-1945). All of these lead to dramatic population structure changes around 1950.
        </p>
    
        <h3>Exploratory plottings to find the proper proportion of visualization</h3>
    
        <figure>
            <img src="/images/a3/intermediate1.png" alt="Intermediate Drawing 5" class="image-l" />
            <figcaption>
                Intermediate Drawing 5: Population by age group
            </figcaption>
            <img src="/images/a3/intermediate5.png" alt="Intermediate Drawing 6" class="image-m" />
            <figcaption>
                Intermediate Drawing 6: Population change by age groups
            </figcaption>
            <img src="/images/a3/population_chart.png" alt="Intermediate Drawing 7" class="image-s" />
            <figcaption>
                Intermediate Drawing 7: Population change by 10-year age groups
            </figcaption>
        </figure>
    
        <h3>Layout and color design</h3>

        <p>Following the principle of minimalist and increase the data-ink ratio, I choose limited color palatte with contrast hue: </p>


        <li>
            Orange and blue dots represent female/male population count unit, with each dot equivalent to 500,000 females. In this way, we don't need y axis as scale.
        </li>


        <li>
            Dark gray dots indicate deaths, with each dot representing 10,000 deaths. Light gray dots represent estimated deaths.
        </li>

        <img src="/images/a3/design1.png" alt="design1" class="image-m" />


        <p>To indicate population flow, I draw shade on the background, follow a 50-year interval. For example, the population that is 0 at 1900 will be 50 at 1950, and the curvy background will guide the reader towards the corresponding data point. </p>

        <img src="/images/a3/design2.png" alt="design2" class="image-m" />


        <p>Historical events such as wars and the baby boom are noted on the left side along with the timestamps, they also correspond to the "population catcher" inside the Galton board to represent partial of the population is dead due to such event.</p>

        <p>
            When representing death, I encountered a problem. Compared with the total population, the death number can't be directly represented by dots. Otherwise there will only be 1-2 dots on each event. So I switched to introduce dark grey rectangle to represent death in another scale. The death data divided by gender is hard to find, so I generalized it to homosextual.
        </p>
    
        <img src="/images/a3/problem1.png" alt="design2" class="image-m" />
        <figcaption class="center-text">Death representation before adjustment</figcaption>


        <img src="/images/a3/problem2.png" alt="design2" class="image-l" />
        <figcaption class="center-text">Death representation after adjustment</figcaption>

    </section>

  <h3>Reflection</h3>

  <!-- Your writeup should also include a final paragraph reflecting on how phase one may or may not have influenced your design for this assignment. For example, you could discuss to what extent sketching helped inform your final design. What aspects of your sketches did you keep or discard, and why did you make those decisions? Or, how did your sketches help you change course? -->
<section>
  <p> In this assignment, I spent a lot of effort trying various sketches. In addition to the three listed above, I also tried many ordinary or unrealistic ideas during the process. Sketch greatly stimulated my thinking and made me think out of the box and look for more possibilities beyond the established default chart styles. During the implementation process, I also encountered many difficulties. For example, in order to pursue customization, the use of illustrator drawing resulted in a heavy workload, and the original data had too many age groups, which forced the data to be processed twice. The attempt of sketching allowed me to predict these difficulties in advance and to be able to cope with these troubles with sufficient psychological anticipation after encountering them during the implementation process. At the same time, sketches also provide me with a means to evaluate workload and work progress, allowing me to reasonably arrange time to complete this assignment.</p>
    </section>
</main>

<main>



<section>
<h2>Appendix</h2>

    <h3>Data Processing</h3>

    <a
      href= "https://docs.google.com/spreadsheets/d/1D4yf1GZH5VtyAmubVgsR74DadjBrosFa/edit?usp=sharing&ouid=112440460323800138384&rtpof=true&sd=true" 
      >Processed Data File</a
    >

    <a
    href= "https://www.figma.com/file/UpVLMPpcmeg9qqtTGhJn3p/6C35_Assignment2?type=design&node-id=0%3A1&mode=design&t=hMBCZNjcNvdLvtak-1" 
    >Figma Link</a
  >

    <h4>Add 1950 Population Data</h4>
    <img src="/images/a3/data1.png" alt="Data processing 1" class="image-l"  />
    <p>R code:</p>
    <!-- <pre><code>
        
    library('ipumsr')
    library(dplyr)
    library(tidyr)

ddi <- read_ipums_ddi("usa_00003.xml")
data <- read_ipums_micro(ddi)

# Transform the data
data_processed <- data %>%
  # Assuming 'SEX', 'YEAR', and 'AGE' are the names in the dataset
  # Convert variables if necessary, for example, from codes to meaningful labels if required
  mutate(SEX = as.factor(SEX), YEAR = as.factor(YEAR)) %>%
  # Group by Sex, Year, and Age to count the number of people in each group
  count(SEX, YEAR, AGE) %>%
  # Rename columns to match your desired output
  rename(Sex = SEX, Year = YEAR, Age = AGE, People = n)

# View the processed data
print(data_processed)

# Create age groups and count the number of people
data_grouped <- data_processed %>%
  mutate(AgeGroup = cut(Age,
    breaks = c(0, 4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, Inf),
    labels = c("0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90"),
    right = FALSE)) %>%
  group_by(Sex, Year, AgeGroup) %>%
  summarise(People = sum(People), .groups = 'drop')

# View the first few rows of the grouped data
head(data_grouped)

data_grouped <- data_grouped %>%
  mutate(People_Scaled = round((People * 100) / 50000) * 50000 / 1000)
head(data_grouped)

write.csv(data_grouped, "data_grouped.csv", row.names = FALSE)

</code></pre> -->

  </section>

  <section>
    <h2>Reference:</h2>
    <h4>
    ChatGPT, Excel, Tableu, ArcGIS are used in intermediate plot generation, helping generate data
    analysis code, grammar check and writing improvements.
    </h4>
    <p>[1] Baby Boom https://en.wikipedia.org/wiki/Baby_boom</p>
    <p>[2] MORTALITY IN THE UNITED STATES: PAST, PRESENT, AND FUTURE
         https://budgetmodel.wharton.upenn.edu/issues/2016/1/25/mortality-in-the-united-states-past-present-and-future#:~:text=In%201900%2C%20one%20in%2040,of%20more%20than%20two%20thirds.</p>
    <p>[3] History of United States https://en.wikipedia.org/wiki/History_of_the_United_States</p>

    <p>[4] US Historical Events from 1900 to Present https://www.baylorschool.org/uploaded/Library_Resources_PDFs/US_History_US_Historical_Events_from_1900_to_Present.pdf</p>

    <p>[5] Banking crises and mortality during the Great Depression: evidence from US urban populations, 1929�C1937 https://jech.bmj.com/content/66/5/410</p>

    <p>[6] Causes of death in the United States over the 20th century https://ourworldindata.org/grapher/twentieth-century-of-deaths-us
    </p>

    <p> [7] Death rates from different causes in the United States over the 20th century https://ourworldindata.org/grapher/death-rates-through-the-20th-century</p>

    <p>[8] Spanish_flu https://en.wikipedia.org/wiki/Spanish_flu#Sex_differences_in_mortality</p>

    <p> [9] Gulf War US Death: https://dcas.dmdc.osd.mil/dcas/app/conflictCasualties/gulf/stormsum </p>

    <p> [10] United States military casualties of war: https://en.wikipedia.org/wiki/United_States_military_casualties_of_war </p>

    <p> [11] Defining generations: Where Millennials end and Generation Z begins https://www.pewresearch.org/short-reads/2019/01/17/where-millennials-end-and-generation-z-begins/</p>

    <h4>
    Data Source: 
    </h4>

    <p>[1] 1950 Census Data: U.S. Census Bureau via IPUMS http://ipums.org/ (Same as given dataset)</p>

    <p>[2] Deaths by age: 
    https://ourworldindata.org/grapher/number-of-deaths-by-age-group</p>

    <p>[3] Unintentional injuries death rate by age group, United States, 2020 https://ourworldindata.org/grapher/unintentional-injuries-death-rate-by-age-group-who-mdb </p>
    
    <p>[4] DEATHS FROM SELECTED CAUSES, BY 10�\YEAR GROUPS, https://www.cdc.gov/nchs/data/dvs/hist290a_0039.pdf</p>

  </section>
</main>




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