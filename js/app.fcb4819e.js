(function(e){function t(t){for(var o,a,s=t[0],c=t[1],i=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},l=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7764c4dd"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"d63b3d42"}[e]+".css",r=c.p+o,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===o||u===r))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){i=p[s],u=i.getAttribute("data-href");if(u===o||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete a[e],d.parentNode.removeChild(d),n(l)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=l);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0da2":function(e,t,n){"use strict";n("e025")},"2cd7":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("45fc"),n("0d03"),n("ac1f"),n("5319");var o=n("6c02"),a=n("7a23"),r={class:"home"},l={key:0},s={key:1,style:{textAlign:"left",margin:"10px"}},c={key:2,style:{textAlign:"left",margin:"10px"}},i={key:2};function u(e,t,n,o,u,p){var d=this,f=Object(a["A"])("SideMenu"),h=Object(a["A"])("LeafletMap");return Object(a["t"])(),Object(a["f"])("div",r,[this.$store.state.showMenu?(Object(a["t"])(),Object(a["f"])("div",l,[""!=this.$store.state.userEmail?(Object(a["t"])(),Object(a["d"])(f,{key:0})):this.$store.state.userIsAuthenticated?(Object(a["t"])(),Object(a["f"])("div",c," Loading... ")):(Object(a["t"])(),Object(a["f"])("div",s,[Object(a["g"])("button",{class:"btn",onClick:t[0]||(t[0]=function(e){return d.$store.dispatch("auth0Login")})},"Log in")]))])):Object(a["e"])("",!0),this.$store.state.showMap?(Object(a["t"])(),Object(a["f"])("div",{key:this.$store.state.showMenu+this.$store.state.creatingPlekollection},[Object(a["j"])(h)])):(Object(a["t"])(),Object(a["f"])("div",i))])}var p={key:0,id:"mapContainer",style:{width:"75%",left:"25%"}},d={key:1,id:"mapContainer"};function f(e,t,n,o,r,l){return this.$store.state.showMenu?(Object(a["t"])(),Object(a["f"])("div",p)):(Object(a["t"])(),Object(a["f"])("div",d))}n("d81d"),n("b0c0"),n("4160"),n("159b"),n("caad"),n("2532");var h,b=n("e11e"),m=n.n(b),g=(n("20d6"),n("6cc5"),n("5fbf"),n("ba5f"));delete m.a.Icon.Default.prototype._getIconUrl,m.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var O={data:function(){return{osm_layer:m.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),layercontrol:m.a.control.layers(),fullScreenMap:!1,polygonMarkerOptions:{radius:2,fillColor:"green",color:"green",weight:2,opacity:.5,fillOpacity:.2},pointMarkerOptions:{radius:3,fillColor:"red",color:"red",weight:3,opacity:1,fillOpacity:.2},drawControl:null}},methods:{setupLeafletMap:function(){h=m.a.map("mapContainer",{center:[51.11,4.46],crs:m.a.CRS.EPSG3857,zoom:11,zoomControl:!0,preferCanvas:!1}),this.osm_layer.addTo(h),m.a.control.scale().addTo(h),this.layercontrol.addTo(h),this.layercontrol.addBaseLayer(this.osm_layer,"OSM layer")},addToolTip:function(e,t){e.properties&&e.properties.name&&t.bindTooltip(e.properties.name)},displayFeatureCollections:function(){var e=this;this.$store.state.featureCollections.forEach((function(t){var n=e.layercontrol._layers.map((function(e){return e.name}));if(!n.includes(t.name)){var o=m.a.featureGroup().addTo(h);t.features.forEach((function(t){switch(t.geometry.type){case"Point":var n=m.a.geoJSON(t,{pointToLayer:function(t,n){return m.a.circleMarker(n,e.pointMarkerOptions)},onEachFeature:e.addToolTip});o.addLayer(n);break;case"Polygon":case"MultiPolygon":m.a.geoJSON(t,{style:e.polygonMarkerOptions,onEachFeature:e.addToolTip}).addTo(o);break;default:m.a.geoJSON(t,{onEachFeature:e.addToolTip}).addTo(o)}})),e.layercontrol.addOverlay(o,t.name)}}))},addDrawControl:function(){this.drawControl||(this.drawnItems=(new m.a.FeatureGroup).addTo(h),this.layercontrol.addOverlay(this.drawnItems,"drawn items"),this.drawControl=new m.a.Control.Draw({edit:{featureGroup:this.drawnItems,poly:{allowIntersection:!1}},draw:{polygon:!0,polyline:!0,rectangle:!1,circlemarker:!1,circle:!1,marker:!0}}),this.drawControl.addTo(h))}},mounted:function(){var e=this;this.setupLeafletMap(),this.$store.state.creatingPlekollection&&(this.addDrawControl(),h.on(m.a.Draw.Event.CREATED,(function(t){var n=t.layer;n.properties={};var o=n.feature=n.feature||{};o.type="Feature",o.properties=o.properties||{};var a=prompt("Name Plekje"," ");null!=a&&" "!=a&&(o.properties["name"]=a,n.bindTooltip(o.properties["name"]),e.drawnItems.addLayer(n))}))),this.emitter.all.clear(),this.emitter.on("updateMap",(function(){e.displayFeatureCollections()})),this.emitter.on("savePlekollection",(function(t){var n=e.drawnItems.toGeoJSON();0!=n.features.length?(g.launchCreatePlekollectionFlow(n,t),e.$store.state.creatingPlekollection=!1):alert("Create plekjes to save first")})),this.emitter.on("updateUserData",(function(){console.log("now we are talking")}))},beforeUnmount:function(){h&&h.remove()}},j=(n("0da2"),n("6b0d")),k=n.n(j);const v=k()(O,[["render",f],["__scopeId","data-v-6348dc40"]]);var y=v,_={class:"menu"},w=Object(a["g"])("div",{class:"card"},[Object(a["g"])("h1",null,"Plekjes"),Object(a["g"])("p",null,"V0.5.1")],-1),C={key:0},S={class:"card"},P=Object(a["g"])("p",null,"new Plekollection",-1),T=Object(a["i"])("name: "),M=Object(a["g"])("br",null,null,-1),I=Object(a["g"])("br",null,null,-1),$=Object(a["g"])("br",null,null,-1),A=Object(a["g"])("br",null,null,-1),E={key:1},N={class:"card"},D=Object(a["g"])("h2",null,"Plekollections",-1),L={class:"list"},J=["onClick"],U=Object(a["g"])("br",null,null,-1),x={key:0,class:"card"},F=Object(a["g"])("br",null,null,-1),H=Object(a["g"])("br",null,null,-1),q={class:"list"},z=Object(a["g"])("br",null,null,-1);function G(e,t,n,o,r,l){return Object(a["t"])(),Object(a["f"])("div",_,[w,this.$store.state.creatingPlekollection?(Object(a["t"])(),Object(a["f"])("div",C,[Object(a["g"])("div",S,[P,Object(a["g"])("span",null,[T,Object(a["H"])(Object(a["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.new_plekollection_name=e})},null,512),[[a["E"],r.new_plekollection_name]])]),M,I,Object(a["g"])("button",{class:"btn",onClick:t[1]||(t[1]=function(e){return l.savePlekollection()})},"save"),$,A])])):Object(a["e"])("",!0),this.$store.state.userData?(Object(a["t"])(),Object(a["f"])("div",E,[Object(a["g"])("div",N,[D,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(this.$store.state.userData.my_plekollections,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",L,[Object(a["g"])("div",{onClick:function(n){return l.selectPlekollection(e,t)},class:Object(a["p"])({selected:t==r.selected_i})},Object(a["C"])(e.name),11,J)])})),256)),U]),r.selected_plekollection?(Object(a["t"])(),Object(a["f"])("div",x,[Object(a["g"])("h2",null,Object(a["C"])(r.selected_plekollection.name),1),null!=r.selected_i?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"btn",onClick:t[2]||(t[2]=function(e){return l.showSelectedPlekollectionOnMap()})}," Show on map ")):Object(a["e"])("",!0),F,H,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(r.selected_plekollection.plekjes,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",q,Object(a["C"])(e.name),1)})),256)),z])):Object(a["e"])("",!0)])):Object(a["e"])("",!0)])}var B=n("ba5f"),R={data:function(){return{selected_i:null,selected_plekollection:null,new_plekollection_name:null}},methods:{selectPlekollection:function(e,t){this.selected_i=t,this.getPlekollection(this.$store.state.userData.my_plekollections[this.selected_i]._id)},getPlekollection:function(e){var t=this;B.apiCall("GET","https://plekjes-server.herokuapp.com/plekollections/get_one/"+e,null,(function(e){if(e){var n=JSON.parse(e);console.log(e),t.selected_plekollection=n}}))},createFeatureCollection:function(e){var t={type:"FeatureCollection",name:this.selected_plekollection.name,features:[]};e.forEach((function(e){t.features.push({type:"Feature",properties:{name:e.name},geometry:e.geometry})})),this.$store.state.featureCollections.push(t),this.emitter.emit("updateMap")},showSelectedPlekollectionOnMap:function(){var e=this,t=this.selected_plekollection.plekjes.map((function(e){return e._id}));B.getListOfPlekjesFromListOfIds(t,(function(t){e.createFeatureCollection(t)}))},savePlekollection:function(){!this.new_plekollection_name|" "==this.new_plekollection_name?alert("please enter a plekollection name"):this.emitter.emit("savePlekollection",this.new_plekollection_name)}},mounted:function(){this.$store.state.userData||this.$store.dispatch("setUserDataAPI")}};n("f56c");const V=k()(R,[["render",G]]);var Q=V,K={name:"Home",components:{LeafletMap:y,SideMenu:Q},data:function(){return{}},beforeCreate:function(){""==this.$store.state.userEmail&&this.$store.dispatch("auth0getUserEmail"),this.$store.state.userIsAuthenticated||(this.$store.state.showMenu=!1)}};const W=k()(K,[["render",u]]);var X=W,Y=n("c0d6"),Z=[{path:"/",name:"Home",component:X},{path:"/auth0callback",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/profile",name:"Profile",component:function(){return n.e("about").then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}}],ee=Object(o["a"])({history:Object(o["b"])("/"),routes:Z});ee.beforeEach((function(e,t,n){e.matched.some((function(e){return"/auth0callback"==e.path}))&&Y["a"].dispatch("auth0HandleAuthentication");var o=!1;if(localStorage.getItem("access_token")&&localStorage.getItem("id_token")&&localStorage.getItem("expires_at")){var a=JSON.parse(localStorage.getItem("expires_at"));o=(new Date).getTime()<a}Y["a"].commit("setUserIsAuthenticated",o),e.matched.some((function(e){return e.meta.requiresAuth}))?o?(Y["a"].commit("setUserIsAuthenticated",!0),n()):ee.replace("/"):n()}));t["a"]=ee},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=Object(o["g"])("br",null,null,-1),r=Object(o["g"])("br",null,null,-1);function l(e,t,n,l,s,c){var i=Object(o["A"])("NavBar"),u=Object(o["A"])("router-view");return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["j"])(i),a,r,Object(o["j"])(u)],64)}n("b0c0");var s={class:"nav"},c=Object(o["i"])("Home"),i={key:0,class:"buttongroup"},u=Object(o["i"])("About"),p=Object(o["i"])("Profile"),d={class:"log"};function f(e,t,n,a,r,l){var f=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["f"])("div",s,[Object(o["j"])(f,{to:"/"},{default:Object(o["G"])((function(){return[c]})),_:1}),"Home"==this.$route.name?(Object(o["t"])(),Object(o["f"])("span",i,[Object(o["g"])("a",{class:Object(o["p"])(["button",{active:this.$store.state.showMap}]),onClick:t[0]||(t[0]=function(e){return l.toggleMap()})}," Map ",2),Object(o["g"])("a",{class:Object(o["p"])(["button",{active:this.$store.state.showMenu}]),onClick:t[1]||(t[1]=function(e){return l.toggleMenu()})}," Plekollections ",2),this.$store.state.userIsAuthenticated?(Object(o["t"])(),Object(o["f"])("a",{key:0,class:Object(o["p"])(["button",{active:this.$store.state.creatingPlekollection}]),onClick:t[2]||(t[2]=function(e){return l.initCreatePlekollection()})}," New plekollection ",2)):Object(o["e"])("",!0)])):Object(o["e"])("",!0),Object(o["j"])(f,{to:"/about"},{default:Object(o["G"])((function(){return[u]})),_:1}),this.$store.state.userIsAuthenticated?(Object(o["t"])(),Object(o["d"])(f,{key:1,to:"/profile"},{default:Object(o["G"])((function(){return[p]})),_:1})):Object(o["e"])("",!0),Object(o["g"])("span",d,[this.$store.state.userIsAuthenticated?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["f"])("a",{key:0,onClick:t[3]||(t[3]=function(e){return l.login()})},"Login")),this.$store.state.userIsAuthenticated?(Object(o["t"])(),Object(o["f"])("a",{key:1,onClick:t[4]||(t[4]=function(e){return l.logout()})},"Logout")):Object(o["e"])("",!0)])])}var h={data:function(){return{}},methods:{login:function(){this.$store.dispatch("auth0Login")},logout:function(){this.$store.dispatch("auth0Logout")},toggleMap:function(){this.$store.state.creatingPlekollection||(this.$store.state.showMap=!this.$store.state.showMap)},toggleMenu:function(){this.$store.state.showMenu=!this.$store.state.showMenu},initCreatePlekollection:function(){this.$store.state.creatingPlekollection=!this.$store.state.creatingPlekollection,this.$store.state.creatingPlekollection&&(this.$store.state.showMenu=!0)}}},b=(n("776a"),n("6b0d")),m=n.n(b);const g=m()(h,[["render",f]]);var O=g,j={components:{NavBar:O},data:function(){return{}}};n("84b8");const k=m()(j,[["render",l]]);var v=k,y=n("41cb"),_=n("c0d6"),w=n("1344"),C=Object(w["a"])(),S=Object(o["c"])(v);S.config.globalProperties.emitter=C,S.use(_["a"]).use(y["a"]).mount("#app")},"776a":function(e,t,n){"use strict";n("2cd7")},"84b8":function(e,t,n){"use strict";n("e5f6")},ba5f:function(e,t,n){"use strict";n.r(t),n.d(t,"apiCall",(function(){return r})),n.d(t,"getListOfPlekjesFromListOfIds",(function(){return l})),n.d(t,"launchCreatePlekollectionFlow",(function(){return s}));n("e9c4"),n("b0c0"),n("99af");var o=n("c0d6"),a=void 0;function r(e,t,n,o){var a=new XMLHttpRequest;a.open(e,t,!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization","Bearer ".concat(localStorage.getItem("access_token"))),a.send(n),a.onreadystatechange=function(){4==a.readyState&&"200"==a.status&&o(a.responseText)}}function l(e,t){var n=JSON.stringify({ids:e});this.apiCall("POST","https://plekjes-server.herokuapp.com/plekjes/get_multiple/",n,(function(e){var n=JSON.parse(e);t(n)}))}function s(e,t){c(e,t)}var c=function(e,t){for(var n=[],r=0;r<e.features.length;r++)n.push({name:e.features[r].properties.name,geometry:e.features[r].geometry,tags:[t],founder:o["a"]["default"]._state.data.userData.username});a.apiCall("POST","https://plekjes-server.herokuapp.com/plekjes/add_multiple",JSON.stringify(n),(function(e){i(JSON.parse(e),t)}))},i=function(e,t){var n={name:t,plekjes:e,collector:o["a"]["default"]._state.data.userData.username};a.apiCall("POST","https://plekjes-server.herokuapp.com/plekollections/new",JSON.stringify(n),(function(t){u(JSON.parse(t),e)}))},u=function(e,t){var n=JSON.stringify({email:o["a"]["default"]._state.data.userEmail});a.apiCall("POST","https://plekjes-server.herokuapp.com/users/get_one",n,(function(n){var r=JSON.parse(n);r.my_plekollections.push({name:e.name,_id:e._id}),r.my_plekjes=r.my_plekjes.concat(t),a.apiCall("PUT","https://plekjes-server.herokuapp.com/users/update/"+r._id,JSON.stringify(r),(function(e){console.log("finished upload"),o["a"].dispatch("setUserDataAPI")}))}))}},c0d6:function(e,t,n){"use strict";n("e9c4"),n("0d03"),n("ac1f"),n("5319");var o=n("5502"),a=n("b0af"),r=n("41cb"),l=n("ba5f");t["a"]=Object(o["a"])({state:{userIsAuthenticated:!1,showMap:!0,showMenu:!0,creatingPlekollection:!1,auth0:new a["a"].WebAuth({domain:"tijs-app.eu.auth0.com",clientID:"GSTtuqSVd4zA7NvQ8qeVszNDDMhJq0Hi",redirectUri:"https://tijsvandenheuvel.github.io/plekjes/auth0callback",responseType:"token id_token",scope:"openid profile email",audience:"https://plekjes-api.be"}),userEmail:"",userData:null,userToBeCreated:!1,featureCollections:[]},mutations:{setUserIsAuthenticated:function(e,t){e.userIsAuthenticated=t},setUserData:function(e,t){e.userData=t}},actions:{auth0Login:function(e){e.state.auth0.authorize()},auth0HandleAuthentication:function(e){e.state.auth0.parseHash((function(t,n){if(n&&n.accessToken&&n.idToken){var o=JSON.stringify((new Date).getTime()+1e3*n.expiresIn);localStorage.setItem("access_token",n.accessToken),localStorage.setItem("id_token",n.idToken),localStorage.setItem("expires_at",o),e.dispatch("auth0getUserEmail"),r["a"].replace("/profile"),t&&(alert("login failed"),r["a"].replace("/"),console.log(t))}}))},auth0getUserEmail:function(e){localStorage.getItem("access_token")&&e.state.auth0.client.userInfo(localStorage.getItem("access_token"),(function(t,n){n&&(e.state.userEmail=n.email)}))},auth0Logout:function(e){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),window.location.href="https://tijs-app.eu.auth0.com/v2/logout?returnTo=https://tijsvandenheuvel.github.io/plekjes&client_id=GSTtuqSVd4zA7NvQ8qeVszNDDMhJq0Hi"},setUserDataAPI:function(e){var t=JSON.stringify({email:e.state.userEmail});l.apiCall("POST","https://plekjes-server.herokuapp.com/users/get_one",t,(function(t){var n=JSON.parse(t);n&&(e.state.userData=n)}))}},modules:{}})},d375:function(e,t,n){},e025:function(e,t,n){},e5f6:function(e,t,n){},f56c:function(e,t,n){"use strict";n("d375")}});
//# sourceMappingURL=app.fcb4819e.js.map