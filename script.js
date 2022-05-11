//document.getElementById("lpc-button").style.backgroundColor = "#ff0000";
//console.log("This has worked 1"); 
//document.getElementById("myP").style.color = "magenta";
//document.getElementById("myP2").style.color = "blue";
//document.getElementById("myDiv").style.color = "lightblue";

var delay = 100; 
var delay1 = 3000; // 3 second delay
var delay2 = 5000; 
var delay3 = 7000; 

var checked = 0;
var activeFlag = 0; 
let advertCheck = false; 
let analyticsCheck = false; 
let essentialCheck = false; 
console.log(checked)

/*
localStorage.setItem('activeFlag', 'false');
localStorage.setItem('essentialFlag', 'false');
localStorage.setItem('advertisingFlag', 'false');
localStorage.setItem('analyticFlag', 'false');
*/ 
//alert("FLAG: " + localStorage.getItem("activeFlag"));
// Listening event 

/*
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });

  */ 

// ACTIVATE COOKIE MANAGER BUTTON EVENT
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('activateCookieManager');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        localStorage.setItem("activeFlag", "true"); 
        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAnalyticCookies").disabled = false;
        document.getElementById("essentialOnlyCookies").disabled = false; 
        
        console.log("Active Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("activeFlag"));
        //alert("Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("activeFlag")); 
      }
      else{
        localStorage.setItem("activeFlag", "false");
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("essentialOnlyCookies").disabled = true; 

        console.log("Active Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("activeFlag"));
        //alert("Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("activeFlag")); 
      }
    }, false);
  }, false);


  // ACTIVE ANALYTICS BUTTON EVENT
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('allowAnalyticCookies');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        localStorage.setItem("analyticFlag", "true");
        console.log("Analytics Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("analyticFlag"));
      }
      else{
        localStorage.setItem("analyticFlag", "false");
        console.log("Analytics Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("analyticFlag"));
      }
    }, false);
  }, false);

// ACTIVE ADVERTISING BUTTON EVENT 
document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('allowAdvertisingCookies');
  checkButton.addEventListener('change', function() {
    if (checkButton.checked){
      localStorage.setItem("advertisingFlag", "true"); 
      console.log("Advertising Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("advertisingFlag"));
    }
    else{
      localStorage.setItem("advertisingFlag", "false");
      console.log("Advertising Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("advertisingFlag"));
    }
  }, false);
}, false);

// ACTIVE ESSENTIAL BUTTON EVENT 
document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('essentialOnlyCookies');
  checkButton.addEventListener('change', function() {
    if (checkButton.checked){
      localStorage.setItem("essentialFlag", "true"); 
      document.getElementById("essentialOnlyCookies").checked = true;
      document.getElementById("allowAdvertisingCookies").disabled = true;
      document.getElementById("allowAnalyticCookies").disabled = true;
      document.getElementById("allowAdvertisingCookies").checked = false;
      document.getElementById("allowAnalyticCookies").checked = false;
      console.log("Essential Only Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("essentialFlag"));
    }
    else{
      localStorage.setItem("essentialFlag", "false");
      document.getElementById("essentialOnlyCookies").checked = false;
      document.getElementById("allowAdvertisingCookies").disabled = false;
      document.getElementById("allowAnalyticCookies").disabled = false;
      console.log("Essential Only Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("essentialFlag"));
    }
  }, false);
}, false);


// TOOL IS ACTIVE 
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("activeFlag") === "true"){ 
      document.getElementById("activateCookieManager").checked = true;
      document.getElementById("allowAdvertisingCookies").disabled = false;
      document.getElementById("allowAnalyticCookies").disabled = false;
      document.getElementById("essentialOnlyCookies").disabled = false; 
      //---------------------------------------------------------------
    }
    else{
      /*
      localStorage.setItem("analyticFlag", "false");
      localStorage.setItem("advertisingFlag", "false");
      localStorage.setItem("essentialFlag", "false"); 
      console.log("Essential Only Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("essentialFlag"));
      console.log("Advertising Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("advertisingFlag"));
      console.log("Analytics Button: " + checkButton.checked + " & " + "Flag: " + localStorage.getItem("analyticFlag"));
      */ 
      
    }
  }, false);

  // ANALYTICS IS ACTIVE 
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem("analyticFlag") === "true"){ 
    document.getElementById("allowAnalyticCookies").checked = true;
    //---------------------------------------------------------------
  }
  else{
    document.getElementById("allowAnalyticCookies").checked = false;
  }
}, false);

// ADVERTISING IS ACTIVE 
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem("advertisingFlag") === "true"){ 
    document.getElementById("allowAdvertisingCookies").checked = true;
    //---------------------------------------------------------------
  }
  else{
    document.getElementById("allowAdvertisingCookies").checked = false;
  }
}, false);

