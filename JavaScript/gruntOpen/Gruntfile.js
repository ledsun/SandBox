module.exports = function(grunt) {
  grunt.initConfig({
    open: {
      dev: {
        path: 'http://127.0.0.1:8888/src',
        app: 'chrome'
      },
      build: {
        path: 'http://google.com/',
        app: 'Firefox'
      },
      file: {
        path: 'Gruntfile.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-open');
}