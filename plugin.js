

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/


// Listening event 
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });
 
