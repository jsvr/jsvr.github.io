#### Bootstrap 入坑笔记

### 0118
  + css文件里默认的`less`文件样式是什么???
  + 需要重新定义样式时,可以把`样式名`拷贝直接在自己的css文件里直接修改当前样式.(但是,自己的css文件引入得在bootstrap的后面).
  + 实例：流式布局容器
    - 将最外面的布局元素 .container 修改为 .container-fluid，就可以将固定宽度的栅格布局转换为 100% 宽度的布局.
```javascript
<div class="container-fluid">
  <div class="row">
            百分百布局
  </div>
</div>
```
    - 