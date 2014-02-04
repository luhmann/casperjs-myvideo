grunt.loadNpmTasks('grunt-casperjs');
grunt.registerTask('test', ['casperjs']);

grunt.initConfig({
  casperjs: {
    options: {
      async: {
        parallel: false
      }
    },
    files: ['tracking.js']
  },
})