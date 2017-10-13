#### 学习angular 的笔记
#### ask question
#### Day1(AngularJS 标记)
  - 03样式绑定扩展
    - input model 的绑定 机制(**点击input的时候,另一个怎么就显示隐藏了,原理是???**);
    - disabled 是什么 意思???
    ```html
    <div>
          hide:
          <input type="checkbox" ng-model="hide">
          <input type="text" ng-hide="hide" value="nghide测试">
    </div>
    ```

#### Day2
  - 00.html `$parse`
    ```javascript
     var app = angular.module('demo.main',[]);
            app.controller("mainController",function($scope, $parse){
                $scope.name = 'main123';
                var fn = $parse('name');
                console.log(fn($scope))
            });
    ```
  - 02.html `$http方法使用`
    - 成功返回的 arguments??? `返回的arguments的第三项**function=>name**是什么???`
    - 失败返回的 错误日志 data 为什么会有标签???
    ```javascript
     var app = angular.module('demo.main', []);
          app.controller("mainController", function ($scope, $http) {
              $http({
                  method: "POST",
                  url: "data.json1",
                  params: {username: 'ted', age: 14},
                  data:{password:"123456"}
              }).success(function (data, status) {
                  console.log('post', arguments);
                  console.log(data);
                  console.log(status);
              }).error(function(data,status){
                  console.log('err',data,status)
              })
          });
    ```
  - 01 AngularJS模块 `模块可以嵌套模块???`
    - module 里面两个参数 第一个定义:`模块`; 第二个定义:`子模块`???;  
    - 可以定义两个 `ng-app`??? 那 子模块怎么定义???
    ```javascript
         var app = angular.module('demo.main',['demo.sub']); 
         var sub = angular.module('demo.sub',[]);   
              // 控制器的名字 + Controller
              sub.controller('nameController',function($scope){
                $scope.name = 'this is sub'
              });
    ```
  - 03 表达式的概念 `表达式必须依赖于某个作用域来执行`
  - 04 表达式的形式
    ```javascript
    取值表达式：{{data.num}}
    取函数：{{fn}}
    取对象：{{data}}
    运算表达式：{{data.num + 2}}
    函数执行：{{fn()}}
    取数组的内容：{{data.arr[2]}}
    ```
  - 05 $parse 用法(`传递父控制器的值???`)
    ```javascript
    $scope.num = 1;
    // 1. 调用$parse获得一个函数
    var parseFn = $parse('num');
    // 2. 把作用域传给那个函数，然后获取表达式的值
    var value = parseFn($scope);
    console.log(value);//1
    ```
  - 06 根作用域`$rootScope`和作用域`$scope`的区别???
  
  - 08 作用域上的监视
    ```javascript
    $scope.num = 0;
    console.log($scope);
    var releaseFn = $scope.$watch('num', function (newValue, oldValue, scope) {
        console.log(newValue, oldValue, scope);
    }); 
    // 释放自己注册的watcher
    //        releaseFn();
    ```
  - 14 自定义过滤器
    ```javascript
    1> 方法1
    <div ng-app="demo.main">
        <div ng-controller="mainController">
            <div ng-repeat="item in array | filter:{state:'已接受'}">
                {{item.name}},{{item.state}}
            </div>
        </div>
    </div>
    <script>
        var app = angular.module('demo.main', []);
        app.controller('mainController', function ($scope) {
           $scope.array =  [
               {name: "张三", phone: "18612345678", state: "邀请中"},
               {name: "李四", phone: "18612345678", state: "已接受"}
           ];
        });
        // 自定义过滤器 过滤掉属性 state 为 已接受 的数组项
    </script>
    2> 方法2 angular 自带过滤器(number后面带参数定义小数点保留的位数)
    <!-- 小数点后保留两位 -->
    <span>{{num | number:2 }}</span>
    <!-- 添加美元符号 -->
    <span>{{num | currency }}</span>
    <!-- lowercase 装换成大写 -->
    <span>{{word | uppercase}}</span>
    <!-- lowercase 装换成小写 -->
    3> 自定义方法进行 过滤
    <!-- titleCase 自定义过滤器方法的作用的域-->
    <div ng-app="MyFilter" ng-controller="filter">
      <span>{{title_1 | titleCase: 1 }}</span>
      <br>
      <span>{{title_2 | titleCase: 2 }}</span>
    </div>
    var myFilter = angular.module('MyFilter',[]);
    myFilter.filter('titleCase',function(){
        var titlecase = function(title,num){
            //按空格分成数组
            var words = title.split(' ');
            for(var i=0; i<words.length; i++){
                //将第一个字母转化为大写,加上 新返回的一个从索引1截取到最后的字符串;
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
            }
            //把数组 转化成字符串 返回
            return num+'. '+words.join(' ')
        };
        return titlecase
    });
    ```
  
  
  
  
  
  
  
  
  
  
  
  