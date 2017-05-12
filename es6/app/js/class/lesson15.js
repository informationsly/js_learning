{
    // genertaor函数的基本定义,function*中的*号是genertor函数的标志
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k=tell(); // 返回一个生成器对象

    console.log(k.next()); // Object {value: "a", done: false}
    console.log(k.next());
    console.log(k.next());
    console.log(k.next()); // Object {value: undefined, done: true}
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    console.log(Symbol.iterator); // Symbol(Symbol.iterator)
    for(let value of obj){
        console.log('value',value);
    }
}

{
    let state=function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
    let draw = function (count) {
        console.log(`剩余${count}次`);
    };

    let residue = function* (count) {
        while (count > 0){
            count--;
            yield draw(count);
        }
    };

    let start = residue(5);
    let button = document.createElement('button');
    button.textContent = '抽奖';
    button.id = 'start';
    document.body.appendChild(button);
    document.getElementById('start').addEventListener('click', function () {
        start.next();
    }, false)
}

{
    // 长轮询
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({code : 0});
            }, 2000);
        });
    }

    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function (data) {
            if(data.code != 0){
                setTimeout(function () {
                    console.info('轮询失败，1秒后重试');
                    pull();
                }, 1000);
            }else{
                console.log('轮询执行成功');
            }
        });
    }

    pull();
}