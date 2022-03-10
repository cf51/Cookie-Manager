//document.getElementById("lpc-button").style.backgroundColor = "#ff0000";
//console.log("This has worked 1"); 
//document.getElementById("myP").style.color = "magenta";
//document.getElementById("myP2").style.color = "blue";
//document.getElementById("myDiv").style.color = "lightblue";

var delay = 3000; // 3 second delay
var delay2 = 5000; 
var delay3 = 7000; 

var checked = 0;
var activeFlag = 0; 
let advertCheck = false; 
let analyticsCheck = false; 
let essentialCheck = false; 
console.log(checked)
// Listening event 

/*
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });

  */ 

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('activateCookieManager');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        activeFlag = activeFlag + 1;
        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAnalyticCookies").disabled = false;
        document.getElementById("essentialOnlyCookies").disabled = false; 
        //alert(activeFlag); 
      }
      else{
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("essentialOnlyCookies").disabled = true; 
        //activeFlag = 0; 
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


  function flagChecker(){
      alert(activeFlag); 
  }
//document.getElementById("lpc-button").click();
//document.getElementsByClassName("a.a8c-cookie-banner-accept-all-button").click();

/*
// ACCEPT ALL  (Advertising ON, Analytics ON)
setTimeout(function(){
    console.log("Clicking the accept all button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
}, delay);

/*
// ANALYTICS OFF (Essential ONLY)
setTimeout(function(){
    console.log("Clicking the customisation button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    console.log("Un-clicking the accept button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(3) > input").click();
    console.log("Clicking the accept selection button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").click();
}, delay);

// ANALYTICS ON (Analytics ON)
setTimeout(function(){
    console.log("Clicking the customisation button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    console.log("Clicking the accept selection button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").click();
}, delay);

// ADVERTISING ON (Advertising ON)
setTimeout(function(){
    console.log("Clicking the customisation button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    console.log("Un-clicking the accept button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(3) > input").click();
    console.log("Clicking the advertising button button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > input").click();
    console.log("Clicking the accept selection button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").click();
}, delay);

*/ 
// DEMO MODE
// TESTING (Will select and change the colour of the button)
setTimeout(function(){
    //Clicking the customisation button
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    alert(activeFlag); 
}, delay);

setTimeout(function(){
     //Changing the advertising button to red
     //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > strong").style.color = "#ff0000";
     //Clicking the advertising button
     document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > input").click();
     alert(activeFlag); 
}, delay2);

setTimeout(function(){
    //Changing the button to red
    if (activeFlag == 1){
        document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").style.backgroundColor = "#ff0000";
    }
    else{
        document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").style.backgroundColor = "#38df11";
    }
}, delay3);
 

