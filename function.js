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

function bindEvent(e, eventName, callback) {
    if (e.addEventListener) // new browsers
        e.addEventListener(eventName, callback, false);
    else if (e.attachEvent) // IE
        e.attachEvent('on' + eventName, callback);
};

bindEvent(document.body, 'scroll', function (e) {
    document.body.scrollLeft = 0;
});