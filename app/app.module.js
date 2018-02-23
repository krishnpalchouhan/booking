import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import routes from './bookings.routes.js'
import bookingList from './booking-list/booking-list.component'
import PokemonsService from './booking.service'
export default angular.module('bookingPoc.bookings', [uirouter])
  .config(routes)
  .component('bookingList', bookingList)
  .service('BookingService', BookingService)
  .name