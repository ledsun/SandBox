module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: 'index.html', //監視したいファイルを指定します。
      options: {
        livereload: true //livereloadを有効にします。
      }
    },
    connect: {
      uses_defaults: {} //空のサブタスクを入れます。名前は何でもいいです。ここではuses_defaultsにしました。
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
