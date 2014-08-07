module.exports = function(grunt) {
  grunt.initConfig({
    external_daemon: {
      redis: {
        cmd: 'redis-server',
        args: ['/usr/local/etc/redis.conf']
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-external-daemon');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['external_daemon:redis', 'nodemon']);
};
