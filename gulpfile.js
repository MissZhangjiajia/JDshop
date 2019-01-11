var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel =require("gulp-babel")
gulp.task("font",function(){
	gulp.src("fonts/**")
	.pipe(gulp.dest("dist/font"))
})
gulp.task("html",function(){
	gulp.src("HTML/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("img",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"))
})
gulp.task("css",function(){
	gulp.src("bootstrap.css")
	.pipe(gulp.dest("dist/css"))
})
gulp.task("js",function(){
	gulp.src("JS/*.js")
	.pipe(gulp.dest("dist/js"))
})
gulp.task("sass",function(){
	gulp.src("style/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:"compact"}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
})
gulp.task("watch",function(){
	gulp.watch(["font/**","HTML/*.html","style/*.scss","JS/*.js","img/**","bootstrap.css"],["html","sass","js","img","font"])
})

gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
		})
});


gulp.task("default",["server","watch"]);



