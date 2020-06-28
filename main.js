function f_color() {
    var c1 = Math.random() * 255;
    var c2 = Math.random() * 255;
    var c3 = Math.random() * 255;
    var colora = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
    return colora;
}
function f_size() {
    var fsize = Math.random() * 30 + 10 + "px";
    return fsize;
}
function y() {
    var h = $("#content").height();
    var y = Math.random() * h;

    if (y < 15) {
        y = y + 15;
    }
    if (y > h - 30) {
        y = y - 30;
    }
    return y;
}
function f_speed() {
    var s = Math.random() * 10000 + 5000;
    return s;
}


$(document).ready(function () {
    $("#send").click(function () {
        var t = $("#t").val();
        var span = document.createElement('span');
        span.style.color = f_color();
        span.style.fontSize = f_size();
        span.style.position = 'absolute';
        span.style.top = y() + 'px';
        span.innerHTML = t;
        span.style.right = 0;
        span.style.whiteSpace = 'nowrap';
        span.setAttribute('speed', f_speed());
        $("#content").append(span);

        var s = parseInt(span.getAttribute('speed'));
        $(span).animate({ left: -100 + '%' }, s);
        $("#t").val("");
    });


    $("#clear").click(function () {
        $("#content").empty();
        $("#t").val("");
    });
});



