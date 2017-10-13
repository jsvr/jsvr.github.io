#### Sass 入坑笔记
  - `先安装Ruby`[点击下载安装](http://rubyinstaller.org/downloads?utm_source=caibaojian.com)
  - 安装时,到目录安装那一步时,选择第二项path那项.
  - 安装完成后打开cmd `ruby -v` 查看是否安装成功.
  - 安装成功后接着 安装国内镜像源.
    + cmd 执行命令 `gem sources --remove https://rubygems.org/`.
    + cmd 执行命令 `gem sources -a https://ruby.taobao.org`.(安装淘宝镜像)*假如这一步报错,请执行下一步*
    + cmd 执行命令 `gem sources -a http://gems.ruby-china.org/`.(安装腾讯镜像)
    + cmd 执行命令 `gem install sass`.(安装sass)
  - 安装compass
    + gem install compass
  - compass 使用
    + compass create learn-compass-init`项目名`(自动生成项目目录)
    + (webstorm)如果compass 下的 screen.scss @import "compass/reset"; 语法报错
    + alt + enter 勾选弹出的复选框可以解决
    + cd (编译文件,把scss编译成css)
    + compass watch(自动编译css文件)
    
#### Sass(Sass是Css3的超级,意味着他支持Css3)
  - Sass 解决了样式服用和语义化的问题
  - 语法转换
    + sass-convert main.scss main.sass `将scss格式转换成sass格式`
  - `创建项目`compass create learn-compass-syntax
  - `监听生成的css` 
    + cd learn-compass-syntax 
    + compass watch
    + ctrl + c `停止监听`
  - 变量表达式支持所有 js的运算符
  - 可重用的代码块,称mixin
    + @include 的方式调用
    + @extend  的方式调用
#### Sass 语法学习
  - 基于sass的既定规则
    + 没有文件后缀名的时候, sass 会自动添加 .scss或者 .sass的后缀
    + 同一目录下,局部文件和非局部文件不能重名
  - 新建`_variable`文件
    + 此文件用来存储变量,不需要编译出css,文件名前面加下划线`_`,此文件是一个局部文件.
    + 使用`import:"文件名"`引入`_variable`文件;
      - 此import跟css的import不同(下面css原生的import的两个弊端)
      - css中的import必须放在代码的最前面
      - 对性能不利(会有加载顺序,会阻塞加载)
      - 所以不建议 使用css原生的 import
  - 变量($)
    + `$color:blue;`,`$width:20px;`
  - 变量操作
    - 直接操作变量
    - 通过函数
        * 1跟代码块无关的函数,多事自己的内置函数,称作 functions
        * 2可重用的代码块, mixin (相当于一个函数)
        * 调用方法 通过 `@include` 或 `extend` (相当于调用一个函数)
  - mixin 一般放在screen文件的 顶部 import 之后或者单独的抽离出来放在一个文件里;    
  - 支持嵌套
  - % 指令
  - at-root指令
    + 虽然是嵌套书写但是生成的代码不是嵌套的
  - `config.rb`里面output_style = :expanded or :nested or :compact or :compressed
    + 控制css的输出样式 :nested 有缩进 compact 样式在一行 compressed 将样式表压缩
    
```javascript
    scss编译
    .main-sec{
      font-family:$main-sec-ff;
    
      .headline{
        //font-family:$main-sec-ff;
        //font-size: 16px;
        font: {
          family:$main-sec-ff;
          size:16px;
        }
      }
    
      .detail{
        font-size: 12px;
      }
    }
    a{
      &:hover{
        color: blue;
      }
    }
    p{
      color: hsl(270, 100%, 50%);
    }
    .error{
      color:#f00;
    }
    .serious-error{
      @extend .error;
      border: 1px solid #f00;
    }
    .error .instrusion{
      background-image: url("/image/hacked.png");
    }
    //加百分号类,当前类不在css里输出,只有在被继承时才会输出
    %right{
      font-size: 18px;
    }
    .error{
      color:#f00;
    }
    //extend 继承
    .serious-error{
      @extend .error, .right;
      border: 1px solid #f00;
    }
    .serious-error2{
      @extend .serious-error;
      border: 1px solid #f00;
    }
    
    
    
    
    css输出
    .main-sec {
      font-family: Arial, Verdana, Helvetica, sans-serif;
    }
    .main-sec .headline {
      font-family: Arial, Verdana, Helvetica, sans-serif;
      font-size: 16px;
    }
    .main-sec .detail {
      font-size: 12px;
    }
    a:hover {
      color: blue;
    }
    p {
      color: #8000ff;
    }
    .error, .serious-error {
      color: #f00;
    }
    .serious-error {
      border: 1px solid #f00;
    }
    .error .instrusion, .serious-error .instrusion, .serious-error2 .instrusion {
      background-image: url("/image/hacked.png");
    }
    
    .serious-error, .serious-error2 {
      font-size: 18px;
    }
    
    .error, .serious-error, .serious-error2 {
      color: #f00;
    }
    
    .serious-error, .serious-error2 {
      border: 1px solid #f00;
    }
    
    .serious-error2 {
      border: 1px solid #f00;
    }

```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    