<?php 
	// for($i = 0 ; $i < 10 ; $i ++){
	// 	echo 1;
	// }
	// for($i = 0 ; $i < 10 ; $i ++){
	// 	echo 2;
	// }
	

	#是不是有pag字段 => 如果有那么我就使用这个字段，如果没有让pag为0;

	if(@$_GET["page"]){
		$page = $_GET["page"];
	}else{
		$page = "0";
	}
	
	switch ($page) {
		case "0":
			# code...
			echo "hello i'm page Zero";
			break;
		case "1":
			# code...
			echo "hello i'm page One";
			break;
		case "2":
			# code...
			echo "hello i'm page Two";
			break;
		default:
			# code...
			echo "have no page";
			break;
	}
?>