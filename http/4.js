// 使用querystring模块方法对get和post提交的数据进行处理

var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var server = http.createServer();
var htmlDir = __dirname+'/html/'; // 该模块文件所在目录（文件夹）解析后的据对路径+html 
server.on('request',function(req,res){
	var urlStr = url.parse(req.url);// 解析url 解析成一个对象
	 switch(urlStr.pathname){
	 	case '/':  // 首页
	 		sendData(htmlDir+'index.html',req,res)
	 		break;
 		case '/user': // 用户页面
 			sendData(htmlDir+'user.html',req,res)
 			break;
		case '/login': // 提交页面
 			sendData(htmlDir+'login.html',req,res)
 			break;
		case '/login/check': 
			console.log(req.method);
			console.log(urlStr);
			// get 方式请求数据 处理方法
			console.log(qs.parse(urlStr.query)) //querystring提供的方法，转成对象的形式
			if(req.method.toUpperCase() === 'POST'){
				var str = '';
				// post 请求的数据会被写入缓存区，通过req的data和end事件来进行数据的处理
				req.on('data',function(chunk){
					str+=chunk;
				});
				req.on('end',function(){
					console.log(str)
					console.log(qs.parse(str))
				})
			}
			break;
		// default:  // 其他情况
		// 	sendData(htmlDir+'404.html',req,res)
		// 	break;
	 }
});
function sendData(file,req,res){
	fs.readFile(file,function(err,data){
		// console.log(file)
		if(err){
			res.writeHead(404,{
	 			'content-type' :'text/html;charset=utf-8'
	 		});
			res.end(data)
		}else{
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			});
			// console.log(data)
			res.end(data)
		}
	})
};
server.listen(8080,'localhost');