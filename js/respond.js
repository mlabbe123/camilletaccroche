/*! Respond.js v1.4.0: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function(k){var t={};k.respond=t;t.update=function(){};var c=[],d=(function(){var w=false;try{w=new k.XMLHttpRequest()}catch(z){w=new k.ActiveXObject("Microsoft.XMLHTTP")}return function(){return w}})(),n=function(w,A){var z=d();if(!z){return}z.open("GET",w,true);z.onreadystatechange=function(){if(z.readyState!==4||z.status!==200&&z.status!==304){return}A(z.responseText)};if(z.readyState===4){return}z.send(null)};t.ajax=n;t.queue=c;t.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/};t.mediaQueriesSupported=k.matchMedia&&k.matchMedia("only all")!==null&&k.matchMedia("only all").matches;if(t.mediaQueriesSupported){return}var y=k.document,s=y.documentElement,h=[],j=[],q=[],o={},g=30,e=y.getElementsByTagName("head")[0]||s,f=y.getElementsByTagName("base")[0],b=e.getElementsByTagName("link"),l,r,p,x=function(){var A,D=y.createElement("div"),w=y.body,C=s.style.fontSize,B=w&&w.style.fontSize,z=false;D.style.cssText="position:absolute;font-size:1em;width:1em";if(!w){w=z=y.createElement("body");w.style.background="none"}s.style.fontSize="100%";w.style.fontSize="100%";w.appendChild(D);if(z){s.insertBefore(w,s.firstChild)}A=D.offsetWidth;if(z){s.removeChild(w)}else{w.removeChild(D)}s.style.fontSize=C;if(B){w.style.fontSize=B}A=p=parseFloat(A);return A},i=function(K){var P="clientWidth",B=s[P],z=y.compatMode==="CSS1Compat"&&B||y.body[P]||B,N={},O=b[b.length-1],A=(new Date()).getTime();if(K&&l&&A-l<g){k.clearTimeout(r);r=k.setTimeout(i,g);return}else{l=A}for(var I in h){if(h.hasOwnProperty(I)){var L=h[I],E=L.minw,H=L.maxw,J=E===null,M=H===null,w="em";if(!!E){E=parseFloat(E)*(E.indexOf(w)>-1?(p||x()):1)}if(!!H){H=parseFloat(H)*(H.indexOf(w)>-1?(p||x()):1)}if(!L.hasquery||(!J||!M)&&(J||z>=E)&&(M||z<=H)){if(!N[L.media]){N[L.media]=[]}N[L.media].push(j[L.rules])}}}for(var G in q){if(q.hasOwnProperty(G)){if(q[G]&&q[G].parentNode===e){e.removeChild(q[G])}}}for(var F in N){if(N.hasOwnProperty(F)){var D=y.createElement("style"),C=N[F].join("\n");D.type="text/css";D.media=F;e.insertBefore(D,O.nextSibling);if(D.styleSheet){D.styleSheet.cssText=C}else{D.appendChild(y.createTextNode(C))}q.push(D)}}},m=function(J,w,A){var H=J.replace(t.regex.keyframes,"").match(t.regex.media),K=H&&H.length||0;w=w.substring(0,w.lastIndexOf("/"));var z=function(L){return L.replace(t.regex.urls,"$1"+w+"$2$3")},B=!K&&A;if(w.length){w+="/"}if(B){K=1}for(var E=0;E<K;E++){var F,G,C,I;if(B){F=A;j.push(z(J))}else{F=H[E].match(t.regex.findStyles)&&RegExp.$1;j.push(RegExp.$2&&z(RegExp.$2))}C=F.split(",");I=C.length;for(var D=0;D<I;D++){G=C[D];h.push({media:G.split("(")[0].match(t.regex.only)&&RegExp.$2||"all",rules:j.length-1,hasquery:G.indexOf("(")>-1,minw:G.match(t.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:G.match(t.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}i()},v=function(){if(c.length){var w=c.shift();n(w.href,function(z){m(z,w.href,w.media);o[w.href]=true;k.setTimeout(function(){v()},0)})}},a=function(){for(var B=0;B<b.length;B++){var A=b[B],z=A.href,C=A.media,w=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&w&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!f)||z.replace(RegExp.$1,"").split("/")[0]===k.location.host){if(z.substring(0,2)==="//"){z=k.location.protocol+z}c.push({href:z,media:C})}}}}v()};a();t.update=a;t.getEmValue=x;function u(){i(true)}if(k.addEventListener){k.addEventListener("resize",u,false)}else{if(k.attachEvent){k.attachEvent("onresize",u)}}})(this);