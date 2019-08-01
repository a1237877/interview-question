// {{name}} {{age}}
function render(tpl,data){
// 1.找到所有的{{}} RegExp   /{\{\(.+\)}\}/ /g
return tpl.replace(/\{\{(.+?)\}\}/g,function($1,$2){
  console.log($1,$2)
  return data[$2]
})
}
let tmpl = `
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
`

render(tmpl,{name:'李伟',age:18});


// let obj_1 = { a: 'xxx', b: { c: 3, d: 4 } }
//       let obj_2 = obj_1
//       obj_1 = { a: 'yyy', b: { c: 4, d: 5 } }
//       obj_2.b = { c: 5, d: 6 }
//       console.log(obj_1,obj_2)

var test = (function(a) {
  this.a = a
  return function(b) {
    return this.a + b
  }
})(
  (function(a, b) {
    return a
  })(1, 2)
)
console.log(test(4))