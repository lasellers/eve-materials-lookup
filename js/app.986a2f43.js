(function(e){function t(t){for(var o,i,l=t[0],u=t[1],a=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==s[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},s={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),s=n.n(o);s.a},"0e61":function(e,t,n){"use strict";var o=n("e515"),s=n.n(o);s.a},1151:function(e,t,n){"use strict";var o=n("a55a"),s=n.n(o);s.a},1685:function(e,t,n){},"183c":function(e,t,n){"use strict";var o=n("6744"),s=n.n(o);s.a},"4b09":function(e,t,n){"use strict";var o=n("6176"),s=n.n(o);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TitleBox"),n("LoaderBox"),n("div",{staticClass:"mr-auto"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[e._v(" Resources ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/suggestions"}},[e._v(" Suggestions ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/yields"}},[e._v(" Yields ")])],1)])]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-ld-4"},[n("RegionBox")],1),e.unimportant?n("div",{staticClass:"col-md-1 col-lg-1 d-flex align-items-md-center"},[n("b",[e._v("And/Or")])]):e._e(),n("div",{staticClass:"col-md-3 col-lg-3"},[n("ConstellationBox")],1),e.unimportant?n("div",{staticClass:"col-md-1 col-lg-1 d-flex align-items-md-center"},[n("b",[e._v("And/Or")])]):e._e(),n("div",{staticClass:"col-md-3 col-lg-3"},[n("SystemBox")],1)]),n("hr"),"/yields"!==e.currentRouteName()?n("div",[n("b",[e._v("Resources")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 col-lg-2"},[n("ResourcesBox",{attrs:{box:"0"}})],1),n("div",{staticClass:"col-md-3 col-lg-2"},[n("ResourcesBox",{attrs:{box:"1"}})],1),n("div",{staticClass:"col-md-3 col-lg-2"},[n("ResourcesBox",{attrs:{box:"2"}})],1),n("div",{staticClass:"col-md-3 col-lg-2"},[n("ResourcesBox",{attrs:{box:"3"}})],1),n("div",{staticClass:"col-md-3 col-lg-2"},[n("ResourcesBox",{attrs:{box:"4"}})],1)]),n("BlueprintsBox")],1):e._e()]),n("div",{staticClass:"container-fluid"},[n("router-view")],1),n("Notice")],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titlebox"},[n("h1",[e._v("Eve Echoes Planetary Materials Lookup "),n("small",[e._v("v1.4 beta")])])])}],u={name:"TitleBox"},a=u,c=(n("ead0"),n("2877")),d=Object(c["a"])(a,i,l,!1,null,"1553bf5b",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loaderbox"},[0===e.resourcesCount||0===e.blueprintsCount||0===e.blueprintsForSelectionCount||0===e.regionsForSelectionCount||0===e.constellationsForSelectionCount||0===e.systemsForSelectionCount||0===e.resourcesForSelectionCount?n("span",[n("Spinner")],1):e._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"}),n("div",{staticClass:"col-md-4"},[n("code",[n("small",[n("ul",[!1===e.loadProduction?n("li",[e._v("Loading Resources data...")]):e._e(),!1===e.loadBlueprints?n("li",[e._v("Loading Blueprint data...")]):e._e(),0===e.blueprintsCount?n("li",[e._v("Loading Blueprints...")]):e._e(),0===e.blueprintsForSelectionCount?n("li",[e._v("Loading Blueprints For Selection...")]):e._e(),0===e.resourcesCount?n("li",[e._v("Loading Resources...")]):e._e(),0===e.regionsForSelectionCount?n("li",[e._v("Loading Regions For Selection...")]):e._e(),0===e.constellationsForSelectionCount?n("li",[e._v("Loading Constellations For Selection...")]):e._e(),0===e.systemsForSelectionCount?n("li",[e._v("Loading Systems For Selection...")]):e._e(),0===e.resourcesForSelectionCount?n("li",[e._v("Loading Resources For Selection...")]):e._e()])])])]),n("div",{staticClass:"col-md-4"})])])},h=[],g=(n("cb29"),n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("498a"),n("159b"),n("3835")),m=(n("96cf"),n("1da1")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"spinner"})},_=[],y={name:"Spinner"},b=y,S=(n("98e1"),Object(c["a"])(b,v,_,!1,null,"7072e58e",null)),C=S.exports,F={name:"LoaderBox",components:{Spinner:C},data:function(){return{publicPath:""}},created:function(){this.onLoad()},computed:{loadProduction:function(){return this.$store.getters.loadProduction},loadBlueprints:function(){return this.$store.getters.loadBlueprints},resourcesCount:function(){return this.$store.getters.resourcesCount},blueprintsCount:function(){return this.$store.getters.blueprintsCount},regionsForSelectionCount:function(){return this.$store.getters.regionsForSelectionCount},constellationsForSelectionCount:function(){return this.$store.getters.constellationsForSelectionCount},systemsForSelectionCount:function(){return this.$store.getters.systemsForSelectionCount},blueprintsForSelectionCount:function(){return this.$store.getters.blueprintsForSelectionCount},resourcesForSelectionCount:function(){return this.$store.getters.resourcesForSelectionCount}},methods:{onLoad:function(){this.getProductionCsv(),this.getBlueprintsCsv()},getProductionCsv:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new Headers,o=new Request("./Production.csv",{method:"GET",headers:n,mode:"cors",cache:"force-cache"}),fetch(o).then((function(e){return e.text()})).then((function(t){e.$store.dispatch("loadProduction",!0);var n=new Date,o=e.csvToArray(t),s=Object(g["a"])(o,2),r=s[0],i=s[1];e.$store.dispatch("addHeaders",r),e.$store.dispatch("addResources",i),e.$store.dispatch("updateRegionsForSelection"),e.$store.dispatch("updateConstellationsForSelection"),e.$store.dispatch("updateSystemsForSelection"),e.$store.dispatch("updateResourcesForSelection"),e.$store.dispatch("updateResourcesByPlanet"),console.log("==== updateResourcesByPlanet",(new Date).getTime()-n.getTime()),n=new Date,e.$store.dispatch("computeDisplayedResources")}));case 3:case"end":return t.stop()}}),t)})))()},getBlueprintsCsv:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new Headers,o=new Request("./Blueprints.csv",{method:"GET",headers:n,mode:"cors",cache:"force-cache"}),fetch(o).then((function(e){return e.text()})).then((function(t){e.$store.dispatch("loadBlueprints",!0);var n=e.csvToArrayRotated(t),o=Object(g["a"])(n,2),s=o[0],r=o[1];e.$store.dispatch("addBlueprintHeaders",s),e.$store.dispatch("addBlueprints",r),e.$store.dispatch("computeDisplayedResources")}));case 3:case"end":return t.stop()}}),t)})))()},csvToArray:function(e){var t=e.trim().split("\n"),n=t.shift().trim().split(","),o=0,s=t.length;while(o<s)t[o]=t[o].trim().split(","),o++;return[n,t]},loadCsvTo2dArray:function(e){var t=e.trim().split("\n"),n=[];return t.forEach((function(e){n.push(e.trim().split(","))})),n},rotate2dArray:function(e){for(var t=e.length,n=e[0].length,o=[],s=0;s<n;s++)o[s]=new Array(t).fill("");for(var r=0;r<t;r++)for(var i=0;i<n;i++)o[i][r]=e[r][i].replace(/"/g,"");return o},csvToArrayRotated:function(e){var t=this.loadCsvTo2dArray(e),n=this.rotate2dArray(t),o=n.shift();return[o,n]}}},R=F,w=(n("1151"),Object(c["a"])(R,p,h,!1,null,"fd037a1a",null)),B=w.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"regionbox"},[n("b",[e._v("Region")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-control",attrs:{id:e.regionsForSelection},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},e.onChange]}},e._l(e.regionsForSelection,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)])},P=[],x={name:"RegionBox",components:{},data:function(){return{}},computed:{selected:{get:function(){var e=this.$store.getters.region;return null===e?"(None)":e},set:function(e){this.$store.dispatch("changeRegion",e),this.$store.dispatch("computeDisplayedResources")}},regionsForSelection:function(){return this.$store.getters.regionsForSelection}},methods:{onChange:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.target.value,"(None)"===n&&(n=null),this.$store.dispatch("changeRegion",n);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},T=x,O=(n("a247"),Object(c["a"])(T,$,P,!1,null,"271e3f44",null)),D=O.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"constellationbox"},[n("b",[e._v("Constellation")]),e._v(" "),n("select",{staticClass:"form-control",attrs:{id:e.constellationsForSelection},on:{change:e.onChange}},e._l(e.constellationsForSelection,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)])},k=[],j={name:"ConstellationBox",components:{},data:function(){return{}},computed:{constellationsForSelection:function(){return this.$store.getters.constellationsForSelection}},methods:{constellation:function(){return this.$store.getters.constellation},onChange:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.target.value,"(None)"===n&&(n=null),this.$store.dispatch("changeConstellation",n),this.$store.dispatch("computeDisplayedResources");case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},N=j,A=(n("fc9d"),Object(c["a"])(N,E,k,!1,null,"0abad020",null)),H=A.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-control",attrs:{id:"resourcesForSelection"+e.box},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},e.onChange]}},e._l(e.resourcesForSelection,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)},W=[],M={name:"ResourcesBox",props:["box"],data:function(){return{}},computed:{selected:{get:function(){var e=this.$store.getters.resourceFilters[this.box];return null===e?"(None)":e},set:function(e){this.$store.dispatch("changeResourceFilter",[this.box,e]),this.$store.dispatch("computeDisplayedResources")}},resourcesForSelection:function(){return this.$store.getters.resourcesForSelection}},methods:{onChange:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.target.value,this.$store.dispatch("changeResourceFilter",[this.box,n]),this.$store.dispatch("computeDisplayedResources");case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},G=M,J=(n("8965"),Object(c["a"])(G,L,W,!1,null,"4c76b37a",null)),K=J.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notice"},[n("p",[e._v(" This is a single-page application -- Once loaded, it runs entirely in your web browser. ")]),n("p",[e._v("See "),n("a",{attrs:{href:"https://lasellers.github.io/eve-materials-lookup/"}},[e._v("https://lasellers.github.io/eve-materials-lookup/")]),e._v(" for a live running version. Source is at "),n("a",{attrs:{href:"https://github.com/lasellers/eve-materials-lookup"}},[e._v("https://github.com/lasellers/eve-materials-lookup")]),e._v(". ")]),n("p",[e._v("Data pulled from "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1ZxHoEcl-831osyZT8eXBvSH8gTKXLpOngPmkKgRAcNk/edit#gid=1857997663"}},[e._v("Planetary Materials Google Spreadsheet")]),e._v(" and "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1qY5K7CfyuPZPun9hUf_RnchMNVpKPtMlN0iACmUOemA/edit#gid=0"}},[e._v("Blueprints Google Spreadsheet")]),e._v(". ")])])}],I={name:"Notice"},U=I,Z=(n("183c"),Object(c["a"])(U,Y,q,!1,null,"124c2d39",null)),V=Z.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"systembox"},[n("b",[e._v("System")]),e._v(" "),n("select",{staticClass:"form-control",attrs:{id:e.systemsForSelection},on:{change:e.onChange}},e._l(e.systemsForSelection,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)])},z=[],Q={name:"SystemBox",components:{},data:function(){return{}},computed:{systemsForSelection:function(){return this.$store.getters.systemsForSelection}},methods:{system:function(){return this.$store.getters.system},onChange:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.target.value,"(None)"===n&&(n=null),this.$store.dispatch("changeSystem",n),this.$store.dispatch("computeDisplayedResources");case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},ee=Q,te=(n("4b09"),Object(c["a"])(ee,X,z,!1,null,"712b5414",null)),ne=te.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blueprintsbox"},[n("b",[e._v("Blueprints")]),e._v(" "),n("select",{staticClass:"form-control",attrs:{id:e.blueprintsForSelection},on:{change:e.onChange}},e._l(e.blueprintsForSelection,(function(t,o){return n("option",{key:o,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),n("p",{staticClass:"stats"},[n("small",[e._v("Blueprints: "+e._s(e.blueprintsCount))])])])},se=[],re={name:"BlueprintsBox",components:{},data:function(){return{}},computed:{blueprintsCount:function(){return this.$store.getters.blueprintsCount},blueprintsForSelection:function(){return this.$store.getters.blueprintsForSelection}},methods:{onChange:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.target.value,this.$store.dispatch("changeBlueprint",n),this.$store.dispatch("computeDisplayedResources");case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},ie=re,le=(n("b18c"),Object(c["a"])(ie,oe,se,!1,null,"446fe7db",null)),ue=le.exports,ae={name:"App",components:{TitleBox:f,LoaderBox:B,RegionBox:D,ConstellationBox:H,ResourcesBox:K,Notice:V,SystemBox:ne,BlueprintsBox:ue},created:function(){console.info("NODE_ENV","production"),console.info("BASE_URL","")},data:function(){return{}},computed:{},methods:{unimportant:function(){return!(window.innerWidth<1024)},currentRouteName:function(){return this.$router.currentRoute.path}}},ce=ae,de=(n("034f"),Object(c["a"])(ce,s,r,!1,null,null,null)),fe=de.exports,pe=n("8c4f"),he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"displayedResources"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 stats"},[n("small",[e._v("Resources: "+e._s(e.resourcesCount))])]),n("div",{staticClass:"col-4 stats"},[n("small",[e._v("Planets with: "+e._s(e.resourcesByPlanetCount))])]),n("div",{staticClass:"col-4 stats"},[n("small",[e._v("Displayed Resources: "+e._s(e.displayedResourcesCount))])])])]),n("table",{staticClass:"table table-striped table-sm",attrs:{id:"displayed-resources-list"}},[n("thead",[n("tr",[e.unimportant?n("th",[e._v("Planet Id")]):e._e(),n("th",[e._v("Region")]),n("th",[e._v("Constellation")]),n("th",[e._v("System")]),n("th",[e._v("Planet Name")]),n("th",[e._v("Resource")]),n("th",[e._v("Output")]),e.unimportant?n("th",[e._v("Planet Type")]):e._e(),e.unimportant?n("th",[e._v("Richness")]):e._e()])]),n("tbody",e._l(e.rows,(function(t,o){return n("tr",{key:o},[e.unimportant?n("td",[e._v(e._s(t[0]))]):e._e(),n("td",[e._v(e._s(t[1]))]),n("td",[e._v(e._s(t[2]))]),n("td",[e._v(e._s(t[3]))]),n("td",[e._v(e._s(t[4]))]),n("td",[e._v(e._s(t[6]))]),n("td",[n("b",[e._v(e._s(t[8]))])]),e.unimportant?n("td",[e._v(e._s(t[5]))]):e._e(),e.unimportant?n("td",[e._v(e._s(t[7]))]):e._e()])})),0)]),e.rows.length>0?e._e():n("p",[e._v("No displayed resources -- Select Region, Constellation, etc to begin.")])])},ge=[],me={name:"DisplayedResources",data:function(){return{publicPath:""}},methods:{},computed:{unimportant:function(){return!(window.innerWidth<1024)},headers:function(){return this.$store.getters.headers},rows:function(){return this.$store.getters.displayedResources},region:function(){return this.$store.getters.region},constellation:function(){return this.$store.getters.constellation},resourceFilters:function(){return this.$store.getters.resourceFilters},resourcesCount:function(){return this.$store.getters.resourcesCount},displayedResourcesCount:function(){return this.$store.getters.displayedResourcesCount},resourcesByPlanetCount:function(){return this.$store.getters.resourcesByPlanetCount}}},ve=me,_e=(n("5855"),Object(c["a"])(ve,he,ge,!1,null,"186c42d1",null)),ye=_e.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yields-page"},[n("b",[e._v("Yields")]),e._v(" "),n("small",[e._v("These are the highest yield planets for each resource type in the area selected. If no areas are selected, then the suggestions are universal.")]),n("table",{staticClass:"table table-striped table-sm",attrs:{id:"yields-list"}},[n("thead",[n("tr",[e.unimportant?n("th",[e._v("Planet Id")]):e._e(),n("th",[e._v("Region")]),n("th",[e._v("Constellation")]),n("th",[e._v("System")]),n("th",[e._v("Planet Name")]),n("th",[e._v("Resource")]),n("th",[e._v("Output")]),e.unimportant?n("th",[e._v("Richness")]):e._e()])]),n("tbody",e._l(e.rows,(function(t,o){return n("tr",{key:o},[e.unimportant?n("td",[e._v(e._s(t[0]))]):e._e(),n("td",[e._v(e._s(t[1]))]),n("td",[e._v(e._s(t[2]))]),n("td",[e._v(e._s(t[3]))]),n("td",[e._v(e._s(t[4]))]),n("td",[e._v(e._s(t[6]))]),n("td",[n("b",[e._v(e._s(t[8]))])]),e.unimportant?n("td",[e._v(e._s(t[7]))]):e._e()])})),0)]),e.rows.length>0?e._e():n("p",[e._v("No yields -- Select Region, Constellation, etc to begin.")])])},Se=[],Ce={name:"YieldsPage",data:function(){return{}},methods:{},computed:{unimportant:function(){return!(window.innerWidth<1024)},headers:function(){return this.$store.getters.headers},rows:function(){return this.$store.getters.yields},region:function(){return this.$store.getters.region},constellation:function(){return this.$store.getters.constellation}}},Fe=Ce,Re=(n("b102"),Object(c["a"])(Fe,be,Se,!1,null,"cd0a6c38",null)),we=Re.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"suggestions-page"},[n("b",[e._v("Suggestions for a Single Planet with all resources")]),e._v(" "),n("small",[e._v("These are suggested planets to place mining arrays on.")]),n("table",{staticClass:"table table-striped table-sm",attrs:{id:"suggestions-list"}},[e._m(0),n("tbody",e._l(e.suggestionsForSinglePlanetWithAllResources,(function(t,o){return n("tr",{key:o},[n("td",[e._v(e._s(t[1]))]),n("td",[e._v(e._s(t[2]))]),n("td",[e._v(e._s(t[3]))]),n("td",[e._v(e._s(t[4]))]),n("td",e._l(t[10],(function(t,o){return n("div",{key:o},[e._v(" "+e._s(t)+" ")])})),0)])})),0)]),e.suggestionsForSinglePlanetWithAllResources.length>0?e._e():n("p",[e._v("No suggestions. There may not be any such planets.")]),n("b",[e._v("Suggestions for a Single Planet with most resources")]),e._v(" "),n("small",[e._v("These are suggested planets to place mining arrays on.")]),n("table",{staticClass:"table table-striped table-sm",attrs:{id:"suggestions2-list"}},[e._m(1),n("tbody",e._l(e.suggestionsForSinglePlanetWithMostResources,(function(t,o){return n("tr",{key:o},[n("td",[e._v(e._s(t[1]))]),n("td",[e._v(e._s(t[2]))]),n("td",[e._v(e._s(t[3]))]),n("td",[e._v(e._s(t[4]))]),n("td",e._l(t[10],(function(t,o){return n("div",{key:o},[n("span",{class:[e.isResourceFilters(t)]},[e._v(e._s(t))])])})),0)])})),0)]),e.suggestionsForSinglePlanetWithMostResources.length>0?e._e():n("p",[e._v("No suggestions. There may not be any such planets.")])])},$e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Region")]),n("th",[e._v("Constellation")]),n("th",[e._v("System")]),n("th",[e._v("Planet Name")]),n("th",[e._v("Resources and Output")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Region")]),n("th",[e._v("Constellation")]),n("th",[e._v("System")]),n("th",[e._v("Planet Name")]),n("th",[e._v("Resources and Output")])])])}],Pe=(n("2ca0"),{name:"SuggestionsPage",computed:{unimportant:function(){return!(window.innerWidth<1024)},headers:function(){return this.$store.getters.headers},suggestionsForSinglePlanetWithAllResources:function(){return this.$store.getters.suggestionsForSinglePlanetWithAllResources},suggestionsForSinglePlanetWithMostResources:function(){return this.$store.getters.suggestionsForSinglePlanetWithMostResources}},methods:{isResourceFilters:function(e){for(var t=this.$store.getters.resourceFilters,n=0;n<t.length;n++){var o=t[n];if(null!==o&&e.startsWith(o))return"found"}return""}}}),xe=Pe,Te=(n("0e61"),Object(c["a"])(xe,Be,$e,!1,null,"6ff2e474",null)),Oe=Te.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"not-found"},[e._v(" NotFound ... ")])},Ee=[],ke={name:"NotFound",components:{}},je=ke,Ne=Object(c["a"])(je,De,Ee,!1,null,null,null),Ae=Ne.exports;o["default"].use(pe["a"]);var He=[{path:"/",redirect:"/home"},{path:"/home",component:ye},{path:"/yields",component:we},{path:"/suggestions",component:Oe},{path:"/*",component:Ae}],Le=new pe["a"]({mode:"history",base:"",routes:He}),We=Le,Me=n("5f5b"),Ge=n("b1e0"),Je=(n("4989"),n("f9e3"),n("2dd8"),n("ecee")),Ke=n("ad3d"),Ye=n("c074"),qe=(n("4de4"),n("caad6"),n("d81d"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("2909")),Ie=n("2f62");o["default"].use(Ie["a"]);var Ue=new Ie["a"].Store({state:{loadProduction:!1,loadBlueprints:!1,headers:[],resources:[],resourcesForSelection:[],displayedResources:[],resourceFilters:[null,null,null,null,null],regionsForSelection:[],region:"Delve",constellationsForSelection:[],constellation:null,systemsForSelection:[],system:null,blueprintHeaders:[],blueprints:[],blueprintsForSelection:[],resourcesByPlanet:[]},getters:{loadProduction:function(e){return e.loadProduction},loadBlueprints:function(e){return e.loadBlueprints},headers:function(e){return e.headers},resources:function(e){return e.resources},resourcesCount:function(e){return e.resources.length},displayedResources:function(e){return e.displayedResources},displayedResourcesCount:function(e){return e.displayedResources.length},resourcesForSelectionCount:function(e){return e.resourcesForSelection.length},resourcesForSelection:function(e){return e.resourcesForSelection},resourceFilters:function(e){return e.resourceFilters},regionsForSelection:function(e){return e.regionsForSelection},regionsForSelectionCount:function(e){return e.regionsForSelection.length},regionsCount:function(e){return e.regionsForSelection.length},region:function(e){return e.region},constellationsForSelection:function(e){return e.constellationsForSelection},constellationsForSelectionCount:function(e){return e.constellationsForSelection.length},constellationsCount:function(e){return e.constellationsForSelection.length},constellation:function(e){return e.constellation},systemsForSelection:function(e){return e.systemsForSelection},systemsForSelectionCount:function(e){return e.systemsForSelection.length},systemsCount:function(e){return e.systemsForSelection.length},system:function(e){return e.system},blueprintHeaders:function(e){return e.blueprintHeaders},blueprints:function(e){return e.blueprints},blueprintsCount:function(e){return e.blueprints.length},blueprintsForSelection:function(e){return e.blueprintsForSelection},blueprintsForSelectionCount:function(e){return e.blueprintsForSelection.length},yields:function(e){var t=new Date,n=e.resources;n.sort((function(e,t){return t[8]-e[8]}));var o=n.length;console.log("yields pre-sort",(new Date).getTime()-t.getTime()+"ms");var s=new Array(0),r=0;return null===e.region&&null===e.constellation&&null===e.system?e.resourcesForSelection.forEach((function(e){for(var t=new Date,i=0;i<o;i++)if(n[i][6]===e&&parseFloat(n[i][8])>0){s[r++]=n[i],console.log("yields all",(new Date).getTime()-t.getTime()+"ms",e);break}})):null!==e.region?e.resourcesForSelection.forEach((function(t){for(var i=new Date,l=0;l<o;l++)if(e.region==n[l][1]&&n[l][6]===t&&parseFloat(n[l][8])>0){s[r++]=n[l],console.log("yields region",(new Date).getTime()-i.getTime()+"ms",t);break}})):null!==e.constellation?e.resourcesForSelection.forEach((function(t){for(var i=new Date,l=0;l<o;l++)if(e.constellation==n[l][2]&&n[l][6]===t&&parseFloat(n[l][8])>0){s[r++]=n[l],console.log("yields constellation",(new Date).getTime()-i.getTime()+"ms",t);break}})):null!==e.system&&e.resourcesForSelection.forEach((function(t){for(var i=new Date,l=0;l<o;l++)if(e.system==n[l][3]&&n[l][6]===t&&parseFloat(n[l][8])>0){s[r++]=e.resources[l],console.log("yields system",(new Date).getTime()-i.getTime()+"ms",t);break}})),s.sort((function(e,t){return t[8]-e[8]})),console.log("yields",(new Date).getTime()-t.getTime()+"ms"),s},resourcesByPlanet:function(e){return e.resourcesByPlanet},resourcesByPlanetCount:function(e){return e.resourcesByPlanet.length},suggestionsForSinglePlanetWithAllResources:function(e){var t=e.resourceFilters.filter((function(e){return null!==e})),n=[];return e.resourcesByPlanet.forEach((function(e){5===e[6].length&&e[6]==t&&n.push(e)})),n.sort((function(e,t){return t[1]<e[1]?-1:1})),n},suggestionsForSinglePlanetWithMostResources:function(e){var t=3,n=e.resourceFilters.filter((function(e){return null!==e})),o=[];return null!==e.region?e.resourcesByPlanet.forEach((function(s){if(e.region===s[1]&&s[6].length>=t){var r=0;n.forEach((function(e){s[6].includes(e)&&r++})),r>=t&&o.push(s)}})):null!==e.constellation?e.resourcesByPlanet.forEach((function(s){if(e.constellation===s[2]&&s[6].length>=t){var r=0;n.forEach((function(e){s[6].includes(e)&&r++})),r>=t&&o.push(s)}})):null!==e.system?e.resourcesByPlanet.forEach((function(s){if(e.system===s[3]&&s[6].length>=t){var r=0;n.forEach((function(e){s[6].includes(e)&&r++})),r>=t&&o.push(s)}})):e.resourcesByPlanet.forEach((function(e){if(e[6].length>=t){var s=0;n.forEach((function(t){e[6].includes(t)&&s++})),s>=t&&o.push(e)}})),o.sort((function(e,t){return e[1]<t[1]?-1:1})),o}},mutations:{loadProduction:function(e,t){e.loadProduction=!0===t},loadBlueprints:function(e,t){e.loadBlueprints=!0===t},addHeaders:function(e,t){e.headers=t},addResources:function(e,t){e.resources=t},updateResourcesForSelection:function(e){var t=new Date,n=e.resources.map((function(e){return e[6]}));n=Object(qe["a"])(new Set(n)),n.sort(),n.unshift("(None)"),e.resourcesForSelection=n,console.log("updateResourcesForSelection",(new Date).getTime()-t.getTime()+"ms")},updateRegionsForSelection:function(e){var t=new Date,n=e.resources.map((function(e){return e[1]}));n=Object(qe["a"])(new Set(n)),n.sort(),n.unshift("(None)"),e.regionsForSelection=n,console.log("updateRegionsForSelection",(new Date).getTime()-t.getTime()+"ms")},updateConstellationsForSelection:function(e){var t=new Date,n=e.resources.map((function(e){return e[2]}));n=Object(qe["a"])(new Set(n)),n.sort(),n.unshift("(None)"),e.constellationsForSelection=n,console.log("updateConstellationsForSelection",(new Date).getTime()-t.getTime()+"ms")},updateSystemsForSelection:function(e){var t=new Date,n=e.resources.map((function(e){return e[3]}));n=Object(qe["a"])(new Set(n)),n.sort(),n.unshift("(None)"),e.systemsForSelection=n,console.log("updateSystemsForSelection",(new Date).getTime()-t.getTime()+"ms")},changeRegion:function(e,t){e.region=""===t?null:t},changeConstellation:function(e,t){e.constellation=""===t?null:t},changeSystem:function(e,t){e.system=""===t?null:t},changeResourceFilter:function(e,t){var n=Object(g["a"])(t,2),o=n[0],s=n[1];e.resourceFilters[o]=s},computeDisplayedResources:function(e){var t=new Date;if(null===e.region&&null===e.constellation&&null===e.system)e.displayedResources=[];else{var n=e.resourceFilters.filter((function(e){return null!==e})),o=[];0===n.length&&(o=e.resources.filter((function(t){return null!==e.region&&t[1]===e.region||(null!==e.constellation&&t[2]===e.constellation||null!==e.system&&t[3]===e.system)}))),0!==n.length&&(o=e.resources.filter((function(t){return!(null===e.region||t[1]!==e.region||!n.includes(t[6]))||(!(null===e.constellation||t[2]!==e.constellation||!n.includes(t[6]))||!(null===e.system||t[3]!==e.system||!n.includes(t[6])))}))),o.sort((function(e,t){return t[8]-e[8]})),e.displayedResources=o,console.log("computeDisplayedResources",(new Date).getTime()-t.getTime()+"ms")}},addBlueprintHeaders:function(e,t){e.blueprintHeaders=t},addBlueprints:function(e,t){e.blueprints=t;var n=[];t.map((function(e){if("Rig"!==e[1]){var t=e[0]+" ("+e[1]+")";n.includes(t)||n.push(t)}})),n.sort(),n.unshift("(None)"),e.blueprintsForSelection=n},changeBlueprint:function(e,t){if(null!==t){for(var n=[],o=null,s=0;s<e.blueprints.length;s++){var r=e.blueprints[s][0]+" ("+e.blueprints[s][1]+")";if(r===t){o=e.blueprints[s];break}}if(null!==o)for(var i=11;i<=38;i++){var l=parseFloat(o[i].replace(/\D/g,""));0!==l&&n.push(e.blueprintHeaders[i])}0===n.length&&(n=[null,null,null,null,null]),e.resourceFilters=n}else e.resourceFilters=[null,null,null,null,null]},updateResourcesByPlanet:function(e){var t=new Date,n=JSON.parse(JSON.stringify(e.resources));n.sort((function(e,t){return t[4]-e[4]})),console.log("resourcesByPlanet first sort",(new Date).getTime()-t.getTime()+"ms");var o=[],s=null;n.forEach((function(e){s!==e[4]?(s=e[4],o.push(e),o[o.length-1][6]=[e[6]],o[o.length-1][7]=parseFloat(e[8]),o[o.length-1][10]=[e[6]+" ("+e[8]+")"],o[o.length-1][8]=[parseFloat(e[8])]):(o[o.length-1][6].push(e[6]),o[o.length-1][7]+=parseFloat(e[8]),o[o.length-1][10].push(e[6]+" ("+e[8]+")"),o[o.length-1][8].push(parseFloat(e[8])))})),console.log("resourcesByPlanet compile",(new Date).getTime()-t.getTime()+"ms"),o.sort((function(e,t){return t[7]-e[7]})),o.sort((function(e,t){return t[8]<e[8]?-1:1})),console.log("resourcesByPlanet last sort",(new Date).getTime()-t.getTime()+"ms"),e.resourcesByPlanet=o}},actions:{loadProduction:function(e,t){e.commit("loadProduction",t)},loadBlueprints:function(e,t){e.commit("loadBlueprints",t)},addHeaders:function(e,t){e.commit("addHeaders",t)},addResources:function(e,t){e.commit("addResources",t)},updateResourcesForSelection:function(e,t){e.commit("updateResourcesForSelection",t)},updateRegionsForSelection:function(e,t){e.commit("updateRegionsForSelection",t)},updateConstellationsForSelection:function(e,t){e.commit("updateConstellationsForSelection",t)},updateSystemsForSelection:function(e,t){e.commit("updateSystemsForSelection",t)},changeRegion:function(e,t){e.commit("changeRegion",t)},changeConstellation:function(e,t){e.commit("changeConstellation",t)},changeSystem:function(e,t){e.commit("changeSystem",t)},changeResourceFilter:function(e,t){e.commit("changeResourceFilter",t)},computeDisplayedResources:function(e){e.commit("computeDisplayedResources")},addBlueprintHeaders:function(e,t){e.commit("addBlueprintHeaders",t)},addBlueprints:function(e,t){e.commit("addBlueprints",t)},changeBlueprint:function(e,t){e.commit("changeBlueprint",t)},updateResourcesByPlanet:function(e,t){e.commit("updateResourcesByPlanet",t)}}});Je["c"].add(Ye["a"]),o["default"].component("font-awesome-icon",Ke["a"]),o["default"].config.productionTip=!1,o["default"].use(Ie["a"]),o["default"].use(Me["a"]),o["default"].use(Ge["a"]),new o["default"]({store:Ue,router:We,render:function(e){return e(fe)}}).$mount("#app")},"583f":function(e,t,n){},5855:function(e,t,n){"use strict";var o=n("1685"),s=n.n(o);s.a},"5b40":function(e,t,n){},6176:function(e,t,n){},6744:function(e,t,n){},"6cc0":function(e,t,n){},"6f1a":function(e,t,n){},"7ab8":function(e,t,n){},"85ec":function(e,t,n){},8965:function(e,t,n){"use strict";var o=n("5b40"),s=n.n(o);s.a},"98e1":function(e,t,n){"use strict";var o=n("9f8d"),s=n.n(o);s.a},"9f8d":function(e,t,n){},a247:function(e,t,n){"use strict";var o=n("6cc0"),s=n.n(o);s.a},a55a:function(e,t,n){},b102:function(e,t,n){"use strict";var o=n("7ab8"),s=n.n(o);s.a},b18c:function(e,t,n){"use strict";var o=n("6f1a"),s=n.n(o);s.a},e515:function(e,t,n){},ead0:function(e,t,n){"use strict";var o=n("583f"),s=n.n(o);s.a},f9a0:function(e,t,n){},fc9d:function(e,t,n){"use strict";var o=n("f9a0"),s=n.n(o);s.a}});
//# sourceMappingURL=app.986a2f43.js.map