// Add a chrome message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // If the message is the open chords message, open the request url.
        if (request.message === 'open-chords') {
            chrome.tabs.create({ 'url': request.url });
        }
    }
);