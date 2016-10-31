angular.module("WeatherForecast")
.filter('ordinalPoint', function() {
    // Take a compass direction variable (0 to 360 degrees), and convert it to
    // an ordinal points string: 90 -> E, 45 -> NE, 25 -> NNE
    return function(compass_direction) {
        // There are 16 standard ordinal point strings, each representing a range of 22.5 degrees
        // +/- 11.25 degrees around the ordinal point
        compass_direction %= 360;
        if(compass_direction <= 11.25) {
            return 'N';
        }
        if(compass_direction <= 37.35) {
            return 'NNE';
        }
        if(compass_direction <= 56.25) {
            return 'NE';
        }
        if(compass_direction <= 78.75) {
            return 'ENE';
        }
        if(compass_direction <= 101.25) {
            return 'E';
        }
        if(compass_direction <= 123.75) {
            return 'ESE';
        }
        if(compass_direction <= 146.25) {
            return 'SE';
        }
        if(compass_direction <= 168.57) {
            return 'SSE';
        }
        if(compass_direction <= 191.25) {
            return 'S';
        }
        if(compass_direction <= 213.75) {
            return 'SSW';
        }
        if(compass_direction <= 236.25) {
            return 'SW';
        }
        if(compass_direction <= 258.75) {
            return 'WSW';
        }
        if(compass_direction <= 281.26) {
            return 'W';
        }
        if(compass_direction <= 303.75) {
            return 'WNW';
        }
        if(compass_direction <= 326.25) {
            return 'NW';
        }
        if(compass_direction <= 348.75) {
            return 'NNW';
        }
        return 'N';
    };
});
