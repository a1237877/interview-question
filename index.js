// function Person(name){
//   this.name = name
// }

// let p = new Person('wn')
//1.p的隐式原型 = Person.prototype
//2.Person.__proto__ = Function.prototype
//3.Function.__proto__ = Object.prototype
var foo = {},
F = function(){};

Object.prototype.a = 'valA'
Function.prototype.b = 'valB'
console.log(foo.a)    //valA
console.log(foo.b)    //undefined
console.log(F.b)      //valB
console.log(F.a)      //valA

// function Person(name){
//   this.name = name
//   // return {}    // {}
//   return 666   // Person {name:'wn'}
// }
//构造函数不需要返回值 使用new 来创建对象时 如果return 的式非对象类型  会忽略返回值
//如果return 的是对象  则返回该对象  return null 也会被忽略

// let p = new Person('wn')
// console.log(p)   //Person {name:'wn}

function Person(name){
  this.name = name
}
function Student(){

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student
let s = new Student('sb')
console.log(s instanceof Person) //属性是继承不了的 所以s 的值为 Student {}  里面没有值 true


for(var i = 0;i < 10;i++){
  (
    function(i){
      setTimeout(()=>{
        console.log(i)
      },0)
    }
  )(i)
}
//用let 就会打印出0 - 9  let能创建块级作用域   闭包也可以
//let 每次循环会生成一个封闭的作用域和setTimeout 绑定
//而var 每次循环 会覆盖掉上一次的作用域