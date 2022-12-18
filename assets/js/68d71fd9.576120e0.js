"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(a),p=r,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Display Interface",description:"How to navigate the display UI of the Deauther V2.",sidebar_position:20},s=void 0,o={unversionedId:"usage/display",id:"usage/display",title:"Display Interface",description:"How to navigate the display UI of the Deauther V2.",source:"@site/docs/usage/display.md",sourceDirName:"usage",slug:"/usage/display",permalink:"/docs/usage/display",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/usage/display.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Display Interface",description:"How to navigate the display UI of the Deauther V2.",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Web Interface",permalink:"/docs/usage/web"},next:{title:"Serial Interface",permalink:"/docs/usage/serial"}},c={},l=[{value:"Scan",id:"scan",level:2},{value:"Select",id:"select",level:2},{value:"Attack",id:"attack",level:2},{value:"Packet Monitor",id:"packet-monitor",level:2},{value:"Clock",id:"clock",level:2}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unlike the serial and web interface, this requires a Deauther with OLED display. "),(0,r.kt)("p",null,"It uses a 128x64 pixel monochrome OLED display. These small and affordable displays are great for tinkering with electronics. Learn more about building your own Deauther OLED ",(0,r.kt)("a",{parentName:"p",href:"/docs/diy/display-setup"},"here"),"."),(0,r.kt)("p",null,"At startup, the Deauther scans for nearby networks. Give it a couple of seconds. The LED is blue while scanning and turns green once the scan is complete and the device is ready."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"I'm using the DSTIKE Deauther Watch here (get one at ",(0,r.kt)("a",{parentName:"p",href:"https://dstike.com/collections/all/deauther#MainContent"},"DSTIKE.com"),"). But other ",(0,r.kt)("a",{parentName:"p",href:"/docs/diy/supported-devices"},"supported hardware")," works too.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Turning on DSTIKE Deauther Watch",src:a(8265).Z,width:"400",height:"225"})),(0,r.kt)("p",null,"Navigation works by pressing the up, down, and select buttons. On the Deauther Watch, this is done with the 3-way switch on the side."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deauther-watch-buttons.gif",src:a(8822).Z,width:"400",height:"224"})),(0,r.kt)("h2",{id:"scan"},"Scan"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Scan Menu",src:a(3878).Z,width:"1920",height:"1079"})),(0,r.kt)("p",null,"In the scan menu, you can initiate 3 different types of scans. You can scan for nearby WiFi Access Points (APs), WiFi Client Stations (STs), or both."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther active Scan",src:a(9673).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Scanning for APs only takes a couple of seconds and will reveal all nearby networks. However, a station scan takes longer and can only find active clients while the scan is running. So it's not guaranteed that you will find a client device on the first try."),(0,r.kt)("h2",{id:"select"},"Select"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Select Menu",src:a(8789).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"The select menu is where you select your targets for an attack. So this is where you find the APs and Stations from the scan, but also SSIDs for a beacon attack or other saved devices under Names."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Select AP Menu",src:a(3049).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"One thing to keep in mind is that the display interface only allows you to use the essential functions of the Deauther. For example, to edit the SSIDs or Names,  you have to use the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/deauther-web-interface/"},"web interface")," or ",(0,r.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/deauther-serial-interface/"},"serial interface"),"."),(0,r.kt)("h2",{id:"attack"},"Attack"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Attack Menu",src:a(7423).Z,width:"1920",height:"1079"})),(0,r.kt)("p",null,"On the attack page, you start and stop different WiFi attacks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DEAUTH is the deauthentication attack that will disconnect all selected devices. "),(0,r.kt)("li",{parentName:"ul"},"BEACON is a beacon flooding attack"),(0,r.kt)("li",{parentName:"ul"},"PROBE is a probe request flooding attack")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther running an attack",src:a(8366).Z,width:"1920",height:"1079"})),(0,r.kt)("p",null,"You can see the packets per second being sent. Here it's sending slightly more than planned. This is on purpose. It's better to overshoot for one packet than to underdeliver. Depending on the selected targets, settings, and WiFi traffic around you, this number might be different for you."),(0,r.kt)("h2",{id:"packet-monitor"},"Packet Monitor"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Packet Monitor Menu",src:a(3826).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Here you see the WiFi traffic around you visualized. Switch channels with the up and down buttons. The number in the brackets indicates deauth packets, so you can check if an attack is active in your area."),(0,r.kt)("h2",{id:"clock"},"Clock"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Clock Menu",src:a(8222).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"The clock menu is a feature requested by many customers of the DSTIKE Deauther Watch. You can set a time and display it. It helps make it appear as a regular smartwatch. But only expect that fundamental functionality."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther running the clock feature",src:a(9499).Z,width:"1920",height:"1080"})))}d.isMDXComponent=!0},8265:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch1-0f4e7aec209c0abcd62083d2af87bfed.gif"},8222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch10-254d90edc0cdc76279e602c17f87b010.jpg"},9499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch11-6bdab3f6baaf0ade6cd7bbc5b1ae5e76.jpg"},8822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch2-0a4a23ba6cf9f0d0dceebaf36fce6737.gif"},3878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch3-2f19ee31527903611bd3a791259ba389.jpg"},9673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch4-002692651f4f5a0447871d88efca68bb.jpg"},8789:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch5-d9b07def06e936b4feb8c01d07e32341.jpg"},3049:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch6-8fccdf3575eb95009641180fb96d8aff.jpg"},7423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch7-d3f52901a850e5091adfbe83080e3dc6.jpg"},8366:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch8-9e9d85d32d1fc5fabdd5c48d81b76b66.jpg"},3826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watch9-91f4d2bb947b30dc73f903a13360aca8.jpg"}}]);