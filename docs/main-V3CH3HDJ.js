import{$ as Il,$a as m,$b as lc,$c as Ta,A as k,Aa as xr,Ac as Cc,B as gr,Ba as Ue,Bc as Pr,C as pe,Ca as Cr,Cc as kc,Cd as Kc,D as U,Da as kr,Dc as Sc,E as Pl,Ea as Ve,Eb as Zl,Ec as Mc,Ed as Gc,F as D,Fa as On,Fb as Te,Fc as Ec,Fd as Qc,G as Ee,Ga as Sr,Gc as St,Gd as Yc,H as d,Ha as ql,Hc as Tc,I as ha,Ia as $l,Ib as Jl,Ic as Rc,J as Rt,Ja as Mr,Jb as ec,Jc as ft,K as Ge,Ka as M,Kb as wa,Kc as Dc,L as tt,La as V,Lb as tc,Lc as Ma,M as nt,Ma as H,Mb as pn,Mc as Ea,N as Ci,Na as Si,Nb as ve,Nc as Qe,O as Ae,Oa as it,Ob as nc,Oc as we,P as ct,Pa as un,Pb as Tr,Pc as Ac,Q as fa,Qa as Wl,Qb as xa,Qc as Pc,R as Ol,Ra as Kl,Rb as Rr,Rc as Or,S as ge,Sa as Gl,Sb as Mi,Sc as Nn,T as se,Ta as hn,Tb as ic,Tc as Oc,U as _r,Ua as ie,Ub as Me,Uc as Yt,V as G,Va as F,Vb as rc,Vc as Ic,W as pa,Wa as N,Wb as he,Wc as ce,X as br,Xa as mt,Xb as Ca,Xc as Ln,Y as vr,Ya as ut,Yb as oc,Yc as zn,Z as yr,Za as ht,Zb as ac,Zc as Fc,_ as ki,_a as B,_b as sc,_c as Nc,a as w,aa as Se,ab as u,ac as Ei,ad as Bn,b as Ie,ba as Fl,bb as v,bc as cc,bd as Ri,c as El,ca as qt,cb as Kt,cc as In,cd as Ot,d as Z,da as ga,db as fn,dc,dd as Ir,e as of,ea as _a,eb as va,ed as Lc,f as me,fa as Nl,fb as Pt,fc as mc,fd as zc,g as yt,ga as Ll,gb as Gt,gc as uc,gd as Bc,h as Tl,ha as Be,hb as K,hd as jc,i as Vt,ia as ue,ib as Ql,ic as ka,id as Ra,j as L,ja as ne,jb as O,jc as hc,jd as Da,k as et,ka as dt,kb as le,kc as fc,kd as jn,l as Le,la as Dt,lb as A,lc as Dr,ld as Uc,m as P,ma as At,mb as Ne,mc as Ar,md as gn,n as Rl,na as zl,nb as Pe,nc as pc,o as da,oa as je,ob as E,oc as gc,p as Dl,pa as J,pb as T,pc as _c,pd as Vc,q as Y,qa as wr,qb as Yl,qc as bc,qd as Fr,r as ma,ra as Bl,rb as Xl,rc as vc,rd as Hc,s as Fe,sa as jl,sb as ya,sc as yc,sd as qc,t as wt,ta as Ul,tb as xt,tc as wc,td as Nr,u as ua,ua as $t,ub as Er,uc as qe,v as Al,va as Vl,vb as j,vc as Fn,vd as $c,w as Pn,wa as b,wb as Ct,wc as Sa,x as ze,xa as ba,xb as f,xc as Ti,xd as Wc,y as Ht,ya as Wt,yb as He,yc as Qt,yd as Un,z as ae,za as Hl,zb as kt,zc as xc}from"./chunk-SBQIGXLX.js";var gm=Z((rw,pm)=>{"use strict";pm.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var rn=Z(xn=>{"use strict";var ms,Eg=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];xn.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17};xn.getSymbolTotalCodewords=function(n){return Eg[n]};xn.getBCHDigit=function(i){let n=0;for(;i!==0;)n++,i>>>=1;return n};xn.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');ms=n};xn.isKanjiModeEnabled=function(){return typeof ms<"u"};xn.toSJIS=function(n){return ms(n)}});var So=Z(st=>{"use strict";st.L={bit:1};st.M={bit:0};st.Q={bit:3};st.H={bit:2};function Tg(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return st.L;case"m":case"medium":return st.M;case"q":case"quartile":return st.Q;case"h":case"high":return st.H;default:throw new Error("Unknown EC Level: "+i)}}st.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4};st.from=function(n,e){if(st.isValid(n))return n;try{return Tg(n)}catch(t){return e}}});var vm=Z((sw,bm)=>{"use strict";function _m(){this.buffer=[],this.length=0}_m.prototype={get:function(i){let n=Math.floor(i/8);return(this.buffer[n]>>>7-i%8&1)===1},put:function(i,n){for(let e=0;e<n;e++)this.putBit((i>>>n-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){let n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),i&&(this.buffer[n]|=128>>>this.length%8),this.length++}};bm.exports=_m});var wm=Z((lw,ym)=>{"use strict";function Gi(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}Gi.prototype.set=function(i,n,e,t){let r=i*this.size+n;this.data[r]=e,t&&(this.reservedBit[r]=!0)};Gi.prototype.get=function(i,n){return this.data[i*this.size+n]};Gi.prototype.xor=function(i,n,e){this.data[i*this.size+n]^=e};Gi.prototype.isReserved=function(i,n){return this.reservedBit[i*this.size+n]};ym.exports=Gi});var xm=Z(Mo=>{"use strict";var Rg=rn().getSymbolSize;Mo.getRowColCoords=function(n){if(n===1)return[];let e=Math.floor(n/7)+2,t=Rg(n),r=t===145?26:Math.ceil((t-13)/(2*e-2))*2,o=[t-7];for(let a=1;a<e-1;a++)o[a]=o[a-1]-r;return o.push(6),o.reverse()};Mo.getPositions=function(n){let e=[],t=Mo.getRowColCoords(n),r=t.length;for(let o=0;o<r;o++)for(let a=0;a<r;a++)o===0&&a===0||o===0&&a===r-1||o===r-1&&a===0||e.push([t[o],t[a]]);return e}});var Sm=Z(km=>{"use strict";var Dg=rn().getSymbolSize,Cm=7;km.getPositions=function(n){let e=Dg(n);return[[0,0],[e-Cm,0],[0,e-Cm]]}});var Mm=Z(re=>{"use strict";re.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var Cn={N1:3,N2:3,N3:40,N4:10};re.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7};re.from=function(n){return re.isValid(n)?parseInt(n,10):void 0};re.getPenaltyN1=function(n){let e=n.size,t=0,r=0,o=0,a=null,s=null;for(let l=0;l<e;l++){r=o=0,a=s=null;for(let c=0;c<e;c++){let h=n.get(l,c);h===a?r++:(r>=5&&(t+=Cn.N1+(r-5)),a=h,r=1),h=n.get(c,l),h===s?o++:(o>=5&&(t+=Cn.N1+(o-5)),s=h,o=1)}r>=5&&(t+=Cn.N1+(r-5)),o>=5&&(t+=Cn.N1+(o-5))}return t};re.getPenaltyN2=function(n){let e=n.size,t=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){let a=n.get(r,o)+n.get(r,o+1)+n.get(r+1,o)+n.get(r+1,o+1);(a===4||a===0)&&t++}return t*Cn.N2};re.getPenaltyN3=function(n){let e=n.size,t=0,r=0,o=0;for(let a=0;a<e;a++){r=o=0;for(let s=0;s<e;s++)r=r<<1&2047|n.get(a,s),s>=10&&(r===1488||r===93)&&t++,o=o<<1&2047|n.get(s,a),s>=10&&(o===1488||o===93)&&t++}return t*Cn.N3};re.getPenaltyN4=function(n){let e=0,t=n.data.length;for(let o=0;o<t;o++)e+=n.data[o];return Math.abs(Math.ceil(e*100/t/5)-10)*Cn.N4};function Ag(i,n,e){switch(i){case re.Patterns.PATTERN000:return(n+e)%2===0;case re.Patterns.PATTERN001:return n%2===0;case re.Patterns.PATTERN010:return e%3===0;case re.Patterns.PATTERN011:return(n+e)%3===0;case re.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(e/3))%2===0;case re.Patterns.PATTERN101:return n*e%2+n*e%3===0;case re.Patterns.PATTERN110:return(n*e%2+n*e%3)%2===0;case re.Patterns.PATTERN111:return(n*e%3+(n+e)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}re.applyMask=function(n,e){let t=e.size;for(let r=0;r<t;r++)for(let o=0;o<t;o++)e.isReserved(o,r)||e.xor(o,r,Ag(n,o,r))};re.getBestMask=function(n,e){let t=Object.keys(re.Patterns).length,r=0,o=1/0;for(let a=0;a<t;a++){e(a),re.applyMask(a,n);let s=re.getPenaltyN1(n)+re.getPenaltyN2(n)+re.getPenaltyN3(n)+re.getPenaltyN4(n);re.applyMask(a,n),s<o&&(o=s,r=a)}return r}});var hs=Z(us=>{"use strict";var on=So(),Eo=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],To=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];us.getBlocksCount=function(n,e){switch(e){case on.L:return Eo[(n-1)*4+0];case on.M:return Eo[(n-1)*4+1];case on.Q:return Eo[(n-1)*4+2];case on.H:return Eo[(n-1)*4+3];default:return}};us.getTotalCodewordsCount=function(n,e){switch(e){case on.L:return To[(n-1)*4+0];case on.M:return To[(n-1)*4+1];case on.Q:return To[(n-1)*4+2];case on.H:return To[(n-1)*4+3];default:return}}});var Em=Z(Do=>{"use strict";var Qi=new Uint8Array(512),Ro=new Uint8Array(256);(function(){let n=1;for(let e=0;e<255;e++)Qi[e]=n,Ro[n]=e,n<<=1,n&256&&(n^=285);for(let e=255;e<512;e++)Qi[e]=Qi[e-255]})();Do.log=function(n){if(n<1)throw new Error("log("+n+")");return Ro[n]};Do.exp=function(n){return Qi[n]};Do.mul=function(n,e){return n===0||e===0?0:Qi[Ro[n]+Ro[e]]}});var Tm=Z(Yi=>{"use strict";var fs=Em();Yi.mul=function(n,e){let t=new Uint8Array(n.length+e.length-1);for(let r=0;r<n.length;r++)for(let o=0;o<e.length;o++)t[r+o]^=fs.mul(n[r],e[o]);return t};Yi.mod=function(n,e){let t=new Uint8Array(n);for(;t.length-e.length>=0;){let r=t[0];for(let a=0;a<e.length;a++)t[a]^=fs.mul(e[a],r);let o=0;for(;o<t.length&&t[o]===0;)o++;t=t.slice(o)}return t};Yi.generateECPolynomial=function(n){let e=new Uint8Array([1]);for(let t=0;t<n;t++)e=Yi.mul(e,new Uint8Array([1,fs.exp(t)]));return e}});var Am=Z((pw,Dm)=>{"use strict";var Rm=Tm();function ps(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}ps.prototype.initialize=function(n){this.degree=n,this.genPoly=Rm.generateECPolynomial(this.degree)};ps.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(n.length+this.degree);e.set(n);let t=Rm.mod(e,this.genPoly),r=this.degree-t.length;if(r>0){let o=new Uint8Array(this.degree);return o.set(t,r),o}return t};Dm.exports=ps});var gs=Z(Pm=>{"use strict";Pm.isValid=function(n){return!isNaN(n)&&n>=1&&n<=40}});var _s=Z(zt=>{"use strict";var Om="[0-9]+",Pg="[A-Z $%*+\\-./:]+",Xi="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Xi=Xi.replace(/u/g,"\\u");var Og="(?:(?![A-Z0-9 $%*+\\-./:]|"+Xi+`)(?:.|[\r
]))+`;zt.KANJI=new RegExp(Xi,"g");zt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");zt.BYTE=new RegExp(Og,"g");zt.NUMERIC=new RegExp(Om,"g");zt.ALPHANUMERIC=new RegExp(Pg,"g");var Ig=new RegExp("^"+Xi+"$"),Fg=new RegExp("^"+Om+"$"),Ng=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");zt.testKanji=function(n){return Ig.test(n)};zt.testNumeric=function(n){return Fg.test(n)};zt.testAlphanumeric=function(n){return Ng.test(n)}});var an=Z(ye=>{"use strict";var Lg=gs(),bs=_s();ye.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};ye.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};ye.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};ye.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};ye.MIXED={bit:-1};ye.getCharCountIndicator=function(n,e){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!Lg.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?n.ccBits[0]:e<27?n.ccBits[1]:n.ccBits[2]};ye.getBestModeForData=function(n){return bs.testNumeric(n)?ye.NUMERIC:bs.testAlphanumeric(n)?ye.ALPHANUMERIC:bs.testKanji(n)?ye.KANJI:ye.BYTE};ye.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")};ye.isValid=function(n){return n&&n.bit&&n.ccBits};function zg(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return ye.NUMERIC;case"alphanumeric":return ye.ALPHANUMERIC;case"kanji":return ye.KANJI;case"byte":return ye.BYTE;default:throw new Error("Unknown mode: "+i)}}ye.from=function(n,e){if(ye.isValid(n))return n;try{return zg(n)}catch(t){return e}}});var zm=Z(kn=>{"use strict";var Ao=rn(),Bg=hs(),Im=So(),sn=an(),vs=gs(),Nm=7973,Fm=Ao.getBCHDigit(Nm);function jg(i,n,e){for(let t=1;t<=40;t++)if(n<=kn.getCapacity(t,e,i))return t}function Lm(i,n){return sn.getCharCountIndicator(i,n)+4}function Ug(i,n){let e=0;return i.forEach(function(t){let r=Lm(t.mode,n);e+=r+t.getBitsLength()}),e}function Vg(i,n){for(let e=1;e<=40;e++)if(Ug(i,e)<=kn.getCapacity(e,n,sn.MIXED))return e}kn.from=function(n,e){return vs.isValid(n)?parseInt(n,10):e};kn.getCapacity=function(n,e,t){if(!vs.isValid(n))throw new Error("Invalid QR Code version");typeof t>"u"&&(t=sn.BYTE);let r=Ao.getSymbolTotalCodewords(n),o=Bg.getTotalCodewordsCount(n,e),a=(r-o)*8;if(t===sn.MIXED)return a;let s=a-Lm(t,n);switch(t){case sn.NUMERIC:return Math.floor(s/10*3);case sn.ALPHANUMERIC:return Math.floor(s/11*2);case sn.KANJI:return Math.floor(s/13);case sn.BYTE:default:return Math.floor(s/8)}};kn.getBestVersionForData=function(n,e){let t,r=Im.from(e,Im.M);if(Array.isArray(n)){if(n.length>1)return Vg(n,r);if(n.length===0)return 1;t=n[0]}else t=n;return jg(t.mode,t.getLength(),r)};kn.getEncodedBits=function(n){if(!vs.isValid(n)||n<7)throw new Error("Invalid QR Code version");let e=n<<12;for(;Ao.getBCHDigit(e)-Fm>=0;)e^=Nm<<Ao.getBCHDigit(e)-Fm;return n<<12|e}});var Vm=Z(Um=>{"use strict";var ys=rn(),jm=1335,Hg=21522,Bm=ys.getBCHDigit(jm);Um.getEncodedBits=function(n,e){let t=n.bit<<3|e,r=t<<10;for(;ys.getBCHDigit(r)-Bm>=0;)r^=jm<<ys.getBCHDigit(r)-Bm;return(t<<10|r)^Hg}});var qm=Z((ww,Hm)=>{"use strict";var qg=an();function si(i){this.mode=qg.NUMERIC,this.data=i.toString()}si.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)};si.prototype.getLength=function(){return this.data.length};si.prototype.getBitsLength=function(){return si.getBitsLength(this.data.length)};si.prototype.write=function(n){let e,t,r;for(e=0;e+3<=this.data.length;e+=3)t=this.data.substr(e,3),r=parseInt(t,10),n.put(r,10);let o=this.data.length-e;o>0&&(t=this.data.substr(e),r=parseInt(t,10),n.put(r,o*3+1))};Hm.exports=si});var Wm=Z((xw,$m)=>{"use strict";var $g=an(),ws=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function li(i){this.mode=$g.ALPHANUMERIC,this.data=i}li.getBitsLength=function(n){return 11*Math.floor(n/2)+6*(n%2)};li.prototype.getLength=function(){return this.data.length};li.prototype.getBitsLength=function(){return li.getBitsLength(this.data.length)};li.prototype.write=function(n){let e;for(e=0;e+2<=this.data.length;e+=2){let t=ws.indexOf(this.data[e])*45;t+=ws.indexOf(this.data[e+1]),n.put(t,11)}this.data.length%2&&n.put(ws.indexOf(this.data[e]),6)};$m.exports=li});var Gm=Z((Cw,Km)=>{"use strict";var Wg=an();function ci(i){this.mode=Wg.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}ci.getBitsLength=function(n){return n*8};ci.prototype.getLength=function(){return this.data.length};ci.prototype.getBitsLength=function(){return ci.getBitsLength(this.data.length)};ci.prototype.write=function(i){for(let n=0,e=this.data.length;n<e;n++)i.put(this.data[n],8)};Km.exports=ci});var Ym=Z((kw,Qm)=>{"use strict";var Kg=an(),Gg=rn();function di(i){this.mode=Kg.KANJI,this.data=i}di.getBitsLength=function(n){return n*13};di.prototype.getLength=function(){return this.data.length};di.prototype.getBitsLength=function(){return di.getBitsLength(this.data.length)};di.prototype.write=function(i){let n;for(n=0;n<this.data.length;n++){let e=Gg.toSJIS(this.data[n]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),i.put(e,13)}};Qm.exports=di});var Xm=Z((Sw,xs)=>{"use strict";var Zi={single_source_shortest_paths:function(i,n,e){var t={},r={};r[n]=0;var o=Zi.PriorityQueue.make();o.push(n,0);for(var a,s,l,c,h,p,g,y,_;!o.empty();){a=o.pop(),s=a.value,c=a.cost,h=i[s]||{};for(l in h)h.hasOwnProperty(l)&&(p=h[l],g=c+p,y=r[l],_=typeof r[l]>"u",(_||y>g)&&(r[l]=g,o.push(l,g),t[l]=s))}if(typeof e<"u"&&typeof r[e]>"u"){var x=["Could not find a path from ",n," to ",e,"."].join("");throw new Error(x)}return t},extract_shortest_path_from_predecessor_list:function(i,n){for(var e=[],t=n,r;t;)e.push(t),r=i[t],t=i[t];return e.reverse(),e},find_path:function(i,n,e){var t=Zi.single_source_shortest_paths(i,n,e);return Zi.extract_shortest_path_from_predecessor_list(t,e)},PriorityQueue:{make:function(i){var n=Zi.PriorityQueue,e={},t;i=i||{};for(t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e.queue=[],e.sorter=i.sorter||n.default_sorter,e},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var e={value:i,cost:n};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof xs<"u"&&(xs.exports=Zi)});var ou=Z(mi=>{"use strict";var X=an(),eu=qm(),tu=Wm(),nu=Gm(),iu=Ym(),Ji=_s(),Po=rn(),Qg=Xm();function Zm(i){return unescape(encodeURIComponent(i)).length}function er(i,n,e){let t=[],r;for(;(r=i.exec(e))!==null;)t.push({data:r[0],index:r.index,mode:n,length:r[0].length});return t}function ru(i){let n=er(Ji.NUMERIC,X.NUMERIC,i),e=er(Ji.ALPHANUMERIC,X.ALPHANUMERIC,i),t,r;return Po.isKanjiModeEnabled()?(t=er(Ji.BYTE,X.BYTE,i),r=er(Ji.KANJI,X.KANJI,i)):(t=er(Ji.BYTE_KANJI,X.BYTE,i),r=[]),n.concat(e,t,r).sort(function(a,s){return a.index-s.index}).map(function(a){return{data:a.data,mode:a.mode,length:a.length}})}function Cs(i,n){switch(n){case X.NUMERIC:return eu.getBitsLength(i);case X.ALPHANUMERIC:return tu.getBitsLength(i);case X.KANJI:return iu.getBitsLength(i);case X.BYTE:return nu.getBitsLength(i)}}function Yg(i){return i.reduce(function(n,e){let t=n.length-1>=0?n[n.length-1]:null;return t&&t.mode===e.mode?(n[n.length-1].data+=e.data,n):(n.push(e),n)},[])}function Xg(i){let n=[];for(let e=0;e<i.length;e++){let t=i[e];switch(t.mode){case X.NUMERIC:n.push([t,{data:t.data,mode:X.ALPHANUMERIC,length:t.length},{data:t.data,mode:X.BYTE,length:t.length}]);break;case X.ALPHANUMERIC:n.push([t,{data:t.data,mode:X.BYTE,length:t.length}]);break;case X.KANJI:n.push([t,{data:t.data,mode:X.BYTE,length:Zm(t.data)}]);break;case X.BYTE:n.push([{data:t.data,mode:X.BYTE,length:Zm(t.data)}])}}return n}function Zg(i,n){let e={},t={start:{}},r=["start"];for(let o=0;o<i.length;o++){let a=i[o],s=[];for(let l=0;l<a.length;l++){let c=a[l],h=""+o+l;s.push(h),e[h]={node:c,lastCount:0},t[h]={};for(let p=0;p<r.length;p++){let g=r[p];e[g]&&e[g].node.mode===c.mode?(t[g][h]=Cs(e[g].lastCount+c.length,c.mode)-Cs(e[g].lastCount,c.mode),e[g].lastCount+=c.length):(e[g]&&(e[g].lastCount=c.length),t[g][h]=Cs(c.length,c.mode)+4+X.getCharCountIndicator(c.mode,n))}}r=s}for(let o=0;o<r.length;o++)t[r[o]].end=0;return{map:t,table:e}}function Jm(i,n){let e,t=X.getBestModeForData(i);if(e=X.from(n,t),e!==X.BYTE&&e.bit<t.bit)throw new Error('"'+i+'" cannot be encoded with mode '+X.toString(e)+`.
 Suggested mode is: `+X.toString(t));switch(e===X.KANJI&&!Po.isKanjiModeEnabled()&&(e=X.BYTE),e){case X.NUMERIC:return new eu(i);case X.ALPHANUMERIC:return new tu(i);case X.KANJI:return new iu(i);case X.BYTE:return new nu(i)}}mi.fromArray=function(n){return n.reduce(function(e,t){return typeof t=="string"?e.push(Jm(t,null)):t.data&&e.push(Jm(t.data,t.mode)),e},[])};mi.fromString=function(n,e){let t=ru(n,Po.isKanjiModeEnabled()),r=Xg(t),o=Zg(r,e),a=Qg.find_path(o.map,"start","end"),s=[];for(let l=1;l<a.length-1;l++)s.push(o.table[a[l]].node);return mi.fromArray(Yg(s))};mi.rawSplit=function(n){return mi.fromArray(ru(n,Po.isKanjiModeEnabled()))}});var su=Z(au=>{"use strict";var Io=rn(),ks=So(),Jg=vm(),e_=wm(),t_=xm(),n_=Sm(),Es=Mm(),Ts=hs(),i_=Am(),Oo=zm(),r_=Vm(),o_=an(),Ss=ou();function a_(i,n){let e=i.size,t=n_.getPositions(n);for(let r=0;r<t.length;r++){let o=t[r][0],a=t[r][1];for(let s=-1;s<=7;s++)if(!(o+s<=-1||e<=o+s))for(let l=-1;l<=7;l++)a+l<=-1||e<=a+l||(s>=0&&s<=6&&(l===0||l===6)||l>=0&&l<=6&&(s===0||s===6)||s>=2&&s<=4&&l>=2&&l<=4?i.set(o+s,a+l,!0,!0):i.set(o+s,a+l,!1,!0))}}function s_(i){let n=i.size;for(let e=8;e<n-8;e++){let t=e%2===0;i.set(e,6,t,!0),i.set(6,e,t,!0)}}function l_(i,n){let e=t_.getPositions(n);for(let t=0;t<e.length;t++){let r=e[t][0],o=e[t][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?i.set(r+a,o+s,!0,!0):i.set(r+a,o+s,!1,!0)}}function c_(i,n){let e=i.size,t=Oo.getEncodedBits(n),r,o,a;for(let s=0;s<18;s++)r=Math.floor(s/3),o=s%3+e-8-3,a=(t>>s&1)===1,i.set(r,o,a,!0),i.set(o,r,a,!0)}function Ms(i,n,e){let t=i.size,r=r_.getEncodedBits(n,e),o,a;for(o=0;o<15;o++)a=(r>>o&1)===1,o<6?i.set(o,8,a,!0):o<8?i.set(o+1,8,a,!0):i.set(t-15+o,8,a,!0),o<8?i.set(8,t-o-1,a,!0):o<9?i.set(8,15-o-1+1,a,!0):i.set(8,15-o-1,a,!0);i.set(t-8,8,1,!0)}function d_(i,n){let e=i.size,t=-1,r=e-1,o=7,a=0;for(let s=e-1;s>0;s-=2)for(s===6&&s--;;){for(let l=0;l<2;l++)if(!i.isReserved(r,s-l)){let c=!1;a<n.length&&(c=(n[a]>>>o&1)===1),i.set(r,s-l,c),o--,o===-1&&(a++,o=7)}if(r+=t,r<0||e<=r){r-=t,t=-t;break}}}function m_(i,n,e){let t=new Jg;e.forEach(function(l){t.put(l.mode.bit,4),t.put(l.getLength(),o_.getCharCountIndicator(l.mode,i)),l.write(t)});let r=Io.getSymbolTotalCodewords(i),o=Ts.getTotalCodewordsCount(i,n),a=(r-o)*8;for(t.getLengthInBits()+4<=a&&t.put(0,4);t.getLengthInBits()%8!==0;)t.putBit(0);let s=(a-t.getLengthInBits())/8;for(let l=0;l<s;l++)t.put(l%2?17:236,8);return u_(t,i,n)}function u_(i,n,e){let t=Io.getSymbolTotalCodewords(n),r=Ts.getTotalCodewordsCount(n,e),o=t-r,a=Ts.getBlocksCount(n,e),s=t%a,l=a-s,c=Math.floor(t/a),h=Math.floor(o/a),p=h+1,g=c-h,y=new i_(g),_=0,x=new Array(a),$=new Array(a),ee=0,oe=new Uint8Array(i.buffer);for(let fe=0;fe<a;fe++){let Ce=fe<l?h:p;x[fe]=oe.slice(_,_+Ce),$[fe]=y.encode(x[fe]),_+=Ce,ee=Math.max(ee,Ce)}let te=new Uint8Array(t),_e=0,Re,be;for(Re=0;Re<ee;Re++)for(be=0;be<a;be++)Re<x[be].length&&(te[_e++]=x[be][Re]);for(Re=0;Re<g;Re++)for(be=0;be<a;be++)te[_e++]=$[be][Re];return te}function h_(i,n,e,t){let r;if(Array.isArray(i))r=Ss.fromArray(i);else if(typeof i=="string"){let c=n;if(!c){let h=Ss.rawSplit(i);c=Oo.getBestVersionForData(h,e)}r=Ss.fromString(i,c||40)}else throw new Error("Invalid data");let o=Oo.getBestVersionForData(r,e);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!n)n=o;else if(n<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);let a=m_(n,e,r),s=Io.getSymbolSize(n),l=new e_(s);return a_(l,n),s_(l),l_(l,n),Ms(l,e,0),n>=7&&c_(l,n),d_(l,a),isNaN(t)&&(t=Es.getBestMask(l,Ms.bind(null,l,e))),Es.applyMask(t,l),Ms(l,e,t),{modules:l,version:n,errorCorrectionLevel:e,maskPattern:t,segments:r}}au.create=function(n,e){if(typeof n>"u"||n==="")throw new Error("No input text");let t=ks.M,r,o;return typeof e<"u"&&(t=ks.from(e.errorCorrectionLevel,ks.M),r=Oo.from(e.version),o=Es.from(e.maskPattern),e.toSJISFunc&&Io.setToSJISFunction(e.toSJISFunc)),h_(n,r,t,o)}});var Rs=Z(Sn=>{"use strict";function lu(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(t){return[t,t]}))),n.length===6&&n.push("F","F");let e=parseInt(n.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+n.slice(0,6).join("")}}Sn.getOptions=function(n){n||(n={}),n.color||(n.color={});let e=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,t=n.width&&n.width>=21?n.width:void 0,r=n.scale||4;return{width:t,scale:t?4:r,margin:e,color:{dark:lu(n.color.dark||"#000000ff"),light:lu(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}};Sn.getScale=function(n,e){return e.width&&e.width>=n+e.margin*2?e.width/(n+e.margin*2):e.scale};Sn.getImageWidth=function(n,e){let t=Sn.getScale(n,e);return Math.floor((n+e.margin*2)*t)};Sn.qrToImageData=function(n,e,t){let r=e.modules.size,o=e.modules.data,a=Sn.getScale(r,t),s=Math.floor((r+t.margin*2)*a),l=t.margin*a,c=[t.color.light,t.color.dark];for(let h=0;h<s;h++)for(let p=0;p<s;p++){let g=(h*s+p)*4,y=t.color.light;if(h>=l&&p>=l&&h<s-l&&p<s-l){let _=Math.floor((h-l)/a),x=Math.floor((p-l)/a);y=c[o[_*r+x]?1:0]}n[g++]=y.r,n[g++]=y.g,n[g++]=y.b,n[g]=y.a}}});var cu=Z(Fo=>{"use strict";var Ds=Rs();function f_(i,n,e){i.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=e,n.width=e,n.style.height=e+"px",n.style.width=e+"px"}function p_(){try{return document.createElement("canvas")}catch(i){throw new Error("You need to specify a canvas element")}}Fo.render=function(n,e,t){let r=t,o=e;typeof r>"u"&&(!e||!e.getContext)&&(r=e,e=void 0),e||(o=p_()),r=Ds.getOptions(r);let a=Ds.getImageWidth(n.modules.size,r),s=o.getContext("2d"),l=s.createImageData(a,a);return Ds.qrToImageData(l.data,n,r),f_(s,o,a),s.putImageData(l,0,0),o};Fo.renderToDataURL=function(n,e,t){let r=t;typeof r>"u"&&(!e||!e.getContext)&&(r=e,e=void 0),r||(r={});let o=Fo.render(n,e,r),a=r.type||"image/png",s=r.rendererOpts||{};return o.toDataURL(a,s.quality)}});var uu=Z(mu=>{"use strict";var g_=Rs();function du(i,n){let e=i.a/255,t=n+'="'+i.hex+'"';return e<1?t+" "+n+'-opacity="'+e.toFixed(2).slice(1)+'"':t}function As(i,n,e){let t=i+n;return typeof e<"u"&&(t+=" "+e),t}function __(i,n,e){let t="",r=0,o=!1,a=0;for(let s=0;s<i.length;s++){let l=Math.floor(s%n),c=Math.floor(s/n);!l&&!o&&(o=!0),i[s]?(a++,s>0&&l>0&&i[s-1]||(t+=o?As("M",l+e,.5+c+e):As("m",r,0),r=0,o=!1),l+1<n&&i[s+1]||(t+=As("h",a),a=0)):r++}return t}mu.render=function(n,e,t){let r=g_.getOptions(e),o=n.modules.size,a=n.modules.data,s=o+r.margin*2,l=r.color.light.a?"<path "+du(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+du(r.color.dark,"stroke")+' d="'+__(a,o,r.margin)+'"/>',h='viewBox="0 0 '+s+" "+s+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+h+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof t=="function"&&t(null,g),g}});var fu=Z(tr=>{"use strict";var b_=gm(),Ps=su(),hu=cu(),v_=uu();function Os(i,n,e,t,r){let o=[].slice.call(arguments,1),a=o.length,s=typeof o[a-1]=="function";if(!s&&!b_())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(r=e,e=n,n=t=void 0):a===3&&(n.getContext&&typeof r>"u"?(r=t,t=void 0):(r=t,t=e,e=n,n=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(e=n,n=t=void 0):a===2&&!n.getContext&&(t=e,e=n,n=void 0),new Promise(function(l,c){try{let h=Ps.create(e,t);l(i(h,n,t))}catch(h){c(h)}})}try{let l=Ps.create(e,t);r(null,i(l,n,t))}catch(l){r(l)}}tr.create=Ps.create;tr.toCanvas=Os.bind(null,hu.render);tr.toDataURL=Os.bind(null,hu.renderToDataURL);tr.toString=Os.bind(null,function(i,n,e){return v_.render(i,e)})});var I="primary",Ui=Symbol("RouteTitle"),Fa=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function bn(i){return new Fa(i)}function Aa(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function rd(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let l={},c=i.slice(0,t.length);return Aa(t,c,l)?{consumed:c,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Aa(o,i.slice(0,o.length),s)||!Aa(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function Vr(i){return new Promise((n,e)=>{i.pipe(qt()).subscribe({next:t=>n(t),error:t=>e(t)})})}function sf(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!Mt(i[e],n[e]))return!1;return!0}function Mt(i,n){let e=i?Na(i):void 0,t=n?Na(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!od(i[r],n[r]))return!1;return!0}function Na(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function od(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function lf(i){return i.length>0?i[i.length-1]:null}function yn(i){return da(i)?i:ql(i)?Fe(Promise.resolve(i)):P(i)}function ad(i){return da(i)?Vr(i):Promise.resolve(i)}var cf={exact:cd,subset:dd},sd={exact:df,subset:mf,ignored:()=>!0},ld={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},La={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Xc(i,n,e){return cf[e.paths](i.root,n.root,e.matrixParams)&&sd[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function df(i,n){return Mt(i,n)}function cd(i,n,e){if(!_n(i.segments,n.segments)||!Br(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!cd(i.children[t],n.children[t],e))return!1;return!0}function mf(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>od(i[e],n[e]))}function dd(i,n,e){return md(i,n,n.segments,e)}function md(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!_n(r,e)||n.hasChildren()||!Br(r,e,t))}else if(i.segments.length===e.length){if(!_n(i.segments,e)||!Br(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!dd(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!_n(i.segments,r)||!Br(i.segments,r,t)||!i.children[I]?!1:md(i.children[I],n,o,t)}}function Br(i,n,e){return n.every((t,r)=>sd[e](i[r].parameters,t.parameters))}var Xe=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Q([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=bn(this.queryParams),this._queryParamMap}toString(){return ff.serialize(this)}},Q=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return jr(this)}},Xt=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=bn(this.parameters),this._parameterMap}toString(){return hd(this)}};function uf(i,n){return _n(i,n)&&i.every((e,t)=>Mt(e.parameters,n[t].parameters))}function _n(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function hf(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===I&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==I&&(e=e.concat(n(r,t)))}),e}var en=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:()=>new Ft})}return i})(),Ft=class{parse(n){let e=new Ba(n);return new Xe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Di(n.root,!0)}`,t=_f(n.queryParams),r=typeof n.fragment=="string"?`#${pf(n.fragment)}`:"";return`${e}${t}${r}`}},ff=new Ft;function jr(i){return i.segments.map(n=>hd(n)).join("/")}function Di(i,n){if(!i.hasChildren())return jr(i);if(n){let e=i.children[I]?Di(i.children[I],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==I&&t.push(`${r}:${Di(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=hf(i,(t,r)=>r===I?[Di(i.children[I],!1)]:[`${r}:${Di(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[I]!=null?`${jr(i)}/${e[0]}`:`${jr(i)}/(${e.join("//")})`}}function ud(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Lr(i){return ud(i).replace(/%3B/gi,";")}function pf(i){return encodeURI(i)}function za(i){return ud(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ur(i){return decodeURIComponent(i)}function Zc(i){return Ur(i.replace(/\+/g,"%20"))}function hd(i){return`${za(i.path)}${gf(i.parameters)}`}function gf(i){return Object.entries(i).map(([n,e])=>`;${za(n)}=${za(e)}`).join("")}function _f(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Lr(e)}=${Lr(r)}`).join("&"):`${Lr(e)}=${Lr(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var bf=/^[^\/()?;#]+/;function Pa(i){let n=i.match(bf);return n?n[0]:""}var vf=/^[^\/()?;=#]+/;function yf(i){let n=i.match(vf);return n?n[0]:""}var wf=/^[^=?&#]+/;function xf(i){let n=i.match(wf);return n?n[0]:""}var Cf=/^[^&#]+/;function kf(i){let n=i.match(Cf);return n?n[0]:""}var Ba=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[I]=new Q(e,t)),r}parseSegment(){let n=Pa(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(n),new Xt(Ur(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=yf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Pa(this.remaining);r&&(t=r,this.capture(t))}n[Ur(e)]=Ur(t)}parseQueryParam(n){let e=xf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=kf(this.remaining);a&&(t=a,this.capture(t))}let r=Zc(e),o=Zc(t);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Pa(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new k(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=I);let s=this.parseChildren(e+1);t[a??I]=Object.keys(s).length===1&&s[I]?s[I]:new Q([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new k(4011,!1)}};function fd(i){return i.segments.length>0?new Q([],{[I]:i}):i}function pd(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=pd(r);if(t===I&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new Q(i.segments,n);return Sf(e)}function Sf(i){if(i.numberOfChildren===1&&i.children[I]){let n=i.children[I];return new Q(i.segments.concat(n.segments),n.children)}return i}function Zt(i){return i instanceof Xe}function gd(i,n,e=null,t=null,r=new Ft){let o=_d(i);return bd(o,n,e,t,r)}function _d(i){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Q(o.url,a);return o===i&&(n=s),s}let t=e(i.root),r=fd(t);return n??r}function bd(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return Oa(o,o,o,e,t,r);let a=Mf(n);if(a.toRoot())return Oa(o,o,new Q([],{}),e,t,r);let s=Ef(a,o,i),l=s.processChildren?Pi(s.segmentGroup,s.index,a.commands):yd(s.segmentGroup,s.index,a.commands);return Oa(o,s.segmentGroup,l,e,t,r)}function Hr(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ii(i){return typeof i=="object"&&i!=null&&i.outlets}function Jc(i,n,e){i||="\u0275";let t=new Xe;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function Oa(i,n,e,t,r,o){let a={};for(let[c,h]of Object.entries(t??{}))a[c]=Array.isArray(h)?h.map(p=>Jc(c,p,o)):Jc(c,h,o);let s;i===n?s=e:s=vd(i,n,e);let l=fd(pd(s));return new Xe(l,a,r)}function vd(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=vd(o,n,e)}),new Q(i.segments,t)}var qr=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Hr(t[0]))throw new k(4003,!1);let r=t.find(Ii);if(r&&r!==lf(t))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Mf(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new qr(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new qr(e,n,t)}var Hn=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function Ef(i,n,e){if(i.isAbsolute)return new Hn(n,!0,0);if(!e)return new Hn(n,!1,NaN);if(e.parent===null)return new Hn(e,!0,0);let t=Hr(i.commands[0])?0:1,r=e.segments.length-1+t;return Tf(e,r,i.numberOfDoubleDots)}function Tf(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new k(4005,!1);r=t.segments.length}return new Hn(t,!1,r-o)}function Rf(i){return Ii(i[0])?i[0].outlets:{[I]:i}}function yd(i,n,e){if(i??=new Q([],{}),i.segments.length===0&&i.hasChildren())return Pi(i,n,e);let t=Df(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new Q(i.segments.slice(0,t.pathIndex),{});return o.children[I]=new Q(i.segments.slice(t.pathIndex),i.children),Pi(o,0,r)}else return t.match&&r.length===0?new Q(i.segments,{}):t.match&&!i.hasChildren()?ja(i,n,e):t.match?Pi(i,0,r):ja(i,n,e)}function Pi(i,n,e){if(e.length===0)return new Q(i.segments,{});{let t=Rf(e),r={};if(Object.keys(t).some(o=>o!==I)&&i.children[I]&&i.numberOfChildren===1&&i.children[I].segments.length===0){let o=Pi(i.children[I],n,e);return new Q(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=yd(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new Q(i.segments,r)}}function Df(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],s=e[t];if(Ii(s))break;let l=`${s}`,c=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!td(l,c,a))return o;t+=2}else{if(!td(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function ja(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ii(o)){let l=Af(o.outlets);return new Q(t,l)}if(r===0&&Hr(e[0])){let l=i.segments[n];t.push(new Xt(l.path,ed(e[0]))),r++;continue}let a=Ii(o)?o.outlets[I]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Hr(s)?(t.push(new Xt(a,ed(s))),r+=2):(t.push(new Xt(a,{})),r++)}return new Q(t,{})}function Af(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=ja(new Q([],{}),0,t))}),n}function ed(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function td(i,n,e){return i==e.path&&Mt(n,e.parameters)}var qn="imperative",xe=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(xe||{}),Ze=class{id;url;constructor(n,e){this.id=n,this.url=e}},Jt=class extends Ze{type=xe.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ot=class extends Ze{urlAfterRedirects;type=xe.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Oe=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Oe||{}),Wn=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Wn||{}),rt=class extends Ze{reason;code;type=xe.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function wd(i){return i instanceof rt&&(i.code===Oe.Redirect||i.code===Oe.SupersededByNewNavigation)}var Et=class extends Ze{reason;code;type=xe.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},vn=class extends Ze{error;target;type=xe.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Fi=class extends Ze{urlAfterRedirects;state;type=xe.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$r=class extends Ze{urlAfterRedirects;state;type=xe.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wr=class extends Ze{urlAfterRedirects;state;shouldActivate;type=xe.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Kr=class extends Ze{urlAfterRedirects;state;type=xe.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gr=class extends Ze{urlAfterRedirects;state;type=xe.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qr=class{route;type=xe.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yr=class{route;type=xe.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Xr=class{snapshot;type=xe.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zr=class{snapshot;type=xe.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jr=class{snapshot;type=xe.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},eo=class{snapshot;type=xe.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kn=class{routerEvent;position;anchor;scrollBehavior;type=xe.Scroll;constructor(n,e,t,r){this.routerEvent=n,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Gn=class{},Ni=class{},Qn=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Pf(i){return!(i instanceof Gn)&&!(i instanceof Qn)&&!(i instanceof Ni)}var to=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new wn(this.rootInjector)}},wn=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new to(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(Ee(Rt))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),no=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ua(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=Ua(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Va(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Va(n,this._root).map(e=>e.value)}};function Ua(i,n){if(i===n.value)return n;for(let e of n.children){let t=Ua(i,e);if(t)return t}return null}function Va(i,n){if(i===n.value)return[n];for(let e of n.children){let t=Va(i,e);if(t.length)return t.unshift(n),t}return[]}var Ye=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vn(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var Li=class extends no{snapshot;constructor(n,e){super(n),this.snapshot=e,Xa(this,n)}toString(){return this.snapshot.toString()}};function xd(i,n){let e=Of(i,n),t=new et([new Xt("",{})]),r=new et({}),o=new et({}),a=new et({}),s=new et(""),l=new Nt(t,r,a,s,o,I,i,e.root);return l.snapshot=e.root,new Li(new Ye(l,[]),e)}function Of(i,n){let e={},t={},r={},a=new Yn([],e,r,"",t,I,i,null,{},n);return new zi("",new Ye(a,[]))}var Nt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(Y(c=>c[Ui]))??P(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Y(n=>bn(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Y(n=>bn(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},If="always";function Ya(i,n,e){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:w(w({},n.params),i.params),data:w(w({},n.data),i.data),resolve:w(w(w(w({},i.data),n.data),r?.data),i._resolvedData)}:t={params:w({},i.params),data:w({},i.data),resolve:w(w({},i.data),i._resolvedData??{})},r&&kd(r)&&(t.resolve[Ui]=r.title),t}var Yn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ui]}constructor(n,e,t,r,o,a,s,l,c,h){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=bn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=bn(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},zi=class extends no{url;constructor(n,e){super(e),this.url=n,Xa(this,e)}toString(){return Cd(this._root)}};function Xa(i,n){n.value._routerState=i,n.children.forEach(e=>Xa(i,e))}function Cd(i){let n=i.children.length>0?` { ${i.children.map(Cd).join(", ")} } `:"";return`${i.value}${n}`}function Ia(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Mt(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Mt(n.params,e.params)||i.paramsSubject.next(e.params),sf(n.url,e.url)||i.urlSubject.next(e.url),Mt(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Ha(i,n){let e=Mt(i.params,n.params)&&uf(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||Ha(i.parent,n.parent))}function kd(i){return typeof i.title=="string"||i.title===null}var Sd=new D(""),Vi=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=I;activateEvents=new ge;deactivateEvents=new ge;attachEvents=new ge;detachEvents=new ge;routerOutletData=Rr();parentContexts=d(wn);location=d(Sr);changeDetector=d(Me);inputBinder=d(Hi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new qa(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Dt]})}return i})(),qa=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===Nt?this.route:n===wn?this.childContexts:n===Sd?this.outletData:this.parent.get(n,e)}},Hi=new D(""),Md=(()=>{class i{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=ma([this.options.queryParams?t.queryParams:P({}),t.params,t.data]).pipe(ue(([o,a,s],l)=>(s=w(w(w({},o),a),s),l===0?P(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=ac(t.component);if(!a){this.unsubscribeFromRouteData(e);return}let s=this.outletSeenKeys.get(e);s||(s=new Set,this.outletSeenKeys.set(e,s));for(let c of Object.keys(o))s.add(c);let l=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:c}of a.inputs){let h=o[c];(h!==void 0||l==="alwaysUndefined"||s.has(c))&&e.activatedComponentRef.setInput(c,h)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){On()};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),Za=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&v(0,"router-outlet")},dependencies:[Vi],encapsulation:2,changeDetection:1})}return i})();function Ja(i){let n=i.children&&i.children.map(Ja),e=n?Ie(w({},i),{children:n}):w({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==I&&(e.component=Za),e}function Ff(i,n,e){let t=Bi(i,n._root,e?e._root:void 0);return new Li(t,n)}function Bi(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=Nf(i,n,e);return new Ye(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Bi(i,s)),a}}let t=Lf(n.value),r=n.children.map(o=>Bi(i,o));return new Ye(t,r)}}function Nf(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return Bi(i,t,r);return Bi(i,t)})}function Lf(i){return new Nt(new et(i.url),new et(i.params),new et(i.queryParams),new et(i.fragment),new et(i.data),i.outlet,i.component,i)}var Xn=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Ed="ngNavigationCancelingError";function io(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=Zt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Td(!1,Oe.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Td(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Ed]=!0,e.cancellationCode=n,e}function zf(i){return Rd(i)&&Zt(i.url)}function Rd(i){return!!i&&i[Ed]}var $a=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),Ia(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=Vn(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Vn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Vn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=Vn(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new eo(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Zr(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(Ia(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ia(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},ro=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},$n=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Bf(i,n,e){let t=i._root,r=n?n._root:null;return Ai(t,r,e,[t.value])}function jf(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Jn(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!Pl(i)?i:n.get(i):t}function Ai(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Vn(n);return i.children.forEach(a=>{Uf(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Oi(s,e.getContext(a),r)),r}function Uf(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Vf(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ro(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ai(i,n,s?s.children:null,t,r):Ai(i,n,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new $n(s.outlet.component,a))}else a&&Oi(n,s,r),r.canActivateChecks.push(new ro(t)),o.component?Ai(i,null,s?s.children:null,t,r):Ai(i,null,e,t,r);return r}function Vf(i,n,e){if(typeof e=="function")return Ge(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!_n(i.url,n.url);case"pathParamsOrQueryParamsChange":return!_n(i.url,n.url)||!Mt(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ha(i,n)||!Mt(i.queryParams,n.queryParams);default:return!Ha(i,n)}}function Oi(i,n,e){let t=Vn(i),r=i.value;Object.entries(t).forEach(([o,a])=>{r.component?n?Oi(a,n.children.getContext(o),e):Oi(a,null,e):Oi(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new $n(n.outlet.component,r)):e.canDeactivateChecks.push(new $n(null,r)):e.canDeactivateChecks.push(new $n(null,r))}function qi(i){return typeof i=="function"}function Hf(i){return typeof i=="boolean"}function qf(i){return i&&qi(i.canLoad)}function $f(i){return i&&qi(i.canActivate)}function Wf(i){return i&&qi(i.canActivateChild)}function Kf(i){return i&&qi(i.canDeactivate)}function Gf(i){return i&&qi(i.canMatch)}function Dd(i){return i instanceof Dl||i?.name==="EmptyError"}var zr=Symbol("INITIAL_VALUE");function Zn(){return ue(i=>ma(i.map(n=>n.pipe(Se(1),Be(zr)))).pipe(Y(n=>{for(let e of n)if(e!==!0){if(e===zr)return zr;if(e===!1||Qf(e))return e}return!0}),ae(n=>n!==zr),Se(1)))}function Qf(i){return Zt(i)||i instanceof Xn}function Ad(i){return i.aborted?P(void 0).pipe(Se(1)):new Vt(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Pd(i){return ne(Ad(i))}function Yf(i){return wt(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?P(Ie(w({},n),{guardsResult:!0})):Xf(o,e,t).pipe(wt(a=>a&&Hf(a)?Zf(e,r,i):P(a)),Y(a=>Ie(w({},n),{guardsResult:a})))})}function Xf(i,n,e){return Fe(i).pipe(wt(t=>ip(t.component,t.route,e,n)),qt(t=>t!==!0,!0))}function Zf(i,n,e){return Fe(n).pipe(ki(t=>Al(ep(t.route.parent,e),Jf(t.route,e),np(i,t.path),tp(i,t.route))),qt(t=>t!==!0,!0))}function Jf(i,n){return i!==null&&n&&n(new Jr(i)),P(!0)}function ep(i,n){return i!==null&&n&&n(new Xr(i)),P(!0)}function tp(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return P(!0);let t=e.map(r=>Pn(()=>{let o=n._environmentInjector,a=Jn(r,o),s=$f(a)?a.canActivate(n,i):Ge(o,()=>a(n,i));return yn(s).pipe(qt())}));return P(t).pipe(Zn())}function np(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>jf(o)).filter(o=>o!==null).map(o=>Pn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Jn(s,l),h=Wf(c)?c.canActivateChild(e,i):Ge(l,()=>c(e,i));return yn(h).pipe(qt())});return P(a).pipe(Zn())}));return P(r).pipe(Zn())}function ip(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return P(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Jn(a,s),c=Kf(l)?l.canDeactivate(i,n,e,t):Ge(s,()=>l(i,n,e,t));return yn(c).pipe(qt())});return P(o).pipe(Zn())}function rp(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return P(!0);let a=o.map(s=>{let l=Jn(s,i),c=qf(l)?l.canLoad(n,e):Ge(i,()=>l(n,e)),h=yn(c);return r?h.pipe(Pd(r)):h});return P(a).pipe(Zn(),Od(t))}function Od(i){return Tl(dt(n=>{if(typeof n!="boolean")throw io(i,n)}),Y(n=>n===!0))}function op(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return P(!0);let s=a.map(l=>{let c=Jn(l,i),h=Gf(c)?c.canMatch(n,e,r):Ge(i,()=>c(n,e,r));return yn(h).pipe(Pd(o))});return P(s).pipe(Zn(),Od(t))}var It=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},ji=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function ap(i){throw new k(4e3,!1)}function sp(i){throw Td(!1,Oe.GuardRejected)}var Wa=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return me(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[I])throw ap(`${n.redirectTo}`);r=r.children[I]}})}applyRedirectCommands(n,e,t,r,o){return me(this,null,function*(){let a=yield lp(e,r,o);if(a instanceof Xe)throw new ji(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new ji(s);return s})}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new Xe(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,t,r)}),new Q(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new k(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function lp(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Vr(yn(Ge(e,()=>t(n))))}function cp(i,n){return i.providers&&!i._injector&&(i._injector=Mr(i.providers,n,`Route: ${i.path}`)),i._injector??n}function pt(i){return i.outlet||I}function dp(i,n){let e=i.filter(t=>pt(t)===n);return e.push(...i.filter(t=>pt(t)!==n)),e}var Ka={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Id(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function mp(i,n,e,t,r,o,a){let s=Fd(i,n,e);if(!s.matched)return P(s);let l=Id(o(s));return t=cp(n,t),op(t,n,e,r,l,a).pipe(Y(c=>c===!0?s:w({},Ka)))}function Fd(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?w({},Ka):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||rd)(e,i,n);if(!r)return w({},Ka);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?w(w({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function nd(i,n,e,t,r){return e.length>0&&fp(i,e,t,r)?{segmentGroup:new Q(n,hp(t,new Q(e,i.children))),slicedSegments:[]}:e.length===0&&pp(i,e,t)?{segmentGroup:new Q(i.segments,up(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new Q(i.segments,i.children),slicedSegments:e}}function up(i,n,e,t){let r={};for(let o of e)if(ao(i,n,o)&&!t[pt(o)]){let a=new Q([],{});r[pt(o)]=a}return w(w({},t),r)}function hp(i,n){let e={};e[I]=n;for(let t of i)if(t.path===""&&pt(t)!==I){let r=new Q([],{});e[pt(t)]=r}return e}function fp(i,n,e,t){return e.some(r=>!ao(i,n,r)||!(pt(r)!==I)?!1:!(t!==void 0&&pt(r)===t))}function pp(i,n,e){return e.some(t=>ao(i,n,t))}function ao(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function gp(i,n,e){return n.length===0&&!i.children[e]}var Ga=class{};function _p(i,n,e,t,r,o,a,s){return me(this,null,function*(){return new Qa(i,n,e,t,r,a,o,s).recognize()})}var bp=31,Qa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Wa(this.urlSerializer,this.urlTree)}noMatchError(n){return new k(4002,`'${n.segmentGroup}'`)}recognize(){return me(this,null,function*(){let n=nd(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(n),r=new Ye(t,e),o=new zi("",r),a=gd(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return me(this,null,function*(){let e=new Yn([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),I,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,I,e),rootSnapshot:e}}catch(t){if(t instanceof ji)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof It?this.noMatchError(t):t}})}processSegmentGroup(n,e,t,r,o){return me(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=yield this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof Ye?[a]:[]})}processChildren(n,e,t,r){return me(this,null,function*(){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=t.children[l],h=dp(e,l),p=yield this.processSegmentGroup(n,h,c,l,r);a.push(...p)}let s=Nd(a);return vp(s),s})}processSegment(n,e,t,r,o,a,s){return me(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??n,e,l,t,r,o,a,s)}catch(c){if(c instanceof It||Dd(c))continue;throw c}if(gp(t,r,o))return new Ga;throw new It(t)})}processSegmentAgainstRoute(n,e,t,r,o,a,s,l){return me(this,null,function*(){if(pt(t)!==a&&(a===I||!ao(r,o,t)))throw new It(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,l);throw new It(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,s){return me(this,null,function*(){let{matched:l,parameters:c,consumedSegments:h,positionalParamSegments:p,remainingSegments:g}=Fd(e,r,o);if(!l)throw new It(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>bp&&(this.allowRedirects=!1));let y=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=yield this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,Id(y),n),x=yield this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(n,t,e,x.concat(g),a,!1,s)})}createSnapshot(n,e,t,r,o){let a=new Yn(t,r,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,wp(e),pt(e),e.component??e._loadedComponent??null,e,xp(e),n),s=Ya(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(n,e,t,r,o,a){return me(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=te=>this.createSnapshot(n,t,te.consumedSegments,te.parameters,a),l=yield Vr(mp(e,t,r,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new It(e);n=t._injector??n;let{routes:c}=yield this.getChildConfig(n,t,r),h=t._loadedInjector??n,{parameters:p,consumedSegments:g,remainingSegments:y}=l,_=this.createSnapshot(n,t,g,p,a),{segmentGroup:x,slicedSegments:$}=nd(e,g,y,c,o);if($.length===0&&x.hasChildren()){let te=yield this.processChildren(h,c,x,_);return new Ye(_,te)}if(c.length===0&&$.length===0)return new Ye(_,[]);let ee=pt(t)===o,oe=yield this.processSegment(h,c,x,$,ee?I:o,!0,_);return new Ye(_,oe instanceof Ye?[oe]:[])})}getChildConfig(n,e,t){return me(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Vr(rp(n,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw sp(e)}return{routes:[],injector:n}})}};function vp(i){i.sort((n,e)=>n.value.outlet===I?-1:e.value.outlet===I?1:n.value.outlet.localeCompare(e.value.outlet))}function yp(i){let n=i.value.routeConfig;return n&&n.path===""}function Nd(i){let n=[],e=new Set;for(let t of i){if(!yp(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Nd(t.children);n.push(new Ye(t.value,r))}return n.filter(t=>!e.has(t))}function wp(i){return i.data||{}}function xp(i){return i.resolve||{}}function Cp(i,n,e,t,r,o,a){return wt(s=>me(null,null,function*(){let{state:l,tree:c}=yield _p(i,n,e,t,s.extractedUrl,r,o,a);return Ie(w({},s),{targetSnapshot:l,urlAfterRedirects:c})}))}function kp(i){return wt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return P(n);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Ld(s))o.add(l);let a=0;return Fe(o).pipe(ki(s=>r.has(s)?Sp(s,e,i):(s.data=Ya(s,s.parent,i).resolve,P(void 0))),dt(()=>a++),ga(1),wt(s=>a===o.size?P(n):Le))})}function Ld(i){let n=i.children.map(e=>Ld(e)).flat();return[i,...n]}function Sp(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!kd(t)&&(r[Ui]=t.title),Pn(()=>(i.data=Ya(i,i.parent,e).resolve,Mp(r,i,n).pipe(Y(o=>(i._resolvedData=o,i.data=w(w({},i.data),o),null)))))}function Mp(i,n,e){let t=Na(i);if(t.length===0)return P({});let r={};return Fe(t).pipe(wt(o=>Ep(i[o],n,e).pipe(qt(),dt(a=>{if(a instanceof Xn)throw io(new Ft,a);r[o]=a}))),ga(1),Y(()=>r),yr(o=>Dd(o)?Le:Rl(o)))}function Ep(i,n,e){let t=n._environmentInjector,r=Jn(i,t),o=r.resolve?r.resolve(n,e):Ge(t,()=>r(n,e));return yn(o)}function id(i){return ue(n=>{let e=i(n);return e?Fe(e).pipe(Y(()=>n)):P(n)})}var es=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===I);return t}getResolvedTitleForRoute(e){return e.data[Ui]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:()=>d(zd)})}return i})(),zd=(()=>{class i extends es{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(Ee(bc))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),tn=new D("",{factory:()=>({})}),ei=new D(""),so=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(tc);loadComponent(e,t){return me(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=me(this,null,function*(){try{let o=yield ad(Ge(e,()=>t.loadComponent())),a=yield jd(xa(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=me(this,null,function*(){try{let o=yield Bd(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})();function Bd(i,n,e,t){return me(this,null,function*(){let r=yield ad(Ge(e,()=>i.loadChildren())),o=yield jd(xa(r)),a;o instanceof $l||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),t&&t(i);let s,l,c=!1,h;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,h=a,l=s.get(ei,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ja),injector:s,factory:h}})}function jd(i){return me(this,null,function*(){return i})}var lo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:()=>d(Tp)})}return i})(),Tp=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})(),ts=new D(""),ns=new D("");function Ud(i,n,e){let t=i.get(ns),r=i.get(ct);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),Rp(i)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=t;return l&&Ge(i,()=>l({transition:s,from:n,to:e})),a}function Rp(i){return new Promise(n=>{Wt({read:()=>setTimeout(n)},{injector:i})})}var Dp=()=>{},is=new D(""),co=(()=>{class i{currentNavigation=G(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=G(null);events=new L;transitionAbortWithErrorSubject=new L;configLoader=d(so);environmentInjector=d(Rt);destroyRef=d(fa);urlSerializer=d(en);rootContexts=d(wn);location=d(In);inputBindingEnabled=d(Hi,{optional:!0})!==null;titleStrategy=d(es);options=d(tn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||If;urlHandlingStrategy=d(lo);createViewTransition=d(ts,{optional:!0});navigationErrorHandler=d(is,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>P(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Qr(r)),t=r=>this.events.next(new Yr(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;ve(()=>{this.transitions?.next(Ie(w({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new et(null),this.transitions.pipe(ae(t=>t!==null),ue(t=>{let r=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===t.id;return P(t).pipe(ue(l=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Oe.SupersededByNewNavigation),Le;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?Ie(w({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),p=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&p!=="reload")return this.events.next(new Et(l.id,this.urlSerializer.serialize(l.rawUrl),"",Wn.IgnoredSameUrlNavigation)),l.resolve(!1),Le;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return P(l).pipe(ue(g=>(this.events.next(new Jt(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Le:Promise.resolve(g))),Cp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),dt(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(y=>(y.finalUrl=g.urlAfterRedirects,y)),this.events.next(new Ni)}),ue(g=>Fe(t.routesRecognizeHandler.deferredHandle??P(void 0)).pipe(Y(()=>g))),dt(()=>{let g=new Fi(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(g)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:g,extractedUrl:y,source:_,restoredState:x,extras:$}=l,ee=new Jt(g,this.urlSerializer.serialize(y),_,x);this.events.next(ee);let oe=xd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Ie(w({},l),{targetSnapshot:oe,urlAfterRedirects:y,extras:Ie(w({},$),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(te=>(te.finalUrl=y,te)),P(t)}else return this.events.next(new Et(l.id,this.urlSerializer.serialize(l.extractedUrl),"",Wn.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Le}),Y(l=>{let c=new $r(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=t=Ie(w({},l),{guards:Bf(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),t}),Yf(l=>this.events.next(l)),ue(l=>{if(t.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw io(this.urlSerializer,l.guardsResult);let c=new Wr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!s())return Le;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",Oe.GuardRejected),Le;if(l.guards.canActivateChecks.length===0)return P(l);let h=new Kr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(h),!s())return Le;let p=!1;return P(l).pipe(kp(this.paramsInheritanceStrategy),dt({next:()=>{p=!0;let g=new Gr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(g)},complete:()=>{p||this.cancelNavigationTransition(l,"",Oe.NoDataFromResolver)}}))}),id(l=>{let c=p=>{let g=[];if(p.routeConfig?._loadedComponent)p.component=p.routeConfig?._loadedComponent;else if(p.routeConfig?.loadComponent){let y=p._environmentInjector;g.push(this.configLoader.loadComponent(y,p.routeConfig).then(_=>{p.component=_}))}for(let y of p.children)g.push(...c(y));return g},h=c(l.targetSnapshot.root);return h.length===0?P(l):Fe(Promise.all(h).then(()=>l))}),ue(l=>{let c=Ff(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=t=l=Ie(w({},l),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),P(l)}),id(()=>this.afterPreactivation()),ue(()=>{let{currentSnapshot:l,targetSnapshot:c}=t,h=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return h?Fe(h).pipe(Y(()=>t)):P(t)}),Se(1),ue(l=>{r=!1,this.events.next(new Gn);let c=t.beforeActivateHandler.deferredHandle;return c?Fe(c.then(()=>l)):P(l)}),dt(l=>{new $a(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(o=!0,this.currentNavigation.update(c=>(c.abort=Dp,c)),this.lastSuccessfulNavigation.set(ve(this.currentNavigation)),this.events.next(new ot(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),ne(Ad(a.signal).pipe(ae(()=>!o&&r),dt(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",Oe.Aborted)}))),dt({complete:()=>{o=!0}}),ne(this.transitionAbortWithErrorSubject.pipe(dt(l=>{throw l}))),Fl(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",Oe.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),yr(l=>{if(o=!0,this.destroyed)return t.resolve(!1),Le;if(Rd(l))this.events.next(new rt(t.id,this.urlSerializer.serialize(t.extractedUrl),l.message,l.cancellationCode)),zf(l)?this.events.next(new Qn(l.url,l.navigationBehaviorOptions)):t.resolve(!1);else{let c=new vn(t.id,this.urlSerializer.serialize(t.extractedUrl),l,t.targetSnapshot??void 0);try{let h=Ge(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(h instanceof Xn){let{message:p,cancellationCode:g}=io(this.urlSerializer,h);this.events.next(new rt(t.id,this.urlSerializer.serialize(t.extractedUrl),p,g)),this.events.next(new Qn(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return Le}))}))}cancelNavigationTransition(e,t,r){let o=new rt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=ve(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})();function Ap(i){return i!==qn}var Vd=new D("");var Hd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:()=>d(Pp)})}return i})(),oo=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Pp=(()=>{class i extends oo{static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})(),mo=(()=>{class i{urlSerializer=d(en);options=d(tn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(In);urlHandlingStrategy=d(lo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Xe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Xe?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=xd(null,d(Rt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:()=>d(Op)})}return i})(),Op=(()=>{class i extends mo{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Jt?this.updateStateMemento():e instanceof Et?this.commitTransition(t):e instanceof Fi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Gn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof rt&&!wd(e)?this.restoreHistory(t):e instanceof vn?this.restoreHistory(t,!0):e instanceof ot&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=w(w({},s),this.generateNgRouterState(o,l,t));this.location.replaceState(e,"",c)}else{let l=w(w({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",l)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?w({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):w({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})();function uo(i,n){i.events.pipe(ae(e=>e instanceof ot||e instanceof rt||e instanceof vn||e instanceof Et),Y(e=>e instanceof ot||e instanceof Et?0:(e instanceof rt?e.code===Oe.Redirect||e.code===Oe.SupersededByNewNavigation:!1)?2:1),ae(e=>e!==2),Se(1)).subscribe(()=>{n()})}var at=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Kl);stateManager=d(mo);options=d(tn,{optional:!0})||{};pendingTasks=d(Ol);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(co);urlSerializer=d(en);location=d(In);urlHandlingStrategy=d(lo);injector=d(Rt);_events=new L;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Hd);injectorCleanup=d(Vd,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(ei,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Hi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new yt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=ve(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof rt&&t.code!==Oe.Redirect&&t.code!==Oe.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ot)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Qn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=w({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Ap(r.source)},a);this.scheduleNavigation(s,qn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Pf(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Ie(w({},o),{browserUrl:e})),r){let c=w({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,t,a,o).catch(c=>{this.disposed||this.injector.get(_r)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ve(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ja),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,c=l?this.currentUrlTree.fragment:a,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=w(w({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let g=r?r.snapshot:this.routerState.snapshot.root;p=_d(g)}catch(g){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return bd(p,e,h,c??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Zt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,qn,null,t)}navigate(e,t={skipLocationChange:!1}){return Ip(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(gr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=w({},ld):t===!1?r=w({},La):r=w(w({},La),t),Zt(e))return Xc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Xc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((p,g)=>{s=p,l=g});let h=this.pendingTasks.add();return uo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})();function Ip(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new k(4008,!1)}var Lp=(()=>{class i{router=d(at);stateManager=d(mo);fragment=G("");queryParams=G({});path=G("");serializer=d(en);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ot&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Xe(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=je({token:i,factory:i.\u0275fac})}return i})(),ho=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Tr("href"),{optional:!0});reactiveHref=nc(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ve(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ve(this._target)}_target=G(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ve(this._queryParams)}_queryParams=G(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ve(this._fragment)}_fragment=G(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ve(this._queryParamsHandling)}_queryParamsHandling=G(void 0);set state(e){this._state.set(e)}get state(){return ve(this._state)}_state=G(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ve(this._info)}_info=G(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ve(this._relativeTo)}_relativeTo=G(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ve(this._preserveFragment)}_preserveFragment=G(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ve(this._skipLocationChange)}_skipLocationChange=G(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ve(this._replaceUrl)}_replaceUrl=G(!1);browserUrl=Rr(void 0);isAnchorElement;onChanges=new L;applicationErrorHandler=d(_r);options=d(tn,{optional:!0});reactiveRouterState=d(Lp);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=G(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Zt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l=this.browserUrl(),c=w({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,c)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=pn(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Zt(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return ve(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(Ve(at),Ve(Nt),zl("tabindex"),Ve(Ue),Ve(J),Ve(Ei))};static \u0275dir=H({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&K("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&ie("href",r.reactiveHref(),Vl)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",he],skipLocationChange:[2,"skipLocationChange","skipLocationChange",he],replaceUrl:[2,"replaceUrl","replaceUrl",he],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[Dt]})}return i})();var $i=class{};var qd=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ae(e=>e instanceof ot),ki(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=Mr(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Fe(r).pipe(ua())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return P(null);let r;t.loadChildren&&t.canLoad===void 0?r=Fe(this.loader.loadChildren(e,t)):r=P(null);let o=r.pipe(wt(a=>a===null?P(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return Fe([o,a]).pipe(ua())}else return o})}static \u0275fac=function(t){return new(t||i)(Ee(at),Ee(Rt),Ee($i),Ee(so))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$d=new D(""),zp=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=qn;restoredId=0;store={};isHydrating=d(Bl,{optional:!0})??!1;urlSerializer=d(en);zone=d(se);viewportScroller=d(ka);transitions=d(co);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&d(hn).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Jt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ot?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Et&&e.code===Wn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Kn)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let r=ve(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>me(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Kn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){On()};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})();function Bp(){return d(at).routerState.root}function Wi(i,n){return{\u0275kind:i,\u0275providers:n}}function jp(){let i=d(Ae);return n=>{let e=i.get(hn);if(n!==e.components[0])return;let t=i.get(at),r=i.get(Wd);i.get(os)===1&&t.initialNavigation(),i.get(Qd,null,{optional:!0})?.setUpPreloading(),i.get($d,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Wd=new D("",{factory:()=>new L}),os=new D("",{factory:()=>1});function Kd(){let i=[{provide:jl,useValue:!0},{provide:os,useValue:0},Si(()=>{let n=d(Ae);return n.get(lc,Promise.resolve()).then(()=>new Promise(t=>{let r=n.get(at),o=n.get(Wd);uo(r,()=>{t(!0)}),n.get(co).afterPreactivation=()=>(t(!0),o.closed?P(void 0):o),r.initialNavigation()}))})];return Wi(2,i)}function Gd(){let i=[Si(()=>{d(at).setUpLocationChangeListener()}),{provide:os,useValue:2}];return Wi(3,i)}var Qd=new D("");function Yd(i){return Wi(0,[{provide:Qd,useExisting:qd},{provide:$i,useExisting:i}])}function Xd(i={}){return Wi(8,[{provide:Hi,useFactory:()=>new Md(i)}])}function Zd(i){ba("NgRouterViewTransitions");let n=[{provide:ts,useValue:Ud},{provide:ns,useValue:w({skipNextTransition:!!i?.skipInitialTransition},i)}];return Wi(9,n)}var Jd=[In,{provide:en,useClass:Ft},at,wn,{provide:Nt,useFactory:Bp},so],fo=(()=>{class i{constructor(){}static forRoot(e,t){return{ngModule:i,providers:[Jd,[],{provide:ei,multi:!0,useValue:e},[],t?.errorHandler?{provide:is,useValue:t.errorHandler}:[],{provide:tn,useValue:t||{}},t?.useHash?Vp():Hp(),Up(),t?.preloadingStrategy?Yd(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?qp(t):[],t?.bindToComponentInputs?Xd(typeof t.bindToComponentInputs=="object"?t.bindToComponentInputs:{}).\u0275providers:[],t?.enableViewTransitions?Zd().\u0275providers:[],$p()]}}static forChild(e){return{ngModule:i,providers:[{provide:ei,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({})}return i})();function Up(){return{provide:$d,useFactory:()=>{let i=d(ka),n=d(tn);return n.scrollOffset&&i.setOffset(n.scrollOffset),new zp(n)}}}function Vp(){return{provide:Ei,useClass:dc}}function Hp(){return{provide:Ei,useClass:cc}}function qp(i){return[i.initialNavigation==="disabled"?Gd().\u0275providers:[],i.initialNavigation==="enabledBlocking"?Kd().\u0275providers:[]]}var rs=new D("");function $p(){return[{provide:rs,useFactory:jp},{provide:Gl,multi:!0,useExisting:rs}]}var tm=[{title:"Automatic Conformance Checking",previewImgSrc:"assets/acc.png",page:{href:"http://conformance-checking.hvehged4gdaucchf.westeurope.azurecontainer.io",description:"A framework providing automatic conformance diagnostics on event logs uploaded to Celonis. (A Celonis account and application key is required)"},source:{href:"https://github.com/lakhoune/Automatic-Conformance-Checking"}},{title:"Social Bot Framework",subtitle:"Bot modeling and development",previewImgSrc:"assets/sbf-preview.webp",page:{href:"https://sbf-dev.tech4comp.dbis.rwth-aachen.de",description:"A framework for building bots for social media platforms. It provides an intuitive approach to bot development"},source:{href:"https://github.com/rwth-acis/Social-Bot-Framework"}},{title:"MobSOS Evaluation Center",subtitle:"Community Analytics",previewImgSrc:"assets/mobsos-preview.webp",page:{href:"https://monitor.tech4comp.dbis.rwth-aachen.de/welcome",description:"MobSOS is a framework for community information systems (CIS) success modeling. The goal is to increase success awareness in a community."},source:{href:"https://github.com/rwth-acis/mobsos-evaluation-center"}},{title:"StudyGrow Cards",subtitle:"Digital Flashcards",previewImgSrc:"assets/cards-preview.webp",page:{href:"https://cards.leier.lu/",description:"This application can be used to create flashcards and share them with the community"},source:{href:"https://github.com/StudyGrow/Cards"}},{title:"This website",subtitle:"My personal website, which you are currently visiting",previewImgSrc:"assets/website-preview.png",page:{href:"https://lakhoune.com/",description:"This website is built with Angular and hosted on GitHub Pages. It is a single page application (SPA) and uses the Angular Material UI library. The source code is available on GitHub, along with a CI/CD pipeline. Feel free to use this website as a template for your own website, but please give credit where credit is due :) "},source:{href:"https://github.com/lakhoune/lakhoune.github.io"}},{title:"Wifi-QR",subtitle:"Quickly share your Wifi credentials",previewImgSrc:"assets/wifi-qr.jpg",page:{href:"https://lakhoune.com/wifi-qr/",description:"This application can be used to generate a QR code containing your Wifi credentials. This way, you can easily share your Wifi with your friends."},source:{href:"https://github.com/lakhoune/lakhoune.github.io"}}];var po=class{constructor(){this.title="",this.subtitle="",this.previewImgSrc="",this.page={href:"",description:""},this.source={logo:"",href:""}}};var Wp=["*"];var Kp=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Gp=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Qp=new D("MAT_CARD_CONFIG"),nn=(()=>{class i{appearance;constructor(){let e=d(Qp,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Wp,decls:1,vars:0,template:function(t,r){t&1&&(le(),A(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return i})(),go=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var ti=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),_o=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),nm=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),ni=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Gp,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(le(Kp),A(0),Kt(1,"div",0),A(2,1),fn(),A(3,2))},encapsulation:2})}return i})();var im=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return i})();var rm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return i})();var om=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[ce]})}return i})();function Yp(i,n){if(i&1&&(m(0,"mat-card-subtitle"),f(1),u()),i&2){let e=O();b(),He(e.project.subtitle)}}function Xp(i,n){i&1&&(m(0,"mat-card-subtitle"),v(1,"br"),u())}function Zp(i,n){if(i&1&&v(0,"div",4),i&2){let e=O();B("innerHTML",e.project.page.description,Ul)}}function Jp(i,n){if(i&1&&(m(0,"a",5),f(1,"View Source "),v(2,"i",6),u()),i&2){let e=O();B("href",e.project.source.href,$t)}}var am=(()=>{class i{constructor(){this.project=new po}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-project"]],inputs:{project:"project"},standalone:!1,decls:15,vars:8,consts:[[1,"shadow","project","h-100","w-100","project"],[1,"project-title"],["target","_blank","rel","noopener noreferrer",1,"img-link",3,"href"],["mat-card-image","","alt","website preview",1,"card-img-top","thumbnail",3,"src"],[3,"innerHTML"],["mat-button","","target","_blank","rel","noopener noreferrer",1,"m-0",3,"href"],[1,"bi","bi-box-arrow-up-right"]],template:function(t,r){t&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),f(3),u(),F(4,Yp,2,1,"mat-card-subtitle"),F(5,Xp,2,0,"mat-card-subtitle"),u(),m(6,"a",2),v(7,"img",3),u(),m(8,"mat-card-content"),F(9,Zp,1,1,"div",4),u(),m(10,"mat-card-actions")(11,"a",5),f(12,"Open "),v(13,"i",6),u(),F(14,Jp,3,1,"a",5),u()()),t&2&&(b(3),He(r.project.title),b(),N(r.project.subtitle?4:-1),b(),N(r.project.subtitle?-1:5),b(),B("href",r.project.page.href,$t),b(),B("src",r.project.previewImgSrc,$t),b(2),N(r.project.page.description?9:-1),b(2),B("href",r.project.page.href,$t),b(3),N(r.project.source?14:-1))},dependencies:[zn,nn,nm,ti,ni,im,_o,go],styles:['.mat-mdc-card-header[_ngcontent-%COMP%]{z-index:2;background:#fff}.img-link[_ngcontent-%COMP%]{margin-bottom:auto;height:50%!important}.img-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto!important;z-index:1;width:100%!important;transition:1s;background-size:cover;background-position:center;display:block;position:relative;top:50%;transform:translateY(-50%)}.img-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(-50%)}.mat-mdc-card-image[_ngcontent-%COMP%]:first-child{margin-top:0!important}.mat-mdc-card-content[_ngcontent-%COMP%]{z-index:2;background:#fff}mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;z-index:2}.project[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;overflow:hidden;transition:.3s;border-radius:20px}.project[_ngcontent-%COMP%]:hover{height:fit-content;transform:scale(1.05)}mat-card-actions[_ngcontent-%COMP%]{background-color:#26c6da}a[_ngcontent-%COMP%]{color:#f1f1f1!important}mat-card-header[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:7px;background-color:#26c6da}'],changeDetection:1})}}return i})();function tg(i,n){if(i&1&&(m(0,"div",3),v(1,"app-project",4),u()),i&2){let e=n.$implicit;b(),B("project",e)}}var sm=(()=>{class i{constructor(){this.projects=tm}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-projects"]],standalone:!1,decls:6,vars:0,consts:[[1,"container","justify-content-center","my-3"],[1,"m-auto"],[1,"row","projects","justify-content-center"],[1,"col-12","col-md-4","col-xl-3","col-xxl-3","mb-2"],[3,"project"]],template:function(t,r){t&1&&(m(0,"div",0)(1,"h2",1),f(2,"Projects"),u()(),m(3,"div",2),ut(4,tg,2,1,"div",3,mt),u()),t&2&&(b(4),ht(r.projects))},dependencies:[am],styles:[".example-header-image[_ngcontent-%COMP%]{background-size:cover}img.card-img-top[_ngcontent-%COMP%]{width:auto;transition:1s;background-size:cover}img.card-img-top[_ngcontent-%COMP%]:hover{height:30vh;width:auto;transform:scale(1.1)}.project[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;overflow:hidden;transition:.3s}.project[_ngcontent-%COMP%]:hover{height:fit-content;transform:scale(1.05)}*[_ngcontent-%COMP%]{box-sizing:border-box}h2[_ngcontent-%COMP%]{width:fit-content}"],changeDetection:1})}}return i})();var lm=(()=>{class i{constructor(){this.profilePictureLink="https://avatars.githubusercontent.com/u/38857665?v=4"}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-about-me"]],standalone:!1,decls:34,vars:0,consts:[["appearance","outlined",1,"shadow"],["mat-card-avatar","",1,"header-image"],[1,"my-2"],["dir","auto"],["href","https://www.rwth-aachen.de/","target","_blank","rel","nofollow"]],template:function(t,r){t&1&&(m(0,"mat-card",0)(1,"mat-card-header"),v(2,"div",1),m(3,"mat-card-title"),f(4,"Ben Lakhoune"),u(),m(5,"mat-card-subtitle"),f(6,"Business Process Consultant"),u()(),m(7,"mat-card-content",2)(8,"p",3),f(9," Hey! Glad, you made it. I'm Ben and I have a Master of Science in Computer Science from "),m(10,"a",4),f(11,"RWTH Aachen"),u(),f(12,". I am passionate about data science and process analytics. "),u(),m(13,"ul",3)(14,"li"),f(15,"\u{1F604} "),m(16,"strong"),f(17,"Pronouns"),u(),f(18,": He/Him"),u(),m(19,"li"),f(20," \u{1F331} "),m(21,"strong"),f(22,"I'm currently learning"),u(),f(23,": Object-centric Process Mining, GenAI agents "),u(),m(24,"li"),f(25," \u{1F9E0} "),m(26,"strong"),f(27,"Favorite quote"),u(),f(28,': "There are only two hard things in Computer Science: cache invalidation and naming things" (Phil Karlton) '),u(),m(29,"li"),f(30,"\u26A1\uFE0F "),m(31,"strong"),f(32,"Favorite tech stack"),u(),f(33,": M.E.A.N."),u()()()())},dependencies:[Ic,nn,rm,ti,ni,_o,go],styles:[".header-image[_ngcontent-%COMP%]{background-image:url(https://avatars.githubusercontent.com/u/38857665?v=4);background-size:cover;width:70px;height:70px}"],changeDetection:1})}}return i})();var Lt=class{constructor(n,e){this.logo=n,this.link=e}};var cm=[new Lt("bi bi-github","https://github.com/lakhoune"),new Lt("bi bi-envelope-fill","mailto:a.b.lakhoune@gmail.com"),new Lt("bi bi-linkedin","https://www.linkedin.com/in/lakhoune/"),new Lt("bi bi-patch-check-fill","https://www.credly.com/users/ben-lakhoune"),new Lt("bi bi-twitter","https://twitter.com/ben_lakhoune"),new Lt({src:"assets/icons/orcid.png"},"https://orcid.org/0009-0005-0961-5604")];function og(i,n){if(i&1&&v(0,"img",4),i&2){let e=O().$implicit,t=O();B("src",t.getSource(e.logo),$t)}}function ag(i,n){if(i&1&&v(0,"i"),i&2){let e=O().$implicit;Ct(e.logo)}}function sg(i,n){if(i&1&&(m(0,"a",1),F(1,og,1,1,"img",4)(2,ag,1,2,"i",5),u()),i&2){let e=n.$implicit,t=O();B("href",e.link,$t),b(),N(t.getType(e.logo)==="object"?1:2)}}var dm=(()=>{class i{constructor(e){this.http=e,this.socials=cm}getType(e){return typeof e=="string"?"string":"object"}getSource(e){return typeof e=="string"?"":e.src}ngOnInit(){}openCV(e){this.http.get("/assets/"+e,{responseType:"blob"}).subscribe(t=>{let r=URL.createObjectURL(t);window.open(r,"_blank")})}static{this.\u0275fac=function(t){return new(t||i)(Ve(Ar))}}static{this.\u0275cmp=M({type:i,selectors:[["app-socials"]],standalone:!1,decls:5,vars:0,consts:[[1,"content","socials","shadow-lg"],["target","_blank","rel","noopener noreferrer",3,"href"],["target","_blank","rel","noopener noreferrer","title","Open CV",2,"width","35px","cursor","pointer",3,"click"],[1,"bi","bi-file-earmark-text"],["alt","",2,"width","35px",3,"src"],[3,"class"]],template:function(t,r){t&1&&(m(0,"aside",0),ut(1,sg,3,2,"a",1,mt),m(3,"a",2),K("click",function(){return r.openCV("CV Ben Lakhoune.pdf")}),v(4,"i",3),u()()),t&2&&(b(),ht(r.socials))},styles:["@media screen and (min-width:1400px){.content[_ngcontent-%COMP%]{top:0;left:0;bottom:0;position:fixed;margin-top:auto;margin-bottom:auto;height:fit-content;flex-direction:column!important;display:flex!important;border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important;padding:.5rem!important}}@media screen and (max-width:1400px){.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:17px}.content[_ngcontent-%COMP%]{margin-bottom:.5rem;justify-content:space-around;display:flex!important;border-radius:5px}}@media screen and (max-width:510px){.socials[_ngcontent-%COMP%]{margin-bottom:25px}}.socials[_ngcontent-%COMP%]{background-color:#0097a7;font-size:xx-large;z-index:2}a[_ngcontent-%COMP%], .bi-file-earmark-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}}return i})();var ss=[{year:2025,experiences:[{title:"Consultant at SAP",date:new Date("2025-02-01"),description:"From February 2025 until present. Team Process Intelligence Services"}]},{year:2024,experiences:[{title:"Master Thesis",date:new Date("2024-03-08"),description:"Master Thesis at the Information Systems & Databases at RWTH Aachen University"},{title:"Consultant at Capgemini Invent",date:new Date("2024-04-01"),description:"From April 2024 until October 2024. Team Enterprise Transformation - Enterprise Data & Analytics with focus on Process Mining"}]},{year:2023,experiences:[{title:"Organizer of Data-driven Sustainability Workshop",date:new Date("2023-10-13"),description:"Organized a workshop on the topic of data-driven sustainability at the ESCP Berlin Business School"},{title:"Celonis Value Realization Expert Certification",date:new Date("2023-09-08"),description:"Successful completion of Celonis Value Realization Expert Partner Certification"},{title:"Celonis Consultant Star Certification",date:new Date("2023-08-04"),description:"Successful completion of Celonis Consultant Bootcamp"},{date:new Date("2023-09-01"),title:"Working student at Capgemini Invent",description:"From September 2023 until December 2023. Team Enterprise Transformation - Enterprise Data & Analytics with focus on Process Mining"}]},{year:2022,experiences:[{title:"Bachelors Degree",date:new Date("2022-02-07")},{title:"Celonis Hackathon at digitalCHURCH ",date:new Date("2022-04-29"),description:"Developed a prototype visualization for clusters of process variants"},{title:"Practical Lab at E.ON",date:new Date("2022-08-01"),description:"Developed a model for market penetration of heatpumps in Germany"}]},{year:2021,experiences:[{title:"Work as research assistant at RWTH Aachen University",date:new Date("2021-05-01"),description:'From May 2021 until August 2023. Worked on the project "tech4comp"'},{title:"Work as webmaster for the AVL academic circle",date:new Date("2021-10-31")}]},{year:2020,experiences:[{title:"Launch of Cards webpage",date:new Date("2020-02-07")}]}];var cg=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],dg=["mat-icon, [matMenuItemIcon]","*"];function mg(i,n){i&1&&(Ci(),m(0,"svg",2),v(1,"polygon",3),u())}var ug=["*"];function hg(i,n){if(i&1){let e=Pt();Kt(0,"div",0),Ql("click",function(){tt(e);let r=O();return nt(r.closed.emit("click"))})("animationstart",function(r){tt(e);let o=O();return nt(o._onAnimationStart(r.animationName))})("animationend",function(r){tt(e);let o=O();return nt(o._onAnimationDone(r.animationName))})("animationcancel",function(r){tt(e);let o=O();return nt(o._onAnimationDone(r.animationName))}),Kt(1,"div",1),A(2),fn()()}if(i&2){let e=O();Ct(e._classList),j("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Gt("id",e.panelId),ie("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ds=new D("MAT_MENU_PANEL"),cs=(()=>{class i{_elementRef=d(J);_document=d(ct);_focusMonitor=d(Ti);_parentMenu=d(ds,{optional:!0});_changeDetectorRef=d(Me);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new L;_focused=new L;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(Qt).load(Nn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&K("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(ie("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),j("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",he],disableRipple:[2,"disableRipple","disableRipple",he]},exportAs:["matMenuItem"],ngContentSelectors:dg,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(le(cg),A(0),m(1,"span",0),A(2,1),u(),v(3,"div",1),F(4,mg,2,0,":svg:svg",2)),t&2&&(b(3),B("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),b(),N(r._triggersSubmenu?4:-1))},dependencies:[Or],encapsulation:2})}return i})();var fg=new D("MatMenuContent");var pg=new D("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ls="_mat-menu-enter",vo="_mat-menu-exit",ri=(()=>{class i{_elementRef=d(J);_changeDetectorRef=d(Me);_injector=d(Ae);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Qe();_allItems;_directDescendantItems=new wr;_classList={};_panelAnimationState="void";_animationDone=new L;_isAnimating=G(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=w({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ge;close=this.closed;panelId=d(ft).getId("mat-menu-panel-");constructor(){let e=d(pg);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Rc(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Be(this._directDescendantItems),ue(e=>ze(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Be(this._directDescendantItems),ue(t=>ze(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:St(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Wt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ie(w({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===vo;(t||e===ls)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ls||e===vo)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(vo),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ls:vo)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Be(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,fg,5)(o,cs,5)(o,cs,4),t&2){let a;E(a=T())&&(r.lazyContent=a.first),E(a=T())&&(r._allItems=a),E(a=T())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&Pe(Hl,5),t&2){let o;E(o=T())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&ie("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",he],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:he(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Te([{provide:ds,useExisting:i}])],ngContentSelectors:ug,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(le(),Wl(0,hg,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return i})(),gg=new D("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(Ae);return()=>Ir(i)}});var ii=new WeakMap,_g=(()=>{class i{_canHaveBackdrop;_element=d(J);_viewContainerRef=d(Sr);_menuItemInstance=d(cs,{optional:!0,self:!0});_dir=d(Yt,{optional:!0});_focusMonitor=d(Ti);_ngZone=d(se);_injector=d(Ae);_scrollStrategy=d(gg);_changeDetectorRef=d(Me);_animationsDisabled=Qe();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=yt.EMPTY;_menuCloseSubscription=yt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=d(ds,{optional:!0});this._parentMaterialMenu=t instanceof ri?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ii.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=ii.get(t);ii.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ri&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ne(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof ri&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Se(1)).subscribe(()=>{t.detach(),ii.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ii.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=jc(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof ri&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Lc({positionStrategy:zc(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[h,p]=[r,o],g=0;if(this._triggersSubmenu()){if(p=r=e.xPosition==="before"?"start":"end",o=h=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let y=this._parentMaterialMenu.items.first;this._parentInnerPadding=y?y._getHostElement().offsetTop:0}g=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:l,overlayX:h,overlayY:a,offsetY:g},{originX:o,originY:l,overlayX:p,overlayY:a,offsetY:g},{originX:r,originY:c,overlayX:h,overlayY:s,offsetY:-g},{originX:o,originY:c,overlayX:p,overlayY:s,offsetY:-g}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:P(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ae(a=>this._menuOpen&&a!==this._menuItemInstance)):P();return ze(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Nc(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ii.get(e)===this}_triggerIsAriaDisabled(){return he(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){On()};static \u0275dir=H({type:i})}return i})(),mm=(()=>{class i extends _g{_cleanupTouchstart;_hoverSubscription=yt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ge;onMenuOpen=this.menuOpened;menuClosed=new ge;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d(Ue);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{yc(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){vc(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&K("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&ie("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[it]})}return i})();var um=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Ln,jn,ce,Ot]})}return i})();function vg(i,n){if(i&1&&(v(0,"i",1),m(1,"mat-menu",null,0)(3,"div",2),f(4),u()()),i&2){let e=xt(2),t=O();B("matMenuTriggerFor",e),b(4),kt(" ",t.e.description," ")}}var hm=(()=>{class i{constructor(){this.e={title:"",date:new Date,description:""}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-experience"]],inputs:{e:"e"},standalone:!1,decls:5,vars:5,consts:[["menu","matMenu"],[1,"ms-2","bi","bi-info-circle",3,"matMenuTriggerFor"],[1,"p-3"]],template:function(t,r){t&1&&(f(0),m(1,"strong"),f(2),Jl(3,"date"),u(),F(4,vg,5,2)),t&2&&(kt("",r.e.title," on "),b(2),He(ec(3,3,r.e.date)),b(2),N(r.e.description?4:-1))},dependencies:[ri,mm,uc],encapsulation:2,changeDetection:1})}}return i})();var wg=["cvButton"],xg=["cvButtonDe"];function Cg(i,n){if(i&1&&(m(0,"li"),v(1,"app-experience",11),u()),i&2){let e=n.$implicit;b(),B("e",e)}}function kg(i,n){if(i&1&&(m(0,"ul"),ut(1,Cg,2,1,"li",null,mt),u()),i&2){let e=O().$implicit;b(),ht(e.experiences)}}function Sg(i,n){if(i&1&&(m(0,"div")(1,"div",10)(2,"h2"),f(3),u(),F(4,kg,3,0,"ul"),u()()),i&2){let e=n.$implicit,t=n.$index;Ct("container "+(t%2===0?"left":"right")),b(3),He(e.year),b(),N(e.experiences?4:-1)}}var fm=(()=>{class i{constructor(e){this.http=e,this.experiences=ss.sort((t,r)=>r.year-t.year),ss.forEach(t=>{t.experiences&&(t.experiences=t.experiences.sort((r,o)=>o.date?.getTime()-r.date?.getTime()))})}ngOnInit(){let e=new URLSearchParams(window.location.search),t=e.get("openCV"),r=e.get("lang");t&&setTimeout(()=>{r==="de"?this.cvButtonDe?._elementRef.nativeElement.click():this.cvButton?._elementRef.nativeElement.click(),window.history.replaceState({},"",window.location.pathname)},20)}openCV(e){this.http.get("/assets/"+e,{responseType:"blob"}).subscribe(t=>{let r=URL.createObjectURL(t);window.open(r,"_blank")})}static{this.\u0275fac=function(t){return new(t||i)(Ve(Ar))}}static{this.\u0275cmp=M({type:i,selectors:[["app-experiences"]],viewQuery:function(t,r){if(t&1&&Pe(wg,5)(xg,5),t&2){let o;E(o=T())&&(r.cvButton=o.first),E(o=T())&&(r.cvButtonDe=o.first)}},standalone:!1,decls:19,vars:0,consts:[["cvButton",""],["cvButtonDe",""],["appearance","outlined",1,"shadow"],[1,"my-2"],["href",`https://www.sap.com/germany
      `,"target","_blank","rel","nofollow"],["mat-flat-button","","color","primary","aria-label","icon for cv",1,"me-2",3,"click"],[1,"ms-1","bi","bi-file-earmark-text"],["mat-flat-button","","color","primary","aria-label","icon for cv",3,"click"],[1,"timeline","py-3"],[3,"class"],[1,"content","shadow"],[3,"e"]],template:function(t,r){t&1&&(m(0,"mat-card",2),v(1,"mat-card-header"),m(2,"mat-card-content",3)(3,"p"),f(4," Currently working as a Consultant for "),m(5,"a",4),f(6,"SAP"),u(),f(7,". I specialize in process analytics, providing clients with valuable insights to optimize their operational business processes. I contribute to designing strategies that enhance data management and value realization, facilitate cross-functional collaboration and foster innovation in data analytics. "),u(),m(8,"button",5,0),K("click",function(){return r.openCV("CV Ben Lakhoune.pdf")}),f(10," Open CV"),v(11,"i",6),u(),m(12,"button",7,1),K("click",function(){return r.openCV("Ben Lakhoune Lebenslauf.pdf")}),f(14," Lebenslauf \xF6ffnen"),v(15,"i",6),u()()(),m(16,"div",8),ut(17,Sg,5,4,"div",9,mt),u()),t&2&&(b(17),ht(r.experiences))},dependencies:[zn,nn,ti,ni,hm],styles:['.timeline[_ngcontent-%COMP%]{position:relative;margin:0 auto;border-radius:0 0 7px 7px}.timeline[_ngcontent-%COMP%]:after{content:"";position:absolute;width:6px;background-color:#0097a7;top:0;bottom:0;left:50%}.container[_ngcontent-%COMP%]{margin:0;padding:10px 40px;position:relative;background-color:inherit;width:50%}.container[_ngcontent-%COMP%]:after{content:"";position:absolute;width:25px;height:25px;right:-17px;background-color:#fff;border:4px solid #ff6f00;top:15px;border-radius:50%;z-index:1}.left[_ngcontent-%COMP%]{left:0;padding-left:0}.right[_ngcontent-%COMP%]{left:50%;padding-right:0}.left[_ngcontent-%COMP%]:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;right:30px;border:medium solid white;border-width:10px 0 10px 10px;border-color:transparent transparent transparent white}.right[_ngcontent-%COMP%]:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;left:30px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent}.right[_ngcontent-%COMP%]:after{left:-10px}.content[_ngcontent-%COMP%]{padding:20px 30px;background-color:#fff;position:relative;border-radius:6px}@media screen and (max-width:600px){.timeline[_ngcontent-%COMP%]:after{left:31px;border-radius:0 0 7px 7px}.container[_ngcontent-%COMP%]{width:100%;padding-left:70px;padding-right:25px}.container[_ngcontent-%COMP%]:before{left:60px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent}.left[_ngcontent-%COMP%]:after, .right[_ngcontent-%COMP%]:after{left:21px}.right[_ngcontent-%COMP%]{left:0%;padding-right:0}.left[_ngcontent-%COMP%]{padding-right:0}}'],changeDetection:1})}}return i})();var ko=(()=>{class i{constructor(){}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-home"]],standalone:!1,decls:14,vars:0,consts:[[1,"container"],[1,"container-fluid","d-flex","justify-items-center"]],template:function(t,r){t&1&&(m(0,"div",0)(1,"section")(2,"h2"),f(3,"About me"),u(),v(4,"app-about-me"),u(),m(5,"section")(6,"h2"),f(7,"Experience"),u(),v(8,"app-experiences"),u()(),m(9,"section")(10,"div",1),v(11,"app-projects"),u()(),v(12,"app-socials")(13,"br"))},dependencies:[sm,lm,dm,fm],encapsulation:2,changeDetection:1})}}return i})();var Lu=of(fu());var y_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),w_={passive:!0},pu=(()=>{class i{_platform=d(qe);_ngZone=d(se);_renderer=d(xr).createRenderer(null,null);_styleLoader=d(Qt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Le;this._styleLoader.load(y_);let t=Sa(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new L,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,w_)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=Sa(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({})}return i})();var _u=new D("MAT_INPUT_VALUE_ACCESSOR");var Is=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Vt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ae(e=>e.some(t=>t.target===n)),Ll({bufferSize:1,refCount:!0}),ne(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bu=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=d(se);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Is(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var x_=["notch"],C_=["*"],vu=["iconPrefixContainer"],yu=["textPrefixContainer"],wu=["iconSuffixContainer"],xu=["textSuffixContainer"],k_=["textField"],S_=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],M_=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function E_(i,n){i&1&&v(0,"span",21)}function T_(i,n){if(i&1&&(m(0,"label",20),A(1,1),F(2,E_,1,0,"span",21),u()),i&2){let e=O(2);B("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ie("for",e._control.disableAutomaticLabeling?null:e._control.id),b(2),N(!e.hideRequiredMarker&&e._control.required?2:-1)}}function R_(i,n){if(i&1&&F(0,T_,3,5,"label",20),i&2){let e=O();N(e._hasFloatingLabel()?0:-1)}}function D_(i,n){i&1&&v(0,"div",7)}function A_(i,n){}function P_(i,n){if(i&1&&un(0,A_,0,0,"ng-template",13),i&2){O(2);let e=xt(1);B("ngTemplateOutlet",e)}}function O_(i,n){if(i&1&&(m(0,"div",9),F(1,P_,1,1,null,13),u()),i&2){let e=O();B("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),b(),N(e._forceDisplayInfixLabel()?-1:1)}}function I_(i,n){i&1&&(m(0,"div",10,2),A(2,2),u())}function F_(i,n){i&1&&(m(0,"div",11,3),A(2,3),u())}function N_(i,n){}function L_(i,n){if(i&1&&un(0,N_,0,0,"ng-template",13),i&2){O();let e=xt(1);B("ngTemplateOutlet",e)}}function z_(i,n){i&1&&(m(0,"div",14,4),A(2,4),u())}function B_(i,n){i&1&&(m(0,"div",15,5),A(2,5),u())}function j_(i,n){i&1&&v(0,"div",16)}function U_(i,n){i&1&&(m(0,"div",18),A(1,6),u())}function V_(i,n){if(i&1&&(m(0,"mat-hint",22),f(1),u()),i&2){let e=O(2);B("id",e._hintLabelId),b(),He(e.hintLabel)}}function H_(i,n){if(i&1&&(m(0,"div",19),F(1,V_,2,2,"mat-hint",22),A(2,7),v(3,"div",23),A(4,8),u()),i&2){let e=O();b(),N(e.hintLabel?1:-1)}}var ui=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-label"]]})}return i})(),q_=new D("MatError");var hi=(()=>{class i{align="start";id=d(ft).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Gt("id",r.id),ie("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),$_=new D("MatPrefix");var W_=new D("MatSuffix");var Ru=new D("FloatingLabelParent"),Cu=(()=>{class i{_elementRef=d(J);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(bu);_ngZone=d(se);_parent=d(Ru);_resizeSubscription=new yt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return K_(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function K_(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ku="mdc-line-ripple--active",No="mdc-line-ripple--deactivating",Su=(()=>{class i{_elementRef=d(J);_cleanupTransitionEnd;constructor(){let e=d(se),t=d(Ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(No),e.add(ku)}deactivate(){this._elementRef.nativeElement.classList.add(No)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(No);e.propertyName==="opacity"&&r&&t.remove(ku,No)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Mu=(()=>{class i{_elementRef=d(J);_ngZone=d(se);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Pe(x_,5),t&2){let o;E(o=T())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:C_,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(le(),va(0,"div",1),Kt(1,"div",2,0),A(3),fn(),va(4,"div",3))},encapsulation:2})}return i})(),nr=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i})}return i})();var ir=new D("MatFormField"),G_=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Eu="fill",Q_="auto",Tu="fixed",Y_="translateY(-50%)",rr=(()=>{class i{_elementRef=d(J);_changeDetectorRef=d(Me);_platform=d(qe);_idGenerator=d(ft);_ngZone=d(se);_defaults=d(G_,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Mi("iconPrefixContainer");_textPrefixContainerSignal=Mi("textPrefixContainer");_iconSuffixContainerSignal=Mi("iconSuffixContainer");_textSuffixContainerSignal=Mi("textSuffixContainer");_prefixSuffixContainers=pn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ic(ui);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=we(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Q_}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Eu;this._appearanceSignal.set(t)}_appearanceSignal=G(Eu);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Tu}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Tu}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Qe();constructor(){let e=this._defaults,t=d(Yt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),br(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=pn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Be([void 0,void 0]),Y(()=>[t.errorState,t.userAriaDescribedBy]),Nl(),ae(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ne(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ze(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){oc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=pn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",p=`${a+s}px`,y=`calc(${h} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${Y_} translateX(${y}))`,x=a+s+l+c;return[_,x]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Yl(o,r._labelChild,ui,5),Ne(o,nr,5)(o,$_,5)(o,W_,5)(o,q_,5)(o,hi,5)),t&2){ya();let a;E(a=T())&&(r._formFieldControl=a.first),E(a=T())&&(r._prefixChildren=a),E(a=T())&&(r._suffixChildren=a),E(a=T())&&(r._errorChildren=a),E(a=T())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Xl(r._iconPrefixContainerSignal,vu,5)(r._textPrefixContainerSignal,yu,5)(r._iconSuffixContainerSignal,wu,5)(r._textSuffixContainerSignal,xu,5),Pe(k_,5)(vu,5)(yu,5)(wu,5)(xu,5)(Cu,5)(Mu,5)(Su,5)),t&2){ya(4);let o;E(o=T())&&(r._textField=o.first),E(o=T())&&(r._iconPrefixContainer=o.first),E(o=T())&&(r._textPrefixContainer=o.first),E(o=T())&&(r._iconSuffixContainer=o.first),E(o=T())&&(r._textSuffixContainer=o.first),E(o=T())&&(r._floatingLabel=o.first),E(o=T())&&(r._notchedOutline=o.first),E(o=T())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:ir,useExisting:i},{provide:Ru,useExisting:i}])],ngContentSelectors:M_,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(le(S_),un(0,R_,1,1,"ng-template",null,0,wa),m(2,"div",6,1),K("click",function(a){return r._control.onContainerClick(a)}),F(4,D_,1,0,"div",7),m(5,"div",8),F(6,O_,2,2,"div",9),F(7,I_,3,0,"div",10),F(8,F_,3,0,"div",11),m(9,"div",12),F(10,L_,1,1,null,13),A(11),u(),F(12,z_,3,0,"div",14),F(13,B_,3,0,"div",15),u(),F(14,j_,1,0,"div",16),u(),m(15,"div",17),F(16,U_,2,0,"div",18)(17,H_,5,1,"div",19),u()),t&2){let o;b(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),b(2),N(!r._hasOutline()&&!r._control.disabled?4:-1),b(2),N(r._hasOutline()?6:-1),b(),N(r._hasIconPrefix?7:-1),b(),N(r._hasTextPrefix?8:-1),b(2),N(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),b(2),N(r._hasTextSuffix?12:-1),b(),N(r._hasIconSuffix?13:-1),b(),N(r._hasOutline()?-1:14),b(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();b(),N((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Cu,Mu,mc,Su,hi],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return i})();var Lo=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var fi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Mn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Pr,rr,ce]})}return i})();var eb=["button","checkbox","file","hidden","image","radio","range","reset","submit"],tb=new D("MAT_INPUT_CONFIG"),Du=(()=>{class i{_elementRef=d(J);_platform=d(qe);ngControl=d(Fr,{optional:!0,self:!0});_autofillMonitor=d(pu);_ngZone=d(se);_formField=d(ir,{optional:!0});_renderer=d(Ue);_uid=d(ft).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(tb,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new L;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=we(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(gn.required)??!1}set required(e){this._required=we(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ea().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=we(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ea().has(e));constructor(){let e=d(Nr,{optional:!0}),t=d(Un,{optional:!0}),r=d(Lo),o=d(_u,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?vr(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new fi(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&br(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){eb.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&K("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Gt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ie("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",he]},exportAs:["matInput"],features:[Te([{provide:nr,useExisting:i}]),Dt]})}return i})(),Au=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Mn,Mn,gu,ce]})}return i})();var or=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Pu=(()=>{class i{_animationsDisabled=Qe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var ib=["text"],rb=[[["mat-icon"]],"*"],ob=["mat-icon","*"];function ab(i,n){if(i&1&&v(0,"mat-pseudo-checkbox",1),i&2){let e=O();B("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function sb(i,n){if(i&1&&v(0,"mat-pseudo-checkbox",3),i&2){let e=O();B("disabled",e.disabled)}}function lb(i,n){if(i&1&&(m(0,"span",4),f(1),u()),i&2){let e=O();b(),kt("(",e.group.label,")")}}var Ns=new D("MAT_OPTION_PARENT_COMPONENT"),Ls=new D("MatOptgroup");var Fs=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},pi=(()=>{class i{_element=d(J);_changeDetectorRef=d(Me);_parent=d(Ns,{optional:!0});group=d(Ls,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(ft).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=G(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ge;_text;_stateChanges=new L;constructor(){let e=d(Qt);e.load(Nn),e.load(xc),this._signalDisableRipple=!!this._parent&&vr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!St(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Fs(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Pe(ib,7),t&2){let o;E(o=T())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&K("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Gt("id",r.id),ie("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",he]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:ob,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(le(rb),F(0,ab,1,2,"mat-pseudo-checkbox",1),A(1),m(2,"span",2,0),A(4,1),u(),F(5,sb,1,1,"mat-pseudo-checkbox",3),F(6,lb,2,1,"span",4),v(7,"div",5)),t&2&&(N(r.multiple?0:-1),b(5),N(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),b(),N(r.group&&r.group._inert?6:-1),b(),B("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Pu,Or],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();function Ou(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Iu(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var zo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[ce]})}return i})();var zs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Ln,zo,pi,ce]})}return i})();var db=["trigger"],mb=["panel"],ub=[[["mat-select-trigger"]],"*"],hb=["mat-select-trigger","*"];function fb(i,n){if(i&1&&(m(0,"span",4),f(1),u()),i&2){let e=O();b(),He(e.placeholder)}}function pb(i,n){i&1&&A(0)}function gb(i,n){if(i&1&&(m(0,"span",11),f(1),u()),i&2){let e=O(2);b(),He(e.triggerValue)}}function _b(i,n){if(i&1&&(m(0,"span",5),F(1,pb,1,0)(2,gb,2,1,"span",11),u()),i&2){let e=O();b(),N(e.customTrigger?1:2)}}function bb(i,n){if(i&1){let e=Pt();m(0,"div",12,1),K("keydown",function(r){tt(e);let o=O();return nt(o._handleKeydown(r))}),A(2,1),u()}if(i&2){let e=O();Ct(e.panelClass),j("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ie("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var vb=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(Ae);return()=>Ir(i)}}),yb=new D("MAT_SELECT_CONFIG"),wb=new D("MatSelectTrigger"),Bs=class{source;value;constructor(n,e){this.source=n,this.value=e}},Fu=(()=>{class i{_viewportRuler=d(Ri);_changeDetectorRef=d(Me);_elementRef=d(J);_dir=d(Yt,{optional:!0});_idGenerator=d(ft);_renderer=d(Ue);_parentFormField=d(ir,{optional:!0});ngControl=d(Fr,{self:!0,optional:!0});_liveAnnouncer=d(Mc);_defaultOptions=d(yb,{optional:!0});_animationsDisabled=Qe();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Ou(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Iu(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Bs(this,e)}_scrollStrategyFactory=d(vb);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=G(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(gn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Pn(()=>{let e=this.options;return e?e.changes.pipe(Be(e),ue(()=>ze(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ue(()=>this.optionSelectionChanges))});openedChange=new ge;_openedStream=this.openedChange.pipe(ae(e=>e),Y(()=>{}));_closedStream=this.openedChange.pipe(ae(e=>!e),Y(()=>{}));selectionChange=new ge;valueChange=new ge;constructor(){let e=d(Lo),t=d(Nr,{optional:!0}),r=d(Un,{optional:!0}),o=d(new Tr("tabindex"),{optional:!0}),a=d(Bc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new fi(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new or(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ne(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ne(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Be(null),ne(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Se(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Ma(this._trackedModal,"aria-owns",t),Dc(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ma(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!St(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!St(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!St(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ra?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Tc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ze(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ne(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ze(...this.options.map(t=>t._stateChanges)).pipe(ne(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=wc(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,wb,5)(o,pi,5)(o,Ls,5),t&2){let a;E(a=T())&&(r.customTrigger=a.first),E(a=T())&&(r.options=a),E(a=T())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Pe(db,5)(mb,5)(Da,5),t&2){let o;E(o=T())&&(r.trigger=o.first),E(o=T())&&(r.panel=o.first),E(o=T())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&K("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(ie("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),j("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",he],disableRipple:[2,"disableRipple","disableRipple",he],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ca(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",he],placeholder:"placeholder",required:[2,"required","required",he],multiple:[2,"multiple","multiple",he],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",he],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ca],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",he]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Te([{provide:nr,useExisting:i},{provide:Ns,useExisting:i}]),Dt],ngContentSelectors:hb,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(le(ub),m(0,"div",2,0),K("click",function(){return r.open()}),m(3,"div",3),F(4,fb,2,1,"span",4)(5,_b,3,1,"span",5),u(),m(6,"div",6)(7,"div",7),Ci(),m(8,"svg",8),v(9,"path",9),u()()()(),un(10,bb,3,16,"ng-template",10),K("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=xt(1);b(3),ie("id",r._valueId),b(),N(r.empty?4:5),b(6),B("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Ra,Da],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var Nu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[jn,zs,ce,Ot,Mn,zs]})}return i})();function Cb(i,n){if(i&1&&(m(0,"mat-option",6),f(1),u()),i&2){let e=n.$implicit;B("value",e),b(),He(e)}}var zu=(()=>{class i{constructor(e){this.fb=e,this.form=this.fb.group({ssid:["",gn.required],password:["",gn.required],encryption:["WPA"]}),this.supportedEncryptions=["WPA","WEP","WPA2-EAP"],this.showInstallButton=!1,this.installApp=()=>{}}generateQR(){return me(this,null,function*(){let e=`WIFI:T:${this.form.value.encryption};S:${this.form.value.ssid};P:${this.form.value.password};`,t=yield(0,Lu.toDataURL)(e),r=document.createElement("a");r.href=t,r.download="wifi-qr.png",r.click()})}ngOnInit(){window.addEventListener("beforeinstallprompt",e=>{console.log("ee"),e.preventDefault(),this.showInstallButton=!0;let t=e;this.installApp=()=>{t.prompt(),t.userChoice.then(r=>{r.outcome==="accepted"?console.log("App installed"):console.log("App not installed")}),this.showInstallButton=!1}})}static{this.\u0275fac=function(t){return new(t||i)(Ve(Kc))}}static{this.\u0275cmp=M({type:i,selectors:[["app-wifi-qr"]],standalone:!1,decls:26,vars:3,consts:[[1,"container","row","mx-auto"],["appearance","outlined"],[1,"d-flex","flex-column",3,"submit","formGroup"],["matInput","","formControlName","ssid","required",""],["matInput","","placeholder","password","type","password","formControlName","password"],["formControlName","encryption"],[3,"value"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(t,r){t&1&&(m(0,"div",0)(1,"h2"),f(2,"QR code Generator"),u(),f(3," Generate a QR code for your WiFi network. Print it out and share it with your friends. "),m(4,"mat-card",1)(5,"form",2),K("submit",function(){return r.generateQR()}),m(6,"mat-form-field")(7,"mat-label"),f(8,"Wifi name (ssid)"),u(),v(9,"input",3),Cr(),u(),v(10,"br"),m(11,"mat-form-field")(12,"mat-label"),f(13,"Wifi password"),u(),v(14,"input",4),Cr(),m(15,"mat-hint"),f(16,"Your password is never sent to a server"),u()(),v(17,"br"),m(18,"mat-form-field")(19,"mat-label"),f(20,"Encryption Algorithm (optional)"),u(),m(21,"mat-select",5),ut(22,Cb,2,2,"mat-option",6,mt),u(),Cr(),u(),m(24,"button",7),f(25),u()()()()),t&2&&(b(5),B("formGroup",r.form),b(4),kr(),b(5),kr(),b(7),kr(),b(),ht(r.supportedEncryptions),b(2),B("disabled",!r.form.valid),b(),kt(" ",r.form.valid?"Generate QR code":"Please enter your wifi name and password"," "))},dependencies:[zn,nn,Du,rr,ui,hi,Fu,pi,$c,Uc,Hc,qc,Vc,Un,Wc],encapsulation:2,changeDetection:1})}}return i})();var Bu=(()=>{class i{constructor(e){this.router=e}canActivate(e,t){let r=e.queryParamMap.get("lang")||"de";return this.router.navigate(["/"],{queryParams:{openCV:"true",lang:r}}),!1}static{this.\u0275fac=function(t){return new(t||i)(Ee(at))}}static{this.\u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ju=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-tokyo"]],standalone:!1,decls:242,vars:0,consts:[["id","124045fe-7b82-4c19-8fd0-2d3fca41e773",1,"page","sans","container"],[1,"page-title"],[1,"page-description"],[1,"page-body"],["id","b7ef049d-ad66-4600-aa97-340486849a7f",1,"bulleted-list"],[2,"list-style-type","disc"],[1,"highlight-blue_background"],["href","https://maps.app.goo.gl/LSuw8c2YHLbwVv5i6"],["href","https://maps.app.goo.gl/FA8LK5YaA6TxwiYg9"],["id","d7c90e58-4b5f-452c-857e-11178b80a029",1,""],["href","https://maps.app.goo.gl/6tSkJUxme7m7m8Kw7"],["id","49619d62-2b68-480e-942e-f18f0a76465a",1,""],["href","https://maps.app.goo.gl/hmtZ4m5SFEhTwtNc9"],["href","https://maps.app.goo.gl/nh9dtEgTpoisJeaf9"],["id","8cda407f-14a4-47ba-b708-4cd0dbacba63",1,""],["href","https://maps.app.goo.gl/Km8qUd5Di1GucyAF6"],["id","ed0c0af0-2395-4f57-9b6c-4b14d6b5fb37"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/asakusa-and-around/",1,"bookmark","source"],[1,"bookmark-info"],[1,"bookmark-text"],[1,"bookmark-title"],[1,"bookmark-description"],[1,"bookmark-href"],["src","https://www.japan.travel/static/apple-touch-icon.e36bdd4feef9.png",1,"icon","bookmark-icon"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1646013222/tokyo/H_00498_001",1,"bookmark-image"],["id","624b4eef-1b62-4214-824b-c55523f09337",1,"bulleted-list"],["href","https://maps.app.goo.gl/3HsurETaxNtBTo9XA"],["href","https://maps.app.goo.gl/1K5DP8jqFN53vFdr9"],["href","https://maps.app.goo.gl/v6gYxNYG1MPe7KSf8"],["href","https://maps.app.goo.gl/jSzjZFK11x7TS1KH6"],["href","https://maps.app.goo.gl/sUEJBVgyq5a5xXdP9"],["id","258a7762-b6f4-4bb2-9bf2-97fa06b6f3d6",1,""],["id","2e21c162-85bc-4218-ac20-b186ca89b06b"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/tokyo-station-and-marunouchi/",1,"bookmark","source"],["src","https://res-2.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24",1,"bookmark-image"],["id","7a482407-6abf-4f55-b2ae-f0dce8f3a2ce"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/ueno-and-akihabara/",1,"bookmark","source"],["src","https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513937406/tokyo/Tokyo2264_4",1,"bookmark-image"],["id","d9500b5d-77c1-4ac7-b31e-f5cb3a7ca8ad",1,"bulleted-list"],["href","https://maps.app.goo.gl/E3crBpj7sgmUbsha9"],["href","https://maps.app.goo.gl/iBeSsgCQkRrDWtsz7"],["id","5045c6af-6aa5-4aa2-9c84-ce0203290095",1,""],["href","https://maps.app.goo.gl/WJKDxjaAfMs5WdTA9"],["id","41733b37-262d-45eb-9431-f1fb6701e46d",1,""],["href","https://maps.app.goo.gl/WrtSXVDxRt38WgVk8"],["href","https://maps.app.goo.gl/fk3bD1SoEjkxG53Z8"],["id","eac2ec2f-cde0-49bf-8137-5b0c14f41d1f",1,""],["href","https://maps.app.goo.gl/RiTTKQWTDTighM8m8"],["href","https://maps.app.goo.gl/3VjWf2yLGejHNTYt9"],["id","25c1c46a-8244-4fa3-b8f6-6acf356d1f38",1,""],["href","https://maps.app.goo.gl/8yojCUAsePtfcgCAA"],["id","3608c37c-e823-4363-adba-e1d4baaf5477"],["href","https://www.japan.travel/en/spot/2174/",1,"bookmark","source"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513934486/tokyo/Tokyo2324_3",1,"bookmark-image"],["id","f324eee9-8178-4658-997a-55b5d057c957"],["href","https://www.japan.travel/en/spot/2109/",1,"bookmark","source"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936730/tokyo/Tokyo2333_3",1,"bookmark-image"],["id","2d957306-0d40-44a7-9cdb-bf06523f1e2f",1,"bulleted-list"],["id","f2646cda-f630-4309-9248-4812007532f9",1,""],["href","https://maps.app.goo.gl/nBUR6ff1bm5jn8nh8"],["href","https://maps.app.goo.gl/82hSwDfSTETP6bHV7"],["href","https://maps.app.goo.gl/T9PxL9h7TXPV1UYu8"],["href","https://maps.app.goo.gl/72Lm9ZWnavx7xGi3A"],["id","cfb23545-7a12-4eae-b002-770a8c3a3847",1,""],["href","https://maps.app.goo.gl/QDCTeDsiBihoTdzAA"],["href","https://maps.app.goo.gl/7puUq8JZBpRupDXf9"],["href","https://maps.app.goo.gl/Kr6K5m8pqBkS2n2o6"],["href","https://maps.app.goo.gl/qR5qd2fDHsMq8Lub7"],["href","https://maps.app.goo.gl/bL8WmukX6fxzNUYB9"],["id","c40f94c3-bcf5-4afe-96bb-5bccf877d2d7",1,""],["href","https://maps.app.goo.gl/ped7evRwKDxs6hmu5"],["href","https://maps.app.goo.gl/eFNbv5zpW6ZZhMSV7"],["id","ac4ac2df-b201-4034-83e6-966c45a005dc"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/nakameguro-and-around/",1,"bookmark","source"],["src","https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513938277/tokyo/Tokyo2330_2",1,"bookmark-image"],["id","88b59725-b4fa-4ca9-b7f7-83afd6a6ce73"],["href","https://www.japan.travel/de/destinations/kanto/tokyo/shinjuku/",1,"bookmark","source"],["src","https://res-4.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513945890/tokyo/Tokyo2335_10",1,"bookmark-image"],["id","3f7781bd-2da0-4c37-a502-de606b7fe526"],["id","a4486b0c-5f3c-4ad3-857b-2a38f76b3fd4",1,""],["href","https://lakhoune.com"],["id","07ec4e12-7989-4404-bf03-2b0d4d75871a",1,""]],template:function(t,r){t&1&&(m(0,"article",0)(1,"header")(2,"h1",1),f(3,"Tokyo: 4-day travel guide"),u(),v(4,"p",2),u(),m(5,"div",3)(6,"ul",4)(7,"li",5),f(8," Day 1: "),m(9,"mark",6)(10,"strong"),f(11,"Asakusa and Ginza"),u()(),f(12,": Asakusa has a lot of old temples and traditional snacks. Start at "),m(13,"a",7),f(14,"Nakamise-dori"),u(),f(15," street to make your way to the "),m(16,"a",8),f(17,"Asakusa shrine"),u(),m(18,"p",9),f(19," Try to get here early in the morning to avoid crowds. "),m(20,"a",10),f(21,"Shopping mall"),u()(),m(22,"p",11),f(23," Go to "),m(24,"a",12)(25,"strong"),f(26,"Ueno "),u()(),m(27,"a",12),f(28,"parc"),u(),f(29,". Make sure to visit the "),m(30,"a",13),f(31,"Toshogu Shrine"),u(),f(32," before 16:00. Walk by the river to get a nice view of Tokyo Sky Tree, the third highest building in the world. "),u(),m(33,"p",14),f(34," In the evening, travel to "),m(35,"a",15),f(36,"Tokyo Tower"),u(),f(37,". "),u(),m(38,"figure",16)(39,"a",17)(40,"div",18)(41,"div",19)(42,"div",20),f(43," Asakusa | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(44,"div",21),f(45,` Enter through the enormous bright-red Kaminarimon, meaning "thunder gate," and walk through whorls of incense smoke before leaving a traditional five-yen offering at the capital's iconic Sensoji Temple. `),u()(),m(46,"div",22),v(47,"img",23),f(48,"https://www.japan.travel/en/destinations/kanto/tokyo/asakusa-and-around/ "),u()(),v(49,"img",24),u()()()(),m(50,"ul",25)(51,"li",5),f(52," Day 2:"),v(53,"strong"),m(54,"mark",6)(55,"strong"),f(56,"Marunouchi"),u()(),f(57,": In Tokyo center visit the "),m(58,"a",26),f(59,"emperors palace"),u(),f(60,". Walk to the "),m(61,"a",27),f(62,"East Gardens"),u(),f(63,". Walk to the Ginza district to see the famous "),m(64,"a",28),f(65,"Ginza Scramble Crossing"),u(),f(66,". Nearby "),m(67,"a",29),f(68,"Revive Kitchen Three "),u(),f(69," is a good vegan restaurant. "),m(70,"a",30),f(71,"LLAB"),u(),f(72," is a pub where you can craft your own beer. "),m(73,"p",31),f(74," In the evening, travel to "),m(75,"mark",6)(76,"strong"),f(77,"Akihabara"),u()()(),m(78,"figure",32)(79,"a",33)(80,"div",18)(81,"div",19)(82,"div",20),f(83," Imperial Palace & Tokyo Station | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(84,"div",21),f(85," Tokyo Station and the surrounding Marunouchi district epitomize the contrasts between traditional and modern Japan. "),u()(),m(86,"div",22),v(87,"img",23),f(88,"https://www.japan.travel/en/destinations/kanto/tokyo/tokyo-station-and-marunouchi/ "),u()(),v(89,"img",34),u()(),m(90,"figure",35)(91,"a",36)(92,"div",18)(93,"div",19)(94,"div",20),f(95," Ueno & Akihabara | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(96,"div",21),f(97," Ueno and Akihabara are neighboring districts in Tokyo, but they couldn't be more different in style, substance and atmosphere. "),u()(),m(98,"div",22),v(99,"img",23),f(100,"https://www.japan.travel/en/destinations/kanto/tokyo/ueno-and-akihabara/ "),u()(),v(101,"img",37),u()()()(),m(102,"ul",38)(103,"li",5),f(104," Day 3: "),m(105,"mark",6)(106,"strong"),f(107,"Shibuya and Harajuku. "),u()(),f(108,"Start with Harajuku shopping district with nice vintage shops and sneaker shops. Walk to "),m(109,"a",39),f(110,"Takeshita St"),u(),f(111,". (very busy). Eat vegan ramen at "),m(112,"a",40),f(113,"AFURI Harajuku"),u(),f(114,". "),m(115,"p",41),f(116," Walk through "),m(117,"a",42),f(118,"Yoyogi Park"),u(),f(119,". "),u(),m(120,"p",43),f(121," Travel to Shibuya station. See the famous "),m(122,"a",44),f(123,"Shibuya Scramble Crossing"),u(),f(124,". Get a top down view of it from "),m(125,"a",45),f(126,"Shibuya Sky"),u(),f(127," (need to make reservation at least a month in advance) "),u(),m(128,"p",46),f(129," Go to "),m(130,"a",47),f(131,"Loft souvenir shop"),u(),f(132,". Go to "),m(133,"a",48),f(134,"Nintendo Tokyo shop"),u(),f(135,". The building has a great rooftop where you see over Shibuya. "),u(),m(136,"p",49),f(137," Go clubbing at "),m(138,"a",50),f(139,"Enter Shibuya"),u(),f(140," (techno club) "),u(),m(141,"figure",51)(142,"a",52)(143,"div",18)(144,"div",19)(145,"div",20),f(146," Harajuku | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(147,"div",21),f(148,` Home of Tokyo's streetwear and "kawaii" culture, Harajuku is a vivid blend of fashion trends, rainbow food and offbeat style, an easy stroll from Shibuya `),u()(),m(149,"div",22),v(150,"img",23),f(151,"https://www.japan.travel/en/spot/2174/ "),u()(),v(152,"img",53),u()(),m(153,"figure",54)(154,"a",55)(155,"div",18)(156,"div",19)(157,"div",20),f(158," Shibuya | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(159,"div",21),f(160," The lively hub of Shibuya is arguably the youth heart and soul of the city, and unmissable if you\u2019re visiting the Tokyo area. With world-famous sights including the iconic scramble crossing, this area is a must-see for nightlife and trendy youth culture. "),u()(),m(161,"div",22),v(162,"img",23),f(163,"https://www.japan.travel/en/spot/2109/ "),u()(),v(164,"img",56),u()()()(),m(165,"ul",57)(166,"li",5),f(167," Day 4:"),v(168,"strong"),m(169,"mark",6)(170,"strong"),f(171,"Nakameguro and Shinjuku"),u()(),m(172,"p",58),f(173," Visit Nakameguro only during cherry blossom season. Start at"),m(174,"a",59),f(175," Naka-Meguro Park"),u(),f(176,". Walk towards Meguro river towards "),m(177,"a",60),f(178,"Naka-Meguro Koukashita shopping mall"),u(),f(179,". Have the vegan curry for lunch at "),m(180,"a",61),f(181,"Alaska zwei"),u(),f(182,". Visit the "),m(183,"a",62),f(184,"Sky Garden"),u(),f(185,", on good days you can see the tip of Mt. Fuji "),u(),m(186,"p",63),f(187," Travel to Shinjuku, visit the "),m(188,"a",64),f(189,"National Garden"),u(),f(190," and the "),m(191,"a",65),f(192,"Government building"),u(),f(193,". Visit the "),m(194,"a",66),f(195,"Hanazono Shrine"),u(),f(196," and walk through "),m(197,"a",67),f(198,"Golden Gai"),u(),f(199," to enjoy small bars with less tourists. Visit the narrow "),m(200,"a",68),f(201,"Omoide Yokocho"),u(),f(202," street (crowded, very touristy). "),u(),m(203,"p",69),f(204," Have dinner at "),m(205,"a",70),f(206,"Vegan & Wine Bar Kiboko"),u(),f(207," (make reservation one day in advance). Alternatively, visit "),m(208,"a",71),f(209,"Doumo"),u(),f(210," for vegan burritos "),u(),m(211,"figure",72)(212,"a",73)(213,"div",18)(214,"div",19)(215,"div",20),f(216," Nakameguro | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),u(),m(217,"div",21),f(218,' Nakameguro or "Naka-me," as it is colloquially known, strikes a distinctive balance between luxury and the bohemian. For scenery, shopping, hairstyling, dining, cafes, and art, this area is defined by its cool and sophisticated atmosphere. '),u()(),m(219,"div",22),v(220,"img",23),f(221,"https://www.japan.travel/en/destinations/kanto/tokyo/nakameguro-and-around/ "),u()(),v(222,"img",74),u()(),m(223,"figure",75)(224,"a",76)(225,"div",18)(226,"div",19)(227,"div",20),f(228,"TOKYO Reisef\xFChrer - Shinjuku"),u(),m(229,"div",21),f(230," Neben dem verkehrsreichsten Bahnhof der Welt hat Shinjuku viele Wolkenkratzer, den sch\xF6nen Shinjuku Gyoen Garten sowie ein gro\xDFes Shoppings- und Unterhaltungsangebot zu bieten. "),u()(),m(231,"div",22),v(232,"img",23),f(233,"https://www.japan.travel/de/destinations/kanto/tokyo/shinjuku/ "),u()(),v(234,"img",77),u()(),v(235,"hr",78),m(236,"p",79),f(237," Written by "),m(238,"a",80),f(239,"Ben Lakhoune"),u()(),v(240,"p",81),u()()()(),v(241,"br"))},styles:['html[_ngcontent-%COMP%]{-webkit-print-color-adjust:exact}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-print-color-adjust:exact}article[_ngcontent-%COMP%]{background-color:#fff;padding:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}@media only screen{body[_ngcontent-%COMP%]{margin:2em auto;max-width:900px;color:#37352f}}body[_ngcontent-%COMP%]{line-height:1.5;white-space:pre-wrap}a[_ngcontent-%COMP%], a.visited[_ngcontent-%COMP%]{color:inherit;text-decoration:underline}.pdf-relative-link-path[_ngcontent-%COMP%]{font-size:80%;color:#444}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{letter-spacing:-.01em;line-height:1.2;font-weight:600;margin-bottom:0}.page-title[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-top:0;margin-bottom:.75em}h1[_ngcontent-%COMP%]{font-size:1.875rem;margin-top:1.875rem}h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:1.25rem}.source[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:3px;padding:1.5em;word-break:break-all}.callout[_ngcontent-%COMP%]{border-radius:3px;padding:1rem}figure[_ngcontent-%COMP%]{margin:1.25em 0;page-break-inside:avoid}figcaption[_ngcontent-%COMP%]{opacity:.5;font-size:85%;margin-top:.5em}mark[_ngcontent-%COMP%]{background-color:transparent}.indented[_ngcontent-%COMP%]{padding-left:1.5em}hr[_ngcontent-%COMP%]{background:transparent;display:block;width:100%;height:1px;visibility:visible;border:none;border-bottom:1px solid rgba(55,53,47,.09)}img[_ngcontent-%COMP%]{max-width:100%}@media only print{img[_ngcontent-%COMP%]{max-height:100vh;object-fit:contain}}@page{margin:1in}.collection-content[_ngcontent-%COMP%]{font-size:.875rem}.column-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.column[_ngcontent-%COMP%]{padding:0 1em}.column[_ngcontent-%COMP%]:first-child{padding-left:0}.column[_ngcontent-%COMP%]:last-child{padding-right:0}.table_of_contents-item[_ngcontent-%COMP%]{display:block;font-size:.875rem;line-height:1.3;padding:.125rem}.table_of_contents-indent-1[_ngcontent-%COMP%]{margin-left:1.5rem}.table_of_contents-indent-2[_ngcontent-%COMP%]{margin-left:3rem}.table_of_contents-indent-3[_ngcontent-%COMP%]{margin-left:4.5rem}.table_of_contents-link[_ngcontent-%COMP%]{text-decoration:none;opacity:.7;border-bottom:1px solid rgba(55,53,47,.18)}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid rgba(55,53,47,.09);border-collapse:collapse}table[_ngcontent-%COMP%]{border-left:none;border-right:none}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400;padding:.25em .5em;line-height:1.5;min-height:1.5em;text-align:left}th[_ngcontent-%COMP%]{color:#37352f99}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;margin-block-start:.6em;margin-block-end:.6em}li[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%]:first-child, li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]:first-child{margin-block-start:.6em}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:disc}ul.to-do-list[_ngcontent-%COMP%]{padding-inline-start:0}ul.to-do-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none}.to-do-children-checked[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.375}ul.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]{padding-inline-start:1.7em}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding-left:.1em}ol[_ngcontent-%COMP%]{padding-inline-start:1.6em}ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding-left:.2em}.mono[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-inline-start:2em}.mono[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{text-indent:-.4em}.toggle[_ngcontent-%COMP%]{padding-inline-start:0em;list-style-type:none}.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > details[_ngcontent-%COMP%]{padding-left:1.7em}.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > details[_ngcontent-%COMP%] > summary[_ngcontent-%COMP%]{margin-left:-1.1em}.selected-value[_ngcontent-%COMP%]{display:inline-block;padding:0 .5em;background:#cecdca80;border-radius:3px;margin-right:.5em;margin-top:.3em;margin-bottom:.3em;white-space:nowrap}.collection-title[_ngcontent-%COMP%]{display:inline-block;margin-right:1em}.page-description[_ngcontent-%COMP%]{margin-bottom:2em}.simple-table[_ngcontent-%COMP%]{margin-top:1em;font-size:.875rem;empty-cells:show}.simple-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .simple-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:29px;min-width:120px}.simple-table-header-color[_ngcontent-%COMP%]{background:#f7f6f3;color:#000}.simple-table-header[_ngcontent-%COMP%]{font-weight:500}time[_ngcontent-%COMP%]{opacity:.5}.icon[_ngcontent-%COMP%]{display:inline-block;max-width:1.2em;max-height:1.2em;text-decoration:none;vertical-align:text-bottom;margin-right:.5em}img.icon[_ngcontent-%COMP%]{border-radius:3px}.user-icon[_ngcontent-%COMP%]{width:1.5em;height:1.5em;border-radius:100%;margin-right:.5rem}.user-icon-inner[_ngcontent-%COMP%]{font-size:.8em}.text-icon[_ngcontent-%COMP%]{border:1px solid #000;text-align:center}.page-cover-image[_ngcontent-%COMP%]{display:block;object-fit:cover;width:100%;max-height:30vh}.page-header-icon[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem}.page-header-icon-with-cover[_ngcontent-%COMP%]{margin-top:-.72em;margin-left:.07em}.page-header-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:3px}.link-to-page[_ngcontent-%COMP%]{margin:1em 0;padding:0;border:none;font-weight:500}p[_ngcontent-%COMP%] > .user[_ngcontent-%COMP%]{opacity:.5}td[_ngcontent-%COMP%] > .user[_ngcontent-%COMP%], td[_ngcontent-%COMP%] > time[_ngcontent-%COMP%]{white-space:nowrap}input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.5);margin-right:.6em;vertical-align:middle}p[_ngcontent-%COMP%]{margin-top:.5em;margin-bottom:.5em}.image[_ngcontent-%COMP%]{border:none;margin:1.5em 0;padding:0;border-radius:0;text-align:center}.code[_ngcontent-%COMP%], code[_ngcontent-%COMP%]{background:#87837826;padding:.2em .4em;border-radius:3px;font-size:85%;tab-size:2}code[_ngcontent-%COMP%]{color:#eb5757}.code[_ngcontent-%COMP%]{padding:1.5em 1em}.code-wrap[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-all}.code[_ngcontent-%COMP%] > code[_ngcontent-%COMP%]{background:none;padding:0;font-size:100%;color:inherit}blockquote[_ngcontent-%COMP%]{font-size:1.25em;margin:1em 0;padding-left:1em;border-left:3px solid rgb(55,53,47)}.bookmark[_ngcontent-%COMP%]{text-decoration:none;max-height:8em;padding:0;display:flex;width:100%;align-items:stretch}.bookmark-title[_ngcontent-%COMP%]{font-size:.85em;overflow:hidden;text-overflow:ellipsis;height:1.75em;white-space:nowrap}.bookmark-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.bookmark-info[_ngcontent-%COMP%]{flex:4 1 180px;padding:12px 14px 14px;display:flex;flex-direction:column;justify-content:space-between}.bookmark-image[_ngcontent-%COMP%]{width:33%;flex:1 1 180px;display:block;position:relative;object-fit:cover;border-radius:1px}.bookmark-description[_ngcontent-%COMP%]{color:#37352f99;font-size:.75em;overflow:hidden;max-height:4.5em;word-break:break-word}.bookmark-href[_ngcontent-%COMP%]{font-size:.75em;margin-top:.25em}.sans[_ngcontent-%COMP%]{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol}.code[_ngcontent-%COMP%]{font-family:SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace}.serif[_ngcontent-%COMP%]{font-family:Lyon-Text,Georgia,ui-serif,serif}.mono[_ngcontent-%COMP%]{font-family:iawriter-mono,Nitti,Menlo,Courier,monospace}.pdf[_ngcontent-%COMP%]   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK KR}.pdf[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK KR}.pdf[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK JP"}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK SC"}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK TC"}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK KR"}.pdf[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK KR}.highlight-default[_ngcontent-%COMP%]{color:#37352f}.highlight-gray[_ngcontent-%COMP%]{color:#787774;fill:#787774}.highlight-brown[_ngcontent-%COMP%]{color:#9f6b53;fill:#9f6b53}.highlight-orange[_ngcontent-%COMP%]{color:#d9730d;fill:#d9730d}.highlight-yellow[_ngcontent-%COMP%]{color:#cb912f;fill:#cb912f}.highlight-teal[_ngcontent-%COMP%]{color:#448361;fill:#448361}.highlight-blue[_ngcontent-%COMP%]{color:#337ea9;fill:#337ea9}.highlight-purple[_ngcontent-%COMP%]{color:#9065b0;fill:#9065b0}.highlight-pink[_ngcontent-%COMP%]{color:#c14c8a;fill:#c14c8a}.highlight-red[_ngcontent-%COMP%]{color:#d44c47;fill:#d44c47}.highlight-gray_background[_ngcontent-%COMP%]{background:#f1f1ef}.highlight-brown_background[_ngcontent-%COMP%]{background:#f4eeee}.highlight-orange_background[_ngcontent-%COMP%]{background:#fbecdd}.highlight-yellow_background[_ngcontent-%COMP%]{background:#fbf3db}.highlight-teal_background[_ngcontent-%COMP%]{background:#edf3ec}.highlight-blue_background[_ngcontent-%COMP%]{background:#e7f3f8}.highlight-purple_background[_ngcontent-%COMP%]{background:#f4f0f7cc}.highlight-pink_background[_ngcontent-%COMP%]{background:#f9eef3cc}.highlight-red_background[_ngcontent-%COMP%]{background:#fdebec}.block-color-default[_ngcontent-%COMP%]{color:inherit;fill:inherit}.block-color-gray[_ngcontent-%COMP%]{color:#787774;fill:#787774}.block-color-brown[_ngcontent-%COMP%]{color:#9f6b53;fill:#9f6b53}.block-color-orange[_ngcontent-%COMP%]{color:#d9730d;fill:#d9730d}.block-color-yellow[_ngcontent-%COMP%]{color:#cb912f;fill:#cb912f}.block-color-teal[_ngcontent-%COMP%]{color:#448361;fill:#448361}.block-color-blue[_ngcontent-%COMP%]{color:#337ea9;fill:#337ea9}.block-color-purple[_ngcontent-%COMP%]{color:#9065b0;fill:#9065b0}.block-color-pink[_ngcontent-%COMP%]{color:#c14c8a;fill:#c14c8a}.block-color-red[_ngcontent-%COMP%]{color:#d44c47;fill:#d44c47}.block-color-gray_background[_ngcontent-%COMP%]{background:#f1f1ef}.block-color-brown_background[_ngcontent-%COMP%]{background:#f4eeee}.block-color-orange_background[_ngcontent-%COMP%]{background:#fbecdd}.block-color-yellow_background[_ngcontent-%COMP%]{background:#fbf3db}.block-color-teal_background[_ngcontent-%COMP%]{background:#edf3ec}.block-color-blue_background[_ngcontent-%COMP%]{background:#e7f3f8}.block-color-purple_background[_ngcontent-%COMP%]{background:#f4f0f7cc}.block-color-pink_background[_ngcontent-%COMP%]{background:#f9eef3cc}.block-color-red_background[_ngcontent-%COMP%]{background:#fdebec}.select-value-color-uiBlue[_ngcontent-%COMP%]{background-color:#2383e212}.select-value-color-pink[_ngcontent-%COMP%]{background-color:#f5e0e9}.select-value-color-purple[_ngcontent-%COMP%]{background-color:#e8deee}.select-value-color-green[_ngcontent-%COMP%]{background-color:#dbeddb}.select-value-color-gray[_ngcontent-%COMP%]{background-color:#e3e2e0}.select-value-color-translucentGray[_ngcontent-%COMP%]{background-color:#ffffff0a}.select-value-color-orange[_ngcontent-%COMP%]{background-color:#fadec9}.select-value-color-brown[_ngcontent-%COMP%]{background-color:#eee0da}.select-value-color-red[_ngcontent-%COMP%]{background-color:#ffe2dd}.select-value-color-yellow[_ngcontent-%COMP%]{background-color:#fdecc8}.select-value-color-blue[_ngcontent-%COMP%]{background-color:#d3e5ef}.select-value-color-pageGlass[_ngcontent-%COMP%], .select-value-color-washGlass[_ngcontent-%COMP%]{background-color:undefined}.checkbox[_ngcontent-%COMP%]{display:inline-flex;vertical-align:text-bottom;width:16;height:16;background-size:16px;margin-left:2px;margin-right:5px}.checkbox-on[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E)}.checkbox-off[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E)}'],changeDetection:1})}}return i})();var kb=[{path:"",component:ko},{path:"blog",children:[{path:"tokyo",component:ju}]},{path:"wifi-qr",component:zu},{path:"wg-planner",loadComponent:()=>import("./chunk-N3AQFUL3.js").then(i=>i.WgPlannerComponent)},{path:"cv",redirectTo:"dummy",pathMatch:"full"},{path:"dummy",canActivate:[Bu],component:ko},{path:"**",component:ko}],Uu=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=V({type:i})}static{this.\u0275inj=U({imports:[fo.forRoot(kb),fo]})}}return i})();var gi={production:!0};var Sb=["*",[["mat-toolbar-row"]]],Mb=["*","mat-toolbar-row"],Eb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Vu=(()=>{class i{_elementRef=d(J);_platform=d(qe);_document=d(ct);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Eb,5),t&2){let a;E(a=T())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(Ct(r.color?"mat-"+r.color:""),j("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Mb,decls:2,vars:0,template:function(t,r){t&1&&(le(Sb),A(0),A(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var Hu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[ce]})}return i})();var Uo=["*"],Rb=["content"],Db=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ab=["mat-drawer","mat-drawer-content","*"];function Pb(i,n){if(i&1){let e=Pt();m(0,"div",1),K("click",function(){tt(e);let r=O();return nt(r._onBackdropClicked())}),u()}if(i&2){let e=O();j("mat-drawer-shown",e._isShowingBackdrop())}}function Ob(i,n){i&1&&(m(0,"mat-drawer-content"),A(1,2),u())}var Ib=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Fb=["mat-sidenav","mat-sidenav-content","*"];function Nb(i,n){if(i&1){let e=Pt();m(0,"div",1),K("click",function(){tt(e);let r=O();return nt(r._onBackdropClicked())}),u()}if(i&2){let e=O();j("mat-drawer-shown",e._isShowingBackdrop())}}function Lb(i,n){i&1&&(m(0,"mat-sidenav-content"),A(1,2),u())}var zb=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Bb=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Vs=new D("MAT_DRAWER_CONTAINER"),Bo=(()=>{class i extends Bn{_platform=d(qe);_changeDetectorRef=d(Me);_container=d(Us);constructor(){let e=d(J),t=d(Ta),r=d(se);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(Er("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Te([{provide:Bn,useExisting:i}]),it],ngContentSelectors:Uo,decls:1,vars:0,template:function(t,r){t&1&&(le(),A(0))},encapsulation:2})}return i})(),js=(()=>{class i{_elementRef=d(J);_focusTrapFactory=d(Sc);_focusMonitor=d(Ti);_platform=d(qe);_ngZone=d(se);_renderer=d(Ue);_interactivityChecker=d(kc);_doc=d(ct);_container=d(Vs,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=we(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=we(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(we(e))}_opened=G(!1);_openedVia=null;_animationStarted=new L;_animationEnd=new L;openedChange=new ge(!0);_openedStream=this.openedChange.pipe(ae(e=>e),Y(()=>{}));openedStart=this._animationStarted.pipe(ae(()=>this.opened),_a(void 0));_closedStream=this.openedChange.pipe(ae(e=>!e),Y(()=>{}));closedStart=this._animationStarted.pipe(ae(()=>!this.opened),_a(void 0));_destroyed=new L;onPositionChanged=new ge;_content;_modeChanged=new L;_injector=d(Ae);_changeDetectorRef=d(Me);constructor(){this.openedChange.pipe(ne(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!St(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Wt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Se(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&Pe(Rb,5),t&2){let o;E(o=T())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(ie("align",null)("tabIndex",r.mode!=="side"?"-1":null),Er("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Uo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(le(),m(0,"div",1,0),A(2),u())},dependencies:[Bn],encapsulation:2})}return i})(),Us=(()=>{class i{_dir=d(Yt,{optional:!0});_element=d(J);_ngZone=d(se);_changeDetectorRef=d(Me);_animationDisabled=Qe();_transitionsEnabled=!1;_allDrawers;_drawers=new wr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=we(e)}_autosize=d(Bb);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:we(e)}_backdropOverride=null;backdropClick=new ge;_start=null;_end=null;_left=null;_right=null;_destroyed=new L;_doCheckSubject=new L;_contentMargins={left:null,right:null};_contentMarginChanges=new L;get scrollable(){return this._userContent||this._content}_injector=d(Ae);constructor(){let e=d(qe),t=d(Ri);this._dir?.change.pipe(ne(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ne(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Be(this._allDrawers),ne(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Be(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Il(10),ne(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ne(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ne(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ne(this._drawers.changes)).subscribe(()=>{Wt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ne(ze(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Bo,5)(o,js,5),t&2){let a;E(a=T())&&(r._content=a.first),E(a=T())&&(r._allDrawers=a)}},viewQuery:function(t,r){if(t&1&&Pe(Bo,5),t&2){let o;E(o=T())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Te([{provide:Vs,useExisting:i}])],ngContentSelectors:Ab,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(le(Db),F(0,Pb,1,2,"div",0),A(1),A(2,1),F(3,Ob,2,0,"mat-drawer-content")),t&2&&(N(r.hasBackdrop?0:-1),b(3),N(r._content?-1:3))},dependencies:[Bo],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return i})(),jo=(()=>{class i extends Bo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Te([{provide:Bn,useExisting:i}]),it],ngContentSelectors:Uo,decls:1,vars:0,template:function(t,r){t&1&&(le(),A(0))},encapsulation:2})}return i})(),Hs=(()=>{class i extends js{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=we(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Fn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Fn(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(ie("tabIndex",r.mode!=="side"?"-1":null)("align",null),Er("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Te([{provide:js,useExisting:i}]),it],ngContentSelectors:Uo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(le(),m(0,"div",1,0),A(2),u())},dependencies:[Bn],encapsulation:2})}return i})(),qu=(()=>{class i extends Us{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Ne(o,jo,5)(o,Hs,5),t&2){let a;E(a=T())&&(r._content=a.first),E(a=T())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Te([{provide:Vs,useExisting:i},{provide:Us,useExisting:i}]),it],ngContentSelectors:Fb,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(le(Ib),F(0,Nb,1,2,"div",0),A(1),A(2,1),F(3,Lb,2,0,"mat-sidenav-content")),t&2&&(N(r.hasBackdrop?0:-1),b(3),N(r._content?-1:3))},dependencies:[jo],styles:[zb],encapsulation:2})}return i})(),$u=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Ot,ce,Ot]})}return i})();var Wu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[ce]})}return i})();var Ub=["*"],Vb=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Hb=["unscopedContent"],qb=["text"],$b=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Wb=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Kb=new D("ListOption"),Gb=(()=>{class i{_elementRef=d(J);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Qb=(()=>{class i{_elementRef=d(J);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Yb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Ku=(()=>{class i{_listOption=d(Kb,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,hostVars:4,hostBindings:function(t,r){t&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return i})(),Xb=(()=>{class i extends Ku{static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275dir=H({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[it]})}return i})(),Zb=(()=>{class i extends Ku{static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275dir=H({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[it]})}return i})(),Jb=new D("MAT_LIST_CONFIG"),qs=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=we(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(we(e))}_disabled=G(!1);_defaultOptions=d(Jb,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,hostVars:1,hostBindings:function(t,r){t&2&&ie("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),ev=(()=>{class i{_elementRef=d(J);_ngZone=d(se);_listBase=d(qs,{optional:!0});_platform=d(qe);_hostElement;_isButtonElement;_noopAnimations=Qe();_avatars;_icons;set lines(e){this._explicitLines=Fn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=we(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(we(e))}_disabled=G(!1);_subscriptions=new yt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Qt).load(Nn);let e=d(Pc,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ac(this,this._ngZone,this._hostElement,this._platform,d(Ae)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ze(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=H({type:i,contentQueries:function(t,r,o){if(t&1&&Ne(o,Xb,4)(o,Zb,4),t&2){let a;E(a=T())&&(r._avatars=a),E(a=T())&&(r._icons=a)}},hostVars:4,hostBindings:function(t,r){t&2&&(ie("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Gu=(()=>{class i extends ev{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=we(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,r,o){if(t&1&&Ne(o,Qb,5)(o,Gb,5)(o,Yb,5),t&2){let a;E(a=T())&&(r._lines=a),E(a=T())&&(r._titles=a),E(a=T())&&(r._meta=a)}},viewQuery:function(t,r){if(t&1&&Pe(Hb,5)(qb,5),t&2){let o;E(o=T())&&(r._unscopedContent=o.first),E(o=T())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,r){t&2&&(ie("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[it],ngContentSelectors:Wb,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,r){t&1&&(le($b),A(0),m(1,"span",1),A(2,1),A(3,2),m(4,"span",2,0),K("cdkObserveContent",function(){return r._updateItemLines(!0)}),A(6,3),u()(),A(7,4),A(8,5),v(9,"div",3))},dependencies:[Cc],encapsulation:2})}return i})();var Qu=(()=>{class i extends qs{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Te([{provide:qs,useExisting:i}]),it],ngContentSelectors:Ub,decls:1,vars:0,template:function(t,r){t&1&&(le(),A(0))},styles:[Vb],encapsulation:2})}return i})();var Yu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Pr,Ln,zo,ce,Wu]})}return i})();function nv(i,n){if(i&1&&(m(0,"span",4),f(1),u()),i&2){let e=O().$implicit;b(),kt(" ",e.icon," ")}}function iv(i,n){if(i&1&&(m(0,"a",5),F(1,nv,2,1,"span",4),m(2,"span"),f(3),u()()),i&2){let e=n.$implicit;B("routerLink",Zl(e.url)),b(),N(e.icon?1:-1),b(2),kt(" ",e.name," ")}}var Xu=(()=>{class i{constructor(e){this._snackBar=e,this.title="website",this.links=[{url:"/wifi-qr",icon:"qr_code_2",name:"Wifi QR Generator"},{url:"/wg-planner",icon:"calendar_month",name:"Chore Planner"},{url:"/blog/tokyo",name:"Tokyo Blog"}],this.environment=gi}onShare(){let e=window.location.href;document.body.focus(),navigator.clipboard.writeText(e).then(()=>{this._snackBar.open("Link copied to clipboard","Got it",{duration:2e3})}).catch(t=>{console.error("Error copying text: ",t)})}static{this.\u0275fac=function(t){return new(t||i)(Ve(Qc))}}static{this.\u0275cmp=M({type:i,selectors:[["app-root"]],standalone:!1,decls:32,vars:2,consts:[["drawer",""],[1,"example-container",3,"hasBackdrop"],["mode","push",3,"fixedInViewport"],["mat-list-item","","routerLink","/"],[1,"material-icons"],["mat-list-item","",3,"routerLink"],[1,"wrapper"],[1,"background"],[1,"sticky-top"],["mat-icon-button","","aria-label","icon-button with menu icon",1,"example-icon",3,"click"],["routerLink","/","id","website-header"],[1,"example-spacer"],["mat-icon-button","","aria-label","icon-button with share icon",3,"click"],[1,"bi","bi-share-fill","fs-4"],[1,"mt-2","h-100"],[1,"footer"],["href","https://github.com/lakhoune"],["href","http://www.freepik.com"]],template:function(t,r){if(t&1){let o=Pt();m(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-nav-list")(4,"a",3)(5,"span",4),f(6,"home"),u(),m(7,"span"),f(8,"Home"),u()(),ut(9,iv,4,4,"a",5,mt),u()(),m(11,"mat-sidenav-content")(12,"div",6),v(13,"div",7),m(14,"mat-toolbar",8)(15,"button",9),K("click",function(){tt(o);let s=xt(2);return nt(s.toggle())}),m(16,"span",4),f(17,"menu"),u()(),m(18,"a",10),f(19,"Lakhoune"),u(),v(20,"span",11),m(21,"button",12),K("click",function(){return r.onShare()}),v(22,"i",13),u()(),m(23,"div",14),v(24,"router-outlet"),u(),m(25,"div",15),f(26," Designed by "),m(27,"a",16),f(28,"Ben Lakhoune"),u(),f(29,". Background designed by "),m(30,"a",17),f(31,"starline / Freepik"),u()()()()()}t&2&&(B("hasBackdrop",!0),b(),B("fixedInViewport",!0),b(8),ht(r.links))},dependencies:[Vi,ho,Vu,Oc,Hs,qu,jo,Qu,Gu],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}#website-header[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.background[_ngcontent-%COMP%]{position:fixed;inset:0;background-image:url(/assets/19366.webp);background-size:cover;opacity:.4;z-index:-1}.background[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;bottom:0}mat-toolbar[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem #00000038;background-color:#0097a7;color:#fff}.wrapper[_ngcontent-%COMP%]{position:relative;min-height:100%}.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;bottom:0;z-index:-1}.socials[_ngcontent-%COMP%]{font-size:xx-large}mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}"],changeDetection:1})}}return i})();var z=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(z||{}),gt="*";function Zu(i,n=null){return{type:z.Sequence,steps:i,options:n}}function $s(i){return{type:z.Style,styles:i,offset:null}}var Bt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},_i=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,t=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==o&&this._onFinish()}),a.onDestroy(()=>{++t==o&&this._onDestroy()}),a.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,s)=>Math.max(a,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(t=>{let r=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(r)})}getPosition(){let n=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},ar="!";function Ju(i){return new k(3e3,!1)}function rv(){return new k(3100,!1)}function ov(){return new k(3101,!1)}function av(i){return new k(3001,!1)}function sv(i){return new k(3003,!1)}function lv(i){return new k(3004,!1)}function th(i,n){return new k(3005,!1)}function nh(){return new k(3006,!1)}function ih(){return new k(3007,!1)}function rh(i,n){return new k(3008,!1)}function oh(i){return new k(3002,!1)}function ah(i,n,e,t,r){return new k(3010,!1)}function sh(){return new k(3011,!1)}function lh(){return new k(3012,!1)}function ch(){return new k(3200,!1)}function dh(){return new k(3202,!1)}function mh(){return new k(3013,!1)}function uh(i){return new k(3014,!1)}function hh(i){return new k(3015,!1)}function fh(i){return new k(3016,!1)}function ph(i,n){return new k(3404,!1)}function cv(i){return new k(3502,!1)}function gh(i){return new k(3503,!1)}function _h(){return new k(3300,!1)}function bh(i){return new k(3504,!1)}function vh(i){return new k(3301,!1)}function yh(i,n){return new k(3302,!1)}function wh(i){return new k(3303,!1)}function xh(i,n){return new k(3400,!1)}function Ch(i){return new k(3401,!1)}function kh(i){return new k(3402,!1)}function Sh(i,n){return new k(3505,!1)}function jt(i){switch(i.length){case 0:return new Bt;case 1:return i[0];default:return new _i(i)}}function Qs(i,n,e=new Map,t=new Map){let r=[],o=[],a=-1,s=null;if(n.forEach(l=>{let c=l.get("offset"),h=c==a,p=h&&s||new Map;l.forEach((g,y)=>{let _=y,x=g;if(y!=="offset")switch(_=i.normalizePropertyName(_,r),x){case ar:x=e.get(y);break;case gt:x=t.get(y);break;default:x=i.normalizeStyleValue(y,_,x,r);break}p.set(_,x)}),h||o.push(p),s=p,a=c}),r.length)throw cv(r);return o}function Vo(i,n,e,t){switch(n){case"start":i.onStart(()=>t(e&&Ws(e,"start",i)));break;case"done":i.onDone(()=>t(e&&Ws(e,"done",i)));break;case"destroy":i.onDestroy(()=>t(e&&Ws(e,"destroy",i)));break}}function Ws(i,n,e){let t=e.totalTime,r=!!e.disabled,o=Ho(i.element,i.triggerName,i.fromState,i.toState,n||i.phaseName,t??i.totalTime,r),a=i._data;return a!=null&&(o._data=a),o}function Ho(i,n,e,t,r="",o=0,a){return{element:i,triggerName:n,fromState:e,toState:t,phaseName:r,totalTime:o,disabled:!!a}}function $e(i,n,e){let t=i.get(n);return t||i.set(n,t=e),t}function Ys(i){let n=i.indexOf(":"),e=i.substring(1,n),t=i.slice(n+1);return[e,t]}var dv=typeof document>"u"?null:document.documentElement;function qo(i){let n=i.parentNode||i.host||null;return n===dv?null:n}function mv(i){return i.substring(1,6)=="ebkit"}var En=null,eh=!1;function Mh(i){En||(En=uv()||{},eh=En.style?"WebkitAppearance"in En.style:!1);let n=!0;return En.style&&!mv(i)&&(n=i in En.style,!n&&eh&&(n="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in En.style)),n}function uv(){return typeof document<"u"?document.body:null}function Xs(i,n){for(;n;){if(n===i)return!0;n=qo(n)}return!1}function Zs(i,n,e){if(e)return Array.from(i.querySelectorAll(n));let t=i.querySelector(n);return t?[t]:[]}var hv=1e3,Js="{{",fv="}}",el="ng-enter",$o="ng-leave",sr="ng-trigger",lr=".ng-trigger",tl="ng-animating",Wo=".ng-animating";function Tt(i){if(typeof i=="number")return i;let n=i.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Ks(parseFloat(n[1]),n[2])}function Ks(i,n){return n==="s"?i*hv:i}function cr(i,n,e){return i.hasOwnProperty("duration")?i:gv(i,n,e)}var pv=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function gv(i,n,e){let t,r=0,o="";if(typeof i=="string"){let a=i.match(pv);if(a===null)return n.push(Ju(i)),{duration:0,delay:0,easing:""};t=Ks(parseFloat(a[1]),a[2]);let s=a[3];s!=null&&(r=Ks(parseFloat(s),a[4]));let l=a[5];l&&(o=l)}else t=i;if(!e){let a=!1,s=n.length;t<0&&(n.push(rv()),a=!0),r<0&&(n.push(ov()),a=!0),a&&n.splice(s,0,Ju(i))}return{duration:t,delay:r,easing:o}}function Eh(i){return i.length?i[0]instanceof Map?i:i.map(n=>new Map(Object.entries(n))):[]}function _t(i,n,e){n.forEach((t,r)=>{let o=Ko(r);e&&!e.has(r)&&e.set(r,i.style[o]),i.style[o]=t})}function ln(i,n){n.forEach((e,t)=>{let r=Ko(t);i.style[r]=""})}function bi(i){return Array.isArray(i)?i.length==1?i[0]:Zu(i):i}function Th(i,n,e){let t=n.params||{},r=nl(i);r.length&&r.forEach(o=>{t.hasOwnProperty(o)||e.push(av(o))})}var Gs=new RegExp(`${Js}\\s*(.+?)\\s*${fv}`,"g");function nl(i){let n=[];if(typeof i=="string"){let e;for(;e=Gs.exec(i);)n.push(e[1]);Gs.lastIndex=0}return n}function vi(i,n,e){let t=`${i}`,r=t.replace(Gs,(o,a)=>{let s=n[a];return s==null&&(e.push(sv(a)),s=""),s.toString()});return r==t?i:r}var _v=/-+([a-z0-9])/g;function Ko(i){return i.replace(_v,(...n)=>n[1].toUpperCase())}function Rh(i,n){return i===0||n===0}function Dh(i,n,e){if(e.size&&n.length){let t=n[0],r=[];if(e.forEach((o,a)=>{t.has(a)||r.push(a),t.set(a,o)}),r.length)for(let o=1;o<n.length;o++){let a=n[o];r.forEach(s=>a.set(s,Go(i,s)))}}return n}function We(i,n,e){switch(n.type){case z.Trigger:return i.visitTrigger(n,e);case z.State:return i.visitState(n,e);case z.Transition:return i.visitTransition(n,e);case z.Sequence:return i.visitSequence(n,e);case z.Group:return i.visitGroup(n,e);case z.Animate:return i.visitAnimate(n,e);case z.Keyframes:return i.visitKeyframes(n,e);case z.Style:return i.visitStyle(n,e);case z.Reference:return i.visitReference(n,e);case z.AnimateChild:return i.visitAnimateChild(n,e);case z.AnimateRef:return i.visitAnimateRef(n,e);case z.Query:return i.visitQuery(n,e);case z.Stagger:return i.visitStagger(n,e);default:throw lv(n.type)}}function Go(i,n){return window.getComputedStyle(i)[n]}var vl=(()=>{class i{validateStyleProperty(e){return Mh(e)}containsElement(e,t){return Xs(e,t)}getParentElement(e){return qo(e)}query(e,t,r){return Zs(e,t,r)}computeStyle(e,t,r){return r||""}animate(e,t,r,o,a,s=[],l){return new Bt(r,o)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),Rn=class{static NOOP=new vl},Dn=class{};var bv=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Jo=class extends Dn{normalizePropertyName(n,e){return Ko(n)}normalizeStyleValue(n,e,t,r){let o="",a=t.toString().trim();if(bv.has(e)&&t!==0&&t!=="0")if(typeof t=="number")o="px";else{let s=t.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&r.push(th(n,t))}return a+o}};var ea="*";function vv(i,n){let e=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(t=>yv(t,e,n)):e.push(i),e}function yv(i,n,e){if(i[0]==":"){let l=wv(i,e);if(typeof l=="function"){n.push(l);return}i=l}let t=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(hh(i)),n;let r=t[1],o=t[2],a=t[3];n.push(Ah(r,a));let s=r==ea&&a==ea;o[0]=="<"&&!s&&n.push(Ah(a,r))}function wv(i,n){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return n.push(fh(i)),"* => *"}}var Qo=new Set(["true","1"]),Yo=new Set(["false","0"]);function Ah(i,n){let e=Qo.has(i)||Yo.has(i),t=Qo.has(n)||Yo.has(n);return(r,o)=>{let a=i==ea||i==r,s=n==ea||n==o;return!a&&e&&typeof r=="boolean"&&(a=r?Qo.has(i):Yo.has(i)),!s&&t&&typeof o=="boolean"&&(s=o?Qo.has(n):Yo.has(n)),a&&s}}var Uh=":self",xv=new RegExp(`s*${Uh}s*,?`,"g");function Vh(i,n,e,t){return new ll(i).build(n,e,t)}var Ph="",ll=class{_driver;constructor(n){this._driver=n}build(n,e,t){let r=new cl(e);return this._resetContextStyleTimingState(r),We(this,bi(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=Ph,n.collectedStyles=new Map,n.collectedStyles.set(Ph,new Map),n.currentTime=0}visitTrigger(n,e){let t=e.queryCount=0,r=e.depCount=0,o=[],a=[];return n.name.charAt(0)=="@"&&e.errors.push(nh()),n.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==z.State){let l=s,c=l.name;c.toString().split(/\s*,\s*/).forEach(h=>{l.name=h,o.push(this.visitState(l,e))}),l.name=c}else if(s.type==z.Transition){let l=this.visitTransition(s,e);t+=l.queryCount,r+=l.depCount,a.push(l)}else e.errors.push(ih())}),{type:z.Trigger,name:n.name,states:o,transitions:a,queryCount:t,depCount:r,options:null}}visitState(n,e){let t=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(t.containsDynamicStyles){let o=new Set,a=r||{};t.styles.forEach(s=>{s instanceof Map&&s.forEach(l=>{nl(l).forEach(c=>{a.hasOwnProperty(c)||o.add(c)})})}),o.size&&e.errors.push(rh(n.name,[...o.values()]))}return{type:z.State,name:n.name,style:t,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let t=We(this,bi(n.animation),e),r=vv(n.expr,e.errors);return{type:z.Transition,matchers:r,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:Tn(n.options)}}visitSequence(n,e){return{type:z.Sequence,steps:n.steps.map(t=>We(this,t,e)),options:Tn(n.options)}}visitGroup(n,e){let t=e.currentTime,r=0,o=n.steps.map(a=>{e.currentTime=t;let s=We(this,a,e);return r=Math.max(r,e.currentTime),s});return e.currentTime=r,{type:z.Group,steps:o,options:Tn(n.options)}}visitAnimate(n,e){let t=Mv(n.timings,e.errors);e.currentAnimateTimings=t;let r,o=n.styles?n.styles:$s({});if(o.type==z.Keyframes)r=this.visitKeyframes(o,e);else{let a=n.styles,s=!1;if(!a){s=!0;let c={};t.easing&&(c.easing=t.easing),a=$s(c)}e.currentTime+=t.duration+t.delay;let l=this.visitStyle(a,e);l.isEmptyStep=s,r=l}return e.currentAnimateTimings=null,{type:z.Animate,timings:t,style:r,options:null}}visitStyle(n,e){let t=this._makeStyleAst(n,e);return this._validateStyleAst(t,e),t}_makeStyleAst(n,e){let t=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let s of r)typeof s=="string"?s===gt?t.push(s):e.errors.push(oh(s)):t.push(new Map(Object.entries(s)));let o=!1,a=null;return t.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(a=s.get("easing"),s.delete("easing")),!o)){for(let l of s.values())if(l.toString().indexOf(Js)>=0){o=!0;break}}}),{type:z.Style,styles:t,easing:a,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let t=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;t&&o>0&&(o-=t.duration+t.delay),n.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),h=c.get(l),p=!0;h&&(o!=r&&o>=h.startTime&&r<=h.endTime&&(e.errors.push(ah(l,h.startTime,h.endTime,o,r)),p=!1),o=h.startTime),p&&c.set(l,{startTime:o,endTime:r}),e.options&&Th(s,e.options,e.errors)})})}visitKeyframes(n,e){let t={type:z.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(sh()),t;let r=1,o=0,a=[],s=!1,l=!1,c=0,h=n.steps.map(ee=>{let oe=this._makeStyleAst(ee,e),te=oe.offset!=null?oe.offset:Sv(oe.styles),_e=0;return te!=null&&(o++,_e=oe.offset=te),l=l||_e<0||_e>1,s=s||_e<c,c=_e,a.push(_e),oe});l&&e.errors.push(lh()),s&&e.errors.push(ch());let p=n.steps.length,g=0;o>0&&o<p?e.errors.push(dh()):o==0&&(g=r/(p-1));let y=p-1,_=e.currentTime,x=e.currentAnimateTimings,$=x.duration;return h.forEach((ee,oe)=>{let te=g>0?oe==y?1:g*oe:a[oe],_e=te*$;e.currentTime=_+x.delay+_e,x.duration=_e,this._validateStyleAst(ee,e),ee.offset=te,t.styles.push(ee)}),t}visitReference(n,e){return{type:z.Reference,animation:We(this,bi(n.animation),e),options:Tn(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:z.AnimateChild,options:Tn(n.options)}}visitAnimateRef(n,e){return{type:z.AnimateRef,animation:this.visitReference(n.animation,e),options:Tn(n.options)}}visitQuery(n,e){let t=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,a]=Cv(n.selector);e.currentQuerySelector=t.length?t+" "+o:o,$e(e.collectedStyles,e.currentQuerySelector,new Map);let s=We(this,bi(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:z.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:a,animation:s,originalSelector:n.selector,options:Tn(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(mh());let t=n.timings==="full"?{duration:0,delay:0,easing:"full"}:cr(n.timings,e.errors,!0);return{type:z.Stagger,animation:We(this,bi(n.animation),e),timings:t,options:null}}};function Cv(i){let n=!!i.split(/\s*,\s*/).find(e=>e==Uh);return n&&(i=i.replace(xv,"")),i=i.replace(/@\*/g,lr).replace(/@\w+/g,e=>lr+"-"+e.slice(1)).replace(/:animating/g,Wo),[i,n]}function kv(i){return i?w({},i):null}var cl=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function Sv(i){if(typeof i=="string")return null;let n=null;if(Array.isArray(i))i.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;n=parseFloat(t.get("offset")),t.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let e=i;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function Mv(i,n){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let o=cr(i,n).duration;return il(o,0,"")}let e=i;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=il(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=cr(e,n);return il(r.duration,r.delay,r.easing)}function Tn(i){return i?(i=w({},i),i.params&&(i.params=kv(i.params))):i={},i}function il(i,n,e){return{duration:i,delay:n,easing:e}}function yl(i,n,e,t,r,o,a=null,s=!1){return{type:1,element:i,keyframes:n,preStyleProps:e,postStyleProps:t,duration:r,delay:o,totalTime:r+o,easing:a,subTimeline:s}}var mr=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let t=this._map.get(n);t||this._map.set(n,t=[]),t.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},Ev=1,Tv=":enter",Rv=new RegExp(Tv,"g"),Dv=":leave",Av=new RegExp(Dv,"g");function Hh(i,n,e,t,r,o=new Map,a=new Map,s,l,c=[]){return new dl().buildKeyframes(i,n,e,t,r,o,a,s,l,c)}var dl=class{buildKeyframes(n,e,t,r,o,a,s,l,c,h=[]){c=c||new mr;let p=new ml(n,e,c,r,o,h,[]);p.options=l;let g=l.delay?Tt(l.delay):0;p.currentTimeline.delayNextStep(g),p.currentTimeline.setStyles([a],null,p.errors,l),We(this,t,p);let y=p.timelines.filter(_=>_.containsAnimation());if(y.length&&s.size){let _;for(let x=y.length-1;x>=0;x--){let $=y[x];if($.element===e){_=$;break}}_&&!_.allowOnlyTimelineStyles()&&_.setStyles([s],null,p.errors,l)}return y.length?y.map(_=>_.buildKeyframes()):[yl(e,[],[],[],0,g,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let t=e.subInstructions.get(e.element);if(t){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,a=this._visitSubInstructions(t,r,r.options);o!=a&&e.transformIntoNewTimeline(a)}e.previousNode=n}visitAnimateRef(n,e){let t=e.createSubContext(n.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,t),this.visitReference(n.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,t){for(let r of n){let o=r?.delay;if(o){let a=typeof o=="number"?o:Tt(vi(o,r?.params??{},e.errors));t.delayNextStep(a)}}}_visitSubInstructions(n,e,t){let o=e.currentTimeline.currentTime,a=t.duration!=null?Tt(t.duration):null,s=t.delay!=null?Tt(t.delay):null;return a!==0&&n.forEach(l=>{let c=e.appendInstructionToTimeline(l,a,s);o=Math.max(o,c.duration+c.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),We(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let t=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==z.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=ta);let a=Tt(o.delay);r.delayNextStep(a)}n.steps.length&&(n.steps.forEach(a=>We(this,a,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>t&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let t=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?Tt(n.options.delay):0;n.steps.forEach(a=>{let s=e.createSubContext(n.options);o&&s.delayNextStep(o),We(this,a,s),r=Math.max(r,s.currentTimeline.currentTime),t.push(s.currentTimeline)}),t.forEach(a=>e.currentTimeline.mergeTimelineCollectedStyles(a)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let t=n.strValue,r=e.params?vi(t,e.params,e.errors):t;return cr(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let t=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),r.snapshotCurrentStyles());let o=n.style;o.type==z.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(t.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let t=e.currentTimeline,r=e.currentAnimateTimings;!r&&t.hasCurrentStyleProperties()&&t.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?t.applyEmptyStep(o):t.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let t=e.currentAnimateTimings,r=e.currentTimeline.duration,o=t.duration,s=e.createSubContext().currentTimeline;s.easing=t.easing,n.styles.forEach(l=>{let c=l.offset||0;s.forwardTime(c*o),s.setStyles(l.styles,l.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let t=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?Tt(r.delay):0;o&&(e.previousNode.type===z.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=ta);let a=t,s=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=s.length;let l=null;s.forEach((c,h)=>{e.currentQueryIndex=h;let p=e.createSubContext(n.options,c);o&&p.delayNextStep(o),c===e.element&&(l=p.currentTimeline),We(this,n.animation,p),p.currentTimeline.applyStylesToKeyframe();let g=p.currentTimeline.currentTime;a=Math.max(a,g)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(a),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let t=e.parentContext,r=e.currentTimeline,o=n.timings,a=Math.abs(o.duration),s=a*(e.currentQueryTotal-1),l=a*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":l=s-l;break;case"full":l=t.currentStaggerTime;break}let h=e.currentTimeline;l&&h.delayNextStep(l);let p=h.currentTime;We(this,n.animation,e),e.previousNode=n,t.currentStaggerTime=r.currentTime-p+(r.startTime-t.currentTimeline.startTime)}},ta={},ml=class i{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=ta;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,t,r,o,a,s,l){this._driver=n,this.element=e,this.subInstructions=t,this._enterClassName=r,this._leaveClassName=o,this.errors=a,this.timelines=s,this.currentTimeline=l||new na(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let t=n,r=this.options;t.duration!=null&&(r.duration=Tt(t.duration)),t.delay!=null&&(r.delay=Tt(t.delay));let o=t.params;if(o){let a=r.params;a||(a=this.options.params={}),Object.keys(o).forEach(s=>{(!e||!a.hasOwnProperty(s))&&(a[s]=vi(o[s],a,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let t=n.params={};Object.keys(e).forEach(r=>{t[r]=e[r]})}}return n}createSubContext(n=null,e,t){let r=e||this.element,o=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,t||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=ta,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,t){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(t??0)+n.delay,easing:""},o=new ul(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,t,r,o,a){let s=[];if(r&&s.push(this.element),n.length>0){n=n.replace(Rv,"."+this._enterClassName),n=n.replace(Av,"."+this._leaveClassName);let l=t!=1,c=this._driver.query(this.element,n,l);t!==0&&(c=t<0?c.slice(c.length+t,c.length):c.slice(0,t)),s.push(...c)}return!o&&s.length==0&&a.push(uh(e)),s}},na=class i{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,t,r){this._driver=n,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new i(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ev,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||gt),this._currentKeyframe.set(e,gt);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,t,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},a=Pv(n,this._globalTimelineStyles);for(let[s,l]of a){let c=vi(l,o,t);this._pendingStyles.set(s,c),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??gt),this._updateStyle(s,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,t)=>{let r=this._styleSummary.get(t);(!r||e.time>r.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((s,l)=>{let c=new Map([...this._backFill,...s]);c.forEach((h,p)=>{h===ar?n.add(p):h===gt&&e.add(p)}),t||c.set("offset",l/this.duration),r.push(c)});let o=[...n.values()],a=[...e.values()];if(t){let s=r[0],l=new Map(s);s.set("offset",0),l.set("offset",1),r=[s,l]}return yl(this.element,r,o,a,this.duration,this.startTime,this.easing,!1)}},ul=class extends na{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,t,r,o,a,s=!1){super(n,e,a.delay),this.keyframes=t,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:t,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],a=t+e,s=e/a,l=new Map(n[0]);l.set("offset",0),o.push(l);let c=new Map(n[0]);c.set("offset",Oh(s)),o.push(c);let h=n.length-1;for(let p=1;p<=h;p++){let g=new Map(n[p]),y=g.get("offset"),_=e+y*t;g.set("offset",Oh(_/a)),o.push(g)}t=a,e=0,r="",n=o}return yl(this.element,n,this.preStyleProps,this.postStyleProps,t,e,r,!0)}};function Oh(i,n=3){let e=Math.pow(10,n-1);return Math.round(i*e)/e}function Pv(i,n){let e=new Map,t;return i.forEach(r=>{if(r==="*"){t??=n.keys();for(let o of t)e.set(o,gt)}else for(let[o,a]of r)e.set(o,a)}),e}function Ih(i,n,e,t,r,o,a,s,l,c,h,p,g){return{type:0,element:i,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:t,toStyles:a,timelines:s,queriedElements:l,preStyleProps:c,postStyleProps:h,totalTime:p,errors:g}}var rl={},ia=class{_triggerName;ast;_stateStyles;constructor(n,e,t){this._triggerName=n,this.ast=e,this._stateStyles=t}match(n,e,t,r){return Ov(this.ast.matchers,n,e,t,r)}buildStyles(n,e,t){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,t):new Map}build(n,e,t,r,o,a,s,l,c,h){let p=[],g=this.ast.options&&this.ast.options.params||rl,y=s&&s.params||rl,_=this.buildStyles(t,y,p),x=l&&l.params||rl,$=this.buildStyles(r,x,p),ee=new Set,oe=new Map,te=new Map,_e=r==="void",Re={params:qh(x,g),delay:this.ast.options?.delay},be=h?[]:Hh(n,e,this.ast.animation,o,a,_,$,Re,c,p),fe=0;return be.forEach(Ce=>{fe=Math.max(Ce.duration+Ce.delay,fe)}),p.length?Ih(e,this._triggerName,t,r,_e,_,$,[],[],oe,te,fe,p):(be.forEach(Ce=>{let cn=Ce.element,An=$e(oe,cn,new Set);Ce.preStyleProps.forEach(dn=>An.add(dn));let Cl=$e(te,cn,new Set);Ce.postStyleProps.forEach(dn=>Cl.add(dn)),cn!==e&&ee.add(cn)}),Ih(e,this._triggerName,t,r,_e,_,$,be,[...ee.values()],oe,te,fe))}};function Ov(i,n,e,t,r){return i.some(o=>o(n,e,t,r))}function qh(i,n){let e=w({},n);return Object.entries(i).forEach(([t,r])=>{r!=null&&(e[t]=r)}),e}var hl=class{styles;defaultParams;normalizer;constructor(n,e,t){this.styles=n,this.defaultParams=e,this.normalizer=t}buildStyles(n,e){let t=new Map,r=qh(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,s)=>{a&&(a=vi(a,r,e));let l=this.normalizer.normalizePropertyName(s,e);a=this.normalizer.normalizeStyleValue(s,l,a,e),t.set(s,a)})}),t}};function Iv(i,n,e){return new fl(i,n,e)}var fl=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,t){this.name=n,this.ast=e,this._normalizer=t,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new hl(r.style,o,t))}),Fh(this.states,"true","1"),Fh(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new ia(n,r,this.states))}),this.fallbackTransition=Fv(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,t,r){return this.transitionFactories.find(a=>a.match(n,e,t,r))||null}matchStyles(n,e,t){return this.fallbackTransition.buildStyles(n,e,t)}};function Fv(i,n,e){let t=[(a,s)=>!0],r={type:z.Sequence,steps:[],options:null},o={type:z.Transition,animation:r,matchers:t,options:null,queryCount:0,depCount:0};return new ia(i,o,n)}function Fh(i,n,e){i.has(n)?i.has(e)||i.set(e,i.get(n)):i.has(e)&&i.set(n,i.get(e))}var Nv=new mr,pl=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,t){this.bodyNode=n,this._driver=e,this._normalizer=t}register(n,e){let t=[],r=[],o=Vh(this._driver,e,t,r);if(t.length)throw gh(t);this._animations.set(n,o)}_buildPlayer(n,e,t){let r=n.element,o=Qs(this._normalizer,n.keyframes,e,t);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,t={}){let r=[],o=this._animations.get(n),a,s=new Map;if(o?(a=Hh(this._driver,e,o,el,$o,new Map,new Map,t,Nv,r),a.forEach(h=>{let p=$e(s,h.element,new Map);h.postStyleProps.forEach(g=>p.set(g,null))})):(r.push(_h()),a=[]),r.length)throw bh(r);s.forEach((h,p)=>{h.forEach((g,y)=>{h.set(y,this._driver.computeStyle(p,y,gt))})});let l=a.map(h=>{let p=s.get(h.element);return this._buildPlayer(h,new Map,p)}),c=jt(l);return this._playersById.set(n,c),c.onDestroy(()=>this.destroy(n)),this.players.push(c),c}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw vh(n);return e}listen(n,e,t,r){let o=Ho(e,"","","");return Vo(this._getPlayer(n),t,o,r),()=>{}}command(n,e,t,r){if(t=="register"){this.register(n,r[0]);return}if(t=="create"){let a=r[0]||{};this.create(n,e,a);return}let o=this._getPlayer(n);switch(t){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},Nh="ng-animate-queued",Lv=".ng-animate-queued",ol="ng-animate-disabled",zv=".ng-animate-disabled",Bv="ng-star-inserted",jv=".ng-star-inserted",Uv=[],$h={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Vv={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},bt="__ng_removed",ur=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let t=n&&n.hasOwnProperty("value"),r=t?n.value:n;if(this.value=qv(r),t){let o=n,{value:a}=o,s=El(o,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let t=this.options.params;Object.keys(e).forEach(r=>{t[r]==null&&(t[r]=e[r])})}}},dr="void",al=new ur(dr),gl=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,t){this.id=n,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+n,lt(e,this._hostClassName)}listen(n,e,t,r){if(!this._triggers.has(e))throw yh(t,e);if(t==null||t.length==0)throw wh(e);if(!$v(t))throw xh(t,e);let o=$e(this._elementListeners,n,[]),a={name:e,phase:t,callback:r};o.push(a);let s=$e(this._engine.statesByElement,n,new Map);return s.has(e)||(lt(n,sr),lt(n,sr+"-"+e),s.set(e,al)),()=>{this._engine.afterFlush(()=>{let l=o.indexOf(a);l>=0&&o.splice(l,1),this._triggers.has(e)||s.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw Ch(n);return e}trigger(n,e,t,r=!0){let o=this._getTrigger(e),a=new hr(this.id,e,n),s=this._engine.statesByElement.get(n);s||(lt(n,sr),lt(n,sr+"-"+e),this._engine.statesByElement.set(n,s=new Map));let l=s.get(e),c=new ur(t,this.id);if(!(t&&t.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),s.set(e,c),l||(l=al),!(c.value===dr)&&l.value===c.value){if(!Gv(l.params,c.params)){let x=[],$=o.matchStyles(l.value,l.params,x),ee=o.matchStyles(c.value,c.params,x);x.length?this._engine.reportError(x):this._engine.afterFlush(()=>{ln(n,$),_t(n,ee)})}return}let g=$e(this._engine.playersByElement,n,[]);g.forEach(x=>{x.namespaceId==this.id&&x.triggerName==e&&x.queued&&x.destroy()});let y=o.matchTransition(l.value,c.value,n,c.params),_=!1;if(!y){if(!r)return;y=o.fallbackTransition,_=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:y,fromState:l,toState:c,player:a,isFallbackTransition:_}),_||(lt(n,Nh),a.onStart(()=>{yi(n,Nh)})),a.onDone(()=>{let x=this.players.indexOf(a);x>=0&&this.players.splice(x,1);let $=this._engine.playersByElement.get(n);if($){let ee=$.indexOf(a);ee>=0&&$.splice(ee,1)}}),this.players.push(a),g.push(a),a}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let t=this._engine.driver.query(n,lr,!0);t.forEach(r=>{if(r[bt])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(a=>a.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,t,r){let o=this._engine.statesByElement.get(n),a=new Map;if(o){let s=[];if(o.forEach((l,c)=>{if(a.set(c,l.value),this._triggers.has(c)){let h=this.trigger(n,c,dr,r);h&&s.push(h)}}),s.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,a),t&&jt(s).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),t=this._engine.statesByElement.get(n);if(e&&t){let r=new Set;e.forEach(o=>{let a=o.name;if(r.has(a))return;r.add(a);let l=this._triggers.get(a).fallbackTransition,c=t.get(a)||al,h=new ur(dr),p=new hr(this.id,a,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:a,transition:l,fromState:c,toState:h,player:p,isFallbackTransition:!0})})}}removeNode(n,e){let t=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(t.totalAnimations){let o=t.players.length?t.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let a=n;for(;a=a.parentNode;)if(t.statesByElement.get(a)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)t.markElementAsRemoved(this.id,n,!1,e);else{let o=n[bt];(!o||o===$h)&&(t.afterFlush(()=>this.clearElementCache(n)),t.destroyInnerAnimations(n),t._onRemovalComplete(n,e))}}insertNode(n,e){lt(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(t=>{let r=t.player;if(r.destroyed)return;let o=t.element,a=this._elementListeners.get(o);a&&a.forEach(s=>{if(s.name==t.triggerName){let l=Ho(o,t.triggerName,t.fromState.value,t.toState.value);l._data=n,Vo(t.player,s.phase,l,s.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(t)}),this._queue=[],e.sort((t,r)=>{let o=t.transition.ast.depCount,a=r.transition.ast.depCount;return o==0||a==0?o-a:this._engine.driver.containsElement(t.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},_l=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,t){this.bodyNode=n,this.driver=e,this._normalizer=t}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&n.push(t)})}),n}createNamespace(n,e){let t=new gl(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[n]=t}_balanceNamespaceList(n,e){let t=this._namespaceList,r=this.namespacesByHostElement;if(t.length-1>=0){let a=!1,s=this.driver.getParentElement(e);for(;s;){let l=r.get(s);if(l){let c=t.indexOf(l);t.splice(c+1,0,n),a=!0;break}s=this.driver.getParentElement(s)}a||t.unshift(n)}else t.push(n);return r.set(e,n),n}register(n,e){let t=this._namespaceLookup[n];return t||(t=this.createNamespace(n,e)),t}registerTrigger(n,e,t){let r=this._namespaceLookup[n];r&&r.register(e,t)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(n);this.namespacesByHostElement.delete(t.hostElement);let r=this._namespaceList.indexOf(t);r>=0&&this._namespaceList.splice(r,1),t.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,t=this.statesByElement.get(n);if(t){for(let r of t.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,t,r){if(Xo(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,t,r),!0}return!1}insertNode(n,e,t,r){if(!Xo(e))return;let o=e[bt];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let a=this.collectedLeaveElements.indexOf(e);a>=0&&this.collectedLeaveElements.splice(a,1)}if(n){let a=this._fetchNamespace(n);a&&a.insertNode(e,t)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),lt(n,ol)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),yi(n,ol))}removeNode(n,e,t){if(Xo(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,t):this.markElementAsRemoved(n,e,!1,t);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(n,e,t,r,o){this.collectedLeaveElements.push(e),e[bt]={namespaceId:n,setForRemoval:r,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,t,r,o){return Xo(e)?this._fetchNamespace(n).listen(e,t,r,o):()=>{}}_buildInstruction(n,e,t,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,t,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,lr,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,Wo,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return jt(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[bt];if(e&&e.setForRemoval){if(n[bt]=$h,e.namespaceId){this.destroyInnerAnimations(n);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(ol)&&this.markElementAsDisabled(n,!1),this.driver.query(n,zv,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,r)=>this._balanceNamespaceList(t,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let r=this.collectedEnterElements[t];lt(r,Bv)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,n)}finally{for(let r=0;r<t.length;r++)t[r]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let r=this.collectedLeaveElements[t];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?jt(e).onDone(()=>{t.forEach(r=>r())}):t.forEach(r=>r())}}reportError(n){throw kh(n)}_flushAnimations(n,e){let t=new mr,r=[],o=new Map,a=[],s=new Map,l=new Map,c=new Map,h=new Set;this.disabledNodes.forEach(C=>{h.add(C);let S=this.driver.query(C,Lv,!0);for(let R=0;R<S.length;R++)h.add(S[R])});let p=this.bodyNode,g=Array.from(this.statesByElement.keys()),y=Bh(g,this.collectedEnterElements),_=new Map,x=0;y.forEach((C,S)=>{let R=el+x++;_.set(S,R),C.forEach(W=>lt(W,R))});let $=[],ee=new Set,oe=new Set;for(let C=0;C<this.collectedLeaveElements.length;C++){let S=this.collectedLeaveElements[C],R=S[bt];R&&R.setForRemoval&&($.push(S),ee.add(S),R.hasAnimation?this.driver.query(S,jv,!0).forEach(W=>ee.add(W)):oe.add(S))}let te=new Map,_e=Bh(g,Array.from(ee));_e.forEach((C,S)=>{let R=$o+x++;te.set(S,R),C.forEach(W=>lt(W,R))}),n.push(()=>{y.forEach((C,S)=>{let R=_.get(S);C.forEach(W=>yi(W,R))}),_e.forEach((C,S)=>{let R=te.get(S);C.forEach(W=>yi(W,R))}),$.forEach(C=>{this.processLeaveNode(C)})});let Re=[],be=[];for(let C=this._namespaceList.length-1;C>=0;C--)this._namespaceList[C].drainQueuedTransitions(e).forEach(R=>{let W=R.player,ke=R.element;if(Re.push(W),this.collectedEnterElements.length){let De=ke[bt];if(De&&De.setForMove){if(De.previousTriggersValues&&De.previousTriggersValues.has(R.triggerName)){let mn=De.previousTriggersValues.get(R.triggerName),Je=this.statesByElement.get(R.element);if(Je&&Je.has(R.triggerName)){let pr=Je.get(R.triggerName);pr.value=mn,Je.set(R.triggerName,pr)}}W.destroy();return}}let vt=!p||!this.driver.containsElement(p,ke),Ke=te.get(ke),Ut=_.get(ke),de=this._buildInstruction(R,t,Ut,Ke,vt);if(de.errors&&de.errors.length){be.push(de);return}if(vt){W.onStart(()=>ln(ke,de.fromStyles)),W.onDestroy(()=>_t(ke,de.toStyles)),r.push(W);return}if(R.isFallbackTransition){W.onStart(()=>ln(ke,de.fromStyles)),W.onDestroy(()=>_t(ke,de.toStyles)),r.push(W);return}let Ml=[];de.timelines.forEach(De=>{De.stretchStartingKeyframe=!0,this.disabledNodes.has(De.element)||Ml.push(De)}),de.timelines=Ml,t.append(ke,de.timelines);let rf={instruction:de,player:W,element:ke};a.push(rf),de.queriedElements.forEach(De=>$e(s,De,[]).push(W)),de.preStyleProps.forEach((De,mn)=>{if(De.size){let Je=l.get(mn);Je||l.set(mn,Je=new Set),De.forEach((pr,ca)=>Je.add(ca))}}),de.postStyleProps.forEach((De,mn)=>{let Je=c.get(mn);Je||c.set(mn,Je=new Set),De.forEach((pr,ca)=>Je.add(ca))})});if(be.length){let C=[];be.forEach(S=>{C.push(Sh(S.triggerName,S.errors))}),Re.forEach(S=>S.destroy()),this.reportError(C)}let fe=new Map,Ce=new Map;a.forEach(C=>{let S=C.element;t.has(S)&&(Ce.set(S,S),this._beforeAnimationBuild(C.player.namespaceId,C.instruction,fe))}),r.forEach(C=>{let S=C.element;this._getPreviousPlayers(S,!1,C.namespaceId,C.triggerName,null).forEach(W=>{$e(fe,S,[]).push(W),W.destroy()})});let cn=$.filter(C=>jh(C,l,c)),An=new Map;zh(An,this.driver,oe,c,gt).forEach(C=>{jh(C,l,c)&&cn.push(C)});let dn=new Map;y.forEach((C,S)=>{zh(dn,this.driver,new Set(C),l,ar)}),cn.forEach(C=>{let S=An.get(C),R=dn.get(C);An.set(C,new Map([...S?.entries()??[],...R?.entries()??[]]))});let la=[],kl=[],Sl={};a.forEach(C=>{let{element:S,player:R,instruction:W}=C;if(t.has(S)){if(h.has(S)){R.onDestroy(()=>_t(S,W.toStyles)),R.disabled=!0,R.overrideTotalTime(W.totalTime),r.push(R);return}let ke=Sl;if(Ce.size>1){let Ke=S,Ut=[];for(;Ke=Ke.parentNode;){let de=Ce.get(Ke);if(de){ke=de;break}Ut.push(Ke)}Ut.forEach(de=>Ce.set(de,ke))}let vt=this._buildAnimation(R.namespaceId,W,fe,o,dn,An);if(R.setRealPlayer(vt),ke===Sl)la.push(R);else{let Ke=this.playersByElement.get(ke);Ke&&Ke.length&&(R.parentPlayer=jt(Ke)),r.push(R)}}else ln(S,W.fromStyles),R.onDestroy(()=>_t(S,W.toStyles)),kl.push(R),h.has(S)&&r.push(R)}),kl.forEach(C=>{let S=o.get(C.element);if(S&&S.length){let R=jt(S);C.setRealPlayer(R)}}),r.forEach(C=>{C.parentPlayer?C.syncPlayerEvents(C.parentPlayer):C.destroy()});for(let C=0;C<$.length;C++){let S=$[C],R=S[bt];if(yi(S,$o),R&&R.hasAnimation)continue;let W=[];if(s.size){let vt=s.get(S);vt&&vt.length&&W.push(...vt);let Ke=this.driver.query(S,Wo,!0);for(let Ut=0;Ut<Ke.length;Ut++){let de=s.get(Ke[Ut]);de&&de.length&&W.push(...de)}}let ke=W.filter(vt=>!vt.destroyed);ke.length?Wv(this,S,ke):this.processLeaveNode(S)}return $.length=0,la.forEach(C=>{this.players.push(C),C.onDone(()=>{C.destroy();let S=this.players.indexOf(C);this.players.splice(S,1)}),C.play()}),la}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,t,r,o){let a=[];if(e){let s=this.playersByQueriedElement.get(n);s&&(a=s)}else{let s=this.playersByElement.get(n);if(s){let l=!o||o==dr;s.forEach(c=>{c.queued||!l&&c.triggerName!=r||a.push(c)})}}return(t||r)&&(a=a.filter(s=>!(t&&t!=s.namespaceId||r&&r!=s.triggerName))),a}_beforeAnimationBuild(n,e,t){let r=e.triggerName,o=e.element,a=e.isRemovalTransition?void 0:n,s=e.isRemovalTransition?void 0:r;for(let l of e.timelines){let c=l.element,h=c!==o,p=$e(t,c,[]);this._getPreviousPlayers(c,h,a,s,e.toState).forEach(y=>{let _=y.getRealPlayer();_.beforeDestroy&&_.beforeDestroy(),y.destroy(),p.push(y)})}ln(o,e.fromStyles)}_buildAnimation(n,e,t,r,o,a){let s=e.triggerName,l=e.element,c=[],h=new Set,p=new Set,g=e.timelines.map(_=>{let x=_.element;h.add(x);let $=x[bt];if($&&$.removedBeforeQueried)return new Bt(_.duration,_.delay);let ee=x!==l,oe=Kv((t.get(x)||Uv).map(fe=>fe.getRealPlayer())).filter(fe=>{let Ce=fe;return Ce.element?Ce.element===x:!1}),te=o.get(x),_e=a.get(x),Re=Qs(this._normalizer,_.keyframes,te,_e),be=this._buildPlayer(_,Re,oe);if(_.subTimeline&&r&&p.add(x),ee){let fe=new hr(n,s,x);fe.setRealPlayer(be),c.push(fe)}return be});c.forEach(_=>{$e(this.playersByQueriedElement,_.element,[]).push(_),_.onDone(()=>Hv(this.playersByQueriedElement,_.element,_))}),h.forEach(_=>lt(_,tl));let y=jt(g);return y.onDestroy(()=>{h.forEach(_=>yi(_,tl)),_t(l,e.toStyles)}),p.forEach(_=>{$e(r,_,[]).push(y)}),y}_buildPlayer(n,e,t){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,t):new Bt(n.duration,n.delay)}},hr=class{namespaceId;triggerName;element;_player=new Bt;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,t){this.namespaceId=n,this.triggerName=e,this.element=t}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,t)=>{e.forEach(r=>Vo(n,t,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){$e(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function Hv(i,n,e){let t=i.get(n);if(t){if(t.length){let r=t.indexOf(e);t.splice(r,1)}t.length==0&&i.delete(n)}return t}function qv(i){return i??null}function Xo(i){return i&&i.nodeType===1}function $v(i){return i=="start"||i=="done"}function Lh(i,n){let e=i.style.display;return i.style.display=n??"none",e}function zh(i,n,e,t,r){let o=[];e.forEach(l=>o.push(Lh(l)));let a=[];t.forEach((l,c)=>{let h=new Map;l.forEach(p=>{let g=n.computeStyle(c,p,r);h.set(p,g),(!g||g.length==0)&&(c[bt]=Vv,a.push(c))}),i.set(c,h)});let s=0;return e.forEach(l=>Lh(l,o[s++])),a}function Bh(i,n){let e=new Map;if(i.forEach(s=>e.set(s,[])),n.length==0)return e;let t=1,r=new Set(n),o=new Map;function a(s){if(!s)return t;let l=o.get(s);if(l)return l;let c=s.parentNode;return e.has(c)?l=c:r.has(c)?l=t:l=a(c),o.set(s,l),l}return n.forEach(s=>{let l=a(s);l!==t&&e.get(l).push(s)}),e}function lt(i,n){i.classList?.add(n)}function yi(i,n){i.classList?.remove(n)}function Wv(i,n,e){jt(e).onDone(()=>i.processLeaveNode(n))}function Kv(i){let n=[];return Wh(i,n),n}function Wh(i,n){for(let e=0;e<i.length;e++){let t=i[e];t instanceof _i?Wh(t.players,n):n.push(t)}}function Gv(i,n){let e=Object.keys(i),t=Object.keys(n);if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||i[o]!==n[o])return!1}return!0}function jh(i,n,e){let t=e.get(i);if(!t)return!1;let r=n.get(i);return r?t.forEach(o=>r.add(o)):n.set(i,t),e.delete(i),!0}var wi=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new _l(n.body,e,t),this._timelineEngine=new pl(n.body,e,t),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,t,r,o){let a=n+"-"+r,s=this._triggerCache[a];if(!s){let l=[],c=[],h=Vh(this._driver,o,l,c);if(l.length)throw ph(r,l);s=Iv(r,h,this._normalizer),this._triggerCache[a]=s}this._transitionEngine.registerTrigger(e,r,s)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,t,r){this._transitionEngine.insertNode(n,e,t,r)}onRemove(n,e,t){this._transitionEngine.removeNode(n,e,t)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,t,r){if(t.charAt(0)=="@"){let[o,a]=Ys(t),s=r;this._timelineEngine.command(o,e,a,s)}else this._transitionEngine.trigger(n,e,t,r)}listen(n,e,t,r,o){if(t.charAt(0)=="@"){let[a,s]=Ys(t);return this._timelineEngine.listen(a,e,s,o)}return this._transitionEngine.listen(n,e,t,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function Qv(i,n){let e=null,t=null;return Array.isArray(n)&&n.length?(e=sl(n[0]),n.length>1&&(t=sl(n[n.length-1]))):n instanceof Map&&(e=sl(n)),e||t?new Yv(i,e,t):null}var Yv=(()=>{class i{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,r){this._element=e,this._startStyles=t,this._endStyles=r;let o=i.initialStylesByElement.get(e);o||i.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&_t(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(_t(this._element,this._initialStyles),this._endStyles&&(_t(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(i.initialStylesByElement.delete(this._element),this._startStyles&&(ln(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(ln(this._element,this._endStyles),this._endStyles=null),_t(this._element,this._initialStyles),this._state=3)}}return i})();function sl(i){let n=null;return i.forEach((e,t)=>{Xv(t)&&(n=n||new Map,n.set(t,e))}),n}function Xv(i){return i==="display"||i==="position"}var ra=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,t,r){this.element=n,this.keyframes=e,this.options=t,this._specialStyles=r,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(n,e,t){let r=this._convertKeyframesToObject(e);try{return n.animate(r,t)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,r)=>{r!=="offset"&&n.set(r,this._finished?t:Go(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},oa=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Xs(n,e)}getParentElement(n){return qo(n)}query(n,e,t){return Zs(n,e,t)}computeStyle(n,e,t){return Go(n,e)}animate(n,e,t,r,o,a=[]){let s=r==0?"both":"forwards",l={duration:t,delay:r,fill:s};o&&(l.easing=o);let c=new Map,h=a.filter(y=>y instanceof ra);Rh(t,r)&&h.forEach(y=>{y.currentSnapshot.forEach((_,x)=>c.set(x,_))});let p=Eh(e).map(y=>new Map(y));p=Dh(n,p,c);let g=Qv(n,p);return new ra(n,p,l,g)}};var Zo="@",Kh="@.disabled",aa=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,t,r){this.namespaceId=n,this.delegate=e,this.engine=t,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,t,r=!0){this.delegate.insertBefore(n,e,t),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,t,r){if(r){this.delegate.removeChild(n,e,t,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){e.charAt(0)==Zo&&e==Kh?this.disableAnimations(n,!!t):this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.delegate.listen(n,e,t,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},bl=class extends aa{factory;constructor(n,e,t,r,o){super(e,t,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,t){e.charAt(0)==Zo?e.charAt(1)=="."&&e==Kh?(t=t===void 0?!0:!!t,this.disableAnimations(n,t)):this.engine.process(this.namespaceId,n,e.slice(1),t):this.delegate.setProperty(n,e,t)}listen(n,e,t,r){if(e.charAt(0)==Zo){let o=Zv(n),a=e.slice(1),s="";return a.charAt(0)!=Zo&&([a,s]=Jv(a)),this.engine.listen(this.namespaceId,o,a,s,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,t,l)})}return this.delegate.listen(n,e,t,r)}};function Zv(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function Jv(i){let n=i.indexOf("."),e=i.substring(0,n),t=i.slice(n+1);return[e,t]}var sa=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,t){this.delegate=n,this.engine=e,this._zone=t,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let c=this._rendererCache,h=c.get(r);if(!h){let p=()=>c.delete(r);h=new aa("",r,this.engine,p),c.set(r,h)}return h}let o=e.id,a=e.id+"-"+this._currentId;this._currentId++,this.engine.register(a,n);let s=c=>{Array.isArray(c)?c.forEach(s):this.engine.registerTrigger(o,a,n,c.name,c)};return e.data.animation.forEach(s),new bl(this,a,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,t){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(t));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[a,s]=o;a(s)}),this._animationCallbacksBuffer=[]})}),r.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var ty=(()=>{class i extends wi{constructor(e,t,r){super(e,t,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||i)(Ee(ct),Ee(Rn),Ee(Dn))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})();function ny(){return new Jo}function iy(){return new sa(d(hc),d(wi),d(se))}var Qh=[{provide:Dn,useFactory:ny},{provide:wi,useClass:ty},{provide:xr,useFactory:iy}],ry=[{provide:Rn,useClass:vl},{provide:pa,useValue:"NoopAnimations"},...Qh],Gh=[{provide:Rn,useFactory:()=>new oa},{provide:pa,useFactory:()=>"BrowserAnimations"},...Qh],Yh=(()=>{class i{static withConfig(e){return{ngModule:i,providers:e.disableAnimations?ry:Gh}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({providers:Gh,imports:[Dr]})}return i})();var Xh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({imports:[Ec,jn,ce,Ot]})}return i})();var wl="Service workers are disabled or not supported by this browser",xi=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new Vt(t=>t.error(new k(5601,!1)));else{let t=null,r=new L;this.worker=new Vt(c=>(t!==null&&c.next(t),r.subscribe(h=>c.next(h))));let o=()=>{let{controller:c}=n;c!==null&&(t=c,r.next(t))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ue(()=>n.getRegistration().then(c=>{if(!c)throw new k(5601,!1);return c})));let a=new L;this.events=a.asObservable();let s=c=>{let{data:h}=c;h?.type&&a.next(h)};n.addEventListener("message",s),e?.get(hn,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",s)})}}postMessage(n,e){return new Promise(t=>{this.worker.pipe(Se(1)).subscribe(r=>{r.postMessage(w({action:n},e)),t()})})}postMessageWithOperation(n,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=t=>t.type===n:e=t=>n.includes(t.type),this.events.pipe(ae(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(Se(1))}waitForOperationCompleted(n){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(ae(r=>r.nonce===n),Se(1),Y(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Jh=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new L;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Ht,this.notificationClicks=Ht,this.notificationCloses=Ht,this.pushSubscriptionChanges=Ht,this.subscription=Ht;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Y(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Y(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Y(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Y(r=>r.data)),this.pushManager=this.sw.registration.pipe(Y(r=>r.pushManager));let t=this.pushManager.pipe(ue(r=>r.getSubscription()));this.subscription=new Vt(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(wl));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(ue(l=>l.subscribe(t)),Se(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),a(l)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(wl));let e=t=>{if(t===null)throw new k(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new k(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(Se(1),ue(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(Ee(xi))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),ef=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Ht,this.unrecoverable=Ht;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(wl));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new k(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(Ee(xi))};static \u0275prov=pe({token:i,factory:i.\u0275fac})}return i})(),tf=new D("");function oy(){let i=d(fr);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let n=d(tf),e=d(se),t=d(hn);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=i;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=Zh(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),Zh(+s[0])]);break;default:throw new k(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(n,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(a=>console.error(gr(5604,!1)))})})}function Zh(i){return new Promise(n=>setTimeout(n,i))}function ay(){let i=d(fr),n=d(Ae),e=!0;return new xi(e&&i.enabled!==!1?navigator.serviceWorker:void 0,n)}var fr=class{enabled;updateViaCache;type;scope;registrationStrategy};function sy(i,n={}){return ha([Jh,ef,{provide:tf,useValue:i},{provide:fr,useValue:n},{provide:xi,useFactory:ay},Si(oy)])}var xl=(()=>{class i{static register(e,t={}){return{ngModule:i,providers:[sy(e,t)]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=U({providers:[Jh,ef]})}return i})();var nf=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=V({type:i,bootstrap:[Xu]})}static{this.\u0275inj=U({providers:[pc(_c(),gc())],imports:[Dr,Uu,Yh,Hu,Fc,Yc,om,$u,Au,Yu,Nu,Gc,Mn,Xh,um,xl.register("ngsw-worker.js",{enabled:gi.production,registrationStrategy:"registerWhenStable:30000"}),xl.register("ngsw-worker.js",{enabled:!sc(),registrationStrategy:"registerWhenStable:30000"})]})}}return i})();gi.production&&void 0;fc().bootstrapModule(nf,{applicationProviders:[rc()]}).catch(i=>console.error(i));
