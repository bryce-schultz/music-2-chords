/*
*   Author: Bryce Schultz
*   File: pa_contents.js
*   Purpose: acts as the main code for a pandora chrome extension that allows 
*   the user to quickly open a chord sheet for the current song.
*/

window.onload = (event) => {

    // Create and style a button to use to open a chord sheet.
    button = createButton();
    
    // Add functionality to the buttons on click method.
    button.onclick = (event) => {

        // Find the song title either in Marquee__wrapper div or Marquee__wrapper__content div depending on the song.
        let song_title_div = 
        document.getElementsByClassName(
            'Marquee__wrapper'
            )[0]
        || document.getElementsByClassName(
            'Marquee__wrapper__content'
            )[0];

	let song_title = song_title_div.innerText;

        let artist = 
        document.getElementsByClassName(
            'NowPlayingTopInfo__current__artistName'
            )[0].innerText;

	

        cleanupAndSearch(song_title, artist);
    };

    document.body.appendChild(button);
};

