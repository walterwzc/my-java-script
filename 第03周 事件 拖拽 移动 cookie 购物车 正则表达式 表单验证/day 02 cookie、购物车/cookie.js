function setCookie(name,value,expires,path){
			var d = new Date();
			d.setDate(d.getDate() + expires);
			value = encodeURIComponent(String(value));
			document.cookie = name + "=" + value + ";expires="+d + "; path=" + path;
}
function getCookie(name){
	//console.log(document.cookie)		
	var item = document.cookie.split("; ");
	//console.log(item);
	for(var i = 0 ; i < item.length ; i++){
		//console.log(item[i].split("="));
		//cookie 名 是第0项;
		//cookie 值 是第1项;
		if(name == item[i].split("=")[0]){
			return decodeURIComponent(item[i].split("=")[1]);
		}
	}
	return "";
}
// 删除;
function removeCookie(name,path){
	setCookie(name,null,-1,path)
}