var casper = require('casper').create( {
	clientScripts: [
		'includes/jasmine.js',
		'includes/jasmine-jquery.js',
		'includes/jasmine-tap-reporter.js',
		'includes/tracking_test.js'
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

casper.start('http://www.myvideo.de/?testTrackingLive=true', function() {
    this.evaluate(function () {
    	console.log('Remote Handshake worked')
    	var jasmineEnv = jasmine.getEnv();
  		jasmineEnv.updateInterval = 250;
  		jasmineEnv.addReporter(new jasmine.TapReporter());
    	jasmineEnv.execute();
	});
});

casper.run();