// 使用fs模块实现行为表现分离

var http = require('http');
var url = require('url');
var fs = require('fs');
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
		default:  // 其他情况
			sendData(htmlDir+'404.html',req,res)
			break;
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