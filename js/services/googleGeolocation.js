angular.module("WeatherForecast")
    .factory("googleGeolocation", ['$http', function googleGeolocationFactory($http){
        var key = 'AIzaSyAVFa5SVPVPlDhUe31ShOHGpC29jGr1N6o';
        return {
            getByLocation: function(latitude, longitude){
                //http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true&key=YOUR_API_KEY
                var url = 'https://maps.googleapis.com/maps/api/geocode/json';
                return $http.get(url, {
                        params: {
                            latlng: latitude + ',' + longitude,
                            sensor: true,
                            key: key
                        }
                    }
                );
            },
            getByAddress: function(address){
                //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
                var url = 'https://maps.googleapis.com/maps/api/geocode/json';
                return $http.get(url, {
                        params: {
                            address: address,
                            key: key
                        }
                    }
                );
            }
        };
    }]);
