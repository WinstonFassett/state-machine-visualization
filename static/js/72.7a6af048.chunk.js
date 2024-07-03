"use strict";(self.webpackChunkstate_machine_visualization=self.webpackChunkstate_machine_visualization||[]).push([[72],{6072:(t,e,o)=>{o.d(e,{diagram:()=>z});var s=o(9188),a=o(173),n=o(8696),c=o(7016),i=o(8843);o(9515),o(8186),o(680),o(3617),o(9414);const r="rect",d="rectWithTitle",l="statediagram",p="".concat(l,"-").concat("state"),g="transition",b="".concat(g," ").concat("note-edge"),h="".concat(l,"-").concat("note"),u="".concat(l,"-").concat("cluster"),y="".concat(l,"-").concat("cluster-alt"),f="parent",w="note",m="----",x="".concat(m).concat(w),v="".concat(m).concat(f),T="fill:none",S="fill: #333",k="text",D="normal";let A={},B=0;function L(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;const a=null!==o&&o.length>0?"".concat(s).concat(o):"";return"".concat("state","-").concat(t).concat(a,"-").concat(e)}const C=(t,e,o,a,n,i)=>{const l=o.id,g=void 0===(m=a[l])||null===m?"":m.classes?m.classes.join(" "):"";var m;if("root"!==l){let e=r;!0===o.start&&(e="start"),!1===o.start&&(e="end"),o.type!==s.D&&(e=o.type),A[l]||(A[l]={id:l,shape:e,description:c.e.sanitizeText(l,(0,c.c)()),classes:"".concat(g," ").concat(p)});const a=A[l];o.description&&(Array.isArray(a.description)?(a.shape=d,a.description.push(o.description)):a.description.length>0?(a.shape=d,a.description===l?a.description=[o.description]:a.description=[a.description,o.description]):(a.shape=r,a.description=o.description),a.description=c.e.sanitizeTextOrArray(a.description,(0,c.c)())),1===a.description.length&&a.shape===d&&(a.shape=r),!a.type&&o.doc&&(c.l.info("Setting cluster for ",l,R(o)),a.type="group",a.dir=R(o),a.shape=o.type===s.a?"divider":"roundedWithTitle",a.classes=a.classes+" "+u+" "+(i?y:""));const n={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:l,dir:a.dir,domId:L(l,B),type:a.type,padding:15,centerLabel:!0};if(o.note){const e={labelStyle:"",shape:"note",labelText:o.note.text,classes:h,style:"",id:l+x+"-"+B,domId:L(l,B,w),type:a.type,padding:15},s={labelStyle:"",shape:"noteGroup",labelText:o.note.text,classes:a.classes,style:"",id:l+v,domId:L(l,B,f),type:"group",padding:0};B++;const c=l+v;t.setNode(c,s),t.setNode(e.id,e),t.setNode(l,n),t.setParent(l,c),t.setParent(e.id,c);let i=l,r=e.id;"left of"===o.note.position&&(i=e.id,r=l),t.setEdge(i,r,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:b,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else t.setNode(l,n)}e&&"root"!==e.id&&(c.l.trace("Setting node ",l," to be child of its parent ",e.id),t.setParent(l,e.id)),o.doc&&(c.l.trace("Adding nodes children "),E(t,o,o.doc,a,n,!i))},E=(t,e,o,a,n,i)=>{c.l.trace("items",o),o.forEach((o=>{switch(o.stmt){case s.b:case s.D:C(t,e,o,a,n,i);break;case s.S:{C(t,e,o.state1,a,n,i),C(t,e,o.state2,a,n,i);const s={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:c.e.sanitizeText(o.description,(0,c.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:g};t.setEdge(o.state1.id,o.state2.id,s,B),B++}}}))},R=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.c;if(t.doc)for(let o=0;o<t.doc.length;o++){const s=t.doc[o];"dir"===s.stmt&&(e=s.value)}return e},V={setConf:function(t){const e=Object.keys(t);for(const o of e)t[o]},getClasses:function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},draw:async function(t,e,o,s){c.l.info("Drawing state diagram (v2)",e),A={},s.db.getDirection();const{securityLevel:d,state:p}=(0,c.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;c.l.info(s.db.getRootDocV2()),s.db.extract(s.db.getRootDocV2()),c.l.info(s.db.getRootDocV2());const h=s.db.getStates(),u=new a.T({multigraph:!0,compound:!0}).setGraph({rankdir:R(s.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;C(u,void 0,s.db.getRootDocV2(),h,s.db,!0),"sandbox"===d&&(y=(0,n.Ltv)("#i"+e));const f="sandbox"===d?(0,n.Ltv)(y.nodes()[0].contentDocument.body):(0,n.Ltv)("body"),w=f.select('[id="'.concat(e,'"]')),m=f.select("#"+e+" g");await(0,i.r)(m,u,["barb"],l,e);c.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,s.db.getDiagramTitle());const x=w.node().getBBox(),v=x.width+16,T=x.height+16;w.attr("class",l);const S=w.node().getBBox();(0,c.i)(w,T,v,p.useMaxWidth);const k="".concat(S.x-8," ").concat(S.y-8," ").concat(v," ").concat(T);c.l.debug("viewBox ".concat(k)),w.attr("viewBox",k);const D=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const a of D){const t=a.getBBox(),e=document.createElementNS("http://www.w3.org/2000/svg",r);e.setAttribute("rx",0),e.setAttribute("ry",0),e.setAttribute("width",t.width),e.setAttribute("height",t.height),a.insertBefore(e,a.firstChild)}}},z={parser:s.p,db:s.d,renderer:V,styles:s.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,s.d.clear()}}}}]);
//# sourceMappingURL=72.7a6af048.chunk.js.map