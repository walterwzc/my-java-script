function getStyle(dom, attr) {
	if (dom.currentStyle) {
		return dom.currentStyle[attr];
	} else {
		return getComputedStyle(dom, false)[attr];
	}
}

function move(dom, attr, target) {
	clearInterval(dom.timer)
	dom.timer = setInterval(function () {
		if (attr == 'opacity') {
			var domNowAttr = Math.round(parseFloat(getStyle(dom, attr)) * 100)
		} else {
			var domNowAttr = parseInt(getStyle(dom, attr));
		}
		//alert(domNowAttr)
		//console.log(domNowAttr)
		var speed = (target - domNowAttr) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if (domNowAttr == target) {
			clearInterval(dom.timer)
		} else {
			if (attr == 'opacity') {

				dom.style.filter = 'alpha(opacity:' + (domNowAttr + speed) + ')'
				dom.style.opacity = (domNowAttr + speed) / 100
			} else {

				dom.style[attr] = domNowAttr + speed + 'px';

			}
		}
	}, 30);
}