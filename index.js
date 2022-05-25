// African countries list
const countries = [
    {
        image: "https://flagcdn.com/256x192/dz.png",
        country: 'Algeria',
        capitalCity: 'algiers',
        continent: 'Africa',
        population: '43000000'
    },
    {
        image: "https://flagcdn.com/256x192/ao.png",
        country: 'Angola',
        capitalCity: 'Luanda',
        continent: 'Africa',
        population: '31127647'
    },
    {
        image: "https://flagcdn.com/256x192/bj.png",
        country: 'Benin',
        capitalCity: 'Porto-novo',
        continent: 'Africa',
        population: '11733059'
    },
    {
        image: "https://flagcdn.com/256x192/ke.png",
        country: 'Kenya',
        capitalCity: 'Nairobi',
        continent: 'Africa',
        population: '47564296'
    },
    {
        image: "https://flagcdn.com/256x192/ng.png",
        country: 'Nigeria',
        capitalCity: 'Abuja',
        continent: 'Africa',
        population: '200963599'
    },
    {
        image: "https://flagcdn.com/256x192/rw.png",
        country: 'Rwanda',
        capitalCity: 'Kigali',
        continent: 'Africa',
        population: '12374397'
    },
    {
        image: "https://flagcdn.com/256x192/sn.png",
        country: 'Senegal',
        capitalCity: 'Dakar',
        continent: 'Africa',
        population: '16209125'
    },
    {
        image: "https://flagcdn.com/256x192/za.png",
        country: 'South Africa',
        capitalCity: 'Cape town',
        continent: 'Africa',
        population: '58775022'
    },
    {
        image: "https://flagcdn.com/256x192/tz.png",
        country: 'Tanzania',
        capitalCity: 'Dodoma',
        continent: 'Africa',
        population: '55890747'
    },
    {
        image: "https://flagcdn.com/256x192/ug.png",
        country: 'Uganda',
        capitalCity: 'Kampala',
        continent: 'Africa',
        population: '40299300'
    },
    {
        image: "https://flagcdn.com/256x192/zm.png",
        country: 'zambia',
        capitalCity: 'Lusaka',
        continent: 'Africa',
        population: '17381168'
    },
    {
        image: "https://flagcdn.com/256x192/sd.png",
        country: 'Sudan',
        capitalCity: 'Khartoum',
        continent: 'Africa',
        population: '42295645'
    },
    {
        image: "https://flagcdn.com/256x192/tg.png",
        country: 'Togo',
        capitalCity: 'Lome',
        continent: 'Africa',
        population: '7538000'
    },
    {
        image: "https://flagcdn.com/256x192/so.png",
        country: 'Somali',
        capitalCity: 'Mogadishu',
        continent: 'Africa',
        population: '15422905'
    },
    {
        image: "https://flagcdn.com/256x192/mw.png",
        country: 'Malawi',
        capitalCity: 'Lilongwe',
        continent: 'Africa',
        population: '17563749'
    },
    {
        image: "https://flagcdn.com/256x192/ml.png",
        country: 'Mali',
        capitalCity: 'Bamako',
        continent: 'Africa',
        population: '1997300'
    },
];

const items = document.querySelector('.items');

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItem(countries);
});

function displayMenuItem(menuItem){
    let countryDisplay = menuItem.map(function(item){
        return `<!-- start of single country -->
        <div class="single-item">
            <img
            src=${item.image}>
            <div class="info">
                <div class="ctry"><span>country</span>: ${item.country}</div>
                <div class="city"><span>capital city</span>: ${item.capitalCity}</div>
                <div class="cont"><span>continent</span>: ${item.continent}</div>
                <div class="pop"><span>population</span>: ${item.population}</div>
            </div>
        </div>
        <!-- end of single country -->`
    })

    countryDisplay = countryDisplay.join(' ');
    items.innerHTML = countryDisplay;
}




