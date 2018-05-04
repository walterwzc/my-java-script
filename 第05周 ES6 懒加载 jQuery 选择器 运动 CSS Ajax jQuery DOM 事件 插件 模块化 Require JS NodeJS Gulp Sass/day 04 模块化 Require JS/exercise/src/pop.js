/*弹出对应的字符串模块(组件)*/

define(["jquery"],function($){
	function Pop(){
	}
	Pop.prototype = {
		constructor:Pop,
		init:function(string_ele){
			this.createMask();
			this.createEle(string_ele);
		},
		createMask:function(){
			var $div = $("<div></div>");
			var cHeight = document.documentElement.clientHeight
			$("body,html").css({
				height:"100%"
			})
			$div.css({
				width:"100%",
				height:"100%",
				background:"rgba(0,0,0,.3)",
				position:"fixed",
				zIndex:9000,
				left:0,
				top:0
			})
			$("body").append($div);

			this.$mask =  $div;
		},
		createEle:function(string_ele){
			if(typeof string_ele == "string"){
				$ele = $(string_ele);
				$close = $("<span>×<span>");
				$close.css({
					width:80,
					height:80,
					position:"absolute",
					color:"#D21",
					fontSize:80,
					right:-80,
					top:-80
				})
				$ele.append($close);
				$ele.width(300);
				$ele.height(200);
				$ele.css({
					background:"#fff",
					position:"fixed",
					zIndex:9001,
					left:"50%",
					top:"50%",
					marginLeft:-150,
					marginTop:-150,
				})
				$("body").append($ele);
			}	
			
			var _this = this;
			$close.on("click",function(){
				$ele.remove();
				_this.$mask.remove();
			})
		}
	} 
	//遮罩层创建;
	return new Pop();
})