// ESSENTIAL IS ACTIVE 
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem("essentialFlag") === "true"){ 
    //document.getElementById("activateCookieManager").checked = true;
    document.getElementById("allowAdvertisingCookies").disabled = true;
    document.getElementById("allowAnalyticCookies").disabled = true;
    document.getElementById("allowAdvertisingCookies").checked = false;
    document.getElementById("allowAnalyticCookies").checked = false;
    document.getElementById("essentialOnlyCookies").disabled = false; 
    document.getElementById("essentialOnlyCookies").checked = true;
  }
  else{
    document.getElementById("essentialOnlyCookies").checked = false; 
  }
}, false);

  // EVENT HANDLER FOR SHOPPING MODE ACTIVATED
  document.addEventListener('DOMContentLoaded', function() {
    var checkInputForm = document.getElementById('slct');
    checkInputForm.addEventListener('change', function() {
      if (checkInputForm.value == "#2"){
        document.getElementById("activateCookieManager").disabled = false;
        document.getElementById("activateCookieManager").checked = true;

        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAdvertisingCookies").checked = true;

        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").checked = false;

        document.getElementById("essentialOnlyCookies").disabled = true; 
        document.getElementById("essentialOnlyCookies").checked = false; 

      }
    }, false);
  }, false);

  // EVENT HANDLER FOR MAX PRIVACY MODE ACTIVATED
  document.addEventListener('DOMContentLoaded', function() {
    var checkInputForm = document.getElementById('slct');
    checkInputForm.addEventListener('change', function() {
      if (checkInputForm.value == "#1"){
        document.getElementById("activateCookieManager").disabled = false;
        document.getElementById("activateCookieManager").checked = true;
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAdvertisingCookies").checked = false;

        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").checked = false;

        document.getElementById("essentialOnlyCookies").disabled = false; 
        document.getElementById("essentialOnlyCookies").checked = true; 

      }
    }, false);
  }, false);

    // EVENT HANDLER FOR OPEN MODE ACTIVATED
    document.addEventListener('DOMContentLoaded', function() {
      var checkInputForm = document.getElementById('slct');
      checkInputForm.addEventListener('change', function() {
        if (checkInputForm.value == "#3"){
          document.getElementById("activateCookieManager").disabled = false;
          document.getElementById("activateCookieManager").checked = true;

          document.getElementById("allowAdvertisingCookies").disabled = false;
          document.getElementById("allowAdvertisingCookies").checked = true;
  
          document.getElementById("allowAnalyticCookies").disabled = false;
          document.getElementById("allowAnalyticCookies").checked = true;
  
          document.getElementById("essentialOnlyCookies").disabled = true; 
          document.getElementById("essentialOnlyCookies").checked = false; 
  
        }
      }, false);
    }, false);

      // EVENT HANDLER FOR DARK MODE/LIGHT MODE ACTIVATED
      document.addEventListener('DOMContentLoaded', function() {
      var checkThemeForm = document.getElementById('darkMode');
      checkThemeForm.addEventListener('change', function() {
        if (checkThemeForm.value == "#2"){
          var element = document.body;
          element.classList.toggle("dark-mode");
          //localStorage.setItem("themeFlag", "dark"); 
        }
        else if(checkThemeForm.value =="#1") {
          var element = document.body;
          element.classList.toggle("light-mode");
          //localStorage.setItem("themeFlag", "light"); 
        }
      }, false);
    }, false);

// USE THIS LOCAL STORAGE STUFF https://dev.to/mattmarquise/implement-dark-mode-on-your-website-5c5a#demo

/*
  // EVENT HANDLER FOR ESSENTIAL ONLY COOKIES BUTTON
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('essentialOnlyCookies');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        localStorage.setItem("essentialFlag", "true");
        //alert("Flag is " + localStorage.getItem("essentialFlag")); Debugging
        document.getElementById("essentialOnlyCookies").checked = true;
        document.getElementById("allowAdvertisingCookies").disabled = true;
        document.getElementById("allowAnalyticCookies").disabled = true;
        document.getElementById("allowAdvertisingCookies").checked = false;
        document.getElementById("allowAnalyticCookies").checked = false;
      }
      else{
        localStorage.setItem("essentialFlag", "false"); 
        //alert("Flag is " + localStorage.getItem("essentialFlag")); Debugging
        document.getElementById("essentialOnlyCookies").checked = false;
        document.getElementById("allowAdvertisingCookies").disabled = false;
        document.getElementById("allowAnalyticCookies").disabled = false;
      }
    }, false);
  }, false);

  */

  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('darkMode');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        let analyticsCheck = true;
        alert("Dark mode button");
        var element = document.body;
        element.classList.toggle("dark-mode");
      }
    }, false);
  }, false);
//document.getElementById("lpc-button").click();
//document.getElementsByClassName("a.a8c-cookie-banner-accept-all-button").click();
/*
if(localStorage.getItem("advertisingFlag") === "true" && localStorage.getItem("analyticFlag") === "true"){
  alert("This has worked now callum they aeeee")
  //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
  document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").style.backgroundColor = "#38df11";
}
*/ 
/*

/*
// ACCEPT ALL  (Advertising ON, Analytics ON) **WHITELIST WEBSITE**
setTimeout(function(){
    console.log("Clicking the accept all button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
}, delay);

/*
// ANALYTICS OFF (Essential ONLY) **BLACKLIST WEBSITE**
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
/*
// DEMO MODE
// TESTING (Will select and change the colour of the button)
setTimeout(function(){
    //Clicking the customisation button
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").style.backgroundColor = "#38df11";
    //alert(activeFlag); 
}, delay1);

setTimeout(function(){
     //Changing the advertising button to red
     document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > strong").style.color = "#ff0000";
     //Clicking the advertising button
     //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > input").click();
     document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(3) > strong").style.color = "#38df11";
     
     
     //alert(activeFlag); 
}, delay2);

  setTimeout(function(){
    //Changing the button to red
        document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").style.backgroundColor = "#ff0000";
        document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").style.backgroundColor = "#38df11";
}, delay3);

/*
function fun(){

}

setTimeout(function(){
  if (localStorage.getItem("activeFlag") === 'true') {
    alert("The flag is not active boy"); 
  }
}, delay);
*/ 