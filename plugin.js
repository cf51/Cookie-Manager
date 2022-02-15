

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/


chrome.cookies.getAll({domain: ".mydomain.com"}, function(cookies){
  for(var i=0; i<cookies.length; i++){
    console.log(cookies[i]);
    chrome.cookies.remove({url: "https://" + cookies[i].domain + cookies[i].path, name: cookies[i].name}); 
  }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
 
