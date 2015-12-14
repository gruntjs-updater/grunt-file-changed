/*
 * grunt-file-modified
 * https://github.com/adamj88/grunt-file-modified
 *
 * Copyright (c) 2015 Adam Johnson
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var crypto = require('crypto');

module.exports = function(grunt) {

  grunt.registerMultiTask('file_modified', 'Run grunt tasks if file has been modified since task last ran', function() {
    var options = this.options({});

    grunt.verbose.writeflags(options, 'Options');

    var hashes = {};
    if (grunt.file.exists(options.hashFile)) {
        try {
            hashes = grunt.file.readJSON(options.hashFile);
        }
        catch (err) {
            grunt.log.warn(err);
        }
    }
    grunt.verbose.writeflags(hashes, 'Hashes');

    var md5 = crypto.createHash('md5');

    this.files.forEach(function (f) {
        f.src.forEach(function (filepath) {
            var stats = fs.statSync(filepath);
            md5.update(JSON.stringify({
                filepath: filepath,
                isFile: stats.isFile(),
                size: stats.size,
                ctime: stats.ctime,
                mtime: stats.mtime
            }));
        });
    });

    var hash = md5.digest('hex');
    grunt.verbose.writeln('Hash: ' + hash);

    if (hash != hashes[this.target]) {
        grunt.log.writeln('Something changed, executing tasks: ' + JSON.stringify(options.tasks));

        grunt.task.run(options.tasks);

        hashes[this.target] = hash;
        grunt.file.write(options.hashFile, JSON.stringify(hashes));
    }
    else {
        grunt.log.writeln('Nothing changed.');
    }

  });

};


