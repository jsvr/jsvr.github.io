#### Form验证-API
  - 表单验证ngModelController的几个重要的属性
    > $viewValue
    ``` bash
    $viewValue属性保存着更新视图所需的实际字符串。
    ```
    
    > $modelValue
    ``` bash
    $modelValu 由数据模型持有.$modelValue和$modelValue可能是不同的,取决于$parser流水线是否对其进行了操作.
    ```
    
    > $parsers
    ``` bash
    $parsers的值是一个由函数组成的数组,当用户同控制器进行交互,并且ngModelController中的$setViewValue()方法被调用时,其中的函数在当用户同
    控制器进行交互,并且ngModelController的$setViewValue()方法被调会以流水线的形式被逐一调用.ngModel从DOM中读取的值会被传入$parsers中的
    函数,并依次被其中的解析器处理.这是为了对值进行处理和修饰.
       ***
       备注：ngModel.$setViewValue()函数用于设置作用域中的视图值。
       ngModel.$set ViewValue()函数可以接受一个参数。
       value（字符串）：value参数是我们想要赋值给ngModel实例的实际值。
       这个方法会更新控制器上本地的$viewValue，然后将值传递给每一个$parser函数（包括验证器）。当值被解析，且$parser流水线中所有的函数都调用完成后，
       值会被赋给$modelValue属性，并且传递给指令中ng-model属性提供的表达式。最后，所有步骤都完成后，$viewChangeListeners中所有的监听器都会被调用。
       注意，单独调用$setViewValue()不会唤起一个新的digest循环，因此如果想更新指令，需要在设置$viewValue后手动触发digest。
       $setViewValue()方法适合于在自定义指令中监听自定义事件（比如使用具有回调函数的jQuery插件），我们会希望在回调时设置$viewValue并执行digest循环。
       ***
    ```
    > $formatters
    ``` bash
    $formatters的值是一个由函数组成的数组,其中的函数会以流水线的形式在数据模型的值发生变化时被逐一调用.它和$parser流水线无不影响,用来对值进行格式化和
    转化,以便在绑定了这个值的控件中显示.
    ```
    
    > $viewChangeListeners
    ``` bash
    $viewChangeListeners的值是一个由函数组成的函数,其中的函数会以流水线的形式在视图中的值发生变化时被逐一调用.通过$viewChangeListeners,可以再无需
    使用$watch的情况下实现类似的行为.由于返回值会被忽略,因此这些函数不需要返回值.
    ```
    
    > $error
    ``` bash
    $error对象中保存着没有通过验证的验证器名称以及对应的错误信息.
    ```
    
    > $pristine
    ``` bash
    $pristine的值是布尔类型的,可以告诉我们用户是否可控件进行了修改.
    ```
    
    > $dirty
    ``` bash
    $dirty的值和$pristine相反,可以告诉我们用户是否和控件进行过交互.
    ```
    
    > $valid
    ``` bash
    $valid值可以告诉我们当前的控件中是否有错误.当有错误时值为false,没有错误时值为true.
    ```
    
    >$invalid 
    ``` bash
    $invali的值可以告诉我们当前控件中是否至少存在一个错误,它的值和$valid相反
    ```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    