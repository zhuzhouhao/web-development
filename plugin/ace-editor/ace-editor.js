!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealAceEditor=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,a={f:s&&!c.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:c},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},u={}.toString,f=function(t){return u.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==f(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=function(t){return d(v(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!g(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!g(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!g(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,w=function(t,e){return y.call(t,e)},b=r.document,j=g(b)&&g(b.createElement),S=function(t){return j?b.createElement(t):{}},E=!i&&!o((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),C=Object.getOwnPropertyDescriptor,O={f:i?C:function(t,e){if(t=h(t),e=m(e,!0),E)try{return C(t,e)}catch(t){}if(w(t,e))return l(!a.f.call(t,e),t[e])}},T=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,z={f:i?k:function(t,e,n){if(T(t),e=m(e,!0),T(n),E)try{return k(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},P=i?function(t,e,n){return z.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},M=function(t,e){try{P(r,t,e)}catch(n){r[t]=e}return e},x="__core-js_shared__",A=r[x]||M(x,{}),L=Function.toString;"function"!=typeof A.inspectSource&&(A.inspectSource=function(t){return L.call(t)});var R,I,F,_=A.inspectSource,N=r.WeakMap,V="function"==typeof N&&/native code/.test(_(N)),D=e((function(t){(t.exports=function(t,e){return A[t]||(A[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),H=0,W=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++H+W).toString(36)},G=D("keys"),J=function(t){return G[t]||(G[t]=q(t))},Q={},X=r.WeakMap;if(V){var B=A.state||(A.state=new X),K=B.get,Y=B.has,U=B.set;R=function(t,e){return e.facade=t,U.call(B,t,e),e},I=function(t){return K.call(B,t)||{}},F=function(t){return Y.call(B,t)}}else{var Z=J("state");Q[Z]=!0,R=function(t,e){return e.facade=t,P(t,Z,e),e},I=function(t){return w(t,Z)?t[Z]:{}},F=function(t){return w(t,Z)}}var tt,et,nt={set:R,get:I,has:F,enforce:function(t){return F(t)?I(t):R(t,{})},getterFor:function(t){return function(e){var n;if(!g(e)||(n=I(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},rt=e((function(t){var e=nt.get,n=nt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var s,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,u=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||w(i,"name")||P(i,"name",e),(s=n(i)).source||(s.source=o.join("string"==typeof e?e:""))),t!==r?(a?!u&&t[e]&&(l=!0):delete t[e],l?t[e]=i:P(t,e,i)):l?t[e]=i:M(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||_(this)}))})),ot=r,it=function(t){return"function"==typeof t?t:void 0},ct=function(t,e){return arguments.length<2?it(ot[t])||it(r[t]):ot[t]&&ot[t][e]||r[t]&&r[t][e]},st=Math.ceil,at=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?at:st)(t)},ut=Math.min,ft=function(t){return t>0?ut(lt(t),9007199254740991):0},pt=Math.max,dt=Math.min,vt=function(t){return function(e,n,r){var o,i=h(e),c=ft(i.length),s=function(t,e){var n=lt(t);return n<0?pt(n+e,0):dt(n,e)}(r,c);if(t&&n!=n){for(;c>s;)if((o=i[s++])!=o)return!0}else for(;c>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},ht={includes:vt(!0),indexOf:vt(!1)}.indexOf,gt=function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!w(Q,n)&&w(r,n)&&i.push(n);for(;e.length>o;)w(r,n=e[o++])&&(~ht(i,n)||i.push(n));return i},mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],yt=mt.concat("length","prototype"),$t={f:Object.getOwnPropertyNames||function(t){return gt(t,yt)}},wt={f:Object.getOwnPropertySymbols},bt=ct("Reflect","ownKeys")||function(t){var e=$t.f(T(t)),n=wt.f;return n?e.concat(n(t)):e},jt=function(t,e){for(var n=bt(e),r=z.f,o=O.f,i=0;i<n.length;i++){var c=n[i];w(t,c)||r(t,c,o(e,c))}},St=/#|\.prototype\./,Et=function(t,e){var n=Ot[Ct(t)];return n==kt||n!=Tt&&("function"==typeof e?o(e):!!e)},Ct=Et.normalize=function(t){return String(t).replace(St,".").toLowerCase()},Ot=Et.data={},Tt=Et.NATIVE="N",kt=Et.POLYFILL="P",zt=Et,Pt=O.f,Mt=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},xt=Array.isArray||function(t){return"Array"==f(t)},At="process"==f(r.process),Lt=ct("navigator","userAgent")||"",Rt=r.process,It=Rt&&Rt.versions,Ft=It&&It.v8;Ft?et=(tt=Ft.split("."))[0]+tt[1]:Lt&&(!(tt=Lt.match(/Edge\/(\d+)/))||tt[1]>=74)&&(tt=Lt.match(/Chrome\/(\d+)/))&&(et=tt[1]);var _t,Nt=et&&+et,Vt=!!Object.getOwnPropertySymbols&&!o((function(){return!Symbol.sham&&(At?38===Nt:Nt>37&&Nt<41)})),Dt=Vt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ht=D("wks"),Wt=r.Symbol,qt=Dt?Wt:Wt&&Wt.withoutSetter||q,Gt=function(t){return w(Ht,t)&&(Vt||"string"==typeof Ht[t])||(Vt&&w(Wt,t)?Ht[t]=Wt[t]:Ht[t]=qt("Symbol."+t)),Ht[t]},Jt=Gt("species"),Qt=function(t,e){var n;return xt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!xt(n.prototype)?g(n)&&null===(n=n[Jt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Xt=[].push,Bt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=7==t,s=5==t||i;return function(a,l,u,f){for(var p,h,g=Object(v(a)),m=d(g),y=Mt(l,u,3),$=ft(m.length),w=0,b=f||Qt,j=e?b(a,$):n||c?b(a,0):void 0;$>w;w++)if((s||w in m)&&(h=y(p=m[w],w,g),t))if(e)j[w]=h;else if(h)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:Xt.call(j,p)}else switch(t){case 4:return!1;case 7:Xt.call(j,p)}return i?-1:r||o?o:j}},Kt={forEach:Bt(0),map:Bt(1),filter:Bt(2),some:Bt(3),every:Bt(4),find:Bt(5),findIndex:Bt(6),filterOut:Bt(7)},Yt=Object.keys||function(t){return gt(t,mt)},Ut=i?Object.defineProperties:function(t,e){T(t);for(var n,r=Yt(e),o=r.length,i=0;o>i;)z.f(t,n=r[i++],e[n]);return t},Zt=ct("document","documentElement"),te=J("IE_PROTO"),ee=function(){},ne=function(t){return"<script>"+t+"</"+"script>"},re=function(){try{_t=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;re=_t?function(t){t.write(ne("")),t.close();var e=t.parentWindow.Object;return t=null,e}(_t):((e=S("iframe")).style.display="none",Zt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(ne("document.F=Object")),t.close(),t.F);for(var n=mt.length;n--;)delete re.prototype[mt[n]];return re()};Q[te]=!0;var oe=Object.create||function(t,e){var n;return null!==t?(ee.prototype=T(t),n=new ee,ee.prototype=null,n[te]=t):n=re(),void 0===e?n:Ut(n,e)},ie=Gt("unscopables"),ce=Array.prototype;null==ce[ie]&&z.f(ce,ie,{configurable:!0,value:oe(null)});var se,ae=Kt.find,le="find",ue=!0;le in[]&&Array(1).find((function(){ue=!1})),function(t,e){var n,o,i,c,s,a=t.target,l=t.global,u=t.stat;if(n=l?r:u?r[a]||M(a,{}):(r[a]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(s=Pt(n,o))&&s.value:n[o],!zt(l?o:a+(u?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;jt(c,i)}(t.sham||i&&i.sham)&&P(c,"sham",!0),rt(n,o,c,t)}}({target:"Array",proto:!0,forced:ue},{find:function(t){return ae(this,t,arguments.length>1?arguments[1]:void 0)}}),se=le,ce[ie][se]=!0;return function(){var t,e,n,r="ace-editor";function o(t){t.on("click",(function(){Reveal.configure({keyboard:!1}),$(".editor").show(),i(),function(){for(var t=$("section.present:not(.stack)").find("pre"),e=0;e<t.length;e++){var n=t[e];if(n.code&&n.langType){var r=n.code,o=n.langType;console.log(o);var i=$(".ace#"+o+"Editor").attr("id");i?ace.edit(i).getSession().setValue(r):console.log("cannot edit langType ",o)}else console.log("do not found code or langType in pre")}}(),c()})),$(".run").click((function(){var t=ace.edit("htmlEditor").getSession().getValue(),e="<script> let div = parent.document.body.getElementsByClassName('console'); let console = {panel: div,log: function(m){this.panel[0].innerHTML = this.panel[0].innerHTML + '<p>' + m + '</p>';} }; <\/script><style class='style'>"+ace.edit("cssEditor").getSession().getValue()+"</style>"+t+"<script class='script'>"+ace.edit("jsEditor").getSession().getValue()+"<\/script>";$(".iframe").attr("srcdoc",e)})),$(".clear").click((function(){i()})),$(".close").on("click",(function(){$(".editor").hide(),Reveal.configure({keyboard:!0})})),$("a.html").on("click",(function(){c()})),$("a.js").on("click",(function(){$(".active").toggleClass("active"),$("#jsEditor").toggleClass("active"),$(".output .wrapper.html.css").hide(),$(".output .wrapper.js").show(),$(".js").toggleClass("active")})),$("a.css").on("click",(function(){$(".active").toggleClass("active"),$("#cssEditor").toggleClass("active"),$(".output .wrapper.js").hide(),$(".output .wrapper.html.css").show(),$(".css").toggleClass("active")})),$(".lg").on("click",(function(){e.fontSize+=1,$(".editor .ace").css("font-size",e.fontSize),$(".editor .output .wrapper.js p").css("font-size",e.fontSize)})),$(".sm").on("click",(function(){e.fontSize-=1,$(".editor .ace").css("font-size",e.fontSize),$(".editor .output .wrapper.js p").css("font-size",e.fontSize)})),$(".copy").on("click",(function(){var t=$("section.present:not(.stack)"),e=t.find("pre");if(e.length>0){var n,r=e[0];if(r.code)n=r.code;else{var o=$(r).find("code");n=$(o[0]).text()}var i=$(".ace.active").attr("id");0!==t.has(".hljs.html").length?(i=$(".ace#htmlEditor").attr("id"),$(".active").toggleClass("active"),$("#htmlEditor").toggleClass("active"),$(".output .wrapper.js").hide(),$(".output .wrapper.html.css").show(),$(".html").toggleClass("active")):0!==t.has(".hljs.css").length?(i=$(".ace#cssEditor").attr("id"),$(".active").toggleClass("active"),$("#cssEditor").toggleClass("active"),$(".output .wrapper.js").hide(),$(".output .wrapper.html.css").show(),$(".css").toggleClass("active")):0!==t.has(".hljs.js").length&&(i=$(".ace#jsEditor").attr("id"),$(".active").toggleClass("active"),$("#jsEditor").toggleClass("active"),$(".output .wrapper.html.css").hide(),$(".output .wrapper.js").show(),$(".js").toggleClass("active")),ace.edit(i).getSession().setValue(n,1)}}))}function i(){$("#jsEditor").hasClass("active")?$(".output .wrapper.js").empty():($("#cssEditor").hasClass("active")||$("#htmlEditor").hasClass("active"))&&$(".iframe").attr("srcdoc","")}function c(){$(".active").toggleClass("active"),$("#htmlEditor").toggleClass("active"),$(".output .wrapper.js").hide(),$(".output .wrapper.html.css").show(),$(".html").toggleClass("active")}return{id:r,init:function(i){if(function(n){(t=n.aceEditor||{}).selector=n.selector||".edit-code",e={aceTheme:"ace/theme/tomorrow",javascript:!0,html:!0,css:!0,fontSize:24}}(i.getConfig()),n=scriptPath(r),jQuery){var c=$(t.selector);loadResource(n+"ace-editor.css","stylesheet",(function(){loadResource(n+"ace/ace.js","script",(function(){var r;ace.config.set("basePath",n+"ace/"),c.length>0?(r=$("\n    <div class='editor'>\n      <div class='panel input'>\n        <div class='controls ace-tab'>\n          <a class='close ace-button' title='关闭编辑界面'>X</a>\n        </div>\n        <div class='wrapper'></div>\n      </div>\n      <div class='panel output'>\n        <div class='controls'>\n          <a class='run ace-button' title='运行代码'> 运行 </a>\n          <a class='clear ace-button' title='清除运行结果'> 清除 </a>\n          <a class='copy ace-button'>Copy</a>\n          <a class='lg ace-button' title='放大一号字体'> + </a>\n          <a class='sm ace-button' title='缩小一号字体'> - </a>\n        </div>\n        <div class='console wrapper js'></div>\n        <iframe sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation' class='iframe wrapper html css active' srcdoc=''></iframe>\n      </div>\n    </div>"),$(document.body).prepend(r),e.html&&($(".input .controls").append("<a class='html active' title='切换到HTML编辑器'> HTML </a>"),$(".input .wrapper").append("<pre id='htmlEditor' class='ace'></pre>"),0===$(".input .active").length&&($("#htmlEditor").addClass("active"),$(".wrapper.js").removeClass("active"),$(".html").addClass("active"),$(".output .wrapper.html.css").addClass("active"))),e.css&&($(".input .controls").append("<a class='css' title='切换到CSS编辑器'> CSS </a>"),$(".input .wrapper").append("<pre id='cssEditor' class='ace'></pre>"),$(".output .wrapper.html").length||$(".output .wrapper").append("<div class='html css'></div>"),0===$(".input .active").length&&($("#cssEditor").addClass("active"),$(".css").addClass("active"),$(".output .wrapper.html.css").addClass("active"))),e.javascript&&($(".input .controls").append("<a class='js' title='切换到JS编辑器'> Javascript </a>"),$(".input .wrapper").append("<pre id='jsEditor' class='ace active'></pre>"),0===$(".input .active").length&&($("#jsEditor").addClass("active"),$(".wrapper.js").removeClass("active"),$(".js").addClass("active"),$(".console.wrapper.js").addClass("active"))),$(".editor .ace").css("font-size",e.fontSize),$(".editor .output .wrapper.js p").css("font-size",e.fontSize),function(){if(e.javascript){var t=ace.edit("jsEditor");t.setTheme(e.aceTheme),t.session.setMode("ace/mode/javascript"),t.session.setTabSize(2)}}(),function(){if(e.html){var t=ace.edit("htmlEditor");t.setTheme(e.aceTheme),t.session.setMode("ace/mode/html"),t.session.setTabSize(2),loadResource(n+"emmet.js","script",(function(){loadResource(n+"ace/ext-emmet.js","script",(function(){t.setOption("enableEmmet",!0)}))}))}}(),function(){if(e.css){var t=ace.edit("cssEditor");t.setTheme(e.aceTheme),t.session.setMode("ace/mode/css"),t.session.setTabSize(2)}}(),o(c),$(".copy").hide()):console.log("no trigger element from selector: "+t.selector)}))}))}else console.error("jQuery未加载！")}}}}));
