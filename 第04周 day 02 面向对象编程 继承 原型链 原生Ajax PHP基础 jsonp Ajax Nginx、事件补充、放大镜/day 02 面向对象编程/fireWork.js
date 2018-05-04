	function FireWorks(select_ele){
		this.init(select_ele);
	}
	FireWorks.prototype.init = function(select_ele){
		if(typeof select_ele != "string" || select_ele == "body"){
			select_ele = "body";	
			document.body.style.height = "100%";
			document.documentElement.style.height = "100%";		
		}
		this.fireList = []; //烟花名单;
		this.ele = document.querySelector(select_ele);
		this.ele.onclick = this.redingFire.bind(this);
	}
	FireWorks.prototype.redingFire = function(event){
		//订阅器 === reding
		var evt = event || window.event;
		var fire = new Fire(this.ele,evt);
		this.fireList.push(fire);
		this.pulistRaise();
	}
	FireWorks.prototype.pulistRaise = function(){
		var fire = this.fireList;
		for(var i = 0 ; i < fire.length ; i++){
			fire[i].raise();
			this.fireList.shift();
		}
	}
	/*烟花   === 订阅者;  
		{	
			fire:div,//烟花元素
			top:evt.offsetY
		}
	*/
	function Fire(ele,evt){
		this.init(ele,evt);
	}
	Fire.prototype.init = function(ele,evt){
		this.ele = ele;
		this.fire = document.createElement("div");
		this.fire.style.cssText = "position:absolute;width:3px;height:15px;bottom:0;border-radius:50%;background:#fff";
		// left top;
		//随机颜色;
		this.fire.style.left = evt.offsetX + "px";
		this.fire.style.background = this.randomColor();
		this.top = evt.offsetY;
		this.left = evt.offsetX;
		ele.appendChild(this.fire);
	}
	Fire.prototype.raise = function(){
		var _this = this;
		move(this.fire,{
			top:this.top
		},function(){
			_this.fire.remove();
			_this.blast();
		})
	}
	Fire.prototype.randomColor = function(){
		var color = "#";
		for(var i = 0 ; i < 6 ; i++){
			if(i == 0 || i == 1){
				color += (Math.round(Math.random() * 7) + 8).toString(16);
			}else{
				color += Math.round(Math.random() * 7).toString(16);
			}
		}
		return color;
	}
	Fire.prototype.blast = function(){
		var r = Math.round(Math.random() * 100) + 100;
		var a,b;
		var num = Math.round(Math.random() * 10) + 10;
		for(var i = 0 ; i < num; i++){
			a = Math.sin(Math.PI / 180 * i * (360 / num)) * r + this.left;
			b = Math.cos(Math.PI / 180 * i * (360 / num)) * r + this.top;
			var _this = this;
			(function(){
				var div = document.createElement("div");
				div.style.cssText = "width:10px;height:10px;border-radius:50%;position:absolute";
				div.style.background = _this.randomColor();
				div.style.left = _this.left + "px";
				div.style.top = _this.top + "px";
				_this.ele.appendChild(div);
				move(div,{
					top:Math.round(b),
					left:Math.round(a)
				},function(){
					div.remove();
				})
			})()
		}
	}
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