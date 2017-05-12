{
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    };

    let monitor=new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018'); //把所有属性值中还有的2017换为2018
        },
        // 拦截对象设置属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value;
            }else{
                return target[key];
            }
        },
        // 拦截key in object操作
        has(target,key){ // 拦截in操作符
            if(key==='name'){ // 只暴露name属性
                return target[key]
            }else{
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')
        }
    });

    console.log('get',monitor.time);

    monitor.time='2018';
    monitor.name='mukewang';
    console.log('set',monitor.time,monitor);

    console.log('has','name' in monitor,'time' in monitor);

    // delete monitor.time;
    // console.log('delete',monitor);
    //
    // delete monitor._r;
    // console.log('delete',monitor);
    console.log('ownKeys',Object.keys(monitor));

}

{
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    };

    console.log('Reflect get',Reflect.get(obj,'time')); // 2017-03-11
    Reflect.set(obj,'name','xiaoming');
    console.log(obj);
    console.log('has',Reflect.has(obj,'name'));
}

{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator : validator,
            set(target, key, value, proxy){
                if(target.hasOwnProperty(key)){
                    let val_func = this._validator[key];
                    //!!val_func()：套路，把一个任意类型的值转换为布尔类型
                    if(!!val_func(value)){
                        return Reflect.set(target, key, value, proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else{
                    throw Error(`不存在${key}`);
                }
            }
        })
    };

    const personValidators = {
        name(val){
            return typeof val === 'string';
        },

        age(val){
            return typeof val === 'number' && val > 18;
        }
    };

    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
            return validator(this, personValidators);
        }
    }

    const person = new Person('lilei', 40);

    console.info(person);

    person.name = 111;

    console.info(person);
}
