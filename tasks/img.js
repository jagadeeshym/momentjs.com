module.exports = function(grunt) {
	grunt.config('copy.img', {
		expand: true,
		cwd: 'source',
		src: ['img/*.{jpg,jpeg,png,gif}'],
		dest: 'build/static'
	});

	grunt.registerTask('img', ['copy:img']);
};
