module.exports = function(grunt) {
    grunt.initConfig({
        qunit: {
            all: 'index.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
};