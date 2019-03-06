//gulp的配置文件
var gulp = require("gulp");//加载gulp模块
var connect = require("gulp-connect");//服务器模块
var sass = require("gulp-sass");//将sass文件转换成css文件的模块
var sourcemaps = require('gulp-sourcemaps');//让编译后的文件和源文件的关联的模块
var cleanCss=require("gulp-clean-css");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
//调用gulp的task方法创建任务

gulp.task("copyIndex",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copyImg",function(){
	gulp.src("img/*.{png,jpg,gif,jpeg}")
	.pipe(gulp.dest("dist/img"));
});
gulp.task("copyData",function(){
	gulp.src(["xml/*.xml","json/*.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
});
gulp.task("copyCss",function(){
	gulp.src("css/*.css")
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});
gulp.task("watch",function(){
	gulp.watch("*.html",["copyIndex"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("css/*.css",["copyCss"]);
	gulp.watch("js/*.js",["babel"]);
	gulp.watch("img/*.{png,jpg,gif,jpeg}",["copyImg"]);
	gulp.watch(["xml/*.xml","json/*.json"],["copyData"]);
});
//gulp.task("uglify",function(){
//	gulp.src("jquery-1.11.0.js")
//	.pipe(uglify())
//	.pipe(rename("jquery.min.js"))
//	.pipe(gulp.desk("dist"))
//})
gulp.task("concat",function(){
	gulp.src(["a.js","js/b.js"])
	.pipe(concat("mix.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("mix.min.js"))
	.pipe(gulp.dest("dist/js"));
});
gulp.task("babel",function(){
	gulp.src("js/*.js")
	.pipe(babel({presets:["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})
gulp.task('server',function(){ 
	connect.server({
		root:'dist',
		livereload:true
		});
})  
gulp.task("default",["server","watch"]);

