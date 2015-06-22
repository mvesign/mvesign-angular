var phoneCatServices = angular.module('phoneCatServices', ['ngResource']);

phoneCatServices.factory('Phone', ['$resource', function($resource){
    return $resource('phones/content/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}]);