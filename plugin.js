

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/

//This script deals with the functionality within the extnesions user interface

let checked = 0;
let advertCheck = false; 
let analyticsCheck = false; 
let essentialCheck = false; 
console.log(checked)
// Listening event 
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('advertCheck');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let advertCheck = true;
        console.log("Advertising button = " + advertCheck); 
      }
    }, false);
  }, false);

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('analyticsCheck');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let analyticsCheck = true;
        console.log("Analytics button = " + analyticsCheck); 
      }
    }, false);
  }, false);

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('essentialCheck');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let essentialCheck = true;
        console.log("Essential Only  button = " + essentialCheck); 
      }
    }, false);
  }, false);

