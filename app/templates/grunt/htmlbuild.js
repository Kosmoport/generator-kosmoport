module.exports = {
  dev: {
    src: 'app/pages/**/*.html',
    dest: 'app/pages_c/',
    options: {
      beautify: true,
      logOptions: true,
      sections: {
        layout: {}
      }
    }
  },
  prod: {
    src: 'app/pages/**/*.html',
    dest: 'dist/pages/',
    options: {
      beautify: true,
      logOptions: true,
      sections: {
        layout: {}
      }
    }
  }
};
