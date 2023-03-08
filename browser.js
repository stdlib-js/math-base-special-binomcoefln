// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.floor;function n(n){return r(n)===n}function t(r){return r!=r}var e=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function i(r){return r===e||r===u}function f(r){return Math.abs(r)}var o,a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,l=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"",v=a&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return c.call(r);t=r[y],i=y,n=null!=(u=r)&&l.call(u,i);try{r[y]=void 0}catch(n){return c.call(r)}return e=c.call(r),n?r[y]=t:delete r[y],e}:function(r){return c.call(r)},s="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var N,w=o,d="function"==typeof Float64Array,h="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,NaN]),t=n,r=(d&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=N,g="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,j="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(g&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=_,S="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H={uint16:I,uint8:O};(T=new H.uint16(1))[0]=4660;var G=52===new H.uint8(T.buffer)[0],P=!0===G?1:0,k=new m(1),x=new w(k.buffer);function M(r){return k[0]=r,x[P]}var L=!0===G?1:0,V=new m(1),W=new w(V.buffer);function Y(r,n){return V[0]=r,W[L]=n>>>0,V[0]}var q=1023,C=.6931471803691238,z=1.9082149292705877e-10,B=1048575;function D(r){var n,e,i,f,o,a,c,l,y,v,s,p;return 0===r?u:t(r)||r<0?NaN:(o=0,(e=M(r))<1048576&&(o-=54,e=M(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-q|0,o+=(l=614244+(e&=B)&1048576|0)>>20|0,c=(r=Y(r,e|1072693248^l))-1,(B&2+e)<3?0===c?0===o?0:o*C+o*z:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*C-(a-o*z-c)):(l=e-398458|0,y=440401-e|0,f=(s=(p=(v=c/(2+c))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),i=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=i+f,(l|=y)>0?(n=.5*c*c,0===o?c-(n-v*(n+a)):o*C-(n-(v*(n+a)+o*z)-c)):0===o?c-v*(c-a):o*C-(v*(c-a)-o*z-c))))}var J=Math.ceil;function K(n){return n<0?J(n):r(n)}function Q(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var R=-.16666666666666632;function X(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(R+u*t):r-(u*(.5*n-e*t)-n-e*R)}var Z,$,rr=!0===G?0:1,nr=new m(1),tr=new w(nr.buffer);!0===G?(Z=1,$=0):(Z=0,$=1);var er={HIGH:Z,LOW:$},ur=new m(1),ir=new w(ur.buffer),fr=er.HIGH,or=er.LOW;function ar(r,n){return ir[fr]=r,ir[or]=n,ur[0]}var cr,lr,yr=2147483647,vr="function"==typeof Object.defineProperty?Object.defineProperty:null,sr=Object.defineProperty,pr=Object.prototype,br=pr.toString,Nr=pr.__defineGetter__,wr=pr.__defineSetter__,dr=pr.__lookupGetter__,hr=pr.__lookupSetter__,Ar=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?sr:function(r,n,t){var e,u,i,f;if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(dr.call(r,n)||hr.call(r,n)?(e=r.__proto__,r.__proto__=pr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,f="set"in t,u&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Nr&&Nr.call(r,n,t.get),f&&wr&&wr.call(r,n,t.set),r};function _r(r,n,t){Ar(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===G?(cr=1,lr=0):(cr=0,lr=1);var mr={HIGH:cr,LOW:lr},gr=new m(1),Ur=new w(gr.buffer),jr=mr.HIGH,Ir=mr.LOW;function Or(r,n,t,e){return gr[0]=r,n[e]=Ur[jr],n[e+t]=Ur[Ir],n}function Sr(r){return Or(r,[0,0],1,0)}_r(Sr,"assign",Or);var Er=[0,0];function Fr(r,n){var t,e;return Sr.assign(r,Er,1,0),t=Er[0],t&=yr,e=M(n),ar(t|=e&=2147483648,Er[1])}function Tr(r,n,e,u){return t(r)||i(r)?(n[u]=r,n[u+e]=0,n):0!==r&&f(r)<22250738585072014e-324?(n[u]=4503599627370496*r,n[u+e]=-52,n):(n[u]=r,n[u+e]=0,n)}_r((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var f,o;return 0===n||0===r||t(r)||i(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-q|0}(r=Hr[0]),n<-1074?Fr(0,r):n>1023?r<0?u:e:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,Sr.assign(r,Gr,1,0),f=Gr[0],f&=2148532223,o*ar(f|=n+q<<20,Gr[1])))}function kr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var xr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lr=16777216,Vr=5.960464477539063e-8,Wr=kr(20),Yr=kr(20),qr=kr(20),Cr=kr(20);function zr(n,t,e,u,i,f,o,a,c){var l,y,v,s,p,b,N,w,d;for(s=f,d=u[e],w=e,p=0;w>0;p++)y=Vr*d|0,Cr[p]=d-Lr*y|0,d=u[w-1]+y,w-=1;if(d=Pr(d,i),d-=8*r(.125*d),d-=N=0|d,v=0,i>0?(N+=p=Cr[e-1]>>24-i,Cr[e-1]-=p<<24-i,v=Cr[e-1]>>23-i):0===i?v=Cr[e-1]>>23:d>=.5&&(v=2),v>0){for(N+=1,l=0,p=0;p<e;p++)w=Cr[p],0===l?0!==w&&(l=1,Cr[p]=16777216-w):Cr[p]=16777215-w;if(i>0)switch(i){case 1:Cr[e-1]&=8388607;break;case 2:Cr[e-1]&=4194303}2===v&&(d=1-d,0!==l&&(d-=Pr(1,i)))}if(0===d){for(w=0,p=e-1;p>=f;p--)w|=Cr[p];if(0===w){for(b=1;0===Cr[f-b];b++);for(p=e+1;p<=e+b;p++){for(c[a+p]=xr[o+p],y=0,w=0;w<=a;w++)y+=n[w]*c[a+(p-w)];u[p]=y}return zr(n,t,e+=b,u,i,f,o,a,c)}}if(0===d)for(e-=1,i-=24;0===Cr[e];)e-=1,i-=24;else(d=Pr(d,-i))>=Lr?(y=Vr*d|0,Cr[e]=d-Lr*y|0,i+=24,Cr[e+=1]=y):Cr[e]=0|d;for(y=Pr(1,i),p=e;p>=0;p--)u[p]=y*Cr[p],y*=Vr;for(p=e;p>=0;p--){for(y=0,b=0;b<=s&&b<=e-p;b++)y+=Mr[b]*u[p+b];qr[e-p]=y}for(y=0,p=e;p>=0;p--)y+=qr[p];for(t[0]=0===v?y:-y,y=qr[0]-y,p=1;p<=e;p++)y+=qr[p];return t[1]=0===v?y:-y,7&N}function Br(r,n,t,e){var u,i,f,o,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),o=t-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)Wr[a]=c<0?0:xr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Wr[f+(a-c)];Yr[a]=u}return zr(r,n,4,Yr,o,4,i,f,Wr)}var Dr=Math.round;function Jr(r,n,t){var e,u,i,f,o;return i=r-1.5707963267341256*(e=Dr(.6366197723675814*r)),f=6077100506506192e-26*e,o=n>>20|0,t[0]=i-f,o-(M(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=i)-(i=u-(f=6077100506303966e-26*e))-f),t[0]=i-f,o-(M(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=i)-(i=u-(f=20222662487111665e-37*e))-f),t[0]=i-f)),t[1]=i-t[0]-f,e}var Kr=1.5707963267341256,Qr=6077100506506192e-26,Rr=2*Qr,Xr=3*Qr,Zr=4*Qr,$r=[0,0,0],rn=[0,0];function nn(r,n){var t,e,u,i,f,o,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Jr(r,u,n):u<=1073928572?r>0?(a=r-Kr,n[0]=a-Qr,n[1]=a-n[0]-Qr,1):(a=r+Kr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-1):r>0?(a=r-2*Kr,n[0]=a-Rr,n[1]=a-n[0]-Rr,2):(a=r+2*Kr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Jr(r,u,n):r>0?(a=r-3*Kr,n[0]=a-Xr,n[1]=a-n[0]-Xr,3):(a=r+3*Kr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-3):1075388923===u?Jr(r,u,n):r>0?(a=r-4*Kr,n[0]=a-Zr,n[1]=a-n[0]-Zr,4):(a=r+4*Kr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-4);if(u<1094263291)return Jr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return nr[0]=r,tr[rr]}(r),a=ar(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)$r[f]=0|a,a=16777216*(a-$r[f]);for($r[2]=a,i=3;0===$r[i-1];)i-=1;return o=Br($r,rn,e,i),r<0?(n[0]=-rn[0],n[1]=-rn[1],-o):(n[0]=rn[0],n[1]=rn[1],o)}var tn=[0,0];function en(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Q(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,tn)){case 0:return Q(tn[0],tn[1]);case 1:return-X(tn[0],tn[1]);case 2:return-Q(tn[0],tn[1]);default:return X(tn[0],tn[1])}}var un=[0,0];function fn(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:X(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,un)){case 0:return X(un[0],un[1]);case 1:return Q(un[0],un[1]);case 2:return-X(un[0],un[1]);default:return-Q(un[0],un[1])}}var on=3.141592653589793,an=1.4616321449683622,cn=1.4616321449683622;function ln(r){var n,u,o,a,c,l,y,v,s,p,b,N,w;if(t(r)||i(r))return r;if(0===r)return e;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-D(r);if(n){if(r>=4503599627370496)return e;if(s=function(r){var n,e;return t(r)||i(r)?NaN:0===(n=f(e=r%2))||1===n?Fr(0,e):n<.25?fn(on*e):n<.75?Fr(en(on*(n=.5-n)),e):n<1.25?(e=Fr(1,e)-e,fn(on*e)):n<1.75?-Fr(en(on*(n-=1.5)),e):(e-=Fr(2,e),fn(on*e))}(r),0===s)return e;u=D(on/f(s*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-D(r),r>=an-1+.27?(b=1-r,o=0):r>=an-1-.27?(b=r-(cn-1),o=1):(b=r,o=2)):(w=0,r>=an+.27?(b=2-r,o=0):r>=an-.27?(b=r-cn,o=1):(b=r-1,o=2)),o){case 0:l=.07721566490153287+(N=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),c=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(y=b*l+c)-.5*b;break;case 1:l=.48383612272381005+(p=(N=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(p),c=p*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(p)-.1475877229945939,a=.06462494023913339+p*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(p),w+=(y=N*l-(-3638676997039505e-33-p*(c+b*a)))-.12148629053584961;break;case 2:l=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),c=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),w+=-.5*b+l/c}else if(r<8)switch(y=(b=r-(o=K(r)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),v=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),w=.5*b+y/v,N=1,o){case 7:N*=b+6;case 6:N*=b+5;case 5:N*=b+4;case 4:N*=b+3;case 3:w+=D(N*=b+2)}else r<0x400000000000000?(s=D(r),p=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=N*N),w=(r-.5)*(s-1)+p):w=r*(D(r)-1);return n&&(w=u-w),w}var yn=.6931471803691238,vn=1.9082149292705877e-10;function sn(r){var n,i,f,o,a,c,l,y,v,s;if(r<-1||t(r))return NaN;if(-1===r)return u;if(r===e)return r;if(0===r)return r;if(s=1,(f=r<0?-r:r)<.41421356237309503){if(f<1.862645149230957e-9)return f<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,o=r,i=1)}return 0!==s&&(f<9007199254740992?(a=(s=((i=M(v=1+r))>>20)-q)>0?1-(v-r):r-(v-1),a/=v):(s=((i=M(v=r))>>20)-q,a=0),(i&=1048575)<434334?v=Y(v,1072693248|i):(s+=1,v=Y(v,1071644672|i),i=1048576-i>>2),o=v-1),n=.5*o*o,0===i?0===o?s*yn+(a+=s*vn):s*yn-((y=n*(1-.6666666666666666*o))-(s*vn+a)-o):(y=(l=(c=o/(2+o))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(l),0===s?o-(n-c*(n+y)):s*yn-(n-(c*(n+y)+(s*vn+a))-o))}function pn(r){return 0===r&&1/r===u}function bn(r){return n(r/2)}function Nn(r){return bn(r>0?r-1:r+1)}var wn=Math.sqrt,dn=!0===G?0:1,hn=new m(1),An=new w(hn.buffer);function _n(r,n){return hn[0]=r,An[dn]=n>>>0,hn[0]}function mn(r){return 0|r}var gn=1048576,Un=[1,1.5],jn=[0,.5849624872207642],In=[0,1.350039202129749e-8],On=1048575,Sn=1048576,En=1083179008,Fn=1e300,Tn=1e-300,Hn=[0,0],Gn=[0,0];function Pn(r,o){var a,c,l,y,v,s,p,b,N,w,d,h,A,_;if(t(r)||t(o))return NaN;if(Sr.assign(o,Hn,1,0),v=Hn[0],0===Hn[1]){if(0===o)return 1;if(1===o)return r;if(-1===o)return 1/r;if(.5===o)return wn(r);if(-.5===o)return 1/wn(r);if(2===o)return r*r;if(3===o)return r*r*r;if(4===o)return(r*=r)*r;if(i(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(n===e)?0:e}(r,o)}if(Sr.assign(r,Hn,1,0),y=Hn[0],0===Hn[1]){if(0===y)return function(r,n){return n===u?e:n===e?0:n>0?Nn(n)?r:0:Nn(n)?Fr(e,r):e}(r,o);if(1===r)return 1;if(-1===r&&Nn(o))return-1;if(i(r))return r===u?Pn(-0,-o):o<0?0:e}if(r<0&&!1===n(o))return(r-r)/(r-r);if(l=f(r),a=y&yr|0,c=v&yr|0,p=v>>>31|0,s=(s=y>>>31|0)&&Nn(o)?-1:1,c>1105199104){if(c>1139802112)return function(r,n){return(M(r)&yr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,o);if(a<1072693247)return 1===p?s*Fn*Fn:s*Tn*Tn;if(a>1072693248)return 0===p?s*Fn*Fn:s*Tn*Tn;d=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=_n(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(Gn,l)}else d=function(r,n,t){var e,u,i,f,o,a,c,l,y,v,s,p,b,N,w,d,h,A,_,m,g;return A=0,t<gn&&(A-=53,t=M(n*=9007199254740992)),A+=(t>>20)-q|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=gn),f=_n(u=(d=(n=Y(n,t))-(c=Un[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Y(0,e+=m<<18),w=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=_n(a=3+(i=f*f)+(w+=(o=h*(d-f*a-f*(n-(a-c))))*(f+u)),0),b=(s=-7.028461650952758e-9*(y=_n(y=(d=f*a)+(h=o*a+(w-(a-3-i))*u),0))+.9617966939259756*(h-(y-d))+In[m])-((p=_n(p=(v=.9617967009544373*y)+s+(l=jn[m])+(N=A),0))-N-l-v),r[0]=p,r[1]=b,r}(Gn,l,a);if(h=(w=(o-(b=_n(o,0)))*d[0]+o*d[1])+(N=b*d[0]),Sr.assign(h,Hn,1,0),A=mn(Hn[0]),_=mn(Hn[1]),A>=En){if(0!=(A-En|_))return s*Fn*Fn;if(w+8008566259537294e-32>h-N)return s*Fn*Fn}else if((A&yr)>=1083231232){if(0!=(A-3230714880|_))return s*Tn*Tn;if(w<=h-N)return s*Tn*Tn}return h=function(r,n,t){var e,u,i,f,o,a,c,l,y,v;return y=((l=r&yr|0)>>20)-q|0,c=0,l>1071644672&&(u=Y(0,((c=r+(Sn>>y+1)>>>0)&~(On>>(y=((c&yr)>>20)-q|0)))>>>0),c=(c&On|Sn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=mn(r=M(a=1-((a=(i=.6931471824645996*(u=_n(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):Y(a,r)}(A,N,w),s*h}var kn=1.4426950408889634,xn=1/(1<<28);function Mn(r){var n;return t(r)||r===e?r:r===u?0:r>709.782712893384?e:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xn?1+r:function(r,n,t){var e,u,i,f;return Pr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=K(r<0?kn*r-.5:kn*r+.5)),1.9082149292705877e-10*n,n)}function Ln(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Mn(r),2.5066282746310007*(t=r>143.01608?(e=Pn(r,.5*r-.25))*(e/t):Pn(r,r-.5)/t)*n}function Vn(r,n){return n/((1+.5772156649015329*r)*r)}function Wn(i){var o,a,c,l;if(n(i)&&i<0||i===u||t(i))return NaN;if(0===i)return pn(i)?u:e;if(i>171.61447887182297)return e;if(i<-170.5674972726612)return 0;if((a=f(i))>33)return i>=0?Ln(i):(o=0==(1&(c=r(a)))?-1:1,(l=a-c)>.5&&(l=a-(c+=1)),l=a*fn(on*l),o*on/(f(l)*Ln(a)));for(l=1;i>=3;)l*=i-=1;for(;i<0;){if(i>-1e-9)return Vn(i,l);l/=i,i+=1}for(;i<2;){if(i<1e-9)return Vn(i,l);l/=i,i+=1}return 2===i?l:l*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(i-=2)}function Yn(r){return 0===r&&1/r===e}var qn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Cn=qn.length;function zn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,i;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,i=0;i<Cn;i++)t=e,u=n*(e=u)-t+qn[i];return.5*(u-t)}(2*Pn(10/r,2)-1)/r:1/(12*r)}function Bn(r,n){var i,f,o;return f=function(r,n){var i,f,o,a;if(2===(i=arguments.length))return t(r)||t(n)?NaN:r===u||n===u?u:r===n&&0===r?pn(r)?r:n:r<n?r:n;for(f=e,a=0;a<i;a++){if(t(o=arguments[a])||o===u)return o;(o<f||o===f&&0===o&&pn(o))&&(f=o)}return f}(r,n),o=function(r,n){var i,f,o,a;if(2===(i=arguments.length))return t(r)||t(n)?NaN:r===e||n===e?e:r===n&&0===r?Yn(r)?r:n:r>n?r:n;for(f=u,a=0;a<i;a++){if(t(o=arguments[a])||o===e)return o;(o>f||o===f&&0===o&&Yn(o))&&(f=o)}return f}(r,n),f<0?NaN:0===f?e:o===e?u:f>=10?(i=zn(f)+zn(o)-zn(f+o),-.5*D(o)+.9189385332046728+i+(f-.5)*D(f/(f+o))+o*sn(-f/(f+o))):o>=10?(i=zn(o)-zn(f+o),ln(f)+i+f-f*D(f+o)+(o-.5)*sn(-f/(f+o))):D(Wn(f)*(Wn(o)/Wn(f+o)))}return function r(e,i){return t(e)||t(i)?NaN:n(e)&&n(i)?e<0?r(-e+i-1,i):i<0?u:0===i?0:1===i?D(f(e)):e<i?u:e-i<2?r(e,e-i):-D(e+1)-Bn(e-i+1,i+1):NaN}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).binomcoefln=n();
//# sourceMappingURL=browser.js.map
