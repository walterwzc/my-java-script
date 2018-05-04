function move(dom, target, attr) {
	clearInterval(dom.timer);
	dom.timer = setInterval(function () {
		if (attr == "opacity") {
			var iNow = Math.round(parseFloat(getStyle(dom, attr)) * 100);
		} else {
			var iNow = parseInt(getStyle(dom, attr))
		}
		
		var speed = (target - iNow) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (iNow == target) {
			clearInterval(dom.timer);
		} else {
			if (attr == "opacity") {
				dom.style.opacity = (iNow + speed) / 100;
			} else {
				dom.style[attr] = iNow + speed + "px";
			}
		}
	}, 30)
}

function getStyle(dom, attr) {
	return getComputedStyle(dom, false)[attr];
}