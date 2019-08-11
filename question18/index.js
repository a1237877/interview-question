function Animal(name){
  this.name = name;
  this.sleep = function(){
    console.log(this.name,'isSleeping')
  }
}
Animal.prototype.age = 10
var animal1 = new Animal()


function Cat(){
  this.name = 'cat'
}
Cat.prototype.age = 12
function Dog(){
  this.name = 'dog'
}
//原型链继承
Dog.prototype = new Animal()
Cat.prototype = new Animal()
var dog1 = new Dog()
var cat1 = new Cat()
cat1.sleep()
dog1.sleep()
console.log(cat1.age)
cat1.age = 12
console.log(cat1 instanceof Animal)
console.log(dog1.age)
console.log(dog1 instanceof Animal)

//构造函数继承
function Pig(){
  Animal.call(this,'pig1')
  this.age = 12
}
var pig = new Pig()
console.log(pig.name)
console.log(pig.age) //12
pig.sleep()
console.log(pig instanceof Animal)

//组合继承
function Monkey(name){
  Animal.call(this,name)
  this.sleep = function(){
    console.log('111')
  }
  this.age = 12
}
Monkey.prototype = new Animal()
var monkey = new Monkey('monkey')
monkey.sleep() // 111   说明子类构造函数属性代替了父类构造函数属性
console.log(monkey.name)
console.log(monkey.age)
console.log(monkey instanceof Animal)





