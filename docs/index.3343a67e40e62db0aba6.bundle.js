!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var r=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(s[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var s=n(5);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){t.exports=n.p+"ebf0f11fdb6186dde66c63b5c54038de.png"},function(t,e,n){var s=n(6);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){var s=n(7);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@keyframes logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host header{display:flex;flex-direction:column}:host header small{display:block}:host header a{height:40vh;background-size:contain;background-position:50%;background-repeat:no-repeat;animation:logo-spin 30s linear infinite}:host header h1{margin:5px;padding:0 0 20px;color:#fff;text-shadow:1px 1px 2px #3e6726}@media only screen and (max-width:400px){:host header h1{font-size:1.8em}}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host p{color:#3c6919;font-size:1.75rem;margin:5px}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host{min-height:80vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}",""])},function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=e;for(;s!==n;){const e=s.nextSibling;t.removeChild(s),s=e}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${h}`),d="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const r=[],i=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let i=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(c)>=0&&i++;for(;i-- >0;){const r=t.strings[s],i=y.exec(r)[2],o=i.toLowerCase()+d,a=e.getAttribute(o).split(p);this.parts.push({type:"attribute",index:n,name:i,strings:a}),e.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===e.tagName&&i(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const i=e.parentNode,o=t.split(p),a=o.length-1;for(let t=0;t<a;t++)i.insertBefore(""===o[t]?m():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++n});""===o[a]?(i.insertBefore(m(),e),r.push(e)):e.data=o[a],s+=a}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&n!==l||(n++,t.insertBefore(m(),e)),l=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(r.push(e),n--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};i(e);for(const t of r)t.parentNode.removeChild(t)}}const f=t=>-1!==t.index,m=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const r=t=>{const i=document.createTreeWalker(t,133,null,!1);let o=i.nextNode();for(;n<e.length&&null!==o;){const t=e[n];if(f(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&r(o.content),o=i.nextNode();else this._parts.push(void 0),n++}};return r(t),i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],s=y.exec(t);e+=s?t.substr(0,s.index)+s[1]+s[2]+d+s[3]+c:t+h}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||v(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=m()),t._insert(this.endNode=m())}insertAfterPart(t){t._insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(v(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const n=new g(e,t.processor,this.options),s=n._clone();n.update(t.values),this._commitNode(s),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const r of t)void 0===(n=e[s])&&(n=new w(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(r),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class P extends S{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends b{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=E(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];return"."===r?new P(t,e.slice(1),n).parts:"@"===r?[new A(t,e.slice(1),s.eventContext)]:"?"===r?[new x(t,e.slice(1),n)]:new S(t,e,n).parts}handleTextExpression(t){return new w(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(c);return void 0===(n=e.keyString.get(s))&&(n=new u(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const V=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return new _(t,n,"html",T)},R=133;function M(t,e){const n=t.element.content,s=t.parts,r=document.createTreeWalker(n,R,null,!1);let i=z(s),o=s[i],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[i=z(s,i)]}c.forEach(t=>t.parentNode.removeChild(t))}const U=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,R,null,!1);for(;n.nextNode();)e++;return e},z=function(t){for(let e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){const n=t[e];if(f(n))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const $=t=>e=>{const n=q(e.type,t);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const i=e.strings.join(c);if(void 0===(r=s.keyString.get(i))){const n=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,t),r=new u(e,n),s.keyString.set(i,r)}return s.stringsArray.set(e.strings,r),r},F=["html","svg"],I=new Set,H=(t,e,n)=>{I.add(n);const s=t.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const r=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{F.forEach(e=>{const n=V.get(q(e,t));void 0!==n&&n.keyString.forEach(t=>{const e=t.element.content,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),M(t,n)})})})(n),function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const s=t.element.content,r=t.parts;if(null==n)return void s.appendChild(e);const i=document.createTreeWalker(s,R,null,!1);let o=z(r),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=U(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=z(r,o);return}o=z(r,o)}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),M(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:B},D=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Y=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const s=this[t];this[n]=e,this.requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:B)(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||W,r="function"==typeof s?s:s.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||W.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Y,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,r=s._attributeNameForProperty(t,n);if(void 0!==r){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const s=this.constructor,r=s._classProperties.get(t)||J;s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|K;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Y}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Z.finalized=!0;nt((t,e)=>t.querySelector(e)),nt((t,e)=>t.querySelectorAll(e));const tt=(t,e,n)=>{Object.defineProperty(e,n,t)},et=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function nt(t){return e=>(n,s)=>{const r={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==s?tt(r,n,s):et(r,n)}}const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const rt=t=>t.flat?t.flat(1/0):function t(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,r=e.length;s<r;s++){const r=e[s];Array.isArray(r)?t(r,n):n.push(r)}return n}(t);class it extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){rt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}it.finalized=!0,it.render=((t,e,n)=>{const s=n.scopeName,r=j.has(e),i=e instanceof ShadowRoot&&L&&t instanceof _,a=i&&!I.has(s),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=j.get(e);void 0===s&&(o(e,e.firstChild),j.set(e,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:$(s)},n)),a){const t=j.get(l);j.delete(l),t.value instanceof g&&H(l,t.value.template,s),o(e,e.firstChild),e.appendChild(l),j.set(e,t)}!r&&i&&window.ShadyCSS.styleElement(e.host)});var ot,at,lt,ct,ht=n(1),pt=n.n(ht),dt=n(2),ut=n.n(dt);let ft=(ot=Object,at=ot.getPrototypeOf||function(t){return t.__proto__},lt=ot.setPrototypeOf||function(t,e){return t.__proto__=e,t},ct="object"==typeof Reflect?Reflect.construct:function(t,e,n){var s,r=[null];return r.push.apply(r,e),s=t.bind.apply(t,r),lt(new s,n.prototype)},function(t){var e=at(t);return lt(t,lt(function(){return ct(e,arguments,at(this).constructor)},e))})(class extends it{render(){return k`
      <style>
        ${pt.a}
      </style>

      <header>
        <a href="https://projectevergreen.github.io/" title="Project Evergreen home link" style="background-image: url(${ut.a})">&nbsp;</a>
        <h1>
          <small>Welcome to</small>
          Create&nbsp;Evergreen&nbsp;App!</h1>
      </header>
    `}});customElements.define("eve-header",ft);var mt=n(3),yt=n.n(mt);let gt=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},s="object"==typeof Reflect?Reflect.construct:function(t,e,s){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,s.prototype)};return function(t){var r=e(t);return n(t,n(function(){return s(r,arguments,e(this).constructor)},r))}}(Object)(class extends it{render(){return k`
      <style>
        ${yt.a}
      </style>

      <div>
        <p>To get started, edit <code>src/pages/home/home.js</code>!</p>
      </div>
    `}});customElements.define("eve-home-page",gt);var _t=n(4),vt=n.n(_t);let St=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},s="object"==typeof Reflect?Reflect.construct:function(t,e,s){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,s.prototype)};return function(t){var r=e(t);return n(t,n(function(){return s(r,arguments,e(this).constructor)},r))}}(Object)(class extends it{render(){return k`
      <style>
        ${vt.a}
      </style>

      <div>
        <section>
          <eve-header></eve-header>
        </section>
        <section>
          <eve-home-page></eve-home-page>
        </section>
      </div>
    `}});customElements.define("eve-app",St)}]);