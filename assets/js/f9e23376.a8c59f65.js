"use strict";(self.webpackChunkdeauther_com=self.webpackChunkdeauther_com||[]).push([[80],{2317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>z,contentTitle:()=>H,default:()=>F,frontMatter:()=>R,metadata:()=>U,toc:()=>L});var n=a(7462),r=a(7294),o=a(3905),i=a(2370),l=a(4392),s=a(3366),c=a(6010),u=a(9707),m=a(4780),d=a(7074),h=a(5959),p=a(6622),g=a(1588),E=a(4867);function _(e){return(0,E.Z)("MuiTypography",e)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=a(5893);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,p.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=r.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiTypography"}),r=(e=>x[e]||e)(a.color),o=(0,u.Z)((0,n.Z)({},a,{color:r})),{align:i="inherit",className:l,component:d,gutterBottom:g=!1,noWrap:E=!1,paragraph:Z=!1,variant:k="body1",variantMapping:w=f}=o,S=(0,s.Z)(o,y),$=(0,n.Z)({},o,{align:i,color:r,className:l,component:d,gutterBottom:g,noWrap:E,paragraph:Z,variant:k,variantMapping:w}),D=d||(Z?"p":w[k]||f[k])||"span",C=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:r,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",r&&"paragraph"]};return(0,m.Z)(l,_,i)})($);return(0,b.jsx)(v,(0,n.Z)({as:D,ref:t,ownerState:$,className:(0,c.Z)(C.root,l)},S))}));var k=a(2962),w=a(6523),S=a(1938);const $=["className","component"];var D=a(7078);const C=function(e={}){const{defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:o,styleFunctionSx:i=w.Z}=e,l=(0,k.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i);return r.forwardRef((function(e,r){const i=(0,S.Z)(t),m=(0,u.Z)(e),{className:d,component:h="div"}=m,p=(0,s.Z)(m,$);return(0,b.jsx)(l,(0,n.Z)({as:h,ref:r,className:(0,c.Z)(d,o?o(a):a),theme:i},p))}))}({defaultTheme:(0,a(9762).Z)(),defaultClassName:"MuiBox-root",generateClassName:D.Z.generate}),T=C;var M=a(2949);const I=e=>{const t="dark"===(0,M.I)().colorMode;return r.createElement(T,{sx:{background:t?"#333":"#eee",borderRadius:"4px"}},r.createElement(l.Z,{fullWidth:!0,variant:e.selected?"contained":"text",onClick:e.onClick,sx:{color:t?"#fff":"#000"}},r.createElement(Z,{variant:"h3",pt:2.5,pb:1.5},e.value)))},P=e=>{const[t,a]=r.useState(-1);return r.createElement(i.ZP,{container:!0,spacing:1},e.values.map((t=>r.createElement(i.ZP,{item:!0,key:t,xs:4},r.createElement(I,{value:t,selected:t==e.value,onClick:()=>e.changeValue(t)})))))},B="https://github.com/SpacehuhnTech/esp8266_deauther/releases/download/",A="2.6.1",N={source:{name:"Source Code (.zip)",url:"https://github.com/SpacehuhnTech/esp8266_deauther/archive/refs/heads/v2.zip"},dstike:[{name:"Mini Evo",url:`${B}/${A}/esp8266_deauther_${A}_DSTIKE_DEAUTHER_MINI_EVO.bin`},{name:"Monster",url:`${B}/${A}/esp8266_deauther_${A}_DSTIKE_DEAUTHER_MOSTER_V5.bin`},{name:"OLED",url:`${B}/${A}/esp8266_deauther_${A}_DSTIKE_DEAUTHER_OLED_V6.bin`},{name:"Watch",url:`${B}/${A}/esp8266_deauther_${A}_DSTIKE_DEAUTHER_WATCH_V2.bin`},{name:"USB Deauther",url:`${B}/${A}/esp8266_deauther_${A}_DSTIKE_USB_DEAUTHER_V2.bin`}],other:[{name:"D1 Mini",url:`${B}/${A}/esp8266_deauther_${A}_WEMOS_D1_MINI.bin`},{name:"NodeMCU",url:`${B}/${A}/esp8266_deauther_${A}_NODEMCU.bin`},{name:"Maltronics",url:`${B}/${A}/esp8266_deauther_${A}_MALTRONICS.bin`},{name:"Hackheld Vega",url:`${B}/${A}/esp8266_deauther_${A}_HACKHELD_VEGA.bin`},{name:"I2C Display Example",url:`${B}/${A}/esp8266_deauther_${A}_DISPLAY_EXAMPLE_I2C.bin`},{name:"SPI Display Example",url:`${B}/${A}/esp8266_deauther_${A}_DISPLAY_EXAMPLE_SPI.bin`}]},W=()=>{const e="dark"===(0,M.I)().colorMode,[t,a]=(0,r.useState)("start"),[n,o]=(0,r.useState)([]),[s,c]=(0,r.useState)({}),[u,m]=r.useState(""),d=e=>{o([...n,t]),a(e)},h=e=>{null!=e&&""!=e.url&&window.location.assign(e.url),d("thanks")};return r.createElement(T,{sx:{background:e?"#222":"#d9d9d9",borderRadius:"4px",padding:".5rem",mb:1}},r.createElement(T,{sx:{display:"flex",alignItems:"center",minHeight:"20rem",flexDirection:"row"}},r.createElement(i.ZP,{container:!0,spacing:1,justifyContent:"center"},"start"===t&&r.createElement(r.Fragment,null,r.createElement(i.ZP,{item:!0},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",size:"large",onClick:()=>d("binaries")},"Binaries (.bin)")),r.createElement(i.ZP,{item:!0},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",size:"large",onClick:()=>{d("download"),c(N.source)}},"Source Code (.zip)"))),"binaries"===t&&r.createElement(r.Fragment,null,r.createElement(i.ZP,{item:!0},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>d("dstike")},"DSTIKE")),N.other.map((e=>r.createElement(i.ZP,{item:!0,key:e.name},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>{d("download"),c(e)}},e.name))))),"dstike"===t&&r.createElement(r.Fragment,null,N.dstike.map((e=>r.createElement(i.ZP,{item:!0,key:e.name},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>{d("download"),c(e)}},e.name))))),"download"===t&&r.createElement(r.Fragment,null,r.createElement(i.ZP,{item:!0,xs:12},r.createElement(Z,{variant:"h4",sx:{pb:2,textAlign:"center"}},"Support Us \u2764\ufe0f"),r.createElement(P,{values:["5\u20ac","10\u20ac","25\u20ac"],value:u,changeValue:m})),r.createElement(i.ZP,{item:!0,xs:6},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>h(s)},"Just Download")),r.createElement(i.ZP,{item:!0,xs:6},r.createElement(l.Z,{sx:{height:"4rem"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>((e,t)=>{switch(t){default:case"5\u20ac":window.open("https://spacehuhn.myshopify.com/cart/43815610319112:1?channel=buy_button","_blank").focus();break;case"10\u20ac":window.open("https://spacehuhn.myshopify.com/cart/43815610351880:1?channel=buy_button","_blank").focus();break;case"25\u20ac":window.open("https://spacehuhn.myshopify.com/cart/43815610384648:1?channel=buy_button","_blank").focus()}h(e)})(s,u),color:"success"},"Contribute & Download")),r.createElement(i.ZP,{item:!0,xs:12},r.createElement(Z,{sx:{textAlign:"center",my:1}},"Selected: ",s.name))),"thanks"===t&&r.createElement(r.Fragment,null,r.createElement(i.ZP,{item:!0,xs:12},r.createElement(Z,{variant:"h4",sx:{pb:2,textAlign:"center"}},"Thank You \ud83d\ude0a")),r.createElement(i.ZP,{item:!0},r.createElement(l.Z,{variant:"outlined",color:"success",href:s==N.source?"/docs/diy/installation-arduino":"/docs/diy/installation-bin"},"Installation Tutorial"))))),r.createElement(T,{sx:{minHeight:"38px"}},"start"!==t&&r.createElement(l.Z,{variant:"outlined",onClick:()=>{a(n.pop())},sx:{},disabled:"start"===t},"Back")))},R={title:"Download",description:"This site is currently under construction.",sidebar_position:40},H=void 0,U={unversionedId:"download",id:"download",title:"Download",description:"This site is currently under construction.",source:"@site/docs/download.md",sourceDirName:".",slug:"/download",permalink:"/docs/download",draft:!1,editUrl:"https://github.com/spacehuhntech/deauther.com/blob/main/docs/download.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Download",description:"This site is currently under construction.",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Buy",permalink:"/docs/buy"},next:{title:"DIY Tutorial",permalink:"/docs/category/diy-tutorial"}},z={},L=[],V={toc:L};function F(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},V,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For flashing the firmware, choose Binaries and select your device.",(0,o.kt)("br",{parentName:"p"}),"\n","If you want to open the project in Arduino IDE, choose Source Code.  "),(0,o.kt)(W,{mdxType:"DownloadSelector"}))}F.isMDXComponent=!0}}]);