/*业务逻辑*/
require("../js/model.js");

require("../es6/person.js");

// webpack会自动识别css文件，并使用webpack.config.js之中定义的CSS加载器进行加载。
require("../css/style.css");
require("../css/reset.css");


import Hel from "../es6/model2.js";
document.onclick = function(){
	new Hel("你好").say();	
}

console.log("this is webpack entrance index.js");
