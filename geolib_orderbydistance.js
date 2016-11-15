var geolib = require('geolib');
// coords array
console.log(geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, [
    {latitude: 52.516272, longitude: 13.377722},
    {latitude: 51.518, longitude: 7.45425},
    {latitude: 51.503333, longitude: -0.119722}
]));

// coords object
console.log(geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, {
    a: {latitude: 52.516272, longitude: 13.377722},
    b: {latitude: 51.518, longitude: 7.45425},
    c: {latitude: 51.503333, longitude: -0.119722}
}));