"use strict";
var execFile       = require('child_process').execFile;
var TEST_FILES     = '*.js'
var TEST_DIR       = './test'

module.exports = function(files, dir){
  var _files = files || TEST_FILE_TYPE;
  var _dir       = dir       || TEST_DIR
  execFile('find', [_dir, '-name', _files], function(err, stdout, stderr) {
    stdout
      .split('\n')
      .map(function(node) {
        return node.replace(_dir, '')
      })
      .map(function(node) { return `${__dirname}/${node}`})
      .map(require)
  });
}
