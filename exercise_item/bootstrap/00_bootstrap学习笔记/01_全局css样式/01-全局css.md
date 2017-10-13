### 全局css API

#### 表单
> .checkbox-inline(让有该类名的label元素在一行水平排列)
   
``` html
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
```

> .checkbox(让有该类名的label元素垂直排列) 

``` html
<div class="checkbox">
  <label>
    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
  </label>
</div>
```

#### API 
  - .form-control
  - .form-inline 会重置input的width.不能通栏显示
  - .form-horizontal
  - .label-control
  - .checkbox-inline
  - .has-feddback