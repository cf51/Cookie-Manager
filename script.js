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

//localStorage.setItem('activeFlag', 'false');
//alert("FLAG: " + localStorage.getItem("activeFlag"));
// Listening event 

/*
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Console:', `color: ${color}`);
  });

  */ 

  //localStorage.setItem("activeFlag", "true"); 

//alert("The flag is " + localStorage.getItem("activeFlag"));
// ACTIVATE COOKIE MANAGER BUTTON
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('activateCookieManager');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        localStorage.setItem("activeFlag", "true"); 
        //alert("the button is true"); 
        //activeFlag = activeFlag + 1;
        //document.getElementById("allowAdvertisingCookies").disabled = false;
        //document.getElementById("allowAnalyticCookies").disabled = false;
        //document.getElementById("essentialOnlyCookies").disabled = false; 
        //document.getElementById("activateCookieManager").checked = true; 
        //localStorage.setItem('activeFlag', 'true'); 
        //alert(activeFlag); 
        //localStorage.setItem('activeFlag', 'true');
        //alert("Flag is "+ localStorage.getItem('activeFlag')); 
       // alert("Flag is "+ localStorage.getItem('activeFlag')); 
      }
      else{
        //document.getElementById("allowAdvertisingCookies").disabled = true;
        //document.getElementById("allowAnalyticCookies").disabled = true;
        //document.getElementById("essentialOnlyCookies").disabled = true; 
        //localStorage.setItem('activeFlag', 'false'); 
        //activeFlag = 0; 
      }
    }, false);
  }, false);
  
  //alert("The flag is " + localStorage.getItem("activeFlag"));
// ACTIVATE COOKIE MANAGER BUTTON
document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('activateCookieManager');
  checkButton.addEventListener('change', function() {
    if (checkButton.checked == false){
      localStorage.setItem("activeFlag", "false");  
      //alert("the button is now false")
    }
   
  }, false);
}, false);

  document.addEventListener('DOMContentLoaded', function() {
      if (localStorage.getItem("activeFlag") === "true"){
        document.getElementById("activateCookieManager").checked = true; 
        alert("The flag is true"); 
        //alert("inside of the loop"); 
      }
      else{
        //alert("the flag is false"); 
      }
    }, false);
  
//alert("FLAG: " + localStorage.getItem("activeFlag"));
  //alert("The flag is " + localStorage.getItem("activeFlag"));
  // EVENT HANDLER FOR CHECKING IF THE FLAGS WORK
  /*
      if (localStorage.getItem("activeFlag") === "true"){
        //alert("Flag is THIS BTW "+ localStorage.getItem('activeFlag')); 
        document.getElementById("essentialOnlyCookies").checked = true; 
        alert("Inside of this loop"); 
      }
      */ 




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

// EVENT HANDLER ANALYTICS BUTTON
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('analyticsCheck');
    checkButton.addEventListener('change', function() {
      if (checkButton.checked){
        //let analyticsCheck = true;
        //console.log("Analytics button = " + analyticsCheck); 
        //alert("This works"); 
        //alert(localStorage.getItem("flag"));
      }
    }, false);
  }, false);

  // EVENT HANDLER FOR ESSENTIAL ONLY COOKIES BUTTON
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