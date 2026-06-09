"use strict";var A=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var O=A(function(B,c){
var W=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/number-float64-base-to-words/dist'),S=require('@stdlib/number-float64-base-from-words/dist'),F=require('@stdlib/constants-float64-pinf/dist'),G=require('@stdlib/constants-float64-exponent-bias/dist'),R=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),g=require('@stdlib/constants-float64-high-word-significand-mask/dist'),q=require('@stdlib/constants-float64-num-high-word-significand-bits/dist'),m=4294967295,I=[0,0];function T(i,r,v,a){var _,e,N,n;return i<1?i<0?(T(-i,r,v,a),r[a]*=-1,r[a+v]*=-1,r):i===0?(r[a]=i,r[a+v]=i,r):(r[a]=0,r[a+v]=i,r):W(i)?(r[a]=NaN,r[a+v]=NaN,r):i===F?(r[a]=F,r[a+v]=0,r):(E.assign(i,I,1,0),_=I[0],e=I[1],N=(_&R)>>q|0,N-=G|0,N<q?(n=g>>N|0,(_&n|e)===0?(r[a]=i,r[a+v]=0,r):(_&=~n,n=S(_,0),r[a]=n,r[a+v]=i-n,r)):N>51||(n=m>>>N-q,(e&n)===0)?(r[a]=i,r[a+v]=0,r):(e&=~n,n=S(_,e),r[a]=n,r[a+v]=i-n,r))}c.exports=T
});var H=A(function(C,D){
var p=O();function M(i){return p(i,[0,0],1,0)}D.exports=M
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=H(),h=O();P(L,"assign",h);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
