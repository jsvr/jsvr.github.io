# [深拷贝和浅拷贝](https://www.cnblogs.com/echolun/p/7889848.html)
> 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝.

## [1]: https://www.google.com/ "Google"
## 浅拷贝
  + 只会将各个属性的对象依次复制
    ```bash
    let a = [0, 1, 2, 3, 4],
    b = a;
    b[0] = 1;
    console.log(a, b);  // [1, 2, 3, 4]
    ```
  + 基本数据类型--名值存储在栈内存中
    ```bash
    # number
    # string
    # boolean
    # null
    # undefined
    # symbol
    # BigInt(任意精度整数)
    ```
## 深拷贝
  + 会将对象属性的属性的对象也会复制
    ```bash
    function deepClone(obj){
        let objClone = Array.isArray(obj)?[]:{};
        if(obj && typeof obj==="object"){
            for(key in obj){
                if(obj.hasOwnProperty(key)){
                    //判断ojb子元素是否为对象，如果是，递归复制
                    if(obj[key]&&typeof obj[key] ==="object"){
                        objClone[key] = deepClone(obj[key]);
                    }else{
                        //如果不是，简单复制
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }    
    let a=[1,2,3,4],
    b=deepClone(a);
    a[0]=2;
    console.log(a,b);
    ```
  + 引用数据类型--Object Function
    ```bash
    # Object
    # Function
    ```
  + 实现方法
    - 递归
    - for in
    - JSON对象的parse和stringify