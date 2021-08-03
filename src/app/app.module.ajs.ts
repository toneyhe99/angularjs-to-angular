import * as angular from 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-bootstrap';
import 'angular-ui-date';
import 'angular-cookies';
import 'angular-touch';
import 'bootstrap';
import 'strformat';
import 'angular-route';
// import 'font-awesome';
import 'moment';
import 'ajv';

import './appjs/scripts/app.js';
import './appjs/scripts/core/components/routeUnavailable.js';

// Define the `acornJsApp` module
export default angular.module('acornJsApp', [
  'ngRoute',
  'acornApp'
]);
