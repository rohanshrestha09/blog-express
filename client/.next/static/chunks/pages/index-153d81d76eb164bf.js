(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,s=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,w=e.loading,_=e.lazyRoot,k=void 0===_?null:_,I=e.lazyBoundary,E=e.className,R=e.quality,L=e.width,O=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,D=void 0===W?"empty":W,B=e.blurDataURL,V=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(g.ImageConfigContext),U=u.useMemo((function(){var e=b||Z||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return o({},e,{allSizes:t,deviceSizes:n})}),[Z]),F=V,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var H=N;if("loader"in F){if(F.loader){var T=F.loader;H=function(e){e.config;var t=c(e,["config"]);return T(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var X=j(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(B=B||X.blurDataURL,J=X.src,(!G||"fill"!==G)&&(O=O||X.height,L=L||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}var Q=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,Q=!1);v.has(t)&&(Q=!1);x&&(s=!0);var K,Y=r(u.useState(!1),2),$=Y[0],ee=Y[1],te=r(m.useIntersection({rootRef:k,rootMargin:I||"200px",disabled:!Q}),3),ne=te[0],ie=te[1],re=te[2],ae=!Q||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},ue=S(L),de=S(O),fe=S(R);0;var me=Object.assign({},C,ce),ge="blur"!==D||$?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===G)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var pe=de/ue,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===G?(oe.display="block",oe.position="relative",se=!0,le.paddingTop=he):"intrinsic"===G?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",se=!0,le.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===G&&(oe.display="inline-block",oe.position="relative",oe.width=ue,oe.height=de)}else 0;var xe={src:y,srcSet:void 0,sizes:void 0};ae&&(xe=z({config:U,src:t,unoptimized:s,layout:G,width:ue,quality:fe,sizes:n,loader:H}));var be=t;0;var ve,ye="imagesrcset",we="imagesizes";ye="imageSrcSet",we="imageSizes";var je=(i(ve={},ye,xe.srcSet),i(ve,we,xe.sizes),ve),ze=u.default.useLayoutEffect,Se=u.useRef(M),Ne=u.useRef(t);u.useEffect((function(){Se.current=M}),[M]),ze((function(){Ne.current!==t&&(re(),Ne.current=t)}),[re,t]);var _e=o({isLazy:Q,imgAttributes:xe,heightInt:de,widthInt:ue,qualityInt:fe,layout:G,className:E,imgStyle:me,blurStyle:ge,loading:w,config:U,unoptimized:s,placeholder:D,loader:H,srcString:be,onLoadingCompleteRef:Se,setBlurComplete:ee,setIntersection:ne,isVisible:ae,noscriptSizes:n},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:oe},se?u.default.createElement("span",{style:le},K?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,u.default.createElement(A,Object.assign({},_e))),h?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+xe.src+xe.srcSet+xe.sizes,rel:"preload",as:"image",href:xe.srcSet?void 0:xe.src},je))):null)};var o=n(6495).Z,l=n(2648).Z,s=n(1598).Z,c=n(7273).Z,u=s(n(7294)),d=l(n(5443)),f=n(9309),m=n(7190),g=n(9977),p=(n(3794),n(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},x=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},v=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t.path).concat(k(n))),o=a.searchParams;o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,a(c));return{widths:o.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,s),d=u.widths,f=u.kind,m=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[m]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,i,r,a){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&a(!0),null==r?void 0:r.current)){var n=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:o})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,a=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,p=e.config,h=e.unoptimized,x=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,y=e.setIntersection,w=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),N=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=d?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},N,t,{decoding:"async","data-nimg":r,className:a,style:o({},l,s),ref:u.useCallback((function(e){y(e),(null==e?void 0:e.complete)&&_(e,g,0,f,b,v)}),[y,g,r,f,b,v]),onLoad:function(e){_(e.currentTarget,g,0,f,b,v),w&&w(e)},onError:function(e){"blur"===f&&v(!0),j&&j(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},N,z({config:p,src:g,unoptimized:h,layout:r,width:n,quality:i,sizes:S,loader:x}),{decoding:"async","data-nimg":r,style:l,className:a,loading:m}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!o,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],m=d[1],g=i(r.useState(null),2),p=g[0],h=g[1];r.useEffect((function(){if(o){if(u.current&&(u.current(),u.current=void 0),c||f)return;return p&&p.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},s.push(n),l.set(n,t),t}(n),r=i.id,a=i.observer,o=i.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(p,(function(e){return e&&m(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p,c,n,t,f]);var x=r.useCallback((function(){m(!1)}),[]);return[h,f,x]};var r=n(7294),a=n(9311),o="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(9008),a=n.n(r),o=n(5675),l=n.n(o);t.default=function(){return(0,i.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"flex w-full flex-1 flex-col items-center justify-center px-20 text-center",children:[(0,i.jsxs)("h1",{className:"text-6xl font-bold",children:["Welcome to"," ",(0,i.jsx)("a",{className:"text-blue-600",href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:"mt-3 text-2xl",children:["Get started by editing"," ",(0,i.jsx)("code",{className:"rounded-md bg-gray-100 p-3 font-mono text-lg",children:"pages/index.tsx"})]}),(0,i.jsxs)("div",{className:"mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full",children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Documentation \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Find in-depth information about Next.js features and its API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Learn \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Examples \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Deploy \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,i.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);