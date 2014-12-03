module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      css: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass','watch']);
};
