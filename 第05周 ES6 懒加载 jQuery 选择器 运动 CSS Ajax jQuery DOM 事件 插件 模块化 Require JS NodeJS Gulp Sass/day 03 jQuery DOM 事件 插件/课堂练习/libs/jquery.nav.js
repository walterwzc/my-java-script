;(function($){
	//console.log($);
	$.extend({
		nav : function(){
			$("li").has("ul").on("mouseover",function(){
				$(this).children().stop().slideDown()
			})
			$("li").has("ul").on("mouseout",function(){
				$(this).children().stop().slideUp();
			})
		}
	});


	$.fn.extend({
		sayHi: function(domString) {
			$("li").on("click", function() {
				console.log("say " + domString);
			});
		}
	});
})(jQuery)
