/*业务逻辑模块*/
require(["src/config.js"], function () {
	//都是带有配置参数的 requirejs;
	require(["model1", "model2"], function (mod1, mod2) {
		mod1.change();
		mod2.createDiv();
	})
})