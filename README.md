=======
#<a href="http://angularjs.org">AngularJS</a> Application

***

####The sample demo can be found <a href="https://kircksfoodjourney.herokuapp.com/"><b>here</b></a>

##Purpose
The idea is to create a small application to allow users to view photos from my Instagram account using AngularJS. It is designed to allow users view the photos descriptions, likes, and location it was taken at. More specifically, the application tries to show best practices when it comes to: <b>folders structure</b>, <b>using modules</b>, <b>organizing navigation</b>, building <b>a simple interface</b> as well as <b>unit testing</b>


##Stack

* Client: <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!)
* CSS: [Twitter's bootstrap](http://getbootstrap.com/)
* Backend: <a href="https://instagram.com/developer/?hl=en">Instagram API</a>, <a href="href="https://developers.google.com/maps/documentation/javascript/">Google Maps API</a>

###Build

* powered by [Gulp.js](http://www.gulpjs.com/)
* build supporting JavaScript and CSS  minification.
* test written using [Jasmine](http://jasmine.github.io/) syntax
* test are executed by [Karma Test Runner](http://karma-runner.github.io/0.8/index.html) 

##Installation

###Platform & Tools

You need to install [Node.js](http://nodejs.org/) and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js => v0.12.7)
* [Install bower](http://bower.io/), a depedency package manager.
* [Install Karma](https://github.com/karma-runner/karma) + [Jasmine](http://jasmine.github.io/)

<pre>npm install karma-jasmine --save-dev</pre>

###Grabbing the code

Either clone this repository or fork it on GitHub

<pre>
* git clone https://github.com/kpingul/foodWidget.git
* cd foodWidget
</pre>

### Dependencies

Since the client application is built using AngularJS and other 3rd party libraries, we need to install the local dependencies using [Bower](http://bower.io/) and [npm](http://npmjs.org).

<b>Bower.json</b>

<pre>
"bootstrap": "~3.3.5",
"angular": "~1.4.2",
"angular-ui-router": "~0.2.15",
"jquery": "~2.1.4",
"angular-spinner": "~0.6.2"
</pre>

* To Install the front end dependencies run:
<pre> <a href="http://bower.io">bower</a> install</pre>

(This will install the dependencies declared in the /bower.json file)

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

The app can be installed simply by:

<ul>
  <li>Cloning this repo</li>
  <li>change directory to foodWidget</li>
  <li><a href="https://www.npmjs.com">npm</a> - <code>npm install for dev dependencies</code></li>
  <li><a href="http://bower.io">bower</a> - <code>bower install for front end dependencies</code></li>
</ul>

#Features

<b>The application and UI is built entirely with the <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!) and the <a href="http://getbootstrap.com/">Bootstrap</a> CSS Framework(the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web)</b>




* To install our npm dependencies for our build system and server, run: 
<pre><a href="https://www.npmjs.com">npm</a> install </pre>

(This will install the dependencies declared in the /package.json file)

##Running the server

* Once you've installed the dependencies, you can start the server by running the gulp default task: 

<pre><a href="http://www.gulpjs.com">gulp</a></pre>

* Once it brings up the server, you can start browsing through the application at http://localhost:3000
 
 
##Browser Support
 
AngularJS and Bootstrap will work with the latest versions of Chrome, Firefox, Safari, and Opera, as well as Internet Explorer version 9, 10, and 11. As for IE8 and below, you might have to work some magic.

##Development

###Folders Structure

<img src="http://i84.photobucket.com/albums/k34/kdiggz415/foodWidgetFolderStructure.png" />

The folder structure for this application is sorted by features rather by type. This way, it makes it a lot easier to navigate through each file as the application starts to grow so that members on the team can work on their own component without figuring out what is what.

###Features

<b>The application and UI is built entirely with the <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!) and the <a href="http://getbootstrap.com/">Bootstrap</a> CSS Framework(the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web)</b>


Features include:
 
<ul> 
<li><a href="https://instagram.com/developer/?hl=en">Instagram API</a> that allows users to view photos from my <a href="https://Instagram.com/">Instagram</a> account</li>
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

-<a href="http://karma-runner.github.io/0.13/index.html">Karma</a>(Test Running for JavaScript)
=======
 
##Testing 
The tools I'm using for the unit tests are: 

* <a href="https://github.com/jasmine/jasmine">Jasmine</a>(A behavior-driven development framework for testing JavaScript)

* <a href="http://karma-runner.github.io/0.13/index.html">Karma</a>(Test runner for JavaScript)


To run the test:

<pre>karma start</pre> 


##License
 
 MIT
 
 
 
 
 
 
 
 
 
 
 
 

 

