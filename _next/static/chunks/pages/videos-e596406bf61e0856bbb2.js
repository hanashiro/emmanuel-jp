(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{4966:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var o=r(5893),i=r(9756),a=r(2122),n=r(7294),s=(r(5697),r(6010)),l=r(7828),c=r(3353),p=r(3602),u=r(8398),d=r(5406),m=r(6112),b=r(5448),h=r(5113),w=r(5664);function x(e){return(0,w.Z)("MuiDialog",e)}var f=(0,r(742).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),y=r(3483);const g=(0,h.ZP)(y.Z,{},{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),k=(0,h.ZP)(p.Z,{},{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),v=(0,h.ZP)("div",{},{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{styleProps:r}=e;return(0,a.Z)({},t.container,t[`scroll${(0,c.Z)(r.scroll)}`])}})((({styleProps:e})=>(0,a.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),Z=(0,h.ZP)(m.Z,{},{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{styleProps:r}=e;return(0,a.Z)({},t.paper,t[`scrollPaper${(0,c.Z)(r.scroll)}`],t[`paperWidth${(0,c.Z)(String(r.maxWidth))})`],r.fullWidth&&t.paperFullWidth,r.fullScreen&&t.paperFullScreen)}})((({theme:e,styleProps:t})=>(0,a.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${f.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},"sm"===t.maxWidth&&{maxWidth:`${e.breakpoints.values.sm}${e.breakpoints.unit}`,[`&.${f.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values.sm+64)]:{maxWidth:"calc(100% - 64px)"}}},"md"===t.maxWidth&&{maxWidth:`${e.breakpoints.values.md}${e.breakpoints.unit}`,[`&.${f.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values.md+64)]:{maxWidth:"calc(100% - 64px)"}}},"lg"===t.maxWidth&&{maxWidth:`${e.breakpoints.values.lg}${e.breakpoints.unit}`,[`&.${f.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values.lg+64)]:{maxWidth:"calc(100% - 64px)"}}},"xl"===t.maxWidth&&{maxWidth:`${e.breakpoints.values.xl}${e.breakpoints.unit}`,[`&.${f.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values.xl+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${f.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),W={enter:d.x9.enteringScreen,exit:d.x9.leavingScreen};var P=n.forwardRef((function(e,t){const r=(0,b.Z)({props:e,name:"MuiDialog"}),{"aria-describedby":p,"aria-labelledby":d,BackdropComponent:h,BackdropProps:w,children:f,className:y,disableEscapeKeyDown:P=!1,fullScreen:M=!1,fullWidth:E=!1,maxWidth:B="sm",onBackdropClick:S,onClose:j,open:C,PaperComponent:F=m.Z,PaperProps:T={},scroll:L="paper",TransitionComponent:$=u.Z,transitionDuration:N=W,TransitionProps:A}=r,D=(0,i.Z)(r,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),z=(0,a.Z)({},r,{disableEscapeKeyDown:P,fullScreen:M,fullWidth:E,maxWidth:B,scroll:L}),Y=(e=>{const{classes:t,scroll:r,maxWidth:o,fullWidth:i,fullScreen:a}=e,n={root:["root"],container:["container",`scroll${(0,c.Z)(r)}`],paper:["paper",`paperScroll${(0,c.Z)(r)}`,`paperWidth${(0,c.Z)(String(o))}`,i&&"paperFullWidth",a&&"paperFullScreen"]};return(0,l.Z)(n,x,t)})(z),_=n.useRef();return(0,o.jsx)(k,(0,a.Z)({className:(0,s.Z)(Y.root,y),BackdropProps:(0,a.Z)({transitionDuration:N,as:h},w),closeAfterTransition:!0,BackdropComponent:g,disableEscapeKeyDown:P,onClose:j,open:C,ref:t,onClick:e=>{_.current&&(_.current=null,S&&S(e),j&&j(e,"backdropClick"))},styleProps:z},D,{children:(0,o.jsx)($,(0,a.Z)({appear:!0,in:C,timeout:N,role:"presentation"},A,{children:(0,o.jsx)(v,{className:(0,s.Z)(Y.container),onMouseDown:e=>{_.current=e.target===e.currentTarget},styleProps:z,children:(0,o.jsx)(Z,(0,a.Z)({as:F,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":d},T,{className:(0,s.Z)(Y.paper,T.className),styleProps:z,children:f}))})}))}))})),M=[{year:2002,videos:[{title:"Festa Junina 2002",url:"https://youtu.be/ATVgz50ZY4Q",src:"https://www.youtube.com/embed/ATVgz50ZY4Q",id:"ATVgz50ZY4Q"},{title:"Sorteio de chaves - Jogos Emmanuel ",url:"https://youtu.be/yakXzThb8NU",src:"https://www.youtube.com/embed/yakXzThb8NU",id:"yakXzThb8NU"},{title:"Feira de Ci\xeancias / Ensaio Miss Emmanuel - 2002",url:"https://youtu.be/DClSeqlNQfE",src:"https://www.youtube.com/embed/DClSeqlNQfE",id:"DClSeqlNQfE"},{title:"Feira de Ci\xeancias - 2002",url:"https://youtu.be/Tfxf8ji2fVw",src:"https://www.youtube.com/embed/Tfxf8ji2fVw",id:"Tfxf8ji2fVw"},{title:"Festa Natal 2002 e Nagashima",url:"https://youtu.be/jsLV659HmrY",src:"https://www.youtube.com/embed/jsLV659HmrY",id:"jsLV659HmrY"}]},{year:2003,videos:[{title:"Miss Emmanuel 2003",url:"https://youtu.be/zL1f08tBac4",src:"https://www.youtube.com/embed/zL1f08tBac4",id:"zL1f08tBac4"},{title:"Festa Junina (2003)",url:"https://youtu.be/4wL2bboLsLI",src:"https://www.youtube.com/embed/4wL2bboLsLI",id:"4wL2bboLsLI"},{title:"Educa\xe7\xe3o F\xedsica - 2003",url:"https://youtu.be/vziabwsBJrc",src:"https://www.youtube.com/embed/vziabwsBJrc",id:"vziabwsBJrc"},{title:"Teatro Fantoches/Dia das Crian\xe7as - Jogos Estudantis - 2003",url:"https://youtu.be/qqXkMpeUKRI",src:"https://www.youtube.com/embed/qqXkMpeUKRI",id:"qqXkMpeUKRI"},{title:"Feira de Ci\xeancias 2003",url:"https://youtu.be/9i0OQ_RTHqg",src:"https://www.youtube.com/embed/9i0OQ_RTHqg",id:"9i0OQ_RTHqg"},{title:"Feira de Ci\xeancias 2003 - Parte 2",url:"https://youtu.be/15O3wmk9M-Y",src:"https://www.youtube.com/embed/15O3wmk9M-Y",id:"15O3wmk9M-Y"},{title:"Natal / Fim de Ano / Formatura - 2003",url:"https://youtu.be/_pO8oBMxF3E",src:"https://www.youtube.com/embed/_pO8oBMxF3E",id:"_pO8oBMxF3E"}]},{year:2004,videos:[{title:"Miss Emmanuel 2004",url:"https://youtu.be/XtQMBnAptQw",src:"https://www.youtube.com/embed/XtQMBnAptQw",id:"XtQMBnAptQw"},{title:"Miss Emmanuel 2004 parte 2",url:"https://youtu.be/2EMLf6qL-bE",src:"https://www.youtube.com/embed/2EMLf6qL-bE",id:"2EMLf6qL-bE"},{title:"Miss Emmanuel 2004 parte 3",url:"https://youtu.be/bzRsYFKthAM",src:"https://www.youtube.com/embed/bzRsYFKthAM",id:"bzRsYFKthAM"}]},{year:"200x",videos:[{title:"Festa de Natal / Fim de Ano - 200x",url:"https://youtu.be/29O3WPYAlTw",src:"https://www.youtube.com/embed/29O3WPYAlTw",id:"29O3WPYAlTw"}]}],E=r(9008),B=r(3462);function S(){var e=(0,n.useState)(""),t=e[0],r=e[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.default,{children:(0,o.jsx)("title",{children:"Instituto Educacional Emmanuel :: V\xeddeos"})}),(0,o.jsx)("h1",{children:"V\xeddeos"}),(0,o.jsx)(P,{open:""!==t,onClose:function(){return r("")},children:t&&(0,o.jsx)("iframe",{width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),M.map((function(e){return(0,o.jsx)(B.Z,{title:"V\xeddeos de ".concat(e.year),children:e.videos.map((function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://i.ytimg.com/vi/".concat(e.id,"/mqdefault.jpg"),style:{cursor:"pointer"},onClick:function(){return r(e.src)}}),(0,o.jsx)("br",{}),e.title,(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]},e.id)}))},e.year)}))]})}},3462:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o=r(5893),i=(r(7294),r(2465)),a=r(5113);function n(){var e=(0,i.Z)(["\n    padding: ",";\n"]);return n=function(){return e},e}function s(){var e=(0,i.Z)(["\n    font-size: 12px;\n    font-weight: normal;\n    background-color: var(--background-dark);\n    margin: 0;\n    padding: ",";\n    border-bottom: 1px solid black;\n"]);return s=function(){return e},e}function l(){var e=(0,i.Z)(["\n    font-size: 14px;\n    background-color: var(--header-color);\n    margin: 0;\n    padding: ",";\n    border-bottom: 1px solid black;\n    font-family: Verdana, Tahoma, Arial, sans-serif;\n"]);return l=function(){return e},e}function c(){var e=(0,i.Z)(["\n    font-size: 14px;\n    background-color: #abc5e2;\n    border-radius: 2px;\n    border: 1px solid black;\n    color: black;\n    a {\n        color: inherit;\n        text-decoration: underline;\n    }\n"]);return c=function(){return e},e}var p=(0,a.ZP)("div")(c()),u=(0,a.ZP)("h2")(l(),(function(e){var t=e.theme;return t.spacing(.5)+" "+t.spacing()})),d=(0,a.ZP)("h3")(s(),(function(e){var t=e.theme;return t.spacing(.5)+" "+t.spacing()})),m=(0,a.ZP)("div")(n(),(function(e){var t=e.theme;return t.spacing(.5)+" "+t.spacing()+" "+t.spacing()})),b=function(e){var t=e.title,r=e.subtitle,i=e.children;return(0,o.jsxs)(p,{children:[(0,o.jsx)(u,{children:t}),r&&(0,o.jsx)(d,{children:r}),(0,o.jsx)(m,{children:i})]})}},5192:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos",function(){return r(4966)}])}},function(e){e.O(0,[774,375,365],(function(){return t=5192,e(e.s=t);var t}));var t=e.O();_N_E=t}]);