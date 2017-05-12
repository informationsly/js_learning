// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }
// 其他文件中如何使用导出的方法或类？
// import {A, test, Hello} from './class/lesson17';

let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}
//外部使用方法
//import xxxx from './class/lesson17';
