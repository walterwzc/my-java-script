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