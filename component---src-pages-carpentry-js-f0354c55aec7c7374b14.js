(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,y=e.itemProp,I=e.loading,N=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,o.default)({opacity:T?1:0,transition:z?"opacity "+v+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,V={transitionDelay:v+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&V,{},s,{},f),D={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:y};if(p){var j=p,_=j[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),_.base64&&d.default.createElement(k,{src:_.base64,spreadProps:D,imageVariants:j,generateSources:w}),_.tracedSVG&&d.default.createElement(k,{src:_.tracedSVG,spreadProps:D,imageVariants:j,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(j),d.default.createElement(O,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:I,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:I},_,{imageVariants:j}))}}))}if(g){var x=g,P=x[0],q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},z&&V)}),P.base64&&d.default.createElement(k,{src:P.base64,spreadProps:D,imageVariants:x,generateSources:w}),P.tracedSVG&&d.default.createElement(k,{src:P.tracedSVG,spreadProps:D,imageVariants:x,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(x),d.default.createElement(O,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:I,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:I},P,{imageVariants:x}))}}))}return null},t}(d.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});T.propTypes={resolutions:z,sizes:M,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([M,c.default.arrayOf(M)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=T;t.default=R},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");a("Nxqp");var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement("button",{onMouseDown:this.props.handleMouseDown},"=")},r}(r.Component);a("iR9I");var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e="hide";return this.props.menuVisibility&&(e="show"),i.a.createElement("div",{id:"flyoutMenu",className:e},i.a.createElement("button",{className:"closeNav",onMouseDown:this.props.handleMouseDown},"-"),i.a.createElement("div",{className:"box"},i.a.createElement("ul",null,i.a.createElement("li",{className:"nav-link"},i.a.createElement(n.Link,{className:"nav-link",to:"/App"},"HOME")),i.a.createElement("li",{className:"nav-link"},i.a.createElement(n.Link,{className:"nav-link",to:"/about"},"ABOUT ME")),i.a.createElement("li",{className:"nav-link"},i.a.createElement(n.Link,{className:"nav-link",to:"/portfolio"},"PORTFOLIO")),i.a.createElement("li",{className:"nav-link"},i.a.createElement(n.Link,{className:"nav-link",to:"/skills"},"SKILLS")))))},r}(r.Component);a("9G8m");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function r(t,a){var r;return(r=e.call(this,t,a)||this).state={visible:!1},r.handleMouseDown=r.handleMouseDown.bind(o(r)),r.toggleMenu=r.toggleMenu.bind(o(r)),r}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var d=r.prototype;return d.toggleMenu=function(){this.setState({visible:!this.state.visible})},d.handleMouseDown=function(e){this.toggleMenu()},d.render=function(){return i.a.createElement("div",{className:"navigation-bar-container"},i.a.createElement(l,{handleMouseDown:this.handleMouseDown}),i.a.createElement(s,{handleMouseDown:this.handleMouseDown,menuVisibility:this.state.visible}),i.a.createElement("header",null,i.a.createElement("h1",{className:"logo"},i.a.createElement(n.Link,{className:"logoLink",to:"/App"},"SH"))))},r}(r.Component);t.a=function(e){return i.a.createElement("div",null,i.a.createElement(d,null),e.children)}},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),l=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},rxHT:function(e,t,a){"use strict";a.r(t),a.d(t,"imageQuery",(function(){return o})),a.d(t,"fluidImage",(function(){return d}));var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("9eSz"),s=a.n(l),o=(a("s1Cs"),"1417497036"),d="937877799";t.default=function(e){return i.a.createElement(n.a,null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{className:"carpentryTitle"},"Woodworking Projects"),i.a.createElement("div",{className:"carpentrySub"},"One piece of furniture for each year of university.")),i.a.createElement("div",{className:"aboutDiv"},i.a.createElement("h1",{id:"titles"},"About"),i.a.createElement("div",null,i.a.createElement("h2",null,"Starting before my freshman year at Loyola, I decided to put my woodworking skills to work during my summer break. Of course my freshman dorm was only big enough to fit one small side table, but as the years progressed, so did the size of my bedrooms. I wanted to make a bit of tradition out of it, so I continued to make one piece of furniture each summer and now I have an apartment full of my own hand-crafted decor. "))),i.a.createElement("div",{className:"titleDiv"},i.a.createElement("h1",{id:"titles"},"Coffee Table"),i.a.createElement("div",null,i.a.createElement("h2",null,"With a glass centered top, this dual-level coffee table will be the centerpiece of my living room for my senior year."))),i.a.createElement("div",{className:"imgGrid"},i.a.createElement(s.a,{fluid:e.data.coffeeOne.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.coffeeTwo.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.coffeeThree.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.coffeeFour.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.coffeeFive.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.coffeeSix.childImageSharp.fluid,className:"newImage"})),i.a.createElement("div",{className:"titleDiv"},i.a.createElement("h1",{id:"titles"},"Work Desk"),i.a.createElement("div",null,i.a.createElement("h2",null,"My junior year I moved into my first apartment and brought a desk big enough for my computer, speakers, and of course books"))),i.a.createElement("div",{className:"imgGrid"},i.a.createElement(s.a,{fluid:e.data.deskOne.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.deskTwo.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.deskThree.childImageSharp.fluid,className:"newImage"})),i.a.createElement("div",{className:"titleDiv"},i.a.createElement("h1",{id:"titles"},"Shoe Rack"),i.a.createElement("div",null,i.a.createElement("h2",null,"Using zipper jointed legs, this seven-shelved shoe rack holds all my shoes and doubles as a tie holder on its left side."))),i.a.createElement("div",{className:"imgGrid"},i.a.createElement(s.a,{fluid:e.data.shoeOne.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.shoeTwo.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.shoeThree.childImageSharp.fluid,className:"newImage"})),i.a.createElement("div",{className:"titleDiv"},i.a.createElement("h1",{id:"titles"},"Side Table"),i.a.createElement("div",null,i.a.createElement("h2",null,"This side table is a detachable set of piped legs supporting a crate on top."))),i.a.createElement("div",{className:"imgGrid"},i.a.createElement(s.a,{fluid:e.data.sideOne.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.sideTwo.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.sideThree.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.sideFour.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.sideFive.childImageSharp.fluid,className:"newImage"}),i.a.createElement(s.a,{fluid:e.data.sideSix.childImageSharp.fluid,className:"newImage"}))))}}}]);
//# sourceMappingURL=component---src-pages-carpentry-js-f0354c55aec7c7374b14.js.map