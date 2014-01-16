//var baseUrl = 'http://www.myvideo.de/';
var baseUrl = 'http://www.magic-preview.de/';
//var baseUrl = 'http://frontend.integration.magic-technik.de/';
var testScript = 'home_tracking_test.js'

var casper = require('casper').create( {
	clientScripts: [
		'includes/jasmine.js',
		'includes/jasmine-jquery.js',
		'includes/jasmine-tap-reporter.js',
    'includes/' + testScript
	],
	verbose: true,
  logLevel: 'info'
});

casper.on('remote.message', function (message) {
	this.log(message, 'info');
});

casper.on('page.error', function(msg, trace) {
    this.log('Error: ' + msg, 'error');
});

casper.start(baseUrl + '?testTrackingLive=true', function() {
    this.evaluate(function () {
    	console.log('Remote Handshake worked')
      $ = jQuery = MV.jQuery;

    	var jasmineEnv = jasmine.getEnv();
  		jasmineEnv.updateInterval = 250;
  		jasmineEnv.addReporter(new jasmine.TapReporter());
    	jasmineEnv.execute();
	});
});

casper.setHttpAuth('myvideo', 'kooyoe1Shain');

casper.run();