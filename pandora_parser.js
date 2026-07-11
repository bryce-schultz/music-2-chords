/*
*   Author: Bryce Schultz
*   File: pandora_parser.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

// Parse the song title from the page
function getSongTitle() {
    return document.querySelector('[data-qa="playing_track_title"]')?.textContent || "";
}

// Parse the artist from the page
function getArtist() {
    return document.querySelector('[data-qa="playing_artist_name"]')?.textContent || "";
}

// Styles the button for Pandora's interface
function styleButton(button, isDarkMode) {
    button.style.backgroundColor = 'hsla(0,0%,100%,.2)';
    button.style.border = 'none';
    button.style.padding = '0.5rem 2rem';
    button.style.borderRadius = '.2rem';
}