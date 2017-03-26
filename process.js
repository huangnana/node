// process(进程) 一个全局对象
// console.log(process);
// 包含命令行参数的数组。第一个元素是'node'，第二个参数是 JavaScript 文件的名字，第三个参数是任意的命令行参数。
// console.log(process.argv);
// console.log(process.pid) // 当前运行程序的pid
// console.log(process.title) // 当前进程显示的名称
// console.log(process.execPath) // 开启当前进程的执行文件的绝对路径。
// console.log(process.env) // 用户环境信息
// console.log(process.arch) // 当前CPU的处理架构
//  exit 退出当前进程
// setTimeout(function(){
// 	process.exit();
// },1000)

// Io 标准输入输出流  stiin  stfout  提供输入输出的方法
// process.stdout.write("hello");
// 默认状态下输入流是关闭的，想要监听处理输入流数据，需要开启输入流
process.stdin.resume();
// process.stdin.on('data',function(str){  // 用于监听用户的输入数据
// 	console.log("用户输入了"+str)
// })
var a ;
var b;
process.stdout.write('请输入a的值')
process.stdin.on('data',function(str){  // 用于监听用户的输入数据
	if(!a){
		a = Number(str);
		process.stdout.write('请输入b的值')
	}else{
		b = Number(str);
		console.log(a+b);
	}
})