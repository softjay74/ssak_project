/**
 * Created by cnk on 5/12/2015.
 */
var ChurchApp = angular.module('ChurchApp',['ngRoute', 'ngResource','validation.match','ngStorage'])
    .config(function($routeProvider){
     // $locationProvider.html5Mode(true);

      $routeProvider.when ('/',{
         // templateUrl : 'view/index.html',
          templateUrl : 'view/login.html',
          controller : 'loginCtrl'
        });

        $routeProvider.when ('/ssak',{
            templateUrl : 'view/home.html',
            controller : 'UserCtrl'
        });


    $routeProvider.when ('/login',{
       templateUrl : 'view/login.html',
        controller : 'loginCtrl'
    });

    $routeProvider.when ('/logout',{
         templateUrl : 'view/login.html',
          controller : 'loginCtrl'
    });

    $routeProvider.when ('/signup',{
        templateUrl : 'view/signup.html',
        controller : 'UserCtrl'
    });

    $routeProvider.when ('/about',{
        templateUrl : 'view/about.html',
        controller : 'UserCtrl'
    });

        $routeProvider.when ('/reg',{
            templateUrl : 'view/reg.html'
    });

     $routeProvider.when ('/ssak/list',{
            templateUrl : 'view/list.html',
            controller : 'UserListCtrl'
     });
/*
      $routeProvider.when ('/edit',{
          templateUrl : 'view/edit.html',
          controller : 'UserCtrl'

      });
*/
      $routeProvider.when ('/ssak/edit/:uid',{
            templateUrl : 'view/edit.html',
            controller : 'UserEditCtrl'

      });


        $routeProvider.when ('/test',{
            templateUrl : 'test.html'
        });

        $routeProvider.when ('/ok',{
            templateUrl : 'view/ok.html'
        });

        $routeProvider.otherwise({
         templateUrl : 'index.html',
         controller : 'indexCtrl'
         });
});

ChurchApp.run(function($http, $rootScope, $location, loginService, sessionService) {
    var routesPermission = ['/'];

    $rootScope.$on('$routeChangeStart', function () {
       // console.log('>>exit tab :' + $location.path().indexOf('home'));

        if ($location.path().indexOf('ssak') === 1) {
            var checkValue = loginService.islogged();
            checkValue.then(function (msg) {
               // console.log('msg : ' + msg.data.code);
               // console.log('msg : ' + msg.data.user.user_id);
               // console.log('msg : ' + msg.data.user.user_auth);

                if (msg.data.code === 2) {
                    $rootScope.title = '';
                    $location.path('/login');

                } else {
                  if (msg.data.user.user_id=== sessionService.getData('userid') && msg.data.user.user_auth === sessionService.getData('auth')) {
                            $rootScope.title = sessionService.getData('userid') + ' ' + sessionService.getData('auth');
                            $rootScope.userid = sessionService.getData('userid');
                            $rootScope.name = sessionService.getData('name');
                            $rootScope.auth = sessionService.getData('auth');
                  }else {
                        alert("invaild access");
                        loginService.logout();
                    }
                }
            })

        }

    })
});
