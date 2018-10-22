var gulp = require('gulp'),
    bs = require('browser-sync').create();

// sync the static server
gulp.task('browser-sync', [], function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('default', ['watch']);
