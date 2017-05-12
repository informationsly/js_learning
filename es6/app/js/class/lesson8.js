{
  // 简洁表示法
  let o=1;
  let k=2;
  // es5
  let es5={
    o:o,
    k:k
  };
  // es6
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  // es5
  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };

  //es6
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c' //[a]=b
  }

  console.log(es5_obj,es6_obj);

}

{
  // 新增API
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); //true, true
  console.log('数组',Object.is([],[]),[]===[]); //false, false

  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); //拷贝，浅拷贝

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
