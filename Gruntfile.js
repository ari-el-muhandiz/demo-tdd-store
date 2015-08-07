"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    env : {
      dev : {
        ENV : 'development'
      },
      test  : {
        ENV: 'test'
      }
    },
	watch: {
	  scripts: {
	    files: ['api/*.js', 'test/*.js'],
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
    },
    mocha_istanbul: {
      coverage: {
          src: 'test', // a folder works nicely
          options: {
              mask: '*.js'
          }
      }
    },
    istanbul_check_coverage: {
      default: {
        options: {
          coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
          check: {
            lines: 80,
            statements: 80
          }
        }
      }
    }
  });

  //load library
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');

  //register task
  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', ['env:test', 'mochaTest']);
  grunt.registerTask('coverage', ['env:test', 'mocha_istanbul:coverage']);
 
};
