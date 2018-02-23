export default class bookingsService {
  constructor($http) {
    this.$http = $http
  }
getbookings() {
    return this.$http.get('')
  }
}
