
# What is Food Widget?

Food widget is a an experiement I created to allow users to view photos from my Instagram account.

<a href="http://kirckpingul.com/foodWidget">Live Demo Here</a>

#Application Folder Structure
<img src="http://i84.photobucket.com/albums/k34/kdiggz415/foodWidgetFolderStructure.png" />

The folder structure for this application is sorted by features rather by type. This way, it makes it a lot easier to navigate through each file as the application starts to grow so that members on the team can work on their own component without figuring out what is what.

#Requirements

-<a href="https://www.npmjs.com">npm</a>

-<a href="http://bower.io">bower</a>

-<a href="http://karma-runner.github.io/0.13/index.html">karma</a>

#Dependencies

<b>Package.json</b>

<pre>
"express": "^4.13.1",
"gulp": "^3.9.0",
"gulp-concat": "^2.6.0",
"gulp-minify-css": "^1.2.0",
"gulp-rename": "^1.2.2",
"gulp-uglify": "^1.2.0",
"jasmine-core": "^2.3.4",
"karma": "^0.13.3",
"karma-chrome-launcher": "^0.2.0",
"karma-jasmine": "^0.3.6"
</pre>

<b>Bower.json</b>

<pre>
"bootstrap": "~3.3.5",
"angular": "~1.4.2",
"angular-ui-router": "~0.2.15",
"jquery": "~2.1.4",
"angular-spinner": "~0.6.2"

</pre>

#Installation

Food Widget can be installed simply by:

<ul>
  <li>Cloning this repo</li>
  <li>change directory to foodWidget</li>
  <li><a href="https://www.npmjs.com">npm</a> - <code>npm install for dev dependencies</code></li>
  <li><a href="http://bower.io">bower</a> - <code>bower install for front end dependencies</code></li>
</ul>

#Features

<b>The application and UI is built entirely with the <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!) and the <a href="http://getbootstrap.com/">Bootstrap</a> CSS Framework(the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web)</b>




Features include:
 
<ul> 
<li><a href="https://instagram.com/developer/?hl=en">Instagram API</a> for developers that allows to view pictures from my account</li>
<li><a href="https://developers.google.com/maps/documentation/javascript/">Google Maps API</a> to display the specific locations of each photo.</li>
</ul>

Here are the dependencies that I'm using to make those features come alive: 
<pre>
angular.module('myApp', [
	'ui.router', 
	'angularSpinner'
]);

</pre>
<ul>

<li><a href="https://github.com/angular-ui/ui-router">angular-ui-router</a> to allow the dyamic routing and SPA experience.</li>
<li><a href="https://github.com/urish/angular-spinner">angularSpinner</a> & <a href="https://github.com/rpocklin/angular-ui-view-spinner">angular-ui-view-spinner</a> by <a href="https://github.com/rpocklin"> Robert Pocklington</a></li>

</ul>

<b>jQuery Plugins</b>

<ul>
  <li><a href="https://github.com/codrops/DirectionAwareHoverEffect">Direction Aware Hover Effect</a> which creates the direction-aware hover effect in the main feed.</li>
</ul>

#Getting Up and Running

Once you've installed the dependencies, you can:

<code>Run <a href="http://www.gulpjs.com">gulp</a></code> and locate to your local host on port 3000 <code>localhost:3000</code>

#Testing 
The tools I'm using to test the widget are :

-<a href="https://github.com/jasmine/jasmine">Jasmine</a>(A behavior-driven development framework for testing JavaScript)

-<a href="http://karma-runner.github.io/0.13/index.html">Karma</a>(Test RUnning for JavaScript)

To run the test:

<pre>karma start</pre> 
 

