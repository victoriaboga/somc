!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(3),a=i(r),o=n(4),s=i(o),l=n(1),c=i(l),u=n(7),d=i(u);n(8),window.Reportal=window.Reportal||{},window.Reportal.TransformMenuAt=s.default,window.Reportal.SideNav=c.default,window.Reportal.hierarchyUpgrade=a.default.upgrade,window.SOMC=window.SOMC||{},window.SOMC.renderMiddleLevel=d.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(6),s=i(o),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.showButtonEl,i=void 0===n?document.querySelector(".js-menu-show"):n,a=t.hideButtonEl,o=void 0===a?document.querySelector(".js-menu-hide"):a,l=t.sideNavEl,c=void 0===l?document.querySelector(".js-side-nav"):l,u=t.sideNavContainerEl,d=void 0===u?document.querySelector(".js-side-nav-container"):u;r(this,e),this.showButtonEl=i,this.hideButtonEl=o,this.sideNavEl=c,this.sideNavContainerEl=d,this.detabinator=new s.default(this.sideNavContainerEl),this.detabinator.inert=!0,this.showSideNav=this.showSideNav.bind(this),this.hideSideNav=this.hideSideNav.bind(this),e.blockClicks=e.blockClicks.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTransitionEnd=this.onTransitionEnd.bind(this),this.update=this.update.bind(this),this.startX=0,this.currentX=0,this.touchingSideNav=!1,this.supportsPassive=void 0}return a(e,[{key:"applyPassive",value:function(){if(void 0!==this.supportsPassive)return!!this.supportsPassive&&{passive:!0};var e=!1;try{document.addEventListener("test",null,{get passive(){e=!0}})}catch(e){}return this.supportsPassive=e,this.applyPassive()}},{key:"addEventListeners",value:function(){this.showButtonEl.addEventListener("click",this.showSideNav),this.hideButtonEl.addEventListener("click",this.hideSideNav),this.sideNavEl.addEventListener("click",this.hideSideNav),this.sideNavContainerEl.addEventListener("click",e.blockClicks),this.sideNavEl.addEventListener("touchstart",this.onTouchStart,this.applyPassive()),this.sideNavEl.addEventListener("touchmove",this.onTouchMove,this.applyPassive()),this.sideNavEl.addEventListener("touchend",this.onTouchEnd)}},{key:"removeEventListeners",value:function(){this.showButtonEl.removeEventListener("click",this.showSideNav),this.hideButtonEl.removeEventListener("click",this.hideSideNav),this.sideNavEl.removeEventListener("click",this.hideSideNav),this.sideNavContainerEl.removeEventListener("click",e.blockClicks),this.sideNavEl.removeEventListener("touchstart",this.onTouchStart),this.sideNavEl.removeEventListener("touchmove",this.onTouchMove),this.sideNavEl.removeEventListener("touchend",this.onTouchEnd)}},{key:"onTouchStart",value:function(e){this.sideNavEl.classList.contains("side-nav--visible")&&(this.startX=e.touches[0].pageX,this.currentX=this.startX,this.touchingSideNav=!0,requestAnimationFrame(this.update))}},{key:"onTouchMove",value:function(e){this.touchingSideNav&&(this.currentX=e.touches[0].pageX)}},{key:"onTouchEnd",value:function(e){if(this.touchingSideNav){this.touchingSideNav=!1;var t=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="",t<0&&this.hideSideNav()}}},{key:"update",value:function(){if(this.touchingSideNav){requestAnimationFrame(this.update);var e=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="translateX("+e+"px)"}}},{key:"onTransitionEnd",value:function(e){this.sideNavEl.classList.remove("side-nav--animatable"),this.sideNavEl.removeEventListener("transitionend",this.onTransitionEnd)}},{key:"showSideNav",value:function(){document.querySelector("body").style.overflow="hidden",this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.add("side-nav--visible"),this.detabinator.inert=!1,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)}},{key:"hideSideNav",value:function(){document.querySelector("body").style.overflow="auto",this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.remove("side-nav--visible"),this.detabinator.inert=!0,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)}}],[{key:"blockClicks",value:function(e){e.stopPropagation()}}]),e}();t.default=l,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;n(this,e);var a=t.query,o=t.full,s=void 0!==o&&o;this._matches=!1,this.full=s,this._mq=null,this._callback=i,this._context=r,this._bound=this._onMatch.bind(this),this.query=a}return i(e,[{key:"_onMatch",value:function(e){return this._matches=e.matches,this._callback.call(this._context,e.matches)}},{key:"matches",get:function(){return this._matches}},{key:"query",get:function(){return this._query},set:function(e){this._query=e,this.constructor.remove(this._mq,this._bound);var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._onMatch(this._mq),this.constructor.add(this._mq,this._bound))}}],[{key:"add",value:function(e,t){e&&e.addListener(t)}},{key:"remove",value:function(e,t){e&&e.removeListener(t),e=null}}]),e}();t.default=r,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e)}return i(e,null,[{key:"upgrade",value:function(){var t=e.hierarchyToggle;t&&t.addEventListener("click",e.hierarchyToggleClickHandler)}},{key:"asyncHierarchyChrome",value:function(){return new Promise(function(t){return setTimeout(function(){var n=e.hierarchyChrome;t(n?n:e.asyncHierarchyChrome())},300)})}},{key:"hierarchyToggleClickHandler",value:function(){e.detachHierarchyToggleClickListener(),e.disablePageScroll();var t=e.hierarchyChrome;t?e.attachChromeCloseListener(t):(t=e.asyncHierarchyChrome(),t.then(e.attachChromeCloseListener))}},{key:"detachHierarchyToggleClickListener",value:function(){e.hierarchyToggle.removeEventListener("click",e.hierarchyToggleClickHandler)}},{key:"attachChromeCloseListener",value:function(t){t.addEventListener("click",e.onChromeClose)}},{key:"onChromeClose",value:function(t){var n=e.cancelButton,i=e.applyButton,r=e.hierarchyChrome,a=t.path[0];[r,n,i].indexOf(a)>-1&&(a==r?n.click():e.enablePageScroll())}},{key:"disablePageScroll",value:function(){document.querySelector("body").setAttribute("style","overflow:hidden !important")}},{key:"enablePageScroll",value:function(){document.querySelector("body").removeAttribute("style")}},{key:"hierarchyToggle",get:function(){return document.querySelector(".dd-target-button")}},{key:"hierarchyChrome",get:function(){return e.hierarchyToggle.parentNode.querySelector(".dd-drilldown")}},{key:"cancelButton",get:function(){return e.hierarchyChrome.querySelector(".dd-cancel")}},{key:"applyButton",get:function(){return e.hierarchyChrome.querySelector(".dd-button-select")}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=i(o),l=n(2),c=i(l),u=n(5),d=i(u),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e);var i=n.iframeClassName,a=void 0===i?".r2dashboard":i,o=n.desktopHeaderClassName,l=void 0===o?".reportal-bar":o,u=n.mobileHeaderClassName,d=void 0===u?".reportal-header":u;this.iframeEl=document.querySelector(a),this.desktopHeaderEl=document.querySelector(l),this.mobileHeaderEl=document.querySelector(d),this.currentHeader=null,this.isIntegrationMode&&(this.swapHeaderAndIframe(),this.headerScrollerInst=this.makeHeaderRespondToIframeScroll()),this.handleBreakpointMatch=this.handleBreakpointMatch.bind(this),this.sidenav=new s.default,this.mediaQuery=new c.default({query:"max-width:"+t+"px"},this.handleBreakpointMatch,this)}return a(e,[{key:"swapHeaderAndIframe",value:function(){document.querySelector(".body-wrapper").classList.add("integration-mode")}},{key:"handleBreakpointMatch",value:function(e){e?(this.swapHeader(this.mobileHeaderEl),this.sidenav.addEventListeners()):(this.swapHeader(this.desktopHeaderEl),this.sidenav.removeEventListeners())}},{key:"makeHeaderRespondToIframeScroll",value:function(){var e=this;return new Promise(function(t){e.isIframeURLEmpty?e.iframeEl.addEventListener("load",function(n){return t(e.makeHeaderScrollable(n.target.contentWindow))}):t(e.makeHeaderScrollable(e.iframeEl.contentWindow))})}},{key:"makeHeaderScrollable",value:function(e){return this.currentHeader&&new d.default(e,this.currentHeader)}},{key:"swapHeader",value:function(e){this.currentHeader=e,this.iframeEl&&this.headerScrollerInst&&this.headerScrollerInst.then(function(t){return t.header=e})}},{key:"isIntegrationMode",get:function(){return!!this.iframeEl}},{key:"isIframeURLEmpty",get:function(){return"about:blank"===this.iframeEl.contentWindow.location.href}}]),e}();t.default=h,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,i){n(this,e),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame,this._meta={topOffset:null,ticking:!1,offsetHeight:null,header:null,lastScrollY:0,contentWindow:t},this.header=i,this._scrollCallback=this._scrollCallback.bind(this),this.attachListeners()}return i(e,[{key:"_resetHeader",value:function(){var e=this.header;e.classList.remove("scrollable-header"),e.style.top=""}},{key:"_configureHeader",value:function(){var e=this.header;e.classList.add("scrollable-header"),e.style.top=this._meta.topOffset}},{key:"_setHeaderOffsetInIframe",value:function(){var e=this._meta.contentWindow.document.querySelector("body");e.style.paddingTop=this._meta.offsetHeight+"px"}},{key:"requestTick",value:function(e){this._meta.ticking||(requestAnimationFrame(e),this._meta.ticking=!0)}},{key:"attachListeners",value:function(){this._meta.contentWindow.addEventListener("scroll",this._scrollFixed.bind(this),!1)}},{key:"detachListeners",value:function(){this._meta.contentWindow.removeEventListener("scroll",this._scrollFixed)}},{key:"_scrollFixed",value:function(){this._meta.lastScrollY=this._meta.contentWindow.pageYOffset,this.requestTick(this._scrollCallback)}},{key:"_scrollCallback",value:function(){var e=this._meta.lastScrollY;this.header.style.top=-e+"px",this._meta.ticking=!1}},{key:"header",get:function(){return this._meta.header},set:function(e){null!=this.header&&(this._meta.topOffset=this.headerTopOffset,this._resetHeader()),this._meta.header=e,this._meta.offsetHeight=e.offsetHeight,this._configureHeader(),this._setHeaderOffsetInIframe()}},{key:"headerTopOffset",get:function(){return this.header.style.top}}]),e}();t.default=r,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){if(n(this,e),!t)throw new Error("Missing required argument. new Detabinator needs an element reference");this._inert=!1,this._focusableElementsString="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]",this._focusableElements=[].slice.call(t.querySelectorAll(this._focusableElementsString))}return i(e,[{key:"inert",get:function(){return this._inert},set:function(e){this._inert!==e&&(this._inert=e,this._focusableElements.forEach(function(t){if(e)t.hasAttribute("tabindex")&&(t.__savedTabindex=t.tabIndex),t.setAttribute("tabindex",-1);else{if(0===t.__savedTabindex||t.__savedTabindex)return t.setAttribute("tabindex",t.__savedTabindex);t.removeAttribute("tabindex")}}))}}]),e}();t.default=r,e.exports=t.default},function(e,t){"use strict";function n(e,t){try{var n=new Reportal.TAhierarchy({source:e,hierarchy:categorySymptomHierarchy,rowheaders:t,search:{enabled:!0},clearLinks:!1,sorting:{enabled:!0},floatingHeader:{enabled:!1}})}catch(e){}return n}function i(){if(catSympTableHeaders)for(var e=document.querySelectorAll("table.reportal-hierarchy-table"),t=0;t<catSympTableHeaders.length;t++)n(e[t],catSympTableHeaders[t]);for(var i=document.querySelectorAll(".material-card--content .reportal-hierarchy-table:first-child tr td.sortable:last-child"),t=0;t<i.length;t++)i[t].click()}function r(e,t){for(var n=document.querySelectorAll(".material-card"),i=0;i<n.length;i++)n[i].onclick=function(n){var i=n.target;if(i.className.indexOf("reportal-row-label")>-1){var r=null!=i.querySelector("span")?i.querySelector("span").textContent:"",a=i.textContent.replace(r,""),o=this.querySelector(".material-card--title").textContent;a.length>0&&o.length>0&&(document.querySelector(e+" input").value=o+"^"+a,document.querySelector(t+" input").click())}}}function a(){for(var e=document.querySelector("#mn_hitlist .yui3-datatable-table .yui3-datatable-data"),t=e.querySelectorAll(".yui3-datatable-col-Notes"),n=e.querySelectorAll(".yui3-datatable-col-Project"),i=e.querySelectorAll(".yui3-datatable-col-issue"),r=e.querySelectorAll(".yui3-datatable-col-Category"),a={},o={},s=0;s<i.length;s++)a[i[s].innerHTML+";"+n[s].innerHTML]=t[s].innerHTML,o[r[s].innerHTML+";"+n[s].innerHTML]=null;for(var l=document.querySelectorAll(".material-card"),c=0;c<l.length;c++)if(l[c].querySelector(".reportal-hierarchy-table"))for(var u=l[c].querySelector(".material-card--title").innerHTML,d=l[c].querySelectorAll("tbody tr td:first-child span"),s=0;s<d.length;s++){var h=d[s].innerText+";"+u;if(a.hasOwnProperty(h)){var f=document.createElement("span");f.className="mnContent",f.innerHTML=a[h],d[s].parentNode.appendChild(f),d[s].className+=" thumbnail",delete a[h]}o.hasOwnProperty(h)&&d[s].className.indexOf("hasSymptomsWithNotes")<0&&(d[s].className+=" hasSymptomsWithNotes")}}function o(){for(var e=document.querySelectorAll(".material-card--content"),t=0;t<e.length;t++)""==e[t].innerHTML&&(e[t].parentElement.style.display="none");i(),r("#MiddleLevel_drilldownProjectInput","#MiddleLevel_drilldownSubmitBtn"),Y.Global.on("hitlistloaded",a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},function(e,t){}])});
//# sourceMappingURL=media-report.bundle.js.map