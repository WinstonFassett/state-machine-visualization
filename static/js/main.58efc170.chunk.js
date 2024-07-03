(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);function c(e,t){return e.find(e=>e.id===t)}function l(e,t,n){const a=e.states[t];return a&&a.on&&a.on[n]}function o(t){let{value:n,lastEvent:o,prevState:s,definition:i,dispatch:u}=t;const f=r.a.useRef(),d=r.a.useRef({lastEvent:o,prevState:s,value:n}),m=r.a.useRef({});Object(a.useEffect)(()=>{m.current=d.current,d.current={lastEvent:o,prevState:s,value:n}},[n,o,s]),Object(a.useEffect)(()=>{f.current=n},[n]);const p=r.a.useRef(),v=Object(a.useMemo)(()=>{const e=Object.keys(i.states),t=e.map(e=>({name:e,id:e})),n=[];return e.forEach(e=>{const a=i.states[e],r=c(t,e);a.on&&Object.keys(a.on).forEach(e=>{const l=a.on[e],o=c(t,l);n.push({name:e,source:r,target:o})})}),{nodes:t,links:n}},[i]);return Object(a.useEffect)(()=>{const t=e.ForceGraph()(p.current);p.current.Graph=t,t.height(300).linkCurvature("curvature").linkDirectionalArrowLength(6).linkDirectionalArrowRelPos(1).nodeCanvasObjectMode(()=>"after").nodeCanvasObject((e,t,n)=>{const a=e.name;t.font="".concat(6,"px Sans-Serif"),t.textAlign="left",t.textBaseline="middle",t.fillStyle=e.name===d.current.value?"black":"darkGrey",t.fillText(a,e.x-2,e.y)}).nodeId("id").nodeLabel("name").nodeAutoColorBy("name").linkCanvasObjectMode(()=>"after").linkCanvasObject((e,n)=>{const a=1.5*t.nodeRelSize(),r=e.source,c=e.target;if("object"!==typeof r||"object"!==typeof c)return;let o=Object.assign(...["x","y"].map(e=>({[e]:r[e]+(c[e]-r[e])/2})));+e.curvature>0&&e.__controlPoints&&(o=function(e,t,n,a,r,c,l){return{x:(1-e)*(1-e)*t+2*(1-e)*e*a+e*e*c,y:(1-e)*(1-e)*n+2*(1-e)*e*r+e*e*l}}(.5,r.x,r.y,e.__controlPoints[0],e.__controlPoints[1],c.x,c.y));const s={x:c.x-r.x,y:c.y-r.y},u=Math.sqrt(Math.pow(s.x,2)+Math.pow(s.y,2))-2*a;let d=Math.atan2(s.y,s.x);d>Math.PI/2&&(d=-(Math.PI-d)),d<-Math.PI/2&&(d=-(-Math.PI-d));const m="".concat(e.name);n.font="1px Sans-Serif";const p=Math.min(4,u/n.measureText(m).width);n.font="".concat(p,"px Sans-Serif");const v=[n.measureText(m).width,p].map(e=>e+.2*p);n.save(),n.translate(o.x,o.y),n.rotate(d),n.fillStyle="rgba(255, 255, 255, 0.9)",n.fillRect(-v[0]/2,-v[1]/2,...v);const g=f.current===e.source.name&&l(i,f.current,e.name)?"blue":"darkgrey";n.textAlign="center",n.textBaseline="middle",n.fillStyle=g,n.fillText(e.name,0,0),n.restore()}).linkColor(e=>f.current===e.source.name&&l(i,f.current,e.name)?"blue":d.current.prevState===e.source.name&&d.current.lastEvent&&d.current.lastEvent.type===e.name?"teal":"darkgrey").linkDirectionalParticleColor(()=>"teal").linkDirectionalParticleSpeed(.04).linkDirectionalParticleWidth(8).linkHoverPrecision(10).onLinkClick(e=>{let{name:t}=e;u({type:t})});let n={},a={};v.links.forEach(e=>{e.nodePairId=e.source<=e.target?e.source+"_"+e.target:e.target+"_"+e.source;let t=e.source===e.target?n:a;t[e.nodePairId]||(t[e.nodePairId]=[]),t[e.nodePairId].push(e)}),Object.keys(n).forEach(e=>{let t=n[e],a=t.length-1;t[a].curvature=1;let r=.5/a;for(let n=0;n<a;n++)t[n].curvature=.5+n*r}),Object.keys(a).filter(e=>a[e].length>1).forEach(e=>{let t=a[e],n=t.length-1,r=t[n];r.curvature=.5;let c=1/n;for(let a=0;a<n;a++)t[a].curvature=a*c-.5,t[a].offset=a,r.source!==t[a].source&&(t[a].curvature*=-1,t[a].flipped=!0)})},[0]),Object(a.useEffect)(()=>{const{Graph:e}=p.current;e.value=n,e.graphData(v)},[v,n]),Object(a.useEffect)(()=>{if(!o)return;const{links:e}=v;if(s){const{type:e}=o,t=v.links.find(t=>t.source.id===s&&t.name===e);setTimeout(()=>{p.current.Graph.emitParticle(t)},10)}p.current&&p.current.Graph},[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:p},"Coming soon: StateForceGraph"))}}).call(this,n(48))},242:function(e,t,n){e.exports=n(249)},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(122),r=n.n(a),c=n(0),l=n.n(c);let o={Initial:{on:{start:"Running"},effects:["clearInterval","clearLapse"]},Running:{on:{stop:"Initial",pause:"Idle"},effects:["startInterval"]},Idle:{on:{stop:"Initial",resume:"Running"},effects:["clearInterval"]}};const s={initialState:"Initial",initialContext:{lapse:0,lapseTime:null},states:o={...o,Idle:{...o.Idle,on:{...o.Idle.on,configure:"Configuring"}},Configuring:{on:{save:"Saving_Config"}},Saving_Config:{on:{saved:"Deploying_Config"}},Deploying_Config:{on:{deployed:"Resume_or_Restart"}},Resume_or_Restart:{on:{resume:"Running",start_over:"Initial"}}},effects:{startInterval:e=>{let{setContext:t}=e;return t(e=>{let n=e.interval;return n||(n=setInterval(()=>{t(e=>{const{lapse:t}=e,n=Date.now(),a=e.lapseTime||n,r=Date.now(),c=r-a;return{...e,lapse:(t||0)+c,lapseTime:r}})},50)),{...e,interval:n}})},clearInterval:e=>{let{setContext:t}=e;return t(e=>({...e,interval:e.interval?clearInterval(e.interval):null,lapseTime:null}))},clearLapse:e=>{let{setContext:t}=e;return t(e=>({...e,lapse:0}))}},reducer:(e,t)=>{switch(t.type){case"clear":e={...e,lapse:0}}return e}};function i(e){let{mode:t,dispatch:n}=e;return l.a.createElement(l.a.Fragment,null,t&&t.on?Object.keys(t.on).map(e=>l.a.createElement("button",{style:j,key:e,onClick:()=>{n({type:e})}},e)):null)}var u=n(250);n(247);let f=0;const d=l.a.memo(e=>{let{diagram:t,onRender:n}=e;const a=Object(c.useMemo)(()=>"mermaid-".concat(++f),[]),r=Object(c.useRef)(null),o=((e,t)=>{const[n,a]=Object(c.useState)(null);return Object(c.useEffect)(()=>{let n=!1;return u.l.mermaidAPI.render(e,t).then(e=>{n||a(e.svg)}),()=>{n=!0}},[e,t]),n})(a,t);return Object(c.useEffect)(()=>{o&&n&&(null===n||void 0===n||n(r.current))},[o]),o?l.a.createElement("div",null,l.a.createElement(m,{svg:o,ref:r})):l.a.createElement("div",null,"Loading...")}),m=l.a.memo(Object(c.forwardRef)((e,t)=>{let{svg:n}=e;const[a,r]=Object(c.useState)({width:0,height:0});return Object(c.useEffect)(()=>{const e=null===n||void 0===n?void 0:n.match(/viewBox="(-?\d*\.?\d+\s+-?\d*\.?\d+\s+-?\d*\.?\d+\s+-?\d*\.?\d+)"/);if(e&&e[1]){const[,,t,n]=e[1].split(/\s+/).map(Number);r({width:t,height:n})}},[n]),l.a.createElement("div",{ref:t,style:{minHeight:"".concat(a.height,"px")},dangerouslySetInnerHTML:{__html:n}})}));var p=d;function v(e){let{definition:t,value:n}=e;const a="mermaidCallback";window[a]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("callback",t)};const r=function(e,t,n){const a=[];return Object.keys(e.states||{}).forEach(n=>{const r=e.states[n],c=n===t?":::active":"";a.push(["    ",n,c].join("")),r.on&&Object.keys(r.on).forEach(e=>{const t=r.on[e];a.push("    ".concat(n,"--\x3e|").concat(e,"| ").concat(t,"[").concat(t,"]"))})}),"\ngraph LR\n".concat(a.join("\n"),"\n    classDef active fill:aquamarine;\n")}(t,n);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{diagram:r}))}function g(e){let{definition:t,value:n,dispatch:a}=e;t.states[n];const r=Object.keys(t.states).map(e=>{const r=t.states[e],c=n===e,o=r&&r.on&&Object.keys(r.on).map(e=>l.a.createElement("div",{key:e},l.a.createElement("button",{key:e,style:E,disabled:!c,onClick:()=>{a({type:e})}},e)," ","\u2192 ",r.on[e]));return l.a.createElement("div",{key:e,style:{...y,backgroundColor:c?"aquamarine":"#ccc"}},l.a.createElement("div",{style:{fontWeight:"bold"}},e),r&&r.effects&&l.a.createElement("small",null,r.effects.join(", ")),l.a.createElement("div",{style:b},o))});return l.a.createElement("div",{style:h},r)}const h={padding:10,display:"flex"},y={padding:10,margin:10,borderRadius:10,borderWidth:1,borderStyle:"solid"},b={textAlign:"left"},E={marginBottom:2};n(248);var k=n(127);function x(){const[e,t]=Object(c.useState)(),n=l.a.useRef(),[{status:a,context:r,previous:o},u]=function(e,t,n,a){t=t||e.initialState;const[r,l]=Object(c.useState)(t),o=Object(c.useRef)(t),s=Object(c.useRef)({}),[i,u]=Object(c.useState)(n||e.initialContext);return[{status:r,context:i,previous:s.current},t=>{const{states:n,initialState:r}=e,c=o.current;let f=i;s.current={state:c,context:i,action:t};const d=n[c]||r;if(d.on){const r=d.on[t.type];if(r){o.current=r,l(r);const a=n[r];if(a){const{effects:n}=a;n&&n.forEach(n=>{"string"===typeof n&&(n=e.effects[n]),n&&n({setContext:u,action:t,state:f})})}}e.reducer&&u(n=>e.reducer(n,t)),a&&u(e=>a(e,t))}}]}(s,null,null,(e,n)=>(t(n),function(e,t){const n=[...e.history||[],t.type];return{...e,history:n}}(e,n)));Object(c.useEffect)(()=>{n.current=a},[a]);const f=e=>{u(e)},{lapse:d}=r,{states:m}=s,p=m[a]||s.initialState;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("label",{style:{fontSize:"5em",display:"block"}},d," ms"),l.a.createElement("div",null,a),l.a.createElement(i,{mode:p,dispatch:f}),l.a.createElement("div",null,l.a.createElement(k.a,{value:a,mode:p,lastEvent:o.action,prevState:o.state,definition:s,dispatch:f})),l.a.createElement(v,{value:a,definition:s}),l.a.createElement(g,{value:a,definition:s,dispatch:f})),l.a.createElement("pre",null,JSON.stringify({status:a,context:r},null,2))))}n.d(t,"buttonStyles",function(){return j});const j={border:"1px solid #ccc",background:"#fff",fontSize:"2em",padding:15,margin:5,width:200};t.default=x;const O=document.getElementById("root");r.a.render(l.a.createElement(x,null),O)}},[[242,7,8]]]);
//# sourceMappingURL=main.58efc170.chunk.js.map