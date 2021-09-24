/*
*   Author: Bryce Schultz
*   File: contents.js
*   Purpose: acts as the main code for a pandora chrome extension that allows 
*   the user to quickly open a chord sheet for the current song.
*/

window.onload = (event) => {

    // Create and style a button to use to open a chord sheet.
    let button = document.createElement('button');
    button.innerText = 'Open Chords';
    button.style.position = 'absolute';
    button.style.top = '60px';
    button.style.right = '50%';
    button.style.transform = 'translate(50%, 0px)'
    button.style.zIndex = '999';
    
    // Add functionality to the buttons on click method.
    button.onclick = (event) => {

        // Find the song title either in Marquee__wrapper div or Marquee__wrapper__content div depending on the song.
        let song_title_div = document.getElementsByClassName('Marquee__wrapper')[0] 
        || document.getElementsByClassName('Marquee__wrapper__content')[0];

        // Parse out the song title and artist from the page
        let song_title = song_title_div.innerText;
        let artist = document.getElementsByClassName('NowPlayingTopInfo__current__artistName')[0].innerText;

        // Cleanup the song title to remove any featured artists, etc. ex: (feat. artist).
        song_title = song_title.slice(0, song_title.indexOf(' ('));

        // Create a search string for the song.
        let search = song_title + ' by ' + artist;
        
        // Send chrome the message to open the chords sheet in a new tab.
        chrome.runtime.sendMessage({'message': 'open_chords', 'url': 'https://www.ultimate-guitar.com/search.php?search_type=title&value=' + search});
    };

    document.body.appendChild(button);
};

