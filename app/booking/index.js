import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './booking.routes.js'
export default angular.module('booking.booking', [uirouter])
  .config(routes)