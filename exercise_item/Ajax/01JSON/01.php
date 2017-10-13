<?php



	// $obj = '{"name": "itcast", "age": 10}';

	// echo $obj;

	// 解码JSON
	// json_decode();

	// var_dump(json_decode($obj));

	// 编码JSON
	// json_endcode();

	$arr = array(
		"name"=> "itcast",
		"age"=> 10
	);

	echo json_encode($arr);

?>