function move(dom, attr, target) {
    clearInterval(dom.timer);
    dom.timer = setInterval(function() {
        var nowDomAttr;
        if (attr == "opacity") {
            nowDomAttr = Math.round(parseFloat(getStyle(dom, attr) * 100));
        } else {
            nowDomAttr = parseInt(getStyle(dom, attr));
        }
        
        var speed = (target - nowDomAttr) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (nowDomAttr == target) {
            clearInterval(dom.timer);
        } else {
            if (attr == "opacity") {
                dom.style[attr] = (nowDomAttr + speed) / 100;
            } else {
                dom.style[attr] = nowDomAttr + speed + "px";
            }
        }
    }, 30);
}

function getStyle(dom, attr) {
    return getComputedStyle(dom, false)[attr];
}