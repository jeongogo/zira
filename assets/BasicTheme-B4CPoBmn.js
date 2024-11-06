import{R as o,d as f,j as i,N as c,L as u}from"./index-Bw5WQmsk.js";var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=o.createContext&&o.createContext(x),y=["attr","size","title"];function O(e,t){if(e==null)return{};var r=w(e,t),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(n){z(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function z(e,t,r){return t=P(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function j(e){return e&&e.map((t,r)=>o.createElement(t.tag,h({key:r},t.attr),j(t.child)))}function m(e){return t=>o.createElement(C,d({attr:h({},e.attr)},t),j(e.child))}function C(e){var t=r=>{var{attr:n,size:a,title:l}=e,b=O(e,y),g=a||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),o.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,b,{className:s,style:h(h({color:e.color||r.color},r.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return p!==void 0?o.createElement(p.Consumer,null,r=>t(r)):t(x)}function E(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"},child:[]},{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"},child:[]}]})(e)}function H(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"},child:[]}]})(e)}function N(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.299-2.708-4.3 4.291-1.292-1.291-1.414 1.415 2.706 2.704 5.712-5.703z"},child:[]}]})(e)}function B(e){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"},child:[]}]})(e)}const M=()=>i.jsx(k,{children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsxs(c,{to:"/",children:[i.jsx(H,{style:{fontSize:"1.6rem",margin:"0 1.1rem 0 0.1rem"}}),"홈"]})}),i.jsx("li",{children:i.jsxs(c,{to:"/schedule",children:[i.jsx(E,{style:{fontSize:"1.6rem",margin:"0 1.1rem 0 0.1rem"}}),"일정"]})}),i.jsx("li",{children:i.jsxs(c,{to:"/task",children:[i.jsx(N,{style:{fontSize:"2.2rem",margin:"0 0.7rem 0 0"}}),"할 일 목록"]})}),i.jsx("li",{children:i.jsxs(c,{to:"/setting",children:[i.jsx(B,{style:{fontSize:"1.8rem",margin:"0 0.7rem 0 0"}}),"설정"]})})]})}),k=f.div`
  position: fixed;
  top: 4.4rem;
  left: 0;
  width: 20rem;
  background-color: white;
  border-right: 1px solid #ededed;
  user-select: none;
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4.4rem);
    padding: 2rem 1.5rem;
    li {
      padding: 0.5rem 0;
      &:last-of-type {
        margin-top: auto;
      }
      a {
        display: flex;
        align-items: center;
        padding: 1rem;
        font-size: 1.4rem;
        border-radius: 0.5rem;
        &:hover {
          background-color: #f9f9f9;
          text-decoration: underline;
        }
        &.active {
          background-color: #f9f9f9;
        }
      }
    }
  }
`,_=()=>i.jsxs(A,{children:[i.jsx("h1",{children:"ZIRA"}),i.jsx(u,{to:"/login",children:"로그인"}),i.jsx(u,{to:"/signup",children:"회원가입"}),i.jsx(u,{to:"/mypage",children:"마이페이지"})]}),A=f.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.4rem;
  padding: 0 2.5rem;
  background-color: white;
  border-bottom: 1px solid #ededed;
  z-index: 9;
  h1 {
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 500;
  }
  a {
    display: flex;
    margin-left: 1.5rem;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    &:hover {
      text-decoration: underline;
    }
  }
`,D=({children:e})=>i.jsxs(L,{children:[i.jsx(_,{}),i.jsx(M,{}),i.jsx("div",{className:"content-area",children:e})]}),L=f.div`
  display: flex;
  padding-top: 4.4rem;
  padding-left: 20rem;
  .content-area {
    position: relative;
    width: 100%;
    padding: 3rem;
  }
`;export{D as B};
