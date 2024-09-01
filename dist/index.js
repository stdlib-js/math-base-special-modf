"use strict";var A=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var O=A(function(K,E){
var W=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/number-float64-base-to-words/dist'),I=require('@stdlib/number-float64-base-from-words/dist'),c=require('@stdlib/constants-float64-pinf/dist'),m=require('@stdlib/constants-float64-exponent-bias/dist'),p=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),D=require('@stdlib/constants-float64-high-word-significand-mask/dist'),H=4294967295,_=[0,0];function S(n,r,v,a){var e,q,N,i;return n<1?n<0?(S(-n,r,v,a),r[a]*=-1,r[a+v]*=-1,r):n===0?(r[a]=n,r[a+v]=n,r):(r[a]=0,r[a+v]=n,r):W(n)?(r[a]=NaN,r[a+v]=NaN,r):n===c?(r[a]=c,r[a+v]=0,r):(g.assign(n,_,1,0),e=_[0],q=_[1],N=(e&p)>>20|0,N-=m|0,N<20?(i=D>>N|0,e&i|q?(e&=~i,i=I(e,0),r[a]=i,r[a+v]=n-i,r):(r[a]=n,r[a+v]=0,r)):N>51||(i=H>>>N-20,!(q&i))?(r[a]=n,r[a+v]=0,r):(q&=~i,i=I(e,q),r[a]=i,r[a+v]=n-i,r))}E.exports=S
});var L=A(function(M,F){
var R=O();function G(n){return R(n,[0,0],1,0)}F.exports=G
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=L(),h=O();P(T,"assign",h);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
