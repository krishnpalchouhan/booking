/*routes.$inject = ['$urlRouterProvider'];
export default function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
*/
routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('booking', {
    url: '/',
    template: require('./booking.html'),
    resolve: {
      booking: ['BookingService', (BookingService) => {
        return BookingService.getPokemons()
      }]
    }
  });
}