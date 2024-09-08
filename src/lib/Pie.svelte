<script>
    import * as d3 from 'd3';

    // Data for the pie chart
    let data = [1, 2];

    // Colors for each slice
    let colors = ['gold', 'purple'];

    // Create the arc generator for the pie chart
    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

    // Total sum of the data for calculating proportions
    let total = data.reduce((acc, val) => acc + val, 0);

    // Calculate start and end angles for each slice
    let angle = 0;
    let arcData = data.map(d => {
        let endAngle = angle + (d / total) * 2 * Math.PI;
        let arc = { startAngle: angle, endAngle };
        angle = endAngle;
        return arc;
    });

    // Generate the arc paths
    let arcs = arcData.map(d => arcGenerator(d));
</script>

<svg viewBox="-50 -50 100 100">
    {#each arcs as arc, index}
        <path d={arc} fill={colors[index]} />
    {/each}
</svg>
