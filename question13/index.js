const a = {
  b:1
}
function b(){
  console.log('a的值变化了',a.b)
}
//当a的数据改变时  function b 打印的东西也要实时更新
function bindData(){
  //方法会返回一个由给定对象的自身可枚举属性的数组
  Object.keys(a).map(key => {
    let v = a[key]
    Object.defineProperties(a,key,{
      get(){  //读取属性时调用的方法
        console.log('duqu A')
        return v
      },
      set(newA){ //修改属性时调用的方法
        v = newA
        b()
      }
    })
  })
}
bindData()
a.b = 3