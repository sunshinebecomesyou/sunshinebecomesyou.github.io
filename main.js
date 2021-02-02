'use strict';

var loop = 0;

$(document).ready(function () {
    startTime();
    build_notice("yangg");
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function build_notice(name) {
    var data = [
        [0, 12, "Good morning"],
        [12, 18, "Good afternoon"],
        [18, 24, "Good night"]
    ],
        hr = new Date().getHours();

    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0] && hr <= data[i][1]) {
            typeWriter(data[i][2] + ', ' + name);
            break;
        }
    }
}

function typeWriter(text_var) {
    var txt = text_var;

    if (loop < txt.length) {
        document.getElementById("notice").innerHTML += txt.charAt(loop);
        loop++;
        // Recusive call
        setTimeout(function () {
            typeWriter(text_var);
        }, 100);
    }
}