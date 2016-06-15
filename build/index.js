#! /usr/bin/env node


/* MSH SHELL
 */
var command, convert, exec, fs, glob, gutil, process, process_screenshots, screenSizeFromImageSizeIOS, userArgs;

fs = require('fs');

gutil = require('gulp-util');

exec = require('child_process').exec;

process = require('process');

glob = require("glob");

userArgs = process.argv.slice(2);

command = userArgs[0];

gutil.log(gutil.colors.yellow('Processing your screenshots for the App Store, please wait...'));

convert = function(filename, gravity, size, platform) {
  var bounds, screen_size;
  bounds = size.substr(size.indexOf('x') + 1, size.length);
  screen_size = screenSizeFromImageSizeIOS(size);
  exec("mkdir " + (process.cwd()) + "/resources/screenshots/" + platform);
  exec("mkdir " + (process.cwd()) + "/resources/screenshots/" + platform + "/" + screen_size);
  return exec("convert " + (process.cwd()) + "/resources/screenshots/" + filename + ".png -thumbnail '" + bounds + "x" + bounds + ">' -gravity " + gravity + " -extent " + size + " " + (process.cwd()) + "/resources/screenshots/" + platform + "/" + screen_size + "/" + filename + ".png");
};

screenSizeFromImageSizeIOS = function(size) {
  switch (size) {
    case '640x960':
      return '3,5-inches';
    case '640x1136':
      return '4-inches';
    case '750x1334':
      return '4,7-inches';
    case '1242x2208':
      return '5,5-inches';
  }
};

process_screenshots = function() {
  return glob((process.cwd()) + "/resources/screenshots/*.png", {}, function(er, files) {
    var filename, filename_to_write, i, len, results;
    results = [];
    for (i = 0, len = files.length; i < len; i++) {
      filename = files[i];
      filename_to_write = filename.match(/(ios.{0,})(?=.png)/g);
      gutil.log(gutil.colors.yellow("Processing file named: " + filename_to_write + ".png"));
      convert(filename_to_write, 'south', '640x960', 'iOS');
      convert(filename_to_write, 'south', '640x1136', 'iOS');
      convert(filename_to_write, 'south', '750x1334', 'iOS');
      convert(filename_to_write, 'south', '1242x2208', 'iOS');
      results.push(gutil.log(gutil.colors.green("Processing of file: " + filename_to_write + ".png was successful!")));
    }
    return results;
  });
};

process_screenshots();
