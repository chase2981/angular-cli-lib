
# @turbonemesis/angular-cli-lib

[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![NSP Status][nsp-image]][nsp-link]
[![Known Vulnerabilities][snyk-image]][snyk-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Downloads][npm-downloads-image]][npm-downloads-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]

[npm-icon]: https://nodei.co/npm/@turbonemesis/angular-cli-lib.svg?downloads=true
[npm-icon-link]: https://npmjs.org/package/@turbonemesis/angular-cli-lib
[circleci-badge]: https://circleci.com/gh/chase2981/angular-cli-lib.svg?style=shield
[circleci-link]: https://circleci.com/gh/chase2981/angular-cli-lib/tree/master
[codecov-image]: https://codecov.io/gh/chase2981/angular-cli-lib/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/chase2981/angular-cli-lib
[nsp-image]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e/badge
[nsp-link]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e
[dependency-image]: https://david-dm.org/chase2981/angular-cli-lib/status.svg
[dependency-link]: https://david-dm.org/chase2981/angular-cli-lib
[dev-dependency-image]: https://david-dm.org/chase2981/angular-cli-lib/dev-status.svg
[dev-dependency-link]: https://david-dm.org/chase2981/angular-cli-lib?type=dev
[peer-dependency-image]: https://david-dm.org/chase2981/angular-cli-lib/peer-status.svg
[peer-dependency-link]: https://david-dm.org/chase2981/angular-cli-lib?type=peer
[npm-version-image]: https://img.shields.io/npm/v/@turbonemesis/angular-cli-lib.svg
[npm-version-link]: https://www.npmjs.com/package/@turbonemesis/angular-cli-lib
[npm-downloads-image]: https://img.shields.io/npm/dm/@turbonemesis/angular-cli-lib.svg
[npm-downloads-link]: http://npm-stat.com/charts.html?package=@turbonemesis/angular-cli-lib&from=2018-03-01
[npm-license-image]: https://img.shields.io/npm/l/@turbonemesis/angular-cli-lib.svg
[npm-license-link]: LICENSE
[license-link]: http://opensource.org/licenses/MIT
[snyk-image]: https://snyk.io/test/github/chase2981/angular-cli-lib/badge.svg
[snyk-link]: https://snyk.io/test/github/chase2981/angular-cli-lib

# AngularCliLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help


#### problem:
BUILD ERROR
Cannot read property 'module' of undefined

#### solution:
All the necessary files are not properly exported in one way or another via the public_api.ts


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
