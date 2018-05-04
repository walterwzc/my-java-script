<?php 

	// $_GET
	// $_POST
	// $_REQUEST;

	//key=value;
	//字段名=字段值;
	
	//echo $_GET["name"];
	
	// @$_GET["name"] 前台发送给我的登陆信息;

	// 在数据库中查找 => 查找结果; => $res;

	// if( $res ){
	// 	echo "欢迎吴彦祖";
	// }else{
	// 	echo "欢迎GDG";
	// }

	//获取前台注册信息;
	//检测数据库是否重复;
	//if(没有重复){放入数据库 返回成功代码}else{返回错误代码}; 	

	// @ 的作用是 去除空字符串的错误提示。
	
	if (@$_GET["user"] == "yanghuaizhi" && @$_GET["passworld"] == "123456"){
		echo "登陆成功";
	} else {
		echo "登陆失败";
	}
	
?>

<form action="">
	<input type="text" name="user">
	<input type="text" name="passworld">
	<button>提交</button>
</form>