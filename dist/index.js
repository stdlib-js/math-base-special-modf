"use strict";var A=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var O=A(function(B,c){
var W=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/number-float64-base-to-words/dist'),S=require('@stdlib/number-float64-base-from-words/dist'),F=require('@stdlib/constants-float64-pinf/dist'),G=require('@stdlib/constants-float64-exponent-bias/dist'),R=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),g=require('@stdlib/constants-float64-high-word-significand-mask/dist'),q=require('@stdlib/constants-float64-num-high-word-significand-bits/dist'),m=4294967295,I=[0,0];function T(i,r,n,a){var _,e,N,v;return i<1?i<0?(T(-i,r,n,a),r[a]*=-1,r[a+n]*=-1,r):i===0?(r[a]=i,r[a+n]=i,r):(r[a]=0,r[a+n]=i,r):W(i)?(r[a]=NaN,r[a+n]=NaN,r):i===F?(r[a]=F,r[a+n]=0,r):(E.assign(i,I,1,0),_=I[0],e=I[1],N=(_&R)>>q|0,N-=G|0,N<q?(v=g>>N|0,(_&v|e)===0?(r[a]=i,r[a+n]=0,r):(_&=~v,v=S(_,0),r[a]=v,r[a+n]=i-v,r)):N>51||(v=m>>>N-q,(e&v)===0)?(r[a]=i,r[a+n]=0,r):(e&=~v,v=S(_,e),r[a]=v,r[a+n]=i-v,r))}c.exports=T
});var H=A(function(C,D){
var p=O();function M(i){return p(i,[0,0],1,0)}D.exports=M
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=H(),h=O();P(L,"assign",h);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
