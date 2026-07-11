/*
*   Author: Bryce Schultz
*   File: ap_contents.js
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