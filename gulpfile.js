var gulp = require("gulp");
var rename = require("gulp-rename");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    server: 'server.js' ,
    pages: ['src/*.html']
};

gulp.task("copy-server" , function() {
    return gulp.src(paths.server)
        .pipe(gulp.dest("build"));
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("build"));
});

gulp.task("bundle", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/ts/app.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("build/js"));
});

gulp.task("default", () => {
    return gulp.watch(["server.js" , "**/*.html", "src/**/*.ts"],  ["bundle", "copy-server", "copy-html"]);
});