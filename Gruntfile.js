/*
 * grunt-blog-generator
 * https://github.com/grepug/grunt-blog-generator
 *
 * Copyright (c) 2015 GrePuG
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    blog_generator: {
      default_option: {
        options: {
          abc:'abc'
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'blog_generator', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', 'blog_generator');

};
