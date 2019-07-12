// 冒泡排序
function bubble_sort(arr){
  len=arr.length
  for(var i=0;i<len;i++){
    for(var j=0;j<len-1-i;j++){//交换一次后 最大值已经到了最右边  可以不用排序了 所以式j<len-1-i
      if(arr[j]>arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(bubble_sort([1,4,2,6,5]))