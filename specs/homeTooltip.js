/**
 * A suite of test methods that are used for testing the tracking-modules
 *
 * @author Jan Florian Dietrich <jfd@daenen4.de>
 */
(function(e,t){MV.testing=MV.testing||{},MV.testing.getRandomItem=function(t){var n=e(t),r=MV.utilities.randomInt(0,n.length-1);return n.eq(r)}})(MV.jQuery,MV.logger),window._gaq={},window._gaq.push=function(e){MV.utilities.getURLParameter("showTrackingCalls")!==!1&&console.log(e)},MV.ga.followOutboundLink=function(){},MV.trackerTestConfiguration={object:_gaq,module:MV.ga,functions:{event:"push"},trackEvents:MV.ga.trackingEvents,liveMode:MV.utilities.getURLParameter("testTrackingLive")==="true",getTrackerCall:function(e,t,n,r,i){var s=["_trackEvent"];return s.push(e,t,n),s.push(typeof r!="undefined"?r:null),s.push(typeof i!="undefined"&&i===!0),s},getCustomVarCall:function(e,t,n,r){return["_setCustomVar",e,t,n,r]}},function(e,t,n,r,i){describe("Tooltip Tracking",function(){beforeEach(function(){i.liveMode===!1&&loadFixtures("_tooltip.html"),spyOn(i.object,i.functions.event)}),it("Click on Facebook Share in Tooltip",function(){var t=MV.share.selectors;i.liveMode===!1&&e(t.tooltipShare).data("shareTitle","Foo Bar Title");var r=e(t.tooltipFacebookShareButton),s=r.closest(t.tooltipShare).data("shareTitle"),o=r.closest(t.tooltipShare).data("shareUrl"),u=i.trackEvents.socialLike,a=n.getTrackingString([n.shortUrl(),"Tooltip"]),f=n.getTrackingString([s,o,"Facebook"]);r.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(u,a,f)),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Title Click",function(){var t=MV.tooltip.selectors,r=e(t.title),s=r.text(),o=r.attr("href"),u=i.trackEvents.tooltip,a=n.shortUrl(),f=n.getTrackingString([s,o]);r.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(u,a,f)),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])})})}(MV.jQuery,MV.testing,MV.utilities,MV.logger,MV.trackerTestConfiguration);