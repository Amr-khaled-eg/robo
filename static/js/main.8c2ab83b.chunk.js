(this["webpackJsonpsearch-robots"]=this["webpackJsonpsearch-robots"]||[]).push([[0],{28:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(4),a=t.n(c),i=t(11),s=t(12),u=t(16),l=t(15),h=(t(7),t(1)),d=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:"robot"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsx)("p",{children:e.mail})]})]})},b=function(e){var n=e.robots;return Object(h.jsx)("div",{className:"flex",children:n.map((function(e,n){return Object(h.jsx)(d,{name:e.name,mail:e.email,id:e.id},n)}))})},f=function(e){var n=e.searchChange;return Object(h.jsx)("div",{className:"search",children:Object(h.jsx)("input",{type:"search",placeholder:"Search...",className:"searchBox",onChange:n})})},j=t(5),g="SET_SEARCH_FIELD",p="REQUST_ROBOTS_PENDING",v="REQUST_REBOTS_SUCCES",O="REQUST_REBOTS_FAILED",w=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetRobots()}},{key:"render",value:function(){var e=this.props,n=e.search,t=e.onSearchChange,o=e.robots.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{searchChange:t}),Object(h.jsx)(b,{robots:o})]})}}]),t}(r.a.Component),m=Object(j.b)((function(e){return{search:e.searchRobots.search,robots:e.getRobots.robots,isPending:e.getRobots.isPending,error:e.getRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:g,payload:t}));var t},onGetRobots:function(){return e((function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e({type:v,payload:n})})).catch((function(n){return e({type:O,payload:n})}))}))}}}))(w),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),c(e),a(e)}))},x=t(3),R=t(14),C=t(2),E={search:""},S={isPending:!1,robots:[],error:""},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=Object(x.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object(C.a)(Object(C.a)({},e),{},{search:n.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case p:return Object(C.a)(Object(C.a)({},e),{},{isPending:!0});case v:return Object(C.a)(Object(C.a)({},e),{},{robots:n.payload,isPending:!1});case O:return Object(C.a)(Object(C.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),T=Object(x.d)(P,Object(x.a)(R.a));a.a.render(Object(h.jsx)(j.a,{store:T,children:Object(h.jsx)(m,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robo",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robo","/service-worker.js");k?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):L(e)}))}}(),y()},7:function(e,n,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.8c2ab83b.chunk.js.map