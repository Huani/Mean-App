(function() { // use IIFE for performance (otherwise we use the global scope when we don't really need it)


    angular.module('loc8rApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

    function config($routeProvider, $locationProvider) { // to remove the # in the URL we use the locationProvider
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html', //Add templateUrl to route config to specify view template to use
                controller: 'homeCtrl',
                controllerAs: 'vm'

            })
            .when('/about', {
                templateUrl: '/common/views/genericText.view.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })

        .when('/location/:locationid', {
            templateUrl: '/locationDetail/locationDetail.view.html',
            controller: 'locationDetailCtrl',
            controllerAs: 'vm'
        })

        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }
    angular
        .module('loc8rApp')
        .config(['$routeProvider', '$locationProvider', config]);
})();
