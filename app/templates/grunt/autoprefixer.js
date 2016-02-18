module.exports = {
  options: {
    browsers: ['> 0%', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
    map: true
  },
  dev: {
    src: 'app/css/styles.min.css'
  },
  prod: {
    options: {
      map: false
    },
    src: 'dist/css/styles.min.css'
  }
};
