"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Web Interface",description:"Everything you need to know about the ESP8266 Deauther V2 Web Interface.",sidebar_position:10},i=void 0,s={unversionedId:"usage/web",id:"usage/web",title:"Web Interface",description:"Everything you need to know about the ESP8266 Deauther V2 Web Interface.",source:"@site/docs/usage/web.md",sourceDirName:"usage",slug:"/usage/web",permalink:"/docs/usage/web",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/usage/web.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Web Interface",description:"Everything you need to know about the ESP8266 Deauther V2 Web Interface.",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/category/usage"},next:{title:"Display Interface",permalink:"/docs/usage/display"}},c={},l=[{value:"Home / Warning Page",id:"home--warning-page",level:2},{value:"Scan Page",id:"scan-page",level:2},{value:"SSID Page",id:"ssid-page",level:2},{value:"Attack Page",id:"attack-page",level:2},{value:"Settings",id:"settings",level:2},{value:"Errors",id:"errors",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To access the web interface, your Deauther must be running, and you have to be connected to its WiFi network ",(0,r.kt)("inlineCode",{parentName:"p"},"pwnd")," using the password ",(0,r.kt)("inlineCode",{parentName:"p"},"deauther"),"."),(0,r.kt)("p",null,"Then open your browser and visit ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.4.1"},"192.168.4.1"),". Make sure you're not connected to a VPN or anything else that could get in the way. You have to temporarily disable the mobile connection on some phones to make it work. "),(0,r.kt)("p",null,"If you can't see a ",(0,r.kt)("inlineCode",{parentName:"p"},"pwned")," network, ensure ESP8266 Deauther firmware was successfully installed. We made a tutorial for that, which you can find ",(0,r.kt)("a",{parentName:"p",href:"/docs/diy/installation-bin"},"here"),"."),(0,r.kt)("h2",{id:"home--warning-page"},"Home / Warning Page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ESP8266 Deauther Home / Warning Page",src:n(3233).Z,width:"2556",height:"1035"})),(0,r.kt)("p",null,"The first thing you'll probably see when you open the web interface is a warning that you must confirm to continue."),(0,r.kt)("p",null,"We felt this was necessary when making it since many users would abuse our tool and spread misinformation about how it works. "),(0,r.kt)("h2",{id:"scan-page"},"Scan Page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Scan Page",src:n(521).Z,width:"2525",height:"1139"})),(0,r.kt)("p",null,"On the scan page, you can discover access points (WiFi networks) and stations (client devices) nearby. If the access point list is empty, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"SCAN APS"),"."),(0,r.kt)("p",null,"A scan takes a few seconds (usually 2 - 5 seconds). Depending on your board, you might see a LED turning on when starting the scan. As soon as the scan is finished, it turns off, signaling you to click on ",(0,r.kt)("inlineCode",{parentName:"p"},"RELOAD")," to see the scan results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Scan Page",src:n(8328).Z,width:"2052",height:"1007"})),(0,r.kt)("p",null,"Once you have a list of the access points, you can select them for an attack. But make sure only to select your own networks. Attacking other people's networks on purpose is strictly prohibited!"),(0,r.kt)("p",null,"You can select multiple targets, but it's recommended to select only a single one for stability and performance reasons."),(0,r.kt)("p",null,"You can also scan for stations to select a specific client rather than an entire network. While a station scan is running, the web interface will be unavailable. You have to wait until it's finished and then reconnect."),(0,r.kt)("h2",{id:"ssid-page"},"SSID Page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther SSID Page",src:n(392).Z,width:"2527",height:"1089"})),(0,r.kt)("p",null,"This is where you can add, edit and remove SSIDs. An SSID (Service Set Identifier) is the name of a WiFi network. They are used in beacon and probe attacks."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther SSID Page",src:n(9191).Z,width:"2523",height:"1000"})),(0,r.kt)("h2",{id:"attack-page"},"Attack Page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Attack Page",src:n(8557).Z,width:"2521",height:"923"})),(0,r.kt)("p",null,"On the attack page, you start and stop WiFi attacks such as Deauthentication, Beacon, and Probe."),(0,r.kt)("p",null,"You may lose connection to the web interface when initiating an attack, but if you only select one target, you may be able to reconnect to it without problems.\nAttacks stop after 5 minutes by default. This is intended behavior to prevent abuse."),(0,r.kt)("p",null,"The pkts/s info is not automatically refreshed to save resources. You have to manually click ",(0,r.kt)("inlineCode",{parentName:"p"},"RELOAD"),"."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deauther Settings Page",src:n(1291).Z,width:"2523",height:"1122"})),(0,r.kt)("p",null,"You can edit device settings here, such as the SSID and password of Deauther's network. But make sure to hit ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE")," after changing something and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"RELOAD")," to refresh the site and check whether or not your changes were applied."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"When using this tool, a thing to keep in mind is that the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacehuhntech/esp8266_deauther"},"ESP8266 Deauther")," project was a proof of concept that became a popular tool for beginners to learn about WiFi hacking. "),(0,r.kt)("p",null,"It's not a professional tool. It's free and open source. So please understand that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The web interface is sometimes unstable and creates errors."),(0,r.kt)("li",{parentName:"ul"},"You ",(0,r.kt)("strong",{parentName:"li"},"will")," lose connection to the Deauther when starting a scan or an attack."),(0,r.kt)("li",{parentName:"ul"},"The attacks are meant for testing. They are not guaranteed to work. Learn more ",(0,r.kt)("a",{parentName:"li",href:"https://blog.spacehuhn.com/deauth-attack-not-working/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"The amount of networks and devices you are able to pick up and attack is limited by a variety of external factors, including but not limited to the transmit power of such a small device and its antenna.")))}p.isMDXComponent=!0},8557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/attack-87686eb3a5088fffc93ac834765aec3e.jpg"},3233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-39e35982d596044fa0d1abe658c3c0cb.jpg"},521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-990653ea79d4c5a116e8fec295650a37.jpg"},8328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan2-b66189015d5425d3c9701de3b9f98d2a.jpg"},1291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings-9ab7f8b383706568f78feb6eafdcd0b2.jpg"},392:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ssid1-0accf03d80782e73f5bd963d324e1303.jpg"},9191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ssid2-5041ef114f06aa456e648f7bcfacfece.jpg"}}]);