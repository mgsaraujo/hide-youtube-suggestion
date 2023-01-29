
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    console.log('teste11')
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.onActivated.addListener(function (tabId, info) {
        console.log('teste11')
        if (info.status === 'complete') {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                func: setPageBackgroundColor,
            });
        }
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    console.log('teste22')
    for (let el of document.querySelectorAll('.style-scope ytd-rich-grid-renderer')) el.style.visibility = 'hidden';
}