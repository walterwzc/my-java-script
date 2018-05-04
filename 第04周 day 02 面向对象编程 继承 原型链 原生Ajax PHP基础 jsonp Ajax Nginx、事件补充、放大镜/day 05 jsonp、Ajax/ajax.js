function ajaxPost(url,callback,data){
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url);		
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	}
}
function ajaxGet(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	}
}
function jsonp(url,string_callback,fn_callback){
	var fn_name =("jsonp_callback_" + Math.random()).replace(/\./g,"");
	window[fn_name] = function(res){
		fn_callback(res);
		delete window[fn_name];
	}
	url =url+ "?" + string_callback + "=" +fn_name;
	//规定参数外所有数据都视为数据参数放在url之中拼接;
	if(arguments.length > 3){
		for(var i = 3 ; i < arguments.length ; i++){
			url =url + "&"+arguments[i]
		}
	}
	var old_script = document.querySelector("[json_script_data]");
	if(old_script){
		old_script.remove();
	}
	var script = document.createElement("script");
	script.src = url;
	script.setAttribute("json_script_data",fn_name);
	document.documentElement.appendChild(script);
}
