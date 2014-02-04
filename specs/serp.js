/**
 * A suite of test methods that are used for testing the tracking-modules
 *
 * @author Jan Florian Dietrich <jfd@daenen4.de>
 */
(function(e,t,n){MV.testing=MV.testing||{},MV.testing.getRandomItem=function(t){var n=e(t),r=MV.utilities.randomInt(0,n.length-1);return n.eq(r)},MV.testing.globalizeLibs=function(){n.$=n.jQuery=MV.jQuery},MV.testing.wait=function(e){jasmine.Clock.useMock(),jasmine.Clock.tick(e)},MV.testing.execute=function(){var e=jasmine.getEnv();e.updateInterval=250,e.addReporter(new jasmine.TapReporter),e.execute()}})(MV.jQuery,MV.logger,window),window._gaq={},window._gaq.push=function(e){MV.utilities.getURLParameter("showTrackingCalls")!==!1&&console.log(e)},MV.ga.followOutboundLink=function(){},MV.trackerTestConfiguration={object:_gaq,module:MV.ga,functions:{event:"push"},trackEvents:MV.ga.trackingEvents,liveMode:MV.utilities.getURLParameter("testTrackingLive")==="true",getTrackerCall:function(e,t,n,r,i){var s=["_trackEvent"];return s.push(e,t,n),s.push(typeof r!="undefined"?r:null),s.push(typeof i!="undefined"&&i===!0),s},getCustomVarCall:function(e,t,n,r){return["_setCustomVar",e,t,n,r]}},function(e,t,n,r){describe("Navigation Tracking",function(){beforeEach(function(){r.liveMode===!1&&(loadFixtures("_navigation.html"),MV.navigation.initTracking()),spyOn(r.object,r.functions.event)});var n=MV.navigation.selectors;it("Navigation Items exist",function(){expect(e(n.level1Link).length).toBeGreaterThan(0)}),it("First Level Click",function(){var i=t.getRandomItem(n.level1Link),s=MV.utilities.isHomePage()?r.trackEvents.navigationHome:r.trackEvents.navigationOther,o=e.trim(i.text()),u=MV.utilities.shortUrl()+"|E1";i.trigger("click"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(s,o,u)),expect(r.object[r.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("First Level Hover",function(){var i=t.getRandomItem(n.level1Link),s=i.parent().find(n.teaser);if(s.length>0){var o=r.trackEvents.adHover,u=e.trim(i.text()),a=s.attr("title"),f=s.attr("href");i.trigger("mouseenter"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(o,u+"|Flyout",a+"|"+f))}}),it("Second Level click",function(){var i=t.getRandomItem(n.level2Link),s=e.trim(i.text()),o=e.trim(i.closest(n.level2).parent().find(n.link).first().text()),u=MV.utilities.isHomePage()?r.trackEvents.navigationHome:r.trackEvents.navigationOther;i.trigger("click"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(u,o+"|"+s,MV.utilities.shortUrl()+"|E2")),expect(r.object[r.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Third level click",function(){var i=t.getRandomItem(n.level3Link),s=e.trim(i.text()),o=e.trim(i.closest(n.level3).parent().find(n.link).first().text()),u=e.trim(i.closest(n.level2).parent().find(n.link).first().text()),a=MV.utilities.isHomePage()?r.trackEvents.navigationHome:r.trackEvents.navigationOther;i.trigger("click"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(a,u+"|"+o+"|"+s,MV.utilities.shortUrl()+"|E3")),expect(r.object[r.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Flyout Click",function(){var i=t.getRandomItem(n.teaser),s=e.trim(i.attr("title")),o=e.trim(i.attr("href")),u=e.trim(i.closest(n.level2).parent().find(n.link).first().text()),a=r.trackEvents.adClick;i.trigger("click"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(a,u+"|Flyout",MV.utilities.shortUrl()+"|"+s+"|"+o)),expect(r.object[r.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Upload Button Click",function(){var t=e(n.upload),i=MV.utilities.isHomePage()?r.trackEvents.navigationHome:r.trackEvents.navigationOther,s=t.attr("href");t.trigger("click"),expect(r.object[r.functions.event]).toHaveBeenCalledWith(r.getTrackerCall(i,MV.utilities.shortUrl()+"|Upload",s)),expect(r.object[r.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])})})}(MV.jQuery,MV.testing,MV.logger,MV.trackerTestConfiguration),function(e,t,n,r,i){describe("Sushibar Tracking",function(){beforeEach(function(){jasmine.Clock.useMock(),spyOn(i.object,i.functions.event),i.liveMode===!1&&(loadFixtures("_mediumRectangleSushibar.html"),spyOn(MV.ajax,"getJsonConfiguration").andCallFake(function(t){if(t==="/_partial/sushibar/368"){var n={nodeId:"403946050289356980",layout:"medium-rectangle",items:[{id:"109367982503260690",title:"Pietsmiet's hard reset",subtitle:"die 31. liveshow",playingtime:1556,rating:5,viewcount:16775,href:"/watch/9175184/PietSmiet_s_Hard_Reset_LIVE_Stream_31_1_3_09_07_13",itemType:"video",description:'Teil 1 des 31. LIVE-Streams von PietSmiet\'s Hard Reset.\n\nBeim Spiel der Woche widmen sich Piet und Brammen dem Vampir-Stealth-Actionspiel "Dark" von Kalypso Media. Gebattlet wird sich im Indiegame "Gun Monkeys" und in der Communityecke geht es um die...',thumbnail:"http://is.integration.magic-technik.de/ez/nl/468/ez/media-videos-pietsmiet-s-hard-reset12-36864-2-ger-DE-Pietsmiet-s-hard-reset.png",videoFlipId:9175184,movieId:9175184},{id:"416581484778023855",title:"Tom Odell",subtitle:"Another Love",playingtime:274,rating:4.6923076923077,viewcount:312150,href:"/watch/9124111/Tom_Odell_Another_Love",itemType:"video",description:'Seht hier den englischen Singer & Songwriter Tom Odell mit seinem neuen Video zur Single "Another Love" vom Album "Long Way Down".',thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-tom-odell-36235-2-ger-DE-Tom-Odell.jpg",videoFlipId:9124111,movieId:9124111},{id:"357916410495418571",title:"Hurts",subtitle:"Somebody To Die For",playingtime:241,rating:5,viewcount:102121,href:"/watch/9162746/HURTS_Somebody_To_Die_For",itemType:"video",description:'Aus dem Album "Exile" (2013).\r\nTheo Hutchcraft (voc) und Adam Anderson (electronics, guitar) scheinen gerade einem existentialistischen Film der Nouvelle Vague entsprungen zu sein. Mit exakt gescheitelten Haaren und klassischen Anzügen erinnern Hurts...',thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-hurts-4981-10-ger-DE-Hurts.jpg",videoFlipId:9162746,movieId:9162746},{id:"40104871281134985",title:"J-Mag",subtitle:"Die 11. Liveshow",playingtime:1759,rating:4.6666666666667,viewcount:5119,href:"/watch/9171189/J_Mag_LIVE_Stream_11_1_3_03_07_13",itemType:"video",description:"Teil 1 der elften Folge von J-Mag vom 03.07.13: Dein Magazin für Anime, Manga, Cosplay und alles über J-Culture.\n\nChris und Arian haben Hobbyzeichnerin NILOO zu Gast und geben Tipps zum Zeichnen. Außerdem wurden folgende Animes gezeigt: Kikis kleiner...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-j-mag15-36322-2-ger-DE-J-Mag.jpg",videoFlipId:9171189,movieId:9171189},{id:"125010052142720861",title:"Maria Mena",subtitle:"I Always Liked That",playingtime:228,rating:5,viewcount:64109,href:"/watch/9165273/Maria_Mena_I_Always_Liked_That",itemType:"video",description:'Offizielles Maria Mena Video zur Single "I Always Liked That"',thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-maria-mena-36113-2-ger-DE-Maria-Mena.jpg",videoFlipId:9165273,movieId:9165273},{id:"262373702557765456",title:"Let's Play Poker",subtitle:"Die 2. Liveshow - Teil 1",playingtime:2803,rating:4.5,viewcount:16982,href:"/watch/9168520/Lets_Play_Poker_2_Teil_1_Die_Karten_werden_neu_gemischt",itemType:"video",description:"Hier seht ihr den 1. Teil von Let's Play Poker Vol. 2 vom 29. Juni 2013. Die Let's Play Poker Serie gehört definitiv zu den spannendsten Poker-Turnieren des Jahres. Präsentiert wird die 2. Live-Stream Folge von Let's Play Poker erneut von MyVideo und...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-let-s-play-poker-34054-5-ger-DE-Let-s-Play-Poker.jpg",videoFlipId:9168520,movieId:9168520},{id:"953375337191020658",title:"Margaret",subtitle:"Thank You Very Much",playingtime:204,rating:4.1428571428571,viewcount:76816,href:"/watch/9130006/Margaret_Thank_You_Very_Much",itemType:"video",description:"„Thank You Very Much“ ist die erste Single der 21-jährigen gebürtigen Polin Margaret, die sich kein besseres virales Marketing hätte wünschen können als durch die Sperrung bei YouTube quasi im Alleingang entwickelt hat. Dabei versteht sie die Aufregung...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-margaret-35657-2-ger-DE-Margaret.jpg",videoFlipId:9130006,movieId:9130006},{id:"75357002711514550",title:"Miley Cyrus",subtitle:"We Can't Stop",playingtime:214,rating:4.0634920634921,viewcount:755050,href:"/watch/9161074/Miley_Cyrus_We_Can_t_Stop",itemType:"video",description:"Miley Cyrus veröffentlicht ihr Video zum neuen Hit „We Can’t Stop”. Darin zeigt sie sich mit lasziven Moves, viel nackter Haut, aber vor allem als echtes “Bad Girl\r\nErhältlich bei iTunes: http://sny.ms/143lE6O",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-miley-cyrus-35671-3-ger-DE-Miley-Cyrus.jpg",videoFlipId:9161074,movieId:9161074},{id:"1127749219280040795",title:"Sing um dein Leben",subtitle:"Ganze Folge",playingtime:6200,rating:5,viewcount:3979,href:"/watch/9171650/Sing_um_dein_Leben_Ganze_Folge_Sing_um_dein_Leben_Sing_um_dein_Leben",itemType:"video",description:"Xavier und Freunde sind zurück. Diesmal mit dabei sind: Nena, Bülent Ceylan, Tim Mälzer, Jürgen Drews, Moses Pelham und Dieter Bohlen. Freut euch auf einen Abend voller Überraschungen mit den größten Musik-Stars Deutschlands!",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-sing-um-dein-leben-36696-2-ger-DE-Sing-um-dein-Leben.jpg",videoFlipId:9171650,movieId:9171650},{id:"206373257437009754",title:"Jennifer Lopez feat. Pitbull",subtitle:"Live It Up",playingtime:265,rating:4.375,viewcount:143858,href:"/watch/9119402/Jennifer_Lopez_feat_Pitbull_Live_It_Up",itemType:"video",description:"Sie gehört zu den erfolgreichsten und vielseitigsten Pop-Künstlerinnen der Welt: Sängerin, Schauspielerin, Modedesignerin, Parfum-Designerin und Produzentin – Jennifer Lopez ist ein Star, der immer wieder überrascht. Jetzt neu unter Vertrag bei dem Label...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-jennifer-lopez-feat.-pitbull2-9832-4-ger-DE-Jennifer-Lopez-feat.-Pitbull.jpg",videoFlipId:9119402,movieId:9119402},{id:"1133281033864761102",title:"Jonas Myrin",subtitle:"Dead Alive",playingtime:240,rating:2.8,viewcount:88793,href:"/watch/9144742/Jonas_Myrin_Dead_Alive",itemType:"video",description:"Bis aus einem Rohdiamanten, der für Laien oft kaum von gewöhnlichem Gestein zu unterscheiden ist, ein einmaliges Schmuckstück geworden ist, durchläuft das Material einen mühevollen Prozess der Veredelung. Wir wollen hier nicht zu fachspezifisch werden,...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-jonas-myrin-34858-2-ger-DE-Jonas-Myrin.jpg",videoFlipId:9144742,movieId:9144742},{id:"707478231835603044",title:"Let's Play Together",subtitle:"Die 46. Liveshow",playingtime:2545,rating:5,viewcount:30859,href:"/watch/9172788/Let_s_Play_Together_LIVE_Stream_46_1_3_05_07_13",itemType:"video",description:"Teil 1 des 46. LIVE-Streams von Let's Play Together am 05.07.2013.\r\n\r\nGronkh und Sarazar haben die Xbox ausgepackt und den Shooter Scourge Outbreak angezockt. Außerdem bekamt ihr erste Einblicke in das Indie-Game Nekro, das sich derzeit noch in der Entwicklung...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-let-s-play-together47-36766-4-ger-DE-Let-s-Play-Together.jpg",videoFlipId:9172788,movieId:9172788},{id:"492241536553931617",title:"Robin Thicke",subtitle:"Blurred Lines",playingtime:266,rating:4.4451219512195,viewcount:2824474,href:"/watch/9064116/Robin_Thicke_Blurred_Lines_Nude_Version",itemType:"video",description:"Ein smoother Beat, eine catchy Hook und zwei Musikriesen als Feature – fertig ist der Hit von Robin Thicke: Blurred Lines. Das freizügige Video, in dem sich jede Menge Models tummeln, wurde kurzerhand von youtube runtergenommen – zuviel geballte Sexiness!...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-robin-thicke-34844-2-ger-DE-Robin-Thicke.jpg",videoFlipId:9064116,movieId:9064116},{id:"356586792666373533",title:"Sex Around the World",subtitle:"Staffel 2 Folge 4",playingtime:3100,rating:2,viewcount:31792,href:"/watch/9137706/Staffel_2_Folge_4_Libanon_Sex_Around_the_World",itemType:"video",description:"Der Libanon gilt als liberalstes Land der arabischen Welt. Trotzdem werden sexuelle Verlockungen durch seinen konfessionellen Traditionen unterdrückt. Diese Dokumentation reist in das Land des Zedernholzes, um mehr über die paradoxen Verhältnisse der...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-sex-around-the-world-14028-11-ger-DE-Sex-Around-the-World.jpg",videoFlipId:9137706,movieId:9137706},{id:"826307313430950812",title:"Alin Coen Band",subtitle:"A No Is A No",playingtime:219,rating:5,viewcount:38109,href:"/watch/9136193/Alin_Coen_Band_A_No_Is_A_No",itemType:"video",description:"Seit dem Bundesvisionsongcontest vor zwein Jahren können sich die vier Musiker aus Weimar und Hamburg kaum mehr vor Anfragen retten. Jedoch machen sie schon seit 2007 Musik und traten unter anderem schon als Vorband von Regina Spektor und Philipp Poisel...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-alin-coen-band-9725-7-ger-DE-Alin-Coen-Band.jpg",videoFlipId:9136193,movieId:9136193},{id:"372931034968935799",title:"Freestyler",subtitle:"Folge 7",playingtime:623,rating:4,viewcount:5328,href:"/watch/9136332/Folge_5_Schwimmbad_Freestyler",itemType:"video",description:"Heute steht Arbeit im Schwimmbad auf dem Programm. Big J versteht das Wort Facility Management nicht wirklich und erlebt eine böse Überraschung, Vanessa nutzt den Tag zum Wellness, nur Mütze gibt sich Ansatzweise Mühe.",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-freestyler-15366-10-ger-DE-Freestyler.jpg",videoFlipId:9136332,movieId:9136332},{id:"186021638772019256",title:"Loreen",subtitle:"We Got The Power",playingtime:219,rating:4.625,viewcount:81034,href:"/watch/9120976/Loreen_We_Got_The_Power",itemType:"video",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-loreen2-8782-3-ger-DE-Loreen.jpg",videoFlipId:9120976,movieId:9120976},{id:"108219252336407073",title:"Skins",subtitle:"Folge 1",playingtime:2469,rating:4.2682926829268,viewcount:505127,href:"/watch/9021143/Folge_1_Tony_Skins_US",itemType:"video",description:"Tony ist ein cleverer Bursche. So clever, dass er glaubt er könnte seinem besten Freund Stanley endlich den ersehnten Wunsch - ersten Sex - zu erfüllen. Außerdem versucht er Gewinn bei einem großen Drogendeal zu machen.",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-skins-9936-6-ger-DE-Skins.jpg",videoFlipId:9021143,movieId:9021143},{id:"353818163954198613",title:"Eros Ramazzotti",subtitle:"Fino All Estasi",playingtime:226,rating:4.75,viewcount:75293,href:"/watch/9144453/Eros_Ramazzotti_Fino_All_Estasi",itemType:"video",description:"Fino All'Estasi",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-eros-ramazzotti-34872-2-ger-DE-Eros-Ramazzotti.jpg",videoFlipId:9144453,movieId:9144453},{id:"395456889274691130",title:"Die Templer",subtitle:"Folge 1",playingtime:2725,rating:3.9230769230769,viewcount:265095,href:"/watch/9083899/Staffel_1_Folge_1_Taeuschungen_Die_Templer",itemType:"video",description:"1375, Frankreich liegt in Folge des Hundertjährigen Krieges  gegen England in Trümmern. Es herrscht Armut  und Terror. Die Commanderie d’Assier ist ein Außenposten des alten Johanniter-Ordens und ehemaliger Besitz der Templer.  Am Pilgerweg nach Compostella...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-die-templer-14467-3-ger-DE-Die-Templer.jpg",videoFlipId:9083899,movieId:9083899},{id:"1071972039020554553",title:"Lana Del Rey",subtitle:"Young And Beautiful",playingtime:234,rating:4.4444444444444,viewcount:72269,href:"/watch/9109779/Lana_Del_Rey_Young_And_Beautiful",itemType:"video",description:"Manchmal entwickeln sich Stars. Manchmal werden uns Stars einfach aufgedrängt. Und dann gibt es zuweilen Stars, die einfach in die Atmosphäre eintauchen, als ob sie von einer jenseitigen Kraft angetrieben werden. In diese letzte Kategorie fällt Lana Del...",thumbnail:"http://is.integration.magic-technik.de/ez/nl/228/ez/media-videos-lana-del-rey-11935-2-ger-DE-Lana-Del-Rey.jpg",videoFlipId:9109779,movieId:9109779}]},r=new e.Deferred;return r.resolve(n),r.promise()}console.error("Unexpected Ajax-Url requested. Did you change the fixtures and forgot to change the config?")}),MV.sushibar.init())}),it("Sushibar Pagination Next",function(){var t=e(".sushi").first(),r=t.data("sushibar"),s=r.selectors,o=e(".sushi").index(t)+1,u=r.getTitle(),a=r.getLayout(),f="rechts",l=i.trackEvents.sushibarPagination,c=n.getTrackingString([o,a,u]),h=f;t.find(s.buttonNext).click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(l,c,h))}),it("Sushibar Pagination Previous",function(){var t=e(".sushi").first(),r=t.data("sushibar"),s=r.selectors,o=e(".sushi").index(t)+1,u=r.getTitle(),a=r.getLayout(),f="links",l=i.trackEvents.sushibarPagination,c=n.getTrackingString([o,a,u]),h=f;t.find(s.buttonPrevious).click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(l,c,h))}),it("Sushibar Item clicked",function(){spyOn(MV.tracking,"loadTrackingPixel").andCallThrough();var t=e(".sushi").first().data("sushibar").selectors,r=e(t.item+'[data-tracking-click]:not([data-tracking-click=""])').eq(0);r.length===0&&(console.log("[WARN]: No custom tracking pixel for sushi-item found, falling back to standard item, tests for custom tracking pixel will fail."),r=e(t.item).eq(0));var s=r.parents(t.container),o=s.data("sushibar"),u=o.getTitle(),a=e(t.container).index(s)+1,f=o.getCurrentOffset()+s.find(t.item).index(r)+1,l=r.attr("href"),c=r.attr("data-tracking-click"),h=i.trackEvents.sushibarTeaserOther;n.isHomePage()?h=i.trackEvents.sushibarTeaserHome:n.isVideoDetailPage()?h=i.trackEvents.sushibarTeaserVideoDetail:n.isSearchPage()?h=i.trackEvents.sushibarTeaserSearch:n.isContestPage()?h=i.trackEvents.sushibarTeaserContest:n.isPlayerPage()?h=i.trackEvents.sushibarTeaserPlayer:n.isSubHomePage()&&(h=i.trackEvents.sushibarTeaserSubHome);var p=n.getTrackingString([a,n.shortUrl()]),d=n.getTrackingString([f,u,l]);r.click(),jasmine.Clock.tick(501),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(h,p,d)),expect(MV.tracking.loadTrackingPixel).toHaveBeenCalledWith(jasmine.any(Object),{trackingSet:c,callback:jasmine.any(Function)}),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])})})}(MV.jQuery,MV.testing,MV.utilities,MV.logger,MV.trackerTestConfiguration),function(e,t,n,r,i,s){describe("Login",function(){beforeEach(function(){s.liveMode===!1&&(loadFixtures("_login.html"),MV.login.initTracking()),spyOn(s.object,s.functions.event)});var t=MV.login.selectors,i=MV.login.events;it("Forgotten Login Credentials-Action",function(){var r=e(t.forgotten),i=s.trackEvents.navigationLogin,o=n.getTrackingString([n.shortUrl(),"Login"]),u=e.trim(r.text());r.click(),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(i,o,u)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Register New User-Action",function(){var r=e(t.newUser),i=s.trackEvents.navigationLogin,o=n.getTrackingString([n.shortUrl(),"Login"]),u=e.trim(r.text());r.click(),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(i,o,u)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on Profile-Button in logged in user-menu",function(){var r=e(t.profile),i=s.trackEvents.navigationLogin,o=n.getTrackingString([n.shortUrl(),"Login"]),u=e.trim(r.text());r.click(),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(i,o,u)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on My Videos-Button in logged in user-menu",function(){var r=e(t.videos),i=s.trackEvents.navigationLogin,o=n.getTrackingString([n.shortUrl(),"Login"]),u=e.trim(r.text());r.click(),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(i,o,u)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on Upload-Button in logged in user-menu",function(){var r=e(t.upload),i=s.trackEvents.navigationLogin,o=n.getTrackingString([n.shortUrl(),"Login"]),u=e.trim(r.text());r.click(),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(i,o,u)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on regular Login-Button",function(){var o=e(t.submit),u=o.attr("data-tracking"),a=s.trackEvents.navigationLogin,f=n.getTrackingString([u,"Login"]),l=n.shortUrl();r.fire(i.pub.buttonClicked,{button:o}),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(a,f,l))}),it("Click on Facebook-Login-Button",function(){e(".login--tab-link").click();var o=e(t.facebookLoginButton).filter(":visible"),u=o.text(),a=o.attr("data-tracking"),f=s.trackEvents.navigationLogin,l=n.getTrackingString([a,u,"Login"]),c=n.shortUrl();r.fire(i.pub.buttonClicked,{button:o}),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(f,l,c))}),it("Click on Google-Login-Button",function(){var o=e(t.googleLoginButton).filter(":visible"),u=o.text(),a=o.attr("data-tracking"),f=s.trackEvents.navigationLogin,l=n.getTrackingString([a,u,"Login"]),c=n.shortUrl();r.fire(i.pub.buttonClicked,{button:o}),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(f,l,c))}),it("Click on Logout-Button",function(){var o=e(t.logoutButton),u=o.attr("data-tracking"),a=s.trackEvents.navigationLogin,f=n.getTrackingString([u,"Logout"]),l=n.shortUrl();r.fire(i.pub.buttonClicked,{button:o}),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(a,f,l))}),it("Login was successful",function(){var e="myvideo";r.fire(i.pub.success,e);var t=s.trackEvents.navigationLogin,o=n.getTrackingString([e,"Login"]),u=n.getTrackingString([n.shortUrl(),"OK"]);expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getCustomVarCall(5,"Login","yes",2)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(t,o,u))}),it("Login failed",function(){var e="myvideo";r.fire(i.pub.failed,e);var t=s.trackEvents.navigationLogin,o=n.getTrackingString([e,"Login"]),u=n.getTrackingString([n.shortUrl(),"FAILED"]);expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(t,o,u))}),it("Logout was successful",function(){var e="logout";r.fire(i.pub.logout,e);var t=s.trackEvents.navigationLogin,o=n.getTrackingString([e,"Logout"]),u=n.getTrackingString([n.shortUrl(),"LOGOUT"]);expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getCustomVarCall(5,"Login","no",2)),expect(s.object[s.functions.event]).toHaveBeenCalledWith(s.getTrackerCall(t,o,u))})})}(MV.jQuery,MV.testing,MV.utilities,MV.events,MV.logger,MV.trackerTestConfiguration),function(e,t,n,r,i){describe("Search Page Results Tracking",function(){beforeEach(function(){i.liveMode===!1&&loadFixtures("_results.html"),spyOn(i.object,i.functions.event)});var r=MV.results.selectors;it("Click on a Result-Category-Tab (MUSIC, TV, etc)",function(){var e=t.getRandomItem(r.tab),n=e.attr("data-filter-value"),s=i.trackEvents.serpInteraction,o="Tab",u=n;e.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(s,o,u))}),it("Click on a sort-action",function(){var s=t.getRandomItem(r.sortOption),o=s.text(),u=e(r.tab).filter(".is-active").attr("data-filter-value"),a=i.trackEvents.serpInteraction,f="Sort",l=n.getTrackingString([u,o]);s.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(a,f,l))}),it("Click on more-results-button",function(){MV.results.init();var t=e(r.next),s=e(r.tab).filter(".is-active").attr("data-filter-value"),o=1,u=i.trackEvents.serpInteraction,a="LoadNext",f=n.getTrackingString([s,o]);t.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(u,a,f)),o=2,f=n.getTrackingString([s,o]),t.trigger("click"),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(u,a,f))}),it("Click on any link in a result channel",function(){var s=t.getRandomItem(r.channel+" a");s.click(function(e){e.preventDefault()});var o=s.parents(r.channel),u,a=1,f=s.attr("href"),l=e(r.tab).filter(".is-active").attr("data-filter-value"),c=e(r.channel).index(o)+1;if(s.closest(r.channelVideo).length>0){var h=s.closest(r.channelVideo);a=h.index()+2,u=e.trim(h.find(r.channelVideoTitle).text())}else u=e.trim(o.find(r.titleLink).text());var p=i.trackEvents.serpTeaser,d=n.getTrackingString([l,c,"Channel"]),v=n.getTrackingString([a,u,f]);s.click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(p,d,v)),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on title link within the result video",function(){var s=t.getRandomItem(r.video).find(r.titleLink),o=s.closest(r.video),u=e.trim(s.text()),a=s.attr("href"),f=e(r.tab).filter(".is-active").attr("data-filter-value"),l=e(r.channel).length,c=e(r.video).index(o)+l+1,h=i.trackEvents.serpTeaser,p=n.getTrackingString([f,c,"Video"]),d=n.getTrackingString([u,a]);s.click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(h,p,d)),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Click on channel link within a premium result video",function(){var s=t.getRandomItem(r.videoToChannelLink),o=s.closest(r.video),u=e.trim(s.text()),a=s.attr("href"),f=e(r.tab).filter(".is-active").attr("data-filter-value"),l=e(r.channel).length,c=e(r.video).index(o)+l+1,h=i.trackEvents.serpTeaser,p=n.getTrackingString([f,c,"Video"]),d=n.getTrackingString([u,a]);s.click(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(h,p,d)),expect(i.object[i.functions.event]).toHaveBeenCalledWith(["_set","hitCallback",jasmine.any(Function)])}),it("Submit Large Searchbox on Search-Page",function(){var t=e(r.main),s=t.find(r.input),o="Foo Bar";s.val(o),t.on("submit",function(e){e.preventDefault()});var u=s.val(),a=i.trackEvents.search,f=n.getTrackingString(["Search",n.shortUrl()]),l=e.trim(u).toLowerCase();t.submit(),expect(i.object[i.functions.event]).toHaveBeenCalledWith(i.getTrackerCall(a,f,l))})})}(MV.jQuery,MV.testing,MV.utilities,MV.logger,MV.trackerTestConfiguration);