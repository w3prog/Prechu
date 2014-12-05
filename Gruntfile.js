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
    },
    cssmin: {
      combine: {
        files: {
            'build/output.css': ['stylesheets/screen.css']
        }
      }
    },
    uglify: {
    my_target: {
      files: {
        'build/js/output.js': ['js/script.js']
        }
      }
    },
    concat: {
      options: {
        separator: '\n',
        preserveComments: false
      },
      distJs: {
        src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/owl-carousel/owl-carousel/owl.carousel.min.js', 'build/js/output.js'],
        dest: 'build/js/build.js'
      },
      distCss: {
        src: ['build/output.css', 'bower_components/owl-carousel/owl-carousel/owl.carousel.css'],
        dest: 'build/build.css'
      }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['compass','connect','watch']);
  grunt.registerTask('dist', ['compass','cssmin','uglify','concat']);
};
