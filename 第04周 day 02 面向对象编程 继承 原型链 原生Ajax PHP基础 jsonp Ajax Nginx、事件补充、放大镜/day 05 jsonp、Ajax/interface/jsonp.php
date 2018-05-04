<?php 
	/*	
		$data = '"hello world"';
		echo "callback(".$data.")";	
	*/
	$data = '"this the String returned from PHP"'; //要传输给前台的数据;
	$cb = @$_GET["cb"];      //前台定义的回调函数名;
	echo $cb."(".$data.")"   //将拼接好的字符串(js的函数调用)发送给前台script 让script标签进行解析;
?>