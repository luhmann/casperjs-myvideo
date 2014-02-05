'use strict';
module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-casper');
grunt.registerTask('test', ['casper']);

  grunt.initConfig({
    casper : {
     myvideo : {
        options : {
          test : false
        },
        files : {
          'casper-results.xml' : ['tracking.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-casper');
  grunt.registerTask('test', ['casper']);
};