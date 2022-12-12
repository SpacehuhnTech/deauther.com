"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[535],{2997:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>h,metadata:()=>m,toc:()=>k});var r=o(7462),a=o(7294),n=o(3905),i=o(4392),s=o(2370);const c=[{alt:"The Verge",src:"/img/logos/theverge.svg",url:"https://www.theverge.com/23412661/deauther-watch-wifi-hacking-chip-network-deauthorization-secure-oled"},{alt:"Hackaday",src:"/img/logos/hackaday.png",url:"https://hackaday.com/2019/04/04/pocket-sized-deauther-could-definitely-get-you-in-trouble/"},{alt:"Wonder How To",src:"/img/logos/wonderhowto.png",url:"https://null-byte.wonderhowto.com/how-to/scan-fake-attack-wi-fi-networks-with-esp8266-based-wifi-deauther-0193837/"},{alt:"ct",src:"/img/logos/ct.svg",url:"https://www.heise.de/ct/artikel/WLAN-ausknipsen-mit-dem-WiFi-Deauther-3811861.html"},{alt:"golem",src:"/img/logos/golem.svg",url:"https://www.golem.de/news/wlan-kameras-ausgeknipst-wer-hat-die-winkekatze-geklaut-1910-144199-2.html"},{alt:"NotebookCheck",src:"/img/logos/notebookcheck.svg",url:"https://www.notebookcheck.net/Deauther-Watch-V3-A-smartwatch-aimed-at-hackers-and-penetration-testers.521535.0.html"}];function u(e){let{alt:t,src:o,url:r}=e;return a.createElement(s.ZP,{item:!0,xs:6,sm:4,md:3,sx:{textAlign:"center"}},a.createElement("a",{href:r,target:"_blank",style:{marginBottom:"-.5rem"}},a.createElement("img",{src:o,alt:t,style:{maxHeight:"5rem"}})))}function l(){return a.createElement(s.ZP,{container:!0,spacing:1,direction:"row",justifyContent:"center",alignItems:"center",sx:{background:"#222",borderRadius:".5rem"}},c.map(((e,t)=>a.createElement(u,(0,r.Z)({key:t},e)))))}const h={title:"About",description:"ESP8266 Deauther. Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!",sidebar_position:10},d="ESP8266 Deauther",m={unversionedId:"about",id:"about",title:"About",description:"ESP8266 Deauther. Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/about.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"About",description:"ESP8266 Deauther. Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!",sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"How it works",permalink:"/docs/howitworks"}},p={},k=[{value:"Featured On",id:"featured-on",level:2},{value:"About this Project",id:"about-this-project",level:2}],g={toc:k};function b(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"esp8266-deauther"},"ESP8266 Deauther"),(0,n.kt)("img",{src:"/img/logo.png",alt:"Deauther Logo",width:"200"}),(0,n.kt)("p",null,"Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!"),(0,n.kt)(i.Z,{variant:"contained",color:"success",href:"buy",sx:{mr:.5,mb:.5},mdxType:"Button"},"Buy Now"),(0,n.kt)(i.Z,{variant:"contained",color:"primary",href:"diy/installation-bin",sx:{mr:.5,mb:.5},mdxType:"Button"},"Installation"),(0,n.kt)(i.Z,{variant:"contained",color:"primary",href:"download",sx:{mr:.5,mb:.5},mdxType:"Button"},"Download"),(0,n.kt)(i.Z,{variant:"contained",color:"primary",href:"https://github.com/spacehuhntech/esp8266_deauther",target:"_blank",sx:{mr:.5,mb:.5},mdxType:"Button"},"Github"),(0,n.kt)("h2",{id:"featured-on"},"Featured On"),(0,n.kt)(l,{mdxType:"AboutFeatures"}),(0,n.kt)("br",null),(0,n.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),(0,n.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=watch&count=true&size=large&v=2",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),(0,n.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=fork&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),(0,n.kt)("h2",{id:"about-this-project"},"About this Project"),(0,n.kt)("p",null,"This firmware allows you to easily perform a variety of actions to test 802.11 networks using an ",(0,n.kt)("a",{parentName:"p",href:"https://www.espressif.com/en/products/socs/esp8266"},"ESP8266"),". It's also a great project for learning about WiFi, microcontrollers, Arduino, hacking and electronics/programming in general.  "),(0,n.kt)("p",null,"The deauthentication attack is the main feature, which can be used to disconnect devices from their WiFi network.",(0,n.kt)("br",{parentName:"p"}),"\n","Although this denial-of-service attack is nothing new, a lot of devices are still vulnerable to it. Luckily this is slowly changing with more WiFi 6 enabled devices being used. But a lot of outdated WiFi devices remain in place, for example in cheap IoT hardware.\nWith an ESP8266 Deauther, you can easily test this attack on your 2.4GHz WiFi network/devices and see whether it's successful or not. And if it is, you know you should upgrade your network."),(0,n.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This project is a proof of concept for testing and educational purposes.",(0,n.kt)("br",{parentName:"p"}),"\n","Neither the ESP8266, nor its SDK was meant or built for such purposes. ",(0,n.kt)("strong",{parentName:"p"},"Bugs can occur!"),"  "),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Use it only against your own networks and devices!"),(0,n.kt)("br",{parentName:"p"}),"\n","Please check the legal regulations in your country before using it.",(0,n.kt)("br",{parentName:"p"}),"\n","We don't take any responsibility for what you do with this program.  ")))}b.isMDXComponent=!0}}]);