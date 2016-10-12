# WeatherForecast
## Simple project to explore the AngularJS framework and the DarkSky weather data service.

### Installation and/or running this application

This demo is a web application.  To run, it must be hosted in a web server.  Simply copy all directories and files to a sub-directory
io your webserver's http-root directory, setup this directory as a sub-domain on your web server, and then just navigate to this 
sub-domain in your browser's url.

If you have WebStorm you may use its built-in web server to run the project locally through http://localhost:63342/WeatherForecast. 

This project is currently running live at http://reidright.net/weather

### Design Notes
1.  This project was created as a web Single Page Application (SPA) following a standard Angular file/directory pattern. Files are organized by type and task.
2.  I used Angular's router mechanism to switch between "pages" within the SPA.  This worked, but I had to add minor 'hacks' to make sure the app would return to the default route if the "address" input was empty.  I will likely change the approach of handling user input and subsequently displaying new pages in a later revision.
3.  For early demonstrations of this application I have purposely left the private keys for DarkSky and Google Geolocation services within the code, fully knowing this is not a best practice. I wanted to make this application easy to use at first, but I plan to come back and remove these keys, and require the user to input them through the UI.  The very best approach would be to hold these keys in a back-end service which proxied the weather and location data so that the user never sees the key information publically.  This was a design decision to not use a back-end service initially, so that the whole application would be simple to install, run, and understand.
4.  There are currently no unit, integration, or E2E tests included in this project, though those are coming soon.  As a best practice, all projects should include tests.  

### Future Improvements
1.  Enhance the UI/UX.  The current look is rudimentary - I am more of a web programmer than a web designer. :)
2.  Display the wind direction as ordinal coordinates (N, S, NE, NNW, ENE, etc.) rather than degrees, as people can relate better to this type of wind direction information.
3.  Add a map of the current location for reference.
4.  Add graphs and charts of weather data.
5.  Add critical weather alert notifications.
6.  Provide the weather and geolocation data through a web service to keep the 'key' data private.  Perhaps the whole application might be better suited as a asp.net, php, or node "server application" rather than a simple JavaScript "web application".
7.  Add Grunt build tasks to Lint, Concatenate, and Uglify (minify) the code.  Also switch over to using ".min" version of libraries.

