angular.module('loc8rApp', ['ngRoute']);
function config ($routeProvider) {
$routeProvider
.when('/', {
templateUrl: 'home/home.view.html' //Add templateUrl to route config to specify view template to use

})
.otherwise({redirectTo: '/'});
}
angular
.module('loc8rApp')
.config(['$routeProvider', config]);
