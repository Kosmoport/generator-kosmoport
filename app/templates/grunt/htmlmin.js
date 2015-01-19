module.exports = {
  // Configure HTML Minification for Production
  prod: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    files: [{
      expand: true,
      cwd: 'app/pages/',
      src: '*.html',
      dest: 'dist/pages/'
    }]
  }
};