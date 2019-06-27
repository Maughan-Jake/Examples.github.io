const endpoint =  'https://raw.githubusercontent.com/Maughan-Jake/Maughan-Jake.github.io/master/CIT_261/Final/zip.json';



// Create an array that will not be changed
const cities = [];

/* The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP 
*   pipeline, such as requests and responses. It also provides a global fetch() method that provides 
*   an easy, logical way to fetch resources asynchronously across the network.
*
*  This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better 
*   alternative that can be easily used by other technologies such as Service Workers. Fetch also 
*   provides a single logical place to define other HTTP-related concepts such as CORS and 
*   extensions to HTTP.
*
*   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // Find out if the zip codes match what is searched
        const regex = new RegExp(wordToMatch, 'gi'); //The RegExp constructor creates a regular expression object for matching text with a pattern
        return place.Zipcode.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.Zipcode}, ${place.State}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);