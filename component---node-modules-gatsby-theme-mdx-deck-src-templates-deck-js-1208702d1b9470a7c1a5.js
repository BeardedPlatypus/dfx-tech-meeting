(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},EduN:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));n("E9XD");var r,o,i,c,a=n("17x9"),u=n.n(a),s=n("xUy4"),l=n.n(s),f=n("iEXz"),p=n.n(f),d=n("q1tI"),h=n.n(d),b=n("YVoz"),y=n.n(b),v="bodyAttributes",m="htmlAttributes",O="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",T="href",x="http-equiv",E="innerHTML",_="itemprop",S="name",C="property",A="rel",k="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",N="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",F=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,g.TITLE),n=Q(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},$=function(e){return Q(e,R)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==E&&a!==w&&a!==_||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=y()({},r[a],o[a]);r[a]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ae(f,p);var d={baseTag:se(g.BASE,n),linkTags:se(g.LINK,i),metaTags:se(g.META,c),noscriptTags:se(g.NOSCRIPT,a),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},h={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,h,b)},ce=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return c=t,n.isEqualNode(e)}))?o.splice(c,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===E||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",c=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(m,o,r),link:pe(g.LINK,i,r),meta:pe(g.META,c,r),noscript:pe(g.NOSCRIPT,a,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,s,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:J([T,P],e),bodyAttributes:W(v,e),defer:Q(e,M),encode:Q(e,N),htmlAttributes:W(m,e),linkTags:G(g.LINK,[A,T],e),metaTags:G(g.META,[S,j,x,C,_],e),noscriptTags:G(g.NOSCRIPT,[E],e),onChangeClientState:$(e),scriptTags:G(g.SCRIPT,[k,E],e),styleTags:G(g.STYLE,[w],e),title:V(e),titleAttributes:W(O,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=he,c=i=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case g.TITLE:return Y({},o,((t={})[r.type]=c,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);be.renderStatic=be.rewind}).call(this,n("yLpj"))},LwmV:function(e,t,n){"use strict";n.r(t);var r=n("zLVn"),o=n("wx14"),i=n("q1tI"),c=n.n(i),a=n("A2+M"),u=(n("E9XD"),n("KQm4")),s=n("rePB"),l=n("YwZP"),f=n("qKvR"),p=n("dCk4"),d=n("EduN"),h=n("yDJ3"),b=n.n(h),y=n("2oH+"),v=n.n(y),m=n("a6Uy"),O=n("FUM2"),g=n("Flpk"),j=39,w=37,T=38,x=40,E=32,_=80,S=79,C=71,A=27,k=33,P=34,L=function(e){return function(t){return t.mode===e?{mode:O.a.normal}:{mode:e}}},I=["input","select","textarea","a","button"],M=function(){var e=Object(m.a)();Object(i.useEffect)((function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var c=document.activeElement.tagName.toLowerCase();if(!I.includes(c))if(o)switch(t.keyCode){case E:Object(g.b)(e);break;case _:e.setState(L(O.a.print)),Object(l.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case _:e.setState(L(O.a.presenter));break;case S:e.setState(L(O.a.overview));break;case C:e.setState(L(O.a.grid))}else switch(t.keyCode){case j:case x:case P:case E:Object(g.a)(e);break;case w:case T:case k:Object(g.b)(e);break;case A:e.setState({mode:O.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},N="mdx-deck-slide",R="mdx-deck-step",D=function(){var e=Object(m.a)(),t=Object(i.useState)(!1),n=t[0],r=t[1],o=function(){return r(!0)},c=function(){return r(!1)},a=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case N:Object(l.navigate)([e.slug,n].join("/"));break;case R:e.setState({step:n})}};Object(i.useEffect)((function(){r(document.hasFocus())}),[]),Object(i.useEffect)((function(){return n||window.addEventListener("storage",a),window.addEventListener("focus",o),window.addEventListener("blur",c),function(){n||window.removeEventListener("storage",a),window.removeEventListener("focus",o),window.removeEventListener("blur",c)}}),[n]),Object(i.useEffect)((function(){n&&(localStorage.setItem(N,e.index),localStorage.setItem(R,e.step))}),[n,e.index,e.step])},F=n("/WHa"),z=n("2A+t"),H=function(e){return c.a.createElement(i.Fragment,null,e.children)},B=function(e){var t=Object(i.useState)("100vh"),n=t[0],r=t[1],c=Object(m.a)(),a=c.mode,u=c.theme;Object(i.useEffect)((function(){r(window.innerHeight);var e=function(e){r(window.innerHeight)},t=function(e){a===O.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}}),[a]);var s=u.Provider,l=void 0===s?H:s;return Object(z.c)(l,null,Object(z.c)("div",Object(o.a)({},e,{sx:{width:"100vw",height:a!==O.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},q=n("34Gm"),Y=n("1Is2"),K=n("+VME"),U=n("iRXn"),X=function(e){var t=Object(m.a)(),n=t.index,r=t.length;return Object(z.c)(c.a.Fragment,null,Object(z.c)("div",null,n," / ",r-1),Object(z.c)("div",{sx:{mx:4}},Object(z.c)("a",{href:l.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(z.c)("div",{sx:{mx:"auto"}}),Object(z.c)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(z.c)(U.a,null)),Object(z.c)("div",null,Object(z.c)(K.a,null)))},V=function(e){var t=e.slides,n=e.children,r=Object(m.a)(),o=t[r.index+1],i=!!r.notes&&c.a.Children.toArray(r.notes);return Object(z.c)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(z.c)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(z.c)("div",{sx:{width:"75%",p:3}},Object(z.c)(Y.a,{zoom:3/4},n)),Object(z.c)("div",{sx:{width:"25%",p:3}},Object(z.c)(Y.a,{ratio:4/3,zoom:1/4},Object(z.c)(q.a,{slide:o,preview:!0})),i&&Object(z.c)("div",{sx:{my:3}},i))),Object(z.c)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(z.c)(X,null)))},$=["slides","ratio","zoom","onClick"],W=function(){},J=function(e){var t=e.slides,n=void 0===t?[]:t,a=e.ratio,u=void 0===a?16/9:a,s=e.zoom,l=void 0===s?1/4:s,f=e.onClick,p=void 0===f?W:f,d=Object(r.a)(e,$),h=Object(m.a)().index,b=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=b.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()})),Object(z.c)(c.a.Fragment,null,n.map((function(e,t){return Object(z.c)("div",Object(o.a)({},d,{key:t,role:"link",ref:t===h?b:null,onClick:function(e){p(t)},style:h===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:h===t?"4px solid cyan":null}}),Object(z.c)(Y.a,{zoom:l,ratio:u},Object(z.c)(q.a,{slide:e,preview:!0})))})))},G=function(e){var t=e.slides,n=e.children,r=Object(m.a)(),o=r.slug,i=r.index,c=r.length;return Object(z.c)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(z.c)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(z.c)(J,{slides:t,zoom:1/6,onClick:function(e){Object(l.navigate)([o,e].join("/"))}})),Object(z.c)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(z.c)("div",{sx:{flex:"1 1 auto"}},Object(z.c)(Y.a,{zoom:5/6},n)),Object(z.c)("div",{sx:{py:3}},i," / ",c-1)))},Q=function(e){var t=e.slides,n=Object(m.a)(),r=n.slug,o=n.setState;return Object(z.c)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(z.c)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(z.c)(J,{slides:t,onClick:function(e){Object(l.navigate)([r,e].join("/")),o({mode:O.a.normal})},sx:{width:"25%",m:0}})))},Z=["slides","pageContext","theme","themes"],ee=["components"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){return M(),!1},oe=function(){return D(),!1},ie=function(e){var t=e.slides,n=ne(ne({},Object(m.a)()),{},{mode:O.a.print});return Object(f.c)(F.a.Provider,{value:n},t.map((function(e,t){return Object(f.c)(q.a,{key:t,slide:e,preview:!0})})))},ce=function(e){var t=e.theme;return!!t.googleFont&&Object(f.c)(d.a,null,Object(f.c)("link",{rel:"stylesheet",href:t.googleFont}))},ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return"function"==typeof t?t(e):v()(e,t)}),{})},ue=function(e){var t=e.children;return Object(f.c)(c.a.Fragment,{children:t})},se=function(e){var t,n,o=e.slides,i=void 0===o?[]:o,a=e.pageContext,s=a.title,h=a.slug,y=e.theme,v=void 0===y?{}:y,g=e.themes,j=void 0===g?[]:g,w=(Object(r.a)(e,Z),Object(m.a)()),T=(t=l.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),x=i.head.children,E=ae.apply(void 0,[v].concat(Object(u.a)(j))),_=E.components,S=Object(r.a)(E,ee),C=ne(ne({},w),{},{slug:h,length:i.length,index:T,steps:b()(w,"metadata."+T+".steps"),notes:b()(w,"metadata."+T+".notes"),theme:S}),A=ue;switch(C.mode){case O.a.presenter:A=V;break;case O.a.overview:A=G;break;case O.a.grid:A=Q}return Object(f.c)(c.a.Fragment,null,Object(f.c)(d.a,null,s&&Object(f.c)("title",null,s),x),Object(f.c)(ce,{theme:S}),Object(f.c)(F.a.Provider,{value:C},Object(f.c)(p.a,{components:_,theme:S},Object(f.c)(f.a,{styles:{body:{overflow:C.mode===O.a.normal?"hidden":null}}}),Object(f.c)(re,null),Object(f.c)(oe,null),Object(f.c)(B,null,Object(f.c)(A,{slides:i},Object(f.c)(l.Router,{basepath:h,style:{height:"100%"}},Object(f.c)(q.a,{index:0,path:"/",slide:i[0]}),i.map((function(e,t){return Object(f.c)(q.a,{key:t,index:t,path:t+"/*",slide:e})})),Object(f.c)(ie,{path:"/print",slides:i})))))))},le=n("K1fZ"),fe=["data"],pe={wrapper:function(e){var t=Object(le.a)(e);return Object(f.c)(se,Object(o.a)({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),i=Object(r.a)(e,fe);return Object(f.c)((function(e){return Object(f.c)(a.MDXRenderer,Object(o.a)({},e,{children:n}))}),Object(o.a)({},i,{components:pe}))}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),c=n("8OQS"),a=["scope","children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("q1tI"),f=n("7ljp").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=c(e,a),u=p(t),d=l.useMemo((function(){if(!n)return null;var e=s({React:l,mdx:f},u),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return l.createElement(d,s({},i))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},iEXz:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,c){if(t===c)return!0;if(t&&c&&"object"==typeof t&&"object"==typeof c){if(t.constructor!==c.constructor)return!1;var a,u,s,l;if(Array.isArray(t)){if((a=t.length)!=c.length)return!1;for(u=a;0!=u--;)if(!e(t[u],c[u]))return!1;return!0}if(r&&t instanceof Map&&c instanceof Map){if(t.size!==c.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],c.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&c instanceof Set){if(t.size!==c.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(c)){if((a=t.length)!=c.length)return!1;for(u=a;0!=u--;)if(t[u]!==c[u])return!1;return!0}if(t.constructor===RegExp)return t.source===c.source&&t.flags===c.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===c.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===c.toString();if((a=(s=Object.keys(t)).length)!==Object.keys(c).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(c,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],c[s[u]]))return!1;return!0}return t!=t&&c!=c}(e,t)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function i(t,n,c){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},xUy4:function(e,t,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=o.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},c.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",a),f}}},yDJ3:function(e,t,n){(function(t){var n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/,o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,a=/^\[object .+?Constructor\]$/,u="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")();var f,p=Array.prototype,d=Function.prototype,h=Object.prototype,b=l["__core-js_shared__"],y=(f=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",v=d.toString,m=h.hasOwnProperty,O=h.toString,g=RegExp("^"+v.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=l.Symbol,w=p.splice,T=M(l,"Map"),x=M(Object,"create"),E=j?j.prototype:void 0,_=E?E.toString:void 0;function S(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function A(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function P(e,t){for(var o,i=0,c=(t=function(e,t){if(F(e))return!1;var o=typeof e;if("number"==o||"symbol"==o||"boolean"==o||null==e||H(e))return!0;return r.test(e)||!n.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:F(o=t)?o:N(o)).length;null!=e&&i<c;)e=e[R(t[i++])];return i&&i==c?e:void 0}function L(e){return!(!z(e)||(t=e,y&&y in t))&&(function(e){var t=z(e)?O.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?g:a).test(function(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function I(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function M(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return L(n)?n:void 0}S.prototype.clear=function(){this.__data__=x?x(null):{}},S.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},S.prototype.get=function(e){var t=this.__data__;if(x){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return m.call(t,e)?t[e]:void 0},S.prototype.has=function(e){var t=this.__data__;return x?void 0!==t[e]:m.call(t,e)},S.prototype.set=function(e,t){return this.__data__[e]=x&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,n=k(t,e);return!(n<0)&&(n==t.length-1?t.pop():w.call(t,n,1),!0)},C.prototype.get=function(e){var t=this.__data__,n=k(t,e);return n<0?void 0:t[n][1]},C.prototype.has=function(e){return k(this.__data__,e)>-1},C.prototype.set=function(e,t){var n=this.__data__,r=k(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},A.prototype.clear=function(){this.__data__={hash:new S,map:new(T||C),string:new S}},A.prototype.delete=function(e){return I(this,e).delete(e)},A.prototype.get=function(e){return I(this,e).get(e)},A.prototype.has=function(e){return I(this,e).has(e)},A.prototype.set=function(e,t){return I(this,e).set(e,t),this};var N=D((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(H(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var n=[];return o.test(e)&&n.push(""),e.replace(i,(function(e,t,r,o){n.push(r?o.replace(c,"$1"):t||e)})),n}));function R(e){if("string"==typeof e||H(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function D(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var c=e.apply(this,r);return n.cache=i.set(o,c),c};return n.cache=new(D.Cache||A),n}D.Cache=A;var F=Array.isArray;function z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:P(e,t);return void 0===r?n:r}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js-1208702d1b9470a7c1a5.js.map