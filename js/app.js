var phoneCatApp = angular.module('phoneCatApp', ['ngRoute', 'phoneCatAnimations', 'phoneCatControllers', 'phoneCatFilters', 'phoneCatServices']);

phoneCatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: 'phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);