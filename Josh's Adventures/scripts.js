// Dark Mode Switcher Button
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");

}
function toggleDarkModeText() {
    var x = document.getElementById("toggleDarkModeText");
    if (x.innerHTML === "light_mode") {
      x.innerHTML = "dark_mode";
    } else {
      x.innerHTML = "light_mode";
    }
}

// Dark Mode Cookie
Cookie.set('dark-mode', 'true');