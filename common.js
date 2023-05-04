
function createButton()
{
    let button = document.createElement('button');
    button.innerText = 'Open Chords';
    button.style.position = 'absolute';
    button.style.top = '60px';
    button.style.right = '50%';
    button.style.transform = 'translate(50%, 0px)'
    button.style.zIndex = '999';
    button.style.backgroundColor = '#ddd';
    button.style.border = '1px solid #bbb';
    button.style.borderRadius = '4px';
    button.style.padding = '6px';
    button.style.fontSize = '12px';
    return button;
}

function cleanupAndSearch(song_title, artist)
{
    if (song_title == undefined || artist == undefined) return;
    // Cleanup the song title to remove any featured artists if it has one. ex: (feat. artist).
    if (song_title.includes(' ('))
    {
        song_title = song_title.slice(0, song_title.indexOf(' ('));
    }

    if (artist.includes(' ('))
    {
        artist = artist.slice(0, artist.indexOf(' ('));
    }

    // Create a search string for the song.
    let search = song_title + ' by ' + artist;
    
    // Send chrome the message to open the chords sheet in a new tab.
    chrome.runtime.sendMessage({'message': 'open_chords', 'url': 'https://www.ultimate-guitar.com/search.php?search_type=title&value=' + search});
}