angular.module('admin.login', [
  'angular-storage'
])
.controller('LoginCtrl', function LoginController( $scope, $http, store,$location) {
  $scope.user = {};
  $scope.login = function() {
    $http({
      url: '/admin/login',
      method: 'POST',
      data: $scope.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      store.set('id', response.data.id_admin);
      store.set('name', response.data.email);
      window.location = '/admin'
    }, function(error) {
      alert(JSON.stringify(error.data));
    });
  }

});
