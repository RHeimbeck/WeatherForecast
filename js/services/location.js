angular.module("WeatherForecast")
    .factory("location", function locationFactory(){

        return {
            getMyLocation: function() {
                var defrd = $.Deferred();
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        // success
                        function(position){
                            defrd.resolve(position);
                        },
                        // failure
                        function(error){
                            defrd.reject(mapError(error));
                        }
                    );
                } else {
                    defrd.reject("Geolocation is not supported by this browser.");
                }
                return defrd;
            }
        };
    });

function mapError(error) {
    var errorMsg = '';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMsg = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMsg = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMsg = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMsg = "An unknown error occurred.";
            break;
        default:
            errorMsg = "An undefined error occurred."
    }

    return errorMsg;
}
