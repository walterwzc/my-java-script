const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

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
			 	.pipe(connect.reload());//自动刷新;
})

gulp.task("script",()=>{
	return gulp
				//.src(["src/*.js","model/*.js","libs/*.js","!src/secret.js"])
				.src(["libs/jquery.js"])
				.pipe(concat("vendor.js"))
				.pipe(uglify())
				.pipe(gulp.dest("dist/scripts"))
})

//gulp.task("publish",["html","script"]);

//可以省略 gulp publish => gulp 
//gulp.task("default",["html","script"]);

//自动检测执行;
//gulp.watch()
gulp.task("watch", ()=>{
	//gulp.watch(["**/*.html","*/*.js","!module/**/*"],["script","html"])
	gulp.watch(["**/*.html","!module/**/*"], ["html"]);
	gulp.watch(["*/*.js","!module/**/*","!es6/*"], ["script"]);
	gulp.watch(["es6/*.js","!module/**/*"], ["es6"]);
});

gulp.task('server', function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:82,  // 端口号 
        livereload:true //开启自动刷新;
    });
});

gulp.task('es6', () =>{
	   return gulp.src('es6/*.js')
	        .pipe(babel({
	            presets: ['env']
	        }))
	        .pipe(gulp.dest('dist/scripts/'))
});

gulp.task("sass", ()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task("default",["watch","server"]);
