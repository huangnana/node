var fs = require('fs');
fs.mkdir('./1',function(){  // 创建文件夹
	console.log(arguments)
})
fs.rmdir('./1',function(){  // 删除文件夹
	console.log(arguments)
})
fs.readdir('../文件系统',function(err，fileList){ // 读取文件夹
	console.log(fileList);
})