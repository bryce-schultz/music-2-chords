/*
*   Author: Bryce Schultz
*   File: spotify_parser.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

// Parse the song title from the page
function getSongTitle() {
    return document.querySelector('[data-testid="context-item-info-title"]')?.textContent || "";
}

// Parse the artist from the page
function getArtist() {
    return document.querySelector('[data-testid="context-item-info-artist"]')?.textContent || "";
}

// Styles the button for Spotify's interface
function styleButton(button, isDarkMode) {
    button.style.backgroundColor = '#ffffff';
    button.style.color = '#000';
    button.style.fontWeight = 'bold';
    button.style.border = 'none';
    button.style.padding = '0.5rem 2rem';
    button.style.borderRadius = '20px';
}