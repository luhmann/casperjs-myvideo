/**
 * A suite of test methods that are used for testing the tracking-modules
 *
 * @author Jan Florian Dietrich <jfd@daenen4.de>
 */
(function(e,t,n){MV.testing=MV.testing||{},MV.testing.getRandomItem=function(t){var n=e(t),r=MV.utilities.randomInt(0,n.length-1);return n.eq(r)},MV.testing.globalizeLibs=function(){n.$=n.jQuery=MV.jQuery},MV.testing.wait=function(e){jasmine.Clock.useMock(),jasmine.Clock.tick(e)},MV.testing.execute=function(){var e=jasmine.getEnv();e.updateInterval=250,e.addReporter(new jasmine.TapReporter),e.execute()}})(MV.jQuery,MV.logger,window),window._gaq={},window._gaq.push=function(e){MV.utilities.getURLParameter("showTrackingCalls")!==!1&&console.log(e)},MV.ga.followOutboundLink=function(){},MV.trackerTestConfiguration={object:_gaq,module:MV.ga,functions:{event:"push"},trackEvents:MV.ga.trackingEvents,liveMode:MV.utilities.getURLParameter("testTrackingLive")==="true",getTrackerCall:function(e,t,n,r,i){var s=["_trackEvent"];return s.push(e,t,n),s.push(typeof r!="undefined"?r:null),s.push(typeof i!="undefined"&&i===!0),s},getCustomVarCall:function(e,t,n,r){return["_setCustomVar",e,t,n,r]}},function(e,t,n,r,i){describe("Search Page Results Tracking",function(){beforeEach(function(){i.liveMode===!1&&loadFixtures("_results.html"),spyOn(i.object,i.functions.event)}),it("Submit Large Searchbox on Search-Page with Autocomplete",function(){MV.results.init();var t=e(".autocomplete--option");expect(t.length).toBeGreaterThan(0);var r=t.eq(0),s=i.trackEvents.search,o=n.getTrackingString(["Autosuggest",n.shortUrl()]),u=e.trim(r.text()).toLowerCase();r.click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(s,o,u))})})}(MV.jQuery,MV.testing,MV.utilities,MV.logger,MV.trackerTestConfiguration);