###########################
### MSH SHELL
###########################

# MSH COMPONENTS INCLUDE
# include components/checkbox.coffee
# include components/yesno.coffee
# include components/input.coffee

# Needy

fs = require('fs')
gutil = require('gulp-util')
exec = require('child_process').exec
process = require('process')
glob = require("glob")

# Get User Args

userArgs = process.argv.slice(2)

# Command

command = userArgs[0]

# Do magic

gutil.log gutil.colors.yellow('Processing your screenshots for the App Store, please wait...')

convert = (filename, gravity, size, platform) ->
  bounds = size.substr( size.indexOf('x')+1, size.length )
  screen_size = screenSizeFromImageSizeIOS(size)
  exec("mkdir #{process.cwd()}/resources/screenshots/#{platform}")
  exec("mkdir #{process.cwd()}/resources/screenshots/#{platform}/#{screen_size}")
  exec("convert #{process.cwd()}/resources/screenshots/#{filename}.png -thumbnail '#{bounds}x#{bounds}>' -gravity #{gravity} -extent #{size} #{process.cwd()}/resources/screenshots/#{platform}/#{screen_size}/#{filename}.png")

screenSizeFromImageSizeIOS = (size) ->
  switch size
    when '640x960'
      '3,5-inches'
    when '640x1136'
      '4-inches'
    when '750x1334'
      '4,7-inches'
    when '1242x2208'
      '5,5-inches'

process_screenshots = ->
  glob "#{process.cwd()}/resources/screenshots/*.png", {}, (er, files) ->
    for filename in files
      filename_to_write = filename.match(/(ios.{0,})(?=.png)/g)
      gutil.log gutil.colors.yellow("Processing file named: #{filename_to_write}.png")
      convert(filename_to_write, 'south', '640x960', 'iOS')
      convert(filename_to_write, 'south', '640x1136', 'iOS')
      convert(filename_to_write, 'south', '750x1334', 'iOS')
      convert(filename_to_write, 'south', '1242x2208', 'iOS')
      gutil.log gutil.colors.green("Processing of file: #{filename_to_write}.png was successful!")


# Finally

process_screenshots()