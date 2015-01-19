module.exports = {
  prod: {
    options: {
      restructure: true,
      banner: '/* Development by kosmoport.kz, <%= grunt.template.today("yyyy") %> */\n'
    },
    files: {
      'dist/css/styles.min.css': ['dist/css/styles.css']
    }
  }
};