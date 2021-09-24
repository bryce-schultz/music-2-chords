// Add a chrome message listener
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // If the message is the open chords message, open the request url.
        if( request.message === "open_chords" ) {
            chrome.tabs.create({"url": request.url});
        }
    }
);