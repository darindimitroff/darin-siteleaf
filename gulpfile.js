var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
}

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
function compileSass() {
    return gulp.src('_scss/stylesheet.scss')
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(prefix())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('css'));
}

/**
 * Wait for jekyll-build, then launch the Server
 */
function browserSyncServe(done) {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
    done();
}

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
function watchFiles() {
    gulp.watch('_scss/**/*.scss', compileSass);
    gulp.watch(
        [
            '*.html',
            '_layouts/*.html',
            '_posts/*',
            '_includes/*.html'
        ],
        gulp.series(jekyllBuild, browserSync.reload)
    );
}

// Define complex tasks
const build = gulp.series(compileSass, jekyllBuild);
const watch = gulp.parallel(watchFiles, browserSyncServe);

// Export tasks
exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, watch);
