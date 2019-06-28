const endpoint =  'https://raw.githubusercontent.com/Maughan-Jake/Maughan-Jake.github.io/master/CIT_261/Final/zip.json';

// Create an array that will not be changed
const cities = [];

fetch( endpoint )
    .then( ( response ) => response.json() )
    .then( ( data ) => cities.push( ...data ) );

const suggestions = document.querySelector( '.suggestions' );
const defaultItems = suggestions.innerHTML;

document.querySelector( '.search' ).addEventListener( 'input', handleInput );

function handleInput() {
    const input = this.value;

    if ( input ) {
        suggestions.innerHTML = cities
            .filter( ( City ) => matchesCity( City, input ) )
            .map( ( City ) => itemizeCity( City, input ) )
            .join( '' );
        return;
    }
    suggestions.innerHTML = defaultItems;
}

function matchesCity( { City, State }, input ) {
    const regExp = new RegExp( input, 'i' );
    return regExp.test( City ) || regExp.test( State );
}

function itemizeCity( { City, State, Zipcode }, input ) {
    return (
        `<li onclick="storeZip(${Zipcode})">
            <span>${highlight( City, input )}, ${highlight( State, input )}</span>
            <span class="zipCode">${ Zipcode }</span>
        </li>`
    );
}

function highlight( text, input ) {
    return text.replace( new RegExp( input, 'gi' ), ( match ) => `<span class="hl">${match}</span>` );
}

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