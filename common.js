/*
*   Author: Bryce Schultz
*   File: common.js
*   Purpose: Handles setting up the button and dark mode listener.
*/

/* Example on how to override the default style of the button
function styleButton(button, isDarkMode) {
}
*/

// Setup the extension
window.onload = () => {
    // Create the button
    button = createButton();
    
    // Setup the on click event for the button
    button.onclick = () => {
        let songTitle = '';
        let artist = '';
        try {
            // Get the song title from the page, if the function is defined
            if (getSongTitle && typeof getSongTitle === 'function') {
                songTitle = getSongTitle();
            }

            // Get the artist from the page, if the function is defined
            if (getArtist && typeof getArtist === 'function') {
                artist = getArtist();
            }
        } catch (e) {
            // The getSongTitle or getArtist function is not defined, so do nothing
            return;
        }

        // If the song title or artist is empty, return.
        if (songTitle == '' || artist == '') return;
        cleanupAndSearch(songTitle, artist);
    };

    addButton(button);
}

// ---------------------------------------- Functions ----------------------------------------

// Returns the url to search for the chords of the song.
function getUrl(search) {
    const chordsUrl = 'https://www.ultimate-guitar.com/search.php?search_type=title&value=';
    return chordsUrl + search;
}

// Provides the default styling for the button
function styleButtonDefault(button, isDarkMode) {
    button.style.backgroundColor = isDarkMode ? '#4D4D4D' : '#ddd';
    button.style.border = isDarkMode ? '1px solid #2C2C2C' : '1px solid #bbb';
    button.style.color = isDarkMode ? '#fff' : '#000';
    button.style.border = isDarkMode ? '1px solid rgb(31,31,31)' : '1px solid #bbb';
    button.style.borderRadius = '4px';
    button.style.padding = '6px';
    button.style.fontSize = '12px';
}

// Creates the button and sets up the dark mode listener
function createButton() {
    // Create the button and position it on the page
    let button = document.createElement('button');
    button.innerText = 'Chords';
    button.style.position = 'absolute';
    button.style.top = '60px';
    button.style.right = '50%';
    button.style.transform = 'translate(50%, 0px)'
    button.style.zIndex = '999';

    // setup the dark mode listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e) => {
        const isDarkMode = e.matches;

        // style the button
        styleButtonDefault(button, isDarkMode);

        // If the styleButton function is defined, call it
        try {
            if (styleButton && typeof styleButton === 'function') {
                styleButton(button, isDarkMode);
            }
        } catch (e) {
            // the styleButton function is not defined, so do nothing
        }
    }

    // Initial check
    handleDarkModeChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleDarkModeChange);
    return button;
}

// Removes featuring from the song title and artist
function removeFeaturing(input) {
    // Remove Featuring and everything after it
    input = input.replace(/\s?Featuring.*/, '');

    // Remove ft. and everything after it
    input = input.replace(/\s?ft.*/, '');

    // Remove everything after the first '('
    input = input.replace(/\s?\(.*\)/, '');

    return input;
}

// Cleans up the song title and artist and searches for the chords
function cleanupAndSearch(songTitle, artist) {
    if (songTitle == undefined || artist == undefined) return;

    // Remove featuring from the song title
    songTitle = removeFeaturing(songTitle);

    // Remove featuring from the artist
    artist = removeFeaturing(artist);

    // Create a search string for the song.
    let search = songTitle + ' by ' + artist;
    
    // Send chrome the message to open the chords sheet in a new tab.
    chrome.runtime.sendMessage({ 'message': 'open-chords', 'url': getUrl(search) });
}

// Adds the button to the page
function addButton(button) {
    document.body.appendChild(button);
}