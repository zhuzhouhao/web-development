(function(e){function t(t){for(var r,u,c=t[0],i=t[1],l=t[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("我是主页面")]),n("router-link",{attrs:{to:"/home",tag:"button","active-class":"active"}},[e._v("首页")]),n("router-link",{attrs:{to:"/about",tag:"button","active-class":"active"}},[e._v("关于")]),n("router-view")],1)},a=[],u={name:"App"},c=u,i=(n("034f"),n("2877")),l=Object(i["a"])(c,o,a,!1,null,null,null),s=l.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("我是首页")])])}],b={name:"Home"},h=b,d=Object(i["a"])(h,p,v,!1,null,"f2cba0b8",null),m=d.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("我是关于")])])}],g={name:"About"},O=g,w=Object(i["a"])(O,_,y,!1,null,"c4bea0b0",null),j=w.exports;r["a"].use(f["a"]);var x=[{path:"",redirect:"/home"},{path:"/home",component:m},{path:"/about",component:j}],P=new f["a"]({routes:x,mode:"history",linkActiveClass:"active"}),k=P;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.3ebbc2c7.js.map