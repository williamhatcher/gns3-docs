(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(2),r=o(9),i=(o(0),o(211)),a={id:"how-to-debug-web-ui-guide",title:"How to debug Web UI Guide",sidebar_label:"How to debug Web UI Guide"},l={id:"contribute/how-to-debug-web-ui-guide",isDocsHomePage:!1,title:"How to debug Web UI Guide",description:"Using the GNS3 API",source:"@site/docs/contribute/how-to-debug-web-ui-guide.md",permalink:"../docs/contribute/how-to-debug-web-ui-guide",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/contribute/how-to-debug-web-ui-guide.md",sidebar_label:"How to debug Web UI Guide",sidebar:"someSidebar",previous:{title:"Development of GNS3",permalink:"../docs/contribute/development-of-gns3"},next:{title:"Cisco ASA",permalink:"../docs/how-to-guides/cisco-asa"}},c=[{value:"Using the GNS3 API",id:"using-the-gns3-api",children:[]},{value:"How to start with GNS3 Web UI",id:"how-to-start-with-gns3-web-ui",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"Linux &amp; Windows &amp; Mac OS",id:"linux--windows--mac-os",children:[]}]},{value:"Testing",id:"testing",children:[{value:"Linux &amp; Windows &amp; Mac OS",id:"linux--windows--mac-os-1",children:[]}]},{value:"Reporting Bugs",id:"reporting-bugs",children:[{value:"Google Chrome",id:"google-chrome",children:[]},{value:"Mozilla Firefox",id:"mozilla-firefox",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-the-gns3-api"},"Using the GNS3 API"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://api.gns3.net/en/latest/"}),"http://api.gns3.net/en/latest/")),Object(i.b)("h2",{id:"how-to-start-with-gns3-web-ui"},"How to start with GNS3 Web UI"),Object(i.b)("p",null,"You have two options: installing the latest GNS3 with GNS3 Webclient Pack (it\u2019s needed to run console for particular node) or to setup development environment if you want to contribute."),Object(i.b)("p",null,"If you want to create development environment you should install latest node.js and yarn:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://yarnpkg.com/lang/en/"}),"https://yarnpkg.com/lang/en/"))),Object(i.b)("p",null,"then clone following projects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/GNS3/gns3-web-ui.git\n")),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("h3",{id:"linux--windows--mac-os"},"Linux & Windows & Mac OS"),Object(i.b)("p",null,"Go to proper folder and open console then type following command:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn install")," to install and update dependencies"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn ng serve")," to run application (then navigate to proper port in web browser), keep the terminal open and all the changes you made will be applied without delay")),Object(i.b)("p",null,"If you want to build an application type ",Object(i.b)("inlineCode",{parentName:"p"},"yarn ng build")," command."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("h3",{id:"linux--windows--mac-os-1"},"Linux & Windows & Mac OS"),Object(i.b)("p",null,"Run unit tests to make sure that changes you made won\u2019t break any functionalities, type ",Object(i.b)("inlineCode",{parentName:"p"},"yarn ng test"),"."),Object(i.b)("h2",{id:"reporting-bugs"},"Reporting Bugs"),Object(i.b)("p",null,"For debugging purposes you can put console.log with proper message in any place of the code. Message will be printed after the function invocation.The you should open the console in the browser."),Object(i.b)("h3",{id:"google-chrome"},"Google Chrome"),Object(i.b)("p",null,"Please read the following links to get information about developers tools provided by Chrome browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/console"}),"https://developers.google.com/web/tools/chrome-devtools/console"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/console/javascript"}),"https://developers.google.com/web/tools/chrome-devtools/console/javascript"))),Object(i.b)("h3",{id:"mozilla-firefox"},"Mozilla Firefox"),Object(i.b)("p",null,"Please read the following links to get information about developers tools provided by Firefox browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Tools"}),"https://developer.mozilla.org/en-US/docs/Tools")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox"}),"https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox"))),Object(i.b)("p",null,"You can report bugs on this site ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-web-ui/issues"}),"https://github.com/GNS3/gns3-web-ui/issues")," by clicking the new issue button and write proper description (add screenshot if you can)."))}b.isMDXComponent=!0},211:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return g}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(o),d=n,g=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return o?r.a.createElement(g,l(l({ref:t},s),{},{components:o})):r.a.createElement(g,l({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);