<?php 
 
  // 发送给你别人的消息；
  // 把你的消息发布出去;

   header("content-Type: text/html; charset=Utf-8"); 
   $host = 'localhost:3306';  //mysql服务器主机地址
   $user = 'root';      //mysql用户名
   $pass = '123';//mysql用户名密码
   $conn = mysql_connect($host, $user, $pass);

   if(! $conn )
   {
     die('数据库错误: ' . mysql_error());
   }

   if($_POST){ //数据接收;

   	   $weibo_data = $_POST["weibo"];

   	   #$weibo_data = iconv("UTF-8", "GB2312//IGNORE", $weibo_data);//转码utf-8
   	   date_default_timezone_set("Asia/Shanghai");//设置时区;否则获取服务器时间会不准确;
	   $create_date = date("Y/m/d"); 
	   $create_time = date("h:i:sa");


	   if($weibo_data){

			$sql = "INSERT INTO weibo ".
			       "(data,date,time) ".
			       "VALUES ".
			       "('$weibo_data','$create_date','$create_time')";

			
			mysql_select_db('weibo');

			$retval = mysql_query( $sql, $conn);

			if(! $retval )
			{
			  die('Could not enter data: ' . mysql_error());
			}
			
		}

   }


   #//返回数据;

   $sql = 'SELECT data,date,time
        FROM weibo';

		mysql_select_db('weibo');

		$retval = mysql_query( $sql, $conn );

		if(!$retval)
		{
		  die('无法获取数据: ' . mysql_error());
		}



		//echo $uesr_get_name;

		$first = 0;
		$res = "[";

		while($row = mysql_fetch_array($retval,MYSQL_ASSOC)){
			//echo $row['data'].":".$row['date']."<br>";
			if($first == 0){
				$res .= json_encode($row);
			}else{
				$res .= ",".json_encode($row);
			};
			$first++;
		};

		$res .= "]";

		echo $res;

		mysql_free_result($retval);//清空缓存数据;
 		mysql_close($conn);//关闭数据库;


 ?>	