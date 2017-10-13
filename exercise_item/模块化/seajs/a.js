define(function (require,exports,module) {
  console.log('a.js文件模块被加载了');
  module.exports.foo = '我是a.js文件中的bar';
  // 当调用 require 之后，实际上就得到了 b.js 文件模块中的 module.exports 对象
  var b = require('./b.js');
  //加载顺序 当b.js 里的所有文件加载完成以后,才能加载 b.js 模块 暴露的 foo 接口,也就是b.foo
  console.log(b.foo);


  // module.exports = 'bar';

});
