<svelte:head>
    <title>Communicate with Data</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
</script>

<main>
    <h1>Communicate with Data</h1>
    <h2>Practice 1: Analyze and Redraw a Graph</h2>
    <h3>Original Graph</h3>
    <img src= "{base}/images/projects/communicate_with_data/communicate_with_data1.jpg" alt="Communicate With Data Original Graph">

    <h3>Analysis</h3>
    <h4>What works well</h4>
    <ul>
        <li>Clear number presentation and organization.</li>
        <li>Visual Distinction: Effective color contrast.</li>
        <li>Integrated Analysis: The dotted line shows the average fatality rate.</li>
        <li>Effective Sorting Logic: The chart is sorted by confirmed cases by the first column.</li>
        <li>Good Alignment: Complies with Gestalt principles.</li>
    </ul>

    <h4>What could be improved</h4>
    <ul>
        <li>Redundant color: The below-zero rates marked in blue.</li>
        <li>Overloaded Numbers: Designed for showing numbers, not showing the pandemic death problem.</li>
        <li>Accessibility: The current design may not be suitable for print, presentation, and elder reading.</li>
        <li>Unproportional bar chart: Exaggerates the death cases.</li>
        <li>Source and date: Missing data source and date.</li>
        <li>Missing Legends and necessary explanation.</li>
        <li>Redundancy: The death data are represented twice.</li>
    </ul>

    <h4>Why I Made the Changes I did</h4>
    <p><strong>Intended Target Audience:</strong> Post-pandemic era readers, elderly audience needs high contrast color and big font to read properly.</p>
    <p><strong>New color pattern:</strong> High-contrast color scheme with white background.</p>
    <p><strong>Bar chart integration with built-in error bars:</strong> Instead of showing the number of 1-day and 7-day changes, error bars represent minor differences.</p>
    <p><strong>Adjust sorting logic:</strong> Sort the data by fatality rate.</p>

    <img src= "{base}/images/projects/communicate_with_data/communicate_with_data2.jpg" alt="Communicate With Data Revised Graph">
    <img src= "{base}/images/projects/communicate_with_data/communicate_with_data3.jpg" alt="Communicate With Data Key Data Graph">

    <h2>Practice 2: Redraw a Complex Commercial Graph</h2>
    <img src= "{base}/images/projects/communicate_with_data/communicate_with_data4.jpg" alt="Communicate With Data Practice 2">

    <h3>Analysis</h3>
    <h4>What works well</h4>
    <ul>
        <li>Clean Design: High data-ink ratio.</li>
        <li>Good Information Hierarchy: Using different font sizes, weights, and distinguished line types.</li>
        <li>Color Contrast: Great usage of hue contrast and brightness.</li>
        <li>Tidy layout: Each bar follows the same width and spacing.</li>
    </ul>

    <h4>What could be improved</h4>
    <ul>
        <li>Overloaded Numbers: Equipped with numbers, not suitable for quick reading.</li>
        <li>Y-axis missing unit and excessive length.</li>
        <li>Source and date: The source was provided in a hard-to-read format.</li>
        <li>Text direction: Titles are in landscape format while others are rotated 90 degrees.</li>
        <li>Too much data and no highlight.</li>
    </ul>

    <h4>Why I Made the Changes I did</h4>
    <div class="changes-wrapper">
        <div class="text-content">
            <p><strong>Intended Target Audience:</strong> A senior manager seeking global investment opportunities.</p>
            <p><strong>Highlighting two top growth countries:</strong> New Zealand and Indonesia.</p>
            <p><strong>Adjusted color pattern:</strong> Adjust the color for better contrast.</p>
            <p><strong>Removing data columns and focus on top countries:</strong> Only show the top five for Western countries, and top three for Asia.</p>
            <p><strong>Pivot the chart by 90 degrees:</strong> Country names are long and should be readable in the current layout.</p>
        </div>
        <div class="image-content">
            <img src= "{base}/images/projects/communicate_with_data/color_wheel.jpg" alt="Communicate With Data Color Wheel">
        </div>
    </div>

    <h3>Redrawed Graph</h3>
    <img src= "{base}/images/projects/communicate_with_data/communicate_with_data5.jpg" alt="Communicate With Data Final Practice 2">
</main>

<style>

    img {
        width: 100%;
        height: auto;
        margin-top: 20px;
        border-radius: 8px;
    }

    .changes-wrapper {
        display: flex;
        justify-content: space-between;
    }
    .text-content {
        width: 75%;
    }
    .image-content {
        width: 25%;
    }
</style>