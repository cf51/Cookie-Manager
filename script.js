//document.getElementById("lpc-button").style.backgroundColor = "#ff0000";
//console.log("This has worked 1"); 
//document.getElementById("myP").style.color = "magenta";
//document.getElementById("myP2").style.color = "blue";
//document.getElementById("myDiv").style.color = "lightblue";

var delay = 3000; // 3 second delay
var delay2 = 5000; 
var delay3 = 7000; 


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
}, delay);

setTimeout(function(){
     //Changing the advertising button to red
     //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > strong").style.color = "#ff0000";
     //Clicking the advertising button
     document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(4) > input").click();
}, delay2);

setTimeout(function(){
    //Changing the button to red
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").style.backgroundColor = "#ff0000";
}, delay3);
 

