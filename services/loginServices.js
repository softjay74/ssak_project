/**
 * Created by cnk on 5/21/2015.
 */

ChurchApp.factory('loginService',function( $http,$rootScope,  $location, sessionService){
    return {
        login: function (user, scope) {
            console.log(user.usrid);
            console.log(user.password);
            console.log('enter function service');

            var string = {
                userid: user.usrid,
                password: user.password
            }

             console.log(string);

            $http.post('/login1', string);

            $http.post('/login', string).success(function (response) {
                 console.log(response);
                if (response.code === undefined) {
                   // console.log("Success");
                   // scope.msgError ="Success";

                    sessionService.setData('userid', response.user_id);
                    sessionService.setData('name', response.user_fname + ' ' + response.user_lname);
                    sessionService.setData('auth', response.user_auth);

                    $location.path('/ssak')

                } else {
                    console.log(response.error);
                    scope.msgError = response.error;
                     alert(response.error);
                    $location.path('/login')
                }
            })
        },

        logout: function(){
            $http.get('/logout').success(function (response) {
                console.log(response);
                sessionService.destroyData('userid');
                sessionService.destroyData('name');
                sessionService.destroyData('auth');

                $rootScope.title = null;
                $rootScope.userid = null;
                $rootScope.name = null;
                $rootScope.auth = null;
                $location.path('/login');
            })
        },

        islogged: function() {
                var $checkServer =  $http.post('/loginCheck');
                return $checkServer;
         }

    }
})