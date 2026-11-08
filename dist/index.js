"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(q){throw (r=0, q)}};};var s=v(function(l,n){
var u=require('@stdlib/math-base-assert-is-integer/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-betaln/dist'),o=require('@stdlib/math-base-special-abs/dist'),a=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/constants-float64-ninf/dist');function i(e,r){return t(e)||t(r)?NaN:!u(e)||!u(r)?NaN:e<0?i(-e+r-1,r):r<0?f:r===0?0:r===1?a(o(e)):e<r?f:e-r<2?i(e,e-r):-a(e+1)-N(e-r+1,r+1)}n.exports=i
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
