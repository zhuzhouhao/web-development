!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealVideoFragment=t()}(this,(function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var e=i.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==i.return||i.return()}finally{if(s)throw r}}}}return function(){var e,n,i,o,a,r;function l(e){var t=e.id,n=e.url,i=e.pauses||[],l=t+"-video",s=t+"-video-container",d=t+"-video-fragment-container",u=document.querySelector("#"+d),c=document.createElement("div");c.id=s,c.classList.add("fullpage"),c.style.display="none";var f=document.createElement("template"),y='<video id="'+l+'" src="'+n+'" preload="metadata"></video>';f.innerHTML=y;var m=f.content.firstChild;c.appendChild(m),c.player=m,document.querySelector("div.reveal").appendChild(c);var p=document.createElement("span");if(p.classList.add("fragment"),p.setAttribute("data-video-show",l),p.container=c,u.appendChild(p),i.length>0){for(var v=0;v<i.length;v++){var h=document.createElement("span");h.classList.add("fragment"),h.setAttribute("data-video-play",l),h.startTime=i[v],h.endTime=v+1==i.length?1/0:i[v+1],h.container=c,u.appendChild(h)}m.hasPauses=!0,m.addEventListener("timeupdate",(function(e){var t=this.currentTime,n=this.endTime;null!=n&&t>=n&&(this.pause(),o.style.color="black",a.style.outline="white dashed 2px",r.style.outline="white dashed 2px")})),m.addEventListener("ended",(function(){o.style.color="black",a.style.outline="white solid 2px",r.style.outline="white solid 2px"}))}else m.hasPauses=!1;(p=document.createElement("span")).classList.add("fragment"),p.setAttribute("data-video-hide",l),p.container=c,u.appendChild(p)}function s(e){e.style.display="block";var t=e.offsetHeight,n=e.offsetWidth;console.log(t,", ",n);var i=window.innerWidth,o=window.innerHeight;console.log(o,", ",i);var a=o/t,r=i/n;e.style.transform="translate(-50%, -50%) scale("+Math.min(a,r)+")",e.style.inset="50% auto auto 50%"}return{id:"video-fragment",init:function(d){(function(e){(n=e.video||{}).instances=n.instances||[]})((e=d).getConfig()),$((function(){o=document.querySelector("aside.controls"),i=o.style.color,a=document.querySelector("aside.controls>button.navigate-left"),r=document.querySelector("aside.controls>button.navigate-right")}));var u,c=t(n.instances);try{for(c.s();!(u=c.n()).done;){l(u.value)}}catch(e){c.e(e)}finally{c.f()}e.on("fragmentshown",(function(e){var t=e.fragment;if(t.hasAttribute("data-video-show")){var n=t.container;n.player,s(n),n.style.display="none",s(n),o.style.color=i,a.style.outline="none",r.style.outline="none"}else if(t.hasAttribute("data-video-play")){var l=t.container.player;l.playing?t.classList.remove("visible"):(l.startTime=t.startTime,l.endTime=t.endTime,l.play(),o.style.color=i,a.style.outline="none",r.style.outline="none",console.log("from time "+l.startTime+" and play"))}else if(t.hasAttribute("data-video-hide")){t.container.style.display="none",o.style.color=i,a.style.outline="none",r.style.outline="none"}})),e.on("fragmenthidden",(function(e){var t=e.fragment;if(t.hasAttribute("data-video-show")){var n=t.container,i=n.player;i.currentTime=0,i.pause(),n.style.display="none"}else if(t.hasAttribute("data-video-play")){var o=t.container.player;o.currentTime=t.startTime,o.pause()}else if(t.hasAttribute("data-video-hide")){t.container.style.display="block"}}))}}}}));