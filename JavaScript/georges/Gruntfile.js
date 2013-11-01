module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: ['ge.txt', 'or.txt', 'ges.txt'],
				dest: 'georges.txt',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};