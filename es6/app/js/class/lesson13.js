{
    //es5使用基于回调的方式完成异步操作，
    // 基本定义
    let ajax=function(callback){
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call()
        }, 1000);
    };
    ajax(function(){
        console.log('timeout1');
    })
}

{
    let ajax=function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax().then(function(){
        console.log('promise','timeout2');
    })
}

{
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax()
        .then(function(){
            return new Promise(function(resolve,reject){
                setTimeout(function () {
                    resolve()
                }, 2000);
            });
        })
        .then(function(){
            console.log('timeout3');
        })
}

{
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    });
}

{
    function loadImg(src) {
        return new Promise((resolve, reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
    }

    //Promise.all: 把多个promise实例当作一个promise实例，当3个loadImg完成后，Promise.all才会创建新的promise实例，然后触发then操作
    Promise.all([
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png')
    ]).then(showImgs, function (error) {
        console.error("加载图片出错", error);
    })
}

{
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let image = document.createElement('img');
            image.src = src;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (err) {
                reject(err);
            }
        })
    };

    function showImg(image) {
        let p = document.createElement('p');
        p.appendChild(image);
        document.body.appendChild(p);
    }

    //Promise.race:只需一个数据源获得数据，就会生成promise对象，然后调用then
    Promise.race([
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png')
    ]).then(showImg);
}