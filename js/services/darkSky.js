angular.module("WeatherForecast")
    .factory("darkSky", ['$http', function darkSkyFactory($http){
        // TODO! remove this key value and have the user enter it
        var key = "cae61007484092772799865f39479644";
        return {
          forecast: function(latitude, longitude){
              //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
              var url = "https://api.darksky.net/forecast/" + key + "/" + latitude + "," + longitude;

              return $http.jsonp(url, {
                      params: {
                          callback: 'JSON_CALLBACK',
                          exclude: 'hourly,minutely,flags'
                      }
                  }
              );
          }
        };
    }]);
