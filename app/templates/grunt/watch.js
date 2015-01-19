module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'app/scripts/*.js'
    ],
    tasks: [
      'jshint',
      'uglify:dev'
    ]
  },

  styles: {
    files: [
      'app/styles/**/*.scss'
    ],
    tasks: [
      'sass:dev',
      'autoprefixer:dev'
    ]
  },
  
  html: {
    files: [
      'app/templates/**/*.html'
    ]
  }
};