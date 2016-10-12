angular.module("WeatherForecast")
    .controller("forecastController", ['$scope', 'darkSky', 'googleGeolocation',
        function($scope, darkSky, geocode){
        $scope.current = {
            time: new Date().getTime() / 1000
        };
        $scope.forecastSummary = '';
        $scope.dailyData = [];
        $scope.alerts = [];
        $scope.errorMsg = '';
        $scope.currentLocation = '-----';
        if(!$scope.address || $scope.address.toString() === ''){
            // This resets the page to the default blank route
            location.href = '#/';
            return;
        }

        //Use the geocode service to get lat/long data for the indicated address
        // Use lat/long info to fetch data from darkSky
        geocode.getByAddress($scope.address)
        .success(function(data){
            if(data.results && data.results[0].geometry && data.results[0].geometry.location){
                var position = data.results[0].geometry.location;
                $scope.currentLocation = data.results[0].formatted_address;

                darkSky.forecast(position.lat, position.lng)
                    .success(function(data){
                        $scope.current = data.currently;
                        $scope.forecastSummary = data.daily.summary;
                        $scope.dailyData = data.daily.data;
                        $scope.alerts = data.alerts;
                    })
                    .error(function(err){
                        var msg = "**";
                        if(err){
                            msg += err.error_message;
                        }
                        else {
                            msg += "Failed to fetch DarkSky data";
                        }
                        $scope.errorMsg = msg;
                    });
            }
            else {
                $scope.errorMsg = "***Failed to get coordinates for that address";
            }

        })
        .error(function(err){
            var msg = "**";
            if(err){
                msg += err.error_message;
            }
            else {
                msg += "Failed to fetch Google Geocode data";
            }
            $scope.errorMsg = msg;
        });


}]);