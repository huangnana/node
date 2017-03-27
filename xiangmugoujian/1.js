var projectData = {
	'name':"exe",
	'fileData':[
		{
			'name':'css',
			'type':'dir'
		},
		{
			'name':'js',
			'type':'dir'
		},
		{
			'name':'index.html',
			'type':'file',
			'content':'<html>\n\t<head>\n\t\t<title>title</title>\n\t\t</head>\n\t<body>\n\t</body>\n</html>'
		}
	]

}
var fs = require('fs');
if(projectData.name){  // 如果存在 就新建文件夹
	fs.mkdirSync(projectData.name);
	var fileData = projectData.fileData;
	// console.log(fileData)
	if(fileData&&fileData.forEach){ //  如果存在且为数组
		fileData.forEach(function(f){
			f.path = projectData.name+'/'+f.name;
			f.content = f.content || '';
			console.log(f.content)
			switch(f.type){
				case 'dir':
					fs.mkdirSync(f.path);
					break;
				case 'file':
					fs.writeFileSync(f.path,f.content);
					break;
				default:
				break;
			}
		})
		
	}
}