// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).rsqrt=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,f=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var l,c,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,n)||f.call(t,n)?(l=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=l):t[n]=e.value),s="get"in e,p="set"in e,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,n,e.get),p&&u&&u.call(t,n,e.set),t};var l=n;function c(t,n,e){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=Math.floor;function p(t){return s(t)===t}var g=4294967295;function y(t){return"number"==typeof t}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return m&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(t,n){return null!=t&&b.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var n,e,r;if(null==t)return v.call(t);e=t[w],n=h(t,w);try{t[w]=void 0}catch(n){return v.call(t)}return r=v.call(t),n?t[w]=e:delete t[w],r}:function(t){return v.call(t)},E=Number,O=E.prototype.toString;var T=d();function _(t){return"object"==typeof t&&(t instanceof E||(T?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function x(t){return y(t)||_(t)}c(x,"isPrimitive",y),c(x,"isObject",_);var S=Number.POSITIVE_INFINITY,F=E.NEGATIVE_INFINITY;function I(t){return t<S&&t>F&&p(t)}function A(t){return y(t)&&I(t)}function P(t){return _(t)&&I(t.valueOf())}function V(t){return A(t)||P(t)}function k(t){return A(t)&&t>=0}function B(t){return P(t)&&t.valueOf()>=0}function N(t){return k(t)||B(t)}function M(t){return Object.keys(Object(t))}c(V,"isPrimitive",A),c(V,"isObject",P),c(N,"isPrimitive",k),c(N,"isObject",B);var R,L=void 0!==Object.keys;function G(t){return"[object Arguments]"===j(t)}R=function(){return G(arguments)}();var U=R;function Y(t){return"string"==typeof t}var q=String.prototype.valueOf;var C=d();function X(t){return"object"==typeof t&&(t instanceof String||(C?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function H(t){return Y(t)||X(t)}function W(t){return t!=t}function D(t){return y(t)&&W(t)}function z(t){return _(t)&&W(t.valueOf())}function J(t){return D(t)||z(t)}c(H,"isPrimitive",Y),c(H,"isObject",X),c(J,"isPrimitive",D),c(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&Q&&H(t)?!D(n=+n)&&A(n)&&n>=0&&n<t.length:e)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var tt=U?G:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!Z(t,"callee")},nt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}c(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!$(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(et));var rt=Z((function(){}),"prototype"),ot=!Z({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,n,e){var r,o;if(!it(t)&&!Y(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!A(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(J(n)){for(;o<r;o++)if(J(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var at=/./;function ft(t){return"boolean"==typeof t}var lt=Boolean.prototype.toString;var ct=d();function st(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function pt(t){return ft(t)||st(t)}function gt(){return new Function("return this;")()}c(pt,"isPrimitive",ft),c(pt,"isObject",st);var yt="object"==typeof self?self:null,mt="object"==typeof window?window:null,dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vt="object"==typeof dt?dt:null;var bt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return gt()}if(yt)return yt;if(mt)return mt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=bt.document&&bt.document.childNodes,wt=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var Et=/^\s*function\s*([^(]*)/i;function Ot(t){var n,e,r,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Et.exec(r.toString()))return n[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}c(jt,"REGEXP",Et);var Tt="function"==typeof at||"object"==typeof wt||"function"==typeof ht?function(t){return Ot(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Ot(t).toLowerCase():n};function _t(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var Ft=function(){var t;if("undefined"===Tt(St))return!1;for(t in St)try{-1===ut(xt,t)&&h(St,t)&&null!==St[t]&&"object"===Tt(St[t])&&_t(St[t])}catch(t){return!0}return!1}(),It="undefined"!=typeof window;var At,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];At=L?function(){return 2!==(M(arguments)||"").length}(1,2)?function(t){return tt(t)?M(nt.call(t)):M(t)}:M:function(t){var n,e,r,o,i,u,a;if(o=[],tt(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!et(t))return o;e=rt&&r}for(i in t)e&&"prototype"===i||!h(t,i)||o.push(String(i));if(ot)for(n=function(t){if(!1===It&&!Ft)return _t(t);try{return _t(t)}catch(t){return!1}}(t),a=0;a<Pt.length;a++)u=Pt[a],n&&"constructor"===u||!h(t,u)||o.push(String(u));return o};var Vt=At;function kt(t){return"function"===Tt(t)}var Bt,Nt=Object.getPrototypeOf;Bt=kt(Object.getPrototypeOf)?Nt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Mt=Bt;var Rt=Object.prototype;function Lt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!$(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Mt(t))}(t),!n||!h(t,"constructor")&&h(n,"constructor")&&kt(n.constructor)&&"[object Function]"===j(n.constructor)&&h(n,"isPrototypeOf")&&kt(n.isPrototypeOf)&&(n===Rt||function(t){var n;for(n in t)if(!h(t,n))return!1;return!0}(t)))}function Gt(t,n){var e,r,o,i,u,a,f,l=!0;if(!et(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Lt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(h(n,"duplicates")&&!ft(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Vt(t)).length,u={},l)for(f=0;f<r;f++)h(u,i=t[o=e[f]])?(a=u[i],$(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(f=0;f<r;f++)u[t[o=e[f]]]=o;return u}var Ut=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Yt(){return Ut.slice()}var qt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return qt.slice()}function Xt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ht(t,n,e){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Ct,"enum",Xt),function(t,n){var e,r,o;for(e=Vt(n),o=0;o<e.length;o++)Ht(t,r=e[o],n[r])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Dt(){return{bool:Wt.bool,int8:Wt.int8,uint8:Wt.uint8,uint8c:Wt.uint8c,int16:Wt.int16,uint16:Wt.uint16,int32:Wt.int32,uint32:Wt.uint32,int64:Wt.int64,uint64:Wt.uint64,float32:Wt.float32,float64:Wt.float64,complex64:Wt.complex64,complex128:Wt.complex128,binary:Wt.binary,generic:Wt.generic,notype:Wt.notype,userdefined_type:Wt.userdefined_type}}c(Yt,"enum",Dt),function(t,n){var e,r,o;for(e=Vt(n),o=0;o<e.length;o++)Ht(t,r=e[o],n[r])}(Yt,Dt());var zt=Gt(Dt(),{duplicates:!1});var Jt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Kt(t){var n=typeof t;return"string"===n?null===function(t){var n=Jt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=zt[t];return"string"==typeof n?n:null}(t):null}function Qt(t,n,e){var r,o,i,u,a,f,l,c,s;if(!("object"==typeof(s=t)&&null!==s&&"number"==typeof s.length&&p(s.length)&&s.length>=0&&s.length<=g))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!k(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!k(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],f=2*a,c=2*n,l=0;l<=f;l++)0===l?l===c?i.push("() => ("):i.push("("):l===f?l===c?i.push(") => ()"):i.push(")"):l===c?i.push(") => ("):l%2==1?i.push(""):i.push(", ");for(l=0;l<r;l++)null===(u=Kt(t[l]))&&(u=t[l]),i[2*(c=l%a)+1]=u,c===a-1&&o.push(i.join(""));return o}function Zt(t,n,e,r){return c(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),c(e,"nin",t.nin),c(e,"nout",t.nout),function(t,n,e){l(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Qt(n,t.nin,t.nout)})),e}var $t={nargs:7,nin:1,nout:1},tn=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15];function nn(t){return A(t)&&t>0}function en(t){return P(t)&&t.valueOf()>0}function rn(t){return nn(t)||en(t)}c(rn,"isPrimitive",nn),c(rn,"isObject",en);var on=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=g}(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(kt);function un(t){return Math.abs(t)}function an(t,n,e,r,o,i,u,a,f){var l,c,s,p;for(l=i,s=0;s<t;s++){for(c=f,p=0;p<n&&e[l+p*o]===u[c];p++)c+=a;if(p===n)return s;l+=r}return-1}function fn(t,n,e,r,o,i){var u,a,f,l,c,s;if(kt(t))s=t;else if(!on(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!it(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!it(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!rn(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!k(o))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+o+"`.");if(!k(i))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+i+"`.");if(0===(f=o+i))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!A(l=n.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=t.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===r)a=!1;else{if(4*f+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=o*(u=a?4:3)+1,function(){var p,g,y,m,d,v,b,h,w,j,E,O;if((v=arguments.length)!==r){if(v<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!A(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(d=[h],m=[],E=1;E<r;E+=u)m.push(arguments[E]);for(p=[],E=3;E<r;E+=u){if(!A(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(g=[],E=4;E<r;E+=u){if(!k(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");g.push(w)}for(y=[],E=2;E<r;E+=u){if(!it(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=g[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*un(p[O])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");y.push(w)}if((b=an(l,f,n,f,1,0,m,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||t[b];e?a?j(y,d,p,g,e[b]):j(y,d,p,e[b]):a?j(y,d,p,g):j(y,d,p);if(1===i)return y[f-1];if(0===i)return;return y.slice(o)}}function ln(t,n){return t[n]}function cn(t,n){return t.get(n)}function sn(t,n,e){t[n]=e}function pn(t,n,e){t.set(e,n)}function gn(t,n,e,r){var o,i,u,a;return(u=t[0]).get&&u.set&&(o=cn),(a=t[1]).get&&a.set&&(i=pn),o||i?function(t,n,e,r,o){var i,u,a,f,l,c,s,p,g,y;if(!((g=n[0])<=0))for(l=(a=e[0])<0?(1-g)*a:0,c=(f=e[1])<0?(1-g)*f:0,s=t[0],p=t[1],i=r[0],u=r[1],y=0;y<g;y++)u(p,c,o(i(s,l))),l+=a,c+=f}(t,n,e,[o=o||ln,i=i||sn],r):function(t,n,e,r){var o,i,u,a,f,l,c,s;if(!((c=n[0])<=0))for(u=(o=e[0])<0?(1-c)*o:0,a=(i=e[1])<0?(1-c)*i:0,f=t[0],l=t[1],s=0;s<c;s++)l[a]=r(f[u]),u+=o,a+=i}(t,n,e,r)}function yn(t,n,e,r,o){var i,u,a,f;return(a=t[0]).get&&a.set&&(i=cn),(f=t[1]).get&&f.set&&(u=pn),i||u?function(t,n,e,r,o,i){var u,a,f,l,c,s,p,g,y,m;if(!((y=n[0])<=0))for(c=r[0],s=r[1],f=e[0],l=e[1],p=t[0],g=t[1],u=o[0],a=o[1],m=0;m<y;m++)a(g,s,i(u(p,c))),c+=f,s+=l}(t,n,e,r,[i=i||ln,u=u||sn],o):function(t,n,e,r,o){var i,u,a,f,l,c,s,p;if(!((s=n[0])<=0))for(a=r[0],f=r[1],i=e[0],u=e[1],l=t[0],c=t[1],p=0;p<s;p++)c[f]=o(l[a]),a+=i,f+=u}(t,n,e,r,o)}c(gn,"ndarray",yn);var mn=Gt(Dt(),{duplicates:!1});var dn=Dt();function vn(t){var n=typeof t;return"number"===n?function(t){var n=mn[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=dn[t];return"number"==typeof n?n:null}(t):null}var bn=Math.sqrt;function hn(t){return 1/bn(t)}var wn="function"==typeof Math.fround?Math.fround:null,jn="function"==typeof Float32Array;var En="function"==typeof Float32Array?Float32Array:null;var On,Tn="function"==typeof Float32Array?Float32Array:void 0;On=function(){var t,n,e;if("function"!=typeof En)return!1;try{n=new En([1,3.14,-3.14,5e40]),e=n,t=(jn&&e instanceof Float32Array||"[object Float32Array]"===j(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===S}catch(n){t=!1}return t}()?Tn:function(){throw new Error("not implemented")};var _n=new On(1);var xn="function"==typeof wn?wn:function(t){return _n[0]=t,_n[0]};function Sn(t){return xn(1/bn(xn(t)))}var Fn=[hn,hn,Sn,hn,hn,hn,hn,hn,Sn,hn,hn,Sn,hn,hn,hn,hn,Sn,hn,hn,Sn,hn,hn,Sn,hn,hn],In=fn(gn,tn,Fn,$t.nargs,$t.nin,$t.nout);function An(t,n,e,r,o,i,u){return In(t,vn(n),e,r,vn(o),i,u)}var Pn=fn(yn,tn,Fn,$t.nargs+$t.nin+$t.nout,$t.nin,$t.nout);return c(An,"ndarray",(function(t,n,e,r,o,i,u,a,f){return Pn(t,vn(n),e,r,o,vn(i),u,a,f)})),Zt($t,tn,An,!1),Zt($t,tn,An.ndarray,!0),An}));
//# sourceMappingURL=browser.js.map
