<<<<<<< HEAD
### 20170508
  - 怎么在我的js模板里写公共方法调用
  
    ``` javascript
    var index;
    if(!index && index!==0){
      index={
          init: function () {
              var _this=this;
              _this.userPersonTab();
              _this.userPersonTab1();
          },
          userPersonTab: function () {
    
          },
          userPersonTab1: function () {
              
          }
      }
    }
    
    $(function () {
      index.init();
    });
    ```
    + Tab1里面钓不到Tab里的方法,我是不是得换个模板?这个模板不适用?模板里一个方法报错,会影响其他函数执行?
    + angular里的directive是不是无不影响?
  - angualr PC 项目开发
    + 针对当前的平台站进行angular框架过度
    + 技术选型
      * 用1.0还是2.0
      * 选择什么UI框架(semantic)                  
      * angular1 gulp bootstrap sass angular常用插件(翻页,轮播);
      * 划分js 模块的思路
      * js文件怎么全部按顺序因引入???(gulp)
      * 怎么配合后台打包发布
      * 每个组件的单独js文件和公共的js文件怎么引入
      * config 返回的return url,怎么获取
      * 参考平台站,nav的每个链接,是不是动态的渲染当前的每个页面对应的模板
      * 跳转的一些页面怎么处理,登录注册跳转出去到新页面是不是比较好.
  - mis-go
    + http.service.js 看不懂
    + mis-go index.js 配置生效的的js文件,版本控制,其他是什么???
    + angular config是不是可以像require那样实现模块的js依赖.
  
  - angular 遇到的问题
    + 写模块的时候怎么架构模块,动态加载数据,ajax请求的方法怎么架构.
    + compile 和 link 一般优先使用link?
    + $q 和 promise
    + factory创建服务 和 value创建服务 service创建服务
    ```javascript
    serviceApp.factory('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        return {
            name: myname,
            age: age,
            getId: function(){
                return id
            }
        }
    });
    serviceApp.factory('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        return {
            name: myname,
            age: age,
            getId: function(){
                return id
            }
        }
    });
    serviceApp.service('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        this.name = myname;
        this.age = age;
        this.getId = function(){
            return id
        }
    })
=======
### 20170508
  - 怎么在我的js模板里写公共方法调用
  
    ``` javascript
    var index;
    if(!index && index!==0){
      index={
          init: function () {
              var _this=this;
              _this.userPersonTab();
              _this.userPersonTab1();
          },
          userPersonTab: function () {
    
          },
          userPersonTab1: function () {
              
          }
      }
    }
    
    $(function () {
      index.init();
    });
    ```
    + Tab1里面钓不到Tab里的方法,我是不是得换个模板?这个模板不适用?模板里一个方法报错,会影响其他函数执行?
    + angular里的directive是不是无不影响?
  - angualr PC 项目开发
    + 针对当前的平台站进行angular框架过度
    + 技术选型
      * 用1.0还是2.0
      * 选择什么UI框架                    
      * angular1 gulp bootstrap sass angular常用插件(翻页,轮播);
      * 划分js 模块的思路
      * js文件怎么全部按顺序因引入???(gulp)
      * 怎么配合后台打包发布
      * 每个组件的单独js文件和公共的js文件怎么引入
      * config 返回的return url,怎么获取
      * 参考平台站,nav的每个链接,是不是动态的渲染当前的每个页面对应的模板
      * 跳转的一些页面怎么处理,登录注册跳转出去到新页面是不是比较好.
  - mis-go
    + http.service.js 看不懂
    + mis-go index.js 配置生效的的js文件,版本控制,其他是什么???
    + angular config是不是可以像require那样实现模块的js依赖.
  
  - angular 遇到的问题
    + 写模块的时候怎么架构模块,动态加载数据,ajax请求的方法怎么架构.
    + compile 和 link 一般优先使用link?
    + $q 和 promise
    + factory创建服务 和 value创建服务 service创建服务
    ```javascript
    serviceApp.factory('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        return {
            name: myname,
            age: age,
            getId: function(){
                return id
            }
        }
    });
    serviceApp.factory('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        return {
            name: myname,
            age: age,
            getId: function(){
                return id
            }
        }
    });
    serviceApp.service('myConfig',function(){
        var myname = 'code_bunny';
        var age = 12;
        var id = 1;
        this.name = myname;
        this.age = age;
        this.getId = function(){
            return id
        }
    })
>>>>>>> e32005a09f7cac47af26209009dd5456b66ff27c
    ```