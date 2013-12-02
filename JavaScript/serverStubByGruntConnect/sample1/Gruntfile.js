module.exports = function(grunt) {
  grunt.initConfig({
    watch: {}, //connectサーバを待ち受けループにするために必要です。
    connect: {
      developmentServer: {
        options: {
          middleware: function(connect) {
            return [function(req, res) {
              res.end("hello world");
            }]
          }
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};