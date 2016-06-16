[ionshot](http://koodit.s3.amazonaws.com/macchie/ionshot.png)

# IonShot

[![Donate to support](http://www.koodit.it/macchie/donate_button.png)](http://www.paypal.me/macchie)

<!-- [![Join the chat at https://gitter.im/macchie/koonic](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/macchie/koonic?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) -->

## Setup

Requirements to use this tool:

##### Node.js (https://nodejs.org/download/)

##### npm (Node Package Manager, it comes with node.js installation)
Just in case, if you want to update to npm latest version:
```sh
$ sudo npm install npm -g
```

##### Cordova & Ionic Cli
To install both of them on your system just launch this command:
```sh
$ sudo npm install cordova ionic -g
```

##### Homebrew
"Homebrew installs the stuff you need that Apple didn’t."
```sh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
##### ImageMagick
ImageMagick® is a software suite to create, edit, compose, or convert bitmap images.
```sh
$ brew install imagemagick
```

##### xQuartz
xQuartz comes with lots of image processing libraries so its better to have it installed:

* zQuartz Download (https://www.xquartz.org)

## Cloning this Repo
To start using this tool please clone the repo (not an npm package yet):

##### Cloning the Git
To clone this repo simply launch this command:

```sh
$ git clone https://github.com/macchie/ionshot
```

## Install NPM Dependencies
Once the repo is cloned get in the **ionshot** folder through your Terminal App and launch this command to install all needed dependencies:
```sh
$ npm install
```

## Making it a shell command
After installing the needed dependencies you are done, get in the **ionshot** folder and link the tool to your shell!
```sh
$ npm link
```

## And using it...
After linking the tool to your shell you might run this command inside any ionic folder to create screenshots:
```sh
$ ionshot
```
please note, you should have a 'screenshots' folder inside your app's 'resources' folder, the tool is parsing for 'ios*.png' files, which means that you can create as many screens as you wish, just check that your file starts with 'ios' and is a PNG.

## More info

* IonicFramework (http://ionicframework.com)

## Copyright
Copyright © [2015] Andrea Macchieraldo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
