(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(t,n,e){"use strict";e.r(n);var i=e(250),r=e(2),s=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN};var o=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return s(n(t),e)}),{left:function(n,e,i,r){for(null==i&&(i=0),null==r&&(r=n.length);i<r;){var s=i+r>>>1;t(n[s],e)<0?i=s+1:r=s}return i},right:function(n,e,i,r){for(null==i&&(i=0),null==r&&(r=n.length);i<r;){var s=i+r>>>1;t(n[s],e)>0?r=s:i=s+1}return i}}}(s);o.right,o.left;var l=Array.prototype;l.slice,l.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var c=function(t,n){var e,i,r=t.length,s=-1;if(null==n){for(;++s<r;)if(null!=(e=t[s])&&e>=e)for(i=e;++s<r;)null!=(e=t[s])&&e>i&&(i=e)}else for(;++s<r;)if(null!=(e=n(t[s],s,t))&&e>=e)for(i=e;++s<r;)null!=(e=n(t[s],s,t))&&e>i&&(i=e);return i},a=function(t,n){var e,i,r=t.length,s=-1;if(null==n){for(;++s<r;)if(null!=(e=t[s])&&e>=e)for(i=e;++s<r;)null!=(e=t[s])&&i>e&&(i=e)}else for(;++s<r;)if(null!=(e=n(t[s],s,t))&&e>=e)for(i=e;++s<r;)null!=(e=n(t[s],s,t))&&i>e&&(i=e);return i},h=function(t,n){var e,i=t.length,r=-1,s=0;if(null==n)for(;++r<i;)(e=+t[r])&&(s+=e);else for(;++r<i;)(e=+n(t[r],r,t))&&(s+=e);return s};function u(t){return t.target.depth}function f(t,n){return t.sourceLinks.length?t.depth:n-1}function y(t){return function(){return t}}function d(t,n){return g(t.source,n.source)||t.index-n.index}function p(t,n){return g(t.target,n.target)||t.index-n.index}function g(t,n){return t.y0-n.y0}function _(t){return t.value}function x(t){return t.index}function k(t){return t.nodes}function m(t){return t.links}function v(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function b(t){let{nodes:n}=t;for(const e of n){let t=e.y0,n=t;for(const i of e.sourceLinks)i.y0=t+i.width/2,t+=i.width;for(const i of e.targetLinks)i.y1=n+i.width/2,n+=i.width}}function w(){let t,n,e,i=0,r=0,s=1,o=1,l=24,u=8,w=x,E=f,A=k,L=m,S=6;function M(){const f={nodes:A.apply(null,arguments),links:L.apply(null,arguments)};return function(t){let{nodes:n,links:i}=t;for(const[e,s]of n.entries())s.index=e,s.sourceLinks=[],s.targetLinks=[];const r=new Map(n.map((t,e)=>[w(t,e,n),t]));for(const[e,s]of i.entries()){s.index=e;let{source:t,target:n}=s;"object"!==typeof t&&(t=s.source=v(r,t)),"object"!==typeof n&&(n=s.target=v(r,n)),t.sourceLinks.push(s),n.targetLinks.push(s)}if(null!=e)for(const{sourceLinks:s,targetLinks:o}of n)s.sort(e),o.sort(e)}(f),function(t){let{nodes:n}=t;for(const e of n)e.value=void 0===e.fixedValue?Math.max(h(e.sourceLinks,_),h(e.targetLinks,_)):e.fixedValue}(f),function(t){let{nodes:n}=t;const e=n.length;let i=new Set(n),r=new Set,s=0;for(;i.size;){for(const t of i){t.depth=s;for(const{target:n}of t.sourceLinks)r.add(n)}if(++s>e)throw new Error("circular link");i=r,r=new Set}}(f),function(t){let{nodes:n}=t;const e=n.length;let i=new Set(n),r=new Set,s=0;for(;i.size;){for(const t of i){t.height=s;for(const{source:n}of t.targetLinks)r.add(n)}if(++s>e)throw new Error("circular link");i=r,r=new Set}}(f),function(e){const f=function(t){let{nodes:e}=t;const r=c(e,t=>t.depth)+1,o=(s-i-l)/(r-1),a=new Array(r);for(const n of e){const t=Math.max(0,Math.min(r-1,Math.floor(E.call(null,n,r))));n.layer=t,n.x0=i+t*o,n.x1=n.x0+l,a[t]?a[t].push(n):a[t]=[n]}if(n)for(const i of a)i.sort(n);return a}(e);t=Math.min(u,(o-r)/(c(f,t=>t.length)-1)),function(n){const e=a(n,n=>(o-r-(n.length-1)*t)/h(n,_));for(const i of n){let n=r;for(const r of i){r.y0=n,r.y1=n+r.value*e,n=r.y1+t;for(const t of r.sourceLinks)t.width=t.value*e}n=(o-n+t)/(i.length+1);for(let t=0;t<i.length;++t){const e=i[t];e.y0+=n*(t+1),e.y1+=n*(t+1)}P(i)}}(f);for(let t=0;t<S;++t){const n=Math.pow(.99,t),e=Math.max(1-n,(t+1)/S);I(f,n,e),O(f,n,e)}}(f),b(f),f}function O(t,e,i){for(let r=1,s=t.length;r<s;++r){const s=t[r];for(const t of s){let n=0,i=0;for(const{source:e,value:s}of t.targetLinks){let r=s*(t.layer-e.layer);n+=C(e,t)*r,i+=r}if(!(i>0))continue;let r=(n/i-t.y0)*e;t.y0+=r,t.y1+=r,N(t)}void 0===n&&s.sort(g),T(s,i)}}function I(t,e,i){for(let r=t.length-2;r>=0;--r){const s=t[r];for(const t of s){let n=0,i=0;for(const{target:e,value:s}of t.sourceLinks){let r=s*(e.layer-t.layer);n+=$(t,e)*r,i+=r}if(!(i>0))continue;let r=(n/i-t.y0)*e;t.y0+=r,t.y1+=r,N(t)}void 0===n&&s.sort(g),T(s,i)}}function T(n,e){const i=n.length>>1,s=n[i];D(n,s.y0-t,i-1,e),j(n,s.y1+t,i+1,e),D(n,o,n.length-1,e),j(n,r,0,e)}function j(n,e,i,r){for(;i<n.length;++i){const s=n[i],o=(e-s.y0)*r;o>1e-6&&(s.y0+=o,s.y1+=o),e=s.y1+t}}function D(n,e,i,r){for(;i>=0;--i){const s=n[i],o=(s.y1-e)*r;o>1e-6&&(s.y0-=o,s.y1-=o),e=s.y0-t}}function N(t){let{sourceLinks:n,targetLinks:i}=t;if(void 0===e){for(const{source:{sourceLinks:t}}of i)t.sort(p);for(const{target:{targetLinks:t}}of n)t.sort(d)}}function P(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(p),e.sort(d)}function C(n,e){let i=n.y0-(n.sourceLinks.length-1)*t/2;for(const{target:r,width:s}of n.sourceLinks){if(r===e)break;i+=s+t}for(const{source:t,width:r}of e.targetLinks){if(t===n)break;i-=r}return i}function $(n,e){let i=e.y0-(e.targetLinks.length-1)*t/2;for(const{source:r,width:s}of e.targetLinks){if(r===n)break;i+=s+t}for(const{target:t,width:r}of n.sourceLinks){if(t===e)break;i-=r}return i}return M.update=function(t){return b(t),t},M.nodeId=function(t){return arguments.length?(w="function"===typeof t?t:y(t),M):w},M.nodeAlign=function(t){return arguments.length?(E="function"===typeof t?t:y(t),M):E},M.nodeSort=function(t){return arguments.length?(n=t,M):n},M.nodeWidth=function(t){return arguments.length?(l=+t,M):l},M.nodePadding=function(n){return arguments.length?(u=t=+n,M):u},M.nodes=function(t){return arguments.length?(A="function"===typeof t?t:y(t),M):A},M.links=function(t){return arguments.length?(L="function"===typeof t?t:y(t),M):L},M.linkSort=function(t){return arguments.length?(e=t,M):e},M.size=function(t){return arguments.length?(i=r=0,s=+t[0],o=+t[1],M):[s-i,o-r]},M.extent=function(t){return arguments.length?(i=+t[0][0],s=+t[1][0],r=+t[0][1],o=+t[1][1],M):[[i,r],[s,o]]},M.iterations=function(t){return arguments.length?(S=+t,M):S},M}var E=Math.PI,A=2*E,L=A-1e-6;function S(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function M(){return new S}S.prototype=M.prototype={constructor:S,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,r,s){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(t,n,e,i,r){t=+t,n=+n,e=+e,i=+i,r=+r;var s=this._x1,o=this._y1,l=e-t,c=i-n,a=s-t,h=o-n,u=a*a+h*h;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(u>1e-6)if(Math.abs(h*l-c*a)>1e-6&&r){var f=e-s,y=i-o,d=l*l+c*c,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),x=r*Math.tan((E-Math.acos((d+u-p)/(2*g*_)))/2),k=x/_,m=x/g;Math.abs(k-1)>1e-6&&(this._+="L"+(t+k*a)+","+(n+k*h)),this._+="A"+r+","+r+",0,0,"+ +(h*f>a*y)+","+(this._x1=t+m*l)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,i,r,s){t=+t,n=+n,s=!!s;var o=(e=+e)*Math.cos(i),l=e*Math.sin(i),c=t+o,a=n+l,h=1^s,u=s?i-r:r-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+a:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-a)>1e-6)&&(this._+="L"+c+","+a),e&&(u<0&&(u=u%A+A),u>L?this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-l)+"A"+e+","+e+",0,1,"+h+","+(this._x1=c)+","+(this._y1=a):u>1e-6&&(this._+="A"+e+","+e+",0,"+ +(u>=E)+","+h+","+(this._x1=t+e*Math.cos(r))+","+(this._y1=n+e*Math.sin(r))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};var O=M,I=Array.prototype.slice,T=function(t){return function(){return t}};function j(t){return t[0]}function D(t){return t[1]}function N(t){return t.source}function P(t){return t.target}function C(t){var n=N,e=P,i=j,r=D,s=null;function o(){var o,l=I.call(arguments),c=n.apply(this,l),a=e.apply(this,l);if(s||(s=o=O()),t(s,+i.apply(this,(l[0]=c,l)),+r.apply(this,l),+i.apply(this,(l[0]=a,l)),+r.apply(this,l)),o)return s=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(i="function"===typeof t?t:T(+t),o):i},o.y=function(t){return arguments.length?(r="function"===typeof t?t:T(+t),o):r},o.context=function(t){return arguments.length?(s=null==t?null:t,o):s},o}function $(t,n,e,i,r){t.moveTo(n,e),t.bezierCurveTo(n=(n+i)/2,e,n,r,i,r)}function z(t){return[t.source.x1,t.y0]}function F(t){return[t.target.x0,t.y1]}var q=function(){return C($).source(z).target(F)};e(60),e(61),e(59),e(26);e.d(n,"diagram",function(){return tt});var G=function(){var t=function(t,n,e,i){for(e=e||{},i=t.length;i--;e[t[i]]=n);return e},n=[1,9],e=[1,10],i=[1,5,10,12],r={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,n,e,i,r,s,o){var l=s.length-1;switch(r){case 7:const t=i.findOrCreateNode(s[l-4].trim().replaceAll('""','"')),n=i.findOrCreateNode(s[l-2].trim().replaceAll('""','"')),e=parseFloat(s[l].trim());i.addLink(t,n,e);break;case 8:case 9:case 11:this.$=s[l];break;case 10:this.$=s[l-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:e},{1:[2,6],7:11,10:[1,12]},t(e,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(i,[2,8]),t(i,[2,9]),{19:[1,16]},t(i,[2,11]),{1:[2,1]},{1:[2,5]},t(e,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:e},{15:18,16:7,17:8,18:n,20:e},{18:[1,19]},t(e,[2,3]),{12:[1,20]},t(i,[2,10]),{15:21,16:7,17:8,18:n,20:e},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,n){if(!n.recoverable){var e=new Error(t);throw e.hash=n,e}this.trace(t)},parse:function(t){var n=this,e=[0],i=[],r=[null],s=[],o=this.table,l="",c=0,a=0,h=1,u=s.slice.call(arguments,1),f=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);f.setInput(t,y.yy),y.yy.lexer=f,y.yy.parser=this,"undefined"==typeof f.yylloc&&(f.yylloc={});var p=f.yylloc;s.push(p);var g=f.options&&f.options.ranges;function _(){var t;return"number"!==typeof(t=i.pop()||f.lex()||h)&&(t instanceof Array&&(t=(i=t).pop()),t=n.symbols_[t]||t),t}"function"===typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var x,k,m,v,b,w,E,A,L={};;){if(k=e[e.length-1],this.defaultActions[k]?m=this.defaultActions[k]:(null!==x&&"undefined"!=typeof x||(x=_()),m=o[k]&&o[k][x]),"undefined"===typeof m||!m.length||!m[0]){var S="";for(b in A=[],o[k])this.terminals_[b]&&b>2&&A.push("'"+this.terminals_[b]+"'");S=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(c+1)+": Unexpected "+(x==h?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[x]||x,line:f.yylineno,loc:p,expected:A})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+x);switch(m[0]){case 1:e.push(x),r.push(f.yytext),s.push(f.yylloc),e.push(m[1]),x=null,a=f.yyleng,l=f.yytext,c=f.yylineno,p=f.yylloc;break;case 2:if(w=this.productions_[m[1]][1],L.$=r[r.length-w],L._$={first_line:s[s.length-(w||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(w||1)].first_column,last_column:s[s.length-1].last_column},g&&(L._$.range=[s[s.length-(w||1)].range[0],s[s.length-1].range[1]]),"undefined"!==typeof(v=this.performAction.apply(L,[l,a,c,y.yy,m[1],r,s].concat(u))))return v;w&&(e=e.slice(0,-1*w*2),r=r.slice(0,-1*w),s=s.slice(0,-1*w)),e.push(this.productions_[m[1]][0]),r.push(L.$),s.push(L._$),E=o[e[e.length-2]][e[e.length-1]],e.push(E);break;case 3:return!0}}return!0}},s={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===i.length?this.yylloc.first_column:0)+i[i.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"},test_match:function(t,n){var e,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,n,e,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((e=this._input.match(this.rules[r[s]]))&&(!n||e[0].length>n[0].length)){if(n=e,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,r[s])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{easy_keword_rules:!0},performAction:function(t,n,e,i){switch(e){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/,/^(?:$)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:(\u002C))/,/^(?:(\u0022))/,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,/^(?:(\u0022)(?!(\u0022)))/,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function o(){this.yy={}}return r.lexer=s,o.prototype=r,r.Parser=o,new o}();G.parser=G;const U=G;let W=[],H=[],V={};class X{constructor(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.source=t,this.target=n,this.value=e}}class Q{constructor(t){this.ID=t}}const Y={nodesMap:V,getConfig:()=>Object(i.p)().sankey,getNodes:()=>H,getLinks:()=>W,getGraph:()=>({nodes:H.map(t=>({id:t.ID})),links:W.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),addLink:(t,n,e)=>{W.push(new X(t,n,e))},findOrCreateNode:t=>(t=i.r.sanitizeText(t,Object(i.p)()),V[t]||(V[t]=new Q(t),H.push(V[t])),V[t]),getAccTitle:i.t,setAccTitle:i.F,getAccDescription:i.n,setAccDescription:i.o,getDiagramTitle:i.E,setDiagramTitle:i.D,clear:()=>{W=[],H=[],V={},Object(i.G)()}},B=class t{static next(n){return new t(n+ ++t.count)}constructor(t){this.id=t,this.href="#".concat(t)}toString(){return"url("+this.href+")"}};B.count=0;let J=B;const K={left:function(t){return t.depth},right:function(t,n){return n-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?a(t.sourceLinks,u)-1:0},justify:f},R={draw:function(t,n,e,s){var o,l,c,a,h,u,f;const{securityLevel:y,sankey:d}=Object(i.p)(),p=i.i.sankey;let g;"sandbox"===y&&(g=Object(r.H)("#i"+n));const _="sandbox"===y?Object(r.H)(g.nodes()[0].contentDocument.body):Object(r.H)("body"),x="sandbox"===y?_.select('[id="'.concat(n,'"]')):Object(r.H)('[id="'.concat(n,'"]')),k=null!==(o=null==d?void 0:d.width)&&void 0!==o?o:p.width,m=null!==(l=null==d?void 0:d.height)&&void 0!==l?l:p.width,v=null!==(c=null==d?void 0:d.useMaxWidth)&&void 0!==c?c:p.useMaxWidth,b=null!==(a=null==d?void 0:d.nodeAlignment)&&void 0!==a?a:p.nodeAlignment,E=null!==(h=null==d?void 0:d.prefix)&&void 0!==h?h:p.prefix,A=null!==(u=null==d?void 0:d.suffix)&&void 0!==u?u:p.suffix,L=null!==(f=null==d?void 0:d.showValues)&&void 0!==f?f:p.showValues;Object(i.v)(x,m,k,v);const S=s.db.getGraph(),M=K[b];w().nodeId(t=>t.id).nodeWidth(10).nodePadding(10+(L?15:0)).nodeAlign(M).extent([[0,0],[k,m]])(S);const O=Object(r.E)(r.G);x.append("g").attr("class","nodes").selectAll(".node").data(S.nodes).join("g").attr("class","node").attr("id",t=>(t.uid=J.next("node-")).id).attr("transform",function(t){return"translate("+t.x0+","+t.y0+")"}).attr("x",t=>t.x0).attr("y",t=>t.y0).append("rect").attr("height",t=>t.y1-t.y0).attr("width",t=>t.x1-t.x0).attr("fill",t=>O(t.id));x.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(S.nodes).join("text").attr("x",t=>t.x0<k/2?t.x1+6:t.x0-6).attr("y",t=>(t.y1+t.y0)/2).attr("dy","".concat(L?"0":"0.35","em")).attr("text-anchor",t=>t.x0<k/2?"start":"end").text(t=>{let{id:n,value:e}=t;return L?"".concat(n,"\n").concat(E).concat(Math.round(100*e)/100).concat(A):n});const I=x.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(S.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),T=(null==d?void 0:d.linkColor)||"gradient";if("gradient"===T){const t=I.append("linearGradient").attr("id",t=>(t.uid=J.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",t=>t.source.x1).attr("x2",t=>t.target.x0);t.append("stop").attr("offset","0%").attr("stop-color",t=>O(t.source.id)),t.append("stop").attr("offset","100%").attr("stop-color",t=>O(t.target.id))}let j;switch(T){case"gradient":j=(t=>t.uid);break;case"source":j=(t=>O(t.source.id));break;case"target":j=(t=>O(t.target.id));break;default:j=T}I.append("path").attr("d",q()).attr("stroke",j).attr("stroke-width",t=>Math.max(1,t.width))}},Z=U.parse.bind(U);U.parse=(t=>Z((t=>{return t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim()})(t)));const tt={parser:U,db:Y,renderer:R}}}]);
//# sourceMappingURL=26.66117f34.chunk.js.map