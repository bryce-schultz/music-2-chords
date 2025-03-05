/*
*   Author: Bryce Schultz
*   File: pa_contents.js
*   Purpose: acts as the main code for a chrome extension that allows 
*   the user to quickly open a chord sheet for the current song.
*/

function getSongTitle() {
    let songTitleDiv = document.getElementsByClassName('Marquee__wrapper')[0] || document.getElementsByClassName('Marquee__wrapper__content')[0];
    if (!songTitleDiv) return;

    return songTitleDiv.innerText;
}

function getArtist() {
    let artistDiv = document.getElementsByClassName('NowPlayingTopInfo__current__artistName')[0];
    if (!artistDiv) return;

    return artistDiv.innerText;
}
