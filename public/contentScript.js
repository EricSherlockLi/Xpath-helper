// // This script generates an XPath for the right-clicked element and sends it to the popup.

// function generateXPath(element) {
//     if (element.id) return `id("${element.id}")`;
//     if (element === document.body) return element.tagName;

//     let ix = 0;
//     const siblings = element.parentNode.childNodes;
//     for (let i = 0; i < siblings.length; i++) {
//         const sibling = siblings[i];
//         if (sibling === element) return `${generateXPath(element.parentNode)}/${element.tagName}[${ix + 1}]`;
//         if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
//     }
// }

// document.addEventListener('contextmenu', function (event) {
//     chrome.storage.local.get(['isActive'], (result) => {
//         if (result.isActive) {
//             const xpath = generateXPath(event.target);
//             console.log(`Generated XPath: ${xpath}`);
//             // Send XPath to popup or background as needed
//             // Note: You'll need to set up message passing between content script and popup/background.
//         }
//     });
// }, true);
