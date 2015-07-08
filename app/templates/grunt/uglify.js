var scripts = [
  'app/scripts/**/*.js'
];

module.exports = {
  options: {
    sourceMap: true,
    mangle: {
      except: ['jQuery']
    }
  },
  dev: {
    options: {
      sourceMapName: 'app/js/app.min.map'
    },
    files: {
      'app/js/app.min.js': scripts
    }
  },
  prod: {
    options: {
      sourceMapName: 'dist/js/app.min.map',
      compress: {
        global_defs: {
          "DEBUG": false
        },
        dead_code: true
      }
    },
    files: {
      'dist/js/app.min.js': scripts
    }
  }
};
