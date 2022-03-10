

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/

//This script deals with the functionality within the extnesions user interface
/*
let checked = 0;
let activeFlag = false; 
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
    var checkButton = document.getElementById('activateCookieManager');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let advertCheck = true;
        console.log("Advertising button = " + advertCheck);
        let activeFlag = true;  
        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAnalyticCookies").disabled = false;
        document.getElementById("essentialOnlyCookies").disabled = false; 
      }
      else{
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("essentialOnlyCookies").disabled = true; 
        let activeFlag = false; 
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
    var checkButton = document.getElementById('essentialOnlyCookies');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let essentialCheck = true;
        console.log("Essential Only  button = " + essentialCheck); 
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("allowAdvertisingCookies").checked = false;
        document.getElementById("allowAnalyticCookies").checked = false;

      }
      else{
        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAnalyticCookies").disabled = false;
      }
    }, false);
  }, false);

  document.getElementById("myCheck").disabled = true;
  */ 