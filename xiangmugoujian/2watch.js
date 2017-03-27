var fs = require('fs');
var filedir = './exe/js';
console.log(filedir)
fs.watch(filedir,function(ev,flie){
	// 只要发生变化，就读取所有文件，并且合并
	fs.readdir(filedir,function(err,dataFlie){
		var arr = [];
		var content = '';
		dataFlie.forEach(function(f){
			if(f){
				var info = fs.statSync(filedir+'/'+f);
				// console.log(info)
				if(info.mode == 33206){
					arr.push(filedir+'/'+f);
					var c = fs.readFileSync(filedir+'/'+f);
					// console.log(c.toString());
					content+=c.toString()+'\n';
					console.log(content);
					fs.writeFile('./exe/and.js',content)
				}
			}
		})
		
	})
})