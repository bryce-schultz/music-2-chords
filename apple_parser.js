/*
*   Author: Bryce Schultz
*   File: apple_parser.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

function getMetadataDiv() {
    const musicPlayerIndex = 0;
    const musicPlayer = document.getElementsByClassName('chrome-player')[musicPlayerIndex];
    return musicPlayer;
}

function getTitleMetadataDiv() {
    const titleChild = 0;
    return getMetadataDiv().getElementsByClassName('marquee-line__fragment')[titleChild]
}

function getArtistMetadataDiv() {
    const artistChild = 2;
    return getMetadataDiv().getElementsByClassName('marquee-line__fragment')[artistChild];
}

// Parse the song title from the page
function getSongTitle() {
    const titleMetadataDiv = getTitleMetadataDiv();
    return titleMetadataDiv.textContent;
}

// Parse the artist from the page
function getArtist() {
    const artistMetadataDiv = getArtistMetadataDiv();
    return artistMetadataDiv.textContent;
}

function styleButton(button, isDarkMode) {
    button.style.backdropFilter = 'saturate(220%) blur(16px)';
    button.style.backgroundColor = 'rgba(38, 38, 40, .6)';
    button.style.border = '1px solid hsla(0, 0%, 100%, .15)';
    button.style.borderRadius = '20px';
    button.style.boxShadow = '0 10px 40px rgba(38, 38, 40, .6)';
    button.style.padding = '0.5rem 1rem';
}