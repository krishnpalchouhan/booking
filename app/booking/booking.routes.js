routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('booking', {
    url: '/',
    template: require('./booking.html')
  });
}