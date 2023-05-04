/*
*   Author: Bryce Schultz
*   File: ap_contents.js
*   Purpose: acts as the main code for a apple music chrome extension that allows 
*   the user to quickly open a chord sheet for the current song.
*/

window.onload = (event) => {

    // Create and style a button to use to open a chord sheet.
    button = createButton();
    
    // Add functionality to the buttons on click method.
    button.onclick = (event) => {

        // Find the song title either in Marquee__wrapper div or Marquee__wrapper__content div depending on the song.
        let song_title = 
        document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[1].innerText;

        // Parse out the song title and artist from the page
        let artist =
        document.getElementsByTagName('amp-lcd')[0].shadowRoot.children[1].getElementsByClassName('lcd-meta-line__fragment')[2].innerText;

        cleanupAndSearch(song_title, artist);
    };

    document.body.appendChild(button);
};