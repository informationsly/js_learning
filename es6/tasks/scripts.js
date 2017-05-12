import gulp from 'gulp'
//gulp语句中做if判断的包
import gulpif from 'gulp-if'
//gulp中处理文件拼接的包
import concat from 'gulp-concat';
import webpack from 'webpack';
//gulp处理webpack的包
import gulpWebpack from 'webpack-stream';
//文件重命名做标志的
import named from 'vinyl-named';
//文件修改后浏览器自动刷新
import livereload from 'gulp-livereload';
//处理文件信息流
import plumber from 'gulp-plumber';
//文件重命名
import rename from 'gulp-rename';
//压缩css,js
import uglify from 'gulp-uglify';
//命令行输出
import {log, colors} from 'gulp-util';
//命令行参数解析
import args from './util/args';

//编译es6
gulp.task('scripts', ()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader: 'babel'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({compress: {properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))

})