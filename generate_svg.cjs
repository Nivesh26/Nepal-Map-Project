const fs = require('fs');
const d3 = require('d3-geo');

const geojson = JSON.parse(fs.readFileSync('nepal.geojson', 'utf8'));

// Create a projection fitting the geojson into a 1200x800 viewBox
const projection = d3.geoMercator().fitSize([1200, 800], geojson);
const pathGenerator = d3.geoPath().projection(projection);

const svgPath = pathGenerator(geojson);
fs.writeFileSync('nepal_path.txt', svgPath);
console.log('Path saved to nepal_path.txt');
