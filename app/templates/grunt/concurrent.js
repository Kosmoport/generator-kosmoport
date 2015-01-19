module.exports = {
  
  options: {
    limit: 5
  },
  
  // Tasks for Development
  dev: [
    'uglify:dev',
    'jshint',
    'sass:dev',
    'autoprefixer:dev'
  ],
  
  devServer: [
    'watch'
  ],

  // Tasks for Production
  prodPrepare: [
    'jshint',
    'sass:prod',
    'csso:prod'
  ],
  prodCompile: [
    'autoprefixer:prod',
    'uglify:prod',
    'htmlmin:prod'
  ],

  // Image tasks
  imgOptimize: [
    'imagemin'
  ]
};