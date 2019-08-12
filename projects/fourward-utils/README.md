# Fourward Utils

[![Build Status](https://travis-ci.com/maiquerosa/ng-fourward-utils.svg?branch=master)](https://travis-ci.com/maiquerosa/ng-fourward-utils)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Library Angular open source. This lib contains the components that 4wardBR use in your solutions and now you can participate on development. Open issues, new feature Request or make your own custom component and send us a pull request.

## Check documentation here: [Fourward-utils Docs](https://maiquerosa.github.io/ng-fourward-utils/)

## Dependencies

- [NodeJs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Angular CLI 8+](https://cli.angular.io/) - The Angular CLI makes it easy to create an application
- [PrimeNG](https://www.primefaces.org/primeng/#/) - Used in some component to improve the development.
- [Bootstrap](https://getbootstrap.com/) - for basic styling (optional)
- [Jquery](https://jquery.com/) - required for bootstrap 4 (optional)
- [Popper.js](https://popper.js.org/) - required for bootstrap 4 (optional)

Please note that you don't have to use bootstrap, jquery and popper.js with **Fourward-Utils** although it's recommended.

## Instalation

With the dependencies installed run the following command in the root directory of your angular project:

```javascript

npm i fourward-utils

```

This lib is made up of several modules, just import into ``.src/app/app.modules.ts`` or any module you want and enjoy yourself. Visit the documentation to learn more.

## Css Style

One of dependencies in the library is **primeng**, for use this lib you need import some files in ``angular.json`` file. If you have installed the bootstrap dependencies so you can configure in your project too. You need add path of dependencies in the ``styles`` node and ``scripts`` nodes (you need add line to scripts node if you download bootstrap dependencies).

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "ng-fourward-utils": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ng-fourward-utils",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": false,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "node_modules/primeng/resources/themes/**some-primeng-theme**/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/scss/styles.scss"
            ],
             "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js"
            ]
            ......

```

## Icons

Some components use icons to enhance the user experience, you can use any icon library, but these icons must be called using css. We recommend one of these icon libraries

- [PrimeIcons](https://www.primefaces.org/primeng/#/icons) - npm install primeicons

- [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) - npm install @fortawesome/fontawesome-free

### Configure Icons

After download one icon library you need import it in **angular.json** file (Same way of the css style session). Open the **angular.json** and import the icon css file in the ``styles`` node. Check below:

```json

  // Add this line on styles node if you download PRIMEICONS

  "node_modules/primeicons/primeicons.css",

// Add this lines on styles node if you download FONTAWESOME

  "node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css",
  "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",
  "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",
  "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css",

```

### You can add both icon library if want, ``but its not recommended`` because the icon library has different styles

## Complete documentation

Check the complete documentation here: [Fourward-utils Docs](https://maiquerosa.github.io/ng-fourward-utils/)
