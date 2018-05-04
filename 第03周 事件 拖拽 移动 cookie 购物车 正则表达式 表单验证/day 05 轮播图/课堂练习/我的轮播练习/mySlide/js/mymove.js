function move(dom, json, callback) {
    // console.log("in move");
    if (dom.timer == undefined) {
        dom.timer = {};
    }

    var count = 0;
    for (var i in dom.timer) {
        count++;
    }

    if (count == 0) {
        dom.isMoving = false;
    } else {
        dom.isMoving = true;
    }

    if (dom.isMoving) {
        return 0;
    }

    for (var attr in json) {
        !function(attr) {
            dom.timer[attr] = setInterval(function() {
                // console.log("attr: " + attr);
                var nowDomAttr = null;
                if (attr == "opacity") {
                    nowDomAttr = Math.round(parseFloat(getStyle(dom, attr) * 100));
                } else {
                    nowDomAttr = parseInt(getStyle(dom, attr));
                }

                // console.log("nowDomAttr: " + nowDomAttr);

                var speed = (json[attr] - nowDomAttr) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                // console.log("nowDomAttr: " + nowDomAttr);
                // console.log(attr + " : " + json[attr]);
                if (nowDomAttr == json[attr]) {
                    clearInterval(dom.timer[attr]);
                    delete dom.timer[attr];

                    var count = 0;
                    for (var i in dom.timer) {
                        count++;
                    }

                    if (count == 0) {
                        dom.isMoving = false;
                        if (callback instanceof Function) {
                            callback();
                        }
                    }
                } else {
                    if (attr == "opacity") {
                        dom.style[attr] = (nowDomAttr + speed) / 100;
                    } else {
                        dom.style[attr] = nowDomAttr + speed + "px";
                    }
                }
            }, 300);
        }(attr);
    }
}

function getStyle(dom, attr) {
    return getComputedStyle(dom, false)[attr];
}