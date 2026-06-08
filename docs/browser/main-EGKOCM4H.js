import{$ as Si,$a as Ke,$b as Nr,$c as ku,A as C,Aa as Ne,Ab as K,Ac as lu,B as wi,Ba as H,Bb as Y,Bc as cu,C as k,Ca as Gn,Cb as At,Cc as ee,D as I,Da as Fm,Db as Ot,Dc as Lr,E as Dm,Ea as Lm,Eb as It,Ec as du,F as w,Fa as Al,Fb as oe,Fc as mu,G as tn,Ga as na,Gb as u,Gc as ma,H as q,Ha as Ei,Hb as h,Hc as uu,I as d,Ia as Mi,Ib as S,Ic as hu,J as xi,Ja as Bm,Jb as Pt,Jc as Ri,K as Am,Ka as zm,Kb as qt,Kc as pu,L as Ue,La as jm,Lb as $t,Lc as fu,M as Je,Ma as Um,Mb as Nt,Mc as jl,N as at,Na as Vm,Nb as Sn,Nc as gu,O as st,Oa as Hm,Ob as ce,Oc as Br,P as Rr,Pa as Wm,Pb as Zm,Pc as _u,Q as ie,Qa as nn,Qb as W,Qc as kn,R as $,Ra as qm,Rb as ge,Rc as bu,S as Ci,Sa as xn,Sb as L,T as Om,Ta as $m,Tb as et,Tc as vu,U as re,Ua as x,Ub as Fe,Uc as yu,V as R,Va as Or,Vb as z,Vc as wu,W as Cl,Wa as Gm,Wb as j,Wc as ua,X as Jo,Xa as ia,Xb as Jm,Xc as xu,Y as te,Ya as Ol,Yb as eu,Yc as Cu,Z as Dr,Za as Ge,Zb as Ll,Zc as Su,_ as Im,_a as Cn,_b as Gt,_c as Ul,a as v,aa as Hn,ab as Oe,ac as G,ad as Yn,b as je,ba as ki,bb as ra,bc as St,c as wl,ca as Wn,cb as oa,cc as f,d as be,da as qn,db as Ir,dc as ct,dd as Eu,e as _b,ea as Sl,eb as lt,ec as _t,ed as ha,f as ye,fa as kl,fb as Ti,fd as Mu,g as De,ga as ea,gb as rn,gd as Tu,h as Mm,ha as $n,hb as Km,hd as pa,i as qe,ia as yn,ib as Il,j as E,ja as El,jb as Ym,jc as tu,jd as Ru,k as it,ka as Ae,kb as aa,kc as Ie,l as rt,la as Ar,lb as M,ld as Du,m as B,ma as wn,mb as P,mc as nu,md as Di,n as Tm,na as Ml,nb as F,nc as iu,o as Xo,oa as Tl,ob as Pr,oc as Bl,p as Rm,pa as Rl,pb as Ee,pc as ru,q as Z,qa as Dl,qb as on,qc as Kn,qd as Au,r as Tr,ra as ta,rb as Qm,rc as Me,s as Ze,sa as $e,sb as Pl,sc as ou,sd as Ou,t as Wt,ta as we,tb as Xm,tc as ca,u as xl,ua as ue,ub as sa,uc as zl,v as Zo,va as Pm,vb as la,vc as da,w as yi,wa as pt,wb as Nl,wc as Fr,x as ot,xa as ft,xb as Fl,xc as au,y as vn,ya as Ct,yb as gt,yc as su,z as le,za as Nm,zb as he,zc as Te}from"./chunk-EEHGAVC3.js";var Ef=be((uA,kf)=>{"use strict";kf.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var Ln=be(di=>{"use strict";var cd,aw=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];di.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17};di.getSymbolTotalCodewords=function(n){return aw[n]};di.getBCHDigit=function(i){let n=0;for(;i!==0;)n++,i>>>=1;return n};di.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');cd=n};di.isKanjiModeEnabled=function(){return typeof cd<"u"};di.toSJIS=function(n){return cd(n)}});var Fs=be(Rt=>{"use strict";Rt.L={bit:1};Rt.M={bit:0};Rt.Q={bit:3};Rt.H={bit:2};function sw(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return Rt.L;case"m":case"medium":return Rt.M;case"q":case"quartile":return Rt.Q;case"h":case"high":return Rt.H;default:throw new Error("Unknown EC Level: "+i)}}Rt.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4};Rt.from=function(n,e){if(Rt.isValid(n))return n;try{return sw(n)}catch(t){return e}}});var Rf=be((fA,Tf)=>{"use strict";function Mf(){this.buffer=[],this.length=0}Mf.prototype={get:function(i){let n=Math.floor(i/8);return(this.buffer[n]>>>7-i%8&1)===1},put:function(i,n){for(let e=0;e<n;e++)this.putBit((i>>>n-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){let n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),i&&(this.buffer[n]|=128>>>this.length%8),this.length++}};Tf.exports=Mf});var Af=be((gA,Df)=>{"use strict";function To(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}To.prototype.set=function(i,n,e,t){let r=i*this.size+n;this.data[r]=e,t&&(this.reservedBit[r]=!0)};To.prototype.get=function(i,n){return this.data[i*this.size+n]};To.prototype.xor=function(i,n,e){this.data[i*this.size+n]^=e};To.prototype.isReserved=function(i,n){return this.reservedBit[i*this.size+n]};Df.exports=To});var Of=be(Ls=>{"use strict";var lw=Ln().getSymbolSize;Ls.getRowColCoords=function(n){if(n===1)return[];let e=Math.floor(n/7)+2,t=lw(n),r=t===145?26:Math.ceil((t-13)/(2*e-2))*2,o=[t-7];for(let a=1;a<e-1;a++)o[a]=o[a-1]-r;return o.push(6),o.reverse()};Ls.getPositions=function(n){let e=[],t=Ls.getRowColCoords(n),r=t.length;for(let o=0;o<r;o++)for(let a=0;a<r;a++)o===0&&a===0||o===0&&a===r-1||o===r-1&&a===0||e.push([t[o],t[a]]);return e}});var Nf=be(Pf=>{"use strict";var cw=Ln().getSymbolSize,If=7;Pf.getPositions=function(n){let e=cw(n);return[[0,0],[e-If,0],[0,e-If]]}});var Ff=be(xe=>{"use strict";xe.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var mi={N1:3,N2:3,N3:40,N4:10};xe.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7};xe.from=function(n){return xe.isValid(n)?parseInt(n,10):void 0};xe.getPenaltyN1=function(n){let e=n.size,t=0,r=0,o=0,a=null,s=null;for(let l=0;l<e;l++){r=o=0,a=s=null;for(let c=0;c<e;c++){let m=n.get(l,c);m===a?r++:(r>=5&&(t+=mi.N1+(r-5)),a=m,r=1),m=n.get(c,l),m===s?o++:(o>=5&&(t+=mi.N1+(o-5)),s=m,o=1)}r>=5&&(t+=mi.N1+(r-5)),o>=5&&(t+=mi.N1+(o-5))}return t};xe.getPenaltyN2=function(n){let e=n.size,t=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){let a=n.get(r,o)+n.get(r,o+1)+n.get(r+1,o)+n.get(r+1,o+1);(a===4||a===0)&&t++}return t*mi.N2};xe.getPenaltyN3=function(n){let e=n.size,t=0,r=0,o=0;for(let a=0;a<e;a++){r=o=0;for(let s=0;s<e;s++)r=r<<1&2047|n.get(a,s),s>=10&&(r===1488||r===93)&&t++,o=o<<1&2047|n.get(s,a),s>=10&&(o===1488||o===93)&&t++}return t*mi.N3};xe.getPenaltyN4=function(n){let e=0,t=n.data.length;for(let o=0;o<t;o++)e+=n.data[o];return Math.abs(Math.ceil(e*100/t/5)-10)*mi.N4};function dw(i,n,e){switch(i){case xe.Patterns.PATTERN000:return(n+e)%2===0;case xe.Patterns.PATTERN001:return n%2===0;case xe.Patterns.PATTERN010:return e%3===0;case xe.Patterns.PATTERN011:return(n+e)%3===0;case xe.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(e/3))%2===0;case xe.Patterns.PATTERN101:return n*e%2+n*e%3===0;case xe.Patterns.PATTERN110:return(n*e%2+n*e%3)%2===0;case xe.Patterns.PATTERN111:return(n*e%3+(n+e)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}xe.applyMask=function(n,e){let t=e.size;for(let r=0;r<t;r++)for(let o=0;o<t;o++)e.isReserved(o,r)||e.xor(o,r,dw(n,o,r))};xe.getBestMask=function(n,e){let t=Object.keys(xe.Patterns).length,r=0,o=1/0;for(let a=0;a<t;a++){e(a),xe.applyMask(a,n);let s=xe.getPenaltyN1(n)+xe.getPenaltyN2(n)+xe.getPenaltyN3(n)+xe.getPenaltyN4(n);xe.applyMask(a,n),s<o&&(o=s,r=a)}return r}});var md=be(dd=>{"use strict";var Bn=Fs(),Bs=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],zs=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];dd.getBlocksCount=function(n,e){switch(e){case Bn.L:return Bs[(n-1)*4+0];case Bn.M:return Bs[(n-1)*4+1];case Bn.Q:return Bs[(n-1)*4+2];case Bn.H:return Bs[(n-1)*4+3];default:return}};dd.getTotalCodewordsCount=function(n,e){switch(e){case Bn.L:return zs[(n-1)*4+0];case Bn.M:return zs[(n-1)*4+1];case Bn.Q:return zs[(n-1)*4+2];case Bn.H:return zs[(n-1)*4+3];default:return}}});var Lf=be(Us=>{"use strict";var Ro=new Uint8Array(512),js=new Uint8Array(256);(function(){let n=1;for(let e=0;e<255;e++)Ro[e]=n,js[n]=e,n<<=1,n&256&&(n^=285);for(let e=255;e<512;e++)Ro[e]=Ro[e-255]})();Us.log=function(n){if(n<1)throw new Error("log("+n+")");return js[n]};Us.exp=function(n){return Ro[n]};Us.mul=function(n,e){return n===0||e===0?0:Ro[js[n]+js[e]]}});var Bf=be(Do=>{"use strict";var ud=Lf();Do.mul=function(n,e){let t=new Uint8Array(n.length+e.length-1);for(let r=0;r<n.length;r++)for(let o=0;o<e.length;o++)t[r+o]^=ud.mul(n[r],e[o]);return t};Do.mod=function(n,e){let t=new Uint8Array(n);for(;t.length-e.length>=0;){let r=t[0];for(let a=0;a<e.length;a++)t[a]^=ud.mul(e[a],r);let o=0;for(;o<t.length&&t[o]===0;)o++;t=t.slice(o)}return t};Do.generateECPolynomial=function(n){let e=new Uint8Array([1]);for(let t=0;t<n;t++)e=Do.mul(e,new Uint8Array([1,ud.exp(t)]));return e}});var Uf=be((CA,jf)=>{"use strict";var zf=Bf();function hd(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}hd.prototype.initialize=function(n){this.degree=n,this.genPoly=zf.generateECPolynomial(this.degree)};hd.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(n.length+this.degree);e.set(n);let t=zf.mod(e,this.genPoly),r=this.degree-t.length;if(r>0){let o=new Uint8Array(this.degree);return o.set(t,r),o}return t};jf.exports=hd});var pd=be(Vf=>{"use strict";Vf.isValid=function(n){return!isNaN(n)&&n>=1&&n<=40}});var fd=be(fn=>{"use strict";var Hf="[0-9]+",mw="[A-Z $%*+\\-./:]+",Ao="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ao=Ao.replace(/u/g,"\\u");var uw="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ao+`)(?:.|[\r
]))+`;fn.KANJI=new RegExp(Ao,"g");fn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");fn.BYTE=new RegExp(uw,"g");fn.NUMERIC=new RegExp(Hf,"g");fn.ALPHANUMERIC=new RegExp(mw,"g");var hw=new RegExp("^"+Ao+"$"),pw=new RegExp("^"+Hf+"$"),fw=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");fn.testKanji=function(n){return hw.test(n)};fn.testNumeric=function(n){return pw.test(n)};fn.testAlphanumeric=function(n){return fw.test(n)}});var zn=be(Pe=>{"use strict";var gw=pd(),gd=fd();Pe.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};Pe.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};Pe.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};Pe.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};Pe.MIXED={bit:-1};Pe.getCharCountIndicator=function(n,e){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!gw.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?n.ccBits[0]:e<27?n.ccBits[1]:n.ccBits[2]};Pe.getBestModeForData=function(n){return gd.testNumeric(n)?Pe.NUMERIC:gd.testAlphanumeric(n)?Pe.ALPHANUMERIC:gd.testKanji(n)?Pe.KANJI:Pe.BYTE};Pe.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")};Pe.isValid=function(n){return n&&n.bit&&n.ccBits};function _w(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return Pe.NUMERIC;case"alphanumeric":return Pe.ALPHANUMERIC;case"kanji":return Pe.KANJI;case"byte":return Pe.BYTE;default:throw new Error("Unknown mode: "+i)}}Pe.from=function(n,e){if(Pe.isValid(n))return n;try{return _w(n)}catch(t){return e}}});var Kf=be(ui=>{"use strict";var Vs=Ln(),bw=md(),Wf=Fs(),jn=zn(),_d=pd(),$f=7973,qf=Vs.getBCHDigit($f);function vw(i,n,e){for(let t=1;t<=40;t++)if(n<=ui.getCapacity(t,e,i))return t}function Gf(i,n){return jn.getCharCountIndicator(i,n)+4}function yw(i,n){let e=0;return i.forEach(function(t){let r=Gf(t.mode,n);e+=r+t.getBitsLength()}),e}function ww(i,n){for(let e=1;e<=40;e++)if(yw(i,e)<=ui.getCapacity(e,n,jn.MIXED))return e}ui.from=function(n,e){return _d.isValid(n)?parseInt(n,10):e};ui.getCapacity=function(n,e,t){if(!_d.isValid(n))throw new Error("Invalid QR Code version");typeof t>"u"&&(t=jn.BYTE);let r=Vs.getSymbolTotalCodewords(n),o=bw.getTotalCodewordsCount(n,e),a=(r-o)*8;if(t===jn.MIXED)return a;let s=a-Gf(t,n);switch(t){case jn.NUMERIC:return Math.floor(s/10*3);case jn.ALPHANUMERIC:return Math.floor(s/11*2);case jn.KANJI:return Math.floor(s/13);case jn.BYTE:default:return Math.floor(s/8)}};ui.getBestVersionForData=function(n,e){let t,r=Wf.from(e,Wf.M);if(Array.isArray(n)){if(n.length>1)return ww(n,r);if(n.length===0)return 1;t=n[0]}else t=n;return vw(t.mode,t.getLength(),r)};ui.getEncodedBits=function(n){if(!_d.isValid(n)||n<7)throw new Error("Invalid QR Code version");let e=n<<12;for(;Vs.getBCHDigit(e)-qf>=0;)e^=$f<<Vs.getBCHDigit(e)-qf;return n<<12|e}});var Zf=be(Xf=>{"use strict";var bd=Ln(),Qf=1335,xw=21522,Yf=bd.getBCHDigit(Qf);Xf.getEncodedBits=function(n,e){let t=n.bit<<3|e,r=t<<10;for(;bd.getBCHDigit(r)-Yf>=0;)r^=Qf<<bd.getBCHDigit(r)-Yf;return(t<<10|r)^xw}});var eg=be((RA,Jf)=>{"use strict";var Cw=zn();function mr(i){this.mode=Cw.NUMERIC,this.data=i.toString()}mr.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)};mr.prototype.getLength=function(){return this.data.length};mr.prototype.getBitsLength=function(){return mr.getBitsLength(this.data.length)};mr.prototype.write=function(n){let e,t,r;for(e=0;e+3<=this.data.length;e+=3)t=this.data.substr(e,3),r=parseInt(t,10),n.put(r,10);let o=this.data.length-e;o>0&&(t=this.data.substr(e),r=parseInt(t,10),n.put(r,o*3+1))};Jf.exports=mr});var ng=be((DA,tg)=>{"use strict";var Sw=zn(),vd=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ur(i){this.mode=Sw.ALPHANUMERIC,this.data=i}ur.getBitsLength=function(n){return 11*Math.floor(n/2)+6*(n%2)};ur.prototype.getLength=function(){return this.data.length};ur.prototype.getBitsLength=function(){return ur.getBitsLength(this.data.length)};ur.prototype.write=function(n){let e;for(e=0;e+2<=this.data.length;e+=2){let t=vd.indexOf(this.data[e])*45;t+=vd.indexOf(this.data[e+1]),n.put(t,11)}this.data.length%2&&n.put(vd.indexOf(this.data[e]),6)};tg.exports=ur});var rg=be((AA,ig)=>{"use strict";var kw=zn();function hr(i){this.mode=kw.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}hr.getBitsLength=function(n){return n*8};hr.prototype.getLength=function(){return this.data.length};hr.prototype.getBitsLength=function(){return hr.getBitsLength(this.data.length)};hr.prototype.write=function(i){for(let n=0,e=this.data.length;n<e;n++)i.put(this.data[n],8)};ig.exports=hr});var ag=be((OA,og)=>{"use strict";var Ew=zn(),Mw=Ln();function pr(i){this.mode=Ew.KANJI,this.data=i}pr.getBitsLength=function(n){return n*13};pr.prototype.getLength=function(){return this.data.length};pr.prototype.getBitsLength=function(){return pr.getBitsLength(this.data.length)};pr.prototype.write=function(i){let n;for(n=0;n<this.data.length;n++){let e=Mw.toSJIS(this.data[n]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),i.put(e,13)}};og.exports=pr});var sg=be((IA,yd)=>{"use strict";var Oo={single_source_shortest_paths:function(i,n,e){var t={},r={};r[n]=0;var o=Oo.PriorityQueue.make();o.push(n,0);for(var a,s,l,c,m,p,g,b,_;!o.empty();){a=o.pop(),s=a.value,c=a.cost,m=i[s]||{};for(l in m)m.hasOwnProperty(l)&&(p=m[l],g=c+p,b=r[l],_=typeof r[l]>"u",(_||b>g)&&(r[l]=g,o.push(l,g),t[l]=s))}if(typeof e<"u"&&typeof r[e]>"u"){var y=["Could not find a path from ",n," to ",e,"."].join("");throw new Error(y)}return t},extract_shortest_path_from_predecessor_list:function(i,n){for(var e=[],t=n,r;t;)e.push(t),r=i[t],t=i[t];return e.reverse(),e},find_path:function(i,n,e){var t=Oo.single_source_shortest_paths(i,n,e);return Oo.extract_shortest_path_from_predecessor_list(t,e)},PriorityQueue:{make:function(i){var n=Oo.PriorityQueue,e={},t;i=i||{};for(t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e.queue=[],e.sorter=i.sorter||n.default_sorter,e},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var e={value:i,cost:n};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof yd<"u"&&(yd.exports=Oo)});var fg=be(fr=>{"use strict";var _e=zn(),dg=eg(),mg=ng(),ug=rg(),hg=ag(),Io=fd(),Hs=Ln(),Tw=sg();function lg(i){return unescape(encodeURIComponent(i)).length}function Po(i,n,e){let t=[],r;for(;(r=i.exec(e))!==null;)t.push({data:r[0],index:r.index,mode:n,length:r[0].length});return t}function pg(i){let n=Po(Io.NUMERIC,_e.NUMERIC,i),e=Po(Io.ALPHANUMERIC,_e.ALPHANUMERIC,i),t,r;return Hs.isKanjiModeEnabled()?(t=Po(Io.BYTE,_e.BYTE,i),r=Po(Io.KANJI,_e.KANJI,i)):(t=Po(Io.BYTE_KANJI,_e.BYTE,i),r=[]),n.concat(e,t,r).sort(function(a,s){return a.index-s.index}).map(function(a){return{data:a.data,mode:a.mode,length:a.length}})}function wd(i,n){switch(n){case _e.NUMERIC:return dg.getBitsLength(i);case _e.ALPHANUMERIC:return mg.getBitsLength(i);case _e.KANJI:return hg.getBitsLength(i);case _e.BYTE:return ug.getBitsLength(i)}}function Rw(i){return i.reduce(function(n,e){let t=n.length-1>=0?n[n.length-1]:null;return t&&t.mode===e.mode?(n[n.length-1].data+=e.data,n):(n.push(e),n)},[])}function Dw(i){let n=[];for(let e=0;e<i.length;e++){let t=i[e];switch(t.mode){case _e.NUMERIC:n.push([t,{data:t.data,mode:_e.ALPHANUMERIC,length:t.length},{data:t.data,mode:_e.BYTE,length:t.length}]);break;case _e.ALPHANUMERIC:n.push([t,{data:t.data,mode:_e.BYTE,length:t.length}]);break;case _e.KANJI:n.push([t,{data:t.data,mode:_e.BYTE,length:lg(t.data)}]);break;case _e.BYTE:n.push([{data:t.data,mode:_e.BYTE,length:lg(t.data)}])}}return n}function Aw(i,n){let e={},t={start:{}},r=["start"];for(let o=0;o<i.length;o++){let a=i[o],s=[];for(let l=0;l<a.length;l++){let c=a[l],m=""+o+l;s.push(m),e[m]={node:c,lastCount:0},t[m]={};for(let p=0;p<r.length;p++){let g=r[p];e[g]&&e[g].node.mode===c.mode?(t[g][m]=wd(e[g].lastCount+c.length,c.mode)-wd(e[g].lastCount,c.mode),e[g].lastCount+=c.length):(e[g]&&(e[g].lastCount=c.length),t[g][m]=wd(c.length,c.mode)+4+_e.getCharCountIndicator(c.mode,n))}}r=s}for(let o=0;o<r.length;o++)t[r[o]].end=0;return{map:t,table:e}}function cg(i,n){let e,t=_e.getBestModeForData(i);if(e=_e.from(n,t),e!==_e.BYTE&&e.bit<t.bit)throw new Error('"'+i+'" cannot be encoded with mode '+_e.toString(e)+`.
 Suggested mode is: `+_e.toString(t));switch(e===_e.KANJI&&!Hs.isKanjiModeEnabled()&&(e=_e.BYTE),e){case _e.NUMERIC:return new dg(i);case _e.ALPHANUMERIC:return new mg(i);case _e.KANJI:return new hg(i);case _e.BYTE:return new ug(i)}}fr.fromArray=function(n){return n.reduce(function(e,t){return typeof t=="string"?e.push(cg(t,null)):t.data&&e.push(cg(t.data,t.mode)),e},[])};fr.fromString=function(n,e){let t=pg(n,Hs.isKanjiModeEnabled()),r=Dw(t),o=Aw(r,e),a=Tw.find_path(o.map,"start","end"),s=[];for(let l=1;l<a.length-1;l++)s.push(o.table[a[l]].node);return fr.fromArray(Rw(s))};fr.rawSplit=function(n){return fr.fromArray(pg(n,Hs.isKanjiModeEnabled()))}});var _g=be(gg=>{"use strict";var qs=Ln(),xd=Fs(),Ow=Rf(),Iw=Af(),Pw=Of(),Nw=Nf(),kd=Ff(),Ed=md(),Fw=Uf(),Ws=Kf(),Lw=Zf(),Bw=zn(),Cd=fg();function zw(i,n){let e=i.size,t=Nw.getPositions(n);for(let r=0;r<t.length;r++){let o=t[r][0],a=t[r][1];for(let s=-1;s<=7;s++)if(!(o+s<=-1||e<=o+s))for(let l=-1;l<=7;l++)a+l<=-1||e<=a+l||(s>=0&&s<=6&&(l===0||l===6)||l>=0&&l<=6&&(s===0||s===6)||s>=2&&s<=4&&l>=2&&l<=4?i.set(o+s,a+l,!0,!0):i.set(o+s,a+l,!1,!0))}}function jw(i){let n=i.size;for(let e=8;e<n-8;e++){let t=e%2===0;i.set(e,6,t,!0),i.set(6,e,t,!0)}}function Uw(i,n){let e=Pw.getPositions(n);for(let t=0;t<e.length;t++){let r=e[t][0],o=e[t][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?i.set(r+a,o+s,!0,!0):i.set(r+a,o+s,!1,!0)}}function Vw(i,n){let e=i.size,t=Ws.getEncodedBits(n),r,o,a;for(let s=0;s<18;s++)r=Math.floor(s/3),o=s%3+e-8-3,a=(t>>s&1)===1,i.set(r,o,a,!0),i.set(o,r,a,!0)}function Sd(i,n,e){let t=i.size,r=Lw.getEncodedBits(n,e),o,a;for(o=0;o<15;o++)a=(r>>o&1)===1,o<6?i.set(o,8,a,!0):o<8?i.set(o+1,8,a,!0):i.set(t-15+o,8,a,!0),o<8?i.set(8,t-o-1,a,!0):o<9?i.set(8,15-o-1+1,a,!0):i.set(8,15-o-1,a,!0);i.set(t-8,8,1,!0)}function Hw(i,n){let e=i.size,t=-1,r=e-1,o=7,a=0;for(let s=e-1;s>0;s-=2)for(s===6&&s--;;){for(let l=0;l<2;l++)if(!i.isReserved(r,s-l)){let c=!1;a<n.length&&(c=(n[a]>>>o&1)===1),i.set(r,s-l,c),o--,o===-1&&(a++,o=7)}if(r+=t,r<0||e<=r){r-=t,t=-t;break}}}function Ww(i,n,e){let t=new Ow;e.forEach(function(l){t.put(l.mode.bit,4),t.put(l.getLength(),Bw.getCharCountIndicator(l.mode,i)),l.write(t)});let r=qs.getSymbolTotalCodewords(i),o=Ed.getTotalCodewordsCount(i,n),a=(r-o)*8;for(t.getLengthInBits()+4<=a&&t.put(0,4);t.getLengthInBits()%8!==0;)t.putBit(0);let s=(a-t.getLengthInBits())/8;for(let l=0;l<s;l++)t.put(l%2?17:236,8);return qw(t,i,n)}function qw(i,n,e){let t=qs.getSymbolTotalCodewords(n),r=Ed.getTotalCodewordsCount(n,e),o=t-r,a=Ed.getBlocksCount(n,e),s=t%a,l=a-s,c=Math.floor(t/a),m=Math.floor(o/a),p=m+1,g=c-m,b=new Fw(g),_=0,y=new Array(a),N=new Array(a),J=0,O=new Uint8Array(i.buffer);for(let pe=0;pe<a;pe++){let ve=pe<l?m:p;y[pe]=O.slice(_,_+ve),N[pe]=b.encode(y[pe]),_+=ve,J=Math.max(J,ve)}let D=new Uint8Array(t),ae=0,Ce,X;for(Ce=0;Ce<J;Ce++)for(X=0;X<a;X++)Ce<y[X].length&&(D[ae++]=y[X][Ce]);for(Ce=0;Ce<g;Ce++)for(X=0;X<a;X++)D[ae++]=N[X][Ce];return D}function $w(i,n,e,t){let r;if(Array.isArray(i))r=Cd.fromArray(i);else if(typeof i=="string"){let c=n;if(!c){let m=Cd.rawSplit(i);c=Ws.getBestVersionForData(m,e)}r=Cd.fromString(i,c||40)}else throw new Error("Invalid data");let o=Ws.getBestVersionForData(r,e);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!n)n=o;else if(n<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);let a=Ww(n,e,r),s=qs.getSymbolSize(n),l=new Iw(s);return zw(l,n),jw(l),Uw(l,n),Sd(l,e,0),n>=7&&Vw(l,n),Hw(l,a),isNaN(t)&&(t=kd.getBestMask(l,Sd.bind(null,l,e))),kd.applyMask(t,l),Sd(l,e,t),{modules:l,version:n,errorCorrectionLevel:e,maskPattern:t,segments:r}}gg.create=function(n,e){if(typeof n>"u"||n==="")throw new Error("No input text");let t=xd.M,r,o;return typeof e<"u"&&(t=xd.from(e.errorCorrectionLevel,xd.M),r=Ws.from(e.version),o=kd.from(e.maskPattern),e.toSJISFunc&&qs.setToSJISFunction(e.toSJISFunc)),$w(n,r,t,o)}});var Md=be(hi=>{"use strict";function bg(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(t){return[t,t]}))),n.length===6&&n.push("F","F");let e=parseInt(n.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+n.slice(0,6).join("")}}hi.getOptions=function(n){n||(n={}),n.color||(n.color={});let e=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,t=n.width&&n.width>=21?n.width:void 0,r=n.scale||4;return{width:t,scale:t?4:r,margin:e,color:{dark:bg(n.color.dark||"#000000ff"),light:bg(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}};hi.getScale=function(n,e){return e.width&&e.width>=n+e.margin*2?e.width/(n+e.margin*2):e.scale};hi.getImageWidth=function(n,e){let t=hi.getScale(n,e);return Math.floor((n+e.margin*2)*t)};hi.qrToImageData=function(n,e,t){let r=e.modules.size,o=e.modules.data,a=hi.getScale(r,t),s=Math.floor((r+t.margin*2)*a),l=t.margin*a,c=[t.color.light,t.color.dark];for(let m=0;m<s;m++)for(let p=0;p<s;p++){let g=(m*s+p)*4,b=t.color.light;if(m>=l&&p>=l&&m<s-l&&p<s-l){let _=Math.floor((m-l)/a),y=Math.floor((p-l)/a);b=c[o[_*r+y]?1:0]}n[g++]=b.r,n[g++]=b.g,n[g++]=b.b,n[g]=b.a}}});var vg=be($s=>{"use strict";var Td=Md();function Gw(i,n,e){i.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=e,n.width=e,n.style.height=e+"px",n.style.width=e+"px"}function Kw(){try{return document.createElement("canvas")}catch(i){throw new Error("You need to specify a canvas element")}}$s.render=function(n,e,t){let r=t,o=e;typeof r>"u"&&(!e||!e.getContext)&&(r=e,e=void 0),e||(o=Kw()),r=Td.getOptions(r);let a=Td.getImageWidth(n.modules.size,r),s=o.getContext("2d"),l=s.createImageData(a,a);return Td.qrToImageData(l.data,n,r),Gw(s,o,a),s.putImageData(l,0,0),o};$s.renderToDataURL=function(n,e,t){let r=t;typeof r>"u"&&(!e||!e.getContext)&&(r=e,e=void 0),r||(r={});let o=$s.render(n,e,r),a=r.type||"image/png",s=r.rendererOpts||{};return o.toDataURL(a,s.quality)}});var xg=be(wg=>{"use strict";var Yw=Md();function yg(i,n){let e=i.a/255,t=n+'="'+i.hex+'"';return e<1?t+" "+n+'-opacity="'+e.toFixed(2).slice(1)+'"':t}function Rd(i,n,e){let t=i+n;return typeof e<"u"&&(t+=" "+e),t}function Qw(i,n,e){let t="",r=0,o=!1,a=0;for(let s=0;s<i.length;s++){let l=Math.floor(s%n),c=Math.floor(s/n);!l&&!o&&(o=!0),i[s]?(a++,s>0&&l>0&&i[s-1]||(t+=o?Rd("M",l+e,.5+c+e):Rd("m",r,0),r=0,o=!1),l+1<n&&i[s+1]||(t+=Rd("h",a),a=0)):r++}return t}wg.render=function(n,e,t){let r=Yw.getOptions(e),o=n.modules.size,a=n.modules.data,s=o+r.margin*2,l=r.color.light.a?"<path "+yg(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+yg(r.color.dark,"stroke")+' d="'+Qw(a,o,r.margin)+'"/>',m='viewBox="0 0 '+s+" "+s+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+m+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof t=="function"&&t(null,g),g}});var Sg=be(No=>{"use strict";var Xw=Ef(),Dd=_g(),Cg=vg(),Zw=xg();function Ad(i,n,e,t,r){let o=[].slice.call(arguments,1),a=o.length,s=typeof o[a-1]=="function";if(!s&&!Xw())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(r=e,e=n,n=t=void 0):a===3&&(n.getContext&&typeof r>"u"?(r=t,t=void 0):(r=t,t=e,e=n,n=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(e=n,n=t=void 0):a===2&&!n.getContext&&(t=e,e=n,n=void 0),new Promise(function(l,c){try{let m=Dd.create(e,t);l(i(m,n,t))}catch(m){c(m)}})}try{let l=Dd.create(e,t);r(null,i(l,n,t))}catch(l){r(l)}}No.create=Dd.create;No.toCanvas=Ad.bind(null,Cg.render);No.toDataURL=Ad.bind(null,Cg.renderToDataURL);No.toString=Ad.bind(null,function(i,n,e){return Zw.render(i,e)})});var zr=class{_doc;constructor(n){this._doc=n}manager},fa=(()=>{class i extends zr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(q($))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),ba=new w(""),ql=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof fa));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof fa);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new C(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(q(ba),q(R))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),Vl="ng-app-id";function Iu(i){for(let n of i)n.remove()}function Pu(i,n){let e=n.createElement("style");return e.textContent=i,e}function bb(i,n,e,t){let r=i.head?.querySelectorAll(`style[${Vl}="${n}"],link[${Vl}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Vl),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Wl(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var $l=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,bb(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Pu);t?.forEach(r=>this.addUsage(r,this.external,Wl))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Iu(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Iu(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Pu(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Wl(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(q($),q(Dr),q(ki,8),q(Si))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),Hl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Gl=/%COMP%/g;var Fu="%COMP%",vb=`_nghost-${Fu}`,yb=`_ngcontent-${Fu}`,wb=!0,xb=new w("",{factory:()=>wb});function Cb(i){return yb.replace(Gl,i)}function Sb(i){return vb.replace(Gl,i)}function Lu(i,n){return n.map(e=>e.replace(Gl,i))}var Vr=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new jr(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof _a?r.applyToHost(e):r instanceof Ur&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,p=this.tracingService;switch(t.encapsulation){case na.Emulated:o=new _a(l,c,t,this.appId,m,a,s,p);break;case na.ShadowDom:return new ga(l,e,t,a,s,this.nonce,p,c);case na.ExperimentalIsolatedShadowDom:return new ga(l,e,t,a,s,this.nonce,p);default:o=new Ur(l,c,t,m,a,s,p);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(q(ql),q(Ir),q(Dr),q(xb),q($),q(R),q(ki),q(ia,8))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),jr=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Hl[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Nu(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Nu(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new C(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=Hl[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=Hl[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(Or.DashCase|Or.Important)?n.style.setProperty(e,t,r&Or.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&Or.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=Ri().getGlobalEventTarget(this.doc,n),!n))throw new C(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Nu(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var ga=class extends jr{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=t.styles;c=Lu(t.id,c);for(let p of c){let g=document.createElement("style");a&&g.setAttribute("nonce",a),g.textContent=p,this.shadowRoot.appendChild(g)}let m=t.getExternalStyles?.();if(m)for(let p of m){let g=Wl(p,r);a&&g.setAttribute("nonce",a),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ur=class extends jr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=t.styles;this.styles=l?Lu(l,c):c,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Gm.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},_a=class extends Ur{contentAttr;hostAttr;constructor(n,e,t,r,o,a,s,l){let c=r+"-"+t.id;super(n,e,t,o,a,s,l,c),this.contentAttr=Cb(c),this.hostAttr=Sb(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var va=class i extends fu{supportsDOMEvents=!0;static makeCurrent(){pu(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=kb();return e==null?null:Eb(e)}resetBaseElement(){Hr=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ua(document.cookie,n)}},Hr=null;function kb(){return Hr=Hr||document.head.querySelector("base"),Hr?Hr.getAttribute("href"):null}function Eb(i){return new URL(i,document.baseURI).pathname}var ya=class{addToWindow(n){tn.getAngularTestability=(t,r=!0)=>{let o=n.findTestabilityInTree(t,r);if(o==null)throw new C(5103,!1);return o},tn.getAllAngularTestabilities=()=>n.getAllTestabilities(),tn.getAllAngularRootElements=()=>n.getAllRootElements();let e=t=>{let r=tn.getAllAngularTestabilities(),o=r.length,a=function(){o--,o==0&&t()};r.forEach(s=>{s.whenStable(a)})};tn.frameworkStabilizers||(tn.frameworkStabilizers=[]),tn.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,t){if(e==null)return null;let r=n.getTestability(e);return r??(t?Ri().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},Bu=["alt","control","meta","shift"],Mb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Tb={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},zu=(()=>{class i extends zr{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=i.parseEventName(t),s=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ri().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Bu.forEach(c=>{let m=t.indexOf(c);m>-1&&(t.splice(m,1),a+=c+".")}),a+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,t){let r=Mb[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Bu.forEach(a=>{if(a!==r){let s=Tb[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(q($))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})();function Rb(){va.makeCurrent()}function Db(){return new Cl}function Ab(){return Fm(document),document}var Ob=[{provide:Si,useValue:Cu},{provide:Im,useValue:Rb,multi:!0},{provide:$,useFactory:Ab}],Kl=cu(mu,"browser",Ob);var Ib=[{provide:sa,useClass:ya},{provide:Xm,useClass:la,deps:[R,Nl,sa]},{provide:la,useClass:la,deps:[R,Nl,sa]}],Pb=[{provide:Am,useValue:"root"},{provide:Cl,useFactory:Db},{provide:ba,useClass:fa,multi:!0},{provide:ba,useClass:zu,multi:!0},Vr,{provide:Ir,useClass:$l},{provide:$l,useExisting:Ir},ql,{provide:Ke,useExisting:Vr},[]],Wr=(()=>{class i{constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:[...Pb,...Ib],imports:[wu,su]})}return i})();var Yt=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var xa=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ca=class{encodeKey(n){return ju(n)}encodeValue(n){return ju(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Nb(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Fb=/%(\d[a-f0-9])/gi,Lb={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ju(i){return encodeURIComponent(i).replace(Fb,(n,e)=>Lb[e]??n)}function wa(i){return`${i}`}var an=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ca,n.fromString){if(n.fromObject)throw new C(2805,!1);this.map=Nb(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(wa):[wa(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(wa(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(wa(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function Bb(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Uu(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Vu(i){return typeof Blob<"u"&&i instanceof Blob}function Hu(i){return typeof FormData<"u"&&i instanceof FormData}function zb(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var qr="Content-Type",Sa="Accept",$u="text/plain",Gu="application/json",Ku=`${Gu}, ${$u}, */*`,Ai=class i{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(Bb(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Yt,this.context??=new xa,!this.params)this.params=new an,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Uu(this.body)||Vu(this.body)||Hu(this.body)||zb(this.body)?this.body:this.body instanceof an?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Hu(this.body)?null:Vu(this.body)?this.body.type||null:Uu(this.body)?null:typeof this.body=="string"?$u:this.body instanceof an?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Gu:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,m=n.credentials||this.credentials,p=n.referrer||this.referrer,g=n.integrity||this.integrity,b=n.referrerPolicy||this.referrerPolicy,_=n.transferCache??this.transferCache,y=n.timeout??this.timeout,N=n.body!==void 0?n.body:this.body,J=n.withCredentials??this.withCredentials,O=n.reportProgress??this.reportProgress,D=n.reportUploadProgress??this.reportUploadProgress,ae=n.reportDownloadProgress??this.reportDownloadProgress,Ce=n.headers||this.headers,X=n.params||this.params,pe=n.context??this.context;return n.setHeaders!==void 0&&(Ce=Object.keys(n.setHeaders).reduce((ve,We)=>ve.set(We,n.setHeaders[We]),Ce)),n.setParams&&(X=Object.keys(n.setParams).reduce((ve,We)=>ve.set(We,n.setParams[We]),X)),new i(e,t,N,{params:X,headers:Ce,context:pe,reportProgress:O,reportUploadProgress:D,reportDownloadProgress:ae,responseType:r,withCredentials:J,transferCache:_,keepalive:o,cache:s,priority:a,timeout:y,mode:l,redirect:c,credentials:m,referrer:p,integrity:g,referrerPolicy:b})}},sn=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(sn||{}),Oi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new Yt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},$r=class i extends Oi{constructor(n={}){super(n)}type=sn.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ii=class i extends Oi{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=sn.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Kt=class extends Oi{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Yu=200,jb=204;var Ub=/^\)\]\}',?\n/,Ek=1024*1024,Qu=new w("",{factory:()=>null}),ka=(()=>{class i{fetchImpl=d(Ql,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=d(R);destroyRef=d(Ci);maxResponseSize=d(Qu);handle(e){return new qe(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(Xl,a=>t.error(new Kt({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,t,r){return ye(this,null,function*(){let o=this.createRequestInit(e),a;try{let N=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,v({signal:t},o)));Vb(N),r.next({type:sn.Sent}),a=yield N}catch(N){r.error(new Kt({error:N,status:N.status??0,statusText:N.statusText,url:e.urlWithParams,headers:N.headers}));return}let s=new Yt(a.headers),l=a.statusText,c=a.url||e.urlWithParams,m=a.status,p=null,g=e.reportProgress||e.reportDownloadProgress;if(g&&r.next(new $r({headers:s,status:m,statusText:l,url:c})),a.body){let N=a.headers.get("content-length"),J=N!==null?Number(N):NaN;this.maxResponseSize!==null&&Number.isFinite(J)&&J>this.maxResponseSize&&Wu(this.maxResponseSize);let O=[],D=a.body.getReader(),ae=0,Ce,X,pe=typeof Zone<"u"&&Zone.current,ve=!1;if(yield this.ngZone.runOutsideAngular(()=>ye(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield D.cancel(),ve=!0;break}let{done:wt,value:vi}=yield D.read();if(wt)break;if(O.push(vi),ae+=vi.length,this.maxResponseSize!==null&&ae>this.maxResponseSize&&(yield D.cancel(),Wu(this.maxResponseSize)),g){X=e.responseType==="text"?(X??"")+(Ce??=new TextDecoder).decode(vi,{stream:!0}):void 0;let Vt=()=>r.next({type:sn.DownloadProgress,total:Number.isFinite(J)?J:void 0,loaded:ae,partialText:X});pe?pe.run(Vt):Vt()}}})),ve){r.complete();return}let We=this.concatChunks(O,ae);try{let wt=a.headers.get(qr)??"";p=this.parseBody(e,We,wt,m)}catch(wt){r.error(new Kt({error:wt,headers:new Yt(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}m===0&&(m=p?Yu:0);let b=m>=200&&m<300,_=a.redirected,y=a.type;b?(r.next(new Ii({body:p,headers:s,status:m,statusText:l,url:c,redirected:_,responseType:y})),r.complete()):r.error(new Kt({error:p,headers:s,status:m,statusText:l,url:c,redirected:_,responseType:y}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(Ub,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new C(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Sa)||(t[Sa]=Ku),!e.headers.has(qr)){let o=e.detectContentTypeHeader();o!==null&&(t[qr]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})(),Ql=class{};function Xl(){}function Vb(i){i.then(Xl,Xl)}function Wu(i){throw new C(2825,!1)}function Xu(i,n){return n(i)}function Hb(i,n){return(e,t)=>n.intercept(e,{handle:r=>i(r,t)})}function Wb(i,n,e){return(t,r)=>Je(e,()=>n(t,o=>i(o,r)))}var Zu=new w(""),Jl=new w("",{factory:()=>[]}),Ju=new w(""),ec=new w("",{factory:()=>!0});function qb(){let i=null;return(n,e)=>{i===null&&(i=(d(Zu,{optional:!0})??[]).reduceRight(Hb,Xu));let t=d(Sl);if(d(ec)){let o=t.add();return i(n,e).pipe(Ar(o))}else return i(n,e)}}var Ma=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=q(ka),r},providedIn:"root"})}return i})();var Ea=(()=>{class i{backend;injector;chain=null;pendingTasks=d(Sl);contributeToStability=d(ec);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Jl),...this.injector.get(Ju,[])]));this.chain=t.reduceRight((r,o)=>Wb(r,o,this.injector),Xu)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ar(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(q(Ma),q(Ue))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),tc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=q(Ea),r},providedIn:"root"})}return i})();function Yl(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Pi=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Ai)o=e;else{let l;r.headers instanceof Yt?l=r.headers:l=new Yt(r.headers);let c;r.params&&(r.params instanceof an?c=r.params:c=new an({fromObject:r.params})),o=new Ai(e,t,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=B(o).pipe($n(l=>this.handler.handle(l)));if(e instanceof Ai||r.observe==="events")return a;let s=a.pipe(le(l=>l instanceof Ii));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(Z(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new C(2806,!1);return l.body}));case"blob":return s.pipe(Z(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new C(2807,!1);return l.body}));case"text":return s.pipe(Z(l=>{if(l.body!==null&&typeof l.body!="string")throw new C(2808,!1);return l.body}));default:return s.pipe(Z(l=>l.body))}case"response":return s;default:throw new C(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new an().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Yl(r,t))}post(e,t,r={}){return this.request("POST",e,Yl(r,t))}put(e,t,r={}){return this.request("PUT",e,Yl(r,t))}static \u0275fac=function(t){return new(t||i)(q(tc))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $b=/^\)\]\}',?\n/;var Zl=(()=>{class i{xhrFactory;tracingService=d(ia,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let t=this.xhrFactory;return B(null).pipe(we(()=>new qe(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((O,D)=>a.setRequestHeader(O,D.join(","))),e.headers.has(Sa)||a.setRequestHeader(Sa,Ku),!e.headers.has(qr)){let O=e.detectContentTypeHeader();O!==null&&a.setRequestHeader(qr,O)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();a.responseType=O!=="json"?O:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let O=a.statusText||"OK",D=new Yt(a.getAllResponseHeaders()),ae=a.responseURL||e.url;return l=new $r({headers:D,status:a.status,statusText:O,url:ae}),l},m=this.maybePropagateTrace(()=>{let{headers:O,status:D,statusText:ae,url:Ce}=c(),X=null;D!==jb&&(X=typeof a.response>"u"?a.responseText:a.response),D===0&&(D=X?Yu:0);let pe=D>=200&&D<300;if(e.responseType==="json"&&typeof X=="string"){let ve=X;X=X.replace($b,"");try{X=X!==""?JSON.parse(X):null}catch(We){X=ve,pe&&(pe=!1,X={error:We,text:X})}}pe?(o.next(new Ii({body:X,headers:O,status:D,statusText:ae,url:Ce||void 0})),o.complete()):o.error(new Kt({error:X,headers:O,status:D,statusText:ae,url:Ce||void 0}))}),p=this.maybePropagateTrace(O=>{let{url:D}=c(),ae=new Kt({error:O,status:a.status||0,statusText:a.statusText||"Unknown Error",url:D||void 0});o.error(ae)}),g=p;e.timeout&&(g=this.maybePropagateTrace(O=>{let{url:D}=c(),ae=new Kt({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:D||void 0});o.error(ae)}));let b=!1,_=this.maybePropagateTrace(O=>{b||(o.next(c()),b=!0);let D={type:sn.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(D.total=O.total),e.responseType==="text"&&a.responseText&&(D.partialText=a.responseText),o.next(D)}),y=this.maybePropagateTrace(O=>{let D={type:sn.UploadProgress,loaded:O.loaded};O.lengthComputable&&(D.total=O.total),o.next(D)});a.addEventListener("load",m),a.addEventListener("error",p),a.addEventListener("timeout",g),a.addEventListener("abort",p);let N=e.reportProgress||e.reportUploadProgress,J=e.reportProgress||e.reportDownloadProgress;return J&&a.addEventListener("progress",_),N&&s!==null&&a.upload&&a.upload.addEventListener("progress",y),a.send(s),o.next({type:sn.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",m),a.removeEventListener("timeout",g),J&&a.removeEventListener("progress",_),N&&s!==null&&a.upload&&a.upload.removeEventListener("progress",y),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(q(xu))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Gb=new w("",{factory:()=>!0}),Kb="XSRF-TOKEN",Yb=new w("",{factory:()=>Kb}),Qb="X-XSRF-TOKEN",Xb=new w("",{factory:()=>Qb}),Zb=(()=>{class i{cookieName=d(Yb);doc=d($);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ua(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})(),eh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=q(Zb),r},providedIn:"root"})}return i})();function Jb(i,n){if(!d(Gb)||i.method==="GET"||i.method==="HEAD")return n(i);try{let r=d(jl).href,{origin:o}=new URL(r),{origin:a}=new URL(i.url,o);if(o!==a)return n(i)}catch(r){return n(i)}let e=d(eh).getToken(),t=d(Xb);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}var Ta=(function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i[i.Xhr=7]="Xhr",i})(Ta||{});function th(i,n){return{\u0275kind:i,\u0275providers:n}}function nc(...i){let n=[Pi,ka,Ea,{provide:tc,useExisting:Ea},{provide:Ma,useFactory:()=>d(ka)},{provide:Jl,useValue:Jb,multi:!0}];for(let e of i)n.push(...e.\u0275providers);return xi(n)}var qu=new w("");function ic(){return th(Ta.LegacyInterceptors,[{provide:qu,useFactory:qb},{provide:Jl,useExisting:qu,multi:!0}])}function rc(){return th(Ta.Xhr,[Zl,{provide:Ma,useExisting:Zl}])}var ih=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(q($))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var oc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=q(ev),r},providedIn:"root"})}return i})(),ev=(()=>{class i extends oc{_doc=d($);sanitize(e,t){if(t==null)return null;switch(e){case nn.NONE:return t;case nn.HTML:return Mi(t,"HTML")?Ei(t):Wm(this._doc,String(t)).toString();case nn.STYLE:return Mi(t,"Style")?Ei(t):t;case nn.SCRIPT:if(Mi(t,"Script"))return Ei(t);throw new C(5200,!1);case nn.URL:return Mi(t,"URL")?Ei(t):Hm(String(t));case nn.RESOURCE_URL:if(Mi(t,"ResourceURL"))return Ei(t);throw new C(5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(e){return Bm(e)}bypassSecurityTrustStyle(e){return zm(e)}bypassSecurityTrustScript(e){return jm(e)}bypassSecurityTrustUrl(e){return Um(e)}bypassSecurityTrustResourceUrl(e){return Vm(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})();function Qn(i){return i.buttons===0||i.detail===0}function Xn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ac;function oh(){if(ac==null){let i=typeof document<"u"?document.head:null;ac=!!(i&&(i.createShadowRoot||i.attachShadow))}return ac}function sc(i){if(oh()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Ye(i){return i.composedPath?i.composedPath()[0]:i.target}var lc;try{lc=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){lc=!1}var se=(()=>{class i{_platformId=d(Si);isBrowser=this._platformId?Su(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||lc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gr;function ah(){if(Gr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Gr=!0}))}finally{Gr=Gr||!1}return Gr}function Ni(i){return ah()?i:!!i.capture}function Qt(i,n=0){return sh(i)?Number(i):arguments.length===2?n:0}function sh(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function tt(i){return i instanceof H?i.nativeElement:i}var lh=new w("cdk-input-modality-detector-options"),ch={ignoreKeys:[18,17,224,91,16]},dh=650,cc={passive:!0,capture:!0},mh=(()=>{class i{_platform=d(se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new it(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<dh||(this._modality.next(Qn(e)?"keyboard":"mouse"),this._mostRecentTarget=Ye(e))};_onTouchstart=e=>{if(Xn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ye(e)};constructor(){let e=d(R),t=d($),r=d(lh,{optional:!0});if(this._options=v(v({},ch),r),this.modalityDetected=this._modality.pipe(ta(1)),this.modalityChanged=this.modalityDetected.pipe(El()),this._platform.isBrowser){let o=d(Ke).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,cc),o.listen(t,"mousedown",this._onMousedown,cc),o.listen(t,"touchstart",this._onTouchstart,cc)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Kr=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Kr||{}),uh=new w("cdk-focus-monitor-default-options"),Ra=Ni({passive:!0,capture:!0}),En=(()=>{class i{_ngZone=d(R);_platform=d(se);_inputModalityDetector=d(mh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d($);_stopInputModalityDetector=new E;constructor(){let e=d(uh,{optional:!0});this._detectionMode=e?.detectionMode||Kr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ye(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=tt(e);if(!this._platform.isBrowser||r.nodeType!==1)return B();let o=sc(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new E,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=tt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=tt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Kr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Kr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?dh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ye(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ra),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ra)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ra),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ra),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Da=new WeakMap,Ve=(()=>{class i{_appRef;_injector=d(ie);_environmentInjector=d(Ue);load(e){let t=this._appRef=this._appRef||this._injector.get(gt),r=Da.get(t);r||(r={loaders:new Set,refs:[]},Da.set(t,r),t.onDestroy(()=>{Da.get(t)?.refs.forEach(o=>o.destroy()),Da.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ma(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Oa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),Aa;function tv(){if(Aa===void 0&&(Aa=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Aa=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Aa}function nv(i){return tv()?.createHTML(i)||i}function hh(i,n,e){let t=e.sanitize(nn.HTML,n);i.innerHTML=nv(t||"")}function Fi(i){return Array.isArray(i)?i:[i]}var ph=new Set,Zn,Ia=(()=>{class i{_platform=d(se);_nonce=d(ki,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rv}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&iv(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function iv(i,n){if(!ph.has(i))try{Zn||(Zn=document.createElement("style"),n&&Zn.setAttribute("nonce",n),Zn.setAttribute("type","text/css"),document.head.appendChild(Zn)),Zn.sheet&&(Zn.sheet.insertRule(`@media ${i} {body{ }}`,0),ph.add(i))}catch(e){console.error(e)}}function rv(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Yr=(()=>{class i{_mediaMatcher=d(Ia);_zone=d(R);_queries=new Map;_destroySubject=new E;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return fh(Fi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=fh(Fi(e)).map(a=>this._registerQuery(a).observable),o=Tr(r);return o=Zo(o.pipe(Ae(1)),o.pipe(ta(1),yn(0))),o.pipe(Z(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new qe(a=>{let s=l=>this._zone.run(()=>a.next(l));return t.addListener(s),()=>{t.removeListener(s)}}).pipe($e(t),Z(({matches:a})=>({query:e,matches:a})),ue(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function fh(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function ov(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var gh=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_h=(()=>{class i{_mutationObserverFactory=d(gh);_observedElements=new Map;_ngZone=d(R);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=tt(e);return new qe(r=>{let a=this._observeElement(t).pipe(Z(s=>s.filter(l=>!ov(l))),le(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new E,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bh=(()=>{class i{_contentObserver=d(_h);_elementRef=d(H);event=new re;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Qt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(yn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ee],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),Li=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:[gh]})}return i})();var Na=(()=>{class i{_platform=d(se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return sv(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=av(fv(e));if(t&&(vh(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=vh(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!hv(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return pv(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function av(i){try{return i.frameElement}catch(n){return null}}function sv(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function lv(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function cv(i){return mv(i)&&i.type=="hidden"}function dv(i){return uv(i)&&i.hasAttribute("href")}function mv(i){return i.nodeName.toLowerCase()=="input"}function uv(i){return i.nodeName.toLowerCase()=="a"}function xh(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function vh(i){if(!xh(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function hv(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function pv(i){return cv(i)?!1:lv(i)||dv(i)||i.hasAttribute("contenteditable")||xh(i)}function fv(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Pa=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ge(n,{injector:this._injector}):setTimeout(n)}},mc=(()=>{class i{_checker=d(Na);_ngZone=d(R);_document=d($);_injector=d(ie);constructor(){d(Ve).load(Oa)}create(e,t=!1){return new Pa(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ch=new w("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Sh=new w("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),gv=0,Qr=(()=>{class i{_ngZone=d(R);_defaultOptions=d(Sh,{optional:!0});_liveElement;_document=d($);_sanitizer=d(oc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(Ch,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:hh(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${gv++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Mn=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Mn||{}),yh="cdk-high-contrast-black-on-white",wh="cdk-high-contrast-white-on-black",dc="cdk-high-contrast-active",kh=(()=>{class i{_platform=d(se);_hasCheckedHighContrastMode=!1;_document=d($);_breakpointSubscription;constructor(){this._breakpointSubscription=d(Yr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Mn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Mn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Mn.BLACK_ON_WHITE}return Mn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(dc,yh,wh),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Mn.BLACK_ON_WHITE?e.add(dc,yh):t===Mn.WHITE_ON_BLACK&&e.add(dc,wh)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),uc=(()=>{class i{constructor(){d(kh)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Li]})}return i})();var _v=200,Fa=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:_v;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(pt(e=>this._pressedLetters.push(e)),yn(n),le(()=>this._pressedLetters.length>0),Z(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function dt(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Bi=class{_items;_activeItemIndex=te(-1);_activeItem=te(null);_wrap=!1;_typeaheadSubscription=De.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Gn?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):qn(n)&&(this._effectRef=Wn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new E;change=new E;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Fa(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||dt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return qn(this._items)?this._items():this._items instanceof Gn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var to=class extends Bi{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var no=class extends Bi{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var hc={},He=class i{_appId=d(Dr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),hc.hasOwnProperty(n)||(hc[n]=0),`${n}${e?i._infix+"-":""}${hc[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})};var Mh=" ";function Th(i,n,e){let t=Rh(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Mh)))}function pc(i,n,e){let t=Rh(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(Mh)):i.removeAttribute(n)}function Rh(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Ft=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Ft||{}),La,Jn;function Ba(){if(Jn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Jn=!1,Jn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Jn=!0;else{let i=Element.prototype.scrollTo;i?Jn=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Jn=!1}}return Jn}function zi(){if(typeof document!="object"||!document)return Ft.NORMAL;if(La==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),La=Ft.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,La=i.scrollLeft===0?Ft.NEGATED:Ft.INVERTED),i.remove()}return La}function fc(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ji,Dh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function gc(){if(ji)return ji;if(typeof document!="object"||!document)return ji=new Set(Dh),ji;let i=document.createElement("input");return ji=new Set(Dh.filter(n=>(i.setAttribute("type",n),i.type===n))),ji}var Ah={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var vv=new w("MATERIAL_ANIMATIONS"),Oh=null;function yv(){return d(vv,{optional:!0})?.animationsDisabled||d(Hn,{optional:!0})==="NoopAnimations"?"di-disabled":(Oh??=d(Ia).matchMedia("(prefers-reduced-motion)").matches,Oh?"reduced-motion":"enabled")}function ke(){return yv()!=="enabled"}function Re(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Le(i){return i!=null&&`${i}`!="false"}var kt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(kt||{}),_c=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=kt.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ih=Ni({passive:!0,capture:!0}),bc=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ih)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ih)))}_delegateEventHandler=n=>{let e=Ye(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},io={enterDuration:225,exitDuration:150},wv=800,Ph=Ni({passive:!0,capture:!0}),Nh=["mousedown","touchstart"],Fh=["mouseup","mouseleave","touchend","touchcancel"],xv=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),ei=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new bc;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=tt(t)),o&&o.get(Ve).load(xv)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},io),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Cv(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-a}px`,m.style.top=`${l-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(m);let p=window.getComputedStyle(m),g=p.transitionProperty,b=p.transitionDuration,_=g==="none"||b==="0s"||b==="0s, 0s"||r.width===0&&r.height===0,y=new _c(this,m,t,_);m.style.transform="scale3d(1, 1, 1)",y.state=kt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=y);let N=null;return!_&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let J=()=>{N&&(N.fallbackTimer=null),clearTimeout(D),this._finishRippleTransition(y)},O=()=>this._destroyRipple(y),D=setTimeout(O,c+100);m.addEventListener("transitionend",J),m.addEventListener("transitioncancel",O),N={onTransitionEnd:J,onTransitionCancel:O,fallbackTimer:D}}),this._activeRipples.set(y,N),(_||!c)&&this._finishRippleTransition(y),y}fadeOutRipple(n){if(n.state===kt.FADING_OUT||n.state===kt.HIDDEN)return;let e=n.element,t=v(v({},io),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=kt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=tt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Nh.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fh.forEach(e=>{this._triggerElement.addEventListener(e,this,Ph)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===kt.FADING_IN?this._startFadeOutTransition(n):n.state===kt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=kt.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=kt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Qn(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+wv;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Xn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===kt.VISIBLE||n.config.terminateOnPointerUp&&n.state===kt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Nh.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Fh.forEach(e=>n.removeEventListener(e,this,Ph)),this._pointerUpEventsRegistered=!1))}};function Cv(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var ro=new w("mat-ripple-global-options"),za=(()=>{class i{_elementRef=d(H);_animationsDisabled=ke();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(R),t=d(se),r=d(ro,{optional:!0}),o=d(ie);this._globalOptions=r||{},this._rippleRenderer=new ei(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&G("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Sv={capture:!0},kv=["focus","mousedown","mouseenter","touchstart"],vc="mat-ripple-loader-uninitialized",yc="mat-ripple-loader-class-name",Lh="mat-ripple-loader-centered",ja="mat-ripple-loader-disabled",Bh=(()=>{class i{_document=d($);_animationsDisabled=ke();_globalRippleOptions=d(ro,{optional:!0});_platform=d(se);_ngZone=d(R);_injector=d(ie);_eventCleanups;_hosts=new Map;constructor(){let e=d(Ke).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>kv.map(t=>e.listen(this._document,t,this._onInteraction,Sv)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(vc,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(yc))&&e.setAttribute(yc,t.className||""),t.centered&&e.setAttribute(Lh,""),t.disabled&&e.setAttribute(ja,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(ja,""):e.removeAttribute(ja)}_onInteraction=e=>{let t=Ye(e);if(t instanceof HTMLElement){let r=t.closest(`[${vc}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(yc)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??io.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??io.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ja),rippleConfig:{centered:e.hasAttribute(Lh),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ei(s,this._ngZone,t,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(vc)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return i})();var Ev=["*"],Mv=new w("MAT_BUTTON_CONFIG");function zh(i){return i==null?void 0:Lr(i)}var wc=(()=>{class i{_elementRef=d(H);_ngZone=d(R);_animationsDisabled=ke();_config=d(Mv,{optional:!0});_focusMonitor=d(En);_cleanupClick;_renderer=d(Oe);_rippleLoader=d(Bh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Ve).load(Tn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(he("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),St(r.color?"mat-"+r.color:""),G("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],tabIndex:[2,"tabIndex","tabIndex",zh],_tabindex:[2,"tabindex","_tabindex",zh]}})}return i})(),xc=(()=>{class i extends wc{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ee],ngContentSelectors:Ev,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ge(),$t(0,"span",0),L(1),$t(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var Tv=new w("cdk-dir-doc",{providedIn:"root",factory:()=>d($)}),Rv=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Cc(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Rv.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var nt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=te("ltr");change=new re;constructor(){let e=d(Tv,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Cc(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jh=(()=>{class i{_isInitialized=!1;_rawDir="";change=new re;get dir(){return this.valueSignal()}set dir(e){let t=this.valueSignal();this.valueSignal.set(Cc(e)),this._rawDir=e,t!==this.valueSignal()&&this._isInitialized&&this.change.emit(this.valueSignal())}get value(){return this.dir}valueSignal=te("ltr");ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","dir",""]],hostVars:1,hostBindings:function(t,r){t&2&&he("dir",r._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[Ie([{provide:nt,useExisting:i}])]})}return i})(),de=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({})}return i})();var Rn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de]})}return i})();var Av=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ov=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Uh=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Dn=(()=>{class i extends wc{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Iv(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Uh.get(this._appearance):null,o=Uh.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ee],ngContentSelectors:Ov,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ge(Av),$t(0,"span",0),L(1),Pt(2,"span",1),L(3,1),qt(),L(4,2),$t(5,"span",2)(6,"span",3)),t&2&&G("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();function Iv(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Ua=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Rn,de]})}return i})();var Q="primary",_o=Symbol("RouteTitle"),Tc=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ni(i){return new Tc(i)}function Sc(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Yh(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let l={},c=i.slice(0,t.length);return Sc(t,c,l)?{consumed:c,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Sc(o,i.slice(0,o.length),s)||!Sc(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function Ka(i){return new Promise((n,e)=>{i.pipe(wn()).subscribe({next:t=>n(t),error:t=>e(t)})})}function Pv(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!Xt(i[e],n[e]))return!1;return!0}function Xt(i,n){let e=i?Rc(i):void 0,t=n?Rc(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Qh(i[r],n[r]))return!1;return!0}function Rc(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Qh(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function Nv(i){return i.length>0?i[i.length-1]:null}function ri(i){return Xo(i)?i:Km(i)?Ze(Promise.resolve(i)):B(i)}function Xh(i){return Xo(i)?Ka(i):Promise.resolve(i)}var Fv={exact:ep,subset:tp},Zh={exact:Lv,subset:Bv,ignored:()=>!0},Jh={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Dc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Vh(i,n,e){return Fv[e.paths](i.root,n.root,e.matrixParams)&&Zh[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function Lv(i,n){return Xt(i,n)}function ep(i,n,e){if(!ti(i.segments,n.segments)||!qa(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!ep(i.children[t],n.children[t],e))return!1;return!0}function Bv(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>Qh(i[e],n[e]))}function tp(i,n,e){return np(i,n,n.segments,e)}function np(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!ti(r,e)||n.hasChildren()||!qa(r,e,t))}else if(i.segments.length===e.length){if(!ti(i.segments,e)||!qa(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!tp(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!ti(i.segments,r)||!qa(i.segments,r,t)||!i.children[Q]?!1:np(i.children[Q],n,o,t)}}function qa(i,n,e){return n.every((t,r)=>Zh[e](i[r].parameters,t.parameters))}var vt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new fe([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ni(this.queryParams),this._queryParamMap}toString(){return Uv.serialize(this)}},fe=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $a(this)}},An=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ni(this.parameters),this._parameterMap}toString(){return rp(this)}};function zv(i,n){return ti(i,n)&&i.every((e,t)=>Xt(e.parameters,n[t].parameters))}function ti(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function jv(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===Q&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==Q&&(e=e.concat(n(r,t)))}),e}var Pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:()=>new cn})}return i})(),cn=class{parse(n){let e=new Oc(n);return new vt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${oo(n.root,!0)}`,t=Wv(n.queryParams),r=typeof n.fragment=="string"?`#${Vv(n.fragment)}`:"";return`${e}${t}${r}`}},Uv=new cn;function $a(i){return i.segments.map(n=>rp(n)).join("/")}function oo(i,n){if(!i.hasChildren())return $a(i);if(n){let e=i.children[Q]?oo(i.children[Q],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==Q&&t.push(`${r}:${oo(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=jv(i,(t,r)=>r===Q?[oo(i.children[Q],!1)]:[`${r}:${oo(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[Q]!=null?`${$a(i)}/${e[0]}`:`${$a(i)}/(${e.join("//")})`}}function ip(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ha(i){return ip(i).replace(/%3B/gi,";")}function Vv(i){return encodeURI(i)}function Ac(i){return ip(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ga(i){return decodeURIComponent(i)}function Hh(i){return Ga(i.replace(/\+/g,"%20"))}function rp(i){return`${Ac(i.path)}${Hv(i.parameters)}`}function Hv(i){return Object.entries(i).map(([n,e])=>`;${Ac(n)}=${Ac(e)}`).join("")}function Wv(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Ha(e)}=${Ha(r)}`).join("&"):`${Ha(e)}=${Ha(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var qv=/^[^\/()?;#]+/;function kc(i){let n=i.match(qv);return n?n[0]:""}var $v=/^[^\/()?;=#]+/;function Gv(i){let n=i.match($v);return n?n[0]:""}var Kv=/^[^=?&#]+/;function Yv(i){let n=i.match(Kv);return n?n[0]:""}var Qv=/^[^&#]+/;function Xv(i){let n=i.match(Qv);return n?n[0]:""}var Oc=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new fe([],{}):new fe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[Q]=new fe(e,t)),r}parseSegment(){let n=kc(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(n),new An(Ga(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Gv(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=kc(this.remaining);r&&(t=r,this.capture(t))}n[Ga(e)]=Ga(t)}parseQueryParam(n){let e=Yv(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Xv(this.remaining);a&&(t=a,this.capture(t))}let r=Hh(e),o=Hh(t);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=kc(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new C(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=Q);let s=this.parseChildren(e+1);t[a??Q]=Object.keys(s).length===1&&s[Q]?s[Q]:new fe([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C(4011,!1)}};function op(i){return i.segments.length>0?new fe([],{[Q]:i}):i}function ap(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=ap(r);if(t===Q&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new fe(i.segments,n);return Zv(e)}function Zv(i){if(i.numberOfChildren===1&&i.children[Q]){let n=i.children[Q];return new fe(i.segments.concat(n.segments),n.children)}return i}function On(i){return i instanceof vt}function sp(i,n,e=null,t=null,r=new cn){let o=lp(i);return cp(o,n,e,t,r)}function lp(i){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new fe(o.url,a);return o===i&&(n=s),s}let t=e(i.root),r=op(t);return n??r}function cp(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return Ec(o,o,o,e,t,r);let a=Jv(n);if(a.toRoot())return Ec(o,o,new fe([],{}),e,t,r);let s=ey(a,o,i),l=s.processChildren?so(s.segmentGroup,s.index,a.commands):mp(s.segmentGroup,s.index,a.commands);return Ec(o,s.segmentGroup,l,e,t,r)}function Ya(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function co(i){return typeof i=="object"&&i!=null&&i.outlets}function Wh(i,n,e){i||="\u0275";let t=new vt;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function Ec(i,n,e,t,r,o){let a={};for(let[c,m]of Object.entries(t??{}))a[c]=Array.isArray(m)?m.map(p=>Wh(c,p,o)):Wh(c,m,o);let s;i===n?s=e:s=dp(i,n,e);let l=op(ap(s));return new vt(l,a,r)}function dp(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=dp(o,n,e)}),new fe(i.segments,t)}var Qa=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Ya(t[0]))throw new C(4003,!1);let r=t.find(co);if(r&&r!==Nv(t))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Jv(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Qa(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Qa(e,n,t)}var Vi=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function ey(i,n,e){if(i.isAbsolute)return new Vi(n,!0,0);if(!e)return new Vi(n,!1,NaN);if(e.parent===null)return new Vi(e,!0,0);let t=Ya(i.commands[0])?0:1,r=e.segments.length-1+t;return ty(e,r,i.numberOfDoubleDots)}function ty(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new C(4005,!1);r=t.segments.length}return new Vi(t,!1,r-o)}function ny(i){return co(i[0])?i[0].outlets:{[Q]:i}}function mp(i,n,e){if(i??=new fe([],{}),i.segments.length===0&&i.hasChildren())return so(i,n,e);let t=iy(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new fe(i.segments.slice(0,t.pathIndex),{});return o.children[Q]=new fe(i.segments.slice(t.pathIndex),i.children),so(o,0,r)}else return t.match&&r.length===0?new fe(i.segments,{}):t.match&&!i.hasChildren()?Ic(i,n,e):t.match?so(i,0,r):Ic(i,n,e)}function so(i,n,e){if(e.length===0)return new fe(i.segments,{});{let t=ny(e),r={};if(Object.keys(t).some(o=>o!==Q)&&i.children[Q]&&i.numberOfChildren===1&&i.children[Q].segments.length===0){let o=so(i.children[Q],n,e);return new fe(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=mp(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new fe(i.segments,r)}}function iy(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],s=e[t];if(co(s))break;let l=`${s}`,c=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!$h(l,c,a))return o;t+=2}else{if(!$h(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Ic(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(co(o)){let l=ry(o.outlets);return new fe(t,l)}if(r===0&&Ya(e[0])){let l=i.segments[n];t.push(new An(l.path,qh(e[0]))),r++;continue}let a=co(o)?o.outlets[Q]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Ya(s)?(t.push(new An(a,qh(s))),r+=2):(t.push(new An(a,{})),r++)}return new fe(t,{})}function ry(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=Ic(new fe([],{}),0,t))}),n}function qh(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function $h(i,n,e){return i==e.path&&Xt(n,e.parameters)}var Hi="imperative",Be=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Be||{}),yt=class{id;url;constructor(n,e){this.id=n,this.url=e}},In=class extends yt{type=Be.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mt=class extends yt{urlAfterRedirects;type=Be.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Xe=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Xe||{}),qi=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(qi||{}),Et=class extends yt{reason;code;type=Be.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function up(i){return i instanceof Et&&(i.code===Xe.Redirect||i.code===Xe.SupersededByNewNavigation)}var Zt=class extends yt{reason;code;type=Be.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},ii=class extends yt{error;target;type=Be.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},mo=class extends yt{urlAfterRedirects;state;type=Be.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xa=class extends yt{urlAfterRedirects;state;type=Be.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Za=class extends yt{urlAfterRedirects;state;shouldActivate;type=Be.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ja=class extends yt{urlAfterRedirects;state;type=Be.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},es=class extends yt{urlAfterRedirects;state;type=Be.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ts=class{route;type=Be.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ns=class{route;type=Be.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},is=class{snapshot;type=Be.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rs=class{snapshot;type=Be.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},os=class{snapshot;type=Be.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},as=class{snapshot;type=Be.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$i=class{routerEvent;position;anchor;scrollBehavior;type=Be.Scroll;constructor(n,e,t,r){this.routerEvent=n,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Gi=class{},uo=class{},Ki=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function oy(i){return!(i instanceof Gi)&&!(i instanceof Ki)&&!(i instanceof uo)}var ss=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new oi(this.rootInjector)}},oi=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new ss(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(q(Ue))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ls=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Pc(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=Pc(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Nc(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Nc(n,this._root).map(e=>e.value)}};function Pc(i,n){if(i===n.value)return n;for(let e of n.children){let t=Pc(i,e);if(t)return t}return null}function Nc(i,n){if(i===n.value)return[n];for(let e of n.children){let t=Nc(i,e);if(t.length)return t.unshift(n),t}return[]}var bt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ui(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var ho=class extends ls{snapshot;constructor(n,e){super(n),this.snapshot=e,Wc(this,n)}toString(){return this.snapshot.toString()}};function hp(i,n){let e=ay(i,n),t=new it([new An("",{})]),r=new it({}),o=new it({}),a=new it({}),s=new it(""),l=new dn(t,r,a,s,o,Q,i,e.root);return l.snapshot=e.root,new ho(new bt(l,[]),e)}function ay(i,n){let e={},t={},r={},a=new Yi([],e,r,"",t,Q,i,null,{},n);return new po("",new bt(a,[]))}var dn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(Z(c=>c[_o]))??B(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Z(n=>ni(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Z(n=>ni(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},sy="always";function Hc(i,n,e){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:v(v({},n.params),i.params),data:v(v({},n.data),i.data),resolve:v(v(v(v({},i.data),n.data),r?.data),i._resolvedData)}:t={params:v({},i.params),data:v({},i.data),resolve:v(v({},i.data),i._resolvedData??{})},r&&fp(r)&&(t.resolve[_o]=r.title),t}var Yi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[_o]}constructor(n,e,t,r,o,a,s,l,c,m){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ni(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ni(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},po=class extends ls{url;constructor(n,e){super(e),this.url=n,Wc(this,e)}toString(){return pp(this._root)}};function Wc(i,n){n.value._routerState=i,n.children.forEach(e=>Wc(i,e))}function pp(i){let n=i.children.length>0?` { ${i.children.map(pp).join(", ")} } `:"";return`${i.value}${n}`}function Mc(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Xt(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Xt(n.params,e.params)||i.paramsSubject.next(e.params),Pv(n.url,e.url)||i.urlSubject.next(e.url),Xt(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Fc(i,n){let e=Xt(i.params,n.params)&&zv(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||Fc(i.parent,n.parent))}function fp(i){return typeof i.title=="string"||i.title===null}var gp=new w(""),bo=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Q;activateEvents=new re;deactivateEvents=new re;attachEvents=new re;detachEvents=new re;routerOutletData=da();parentContexts=d(oi);location=d(rn);changeDetector=d(Te);inputBinder=d(vo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Lc(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ft]})}return i})(),Lc=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===dn?this.route:n===oi?this.childContexts:n===gp?this.outletData:this.parent.get(n,e)}},vo=new w(""),_p=(()=>{class i{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=Tr([this.options.queryParams?t.queryParams:B({}),t.params,t.data]).pipe(we(([o,a,s],l)=>(s=v(v(v({},o),a),s),l===0?B(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=uu(t.component);if(!a){this.unsubscribeFromRouteData(e);return}let s=this.outletSeenKeys.get(e);s||(s=new Set,this.outletSeenKeys.set(e,s));for(let c of Object.keys(o))s.add(c);let l=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:c}of a.inputs){let m=o[c];(m!==void 0||l==="alwaysUndefined"||s.has(c))&&e.activatedComponentRef.setInput(c,m)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){Ti()};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),qc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&S(0,"router-outlet")},dependencies:[bo],encapsulation:2,changeDetection:1})}return i})();function $c(i){let n=i.children&&i.children.map($c),e=n?je(v({},i),{children:n}):v({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==Q&&(e.component=qc),e}function ly(i,n,e){let t=fo(i,n._root,e?e._root:void 0);return new ho(t,n)}function fo(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=cy(i,n,e);return new bt(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>fo(i,s)),a}}let t=dy(n.value),r=n.children.map(o=>fo(i,o));return new bt(t,r)}}function cy(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return fo(i,t,r);return fo(i,t)})}function dy(i){return new dn(new it(i.url),new it(i.params),new it(i.queryParams),new it(i.fragment),new it(i.data),i.outlet,i.component,i)}var Qi=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},bp="ngNavigationCancelingError";function cs(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=On(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=vp(!1,Xe.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function vp(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[bp]=!0,e.cancellationCode=n,e}function my(i){return yp(i)&&On(i.url)}function yp(i){return!!i&&i[bp]}var Bc=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),Mc(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=Ui(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Ui(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=Ui(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=Ui(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new as(o.value.snapshot))}),n.children.length&&this.forwardEvent(new rs(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(Mc(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Mc(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},ds=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Wi=class{component;route;constructor(n,e){this.component=n,this.route=e}};function uy(i,n,e){let t=i._root,r=n?n._root:null;return ao(t,r,e,[t.value])}function hy(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Zi(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!Dm(i)?i:n.get(i):t}function ao(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ui(n);return i.children.forEach(a=>{py(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>lo(s,e.getContext(a),r)),r}function py(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=fy(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ds(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ao(i,n,s?s.children:null,t,r):ao(i,n,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Wi(s.outlet.component,a))}else a&&lo(n,s,r),r.canActivateChecks.push(new ds(t)),o.component?ao(i,null,s?s.children:null,t,r):ao(i,null,e,t,r);return r}function fy(i,n,e){if(typeof e=="function")return Je(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!ti(i.url,n.url);case"pathParamsOrQueryParamsChange":return!ti(i.url,n.url)||!Xt(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fc(i,n)||!Xt(i.queryParams,n.queryParams);default:return!Fc(i,n)}}function lo(i,n,e){let t=Ui(i),r=i.value;Object.entries(t).forEach(([o,a])=>{r.component?n?lo(a,n.children.getContext(o),e):lo(a,null,e):lo(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Wi(n.outlet.component,r)):e.canDeactivateChecks.push(new Wi(null,r)):e.canDeactivateChecks.push(new Wi(null,r))}function yo(i){return typeof i=="function"}function gy(i){return typeof i=="boolean"}function _y(i){return i&&yo(i.canLoad)}function by(i){return i&&yo(i.canActivate)}function vy(i){return i&&yo(i.canActivateChild)}function yy(i){return i&&yo(i.canDeactivate)}function wy(i){return i&&yo(i.canMatch)}function wp(i){return i instanceof Rm||i?.name==="EmptyError"}var Wa=Symbol("INITIAL_VALUE");function Xi(){return we(i=>Tr(i.map(n=>n.pipe(Ae(1),$e(Wa)))).pipe(Z(n=>{for(let e of n)if(e!==!0){if(e===Wa)return Wa;if(e===!1||xy(e))return e}return!0}),le(n=>n!==Wa),Ae(1)))}function xy(i){return On(i)||i instanceof Qi}function xp(i){return i.aborted?B(void 0).pipe(Ae(1)):new qe(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Cp(i){return ue(xp(i))}function Cy(i){return Wt(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?B(je(v({},n),{guardsResult:!0})):Sy(o,e,t).pipe(Wt(a=>a&&gy(a)?ky(e,r,i):B(a)),Z(a=>je(v({},n),{guardsResult:a})))})}function Sy(i,n,e){return Ze(i).pipe(Wt(t=>Dy(t.component,t.route,e,n)),wn(t=>t!==!0,!0))}function ky(i,n,e){return Ze(n).pipe($n(t=>Zo(My(t.route.parent,e),Ey(t.route,e),Ry(i,t.path),Ty(i,t.route))),wn(t=>t!==!0,!0))}function Ey(i,n){return i!==null&&n&&n(new os(i)),B(!0)}function My(i,n){return i!==null&&n&&n(new is(i)),B(!0)}function Ty(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return B(!0);let t=e.map(r=>yi(()=>{let o=n._environmentInjector,a=Zi(r,o),s=by(a)?a.canActivate(n,i):Je(o,()=>a(n,i));return ri(s).pipe(wn())}));return B(t).pipe(Xi())}function Ry(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>hy(o)).filter(o=>o!==null).map(o=>yi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Zi(s,l),m=vy(c)?c.canActivateChild(e,i):Je(l,()=>c(e,i));return ri(m).pipe(wn())});return B(a).pipe(Xi())}));return B(r).pipe(Xi())}function Dy(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return B(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Zi(a,s),c=yy(l)?l.canDeactivate(i,n,e,t):Je(s,()=>l(i,n,e,t));return ri(c).pipe(wn())});return B(o).pipe(Xi())}function Ay(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return B(!0);let a=o.map(s=>{let l=Zi(s,i),c=_y(l)?l.canLoad(n,e):Je(i,()=>l(n,e)),m=ri(c);return r?m.pipe(Cp(r)):m});return B(a).pipe(Xi(),Sp(t))}function Sp(i){return Mm(pt(n=>{if(typeof n!="boolean")throw cs(i,n)}),Z(n=>n===!0))}function Oy(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return B(!0);let s=a.map(l=>{let c=Zi(l,i),m=wy(c)?c.canMatch(n,e,r):Je(i,()=>c(n,e,r));return ri(m).pipe(Cp(o))});return B(s).pipe(Xi(),Sp(t))}var ln=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},go=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function Iy(i){throw new C(4e3,!1)}function Py(i){throw vp(!1,Xe.GuardRejected)}var zc=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return ye(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[Q])throw Iy(`${n.redirectTo}`);r=r.children[Q]}})}applyRedirectCommands(n,e,t,r,o){return ye(this,null,function*(){let a=yield Ny(e,r,o);if(a instanceof vt)throw new go(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new go(s);return s})}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new vt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,t,r)}),new fe(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new C(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function Ny(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Ka(ri(Je(e,()=>t(n))))}function Fy(i,n){return i.providers&&!i._injector&&(i._injector=aa(i.providers,n,`Route: ${i.path}`)),i._injector??n}function Lt(i){return i.outlet||Q}function Ly(i,n){let e=i.filter(t=>Lt(t)===n);return e.push(...i.filter(t=>Lt(t)!==n)),e}var jc={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function kp(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function By(i,n,e,t,r,o,a){let s=Ep(i,n,e);if(!s.matched)return B(s);let l=kp(o(s));return t=Fy(n,t),Oy(t,n,e,r,l,a).pipe(Z(c=>c===!0?s:v({},jc)))}function Ep(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?v({},jc):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Yh)(e,i,n);if(!r)return v({},jc);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Gh(i,n,e,t,r){return e.length>0&&Uy(i,e,t,r)?{segmentGroup:new fe(n,jy(t,new fe(e,i.children))),slicedSegments:[]}:e.length===0&&Vy(i,e,t)?{segmentGroup:new fe(i.segments,zy(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new fe(i.segments,i.children),slicedSegments:e}}function zy(i,n,e,t){let r={};for(let o of e)if(us(i,n,o)&&!t[Lt(o)]){let a=new fe([],{});r[Lt(o)]=a}return v(v({},t),r)}function jy(i,n){let e={};e[Q]=n;for(let t of i)if(t.path===""&&Lt(t)!==Q){let r=new fe([],{});e[Lt(t)]=r}return e}function Uy(i,n,e,t){return e.some(r=>!us(i,n,r)||!(Lt(r)!==Q)?!1:!(t!==void 0&&Lt(r)===t))}function Vy(i,n,e){return e.some(t=>us(i,n,t))}function us(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Hy(i,n,e){return n.length===0&&!i.children[e]}var Uc=class{};function Wy(i,n,e,t,r,o,a,s){return ye(this,null,function*(){return new Vc(i,n,e,t,r,a,o,s).recognize()})}var qy=31,Vc=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new zc(this.urlSerializer,this.urlTree)}noMatchError(n){return new C(4002,`'${n.segmentGroup}'`)}recognize(){return ye(this,null,function*(){let n=Gh(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(n),r=new bt(t,e),o=new po("",r),a=sp(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return ye(this,null,function*(){let e=new Yi([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Q,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,Q,e),rootSnapshot:e}}catch(t){if(t instanceof go)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof ln?this.noMatchError(t):t}})}processSegmentGroup(n,e,t,r,o){return ye(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=yield this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof bt?[a]:[]})}processChildren(n,e,t,r){return ye(this,null,function*(){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=t.children[l],m=Ly(e,l),p=yield this.processSegmentGroup(n,m,c,l,r);a.push(...p)}let s=Mp(a);return $y(s),s})}processSegment(n,e,t,r,o,a,s){return ye(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??n,e,l,t,r,o,a,s)}catch(c){if(c instanceof ln||wp(c))continue;throw c}if(Hy(t,r,o))return new Uc;throw new ln(t)})}processSegmentAgainstRoute(n,e,t,r,o,a,s,l){return ye(this,null,function*(){if(Lt(t)!==a&&(a===Q||!us(r,o,t)))throw new ln(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,l);throw new ln(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,s){return ye(this,null,function*(){let{matched:l,parameters:c,consumedSegments:m,positionalParamSegments:p,remainingSegments:g}=Ep(e,r,o);if(!l)throw new ln(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>qy&&(this.allowRedirects=!1));let b=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=yield this.applyRedirects.applyRedirectCommands(m,r.redirectTo,p,kp(b),n),y=yield this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(n,t,e,y.concat(g),a,!1,s)})}createSnapshot(n,e,t,r,o){let a=new Yi(t,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Ky(e),Lt(e),e.component??e._loadedComponent??null,e,Yy(e),n),s=Hc(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(n,e,t,r,o,a){return ye(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=D=>this.createSnapshot(n,t,D.consumedSegments,D.parameters,a),l=yield Ka(By(e,t,r,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new ln(e);n=t._injector??n;let{routes:c}=yield this.getChildConfig(n,t,r),m=t._loadedInjector??n,{parameters:p,consumedSegments:g,remainingSegments:b}=l,_=this.createSnapshot(n,t,g,p,a),{segmentGroup:y,slicedSegments:N}=Gh(e,g,b,c,o);if(N.length===0&&y.hasChildren()){let D=yield this.processChildren(m,c,y,_);return new bt(_,D)}if(c.length===0&&N.length===0)return new bt(_,[]);let J=Lt(t)===o,O=yield this.processSegment(m,c,y,N,J?Q:o,!0,_);return new bt(_,O instanceof bt?[O]:[])})}getChildConfig(n,e,t){return ye(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Ka(Ay(n,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Py(e)}return{routes:[],injector:n}})}};function $y(i){i.sort((n,e)=>n.value.outlet===Q?-1:e.value.outlet===Q?1:n.value.outlet.localeCompare(e.value.outlet))}function Gy(i){let n=i.value.routeConfig;return n&&n.path===""}function Mp(i){let n=[],e=new Set;for(let t of i){if(!Gy(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Mp(t.children);n.push(new bt(t.value,r))}return n.filter(t=>!e.has(t))}function Ky(i){return i.data||{}}function Yy(i){return i.resolve||{}}function Qy(i,n,e,t,r,o,a){return Wt(s=>ye(null,null,function*(){let{state:l,tree:c}=yield Wy(i,n,e,t,s.extractedUrl,r,o,a);return je(v({},s),{targetSnapshot:l,urlAfterRedirects:c})}))}function Xy(i){return Wt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return B(n);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Tp(s))o.add(l);let a=0;return Ze(o).pipe($n(s=>r.has(s)?Zy(s,e,i):(s.data=Hc(s,s.parent,i).resolve,B(void 0))),pt(()=>a++),Ml(1),Wt(s=>a===o.size?B(n):rt))})}function Tp(i){let n=i.children.map(e=>Tp(e)).flat();return[i,...n]}function Zy(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!fp(t)&&(r[_o]=t.title),yi(()=>(i.data=Hc(i,i.parent,e).resolve,Jy(r,i,n).pipe(Z(o=>(i._resolvedData=o,i.data=v(v({},i.data),o),null)))))}function Jy(i,n,e){let t=Rc(i);if(t.length===0)return B({});let r={};return Ze(t).pipe(Wt(o=>e0(i[o],n,e).pipe(wn(),pt(a=>{if(a instanceof Qi)throw cs(new cn,a);r[o]=a}))),Ml(1),Z(()=>r),ea(o=>wp(o)?rt:Tm(o)))}function e0(i,n,e){let t=n._environmentInjector,r=Zi(i,t),o=r.resolve?r.resolve(n,e):Je(t,()=>r(n,e));return ri(o)}function Kh(i){return we(n=>{let e=i(n);return e?Ze(e).pipe(Z(()=>n)):B(n)})}var Gc=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===Q);return t}getResolvedTitleForRoute(e){return e.data[_o]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:()=>d(Rp)})}return i})(),Rp=(()=>{class i extends Gc{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(q(ih))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Nn=new w("",{factory:()=>({})}),Ji=new w(""),hs=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(ru);loadComponent(e,t){return ye(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=ye(this,null,function*(){try{let o=yield Xh(Je(e,()=>t.loadComponent())),a=yield Ap(zl(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=ye(this,null,function*(){try{let o=yield Dp(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})();function Dp(i,n,e,t){return ye(this,null,function*(){let r=yield Xh(Je(e,()=>i.loadChildren())),o=yield Ap(zl(r)),a;o instanceof Ym||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),t&&t(i);let s,l,c=!1,m;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,m=a,l=s.get(Ji,[],{optional:!0,self:!0}).flat()),{routes:l.map($c),injector:s,factory:m}})}function Ap(i){return ye(this,null,function*(){return i})}var ps=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:()=>d(t0)})}return i})(),t0=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})(),Kc=new w(""),Yc=new w("");function Op(i,n,e){let t=i.get(Yc),r=i.get($);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),n0(i)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=t;return l&&Je(i,()=>l({transition:s,from:n,to:e})),a}function n0(i){return new Promise(n=>{Ge({read:()=>setTimeout(n)},{injector:i})})}var i0=()=>{},Qc=new w(""),fs=(()=>{class i{currentNavigation=te(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=te(null);events=new E;transitionAbortWithErrorSubject=new E;configLoader=d(hs);environmentInjector=d(Ue);destroyRef=d(Ci);urlSerializer=d(Pn);rootContexts=d(oi);location=d(kn);inputBindingEnabled=d(vo,{optional:!0})!==null;titleStrategy=d(Gc);options=d(Nn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||sy;urlHandlingStrategy=d(ps);createViewTransition=d(Kc,{optional:!0});navigationErrorHandler=d(Qc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>B(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ts(r)),t=r=>this.events.next(new ns(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Me(()=>{this.transitions?.next(je(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new it(null),this.transitions.pipe(le(t=>t!==null),we(t=>{let r=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===t.id;return B(t).pipe(we(l=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Xe.SupersededByNewNavigation),rt;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?je(v({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let m=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),p=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!m&&p!=="reload")return this.events.next(new Zt(l.id,this.urlSerializer.serialize(l.rawUrl),"",qi.IgnoredSameUrlNavigation)),l.resolve(!1),rt;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return B(l).pipe(we(g=>(this.events.next(new In(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?rt:Promise.resolve(g))),Qy(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),pt(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(b=>(b.finalUrl=g.urlAfterRedirects,b)),this.events.next(new uo)}),we(g=>Ze(t.routesRecognizeHandler.deferredHandle??B(void 0)).pipe(Z(()=>g))),pt(()=>{let g=new mo(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(g)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:g,extractedUrl:b,source:_,restoredState:y,extras:N}=l,J=new In(g,this.urlSerializer.serialize(b),_,y);this.events.next(J);let O=hp(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=je(v({},l),{targetSnapshot:O,urlAfterRedirects:b,extras:je(v({},N),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(D=>(D.finalUrl=b,D)),B(t)}else return this.events.next(new Zt(l.id,this.urlSerializer.serialize(l.extractedUrl),"",qi.IgnoredByUrlHandlingStrategy)),l.resolve(!1),rt}),Z(l=>{let c=new Xa(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=t=je(v({},l),{guards:uy(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),t}),Cy(l=>this.events.next(l)),we(l=>{if(t.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw cs(this.urlSerializer,l.guardsResult);let c=new Za(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!s())return rt;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",Xe.GuardRejected),rt;if(l.guards.canActivateChecks.length===0)return B(l);let m=new Ja(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(m),!s())return rt;let p=!1;return B(l).pipe(Xy(this.paramsInheritanceStrategy),pt({next:()=>{p=!0;let g=new es(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(g)},complete:()=>{p||this.cancelNavigationTransition(l,"",Xe.NoDataFromResolver)}}))}),Kh(l=>{let c=p=>{let g=[];if(p.routeConfig?._loadedComponent)p.component=p.routeConfig?._loadedComponent;else if(p.routeConfig?.loadComponent){let b=p._environmentInjector;g.push(this.configLoader.loadComponent(b,p.routeConfig).then(_=>{p.component=_}))}for(let b of p.children)g.push(...c(b));return g},m=c(l.targetSnapshot.root);return m.length===0?B(l):Ze(Promise.all(m).then(()=>l))}),we(l=>{let c=ly(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=t=l=je(v({},l),{targetRouterState:c}),this.currentNavigation.update(m=>(m.targetRouterState=c,m)),B(l)}),Kh(()=>this.afterPreactivation()),we(()=>{let{currentSnapshot:l,targetSnapshot:c}=t,m=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return m?Ze(m).pipe(Z(()=>t)):B(t)}),Ae(1),we(l=>{r=!1,this.events.next(new Gi);let c=t.beforeActivateHandler.deferredHandle;return c?Ze(c.then(()=>l)):B(l)}),pt(l=>{new Bc(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(o=!0,this.currentNavigation.update(c=>(c.abort=i0,c)),this.lastSuccessfulNavigation.set(Me(this.currentNavigation)),this.events.next(new Mt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),ue(xp(a.signal).pipe(le(()=>!o&&r),pt(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",Xe.Aborted)}))),pt({complete:()=>{o=!0}}),ue(this.transitionAbortWithErrorSubject.pipe(pt(l=>{throw l}))),Ar(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",Xe.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ea(l=>{if(o=!0,this.destroyed)return t.resolve(!1),rt;if(yp(l))this.events.next(new Et(t.id,this.urlSerializer.serialize(t.extractedUrl),l.message,l.cancellationCode)),my(l)?this.events.next(new Ki(l.url,l.navigationBehaviorOptions)):t.resolve(!1);else{let c=new ii(t.id,this.urlSerializer.serialize(t.extractedUrl),l,t.targetSnapshot??void 0);try{let m=Je(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(m instanceof Qi){let{message:p,cancellationCode:g}=cs(this.urlSerializer,m);this.events.next(new Et(t.id,this.urlSerializer.serialize(t.extractedUrl),p,g)),this.events.next(new Ki(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(m){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(m)}}return rt}))}))}cancelNavigationTransition(e,t,r){let o=new Et(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Me(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})();function r0(i){return i!==Hi}var Ip=new w("");var Pp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:()=>d(o0)})}return i})(),ms=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},o0=(()=>{class i extends ms{static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})(),gs=(()=>{class i{urlSerializer=d(Pn);options=d(Nn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(kn);urlHandlingStrategy=d(ps);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new vt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof vt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=hp(null,d(Ue));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:()=>d(a0)})}return i})(),a0=(()=>{class i extends gs{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof In?this.updateStateMemento():e instanceof Zt?this.commitTransition(t):e instanceof mo?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Gi?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Et&&!up(e)?this.restoreHistory(t):e instanceof ii?this.restoreHistory(t,!0):e instanceof Mt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=v(v({},s),this.generateNgRouterState(o,l,t));this.location.replaceState(e,"",c)}else{let l=v(v({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",l)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?v({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):v({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})();function _s(i,n){i.events.pipe(le(e=>e instanceof Mt||e instanceof Et||e instanceof ii||e instanceof Zt),Z(e=>e instanceof Mt||e instanceof Zt?0:(e instanceof Et?e.code===Xe.Redirect||e.code===Xe.SupersededByNewNavigation:!1)?2:1),le(e=>e!==2),Ae(1)).subscribe(()=>{n()})}var Tt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Pl);stateManager=d(gs);options=d(Nn,{optional:!0})||{};pendingTasks=d(Om);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(fs);urlSerializer=d(Pn);location=d(kn);urlHandlingStrategy=d(ps);injector=d(Ue);_events=new E;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Pp);injectorCleanup=d(Ip,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ji,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(vo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new De;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Me(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Et&&t.code!==Xe.Redirect&&t.code!==Xe.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Mt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Ki){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||r0(r.source)},a);this.scheduleNavigation(s,Hi,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}oy(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Hi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=je(v({},o),{browserUrl:e})),r){let c=v({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,t,a,o).catch(c=>{this.disposed||this.injector.get(Jo)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map($c),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,c=l?this.currentUrlTree.fragment:a,m=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":m=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":m=this.currentUrlTree.queryParams;break;default:m=o||null}m!==null&&(m=this.removeEmptyProps(m));let p;try{let g=r?r.snapshot:this.routerState.snapshot.root;p=lp(g)}catch(g){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return cp(p,e,m,c??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=On(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Hi,null,t)}navigate(e,t={skipLocationChange:!1}){return s0(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(wi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=v({},Jh):t===!1?r=v({},Dc):r=v(v({},Dc),t),On(e))return Vh(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Vh(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((p,g)=>{s=p,l=g});let m=this.pendingTasks.add();return _s(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})();function s0(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new C(4008,!1)}var d0=(()=>{class i{router=d(Tt);stateManager=d(gs);fragment=te("");queryParams=te({});path=te("");serializer=d(Pn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Mt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new vt(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ne({token:i,factory:i.\u0275fac})}return i})(),bs=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new ca("href"),{optional:!0});reactiveHref=ou(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Me(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Me(this._target)}_target=te(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Me(this._queryParams)}_queryParams=te(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Me(this._fragment)}_fragment=te(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Me(this._queryParamsHandling)}_queryParamsHandling=te(void 0);set state(e){this._state.set(e)}get state(){return Me(this._state)}_state=te(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Me(this._info)}_info=te(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Me(this._relativeTo)}_relativeTo=te(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Me(this._preserveFragment)}_preserveFragment=te(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Me(this._skipLocationChange)}_skipLocationChange=te(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Me(this._replaceUrl)}_replaceUrl=te(!1);browserUrl=da(void 0);isAnchorElement;onChanges=new E;applicationErrorHandler=d(Jo);options=d(Nn,{optional:!0});reactiveRouterState=d(d0);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=te(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(On(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l=this.browserUrl(),c=v({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,c)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=Kn(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:On(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Me(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(lt(Tt),lt(dn),Nm("tabindex"),lt(Oe),lt(H),lt(Br))};static \u0275dir=F({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&ce("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&he("href",r.reactiveHref(),$m)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ee],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ee],replaceUrl:[2,"replaceUrl","replaceUrl",ee],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[ft]})}return i})();var wo=class{};var Np=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(le(e=>e instanceof Mt),$n(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=aa(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Ze(r).pipe(xl())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return B(null);let r;t.loadChildren&&t.canLoad===void 0?r=Ze(this.loader.loadChildren(e,t)):r=B(null);let o=r.pipe(Wt(a=>a===null?B(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return Ze([o,a]).pipe(xl())}else return o})}static \u0275fac=function(t){return new(t||i)(q(Tt),q(Ue),q(wo),q(hs))};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fp=new w(""),m0=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Hi;restoredId=0;store={};isHydrating=d(Lm,{optional:!0})??!1;urlSerializer=d(Pn);zone=d(R);viewportScroller=d(Ul);transitions=d(fs);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&d(gt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof In?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Mt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Zt&&e.code===qi.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof $i)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let r=Me(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>ye(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new $i(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){Ti()};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})();function u0(){return d(Tt).routerState.root}function xo(i,n){return{\u0275kind:i,\u0275providers:n}}function h0(){let i=d(ie);return n=>{let e=i.get(gt);if(n!==e.components[0])return;let t=i.get(Tt),r=i.get(Lp);i.get(Zc)===1&&t.initialNavigation(),i.get(jp,null,{optional:!0})?.setUpPreloading(),i.get(Fp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Lp=new w("",{factory:()=>new E}),Zc=new w("",{factory:()=>1});function Bp(){let i=[{provide:Al,useValue:!0},{provide:Zc,useValue:0},Pr(()=>{let n=d(ie);return n.get(gu,Promise.resolve()).then(()=>new Promise(t=>{let r=n.get(Tt),o=n.get(Lp);_s(r,()=>{t(!0)}),n.get(fs).afterPreactivation=()=>(t(!0),o.closed?B(void 0):o),r.initialNavigation()}))})];return xo(2,i)}function zp(){let i=[Pr(()=>{d(Tt).setUpLocationChangeListener()}),{provide:Zc,useValue:2}];return xo(3,i)}var jp=new w("");function Up(i){return xo(0,[{provide:jp,useExisting:Np},{provide:wo,useExisting:i}])}function Vp(i={}){return xo(8,[{provide:vo,useFactory:()=>new _p(i)}])}function Hp(i){Ol("NgRouterViewTransitions");let n=[{provide:Kc,useValue:Op},{provide:Yc,useValue:v({skipNextTransition:!!i?.skipInitialTransition},i)}];return xo(9,n)}var Wp=[kn,{provide:Pn,useClass:cn},Tt,oi,{provide:dn,useFactory:u0},hs],vs=(()=>{class i{constructor(){}static forRoot(e,t){return{ngModule:i,providers:[Wp,[],{provide:Ji,multi:!0,useValue:e},[],t?.errorHandler?{provide:Qc,useValue:t.errorHandler}:[],{provide:Nn,useValue:t||{}},t?.useHash?f0():g0(),p0(),t?.preloadingStrategy?Up(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?_0(t):[],t?.bindToComponentInputs?Vp(typeof t.bindToComponentInputs=="object"?t.bindToComponentInputs:{}).\u0275providers:[],t?.enableViewTransitions?Hp().\u0275providers:[],b0()]}}static forChild(e){return{ngModule:i,providers:[{provide:Ji,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({})}return i})();function p0(){return{provide:Fp,useFactory:()=>{let i=d(Ul),n=d(Nn);return n.scrollOffset&&i.setOffset(n.scrollOffset),new m0(n)}}}function f0(){return{provide:Br,useClass:bu}}function g0(){return{provide:Br,useClass:_u}}function _0(i){return[i.initialNavigation==="disabled"?zp().\u0275providers:[],i.initialNavigation==="enabledBlocking"?Bp().\u0275providers:[]]}var Xc=new w("");function b0(){return[{provide:Xc,useFactory:h0},{provide:Fl,multi:!0,useExisting:Xc}]}var $p=[{title:"Automatic Conformance Checking",previewImgSrc:"assets/acc.png",page:{href:"http://conformance-checking.hvehged4gdaucchf.westeurope.azurecontainer.io",description:"A framework providing automatic conformance diagnostics on event logs uploaded to Celonis. (A Celonis account and application key is required)"},source:{href:"https://github.com/lakhoune/Automatic-Conformance-Checking"}},{title:"Social Bot Framework",subtitle:"Bot modeling and development",previewImgSrc:"assets/sbf-preview.webp",page:{href:"https://sbf-dev.tech4comp.dbis.rwth-aachen.de",description:"A framework for building bots for social media platforms. It provides an intuitive approach to bot development"},source:{href:"https://github.com/rwth-acis/Social-Bot-Framework"}},{title:"MobSOS Evaluation Center",subtitle:"Community Analytics",previewImgSrc:"assets/mobsos-preview.webp",page:{href:"https://monitor.tech4comp.dbis.rwth-aachen.de/welcome",description:"MobSOS is a framework for community information systems (CIS) success modeling. The goal is to increase success awareness in a community."},source:{href:"https://github.com/rwth-acis/mobsos-evaluation-center"}},{title:"StudyGrow Cards",subtitle:"Digital Flashcards",previewImgSrc:"assets/cards-preview.webp",page:{href:"https://cards.leier.lu/",description:"This application can be used to create flashcards and share them with the community"},source:{href:"https://github.com/StudyGrow/Cards"}},{title:"This website",subtitle:"My personal website, which you are currently visiting",previewImgSrc:"assets/website-preview.png",page:{href:"https://lakhoune.com/",description:"This website is built with Angular and hosted on GitHub Pages. It is a single page application (SPA) and uses the Angular Material UI library. The source code is available on GitHub, along with a CI/CD pipeline. Feel free to use this website as a template for your own website, but please give credit where credit is due :) "},source:{href:"https://github.com/lakhoune/lakhoune.github.io"}},{title:"Wifi-QR",subtitle:"Quickly share your Wifi credentials",previewImgSrc:"assets/wifi-qr.jpg",page:{href:"https://lakhoune.com/wifi-qr/",description:"This application can be used to generate a QR code containing your Wifi credentials. This way, you can easily share your Wifi with your friends."},source:{href:"https://github.com/lakhoune/lakhoune.github.io"}}];var ys=class{constructor(){this.title="",this.subtitle="",this.previewImgSrc="",this.page={href:"",description:""},this.source={logo:"",href:""}}};var v0=["*"];var y0=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],w0=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],x0=new w("MAT_CARD_CONFIG"),Fn=(()=>{class i{appearance;constructor(){let e=d(x0,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&G("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:v0,decls:1,vars:0,template:function(t,r){t&1&&(ge(),L(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return i})(),ws=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var er=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),xs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),Gp=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&G("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),tr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:w0,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(ge(y0),L(0),Pt(1,"div",0),L(2,1),qt(),L(3,2))},encapsulation:2})}return i})();var Kp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return i})();var Yp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return i})();var Qp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de]})}return i})();function C0(i,n){if(i&1&&(u(0,"mat-card-subtitle"),f(1),h()),i&2){let e=W();x(),ct(e.project.subtitle)}}function S0(i,n){i&1&&(u(0,"mat-card-subtitle"),S(1,"br"),h())}function k0(i,n){if(i&1&&S(0,"div",4),i&2){let e=W();oe("innerHTML",e.project.page.description,qm)}}function E0(i,n){if(i&1&&(u(0,"a",5),f(1,"View Source "),S(2,"i",6),h()),i&2){let e=W();oe("href",e.project.source.href,xn)}}var Xp=(()=>{class i{constructor(){this.project=new ys}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-project"]],inputs:{project:"project"},standalone:!1,decls:15,vars:8,consts:[[1,"shadow","project","h-100","w-100","project"],[1,"project-title"],["target","_blank","rel","noopener noreferrer",1,"img-link",3,"href"],["mat-card-image","","alt","website preview",1,"card-img-top","thumbnail",3,"src"],[3,"innerHTML"],["mat-button","","target","_blank","rel","noopener noreferrer",1,"m-0",3,"href"],[1,"bi","bi-box-arrow-up-right"]],template:function(t,r){t&1&&(u(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),f(3),h(),K(4,C0,2,1,"mat-card-subtitle"),K(5,S0,2,0,"mat-card-subtitle"),h(),u(6,"a",2),S(7,"img",3),h(),u(8,"mat-card-content"),K(9,k0,1,1,"div",4),h(),u(10,"mat-card-actions")(11,"a",5),f(12,"Open "),S(13,"i",6),h(),K(14,E0,3,1,"a",5),h()()),t&2&&(x(3),ct(r.project.title),x(),Y(r.project.subtitle?4:-1),x(),Y(r.project.subtitle?-1:5),x(),oe("href",r.project.page.href,xn),x(),oe("src",r.project.previewImgSrc,xn),x(2),Y(r.project.page.description?9:-1),x(2),oe("href",r.project.page.href,xn),x(3),Y(r.project.source?14:-1))},dependencies:[Dn,Fn,Gp,er,tr,Kp,xs,ws],styles:['.mat-mdc-card-header[_ngcontent-%COMP%]{z-index:2;background:#fff}.img-link[_ngcontent-%COMP%]{margin-bottom:auto;height:50%!important}.img-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto!important;z-index:1;width:100%!important;transition:1s;background-size:cover;background-position:center;display:block;position:relative;top:50%;transform:translateY(-50%)}.img-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(-50%)}.mat-mdc-card-image[_ngcontent-%COMP%]:first-child{margin-top:0!important}.mat-mdc-card-content[_ngcontent-%COMP%]{z-index:2;background:#fff}mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;z-index:2}.project[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;overflow:hidden;transition:.3s;border-radius:20px}.project[_ngcontent-%COMP%]:hover{height:fit-content;transform:scale(1.05)}mat-card-actions[_ngcontent-%COMP%]{background-color:#26c6da}a[_ngcontent-%COMP%]{color:#f1f1f1!important}mat-card-header[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:7px;background-color:#26c6da}'],changeDetection:1})}}return i})();function T0(i,n){if(i&1&&(u(0,"div",3),S(1,"app-project",4),h()),i&2){let e=n.$implicit;x(),oe("project",e)}}var Zp=(()=>{class i{constructor(){this.projects=$p}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-projects"]],standalone:!1,decls:6,vars:0,consts:[[1,"container","justify-content-center","my-3"],[1,"m-auto"],[1,"row","projects","justify-content-center"],[1,"col-12","col-md-4","col-xl-3","col-xxl-3","mb-2"],[3,"project"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"h2",1),f(2,"Projects"),h()(),u(3,"div",2),Ot(4,T0,2,1,"div",3,At),h()),t&2&&(x(4),It(r.projects))},dependencies:[Xp],styles:[".example-header-image[_ngcontent-%COMP%]{background-size:cover}img.card-img-top[_ngcontent-%COMP%]{width:auto;transition:1s;background-size:cover}img.card-img-top[_ngcontent-%COMP%]:hover{height:30vh;width:auto;transform:scale(1.1)}.project[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;overflow:hidden;transition:.3s}.project[_ngcontent-%COMP%]:hover{height:fit-content;transform:scale(1.05)}*[_ngcontent-%COMP%]{box-sizing:border-box}h2[_ngcontent-%COMP%]{width:fit-content}"],changeDetection:1})}}return i})();var Jp=(()=>{class i{constructor(){this.profilePictureLink="https://avatars.githubusercontent.com/u/38857665?v=4"}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-about-me"]],standalone:!1,decls:34,vars:0,consts:[["appearance","outlined",1,"shadow"],["mat-card-avatar","",1,"header-image"],[1,"my-2"],["dir","auto"],["href","https://www.rwth-aachen.de/","target","_blank","rel","nofollow"]],template:function(t,r){t&1&&(u(0,"mat-card",0)(1,"mat-card-header"),S(2,"div",1),u(3,"mat-card-title"),f(4,"Ben Lakhoune"),h(),u(5,"mat-card-subtitle"),f(6,"Business Process Consultant"),h()(),u(7,"mat-card-content",2)(8,"p",3),f(9," Hey! Glad, you made it. I'm Ben and I have a Master of Science in Computer Science from "),u(10,"a",4),f(11,"RWTH Aachen"),h(),f(12,". I am passionate about data science and process analytics. "),h(),u(13,"ul",3)(14,"li"),f(15,"\u{1F604} "),u(16,"strong"),f(17,"Pronouns"),h(),f(18,": He/Him"),h(),u(19,"li"),f(20," \u{1F331} "),u(21,"strong"),f(22,"I'm currently learning"),h(),f(23,": Object-centric Process Mining, GenAI agents "),h(),u(24,"li"),f(25," \u{1F9E0} "),u(26,"strong"),f(27,"Favorite quote"),h(),f(28,': "There are only two hard things in Computer Science: cache invalidation and naming things" (Phil Karlton) '),h(),u(29,"li"),f(30,"\u26A1\uFE0F "),u(31,"strong"),f(32,"Favorite tech stack"),h(),f(33,": M.E.A.N."),h()()()())},dependencies:[jh,Fn,Yp,er,tr,xs,ws],styles:[".header-image[_ngcontent-%COMP%]{background-image:url(https://avatars.githubusercontent.com/u/38857665?v=4);background-size:cover;width:70px;height:70px}"],changeDetection:1})}}return i})();var mn=class{constructor(n,e){this.logo=n,this.link=e}};var ef=[new mn("bi bi-github","https://github.com/lakhoune"),new mn("bi bi-envelope-fill","mailto:a.b.lakhoune@gmail.com"),new mn("bi bi-linkedin","https://www.linkedin.com/in/lakhoune/"),new mn("bi bi-patch-check-fill","https://www.credly.com/users/ben-lakhoune"),new mn("bi bi-twitter","https://twitter.com/ben_lakhoune"),new mn({src:"assets/icons/orcid.png"},"https://orcid.org/0009-0005-0961-5604")];function A0(i,n){if(i&1&&S(0,"img",4),i&2){let e=W().$implicit,t=W();oe("src",t.getSource(e.logo),xn)}}function O0(i,n){if(i&1&&S(0,"i"),i&2){let e=W().$implicit;St(e.logo)}}function I0(i,n){if(i&1&&(u(0,"a",1),K(1,A0,1,1,"img",4)(2,O0,1,2,"i",5),h()),i&2){let e=n.$implicit,t=W();oe("href",e.link,xn),x(),Y(t.getType(e.logo)==="object"?1:2)}}var tf=(()=>{class i{constructor(e){this.http=e,this.socials=ef}getType(e){return typeof e=="string"?"string":"object"}getSource(e){return typeof e=="string"?"":e.src}ngOnInit(){}openCV(e){this.http.get("/assets/"+e,{responseType:"blob"}).subscribe(t=>{let r=URL.createObjectURL(t);window.open(r,"_blank")})}static{this.\u0275fac=function(t){return new(t||i)(lt(Pi))}}static{this.\u0275cmp=M({type:i,selectors:[["app-socials"]],standalone:!1,decls:5,vars:0,consts:[[1,"content","socials","shadow-lg"],["target","_blank","rel","noopener noreferrer",3,"href"],["target","_blank","rel","noopener noreferrer","title","Open CV",2,"width","35px","cursor","pointer",3,"click"],[1,"bi","bi-file-earmark-text"],["alt","",2,"width","35px",3,"src"],[3,"class"]],template:function(t,r){t&1&&(u(0,"aside",0),Ot(1,I0,3,2,"a",1,At),u(3,"a",2),ce("click",function(){return r.openCV("CV Ben Lakhoune.pdf")}),S(4,"i",3),h()()),t&2&&(x(),It(r.socials))},styles:["@media screen and (min-width:1400px){.content[_ngcontent-%COMP%]{top:0;left:0;bottom:0;position:fixed;margin-top:auto;margin-bottom:auto;height:fit-content;flex-direction:column!important;display:flex!important;border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important;padding:.5rem!important}}@media screen and (max-width:1400px){.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:17px}.content[_ngcontent-%COMP%]{margin-bottom:.5rem;justify-content:space-around;display:flex!important;border-radius:5px}}@media screen and (max-width:510px){.socials[_ngcontent-%COMP%]{margin-bottom:25px}}.socials[_ngcontent-%COMP%]{background-color:#0097a7;font-size:xx-large;z-index:2}a[_ngcontent-%COMP%], .bi-file-earmark-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}}return i})();var Jc=[{year:2025,experiences:[{title:"Consultant at SAP",date:new Date("2025-02-01"),description:"From February 2025 until present. Team Process Intelligence Services"}]},{year:2024,experiences:[{title:"Master Thesis",date:new Date("2024-03-08"),description:"Master Thesis at the Information Systems & Databases at RWTH Aachen University"},{title:"Consultant at Capgemini Invent",date:new Date("2024-04-01"),description:"From April 2024 until October 2024. Team Enterprise Transformation - Enterprise Data & Analytics with focus on Process Mining"}]},{year:2023,experiences:[{title:"Organizer of Data-driven Sustainability Workshop",date:new Date("2023-10-13"),description:"Organized a workshop on the topic of data-driven sustainability at the ESCP Berlin Business School"},{title:"Celonis Value Realization Expert Certification",date:new Date("2023-09-08"),description:"Successful completion of Celonis Value Realization Expert Partner Certification"},{title:"Celonis Consultant Star Certification",date:new Date("2023-08-04"),description:"Successful completion of Celonis Consultant Bootcamp"},{date:new Date("2023-09-01"),title:"Working student at Capgemini Invent",description:"From September 2023 until December 2023. Team Enterprise Transformation - Enterprise Data & Analytics with focus on Process Mining"}]},{year:2022,experiences:[{title:"Bachelors Degree",date:new Date("2022-02-07")},{title:"Celonis Hackathon at digitalCHURCH ",date:new Date("2022-04-29"),description:"Developed a prototype visualization for clusters of process variants"},{title:"Practical Lab at E.ON",date:new Date("2022-08-01"),description:"Developed a model for market penetration of heatpumps in Germany"}]},{year:2021,experiences:[{title:"Work as research assistant at RWTH Aachen University",date:new Date("2021-05-01"),description:'From May 2021 until August 2023. Worked on the project "tech4comp"'},{title:"Work as webmaster for the AVL academic circle",date:new Date("2021-10-31")}]},{year:2020,experiences:[{title:"Launch of Cards webpage",date:new Date("2020-02-07")}]}];var Co=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},nr=class extends Co{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},un=class extends Co{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},ed=class extends Co{element;constructor(n){super(),this.element=n instanceof H?n.nativeElement:n}},ir=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof nr)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof un)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof ed)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},So=class extends ir{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Il,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||ie.NULL,o=r.get(Ue,t.injector);e=ma(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var td=(()=>{class i extends ir{_moduleRef=d(Il,{optional:!0});_document=d($);_viewContainerRef=d(rn);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new re;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ee]})}return i})(),Ss=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({})}return i})();var F0=20,ai=(()=>{class i{_ngZone=d(R);_platform=d(se);_renderer=d(Ke).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=F0){return this._platform.isBrowser?new qe(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(kl(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):B()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(le(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=tt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rr=(()=>{class i{elementRef=d(H);scrollDispatcher=d(ai);ngZone=d(R);dir=d(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=d(Oe);_cleanupScroll;_elementScrolled=new E;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&zi()!=Ft.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),zi()==Ft.INVERTED?e.left=e.right:zi()==Ft.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Ba()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&zi()==Ft.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&zi()==Ft.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),L0=20,Jt=(()=>{class i{_platform=d(se);_listeners;_viewportSize=null;_change=new E;_document=d($);constructor(){let e=d(R),t=d(Ke).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=L0){return e>0?this._change.pipe(kl(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({})}return i})(),nd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de,Bt,de,Bt]})}return i})();var nf=Ba();function df(i){return new ks(i.get(Jt),i.get($))}var ks=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Re(-this._previousScrollPosition.left),n.style.top=Re(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),nf&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),nf&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function mf(i,n){return new Es(i.get(ai),i.get(R),i.get(Jt),n)}var Es=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ko=class{enable(){}disable(){}attach(){}};function id(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a})}function rf(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a})}function li(i,n){return new Ms(i.get(ai),i.get(Jt),i.get(R),n)}var Ms=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();id(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},uf=(()=>{class i{_injector=d(ie);constructor(){}noop=()=>new ko;close=e=>mf(this._injector,e);block=()=>df(this._injector);reposition=e=>li(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),hn=class{positionStrategy;scrollStrategy=new ko;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Ts=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var hf=(()=>{class i{_attachedOverlays=[];_document=d($);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),pf=(()=>{class i extends hf{_ngZone=d(R);_renderer=d(Ke).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ff=(()=>{class i extends hf{_platform=d(se);_ngZone=d(R);_renderer=d(Ke).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ye(e)};_clickListener=e=>{let t=Ye(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(of(s.overlayElement,t)||of(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function of(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var gf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),_f=(()=>{class i{_platform=d(se);_containerElement;_document=d($);_styleLoader=d(Ve);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||fc()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),fc()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(gf)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rd=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function od(i){return i&&i.nodeType===1}var Rs=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=De.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(n,e,t,r,o,a,s,l,c,m=!1,p,g){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=m,this._injector=p,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize()}setDirection(n){this._config=je(v({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Re(this._config.width),n.height=Re(this._config.height),n.minWidth=Re(this._config.minWidth),n.minHeight=Re(this._config.minHeight),n.maxWidth=Re(this._config.maxWidth),n.maxHeight=Re(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;od(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new rd(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=Fi(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ge(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},af="cdk-overlay-connected-position-bounding-box",B0=/([A-Za-z%]+)$/;function Eo(i,n){return new Ds(n,i.get(Jt),i.get($),i.get(se),i.get(_f))}var Ds=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=De.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(af),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),m=this._getOverlayFit(c,e,t,s);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(m,c,t)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let m=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);m>l&&(l=m,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&si(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(af),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:od(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=lf(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let m=0-a,p=a+o.width-t.width,g=0-s,b=s+o.height-t.height,_=this._subtractOverflows(o.width,m,p),y=this._subtractOverflows(o.height,g,b),N=_*y;return{visibleArea:N,isCompletelyWithinViewport:o.width*o.height===N,fitsInViewportVertically:y===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=sf(this._overlayRef.getConfig().minHeight),s=sf(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=lf(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-t.top-n.y,0),c=Math.max(o.left-t.left-n.x,0),m=0,p=0;return r.width<=o.width?m=c||-a:m=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?p=l||-s:p=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:m,y:p},{x:n.x+m,y:n.y+p}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!z0(this._lastScrollVisibility,t)){let r=new Ts(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let b=Math.min(t.bottom-n.y+t.top,n.y),_=this._lastBoundingBoxSize.height;o=b*2,a=n.y-b,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-_/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,m,p,g;if(c)g=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=n.x-this._getViewportMarginStart();else if(l)p=n.x,m=t.right-n.x-this._getViewportMarginEnd();else{let b=Math.min(t.right-n.x+t.left,n.x),_=this._lastBoundingBoxSize.width;m=b*2,p=n.x-b,m>_&&!this._isInitialRender&&!this._growAfterOpen&&(p=n.x-_/2)}return{top:a,left:p,bottom:s,right:g,width:m,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Re(t.width),r.height=Re(t.height),r.top=Re(t.top)||"auto",r.bottom=Re(t.bottom)||"auto",r.left=Re(t.left)||"auto",r.right=Re(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Re(o)),a&&(r.maxWidth=Re(a))}this._lastBoundingBoxSize=t,si(this._boundingBox.style,r)}_resetBoundingBoxStyles(){si(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){si(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let m=this._viewportRuler.getViewportScrollPosition();si(t,this._getExactOverlayY(e,n,m)),si(t,this._getExactOverlayX(e,n,m))}else t.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=Re(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=Re(a.maxWidth):o&&(t.maxWidth="")),si(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Re(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Re(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:rf(n,t),isOriginOutsideView:id(n,t),isOverlayClipped:rf(e,t),isOverlayOutsideView:id(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Fi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof H)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function si(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function sf(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(B0);return!e||e==="px"?parseFloat(n):null}return i||null}function lf(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function z0(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var cf="cdk-global-overlay-wrapper";function Os(i){return new As}var As=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(cf),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),m=this._xPosition,p=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",b="",_="",y="";l?y="flex-start":m==="center"?(y="center",g?_=p:b=p):g?m==="left"||m==="end"?(y="flex-end",b=p):(m==="right"||m==="start")&&(y="flex-start",_=p):m==="left"||m==="start"?(y="flex-start",b=p):(m==="right"||m==="end")&&(y="flex-end",_=p),n.position=this._cssPosition,n.marginLeft=l?"0":b,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":_,e.justifyContent=y,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(cf),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},bf=(()=>{class i{_injector=d(ie);constructor(){}global(){return Os()}flexibleConnectedTo(e){return Eo(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mo=new w("OVERLAY_DEFAULT_CONFIG");function ci(i,n){i.get(Ve).load(gf);let e=i.get(_f),t=i.get($),r=i.get(He),o=i.get(gt),a=i.get(nt),s=i.get(Oe,null,{optional:!0})||i.get(Ke).createRenderer(null,null),l=new hn(n),c=i.get(Mo,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in t.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let m=t.createElement("div"),p=t.createElement("div");m.id=r.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),p.appendChild(m),l.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let g=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return od(g)?g.after(p):g?.type==="parent"?g.element.appendChild(p):e.getContainerElement().appendChild(p),new Rs(new So(m,o,i),p,m,l,i.get(R),i.get(pf),t,i.get(kn),i.get(ff),n?.disableAnimations??i.get(Hn,null,{optional:!0})==="NoopAnimations",i.get(Ue),s)}var vf=(()=>{class i{scrollStrategies=d(uf);_positionBuilder=d(bf);_injector=d(ie);constructor(){}create(e){return ci(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),j0=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],U0=new w("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(ie);return()=>li(i)}}),or=(()=>{class i{elementRef=d(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),yf=new w("cdk-connected-overlay-default-config"),Is=(()=>{class i{_dir=d(nt,{optional:!0});_injector=d(ie);_overlayRef;_templatePortal;_backdropSubscription=De.EMPTY;_attachSubscription=De.EMPTY;_detachSubscription=De.EMPTY;_positionSubscription=De.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(U0);_ngZone=d(R);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new re;positionChange=new re;attach=new re;detach=new re;overlayKeydown=new re;overlayOutsideClick=new re;constructor(){let e=d(Cn),t=d(rn),r=d(yf,{optional:!0}),o=d(Mo,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new un(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=j0);let e=this._overlayRef=ci(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!dt(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Ye(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new hn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Eo(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof or?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof or?this.origin.elementRef.nativeElement:this.origin instanceof H?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Pm(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",ee],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",ee],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",ee],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",ee],push:[2,"cdkConnectedOverlayPush","push",ee],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",ee],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",ee],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ft]})}return i})(),pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:[vf],imports:[de,Ss,nd,nd]})}return i})();var V0=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],H0=["mat-icon, [matMenuItemIcon]","*"];function W0(i,n){i&1&&(Rr(),u(0,"svg",2),S(1,"polygon",3),h())}var q0=["*"];function $0(i,n){if(i&1){let e=Nt();Pt(0,"div",0),Zm("click",function(){at(e);let r=W();return st(r.closed.emit("click"))})("animationstart",function(r){at(e);let o=W();return st(o._onAnimationStart(r.animationName))})("animationend",function(r){at(e);let o=W();return st(o._onAnimationDone(r.animationName))})("animationcancel",function(r){at(e);let o=W();return st(o._onAnimationDone(r.animationName))}),Pt(1,"div",1),L(2),qt()()}if(i&2){let e=W();St(e._classList),G("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Sn("id",e.panelId),he("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ld=new w("MAT_MENU_PANEL"),sd=(()=>{class i{_elementRef=d(H);_document=d($);_focusMonitor=d(En);_parentMenu=d(ld,{optional:!0});_changeDetectorRef=d(Te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new E;_focused=new E;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(Ve).load(Tn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&ce("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(he("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),G("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ee],disableRipple:[2,"disableRipple","disableRipple",ee]},exportAs:["matMenuItem"],ngContentSelectors:H0,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(ge(V0),L(0),u(1,"span",0),L(2,1),h(),S(3,"div",1),K(4,W0,2,0,":svg:svg",2)),t&2&&(x(3),oe("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),x(),Y(r._triggersSubmenu?4:-1))},dependencies:[za],encapsulation:2})}return i})();var G0=new w("MatMenuContent");var K0=new w("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ad="_mat-menu-enter",Ps="_mat-menu-exit",lr=(()=>{class i{_elementRef=d(H);_changeDetectorRef=d(Te);_injector=d(ie);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ke();_allItems;_directDescendantItems=new Gn;_classList={};_panelAnimationState="void";_animationDone=new E;_isAnimating=te(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=v({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new re;close=this.closed;panelId=d(He).getId("mat-menu-panel-");constructor(){let e=d(K0);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new no(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($e(this._directDescendantItems),we(e=>ot(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe($e(this._directDescendantItems),we(t=>ot(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:dt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ge(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=je(v({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ps;(t||e===ad)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ad||e===Ps)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ps),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ad:Ps)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe($e(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&et(o,G0,5)(o,sd,5)(o,sd,4),t&2){let a;z(a=j())&&(r.lazyContent=a.first),z(a=j())&&(r._allItems=a),z(a=j())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&Fe(Cn,5),t&2){let o;z(o=j())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&he("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ee],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ee(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ie([{provide:ld,useExisting:i}])],ngContentSelectors:q0,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(ge(),Qm(0,$0,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})(),Y0=new w("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(ie);return()=>li(i)}});var sr=new WeakMap,Q0=(()=>{class i{_canHaveBackdrop;_element=d(H);_viewContainerRef=d(rn);_menuItemInstance=d(sd,{optional:!0,self:!0});_dir=d(nt,{optional:!0});_focusMonitor=d(En);_ngZone=d(R);_injector=d(ie);_scrollStrategy=d(Y0);_changeDetectorRef=d(Te);_animationsDisabled=ke();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=De.EMPTY;_menuCloseSubscription=De.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=d(ld,{optional:!0});this._parentMaterialMenu=t instanceof lr?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&sr.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=sr.get(t);sr.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof lr&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ue(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof lr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Ae(1)).subscribe(()=>{t.detach(),sr.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&sr.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ci(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof lr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new hn({positionStrategy:Eo(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[m,p]=[r,o],g=0;if(this._triggersSubmenu()){if(p=r=e.xPosition==="before"?"start":"end",o=m=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let b=this._parentMaterialMenu.items.first;this._parentInnerPadding=b?b._getHostElement().offsetTop:0}g=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:l,overlayX:m,overlayY:a,offsetY:g},{originX:o,originY:l,overlayX:p,overlayY:a,offsetY:g},{originX:r,originY:c,overlayX:m,overlayY:s,offsetY:-g},{originX:o,originY:c,overlayX:p,overlayY:s,offsetY:-g}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:B(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(le(a=>this._menuOpen&&a!==this._menuItemInstance)):B();return ot(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new un(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return sr.get(e)===this}_triggerIsAriaDisabled(){return ee(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Ti()};static \u0275dir=F({type:i})}return i})(),wf=(()=>{class i extends Q0{_cleanupTouchstart;_hoverSubscription=De.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d(Oe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Xn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Qn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&ce("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&he("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ee]})}return i})();var xf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Rn,pn,de,Bt]})}return i})();function Z0(i,n){if(i&1&&(S(0,"i",1),u(1,"mat-menu",null,0)(3,"div",2),f(4),h()()),i&2){let e=Gt(2),t=W();oe("matMenuTriggerFor",e),x(4),_t(" ",t.e.description," ")}}var Cf=(()=>{class i{constructor(){this.e={title:"",date:new Date,description:""}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-experience"]],inputs:{e:"e"},standalone:!1,decls:5,vars:5,consts:[["menu","matMenu"],[1,"ms-2","bi","bi-info-circle",3,"matMenuTriggerFor"],[1,"p-3"]],template:function(t,r){t&1&&(f(0),u(1,"strong"),f(2),nu(3,"date"),h(),K(4,Z0,5,2)),t&2&&(_t("",r.e.title," on "),x(2),ct(iu(3,3,r.e.date)),x(2),Y(r.e.description?4:-1))},dependencies:[lr,wf,yu],encapsulation:2,changeDetection:1})}}return i})();var ew=["cvButton"],tw=["cvButtonDe"];function nw(i,n){if(i&1&&(u(0,"li"),S(1,"app-experience",11),h()),i&2){let e=n.$implicit;x(),oe("e",e)}}function iw(i,n){if(i&1&&(u(0,"ul"),Ot(1,nw,2,1,"li",null,At),h()),i&2){let e=W().$implicit;x(),It(e.experiences)}}function rw(i,n){if(i&1&&(u(0,"div")(1,"div",10)(2,"h2"),f(3),h(),K(4,iw,3,0,"ul"),h()()),i&2){let e=n.$implicit,t=n.$index;St("container "+(t%2===0?"left":"right")),x(3),ct(e.year),x(),Y(e.experiences?4:-1)}}var Sf=(()=>{class i{constructor(e){this.http=e,this.experiences=Jc.sort((t,r)=>r.year-t.year),Jc.forEach(t=>{t.experiences&&(t.experiences=t.experiences.sort((r,o)=>o.date?.getTime()-r.date?.getTime()))})}ngOnInit(){let e=new URLSearchParams(window.location.search),t=e.get("openCV"),r=e.get("lang");t&&setTimeout(()=>{r==="de"?this.cvButtonDe?._elementRef.nativeElement.click():this.cvButton?._elementRef.nativeElement.click(),window.history.replaceState({},"",window.location.pathname)},20)}openCV(e){this.http.get("/assets/"+e,{responseType:"blob"}).subscribe(t=>{let r=URL.createObjectURL(t);window.open(r,"_blank")})}static{this.\u0275fac=function(t){return new(t||i)(lt(Pi))}}static{this.\u0275cmp=M({type:i,selectors:[["app-experiences"]],viewQuery:function(t,r){if(t&1&&Fe(ew,5)(tw,5),t&2){let o;z(o=j())&&(r.cvButton=o.first),z(o=j())&&(r.cvButtonDe=o.first)}},standalone:!1,decls:19,vars:0,consts:[["cvButton",""],["cvButtonDe",""],["appearance","outlined",1,"shadow"],[1,"my-2"],["href",`https://www.sap.com/germany
      `,"target","_blank","rel","nofollow"],["mat-flat-button","","color","primary","aria-label","icon for cv",1,"me-2",3,"click"],[1,"ms-1","bi","bi-file-earmark-text"],["mat-flat-button","","color","primary","aria-label","icon for cv",3,"click"],[1,"timeline","py-3"],[3,"class"],[1,"content","shadow"],[3,"e"]],template:function(t,r){t&1&&(u(0,"mat-card",2),S(1,"mat-card-header"),u(2,"mat-card-content",3)(3,"p"),f(4," Currently working as a Consultant for "),u(5,"a",4),f(6,"SAP"),h(),f(7,". I specialize in process analytics, providing clients with valuable insights to optimize their operational business processes. I contribute to designing strategies that enhance data management and value realization, facilitate cross-functional collaboration and foster innovation in data analytics. "),h(),u(8,"button",5,0),ce("click",function(){return r.openCV("CV Ben Lakhoune.pdf")}),f(10," Open CV"),S(11,"i",6),h(),u(12,"button",7,1),ce("click",function(){return r.openCV("Ben Lakhoune Lebenslauf.pdf")}),f(14," Lebenslauf \xF6ffnen"),S(15,"i",6),h()()(),u(16,"div",8),Ot(17,rw,5,4,"div",9,At),h()),t&2&&(x(17),It(r.experiences))},dependencies:[Dn,Fn,er,tr,Cf],styles:['.timeline[_ngcontent-%COMP%]{position:relative;margin:0 auto;border-radius:0 0 7px 7px}.timeline[_ngcontent-%COMP%]:after{content:"";position:absolute;width:6px;background-color:#0097a7;top:0;bottom:0;left:50%}.container[_ngcontent-%COMP%]{margin:0;padding:10px 40px;position:relative;background-color:inherit;width:50%}.container[_ngcontent-%COMP%]:after{content:"";position:absolute;width:25px;height:25px;right:-17px;background-color:#fff;border:4px solid #ff6f00;top:15px;border-radius:50%;z-index:1}.left[_ngcontent-%COMP%]{left:0;padding-left:0}.right[_ngcontent-%COMP%]{left:50%;padding-right:0}.left[_ngcontent-%COMP%]:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;right:30px;border:medium solid white;border-width:10px 0 10px 10px;border-color:transparent transparent transparent white}.right[_ngcontent-%COMP%]:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;left:30px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent}.right[_ngcontent-%COMP%]:after{left:-10px}.content[_ngcontent-%COMP%]{padding:20px 30px;background-color:#fff;position:relative;border-radius:6px}@media screen and (max-width:600px){.timeline[_ngcontent-%COMP%]:after{left:31px;border-radius:0 0 7px 7px}.container[_ngcontent-%COMP%]{width:100%;padding-left:70px;padding-right:25px}.container[_ngcontent-%COMP%]:before{left:60px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent}.left[_ngcontent-%COMP%]:after, .right[_ngcontent-%COMP%]:after{left:21px}.right[_ngcontent-%COMP%]{left:0%;padding-right:0}.left[_ngcontent-%COMP%]{padding-right:0}}'],changeDetection:1})}}return i})();var Ns=(()=>{class i{constructor(){}ngOnInit(){}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-home"]],standalone:!1,decls:14,vars:0,consts:[[1,"container"],[1,"container-fluid","d-flex","justify-items-center"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"section")(2,"h2"),f(3,"About me"),h(),S(4,"app-about-me"),h(),u(5,"section")(6,"h2"),f(7,"Experience"),h(),S(8,"app-experiences"),h()(),u(9,"section")(10,"div",1),S(11,"app-projects"),h()(),S(12,"app-socials")(13,"br"))},dependencies:[Zp,Jp,tf,Sf],encapsulation:2,changeDetection:1})}}return i})();var Gg=_b(Sg());var Jw=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})(),ex={passive:!0},kg=(()=>{class i{_platform=d(se);_ngZone=d(R);_renderer=d(Ke).createRenderer(null,null);_styleLoader=d(Ve);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return rt;this._styleLoader.load(Jw);let t=tt(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new E,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,ex)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=tt(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Eg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({})}return i})();var Mg=new w("MAT_INPUT_VALUE_ACCESSOR");var Od=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new qe(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(le(e=>e.some(t=>t.target===n)),Dl({bufferSize:1,refCount:!0}),ue(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Tg=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=d(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Od(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var tx=["notch"],nx=["*"],Rg=["iconPrefixContainer"],Dg=["textPrefixContainer"],Ag=["iconSuffixContainer"],Og=["textSuffixContainer"],ix=["textField"],rx=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ox=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ax(i,n){i&1&&S(0,"span",21)}function sx(i,n){if(i&1&&(u(0,"label",20),L(1,1),K(2,ax,1,0,"span",21),h()),i&2){let e=W(2);oe("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),he("for",e._control.disableAutomaticLabeling?null:e._control.id),x(2),Y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function lx(i,n){if(i&1&&K(0,sx,3,5,"label",20),i&2){let e=W();Y(e._hasFloatingLabel()?0:-1)}}function cx(i,n){i&1&&S(0,"div",7)}function dx(i,n){}function mx(i,n){if(i&1&&on(0,dx,0,0,"ng-template",13),i&2){W(2);let e=Gt(1);oe("ngTemplateOutlet",e)}}function ux(i,n){if(i&1&&(u(0,"div",9),K(1,mx,1,1,null,13),h()),i&2){let e=W();oe("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),x(),Y(e._forceDisplayInfixLabel()?-1:1)}}function hx(i,n){i&1&&(u(0,"div",10,2),L(2,2),h())}function px(i,n){i&1&&(u(0,"div",11,3),L(2,3),h())}function fx(i,n){}function gx(i,n){if(i&1&&on(0,fx,0,0,"ng-template",13),i&2){W();let e=Gt(1);oe("ngTemplateOutlet",e)}}function _x(i,n){i&1&&(u(0,"div",14,4),L(2,4),h())}function bx(i,n){i&1&&(u(0,"div",15,5),L(2,5),h())}function vx(i,n){i&1&&S(0,"div",16)}function yx(i,n){i&1&&(u(0,"div",18),L(1,6),h())}function wx(i,n){if(i&1&&(u(0,"mat-hint",22),f(1),h()),i&2){let e=W(2);oe("id",e._hintLabelId),x(),ct(e.hintLabel)}}function xx(i,n){if(i&1&&(u(0,"div",19),K(1,wx,2,2,"mat-hint",22),L(2,7),S(3,"div",23),L(4,8),h()),i&2){let e=W();x(),Y(e.hintLabel?1:-1)}}var gr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-label"]]})}return i})(),Cx=new w("MatError");var _r=(()=>{class i{align="start";id=d(He).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Sn("id",r.id),he("align",null),G("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Sx=new w("MatPrefix");var kx=new w("MatSuffix");var zg=new w("FloatingLabelParent"),Ig=(()=>{class i{_elementRef=d(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(Tg);_ngZone=d(R);_parent=d(zg);_resizeSubscription=new De;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ex(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&G("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Ex(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Pg="mdc-line-ripple--active",Gs="mdc-line-ripple--deactivating",Ng=(()=>{class i{_elementRef=d(H);_cleanupTransitionEnd;constructor(){let e=d(R),t=d(Oe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Gs),e.add(Pg)}deactivate(){this._elementRef.nativeElement.classList.add(Gs)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Gs);e.propertyName==="opacity"&&r&&t.remove(Pg,Gs)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Fg=(()=>{class i{_elementRef=d(H);_ngZone=d(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Fe(tx,5),t&2){let o;z(o=j())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&G("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:nx,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(ge(),$t(0,"div",1),Pt(1,"div",2,0),L(3),qt(),$t(4,"div",3))},encapsulation:2})}return i})(),Fo=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i})}return i})();var Lo=new w("MatFormField"),Mx=new w("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Lg="fill",Tx="auto",Bg="fixed",Rx="translateY(-50%)",Bo=(()=>{class i{_elementRef=d(H);_changeDetectorRef=d(Te);_platform=d(se);_idGenerator=d(He);_ngZone=d(R);_defaults=d(Mx,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fr("iconPrefixContainer");_textPrefixContainerSignal=Fr("textPrefixContainer");_iconSuffixContainerSignal=Fr("iconSuffixContainer");_textSuffixContainerSignal=Fr("textSuffixContainer");_prefixSuffixContainers=Kn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=au(gr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Le(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Tx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Lg;this._appearanceSignal.set(t)}_appearanceSignal=te(Lg);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Bg}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Bg}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ke();constructor(){let e=this._defaults,t=d(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Wn(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Kn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe($e([void 0,void 0]),Z(()=>[t.errorState,t.userAriaDescribedBy]),Rl(),le(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ue(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ot(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){du({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Kn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",p=`${a+s}px`,b=`calc(${m} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${Rx} translateX(${b}))`,y=a+s+l+c;return[_,y]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Jm(o,r._labelChild,gr,5),et(o,Fo,5)(o,Sx,5)(o,kx,5)(o,Cx,5)(o,_r,5)),t&2){Ll();let a;z(a=j())&&(r._formFieldControl=a.first),z(a=j())&&(r._prefixChildren=a),z(a=j())&&(r._suffixChildren=a),z(a=j())&&(r._errorChildren=a),z(a=j())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(eu(r._iconPrefixContainerSignal,Rg,5)(r._textPrefixContainerSignal,Dg,5)(r._iconSuffixContainerSignal,Ag,5)(r._textSuffixContainerSignal,Og,5),Fe(ix,5)(Rg,5)(Dg,5)(Ag,5)(Og,5)(Ig,5)(Fg,5)(Ng,5)),t&2){Ll(4);let o;z(o=j())&&(r._textField=o.first),z(o=j())&&(r._iconPrefixContainer=o.first),z(o=j())&&(r._textPrefixContainer=o.first),z(o=j())&&(r._iconSuffixContainer=o.first),z(o=j())&&(r._textSuffixContainer=o.first),z(o=j())&&(r._floatingLabel=o.first),z(o=j())&&(r._notchedOutline=o.first),z(o=j())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&G("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ie([{provide:Lo,useExisting:i},{provide:zg,useExisting:i}])],ngContentSelectors:ox,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(ge(rx),on(0,lx,1,1,"ng-template",null,0,Bl),u(2,"div",6,1),ce("click",function(a){return r._control.onContainerClick(a)}),K(4,cx,1,0,"div",7),u(5,"div",8),K(6,ux,2,2,"div",9),K(7,hx,3,0,"div",10),K(8,px,3,0,"div",11),u(9,"div",12),K(10,gx,1,1,null,13),L(11),h(),K(12,_x,3,0,"div",14),K(13,bx,3,0,"div",15),h(),K(14,vx,1,0,"div",16),h(),u(15,"div",17),K(16,yx,2,0,"div",18)(17,xx,5,1,"div",19),h()),t&2){let o;x(2),G("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),x(2),Y(!r._hasOutline()&&!r._control.disabled?4:-1),x(2),Y(r._hasOutline()?6:-1),x(),Y(r._hasIconPrefix?7:-1),x(),Y(r._hasTextPrefix?8:-1),x(2),Y(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),x(2),Y(r._hasTextSuffix?12:-1),x(),Y(r._hasIconSuffix?13:-1),x(),Y(r._hasOutline()?-1:14),x(),G("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();x(),Y((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ig,Fg,vu,Ng,_r],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return i})();var Ks=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var br=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var pi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Li,Bo,de]})}return i})();var Ix=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Px=new w("MAT_INPUT_CONFIG"),jg=(()=>{class i{_elementRef=d(H);_platform=d(se);ngControl=d(ha,{optional:!0,self:!0});_autofillMonitor=d(kg);_ngZone=d(R);_formField=d(Lo,{optional:!0});_renderer=d(Oe);_uid=d(He).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(Px,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Le(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Yn.required)??!1}set required(e){this._required=Le(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&gc().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Le(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>gc().has(e));constructor(){let e=d(pa,{optional:!0}),t=d(Di,{optional:!0}),r=d(Ks),o=d(Mg,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new br(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Wn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ix.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&ce("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Sn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),he("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),G("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee]},exportAs:["matInput"],features:[Ie([{provide:Fo,useExisting:i}]),ft]})}return i})(),Ug=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[pi,pi,Eg,de]})}return i})();var zo=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Vg=(()=>{class i{_animationsDisabled=ke();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&G("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return i})();var Fx=["text"],Lx=[[["mat-icon"]],"*"],Bx=["mat-icon","*"];function zx(i,n){if(i&1&&S(0,"mat-pseudo-checkbox",1),i&2){let e=W();oe("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function jx(i,n){if(i&1&&S(0,"mat-pseudo-checkbox",3),i&2){let e=W();oe("disabled",e.disabled)}}function Ux(i,n){if(i&1&&(u(0,"span",4),f(1),h()),i&2){let e=W();x(),_t("(",e.group.label,")")}}var Pd=new w("MAT_OPTION_PARENT_COMPONENT"),Nd=new w("MatOptgroup");var Id=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},vr=(()=>{class i{_element=d(H);_changeDetectorRef=d(Te);_parent=d(Pd,{optional:!0});group=d(Nd,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(He).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=te(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new re;_text;_stateChanges=new E;constructor(){let e=d(Ve);e.load(Tn),e.load(Oa),this._signalDisableRipple=!!this._parent&&qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!dt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Id(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Fe(Fx,7),t&2){let o;z(o=j())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&ce("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Sn("id",r.id),he("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),G("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ee]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Bx,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(ge(Lx),K(0,zx,1,2,"mat-pseudo-checkbox",1),L(1),u(2,"span",2,0),L(4,1),h(),K(5,jx,1,1,"mat-pseudo-checkbox",3),K(6,Ux,2,1,"span",4),S(7,"div",5)),t&2&&(Y(r.multiple?0:-1),x(5),Y(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),x(),Y(r.group&&r.group._inert?6:-1),x(),oe("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Vg,za],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return i})();function Hg(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Wg(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Ys=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de]})}return i})();var Fd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Rn,Ys,vr,de]})}return i})();var Vx=["trigger"],Hx=["panel"],Wx=[[["mat-select-trigger"]],"*"],qx=["mat-select-trigger","*"];function $x(i,n){if(i&1&&(u(0,"span",4),f(1),h()),i&2){let e=W();x(),ct(e.placeholder)}}function Gx(i,n){i&1&&L(0)}function Kx(i,n){if(i&1&&(u(0,"span",11),f(1),h()),i&2){let e=W(2);x(),ct(e.triggerValue)}}function Yx(i,n){if(i&1&&(u(0,"span",5),K(1,Gx,1,0)(2,Kx,2,1,"span",11),h()),i&2){let e=W();x(),Y(e.customTrigger?1:2)}}function Qx(i,n){if(i&1){let e=Nt();u(0,"div",12,1),ce("keydown",function(r){at(e);let o=W();return st(o._handleKeydown(r))}),L(2,1),h()}if(i&2){let e=W();St(e.panelClass),G("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),he("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Xx=new w("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(ie);return()=>li(i)}}),Zx=new w("MAT_SELECT_CONFIG"),Jx=new w("MatSelectTrigger"),Ld=class{source;value;constructor(n,e){this.source=n,this.value=e}},qg=(()=>{class i{_viewportRuler=d(Jt);_changeDetectorRef=d(Te);_elementRef=d(H);_dir=d(nt,{optional:!0});_idGenerator=d(He);_renderer=d(Oe);_parentFormField=d(Lo,{optional:!0});ngControl=d(ha,{self:!0,optional:!0});_liveAnnouncer=d(Qr);_defaultOptions=d(Zx,{optional:!0});_animationsDisabled=ke();_popoverLocation;_initialized=new E;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Hg(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Wg(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ld(this,e)}_scrollStrategyFactory=d(Xx);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new E;_errorStateTracker;stateChanges=new E;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=te(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Yn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=yi(()=>{let e=this.options;return e?e.changes.pipe($e(e),we(()=>ot(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(we(()=>this.optionSelectionChanges))});openedChange=new re;_openedStream=this.openedChange.pipe(le(e=>e),Z(()=>{}));_closedStream=this.openedChange.pipe(le(e=>!e),Z(()=>{}));selectionChange=new re;valueChange=new re;constructor(){let e=d(Ks),t=d(pa,{optional:!0}),r=d(Di,{optional:!0}),o=d(new ca("tabindex"),{optional:!0}),a=d(Mo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new br(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new zo(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ue(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ue(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe($e(null),ue(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ae(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&pc(this._trackedModal,"aria-owns",t),Th(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;pc(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!dt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!dt(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!dt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof or?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new to(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ot(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ue(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ot(...this.options.map(t=>t._stateChanges)).pipe(ue(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ye(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&et(o,Jx,5)(o,vr,5)(o,Nd,5),t&2){let a;z(a=j())&&(r.customTrigger=a.first),z(a=j())&&(r.options=a),z(a=j())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Fe(Vx,5)(Hx,5)(Is,5),t&2){let o;z(o=j())&&(r.trigger=o.first),z(o=j())&&(r.panel=o.first),z(o=j())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&ce("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(he("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),G("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",ee],disableRipple:[2,"disableRipple","disableRipple",ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Lr(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ee],placeholder:"placeholder",required:[2,"required","required",ee],multiple:[2,"multiple","multiple",ee],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",ee],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Lr],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",ee]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ie([{provide:Fo,useExisting:i},{provide:Pd,useExisting:i}]),ft],ngContentSelectors:qx,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(ge(Wx),u(0,"div",2,0),ce("click",function(){return r.open()}),u(3,"div",3),K(4,$x,2,1,"span",4)(5,Yx,3,1,"span",5),h(),u(6,"div",6)(7,"div",7),Rr(),u(8,"svg",8),S(9,"path",9),h()()()(),on(10,Qx,3,16,"ng-template",10),ce("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=Gt(1);x(3),he("id",r._valueId),x(),Y(r.empty?4:5),x(6),oe("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[or,Is],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return i})();var $g=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[pn,Fd,de,Bt,pi,Fd]})}return i})();function tC(i,n){if(i&1&&(u(0,"mat-option",6),f(1),h()),i&2){let e=n.$implicit;oe("value",e),x(),ct(e)}}var Kg=(()=>{class i{constructor(e){this.fb=e,this.form=this.fb.group({ssid:["",Yn.required],password:["",Yn.required],encryption:["WPA"]}),this.supportedEncryptions=["WPA","WEP","WPA2-EAP"],this.showInstallButton=!1,this.installApp=()=>{}}generateQR(){return ye(this,null,function*(){let e=`WIFI:T:${this.form.value.encryption};S:${this.form.value.ssid};P:${this.form.value.password};`,t=yield(0,Gg.toDataURL)(e),r=document.createElement("a");r.href=t,r.download="wifi-qr.png",r.click()})}ngOnInit(){window.addEventListener("beforeinstallprompt",e=>{console.log("ee"),e.preventDefault(),this.showInstallButton=!0;let t=e;this.installApp=()=>{t.prompt(),t.userChoice.then(r=>{r.outcome==="accepted"?console.log("App installed"):console.log("App not installed")}),this.showInstallButton=!1}})}static{this.\u0275fac=function(t){return new(t||i)(lt(Au))}}static{this.\u0275cmp=M({type:i,selectors:[["app-wifi-qr"]],standalone:!1,decls:26,vars:3,consts:[[1,"container","row","mx-auto"],["appearance","outlined"],[1,"d-flex","flex-column",3,"submit","formGroup"],["matInput","","formControlName","ssid","required",""],["matInput","","placeholder","password","type","password","formControlName","password"],["formControlName","encryption"],[3,"value"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"h2"),f(2,"QR code Generator"),h(),f(3," Generate a QR code for your WiFi network. Print it out and share it with your friends. "),u(4,"mat-card",1)(5,"form",2),ce("submit",function(){return r.generateQR()}),u(6,"mat-form-field")(7,"mat-label"),f(8,"Wifi name (ssid)"),h(),S(9,"input",3),ra(),h(),S(10,"br"),u(11,"mat-form-field")(12,"mat-label"),f(13,"Wifi password"),h(),S(14,"input",4),ra(),u(15,"mat-hint"),f(16,"Your password is never sent to a server"),h()(),S(17,"br"),u(18,"mat-form-field")(19,"mat-label"),f(20,"Encryption Algorithm (optional)"),h(),u(21,"mat-select",5),Ot(22,tC,2,2,"mat-option",6,At),h(),ra(),h(),u(24,"button",7),f(25),h()()()()),t&2&&(x(5),oe("formGroup",r.form),x(4),oa(),x(5),oa(),x(7),oa(),x(),It(r.supportedEncryptions),x(2),oe("disabled",!r.form.valid),x(),_t(" ",r.form.valid?"Generate QR code":"Please enter your wifi name and password"," "))},dependencies:[Dn,Fn,jg,Bo,gr,_r,qg,vr,Ru,ku,Mu,Tu,Eu,Di,Du],encapsulation:2,changeDetection:1})}}return i})();var Yg=(()=>{class i{constructor(e){this.router=e}canActivate(e,t){let r=e.queryParamMap.get("lang")||"de";return this.router.navigate(["/"],{queryParams:{openCV:"true",lang:r}}),!1}static{this.\u0275fac=function(t){return new(t||i)(q(Tt))}}static{this.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Qg=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-tokyo"]],standalone:!1,decls:242,vars:0,consts:[["id","124045fe-7b82-4c19-8fd0-2d3fca41e773",1,"page","sans","container"],[1,"page-title"],[1,"page-description"],[1,"page-body"],["id","b7ef049d-ad66-4600-aa97-340486849a7f",1,"bulleted-list"],[2,"list-style-type","disc"],[1,"highlight-blue_background"],["href","https://maps.app.goo.gl/LSuw8c2YHLbwVv5i6"],["href","https://maps.app.goo.gl/FA8LK5YaA6TxwiYg9"],["id","d7c90e58-4b5f-452c-857e-11178b80a029",1,""],["href","https://maps.app.goo.gl/6tSkJUxme7m7m8Kw7"],["id","49619d62-2b68-480e-942e-f18f0a76465a",1,""],["href","https://maps.app.goo.gl/hmtZ4m5SFEhTwtNc9"],["href","https://maps.app.goo.gl/nh9dtEgTpoisJeaf9"],["id","8cda407f-14a4-47ba-b708-4cd0dbacba63",1,""],["href","https://maps.app.goo.gl/Km8qUd5Di1GucyAF6"],["id","ed0c0af0-2395-4f57-9b6c-4b14d6b5fb37"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/asakusa-and-around/",1,"bookmark","source"],[1,"bookmark-info"],[1,"bookmark-text"],[1,"bookmark-title"],[1,"bookmark-description"],[1,"bookmark-href"],["src","https://www.japan.travel/static/apple-touch-icon.e36bdd4feef9.png",1,"icon","bookmark-icon"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1646013222/tokyo/H_00498_001",1,"bookmark-image"],["id","624b4eef-1b62-4214-824b-c55523f09337",1,"bulleted-list"],["href","https://maps.app.goo.gl/3HsurETaxNtBTo9XA"],["href","https://maps.app.goo.gl/1K5DP8jqFN53vFdr9"],["href","https://maps.app.goo.gl/v6gYxNYG1MPe7KSf8"],["href","https://maps.app.goo.gl/jSzjZFK11x7TS1KH6"],["href","https://maps.app.goo.gl/sUEJBVgyq5a5xXdP9"],["id","258a7762-b6f4-4bb2-9bf2-97fa06b6f3d6",1,""],["id","2e21c162-85bc-4218-ac20-b186ca89b06b"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/tokyo-station-and-marunouchi/",1,"bookmark","source"],["src","https://res-2.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24",1,"bookmark-image"],["id","7a482407-6abf-4f55-b2ae-f0dce8f3a2ce"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/ueno-and-akihabara/",1,"bookmark","source"],["src","https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513937406/tokyo/Tokyo2264_4",1,"bookmark-image"],["id","d9500b5d-77c1-4ac7-b31e-f5cb3a7ca8ad",1,"bulleted-list"],["href","https://maps.app.goo.gl/E3crBpj7sgmUbsha9"],["href","https://maps.app.goo.gl/iBeSsgCQkRrDWtsz7"],["id","5045c6af-6aa5-4aa2-9c84-ce0203290095",1,""],["href","https://maps.app.goo.gl/WJKDxjaAfMs5WdTA9"],["id","41733b37-262d-45eb-9431-f1fb6701e46d",1,""],["href","https://maps.app.goo.gl/WrtSXVDxRt38WgVk8"],["href","https://maps.app.goo.gl/fk3bD1SoEjkxG53Z8"],["id","eac2ec2f-cde0-49bf-8137-5b0c14f41d1f",1,""],["href","https://maps.app.goo.gl/RiTTKQWTDTighM8m8"],["href","https://maps.app.goo.gl/3VjWf2yLGejHNTYt9"],["id","25c1c46a-8244-4fa3-b8f6-6acf356d1f38",1,""],["href","https://maps.app.goo.gl/8yojCUAsePtfcgCAA"],["id","3608c37c-e823-4363-adba-e1d4baaf5477"],["href","https://www.japan.travel/en/spot/2174/",1,"bookmark","source"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513934486/tokyo/Tokyo2324_3",1,"bookmark-image"],["id","f324eee9-8178-4658-997a-55b5d057c957"],["href","https://www.japan.travel/en/spot/2109/",1,"bookmark","source"],["src","https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936730/tokyo/Tokyo2333_3",1,"bookmark-image"],["id","2d957306-0d40-44a7-9cdb-bf06523f1e2f",1,"bulleted-list"],["id","f2646cda-f630-4309-9248-4812007532f9",1,""],["href","https://maps.app.goo.gl/nBUR6ff1bm5jn8nh8"],["href","https://maps.app.goo.gl/82hSwDfSTETP6bHV7"],["href","https://maps.app.goo.gl/T9PxL9h7TXPV1UYu8"],["href","https://maps.app.goo.gl/72Lm9ZWnavx7xGi3A"],["id","cfb23545-7a12-4eae-b002-770a8c3a3847",1,""],["href","https://maps.app.goo.gl/QDCTeDsiBihoTdzAA"],["href","https://maps.app.goo.gl/7puUq8JZBpRupDXf9"],["href","https://maps.app.goo.gl/Kr6K5m8pqBkS2n2o6"],["href","https://maps.app.goo.gl/qR5qd2fDHsMq8Lub7"],["href","https://maps.app.goo.gl/bL8WmukX6fxzNUYB9"],["id","c40f94c3-bcf5-4afe-96bb-5bccf877d2d7",1,""],["href","https://maps.app.goo.gl/ped7evRwKDxs6hmu5"],["href","https://maps.app.goo.gl/eFNbv5zpW6ZZhMSV7"],["id","ac4ac2df-b201-4034-83e6-966c45a005dc"],["href","https://www.japan.travel/en/destinations/kanto/tokyo/nakameguro-and-around/",1,"bookmark","source"],["src","https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513938277/tokyo/Tokyo2330_2",1,"bookmark-image"],["id","88b59725-b4fa-4ca9-b7f7-83afd6a6ce73"],["href","https://www.japan.travel/de/destinations/kanto/tokyo/shinjuku/",1,"bookmark","source"],["src","https://res-4.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513945890/tokyo/Tokyo2335_10",1,"bookmark-image"],["id","3f7781bd-2da0-4c37-a502-de606b7fe526"],["id","a4486b0c-5f3c-4ad3-857b-2a38f76b3fd4",1,""],["href","https://lakhoune.com"],["id","07ec4e12-7989-4404-bf03-2b0d4d75871a",1,""]],template:function(t,r){t&1&&(u(0,"article",0)(1,"header")(2,"h1",1),f(3,"Tokyo: 4-day travel guide"),h(),S(4,"p",2),h(),u(5,"div",3)(6,"ul",4)(7,"li",5),f(8," Day 1: "),u(9,"mark",6)(10,"strong"),f(11,"Asakusa and Ginza"),h()(),f(12,": Asakusa has a lot of old temples and traditional snacks. Start at "),u(13,"a",7),f(14,"Nakamise-dori"),h(),f(15," street to make your way to the "),u(16,"a",8),f(17,"Asakusa shrine"),h(),u(18,"p",9),f(19," Try to get here early in the morning to avoid crowds. "),u(20,"a",10),f(21,"Shopping mall"),h()(),u(22,"p",11),f(23," Go to "),u(24,"a",12)(25,"strong"),f(26,"Ueno "),h()(),u(27,"a",12),f(28,"parc"),h(),f(29,". Make sure to visit the "),u(30,"a",13),f(31,"Toshogu Shrine"),h(),f(32," before 16:00. Walk by the river to get a nice view of Tokyo Sky Tree, the third highest building in the world. "),h(),u(33,"p",14),f(34," In the evening, travel to "),u(35,"a",15),f(36,"Tokyo Tower"),h(),f(37,". "),h(),u(38,"figure",16)(39,"a",17)(40,"div",18)(41,"div",19)(42,"div",20),f(43," Asakusa | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(44,"div",21),f(45,` Enter through the enormous bright-red Kaminarimon, meaning "thunder gate," and walk through whorls of incense smoke before leaving a traditional five-yen offering at the capital's iconic Sensoji Temple. `),h()(),u(46,"div",22),S(47,"img",23),f(48,"https://www.japan.travel/en/destinations/kanto/tokyo/asakusa-and-around/ "),h()(),S(49,"img",24),h()()()(),u(50,"ul",25)(51,"li",5),f(52," Day 2:"),S(53,"strong"),u(54,"mark",6)(55,"strong"),f(56,"Marunouchi"),h()(),f(57,": In Tokyo center visit the "),u(58,"a",26),f(59,"emperors palace"),h(),f(60,". Walk to the "),u(61,"a",27),f(62,"East Gardens"),h(),f(63,". Walk to the Ginza district to see the famous "),u(64,"a",28),f(65,"Ginza Scramble Crossing"),h(),f(66,". Nearby "),u(67,"a",29),f(68,"Revive Kitchen Three "),h(),f(69," is a good vegan restaurant. "),u(70,"a",30),f(71,"LLAB"),h(),f(72," is a pub where you can craft your own beer. "),u(73,"p",31),f(74," In the evening, travel to "),u(75,"mark",6)(76,"strong"),f(77,"Akihabara"),h()()(),u(78,"figure",32)(79,"a",33)(80,"div",18)(81,"div",19)(82,"div",20),f(83," Imperial Palace & Tokyo Station | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(84,"div",21),f(85," Tokyo Station and the surrounding Marunouchi district epitomize the contrasts between traditional and modern Japan. "),h()(),u(86,"div",22),S(87,"img",23),f(88,"https://www.japan.travel/en/destinations/kanto/tokyo/tokyo-station-and-marunouchi/ "),h()(),S(89,"img",34),h()(),u(90,"figure",35)(91,"a",36)(92,"div",18)(93,"div",19)(94,"div",20),f(95," Ueno & Akihabara | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(96,"div",21),f(97," Ueno and Akihabara are neighboring districts in Tokyo, but they couldn't be more different in style, substance and atmosphere. "),h()(),u(98,"div",22),S(99,"img",23),f(100,"https://www.japan.travel/en/destinations/kanto/tokyo/ueno-and-akihabara/ "),h()(),S(101,"img",37),h()()()(),u(102,"ul",38)(103,"li",5),f(104," Day 3: "),u(105,"mark",6)(106,"strong"),f(107,"Shibuya and Harajuku. "),h()(),f(108,"Start with Harajuku shopping district with nice vintage shops and sneaker shops. Walk to "),u(109,"a",39),f(110,"Takeshita St"),h(),f(111,". (very busy). Eat vegan ramen at "),u(112,"a",40),f(113,"AFURI Harajuku"),h(),f(114,". "),u(115,"p",41),f(116," Walk through "),u(117,"a",42),f(118,"Yoyogi Park"),h(),f(119,". "),h(),u(120,"p",43),f(121," Travel to Shibuya station. See the famous "),u(122,"a",44),f(123,"Shibuya Scramble Crossing"),h(),f(124,". Get a top down view of it from "),u(125,"a",45),f(126,"Shibuya Sky"),h(),f(127," (need to make reservation at least a month in advance) "),h(),u(128,"p",46),f(129," Go to "),u(130,"a",47),f(131,"Loft souvenir shop"),h(),f(132,". Go to "),u(133,"a",48),f(134,"Nintendo Tokyo shop"),h(),f(135,". The building has a great rooftop where you see over Shibuya. "),h(),u(136,"p",49),f(137," Go clubbing at "),u(138,"a",50),f(139,"Enter Shibuya"),h(),f(140," (techno club) "),h(),u(141,"figure",51)(142,"a",52)(143,"div",18)(144,"div",19)(145,"div",20),f(146," Harajuku | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(147,"div",21),f(148,` Home of Tokyo's streetwear and "kawaii" culture, Harajuku is a vivid blend of fashion trends, rainbow food and offbeat style, an easy stroll from Shibuya `),h()(),u(149,"div",22),S(150,"img",23),f(151,"https://www.japan.travel/en/spot/2174/ "),h()(),S(152,"img",53),h()(),u(153,"figure",54)(154,"a",55)(155,"div",18)(156,"div",19)(157,"div",20),f(158," Shibuya | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(159,"div",21),f(160," The lively hub of Shibuya is arguably the youth heart and soul of the city, and unmissable if you\u2019re visiting the Tokyo area. With world-famous sights including the iconic scramble crossing, this area is a must-see for nightlife and trendy youth culture. "),h()(),u(161,"div",22),S(162,"img",23),f(163,"https://www.japan.travel/en/spot/2109/ "),h()(),S(164,"img",56),h()()()(),u(165,"ul",57)(166,"li",5),f(167," Day 4:"),S(168,"strong"),u(169,"mark",6)(170,"strong"),f(171,"Nakameguro and Shinjuku"),h()(),u(172,"p",58),f(173," Visit Nakameguro only during cherry blossom season. Start at"),u(174,"a",59),f(175," Naka-Meguro Park"),h(),f(176,". Walk towards Meguro river towards "),u(177,"a",60),f(178,"Naka-Meguro Koukashita shopping mall"),h(),f(179,". Have the vegan curry for lunch at "),u(180,"a",61),f(181,"Alaska zwei"),h(),f(182,". Visit the "),u(183,"a",62),f(184,"Sky Garden"),h(),f(185,", on good days you can see the tip of Mt. Fuji "),h(),u(186,"p",63),f(187," Travel to Shinjuku, visit the "),u(188,"a",64),f(189,"National Garden"),h(),f(190," and the "),u(191,"a",65),f(192,"Government building"),h(),f(193,". Visit the "),u(194,"a",66),f(195,"Hanazono Shrine"),h(),f(196," and walk through "),u(197,"a",67),f(198,"Golden Gai"),h(),f(199," to enjoy small bars with less tourists. Visit the narrow "),u(200,"a",68),f(201,"Omoide Yokocho"),h(),f(202," street (crowded, very touristy). "),h(),u(203,"p",69),f(204," Have dinner at "),u(205,"a",70),f(206,"Vegan & Wine Bar Kiboko"),h(),f(207," (make reservation one day in advance). Alternatively, visit "),u(208,"a",71),f(209,"Doumo"),h(),f(210," for vegan burritos "),h(),u(211,"figure",72)(212,"a",73)(213,"div",18)(214,"div",19)(215,"div",20),f(216," Nakameguro | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site) "),h(),u(217,"div",21),f(218,' Nakameguro or "Naka-me," as it is colloquially known, strikes a distinctive balance between luxury and the bohemian. For scenery, shopping, hairstyling, dining, cafes, and art, this area is defined by its cool and sophisticated atmosphere. '),h()(),u(219,"div",22),S(220,"img",23),f(221,"https://www.japan.travel/en/destinations/kanto/tokyo/nakameguro-and-around/ "),h()(),S(222,"img",74),h()(),u(223,"figure",75)(224,"a",76)(225,"div",18)(226,"div",19)(227,"div",20),f(228,"TOKYO Reisef\xFChrer - Shinjuku"),h(),u(229,"div",21),f(230," Neben dem verkehrsreichsten Bahnhof der Welt hat Shinjuku viele Wolkenkratzer, den sch\xF6nen Shinjuku Gyoen Garten sowie ein gro\xDFes Shoppings- und Unterhaltungsangebot zu bieten. "),h()(),u(231,"div",22),S(232,"img",23),f(233,"https://www.japan.travel/de/destinations/kanto/tokyo/shinjuku/ "),h()(),S(234,"img",77),h()(),S(235,"hr",78),u(236,"p",79),f(237," Written by "),u(238,"a",80),f(239,"Ben Lakhoune"),h()(),S(240,"p",81),h()()()(),S(241,"br"))},styles:['html[_ngcontent-%COMP%]{-webkit-print-color-adjust:exact}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-print-color-adjust:exact}article[_ngcontent-%COMP%]{background-color:#fff;padding:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}@media only screen{body[_ngcontent-%COMP%]{margin:2em auto;max-width:900px;color:#37352f}}body[_ngcontent-%COMP%]{line-height:1.5;white-space:pre-wrap}a[_ngcontent-%COMP%], a.visited[_ngcontent-%COMP%]{color:inherit;text-decoration:underline}.pdf-relative-link-path[_ngcontent-%COMP%]{font-size:80%;color:#444}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{letter-spacing:-.01em;line-height:1.2;font-weight:600;margin-bottom:0}.page-title[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-top:0;margin-bottom:.75em}h1[_ngcontent-%COMP%]{font-size:1.875rem;margin-top:1.875rem}h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:1.25rem}.source[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:3px;padding:1.5em;word-break:break-all}.callout[_ngcontent-%COMP%]{border-radius:3px;padding:1rem}figure[_ngcontent-%COMP%]{margin:1.25em 0;page-break-inside:avoid}figcaption[_ngcontent-%COMP%]{opacity:.5;font-size:85%;margin-top:.5em}mark[_ngcontent-%COMP%]{background-color:transparent}.indented[_ngcontent-%COMP%]{padding-left:1.5em}hr[_ngcontent-%COMP%]{background:transparent;display:block;width:100%;height:1px;visibility:visible;border:none;border-bottom:1px solid rgba(55,53,47,.09)}img[_ngcontent-%COMP%]{max-width:100%}@media only print{img[_ngcontent-%COMP%]{max-height:100vh;object-fit:contain}}@page{margin:1in}.collection-content[_ngcontent-%COMP%]{font-size:.875rem}.column-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.column[_ngcontent-%COMP%]{padding:0 1em}.column[_ngcontent-%COMP%]:first-child{padding-left:0}.column[_ngcontent-%COMP%]:last-child{padding-right:0}.table_of_contents-item[_ngcontent-%COMP%]{display:block;font-size:.875rem;line-height:1.3;padding:.125rem}.table_of_contents-indent-1[_ngcontent-%COMP%]{margin-left:1.5rem}.table_of_contents-indent-2[_ngcontent-%COMP%]{margin-left:3rem}.table_of_contents-indent-3[_ngcontent-%COMP%]{margin-left:4.5rem}.table_of_contents-link[_ngcontent-%COMP%]{text-decoration:none;opacity:.7;border-bottom:1px solid rgba(55,53,47,.18)}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid rgba(55,53,47,.09);border-collapse:collapse}table[_ngcontent-%COMP%]{border-left:none;border-right:none}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400;padding:.25em .5em;line-height:1.5;min-height:1.5em;text-align:left}th[_ngcontent-%COMP%]{color:#37352f99}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;margin-block-start:.6em;margin-block-end:.6em}li[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%]:first-child, li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]:first-child{margin-block-start:.6em}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:disc}ul.to-do-list[_ngcontent-%COMP%]{padding-inline-start:0}ul.to-do-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none}.to-do-children-checked[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.375}ul.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]{padding-inline-start:1.7em}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding-left:.1em}ol[_ngcontent-%COMP%]{padding-inline-start:1.6em}ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding-left:.2em}.mono[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-inline-start:2em}.mono[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{text-indent:-.4em}.toggle[_ngcontent-%COMP%]{padding-inline-start:0em;list-style-type:none}.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > details[_ngcontent-%COMP%]{padding-left:1.7em}.toggle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > details[_ngcontent-%COMP%] > summary[_ngcontent-%COMP%]{margin-left:-1.1em}.selected-value[_ngcontent-%COMP%]{display:inline-block;padding:0 .5em;background:#cecdca80;border-radius:3px;margin-right:.5em;margin-top:.3em;margin-bottom:.3em;white-space:nowrap}.collection-title[_ngcontent-%COMP%]{display:inline-block;margin-right:1em}.page-description[_ngcontent-%COMP%]{margin-bottom:2em}.simple-table[_ngcontent-%COMP%]{margin-top:1em;font-size:.875rem;empty-cells:show}.simple-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .simple-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:29px;min-width:120px}.simple-table-header-color[_ngcontent-%COMP%]{background:#f7f6f3;color:#000}.simple-table-header[_ngcontent-%COMP%]{font-weight:500}time[_ngcontent-%COMP%]{opacity:.5}.icon[_ngcontent-%COMP%]{display:inline-block;max-width:1.2em;max-height:1.2em;text-decoration:none;vertical-align:text-bottom;margin-right:.5em}img.icon[_ngcontent-%COMP%]{border-radius:3px}.user-icon[_ngcontent-%COMP%]{width:1.5em;height:1.5em;border-radius:100%;margin-right:.5rem}.user-icon-inner[_ngcontent-%COMP%]{font-size:.8em}.text-icon[_ngcontent-%COMP%]{border:1px solid #000;text-align:center}.page-cover-image[_ngcontent-%COMP%]{display:block;object-fit:cover;width:100%;max-height:30vh}.page-header-icon[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem}.page-header-icon-with-cover[_ngcontent-%COMP%]{margin-top:-.72em;margin-left:.07em}.page-header-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:3px}.link-to-page[_ngcontent-%COMP%]{margin:1em 0;padding:0;border:none;font-weight:500}p[_ngcontent-%COMP%] > .user[_ngcontent-%COMP%]{opacity:.5}td[_ngcontent-%COMP%] > .user[_ngcontent-%COMP%], td[_ngcontent-%COMP%] > time[_ngcontent-%COMP%]{white-space:nowrap}input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.5);margin-right:.6em;vertical-align:middle}p[_ngcontent-%COMP%]{margin-top:.5em;margin-bottom:.5em}.image[_ngcontent-%COMP%]{border:none;margin:1.5em 0;padding:0;border-radius:0;text-align:center}.code[_ngcontent-%COMP%], code[_ngcontent-%COMP%]{background:#87837826;padding:.2em .4em;border-radius:3px;font-size:85%;tab-size:2}code[_ngcontent-%COMP%]{color:#eb5757}.code[_ngcontent-%COMP%]{padding:1.5em 1em}.code-wrap[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-all}.code[_ngcontent-%COMP%] > code[_ngcontent-%COMP%]{background:none;padding:0;font-size:100%;color:inherit}blockquote[_ngcontent-%COMP%]{font-size:1.25em;margin:1em 0;padding-left:1em;border-left:3px solid rgb(55,53,47)}.bookmark[_ngcontent-%COMP%]{text-decoration:none;max-height:8em;padding:0;display:flex;width:100%;align-items:stretch}.bookmark-title[_ngcontent-%COMP%]{font-size:.85em;overflow:hidden;text-overflow:ellipsis;height:1.75em;white-space:nowrap}.bookmark-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.bookmark-info[_ngcontent-%COMP%]{flex:4 1 180px;padding:12px 14px 14px;display:flex;flex-direction:column;justify-content:space-between}.bookmark-image[_ngcontent-%COMP%]{width:33%;flex:1 1 180px;display:block;position:relative;object-fit:cover;border-radius:1px}.bookmark-description[_ngcontent-%COMP%]{color:#37352f99;font-size:.75em;overflow:hidden;max-height:4.5em;word-break:break-word}.bookmark-href[_ngcontent-%COMP%]{font-size:.75em;margin-top:.25em}.sans[_ngcontent-%COMP%]{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol}.code[_ngcontent-%COMP%]{font-family:SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace}.serif[_ngcontent-%COMP%]{font-family:Lyon-Text,Georgia,ui-serif,serif}.mono[_ngcontent-%COMP%]{font-family:iawriter-mono,Nitti,Menlo,Courier,monospace}.pdf[_ngcontent-%COMP%]   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .sans[_ngcontent-%COMP%]{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol,Twemoji,"Noto Color Emoji",Noto Sans CJK KR}.pdf[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .code[_ngcontent-%COMP%]{font-family:Source Code Pro,SFMono-Regular,Menlo,Consolas,PT Mono,Liberation Mono,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK KR}.pdf[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK JP"}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK SC"}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK TC"}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .serif[_ngcontent-%COMP%]{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,"Twemoji","Noto Color Emoji","Noto Serif CJK KR"}.pdf[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK JP}.pdf[_ngcontent-%COMP%]:lang(zh-CN)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK SC}.pdf[_ngcontent-%COMP%]:lang(zh-TW)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK TC}.pdf[_ngcontent-%COMP%]:lang(ko-KR)   .mono[_ngcontent-%COMP%]{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,Twemoji,"Noto Color Emoji",Noto Sans Mono CJK KR}.highlight-default[_ngcontent-%COMP%]{color:#37352f}.highlight-gray[_ngcontent-%COMP%]{color:#787774;fill:#787774}.highlight-brown[_ngcontent-%COMP%]{color:#9f6b53;fill:#9f6b53}.highlight-orange[_ngcontent-%COMP%]{color:#d9730d;fill:#d9730d}.highlight-yellow[_ngcontent-%COMP%]{color:#cb912f;fill:#cb912f}.highlight-teal[_ngcontent-%COMP%]{color:#448361;fill:#448361}.highlight-blue[_ngcontent-%COMP%]{color:#337ea9;fill:#337ea9}.highlight-purple[_ngcontent-%COMP%]{color:#9065b0;fill:#9065b0}.highlight-pink[_ngcontent-%COMP%]{color:#c14c8a;fill:#c14c8a}.highlight-red[_ngcontent-%COMP%]{color:#d44c47;fill:#d44c47}.highlight-gray_background[_ngcontent-%COMP%]{background:#f1f1ef}.highlight-brown_background[_ngcontent-%COMP%]{background:#f4eeee}.highlight-orange_background[_ngcontent-%COMP%]{background:#fbecdd}.highlight-yellow_background[_ngcontent-%COMP%]{background:#fbf3db}.highlight-teal_background[_ngcontent-%COMP%]{background:#edf3ec}.highlight-blue_background[_ngcontent-%COMP%]{background:#e7f3f8}.highlight-purple_background[_ngcontent-%COMP%]{background:#f4f0f7cc}.highlight-pink_background[_ngcontent-%COMP%]{background:#f9eef3cc}.highlight-red_background[_ngcontent-%COMP%]{background:#fdebec}.block-color-default[_ngcontent-%COMP%]{color:inherit;fill:inherit}.block-color-gray[_ngcontent-%COMP%]{color:#787774;fill:#787774}.block-color-brown[_ngcontent-%COMP%]{color:#9f6b53;fill:#9f6b53}.block-color-orange[_ngcontent-%COMP%]{color:#d9730d;fill:#d9730d}.block-color-yellow[_ngcontent-%COMP%]{color:#cb912f;fill:#cb912f}.block-color-teal[_ngcontent-%COMP%]{color:#448361;fill:#448361}.block-color-blue[_ngcontent-%COMP%]{color:#337ea9;fill:#337ea9}.block-color-purple[_ngcontent-%COMP%]{color:#9065b0;fill:#9065b0}.block-color-pink[_ngcontent-%COMP%]{color:#c14c8a;fill:#c14c8a}.block-color-red[_ngcontent-%COMP%]{color:#d44c47;fill:#d44c47}.block-color-gray_background[_ngcontent-%COMP%]{background:#f1f1ef}.block-color-brown_background[_ngcontent-%COMP%]{background:#f4eeee}.block-color-orange_background[_ngcontent-%COMP%]{background:#fbecdd}.block-color-yellow_background[_ngcontent-%COMP%]{background:#fbf3db}.block-color-teal_background[_ngcontent-%COMP%]{background:#edf3ec}.block-color-blue_background[_ngcontent-%COMP%]{background:#e7f3f8}.block-color-purple_background[_ngcontent-%COMP%]{background:#f4f0f7cc}.block-color-pink_background[_ngcontent-%COMP%]{background:#f9eef3cc}.block-color-red_background[_ngcontent-%COMP%]{background:#fdebec}.select-value-color-uiBlue[_ngcontent-%COMP%]{background-color:#2383e212}.select-value-color-pink[_ngcontent-%COMP%]{background-color:#f5e0e9}.select-value-color-purple[_ngcontent-%COMP%]{background-color:#e8deee}.select-value-color-green[_ngcontent-%COMP%]{background-color:#dbeddb}.select-value-color-gray[_ngcontent-%COMP%]{background-color:#e3e2e0}.select-value-color-translucentGray[_ngcontent-%COMP%]{background-color:#ffffff0a}.select-value-color-orange[_ngcontent-%COMP%]{background-color:#fadec9}.select-value-color-brown[_ngcontent-%COMP%]{background-color:#eee0da}.select-value-color-red[_ngcontent-%COMP%]{background-color:#ffe2dd}.select-value-color-yellow[_ngcontent-%COMP%]{background-color:#fdecc8}.select-value-color-blue[_ngcontent-%COMP%]{background-color:#d3e5ef}.select-value-color-pageGlass[_ngcontent-%COMP%], .select-value-color-washGlass[_ngcontent-%COMP%]{background-color:undefined}.checkbox[_ngcontent-%COMP%]{display:inline-flex;vertical-align:text-bottom;width:16;height:16;background-size:16px;margin-left:2px;margin-right:5px}.checkbox-on[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E)}.checkbox-off[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E)}'],changeDetection:1})}}return i})();var nC=[{path:"",component:Ns},{path:"blog",children:[{path:"tokyo",component:Qg}]},{path:"wifi-qr",component:Kg},{path:"wg-planner",loadComponent:()=>import("./chunk-VUZ4H6GV.js").then(i=>i.WgPlannerComponent)},{path:"cv",redirectTo:"dummy",pathMatch:"full"},{path:"dummy",canActivate:[Yg],component:Ns},{path:"**",component:Ns}],Xg=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=P({type:i})}static{this.\u0275inj=I({imports:[vs.forRoot(nC),vs]})}}return i})();var yr={production:!0};function iC(i,n){if(i&1){let e=Nt();u(0,"div",1)(1,"button",2),ce("click",function(){at(e);let r=W();return st(r.action())}),f(2),h()()}if(i&2){let e=W();x(2),_t(" ",e.data.action," ")}}var rC=["label"];function oC(i,n){}var aC=Math.pow(2,31)-1,jo=class{_overlayRef;instance;containerInstance;_afterDismissed=new E;_afterOpened=new E;_onAction=new E;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,aC))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Zg=new w("MatSnackBarData"),wr=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},sC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),lC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),cC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Jg=(()=>{class i{snackBarRef=d(jo);data=d(Zg);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(u(0,"div",0),f(1),h(),K(2,iC,3,1,"div",1)),t&2&&(x(),_t(" ",r.data.message,`
`),x(),Y(r.hasAction?2:-1))},dependencies:[Dn,sC,lC,cC],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return i})(),Bd="_mat-snack-bar-enter",zd="_mat-snack-bar-exit",dC=(()=>{class i extends ir{_ngZone=d(R);_elementRef=d(H);_changeDetectorRef=d(Te);_platform=d(se);_animationsDisabled=ke();snackBarConfig=d(wr);_document=d($);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new E;_onExit=new E;_onEnter=new E;_animationState="void";_live;_label;_role;_liveElementId=d(He).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===zd?this._completeExit():e===Bd&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Bd)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Bd)},200)))}exit(){return this._destroyed?B(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zd)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(zd),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Fe(td,7)(rC,7),t&2){let o;z(o=j())&&(r._portalOutlet=o.first),z(o=j())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&ce("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&G("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ee],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),on(4,oC,0,0,"ng-template",4),h(),S(5,"div"),h()()),t&2&&(x(5),he("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[td],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return i})(),mC=new w("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new wr}),jd=(()=>{class i{_live=d(Qr);_injector=d(ie);_breakpointObserver=d(Yr);_parentSnackBar=d(i,{optional:!0,skipSelf:!0});_defaultConfig=d(mC);_animationsDisabled=ke();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Jg;snackBarContainerComponent=dC;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=v(v({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=ie.create({parent:r||this._injector,providers:[{provide:wr,useValue:t}]}),a=new nr(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=v(v(v({},new wr),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new jo(a,o);if(e instanceof Cn){let l=new un(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new nr(e,void 0,l),m=a.attachComponentPortal(c);s.instance=m.instance}return this._breakpointObserver.observe(Ah.HandsetPortrait).pipe(ue(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new hn;t.direction=e.direction;let r=Os(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,ci(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ie.create({parent:r||this._injector,providers:[{provide:jo,useValue:t},{provide:Zg,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var e_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:[jd],imports:[pn,Ss,Ua,Jg,de]})}return i})();var hC=["*",[["mat-toolbar-row"]]],pC=["*","mat-toolbar-row"],fC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),t_=(()=>{class i{_elementRef=d(H);_platform=d(se);_document=d($);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&et(o,fC,5),t&2){let a;z(a=j())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(St(r.color?"mat-"+r.color:""),G("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:pC,decls:2,vars:0,template:function(t,r){t&1&&(ge(hC),L(0),L(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return i})();var n_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de]})}return i})();var Zs=["*"],_C=["content"],bC=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],vC=["mat-drawer","mat-drawer-content","*"];function yC(i,n){if(i&1){let e=Nt();u(0,"div",1),ce("click",function(){at(e);let r=W();return st(r._onBackdropClicked())}),h()}if(i&2){let e=W();G("mat-drawer-shown",e._isShowingBackdrop())}}function wC(i,n){i&1&&(u(0,"mat-drawer-content"),L(1,2),h())}var xC=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],CC=["mat-sidenav","mat-sidenav-content","*"];function SC(i,n){if(i&1){let e=Nt();u(0,"div",1),ce("click",function(){at(e);let r=W();return st(r._onBackdropClicked())}),h()}if(i&2){let e=W();G("mat-drawer-shown",e._isShowingBackdrop())}}function kC(i,n){i&1&&(u(0,"mat-sidenav-content"),L(1,2),h())}var EC=`.mat-drawer-container {
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
`;var MC=new w("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Hd=new w("MAT_DRAWER_CONTAINER"),Qs=(()=>{class i extends rr{_platform=d(se);_changeDetectorRef=d(Te);_container=d(Vd);constructor(){let e=d(H),t=d(ai),r=d(R);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(Nr("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),G("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ie([{provide:rr,useExisting:i}]),Ee],ngContentSelectors:Zs,decls:1,vars:0,template:function(t,r){t&1&&(ge(),L(0))},encapsulation:2})}return i})(),Ud=(()=>{class i{_elementRef=d(H);_focusTrapFactory=d(mc);_focusMonitor=d(En);_platform=d(se);_ngZone=d(R);_renderer=d(Oe);_interactivityChecker=d(Na);_doc=d($);_container=d(Hd,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Le(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Le(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Le(e))}_opened=te(!1);_openedVia=null;_animationStarted=new E;_animationEnd=new E;openedChange=new re(!0);_openedStream=this.openedChange.pipe(le(e=>e),Z(()=>{}));openedStart=this._animationStarted.pipe(le(()=>this.opened),Tl(void 0));_closedStream=this.openedChange.pipe(le(e=>!e),Z(()=>{}));closedStart=this._animationStarted.pipe(le(()=>!this.opened),Tl(void 0));_destroyed=new E;onPositionChanged=new re;_content;_modeChanged=new E;_injector=d(ie);_changeDetectorRef=d(Te);constructor(){this.openedChange.pipe(ue(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!dt(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ge(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Ae(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&Fe(_C,5),t&2){let o;z(o=j())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(he("align",null)("tabIndex",r.mode!=="side"?"-1":null),Nr("visibility",!r._container&&!r.opened?"hidden":null),G("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Zs,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(ge(),u(0,"div",1,0),L(2),h())},dependencies:[rr],encapsulation:2})}return i})(),Vd=(()=>{class i{_dir=d(nt,{optional:!0});_element=d(H);_ngZone=d(R);_changeDetectorRef=d(Te);_animationDisabled=ke();_transitionsEnabled=!1;_allDrawers;_drawers=new Gn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Le(e)}_autosize=d(MC);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Le(e)}_backdropOverride=null;backdropClick=new re;_start=null;_end=null;_left=null;_right=null;_destroyed=new E;_doCheckSubject=new E;_contentMargins={left:null,right:null};_contentMarginChanges=new E;get scrollable(){return this._userContent||this._content}_injector=d(ie);constructor(){let e=d(se),t=d(Jt);this._dir?.change.pipe(ue(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ue(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe($e(this._allDrawers),ue(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe($e(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(yn(10),ue(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ue(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ue(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ue(this._drawers.changes)).subscribe(()=>{Ge({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ue(ot(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&et(o,Qs,5)(o,Ud,5),t&2){let a;z(a=j())&&(r._content=a.first),z(a=j())&&(r._allDrawers=a)}},viewQuery:function(t,r){if(t&1&&Fe(Qs,5),t&2){let o;z(o=j())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&G("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ie([{provide:Hd,useExisting:i}])],ngContentSelectors:vC,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(ge(bC),K(0,yC,1,2,"div",0),L(1),L(2,1),K(3,wC,2,0,"mat-drawer-content")),t&2&&(Y(r.hasBackdrop?0:-1),x(3),Y(r._content?-1:3))},dependencies:[Qs],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return i})(),Xs=(()=>{class i extends Qs{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ie([{provide:rr,useExisting:i}]),Ee],ngContentSelectors:Zs,decls:1,vars:0,template:function(t,r){t&1&&(ge(),L(0))},encapsulation:2})}return i})(),Wd=(()=>{class i extends Ud{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Le(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Qt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Qt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(he("tabIndex",r.mode!=="side"?"-1":null)("align",null),Nr("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),G("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ie([{provide:Ud,useExisting:i}]),Ee],ngContentSelectors:Zs,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(ge(),u(0,"div",1,0),L(2),h())},dependencies:[rr],encapsulation:2})}return i})(),i_=(()=>{class i extends Vd{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&et(o,Xs,5)(o,Wd,5),t&2){let a;z(a=j())&&(r._content=a.first),z(a=j())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&G("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ie([{provide:Hd,useExisting:i},{provide:Vd,useExisting:i}]),Ee],ngContentSelectors:CC,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(ge(xC),K(0,SC,1,2,"div",0),L(1),L(2,1),K(3,kC,2,0,"mat-sidenav-content")),t&2&&(Y(r.hasBackdrop?0:-1),x(3),Y(r._content?-1:3))},dependencies:[Xs],styles:[EC],encapsulation:2})}return i})(),r_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Bt,de,Bt]})}return i})();var o_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[de]})}return i})();var RC=["*"],DC=`.mdc-list {
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
`,AC=["unscopedContent"],OC=["text"],IC=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],PC=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var NC=new w("ListOption"),FC=(()=>{class i{_elementRef=d(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),LC=(()=>{class i{_elementRef=d(H);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),BC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),a_=(()=>{class i{_listOption=d(NC,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostVars:4,hostBindings:function(t,r){t&2&&G("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return i})(),zC=(()=>{class i extends a_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ee]})}return i})(),jC=(()=>{class i extends a_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ee]})}return i})(),UC=new w("MAT_LIST_CONFIG"),qd=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Le(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Le(e))}_disabled=te(!1);_defaultOptions=d(UC,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,hostVars:1,hostBindings:function(t,r){t&2&&he("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),VC=(()=>{class i{_elementRef=d(H);_ngZone=d(R);_listBase=d(qd,{optional:!0});_platform=d(se);_hostElement;_isButtonElement;_noopAnimations=ke();_avatars;_icons;set lines(e){this._explicitLines=Qt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Le(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Le(e))}_disabled=te(!1);_subscriptions=new De;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Ve).load(Tn);let e=d(ro,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ei(this,this._ngZone,this._hostElement,this._platform,d(ie)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,contentQueries:function(t,r,o){if(t&1&&et(o,zC,4)(o,jC,4),t&2){let a;z(a=j())&&(r._avatars=a),z(a=j())&&(r._icons=a)}},hostVars:4,hostBindings:function(t,r){t&2&&(he("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),G("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var s_=(()=>{class i extends VC{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Le(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,r,o){if(t&1&&et(o,LC,5)(o,FC,5)(o,BC,5),t&2){let a;z(a=j())&&(r._lines=a),z(a=j())&&(r._titles=a),z(a=j())&&(r._meta=a)}},viewQuery:function(t,r){if(t&1&&Fe(AC,5)(OC,5),t&2){let o;z(o=j())&&(r._unscopedContent=o.first),z(o=j())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,r){t&2&&(he("aria-current",r._getAriaCurrent()),G("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ee],ngContentSelectors:PC,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,r){t&1&&(ge(IC),L(0),u(1,"span",1),L(2,1),L(3,2),u(4,"span",2,0),ce("cdkObserveContent",function(){return r._updateItemLines(!0)}),L(6,3),h()(),L(7,4),L(8,5),S(9,"div",3))},dependencies:[bh],encapsulation:2})}return i})();var l_=(()=>{class i extends qd{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ct(i)))(r||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Ie([{provide:qd,useExisting:i}]),Ee],ngContentSelectors:RC,decls:1,vars:0,template:function(t,r){t&1&&(ge(),L(0))},styles:[DC],encapsulation:2})}return i})();var c_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[Li,Rn,Ys,de,o_]})}return i})();function WC(i,n){if(i&1&&(u(0,"span",4),f(1),h()),i&2){let e=W().$implicit;x(),_t(" ",e.icon," ")}}function qC(i,n){if(i&1&&(u(0,"a",5),K(1,WC,2,1,"span",4),u(2,"span"),f(3),h()()),i&2){let e=n.$implicit;oe("routerLink",tu(e.url)),x(),Y(e.icon?1:-1),x(2),_t(" ",e.name," ")}}var d_=(()=>{class i{constructor(e){this._snackBar=e,this.title="website",this.links=[{url:"/wifi-qr",icon:"qr_code_2",name:"Wifi QR Generator"},{url:"/wg-planner",icon:"calendar_month",name:"Chore Planner"},{url:"/blog/tokyo",name:"Tokyo Blog"}],this.environment=yr}onShare(){let e=window.location.href;document.body.focus(),navigator.clipboard.writeText(e).then(()=>{this._snackBar.open("Link copied to clipboard","Got it",{duration:2e3})}).catch(t=>{console.error("Error copying text: ",t)})}static{this.\u0275fac=function(t){return new(t||i)(lt(jd))}}static{this.\u0275cmp=M({type:i,selectors:[["app-root"]],standalone:!1,decls:32,vars:2,consts:[["drawer",""],[1,"example-container",3,"hasBackdrop"],["mode","push",3,"fixedInViewport"],["mat-list-item","","routerLink","/"],[1,"material-icons"],["mat-list-item","",3,"routerLink"],[1,"wrapper"],[1,"background"],[1,"sticky-top"],["mat-icon-button","","aria-label","icon-button with menu icon",1,"example-icon",3,"click"],["routerLink","/","id","website-header"],[1,"example-spacer"],["mat-icon-button","","aria-label","icon-button with share icon",3,"click"],[1,"bi","bi-share-fill","fs-4"],[1,"mt-2","h-100"],[1,"footer"],["href","https://github.com/lakhoune"],["href","http://www.freepik.com"]],template:function(t,r){if(t&1){let o=Nt();u(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-nav-list")(4,"a",3)(5,"span",4),f(6,"home"),h(),u(7,"span"),f(8,"Home"),h()(),Ot(9,qC,4,4,"a",5,At),h()(),u(11,"mat-sidenav-content")(12,"div",6),S(13,"div",7),u(14,"mat-toolbar",8)(15,"button",9),ce("click",function(){at(o);let s=Gt(2);return st(s.toggle())}),u(16,"span",4),f(17,"menu"),h()(),u(18,"a",10),f(19,"Lakhoune"),h(),S(20,"span",11),u(21,"button",12),ce("click",function(){return r.onShare()}),S(22,"i",13),h()(),u(23,"div",14),S(24,"router-outlet"),h(),u(25,"div",15),f(26," Designed by "),u(27,"a",16),f(28,"Ben Lakhoune"),h(),f(29,". Background designed by "),u(30,"a",17),f(31,"starline / Freepik"),h()()()()()}t&2&&(oe("hasBackdrop",!0),x(),oe("fixedInViewport",!0),x(8),It(r.links))},dependencies:[bo,bs,t_,xc,Wd,i_,Xs,l_,s_],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}#website-header[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.background[_ngcontent-%COMP%]{position:fixed;inset:0;background-image:url(/assets/19366.webp);background-size:cover;opacity:.4;z-index:-1}.background[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;bottom:0}mat-toolbar[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem #00000038;background-color:#0097a7;color:#fff}.wrapper[_ngcontent-%COMP%]{position:relative;min-height:100%}.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;bottom:0;z-index:-1}.socials[_ngcontent-%COMP%]{font-size:xx-large}mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}"],changeDetection:1})}}return i})();var ne=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(ne||{}),zt="*";function m_(i,n=null){return{type:ne.Sequence,steps:i,options:n}}function $d(i){return{type:ne.Style,styles:i,offset:null}}var gn=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},xr=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,t=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==o&&this._onFinish()}),a.onDestroy(()=>{++t==o&&this._onDestroy()}),a.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,s)=>Math.max(a,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(t=>{let r=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(r)})}getPosition(){let n=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Uo="!";function u_(i){return new C(3e3,!1)}function $C(){return new C(3100,!1)}function GC(){return new C(3101,!1)}function KC(i){return new C(3001,!1)}function YC(i){return new C(3003,!1)}function QC(i){return new C(3004,!1)}function p_(i,n){return new C(3005,!1)}function f_(){return new C(3006,!1)}function g_(){return new C(3007,!1)}function __(i,n){return new C(3008,!1)}function b_(i){return new C(3002,!1)}function v_(i,n,e,t,r){return new C(3010,!1)}function y_(){return new C(3011,!1)}function w_(){return new C(3012,!1)}function x_(){return new C(3200,!1)}function C_(){return new C(3202,!1)}function S_(){return new C(3013,!1)}function k_(i){return new C(3014,!1)}function E_(i){return new C(3015,!1)}function M_(i){return new C(3016,!1)}function T_(i,n){return new C(3404,!1)}function XC(i){return new C(3502,!1)}function R_(i){return new C(3503,!1)}function D_(){return new C(3300,!1)}function A_(i){return new C(3504,!1)}function O_(i){return new C(3301,!1)}function I_(i,n){return new C(3302,!1)}function P_(i){return new C(3303,!1)}function N_(i,n){return new C(3400,!1)}function F_(i){return new C(3401,!1)}function L_(i){return new C(3402,!1)}function B_(i,n){return new C(3505,!1)}function _n(i){switch(i.length){case 0:return new gn;case 1:return i[0];default:return new xr(i)}}function Qd(i,n,e=new Map,t=new Map){let r=[],o=[],a=-1,s=null;if(n.forEach(l=>{let c=l.get("offset"),m=c==a,p=m&&s||new Map;l.forEach((g,b)=>{let _=b,y=g;if(b!=="offset")switch(_=i.normalizePropertyName(_,r),y){case Uo:y=e.get(b);break;case zt:y=t.get(b);break;default:y=i.normalizeStyleValue(b,_,y,r);break}p.set(_,y)}),m||o.push(p),s=p,a=c}),r.length)throw XC(r);return o}function Js(i,n,e,t){switch(n){case"start":i.onStart(()=>t(e&&Gd(e,"start",i)));break;case"done":i.onDone(()=>t(e&&Gd(e,"done",i)));break;case"destroy":i.onDestroy(()=>t(e&&Gd(e,"destroy",i)));break}}function Gd(i,n,e){let t=e.totalTime,r=!!e.disabled,o=el(i.element,i.triggerName,i.fromState,i.toState,n||i.phaseName,t??i.totalTime,r),a=i._data;return a!=null&&(o._data=a),o}function el(i,n,e,t,r="",o=0,a){return{element:i,triggerName:n,fromState:e,toState:t,phaseName:r,totalTime:o,disabled:!!a}}function mt(i,n,e){let t=i.get(n);return t||i.set(n,t=e),t}function Xd(i){let n=i.indexOf(":"),e=i.substring(1,n),t=i.slice(n+1);return[e,t]}var ZC=typeof document>"u"?null:document.documentElement;function tl(i){let n=i.parentNode||i.host||null;return n===ZC?null:n}function JC(i){return i.substring(1,6)=="ebkit"}var fi=null,h_=!1;function z_(i){fi||(fi=eS()||{},h_=fi.style?"WebkitAppearance"in fi.style:!1);let n=!0;return fi.style&&!JC(i)&&(n=i in fi.style,!n&&h_&&(n="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in fi.style)),n}function eS(){return typeof document<"u"?document.body:null}function Zd(i,n){for(;n;){if(n===i)return!0;n=tl(n)}return!1}function Jd(i,n,e){if(e)return Array.from(i.querySelectorAll(n));let t=i.querySelector(n);return t?[t]:[]}var tS=1e3,em="{{",nS="}}",tm="ng-enter",nl="ng-leave",Vo="ng-trigger",Ho=".ng-trigger",nm="ng-animating",il=".ng-animating";function en(i){if(typeof i=="number")return i;let n=i.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Kd(parseFloat(n[1]),n[2])}function Kd(i,n){return n==="s"?i*tS:i}function Wo(i,n,e){return i.hasOwnProperty("duration")?i:rS(i,n,e)}var iS=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function rS(i,n,e){let t,r=0,o="";if(typeof i=="string"){let a=i.match(iS);if(a===null)return n.push(u_(i)),{duration:0,delay:0,easing:""};t=Kd(parseFloat(a[1]),a[2]);let s=a[3];s!=null&&(r=Kd(parseFloat(s),a[4]));let l=a[5];l&&(o=l)}else t=i;if(!e){let a=!1,s=n.length;t<0&&(n.push($C()),a=!0),r<0&&(n.push(GC()),a=!0),a&&n.splice(s,0,u_(i))}return{duration:t,delay:r,easing:o}}function j_(i){return i.length?i[0]instanceof Map?i:i.map(n=>new Map(Object.entries(n))):[]}function jt(i,n,e){n.forEach((t,r)=>{let o=rl(r);e&&!e.has(r)&&e.set(r,i.style[o]),i.style[o]=t})}function Un(i,n){n.forEach((e,t)=>{let r=rl(t);i.style[r]=""})}function Cr(i){return Array.isArray(i)?i.length==1?i[0]:m_(i):i}function U_(i,n,e){let t=n.params||{},r=im(i);r.length&&r.forEach(o=>{t.hasOwnProperty(o)||e.push(KC(o))})}var Yd=new RegExp(`${em}\\s*(.+?)\\s*${nS}`,"g");function im(i){let n=[];if(typeof i=="string"){let e;for(;e=Yd.exec(i);)n.push(e[1]);Yd.lastIndex=0}return n}function Sr(i,n,e){let t=`${i}`,r=t.replace(Yd,(o,a)=>{let s=n[a];return s==null&&(e.push(YC(a)),s=""),s.toString()});return r==t?i:r}var oS=/-+([a-z0-9])/g;function rl(i){return i.replace(oS,(...n)=>n[1].toUpperCase())}function V_(i,n){return i===0||n===0}function H_(i,n,e){if(e.size&&n.length){let t=n[0],r=[];if(e.forEach((o,a)=>{t.has(a)||r.push(a),t.set(a,o)}),r.length)for(let o=1;o<n.length;o++){let a=n[o];r.forEach(s=>a.set(s,ol(i,s)))}}return n}function ut(i,n,e){switch(n.type){case ne.Trigger:return i.visitTrigger(n,e);case ne.State:return i.visitState(n,e);case ne.Transition:return i.visitTransition(n,e);case ne.Sequence:return i.visitSequence(n,e);case ne.Group:return i.visitGroup(n,e);case ne.Animate:return i.visitAnimate(n,e);case ne.Keyframes:return i.visitKeyframes(n,e);case ne.Style:return i.visitStyle(n,e);case ne.Reference:return i.visitReference(n,e);case ne.AnimateChild:return i.visitAnimateChild(n,e);case ne.AnimateRef:return i.visitAnimateRef(n,e);case ne.Query:return i.visitQuery(n,e);case ne.Stagger:return i.visitStagger(n,e);default:throw QC(n.type)}}function ol(i,n){return window.getComputedStyle(i)[n]}var ym=(()=>{class i{validateStyleProperty(e){return z_(e)}containsElement(e,t){return Zd(e,t)}getParentElement(e){return tl(e)}query(e,t,r){return Jd(e,t,r)}computeStyle(e,t,r){return r||""}animate(e,t,r,o,a,s=[],l){return new gn(r,o)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),_i=class{static NOOP=new ym},bi=class{};var aS=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),dl=class extends bi{normalizePropertyName(n,e){return rl(n)}normalizeStyleValue(n,e,t,r){let o="",a=t.toString().trim();if(aS.has(e)&&t!==0&&t!=="0")if(typeof t=="number")o="px";else{let s=t.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&r.push(p_(n,t))}return a+o}};var ml="*";function sS(i,n){let e=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(t=>lS(t,e,n)):e.push(i),e}function lS(i,n,e){if(i[0]==":"){let l=cS(i,e);if(typeof l=="function"){n.push(l);return}i=l}let t=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(E_(i)),n;let r=t[1],o=t[2],a=t[3];n.push(W_(r,a));let s=r==ml&&a==ml;o[0]=="<"&&!s&&n.push(W_(a,r))}function cS(i,n){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return n.push(M_(i)),"* => *"}}var al=new Set(["true","1"]),sl=new Set(["false","0"]);function W_(i,n){let e=al.has(i)||sl.has(i),t=al.has(n)||sl.has(n);return(r,o)=>{let a=i==ml||i==r,s=n==ml||n==o;return!a&&e&&typeof r=="boolean"&&(a=r?al.has(i):sl.has(i)),!s&&t&&typeof o=="boolean"&&(s=o?al.has(n):sl.has(n)),a&&s}}var eb=":self",dS=new RegExp(`s*${eb}s*,?`,"g");function tb(i,n,e,t){return new cm(i).build(n,e,t)}var q_="",cm=class{_driver;constructor(n){this._driver=n}build(n,e,t){let r=new dm(e);return this._resetContextStyleTimingState(r),ut(this,Cr(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=q_,n.collectedStyles=new Map,n.collectedStyles.set(q_,new Map),n.currentTime=0}visitTrigger(n,e){let t=e.queryCount=0,r=e.depCount=0,o=[],a=[];return n.name.charAt(0)=="@"&&e.errors.push(f_()),n.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==ne.State){let l=s,c=l.name;c.toString().split(/\s*,\s*/).forEach(m=>{l.name=m,o.push(this.visitState(l,e))}),l.name=c}else if(s.type==ne.Transition){let l=this.visitTransition(s,e);t+=l.queryCount,r+=l.depCount,a.push(l)}else e.errors.push(g_())}),{type:ne.Trigger,name:n.name,states:o,transitions:a,queryCount:t,depCount:r,options:null}}visitState(n,e){let t=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(t.containsDynamicStyles){let o=new Set,a=r||{};t.styles.forEach(s=>{s instanceof Map&&s.forEach(l=>{im(l).forEach(c=>{a.hasOwnProperty(c)||o.add(c)})})}),o.size&&e.errors.push(__(n.name,[...o.values()]))}return{type:ne.State,name:n.name,style:t,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let t=ut(this,Cr(n.animation),e),r=sS(n.expr,e.errors);return{type:ne.Transition,matchers:r,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:gi(n.options)}}visitSequence(n,e){return{type:ne.Sequence,steps:n.steps.map(t=>ut(this,t,e)),options:gi(n.options)}}visitGroup(n,e){let t=e.currentTime,r=0,o=n.steps.map(a=>{e.currentTime=t;let s=ut(this,a,e);return r=Math.max(r,e.currentTime),s});return e.currentTime=r,{type:ne.Group,steps:o,options:gi(n.options)}}visitAnimate(n,e){let t=pS(n.timings,e.errors);e.currentAnimateTimings=t;let r,o=n.styles?n.styles:$d({});if(o.type==ne.Keyframes)r=this.visitKeyframes(o,e);else{let a=n.styles,s=!1;if(!a){s=!0;let c={};t.easing&&(c.easing=t.easing),a=$d(c)}e.currentTime+=t.duration+t.delay;let l=this.visitStyle(a,e);l.isEmptyStep=s,r=l}return e.currentAnimateTimings=null,{type:ne.Animate,timings:t,style:r,options:null}}visitStyle(n,e){let t=this._makeStyleAst(n,e);return this._validateStyleAst(t,e),t}_makeStyleAst(n,e){let t=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let s of r)typeof s=="string"?s===zt?t.push(s):e.errors.push(b_(s)):t.push(new Map(Object.entries(s)));let o=!1,a=null;return t.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(a=s.get("easing"),s.delete("easing")),!o)){for(let l of s.values())if(l.toString().indexOf(em)>=0){o=!0;break}}}),{type:ne.Style,styles:t,easing:a,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let t=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;t&&o>0&&(o-=t.duration+t.delay),n.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),m=c.get(l),p=!0;m&&(o!=r&&o>=m.startTime&&r<=m.endTime&&(e.errors.push(v_(l,m.startTime,m.endTime,o,r)),p=!1),o=m.startTime),p&&c.set(l,{startTime:o,endTime:r}),e.options&&U_(s,e.options,e.errors)})})}visitKeyframes(n,e){let t={type:ne.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(y_()),t;let r=1,o=0,a=[],s=!1,l=!1,c=0,m=n.steps.map(J=>{let O=this._makeStyleAst(J,e),D=O.offset!=null?O.offset:hS(O.styles),ae=0;return D!=null&&(o++,ae=O.offset=D),l=l||ae<0||ae>1,s=s||ae<c,c=ae,a.push(ae),O});l&&e.errors.push(w_()),s&&e.errors.push(x_());let p=n.steps.length,g=0;o>0&&o<p?e.errors.push(C_()):o==0&&(g=r/(p-1));let b=p-1,_=e.currentTime,y=e.currentAnimateTimings,N=y.duration;return m.forEach((J,O)=>{let D=g>0?O==b?1:g*O:a[O],ae=D*N;e.currentTime=_+y.delay+ae,y.duration=ae,this._validateStyleAst(J,e),J.offset=D,t.styles.push(J)}),t}visitReference(n,e){return{type:ne.Reference,animation:ut(this,Cr(n.animation),e),options:gi(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:ne.AnimateChild,options:gi(n.options)}}visitAnimateRef(n,e){return{type:ne.AnimateRef,animation:this.visitReference(n.animation,e),options:gi(n.options)}}visitQuery(n,e){let t=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,a]=mS(n.selector);e.currentQuerySelector=t.length?t+" "+o:o,mt(e.collectedStyles,e.currentQuerySelector,new Map);let s=ut(this,Cr(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:ne.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:a,animation:s,originalSelector:n.selector,options:gi(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(S_());let t=n.timings==="full"?{duration:0,delay:0,easing:"full"}:Wo(n.timings,e.errors,!0);return{type:ne.Stagger,animation:ut(this,Cr(n.animation),e),timings:t,options:null}}};function mS(i){let n=!!i.split(/\s*,\s*/).find(e=>e==eb);return n&&(i=i.replace(dS,"")),i=i.replace(/@\*/g,Ho).replace(/@\w+/g,e=>Ho+"-"+e.slice(1)).replace(/:animating/g,il),[i,n]}function uS(i){return i?v({},i):null}var dm=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function hS(i){if(typeof i=="string")return null;let n=null;if(Array.isArray(i))i.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;n=parseFloat(t.get("offset")),t.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let e=i;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function pS(i,n){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let o=Wo(i,n).duration;return rm(o,0,"")}let e=i;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=rm(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=Wo(e,n);return rm(r.duration,r.delay,r.easing)}function gi(i){return i?(i=v({},i),i.params&&(i.params=uS(i.params))):i={},i}function rm(i,n,e){return{duration:i,delay:n,easing:e}}function wm(i,n,e,t,r,o,a=null,s=!1){return{type:1,element:i,keyframes:n,preStyleProps:e,postStyleProps:t,duration:r,delay:o,totalTime:r+o,easing:a,subTimeline:s}}var $o=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let t=this._map.get(n);t||this._map.set(n,t=[]),t.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},fS=1,gS=":enter",_S=new RegExp(gS,"g"),bS=":leave",vS=new RegExp(bS,"g");function nb(i,n,e,t,r,o=new Map,a=new Map,s,l,c=[]){return new mm().buildKeyframes(i,n,e,t,r,o,a,s,l,c)}var mm=class{buildKeyframes(n,e,t,r,o,a,s,l,c,m=[]){c=c||new $o;let p=new um(n,e,c,r,o,m,[]);p.options=l;let g=l.delay?en(l.delay):0;p.currentTimeline.delayNextStep(g),p.currentTimeline.setStyles([a],null,p.errors,l),ut(this,t,p);let b=p.timelines.filter(_=>_.containsAnimation());if(b.length&&s.size){let _;for(let y=b.length-1;y>=0;y--){let N=b[y];if(N.element===e){_=N;break}}_&&!_.allowOnlyTimelineStyles()&&_.setStyles([s],null,p.errors,l)}return b.length?b.map(_=>_.buildKeyframes()):[wm(e,[],[],[],0,g,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let t=e.subInstructions.get(e.element);if(t){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,a=this._visitSubInstructions(t,r,r.options);o!=a&&e.transformIntoNewTimeline(a)}e.previousNode=n}visitAnimateRef(n,e){let t=e.createSubContext(n.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,t),this.visitReference(n.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,t){for(let r of n){let o=r?.delay;if(o){let a=typeof o=="number"?o:en(Sr(o,r?.params??{},e.errors));t.delayNextStep(a)}}}_visitSubInstructions(n,e,t){let o=e.currentTimeline.currentTime,a=t.duration!=null?en(t.duration):null,s=t.delay!=null?en(t.delay):null;return a!==0&&n.forEach(l=>{let c=e.appendInstructionToTimeline(l,a,s);o=Math.max(o,c.duration+c.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),ut(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let t=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==ne.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=ul);let a=en(o.delay);r.delayNextStep(a)}n.steps.length&&(n.steps.forEach(a=>ut(this,a,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>t&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let t=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?en(n.options.delay):0;n.steps.forEach(a=>{let s=e.createSubContext(n.options);o&&s.delayNextStep(o),ut(this,a,s),r=Math.max(r,s.currentTimeline.currentTime),t.push(s.currentTimeline)}),t.forEach(a=>e.currentTimeline.mergeTimelineCollectedStyles(a)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let t=n.strValue,r=e.params?Sr(t,e.params,e.errors):t;return Wo(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let t=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),r.snapshotCurrentStyles());let o=n.style;o.type==ne.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(t.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let t=e.currentTimeline,r=e.currentAnimateTimings;!r&&t.hasCurrentStyleProperties()&&t.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?t.applyEmptyStep(o):t.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let t=e.currentAnimateTimings,r=e.currentTimeline.duration,o=t.duration,s=e.createSubContext().currentTimeline;s.easing=t.easing,n.styles.forEach(l=>{let c=l.offset||0;s.forwardTime(c*o),s.setStyles(l.styles,l.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let t=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?en(r.delay):0;o&&(e.previousNode.type===ne.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=ul);let a=t,s=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=s.length;let l=null;s.forEach((c,m)=>{e.currentQueryIndex=m;let p=e.createSubContext(n.options,c);o&&p.delayNextStep(o),c===e.element&&(l=p.currentTimeline),ut(this,n.animation,p),p.currentTimeline.applyStylesToKeyframe();let g=p.currentTimeline.currentTime;a=Math.max(a,g)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(a),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let t=e.parentContext,r=e.currentTimeline,o=n.timings,a=Math.abs(o.duration),s=a*(e.currentQueryTotal-1),l=a*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":l=s-l;break;case"full":l=t.currentStaggerTime;break}let m=e.currentTimeline;l&&m.delayNextStep(l);let p=m.currentTime;ut(this,n.animation,e),e.previousNode=n,t.currentStaggerTime=r.currentTime-p+(r.startTime-t.currentTimeline.startTime)}},ul={},um=class i{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=ul;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,t,r,o,a,s,l){this._driver=n,this.element=e,this.subInstructions=t,this._enterClassName=r,this._leaveClassName=o,this.errors=a,this.timelines=s,this.currentTimeline=l||new hl(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let t=n,r=this.options;t.duration!=null&&(r.duration=en(t.duration)),t.delay!=null&&(r.delay=en(t.delay));let o=t.params;if(o){let a=r.params;a||(a=this.options.params={}),Object.keys(o).forEach(s=>{(!e||!a.hasOwnProperty(s))&&(a[s]=Sr(o[s],a,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let t=n.params={};Object.keys(e).forEach(r=>{t[r]=e[r]})}}return n}createSubContext(n=null,e,t){let r=e||this.element,o=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,t||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=ul,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,t){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(t??0)+n.delay,easing:""},o=new hm(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,t,r,o,a){let s=[];if(r&&s.push(this.element),n.length>0){n=n.replace(_S,"."+this._enterClassName),n=n.replace(vS,"."+this._leaveClassName);let l=t!=1,c=this._driver.query(this.element,n,l);t!==0&&(c=t<0?c.slice(c.length+t,c.length):c.slice(0,t)),s.push(...c)}return!o&&s.length==0&&a.push(k_(e)),s}},hl=class i{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,t,r){this._driver=n,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new i(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=fS,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||zt),this._currentKeyframe.set(e,zt);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,t,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},a=yS(n,this._globalTimelineStyles);for(let[s,l]of a){let c=Sr(l,o,t);this._pendingStyles.set(s,c),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??zt),this._updateStyle(s,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,t)=>{let r=this._styleSummary.get(t);(!r||e.time>r.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((s,l)=>{let c=new Map([...this._backFill,...s]);c.forEach((m,p)=>{m===Uo?n.add(p):m===zt&&e.add(p)}),t||c.set("offset",l/this.duration),r.push(c)});let o=[...n.values()],a=[...e.values()];if(t){let s=r[0],l=new Map(s);s.set("offset",0),l.set("offset",1),r=[s,l]}return wm(this.element,r,o,a,this.duration,this.startTime,this.easing,!1)}},hm=class extends hl{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,t,r,o,a,s=!1){super(n,e,a.delay),this.keyframes=t,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:t,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],a=t+e,s=e/a,l=new Map(n[0]);l.set("offset",0),o.push(l);let c=new Map(n[0]);c.set("offset",$_(s)),o.push(c);let m=n.length-1;for(let p=1;p<=m;p++){let g=new Map(n[p]),b=g.get("offset"),_=e+b*t;g.set("offset",$_(_/a)),o.push(g)}t=a,e=0,r="",n=o}return wm(this.element,n,this.preStyleProps,this.postStyleProps,t,e,r,!0)}};function $_(i,n=3){let e=Math.pow(10,n-1);return Math.round(i*e)/e}function yS(i,n){let e=new Map,t;return i.forEach(r=>{if(r==="*"){t??=n.keys();for(let o of t)e.set(o,zt)}else for(let[o,a]of r)e.set(o,a)}),e}function G_(i,n,e,t,r,o,a,s,l,c,m,p,g){return{type:0,element:i,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:t,toStyles:a,timelines:s,queriedElements:l,preStyleProps:c,postStyleProps:m,totalTime:p,errors:g}}var om={},pl=class{_triggerName;ast;_stateStyles;constructor(n,e,t){this._triggerName=n,this.ast=e,this._stateStyles=t}match(n,e,t,r){return wS(this.ast.matchers,n,e,t,r)}buildStyles(n,e,t){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,t):new Map}build(n,e,t,r,o,a,s,l,c,m){let p=[],g=this.ast.options&&this.ast.options.params||om,b=s&&s.params||om,_=this.buildStyles(t,b,p),y=l&&l.params||om,N=this.buildStyles(r,y,p),J=new Set,O=new Map,D=new Map,ae=r==="void",Ce={params:ib(y,g),delay:this.ast.options?.delay},X=m?[]:nb(n,e,this.ast.animation,o,a,_,N,Ce,c,p),pe=0;return X.forEach(ve=>{pe=Math.max(ve.duration+ve.delay,pe)}),p.length?G_(e,this._triggerName,t,r,ae,_,N,[],[],O,D,pe,p):(X.forEach(ve=>{let We=ve.element,wt=mt(O,We,new Set);ve.preStyleProps.forEach(Vt=>wt.add(Vt));let vi=mt(D,We,new Set);ve.postStyleProps.forEach(Vt=>vi.add(Vt)),We!==e&&J.add(We)}),G_(e,this._triggerName,t,r,ae,_,N,X,[...J.values()],O,D,pe))}};function wS(i,n,e,t,r){return i.some(o=>o(n,e,t,r))}function ib(i,n){let e=v({},n);return Object.entries(i).forEach(([t,r])=>{r!=null&&(e[t]=r)}),e}var pm=class{styles;defaultParams;normalizer;constructor(n,e,t){this.styles=n,this.defaultParams=e,this.normalizer=t}buildStyles(n,e){let t=new Map,r=ib(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,s)=>{a&&(a=Sr(a,r,e));let l=this.normalizer.normalizePropertyName(s,e);a=this.normalizer.normalizeStyleValue(s,l,a,e),t.set(s,a)})}),t}};function xS(i,n,e){return new fm(i,n,e)}var fm=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,t){this.name=n,this.ast=e,this._normalizer=t,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new pm(r.style,o,t))}),K_(this.states,"true","1"),K_(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new pl(n,r,this.states))}),this.fallbackTransition=CS(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,t,r){return this.transitionFactories.find(a=>a.match(n,e,t,r))||null}matchStyles(n,e,t){return this.fallbackTransition.buildStyles(n,e,t)}};function CS(i,n,e){let t=[(a,s)=>!0],r={type:ne.Sequence,steps:[],options:null},o={type:ne.Transition,animation:r,matchers:t,options:null,queryCount:0,depCount:0};return new pl(i,o,n)}function K_(i,n,e){i.has(n)?i.has(e)||i.set(e,i.get(n)):i.has(e)&&i.set(n,i.get(e))}var SS=new $o,gm=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,t){this.bodyNode=n,this._driver=e,this._normalizer=t}register(n,e){let t=[],r=[],o=tb(this._driver,e,t,r);if(t.length)throw R_(t);this._animations.set(n,o)}_buildPlayer(n,e,t){let r=n.element,o=Qd(this._normalizer,n.keyframes,e,t);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,t={}){let r=[],o=this._animations.get(n),a,s=new Map;if(o?(a=nb(this._driver,e,o,tm,nl,new Map,new Map,t,SS,r),a.forEach(m=>{let p=mt(s,m.element,new Map);m.postStyleProps.forEach(g=>p.set(g,null))})):(r.push(D_()),a=[]),r.length)throw A_(r);s.forEach((m,p)=>{m.forEach((g,b)=>{m.set(b,this._driver.computeStyle(p,b,zt))})});let l=a.map(m=>{let p=s.get(m.element);return this._buildPlayer(m,new Map,p)}),c=_n(l);return this._playersById.set(n,c),c.onDestroy(()=>this.destroy(n)),this.players.push(c),c}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw O_(n);return e}listen(n,e,t,r){let o=el(e,"","","");return Js(this._getPlayer(n),t,o,r),()=>{}}command(n,e,t,r){if(t=="register"){this.register(n,r[0]);return}if(t=="create"){let a=r[0]||{};this.create(n,e,a);return}let o=this._getPlayer(n);switch(t){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},Y_="ng-animate-queued",kS=".ng-animate-queued",am="ng-animate-disabled",ES=".ng-animate-disabled",MS="ng-star-inserted",TS=".ng-star-inserted",RS=[],rb={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},DS={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Ut="__ng_removed",Go=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let t=n&&n.hasOwnProperty("value"),r=t?n.value:n;if(this.value=OS(r),t){let o=n,{value:a}=o,s=wl(o,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let t=this.options.params;Object.keys(e).forEach(r=>{t[r]==null&&(t[r]=e[r])})}}},qo="void",sm=new Go(qo),_m=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,t){this.id=n,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+n,Dt(e,this._hostClassName)}listen(n,e,t,r){if(!this._triggers.has(e))throw I_(t,e);if(t==null||t.length==0)throw P_(e);if(!IS(t))throw N_(t,e);let o=mt(this._elementListeners,n,[]),a={name:e,phase:t,callback:r};o.push(a);let s=mt(this._engine.statesByElement,n,new Map);return s.has(e)||(Dt(n,Vo),Dt(n,Vo+"-"+e),s.set(e,sm)),()=>{this._engine.afterFlush(()=>{let l=o.indexOf(a);l>=0&&o.splice(l,1),this._triggers.has(e)||s.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw F_(n);return e}trigger(n,e,t,r=!0){let o=this._getTrigger(e),a=new Ko(this.id,e,n),s=this._engine.statesByElement.get(n);s||(Dt(n,Vo),Dt(n,Vo+"-"+e),this._engine.statesByElement.set(n,s=new Map));let l=s.get(e),c=new Go(t,this.id);if(!(t&&t.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),s.set(e,c),l||(l=sm),!(c.value===qo)&&l.value===c.value){if(!FS(l.params,c.params)){let y=[],N=o.matchStyles(l.value,l.params,y),J=o.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{Un(n,N),jt(n,J)})}return}let g=mt(this._engine.playersByElement,n,[]);g.forEach(y=>{y.namespaceId==this.id&&y.triggerName==e&&y.queued&&y.destroy()});let b=o.matchTransition(l.value,c.value,n,c.params),_=!1;if(!b){if(!r)return;b=o.fallbackTransition,_=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:b,fromState:l,toState:c,player:a,isFallbackTransition:_}),_||(Dt(n,Y_),a.onStart(()=>{kr(n,Y_)})),a.onDone(()=>{let y=this.players.indexOf(a);y>=0&&this.players.splice(y,1);let N=this._engine.playersByElement.get(n);if(N){let J=N.indexOf(a);J>=0&&N.splice(J,1)}}),this.players.push(a),g.push(a),a}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let t=this._engine.driver.query(n,Ho,!0);t.forEach(r=>{if(r[Ut])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(a=>a.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,t,r){let o=this._engine.statesByElement.get(n),a=new Map;if(o){let s=[];if(o.forEach((l,c)=>{if(a.set(c,l.value),this._triggers.has(c)){let m=this.trigger(n,c,qo,r);m&&s.push(m)}}),s.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,a),t&&_n(s).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),t=this._engine.statesByElement.get(n);if(e&&t){let r=new Set;e.forEach(o=>{let a=o.name;if(r.has(a))return;r.add(a);let l=this._triggers.get(a).fallbackTransition,c=t.get(a)||sm,m=new Go(qo),p=new Ko(this.id,a,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:a,transition:l,fromState:c,toState:m,player:p,isFallbackTransition:!0})})}}removeNode(n,e){let t=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(t.totalAnimations){let o=t.players.length?t.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let a=n;for(;a=a.parentNode;)if(t.statesByElement.get(a)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)t.markElementAsRemoved(this.id,n,!1,e);else{let o=n[Ut];(!o||o===rb)&&(t.afterFlush(()=>this.clearElementCache(n)),t.destroyInnerAnimations(n),t._onRemovalComplete(n,e))}}insertNode(n,e){Dt(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(t=>{let r=t.player;if(r.destroyed)return;let o=t.element,a=this._elementListeners.get(o);a&&a.forEach(s=>{if(s.name==t.triggerName){let l=el(o,t.triggerName,t.fromState.value,t.toState.value);l._data=n,Js(t.player,s.phase,l,s.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(t)}),this._queue=[],e.sort((t,r)=>{let o=t.transition.ast.depCount,a=r.transition.ast.depCount;return o==0||a==0?o-a:this._engine.driver.containsElement(t.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},bm=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,t){this.bodyNode=n,this.driver=e,this._normalizer=t}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&n.push(t)})}),n}createNamespace(n,e){let t=new _m(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[n]=t}_balanceNamespaceList(n,e){let t=this._namespaceList,r=this.namespacesByHostElement;if(t.length-1>=0){let a=!1,s=this.driver.getParentElement(e);for(;s;){let l=r.get(s);if(l){let c=t.indexOf(l);t.splice(c+1,0,n),a=!0;break}s=this.driver.getParentElement(s)}a||t.unshift(n)}else t.push(n);return r.set(e,n),n}register(n,e){let t=this._namespaceLookup[n];return t||(t=this.createNamespace(n,e)),t}registerTrigger(n,e,t){let r=this._namespaceLookup[n];r&&r.register(e,t)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(n);this.namespacesByHostElement.delete(t.hostElement);let r=this._namespaceList.indexOf(t);r>=0&&this._namespaceList.splice(r,1),t.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,t=this.statesByElement.get(n);if(t){for(let r of t.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,t,r){if(ll(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,t,r),!0}return!1}insertNode(n,e,t,r){if(!ll(e))return;let o=e[Ut];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let a=this.collectedLeaveElements.indexOf(e);a>=0&&this.collectedLeaveElements.splice(a,1)}if(n){let a=this._fetchNamespace(n);a&&a.insertNode(e,t)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),Dt(n,am)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),kr(n,am))}removeNode(n,e,t){if(ll(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,t):this.markElementAsRemoved(n,e,!1,t);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(n,e,t,r,o){this.collectedLeaveElements.push(e),e[Ut]={namespaceId:n,setForRemoval:r,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,t,r,o){return ll(e)?this._fetchNamespace(n).listen(e,t,r,o):()=>{}}_buildInstruction(n,e,t,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,t,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Ho,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,il,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return _n(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[Ut];if(e&&e.setForRemoval){if(n[Ut]=rb,e.namespaceId){this.destroyInnerAnimations(n);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(am)&&this.markElementAsDisabled(n,!1),this.driver.query(n,ES,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,r)=>this._balanceNamespaceList(t,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let r=this.collectedEnterElements[t];Dt(r,MS)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,n)}finally{for(let r=0;r<t.length;r++)t[r]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let r=this.collectedLeaveElements[t];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?_n(e).onDone(()=>{t.forEach(r=>r())}):t.forEach(r=>r())}}reportError(n){throw L_(n)}_flushAnimations(n,e){let t=new $o,r=[],o=new Map,a=[],s=new Map,l=new Map,c=new Map,m=new Set;this.disabledNodes.forEach(T=>{m.add(T);let U=this.driver.query(T,kS,!0);for(let V=0;V<U.length;V++)m.add(U[V])});let p=this.bodyNode,g=Array.from(this.statesByElement.keys()),b=Z_(g,this.collectedEnterElements),_=new Map,y=0;b.forEach((T,U)=>{let V=tm+y++;_.set(U,V),T.forEach(me=>Dt(me,V))});let N=[],J=new Set,O=new Set;for(let T=0;T<this.collectedLeaveElements.length;T++){let U=this.collectedLeaveElements[T],V=U[Ut];V&&V.setForRemoval&&(N.push(U),J.add(U),V.hasAnimation?this.driver.query(U,TS,!0).forEach(me=>J.add(me)):O.add(U))}let D=new Map,ae=Z_(g,Array.from(J));ae.forEach((T,U)=>{let V=nl+y++;D.set(U,V),T.forEach(me=>Dt(me,V))}),n.push(()=>{b.forEach((T,U)=>{let V=_.get(U);T.forEach(me=>kr(me,V))}),ae.forEach((T,U)=>{let V=D.get(U);T.forEach(me=>kr(me,V))}),N.forEach(T=>{this.processLeaveNode(T)})});let Ce=[],X=[];for(let T=this._namespaceList.length-1;T>=0;T--)this._namespaceList[T].drainQueuedTransitions(e).forEach(V=>{let me=V.player,ze=V.element;if(Ce.push(me),this.collectedEnterElements.length){let Qe=ze[Ut];if(Qe&&Qe.setForMove){if(Qe.previousTriggersValues&&Qe.previousTriggersValues.has(V.triggerName)){let Vn=Qe.previousTriggersValues.get(V.triggerName),xt=this.statesByElement.get(V.element);if(xt&&xt.has(V.triggerName)){let Qo=xt.get(V.triggerName);Qo.value=Vn,xt.set(V.triggerName,Qo)}}me.destroy();return}}let Ht=!p||!this.driver.containsElement(p,ze),ht=D.get(ze),bn=_.get(ze),Se=this._buildInstruction(V,t,bn,ht,Ht);if(Se.errors&&Se.errors.length){X.push(Se);return}if(Ht){me.onStart(()=>Un(ze,Se.fromStyles)),me.onDestroy(()=>jt(ze,Se.toStyles)),r.push(me);return}if(V.isFallbackTransition){me.onStart(()=>Un(ze,Se.fromStyles)),me.onDestroy(()=>jt(ze,Se.toStyles)),r.push(me);return}let Em=[];Se.timelines.forEach(Qe=>{Qe.stretchStartingKeyframe=!0,this.disabledNodes.has(Qe.element)||Em.push(Qe)}),Se.timelines=Em,t.append(ze,Se.timelines);let gb={instruction:Se,player:me,element:ze};a.push(gb),Se.queriedElements.forEach(Qe=>mt(s,Qe,[]).push(me)),Se.preStyleProps.forEach((Qe,Vn)=>{if(Qe.size){let xt=l.get(Vn);xt||l.set(Vn,xt=new Set),Qe.forEach((Qo,yl)=>xt.add(yl))}}),Se.postStyleProps.forEach((Qe,Vn)=>{let xt=c.get(Vn);xt||c.set(Vn,xt=new Set),Qe.forEach((Qo,yl)=>xt.add(yl))})});if(X.length){let T=[];X.forEach(U=>{T.push(B_(U.triggerName,U.errors))}),Ce.forEach(U=>U.destroy()),this.reportError(T)}let pe=new Map,ve=new Map;a.forEach(T=>{let U=T.element;t.has(U)&&(ve.set(U,U),this._beforeAnimationBuild(T.player.namespaceId,T.instruction,pe))}),r.forEach(T=>{let U=T.element;this._getPreviousPlayers(U,!1,T.namespaceId,T.triggerName,null).forEach(me=>{mt(pe,U,[]).push(me),me.destroy()})});let We=N.filter(T=>J_(T,l,c)),wt=new Map;X_(wt,this.driver,O,c,zt).forEach(T=>{J_(T,l,c)&&We.push(T)});let Vt=new Map;b.forEach((T,U)=>{X_(Vt,this.driver,new Set(T),l,Uo)}),We.forEach(T=>{let U=wt.get(T),V=Vt.get(T);wt.set(T,new Map([...U?.entries()??[],...V?.entries()??[]]))});let vl=[],Sm=[],km={};a.forEach(T=>{let{element:U,player:V,instruction:me}=T;if(t.has(U)){if(m.has(U)){V.onDestroy(()=>jt(U,me.toStyles)),V.disabled=!0,V.overrideTotalTime(me.totalTime),r.push(V);return}let ze=km;if(ve.size>1){let ht=U,bn=[];for(;ht=ht.parentNode;){let Se=ve.get(ht);if(Se){ze=Se;break}bn.push(ht)}bn.forEach(Se=>ve.set(Se,ze))}let Ht=this._buildAnimation(V.namespaceId,me,pe,o,Vt,wt);if(V.setRealPlayer(Ht),ze===km)vl.push(V);else{let ht=this.playersByElement.get(ze);ht&&ht.length&&(V.parentPlayer=_n(ht)),r.push(V)}}else Un(U,me.fromStyles),V.onDestroy(()=>jt(U,me.toStyles)),Sm.push(V),m.has(U)&&r.push(V)}),Sm.forEach(T=>{let U=o.get(T.element);if(U&&U.length){let V=_n(U);T.setRealPlayer(V)}}),r.forEach(T=>{T.parentPlayer?T.syncPlayerEvents(T.parentPlayer):T.destroy()});for(let T=0;T<N.length;T++){let U=N[T],V=U[Ut];if(kr(U,nl),V&&V.hasAnimation)continue;let me=[];if(s.size){let Ht=s.get(U);Ht&&Ht.length&&me.push(...Ht);let ht=this.driver.query(U,il,!0);for(let bn=0;bn<ht.length;bn++){let Se=s.get(ht[bn]);Se&&Se.length&&me.push(...Se)}}let ze=me.filter(Ht=>!Ht.destroyed);ze.length?PS(this,U,ze):this.processLeaveNode(U)}return N.length=0,vl.forEach(T=>{this.players.push(T),T.onDone(()=>{T.destroy();let U=this.players.indexOf(T);this.players.splice(U,1)}),T.play()}),vl}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,t,r,o){let a=[];if(e){let s=this.playersByQueriedElement.get(n);s&&(a=s)}else{let s=this.playersByElement.get(n);if(s){let l=!o||o==qo;s.forEach(c=>{c.queued||!l&&c.triggerName!=r||a.push(c)})}}return(t||r)&&(a=a.filter(s=>!(t&&t!=s.namespaceId||r&&r!=s.triggerName))),a}_beforeAnimationBuild(n,e,t){let r=e.triggerName,o=e.element,a=e.isRemovalTransition?void 0:n,s=e.isRemovalTransition?void 0:r;for(let l of e.timelines){let c=l.element,m=c!==o,p=mt(t,c,[]);this._getPreviousPlayers(c,m,a,s,e.toState).forEach(b=>{let _=b.getRealPlayer();_.beforeDestroy&&_.beforeDestroy(),b.destroy(),p.push(b)})}Un(o,e.fromStyles)}_buildAnimation(n,e,t,r,o,a){let s=e.triggerName,l=e.element,c=[],m=new Set,p=new Set,g=e.timelines.map(_=>{let y=_.element;m.add(y);let N=y[Ut];if(N&&N.removedBeforeQueried)return new gn(_.duration,_.delay);let J=y!==l,O=NS((t.get(y)||RS).map(pe=>pe.getRealPlayer())).filter(pe=>{let ve=pe;return ve.element?ve.element===y:!1}),D=o.get(y),ae=a.get(y),Ce=Qd(this._normalizer,_.keyframes,D,ae),X=this._buildPlayer(_,Ce,O);if(_.subTimeline&&r&&p.add(y),J){let pe=new Ko(n,s,y);pe.setRealPlayer(X),c.push(pe)}return X});c.forEach(_=>{mt(this.playersByQueriedElement,_.element,[]).push(_),_.onDone(()=>AS(this.playersByQueriedElement,_.element,_))}),m.forEach(_=>Dt(_,nm));let b=_n(g);return b.onDestroy(()=>{m.forEach(_=>kr(_,nm)),jt(l,e.toStyles)}),p.forEach(_=>{mt(r,_,[]).push(b)}),b}_buildPlayer(n,e,t){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,t):new gn(n.duration,n.delay)}},Ko=class{namespaceId;triggerName;element;_player=new gn;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,t){this.namespaceId=n,this.triggerName=e,this.element=t}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,t)=>{e.forEach(r=>Js(n,t,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){mt(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function AS(i,n,e){let t=i.get(n);if(t){if(t.length){let r=t.indexOf(e);t.splice(r,1)}t.length==0&&i.delete(n)}return t}function OS(i){return i??null}function ll(i){return i&&i.nodeType===1}function IS(i){return i=="start"||i=="done"}function Q_(i,n){let e=i.style.display;return i.style.display=n??"none",e}function X_(i,n,e,t,r){let o=[];e.forEach(l=>o.push(Q_(l)));let a=[];t.forEach((l,c)=>{let m=new Map;l.forEach(p=>{let g=n.computeStyle(c,p,r);m.set(p,g),(!g||g.length==0)&&(c[Ut]=DS,a.push(c))}),i.set(c,m)});let s=0;return e.forEach(l=>Q_(l,o[s++])),a}function Z_(i,n){let e=new Map;if(i.forEach(s=>e.set(s,[])),n.length==0)return e;let t=1,r=new Set(n),o=new Map;function a(s){if(!s)return t;let l=o.get(s);if(l)return l;let c=s.parentNode;return e.has(c)?l=c:r.has(c)?l=t:l=a(c),o.set(s,l),l}return n.forEach(s=>{let l=a(s);l!==t&&e.get(l).push(s)}),e}function Dt(i,n){i.classList?.add(n)}function kr(i,n){i.classList?.remove(n)}function PS(i,n,e){_n(e).onDone(()=>i.processLeaveNode(n))}function NS(i){let n=[];return ob(i,n),n}function ob(i,n){for(let e=0;e<i.length;e++){let t=i[e];t instanceof xr?ob(t.players,n):n.push(t)}}function FS(i,n){let e=Object.keys(i),t=Object.keys(n);if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||i[o]!==n[o])return!1}return!0}function J_(i,n,e){let t=e.get(i);if(!t)return!1;let r=n.get(i);return r?t.forEach(o=>r.add(o)):n.set(i,t),e.delete(i),!0}var Er=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new bm(n.body,e,t),this._timelineEngine=new gm(n.body,e,t),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,t,r,o){let a=n+"-"+r,s=this._triggerCache[a];if(!s){let l=[],c=[],m=tb(this._driver,o,l,c);if(l.length)throw T_(r,l);s=xS(r,m,this._normalizer),this._triggerCache[a]=s}this._transitionEngine.registerTrigger(e,r,s)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,t,r){this._transitionEngine.insertNode(n,e,t,r)}onRemove(n,e,t){this._transitionEngine.removeNode(n,e,t)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,t,r){if(t.charAt(0)=="@"){let[o,a]=Xd(t),s=r;this._timelineEngine.command(o,e,a,s)}else this._transitionEngine.trigger(n,e,t,r)}listen(n,e,t,r,o){if(t.charAt(0)=="@"){let[a,s]=Xd(t);return this._timelineEngine.listen(a,e,s,o)}return this._transitionEngine.listen(n,e,t,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function LS(i,n){let e=null,t=null;return Array.isArray(n)&&n.length?(e=lm(n[0]),n.length>1&&(t=lm(n[n.length-1]))):n instanceof Map&&(e=lm(n)),e||t?new BS(i,e,t):null}var BS=(()=>{class i{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,r){this._element=e,this._startStyles=t,this._endStyles=r;let o=i.initialStylesByElement.get(e);o||i.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&jt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(jt(this._element,this._initialStyles),this._endStyles&&(jt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(i.initialStylesByElement.delete(this._element),this._startStyles&&(Un(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Un(this._element,this._endStyles),this._endStyles=null),jt(this._element,this._initialStyles),this._state=3)}}return i})();function lm(i){let n=null;return i.forEach((e,t)=>{zS(t)&&(n=n||new Map,n.set(t,e))}),n}function zS(i){return i==="display"||i==="position"}var fl=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,t,r){this.element=n,this.keyframes=e,this.options=t,this._specialStyles=r,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(n,e,t){let r=this._convertKeyframesToObject(e);try{return n.animate(r,t)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,r)=>{r!=="offset"&&n.set(r,this._finished?t:ol(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},gl=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Zd(n,e)}getParentElement(n){return tl(n)}query(n,e,t){return Jd(n,e,t)}computeStyle(n,e,t){return ol(n,e)}animate(n,e,t,r,o,a=[]){let s=r==0?"both":"forwards",l={duration:t,delay:r,fill:s};o&&(l.easing=o);let c=new Map,m=a.filter(b=>b instanceof fl);V_(t,r)&&m.forEach(b=>{b.currentSnapshot.forEach((_,y)=>c.set(y,_))});let p=j_(e).map(b=>new Map(b));p=H_(n,p,c);let g=LS(n,p);return new fl(n,p,l,g)}};var cl="@",ab="@.disabled",_l=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,t,r){this.namespaceId=n,this.delegate=e,this.engine=t,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,t,r=!0){this.delegate.insertBefore(n,e,t),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,t,r){if(r){this.delegate.removeChild(n,e,t,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){e.charAt(0)==cl&&e==ab?this.disableAnimations(n,!!t):this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.delegate.listen(n,e,t,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},vm=class extends _l{factory;constructor(n,e,t,r,o){super(e,t,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,t){e.charAt(0)==cl?e.charAt(1)=="."&&e==ab?(t=t===void 0?!0:!!t,this.disableAnimations(n,t)):this.engine.process(this.namespaceId,n,e.slice(1),t):this.delegate.setProperty(n,e,t)}listen(n,e,t,r){if(e.charAt(0)==cl){let o=jS(n),a=e.slice(1),s="";return a.charAt(0)!=cl&&([a,s]=US(a)),this.engine.listen(this.namespaceId,o,a,s,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,t,l)})}return this.delegate.listen(n,e,t,r)}};function jS(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function US(i){let n=i.indexOf("."),e=i.substring(0,n),t=i.slice(n+1);return[e,t]}var bl=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,t){this.delegate=n,this.engine=e,this._zone=t,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let c=this._rendererCache,m=c.get(r);if(!m){let p=()=>c.delete(r);m=new _l("",r,this.engine,p),c.set(r,m)}return m}let o=e.id,a=e.id+"-"+this._currentId;this._currentId++,this.engine.register(a,n);let s=c=>{Array.isArray(c)?c.forEach(s):this.engine.registerTrigger(o,a,n,c.name,c)};return e.data.animation.forEach(s),new vm(this,a,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,t){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(t));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[a,s]=o;a(s)}),this._animationCallbacksBuffer=[]})}),r.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var HS=(()=>{class i extends Er{constructor(e,t,r){super(e,t,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||i)(q($),q(_i),q(bi))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})();function WS(){return new dl}function qS(){return new bl(d(Vr),d(Er),d(R))}var lb=[{provide:bi,useFactory:WS},{provide:Er,useClass:HS},{provide:Ke,useFactory:qS}],$S=[{provide:_i,useClass:ym},{provide:Hn,useValue:"NoopAnimations"},...lb],sb=[{provide:_i,useFactory:()=>new gl},{provide:Hn,useFactory:()=>"BrowserAnimations"},...lb],cb=(()=>{class i{static withConfig(e){return{ngModule:i,providers:e.disableAnimations?$S:sb}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:sb,imports:[Wr]})}return i})();var db=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({imports:[uc,pn,de,Bt]})}return i})();var xm="Service workers are disabled or not supported by this browser",Mr=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new qe(t=>t.error(new C(5601,!1)));else{let t=null,r=new E;this.worker=new qe(c=>(t!==null&&c.next(t),r.subscribe(m=>c.next(m))));let o=()=>{let{controller:c}=n;c!==null&&(t=c,r.next(t))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(we(()=>n.getRegistration().then(c=>{if(!c)throw new C(5601,!1);return c})));let a=new E;this.events=a.asObservable();let s=c=>{let{data:m}=c;m?.type&&a.next(m)};n.addEventListener("message",s),e?.get(gt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",s)})}}postMessage(n,e){return new Promise(t=>{this.worker.pipe(Ae(1)).subscribe(r=>{r.postMessage(v({action:n},e)),t()})})}postMessageWithOperation(n,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=t=>t.type===n:e=t=>n.includes(t.type),this.events.pipe(le(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(Ae(1))}waitForOperationCompleted(n){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(le(r=>r.nonce===n),Ae(1),Z(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},ub=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new E;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=vn,this.notificationClicks=vn,this.notificationCloses=vn,this.pushSubscriptionChanges=vn,this.subscription=vn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Z(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Z(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Z(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Z(r=>r.data)),this.pushManager=this.sw.registration.pipe(Z(r=>r.pushManager));let t=this.pushManager.pipe(we(r=>r.getSubscription()));this.subscription=new qe(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(xm));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(we(l=>l.subscribe(t)),Ae(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),a(l)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(xm));let e=t=>{if(t===null)throw new C(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new C(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(Ae(1),we(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(q(Mr))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),hb=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=vn,this.unrecoverable=vn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(xm));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new C(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(q(Mr))};static \u0275prov=k({token:i,factory:i.\u0275fac})}return i})(),pb=new w("");function GS(){let i=d(Yo);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let n=d(pb),e=d(R),t=d(gt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=i;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=mb(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),mb(+s[0])]);break;default:throw new C(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(n,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(a=>console.error(wi(5604,!1)))})})}function mb(i){return new Promise(n=>setTimeout(n,i))}function KS(){let i=d(Yo),n=d(ie),e=!0;return new Mr(e&&i.enabled!==!1?navigator.serviceWorker:void 0,n)}var Yo=class{enabled;updateViaCache;type;scope;registrationStrategy};function YS(i,n={}){return xi([ub,hb,{provide:pb,useValue:i},{provide:Yo,useValue:n},{provide:Mr,useFactory:KS},Pr(GS)])}var Cm=(()=>{class i{static register(e,t={}){return{ngModule:i,providers:[YS(e,t)]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=I({providers:[ub,hb]})}return i})();var fb=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=P({type:i,bootstrap:[d_]})}static{this.\u0275inj=I({providers:[nc(rc(),ic())],imports:[Wr,Xg,cb,n_,Ua,e_,Qp,r_,Ug,c_,$g,Ou,pi,db,xf,Cm.register("ngsw-worker.js",{enabled:yr.production,registrationStrategy:"registerWhenStable:30000"}),Cm.register("ngsw-worker.js",{enabled:!hu(),registrationStrategy:"registerWhenStable:30000"})]})}}return i})();yr.production&&void 0;Kl().bootstrapModule(fb,{applicationProviders:[lu()]}).catch(i=>console.error(i));
