let DATA = [
    { id: 'd1', value: 15, region: 'UAE'},
    { id: 'd2', value: 9, region: 'AUS' },
    { id: 'd3', value: 6, region: 'USA' },
    { id: 'd4', value: 11, region: 'UK' }
]

// setting up a scaling function -- helps calculate positions of different data points

let xScale = d3
 .scaleBand()
 .domain(DATA.map((dataPoint) => dataPoint.region))
 .rangeRound([0, 500])
 .padding(0.1);


let yScale = d3.scaleLinear().domain([0, 20]).range([500, 0]);

let container = d3.select('svg')
 .classed('container', true)

container
 .selectAll('.bar')
  .data(DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 500 - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));
