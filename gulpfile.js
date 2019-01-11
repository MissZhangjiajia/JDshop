var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel =require("gulp-babel")
gulp.task("html",function(){
	gulp.src("HTML/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
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
	gulp.watch(["HTML/*.html","style/*.scss","JS/*.js"],["html","sass","js"])
})

gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
		})
});


gulp.task("default",["server","watch"]);



