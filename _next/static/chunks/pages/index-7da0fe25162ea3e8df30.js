(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(e,r,s){"use strict";var t=s(2809),a=s(219),n=s(1664),i=s(1826),l=s(5893),c=["href","children"];function o(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function d(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?o(Object(s),!0).forEach((function(r){(0,t.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}r.Z=function(e){var r,s=e.href,t=e.children,o=(0,a.Z)(e,c),f=(0,i.default)().publicRuntimeConfig,m=null!==(r=null===f||void 0===f?void 0:f.basePath)&&void 0!==r?r:"",u=m.endsWith("/")||s.startsWith("/")?"".concat(m).concat(s):"".concat(m,"/").concat(s);return(0,l.jsx)(n.default,d(d({href:s,as:u},o),{},{children:t}))}},22:function(e,r,s){"use strict";s.d(r,{Z:function(){return Z}});var t=s(2809),a=s(219),n=s(7294),i=s(79),l=s(682),c=s(8871),o=s(1330),d=s(1752),f={src:"https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-logo.svg",srcType:"url",mimeType:"image/svg+xml"},m={src:"https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-icon.svg",srcType:"url",mimeType:"image/svg+xml"},u=function(){var e=!0;function r(){return{width:window.innerWidth,height:window.innerHeight}}var s=(0,n.useState)(r()),t=s[0],a=s[1];return(0,n.useEffect)((function(){var e=function(){a(r())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[e]),t},p=s(5893),h=function(){var e=u(),r=(0,n.useState)(),s=r[0],t=r[1];return(0,n.useEffect)((function(){var r=e.width&&e.width>=992?f.src:m.src;if("string"===typeof r)t(r);else{var s=new FileReader;s.readAsDataURL(r),s.onloadend=function(){var e=s.result;"string"===typeof e&&(console.log("Image dataURI obtainer. Raw data:",e.substr(e.indexOf(", ")+1)),t(e))}}}),[e]),(0,p.jsx)(i.Z,{bg:"light",expand:"lg",children:(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(d.Z,{href:"/",passHref:!0,children:(0,p.jsx)(i.Z.Brand,{children:(0,p.jsx)(o.Z,{src:s,alt:"Smartblock",height:"45"})})}),(0,p.jsx)(c.Z.Item,{className:"text-center text-lg-start",children:(0,p.jsxs)("h5",{className:"d-inline my-0",children:[(0,p.jsx)("span",{className:"me-2 me-lg-3 d-none d-lg-inline",children:"|"}),"Knowledge Base"]})}),(0,p.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,p.jsx)(i.Z.Collapse,{id:"basic-navbar-nav",children:(0,p.jsx)(c.Z,{className:"ms-auto"})})]})})},b=s(4051),x=s(1555),v=function(){var e=(0,n.useState)(2021),r=e[0],s=e[1];return(0,n.useEffect)((function(){s((new Date).getFullYear())}),[]),(0,p.jsx)(l.Z,{fluid:!0,className:"bg-light py-3",children:(0,p.jsx)(b.Z,{children:(0,p.jsx)(x.Z,{className:"text-center",children:(0,p.jsxs)("span",{children:[(0,p.jsx)("a",{href:"https://smartblock.cl",children:"Smartblock"})," Technologies SpA \xa9 ",r]})})})})},j=s(8521),y=s.n(j),g=s(9008),N=["pageTitle","children"];function w(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function O(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?w(Object(s),!0).forEach((function(r){(0,t.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}var P="Smartblock Knowledge Base",Z=function(e){var r=e.pageTitle,s=e.children,t=(0,a.Z)(e,N),i=(0,n.useState)(),l=i[0],c=i[1];return(0,n.useEffect)((function(){r&&c([r,"-",P].join(" ").trim())}),[r]),(0,p.jsxs)("div",O(O({},t),{},{className:y().bodyWrapper,children:[l?(0,p.jsx)(g.default,{children:(0,p.jsx)("title",{children:l})}):null,(0,p.jsx)(h,{}),(0,p.jsx)("div",{className:y().subWrapper,children:s}),(0,p.jsx)(v,{})]}))}},675:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return U}});var t=s(22),a=s(682),n=s(4051),i=s(1555),l=s(4036),c=s.n(l),o=s(7294),d=s(861),f=s(600),m=s(5893);const u=o.forwardRef((({as:e,bsPrefix:r,variant:s,size:t,active:a,className:n,...i},l)=>{const o=(0,f.vE)(r,"btn"),[u,{tagName:p}]=(0,d.FT)({tagName:e,...i}),h=p;return(0,m.jsx)(h,{...i,...u,ref:l,className:c()(n,o,a&&"active",s&&`${o}-${s}`,t&&`${o}-${t}`,i.href&&i.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};var p=u,h=s(5697),b=s.n(h);const x={type:b().string,tooltip:b().bool,as:b().elementType},v=o.forwardRef((({as:e="div",className:r,type:s="valid",tooltip:t=!1,...a},n)=>(0,m.jsx)(e,{...a,ref:n,className:c()(r,`${s}-${t?"tooltip":"feedback"}`)})));v.displayName="Feedback",v.propTypes=x;var j=v;var y=o.createContext({});const g=o.forwardRef((({id:e,bsPrefix:r,className:s,type:t="checkbox",isValid:a=!1,isInvalid:n=!1,as:i="input",...l},d)=>{const{controlId:u}=(0,o.useContext)(y);return r=(0,f.vE)(r,"form-check-input"),(0,m.jsx)(i,{...l,ref:d,type:t,id:e||u,className:c()(s,r,a&&"is-valid",n&&"is-invalid")})}));g.displayName="FormCheckInput";var N=g;const w=o.forwardRef((({bsPrefix:e,className:r,htmlFor:s,...t},a)=>{const{controlId:n}=(0,o.useContext)(y);return e=(0,f.vE)(e,"form-check-label"),(0,m.jsx)("label",{...t,ref:a,htmlFor:s||n,className:c()(r,e)})}));w.displayName="FormCheckLabel";var O=w;const P=o.forwardRef((({id:e,bsPrefix:r,bsSwitchPrefix:s,inline:t=!1,disabled:a=!1,isValid:n=!1,isInvalid:i=!1,feedbackTooltip:l=!1,feedback:d,className:u,style:p,title:h="",type:b="checkbox",label:x,children:v,as:g="input",...w},P)=>{r=(0,f.vE)(r,"form-check"),s=(0,f.vE)(s,"form-switch");const{controlId:Z}=(0,o.useContext)(y),k=(0,o.useMemo)((()=>({controlId:e||Z})),[Z,e]),E=null!=x&&!1!==x&&!v,F=(0,m.jsx)(N,{...w,type:"switch"===b?"checkbox":b,ref:P,isValid:n,isInvalid:i,disabled:a,as:g});return(0,m.jsx)(y.Provider,{value:k,children:(0,m.jsx)("div",{style:p,className:c()(u,x&&r,t&&`${r}-inline`,"switch"===b&&s),children:v||(0,m.jsxs)(m.Fragment,{children:[F,E&&(0,m.jsx)(O,{title:h,children:x}),(n||i)&&(0,m.jsx)(j,{type:n?"valid":"invalid",tooltip:l,children:d})]})})})}));P.displayName="FormCheck";var Z=Object.assign(P,{Input:N,Label:O});s(2473);const k=o.forwardRef((({bsPrefix:e,type:r,size:s,htmlSize:t,id:a,className:n,isValid:i=!1,isInvalid:l=!1,plaintext:d,readOnly:u,as:p="input",...h},b)=>{const{controlId:x}=(0,o.useContext)(y);let v;return e=(0,f.vE)(e,"form-control"),v=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${s}`]:s},(0,m.jsx)(p,{...h,type:r,size:t,ref:b,readOnly:u,id:a||x,className:c()(n,v,i&&"is-valid",l&&"is-invalid","color"===r&&`${e}-color`)})}));k.displayName="FormControl";var E=Object.assign(k,{Feedback:j}),F=(0,s(4680).Z)("form-floating");const I=o.forwardRef((({controlId:e,as:r="div",...s},t)=>{const a=(0,o.useMemo)((()=>({controlId:e})),[e]);return(0,m.jsx)(y.Provider,{value:a,children:(0,m.jsx)(r,{...s,ref:t})})}));I.displayName="FormGroup";var S=I;const R=o.forwardRef((({as:e="label",bsPrefix:r,column:s,visuallyHidden:t,className:a,htmlFor:n,...l},d)=>{const{controlId:u}=(0,o.useContext)(y);r=(0,f.vE)(r,"form-label");let p="col-form-label";"string"===typeof s&&(p=`${p} ${p}-${s}`);const h=c()(a,r,t&&"visually-hidden",s&&p);return n=n||u,s?(0,m.jsx)(i.Z,{ref:d,as:"label",className:h,htmlFor:n,...l}):(0,m.jsx)(e,{ref:d,className:h,htmlFor:n,...l})}));R.displayName="FormLabel",R.defaultProps={column:!1,visuallyHidden:!1};var C=R;const T=o.forwardRef((({bsPrefix:e,className:r,id:s,...t},a)=>{const{controlId:n}=(0,o.useContext)(y);return e=(0,f.vE)(e,"form-range"),(0,m.jsx)("input",{...t,type:"range",ref:a,className:c()(r,e),id:s||n})}));T.displayName="FormRange";var _=T;const $=o.forwardRef((({bsPrefix:e,size:r,htmlSize:s,className:t,isValid:a=!1,isInvalid:n=!1,id:i,...l},d)=>{const{controlId:u}=(0,o.useContext)(y);return e=(0,f.vE)(e,"form-select"),(0,m.jsx)("select",{...l,size:s,ref:d,className:c()(t,e,r&&`${e}-${r}`,a&&"is-valid",n&&"is-invalid"),id:i||u})}));$.displayName="FormSelect";var z=$;const L=o.forwardRef((({bsPrefix:e,className:r,as:s="small",muted:t,...a},n)=>(e=(0,f.vE)(e,"form-text"),(0,m.jsx)(s,{...a,ref:n,className:c()(r,e,t&&"text-muted")}))));L.displayName="FormText";var D=L;const W=o.forwardRef(((e,r)=>(0,m.jsx)(Z,{...e,ref:r,type:"switch"})));W.displayName="Switch";var H=Object.assign(W,{Input:Z.Input,Label:Z.Label});const B=o.forwardRef((({bsPrefix:e,className:r,children:s,controlId:t,label:a,...n},i)=>(e=(0,f.vE)(e,"form-floating"),(0,m.jsxs)(S,{ref:i,className:c()(r,e),controlId:t,...n,children:[s,(0,m.jsx)("label",{htmlFor:t,children:a})]}))));B.displayName="FloatingLabel";var V=B;const K={_ref:b().any,validated:b().bool,as:b().elementType},M=o.forwardRef((({className:e,validated:r,as:s="form",...t},a)=>(0,m.jsx)(s,{...t,ref:a,className:c()(e,r&&"was-validated")})));M.displayName="Form",M.propTypes=K;var A=Object.assign(M,{Group:S,Control:E,Floating:F,Check:Z,Switch:H,Label:C,Text:D,Range:_,Select:z,FloatingLabel:V}),G=s(1752),U=function(){return(0,m.jsx)(t.Z,{pageTitle:"Home",children:(0,m.jsx)(a.Z,{className:"h-100",children:(0,m.jsxs)(n.Z,{className:"h-100 align-content-center justify-content-center text-center",children:[(0,m.jsxs)(i.Z,{sm:12,children:[(0,m.jsx)("h1",{className:"fw-bold",children:"Smartblock Knowledge Base"}),(0,m.jsx)("span",{children:"Welcome to the Smartblock learning center and reference source"})]}),(0,m.jsx)(i.Z,{sm:12,className:"my-4"}),(0,m.jsx)(i.Z,{sm:12,md:9,lg:7,children:(0,m.jsxs)(A,{children:[(0,m.jsx)(V,{controlId:"home-search",label:"Start searching",children:(0,m.jsx)(A.Control,{size:"sm",type:"text",placeholder:"Start searching",disabled:!0})}),(0,m.jsx)(n.Z,{className:"my-4"}),(0,m.jsx)(n.Z,{className:"justify-content-center my-3",children:(0,m.jsx)(i.Z,{sm:12,md:9,lg:7,className:"d-grid",children:(0,m.jsx)(p,{variant:"primary",type:"submit",className:"pill",size:"lg",disabled:!0,children:"Search"})})}),(0,m.jsx)(n.Z,{children:(0,m.jsx)(i.Z,{children:(0,m.jsx)("span",{children:"Or"})})}),(0,m.jsx)(n.Z,{className:"justify-content-center my-3",children:(0,m.jsx)(i.Z,{sm:12,md:9,lg:7,className:"d-grid",children:(0,m.jsx)(G.Z,{href:"/explore",passHref:!0,children:(0,m.jsx)(p,{variant:"outline-primary",type:"button",className:"pill",size:"lg",children:"Explore"})})})})]})})]})})})}},5301:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(675)}])},8521:function(e){e.exports={bodyWrapper:"page-wrapper_bodyWrapper__11zuq",subWrapper:"page-wrapper_subWrapper__3Miup"}},2473:function(e){"use strict";var r=function(){};e.exports=r}},function(e){e.O(0,[774,509,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);