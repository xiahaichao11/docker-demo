(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"/AXN":function(e,t,n){e.exports={tagCloud:"tagCloud___35SA0"}},"0NbB":function(e,t,n){"use strict";var a=n("q1tI"),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},r=i,o=n("6VBw"),s=function(e,t){return a["createElement"](o["a"],Object.assign({},e,{ref:t,icon:r}))};s.displayName="CaretDownOutlined";t["a"]=a["forwardRef"](s)},"0V05":function(e,t,n){e.exports={chartCard:"chartCard___3TM4T",chartTop:"chartTop___3iur-",chartTopMargin:"chartTopMargin___24rCR",chartTopHasMargin:"chartTopHasMargin___3AQNY",metaWrap:"metaWrap___3Nuv1",avatar:"avatar___FoC4K",meta:"meta___1_3lt",action:"action___3uuUN",total:"total___D6PP7",content:"content___yyFJS",contentFixed:"contentFixed___3tZUw",footer:"footer___2Huhb",footerMargin:"footerMargin___38Y2F"}},"1Gbu":function(e,t,n){!function(t,a){e.exports=a(n("q1tI"))}(0,(function(e){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var a in e)0>t.indexOf(a)&&Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(e.onChange!==t.onChange)return!0;for(var n=0;g.length>n;n+=1){var a=g[n];if(!window.G2.Util.isEqual(e[a],t[a]))return!0}return!1}var c=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h=function(){function e(e,t){for(var n=0;t.length>n;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(2),u=a(d),p=n(1),f=a(p),m=n(3),v=a(m),g=["width","height","padding","xAis","yAxis","start","end","fillerStyle","backgroundStyle","scales","textStyle","handleStyle","backgroundChart"],y=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.refHandle=function(t){e.container||(e.container=t)},e.reBuild=!1,e}return s(t,e),h(t,[{key:"componentDidMount",value:function(){this.createG2Instance().render()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.data,a=i(t,["data"]),r=e.data,o=i(e,["data"]);n!==r&&(this.slider.changeData(r),this.slider.repaint()),l(a,o)&&(this.reBuild=!0)}},{key:"componentDidUpdate",value:function(){this.reBuild&&(this.slider.destroy(),this.createG2Instance().render(),this.reBuild=!1)}},{key:"componentWillUnmount",value:function(){this.slider.destroy()}},{key:"createG2Instance",value:function(){return this.slider=new u.default(c({container:this.container},this.props))}},{key:"render",value:function(){return f.default.createElement("div",{ref:this.refHandle})}}]),t}(p.Component);t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"render",value:function(){return f.default.createElement(v.default,null,f.default.createElement(y,this.props))}}]),t}(p.Component),e.exports=t.default},function(t,n){t.exports=e},function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){var a=n(1);window&&!window.G2&&console.err("Please load the G2 script first!"),e.exports=a},function(e,t,n){var a=n(2),i=window&&window.G2,r=i.Chart,o=i.Util,s=i.G,l=i.Global,c=s.Canvas,h=o.DomUtil,d=function(e){return"number"==typeof e};e.exports=function(){function e(e){this._initProps(),o.deepMix(this,e);var t=this.container;if(!t)throw Error("Please specify the container for the Slider!");this.domContainer=o.isString(t)?document.getElementById(t):t,this.handleStyle=o.mix({width:this.height,height:this.height},this.handleStyle),"auto"===this.width&&window.addEventListener("resize",o.wrapBehavior(this,"_initForceFitEvent"))}var t=e.prototype;return t._initProps=function(){this.height=26,this.width="auto",this.padding=l.plotCfg.padding,this.container=null,this.xAxis=null,this.yAxis=null,this.fillerStyle={fill:"#BDCCED",fillOpacity:.3},this.backgroundStyle={stroke:"#CCD6EC",fill:"#CCD6EC",fillOpacity:.3,lineWidth:1},this.range=[0,100],this.layout="horizontal",this.textStyle={fill:"#545454"},this.handleStyle={img:"https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png",width:5},this.backgroundChart={type:["area"],color:"#CCD6EC"}},t._initForceFitEvent=function(){var e=setTimeout(o.wrapBehavior(this,"forceFit"),200);clearTimeout(this.resizeTimer),this.resizeTimer=e},t.forceFit=function(){if(this&&!this.destroyed){var e=h.getWidth(this.domContainer),t=this.height;if(e!==this.domWidth){var n=this.canvas;n.changeSize(e,t),this.bgChart&&this.bgChart.changeWidth(e),n.clear(),this._initWidth(),this._initSlider(),this._bindEvent(),n.draw()}}},t._initWidth=function(){var e;e="auto"===this.width?h.getWidth(this.domContainer):this.width,this.domWidth=e;var t=o.toAllPadding(this.padding);"horizontal"===this.layout?(this.plotWidth=e-t[1]-t[3],this.plotPadding=t[3],this.plotHeight=this.height):"vertical"===this.layout&&(this.plotWidth=this.width,this.plotHeight=this.height-t[0]-t[2],this.plotPadding=t[0])},t.render=function(){this._initWidth(),this._initCanvas(),this._initBackground(),this._initSlider(),this._bindEvent(),this.canvas.draw()},t.changeData=function(e){this.data=e,this.repaint()},t.destroy=function(){clearTimeout(this.resizeTimer),this.rangeElement.off("sliderchange"),this.bgChart&&this.bgChart.destroy(),this.canvas.destroy();for(var e=this.domContainer;e.hasChildNodes();)e.removeChild(e.firstChild);window.removeEventListener("resize",o.getWrapBehavior(this,"_initForceFitEvent")),this.destroyed=!0},t.clear=function(){this.canvas.clear(),this.bgChart&&this.bgChart.destroy(),this.bgChart=null,this.scale=null,this.canvas.draw()},t.repaint=function(){this.clear(),this.render()},t._initCanvas=function(){var e=this.domWidth,t=this.height,n=new c({width:e,height:t,containerDOM:this.domContainer,capture:!1}),a=n.get("el");a.style.position="absolute",a.style.top=0,a.style.left=0,a.style.zIndex=3,this.canvas=n},t._initBackground=function(){var e,t=this.data,n=this.xAxis,a=this.yAxis,i=o.deepMix((e={},e[""+n]={range:[0,1]},e),this.scales);if(!t)throw Error("Please specify the data!");if(!n)throw Error("Please specify the xAxis!");if(!a)throw Error("Please specify the yAxis!");var s=this.backgroundChart,l=s.type,c=s.color;o.isArray(l)||(l=[l]);var h=o.toAllPadding(this.padding),d=new r({container:this.container,width:this.domWidth,height:this.height,padding:[0,h[1],0,h[3]],animate:!1});d.source(t),d.scale(i),d.axis(!1),d.tooltip(!1),d.legend(!1),o.each(l,(function(e){d[e]().position(n+"*"+a).color(c).opacity(1)})),d.render(),this.bgChart=d,this.scale="horizontal"===this.layout?d.getXScale():d.getYScales()[0],"vertical"===this.layout&&d.destroy()},t._initRange=function(){var e=this.startRadio,t=this.endRadio,n=this.start,a=this.end,i=this.scale,r=0,o=1;d(e)?r=e:n&&(r=i.scale(i.translate(n))),d(t)?o=t:a&&(o=i.scale(i.translate(a)));var s=this.minSpan,l=this.maxSpan,c=0;if("time"===i.type||"timeCat"===i.type){var h=i.values;c=h[h.length-1]-h[0]}else i.isLinear&&(c=i.max-i.min);c&&s&&(this.minRange=s/c*100),c&&l&&(this.maxRange=l/c*100);var u=[100*r,100*o];return this.range=u,u},t._getHandleValue=function(e){var t=this.range,n=t[0]/100,a=t[1]/100,i=this.scale;return"min"===e?this.start?this.start:i.invert(n):this.end?this.end:i.invert(a)},t._initSlider=function(){var e=this.canvas,t=this._initRange(),n=this.scale,i=e.addGroup(a,{middleAttr:this.fillerStyle,range:t,minRange:this.minRange,maxRange:this.maxRange,layout:this.layout,width:this.plotWidth,height:this.plotHeight,backgroundStyle:this.backgroundStyle,textStyle:this.textStyle,handleStyle:this.handleStyle,minText:n.getText(this._getHandleValue("min")),maxText:n.getText(this._getHandleValue("max"))});"horizontal"===this.layout?i.translate(this.plotPadding,0):"vertical"===this.layout&&i.translate(0,this.plotPadding),this.rangeElement=i},t._bindEvent=function(){var e=this;e.rangeElement.on("sliderchange",(function(t){var n=t.range;e._updateElement(n[0]/100,n[1]/100)}))},t._updateElement=function(e,t){var n=this.scale,a=this.rangeElement,i=a.get("minTextElement"),r=a.get("maxTextElement"),o=n.invert(e),s=n.invert(t),l=n.getText(o),c=n.getText(s);i.attr("text",l),r.attr("text",c),this.start=l,this.end=c,this.onChange&&this.onChange({startText:l,endText:c,startValue:o,endValue:s,startRadio:e,endRadio:t})},e}()},function(e,t){function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var a=window&&window.G2,i=a.Util,r=a.G,o=r.Group,s=i.DomUtil;e.exports=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var a=t.prototype;return a.getDefaultCfg=function(){return{range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null}},a._initHandle=function(e){var t,n,a,r=this.addGroup(),o=this.get("layout"),s=this.get("handleStyle"),l=s.img,c=s.width,h=s.height;if("horizontal"===o){var d=s.width;a="ew-resize",n=r.addShape("Image",{attrs:{x:-d/2,y:0,width:d,height:h,img:l,cursor:a}}),t=r.addShape("Text",{attrs:i.mix({x:"min"===e?-(d/2+5):d/2+5,y:h/2,textAlign:"min"===e?"end":"start",textBaseline:"middle",text:this.get("min"===e?"minText":"maxText"),cursor:a},this.get("textStyle"))})}else a="ns-resize",n=r.addShape("Image",{attrs:{x:0,y:-h/2,width:c,height:h,img:l,cursor:a}}),t=r.addShape("Text",{attrs:i.mix({x:c/2,y:"min"===e?h/2+5:-(h/2+5),textAlign:"center",textBaseline:"middle",text:this.get("min"===e?"minText":"maxText"),cursor:a},this.get("textStyle"))});return this.set(e+"TextElement",t),this.set(e+"IconElement",n),r},a._initSliderBackground=function(){var e=this.addGroup();return e.initTransform(),e.translate(0,0),e.addShape("Rect",{attrs:i.mix({x:0,y:0,width:this.get("width"),height:this.get("height")},this.get("backgroundStyle"))}),e},a._beforeRenderUI=function(){var e=this._initSliderBackground(),t=this._initHandle("min"),n=this._initHandle("max"),a=this.addShape("rect",{attrs:this.get("middleAttr")});this.set("middleHandleElement",a),this.set("minHandleElement",t),this.set("maxHandleElement",n),this.set("backgroundElement",e),e.set("zIndex",0),a.set("zIndex",1),t.set("zIndex",2),n.set("zIndex",2),a.attr("cursor","move"),this.sort()},a._renderUI=function(){"horizontal"===this.get("layout")?this._renderHorizontal():this._renderVertical()},a._transform=function(e){var t=this.get("range"),n=t[0]/100,a=t[1]/100,i=this.get("width"),r=this.get("height"),o=this.get("minHandleElement"),s=this.get("maxHandleElement"),l=this.get("middleHandleElement");o.resetMatrix?(o.resetMatrix(),s.resetMatrix()):(o.initTransform(),s.initTransform()),"horizontal"===e?(l.attr({x:i*n,y:0,width:(a-n)*i,height:r}),o.translate(n*i,0),s.translate(a*i,0)):(l.attr({x:0,y:r*(1-a),width:i,height:(a-n)*r}),o.translate(0,(1-n)*r),s.translate(0,(1-a)*r))},a._renderHorizontal=function(){this._transform("horizontal")},a._renderVertical=function(){this._transform("vertical")},a._bindUI=function(){this.on("mousedown",i.wrapBehavior(this,"_onMouseDown"))},a._isElement=function(e,t){var n=this.get(t);return e===n||!!n.isGroup&&n.get("children").indexOf(e)>-1},a._getRange=function(e,t){var n=e+t;return n=n>100?100:n,0>n?0:n},a._limitRange=function(e,t,n){n[0]=this._getRange(e,n[0]),(n[1]=n[0]+t)>100&&(n[1]=100,n[0]=n[1]-t)},a._updateStatus=function(e,t){var n=this.get("x"===e?"width":"height");e=i.upperFirst(e);var a,r=this.get("range"),o=this.get("page"+e),s=this.get("currentTarget"),l=this.get("rangeStash"),c=this.get("layout"),h="vertical"===c?-1:1,d=t["page"+e],u=d-o,p=u/n*100*h,f=this.get("minRange"),m=this.get("maxRange");r[1]>r[0]?(this._isElement(s,"minHandleElement")&&(r[0]=this._getRange(p,r[0]),f&&(r[1]-r[0]>f||this._limitRange(p,f,r)),m&&(m>r[1]-r[0]||this._limitRange(p,m,r))),this._isElement(s,"maxHandleElement")&&(r[1]=this._getRange(p,r[1]),f&&(r[1]-r[0]>f||this._limitRange(p,f,r)),m&&(m>r[1]-r[0]||this._limitRange(p,m,r)))):(this._isElement(s,"minHandleElement")||this._isElement(s,"maxHandleElement"))&&(r[0]=this._getRange(p,r[0]),r[1]=this._getRange(p,r[0])),this._isElement(s,"middleHandleElement")&&(a=l[1]-l[0],this._limitRange(p,a,r)),this.emit("sliderchange",{range:r}),this.set("page"+e,d),this._renderUI(),this.get("canvas").draw()},a._onMouseDown=function(e){var t=e.currentTarget,n=e.event,a=this.get("range");n.stopPropagation(),n.preventDefault(),this.set("pageX",n.pageX),this.set("pageY",n.pageY),this.set("currentTarget",t),this.set("rangeStash",[a[0],a[1]]),this._bindCanvasEvents()},a._bindCanvasEvents=function(){var e=this.get("canvas").get("containerDOM");this.onMouseMoveListener=s.addEventListener(e,"mousemove",i.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=s.addEventListener(e,"mouseup",i.wrapBehavior(this,"_onCanvasMouseUp")),this.onMouseLeaveListener=s.addEventListener(e,"mouseleave",i.wrapBehavior(this,"_onCanvasMouseUp"))},a._onCanvasMouseMove=function(e){"horizontal"===this.get("layout")?this._updateStatus("x",e):this._updateStatus("y",e)},a._onCanvasMouseUp=function(){this._removeDocumentEvents()},a._removeDocumentEvents=function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.onMouseLeaveListener.remove()},t}(o)}])}))},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;t.length>n;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasError:!1},n}return r(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"unstable_handleError",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",null,"Slider error."):this.props.children}}]),t}(l.default.Component)},function(e,t,n){n(0),e.exports=n(0)}])}))},BASP:function(e,t,n){e.exports={field:"field___2ZfpN",label:"label___1hOvq",number:"number___2qklC"}},cMGq:function(e,t,n){e.exports={miniChart:"miniChart___132EF",chartContent:"chartContent___2bnF8",chartLoading:"chartLoading___1MB4M"}},ek7X:function(e,t,n){"use strict";var a=n("q1tI"),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"},r=i,o=n("6VBw"),s=function(e,t){return a["createElement"](o["a"],Object.assign({},e,{ref:t,icon:r}))};s.displayName="CaretUpOutlined";t["a"]=a["forwardRef"](s)},erxF:function(e,t,n){e.exports={timelineChart:"timelineChart___3TShV"}},fu5r:function(e,t,n){e.exports={pie:"pie___100kF",chart:"chart___3VSQ_",hasLegend:"hasLegend___1f2RE",legend:"legend___1fksY",dot:"dot___1yQVs",line:"line___30HIM",legendTitle:"legendTitle___3I_bd",percent:"percent___2pnFx",value:"value___WdIUL",title:"title___3-ziG",total:"total___2NcRJ",legendBlock:"legendBlock___K32fb"}},iZvO:function(e,t,n){e.exports={miniProgress:"miniProgress___3yUqh",progressWrap:"progressWrap___30TXc",progress:"progress___1zvIk",target:"target___3JhFm"}},tGrY:function(e,t,n){e.exports={waterWave:"waterWave___3-6x_",text:"text___dvEDG",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___2uNIJ"}},ucLW:function(e,t,n){"use strict";n.d(t,"i",(function(){return Ee})),n.d(t,"a",(function(){return E})),n.d(t,"g",(function(){return oe})),n.d(t,"e",(function(){return V})),n.d(t,"d",(function(){return U})),n.d(t,"f",(function(){return Z})),n.d(t,"b",(function(){return F})),n.d(t,"c",(function(){return L})),n.d(t,"h",(function(){return ye}));var a=n("ZhIB"),i=n.n(a),r=n("fWQN"),o=n("mtLc"),s=n("yKVA"),l=n("879j"),c=n("yP6+"),h=n("q1tI"),d=n.n(h),u=n("9/5/"),p=n.n(u),f=n("0Owb");function m(e){var t=e.style;t.height="100%";var n=parseInt("".concat(getComputedStyle(e).height),10),a=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return n-a}function v(e){if(!e)return 0;var t=e,n=m(t),a=t.parentNode;return a&&(n=m(a)),n}function g(){return function(e){var t=function(t){Object(s["a"])(a,t);var n=Object(l["a"])(a);function a(){var e;Object(r["a"])(this,a);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return e=n.call.apply(n,[this].concat(i)),e.state={computedHeight:0},e.root=void 0,e.handleRoot=function(t){e.root=t},e}return Object(o["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e){var t=v(this.root);this.setState({computedHeight:t}),t<1&&(t=v(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,n=this.state.computedHeight,a=t||n;return d.a.createElement("div",{ref:this.handleRoot},a>0&&d.a.createElement(e,Object(f["a"])({},this.props,{height:a})))}}]),a}(d.a.Component);return t}}var y=g,_=n("cMGq"),x=n.n(_),b=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(r["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.state={autoHideXLabels:!1},e.root=void 0,e.node=void 0,e.resize=p()((function(){if(e.node&&e.node.parentNode){var t=e.node.parentNode.clientWidth,n=e.props,a=n.data,i=void 0===a?[]:a,r=n.autoLabel,o=void 0===r||r;if(o){var s=30*i.length,l=e.state.autoHideXLabels;t<=s?l||e.setState({autoHideXLabels:!0}):l&&e.setState({autoHideXLabels:!1})}}}),500),e.handleRoot=function(t){e.root=t},e.handleRef=function(t){e.node=t},e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.height,n=void 0===t?1:t,a=e.title,i=e.forceFit,r=void 0===i||i,o=e.data,s=e.color,l=void 0===s?"rgba(24, 144, 255, 0.85)":s,h=e.padding,u=this.state.autoHideXLabels,p={x:{type:"cat"},y:{min:0}},f=["x*y",function(e,t){return{name:e,value:t}}];return d.a.createElement("div",{className:x.a.chart,style:{height:n},ref:this.handleRoot},d.a.createElement("div",{ref:this.handleRef},a&&d.a.createElement("h4",{style:{marginBottom:20}},a),d.a.createElement(c["Chart"],{scale:p,height:a?n-41:n,forceFit:r,data:o,padding:h||"auto"},d.a.createElement(c["Axis"],{name:"x",title:!1,label:u?void 0:{},tickLine:u?void 0:{}}),d.a.createElement(c["Axis"],{name:"y",min:0}),d.a.createElement(c["Tooltip"],{showTitle:!1,crosshairs:!1}),d.a.createElement(c["Geom"],{type:"interval",position:"x*y",color:l,tooltip:f}))))}}]),n}(h["Component"]),E=y()(b),w=(n("IzEo"),n("bx4M")),C=n("PpiC"),k=n("jrin"),S=n("TSYQ"),O=n.n(S),T=n("0V05"),M=n.n(T),j=function(e){if(!e&&0!==e)return null;var t;switch(typeof e){case"undefined":t=null;break;case"function":t=d.a.createElement("div",{className:M.a.total},e());break;default:t=d.a.createElement("div",{className:M.a.total},e)}return t},z=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(r["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.renderContent=function(){var t=e.props,n=t.contentHeight,a=t.title,i=t.avatar,r=t.action,o=t.total,s=t.footer,l=t.children,c=t.loading;return!c&&d.a.createElement("div",{className:M.a.chartCard},d.a.createElement("div",{className:O()(M.a.chartTop,Object(k["a"])({},M.a.chartTopMargin,!l&&!s))},d.a.createElement("div",{className:M.a.avatar},i),d.a.createElement("div",{className:M.a.metaWrap},d.a.createElement("div",{className:M.a.meta},d.a.createElement("span",{className:M.a.title},a),d.a.createElement("span",{className:M.a.action},r)),j(o))),l&&d.a.createElement("div",{className:M.a.content,style:{height:n||"auto"}},d.a.createElement("div",{className:n&&M.a.contentFixed},l)),s&&d.a.createElement("div",{className:O()(M.a.footer,Object(k["a"])({},M.a.footerMargin,!l))},s))},e}return Object(o["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.loading,n=void 0!==t&&t,a=(e.contentHeight,e.title,e.avatar,e.action,e.total,e.footer,e.children,Object(C["a"])(e,["loading","contentHeight","title","avatar","action","total","footer","children"]));return d.a.createElement(w["a"],Object(f["a"])({loading:n,bodyStyle:{padding:"20px 24px 8px 24px"}},a),this.renderContent())}}]),n}(d.a.Component),F=z,N=n("BASP"),A=n.n(N),R=function(e){var t=e.label,n=e.value,a=Object(C["a"])(e,["label","value"]);return d.a.createElement("div",Object(f["a"])({className:A.a.field},a),d.a.createElement("span",{className:A.a.label},t),d.a.createElement("span",{className:A.a.number},n))},L=R,W=c["Guide"].Arc,P=c["Guide"].Html,H=c["Guide"].Line,D=function(e){switch(e){case"2":return"\u5dee";case"4":return"\u4e2d";case"6":return"\u826f";case"8":return"\u4f18";default:return""}};c["Shape"].registerShape&&c["Shape"].registerShape("point","pointer",{drawShape:function(e,t){var n=e.points[0];n=this.parsePoint(n);var a=this.parsePoint({x:0,y:0});return t.addShape("line",{attrs:{x1:a.x,y1:a.y,x2:n.x,y2:n.y,stroke:e.color,lineWidth:2,lineCap:"round"}}),t.addShape("circle",{attrs:{x:a.x,y:a.y,r:6,stroke:e.color,lineWidth:3,fill:"#fff"}})}});var G=function(e){var t=e.title,n=e.height,a=void 0===n?1:n,i=e.percent,r=e.forceFit,o=void 0===r||r,s=e.formatter,l=void 0===s?D:s,h=e.color,u=void 0===h?"#2F9CFF":h,p=e.bgColor,f=void 0===p?"#F0F2F5":p,m={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},v=[{value:i/10}],g=function(){return'\n    <div style="width: 300px;text-align: center;font-size: 12px!important;">\n      <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">'.concat(t,'</div>\n      <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">\n        ').concat((10*v[0].value).toFixed(2),"%\n      </div>\n    </div>")},y={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return d.a.createElement(c["Chart"],{height:a,data:v,scale:m,padding:[-16,0,16,0],forceFit:o},d.a.createElement(c["Coord"],{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),d.a.createElement(c["Axis"],{name:"1",line:void 0}),d.a.createElement(c["Axis"],{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:l,textStyle:y}}),d.a.createElement(c["Guide"],null,d.a.createElement(H,{start:[3,.905],end:[3,.85],lineStyle:{stroke:u,lineDash:void 0,lineWidth:2}}),d.a.createElement(H,{start:[5,.905],end:[5,.85],lineStyle:{stroke:u,lineDash:void 0,lineWidth:3}}),d.a.createElement(H,{start:[7,.905],end:[7,.85],lineStyle:{stroke:u,lineDash:void 0,lineWidth:3}}),d.a.createElement(W,{start:[0,.965],end:[10,.965],style:{stroke:f,lineWidth:10}}),d.a.createElement(W,{start:[0,.965],end:[v[0].value,.965],style:{stroke:u,lineWidth:10}}),d.a.createElement(P,{position:["50%","95%"],html:g()})),d.a.createElement(c["Geom"],{line:!1,type:"point",position:"value*1",shape:"pointer",color:u,active:!1}))},I=(y()(G),n("k1fw")),B=function(e){var t=e.height,n=void 0===t?1:t,a=e.data,i=void 0===a?[]:a,r=e.forceFit,o=void 0===r||r,s=e.color,l=void 0===s?"rgba(24, 144, 255, 0.2)":s,h=e.borderColor,u=void 0===h?"#1089ff":h,p=e.scale,m=void 0===p?{x:{},y:{}}:p,v=e.borderWidth,g=void 0===v?2:v,y=e.line,_=e.xAxis,b=e.yAxis,E=e.animate,w=void 0===E||E,C=[36,5,30,5],k={x:Object(I["a"])({type:"cat",range:[0,1]},m.x),y:Object(I["a"])({min:0},m.y)},S=["x*y",function(e,t){return{name:e,value:t}}],O=n+54;return d.a.createElement("div",{className:x.a.miniChart,style:{height:n}},d.a.createElement("div",{className:x.a.chartContent},n>0&&d.a.createElement(c["Chart"],{animate:w,scale:k,height:O,forceFit:o,data:i,padding:C},d.a.createElement(c["Axis"],Object(f["a"])({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},_)),d.a.createElement(c["Axis"],Object(f["a"])({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},b)),d.a.createElement(c["Tooltip"],{showTitle:!1,crosshairs:!1}),d.a.createElement(c["Geom"],{type:"area",position:"x*y",color:l,tooltip:S,shape:"smooth",style:{fillOpacity:1}}),y?d.a.createElement(c["Geom"],{type:"line",position:"x*y",shape:"smooth",color:u,size:g,tooltip:!1}):d.a.createElement("span",{style:{display:"none"}}))))},U=y()(B),q=function(e){var t=e.height,n=void 0===t?0:t,a=e.forceFit,i=void 0===a||a,r=e.color,o=void 0===r?"#1890FF":r,s=e.data,l=void 0===s?[]:s,h={x:{type:"cat"},y:{min:0}},u=[36,5,30,5],p=["x*y",function(e,t){return{name:e,value:t}}],f=n+54;return d.a.createElement("div",{className:x.a.miniChart,style:{height:n}},d.a.createElement("div",{className:x.a.chartContent},d.a.createElement(c["Chart"],{scale:h,height:f,forceFit:i,data:l,padding:u},d.a.createElement(c["Tooltip"],{showTitle:!1,crosshairs:!1}),d.a.createElement(c["Geom"],{type:"interval",position:"x*y",color:o,tooltip:p}))))},V=y()(q),X=(n("5Dmo"),n("3S7+")),Y=n("iZvO"),J=n.n(Y),Q=function(e){var t=e.targetLabel,n=e.target,a=e.color,i=void 0===a?"rgb(19, 194, 194)":a,r=e.strokeWidth,o=e.percent;return d.a.createElement("div",{className:J.a.miniProgress},d.a.createElement(X["a"],{title:t},d.a.createElement("div",{className:J.a.target,style:{left:n?"".concat(n,"%"):void 0}},d.a.createElement("span",{style:{backgroundColor:i||void 0}}),d.a.createElement("span",{style:{backgroundColor:i||void 0}}))),d.a.createElement("div",{className:J.a.progressWrap},d.a.createElement("div",{className:J.a.progress,style:{backgroundColor:i||void 0,width:o?"".concat(o,"%"):void 0,height:r||void 0}})))},Z=Q,K=(n("/zsF"),n("PArb")),$=n("cQSq"),ee=n.n($),te=n("Jssm"),ne=n.n(te),ae=n("fu5r"),ie=n.n(ae),re=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(r["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.state={legendData:[],legendBlock:!1},e.requestRef=void 0,e.root=void 0,e.chart=void 0,e.resize=p()((function(){var t=e.props.hasLegend,n=e.state.legendBlock;t&&e.root?e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?n||e.setState({legendBlock:!0}):n&&e.setState({legendBlock:!1}):window.removeEventListener("resize",e.resize)}),400),e.getG2Instance=function(t){e.chart=t,requestAnimationFrame((function(){e.getLegendData(),e.resize()}))},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var n=t.get("dataArray")||[],a=n.map((function(e){var t=e[0]._origin;return t.color=e[0].color,t.checked=!0,t}));e.setState({legendData:a})}}},e.handleRoot=function(t){e.root=t},e.handleLegendClick=function(t,n){var a=t;a.checked=!a.checked;var i=e.state.legendData;i[n]=a;var r=i.filter((function(e){return e.checked})).map((function(e){return e.x}));e.chart&&e.chart.filter("x",(function(e){return r.indexOf("".concat(e))>-1})),e.setState({legendData:i})},e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.requestRef=requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var e,t,n=this,a=this.props,i=a.valueFormat,r=a.subTitle,o=a.total,s=a.hasLegend,l=void 0!==s&&s,h=a.className,u=a.style,p=a.height,f=void 0===p?0:p,m=a.forceFit,v=void 0===m||m,g=a.percent,y=a.color,_=a.inner,x=void 0===_?.75:_,b=a.animate,E=void 0===b||b,w=a.colors,C=a.lineWidth,S=void 0===C?1:C,T=this.state,M=T.legendData,j=T.legendBlock,z=O()(ie.a.pie,h,(e={},Object(k["a"])(e,ie.a.hasLegend,!!l),Object(k["a"])(e,ie.a.legendBlock,j),e)),F=this.props,N=F.data,A=F.selected,R=void 0===A||A,L=F.tooltip,W=void 0===L||L,P=N||[],H=R,D=W,G=w;P=P||[],H=H||!0,D=D||!0;var I={x:{type:"cat",range:[0,1]},y:{min:0}};(g||0===g)&&(H=!1,D=!1,t=function(e){return"\u5360\u6bd4"===e?y||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},P=[{x:"\u5360\u6bd4",y:parseFloat("".concat(g))},{x:"\u53cd\u6bd4",y:100-parseFloat("".concat(g))}]);var B=["x*percent",function(e,t){return{name:e,value:"".concat((100*t).toFixed(2),"%")}}],U=[12,0,12,0],q=new $["DataView"];return q.source(P).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),d.a.createElement("div",{ref:this.handleRoot,className:z,style:u},d.a.createElement(ne.a,{maxFontSize:25},d.a.createElement("div",{className:ie.a.chart},d.a.createElement(c["Chart"],{scale:I,height:f,forceFit:v,data:q,padding:U,animate:E,onGetG2Instance:this.getG2Instance},!!D&&d.a.createElement(c["Tooltip"],{showTitle:!1}),d.a.createElement(c["Coord"],{type:"theta",innerRadius:x}),d.a.createElement(c["Geom"],{style:{lineWidth:S,stroke:"#fff"},tooltip:D?B:void 0,type:"intervalStack",position:"percent",color:["x",g||0===g?t:G],selected:H})),(r||o)&&d.a.createElement("div",{className:ie.a.total},r&&d.a.createElement("h4",{className:"pie-sub-title"},r),o&&d.a.createElement("div",{className:"pie-stat"},"function"===typeof o?o():o)))),l&&d.a.createElement("ul",{className:ie.a.legend},M.map((function(e,t){return d.a.createElement("li",{key:e.x,onClick:function(){return n.handleLegendClick(e,t)}},d.a.createElement("span",{className:ie.a.dot,style:{backgroundColor:e.checked?e.color:"#aaa"}}),d.a.createElement("span",{className:ie.a.legendTitle},e.x),d.a.createElement(K["a"],{type:"vertical"}),d.a.createElement("span",{className:ie.a.percent},"".concat((Number.isNaN(e.percent)?0:100*e.percent).toFixed(2),"%")),d.a.createElement("span",{className:ie.a.value},i?i(e.y):e.y))}))))}}]),n}(h["Component"]),oe=y()(re),se=n("tJVT"),le=n("/AXN"),ce=n.n(le),he="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",de=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(r["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.state={dv:null,height:0,width:0},e.isUnmount=!1,e.requestRef=0,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame((function(){e.renderChart(e.props)}))},e.saveRootRef=function(t){e.root=t},e.initTagCloud=function(){function e(e){return Object(I["a"])(Object(I["a"])({},e.style),{},{fillOpacity:e.opacity,fontSize:e.origin._origin.size,rotate:e.origin._origin.rotate,text:e.origin._origin.text,textAlign:"center",fontFamily:e.origin._origin.font,fill:e.color,textBaseline:"Alphabetic"})}c["Shape"].registerShape("point","cloud",{drawShape:function(t,n){var a=e(t);return n.addShape("text",{attrs:Object(I["a"])(Object(I["a"])({},a),{},{x:t.x,y:t.y})})}})},e.renderChart=p()((function(t){var n=t||e.props,a=n.data,i=n.height;if(!(a.length<1)&&e.root){var r=i,o=e.root.offsetWidth,s=function(){var t=(new ee.a.View).source(a),n=t.range("value"),i=Object(se["a"])(n,2),s=i[0],l=i[1];t.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,r],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(e){var t=Math.pow((e.value-s)/(l-s),2);return 12.5*t+5}}),e.isUnmount||e.setState({dv:t,width:o,height:r})};e.imageMask?s():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=he,e.imageMask.onload=s)}}),500),e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame((function(){e.initTagCloud(),e.renderChart(e.props)})),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e&&JSON.stringify(e.data)!==JSON.stringify(t)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.height,a=this.state,i=a.dv,r=a.width,o=a.height;return d.a.createElement("div",{className:O()(ce.a.tagCloud,t),style:{width:"100%",height:n},ref:this.saveRootRef},i&&d.a.createElement(c["Chart"],{width:r,height:o,data:i,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},d.a.createElement(c["Tooltip"],{showTitle:!1}),d.a.createElement(c["Coord"],{reflect:"y"}),d.a.createElement(c["Geom"],{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(e,t){return{name:e,value:t}}]})))}}]),n}(h["Component"]),ue=(y()(de),n("oBTY")),pe=n("1Gbu"),fe=n.n(pe),me=n("erxF"),ve=n.n(me),ge=function(e){var t,n=e.title,a=e.height,i=void 0===a?400:a,r=e.padding,o=void 0===r?[60,20,40,40]:r,s=e.titleMap,l=void 0===s?{y1:"y1",y2:"y2"}:s,h=e.borderWidth,u=void 0===h?2:h,p=e.data,f=Array.isArray(p)?p:[{x:0,y1:0,y2:0}];f.sort((function(e,t){return e.x-t.x})),f[0]&&f[0].y1&&f[0].y2&&(t=Math.max(Object(ue["a"])(f).sort((function(e,t){return t.y1-e.y1}))[0].y1,Object(ue["a"])(f).sort((function(e,t){return t.y2-e.y2}))[0].y2));var m=new ee.a({state:{start:f[0].x,end:f[f.length-1].x}}),v=m.createView();v.source(f).transform({type:"filter",callback:function(e){var t=e.x;return t<=m.state.end&&t>=m.state.start}}).transform({type:"map",callback:function(e){var t=Object(I["a"])({},e);return t[l.y1]=e.y1,t[l.y2]=e.y2,t}}).transform({type:"fold",fields:[l.y1,l.y2],key:"key",value:"value"});var g={type:"time",tickInterval:36e5,mask:"HH:mm",range:[0,1]},y={x:g,value:{max:t,min:0}},_=function(){return d.a.createElement(fe.a,{padding:[0,o[1]+20,0,o[3]],width:"auto",height:26,xAxis:"x",yAxis:"y1",scales:{x:g},data:f,start:m.state.start,end:m.state.end,backgroundChart:{type:"line"},onChange:function(e){var t=e.startValue,n=e.endValue;m.setState("start",t),m.setState("end",n)}})};return d.a.createElement("div",{className:ve.a.timelineChart,style:{height:i+30}},d.a.createElement("div",null,n&&d.a.createElement("h4",null,n),d.a.createElement(c["Chart"],{height:i,padding:o,data:v,scale:y,forceFit:!0},d.a.createElement(c["Axis"],{name:"x"}),d.a.createElement(c["Tooltip"],null),d.a.createElement(c["Legend"],{name:"key",position:"top"}),d.a.createElement(c["Geom"],{type:"line",position:"x*value",size:u,color:"key"})),d.a.createElement("div",{style:{marginRight:-20}},d.a.createElement(_,null))))},ye=y()(ge),_e=n("tGrY"),xe=n.n(_e),be=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(r["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var t=e.props.height,n=void 0===t?1:t,a=e.root.parentNode,i=a.offsetWidth;e.setState({radio:i<n?i/n:1})}},e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.resize(),window.addEventListener("resize",(function(){requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.percent;e.percent!==t&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(e){var t=this.props,n=t.percent,a=t.color,i=void 0===a?"#1890FF":a,r=n/100,o=this;if(cancelAnimationFrame(this.timer),this.node&&(0===r||r)){var s=this.node,l=s.getContext("2d");if(l){var c=s.width,h=s.height,d=c/2,u=2,p=d-u;l.beginPath(),l.lineWidth=2*u;for(var f=c-u,m=f/8,v=.2,g=v,y=u,_=0,x=0,b=.005,E=[],w=d-u,C=-Math.PI/2,k=!0,S=C;S<C+2*Math.PI;S+=1/(8*Math.PI))E.push([d+w*Math.cos(S),d+w*Math.sin(S)]);var O=E.shift();l.strokeStyle=i,l.moveTo(O[0],O[1]),M()}}function T(){if(l){l.beginPath(),l.save();for(var e=[],t=y;t<=y+f;t+=20/f){var n=_+(y+t)/m,a=Math.sin(n)*g,r=t,o=2*p*(1-x)+(d-p)-m*a;l.lineTo(r,o),e.push([r,o])}var s=e.shift();l.lineTo(y+f,h),l.lineTo(y,h),l.lineTo(s[0],s[1]);var c=l.createLinearGradient(0,0,0,h);c.addColorStop(0,"#ffffff"),c.addColorStop(1,i),l.fillStyle=c,l.fill(),l.restore()}}function M(){if(l){if(l.clearRect(0,0,c,h),k&&"update"!==e)if(E.length){var t=E.shift();l.lineTo(t[0],t[1]),l.stroke()}else k=!1,l.lineTo(O[0],O[1]),l.stroke(),E=[],l.globalCompositeOperation="destination-over",l.beginPath(),l.lineWidth=u,l.arc(d,d,w,0,2*Math.PI,!0),l.beginPath(),l.save(),l.arc(d,d,d-3*u,0,2*Math.PI,!0),l.restore(),l.clip(),l.fillStyle=i;else{if(r>=.85){if(g>v/4){var n=.01*v;g-=n}}else if(r<=.1){if(g<1.5*v){var a=.01*v;g+=a}}else{if(g<=v){var s=.01*v;g+=s}if(g>=v){var p=.01*v;g-=p}}r-x>0&&(x+=b),r-x<0&&(x-=b),_+=.07,T()}o.timer=requestAnimationFrame(M)}}}},{key:"render",value:function(){var e=this,t=this.state.radio,n=this.props,a=n.percent,i=n.title,r=n.height,o=void 0===r?1:r;return d.a.createElement("div",{className:xe.a.waterWave,ref:function(t){return e.root=t},style:{transform:"scale(".concat(t,")")}},d.a.createElement("div",{style:{width:o,height:o,overflow:"hidden"}},d.a.createElement("canvas",{className:xe.a.waterWaveCanvasWrapper,ref:function(t){return e.node=t},width:2*o,height:2*o})),d.a.createElement("div",{className:xe.a.text,style:{width:o}},i&&d.a.createElement("span",null,i),d.a.createElement("h4",null,a,"%")))}}]),n}(h["Component"]),Ee=(y()(be),function(e){return"\xa5 ".concat(i()(e).format("0,0"))})}}]);