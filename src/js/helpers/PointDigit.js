const $ = require('jquery');
import {log, table} from './CustomFunction';

export function PointDigit(number, separator) {
    let digitArray = number.toString().split("");
    digitArray = digitArray.reverse();
    let pointDigit = [];
    digitArray.forEach((element, index) => {
        pointDigit.push(element);
        if ((index+1<digitArray.length) && (index + 1) % 3 ==0){
            pointDigit.push(separator);
        }
    });
    return pointDigit.reverse().join("");
}
