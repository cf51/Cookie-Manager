

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/

//This script deals with the functionality within the extnesions user interface

let checked = 0;
console.log(checked)
// Listening event 
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('advertisingCheck');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        alert("BUTTON HAS BEEN CHECKED"); 
        checked = checked + 1;  
        console.log(checked);
      }
    }, false);
  }, false);

