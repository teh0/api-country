const $ = require('jquery');
import $ui from 'jquery-ui/ui/widgets/autocomplete';
var countries = require('../../countries.json');


export function AutoComplete(input) {
    let count = [];
    countries.name.forEach(element => {
        count.push(element);
    });
    input.autocomplete({
        source : count,
        messages: {
            noResults: '',
            results: function() {}
        },
        minLength : 3,
    });
}
