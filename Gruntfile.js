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
    connect: {
      test: {
        options: {
          port: 3000,
          base: '.'
//          ,
//          onCreateServer: function(server, connect, options) {
//          var io = require('socket.io').listen(server);
//          io.sockets.on('connection', function(socket) {
//            // do something with socket
//          });
       // }
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
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['compass','connect','watch']);
};
