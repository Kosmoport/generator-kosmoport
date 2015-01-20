'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groundbreaking ' + chalk.green('Kosmoport') + ' generator!'
    ));    
    var prompts = [{
      type:'input',
      name: 'blocks',
      message:  'What blocks you will use in your project?Blocks:'
    },];

    this.prompt(prompts, function (props) {
    this.blocks = props.blocks.split(' ');

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('index.html')
      );  
      this.directory(
        this.templatePath('grunt'), 
        this.destinationPath('grunt')
      );
      this.directory(
        this.templatePath('styles'), 
        this.destinationPath('app/styles')
      );
      this.mkdir('app');
      this.mkdir('app/scripts');
      this.mkdir('app/templates');
      this.mkdir('app/images');
      this.mkdir('app/fonts');
      this.mkdir('styles/blocks');

      var blocks=[];
      for (var b in this.blocks) {
        this.write('styles/blocks/_' + this.blocks[b] + '.scss', '/* Block: ' + this.blocks[b] + '*/');
        blocks.push('@import url(styles/blocks/_' + this.blocks[b] + '.scss);\n');
      }
      
      blocks = blocks.toString().replace(/,/g, '');
      
      this.write('styles/styles.css', blocks);
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
