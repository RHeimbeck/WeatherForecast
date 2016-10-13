angular.module('WeatherForecast')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/forecast', {
                templateUrl: 'templates/pages/forecast/index.html'
            })
            .when('/currentDetailed', {
                templateUrl: 'templates/pages/currentDetailed/index.html'
            })
            .when('/alerts', {
                templateUrl: 'templates/pages/alerts/alerts.html'
            })
            .when('/', {
                templateUrl: 'templates/pages/blank/index.html'
            })
            .otherwise({ redirectTo: '/'});
    }]);
