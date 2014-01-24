//var baseUrl = 'http://frontend.dev-fe-vagrant.magic-technik.de/';
//var baseUrl = 'http://www.myvideo.de/';
//var baseUrl = 'http://www.magic-preview.de/';
var baseUrl = 'http://frontend.integration.magic-technik.de/';
var testScripts = {
  home: 'specs/home.js',
  homeTooltip: 'specs/homeTooltip.js',
  homeAutocomplete: 'specs/homeAutocomplete.js',
  serp: 'specs/serp.js',
  serpNoResults: 'specs/serp_noResults.js',
  legacyFirstLevel: 'specs/legacyHome.js'
};

var urlParts = {
  serp: 'search',
  legacyFirstLevel: 'Filme',
  legacySecondLevel: 'Filme/Action',
  webstars: 'webstars'
};

var parameter = '?testTrackingLive=true';

var additionalParameters = {
  serpResults: '&q=Madonna',
  serpNoResults: '&q=fdskljgjhksdfhg'
};

var printSeparator = function (casper, message) {
    casper.log('---------------------------------------------------------------', 'warning');
    casper.log(message, 'warning');
    casper.log('---------------------------------------------------------------', 'warning');
};

/**
 * Setup Casper
 */

var casper = require('casper').create( {
	clientScripts: [
		'includes/jasmine.js',
		'includes/jasmine-jquery.js',
		'includes/jasmine-tap-reporter-custom.js'
	],
  viewportSize: {
    width: 1000,
    height: 2000
  },
	verbose: true,
  logLevel: 'info'
});

casper.on('remote.message', function (message) {
  if (message.substring(0, 7) == '[ERROR]') {
    this.log(message, 'error');
  } else {
	 this.log(message, 'info');
  }
});

casper.on('page.error', function (message) {
    this.log('Error: ' + message, 'error');
});


//Home
casper.start(baseUrl + parameter, function() {
    printSeparator(this, 'Test Tracking: Home Next Level');
    casper.page.injectJs(testScripts.home);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
	  });
});

//Tooltips on Home (need to trigger mouseenter event)
casper.thenOpen(baseUrl + parameter, function() {
    printSeparator(this, 'Test Tracking: Home Next Level -- Tooltips');
    casper.page.injectJs(testScripts.homeTooltip);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      $('.sushi--item.is-video').trigger('mouseenter');
      MV.testing.execute();
    });
});

//Header Autocomplete on Home
casper.thenOpen(baseUrl + parameter, function() {
    printSeparator(this, 'Test Tracking: Home Next Level -- Header Autocomplete');
    casper.page.injectJs(testScripts.homeAutocomplete);
    this.sendKeys('.header', 'Mad');

    //Lets give the autocomplete some time to react
    this.wait(500, function () {
      this.evaluate(function () {
            MV.testing.globalizeLibs();        
            MV.testing.execute();
        });
    });
});

//Legacy Home -- just menu
casper.thenOpen(baseUrl + urlParts.legacyFirstLevel + parameter, function () {
  printSeparator(this, 'Test Tracking: Home UGC/Legacy -- Navigation - Page on First Url Level');
  casper.page.injectJs(testScripts.legacyFirstLevel);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
    });
});

casper.thenOpen(baseUrl + urlParts.legacySecondLevel + parameter, function () {
  printSeparator(this, 'Test Tracking: Home UGC/Legacy -- Navigation - Page on Second Url Level');
  casper.page.injectJs(testScripts.legacyFirstLevel);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
    });
});

//Webstars Home -- just menu
casper.thenOpen(baseUrl + urlParts.webstars + parameter, function () {
  printSeparator(this, 'Test Tracking: Home Webstars -- Navigation');
  casper.page.injectJs(testScripts.legacyFirstLevel);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
    });
});

//SERP with results
casper.thenOpen(baseUrl + urlParts.serp + parameter + additionalParameters.serpResults, function() {
    printSeparator(this, 'Test Tracking: SERP with results');
    casper.page.injectJs(testScripts.serp);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
    });
});

//SERP without results
casper.thenOpen(baseUrl + urlParts.serp + parameter + additionalParameters.serpNoResults, function() {
    printSeparator(this, 'Test Tracking: SERP with no results');
    casper.page.injectJs(testScripts.serpNoResults);

    this.evaluate(function () {
      MV.testing.globalizeLibs();
      MV.testing.execute();
    });
});

casper.setHttpAuth('myvideo', 'kooyoe1Shain');

casper.run();