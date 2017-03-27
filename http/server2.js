// url处理

var http = require('http');
var url = require('url');
var server = http.createServer();
server.on('request',function(req,res){
	// console.log(req.url)
	var urlStr = url.parse(req.url);// 解析url 解析成一个对象
	 // console.log(urlStr)
	 switch(urlStr.pathname){
	 	case '/':  // 首页
	 		res.writeHead(200,{
	 			'content-type':'text/html;charset=utf-8'
	 		});
	 		res.end('<h1>这是首页</h1>');
	 		break;
 		case '/user': // 用户页面
 			res.writeHead(200,{
	 			'content-type':'text/html;charset=utf-8'
	 		});
	 		res.end('<h1>个人中心</h1>');
 			break;
		default:  // 其他情况
			res.writeHead(404,{
	 			'content-type' :'text/html;charset=utf-8'
	 		});
	 		res.end('<h1>页面404</h1>');
			break;
	 }
});
server.listen(8080,'localhost');