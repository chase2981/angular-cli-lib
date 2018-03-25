
[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![NSP Status][nsp-image]][nsp-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Downloads][npm-downloads-image]][npm-downloads-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]

## @rd/core

[npm-icon]: https://nodei.co/npm/@rd/core.svg?downloads=true
[npm-icon-link]: https://npmjs.org/package/@rd/core
[circleci-badge]: https://circleci.com/gh/RentDynamics/ng-core.svg?style=shield
[circleci-link]: https://circleci.com/gh/rentdynamics/ng-core/tree/master
[codecov-image]: https://codecov.io/gh/RentDynamics/ng-core/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/RentDynamics/ng-core
[nsp-image]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e/badge
[nsp-link]: https://nodesecurity.io/orgs/rent-dynamics/projects/0b73ffc7-507b-4b70-ae71-035315f28a2e
[dependency-image]: https://david-dm.org/RentDynamics/ng-core/status.svg
[dependency-link]: https://david-dm.org/RentDynamics/ng-core
[dev-dependency-image]: https://david-dm.org/RentDynamics/ng-core/dev-status.svg
[dev-dependency-link]: https://david-dm.org/RentDynamics/ng-core?type=dev
[peer-dependency-image]: https://david-dm.org/RentDynamics/ng-core/peer-status.svg
[peer-dependency-link]: https://david-dm.org/RentDynamics/ng-core?type=peer
[npm-version-image]: https://img.shields.io/npm/v/@rd/core.svg
[npm-version-link]: https://www.npmjs.com/package/@rd/core
[npm-downloads-image]: https://img.shields.io/npm/dm/@rd/core.svg
[npm-downloads-link]: http://npm-stat.com/charts.html?package=@rd/core&from=2018-03-01
[npm-license-image]: https://img.shields.io/npm/l/@rd/core.svg
[npm-license-link]: LICENSE
[license-link]: http://opensource.org/licenses/MIT

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
