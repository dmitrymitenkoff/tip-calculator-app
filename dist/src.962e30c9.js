parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var t,e,n,r=document.querySelector("#bill"),a=document.querySelector("#tip_6"),o=document.querySelector("#custom-radio-input"),i=document.querySelectorAll("input[name='tip-amount']"),c=document.querySelector("#people"),l=document.querySelector(".tipPerPerson"),u=document.querySelector(".personTotal"),d=document.querySelector("form"),s=document.querySelector("button");function v(){if(t&&e&&n){var r=(e/100*t/n).toFixed(2);l.textContent="$".concat(r);var a=(t/n+parseFloat(r)).toFixed(2);u.textContent="$".concat(a)}}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){t.addEventListener("focus",function(){t.removeAttribute("placeholder")})})}function m(t,e){t.parentElement.querySelector("small").textContent=e}function p(t){t.parentElement.querySelector("small").textContent=""}function g(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){t.parentElement.querySelector("small").textContent=""})}function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){t.value="","custom-radio-input"===t.id?t.setAttribute("placeholder","Custom"):t.setAttribute("placeholder","0")})}f(r,o,c),r.addEventListener("input",function(e){e.target.validity.valid?(p(e.target),t=parseFloat(e.target.value),v()):e.target.validity.patternMismatch?m(e.target,"Invalid number"):e.target.validity.valueMissing&&m(e.target,"Cannot be zero"),s.disabled=!1}),c.addEventListener("input",function(t){t.target.validity.valid?(p(t.target),n=parseFloat(t.target.value),v()):t.target.validity.patternMismatch?m(t.target,"Invalid number"):t.target.validity.valueMissing&&m(t.target,"Cannot be zero"),s.disabled=!1}),o.addEventListener("focus",function(){o.checked=!0,a.checked=!0,i.forEach(function(t){t.checked=!1})}),o.addEventListener("change",function(t){t.target.validity.valid?(e=parseFloat(o.value),p(t.target),v()):t.target.validity.patternMismatch&&m(t.target,"Invalid number"),s.disabled=!1}),i.forEach(function(t){t.addEventListener("input",function(){!0===t.checked&&(g(o),o.value=null,o.checked=!1,a.checked=!1,o.setAttribute("placeholder","Custom"),e=parseInt(t.value),v()),s.disabled=!1})}),s.addEventListener("click",function(t){return t.preventDefault(),g(r,o,c),y(r,o,c),s.disabled=!0,d.submit(),d.reset(),!1});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./app");
},{"./app":"A2T1"}]},{},["Focm"], null)