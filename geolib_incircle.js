var geolib = require('geolib');
// checks if 51.525, 7.4575 is within a radius of 5km from 51.5175, 7.4678
console.log(geolib.isPointInCircle(
    {latitude: 51.525, longitude: 7.4575},
    {latitude: 51.5175, longitude: 7.4678},
    5000
));