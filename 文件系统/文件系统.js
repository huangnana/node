var fs = require("fs");
// console.log(fs);
// fs.openSync()  同步（会阻止后续代码执行，通过返回值对打开文件进行操作）
// var fd = fs.openSync('error.txt','r');
// console.log(fd);


// fs.open(path,flags,[mode],callback)  异步方法（不会阻止后续代码执行，通过回调函数对打开的文件进行操作）
// path:要打开文件的路径
// flags：打开文件的方式（读或者写）
// mode：设置文件模式 读/写/执行  4/2/1
// callback:回调函数  err：文件打开失败的错误保存在err里面，打开成功err为null；fd 大考文件的标识
fs.open('error.txt','r+',function(err,fd){
	// console.log(err);
	// console.log(fd);
	if(err){
		console.log("打开失败")
	}else{
		console.log("打开成功")
		// fs.read(fd,buffer,offset,length,position,callback)
		// offset 新的内容添加到buffer中的起始位置 position：读取文件中的起始位置；length：添加到buffer中的长度
		// var bf = new Buffer(10);
		// fs.read(fd,bf,0,8,0,function(err,len){
		// 	console.log(err);
		// 	console.log(bf);
		// 	console.log(len);
		// })
		// fs.write(fd,buffer,offset,length,position,callback)
		// buffer:要写入的数据
		// var bf = new Buffer("12345");
		// fs.write(fd,bf,0,3,3,function(){
		// 	console.log(arguments);
		// })
		fs.write(fd,'123567',0,'utf-8'); 
		// fs.close(fd,function(){
		// 	console.log('文件已关闭');
		// })
	}
})
var filename = '123.txt';
// 文件不存在则新建一个，如果存在则替换
fs.writeFile(filename,"nihao",function(){
	console.log(arguments);
})
//  在文件中追加新内容
fs.appendFile(filename,'hello',function(){
	console.log(arguments);
})
// 判断文件是否存在 
fs.exists(filename,function(isExists){
	console.log(isExists)
})

// 文件读取
fs.readFile("error.txt",function(err,data){
	if(err){
		console.log('读取失败')
	}else{
		console.log(data.toString('utf-8'))
	}
})
// 文件重命名
fs.rename('123.txt','2.txt',function(){
	console.log(arguments);
})
// 文件删除
// fs.unlink('2.txt',function(){
// 	console.log(arguments);
// })
// 文件状态（属性）  fs.stat(文件名)
// fs.watch(filename,[opsition],[callback/listener])// 不稳定
fs.watch("error.txt",function(ev,fn){
	if(fn){
		console.log(fn+'发生了变化')
	}else{
		console.log('不支持')
	}
})