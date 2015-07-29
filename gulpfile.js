/* Gulp Plugins */

var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	minifyCss   = require('gulp-minify-css'),
	express 	= require('express'),
	app 		= express(),
	port 		= 3000;


/* Resuable path configuration */

var paths = {

	bower: 'bower_components/',
	plugins: 'src/plugins/'

}

/* ***************** */

/* Define Gulp Tasks */

/* ***************** */


//Javascript Library Dependencies 

gulp.task('depsJs', function(){

	return gulp.src([

			paths.bower + 'angular/angular.min.js',
			paths.bower + 'angular-ui-router/release/angular-ui-router.min.js',
			paths.bower + 'jquery/dist/jquery.min.js',
			paths.bower + 'bootstrap/dist/js/bootstrap.min.js',
			paths.plugins + 'plugin.js'

		])

		.pipe(concat('deps.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});


//CSS Dependencies 

gulp.task('depsCss', function(){

	return gulp.src([
			paths.bower + 'bootstrap/dist/css/bootstrap.min.css'
		])

		.pipe(minifyCss())
		.pipe(rename('deps.min.css'))
		.pipe(gulp.dest('build'));
});


//Javascript scripts

gulp.task('scripts', function(){

	return gulp.src([

				'src/js/app.js',
				'src/js/app.routerConfig.js',
				'src/js/**/*.js'
			 ])
			.pipe(concat('app.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'));
});


//CSS sheets

gulp.task('styles', function(){

	return gulp.src('src/css/*.css')
			.pipe(rename({suffix: '.min'}))
			.pipe(minifyCss())
			.pipe(gulp.dest('build/css'));

});



/* ***************** */

/* Define Watch Tasks */

/* ***************** */

//Javascript files
gulp.task('watchScripts', function(){

	return gulp.watch('src/js/*.js', ['scripts']);

})


//CSS files
gulp.task('watchStyles', function(){
	
	return gulp.watch('src/css/*.css', ['styles']);

});



//Server

gulp.task('express', function(){

	app.use(express.static(__dirname + '/'));




	app.listen(port, function(){

	console.log('Server running on port ' + port);
})


});


//RUN IN SEQUENCE
gulp.task('default', ['express']);


