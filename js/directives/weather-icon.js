angular.module("WeatherForecast")
.directive('weatherIcon', function(){
    return {
        restrict: 'E',
        scope: {
            icon: '@'
        },
        template: '<i class="wi wi-forecast-io-{{icon}}"></i>'
    };
});