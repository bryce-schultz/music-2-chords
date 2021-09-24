chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) 
    {
        if( request.message === "open_chords" ) 
        {
            chrome.tabs.create({"url": request.url});
        }
    }
);