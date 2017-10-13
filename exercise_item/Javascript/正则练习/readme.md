### 正则入坑笔记
#### 贪婪模式与非贪婪模式
  - `贪婪模式`:正则表达式一般趋向于最大长度匹配，也就是所谓的贪婪匹配.
  - `非贪婪模式`:就是匹配到结果就行，就是少匹配字符。
#### 创建正则表达式/调用正则表达式
  - JS提供了两种方法创建正则;一种是采用new运算符,另一种是采用字面量方式;
    ```javascript
    (1).采用new运算符
        var str = 'box'
        var box = new RegExp('box');      // 第一个参数是字符串;
        var box = new RegExp('box','ig'); // 第二个参数是可选模式修饰符;
    (2).采用字面量方式
        var box = /box/;   // 直接使用两个反斜杠;
        var box = /box/ig; // 添加模式修饰符(i代表不区分大小写匹配,g代表全局匹配);
    (3).调用
        var o = box.test(str) //具体的调用方法后面会解释;
        var o = box.exec(str) //具体的调用方法后面会解释;
    ```
  - RegExp对象调用方法
    - test()`在字符串中查找是否存在指定的正则表达式并返回布尔值`
    ```javascript
      (1).采用new运算符调用
      var str = 'This is a Box!';          // 创建字符串;
      var pattern = new RegExp('box','i'); // 创建正则;
      console.log(pattern.test(str));            // 通过test()方法验证是否匹配;结果返回true
      (2).采用字面量方式调用
      console.log(/box/i.test('This is a box!'));
    ```
    - exec()`在字符串中查找指定正则表达式,若成功,则返回包含该查找字符串的相关信息数组;若失败,返回null;`
    ```javascript
      (1).exec()实例
      var pattern = /box/i;
      var str = 'This is a Box!';
      console.log(pattern.exec(str)); // 匹配结果返回了数组;
    ```
  - String对象调用方法
    - match(pattern):返回pattern中的子串或null;`math()方法获取匹配数组`
    ```javascript
      var pattern = /box/ig;　　　　　　　　　　　//不区分大小写的全局匹配
      var str = 'This is a Box!,That is a Box too!';
      alert(str.match(pattern));               // 得到数组:[Box,Box]
    ```
    - search(pattern):返回字符串中pattern开始位置;
    ```javascript
      var pattern = /box/ig;
      var str = 'This is a Box!,That is a Box too!';
      console.log(str.search(pattern));        // 10;search()查找到即返回,否则返回-1;
    ```
    - replace(pattern,replacement):用replacement替换pattern;
    ```javascript
       var pattern = /box/ig;
       var str = 'This is a Box!,That is a Box too';
       console.log(str.replace(pattern,'Tom')); // 将Box替换成了Tom;
    ```
    - split(pattern):返回字符串按指定pattern拆分的数组;
    ```javascript
        var pattern = / /ig;
        var str = 'This is a Box!, That is a Box too.';
        console.log(str.split(pattern));         // 将空格拆开分组成数组;
    ```
#### 获取控制
  - 正则表
  
    
    
    
    
    
    
    
    
    