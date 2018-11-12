const gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    cssPrefix = require('gulp-autoprefixer'),
    imgMin = require('gulp-imagemin'),
    BS = require('browser-sync');

const CONFIG = {
    app: './app',
    dist: './dist'
};


gulp.task('test', function () {
    console.log('Gulp works!');
});

gulp.task('default', ['test', 'html', 'sass', 'js', 'json', 'myWatch', 'server'], function () {
    console.log('Task default');
});

gulp.task('html', function () {
    gulp.src([CONFIG.app + '/html/index.html'])
        .pipe(gulp.dest(CONFIG.dist))
        .pipe(BS.reload({stream:true}));
});

gulp.task('json', function () {
    gulp.src(CONFIG.app + '/json/**/*.json')
        .pipe(gulp.dest(CONFIG.dist))
        .pipe(BS.reload({stream:true}));
});

gulp.task('sass', function () {
    gulp.src(CONFIG.app + '/sass/**/*.sass')
        .pipe(sass())
        .pipe(cssPrefix())
        .pipe(gulp.dest(CONFIG.dist + '/css'))
        .pipe(BS.reload({stream:true}));
});

gulp.task('js', function () {
    gulp.src(CONFIG.app + '/js/**/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest(CONFIG.dist + '/js'))
        .pipe(BS.reload({stream:true}));
});

gulp.task('myWatch', function () {
    gulp.watch([CONFIG.app + '/html/index.html'], ['html']);
    gulp.watch(CONFIG.app + '/sass/**/*.sass', ['sass']);
    gulp.watch(CONFIG.app + '/js/**/*.js', ['js']);
    gulp.watch(CONFIG.app + '/json/**/*.json', ['json']);
});


gulp.task('server', function () {
    BS({
        server: {
            baseDir: CONFIG.dist
        }
    });
});