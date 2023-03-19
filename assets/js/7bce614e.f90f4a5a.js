"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Password forgotten (reset)",description:"How to restore the default settings if you have forgotten the password of your Deauther.",sidebar_position:60},i=void 0,s={unversionedId:"usage/reset",id:"usage/reset",title:"Password forgotten (reset)",description:"How to restore the default settings if you have forgotten the password of your Deauther.",source:"@site/docs/usage/reset.md",sourceDirName:"usage",slug:"/usage/reset",permalink:"/docs/usage/reset",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/usage/reset.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Password forgotten (reset)",description:"How to restore the default settings if you have forgotten the password of your Deauther.",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Serial Commands",permalink:"/docs/usage/serial-commands"},next:{title:"FAQ",permalink:"/docs/faq"}},l={},u=[{value:"Reset via Serial.Huhn.me",id:"reset-via-serialhuhnme",level:2},{value:"Reset via Huhnitor",id:"reset-via-huhnitor",level:2},{value:"Reset via Arduino IDE",id:"reset-via-arduino-ide",level:2},{value:"Reset using Reset Sketch",id:"reset-using-reset-sketch",level:2}],h={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are multiple ways to reset. You can send it a reset command via the USB serial connection - or you can override the firmware and settings by flashing it again."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It's sufficient to choose ",(0,a.kt)("strong",{parentName:"p"},"one "),"reset method. You don't need to follow each one. If you're unsure which path to pick, simply choose the first or whichever sounds more familiar/easier to you.")),(0,a.kt)("h2",{id:"reset-via-serialhuhnme"},"Reset via Serial.Huhn.me"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serial.huhn.me"},"Serial.huhn.me")," is our online serial terminal. You don't need to install anything. You only need a compatible browser. Learn more in our ",(0,a.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/serial-terminal"},"blog post"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",{parentName:"li",href:"https://serial.huhn.me"},"serial.huhn.me")," with Chrome, Edge, or Opera for desktop. (Other browsers are not supported at the moment)"),(0,a.kt)("li",{parentName:"ol"},"Click Connect"),(0,a.kt)("li",{parentName:"ol"},"Plugin your ESP8266 board"),(0,a.kt)("li",{parentName:"ol"},"Select the port that pops up in the list and click connect"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," and press enter"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," and press enter ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connecting to and resetting Deauther using serial.huhn.me",src:r(1468).Z,width:"800",height:"528"})),(0,a.kt)("h2",{id:"reset-via-huhnitor"},"Reset via Huhnitor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://huhnitor.com"},"Huhnitor")," is a cross-platform Rust-based serial monitor that runs in a terminal. It's made for interfacing with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SpacehuhnTech/esp8266_deauther/tree/v3"},"Deauther V3")," easier through the USB serial command line, but you can also use it with any other version of the Deauther."),(0,a.kt)("p",null,"We already have an ",(0,a.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/huhnitor-installation/"},"Huhnitor Installation Tutorial")," that you can check out.\nBut for Windows users, installing is as easy as downloading a .exe file from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SpacehuhnTech/Huhnitor/releases/tag/1.1.2"},"the project's GitHub")," and opening it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start Huhnitor"),(0,a.kt)("li",{parentName:"ol"},"Plugin your ESP8266 Deauther. It should automatically detect and connect to it via USB serial."),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," and press enter"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," and press enter ")),(0,a.kt)("p",null,"Done \ud83c\udf89"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Animated GIF showing how to reset Deauther via Huhnitor",src:r(2490).Z,width:"1341",height:"724"})),(0,a.kt)("h2",{id:"reset-via-arduino-ide"},"Reset via Arduino IDE"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")," is a popular tool among makers. You might have already used it to flash the Deauther firmware onto an ESP8266."),(0,a.kt)("p",null,"Here's what you have to do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Arduino IDE"),(0,a.kt)("li",{parentName:"ol"},"Plugin your Deauther"),(0,a.kt)("li",{parentName:"ol"},"Select the COM port of your Deauther at ",(0,a.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Port")),(0,a.kt)("li",{parentName:"ol"},"Open the Serial Monitor at ",(0,a.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Serial Monitor")),(0,a.kt)("li",{parentName:"ol"},"At the bottom of the Serial Monitor window, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Newline")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"115200 baud")),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," and press enter"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," and press enter ")),(0,a.kt)("p",null,"Done \ud83c\udf89"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Animated GIF showing how to reset Deauther via Arduino IDE",src:r(3892).Z,width:"1302",height:"942"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Another way to reset all settings is by flashing the firmware again. This option is great for anyone who wants to update and reset their Deauther simultaneously. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/diy/installation-arduino"},"Installation (Arduino IDE)"))),(0,a.kt)("p",null,"Done \ud83c\udf89"),(0,a.kt)("h2",{id:"reset-using-reset-sketch"},"Reset using Reset Sketch"),(0,a.kt)("p",null,"If nothing else works, there is also a reset sketch we made to erase the memory of the ESP8266.\nYou have to flash this sketch just like you would install the Deauther."),(0,a.kt)("p",null,"Reset sketch Arduino file & .bin files: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SpacehuhnTech/esp8266_deauther/tree/v2/Reset_Sketch"},"https://github.com/SpacehuhnTech/esp8266_deauther/tree/v2/Reset_Sketch")),(0,a.kt)("p",null,"Keep in mind that the reset sketch also overrides the ESP8266 Deauther firmware. So you will need to install it again afterward."))}d.isMDXComponent=!0},3892:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/arduinoreset-801be129ad0c49937b7db0b5871c1c36.gif"},2490:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/huhnitorreset-855edcd4404e9338c0d718d93ba28617.gif"},1468:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reset-da4694017d149d59e28d7455e40812ec.gif"}}]);