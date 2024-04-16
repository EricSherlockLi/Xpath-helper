// contentScript.js
let xpathScannerEnabled = false; // Local state in the content script

// Listener for state update messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === "UPDATE_STATE") {
        xpathScannerEnabled = message.state;
    }
});

document.addEventListener('contextmenu', function (event) {
    if (xpathScannerEnabled) {
        event.preventDefault();  // Prevent the default context menu
        const clickedElement = event.target;
        const xpath = generateXPath(clickedElement);
        alert(`XPath: ${xpath}`); // Use browser alert to display XPath
    }
});

function generateXPath(element) {
    let path = '';
    while (element && element.nodeType === Node.ELEMENT_NODE) {
        if (element.id) {
            return `id("${element.id}")` + path;
        }
        const index = Array.from(element.parentNode.children).indexOf(element) + 1;
        const part = `${element.tagName.toLowerCase()}[${index}]`;
        path = '/' + part + path;
        element = element.parentNode;
    }
    return path;
}
