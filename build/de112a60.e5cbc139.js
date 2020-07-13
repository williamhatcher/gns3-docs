(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(9),i=(r(0),r(211)),a=r(213),s={id:"configure-gns3-to-use-an-additional-remote-server",title:"Configure GNS3 to use an additional remote server",sidebar_label:"Configure GNS3 to use an additional remote server"},u={id:"how-to-guides/configure-gns3-to-use-an-additional-remote-server",isDocsHomePage:!1,title:"Configure GNS3 to use an additional remote server",description:"Configure GNS3 to use an additional remote server",source:"@site/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server.md",permalink:"../docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server.md",sidebar_label:"Configure GNS3 to use an additional remote server",sidebar:"someSidebar",previous:{title:"How to use applications with the GNS3 Web interface",permalink:"../docs/how-to-guides/how-to-use-console-applications-with-the-web-ui"},next:{title:"Troubleshoot GNS3",permalink:"../docs/troubleshooting-faq/troubleshoot-gns3"}},c=[{value:"Configure GNS3 to use an additional remote server",id:"configure-gns3-to-use-an-additional-remote-server",children:[]}],l={rightToc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configure-gns3-to-use-an-additional-remote-server"},"Configure GNS3 to use an additional remote server"),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"Preferences > Remote")," servers add this server:\nAdd and apply."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/configure-gns3-to-use-an-additional-remote-server/1.jpg")}),Object(i.b)("p",null,"When you create a new VM, select Remote server in the wizard:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/configure-gns3-to-use-an-additional-remote-server/2.jpg")}))}d.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,g=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return r?o.a.createElement(g,s(s({ref:t},c),{},{components:r})):o.a.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},212:function(e,t,r){"use strict";var n=r(0),o=r(52);t.a=function(){return Object(n.useContext)(o.a)}},213:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(76);var n=r(212),o=r(214);function i(e,t){var r=void 0===t?{}:t,i=r.forcePrependBaseUrl,a=void 0!==i&&i,s=r.absolute,u=void 0!==s&&s,c=Object(n.a)().siteConfig,l=(c=void 0===c?{}:c).baseUrl,d=void 0===l?"/":l,f=c.url;if(!e)return e;if(a)return d+e;if(!Object(o.a)(e))return e;var p=d+e.replace(/^\//,"");return u?f+p:p}},214:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);