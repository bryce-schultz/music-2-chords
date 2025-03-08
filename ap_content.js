/*
*   Author: Bryce Schultz
*   File: ap_contents.js
*   Purpose: Provides the functions to get the song title and artist from the current page.
*/

function getMetadataDiv() {
    const musicPlayer = document.getElementsByTagName('amp-lcd')[0].shadowRoot;
    const metaData = musicPlayer.querySelector('amp-lcd-metadata .lcd-meta');
    return metaData;
}

function getTitleMetadataDiv() {
    const titleChild = 0;
    return getMetadataDiv().children[titleChild];
}

function getArtistMetadataDiv() {
    const artistChild = 1;
    return getMetadataDiv().children[artistChild];
}

// Parse the song title from the page
function getSongTitle() {
    const titleMetadataDiv = getTitleMetadataDiv();

    const songTitleQuery = 'span.lcd-meta-line__fragment';
    let songTitleDiv = titleMetadataDiv.querySelector(songTitleQuery);
    if (!songTitleDiv) return "";

    return songTitleDiv.innerText;
}

// Parse the artist from the page
function getArtist() {
    const artistMetadataDiv = getArtistMetadataDiv();
    
    const artistQuery1 = 'button.lcd-meta-line__fragment';
    let artistDiv = artistMetadataDiv.querySelector(artistQuery1);
    if (!artistDiv) 
    {
        const artistQuery2 = 'span.lcd-meta-line__fragment';
        artistDiv = artistMetadataDiv.querySelector(artistQuery2);
    }

    if (!artistDiv) return "";

    return artistDiv.innerText;
}