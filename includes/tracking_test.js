(function(e,t,n){describe("Navigation Tracking",function(){beforeEach(function(){n.liveMode===!1&&loadFixtures("_navigation.html"),spyOn(n.object,n.functions.event)}),afterEach(function(){});var t={level1Link:".is-level-1 > .header--navigation-item > .header--navigation-link",level2Link:".is-level-2 > .header--navigation-item > .header--navigation-link",level3Link:".is-level-3 > .header--navigation-item > .header--navigation-link"};it("Fixture was loaded",function(){expect(e(t.level1Link).length).toBeGreaterThan(0)}),it("First navigation level click",function(){var r=e(t.level1Link),i=MV.utilities.randomInt(0,r.length-1),s=r.eq(i),o=n.trackEvents.navigationOther,u=e.trim(s.text()),a=MV.utilities.shortUrl()+"|E1";s.trigger("click"),expect(n.object[n.functions.event]).toHaveBeenCalledWith(n.getTrackerCall(o,u,a))})})})(MV.jQuery,MV.logger,MV.trackerTestConfiguration);