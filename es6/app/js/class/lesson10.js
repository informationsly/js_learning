{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size',list.size);
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list); // [1,2]

    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2); //[1,2,3,'2']
}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }

    list.forEach(function(item){console.log(item);})
}


{
    let weakSet=new WeakSet();

    let arg={};

    weakSet.add(arg);

    // weakSet.add(2);  //报错，只能存对象

    console.log("weakSet size", weakSet.size);
    console.log('weakSet',weakSet);
}

{
    let map = new Map();
    let arr=['123'];

    map.set(arr,456);

    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map); // Map(2) {"a" => 123, "b" => 456}
    for (let [key,value] of map.entries()){
        console.log("key,value",key,value);
    }
    console.log('size=',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}

{
    let weakmap=new WeakMap();

    let o={};
    weakmap.set(o,123);
    console.log("weakmap size = ", weakmap.size)
    console.log(weakmap.get(o));
}

{
    let map = new Map();
    let array = [];

    //增
    map.set('t', 1)
    array.push({t : 1});

    //查
    console.log("map#has:", map.has('t'))
    console.log("array#find:", array.find(item => item.t)) //返回含有t属性的对象

    //改
    map.set('t', 2)
    array.forEach(item => item.t ? item.t = 3 : '')
    console.info("map-array-modify", map, array)

    //删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1); //剪切 从数组中删除项目，index: 位置， 1：个数
    console.info("map-array-delete", map, array)
}

{
    // set和array的对比
    let set = new Set();
    let array = [];

    //增
    set.add({t:1})
    array.push({t:1})

    console.info('set-array:', set, array)

    //查
    let set_exist = set.has({t:1}); //false 要为true，has方法需要接收对象的引用
    let array_exist = array.find(item => item.t);
    console.info('set-array:', set_exist, array_exist); // false {t:1}

    //改
    set.forEach(item => item.t ? item.t = 7 : '');
    array.forEach(item => item.t ? item.t = 9 : '');
    console.info('set-array-modify', set, array);

    //删(set和array的删除都比较麻烦)
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index);
    console.info('set-array-delete', set, array);
}

{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-obj', map, set, obj);

    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });

    //改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-obj-modify', map, set, obj);

    //删除
    map.delete('t');
    set.delete(item); //对象有饮用时，set可以直接使用delete方法
    delete obj['t'];
    console.info('map-set-obj-delete', map, set, obj);

}