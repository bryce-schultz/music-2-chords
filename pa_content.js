/*
*   Author: Bryce Schultz
*   File: pa_contents.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

// Parse the song title from the page
function getSongTitle() {
    let songTitleDiv = document.getElementsByClassName('Marquee__wrapper')[0] || document.getElementsByClassName('Marquee__wrapper__content')[0];
    if (!songTitleDiv) return;

    return songTitleDiv.innerText;
}

// Parse the artist from the page
function getArtist() {
    let artistDiv = document.getElementsByClassName('NowPlayingTopInfo__current__artistName')[0];
    if (!artistDiv) return;

    return artistDiv.innerText;
}
