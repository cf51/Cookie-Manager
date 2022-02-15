//document.getElementById("lpc-button").style.backgroundColor = "#ff0000";
//console.log("This has worked 1"); 
//document.getElementById("myP").style.color = "magenta";
//document.getElementById("myP2").style.color = "blue";
//document.getElementById("myDiv").style.color = "lightblue";

var delay = 5000; // 5 second delay
var delay2 = 5000; // 5 second delay
var delay3 = 5000; // 5 second delay

//document.getElementById("lpc-button").click();

//document.getElementsByClassName("a.a8c-cookie-banner-accept-all-button").click();

// ACCEPT ALL  
setTimeout(function(){
    //console.log("Clicking the accept all button");
    //document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
    
}, delay);


//document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
console.log("This has worked");

// ANALYTICS OFF
setTimeout(function(){
    console.log("Clicking the customisation button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
    console.log("Un-clicking the accept button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(3) > input").click();
    console.log("Clicking the accept selection button");
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > a").click();
}, delay);

// ANALYTICS OFF
