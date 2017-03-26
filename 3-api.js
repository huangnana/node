console.log(__filename);// 该模块文件解析后的据对路径
console.log(__dirname); // 该模块文件所在目录（文件夹）解析后的据对路径
setInterval(function(){
	var d = new Date();
	console.log("现在是"+d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
		+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒")
},1000);

