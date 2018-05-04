/*主页业务逻辑页面*/	
//requirejs === require
require(["src/config.js"],function(){ //先去配置;
	require(["jquery","supperBanner","pop","shopping","loadLi"],function($,sup,pop,shop,loadli){//再去使用简写的路径;
		//console.log($);
		// $(".container").css({
		// 	background : '#ddd'
		// })

		/*轮播图*/
		$(".container").supperBanner({
			src:[
				"http://img.zcool.cn/community/013d825a56bdbea80120121fb8fed4.jpg@1380w",
				"http://img.zcool.cn/community/017ac55a55de01a80120121f0d0e19.jpg@1380w",
				"http://img.zcool.cn/community/0100dd5a56e331a80120121fc3a683.jpg@1380w",
				"http://img.zcool.cn/community/018c935a56e368a80120121f6072e9.jpg@1380w"
			],
			autoplay:true
		});

		/*登陆框*/
		//console.log(pop.init())
		//$("#login").on("click",$.proxy(pop.init,pop))
		$("#login").on("click",function(){
			console.log(pop);
			pop.init(`<div>
						<p>hello world</p>
					</div>`)
		});

		loadli.init($(".goodslist li"));

		//通信没有问题;
		shop.init($(".goodslist li button"));
	})	
})
