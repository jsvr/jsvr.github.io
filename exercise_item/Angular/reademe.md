####AngularJS入坑
  - AngularJS 通过新的属性和表达式扩展了HTML.
  - AngularJS 可以构建一个单一页面应用程序(SPAs:Single Page Applications).
  - AngularJS 数据的双向绑定
  
####[AngularJS简介](http://www.runoob.com/angularjs/angularjs-intro.html)
  - Angular 是一个Javascript框架. 它可以通过\<scripg\>标签添加到HTML页面.
  - Angluar 通过 [指令](http://www.runoob.com/angularjs/angularjs-directives.html)扩展了 HTML,且通过[表达式](http://www.runoob.com/angularjs/angularjs-expressions.html)绑定数据到HTML.
  
####AngularJS 是一个 JavaScript 框架
  - AngularJS 是一个 JavaScript 框架。它是一个以 JavaScript 编写的库。
  - AngularJS 是以一个 JavaScript 文件形式发布的，可通过 script 标签添加到网页中：
    + ```<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>```
    + 我们建议把脚本放在 \<body\> 元素的底部。这会提高网页加载速度，因为 HTML 加载不受制于脚本加载。
    
####AngularJS 扩展了 HTML
  - AngularJS 通过 `ng-directives` 扩展了HTML.
  - `ng-app` 指令定义一个AngularJS 应用程序.(是不是只能有一个 应用程序). 
  - `ng-model` 指令把元素值(比如输入的值)绑定到应用程序.
  - `ng-bind` 指令把应用程序数据 绑定到HTML视图.
    
    ```javscript
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
    </head>
    <body>
     
    <div ng-app="">
         <p>名字 : <input type="text" ng-model="name"></p>
         <h1>Hello {{name}}</h1>
    </div>
     
    </body>
    </html>
    ```
    
  - 实例讲解
    + 当网页加载完毕, AngularJS 自动开启.
    + `ng-app` 指令告诉AngularJS,\<div\>元素是AngularJS 的"所有者".
    + `ng-model` 指令把输入域的值绑定到应用程序变量 name.
    + `ng-bind` 指令把应用程序变量 name 绑定到某个段落的 innerHTML.
    + `如果您移除了 ng-app 指令, HTML 将直接把表达式显示出来,不会去计算表达式的结果.
    
#### 什么是AngularJS?
  - AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易.
  - AngularJS 把应用程序数据绑定到 HTML 元素.
  - AngularJS 可以克隆和重复 HTML 元素.
  - AngularJS 可以隐藏和显示 HTML 元素.
  - AngularJS 可以在 HTML 元素"背后"添加代码.
  - AngularJS 支持输入验证.
  
####AngularJS指令
  - AngularJS 指令是以 ng 作为前缀的 HTML 属性.
  - ng-init 指令初始化 AngularJS 应用程序变量.
  
    ```javascript
    <div ng-app="" ng-init="firstName='John'">
        <p>姓名为 <span ng-bind="firstName"></span></p>
    </div>
    ```
  - HTML5 允许扩展的（自制的）属性，以 data- 开头.
  - AngularJS 属性以 ng- 开头，但是您可以使用 data-ng- 来让网页对 HTML5 有效.
    
    ```javascript
    <div data-ng-app="" data-ng-init="firstName='John'">
        <p>姓名为 <span data-ng-bind="firstName"></span></p>
    </div>
    ```
    
####Angular表达式
  - AngularJS 表达式写在双大括号内: {{ expression}}.
  - AngularJS 表达式把数据绑定到 HTML,这与 `ng-bind` 指令有异曲同工之妙.
  - AngularJS 将在表达式是写的位置"输出"数据.
  - AngularJS 表达式 很像 `Javascript`表达式: 他们可以包含文字、运算符和变量.
  
    ```javascript
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script> 
    </head>
    <body>
     
    <div ng-app="">
         <p>我的第一个表达式： {{ 5 + 5 }}</p>
    </div>
     
    </body>
    </html>
    ```
    
####AngularJS 应用    
  - AngularJS 模块(Module)定义了 AngularJS 应用.
  - AngularJS 控制器(Controller) 用于控制 AngularJS 应用.
  - `ng-app` 指令定义了应用, `ng-controller` 定义了控制器.
  
```javascript
<div ng-app="myApp" ng-controller="myCtrl">
 
名: <input type="text" ng-model="firstName"><br>
姓: <input type="text" ng-model="lastName"><br>
<br>
姓名: {{firstName + " " + lastName}}
 
</div>
 
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
</script>
```
  - firstName 定义值以后,placeholder不起作用???
  - AngularJS 模块(AngularJS 模块定义应用 只能存一个应用???):
```javascript
var app = angular.module('myApp', [])
```
  - AngularJS 控制器(AngularJS 控制器控制应用 可以存在多个控制器应用???):
```javascript
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    