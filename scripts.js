// Dark Mode Switcher Button
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");
    toggleDarkModeText()
}
function toggleDarkModeText() {
  var x = document.getElementById("toggleDarkModeText");
  if (x.innerHTML === "light_mode") {
    x.innerHTML = "dark_mode";
    setDarkModeFalse()
  } else {
    x.innerHTML = "light_mode";
    setDarkModeTrue()
  }
}
  
// Functions To Set Darkmode Status
function setDarkModeTrue() {
document.cookie = "darkmode=true";
document.getElementById('logo').src='Main Site Resources/equinoxx.xyz(BIG LIGHT).png';
}
  
function setDarkModeFalse() {
  document.cookie = "darkmode=false";
  document.getElementById('logo').src='Main Site Resources/equinoxx.xyz(BIG DARK).png';
}
  
// Get cookie value?
function getDarkModeCookie() {
  var cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]:decodeURIComponent(value) }),{});
  if (cookies.darkmode == "false") {
    toggleDarkMode();
  }
}
  
// Get cookie value on page load
window.onload = function() {
  getDarkModeCookie()
}