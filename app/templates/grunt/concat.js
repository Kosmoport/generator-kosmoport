module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['scripts/*.js'],
      dest: 'app/js/app.min.js'
    }]
  },
  prod: {
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['scripts/*.js'],
      dest: 'dist/js/app.min.js'
    }]
  }
};