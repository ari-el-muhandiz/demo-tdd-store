"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
	watch: {
	  scripts: {
	    files: ['api/*.js'],
	    tasks: ['test'],
	    options: {
	      spawn: false,
	    },
	  },
	},
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
		  require: 'should',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask('default', 'watch');
 	
  grunt.registerTask('test', 'mochaTest');
 
  
};
