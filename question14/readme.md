get post 请求 区别
在缓存方面 get请求类似于查找的过程  用户获取数据 可以不用每次都与后端连接
所以可以使用缓存
post 不可以缓存
get请求URL长度被限制 2048个字符   post不限制
get不安全 涉及到密码之类的 要用post 加密传输  因为post参数不会被保存在浏览器或web服务器日志中

http协议没有限制url 长度 是浏览器做了url长度限制  只对get请求

前端事件流
addEventListener 第三个参数为false 或者 true 默认为false 表示先冒泡  为true表示先捕获 (ie只支持冒泡)
1. 捕获：从上而下的过程
  如点击li元素会先触发ul元素。
注意：如果在li上绑定click事件，那么新添加的li元素不会有这个click事件。此时应该在ul上绑定事件，根据事件捕获的原理，事件会自上而下传递给li。通过event.target找到这个li元素。
这种方式被称为事件委托。
2. 目标：
3. 冒泡：从下而上


#q14. js中的各种位置
    clientHeight: 表示可视区域的高度，不包含border和滚动条
    offsetHeight: 表示可视区域的高度，包含border和滚动条
    scrollHeight: 表示所有区域的高度，包含因为滚动被隐藏的部分
    clientTop: 表示边框border的厚度，在未指定的情况下一般为0
    scrollTop: 滚动后被隐藏的高度





