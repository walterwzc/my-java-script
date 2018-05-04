function move(dom,json,callback){
	//dom.timer 属性 => dom.timer 对象;
	for(var i in dom.timer){
		clearInterval(dom.timer[i]);
	}
	dom.timer = {};//定时器组;
	for(let attr in json){
		//当前定时器之中的 attr 就是需要运动的属性;
		dom.timer[attr] = setInterval(function(){
		 	//console.log(attr);
		 	// attr => 属性名;
		 	// target => json[attr]; => 目标点;
		 	//console.log(json);
		 	//console.log(json[attr]);
		 	//当前位置;
		 	if(attr == "opacity"){
		 		var iNow = parseInt(getStyle(dom,attr) * 100);
		 	}else{
		 		var iNow = parseInt(getStyle(dom,attr));
		 	}

		 	//速度;

		 	var speed = (json[attr] - iNow) / 6;

		 	speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		 	//终止运动;
		 	if(iNow == json[attr]){
		 		clearInterval(dom.timer[attr]);

		 		//判定所有运动终止;
		 		delete dom.timer[attr];
		 		//console.log(dom.timer);
		 		var index = 0;
		 		for(var i in dom.timer){
		 			index ++;
		 		}
		 		if(index == 0){
		 			//所有属性执行完成;
		 			//alert(1);
		 			if(callback){
		 				callback();
		 			}
		 		}

		 	}else{
		 		if(attr == "opacity"){
		 			dom.style.opacity = (iNow + speed ) / 100 ;
		 		}else{
		 			dom.style[attr] = iNow + speed + "px";
		 		}
		 	}
		},30);	
	}
}

//var arr = [1,2,3,4,4,5];

// for(var i = 0 ; i < arr.length; i++){
// 	console.log(i);
// }

// var json ={
// 	a:123,
// 	b:456,
// 	c:789
// }

// for(var i in arr){
// 	console.log(i);
// }

	// var obj = {
	// 	a : 1  
	// }
	// delete obj.a;
	// console.log(obj);

function getStyle(DOM,name){
	//IE方法currentStyle
	if(DOM.currentStyle){
		//IE方法获非行间样式
		return DOM.currentStyle[name]
	}else{
		//非IE方法获非行间样式
		return getComputedStyle(DOM,false)[name]
	}
}