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
      cwd: 'app/pages_с/',
      src: '**/*.html',
      dest: 'dist/pages/'
    }]
  }
};
