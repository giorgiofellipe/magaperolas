MagaPérolas - AngulasJS + Parse.com App
===============================
Originally from [@jbeurel](https://github.com/jbeurel/angular-parse-boilerplate)!

# Technologies

## Languages
- [Coffeescript](http://coffeescript.org/)
- [Sass](http://sass-lang.com/)

## Framework|Tools
- [AngularJS](http://angularjs.org/)
- [Bootstrap3](http://getbootstrap.com/)
- [Gulp](http://gulpjs.com/)
- Livereload
- [Angular Material](https://github.com/angular/material)

# Requirements

- [NodeJS](http://nodejs.org/)

# Installation

  `npm install`

# Configuration

Edit the [config/global.json](./config/global.json) file to write the configuration of your Parse.com project in order to use the Parse's CLI.
Edit the [src-public/app.coffee](./src-public/app.coffee) file to replace the ParseProvider keys.

Enjoy!

# Development server

  `npm run-script watch`

Access to the application at this address: http://127.0.0.1:8008
The livereload update your browser each time you change source files.

The Frontend source files are into the [src-public](./src-public) directory and compile to the public directory.
The Backend source files are into the [src-cloud](./src-cloud) directory and compile to the cloud directory.

# Deploy on Parse Cloud

  `npm run-script deploy-parse`

# Deploy on Github Pages (alternative)

You can also deploy the frontend on the Github Pages of your repo by launching this command:

  `npm run-script deploy-github`

# LICENSE
[See.](https://github.com/giorgiofellipe/magaperolas/blob/master/LICENSE)
