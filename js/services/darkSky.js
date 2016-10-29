angular.module("WeatherForecast")
    .factory("darkSky", ['$http', function darkSkyFactory($http){
        // TODO! Insert your DarkSky private key here.
        var key = "";
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
