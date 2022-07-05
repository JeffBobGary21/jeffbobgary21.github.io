// Dark Mode Switcher Button
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");

}
function toggleDarkModeText() {
    var x = document.getElementById("toggleDarkModeText");
    if (x.innerHTML === "light_mode") {
      x.innerHTML = "dark_mode";
      document.cookie = "darkmode=true";
    } else {
      x.innerHTML = "light_mode";
      document.cookie = "darkmode=false";
    }
}

document.cookie = "darkmode=true";