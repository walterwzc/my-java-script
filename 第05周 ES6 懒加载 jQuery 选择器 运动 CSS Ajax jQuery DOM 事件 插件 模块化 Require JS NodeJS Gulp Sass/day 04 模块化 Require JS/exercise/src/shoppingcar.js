define(["jquery","cookie"], function($){
	//console.log($.cookie);
	function Shopping(){

	}
	Shopping.prototype = {
		constructor:Shopping,
		init:function(ele){
			ele.on("click",$.proxy(this.set_shop_itme, this))
		},
		set_shop_itme:function(e){
			var dataId = $(e.target).attr("data-id");
			if($.cookie("shopping_car")){
				//增加一个值;
				var scookie = $.cookie("shopping_car");
				var acookie = JSON.parse(scookie);
				var flag = false;//代表是否存在数据;
				acookie.forEach(function(item){	
					if(item.id == dataId){
						//证明存在; ==> 数量自增;
						item.num++;
						flag = true;
					}
				})
				if(!flag){
					var item = {
						"id":dataId,
						"num":"1"
					}
					acookie.push(item);
				}
				scookie = JSON.stringify(acookie);
				$.cookie("shopping_car",scookie);

			}else{
				//建立一个结构;
				$.cookie("shopping_car",'[{"id":"'+dataId+'","num":"1"}]')
			}
			console.log(this.get_shop_item());

		},	
		get_shop_item:function(){
			if($.cookie("shopping_car")){
				return JSON.parse($.cookie("shopping_car"))
			}
		},
		remove_shop_item:function(id){
			var scookie = $.cookie("shopping_car");
			if(scookie){
				var acookie = JSON.parse(scookie);
				/*bug** */
				acookie.forEach(function(item,index){
					if(item.id == id){
						acookie.splice(index, 1);
					}
				})
			}
			scookie = JSON.stringify(acookie);
			$.cookie("shopping_car", scookie);
		}
	}

	return new Shopping()

})