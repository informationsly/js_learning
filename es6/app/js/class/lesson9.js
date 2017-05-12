{
    // 声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2); //false Symbol申明的变量a1和a2是独一无二的
    let a3=Symbol.for('a3'); // for里的a3为key值
    let a4=Symbol.for('a3');
    console.log(a3===a4); // true
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj); //{abc: 345, c: 456, Symbol(abc): "123"}

    //用这个方法无法遍历到Symbol('abc')的值
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value); // let of abc 345, let of c 456
    }

    //getOwnPropertySymbols只能获得Symbol的值
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    })

    //获取所有属性的值
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]); // key, value
    })
}
