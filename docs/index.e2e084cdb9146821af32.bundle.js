!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([s]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r=n(5);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){t.exports=n.p+"a5c144887f580fe4d4418dea87a3926a.png"},function(t,e,n){var r=n(6);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(7);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@keyframes logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host header{background-color:#fff}:host header img{animation:logo-spin 30s linear infinite;display:inline-block;height:100px;width:100px}:host header h1{color:#020202;margin:5px;padding:0}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host{color:#fff}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host section{text-align:center}",""])},function(t,e,n){"use strict";n.r(e);
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
const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const a=[],l=e=>{const p=e.content,h=document.createTreeWalker(p,133,null,!1);let d,f;for(;h.nextNode();){n++,d=f;const e=f=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(r)>=0&&l++;for(;l-- >0;){const r=t.strings[s],a=u.exec(r)[2],l=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),c=e.getAttribute(l).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:c}),e.removeAttribute(l),s+=c.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(r)<0)continue;const o=e.parentNode,l=t.split(i),u=l.length-1;s+=u;for(let t=0;t<u;t++)o.insertBefore(""===l[t]?c():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:n++});o.insertBefore(""===l[u]?c():document.createTextNode(l[u]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===r){const t=e.parentNode,r=e.previousSibling;null===r||r!==d||r.nodeType!==Node.TEXT_NODE?t.insertBefore(c(),e):n--,this.parts.push({type:"node",index:n++}),a.push(e),null===e.nextSibling?t.insertBefore(c(),e):n--,f=d,s++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,c=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,p=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function h(t,e){const n=t.element.content,r=t.parts,s=document.createTreeWalker(n,p,null,!1);let i=f(r),o=r[i],a=-1,l=0;const c=[];let u=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,o=r[i=f(r,i)]}c.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,p,null,!1);for(;n.nextNode();)e++;return e},f=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
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
const m=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,_=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}},y=new WeakMap,g=t=>"function"==typeof t&&y.has(t),v={};
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
class b{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this._getTemplate=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,r=0;const s=t=>{const i=document.createTreeWalker(t,133,null,!1);let o=i.nextNode();for(;n<e.length&&null!==o;){const t=e[n];if(l(t))if(r===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings));n++}else r++,"TEMPLATE"===o.nodeName&&s(o.content),o=i.nextNode();else this._parts.push(void 0),n++}};return s(t),m&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */class x{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const a=t.lastIndexOf(">");!(n=(a>-1||n)&&-1===t.indexOf("<",a+1))&&o&&(e=e.replace(u,(t,e,n,r)=>"style"===n?`${e}style$${r}`:t)),e+=n?s:r}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const P=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||P(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=c()),t._insert(this.endNode=c())}insertAfterPart(t){t._insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;g(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}const t=this._pendingValue;t!==v&&(P(t)?t!==this.value&&this._commitText(t):t instanceof x?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.templateFactory),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const s of t)void 0===(n=e[r])&&(n=new N(this.templateFactory),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(s),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){_(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;g(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}if(this._pendingValue===v)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=v}}class E extends S{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends w{}class V{constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;g(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}this._pendingValue!==v&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=v)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}
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
 */const A=new Map,C=new WeakMap;
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
 */function M(t,e,n=function(t){let e=A.get(t.type);void 0===e&&(e=new Map,A.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new a(t,t.getTemplateElement()),e.set(t.strings,n)),n}){let r=C.get(e);void 0===r&&(_(e,e.firstChild),C.set(e,r=new N(n)),r.appendInto(e)),r.setValue(t),r.commit()}
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
 */const j=new class{handleAttributeExpressions(t,e,n){const r=e[0];return"."===r?new E(t,e.slice(1),n).parts:"@"===r?[new V(t,e.slice(1))]:"?"===r?[new T(t,e.slice(1),n)]:new S(t,e,n).parts}handleTextExpression(t){return new N(t)}},R=(t,...e)=>new x(t,e,"html",j),U=(t,e)=>`${t}--${e}`;
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
 */let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),F=!1);const $=t=>e=>{const n=U(e.type,t);let r=A.get(n);void 0===r&&(r=new Map,A.set(n,r));let s=r.get(e.strings);if(void 0===s){const n=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(n,t),s=new a(e,n),r.set(e.strings,s)}return s},k=["html","svg"];const I=new Set,q=(t,e,n)=>{I.add(n);const r=t.querySelectorAll("style");if(0===r.length)return;const s=document.createElement("style");for(let t=0;t<r.length;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}if(function(t){k.forEach(e=>{const n=A.get(U(e,t));void 0!==n&&n.forEach(t=>{const e=t.element.content,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),h(t,n)})})}(n),function(t,e,n=null){const r=t.element.content,s=t.parts;if(null===n||void 0===n)return void r.appendChild(e);const i=document.createTreeWalker(r,p,null,!1);let o=f(s),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=d(e),n.parentNode.insertBefore(e,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=f(s,o);return}o=f(s,o)}}(e,s,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(s,e.element.content.firstChild);const t=new Set;t.add(s),h(e,t)}};function L(t,e){return function(t){if(Array.isArray(t))return t}
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
 */(t)||function(t,e){var n=[],r=!0,s=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){s=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(s)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const z=t=>null!==t,W=t=>t?"":null,B=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,reflect:!1,hasChanged:B},D=new Promise(t=>t(!0)),X=1,G=4,J=8;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const n of this._classProperties){var e=L(n,2);const r=e[0],s=e[1],i=this._attributeNameForProperty(r,s);void 0!==i&&(this._attributeToPropertyMap.set(i,r),t.push(i))}return t}static createProperty(t,e=H){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(r){const s=this[t];this[n]=r,this._requestPropertyUpdate(t,s,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=B){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const r=n===Boolean?z:"function"==typeof n?n:n.fromAttribute;return r?r(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?W:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const t of this.constructor._classProperties){const e=L(t,1)[0];if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}}_applyInstanceProperties(){for(const e of this._instanceProperties){var t=L(e,2);const n=t[0],r=t[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&X?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=H){const r=this.constructor,s=r._propertyValueToAttribute(e,n);if(void 0!==s){const e=r._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|J,null===s?this.removeAttribute(e):this.setAttribute(e,s),this._updateState=this._updateState&~J)}}_attributeToProperty(t,e){if(!(this._updateState&J)){const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||H;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|G;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&G}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const t of this._reflectingProperties){var e=L(t,2);const n=e[0],r=e[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}Z._attributeToPropertyMap=new Map,Z._finalized=!0,Z._classProperties=new Map,Z.properties={};
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
K((t,e)=>t.querySelector(e)),K((t,e)=>t.querySelectorAll(e));function K(t){return e=>(n,r)=>{Object.defineProperty(n,r,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class Q extends Z{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}Q.render=function(t,e,n){const r=C.has(e);if(M(t,e,$(n)),e instanceof ShadowRoot&&F&&t instanceof x){if(!I.has(n)){const t=C.get(e).value;q(e,t.template,n)}r||window.ShadyCSS.styleElement(e.host)}};var Y=n(1),tt=n.n(Y),et=n(2),nt=n.n(et);let rt=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"==typeof Reflect?Reflect.construct:function(t,e,r){var s,i=[null];return i.push.apply(i,e),s=t.bind.apply(t,i),n(new s,r.prototype)};return function(t){var s=e(t);return n(t,n(function(){return r(s,arguments,e(this).constructor)},s))}}(Object)(class extends Q{render(){return R`      
      <style>
        ${tt.a}
      </style>

      <header class="header">

        <a href="https://projectevergreen.github.io/">
          <img src=${nt.a} alt="Project Evergreen logo"/>
        </a>

        <h1>Welcome to Create Evergreen App!</h1>
      
      </header>
    `}});customElements.define("eve-header",rt);var st=n(3),it=n.n(st);let ot=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"==typeof Reflect?Reflect.construct:function(t,e,r){var s,i=[null];return i.push.apply(i,e),s=t.bind.apply(t,i),n(new s,r.prototype)};return function(t){var s=e(t);return n(t,n(function(){return r(s,arguments,e(this).constructor)},s))}}(Object)(class extends Q{render(){return R`
      <style>
        ${it.a}
      </style>

      <div>

        <p>To get started, edit <code>src/pages/home/home.js</code>!</p>
      
      </div>
    `}});customElements.define("eve-home-page",ot);var at=n(4),lt=n.n(at);let ct=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"==typeof Reflect?Reflect.construct:function(t,e,r){var s,i=[null];return i.push.apply(i,e),s=t.bind.apply(t,i),n(new s,r.prototype)};return function(t){var s=e(t);return n(t,n(function(){return r(s,arguments,e(this).constructor)},s))}}(Object)(class extends Q{render(){return R`
      <style>
        ${lt.a}
      </style>
      
      <div>

        <section>
          <eve-header></eve-header>
        </section>

        <section>
          <eve-home-page></eve-home-page>
        </section>

      </div>
    `}});customElements.define("eve-app",ct)}]);