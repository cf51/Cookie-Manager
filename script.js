//document.getElementById("lpc-button").style.backgroundColor = "#ff0000";
//console.log("This has worked 1"); 
//document.getElementById("myP").style.color = "magenta";
//document.getElementById("myP2").style.color = "blue";
//document.getElementById("myDiv").style.color = "lightblue";

var delay = 5000; // 5 second delay

//document.getElementById("lpc-button").click();

//document.getElementsByClassName("a.a8c-cookie-banner-accept-all-button").click();

// ACCEPT ALL  
//document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-accept-all-button").click();
console.log("This has worked");

// ANALYTICS OFF
document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-simple-options > a.a8c-cookie-banner-customize-button").click();
setTimeout(function(){
    document.querySelector("#wpcom-home > form > div.a8c-cookie-banner-options-selection > p:nth-child(3) > input").click();
    console.log("The delay has worked"); 
}, delay);
