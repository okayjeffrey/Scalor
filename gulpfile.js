var gulp = require('gulp'),
    browserSync = require('browser-sync'),//.create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    reload = browserSync.reload,
    src = {
        scss: './scss/*.scss',
        css: './css/',
        html: './*.html'
    };
// SERVE
    gulp.task('serve', ['sass'], function() {
        browserSync.init({
            server: "./"
        });
        gulp.watch(src.scss, ['sass']).on('change', reload);
        gulp.watch(src.html).on('change', reload);
    });
// SCSS
    gulp.task('sass', function () {
      return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(browserSync.stream());
    });

// $ gulp autoprefix -- runs autoprefixer
    gulp.task('autoprefix', function () {
	return gulp.src(src.css)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		}))
		.pipe(gulp.dest(src.css));
    });

gulp.task('default', ['serve']);


// $ gulp sync -- run only browserSync
    // gulp.task('sync', function() {
    //     browserSync.init({
    //         server: "./"
    //     });
    //     gulp.watch(basePaths.css + '*.css');
    //     gulp.watch('./*.html').on('change', browserSync.reload);
    // });

// $ gulp sync-prefix
    // gulp.task('sync-prefix', function() {
    //     browserSync.init({
    //         server: "./"
    //     });
    //
    //     gulp.watch(basePaths.css + '*.css', function(){
    //         return gulp.src(basePaths.css + '*.css')
    //             .pipe(autoprefixer({
    //                 browsers: ['last 2 versions'],
    //             }))
    //             .pipe(gulp.dest(basePaths.css));
    //     });
    //
    //     gulp.watch('./*.html').on('change', browserSync.reload);
    // });

// $ gulp jekyll -- run only jekyll server
    // gulp.task('jekyll', shell.task([
    //   'jekyll server --watch'
    // ]));

// $ gulp -- runs the two commands below as default
// -------------------------------------------------------------
// gulp.task('sass:watch', function () {
//   gulp.watch(basePaths.scss +'*.scss', ['sass']);
// });

// shell = require('gulp-shell'),
// imagemin = require('gulp-imagemin'),
// pngcrush = require('imagemin-pngcrush'),
// size = require('gulp-size'),

// $ gulp minify -- to just compress some files!
// gulp.task('minify', function(){
//   gulp.src('./_app/img/*')
//      .pipe(size({gzip: false, showFiles: true, title:'original image size'}))
//      .pipe(size({gzip: true, showFiles: true, title:'original image size'}))
//      .pipe(imagemin({
//         progressive: true,
//         svgoPlugins: [{removeViewBox: false}],
//         use: [pngcrush()]
//       }))
//       .pipe(size({gzip: false, showFiles: true, title:'minified images'}))
//       .pipe(size({gzip: true, showFiles: true, title:'minified images'}))
//       .pipe(gulp.dest('./img')); // change the dest if you don't want your images overwritten
// });
