require(["src/config.js"], function () {
	require(["jquery", "cookie", "supper"], function ($, cookie) {
		//console.log(jq.cookie);
		$.cookie("name", "yanghuaizhi", {
			expires: 1
		});

		//console.log(supper());
		console.log($(".container").supperBanner);
	})
})