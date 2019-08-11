移动端 300 ms 原因和解决方法

- 原因 双击操作
- 方法
1. 给meta 标签 加上 user-scalable=no 
2. fastclick 原理 检测touchend事件后  立刻发出click事件 并把浏览器300ms之后真正的事件阻止掉


