
var countries = require('../countries.json');
console.log(countries);

let startA = (n,i) => {
    return(n == 'Angola');
}
let test = countries.name.filter(startA);
console.log(test);