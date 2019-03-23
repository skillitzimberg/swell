# [swell](https://github.com/skillitzimberg/swell)

## Table of contents
**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Installation Instructions](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

### Author
Scott Bergler  

## Description
Get data from a single NOAA bouy to calculate a surf condition rating.

## Setup and Installation
Clone the project from [GitHub](https://github.com/skillitzimberg/swell).  
Run ```cd swell``` in your terminal.  
Run ```yarn install``` or ```npm install```.  
If you use npm you may be prompted to remove the yarn-lock file. That's fine. npm will create a package-lock file.  
To run the tests use ```yarn test``` or ```npm run test```.  
To run the project in a browser use ```yarn start``` or ```npm run start```.  

See [ABOUT TEMPLATE JS](./ABOUTTEMPLATE.md).

## Resources
[ABOUT TEMPLATE JS](./ABOUTTEMPLATE.md): This project was instantiated using a template. ABOUTTEMPLATE is a run-down on what this template includes, why it's included, and how to use it.

## Known Bugs
I attempted to learn how to test api calls, but just ran out of time. The failed attempt is still in the project. It gives a false positive - it won't fail.

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used
| Dependency | Description |
| --- | --- |
| babel-core | Babel compiler core |
| babel-loaded | Babel loader for webpack |
| babel-present-es2015 | Specifies how Babel can convert ES6 to ES5 |
| clean-webpack-plugin | Clean your build folder(s) before building |
| css-loader | Interprets `@import` and `url()` like `import/require()` and resolves them |
| dotenv-webpack | imports information like API keys from .env to src/anyfile.js |
| eslint | Identifies and reports on patterns found in Javscript code |
| eslint-loader | ESLint loader for webpack |
| html-webpack-plugin | Simplifies creation of HTML files to serve webpack bundles |
| jasmine | Allows Jasmine specs to be run |
| jasmine-core | JavaScript BDD testing framework |
| karma | Allows the execution of JavaScript code in multiple *real* browsers |
| karma-chrome-launcher | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium |
| karma-cli | Use Karma from the command line |
| karma-jasmine | Plugin - adapter for Jasmine testing framework |
| karma-jasmine-html-reporter | Dynamically shows test results at debug.html page |
| karma-jquery | Plugin - adapter for jQuery framework |
| karma-webpack | Use webpack to preprocess files in Karma |
| style-loader | adds CSS to the DOM by injecting a `<style>` tag |
| uglifyjs-webpack-plugin | Minifies JavaScript |
| webpack | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
| webpack-cli | Use webpack from command line |
| webpack-dev-server | Provides live reloading during development |
| css-loader and style-loader | renders images in DOM when `<img>` tag is used |

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Scott Bergler **
