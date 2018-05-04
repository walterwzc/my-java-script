/*功能性模块*/
// define(["jquery","model1"],function(jq,model){

// 	//console.log(jq,model)

// 	return {
// 		mix : function(){
// 			model.change();
// 			$('<div style="width:100px;height:100px;background:red;"></div>').appendTo($("body"))
// 		}
// 	}
// })

//模块功能单一;
define(["jquery"],function(jq){
	//console.log(jq,model)
	return {
		createDiv : function(){
			$('<div style="width:100px;height:100px;background:red;"></div>').appendTo($("body"))
		}
	}
})