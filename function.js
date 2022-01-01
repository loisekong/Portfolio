var modetoggle = document.getElementById("darkmodeicon");
modetoggle.onclick = function () {
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        darkmodeicon.src = "light_mode_white_24dp.svg"
    } else {
        darkmodeicon.src = "nights_stay_black_24dp.svg"
    }
}
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);