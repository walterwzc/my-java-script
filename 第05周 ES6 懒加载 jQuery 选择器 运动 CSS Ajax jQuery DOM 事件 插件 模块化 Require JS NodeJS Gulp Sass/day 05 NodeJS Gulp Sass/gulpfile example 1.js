const gulp = require("gulp");//加载gulp模块;

//给 gulp 添加一个指令; sayhello => 打印 hello....
gulp.task("sayhello",()=>{
	console.log("hello world my gulp run");
})

//gulp.src => 找到文件根源;
//pipe() => 所有的特殊指令;
//gulp.dest() => 所有的特殊指令;
gulp.task("html",()=>{
	return gulp
				//.src(["html/*.html"])
				//.src(["html/*"])
				//.src(["html/**/*"])
				.src(["html/*.html","html/page/*.html"])
			 	.pipe(gulp.dest("dist"))
})

gulp.task("script",()=>{
	return gulp
				.src(["src/*.js","model/*.js","libs/*.js","!src/secret.js"])
				.pipe(gulp.dest("dist/scripts"))
			 
})

//gulp.task("publish",["html","script"]);

//可以省略 gulp publish => gulp 
//gulp.task("default",["html","script"]);

//自动检测执行;
//gulp.watch()
gulp.task("default",()=>{
	//gulp.watch(["**/*.html","*/*.js","!module/**/*"],["script","html"])
	gulp.watch(["**/*.html","!module/**/*"],["html"]);
	gulp.watch(["*/*.js","!module/**/*"],["script"]);
})
