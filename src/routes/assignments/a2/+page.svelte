<svelte:head>
  <title>Assignment 2</title>
</svelte:head>

<script>
  import { base } from "$app/paths";
</script>

<header>
  <h1>
    <small>Assignment 2</small>
    Exploratory Data Analysis
  </h1>

  <p><strong>Jin Gao</strong> - <em>gaojin@mit.edu</em></p>
</header>
<main>
  <section>
    <h2>Subtheme: Zoning Reform</h2>
    <h3>Data Overview</h3>
    <p>
      The provided dataset has two sections: a geojson file containing the
      geographical data of zoning divisions, and a sheet for numerical
      information of each zoning division. The numerical data can be divided
      into several categories:
      <li>
        Zoning types: records the zoning is for housing, single family only, and
        MBTA community status.
      </li>
      <li>
        Demographic Information: gender, age, race, family households(family
        size), and household income. It distinguishes between zones designated
        exclusively for single-family homes and those allocated for various
        other types of housing, such as multifamily dwellings.
      </li>
    </p>

    <h3>Overall Analysis Questions</h3>

    <ol>
      <li>
        What's the big picture of the current Boston zoning situation? Are there
        any comparable cities that we can learn from?
      </li>
      <li>
        The data is named as: Metro Boston municipalities with single family
        zoning vs other housing zoning. What are their key differences?
      </li>
      <li>
        The reading "Houses are too expensive. Apartments are too small. Is this
        a fix?"[7] mentioned the "missing middle" type of housing. How would it
        reflect in data? (See drawing Household Income Distribution and Average
        househode income distribution)
      </li>
      <li>
        How can we identify gentrification from the data? Does gentrification
        affect middle-class's porportion and high-income groups?
      </li>
      <li>
        As raised by reading Exclusionary by Design[8], zoning has been used as
        a tool from 1920s to differenciate race and social class. How
        exclusionary zoning (single family zoning) affect today's urban and
        social structure? (See drawing Mapping of Single-Family Percentage and
        Single Family Only Zoning Distribution)
      </li>
      <li>
        What are the relationship between zoning and demographics? Do they have
        positive relationships? Such as, high income area can potentially have
        more single family housing?
      </li>
      <li>
        As mentioned by reding The illegal city of Somerville, what is a good
        mix of building typologies and programs that can contribute to a
        inclusive, equal comunity? (Can't be answered by current scale of data)
      </li>
      <li>
        Reflect reading [8], the history sucks, but limited by its context.
        What's an appropriate zoning scheme for boston's future that suit the
        city's future population and society ?
      </li>
    </ol>
  </section>
</main>


    <main>
      <section>
        <h2>Discoveries & Insights</h2>
        <h3>Geographical Information</h3>

        <figure>
            <img src= "{base}/images/a2/geographic.png" alt="geographic boudaries" class="image-s"/>
            <figcaption>Overview of Boston's 101 Municipalities</figcaption>
            <description>
              The dataset shows us the regional extent of the 101 municipalities
              in Boston, Massachusetts. By visualizing and annotating the GIS
              data, we can roughly make an initial prediction of the scope of the
              analysis and the size of each region.
            </description>
          </figure>

          <figure>
            <figcaption>Concentric Circles Theory Application in Boston</figcaption>
                <img class="image-l"
                src= "{base}/images/a2/distance_to_boston_center.png"
                alt="distance_to_boston_center"
                />

            <description>
              By calculating the distance from the center of the region to Boston
              Center and partitioning the city according to the concentric circle
              theory [2], we can roughly classify the Boston region into four
              tiers:
              <li>
                the core Boston region, which includes areas such as downtown
                Boston, cambridge, and Somerville
              </li>
              <li>peripheral areas of the city, such as Malden</li>
        
              <li>the suburbs, around 20 minute drive between the city center. As we will mention later, it is a sweet spot for Americal suburb lifestyle while work at the city center</li>
        
              <li>the peripheral areas of the city, such as Lexington, which typically requires 30 min of driving</li>
              <p>
              These layers can help us compare systematic differences between
              regions in subsequent analyses. I have the following several
              conjectures: 
              <li>Because of the de-urbanization during the development
              of American cities, the urban core has gathered a large number of
              low-income groups. - On the periphery of cities, some municipalities
              concentrate high-income groups, while other municipalities are
              likely to have a large concentration of low-income groups. 
             </li>
             <li>
              Peripheral areas may have more radical policies, such as single
              family exclusive zoning We should note that the Boston urban area,
              both in the dataset and in the map, is a factor that could extremely
              easily make the visualization monotonous</li>
              <li>

              In our dataset, the Boston downtown area has been divided into one area. For the purpose of our analysis, it usually touches the upper boundry and make the surrounding area's differences not distinguishable! So in many
              subsequent visualization practices, I set the upper limit to a value
              that clearly demonstrates the difference between the data in the
              outlying areas of the city, in order to better show the variability
              in the suburban data. The colors coule be not plotted proportionally
              in the following drawings.
            </li>
              </p>
            </description>
          </figure>

        <h3>Demographic</h3>

        <figure>
            <img class="image-m" src= "{base}/images/a2/population_pyramid.png" alt="populationpyramid" />
            <figcaption>Spindle-shaped Population Distribution in Boston</figcaption>
            <description>
              Looking at the regional demographic data we can see that the Boston
              region has a spindle-shaped population, with the majority (66%) of
              people between the ages of 18-64 years old, with a low percentage of
              older people and of younger people (21%). This
              shows slow natural population growth in the
              future. However, this does not mean that the total population is
              trending towards slow growth. A large number of cohorts and
              statistics for the 18-64 age group show that the labor force
              contains about 18% of new immigrants [3], contributing to the
              region's population growth. And new immigrants, especially young
              immigrants are characterized by single-family predominance. They
              need to settle down in a new city and require a long settling-in
              process, which coincides with the most questionable moment of
              exclusive zoning. The influx of young immigrants brings with it
              diverse housing needs, and in addition to single-family homes, they
              may prefer rental apartments, shared accommodations, or smaller
              homes that are affordable. If exclusive zoning limits the
              construction of diverse or affordable homes, new immigrants and
              low-income groups face greater housing challenges, further
              exacerbating the housing affordability crisis and social inequality.
            </description>
          </figure>

          <figure>
            <img class="image-l"
              src= "{base}/images/a2/demographic_distribution.png"
              alt="demographic distribution"
            />
            <figcaption>Racial Distribution</figcaption>
            <description>
              Boston is the most educated [4] and one of the highest-income region in the United
              States, with the majority of the population concentrated in the
              Boston metropolitan area. In the distribution of the population,
              Whites make up a large percentage of the total population, as high
              as 73%, while the minorities are predominantly Black and Hispanic or
              Latino, Asian. 
            </description>
          </figure>

          <figure>
          <img class="image-l"
          src= "{base}/images/a2/minorities_population.png"
          alt="minorities population"
        />
        <figcaption>Diverse Minority Populations in Boston</figcaption>
        <description>From this picture we can see the distribution of minority populations in the areas surrounding Boston.Interestingly, the minority population, in addition
            to being concentrated in the urban center, has patchy clustering in
            South Boston as well as in the western region, suggesting that local
            communities with a common racial background may have formed.</description>
      </figure>

        <h3>Single Family Zoning</h3>

        <figure>
            <img class="image-m"
              src= "{base}/images/a2/single_family_rate.png"
              alt="single_family_rate"
            />
            <figcaption>Single Family Rate</figcaption>
            <description>
                Here is a comparison between the average single family rate between the zone with or without single family zoning restriction. We can see dramatic differences (nearly two times) caused by the zoning regulation. The following charts will help us explain the differences more effectively.
            </description>
          </figure>

        <figure>
            <img class="image-l"
              src= "{base}/images/a2/household_distribution.png"
              alt="household distribution.png"
            />
            <figcaption>Household Distribution</figcaption>
            <description>
              From the chart, we can see that for both Family and Non-Family
              households, households composed of a small number of people account
              for the mainstream of society. What is surprising is that
              although the total number of nonfamily households is only 70% of
              that of family households, the number of nonfamily residents
              consisting of only one person exceeds the number of two-person
              family households. This shows that the city has a large single
              population. For today's topic, this means there is a lot of demand of housing
              for small and medium-sized single-family homes. 
              In this case, 2B2B units are the most suitable type of living, which are also generally in
              demand in the market. At the same time, the data on the number of
              small and medium-sized houses in the region show that the current
              number of houses cannot meet the demand. If exclusive zoning
              continues to limit the construction of small and medium-sized homes,
              it will undoubtedly exacerbate the mismatch between supply and
              demand in the housing market, driving up housing prices and
              affecting the affordability of housing for low and middle-income
              groups.
            </description>
          </figure>

            <figure>
              <img class="image-l" src= "{base}/images/a2/single_family_percentage.png" alt="" />
              <figcaption>
                Mapping of Single-Family Percentage
              </figcaption>
              <description>

                <p>Single families are distributed mainly in the inner and outer suburbs (the third and fourth rings) of the city, which is a sweet spot of single family mode allows you to commute quickly to work in downtown Boston, and they can also go home and enjoy a silet suburban life.</p>
                <p>This layout also has its historical reasons [6]. In the early 20th century, when the development of urban centers reached a bottleneck and the city expanded outward, in order to exclude ethnic minorities, single family housing planning was widely adopted in the United States. This zoning strategy forms a middle-class living circle around the city and isolates ethnic minorities on the periphery of the city from the city center. Today, although the houses are more friendly to minorities, the single family houses themselves and the lifestyle they suit are still used.</p>

              </description>
            </figure>

            <figure>
                <img class="image-l" src= "{base}/images/a2/only_single_family_zoning.png" alt="only single family zoning" />
                <figcaption>
                  Single Family Only Zoning Distribution
                </figcaption>
                <description>
                    <p>
                    In some distant areas, we see te existance of strict single-family only zoning. Compared with other maps, we can find that the relative total population of these areas is not large, and they may have the conditions to implement single-family zoning. But with future population growth, including the impact of population distribution brought about by advances in transportation methods, this situation may change.</p>
                    <p>It is worth noting that most zones have both single-family only and non-single-family only areas. They are marked in darker blue and occupy most of Boston. Most of the area that have high single family rate enforced single family zoning policy</p>
                    <p>For the single population, the most important thing is to pay attention to the zoning demand in the Boston urban area, that is, the first and second circles, where the single population is most concentrated.</p>
                    
                </description>
              </figure>
    
        <h3>Income</h3>
        <figure>
            <img class="image-l" src= "{base}/images/a2/household_income_distribution.png" alt="household_income_distribution" />
            <figcaption>
                Household Income Distribution
            </figcaption>
            <description>
                <p>The overall household income in Boston is distributed in an inverted U-shaped curve, that is, the main income ranges are concentrated in low-income areas below $20,000, and high-income areas above $100,000. This kind of distribution indicate high level of gentrification and economic inequality, where a substantial portion of the population is either affluent or poor, with fewer in the middle-class bracket.</p>
                <p> Such relative short of middle class in Boston may partially due to housing policies and high rent. Shortage of affordable housing supply in the research area may result in population displacement and further migration out of Boston.</p>
                <p>This finding reflects the "missing middle" phenomenonm mentioned in the reading 7. The lack of middle income group can partially be a result from lack of middle-class neighborhoods because of zoning laws.</p>
                <p>According to Boston's Middle Class Report[10], we can classify the income group as low-income: below $500,000 annualy, middle-class: $50,000 to $125,000 annualy, and high-income: $125,000+.</p>
            </description>
          </figure>

          <figure>
            <img class="image-m" src= "{base}/images/a2/predominate_class.png" alt="Predominate income group vs zoning policies" />
            <figcaption>
               Predominate income group vs zoning policies
            </figcaption>
            <description>
                We classify the income classes according to zones, count the highest income classes in the zones, and draw a chart. We can see that the mainstream income group in Boston is high income, that is, those with an annual income of more than $125,000. However, single family zoning has no significant impact on income class.
            </description>
          </figure>

          <figure>
            <img class="image-l" src= "{base}/images/a2/predominate_class_mapping.png" alt="Predominate income group mapping" />
            <figcaption>
               Predominate income group mapping
            </figcaption>
            <description>
                Next, we map the predominate income group on the map. We can further see that high-income groups are mainly distributed in the second and third circles of the city, that is, the suburbs far away from the city center. The city center is home to more low-income groups. The middle-income group lives further away from the city center and is widely distributed in the second to fourth circles.
            </description>
          </figure>

          <figure>
            <img class="image-l" src= "{base}/images/a2/average_household_income.png" alt="average_household_income" />
            <figcaption>
              Average househode income distribution
            </figcaption>
            <description>
              Interestingly, there are patches of high-income and low-income areas scattered around Boston. We found that high-income groups are concentrated in the third and fourth circles of the city, that is, suburban areas. This is related to the over-concentration of cities and the counter-urbanization phenomenon caused by the rise of automobile transportation. A large number of high-income groups choose to commute by car and live in suburb. However, low-income areas may just across the street from high-income areas but have completely different population structures, zoning plans, and housing needs. In future data visualization analysis, we need to study the polarization of high-income and low-income groups to explore the most appropriate zoning solution for both social groups.
            </description>
          </figure>


          <figure>
            <img class="image-l" src= "{base}/images/a2/low_income_household.png" alt="low income household" />
            <figcaption>
              Extra Low-Income Household Distributions
            </figcaption>
            <description>
              This mapping shows that extra low-income households (below $10,000) are concentrated in the Boston area. Therefore, on the issue of low-income housing, we need to zoom in to focus on issues that in the community scale, not regional scale. Currently, it is difficult for us to answer specific housing questions for low-income groups.
            </description>
          </figure>
      </section>
    </main>
    <main>
      <section>
        <h2>Summary</h2>

        <p>
          Applying the concentric circle theory, we delineate the research area
          into 5 core circles including downtown, peripheral areas, suburbs, and
          further peripheral zones. Boston's zoning practices have historically
          catered to single-family homes, especially in the suburbs and
          peripheral areas.
        </p>
        <figure>
        <img
          src= "{base}/images/a2/circle_theory.png"
          alt="Concentric circles theory"
          class="image-s"
        />
        <figcaption class="center-text">Concentric circles theory</figcaption>
      </figure>
          
          <p>
          Comparable cities like San Francisco and Seattle[5],
          which also had de-urbanization and housing affordability issues, have
          begun exploring mixed-use zoning and upzoning as strategies to
          accommodate more diverted housing needs and stimulate urban
          revitalization. The proposal highlights raising the zoning limit for already high rise area, and key intersections and locations along maor corridors. Underlying zoning will also be amended to decontrol the density to establish form-based zoning, and give the right for local or state programs to st height amendements. If properly executed, San Franscisco will be able to increase housing affordability for low and middle-income households, and help advance racial and social equity. It is worth Boston to accommodate and learn from their practices.
        </p>

        <figure>
          <img
            src= "{base}/images/a2/SF_Zoning_Map.png"
            alt="household_income_distribution"
            class="image-s"
          />
          <figcaption class="center-text">SF Zoning Map 2023</figcaption>
        </figure>
        <p>
          From the data, we can also conclude that the diverted demographic,
          including new immigrants, underscores the need for diverse housing
          options, and the population distribution forecast growth in the
          future. A zoning law that accepts more variety of housing types beyond
          single-family homes, especially in the central Boston area, is needed.
          Exclusionary zoning, particularly single-family zoning, has
          disproportionately affected low-income groups and new immigrants and
          has led to spatial segregation by income and race, undermining social
          cohesion and economic diversity within communities. Meanwhile, the
          concentration of minorities in certain urban and peripheral areas
          suggests that zoning and housing policies need to be sensitive to the
          needs of these communities, promoting inclusivity and preventing
          displacement. The income distribution in Boston, with significant
          low-income and high-income groups, is mirrored in the city's zoning
          and housing landscape. High-income areas tend to be in the suburbs,
          resulting from exclusionary zoning practices. In contrast, low-income
          areas, accumulated around the city center, indicate that current
          zoning does not adequately reflect the needs of all income groups,
          particularly those at the lower end.
        </p>
            <p>Lastly, we found that the
          current dataset is not of sufficient scale to answer the question of
          low-income housing within Boston's inner city. In subsequent data
          visualization and analysis, this part of the data will take our
          research further.<p>
        </p>
      </section>
    </main>
    <main>
      <section>
        <h2>Appendix</h2>
        <h3>Data Quality Accessment</h3>
        <h4>Is the metadata complete and well described? </h4>
        <p>Partially Yes! Every category has meaningful discription and data type.However, we couldn't find the unit used in many rows.
        </p>

        <img src= "{base}/images/a2/missing_data.png" alt="missing data" class="image-l" />
        <figcaption class="center-text">0 or missing data</figcaption>
        
        <h4>Is there any unrealistic data?</h4>
        <p>Population scale: Some of the population data is very low. And the metadata didn't specify the population unit. From Google, we can find the current population of Esses, MA is 3504. So, the pop column should be in thousand units.
        </p>
        
        <img src= "{base}/images/a2/population_scale.png" alt="population scale" class="image-s" />
        <figcaption class="center-text">population scale</figcaption>
        
        <p>Single-family zoning proportion in many municipalities is 0, including Boston. Meanwhile, some of them has extremely high number, even 100%. They may lead to unrealistic analysis, so I wouldn't recommend doing analysis based on such data. </p>
        <p>
            In the current data, every municipal is housing zoning, which may be wrong.
        </p>
        <img src= "{base}/images/a2/extreme_data.png" alt="extreme data" class="image-m" />
        <figcaption class="center-text">extreme data</figcaption>
        
        <h4>Is there redundant data?</h4>
        <p>Yes. Although has significant scale differences, I couldn't find differences between the geometry between ma_municipalities.geojson and housing_sf_other_w_census.geojson. We can just use one of them in mapping.</p>
        <img src= "{base}/images/a2/gis_overlap.png" alt="gis overlap" class="image-s" />
        <figcaption class="center-text">GIS Data Overlap</figcaption>
        
        <h4> Is the scale of data sufficient?</h4>
        <p>No. The regions with the top three populations in Massachusetts, Boston, Cambridge and Somerville cover a massive area. Especially Boston, which hosts the main population of Massachusetts, is treated as a whole area, making detailed analysis difficult to conduct. Moreover, the Boston area, which usually has the largest number, will dilute the results of many analyses. For example, the ratio of men to women in the city and suburbs may be very different. In a later analysis, I might consider analyzing Boston separately from other suburbs. In addition, some specific regional divisions do not apply to the Boston area. For example, the MBTA community indicator is not designed for the city [1], so the Boston area needs to be excluded when conducting relevant analyses.</p>



        <h3>Data Processing</h3>

        <a
          href= "https://docs.google.com/spreadsheets/d/1Rxz1JBNBhcQTkYL9aWu7wguDD5kLSMzd/edit?usp=sharing&ouid=112440460323800138384&rtpof=true&sd=true" 
          >Processed Data File</a
        >

        <h4>Merge metadata: provide easier alignment and better efficiency.</h4>

        <img src= "{base}/images/a2/merge_metadata.png" alt="merged_metadata.png" class="image-s"/>
        <figcaption class="center-text">Merged Metadata</figcaption>

        <h4>Geographical Information Processing:</h4>
        <p>
          <li>Calculate area using ArcGIS Pro using Calculate Geometry</li>
          <li>
            Export the processed GIS data into Excel using table to excel tool
          </li>
          <li>Perform further analysis using Excel and Tableau</li>
        </p>
        <img src= "{base}/images/a2/gis_processing.png" alt="gis processing" class="image-s"/>
        <figcaption class="center-text">GIS Processing</figcaption>
        
        <h4>Calculate Distance to Boston:</h4>
        <p>
          <li>First find the centroid of each municipality</li>
          <li>
            Calculate the distance between bosten centroid and municipalities
          </li>
          <li>
            Divide minicipalities into urban, suburban, etc, according to
            distances
          </li>
        </p>
        <img src= "{base}/images/a2/calculate_distance.png" alt="calculate distance" class="image-s"/>
        <figcaption class="center-text">Calculate Distance</figcaption>

        <h4>Calculate Average Income:</h4>
        <p>
          <li>
            Aggregate the municipalities divided by only_single_familiy using
            Panda
          </li>
          <li>
            Calculate average income according to the amount of households *
            related income / total household numbers
          </li>
        </p>
      </section>

      <section>
        <h2>Reference:</h2>
        <h4>
          ChatGPT, Excel, Tableu, ArcGIS are used in helping generate data
          analysis code, grammar check and writing improvements.
        </h4>
        <p>
          [1] Multi-Family Zoning Requirement for MBTA Communities
          https://www.mass.gov/info-details/multi-family-zoning-requirement-for-mbta-communities</p>

          <p>[2] "The Burgess Urban Land Use Model". people.hofstra.edu. Archived
          from the original on 2011-06-29. Retrieved 2016-09-26. </p>
          
          <p>[3] QUICK
          IMMIGRATION STATISTICS: MASSACHUSETTS
          https://www.ilctr.org/quick-ma-immigration-statistics/ </p>
          
          <p>[4] About
          Boston
          https://web.archive.org/web/20100527093243/http://www.cityofboston.gov/visitors/about.asp</p>

          <p>[5] San Francisco Expanding Housing Choice
          https://www.citystructure.com/blog/san-francisco-expanding-housing-choice
        </p>
        <p>[6] Single-family zoning https://en.wikipedia.org/wiki/Single-family_zoning</p>
        <p> [7] Houses are too expensive. Apartments are too small. Is this a fix? (Washington Post) </p>
        <p> [8] Exclusionary by Design: An Investigation of Zoning’s Use as a Tool of Race, Class, and Family Exclusion in Boston’s Suburbs, 1920 to Today </p>
        <p> [9] The illegal city of Somerville https://cityobservatory.org/the-illegal-city-of-somerville/</p>
        <p> [10] Boston Middle Class https://www.boston.gov/sites/default/files/embed/b/boston2030_chapter_3_bostons_middle_class.pdf</p>
        <h4>
          Data Source: 
        </h4>

          <p>Zoning Atlas: Source: MAPC Referring URL:
          https://datacommon.mapc.org/browser/datasets/421 
        <p>
          Massachusetts
          Municipal Boundaries(Municipal): Source: MassGIS Referring URL:
          https://datacommon.mapc.org/browser/datasets/390 
        </p>
          <p>
          MBTA Communities:
          Referring URL:
          https://www.mass.gov/files/csv/2023-12/MBTA%20Communities%20Community%20Categories%20and%20Capacity%20Calculations%20for%20web_0.csv
        </p>
          <p>
          Household Income (Block Groups) Year: 2014-2018 Source: American
          Community Survey (ACS) Referring URL:
          https://datacommon.mapc.org/browser/datasets/123 
        </p>
          <p>
          General Population
          and Housing Characteristics (Blocks) Year: 2010 Source: US Census:
          Decennial Census Referring URL:
          https://datacommon.mapc.org/browser/datasets/262 
        </p>
          <p>
          Census Boundary Areas
          Year: 2010 Source: US Census: Decennial Census Referring URL:
          https://www.mass.gov/info-details/massgis-data-2010-us-census#redistricting-data-(public-law-94-171)-summary-file-
        </p>

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
    --font-base: Helvetica, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      "Helvetica Neue", sans-serif;
  }

  html {
    font: 100%/1.5 var(--font-base);
    counter-reset: figure;
    background: var(--color-neutral-95);
    max-width: min(75vw, 80em);
    margin: 0 auto;
  }

  /* Headings */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-weight: 600;
    text-wrap: balance;
  }

  h1,
  h2 {
    border-bottom: 1px solid var(--color-neutral-80);
    padding-bottom: 0.2em;
  }

  h1 {
    margin-block: 1em 0.5rem;
    font-size: clamp(2.5em, 150% + 2vh + 2vw, 5vmin);
    font-weight: 700;

    small {
      display: block;
      width: fit-content;
      padding: 0.2em 0.5em;
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

  ul,
  ol {
    padding-inline-start: 2em;
  }

  li {
    &::marker {
      color: var(--color-neutral-40);
    }

    margin-top: 0.2em;
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
    box-shadow:
      0 8px 18px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
    margin-top: 2em;
  }

  /* Figures */

  figure {
    margin: 1em 0;
    padding: 0.5rem;
    margin-inline: -0.5em;
    border: 1px solid var(--color-neutral-80);
    box-shadow: 0 0.1em 0.2em var(--color-neutral-95);
    text-align: center;
    background: white;
    margin-top: 1.5em;
  }

  figure > img,
  figure > embed,
  figure > video {
    max-width: 100%;
    height: auto;
  }

  figure > figcaption {
    font: 500 75% var(--font-sans);
    background: var(--color-neutral-95);
    padding: 0.5rem;
    margin: -0.5rem;
    margin-top: 0.3rem;
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
  description {
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
  .image-s {
    width: 30%;
  }
  .image-m {
    width: 50%;
  }
  .image-l {
    width: 60%;
  }

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
