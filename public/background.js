// // This script runs in the background and listens for a click on the extension icon to toggle the state.
// let isActive = true; // Default state

// chrome.action.onClicked.addListener(() => {
//     isActive = !isActive;
//     console.log(`Extension is now ${isActive ? 'active' : 'inactive'}.`);
//     // Change the icon based on the new state
//     chrome.action.setIcon({
//         path: isActive ? 'icons/switch-on.png' : 'icons/switch-off.png',
//     });
// });

// // Use onInstalled for initialization to ensure icon state is correct right after installation or update
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setIcon({
//         path: 'icons/switch-off.png', // Default or retrieve the last state and set accordingly
//     });
// });
