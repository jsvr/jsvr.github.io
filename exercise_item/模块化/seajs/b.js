define(function(require, exports, module) {
  console.log('b.js文件模块被加载了');
  var sayHello = function() {
    console.log('hello world');
  };

  // 在同一个模块中， exports 和 module.exports 是等价的
  // console.log(exports === module.exports);
  // module.exports.sayHello = sayHello;
  // module.exports.foo = '我是b.js文件模块中的foo变量baz';

  //exports.sayHello = sayHello;
  //exports.foo = '我是b.js文件模块中的foo变量baz';
  module.exports.foo = '我是b.js文件中的bar';
  module.exports.sayHello = sayHello();

  //在b js 里面加载 c.js f.js g.js
  var c = require('./c.js');
  var f = require('./f.js');
  var g = require('./g.js');
});
