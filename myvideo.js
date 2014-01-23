//var baseUrl = 'http://frontend.dev-fe-vagrant.magic-technik.de/';
//var baseUrl = 'http://www.myvideo.de/';
var baseUrl = 'http://www.magic-preview.de/';
//var baseUrl = 'http://frontend.integration.magic-technik.de/';
var testScripts = {
  home: 'specs/home.js',
  serp: 'specs/serp.js',
  serpNoResults: 'specs/serp_noResults.js'
};

var parameter = '?testTrackingLive=true';

var additionalParameters = {
  serpResults: '&q=Madonna',
  serpNoResults: '&q=fdskljgjhksdfhg'
};

var urlParts = {
  serp: 'search',
  playerPage: '',
  tagPage: ''
};

var casper = require('casper').create( {
	clientScripts: [
		'includes/jasmine.js',
		'includes/jasmine-jquery.js',
		'includes/jasmine-tap-reporter.js'
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

casper.start(baseUrl + parameter, function() {
    casper.page.injectJs(testScripts.home);

    this.evaluate(function () {
      $ = jQuery = MV.jQuery;
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 250;
      jasmineEnv.addReporter(new jasmine.TapReporter());
      jasmineEnv.execute();
	  });
});

casper.thenOpen(baseUrl + urlParts.serp + parameter + additionalParameters.serpResults, function() {
    casper.page.injectJs(testScripts.serp);

    this.evaluate(function () {
      $ = jQuery = MV.jQuery;
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 250;
      jasmineEnv.addReporter(new jasmine.TapReporter());
      jasmineEnv.execute();
    });
});

casper.thenOpen(baseUrl + urlParts.serp + parameter + additionalParameters.serpNoResults, function() {
    casper.page.injectJs(testScripts.serpNoResults);

    this.evaluate(function () {
      $ = jQuery = MV.jQuery;
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 250;
      jasmineEnv.addReporter(new jasmine.TapReporter());
      jasmineEnv.execute();
    });
});

casper.setHttpAuth('myvideo', 'kooyoe1Shain');

casper.run();