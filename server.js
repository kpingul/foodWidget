var express	 	= require('express'),
	bodyParser 	= require('body-parser'),
	yelp    	= require('yelp'),
	app     	= express(),
	port    	= process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/server/views');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var yelp = require("yelp").createClient({
  consumer_key: "zbI4z6bbwmxpHCoKLpF0qQ", 
  consumer_secret: "V77AKbIp-OtvQzDQxEubVxWiNtY",
  token: "QTH04f87wjMCvGKookQdH3k3jaFrAOaE",
  token_secret: "Ro9badpwy6wXseUWWGXHrzyYvEY"
});

app.get('/api/yelp/business/:businessId', function( req, res ) {
	var businessId = req.params.businessId;

	yelp.business(businessId, function(error, data) {
		if(error) {
			res.sendStatus(error);
		} else {
			res.send(data);
			
		}

	});
	
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port);
