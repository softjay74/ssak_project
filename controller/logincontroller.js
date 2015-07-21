/**
 * Created by cnk on 5/12/2015.
 */
ChurchApp.controller('loginCtrl', ['$scope', '$http','$location','$rootScope', 'sessionService','loginService', function($scope, $http, $location, $rootScope, sessionService, loginService) {
    $scope.login = function(user){
       loginService.login(user, $scope);
   }

    $scope.logout = function() {
        loginService.logout();
    }



}]);

