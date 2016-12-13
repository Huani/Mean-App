(function() { // use IIFE for performance (otherwise we use the global scope when we don't really need it)


    angular.module('loc8rApp', ['ngRoute']);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html', //Add templateUrl to route config to specify view template to use
                controller: 'homeCtrl',
                controllerAs: 'vm'

            })
            .otherwise({
                redirectTo: '/'
            });
    }
    angular
        .module('loc8rApp')
        .config(['$routeProvider', config]);
})();
