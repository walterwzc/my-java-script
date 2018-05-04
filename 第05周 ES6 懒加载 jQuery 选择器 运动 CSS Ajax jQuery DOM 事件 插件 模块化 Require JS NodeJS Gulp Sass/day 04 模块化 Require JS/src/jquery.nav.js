;(function($){
	//console.log($);
	$.fn.extend({
		nav : function(){
			console.log(this);
			this.find("li:has(ul)").on("mouseover",function(){
				$(this).children().stop().slideDown()
			})
			//负责调用的对象;
			this.find("li:has(ul)").on("mouseout",function(){
				console.log("当前发生事件的对象")
				$(this).children().stop().slideUp();
			})
		}
	})
})(jQuery)