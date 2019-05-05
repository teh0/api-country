const $ = require('jquery');


export function SetBackground(country) {
    $.getJSON(`https://pixabay.com/api/?key=1743797-278213b0a52783b43f5900cf9&lang=en&q=${country}`)
    .then((response) => {
        let total = response.hits.length;
        let index = Math.floor(Math.random() * total);
        // console.log(`Numero random : ${index} sur un total de ${total}`);
        let url = response.hits[index].largeImageURL;
        $('body').css('background-image', `url(${url})`);
    });
}