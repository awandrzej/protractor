var gulp = require ('gulp'); 
var protractor = require ('gulp-protractor').protractor; 
var webdriver_update = require('gulp-protractor').webdriver_update; 
gulp.task('webdriver_update', webdriver_update); 


/*
var webdriver_standalone = require('gulp-protractor').webdriver_standalone; 
gulp.task('webdriver_standalone', webdriver_standalone); 
*/

gulp.task('default', function() {

    gulp.src(['todo-spec.js'])
    .pipe (protractor({
        configFile: "conf.js", 
        args: ['--baseUrl', 'http://127.0.0.1:8000']

    }))
    .on('error', function(e){throw e}); 


}); 