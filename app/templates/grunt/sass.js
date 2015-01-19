module.exports = {
  // Configure SASS for Development
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['styles.scss'],
      dest: 'app/css/',
      ext: '.css'
    }]
  },
  // Configure SASS for Production
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['styles.scss'],
      dest: 'dist/css',
      ext: '.css'
    }]
  }
};