// background.js
let xpathScannerEnabled = false;  // Default state

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === "toggle") {
        xpathScannerEnabled = !xpathScannerEnabled;
        // Broadcast the new state to all content scripts
        chrome.tabs.query({}, function (tabs) {
            for (let tab of tabs) {
                chrome.tabs.sendMessage(tab.id, { type: "UPDATE_STATE", state: xpathScannerEnabled });
            }
        });
        sendResponse({ enabled: xpathScannerEnabled });
        return true;
    }
});
