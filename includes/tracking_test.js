//redefine the real _gaq -object we do not want to generate tracking-events
window._gaq={},window._gaq.push=function(){},MV.trackerTestConfiguration={object:_gaq,functions:{event:"push"},trackEvents:{navigationHome:"Navigation Home",navigationOther:"Navigation Other",navigationLogin:"Navigation Login",stageClick:"Teaser Stage",search:"Search",video:"Video",sushibarTeaserHome:"Teaser Sushibar Home",sushibarTeaserVideoDetail:"Teaser Sushibar Videodetail",sushibarTeaserSearch:"Teaser Sushibar Search",sushibarTeaserContest:"Teaser Sushibar Contest",sushibarTeaserFormat:"Teaser Sushibar Format",sushibarTeaserSubHome:"Teaser Sushibar Subhome",tooltip:"Tooltip",sushibarPag:"Sushibar Pagination",stagePag:"Stage Pagination",footerClick:"Footer",listManager:"Listmanager",adHover:"Ad Hover",adClick:"Ad Click",mobile:"Mobile",channel:"Channel",serpSearch:"SERP Search",serpInteraction:"SERP Interaction",serpTeaser:"SERP Teaser",serpOther:"SERP Other",rightClick:"Right Click",premiumTeaser:"Plus",videoListTeaser:"Teaser Videolist",gallery:"Gallery",keepAlive:"Ping-Event"},liveMode:MV.utilities.getURLParameter("testTrackingLive")==="true",getTrackerCall:function(e,t,n,r,i){var s=["_trackEvent"];return s.push(e,t,n),s.push(typeof r!="undefined"?r:null),s.push(typeof i!==undefined&&i===!0),s}},function(e,t,n){describe("Navigation Tracking",function(){beforeEach(function(){n.liveMode===!1&&loadFixtures("_navigation.html"),spyOn(n.object,n.functions.event)}),afterEach(function(){});var t={level1Link:".is-level-1 > .header--navigation-item > .header--navigation-link",level2Link:".is-level-2 > .header--navigation-item > .header--navigation-link",level3Link:".is-level-3 > .header--navigation-item > .header--navigation-link"};it("Fixture was loaded",function(){console.log("jquery is available",e),expect(e(t.level1Link).length).toBeGreaterThan(0)}),it("First navigation level click",function(){var r=e(t.level1Link),i=MV.utilities.randomInt(0,r.length-1),s=r.eq(i),o=n.trackEvents.navigationOther,u=e.trim(s.text()),a=MV.utilities.shortUrl()+"|E1";s.trigger("click"),expect(n.object[n.functions.event]).toHaveBeenCalledWith(n.getTrackerCall(o,u,a))})})}(MV.jQuery,MV.logger,MV.trackerTestConfiguration);