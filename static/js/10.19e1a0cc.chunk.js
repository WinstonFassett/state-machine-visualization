(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return h});var r=n(126),a=n(23);function o(e,t){return!!e.children(t).length}function i(e){return c(e.v)+":"+c(e.w)+":"+c(e.name)}var l=/:/g;function c(e){return e?String(e).replace(l,"\\:"):""}function s(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function h(e,t){var n=t.graph();if(r.a(n)){var o=n.transition;if(a.a(o))return o(e)}return e}},261:function(e,t,n){"use strict";var r=n(322),a=n(272),o=4;var i=function(e){return Object(a.a)(e,o)},l=n(323);n(321),n(267);function c(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:s(e),edges:d(e)};return r.a(e.graph())||(t.value=i(e.graph())),t}function s(e){return l.a(e.nodes(),function(t){var n=e.node(t),a=e.parent(t),o={v:t};return r.a(n)||(o.value=n),r.a(a)||(o.parent=a),o})}function d(e){return l.a(e.edges(),function(t){var n=e.edge(t),a={v:t.v,w:t.w};return r.a(t.name)||(a.name=t.name),r.a(n)||(a.value=n),a})}n.d(t,"a",function(){return c})},262:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(259),a=n(261),o=n(263),i=n(250),l=n(257),c=n(260),s=n(2);let d={},h={},g={};const f=(e,t)=>(i.y.trace("In isDecendant",t," ",e," = ",h[t].includes(e)),!!h[t].includes(e)),u=(e,t,n,r)=>{i.y.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const a=t.children(e)||[];e!==r&&a.push(e),i.y.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach(a=>{if(t.children(a).length>0)u(a,t,n,r);else{const o=t.node(a);i.y.info("cp ",a," to ",r," with parent ",e),n.setNode(a,o),r!==t.parent(a)&&(i.y.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==r&&a!==e?(i.y.debug("Setting parent",a,e),n.setParent(a,e)):(i.y.info("In copy ",e,"root",r,"data",t.node(e),r),i.y.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));const l=t.edges(a);i.y.debug("Copying Edges",l),l.forEach(a=>{i.y.info("Edge",a);const o=t.edge(a.v,a.w,a.name);i.y.info("Edge data",o,r);try{((e,t)=>(i.y.info("Decendants of ",t," is ",h[t]),i.y.info("Edge is ",e),e.v!==t&&e.w!==t&&(h[t]?h[t].includes(e.v)||f(e.v,t)||f(e.w,t)||h[t].includes(e.w):(i.y.debug("Tilt, ",t,",not in decendants"),!1))))(a,r)?(i.y.info("Copying as ",a.v,a.w,o,a.name),n.setEdge(a.v,a.w,o,a.name),i.y.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.y.info("Skipping copy of edge ",a.v,"--\x3e",a.w," rootId: ",r," clusterId:",e)}catch(l){i.y.error(l)}})}i.y.debug("Removing node",a),t.removeNode(a)})},p=(e,t)=>{const n=t.children(e);let r=[...n];for(const a of n)g[a]=e,r=[...r,...p(a,t)];return r},y=(e,t)=>{i.y.trace("Searching",e);const n=t.children(e);if(i.y.trace("Searching children of id ",e,n),n.length<1)return i.y.trace("This is a valid node",e),e;for(const r of n){const n=y(r,t);if(n)return i.y.trace("Found replacement for",e," => ",n),n}},w=e=>d[e]&&d[e].externalConnections&&d[e]?d[e].id:e,b=(e,t)=>{if(i.y.warn("extractor - ",t,a.a(e),e.children("D")),t>10)return void i.y.error("Bailing out");let n=e.nodes(),r=!1;for(const a of n){const t=e.children(a);r=r||t.length>0}if(r){i.y.debug("Nodes = ",n,t);for(const r of n)if(i.y.debug("Extracting node",r,d,d[r]&&!d[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),d[r])if(!d[r].externalConnections&&e.children(r)&&e.children(r).length>0){i.y.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";d[r]&&d[r].clusterData&&d[r].clusterData.dir&&(n=d[r].clusterData.dir,i.y.warn("Fixing dir",d[r].clusterData.dir,n));const o=new l.a({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.y.warn("Old graph before copy",a.a(e)),u(r,e,o,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:d[r].clusterData,labelText:d[r].labelText,graph:o}),i.y.warn("New graph after copy node: (",r,")",a.a(o)),i.y.debug("Old graph after copy",a.a(e))}else i.y.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!d[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),i.y.debug(d);else i.y.debug("Not a cluster",r,t);n=e.nodes(),i.y.warn("New list of nodes",n);for(const r of n){const n=e.node(r);i.y.warn(" Now next level",r,n),n.clusterNode&&b(n.graph,t+1)}}else i.y.debug("Done, no node has children",e.nodes())},v=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach(t=>{const r=e.children(t),a=v(e,r);n=[...n,...a]}),n},x={rect:(e,t)=>{i.y.info("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),a=Object(i.z)(Object(i.p)().flowchart.htmlLabels),l=n.insert("g").attr("class","cluster-label"),d="markdown"===t.labelType?Object(c.a)(l,t.labelText,{style:t.labelStyle,useHtmlLabels:a}):l.node().appendChild(Object(o.c)(t.labelText,t.labelStyle,void 0,!0));let h=d.getBBox();if(Object(i.z)(Object(i.p)().flowchart.htmlLabels)){const e=d.children[0],t=Object(s.H)(d);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}const g=0*t.padding,f=g/2,u=t.width<=h.width+g?h.width+g:t.width;t.width<=h.width+g?t.diff=(h.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,i.y.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f).attr("width",u).attr("height",t.height+g),a?l.attr("transform","translate("+(t.x-h.width/2)+", "+(t.y-t.height/2)+")"):l.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const p=r.node().getBBox();return t.width=p.width,t.height=p.height,t.intersect=function(e){return Object(o.i)(t,e)},n},roundedWithTitle:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),a=n.insert("g").attr("class","cluster-label"),l=n.append("rect"),c=a.node().appendChild(Object(o.c)(t.labelText,t.labelStyle,void 0,!0));let d=c.getBBox();if(Object(i.z)(Object(i.p)().flowchart.htmlLabels)){const e=c.children[0],t=Object(s.H)(c);d=e.getBoundingClientRect(),t.attr("width",d.width),t.attr("height",d.height)}d=c.getBBox();const h=0*t.padding,g=h/2,f=t.width<=d.width+t.padding?d.width+t.padding:t.width;t.width<=d.width+t.padding?t.diff=(d.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+h).attr("height",t.height+h),l.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+d.height-1).attr("width",f+h).attr("height",t.height+h-d.height-3),a.attr("transform","translate("+(t.x-d.width/2)+", "+(t.y-t.height/2-t.padding/3+(Object(i.z)(Object(i.p)().flowchart.htmlLabels)?5:3))+")");const u=r.node().getBBox();return t.height=u.height,t.intersect=function(e){return Object(o.i)(t,e)},n},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),a=0*t.padding,i=a/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-i).attr("y",t.y-t.height/2-i).attr("width",t.width+a).attr("height",t.height+a).attr("fill","none");const l=r.node().getBBox();return t.width=l.width,t.height=l.height,t.intersect=function(e){return Object(o.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),a=0*t.padding,i=a/2;r.attr("class","divider").attr("x",t.x-t.width/2-i).attr("y",t.y-t.height/2).attr("width",t.width+a).attr("height",t.height+a);const l=r.node().getBBox();return t.width=l.width,t.height=l.height,t.diff=-t.padding/2,t.intersect=function(e){return Object(o.i)(t,e)},n}};let m={};const k=async(e,t,n,l,c)=>{i.y.info("Graph in recursive render: XXX",a.a(t),c);const s=t.graph().rankdir;i.y.trace("Dir in recursive render - dir:",s);const h=e.insert("g").attr("class","root");t.nodes()?i.y.info("Recursive render XXX",t.nodes()):i.y.info("No nodes found for",t),t.edges().length>0&&i.y.trace("Recursive edges",t.edge(t.edges()[0]));const g=h.insert("g").attr("class","clusters"),f=h.insert("g").attr("class","edgePaths"),u=h.insert("g").attr("class","edgeLabels"),p=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){const r=t.node(e);if(void 0!==c){const n=JSON.parse(JSON.stringify(c.clusterData));i.y.info("Setting data for cluster XXX (",e,") ",n,c),t.setNode(c.id,n),t.parent(e)||(i.y.trace("Setting parent",e,c.id),t.setParent(e,c.id,n))}if(i.y.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){i.y.info("Cluster identified",e,r.width,t.node(e));const a=await k(p,r.graph,n,l,t.node(e)),c=a.elem;Object(o.n)(r,c),r.diff=a.diff||0,i.y.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),Object(o.m)(c,r),i.y.warn("Recursive render complete ",c,r)}else t.children(e).length>0?(i.y.info("Cluster - the non recursive path XXX",e,r.id,r,t),i.y.info(y(r.id,t)),d[r.id]={id:y(r.id,t),node:r}):(i.y.info("Node - the non recursive path",e,r.id,r),await Object(o.e)(p,t.node(e),s))})),t.edges().forEach(function(e){const n=t.edge(e.v,e.w,e.name);i.y.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.y.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),i.y.info("Fix",d,"ids:",e.v,e.w,"Translateing: ",d[e.v],d[e.w]),Object(o.f)(u,n)}),t.edges().forEach(function(e){i.y.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))}),i.y.info("#############################################"),i.y.info("###                Layout                 ###"),i.y.info("#############################################"),i.y.info(t),Object(r.a)(t),i.y.info("Graph after layout:",a.a(t));let w=0;return(e=>v(e,e.children()))(t).forEach(function(e){const n=t.node(e);i.y.info("Position "+e+": "+JSON.stringify(t.node(e))),i.y.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?Object(o.l)(n):t.children(e).length>0?(((e,t)=>{i.y.trace("Inserting cluster");const n=t.shape||"rect";m[t.id]=x[n](e,t)})(g,n),d[n.id].node=n):Object(o.l)(n)}),t.edges().forEach(function(e){const r=t.edge(e);i.y.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r);const a=Object(o.g)(f,e,r,d,n,t,l);Object(o.h)(r,a)}),t.nodes().forEach(function(e){const n=t.node(e);i.y.info(e,n.type,n.diff),"group"===n.type&&(w=n.diff)}),{elem:h,diff:w}},O=async(e,t,n,r,l)=>{Object(o.a)(e,n,r,l),Object(o.b)(),Object(o.d)(),m={},h={},g={},d={},i.y.warn("Graph at first:",JSON.stringify(a.a(t))),((e,t)=>{!e||t>10?i.y.debug("Opting out, no graph "):(i.y.debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&(i.y.warn("Cluster identified",t," Replacement id in edges: ",y(t,e)),h[t]=p(t,e),d[t]={id:y(t,e),clusterData:e.node(t)})}),e.nodes().forEach(function(t){const n=e.children(t),r=e.edges();n.length>0?(i.y.debug("Cluster identified",t,h),r.forEach(e=>{e.v!==t&&e.w!==t&&f(e.v,t)^f(e.w,t)&&(i.y.warn("Edge: ",e," leaves cluster ",t),i.y.warn("Decendants of XXX ",t,": ",h[t]),d[t].externalConnections=!0)})):i.y.debug("Not a cluster ",t,h)}),e.edges().forEach(function(t){const n=e.edge(t);i.y.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),i.y.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,a=t.w;if(i.y.warn("Fix XXX",d,"ids:",t.v,t.w,"Translating: ",d[t.v]," --- ",d[t.w]),d[t.v]&&d[t.w]&&d[t.v]===d[t.w]){i.y.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),i.y.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=w(t.v),a=w(t.w),e.removeEdge(t.v,t.w,t.name);const o=t.w+"---"+t.v;e.setNode(o,{domId:o,id:o,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const l=structuredClone(n),c=structuredClone(n);l.label="",l.arrowTypeEnd="none",c.label="",l.fromCluster=t.v,c.toCluster=t.v,e.setEdge(r,o,l,t.name+"-cyclic-special"),e.setEdge(o,a,c,t.name+"-cyclic-special")}else(d[t.v]||d[t.w])&&(i.y.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=w(t.v),a=w(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(n.fromCluster=t.v),a!==t.w&&(n.toCluster=t.w),i.y.warn("Fix Replacing with XXX",r,a,t.name),e.setEdge(r,a,n,t.name))}),i.y.warn("Adjusted Graph",a.a(e)),b(e,0),i.y.trace(d))})(t),i.y.warn("Graph after:",JSON.stringify(a.a(t))),await k(e,t,r,l)}},269:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(258);function a(e,t){var n=e.append("foreignObject").attr("width","100000"),a=n.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}r.b(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var i=a.node().getBoundingClientRect();return n.attr("width",i.width).attr("height",i.height),n}},285:function(e,t,n){"use strict";var r=n(257),a=n(2),o=n(250),i=n(262),l=n(269),c=n(1),s=n(5);var d=(e,t)=>c.a.lang.round(s.a.parse(e)[t]),h=n(123);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return p});const g={},f=function(e,t,n,r,a,i){const c=r.select('[id="'.concat(n,'"]'));Object.keys(e).forEach(function(n){const r=e[n];let s="default";r.classes.length>0&&(s=r.classes.join(" ")),s+=" flowchart-label";const d=Object(o.x)(r.styles);let h,g=void 0!==r.text?r.text:r.id;if(o.y.info("vertex",r,r.labelType),"markdown"===r.labelType)o.y.info("vertex",r,r.labelType);else if(Object(o.z)(Object(o.p)().flowchart.htmlLabels)){const e={label:g.replace(/fa[blrs]?:fa-[\w-]+/g,e=>"<i class='".concat(e.replace(":"," "),"'></i>"))};(h=Object(l.a)(c,e).node()).parentNode.removeChild(h)}else{const e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=g.split(o.r.lineBreakRegex);for(const n of t){const t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}h=e}let f=0,u="";switch(r.type){case"round":f=5,u="rect";break;case"square":u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"odd_right":u="rect_left_inv_arrow";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"group":u="rect";break;case"doublecircle":u="doublecircle";break;default:u="rect"}t.setNode(r.id,{labelStyle:d.labelStyle,shape:u,labelText:g,labelType:r.labelType,rx:f,ry:f,class:s,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:i.db.getTooltip(r.id)||"",domId:i.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:Object(o.p)().flowchart.padding}),o.y.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:u,labelText:g,rx:f,ry:f,class:s,style:d.style,id:r.id,domId:i.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:Object(o.p)().flowchart.padding})})},u=function(e,t,n){o.y.info("abc78 edges = ",e);let r,i,l=0,c={};if(void 0!==e.defaultStyle){const t=Object(o.x)(e.defaultStyle);r=t.style,i=t.labelStyle}e.forEach(function(n){l++;const s="L-"+n.start+"-"+n.end;void 0===c[s]?(c[s]=0,o.y.info("abc78 new entry",s,c[s])):(c[s]++,o.y.info("abc78 new entry",s,c[s]));let d=s+"-"+c[s];o.y.info("abc78 new link id to be used is",s,d,c[s]);const h="LS-"+n.start,f="LE-"+n.end,u={style:"",labelStyle:""};switch(u.minlen=n.length||1,"arrow_open"===n.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let p="",y="";switch(n.stroke){case"normal":p="fill:none;",void 0!==r&&(p=r),void 0!==i&&(y=i),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=Object(o.x)(n.style);p=e.style,y=e.labelStyle}u.style=u.style+=p,u.labelStyle=u.labelStyle+=y,void 0!==n.interpolate?u.curve=Object(o.A)(n.interpolate,a.p):void 0!==e.defaultInterpolate?u.curve=Object(o.A)(e.defaultInterpolate,a.p):u.curve=Object(o.A)(g.curve,a.p),void 0===n.text?void 0!==n.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType=n.labelType,u.label=n.text.replace(o.r.lineBreakRegex,"\n"),void 0===n.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=d,u.classes="flowchart-link "+h+" "+f,t.setEdge(n.start,n.end,u,l)})},p={setConf:function(e){const t=Object.keys(e);for(const n of t)g[n]=e[n]},addVertices:f,addEdges:u,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,l){o.y.info("Drawing flowchart");let c=l.db.getDirection();void 0===c&&(c="TD");const{securityLevel:s,flowchart:d}=Object(o.p)(),h=d.nodeSpacing||50,g=d.rankSpacing||50;let p;"sandbox"===s&&(p=Object(a.H)("#i"+t));const y="sandbox"===s?Object(a.H)(p.nodes()[0].contentDocument.body):Object(a.H)("body"),w="sandbox"===s?p.nodes()[0].contentDocument:document,b=new r.a({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:h,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let v;const x=l.db.getSubGraphs();o.y.info("Subgraphs - ",x);for(let r=x.length-1;r>=0;r--)v=x[r],o.y.info("Subgraph - ",v),l.db.addVertex(v.id,{text:v.title,type:v.labelType},"group",void 0,v.classes,v.dir);const m=l.db.getVertices(),k=l.db.getEdges();o.y.info("Edges",k);let O=0;for(O=x.length-1;O>=0;O--){v=x[O],Object(a.I)("cluster").append("text");for(let e=0;e<v.nodes.length;e++)o.y.info("Setting up subgraphs",v.nodes[e],v.id),b.setParent(v.nodes[e],v.id)}f(m,b,t,y,w,l),u(k,b);const S=y.select('[id="'.concat(t,'"]')),j=y.select("#"+t+" g");if(await Object(i.a)(j,b,["point","circle","cross"],"flowchart",t),o.H.insertTitle(S,"flowchartTitleText",d.titleTopMargin,l.db.getDiagramTitle()),Object(o.B)(b,S,d.diagramPadding,d.useMaxWidth),l.db.indexNodes("subGraph"+O),!d.htmlLabels){const e=w.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=w.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(m).forEach(function(e){const n=m[e];if(n.link){const r=Object(a.H)("#"+t+' [id="'+e+'"]');if(r){const e=w.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===s?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert(function(){return e},":first-child"),a=r.select(".label-container");a&&t.append(function(){return a.node()});const o=r.select(".label");o&&t.append(function(){return o.node()})}}})}},y=e=>".label {\n    font-family: ".concat(e.fontFamily,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n  .cluster-label text {\n    fill: ").concat(e.titleColor,";\n  }\n  .cluster-label span,p {\n    color: ").concat(e.titleColor,";\n  }\n\n  .label text,span,p {\n    fill: ").concat(e.nodeTextColor||e.textColor,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(e.mainBkg,";\n    stroke: ").concat(e.nodeBorder,";\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ").concat(e.arrowheadColor,";\n  }\n\n  .edgePath .path {\n    stroke: ").concat(e.lineColor,";\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ").concat(e.lineColor,";\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ").concat(e.edgeLabelBackground,";\n    rect {\n      opacity: 0.5;\n      background-color: ").concat(e.edgeLabelBackground,";\n      fill: ").concat(e.edgeLabelBackground,";\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ").concat(((e,t)=>{const n=d,r=n(e,"r"),a=n(e,"g"),o=n(e,"b");return h.a(r,a,o,t)})(e.edgeLabelBackground,.5),";\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ").concat(e.clusterBkg,";\n    stroke: ").concat(e.clusterBorder,";\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ").concat(e.titleColor,";\n  }\n\n  .cluster span,p {\n    color: ").concat(e.titleColor,";\n  }\n  /* .cluster div {\n    color: ").concat(e.titleColor,";\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ").concat(e.fontFamily,";\n    font-size: 12px;\n    background: ").concat(e.tertiaryColor,";\n    border: 1px solid ").concat(e.border2,";\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(e.textColor,";\n  }\n")},344:function(e,t,n){"use strict";n.r(t);var r=n(284),a=(n(257),n(2));n(250),n(349),n(325),n(321),n(259),n(258);n(269);n(324),n(348);n(346);a.p;var o=n(285);n(60),n(61),n(59),n(26),n(261);n.d(t,"diagram",function(){return c});const i={},l=function(e){const t=Object.keys(e);for(const n of t)i[n]=e[n]},c={parser:r.c,db:r.b,renderer:o.b,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,l(e.flowchart),r.b.clear(),r.b.setGen("gen-1")}}}}]);
//# sourceMappingURL=10.19e1a0cc.chunk.js.map