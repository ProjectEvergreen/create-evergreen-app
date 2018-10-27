!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(s),i=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(s[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var s=n(5);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){t.exports=n.p+"ebf0f11fdb6186dde66c63b5c54038de.png"},function(t,e,n){var s=n(6);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){var s=n(7);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@keyframes logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host header{background-color:#fff;display:flex;flex-direction:column}:host header small{display:block}:host header a{height:40vh;background-size:contain;background-position:50%;background-repeat:no-repeat;animation:logo-spin 30s linear infinite}:host header h1{margin:5px;padding:0 0 20px;color:#020202}@media only screen and (max-width:400px){:host header h1{font-size:1.8em}}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host{color:#fff}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,":host section{text-align:center}",""])},function(t,e,n){"use strict";n.r(e);
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
const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,n=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.removeChild(s),s=e}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${c}`),p=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class h{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const r=[],i=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let c,h;for(;a.nextNode();){n++,c=h;const e=h=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let i=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(l)>=0&&i++;for(;i-- >0;){const r=t.strings[s],i=m.exec(r)[2],o=p&&"style"===i?"style$":/^[a-zA-Z-]*$/.test(i)?i:i.toLowerCase(),a=e.getAttribute(o).split(u);this.parts.push({type:"attribute",index:n,name:i,strings:a}),e.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===e.tagName&&i(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(l)<0)continue;const i=e.parentNode,o=t.split(u),a=o.length-1;s+=a;for(let t=0;t<a;t++)i.insertBefore(""===o[t]?f():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:n++});i.insertBefore(""===o[a]?f():document.createTextNode(o[a]),e),r.push(e)}else if(8===e.nodeType)if(e.nodeValue===l){const t=e.parentNode,i=e.previousSibling;null===i||i!==c||i.nodeType!==Node.TEXT_NODE?t.insertBefore(f(),e):n--,this.parts.push({type:"node",index:n++}),r.push(e),null===e.nextSibling?t.insertBefore(f(),e):n--,h=c,s++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};i(e);for(const t of r)t.parentNode.removeChild(t)}}const d=t=>-1!==t.index,f=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const r=t=>{const i=document.createTreeWalker(t,133,null,!1);let o=i.nextNode();for(;n<e.length&&null!==o;){const t=e[n];if(d(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&r(o.content),o=i.nextNode();else this._parts.push(void 0),n++}};return r(t),i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */class v{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let s=0;s<t;s++){const t=this.strings[s];e+=t;const r=t.lastIndexOf(">");!(n=(r>-1||n)&&-1===t.indexOf("<",r+1))&&p&&(e=e.replace(m,(t,e,n,s)=>"style"===n?`${e}style$${s}`:t)),e+=n?c:l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const y=t=>null===t||!("object"==typeof t||"function"==typeof t);class g{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||y(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(y(t)?t!==this.value&&this._commitText(t):t instanceof v?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),s=n._clone();n.update(t.values),this._commitNode(s),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const r of t)void 0===(n=e[s])&&(n=new x(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(r),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class S extends g{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new w(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class w extends b{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this,this._options),this._options=E(t),s&&this.element.addEventListener(this.eventName,this,this._options),this.value=t,this._pendingValue=a}handleEvent(t){("function"==typeof this.value?this.value:"function"==typeof this.value.handleEvent?this.value.handleEvent:()=>null).call(this.eventContext||this.element,t)}}const E=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const O=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];return"."===r?new S(t,e.slice(1),n).parts:"@"===r?[new T(t,e.slice(1),s.eventContext)]:"?"===r?[new P(t,e.slice(1),n)]:new g(t,e,n).parts}handleTextExpression(t){return new x(t)}};
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
 */function C(t){let e=A.get(t.type);void 0===e&&(e=new Map,A.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new h(t,t.getTemplateElement()),e.set(t.strings,n)),n}const A=new Map,V=new WeakMap,M=(t,...e)=>new v(t,e,"html",O),j=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function R(t,e){const n=t.element.content,s=t.parts,r=document.createTreeWalker(n,j,null,!1);let i=U(s),o=s[i],a=-1,l=0;const c=[];let u=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,o=s[i=U(s,i)]}c.forEach(t=>t.parentNode.removeChild(t))}const k=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,j,null,!1);for(;n.nextNode();)e++;return e},U=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(d(e))return n}return-1};
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
const $=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),F=!1);const L=["html","svg"],z=new Set,I=(t,e,n)=>{z.add(n);const s=t.querySelectorAll("style");if(0===s.length)return;const r=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{L.forEach(e=>{const n=A.get($(e,t));void 0!==n&&n.forEach(t=>{const e=t.element.content,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),R(t,n)})})})(n),function(t,e,n=null){const s=t.element.content,r=t.parts;if(null===n||void 0===n)return void s.appendChild(e);const i=document.createTreeWalker(s,j,null,!1);let o=U(r),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=k(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=U(r,o);return}o=U(r,o)}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),R(e,t)}};function q(t,e){return function(t){if(Array.isArray(t))return t}
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
 */(t)||function(t,e){var n=[],s=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(s=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);s=!0);}catch(t){r=!0,i=t}finally{try{s||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const W=t=>null!==t,B=t=>t?"":null,H=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,reflect:!1,hasChanged:H},X=new Promise(t=>t(!0)),G=1,J=4,Z=8;class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const n of this._classProperties){var e=q(n,2);const s=e[0],r=e[1],i=this._attributeNameForProperty(s,r);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}return t}static createProperty(t,e=D){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(s){const r=this[t];this[n]=s,this._requestPropertyUpdate(t,r,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=H){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const s=n===Boolean?W:"function"==typeof n?n:n.fromAttribute;return s?s(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?B:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const t of this.constructor._classProperties){const e=q(t,1)[0];if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}}_applyInstanceProperties(){for(const e of this._instanceProperties){var t=q(e,2);const n=t[0],s=t[1];this[n]=s}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&G?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=D){const s=this.constructor,r=s._propertyValueToAttribute(e,n);if(void 0!==r){const e=s._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|Z,null===r?this.removeAttribute(e):this.setAttribute(e,r),this._updateState=this._updateState&~Z)}}_attributeToProperty(t,e){if(!(this._updateState&Z)){const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s);this[s]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||D;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|J;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&J}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~J}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const t of this._reflectingProperties){var e=q(t,2);const n=e[0],s=e[1];this._propertyToAttribute(n,this[n],s)}this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}K._attributeToPropertyMap=new Map,K._finalized=!0,K._classProperties=new Map,K.properties={};
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
Q((t,e)=>t.querySelector(e)),Q((t,e)=>t.querySelectorAll(e));function Q(t){return e=>(n,s)=>{Object.defineProperty(n,s,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}
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
class Y extends K{update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Y.render=((t,e,n)=>{const s=n.scopeName,r=V.has(e);if(((t,e,n)=>{let s=V.get(e);void 0===s&&(o(e,e.firstChild),V.set(e,s=new x(Object.assign({templateFactory:C},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,e,Object.assign({templateFactory:(t=>e=>{const n=$(e.type,t);let s=A.get(n);void 0===s&&(s=new Map,A.set(n,s));let r=s.get(e.strings);if(void 0===r){const n=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(n,t),r=new h(e,n),s.set(e.strings,r)}return r})(s)},n)),e instanceof ShadowRoot&&F&&t instanceof v){if(!z.has(s)){const t=V.get(e).value;I(e,t.template,s)}r||window.ShadyCSS.styleElement(e.host)}});var tt=n(1),et=n.n(tt),nt=n(2),st=n.n(nt);let rt=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},s="object"==typeof Reflect?Reflect.construct:function(t,e,s){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,s.prototype)};return function(t){var r=e(t);return n(t,n(function(){return s(r,arguments,e(this).constructor)},r))}}(Object)(class extends Y{render(){return M`      
      <style>
        ${et.a}
      </style>

      <header>

        <a href="https://projectevergreen.github.io/" title="Project Evergreen home link" style="background-image: url(./${st.a})">&nbsp;</a>

        <h1>
          <small>Welcome to</small>
          Create&nbsp;Evergreen&nbsp;App!</h1>
      
      </header>
    `}});customElements.define("eve-header",rt);var it=n(3),ot=n.n(it);let at=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},s="object"==typeof Reflect?Reflect.construct:function(t,e,s){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,s.prototype)};return function(t){var r=e(t);return n(t,n(function(){return s(r,arguments,e(this).constructor)},r))}}(Object)(class extends Y{render(){return M`
      <style>
        ${ot.a}
      </style>

      <div>

        <p>To get started, edit <code>src/pages/home/home.js</code>!</p>
      
      </div>
    `}});customElements.define("eve-home-page",at);var lt=n(4),ct=n.n(lt);let ut=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},s="object"==typeof Reflect?Reflect.construct:function(t,e,s){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,s.prototype)};return function(t){var r=e(t);return n(t,n(function(){return s(r,arguments,e(this).constructor)},r))}}(Object)(class extends Y{render(){return M`
      <style>
        ${ct.a}
      </style>
      
      <div>

        <section>
          <eve-header></eve-header>
        </section>

        <section>
          <eve-home-page></eve-home-page>
        </section>

      </div>
    `}});customElements.define("eve-app",ut)}]);