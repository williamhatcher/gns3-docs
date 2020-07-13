(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(9),a=(n(0),n(211)),r=n(213),l={id:"how-to-use-console-applications-with-the-web-ui",title:"How to use applications with the GNS3 Web interface",sidebar_label:"How to use applications with the GNS3 Web interface"},c={id:"how-to-guides/how-to-use-console-applications-with-the-web-ui",isDocsHomePage:!1,title:"How to use applications with the GNS3 Web interface",description:"A web client pack must be installed on your operating system in order to launch local applications needed to work with the GNS3 Web interface. We currently support Telnet, VNC, SPICE and packet capture applications.",source:"@site/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui.md",permalink:"../docs/how-to-guides/how-to-use-console-applications-with-the-web-ui",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui.md",sidebar_label:"How to use applications with the GNS3 Web interface",sidebar:"someSidebar",previous:{title:"Importing vMX and vQFX into GNS3",permalink:"../docs/how-to-guides/importing-vmx-and-vqfx-into-gns3"},next:{title:"Configure GNS3 to use an additional remote server",permalink:"../docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server"}},s=[{value:"Installation on Windows",id:"installation-on-windows",children:[]},{value:"Installation on macOS",id:"installation-on-macos",children:[]},{value:"Installation on Linux",id:"installation-on-linux",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A web client pack must be installed on your operating system in order to launch local applications needed to work with the GNS3 Web interface. We currently support Telnet, VNC, SPICE and packet capture applications."),Object(a.b)("p",null,"Please remember to run the GNS3 Web interface with Chrome or Firefox. Also, please note the Web client is currently in Beta version and still needs some polishing. For example packet capture will not work with a GNS3 server that requires authentication (this will be fixed in a future release)."),Object(a.b)("p",null,"Additionally, we have plans for an HTML5 console support so native consoles won\u2019t be required."),Object(a.b)("h3",{id:"installation-on-windows"},"Installation on Windows"),Object(a.b)("p",null,"Make sure the GNS3 WebClient option is ticked when installing GNS3 then follow the installation process. Protocol handlers are registered during the installation."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/how-to-guides/how-to-use-console-applications-with-the-web-ui/1.jpg")}),Object(a.b)("h3",{id:"installation-on-macos"},"Installation on macOS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GNS3/gns3-webclient-pack/releases/download/v1.0.0b2/GNS3.WebClient.pack-1.0.0b2.dmg"}),"WebClient pack from here")),Object(a.b)("li",{parentName:"ol"},"Drag and drop the app from the DMG into /Applications. Start the app at least once to register the protocol handlers.")),Object(a.b)("h3",{id:"installation-on-linux"},"Installation on Linux"),Object(a.b)("p",null,"Please ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-webclient-pack/blob/master/README.md"}),"read this document to install on Linux")," (via PPA, PyPi or manually). Use the \u201cgns3-webclient-config\u201d command to start from a terminal."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"The WebClient has 2 executables. The webclient configurator to edit settings like the console software paths and the webclient launcher that actually launches applications based on the clicked URL in the GNS3 web interface. Different protocol handlers are registered to open the webclient launcher during the WebClient installation."),Object(a.b)("p",null,"The first step is to configure your application paths or leave by default."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/how-to-guides/how-to-use-console-applications-with-the-web-ui/2.jpg")}),Object(a.b)("p",null,"Then launch the Web Ui, start a node, right click on it and select \u201cconsole\u201d. Alternatively, just right click on a link and select \u201cStart capture\u201d to start a packet capture and start Wireshark."),Object(a.b)("p",null,"Choose \u201cOpen GNS3 WebClient launcher\u201d to start your application when using Google Chrome web browser."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/how-to-guides/how-to-use-console-applications-with-the-web-ui/3.jpg")}),Object(a.b)("p",null,"On Firefox web browser, select the GNS3 WebClient launcher and tick \u201cRemember my choice for gns3+telnet links\u201d then click on \u201cOpen link\u201d. You won\u2019t have to do this again the next time."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/how-to-guides/how-to-use-console-applications-with-the-web-ui/4.jpg")}))}p.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(r,".").concat(h)]||p[h]||b[h]||a;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var o=n(0),i=n(52);t.a=function(){return Object(o.useContext)(i.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var o=n(212),i=n(214);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,r=void 0!==a&&a,l=n.absolute,c=void 0!==l&&l,s=Object(o.a)().siteConfig,u=(s=void 0===s?{}:s).baseUrl,p=void 0===u?"/":u,b=s.url;if(!e)return e;if(r)return p+e;if(!Object(i.a)(e))return e;var h=p+e.replace(/^\//,"");return c?b+h:h}},214:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);