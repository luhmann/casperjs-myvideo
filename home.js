;(function () {
	var selectors = {
		logo: '.header--logo'
	};

	casper.test.begin('myvideo.de has a title', 1, function (test) {
		casper.start('http://www.myvideo.de', function () {
			test.assertExists(selectors.logo);
		}).run(function () {
		test.done();
	});
		
	})
}());
