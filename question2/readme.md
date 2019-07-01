# call bind apply
  b.call(a)  相当于把B里面的作用域强行指到a里面去
  第一个参数一定是this作用域要去到的地方 第二三四个参数是该作用域用到的值
  apply 的区别  参数要为数组 call (this,...argument) apply(this,argument)
  若call参数没有的话 this 就指向window

  bind 返回的是一个修改后函数
  b.bind(a)()    或者 var c = b.bind(a);   c()
  参数是一一对应的 




  - 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
  - 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下foo 函数中的 this 就是 obj 对象
  - 对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this