/*
 * grunt-blog-generator
 * https://github.com/grepug/grunt-blog-generator
 *
 * Copyright (c) 2015 GrePuG
 * Licensed under the MIT license.
 */

'use strict';

var marked = require('marked');
var jade = require('jade');
var escape = require('escape-html');
var copyDir = require('copy-dir');
var path = require('path');


module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('blog_generator', 'generate a blog website automatically', function () {

    // grunt.file.mkdir('./posts-raw')
    // grunt.file.mkdir('./jade')
    // grunt.file.mkdir('./posts')
    // grunt.file.mkdir('./json')
    // grunt.file.mkdir('./static')

    var options = this.options()

    if (options.init === true) {
      copyDir.sync('./node_modules/grunt-blog-generator/generator', './', function (_stat, _path, _file) {
        var stat = true;
        if (_stat === 'file' && path.extname(_path) === '.DS_Store') {
          stat = false;
        } else if (_stat === 'directory' && _file === '.DS_Store') {
          stat = false;
        }
        return stat;
      })
      return;
    }

    var watch = require('watch')

    var posts = [],
      isNew = function (mdName) {
        for (var i = 0; i < r.length; i++) {
          if (r[i].mdName === mdName) return r[i];
        }
        return true;
      }
      // grunt.file.write(tmpPath, 'abc');
      // this.files.forEach(function(f) {
      //   console.log(f)
      // });
  });

};
