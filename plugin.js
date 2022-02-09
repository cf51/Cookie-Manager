

// https://developer.chrome.com/docs/extensions/mv3/getstarted/
// https://dev.to/aurelkurtula/basics-of-chrome-extensions-development-part-two-82p 
// chrome://extensions/


chrome.cookies.getAll({domain: ".mydomain.com"}, function(cookies){
  for(var i=0; i<cookies.length; i++){
    console.log(cookies[i]);
    chrome.cookies.remove({url: "https://" + cookies[i].domain + cookies[i].path, name: cookies[i].name}); 
  }
});
/*
function myfunction(){
  alert(alert1); 
}

// This function should create a cookie when a vistor comes onto the web page
function setCookie(cookieName, value, days){
  alert("At top"); 
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
  alert("At bottom"); 
}

// This function should get the cookie that has been created above 
function getCookie(cookieName){
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      returnc.substring(name.length,c.length);
    }
  }
  return"";
}

// This function will check if a cookie is set
function checkCookie(){
  let user = getCookie("username");
  if (user != ""){
    alert("Welcome back " + user);
  } else {
    user = promot("Please enter your name:", "");
    if (user != "" && user != null){
      setCookie("username", user, 365);
    }
  }
}


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
*/ 
