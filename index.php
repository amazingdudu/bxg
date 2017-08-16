<?php

// 给文件用作路由, 就是通过给定的 url 来显示不同的页面( 注意页面被放在 views 文件夹中 )

 //var_dump( $_SERVER );

// 我们通过调试发现 PATH_INFO 很有用
// 约定( 路由规则 ):
// 我们的 页面放在 views 中, 我们希望直接利用 /index.php/文件夹名/页面名 来获得我们的页面
// 例如:
// 访问讲师列表: http://study.com/views/teacher/list.html
// 约定:
// http://study.com/index.php/teacher/list

// 对于 /views/index 页面中的所有文件访问会很频繁
// 如果 url 中给出的路径层级只有一层, 那么默认访问就是 index 页中的页面
// 例如访问登录页, 采用前面的约定: http://study.com/index.php/index/login
// 采用该约定后: http://study.com/index.php/login

// 在没有任何路径参数的时候, 显示主页, 即 显示 /index.php/index


// 对于 C 系的编程语言有一个特点, 基本上就是语法形式, 方法名不同, 其余都相同

/*
// 第一个约定
// 通过调试查看 PATH_INFO 
$path_info = $_SERVER[ "PATH_INFO" ];  
// 超全局变量: $_GET, $_POST, $_REQUEST, $GLOBALS, $_SERVER, $_COOKIE, $_SESSION, ...
// 它们全部都是数组


// echo $path_info;
include_once( './views' . $path_info . '.html' );
*/

/*
// 第二个约定
// 转入一个文件夹的级别, 实际上就是默认在前面增加一个 index 目录
// http://study.com/index.php/index
// http://study.com/index.php/login
// http://study.com/index.php/repass

$path_info = $_SERVER[ 'PATH_INFO' ];

include_once( './views/index' . $path_info . '.html' );

// 第三个约定
// 如何判断有没有传入参数? 怎么将前面的两种情况整合一下
// 思路. 将处理的思路用我们熟悉的语言描述出来
*/


// $path_info = $_SERVER[ 'PATH_INFO' ];

// 如何判断数组中是否含有 xxx 元素?
// echo array_key_exists( "PATH_INFO", $_SERVER ) ? "TRUE" : "FALSE";

// 获取index.php 后面的字符串参数
if ( array_key_exists( "PATH_INFO", $_SERVER ) ) {
  // 输入了路径
  $path_info = $_SERVER[ "PATH_INFO" ];
} else {
  // 没有输入路径
  $path_info = "/";
}
// 统一了
// 判断 $path_info 是 /, 还是一个文件名, 还是 两个 文件名
// 如果使用 split 进行处理
// "/"  => [ "", "" ]
// "/index" => [ "", "index" ]
// "/index/index" => [ "", "index", "index" ]

$path_infos = explode( "/", $path_info );         // 将字符串分割成数组

// var_dump( $path_infos );
$path_count = count( $path_infos );

if ( $path_count == 3 ) {
  // 两个路径
  $path = $path_infos[ 1 ];
  $filename = $path_infos[ 2 ];
} elseif ( strlen( $path_infos[ 1 ] ) != 0 ) {
//如果只输入 .index.php/  ----- "/"  => [ "", "" ]
//数组长度也为2 所以需要判断一下第二个参数是否为空字符串                                            //   如果不为空  说明是  index.php/index格式的  为一个路径
  $path = "index";
  $filename = $path_infos[ 1 ];
} else {
  // 什么都没输入 显示主页
  $path = "index";
  $filename = "index";
}


include_once( "./views/" . $path . "/" . $filename . ".html" );

?>
