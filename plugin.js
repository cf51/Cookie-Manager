

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/


// This functio should create a cookie when a vistor comes onto the web page
function setCookie(name, vlaue, days){
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + ";" + expires + ";path=/";
}
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
