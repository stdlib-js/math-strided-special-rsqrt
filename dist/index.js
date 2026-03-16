"use strict";var a=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var s=a(function($,B){B.exports={nargs:7,nin:1,nout:1}});var n=a(function(rr,C){C.exports=[12,12,12,17,11,11,11,12,11,17,17,17,6,12,6,17,4,11,4,12,4,17,1,11,1,12,1,17,7,12,7,17,5,11,5,12,5,17,2,11,2,12,2,17,3,11,3,12,3,17]});var y=a(function(er,l){
var r=require('@stdlib/math-base-special-rsqrt/dist'),t=require('@stdlib/math-base-special-rsqrtf/dist'),D=[r,r,t,r,r,r,r,r,t,r,r,t,r,r,r,r,t,r,r,t,r,r,t,r,r];l.exports=D
});var g=a(function(ar,j){
var F=require('@stdlib/strided-dispatch/dist'),G=require('@stdlib/strided-base-unary/dist'),x=require('@stdlib/strided-base-dtype-resolve-enum/dist'),H=n(),f=s(),I=y(),J=F(G,H,I,f.nargs,f.nin,f.nout);function K(i,e,q,o,c,p,d){return J(i,x(e),q,o,x(c),p,d)}j.exports=K
});var _=a(function(tr,R){
var L=require('@stdlib/strided-dispatch/dist'),M=require('@stdlib/strided-base-unary/dist').ndarray,h=require('@stdlib/strided-base-dtype-resolve-enum/dist'),N=n(),u=s(),Q=y(),S=L(M,N,Q,u.nargs+u.nin+u.nout,u.nin,u.nout);function T(i,e,q,o,c,p,d,z,A){return S(i,h(e),q,o,c,h(p),d,z,A)}R.exports=T
});var k=a(function(ir,b){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/strided-base-meta-data-props/dist'),O=s(),P=n(),v=g(),V=_();U(v,"ndarray",V);E(O,P,v,!1);E(O,P,v.ndarray,!0);b.exports=v
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=k(),m,w=X(W(__dirname,"./native.js"));w instanceof Error?m=Y:m=w;module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
