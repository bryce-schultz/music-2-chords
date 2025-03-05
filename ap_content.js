/*
*   Author: Bryce Schultz
*   File: ap_contents.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

// Parse the song title from the page
function getSongTitle() {
    let songTitleDiv = document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[1];
    if (!songTitleDiv) return;

    return songTitleDiv.innerText;
}

// Parse the artist from the page
function getArtist() {
    let artistDiv = document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[2];
    if (!artistDiv) return;

    return artistDiv.innerText;
}