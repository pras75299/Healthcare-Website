module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['js/*.js', '!js/*.min.js'],
				tasks: ['jshint']
			}
		},
		jshint: { 
			src: ['js/*.js', '!js/*.min.js']
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['watch']);

};