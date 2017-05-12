{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

//The Array.from() method creates a new Array instance from an array-like or iterable object.

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); // ['a',7,7]
}

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){ //不使用polyfill的话，chrome不支持
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

//使用频率不高
{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); //读取从第三个位置开始到第四个位置（不包含）的数据,插入第0个位置
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3})); //4 find方法只找一个
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})); //3
}

{
  console.log('number',[1,2,NaN].includes(1)); //true
  console.log('number',[1,2,NaN].includes(NaN)); //true
}
