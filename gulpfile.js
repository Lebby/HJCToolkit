var browserify = require('browserify');  
var watchify = require('watchify');  
var coffeeify = require('coffeeify');  
var gulp = require('gulp');  
var source = require('vinyl-source-stream');  
var buffer = require('vinyl-buffer');  
var uglify = require('gulp-uglify');  
var gutil = require('gulp-util');

gulp.task('browserify', function() {

    var bundler = browserify({
        // Richiesti da Watchify, ottenibili con watchify.args
        cache: {}, packageCache: {}, fullPaths: true,
        // Array dei files che rappresentano i nostri entry-points
        entries: ['./main.js'],
        // Necessario solo dobbiamo utilizzare Sourcemaps
        debug: true
    });

    // Funziona di notifica successo
    var notifySuccess = function() {
        gutil.log('Finished', gutil.colors.green("'bundle'"));
    };

    // Funzione di notifica errori
    var notifyError = function() {
        gutil.log(gutil.colors.magenta("Browserify Error!"));
    };

    var bundle = function() {
        return bundler
          // Eseguo browserify con i parametri impostati
          .bundle()
          // Notifico eventuali errori durante la creazione del bundle
          .on('error', notifyError)
          // Rendo lo stream risultante compatibile con gulp
          // e specifico il nome del file desiderato
          .pipe(source('bundle.js'))
          .pipe(buffer())
          // Minifico il file con Uglify
          .pipe(uglify())
          // Lo salvo nella directory selezionata
          .pipe(gulp.dest('./'))
          // Notifico l'avvenuta creazione del bundle
          .on('end', notifySuccess);
    };

    // Wrappo il bundler con Watchify
    var watcher = watchify(bundler);
    // Imposto i transformer necessari
    watcher.transform('coffeeify');
    // Rieseguo la funzione "bundle" ogni volta che
    // watchify notifica un aggiornamento di uno dei file
    // coinvolti nella creazione del bundle
    watcher.on('update', bundle);

    return bundle();
});

