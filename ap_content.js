/*
*   Author: Bryce Schultz
*   File: ap_contents.js
*   Purpose: acts as the main code for a chrome extension that allows 
*   the user to quickly open a chord sheet for the current song.
*/

function getSongTitle() {
    let songTitleDiv = document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[1];
    if (!songTitleDiv) return;

    return songTitleDiv.innerText;
}

function getArtist() {
    let artistDiv = document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[2];
    if (!artistDiv) return;

    return artistDiv.innerText;
}