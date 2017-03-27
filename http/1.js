// 用户使用浏览器的一个过程
// 1、用户在浏览器通过一个http的请求到指定的服务器（用户使用的搜素引擎）
// 2、服务器接收到该请求以后，会对该请求进行分析处理
// 3、服务器处理完成以后，返回对应的数据到用户机器
// 4、浏览器接受服务器返回的数据，并根据接收到的数据进行分析和处理
// 使用HTTP（模块） 搭建一个web服务器，用于处理用户发出的请求
var http = require('http');
// 通过http模块下的serve创建并返回一个web服务器对象
var server = http.createServer();// 也可以接受一个参数作为'request'事件回调函数所做的事
// 监听端口
// serve.listen(port,[hostname],[backlog],[callback]);端口，主机名，连接等待队列的最大长度，回调函数
server.on('error',function(err){ // 监听失败时触发
	console.log(err)
})
server.on('listening',function(){ // 监听成功时触发
	console.log('listening...')
})
server.on('request',function(req,res){ // 当有客户端发送请求到该主机和端口的时候触发
	// 接收两个参数 request(req)一个实例，可以获取一些请求的信息（头信息，数据等）
	// response（res）一个实例，可以向该次请求的客户端输出返回响应
	console.log('有客户请求了。。');
	// console.log(req)
	// res.write(str，[encoding])配合res.end()使用
	res.writeHead(200,'node',{ // 写头信息 也可以用res.setHeader(str)
		'content-type':'text/html;charset=utf-8',
	});
	// http.STATUS_CODES 状态码
	res.write('<h1>hello</h1>');
	res.end();

})
server.listen(8080,'localhost');// 不传参数 端口有系统默认分配
// console.log(server.address());
