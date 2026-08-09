const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const geo = JSON.parse(data);
    const nepal = geo.features.find(f => f.properties.ADMIN === 'Nepal' || f.properties.name === 'Nepal' || f.properties.ISO_A3 === 'NPL');
    fs.writeFileSync('nepal.geojson', JSON.stringify(nepal));
    console.log('Saved nepal.geojson');
  });
});
