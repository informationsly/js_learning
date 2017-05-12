{
  console.log('a',`\u0061`); // a
  console.log('s',`\u20BB7`); // 乱码 7 （被认为是两个字符）
  //长度大于2个字节的字符,表示时需要加{}
  console.log('s',`\u{20BB7}`); //显示字符：𠮷


}


{

  let s='𠮷';
  console.log('length',s.length);  //2
  console.log('0',s.charAt(0)); //乱码
  console.log('1',s.charAt(1)); //乱码
  console.log('at0',s.charCodeAt(0)); //ES5中的方法，存在不足 码值：55362
  console.log('at1',s.charCodeAt(1)); //码值：57271

  let s1='𠮷a';
  console.log('length',s1.length); 3
  console.log('code0',s1.codePointAt(0)); //ES6中的新方法，能够正确处理4个字节储存的字符, codePointAt(0)能正确取出第一个字符
  console.log('code0',s1.codePointAt(0).toString(16)); //第一个字符的16进制
  console.log('code1',s1.codePointAt(1)); //取值为：'𠮷'.charAt(1)
  console.log('code2',s1.codePointAt(2)); // a
}

{
  console.log(String.fromCharCode("0x20bb7")); //es5 乱码
  console.log(String.fromCodePoint("0x20bb7")); //es6 正确显示字符：𠮷
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]); //乱码 乱码 a b c
  }
  for(let code of str){
    console.log('es6',code); //𠮷 a b c
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2)); //abcabc
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

//se7草案中的方法,padStart/padEnd实现补白的效果
{
  console.log('1'.padStart(2,'0')); //01
  console.log('1'.padEnd(2,'0')); //10
}

//标签模版：知道怎么用，在那里用：防止xss攻击，多语言支持
{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`); //换行符原样输出：Hi\n3
  console.log(`Hi\n${1+2}`); //\n会被转义为换行符
}
