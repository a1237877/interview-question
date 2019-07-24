Array.prototype.method = function(){
  console.log('wn')
}

var myArry = [1,2,3,4,5,6,7]
for(let i of myArry){
  console.log(i)
}
//用 let i in myarry 时
// 会出现数组下标  所以要用myarry[i]


let garr = [1,2,[3,4],5,[2,7,[3,9]]] 
let oarr = [1,2,3,4,5,2,7,3,9]   //怎么实现
//递归
function outputArr(arr){
  let res = []
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res = res.concat(outputArr(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}

function outputArr1(arr){
  return arr.reduce(function(pre,item){
    return pre.concat(Array.isArray(item)?outputArr(item):item)
  },[])
}
// console.log(outputArr(garr))
console.log(outputArr1(garr))