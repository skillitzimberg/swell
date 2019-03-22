# A JavaScript Project Template

### Author
Scott Bergler

## Table of contents
**[Description](#description)**<br>
**[Using This Template](#using-this-template)**<br>
**[Resources](#resources)**<br>
**[Environment & Dependencies](#environment-&-dependencies)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Technologies Used](#technologies-used)**<br>
**[Support](#support)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Description
This template creates the directories and basic files needed to start a web project in JavaScript. I used the JSON template from Sayed I. Hashimi's [article](https://blogs.msdn.microsoft.com/dotnet/2017/04/02/how-to-create-your-own-templates-for-dotnet-new/). The directory structure and file contents are from Epicodus JavaScript curriculum and may not be suited for all projects.

[Here](https://github.com/dotnet/templating/wiki/Reference-for-template.json) is another good source on using dotnet and JSON to create templates.

The project files generated will have starter content as outlined in the Epicodus JavaScript course. The template will give relevant namespaces and paths for your project (i.e. TemplateJS will be replaced everywhere with the name you give to your project - YourProjectName).

The directory/file structure created is:

```
YourProjectName
├── .gitignore
├── .eslintrc
├── package.json
├── webpack.config.js
├── karma.config.js
├── README.md
├── PLANNING.md
├── ABOUTTEMPLATE.md
│
├── src
│   ├── index.html
│   ├── main.js
│   ├── testclass.js
│   └── styles.css
│
└── spec
    ├── testclass-spec.js
    │
    └── support
        └── jasmine.json
```
## Using This Template
Clone the code from [GitHub](https://github.com/skillitzimberg/TemplateJS).

While following this set up guide, replace both the brackets - [] - and the content between them with the information relevant to your situation. This is just an example guide.

Install the template using the command line interface (cli)/terminal:
```
dotnet new --install [ /Users/Your/Path/Here ]/swell
```
For example: When cloned to the Epicodus computer Desktop, the path would be /Users/Guest/Desktop/TemplateJS.  

The above command would then be:
```
dotnet new --install /Users/Guest/Desktop/swell
```
Navigate to the directory that you want your project to be in (i.e. Desktop, Documents, or wherever you keep your projects).

Run the this command in the cli/terminal:
```
dotnet new swell -n [ YourProjectName ]
```
For example: If your project is called Banana the command would be:
```
dotnet new swell -n Banana
```
Remove .git directory: run this command in YourProjectName directory.
```
rm -rf .git
```
Be sure to run 'git init' again for a fresh start!

Open the directory in your text editor. Open the .template.config/template.json file and change the author name to your own. Read the article mentioned above for details on this file and how this template was created.

## Resources
[Mozilla Development Network: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[NodeJS](https://nodejs.org/en/)  
[TypeScript](http://www.typescriptlang.org/)  
[AngularJS](https://angularjs.org/)  

## Environment & Dependencies
These instructions are for OS X (Mac)  

#### A bare list of commands:
See below for descriptions of why and what they do.
```
$ brew install node
```
```
$ node -v
```
```
$ npm -v
```
```
$ npm install typescript -g
```
```
$ tsc -v
```
```
$ apm install atom-typescript
```
```
$ npm install -g @angular/cli@1.6.5
```
```
$ ng -v
```
```
$ npm install webpack@4.0.1 --save-dev
```
```
$ npm install webpack-cli@2.0.9 --save-dev
```
```
$ npm install style-loader@0.20.2 --save-dev
```
```
$ npm install css-loader@0.28.10 --save-dev
```
```
npm install html-webpack-plugin@3.0.6 --save-dev
```
```
npm install clean-webpack-plugin@0.1.18 --save-dev
```
```
npm install uglifyjs-webpack-plugin@1.2.2 --save-dev
```
```
npm install webpack-dev-server@3.1.0 --save-dev
```
```
npm install eslint@4.18.2 --save-dev
```
```
npm install eslint-loader@2.0.0 --save-dev
```
```
$ npm install jquery --save
```
```
$ npm install popper.js --save
```
```
$ npm install bootstrap --save
```
```
$ npm install jasmine-core@2.99.0 --save-dev
```
```
$ npm install jasmine@3.1.0 --save-dev
```
```
$ ./node_modules/.bin/jasmine init
```
```
$ npm install karma@2.0.0 --save-dev
```
```
$ npm install karma-jasmine@1.1.1 --save-dev
```
```
$ npm install karma-chrome-launcher@2.2.0 --save-dev
```
```
$ npm install -g karma-cli
```
```
$ npm install karma-cli@1.0.1 --save-dev
```
```
$ npm install karma-webpack@2.0.13 --save-dev
```
```
$ npm install karma-jquery@0.2.2 --save-dev
```
```
$ npm install karma-jasmine-html-reporter@0.2.2 --save-dev
```
```
$ karma init
```
```
npm install babel-core@6.26.0 --save-dev
```
```
npm install babel-loader@7.1.3 --save-dev
```
```
npm install babel-preset-es2015@6.24.1 --save-dev
```
```
npm install dotenv-webpack --save-dev
```

### Install Node JS:
This uses Homebrew:  

```
$ brew install node
```
#### Confirm installation:

```
$ node -v
(should return something like: v11.6.0)

$ npm -v
(should return something like: 3.10.5)
```
### Install TypeScript:
This uses Node Package Manager (npm) which was installed in the previous step:

```
$ npm install typescript -g
```
#### Confirm installation:
```
$ tsc -v
(should return something like: Version 2.1.4)
```
#### Install the Atom-TypeScript package:

```
$ apm install atom-typescript
```
### Install Angular:
```
$ npm install -g @angular/cli@1.6.5
```

#### Confirm installation:
```
$ ng -v
```
You should get this in return:
```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.6.5
Node: 8.8.1
OS: darwin x64
Angular:
...
```

### Starting a project from scratch:
Create your project directory.  
```
cd [project directory]
```

Create a JSON manifest (a.k.a. package.json):  
```
npm init -y
```
This will create the following JSON manifest as a starting point that can be altered to suit the project's needs:
```
{
  "name": "[project directory]",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
#### Bundling JS files
Install Webpack (updates package.json).  

```
$ npm install webpack@4.0.1 --save-dev
```
```
$ npm install webpack-cli@2.0.9 --save-dev
```

Webpack is a module bundler that bundles code from multiple files, libraries, and assets (dependencies) into a single source. Webpack uses a dependency graph to recursively manage an application's assets. Webpack needs an entry point to the application. We are using a file called main.js for interface logic. This file will include import statements that have formats like:
```
import { PeanutButter } from './peanut-butter.js'
import { Jelly } from './jelly.js'
import { Bread } from './bread.js'
```
The code from these sources would all be gathered (concatenated) into a single file with a name like bundle.js. (We will define what the name of this file will be in the next step - see output and filename portion of the module.exports section of the webpack.config.js file below.)

To make this happen we'll use a webpack configuration file (webpack.config.js):

```
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
This portion of the webpack.config.js describes what the developer wants to be done when webpack bundles files - where to find what is to be imported/exported between files, what to name the file into which other files are concatenated, and where to put that file when it's done.

To take advantage of this, change the "scripts" section of the JSON manifest to use Webpack to build the project when called:

```
{
  "name": "directory name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
#### Bundling CSS files
(updates package.json)
```
$ npm install style-loader@0.20.2 --save-dev
```
```
$ npm install css-loader@0.28.10 --save-dev
```

Update webpack.config.js to use these dependencies:

```
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```
The new 'rules' section is a set of instructions for webpack that says what type of files to look for (.css files, using regex to find them) and what loaders to use for them (style- and css-loaders).

The main.js file would need to include an import statement for the .css files we want to be used:
```
import { PeanutButter } from './peanut-butter.js'
import { Jelly } from './jelly.js'
import { Bread } from './bread.js'
import './styles.css'
```
#### Bundling HTML files
Install the HtmlWebpackPlugin dependency (updates package.json):
```
npm install html-webpack-plugin@3.0.6 --save-dev
```

Add a require statement and plugins section to webpack.config.js:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Something for the title of the bundled html file . . .',
      template: './src/index.html',
      inject: 'body'
      })
  ]
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

Install CleanWebpackPlugin:
```
npm install clean-webpack-plugin@0.1.18 --save-dev
```
Add the dependency to webpack.config.js:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Something for the title of the bundled html file . . .',
      template: './src/index.html',
      inject: 'body'
      })
  ]
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

Install UglifyJsPlugin:
```
npm install uglifyjs-webpack-plugin@1.2.2 --save-dev
```

Add the dependency to webpack.config.js:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Something for the title of the bundled html file . . .',
      template: './src/index.html',
      inject: 'body'
      })
  ]
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

Install Webpack Development Server:
```
npm install webpack-dev-server@3.1.0 --save-dev
```
Add the tool to webpack.config.js:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true}),
    new HtmlWebpackPlugin({
      title: 'Something for the title of the bundled html file . . .',
      template: './src/index.html',
      inject: 'body'
      })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```
Add scripts to package.json to set the build mode to development, have npm run build before starting the server, and start the server:

```
{
  "name": "directory name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode development"
    "start": "npm run build; webpack-dev-server --open --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Install ES Lint linter:
```
npm install eslint@4.18.2 --save-dev
```
```
npm install eslint-loader@2.0.0 --save-dev
```

Add the linter to webpack.config.js:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true}),
    new HtmlWebpackPlugin({
      title: 'Something for the title of the bundled html file . . .',
      template: './src/index.html',
      inject: 'body'
      })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};
```
Create .eslintrc file:
```
{
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
  },

  "extends": "eslint:recommended",

  "env": {
    "es6": true,
    "browser": true,
    "jquery": true
  },

  "rules": {
      "semi": 1,
      "indent": ["warn", 2],
      "no-console": "warn",
      "no-debugger": "warn"
  }
}
```
Add a 'lint' script to package.json:
```
{
  "name": "directory name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode development"
    "start": "npm run build; webpack-dev-server --open --mode development"
    "lint": "eslint src/*.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

#### Environmental Variables
Add the dotenv-webpack plugin:
```
npm install dotenv-webpack --save-dev
```
Update webpack.config.js:
```
...
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    ...
    new Dotenv()
  ],
  ...
  }
};
```

To access environmental variables, preface the environmental variable with 'process.env,' . . .
```
process.env.API_KEY
```
## Known Bugs

## Technologies Used
(This wonderful table was pilfered from [Tanvi Garg](https://github.com/TanviCodeLife) and modestly edited for my own sensibilities.)

For versions and a full list of dependencies, plugins, and scripts see the "devDependencies" section in [package.json](./package.json).  

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

## Support
Scott Bergler :: commandinghands@gmail.com

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Scott Bergler **
