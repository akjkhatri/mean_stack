const https = require('https');
const cheerio = require('cheerio');
const argv = require('yargs').argv;

const url = 'https://www.foodpanda.pk/';


let city = argv.cityname.toUpperCase();

let $ = {};

let city_name = [];


https.get(url, (response) => {
    response.on('data', (chunk =>{
        $ = cheerio.load(chunk.toString('utf8'));
        city_name += $('.city-name').text().trim().toUpperCase() + '\n';

    }));
    response.on('end', () => {
        city_name = city_name.trim().split('\n');
        console.log(city_name);
        if(city_name.includes(city)){
            return console.log('\nWe are Delivering in your City.');
        }else{
            return console.log('\nSorry! We are not currently functional in your area.');
        }
    });

    response.on('error', (err) => {
        console.error(err);
    })
});





// restaurants-search-form__input restaurants__location__input 

// button restaurants-search-form__button js-restaurants-search-submit restaurants-search-form__button--full js-restaurants-search-button gtm-homepage-delivery-button js-ripple

//Something went wrong! We do not recognise the address you entered. Please try again.