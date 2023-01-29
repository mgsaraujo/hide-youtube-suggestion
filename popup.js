// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    for (let el of document.querySelectorAll('.style-scope ytd-rich-grid-renderer')) el.style.visibility = 'hidden';
}