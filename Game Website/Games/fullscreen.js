function makeFullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    var elem = document.body;
}

function makeUnfullScreen() {
    document.getElementsByTagName("iframe")[0].className = "unfullScreen";
    var elem = document.body;
}
