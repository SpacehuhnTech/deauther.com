"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[332],{6919:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),o=n(3366),i=n(7294);function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}const l=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a};var s=n(2030),d=n(6523),u=n(9707),p=n(9718),m=n(5893);const c=["className","component"];var h=n(7078),k=n(1265),f=n(606);const N=(0,k.Z)(),y=function(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:h}=e,k=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(d.Z);return i.forwardRef((function(e,i){const s=(0,p.Z)(n),d=(0,u.Z)(e),{className:f,component:N="div"}=d,y=(0,o.Z)(d,c);return(0,m.jsx)(k,(0,a.Z)({as:N,ref:i,className:l(f,h?h(r):r),theme:t&&s[t]||s},y))}))}({themeId:f.Z,defaultTheme:N,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),g=y},9707:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(3366),i=n(9766),r=n(4920);const l=["sx"],s=e=>{var t,n;const a={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:r.Z;return Object.keys(e).forEach((t=>{o[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a};function d(e){const{sx:t}=e,n=(0,o.Z)(e,l),{systemProps:r,otherProps:d}=s(n);let u;return u=Array.isArray(t)?[r,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,i.P)(n)?(0,a.Z)({},r,n):r}:(0,a.Z)({},r,t),(0,a.Z)({},d,{sx:u})}},4309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=n(6919),r=n(2843);const l={title:"Installation (Arduino IDE)",description:"How to compile the Deauther firmware using Arduino.",sidebar_position:30},s=void 0,d={unversionedId:"diy/installation-arduino",id:"diy/installation-arduino",title:"Installation (Arduino IDE)",description:"How to compile the Deauther firmware using Arduino.",source:"@site/docs/diy/installation-arduino.md",sourceDirName:"diy",slug:"/diy/installation-arduino",permalink:"/docs/diy/installation-arduino",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/diy/installation-arduino.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Installation (Arduino IDE)",description:"How to compile the Deauther firmware using Arduino.",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Installation (.bin)",permalink:"/docs/diy/installation-bin"},next:{title:"Display & Button Setup",permalink:"/docs/diy/display-setup"}},u={},p=[],m={toc:p},c="wrapper";function h(e){let{components:t,...l}=e;return(0,o.kt)(c,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're looking for a more straightforward installation method, follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/diy/installation-bin"},".bin file tutorial"),".")),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/NbRu9t7z3Ts",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)(i.Z,{my:2,mdxType:"Box"},(0,o.kt)(r.Z,{variant:"contained",sx:{mr:.5,mb:.5},target:"_blank",href:"https://github.com/SpacehuhnTech/esp8266_deauther/archive/v2.zip",mdxType:"Button"},"Download Deauther"),(0,o.kt)(r.Z,{variant:"contained",sx:{mr:.5,mb:.5},target:"_blank",href:"https://www.arduino.cc/en/software",mdxType:"Button"},"Download Arduino IDE")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extract the ESP8266 Deauther zip you ",(0,o.kt)("a",{parentName:"li",href:"/docs/download"},"downloaded")),(0,o.kt)("li",{parentName:"ol"},"Go into the ",(0,o.kt)("inlineCode",{parentName:"li"},"esp8266_deauther")," folder and open ",(0,o.kt)("inlineCode",{parentName:"li"},"esp8266_deauther.ino")," with Arduino IDE"),(0,o.kt)("li",{parentName:"ol"},"In Arduino IDE, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"File")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Preferences")," and add this URL to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Additional Boards Manager URLs"),":\n",(0,o.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/SpacehuhnTech/arduino/main/package_spacehuhn_index.json")),(0,o.kt)("li",{parentName:"ol"},"Now go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Board")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Boards Manager"),", search ",(0,o.kt)("inlineCode",{parentName:"li"},"deauther"),", and install ",(0,o.kt)("inlineCode",{parentName:"li"},"Deauther ESP8266 Boards")),(0,o.kt)("li",{parentName:"ol"},"Select your board at ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Board")," and be sure it is at ",(0,o.kt)("inlineCode",{parentName:"li"},"Deauther ESP8266 Boards")," (and ",(0,o.kt)("strong",{parentName:"li"},"not")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"ESP8266 Modules"),")!"),(0,o.kt)("li",{parentName:"ol"},"Plugin your Deauther and select its COM port at ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Port")),(0,o.kt)("li",{parentName:"ol"},"Optional: To reset/override previous settings select ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Erase Flash")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"All Flash Contents")),(0,o.kt)("li",{parentName:"ol"},"Press upload")),(0,o.kt)("p",null,"Done \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Animation showing how to reset Deauther by reflashing it via Arduino IDE",src:n(2037).Z,width:"1302",height:"942"})))}h.isMDXComponent=!0},2037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arduino-tutorial-6f94987d729b12ae3959e35256e46840.gif"}}]);