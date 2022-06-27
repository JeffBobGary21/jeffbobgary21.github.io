function makeFullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    var elem = document.body;
}

function makeUnfullScreen() {
    document.getElementsByTagName("iframe")[0].className = "unfullScreen";
    var elem = document.body;
}

document.getElementById("hideable").style.display ="none";

function showHideable() {
    document.getElementById("hideable").style.display = "block";
}
function hideHideable() {
    document.getElementById("hideable").style.display ="none";
}