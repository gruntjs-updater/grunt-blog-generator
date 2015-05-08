/*
 * grunt-blog-generator
 * https://github.com/grepug/grunt-blog-generator
 *
 * Copyright (c) 2015 GrePuG
 * Licensed under the MIT license.
 */

'use strict';

var marked = require('../../marked');
var jade = require('../../jade');
var escape = require('../../escape-html');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('blog_generator', 'generate a blog website automatically', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    var rawMdPath = options.rawRdPath,
      jadePath = options.jadePath,
      postsJson = options.postsJson,
      tmpPath = options.tmpPath;

      var r = require(postsJson);
      var posts = [],
      isNew = function(mdName) {
        for (var i = 0; i < r.length; i++) {
          if (r[i].mdName === mdName) return r[i];
        }
        return true;
      }
      grunt.file.write(tmpPath, 'abc');
    this.files.forEach(function(f) {
      console.log(f)
    });
  });

};
