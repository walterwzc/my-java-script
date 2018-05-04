function move(dom,json,callback){
	if(dom.timer == undefined){
		dom.timer = {};
	}
	//dom.timer ==> 一定是对象;
	// 如果还有(动画未完成) 不许开启新的定时器;
	var count = 0;
	for(var i in dom.timer ){
		count++
	}
	if(count == 0){
		dom.isMoving = false;
	}else{
		dom.isMoving = true;
	}
	if(dom.isMoving){
		return 0;
	}
	//开启好几个定时器;
	for(var i in json){
		//console.log(attr);
		!function(attr){
			dom.timer[attr] = setInterval(function(){
				//1. 获取当前位置;
				// if(attr == ){
				// }
				//console.log("我是"+attr+"的定时器");
				//1. 获取当前位置;	
				var iNow = null;
				if( attr == "opacity"){
					iNow = Math.round(parseFloat(getStyle(dom,attr) * 100));
				}else{
					iNow = parseInt(getStyle(dom,attr));
				}
				//2.速度； json[attr] == target;
				// json = {width:300,height:300}
				var speed = (json[attr] - iNow) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				//3.终止条件;
				if(json[attr] == iNow){
					clearInterval(dom.timer[attr]);
					delete dom.timer[attr];
					//console.log(dom.timer);
					//查看一下是不是最后一个定时器;
					var count = 0;
					for(var i in dom.timer){
						count++;
					}

					if(count == 0){
						//console.log("没有定时器在执行了");
						if(callback instanceof Function){
							callback();
						}
						dom.isMoving = false;
					}
				}else{
					if(attr == "opacity"){
						dom.style.opacity = (iNow + speed ) / 100;
					}else{
						dom.style[attr] = iNow + speed + "px";
					}
				}

				//ssconsole.log("我是"+attr+"的属性，我当前的值为"+iNow);

			}, 30)
		}(i)
		//1.因为一个属性开启一个定时器 所以 => 定时器就是属性专有的定时器;
	}
	//console.log(dom.timer);
}
function getStyle(dom,attr){
		return getComputedStyle(dom,false)[attr];
}