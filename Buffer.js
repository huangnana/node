//  更好的操作二进制的类  全局的  三种构造方法
//  new Buffer(size[nuber]); 创建一个Bueffer对象，并为这个对象分配大小,一旦分配大小，其长度就固定了，不能更改
var bf = new Buffer(5);
console.log(bf);
// new Buffer(array); 长度也是固定的
var bf2 = new Buffer([1,2,3,4]);
console.log(bf2);
// new Buffer(string，[encoding(什么编码方式)]); 
var bf3 = new Buffer("holle","utf-8");
console.log(bf3);
console.log(bf3[3]);
console.log(String.fromCharCode(bf3[3])); // 把二进制转成字符
//  注：bf.length 表示的是字节的长度 并不是字符的长度  一个汉字是三个字符

// buffer 方法
// buffer.write(str,[index],[length],[encoding]) 把字符串写入buffer 从第几位开始写入,写入字符串的长度，写入的编码方式
// buffer.toString([encoding],[start],[end]) 把buffer对象写成字符串，从第几位开始到第几位结束
// buffer.toJSON() 把buffer对象写成json对象
// buffer.slice([start],[end]) 对bf进行截取操作，会改变原来的bf对象


// Buffer 静态方法
console.log(Buffer.isEncoding("utf-8"))// 是否是buffer的编码方式
console.log(Buffer.isBuffer("hello"))// 是否是buffer对象
console.log(Buffer.byteLength("你好吗"))// 返回字符串的字节长度
var list = [new Buffer("34"), new Buffer("hello")];
console.log(Buffer.concat(list))// 拼接Buffer对象
