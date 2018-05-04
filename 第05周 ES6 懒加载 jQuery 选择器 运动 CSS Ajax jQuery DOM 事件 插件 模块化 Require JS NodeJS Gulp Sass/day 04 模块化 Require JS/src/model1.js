/*功能性模块*/
define(["jquery"],function($){

	function ChangeColor(){
		this.change = function(){
			$("html").css({
				background : '#ddd'
			})
		}
	}

	return new ChangeColor();
	
})
