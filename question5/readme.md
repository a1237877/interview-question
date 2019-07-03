数组去重5种方法：
1. ES6 Set方法  [...new Set(arr)]
2. indexOf()  if(res.indexOf(arr[i]) === -1)
3. map 
4. includes  if(!res.includes(arr[i]))
5. 双重循环
6. reduce   return arr.reduce((prev,cur)=>{
        return prev.includes(cur)?prev:[...prev,cur]
      },[])
7. sort() 再对相邻元素进行比较不同则push到res