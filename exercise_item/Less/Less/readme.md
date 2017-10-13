#### Less 入坑笔记
  1. cnpm install less -g `全局安装less`
  2. webstrom 会自动配置路径   `webstrom 会自动配置less的css 生成路径,可以双击file watchers 里的liss查看配置路径`. 
  3. sublim less
    1. 先安装 Less2Css 插件
    2. 再安装 cnpm install -g less-plugin-clean-css
    3. 再安装 cnpm install -g less-plugin-autoprefix
    4. 再在windows 系统里面 配置 less的 环境,path 地址跟websrom 里面的一样就行
    5. sublim -settings 里设置 "minify": false, `可以不压缩css`