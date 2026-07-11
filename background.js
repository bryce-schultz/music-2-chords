// Add a listener for the "open-chords" message.
addOpenChordsListener();

// Function to get the URL for the chords page based on the search query.
function getUrl(search) {
    return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${search}`;
}

// Function to check if a request is valid (has the necessary properties: message and query).
function isValidRequest(request) {
        return request && request.message && request.query;
}

// Function to add a listener for the "open-chords" message.
function addOpenChordsListener() {
    // Add a listener for messages from other parts of the extension.
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

        // Exit if the request does not have the necessary properties.
        if (!isValidRequest(request)) {
            return;
        }

        // Exit if the message is not the open chords message.
        if (request.message !== 'open-chords') {
            return;
        }

        // Get the URL for the chords page based on the search query.
        const url = getUrl(request.query);

        // Open a new tab with the requested URL.
        chrome.tabs.create({ 'url': url });
    });
}