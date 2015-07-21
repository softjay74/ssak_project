ChurchApp.controller('UserListCtrl', ['$scope', '$http','$location', '$rootScope', function($scope, $http, $location, $rootScope ) {

    var refresh = function(){
        $http.get('/userlist').success(function (response) {
            console.log("userlist start");
            $scope.userlist = response;
        });
    }

    refresh();

    $scope.delUser= function(id){
        console.log(id);
        $http.delete('/userlist/'+id).success(function(response){
           refresh();
        })

    }

}]);

ChurchApp.controller('UserEditCtrl', ['$scope', '$http','$location', '$rootScope','$routeParams', function($scope, $http, $location, $rootScope, $routeParams ) {

    console.log("start user edit ");
    console.log($routeParams.uid);
    var id = $routeParams.uid;

    $http.get('/userlist/'+id).success(function(data){
        console.log(data);

        $rootScope.userdata = data;
        $scope.userdata = $rootScope.userdata;
        $rootScope.AuthCodes = {
            "type": "select",
            "name": "Service",
            "values": ["User", "Member", "Officer", "Admin"]
        }

        $scope.AuthCode=$rootScope.AuthCodes;
        $scope.AuthCodes.value= $scope.userdata.user_auth;

    })


    $scope.userCancel=function(){
        $location.path('/ssak/list')
    }


    $scope.userUpdate = function(id) {
        console.log(id);

        var string = {
            user_id: $scope.userdata.user_id,
            user_fname: $scope.userdata.user_fname,
            user_lname: $scope.userdata.user_lname,
            user_email: $scope.userdata.email,
            user_auth: $scope.AuthCodes.value
        }

        $http.put('/userlist/' + id, string).success(function (response) {
            $location.path('/ssak/list');

        })
    }

}]);




ChurchApp.controller('UserCtrl', ['$scope', '$http','$location', '$rootScope','$localStorage','loginService', function($scope, $http, $location, $rootScope, $localstorage, loginService ) {

    $scope.pageName = "Dashboard";

    $scope.regUser=function () {

        $http.post('/userlist', $scope.user).success(function (response) {
             $location.path('/ok');

        })
    }
}]);
