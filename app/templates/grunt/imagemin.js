module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['images/*.{png,jpg,gif}'],
      dest: 'dist/'
    }]
  }
};