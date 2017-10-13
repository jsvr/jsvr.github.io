<?php

	// 1、查询数据库
	// 2、转化成一个数组
	// 3、转成json，然后返回给javascript

	$result = file_get_contents('02.json');

	// var_dump($result);

	// echo $result;

	// 假设是从数据里取出的数组
	$arr = array(
		"name"=>"itcast",
		"age"=>10
	);

	// PHP 编码成json格式
	// echo json_encode($arr);

	// 假设是从JS里传递过的一个字符串
	$str = '{"name": "itcast", "age": 10}';

	// 转换成PHP可以认识的对象
	// var_dump(json_decode($str));




?>