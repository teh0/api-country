import '../sass/style.scss'
import './helpers/PointDigit'
import { getRandCountry } from './helpers/RandCountry';
import { AutoComplete } from './helpers/Autocomplete';
import { AddFlag } from './helpers/AddFlag';
import { PointDigit } from './helpers/PointDigit';
import { SetBackground } from './helpers/SetBackground';

let randcountry = getRandCountry();
let input = $('#input-country');
let animeLanguage = () => {
    $('#open').click(()=>{
        $('#bloc-lang').addClass('isOpened');
        $('#open').addClass('isHided');
    });

    $('#close').click(()=>{
        $('#bloc-lang').removeClass('isOpened');
        $('#open').removeClass('isHided');
    });
};

let requestCountry = (country) => {
    $.getJSON(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then((response) => {
        let data_country =  response[0];
        console.log(data_country);
        // Inject variables into the view
        $('#name-country').text(data_country.name);
        $('#capital').text(data_country.capital);
        $('#pop').text(PointDigit(data_country.population, ','));
        $('#nat-name').text(data_country.nativeName);
        $('#transFr').text(data_country.translations.fr);
        $('#transSpain').text(data_country.translations.es);
        $('#transJap').text(data_country.translations.ja);
        $('#transGerm').text(data_country.translations.de);
        $('#tld').text(data_country.topLevelDomain);
        AddFlag(data_country.flag);
    });
};

let randomCountry = () => {
    $('button#random').click(()=>{
        let randcountry = getRandCountry();
        requestCountry(randcountry);
        SetBackground(randcountry);
    })
};
let postForm = () => {
    $("#search-form").submit(function(){
        let country = $('#input-country').val();
        $('#input-country').val('');
        requestCountry(country);
        SetBackground(country);
        return false;
    });
}
SetBackground(randcountry);
requestCountry(randcountry);
postForm();
AutoComplete(input);
randomCountry();
animeLanguage();
