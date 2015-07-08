module.exports = {
  prod: {
    options: {
      restructure: true,
      banner: '/* Development by kosmoport.kz */\n'
    },
    files: {
      'dist/css/styles.min.css': ['dist/css/styles.css']
    }
  }
};
