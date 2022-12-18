"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[909],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1950:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={title:"Installation (.bin)",description:"How to flash the Deauther firmware binary onto an ESP8266.",sidebar_position:20},i=void 0,l={unversionedId:"diy/installation-bin",id:"diy/installation-bin",title:"Installation (.bin)",description:"How to flash the Deauther firmware binary onto an ESP8266.",source:"@site/docs/diy/installation-bin.md",sourceDirName:"diy",slug:"/diy/installation-bin",permalink:"/docs/diy/installation-bin",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/diy/installation-bin.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Installation (.bin)",description:"How to flash the Deauther firmware binary onto an ESP8266.",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Supported Devices",permalink:"/docs/diy/supported-devices"},next:{title:"Installation (Arduino IDE)",permalink:"/docs/diy/installation-arduino"}},s={},p=[{value:"Finding the correct port",id:"finding-the-correct-port",level:2},{value:"Connection failed?",id:"connection-failed",level:2},{value:"Alternative Tools",id:"alternative-tools",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This installation method is the easiest. But if you're looking to modify the code, follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/diy/installation-arduino"},"Arduino IDE tutorial"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get a .bin file for your board from ",(0,n.kt)("a",{parentName:"li",href:"https://deauther.com/docs/download"},"deauther.com")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://esp.huhn.me"},"esp.huhn.me")," in Chrome, or another supported browser"),(0,n.kt)("li",{parentName:"ol"},"Connect your ESP8266 board via USB"),(0,n.kt)("li",{parentName:"ol"},"Click Connect and select the serial port of your ESP"),(0,n.kt)("li",{parentName:"ol"},"Select your Deauther .bin file"),(0,n.kt)("li",{parentName:"ol"},"Click Program")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Animated ESP Web Tool workflow GIF",src:o(1760).Z,width:"600",height:"338"})),(0,n.kt)("h2",{id:"finding-the-correct-port"},"Finding the correct port"),(0,n.kt)("p",null,"If you don't know which serial port to select, click connect on ",(0,n.kt)("a",{parentName:"p",href:"https://esp.huhn.me"},"esp.huhn.me")," and then plug in your board. Whatever port pops up in the list is what you're looking for."),(0,n.kt)("p",null,"You should check the cable and USB port if no new port pops up.\nSome USB cables are only for charging and cannot transmit data. "),(0,n.kt)("p",null,"Or maybe you're missing the drivers for your device:"),(0,n.kt)("p",null,"\ud83d\udd17 CH340/CH341 Drivers: ",(0,n.kt)("a",{parentName:"p",href:"http://www.wch-ic.com/downloads/CH341SER_ZIP.html"},"http://www.wch-ic.com/downloads/CH341SER_ZIP.html"),(0,n.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 CP210x Drivers: ",(0,n.kt)("a",{parentName:"p",href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"},"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"),(0,n.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 FTDI Drivers: ",(0,n.kt)("a",{parentName:"p",href:"https://ftdichip.com/drivers/"},"https://ftdichip.com/drivers/")),(0,n.kt)("h2",{id:"connection-failed"},"Connection failed?"),(0,n.kt)("p",null,"Make sure to set the baud rate to 115200 in the settings. Higher baud rates allow faster upload speeds but can also introduce connection issues."),(0,n.kt)("p",null,"If that doesn't help, check out this blog post about common ESP8266 and ESP32 errors: ",(0,n.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/espcomm/"},"https://blog.spacehuhn.com/espcomm/")),(0,n.kt)("p",null,"And if you run into other issues, try using a different flashing tool/method. "),(0,n.kt)("h2",{id:"alternative-tools"},"Alternative Tools"),(0,n.kt)("p",null,"My ESP web tool is not the only software you can use to flash your ESP8266: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/espressif/esptool"},"esptool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.espressif.com/en/support/download/other-tools"},"ESP flash download tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Rodmg/esptool-gui"},"esptool-gui"))),(0,n.kt)("p",null,"And if you're looking for something Deauther-specific, check out n2d: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/realmrvodka/n2d/"},"https://github.com/realmrvodka/n2d/")))}u.isMDXComponent=!0},1760:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/espwebtool-6d469715aba3e64ebbc8faebebd19168.gif"}}]);