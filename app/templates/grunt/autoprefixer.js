module.exports = {
  options: {
    browsers: ['last 10 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
    map: true
  },
  dev: {
    src: 'app/css/styles.css'
  },
  prod: {
    options: {
      map: false
    },
    src: 'dist/css/styles.min.css'
  }
};