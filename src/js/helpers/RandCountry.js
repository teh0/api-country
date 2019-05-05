const $ = require('jquery');
var countries = require('../../countries.json');


export function getRandCountry() {
    let l = countries.name.length;
    let index = Math.floor(Math.random() * l);
    let n = countries.name[index];
    return n;
}