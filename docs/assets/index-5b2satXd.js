var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap,o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}},s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,b=_.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},C=(e,t)=>!d(e,t),w={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??C)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:`open`},T[x(`elementProperties`)]=new Map,T[x(`finalized`)]=new Map,b?.({ReactiveElement:T}),(_.reactiveElementVersions??=[]).push(`2.1.2`);var E=globalThis,ee=e=>e,te=E.trustedTypes,ne=te?te.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,re=`$lit$`,ie=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+ie,oe=`<${ae}>`,se=document,ce=()=>se.createComment(``),le=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ue=Array.isArray,de=e=>ue(e)||typeof e?.[Symbol.iterator]==`function`,fe=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,he=/>/g,ge=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),be=Symbol.for(`lit-noChange`),xe=Symbol.for(`lit-nothing`),Se=new WeakMap,Ce=se.createTreeWalker(se,129);function we(e,t){if(!ue(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ne===void 0?t:ne.createHTML(t)}var Te=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===pe?c[1]===`!--`?o=me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ge):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ge):o=he:o===ge?c[0]===`>`?(o=i??pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ge:c[3]===`"`?ve:_e):o===ve||o===_e?o=ge:o===me||o===he?o=pe:(o=ge,i=void 0);let d=o===ge&&e[t+1].startsWith(`/>`)?` `:``;a+=o===pe?n+oe:l>=0?(r.push(s),n.slice(0,l)+re+n.slice(l)+ie+d):n+ie+(l===-2?t:d)}return[we(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ee=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Te(t,n);if(this.el=e.createElement(l,r),Ce.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ce.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(re)){let t=u[o++],n=i.getAttribute(e).split(ie),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?je:r[1]===`?`?Me:r[1]===`@`?Ne:Ae}),i.removeAttribute(e)}else e.startsWith(ie)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(ie),t=e.length-1;if(t>0){i.textContent=te?te.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ce()),Ce.nextNode(),c.push({type:2,index:++a});i.append(e[t],ce())}}}else if(i.nodeType===8)if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ie,e+1))!==-1;)c.push({type:7,index:a}),e+=ie.length-1}a++}}static createElement(e,t){let n=se.createElement(`template`);return n.innerHTML=e,n}};function De(e,t,n=e,r){if(t===be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=le(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=De(e,i._$AS(e,t.values),i,r)),t}var Oe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??se).importNode(t,!0);Ce.currentNode=r;let i=Ce.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ke(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Pe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ce.nextNode(),a++)}return Ce.currentNode=se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ke=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=De(this,e,t),le(e)?e===xe||e==null||e===``?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?de(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ee.createElement(we(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Oe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Ee(e)),t}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ce()),this.O(ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ee(e).nextSibling;ee(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=De(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=De(this,r[n+o],t,o),s===be&&(s=this._$AH[o]),a||=!le(s)||s!==this._$AH[o],s===xe?e=xe:e!==xe&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},je=class extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}},Me=class extends Ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}},Ne=class extends Ae{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=De(this,e,t,0)??xe)===be)return;let n=this._$AH,r=e===xe&&n!==xe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==xe&&(n===xe||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}},Fe=E.litHtmlPolyfillSupport;Fe?.(Ee,ke),(E.litHtmlVersions??=[]).push(`3.3.2`);var Ie=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ke(t.insertBefore(ce(),e),e,void 0,n??{})}return i._$AI(e),i},Le=globalThis,O=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return be}};O._$litElement$=!0,O.finalized=!0,Le.litElementHydrateSupport?.({LitElement:O});var Re=Le.litElementPolyfillSupport;Re?.({LitElement:O}),(Le.litElementVersions??=[]).push(`4.2.2`);var k=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ze={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:C},Be=(e=ze,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?Be(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return A({...e,state:!0,attribute:!1})}var Ve=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function He(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ve(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ve(n,r,{get(){return a(this)}})}}function M(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ue=class extends O{constructor(...e){super(...e),this.show=!1,this.diseases=[{id:`hilar-cholangiocarcinoma`,name:`肝门胆管癌`,desc:`发生在肝门部的胆管癌`,icon:`🫀`,diagnosisKeyItem:`pathology-biopsy`,examItems:[{id:`blood-test`,name:`血液检查`,desc:`肝功能、肿瘤标志物CA19-9等`,category:`blood`},{id:`abdominal-ultrasound`,name:`腹部超声`,desc:`初步评估肝胆结构`,category:`imaging`},{id:`ct-mri`,name:`CT/MRI检查`,desc:`详细评估肿瘤位置和范围`,category:`imaging`},{id:`mrcp`,name:`MRCP`,desc:`磁共振胰胆管成像，显示胆道梗阻情况`,category:`imaging`},{id:`ercp`,name:`ERCP`,desc:`逆行胰胆管造影，可同时进行胆道引流`,category:`imaging`},{id:`pathology-biopsy`,name:`病理活检`,desc:`获取组织样本进行病理确诊`,category:`pathology`}],treatmentItems:[{id:`surgery`,name:`手术治疗`,desc:`肝门胆管癌根治术`,category:`surgery`},{id:`chemotherapy`,name:`化疗`,desc:`辅助化疗或姑息化疗`,category:`chemo`},{id:`radiation`,name:`放疗`,desc:`辅助放疗或姑息放疗`,category:`radiation`},{id:`targeted-immune`,name:`靶向/免疫治疗`,desc:`根据基因检测结果选择靶向药物或免疫治疗`,category:`targeted`},{id:`biliary-drainage`,name:`胆道引流`,desc:`PTCD或支架置入缓解黄疸`,category:`drainage`}]}]}static{this.styles=c`
    :host {
      display: block;
    }
    .selector-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      z-index: 1000;
    }
    .selector-sheet {
      width: 100%;
      background: white;
      border-radius: 20px 20px 0 0;
      padding: 24px;
      animation: slideUp 0.3s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .selector-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .selector-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disease-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .disease-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .disease-item:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .disease-item.selected {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .disease-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .disease-info {
      flex: 1;
    }
    .disease-name {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .disease-desc {
      font-size: 13px;
      color: #999;
    }
    .check-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .disease-item.selected .check-icon {
      opacity: 1;
    }
  `}connectedCallback(){super.connectedCallback(),this.show=!0}handleSelect(e){this.dispatchEvent(new CustomEvent(`disease-select`,{bubbles:!0,composed:!0,detail:e}))}handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}handleOverlayClick(e){e.target===e.currentTarget&&this.handleClose()}render(){return D`
      <div class="selector-overlay" @click="${this.handleOverlayClick}">
        <div class="selector-sheet">
          <div class="selector-header">
            <span class="selector-title">选择病种</span>
            <button class="close-btn" @click="${this.handleClose}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="disease-list">
            ${this.diseases.map(e=>D`
              <div class="disease-item" @click="${()=>this.handleSelect(e)}">
                <div class="disease-icon">${e.icon}</div>
                <div class="disease-info">
                  <div class="disease-name">${e.name}</div>
                  <div class="disease-desc">${e.desc}</div>
                </div>
                <div class="check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `}};M([j()],Ue.prototype,`show`,void 0),Ue=M([k(`disease-selector`)],Ue);var We=class extends O{constructor(...e){super(...e),this.disease=null,this.completedExamIds=[],this.completedTreatmentIds=[],this.selectedExamIds=new Set,this.selectedTreatmentIds=new Set}static{this.styles=c`
    :host {
      display: block;
    }
    .selector-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      z-index: 1000;
    }
    .selector-sheet {
      width: 100%;
      max-height: 90vh;
      background: white;
      border-radius: 20px 20px 0 0;
      padding: 24px;
      overflow-y: auto;
      animation: slideUp 0.3s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .selector-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .selector-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disease-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #f0f9ff;
      border-radius: 12px;
      margin-bottom: 20px;
    }
    .disease-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: #1890ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .disease-name {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 600;
      color: #666;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 500;
    }
    .exam-badge {
      background: #e6f4ff;
      color: #1890ff;
    }
    .treatment-badge {
      background: #fff1f0;
      color: #ff4d4f;
    }
    .item-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border: 1px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #1890ff;
    }
    .item.selected {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .item-checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid #ddd;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .item.selected .item-checkbox {
      background: #1890ff;
      border-color: #1890ff;
    }
    .check-icon {
      opacity: 0;
      transition: opacity 0.2s;
    }
    .item.selected .check-icon {
      opacity: 1;
    }
    .item-info {
      flex: 1;
    }
    .item-name {
      font-size: 15px;
      font-weight: 500;
      color: #333;
      margin-bottom: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #999;
    }
    .confirm-btn {
      width: 100%;
      background: #1890ff;
      color: white;
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .confirm-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
    }
    .confirm-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    .stage-hint {
      background: #f8f6ff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .stage-hint-text {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
    .stage-result {
      background: #1890ff;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    .stage-result-label {
      font-size: 13px;
      color: rgba(255,255,255,0.8);
      margin-bottom: 8px;
    }
    .stage-result-text {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }
    .category-divider {
      font-size: 13px;
      color: #999;
      margin: 16px 0 12px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .category-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #eee;
    }
  `}updated(e){e.has(`completedExamIds`)&&(this.selectedExamIds=new Set(this.completedExamIds)),e.has(`completedTreatmentIds`)&&(this.selectedTreatmentIds=new Set(this.completedTreatmentIds))}handleExamToggle(e){this.selectedExamIds.has(e)?this.selectedExamIds.delete(e):this.selectedExamIds.add(e),this.selectedExamIds=new Set(this.selectedExamIds)}handleTreatmentToggle(e){this.selectedTreatmentIds.has(e)?this.selectedTreatmentIds.delete(e):this.selectedTreatmentIds.add(e),this.selectedTreatmentIds=new Set(this.selectedTreatmentIds)}getCurrentStage(){return this.disease&&this.completedTreatmentIds.size>0?`treatment`:`examination`}getStageText(){return this.getCurrentStage()===`treatment`?`治疗阶段`:`检查阶段`}handleConfirm(){this.disease&&this.dispatchEvent(new CustomEvent(`stage-select`,{bubbles:!0,composed:!0,detail:{disease:this.disease,completedExamIds:Array.from(this.selectedExamIds),completedTreatmentIds:Array.from(this.selectedTreatmentIds),currentStage:this.getCurrentStage()}}))}handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}handleOverlayClick(e){e.target===e.currentTarget&&this.handleClose()}getCategoryName(e){return{blood:`血液检查`,imaging:`影像学检查`,pathology:`病理检查`,surgery:`手术`,chemo:`化疗`,radiation:`放疗`,targeted:`靶向/免疫治疗`,drainage:`胆道引流`}[e]||e}groupByCategory(e){let t={};for(let n of e){let e=n.category;t[e]||(t[e]=[]),t[e].push(n)}return t}render(){if(!this.disease)return D``;let e=this.groupByCategory(this.disease.examItems),t=this.groupByCategory(this.disease.treatmentItems),n=this.selectedExamIds.size>0||this.selectedTreatmentIds.size>0;return D`
      <div class="selector-overlay" @click="${this.handleOverlayClick}">
        <div class="selector-sheet">
          <div class="selector-header">
            <span class="selector-title">选择已完成的项目</span>
            <button class="close-btn" @click="${this.handleClose}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="disease-info">
            <div class="disease-icon">${this.disease.icon}</div>
            <div class="disease-name">${this.disease.name}</div>
          </div>

          ${n?D`
            <div class="stage-result">
              <div class="stage-result-label">当前阶段</div>
              <div class="stage-result-text">${this.getStageText()}</div>
            </div>
          `:D`
            <div class="stage-hint">
              <div class="stage-hint-text">
                您是否已经完成专科医生初步诊断？请选择您已完成的相关检查或治疗项目，系统将根据您的选择判断当前所处阶段并提供相应指引。
              </div>
            </div>
          `}

          <div class="section">
            <div class="section-title">
              <span class="section-badge exam-badge">检查</span>
              已完成的检查项目
            </div>
            ${Object.entries(e).map(([e,t])=>D`
              <div class="category-divider">${this.getCategoryName(e)}</div>
              <div class="item-list">
                ${t.map(e=>D`
                  <div
                    class="item ${this.selectedExamIds.has(e.id)?`selected`:``}"
                    @click="${()=>this.handleExamToggle(e.id)}"
                  >
                    <div class="item-checkbox">
                      <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="item-info">
                      <div class="item-name">${e.name}</div>
                      <div class="item-desc">${e.desc}</div>
                    </div>
                  </div>
                `)}
              </div>
            `)}
          </div>

          <div class="section">
            <div class="section-title">
              <span class="section-badge treatment-badge">治疗</span>
              已完成的治疗项目
            </div>
            ${Object.entries(t).map(([e,t])=>D`
              <div class="category-divider">${this.getCategoryName(e)}</div>
              <div class="item-list">
                ${t.map(e=>D`
                  <div
                    class="item ${this.selectedTreatmentIds.has(e.id)?`selected`:``}"
                    @click="${()=>this.handleTreatmentToggle(e.id)}"
                  >
                    <div class="item-checkbox">
                      <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="item-info">
                      <div class="item-name">${e.name}</div>
                      <div class="item-desc">${e.desc}</div>
                    </div>
                  </div>
                `)}
              </div>
            `)}
          </div>

          <button class="confirm-btn" @click="${this.handleConfirm}">
            确认并查看指引
          </button>
        </div>
      </div>
    `}};M([A({type:Object})],We.prototype,`disease`,void 0),M([A({type:Array})],We.prototype,`completedExamIds`,void 0),M([A({type:Array})],We.prototype,`completedTreatmentIds`,void 0),M([j()],We.prototype,`selectedExamIds`,void 0),M([j()],We.prototype,`selectedTreatmentIds`,void 0),We=M([k(`stage-selector`)],We);function Ge(e){return e+.5|0}var Ke=(e,t,n)=>Math.max(Math.min(e,n),t);function qe(e){return Ke(Ge(e*2.55),0,255)}function Je(e){return Ke(Ge(e*255),0,255)}function Ye(e){return Ke(Ge(e/2.55)/100,0,1)}function Xe(e){return Ke(Ge(e*100),0,100)}var Ze={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Qe=[...`0123456789ABCDEF`],$e=e=>Qe[e&15],et=e=>Qe[(e&240)>>4]+Qe[e&15],tt=e=>(e&240)>>4==(e&15),nt=e=>tt(e.r)&&tt(e.g)&&tt(e.b)&&tt(e.a);function rt(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&Ze[e[1]]*17,g:255&Ze[e[2]]*17,b:255&Ze[e[3]]*17,a:t===5?Ze[e[4]]*17:255}:(t===7||t===9)&&(n={r:Ze[e[1]]<<4|Ze[e[2]],g:Ze[e[3]]<<4|Ze[e[4]],b:Ze[e[5]]<<4|Ze[e[6]],a:t===9?Ze[e[7]]<<4|Ze[e[8]]:255})),n}var it=(e,t)=>e<255?t(e):``;function at(e){var t=nt(e)?$e:et;return e?`#`+t(e.r)+t(e.g)+t(e.b)+it(e.a,t):void 0}var ot=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function st(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function ct(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function lt(e,t,n){let r=st(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ut(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function dt(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ut(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function ft(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Je)}function pt(e,t,n){return ft(st,e,t,n)}function mt(e,t,n){return ft(lt,e,t,n)}function ht(e,t,n){return ft(ct,e,t,n)}function gt(e){return(e%360+360)%360}function _t(e){let t=ot.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?qe(+t[5]):Je(+t[5]));let i=gt(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?mt(i,a,o):t[1]===`hsv`?ht(i,a,o):pt(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function vt(e,t){var n=dt(e);n[0]=gt(n[0]+t),n=pt(n),e.r=n[0],e.g=n[1],e.b=n[2]}function yt(e){if(!e)return;let t=dt(e),n=t[0],r=Xe(t[1]),i=Xe(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Ye(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var bt={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},xt={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function St(){let e={},t=Object.keys(xt),n=Object.keys(bt),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,bt[a]);a=parseInt(xt[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var Ct;function wt(e){Ct||(Ct=St(),Ct.transparent=[0,0,0,0]);let t=Ct[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Tt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Et(e){let t=Tt.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?qe(e):Ke(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?qe(r):Ke(r,0,255)),i=255&(t[4]?qe(i):Ke(i,0,255)),a=255&(t[6]?qe(a):Ke(a,0,255)),{r,g:i,b:a,a:n}}}function Dt(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ye(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Ot=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,kt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function At(e,t,n){let r=kt(Ye(e.r)),i=kt(Ye(e.g)),a=kt(Ye(e.b));return{r:Je(Ot(r+n*(kt(Ye(t.r))-r))),g:Je(Ot(i+n*(kt(Ye(t.g))-i))),b:Je(Ot(a+n*(kt(Ye(t.b))-a))),a:e.a+n*(t.a-e.a)}}function jt(e,t,n){if(e){let r=dt(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=pt(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Mt(e,t){return e&&Object.assign(t||{},e)}function Nt(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Je(e[3]))):(t=Mt(e,{r:0,g:0,b:0,a:1}),t.a=Je(t.a)),t}function Pt(e){return e.charAt(0)===`r`?Et(e):_t(e)}var Ft=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=Nt(t):n===`string`&&(r=rt(t)||wt(t)||Pt(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Mt(this._rgb);return e&&(e.a=Ye(e.a)),e}set rgb(e){this._rgb=Nt(e)}rgbString(){return this._valid?Dt(this._rgb):void 0}hexString(){return this._valid?at(this._rgb):void 0}hslString(){return this._valid?yt(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=At(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=Je(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=Ge(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return jt(this._rgb,2,e),this}darken(e){return jt(this._rgb,2,-e),this}saturate(e){return jt(this._rgb,1,e),this}desaturate(e){return jt(this._rgb,1,-e),this}rotate(e){return vt(this._rgb,e),this}};function It(){}var Lt=(()=>{let e=0;return()=>e++})();function N(e){return e==null}function P(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function F(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function I(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function Rt(e,t){return I(e)?e:t}function L(e,t){return e===void 0?t:e}var zt=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100:+e/t,Bt=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function R(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function z(e,t,n,r){let i,a,o;if(P(e))if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i);else if(F(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function Vt(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Ht(e){if(P(e))return e.map(Ht);if(F(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=Ht(e[n[i]]);return t}return e}function Ut(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function Wt(e,t,n,r){if(!Ut(e))return;let i=t[e],a=n[e];F(i)&&F(a)?Gt(i,a,r):t[e]=Ht(a)}function Gt(e,t,n){let r=P(t)?t:[t],i=r.length;if(!F(e))return e;n||={};let a=n.merger||Wt,o;for(let t=0;t<i;++t){if(o=r[t],!F(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function Kt(e,t){return Gt(e,t,{merger:qt})}function qt(e,t,n){if(!Ut(e))return;let r=t[e],i=n[e];F(r)&&F(i)?Kt(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Ht(i))}var Jt={"":e=>e,x:e=>e.x,y:e=>e.y};function Yt(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function Xt(e){let t=Yt(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function Zt(e,t){return(Jt[t]||(Jt[t]=Xt(t)))(e)}function Qt(e){return e.charAt(0).toUpperCase()+e.slice(1)}var $t=e=>e!==void 0,en=e=>typeof e==`function`,tn=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function nn(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var B=Math.PI,V=2*B,rn=V+B,an=1/0,on=B/180,H=B/2,sn=B/4,cn=B*2/3,ln=Math.log10,un=Math.sign;function dn(e,t,n){return Math.abs(e-t)<n}function fn(e){let t=Math.round(e);e=dn(e,t,e/1e3)?t:e;let n=10**Math.floor(ln(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function pn(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function mn(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function hn(e){return!mn(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function gn(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function _n(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function U(e){return B/180*e}function vn(e){return 180/B*e}function yn(e){if(!I(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function bn(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*B&&(a+=V),{angle:a,distance:i}}function xn(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function Sn(e,t){return(e-t+rn)%V-B}function Cn(e){return(e%V+V)%V}function wn(e,t,n,r){let i=Cn(e),a=Cn(t),o=Cn(n),s=Cn(a-i),c=Cn(o-i),l=Cn(i-a),u=Cn(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function Tn(e,t,n){return Math.max(t,Math.min(n,e))}function En(e){return Tn(e,-32768,32767)}function Dn(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function On(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var kn=(e,t,n,r)=>On(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),An=(e,t,n)=>On(e,n,r=>e[r][t]>=n);function jn(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var Mn=[`push`,`pop`,`shift`,`splice`,`unshift`];function Nn(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,`_chartjs`,{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Mn.forEach(t=>{let n=`_onData`+Qt(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function Pn(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Mn.forEach(t=>{delete e[t]}),delete e._chartjs)}function Fn(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var In=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function Ln(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,In.call(window,()=>{r=!1,e.apply(t,n)}))}}function Rn(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var zn=e=>e===`start`?`left`:e===`end`?`right`:`center`,Bn=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2,Vn=(e,t,n,r)=>e===(r?`left`:`right`)?n:e===`center`?(t+n)/2:t;function Hn(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(kn(c,u,d).lo,n?r:kn(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!N(e[s.axis]));i-=Math.max(0,e)}i=Tn(i,0,r-1)}if(m){let e=Math.max(kn(c,o.axis,f,!0).hi+1,n?0:kn(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!N(e[s.axis]));e+=Math.max(0,t)}a=Tn(e,i,r)-i}else a=r-i}return{start:i,count:a}}function Un(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var Wn=e=>e===0||e===1,Gn=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*V/n)),Kn=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*V/n)+1,qn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*H)+1,easeOutSine:e=>Math.sin(e*H),easeInOutSine:e=>-.5*(Math.cos(B*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>Wn(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Wn(e)?e:Gn(e,.075,.3),easeOutElastic:e=>Wn(e)?e:Kn(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return Wn(e)?e:e<.5?.5*Gn(e*2,t,n):.5+.5*Kn(e*2-1,t,n)},easeInBack(e){let t=1.70158;return e*e*((t+1)*e-t)},easeOutBack(e){let t=1.70158;return--e*e*((t+1)*e+t)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-qn.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?qn.easeInBounce(e*2)*.5:qn.easeOutBounce(e*2-1)*.5+.5};function Jn(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function Yn(e){return Jn(e)?e:new Ft(e)}function Xn(e){return Jn(e)?e:new Ft(e).saturate(.5).darken(.1).hexString()}var Zn=[`x`,`y`,`borderWidth`,`radius`,`tension`],Qn=[`color`,`borderColor`,`backgroundColor`];function $n(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:Qn},numbers:{type:`number`,properties:Zn}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function er(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var tr=new Map;function nr(e,t){t||={};let n=e+JSON.stringify(t),r=tr.get(n);return r||(r=new Intl.NumberFormat(e,t),tr.set(n,r)),r}function rr(e,t,n){return nr(t,n).format(e)}var ir={values(e){return P(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=ar(e,n)}let o=ln(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),rr(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(ln(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?ir.numeric.call(this,e,t,n):``}};function ar(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var or={formatters:ir};function sr(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:or.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var cr=Object.create(null),lr=Object.create(null);function ur(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function dr(e,t,n){return typeof t==`string`?Gt(ur(e,t),n):Gt(ur(e,``),t)}var W=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>Xn(t.backgroundColor),this.hoverBorderColor=(e,t)=>Xn(t.borderColor),this.hoverColor=(e,t)=>Xn(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return dr(this,e,t)}get(e){return ur(this,e)}describe(e,t){return dr(lr,e,t)}override(e,t){return dr(cr,e,t)}route(e,t,n,r){let i=ur(this,e),a=ur(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return F(e)?Object.assign({},t,e):L(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[$n,er,sr]);function fr(e){return!e||N(e.size)||N(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function pr(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function mr(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!P(d))o=pr(e,i,a,o,d);else if(P(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!P(f)&&(o=pr(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function hr(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function gr(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function _r(e,t,n,r){vr(e,t,n,r,null)}function vr(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*on;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,V):e.arc(n,r,h,0,V),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=cn,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=cn,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+sn)*c,d=Math.cos(g+sn)*(i?i/2-l:c),s=Math.sin(g+sn)*c,f=Math.sin(g+sn)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-B,g-H),e.arc(n+f,r-o,l,g-H,g),e.arc(n+d,r+s,l,g,g+H),e.arc(n-f,r+o,l,g+H,g+B),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=sn;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=sn;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=sn,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function yr(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function br(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function xr(e){e.restore()}function Sr(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function Cr(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function wr(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),N(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Tr(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function Er(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Dr(e,t,n,r,i,a={}){let o=P(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,wr(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&Er(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),N(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),Tr(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function Or(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*B,B,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,B,H,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,H,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-H,!0),e.lineTo(n+o.topLeft,r)}var kr=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Ar=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function jr(e,t){let n=(``+e).match(kr);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100;break}return t*e}var Mr=e=>+e||0;function Nr(e,t){let n={},r=F(t),i=r?Object.keys(t):t,a=F(e)?r?n=>L(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=Mr(a(e));return n}function Pr(e){return Nr(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function Fr(e){return Nr(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function G(e){let t=Pr(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function K(e,t){e||={},t||=W.font;let n=L(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=L(e.style,t.style);r&&!(``+r).match(Ar)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:L(e.family,t.family),lineHeight:jr(L(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:L(e.weight,t.weight),string:``};return i.string=fr(i),i}function Ir(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&P(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function Lr(e,t,n){let{min:r,max:i}=e,a=Bt(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function Rr(e,t){return Object.assign(Object.create(e),t)}function zr(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=ti(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>zr([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Wr(n,r,()=>ei(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return ni(e).includes(t)},ownKeys(e){return ni(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function Br(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Vr(e,r),setContext:t=>Br(e,t,n,r),override:i=>Br(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Wr(e,t,()=>Gr(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function Vr(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:en(n)?n:()=>n,isIndexable:en(r)?r:()=>r}}var Hr=(e,t)=>e?e+Qt(t):t,Ur=(e,t)=>F(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Wr(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function Gr(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return en(s)&&o.isScriptable(t)&&(s=Kr(t,s,e,n)),P(s)&&s.length&&(s=qr(t,s,e,o.isIndexable)),Ur(t,s)&&(s=Br(s,i,a&&a[t],o)),s}function Kr(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),Ur(e,c)&&(c=Zr(i._scopes,i,e,c)),c}function qr(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(F(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=Zr(r,i,e,c);t.push(Br(n,a,o&&o[e],s))}}return t}function Jr(e,t,n){return en(e)?e(t,n):e}var Yr=(e,t)=>e===!0?t:typeof e==`string`?Zt(t,e):void 0;function Xr(e,t,n,r,i){for(let a of t){let t=Yr(n,a);if(t){e.add(t);let a=Jr(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function Zr(e,t,n,r){let i=t._rootScopes,a=Jr(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Qr(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Qr(s,o,a,c,r),c===null)?!1:zr(Array.from(s),[``],i,a,()=>$r(t,n,r))}function Qr(e,t,n,r,i){for(;n;)n=Xr(e,t,n,r,i);return n}function $r(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return P(i)&&F(n)?n:i||{}}function ei(e,t,n,r){let i;for(let a of t)if(i=ti(Hr(a,e),n),i!==void 0)return Ur(e,i)?Zr(n,r,e,i):i}function ti(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function ni(e){let t=e._keys;return t||=e._keys=ri(e._scopes),t}function ri(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}function ii(e,t,n,r){let{iScale:i}=e,{key:a=`r`}=this._parsing,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={r:i.parse(Zt(u,a),l)};return o}var ai=2**-52||1e-14,oi=(e,t)=>t<e.length&&!e[t].skip&&e[t],si=e=>e===`x`?`y`:`x`;function ci(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=xn(a,i),c=xn(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function li(e,t,n){let r=e.length,i,a,o,s,c,l=oi(e,0);for(let u=0;u<r-1;++u)if(c=l,l=oi(e,u+1),!(!c||!l)){if(dn(t[u],0,ai)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function ui(e,t,n=`x`){let r=si(n),i=e.length,a,o,s,c=oi(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=oi(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function di(e,t=`x`){let n=si(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=oi(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=oi(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?un(i[o-1])===un(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}li(e,i,a),ui(e,a,t)}function fi(e,t,n){return Math.max(Math.min(e,n),t)}function pi(e,t){let n,r,i,a,o,s=yr(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&yr(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=fi(i.cp1x,t.left,t.right),i.cp1y=fi(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=fi(i.cp2x,t.left,t.right),i.cp2y=fi(i.cp2y,t.top,t.bottom)))}function mi(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)di(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=ci(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&pi(e,n)}function hi(){return typeof window<`u`&&typeof document<`u`}function gi(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function _i(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var vi=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function yi(e,t){return vi(e).getPropertyValue(t)}var bi=[`top`,`right`,`bottom`,`left`];function xi(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=bi[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var Si=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Ci(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(Si(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function wi(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=vi(n),a=i.boxSizing===`border-box`,o=xi(i,`padding`),s=xi(i,`border`,`width`),{x:c,y:l,box:u}=Ci(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function Ti(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&gi(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=vi(a),s=xi(o,`border`,`width`),c=xi(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=_i(o.maxWidth,a,`clientWidth`),i=_i(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||an,maxHeight:i||an}}var Ei=e=>Math.round(e*10)/10;function Di(e,t,n,r){let i=vi(e),a=xi(i,`margin`),o=_i(i.maxWidth,e,`clientWidth`)||an,s=_i(i.maxHeight,e,`clientHeight`)||an,c=Ti(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=xi(i,`border`,`width`),t=xi(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=Ei(Math.min(l,o,c.maxWidth)),u=Ei(Math.min(u,s,c.maxHeight)),l&&!u&&(u=Ei(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=Ei(Math.floor(u*r))),{width:l,height:u}}function Oi(e,t,n){let r=t||1,i=Ei(e.height*r),a=Ei(e.width*r);e.height=Ei(e.height),e.width=Ei(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var ki=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};hi()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function Ai(e,t){let n=yi(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function ji(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Mi(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function Ni(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=ji(e,i,n),s=ji(i,a,n),c=ji(a,t,n);return ji(ji(o,s,n),ji(s,c,n),n)}var Pi=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},Fi=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ii(e,t,n){return e?Pi(t,n):Fi()}function Li(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function Ri(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function zi(e){return e===`angle`?{between:wn,compare:Sn,normalize:Cn}:{between:Dn,compare:(e,t)=>e-t,normalize:e=>e}}function Bi({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function Vi(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=zi(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function Hi(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=zi(r),{start:u,end:d,loop:f,style:p}=Vi(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(Bi({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(Bi({start:g,end:d,loop:f,count:o,style:p})),m}function Ui(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=Hi(r[i],e.points,t);a.length&&n.push(...a)}return n}function Wi(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Gi(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function Ki(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=Wi(n,i,a,r);return r===!0?qi(e,[{start:o,end:s,loop:a}],n,t):qi(e,Gi(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function qi(e,t,n,r){return!r||!r.setContext||!n?t:Ji(e,t,n,r)}function Ji(e,t,n,r){let i=e._chart.getContext(),a=Yi(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=Yi(r.setContext(Rr(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Xi(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function Yi(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Xi(e,t){if(!t)return!1;let n=[],r=function(e,t){return Jn(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Zi(e,t,n){return e.options.clip?e[n]:t[n]}function Qi(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Zi(n,t,`left`),right:Zi(n,t,`right`),top:Zi(r,t,`top`),bottom:Zi(r,t,`bottom`)}:t}function $i(e,t){let n=t._clip;if(n.disabled)return!1;let r=Qi(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var ea=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,In.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},ta=`transparent`,na={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=Yn(e||ta),i=r.valid&&Yn(t||ta);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},ra=class{constructor(e,t,n,r){let i=t[n];r=Ir([e.to,r,i,e.from]);let a=Ir([e.from,i,r]);this._active=!0,this._fn=e.fn||na[e.type||typeof a],this._easing=qn[e.easing]||qn.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=Ir([e.to,t,r,e.from]),this._from=Ir([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},ia=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!F(e))return;let t=Object.keys(W.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!F(i))return;let a={};for(let e of t)a[e]=i[e];(P(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=oa(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&aa(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u)if(d&&u.active()){u.update(d,l,o);continue}else u.cancel();if(!d||!d.duration){e[c]=l;continue}i[c]=u=new ra(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return ea.add(this._chart,n),!0}};function aa(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function oa(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function sa(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function ca(e,t,n){if(n===!1)return!1;let r=sa(e,n),i=sa(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function la(e){let t,n,r,i;return F(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function ua(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function da(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],I(l)&&(a||t===0||un(t)===un(l))&&(t+=l)}return!u&&!r.all?0:t}function fa(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function pa(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function ma(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function ha(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function ga(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function _a(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function va(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=ma(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=ga(i,u,a),f[s]=d,f._top=_a(f,o,!0,r.type),f._bottom=_a(f,o,!1,r.type);let m=f._visualValues||={};m[s]=d}}function ya(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function ba(e,t){return Rr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function xa(e,t,n){return Rr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function Sa(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var Ca=e=>e===`reset`||e===`none`,wa=(e,t)=>t?e:Object.assign({},e),Ta=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:ua(n,!0),values:null},Ea=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=pa(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&Sa(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=L(n.xAxisID,ya(e,`x`)),a=t.yAxisID=L(n.yAxisID,ya(e,`y`)),o=t.rAxisID=L(n.rAxisID,ya(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&Pn(this._data,this),e._stacked&&Sa(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(F(t)){let e=this._cachedMeta;this._data=fa(t,e)}else if(n!==t){if(n){Pn(n,this);let e=this._cachedMeta;Sa(e),e._parsed=[]}t&&Object.isExtensible(t)&&Nn(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=pa(t.vScale,t),t.stack!==n.stack&&(r=!0,Sa(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(va(this,t._parsed),t._stacked=pa(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length?!0:n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=P(r[e])?this.parseArrayData(n,r,e,t):F(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&va(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(Zt(f,o),d),y:a.parse(Zt(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return da({keys:ua(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=da(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=Ta(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=ha(o),d,f;function p(){f=r[d];let t=f[o.axis];return!I(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],I(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=la(L(this.options.clip,ca(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=xa(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=ba(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&$t(n);if(o)return wa(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(W.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(wa(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new ia(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||Ca(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){Ca(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!Ca(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&Sa(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}};function Da(e,t){if(!e._cache.$bar){let n=e.getMatchingVisibleMetas(t),r=[];for(let t=0,i=n.length;t<i;t++)r=r.concat(n[t].controller.getAllParsedValues(e));e._cache.$bar=Fn(r.sort((e,t)=>e-t))}return e._cache.$bar}function Oa(e){let t=e.iScale,n=Da(t,e.type),r=t._length,i,a,o,s,c=()=>{o===32767||o===-32768||($t(s)&&(r=Math.min(r,Math.abs(o-s)||r)),s=o)};for(i=0,a=n.length;i<a;++i)o=t.getPixelForValue(n[i]),c();for(s=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),c();return r}function ka(e,t,n,r){let i=n.barThickness,a,o;return N(i)?(a=t.min*n.categoryPercentage,o=n.barPercentage):(a=i*r,o=1),{chunk:a/r,ratio:o,start:t.pixels[e]-a/2}}function Aa(e,t,n,r){let i=t.pixels,a=i[e],o=e>0?i[e-1]:null,s=e<i.length-1?i[e+1]:null,c=n.categoryPercentage;o===null&&(o=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-o);let l=a-(a-Math.min(o,s))/2*c;return{chunk:Math.abs(s-o)/2*c/r,ratio:n.barPercentage,start:l}}function ja(e,t,n,r){let i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),s=Math.max(i,a),c=o,l=s;Math.abs(o)>Math.abs(s)&&(c=s,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:a,min:o,max:s}}function Ma(e,t,n,r){return P(e)?ja(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Na(e,t,n,r){let i=e.iScale,a=e.vScale,o=i.getLabels(),s=i===a,c=[],l,u,d,f;for(l=n,u=n+r;l<u;++l)f=t[l],d={},d[i.axis]=s||i.parse(o[l],l),c.push(Ma(f,d,a,l));return c}function Pa(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Fa(e,t,n){return e===0?(t.isHorizontal()?1:-1)*(t.min>=n?1:-1):un(e)}function Ia(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n=`left`,r=`right`):(t=e.base<e.y,n=`bottom`,r=`top`),t?(i=`end`,a=`start`):(i=`start`,a=`end`),{start:n,end:r,reverse:t,top:i,bottom:a}}function La(e,t,n,r){let i=t.borderSkipped,a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:s,reverse:c,top:l,bottom:u}=Ia(e);i===`middle`&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=l:(n._bottom||0)===r?i=u:(a[Ra(u,o,s,c)]=!0,i=l)),a[Ra(i,o,s,c)]=!0,e.borderSkipped=a}function Ra(e,t,n,r){return r?(e=za(e,t,n),e=Ba(e,n,t)):e=Ba(e,t,n),e}function za(e,t,n){return e===t?n:e===n?t:e}function Ba(e,t,n){return e===`start`?t:e===`end`?n:e}function Va(e,{inflateAmount:t},n){e.inflateAmount=t===`auto`?n===1?.33:0:t}var Ha=class extends Ea{static id=`bar`;static defaults={datasetElementType:!1,dataElementType:`bar`,categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:`number`,properties:[`x`,`y`,`base`,`width`,`height`]}}};static overrides={scales:{_index_:{type:`category`,offset:!0,grid:{offset:!0}},_value_:{type:`linear`,beginAtZero:!0}}};parsePrimitiveData(e,t,n,r){return Na(e,t,n,r)}parseArrayData(e,t,n,r){return Na(e,t,n,r)}parseObjectData(e,t,n,r){let{iScale:i,vScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=i.axis===`x`?o:s,l=a.axis===`x`?o:s,u=[],d,f,p,m;for(d=n,f=n+r;d<f;++d)m=t[d],p={},p[i.axis]=i.parse(Zt(m,c),d),u.push(Ma(Zt(m,l),p,a,d));return u}updateRangeFromParsed(e,t,n,r){super.updateRangeFromParsed(e,t,n,r);let i=n._custom;i&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,i.min),e.max=Math.max(e.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let{iScale:t,vScale:n}=this._cachedMeta,r=this.getParsed(e),i=r._custom,a=Pa(i)?`[`+i.start+`, `+i.end+`]`:``+n.getLabelForValue(r[n.axis]);return{label:``+t.getLabelForValue(r[t.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{index:a,_cachedMeta:{vScale:o}}=this,s=o.getBasePixel(),c=o.isHorizontal(),l=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,r);for(let f=t;f<t+n;f++){let t=this.getParsed(f),n=i||N(t[o.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,l),m=(t._stacks||{})[o.axis],h={horizontal:c,base:n.base,enableBorderRadius:!m||Pa(t._custom)||a===m._top||a===m._bottom,x:c?n.head:p.center,y:c?p.center:n.head,height:c?p.size:Math.abs(n.size),width:c?Math.abs(n.size):p.size};d&&(h.options=u||this.resolveDataElementOptions(f,e[f].active?`active`:r));let g=h.options||e[f].options;La(h,g,m,a),Va(h,g,l.ratio),this.updateElement(e[f],f,h,r)}}_getStacks(e,t){let{iScale:n}=this._cachedMeta,r=n.getMatchingVisibleMetas(this._type).filter(e=>e.controller.options.grouped),i=n.options.stacked,a=[],o=this._cachedMeta.controller.getParsed(t),s=o&&o[n.axis],c=e=>{let t=e._parsed.find(e=>e[n.axis]===s),r=t&&t[e.vScale.axis];if(N(r)||isNaN(r))return!0};for(let n of r)if(!(t!==void 0&&c(n))&&((i===!1||a.indexOf(n.stack)===-1||i===void 0&&n.stack===void 0)&&a.push(n.stack),n.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(n=>e[n].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let n of this.chart.data.datasets)e[L(this.chart.options.indexAxis===`x`?n.xAxisID:n.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,n){let r=this._getStacks(e,n),i=t===void 0?-1:r.indexOf(t);return i===-1?r.length-1:i}_getRuler(){let e=this.options,t=this._cachedMeta,n=t.iScale,r=[],i,a;for(i=0,a=t.data.length;i<a;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));let o=e.barThickness;return{min:o||Oa(t),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:n,index:r},options:{base:i,minBarLength:a}}=this,o=i||0,s=this.getParsed(e),c=s._custom,l=Pa(c),u=s[t.axis],d=0,f=n?this.applyStack(t,s,n):u,p,m;f!==u&&(d=f-u,f=u),l&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&un(u)!==un(c.barEnd)&&(d=0),d+=u);let h=!N(i)&&!l?i:d,g=t.getPixelForValue(h);if(p=this.chart.getDataVisibility(e)?t.getPixelForValue(d+f):g,m=p-g,Math.abs(m)<a){m=Fa(m,t,o)*a,u===o&&(g-=m/2);let e=t.getPixelForDecimal(0),i=t.getPixelForDecimal(1);g=Math.max(Math.min(g,Math.max(e,i)),Math.min(e,i)),p=g+m,n&&!l&&(s._stacks[t.axis]._visualValues[r]=t.getValueForPixel(p)-t.getValueForPixel(g))}if(g===t.getPixelForValue(o)){let e=un(m)*t.getLineWidthForValue(o)/2;g+=e,m-=e}return{size:m,base:g,head:p,center:p+m/2}}_calculateBarIndexPixels(e,t){let n=t.scale,r=this.options,i=r.skipNull,a=L(r.maxBarThickness,1/0),o,s,c=this._getAxisCount();if(t.grouped){let n=i?this._getStackCount(e):t.stackCount,l=r.barThickness===`flex`?Aa(e,t,r,n*c):ka(e,t,r,n*c),u=this.chart.options.indexAxis===`x`?this.getDataset().xAxisID:this.getDataset().yAxisID,d=this._getAxis().indexOf(L(u,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,i?e:void 0)+d;o=l.start+l.chunk*f+l.chunk/2,s=Math.min(a,l.chunk*l.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),s=Math.min(a,t.min*t.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}}draw(){let e=this._cachedMeta,t=e.vScale,n=e.data,r=n.length,i=0;for(;i<r;++i)this.getParsed(i)[t.axis]!==null&&!n[i].hidden&&n[i].draw(this._ctx)}},Ua=class extends Ea{static id=`bubble`;static defaults={datasetElementType:!1,dataElementType:`point`,animations:{numbers:{type:`number`,properties:[`x`,`y`,`borderWidth`,`radius`]}}};static overrides={scales:{x:{type:`linear`},y:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,r){let i=super.parsePrimitiveData(e,t,n,r);for(let e=0;e<i.length;e++)i[e]._custom=this.resolveDataElementOptions(e+n).radius;return i}parseArrayData(e,t,n,r){let i=super.parseArrayData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=L(r[2],this.resolveDataElementOptions(e+n).radius)}return i}parseObjectData(e,t,n,r){let i=super.parseObjectData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=L(r&&r.r&&+r.r,this.resolveDataElementOptions(e+n).radius)}return i}getMaxOverflow(){let e=this._cachedMeta.data,t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y),c=a._custom;return{label:n[e]||``,value:`(`+o+`, `+s+(c?`, `+c:``)+`)`}}update(e){let t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:c}=this._getSharedOptions(t,r),l=a.axis,u=o.axis;for(let d=t;d<t+n;d++){let t=e[d],n=!i&&this.getParsed(d),f={},p=f[l]=i?a.getPixelForDecimal(.5):a.getPixelForValue(n[l]),m=f[u]=i?o.getBasePixel():o.getPixelForValue(n[u]);f.skip=isNaN(p)||isNaN(m),c&&(f.options=s||this.resolveDataElementOptions(d,t.active?`active`:r),i&&(f.options.radius=0)),this.updateElement(t,d,f,r)}}resolveDataElementOptions(e,t){let n=this.getParsed(e),r=super.resolveDataElementOptions(e,t);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let i=r.radius;return t!==`active`&&(r.radius=0),r.radius+=L(n&&n._custom,i),r}};function Wa(e,t,n){let r=1,i=1,a=0,o=0;if(t<V){let s=e,c=s+t,l=Math.cos(s),u=Math.sin(s),d=Math.cos(c),f=Math.sin(c),p=(e,t,r)=>wn(e,s,c,!0)?1:Math.max(t,t*n,r,r*n),m=(e,t,r)=>wn(e,s,c,!0)?-1:Math.min(t,t*n,r,r*n),h=p(0,l,d),g=p(H,u,f),_=m(B,l,d),v=m(B+H,u,f);r=(h-_)/2,i=(g-v)/2,a=-(h+_)/2,o=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:a,offsetY:o}}var Ga=class extends Ea{static id=`doughnut`;static defaults={datasetElementType:!1,dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:`number`,properties:[`circumference`,`endAngle`,`innerRadius`,`outerRadius`,`startAngle`,`x`,`y`,`offset`,`borderWidth`,`spacing`]}},cutout:`50%`,rotation:0,circumference:360,radius:`100%`,spacing:0,indexAxis:`r`};static descriptors={_scriptable:e=>e!==`spacing`,_indexable:e=>e!==`spacing`&&!e.startsWith(`borderDash`)&&!e.startsWith(`hoverBorderDash`)};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data,{labels:{pointStyle:n,textAlign:r,color:i,useBorderRadius:a,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((t,s)=>{let c=e.getDatasetMeta(0).controller.getStyle(s);return{text:t,fillStyle:c.backgroundColor,fontColor:i,hidden:!e.getDataVisibility(s),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:r,pointStyle:n,borderRadius:a&&(o||c.borderRadius),index:s}}):[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){let n=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=n;else{let i=e=>+n[e];if(F(n[e])){let{key:e=`value`}=this._parsing;i=t=>+Zt(n[t],e)}let a,o;for(a=e,o=e+t;a<o;++a)r._parsed[a]=i(a)}}_getRotation(){return U(this.options.rotation-90)}_getCircumference(){return U(this.options.circumference)}_getRotationExtents(){let e=V,t=-V;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){let r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),a=r._getCircumference();e=Math.min(e,i),t=Math.max(t,i+a)}return{rotation:e,circumference:t-e}}update(e){let{chartArea:t}=this.chart,n=this._cachedMeta,r=n.data,i=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(t.width,t.height)-i)/2,0),o=Math.min(zt(this.options.cutout,a),1),s=this._getRingWeight(this.index),{circumference:c,rotation:l}=this._getRotationExtents(),{ratioX:u,ratioY:d,offsetX:f,offsetY:p}=Wa(l,c,o),m=(t.width-i)/u,h=(t.height-i)/d,g=Math.max(Math.min(m,h)/2,0),_=Bt(this.options.radius,g),v=(_-Math.max(_*o,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*_,this.offsetY=p*_,n.total=this.calculateTotal(),this.outerRadius=_-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*s,0),this.updateElements(r,0,r.length,e)}_circumference(e,t){let n=this.options,r=this._cachedMeta,i=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*i/V)}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.chartArea,s=a.options.animation,c=(o.left+o.right)/2,l=(o.top+o.bottom)/2,u=i&&s.animateScale,d=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(t,r),h=this._getRotation(),g;for(g=0;g<t;++g)h+=this._circumference(g,i);for(g=t;g<t+n;++g){let t=this._circumference(g,i),n=e[g],a={x:c+this.offsetX,y:l+this.offsetY,startAngle:h,endAngle:h+t,circumference:t,outerRadius:f,innerRadius:d};m&&(a.options=p||this.resolveDataElementOptions(g,n.active?`active`:r)),h+=t,this.updateElement(n,g,a,r)}}calculateTotal(){let e=this._cachedMeta,t=e.data,n=0,r;for(r=0;r<t.length;r++){let i=e._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!t[r].hidden&&(n+=Math.abs(i))}return n}calculateCircumference(e){let t=this._cachedMeta.total;return t>0&&!isNaN(e)?Math.abs(e)/t*V:0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=rr(t._parsed[e],n.options.locale);return{label:r[e]||``,value:i}}getMaxBorderWidth(e){let t=0,n=this.chart,r,i,a,o,s;if(!e){for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){a=n.getDatasetMeta(r),e=a.data,o=a.controller;break}}if(!e)return 0;for(r=0,i=e.length;r<i;++r)s=o.resolveDataElementOptions(r),s.borderAlign!==`inner`&&(t=Math.max(t,s.borderWidth||0,s.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,r=e.length;n<r;++n){let e=this.resolveDataElementOptions(n);t=Math.max(t,e.offset||0,e.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(L(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}},Ka=class extends Ea{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=Hn(t,r,a);this._drawStart=o,this._drawCount=s,Un(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=hn(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=N(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}},qa=class extends Ea{static id=`polarArea`;static defaults={dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:`number`,properties:[`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`]}},indexAxis:`r`,startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:n,color:r}}=e.legend.options;return t.labels.map((t,i)=>{let a=e.getDatasetMeta(0).controller.getStyle(i);return{text:t,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:`radialLinear`,angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=rr(t._parsed[e].r,n.options.locale);return{label:r[e]||``,value:i}}parseObjectData(e,t,n,r){return ii.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){let e=this._cachedMeta,t={min:1/0,max:-1/0};return e.data.forEach((e,n)=>{let r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<t.min&&(t.min=r),r>t.max&&(t.max=r))}),t}_updateRadius(){let e=this.chart,t=e.chartArea,n=e.options,r=Math.min(t.right-t.left,t.bottom-t.top),i=Math.max(r/2,0),a=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.options.animation,s=this._cachedMeta.rScale,c=s.xCenter,l=s.yCenter,u=s.getIndexAngle(0)-.5*B,d=u,f,p=360/this.countVisibleElements();for(f=0;f<t;++f)d+=this._computeAngle(f,r,p);for(f=t;f<t+n;f++){let t=e[f],n=d,m=d+this._computeAngle(f,r,p),h=a.getDataVisibility(f)?s.getDistanceFromCenterForValue(this.getParsed(f).r):0;d=m,i&&(o.animateScale&&(h=0),o.animateRotate&&(n=m=u));let g={x:c,y:l,innerRadius:0,outerRadius:h,startAngle:n,endAngle:m,options:this.resolveDataElementOptions(f,t.active?`active`:r)};this.updateElement(t,f,g,r)}}countVisibleElements(){let e=this._cachedMeta,t=0;return e.data.forEach((e,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?U(this.resolveDataElementOptions(e,t).angle||n):0}},Ja=Object.freeze({__proto__:null,BarController:Ha,BubbleController:Ua,DoughnutController:Ga,LineController:Ka,PieController:class extends Ga{static id=`pie`;static defaults={cutout:0,rotation:0,circumference:360,radius:`100%`}},PolarAreaController:qa,RadarController:class extends Ea{static id=`radar`;static defaults={datasetElementType:`line`,dataElementType:`point`,indexAxis:`r`,showLine:!0,elements:{line:{fill:`start`}}};static overrides={aspectRatio:1,scales:{r:{type:`radialLinear`}}};getLabelAndValue(e){let t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:``+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,r){return ii.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta,n=t.dataset,r=t.data||[],i=t.iScale.getLabels();if(n.points=r,e!==`resize`){let t=this.resolveDatasetElementOptions(e);this.options.showLine||(t.borderWidth=0);let a={_loop:!0,_fullLoop:i.length===r.length,options:t};this.updateElement(n,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,t,n,r){let i=this._cachedMeta.rScale,a=r===`reset`;for(let o=t;o<t+n;o++){let t=e[o],n=this.resolveDataElementOptions(o,t.active?`active`:r),s=i.getPointPositionForValue(o,this.getParsed(o).r),c=a?i.xCenter:s.x,l=a?i.yCenter:s.y,u={x:c,y:l,angle:s.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(t,o,u,r)}}},ScatterController:class extends Ea{static id=`scatter`;static defaults={datasetElementType:!1,dataElementType:`point`,showLine:!1,fill:!1};static overrides={interaction:{mode:`point`},scales:{x:{type:`linear`},y:{type:`linear`}}};getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y);return{label:n[e]||``,value:`(`+o+`, `+s+`)`}}update(e){let t=this._cachedMeta,{data:n=[]}=t,r=this.chart._animationsDisabled,{start:i,count:a}=Hn(t,n,r);if(this._drawStart=i,this._drawCount=a,Un(t)&&(i=0,a=n.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:i,_dataset:a}=t;i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=n;let o=this.resolveDatasetElementOptions(e);o.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:o},e)}else this.datasetElementType&&=(delete t.dataset,!1);this.updateElements(n,i,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement(`line`)),super.addElements()}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,l=this.resolveDataElementOptions(t,r),u=this.getSharedOptions(l),d=this.includeOptions(r,u),f=a.axis,p=o.axis,{spanGaps:m,segment:h}=this.options,g=hn(m)?m:1/0,_=this.chart._animationsDisabled||i||r===`none`,v=t>0&&this.getParsed(t-1);for(let l=t;l<t+n;++l){let t=e[l],n=this.getParsed(l),m=_?t:{},y=N(n[p]),b=m[f]=a.getPixelForValue(n[f],l),x=m[p]=i||y?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,n,s):n[p],l);m.skip=isNaN(b)||isNaN(x)||y,m.stop=l>0&&Math.abs(n[f]-v[f])>g,h&&(m.parsed=n,m.raw=c.data[l]),d&&(m.options=u||this.resolveDataElementOptions(l,t.active?`active`:r)),_||this.updateElement(t,l,m,r),v=n}this.updateSharedOptions(u,r,l)}getMaxOverflow(){let e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}let n=e.dataset,r=n.options&&n.options.borderWidth||0;if(!t.length)return r;let i=t[0].size(this.resolveDataElementOptions(0)),a=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(r,i,a)/2}}});function Ya(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var Xa={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return Ya()}parse(){return Ya()}format(){return Ya()}add(){return Ya()}diff(){return Ya()}startOf(){return Ya()}endOf(){return Ya()}}};function Za(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?An:kn;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!N(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!N(e[t.axis]));r.hi+=Math.max(0,o)}return r}else if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function Qa(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Za(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function $a(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function eo(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||Qa(e,n,t,function(n,o,s){!i&&!yr(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function to(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=bn(e,{x:t.x,y:t.y});wn(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return Qa(e,n,t,a),i}function no(e,t,n,r,i,a){let o=[],s=$a(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Qa(e,n,t,l),o}function ro(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?to(e,t,n,i):no(e,t,n,r,i,a)}function io(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return Qa(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var ao={evaluateInteractionItems:Qa,modes:{index(e,t,n,r){let i=wi(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?eo(e,i,a,r,o):ro(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=wi(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?eo(e,i,a,r,o):ro(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return eo(e,wi(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=wi(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return ro(e,i,a,n.intersect,r,o)},x(e,t,n,r){return io(e,wi(t,e),`x`,n.intersect,r)},y(e,t,n,r){return io(e,wi(t,e),`y`,n.intersect,r)}}},oo=[`left`,`top`,`right`,`bottom`];function so(e,t){return e.filter(e=>e.pos===t)}function co(e,t){return e.filter(e=>oo.indexOf(e.pos)===-1&&e.box.axis===t)}function lo(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function uo(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function fo(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!oo.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function po(e,t){let n=fo(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function mo(e){let t=uo(e),n=lo(t.filter(e=>e.box.fullSize),!0),r=lo(so(t,`left`),!0),i=lo(so(t,`right`)),a=lo(so(t,`top`),!0),o=lo(so(t,`bottom`)),s=co(t,`x`),c=co(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:so(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function ho(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function go(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function _o(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!F(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&go(o,a.getPadding());let s=Math.max(0,t.outerWidth-ho(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-ho(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function vo(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function yo(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function bo(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,yo(s.horizontal,t));let{same:o,other:d}=_o(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&bo(i,t,n,r)||u}function xo(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function So(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;$t(c.start)&&(o=c.start),e.fullSize?xo(e,i.left,o,n.outerWidth-i.right-i.left,a):xo(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;$t(c.start)&&(a=c.start),e.fullSize?xo(e,a,i.top,o,n.outerHeight-i.bottom-i.top):xo(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var Co={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=G(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=mo(e.boxes),c=s.vertical,l=s.horizontal;z(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);go(f,G(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=po(c.concat(l),d);bo(s.fullSize,p,d,m),bo(c,p,d,m),bo(l,p,d,m)&&bo(c,p,d,m),vo(p),So(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,So(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},z(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},wo=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},To=class extends wo{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},Eo=`$chartjs`,Do={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},Oo=e=>e===null||e===``;function ko(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[Eo]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,Oo(i)){let t=Ai(e,`width`);t!==void 0&&(e.width=t)}if(Oo(r))if(e.style.height===``)e.height=e.width/(t||2);else{let t=Ai(e,`height`);t!==void 0&&(e.height=t)}return e}var Ao=ki?{passive:!0}:!1;function jo(e,t,n){e&&e.addEventListener(t,n,Ao)}function Mo(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Ao)}function No(e,t){let n=Do[e.type]||e.type,{x:r,y:i}=wi(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function Po(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Fo(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Po(n.addedNodes,r),t&&=!Po(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Io(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Po(n.removedNodes,r),t&&=!Po(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var Lo=new Map,Ro=0;function zo(){let e=window.devicePixelRatio;e!==Ro&&(Ro=e,Lo.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Bo(e,t){Lo.size||window.addEventListener(`resize`,zo),Lo.set(e,t)}function Vo(e){Lo.delete(e),Lo.size||window.removeEventListener(`resize`,zo)}function Ho(e,t,n){let r=e.canvas,i=r&&gi(r);if(!i)return;let a=Ln((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;n===0&&r===0||a(n,r)});return o.observe(i),Bo(e,a),o}function Uo(e,t,n){n&&n.disconnect(),t===`resize`&&Vo(e)}function Wo(e,t,n){let r=e.canvas,i=Ln(t=>{e.ctx!==null&&n(No(t,e))},e);return jo(r,t,i),i}var Go=class extends wo{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(ko(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[Eo])return!1;let n=t[Eo].initial;[`height`,`width`].forEach(e=>{let r=n[e];N(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[Eo],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Fo,detach:Io,resize:Ho}[t]||Wo)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Uo,detach:Uo,resize:Uo}[t]||Mo)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return Di(e,t,n,r)}isAttached(e){let t=e&&gi(e);return!!(t&&t.isConnected)}};function Ko(e){return!hi()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?To:Go}var qo=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return hn(this.x)&&hn(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Jo(e,t){let n=e.options.ticks,r=Yo(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Zo(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return Qo(t,l,a,o/i),l;let u=Xo(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for($o(t,l,u,N(r)?0:s-r,s),e=0,n=o-1;e<n;e++)$o(t,l,u,a[e],a[e+1]);return $o(t,l,u,c,N(r)?t.length:c+r),l}return $o(t,l,u),l}function Yo(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Xo(e,t,n){let r=es(e),i=t.length/n;if(!r)return Math.max(i,1);let a=pn(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Zo(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Qo(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function $o(e,t,n,r,i){let a=L(r,0),o=Math.min(L(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function es(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var ts=e=>e===`left`?`right`:e===`right`?`left`:e,ns=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,rs=(e,t)=>Math.min(t||e,e);function is(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function as(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function os(e,t){z(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function ss(e){return e.drawTicks?e.tickLength:0}function cs(e,t){if(!e.display)return 0;let n=K(e.font,t),r=G(e.padding);return(P(e.text)?e.text.length:1)*n.lineHeight+r.height}function ls(e,t){return Rr(e,{scale:t,type:`scale`})}function us(e,t,n){return Rr(e,{tick:n,index:t,type:`tick`})}function ds(e,t,n){let r=zn(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=ts(r)),r}function fs(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=Bn(r,a,s),F(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:ns(e,n,t);f=s-a}else{if(F(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:ns(e,n,t);m=Bn(r,o,i),d=n===`left`?-H:H}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var ps=class e extends qo{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=Rt(e,1/0),t=Rt(t,-1/0),n=Rt(n,1/0),r=Rt(r,-1/0),{min:Rt(e,n),max:Rt(t,r),minDefined:I(e),maxDefined:I(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:Rt(t,Rt(n,t)),max:Rt(n,Rt(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){R(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Lr(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?is(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Jo(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){R(this.options.afterUpdate,[this])}beforeSetDimensions(){R(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){R(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),R(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){R(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=R(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){R(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){R(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=rs(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=Tn(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-ss(e.grid)-t.padding-cs(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=vn(Math.min(Math.asin(Tn((l.highest.height+6)/o,-1,1)),Math.asin(Tn(s/c,-1,1))-Math.asin(Tn(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){R(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){R(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=cs(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=ss(i)+a):(e.height=this.maxHeight,e.width=ss(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=U(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){R(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)N(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=is(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/rs(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!N(p)&&!P(p))v=pr(r,g.data,g.gc,v,p),y=_;else if(P(p))for(d=0,f=p.length;d<f;++d)b=p[d],!N(b)&&!P(b)&&(v=pr(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}os(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return En(this._alignToPixels?hr(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=us(this.getContext(),e,n)}return this.$context||=ls(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=U(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=ss(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return hr(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,ee;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,ee=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,ee=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(F(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,ee=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(F(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let te=L(r.ticks.maxTicksLimit,l),ne=Math.max(1,Math.ceil(l/te));for(_=0;_<l;_+=ne){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=as(this,_,s),v!==void 0&&(y=hr(n,v,a),c?b=S=w=E=y:x=C=T=ee=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:ee,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=ss(n.grid),f=d+l,p=u?-l:f,m=-U(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,ee,te=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(F(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(F(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?te=`top`:s===`end`&&(te=`bottom`));let ne=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=P(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),ee=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-ne.highest.height/2-t*T+T:-ne.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?ne.highest.height/2-t*T:ne.highest.height-E*T,u&&(ee*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,ee=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=G(e.backdropPadding),n=ne.heights[g],r=ne.widths[g],i=ee-t.top,a=0-t.left;switch(te){case`middle`:i-=n/2;break;case`bottom`:i-=n;break}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2);break}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:ee,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:te,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-U(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=hr(e,this.left,a)-a/2,l=hr(e,this.right,o)+o/2,u=d=s):(u=hr(e,this.top,a)-a/2,d=hr(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&br(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;Dr(t,i,0,a,r,n)}n&&xr(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=K(n.font),a=G(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||F(t)?(s+=a.bottom,P(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=fs(this,s,t,o);Dr(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:ds(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=L(t.grid&&t.grid.z,-1),i=L(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return K(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},ms=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;_s(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,hs(e,a,n),this.override&&W.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in W[r]&&(delete W[r][n],this.override&&delete cr[n])}};function hs(e,t,n){let r=Gt(Object.create(null),[n?W.get(n):{},W.get(t),e.defaults]);W.set(t,r),e.defaultRoutes&&gs(t,e.defaultRoutes),e.descriptors&&W.describe(t,e.descriptors)}function gs(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);W.route(a,i,c,s)})}function _s(e){return`id`in e&&`defaults`in e}var vs=new class{constructor(){this.controllers=new ms(Ea,`datasets`,!0),this.elements=new ms(qo,`elements`),this.plugins=new ms(Object,`plugins`),this.scales=new ms(ps,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):z(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Qt(e);R(n[`before`+r],[],n),t[e](n),R(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},ys=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(R(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){N(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=L(n.options&&n.options.plugins,{}),i=bs(n);return r===!1&&!t?[]:Ss(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function bs(e){let t={},n=[],r=Object.keys(vs.plugins.items);for(let e=0;e<r.length;e++)n.push(vs.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function xs(e,t){return!t&&e===!1?null:e===!0?{}:e}function Ss(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=xs(r[t],i);c!==null&&a.push({plugin:s,options:Cs(e.config,{plugin:s,local:n[t]},c,o)})}return a}function Cs(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function ws(e,t){let n=W.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function Ts(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function Es(e,t){return e===t?`_index_`:`_value_`}function Ds(e){if(e===`x`||e===`y`||e===`r`)return e}function Os(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function ks(e,...t){if(Ds(e))return e;for(let n of t){let t=n.axis||Os(n.position)||e.length>1&&Ds(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function As(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function js(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return As(e,`x`,n[0])||As(e,`y`,n[0])}return{}}function Ms(e,t){let n=cr[e.type]||{scales:{}},r=t.scales||{},i=ws(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!F(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=ks(t,o,js(t,e),W.scales[o.type]),c=Es(s,i),l=n.scales||{};a[t]=Kt(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||ws(i,t),s=(cr[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=Ts(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),Kt(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];Kt(t,[W.scales[t.type],W.scale])}),a}function Ns(e){let t=e.options||={};t.plugins=L(t.plugins,{}),t.scales=Ms(e,t)}function Ps(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Fs(e){return e||={},e.data=Ps(e.data),Ns(e),e}var Is=new Map,Ls=new Set;function Rs(e,t){let n=Is.get(e);return n||(n=t(),Is.set(e,n),Ls.add(n)),n}var zs=(e,t,n)=>{let r=Zt(t,n);r!==void 0&&e.add(r)},Bs=class{constructor(e){this._config=Fs(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Ps(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),Ns(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Rs(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Rs(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Rs(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Rs(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>zs(s,e,t))),t.forEach(e=>zs(s,r,e)),t.forEach(e=>zs(s,cr[i]||{},e)),t.forEach(e=>zs(s,W,e)),t.forEach(e=>zs(s,lr,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),Ls.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,cr[t]||{},W.datasets[t]||{},{type:t},W,lr]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=Vs(this._resolverCache,e,r),s=a;if(Us(a,t)){i.$shared=!1,n=en(n)?n():n;let t=this.createResolver(e,n,o);s=Br(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=Vs(this._resolverCache,e,n);return F(t)?Br(i,t,void 0,r):i}};function Vs(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:zr(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Hs=e=>F(e)&&Object.getOwnPropertyNames(e).some(t=>en(e[t]));function Us(e,t){let{isScriptable:n,isIndexable:r}=Vr(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(en(o)||Hs(o))||a&&P(o))return!0}return!1}var Ws=`4.5.1`,Gs=[`top`,`bottom`,`left`,`right`,`chartArea`];function Ks(e,t){return e===`top`||e===`bottom`||Gs.indexOf(e)===-1&&t===`x`}function qs(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Js(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),R(n&&n.onComplete,[e],t)}function Ys(e){let t=e.chart,n=t.options.animation;R(n&&n.onProgress,[e],t)}function Xs(e){return hi()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var Zs={},Qs=e=>{let t=Xs(e);return Object.values(Zs).filter(e=>e.canvas===t).pop()};function $s(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function ec(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var tc=class{static defaults=W;static instances=Zs;static overrides=cr;static registry=vs;static version=Ws;static getChart=Qs;static register(...e){vs.add(...e),nc()}static unregister(...e){vs.remove(...e),nc()}constructor(e,t){let n=this.config=new Bs(t),r=Xs(e),i=Qs(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(Ko(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=Lt(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ys,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Rn(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],Zs[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}ea.listen(this,`complete`,Js),ea.listen(this,`progress`,Ys),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return N(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return vs}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():Oi(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return gr(this.canvas,this.ctx),this}stop(){return ea.stop(this),this}resize(e,t){ea.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,Oi(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),R(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){z(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=ks(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),z(i,t=>{let i=t.options,a=i.id,o=ks(a,i),s=L(i.type,t.dtype);(i.position===void 0||Ks(i.position,o)!==Ks(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(vs.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),z(r,(e,t)=>{e||delete n[t]}),z(n,e=>{Co.configure(this,e,e.options),Co.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(qs(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||ws(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=vs.getController(a),{datasetElementType:r,dataElementType:o}=W.datasets[a];Object.assign(t,{dataElementType:vs.getElement(o),datasetElementType:r&&vs.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){z(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||z(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(qs(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){z(this.scales,e=>{Co.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!tn(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)$s(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!tn(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;Co.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],z(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,en(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(ea.has(this)?this.attached&&!ea.running(this)&&ea.start(this):(this.draw(),Js({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=$i(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&br(t,r),e.controller.draw(),r&&xr(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return yr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=ao.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=Rr(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);$t(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),ea.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),gr(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Zs[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};z(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){z(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},z(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});Vt(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=nn(e),c=ec(e,this._lastEvent,n,s);n&&(this._lastEvent=null,R(i.onHover,[e,o,this],this),s&&R(i.onClick,[e,o,this],this));let l=!Vt(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function nc(){return z(tc.instances,e=>e._plugins.invalidate())}function rc(e,t,n){let{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:s,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,d=Math.min(l/o,Cn(r-n));if(e.beginPath(),e.arc(i,a,o-l/2,r+d/2,n-d/2),s>0){let t=Math.min(l/s,Cn(r-n));e.arc(i,a,s+l/2,n-t/2,r+t/2,!0)}else{let t=Math.min(l/2,o*Cn(r-n));if(u===`round`)e.arc(i,a,t,n-B/2,r+B/2,!0);else if(u===`bevel`){let o=2*t*t,s=-o*Math.cos(n+B/2)+i,c=-o*Math.sin(n+B/2)+a,l=o*Math.cos(r+B/2)+i,u=o*Math.sin(r+B/2)+a;e.lineTo(s,c),e.lineTo(l,u)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip(`evenodd`)}function ic(e,t,n){let{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:s,innerRadius:c}=t,l=i/s;e.beginPath(),e.arc(a,o,s,r-l,n+l),c>i?(l=i/c,e.arc(a,o,c,n+l,r-l,!0)):e.arc(a,o,i,n+H,r-H),e.closePath(),e.clip()}function ac(e){return Nr(e,[`outerStart`,`outerEnd`,`innerStart`,`innerEnd`])}function oc(e,t,n,r){let i=ac(e.options.borderRadius),a=(n-t)/2,o=Math.min(a,r*t/2),s=e=>{let t=(n-Math.min(a,e))*r/2;return Tn(e,0,Math.min(a,t))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:Tn(i.innerStart,0,o),innerEnd:Tn(i.innerEnd,0,o)}}function sc(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function cc(e,t,n,r,i,a){let{x:o,y:s,startAngle:c,pixelMargin:l,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-l,0),f=u>0?u+r+n+l:0,p=0,m=i-c;if(r){let e=((u>0?u-r:0)+(d>0?d-r:0))/2;p=(m-(e===0?m:m*e/(e+r)))/2}let h=(m-Math.max(.001,m*d-n/B)/d)/2,g=c+h+p,_=i-h-p,{outerStart:v,outerEnd:y,innerStart:b,innerEnd:x}=oc(t,f,d,_-g),S=d-v,C=d-y,w=g+v/S,T=_-y/C,E=f+b,ee=f+x,te=g+b/E,ne=_-x/ee;if(e.beginPath(),a){let t=(w+T)/2;if(e.arc(o,s,d,w,t),e.arc(o,s,d,t,T),y>0){let t=sc(C,T,o,s);e.arc(t.x,t.y,y,T,_+H)}let n=sc(ee,_,o,s);if(e.lineTo(n.x,n.y),x>0){let t=sc(ee,ne,o,s);e.arc(t.x,t.y,x,_+H,ne+Math.PI)}let r=(_-x/f+(g+b/f))/2;if(e.arc(o,s,f,_-x/f,r,!0),e.arc(o,s,f,r,g+b/f,!0),b>0){let t=sc(E,te,o,s);e.arc(t.x,t.y,b,te+Math.PI,g-H)}let i=sc(S,g,o,s);if(e.lineTo(i.x,i.y),v>0){let t=sc(S,w,o,s);e.arc(t.x,t.y,v,g-H,w)}}else{e.moveTo(o,s);let t=Math.cos(w)*d+o,n=Math.sin(w)*d+s;e.lineTo(t,n);let r=Math.cos(T)*d+o,i=Math.sin(T)*d+s;e.lineTo(r,i)}e.closePath()}function lc(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s}=t,c=t.endAngle;if(a){cc(e,t,n,r,c,i);for(let t=0;t<a;++t)e.fill();isNaN(s)||(c=o+(s%V||V))}return cc(e,t,n,r,c,i),e.fill(),c}function uc(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:d,borderDashOffset:f,borderRadius:p}=c,m=c.borderAlign===`inner`;if(!l)return;e.setLineDash(d||[]),e.lineDashOffset=f,m?(e.lineWidth=l*2,e.lineJoin=u||`round`):(e.lineWidth=l,e.lineJoin=u||`bevel`);let h=t.endAngle;if(a){cc(e,t,n,r,h,i);for(let t=0;t<a;++t)e.stroke();isNaN(s)||(h=o+(s%V||V))}m&&ic(e,t,h),c.selfJoin&&h-o>=B&&p===0&&u!==`miter`&&rc(e,t,h),a||(cc(e,t,n,r,h,i),e.stroke())}var dc=class extends qo{static id=`arc`;static defaults={borderAlign:`center`,borderColor:`#fff`,borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:`backgroundColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,n){let{angle:r,distance:i}=bn(this.getProps([`x`,`y`],n),{x:e,y:t}),{startAngle:a,endAngle:o,innerRadius:s,outerRadius:c,circumference:l}=this.getProps([`startAngle`,`endAngle`,`innerRadius`,`outerRadius`,`circumference`],n),u=(this.options.spacing+this.options.borderWidth)/2,d=L(l,o-a),f=wn(r,a,o)&&a!==o,p=d>=V||f,m=Dn(i,s+u,c+u);return p&&m}getCenterPoint(e){let{x:t,y:n,startAngle:r,endAngle:i,innerRadius:a,outerRadius:o}=this.getProps([`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`],e),{offset:s,spacing:c}=this.options,l=(r+i)/2,u=(a+o+c+s)/2;return{x:t+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:t,circumference:n}=this,r=(t.offset||0)/4,i=(t.spacing||0)/2,a=t.circular;if(this.pixelMargin=t.borderAlign===`inner`?.33:0,this.fullCircles=n>V?Math.floor(n/V):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let o=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(o)*r,Math.sin(o)*r);let s=r*(1-Math.sin(Math.min(B,n||0)));e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,lc(e,this,s,i,a),uc(e,this,s,i,a),e.restore()}};function fc(e,t,n=t){e.lineCap=L(n.borderCapStyle,t.borderCapStyle),e.setLineDash(L(n.borderDash,t.borderDash)),e.lineDashOffset=L(n.borderDashOffset,t.borderDashOffset),e.lineJoin=L(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=L(n.borderWidth,t.borderWidth),e.strokeStyle=L(n.borderColor,t.borderColor)}function pc(e,t,n){e.lineTo(n.x,n.y)}function mc(e){return e.stepped?Sr:e.tension||e.cubicInterpolationMode===`monotone`?Cr:pc}function hc(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function gc(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=hc(i,n,r),u=mc(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function _c(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=hc(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function vc(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?_c:gc}function yc(e){return e.stepped?Mi:e.tension||e.cubicInterpolationMode===`monotone`?Ni:ji}function bc(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),fc(e,t.options),e.stroke(i)}function xc(e,t,n,r){let{segments:i,options:a}=t,o=vc(t);for(let s of i)fc(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var Sc=typeof Path2D==`function`;function Cc(e,t,n,r){Sc&&!t.options.segment?bc(e,t,n,r):xc(e,t,n,r)}var wc=class extends qo{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;mi(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=Ki(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=Ui(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=yc(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return vc(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=vc(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),Cc(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function Tc(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var Ec=class extends qo{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return Tc(this,e,`x`,t)}inYRange(e,t){return Tc(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!yr(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,_r(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};function Dc(e,t){let{x:n,y:r,base:i,width:a,height:o}=e.getProps([`x`,`y`,`base`,`width`,`height`],t),s,c,l,u,d;return e.horizontal?(d=o/2,s=Math.min(n,i),c=Math.max(n,i),l=r-d,u=r+d):(d=a/2,s=n-d,c=n+d,l=Math.min(r,i),u=Math.max(r,i)),{left:s,top:l,right:c,bottom:u}}function Oc(e,t,n,r){return e?0:Tn(t,n,r)}function kc(e,t,n){let r=e.options.borderWidth,i=e.borderSkipped,a=Pr(r);return{t:Oc(i.top,a.top,0,n),r:Oc(i.right,a.right,0,t),b:Oc(i.bottom,a.bottom,0,n),l:Oc(i.left,a.left,0,t)}}function Ac(e,t,n){let{enableBorderRadius:r}=e.getProps([`enableBorderRadius`]),i=e.options.borderRadius,a=Fr(i),o=Math.min(t,n),s=e.borderSkipped,c=r||F(i);return{topLeft:Oc(!c||s.top||s.left,a.topLeft,0,o),topRight:Oc(!c||s.top||s.right,a.topRight,0,o),bottomLeft:Oc(!c||s.bottom||s.left,a.bottomLeft,0,o),bottomRight:Oc(!c||s.bottom||s.right,a.bottomRight,0,o)}}function jc(e){let t=Dc(e),n=t.right-t.left,r=t.bottom-t.top,i=kc(e,n/2,r/2),a=Ac(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Mc(e,t,n,r){let i=t===null,a=n===null,o=e&&!(i&&a)&&Dc(e,r);return o&&(i||Dn(t,o.left,o.right))&&(a||Dn(n,o.top,o.bottom))}function Nc(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Pc(e,t){e.rect(t.x,t.y,t.w,t.h)}function Fc(e,t,n={}){let r=e.x===n.x?0:-t,i=e.y===n.y?0:-t,a=(e.x+e.w===n.x+n.w?0:t)-r,o=(e.y+e.h===n.y+n.h?0:t)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}var Ic=Object.freeze({__proto__:null,ArcElement:dc,BarElement:class extends qo{static id=`bar`;static defaults={borderSkipped:`start`,borderWidth:0,borderRadius:0,inflateAmount:`auto`,pointStyle:void 0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:a}=jc(this),o=Nc(a.radius)?Or:Pc;e.save(),(a.w!==i.w||a.h!==i.h)&&(e.beginPath(),o(e,Fc(a,t,i)),e.clip(),o(e,Fc(i,-t,a)),e.fillStyle=n,e.fill(`evenodd`)),e.beginPath(),o(e,Fc(i,t)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,t,n){return Mc(this,e,t,n)}inXRange(e,t){return Mc(this,e,null,t)}inYRange(e,t){return Mc(this,null,e,t)}getCenterPoint(e){let{x:t,y:n,base:r,horizontal:i}=this.getProps([`x`,`y`,`base`,`horizontal`],e);return{x:i?(t+r)/2:t,y:i?n:(n+r)/2}}getRange(e){return e===`x`?this.width/2:this.height/2}},LineElement:wc,PointElement:Ec}),Lc=[`rgb(54, 162, 235)`,`rgb(255, 99, 132)`,`rgb(255, 159, 64)`,`rgb(255, 205, 86)`,`rgb(75, 192, 192)`,`rgb(153, 102, 255)`,`rgb(201, 203, 207)`],Rc=Lc.map(e=>e.replace(`rgb(`,`rgba(`).replace(`)`,`, 0.5)`));function zc(e){return Lc[e%Lc.length]}function Bc(e){return Rc[e%Rc.length]}function Vc(e,t){return e.borderColor=zc(t),e.backgroundColor=Bc(t),++t}function Hc(e,t){return e.backgroundColor=e.data.map(()=>zc(t++)),t}function Uc(e,t){return e.backgroundColor=e.data.map(()=>Bc(t++)),t}function Wc(e){let t=0;return(n,r)=>{let i=e.getDatasetMeta(r).controller;i instanceof Ga?t=Hc(n,t):i instanceof qa?t=Uc(n,t):i&&(t=Vc(n,t))}}function Gc(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Kc(e){return e&&(e.borderColor||e.backgroundColor)}function qc(){return W.borderColor!==`rgba(0,0,0,0.1)`||W.backgroundColor!==`rgba(0,0,0,0.1)`}var Jc={id:`colors`,defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;let{data:{datasets:r},options:i}=e.config,{elements:a}=i,o=Gc(r)||Kc(i)||a&&Gc(a)||qc();if(!n.forceOverride&&o)return;let s=Wc(e);r.forEach(s)}};function Yc(e,t,n,r,i){let a=i.samples||r;if(a>=n)return e.slice(t,t+n);let o=[],s=(n-2)/(a-2),c=0,l=t+n-1,u=t,d,f,p,m,h;for(o[c++]=e[u],d=0;d<a-2;d++){let r=0,i=0,a,l=Math.floor((d+1)*s)+1+t,g=Math.min(Math.floor((d+2)*s)+1,n)+t,_=g-l;for(a=l;a<g;a++)r+=e[a].x,i+=e[a].y;r/=_,i/=_;let v=Math.floor(d*s)+1+t,y=Math.min(Math.floor((d+1)*s)+1,n)+t,{x:b,y:x}=e[u];for(p=m=-1,a=v;a<y;a++)m=.5*Math.abs((b-r)*(e[a].y-x)-(b-e[a].x)*(i-x)),m>p&&(p=m,f=e[a],h=a);o[c++]=f,u=h}return o[c++]=e[l],o}function Xc(e,t,n,r){let i=0,a=0,o,s,c,l,u,d,f,p,m,h,g=[],_=t+n-1,v=e[t].x,y=e[_].x-v;for(o=t;o<t+n;++o){s=e[o],c=(s.x-v)/y*r,l=s.y;let t=c|0;if(t===u)l<m?(m=l,d=o):l>h&&(h=l,f=o),i=(a*i+s.x)/++a;else{let n=o-1;if(!N(d)&&!N(f)){let t=Math.min(d,f),r=Math.max(d,f);t!==p&&t!==n&&g.push({...e[t],x:i}),r!==p&&r!==n&&g.push({...e[r],x:i})}o>0&&n!==p&&g.push(e[n]),g.push(s),u=t,a=0,m=h=l,d=f=p=o}}return g}function Zc(e){if(e._decimated){let t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,`data`,{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Qc(e){e.data.datasets.forEach(e=>{Zc(e)})}function $c(e,t){let n=t.length,r=0,i,{iScale:a}=e,{min:o,max:s,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(r=Tn(kn(t,a.axis,o).lo,0,n-1)),i=l?Tn(kn(t,a.axis,s).hi+1,r,n)-r:n-r,{start:r,count:i}}var el={id:`decimation`,defaults:{algorithm:`min-max`,enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Qc(e);return}let r=e.width;e.data.datasets.forEach((t,i)=>{let{_data:a,indexAxis:o}=t,s=e.getDatasetMeta(i),c=a||t.data;if(Ir([o,e.options.indexAxis])===`y`||!s.controller.supportsDecimation)return;let l=e.scales[s.xAxisID];if(l.type!==`linear`&&l.type!==`time`||e.options.parsing)return;let{start:u,count:d}=$c(s,c);if(d<=(n.threshold||4*r)){Zc(t);return}N(a)&&(t._data=c,delete t.data,Object.defineProperty(t,`data`,{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(e){this._data=e}}));let f;switch(n.algorithm){case`lttb`:f=Yc(c,u,d,r,n);break;case`min-max`:f=Xc(c,u,d,r);break;default:throw Error(`Unsupported decimation algorithm '${n.algorithm}'`)}t._decimated=f})},destroy(e){Qc(e)}};function tl(e,t,n){let r=e.segments,i=e.points,a=t.points,o=[];for(let e of r){let{start:r,end:s}=e;s=il(r,s,i);let c=nl(n,i[r],i[s],e.loop);if(!t.segments){o.push({source:e,target:c,start:i[r],end:i[s]});continue}let l=Ui(t,c);for(let t of l){let r=nl(n,a[t.start],a[t.end],t.loop),s=Hi(e,i,r);for(let e of s)o.push({source:e,target:t,start:{[n]:al(c,r,`start`,Math.max)},end:{[n]:al(c,r,`end`,Math.min)}})}}return o}function nl(e,t,n,r){if(r)return;let i=t[e],a=n[e];return e===`angle`&&(i=Cn(i),a=Cn(a)),{property:e,start:i,end:a}}function rl(e,t){let{x:n=null,y:r=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:e,end:t})=>{t=il(e,t,i);let o=i[e],s=i[t];r===null?n!==null&&(a.push({x:n,y:o.y}),a.push({x:n,y:s.y})):(a.push({x:o.x,y:r}),a.push({x:s.x,y:r}))}),a}function il(e,t,n){for(;t>e;t--){let e=n[t];if(!isNaN(e.x)&&!isNaN(e.y))break}return t}function al(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function ol(e,t){let n=[],r=!1;return P(e)?(r=!0,n=e):n=rl(e,t),n.length?new wc({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function sl(e){return e&&e.fill!==!1}function cl(e,t,n){let r=e[t].fill,i=[t],a;if(!n)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!I(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;i.push(r),r=a.fill}return!1}function ll(e,t,n){let r=pl(e);if(F(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return I(i)&&Math.floor(i)===i?ul(r[0],t,i,n):[`origin`,`start`,`end`,`stack`,`shape`].indexOf(r)>=0&&r}function ul(e,t,n,r){return(e===`-`||e===`+`)&&(n=t+n),n===t||n<0||n>=r?!1:n}function dl(e,t){let n=null;return e===`start`?n=t.bottom:e===`end`?n=t.top:F(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function fl(e,t,n){let r;return r=e===`start`?n:e===`end`?t.options.reverse?t.min:t.max:F(e)?e.value:t.getBaseValue(),r}function pl(e){let t=e.options,n=t.fill,r=L(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?`origin`:r}function ml(e){let{scale:t,index:n,line:r}=e,i=[],a=r.segments,o=r.points,s=hl(t,n);s.push(ol({x:null,y:t.bottom},r));for(let e=0;e<a.length;e++){let t=a[e];for(let e=t.start;e<=t.end;e++)gl(i,o[e],s)}return new wc({points:i,options:{}})}function hl(e,t){let n=[],r=e.getMatchingVisibleMetas(`line`);for(let e=0;e<r.length;e++){let i=r[e];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function gl(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=n[i],{first:o,last:s,point:c}=_l(a,t,`x`);if(!(!c||o&&s)){if(o)r.unshift(c);else if(e.push(c),!s)break}}e.push(...r)}function _l(e,t,n){let r=e.interpolate(t,n);if(!r)return{};let i=r[n],a=e.segments,o=e.points,s=!1,c=!1;for(let e=0;e<a.length;e++){let t=a[e],r=o[t.start][n],l=o[t.end][n];if(Dn(i,r,l)){s=i===r,c=i===l;break}}return{first:s,last:c,point:r}}var vl=class{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){let{x:r,y:i,radius:a}=this;return t||={start:0,end:V},e.arc(r,i,a,t.end,t.start,!0),!n.bounds}interpolate(e){let{x:t,y:n,radius:r}=this,i=e.angle;return{x:t+Math.cos(i)*r,y:n+Math.sin(i)*r,angle:i}}};function yl(e){let{chart:t,fill:n,line:r}=e;if(I(n))return bl(t,n);if(n===`stack`)return ml(e);if(n===`shape`)return!0;let i=xl(e);return i instanceof vl?i:ol(i,r)}function bl(e,t){let n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function xl(e){return(e.scale||{}).getPointPositionForValue?Cl(e):Sl(e)}function Sl(e){let{scale:t={},fill:n}=e,r=dl(n,t);if(I(r)){let e=t.isHorizontal();return{x:e?r:null,y:e?null:r}}return null}function Cl(e){let{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,a=r.reverse?t.max:t.min,o=fl(n,t,a),s=[];if(r.grid.circular){let e=t.getPointPositionForValue(0,a);return new vl({x:e.x,y:e.y,radius:t.getDistanceFromCenterForValue(o)})}for(let e=0;e<i;++e)s.push(t.getPointPositionForValue(e,o));return s}function wl(e,t,n){let r=yl(t),{chart:i,index:a,line:o,scale:s,axis:c}=t,l=o.options,u=l.fill,d=l.backgroundColor,{above:f=d,below:p=d}=u||{},m=$i(i,i.getDatasetMeta(a));r&&o.points.length&&(br(e,n),Tl(e,{line:o,target:r,above:f,below:p,area:n,scale:s,axis:c,clip:m}),xr(e))}function Tl(e,t){let{line:n,target:r,above:i,below:a,area:o,scale:s,clip:c}=t,l=n._loop?`angle`:t.axis;e.save();let u=a;a!==i&&(l===`x`?(El(e,r,o.top),Ol(e,{line:n,target:r,color:i,scale:s,property:l,clip:c}),e.restore(),e.save(),El(e,r,o.bottom)):l===`y`&&(Dl(e,r,o.left),Ol(e,{line:n,target:r,color:a,scale:s,property:l,clip:c}),e.restore(),e.save(),Dl(e,r,o.right),u=i)),Ol(e,{line:n,target:r,color:u,scale:s,property:l,clip:c}),e.restore()}function El(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[il(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(l.x,n),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(u.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function Dl(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[il(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(n,l.y),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(n,u.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function Ol(e,t){let{line:n,target:r,property:i,color:a,scale:o,clip:s}=t,c=tl(n,r,i);for(let{source:t,target:l,start:u,end:d}of c){let{style:{backgroundColor:c=a}={}}=t,f=r!==!0;e.save(),e.fillStyle=c,kl(e,o,s,f&&nl(i,u,d)),e.beginPath();let p=!!n.pathSegment(e,t),m;if(f){p?e.closePath():Al(e,r,d,i);let t=!!r.pathSegment(e,l,{move:p,reverse:!0});m=p&&t,m||Al(e,r,u,i)}e.closePath(),e.fill(m?`evenodd`:`nonzero`),e.restore()}}function kl(e,t,n,r){let i=t.chart.chartArea,{property:a,start:o,end:s}=r||{};if(a===`x`||a===`y`){let t,r,c,l;a===`x`?(t=o,r=i.top,c=s,l=i.bottom):(t=i.left,r=o,c=i.right,l=s),e.beginPath(),n&&(t=Math.max(t,n.left),c=Math.min(c,n.right),r=Math.max(r,n.top),l=Math.min(l,n.bottom)),e.rect(t,r,c-t,l-r),e.clip()}}function Al(e,t,n,r){let i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var jl={id:`filler`,afterDatasetsUpdate(e,t,n){let r=(e.data.datasets||[]).length,i=[],a,o,s,c;for(o=0;o<r;++o)a=e.getDatasetMeta(o),s=a.dataset,c=null,s&&s.options&&s instanceof wc&&(c={visible:e.isDatasetVisible(o),index:o,fill:ll(s,o,r),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=c,i.push(c);for(o=0;o<r;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=cl(i,o,n.propagate))},beforeDraw(e,t,n){let r=n.drawTime===`beforeDraw`,i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let t=i.length-1;t>=0;--t){let n=i[t].$filler;n&&(n.line.updateControlPoints(a,n.axis),r&&n.fill&&wl(e.ctx,n,a))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!==`beforeDatasetsDraw`)return;let r=e.getSortedVisibleDatasetMetas();for(let t=r.length-1;t>=0;--t){let n=r[t].$filler;sl(n)&&wl(e.ctx,n,e.chartArea)}},beforeDatasetDraw(e,t,n){let r=t.meta.$filler;!sl(r)||n.drawTime!==`beforeDatasetDraw`||wl(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:`beforeDatasetDraw`}},Ml=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},Nl=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index,Pl=class extends qo{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=R(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(t=>e.filter(t,this.chart.data))),e.sort&&(t=t.sort((t,n)=>e.sort(t,n,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}let n=e.labels,r=K(n.font),i=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:s}=Ml(n,i),c,l;t.font=r.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(a,i,o,s)+10):(l=this.maxHeight,c=this._fitCols(a,r,o,s)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(l,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,r){let{ctx:i,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.lineWidths=[0],l=r+o,u=e;i.textAlign=`left`,i.textBaseline=`middle`;let d=-1,f=-l;return this.legendItems.forEach((e,p)=>{let m=n+t/2+i.measureText(e.text).width;(p===0||c[c.length-1]+m+2*o>a)&&(u+=l,c[c.length-(p>0?0:1)]=0,f+=l,d++),s[p]={left:0,top:f,row:d,width:m,height:r},c[c.length-1]+=m+o}),u}_fitCols(e,t,n,r){let{ctx:i,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.columnSizes=[],l=a-e,u=o,d=0,f=0,p=0,m=0;return this.legendItems.forEach((e,a)=>{let{itemWidth:h,itemHeight:g}=Fl(n,t,i,e,r);a>0&&f+g+2*o>l&&(u+=d+o,c.push({width:d,height:f}),p+=d+o,m++,d=f=0),s[a]={left:p,top:f,col:m,width:h,height:g},d=Math.max(d,h),f+=g+o}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:r},rtl:i}}=this,a=Ii(i,this.left,this.width);if(this.isHorizontal()){let i=0,o=Bn(n,this.left+r,this.right-this.lineWidths[i]);for(let s of t)i!==s.row&&(i=s.row,o=Bn(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+e+r,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+r}else{let i=0,o=Bn(n,this.top+e+r,this.bottom-this.columnSizes[i].height);for(let s of t)s.col!==i&&(i=s.col,o=Bn(n,this.top+e+r,this.bottom-this.columnSizes[i].height)),s.top=o,s.left+=this.left+r,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+r}}isHorizontal(){return this.options.position===`top`||this.options.position===`bottom`}draw(){if(this.options.display){let e=this.ctx;br(e,this),this._draw(),xr(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:n,ctx:r}=this,{align:i,labels:a}=e,o=W.color,s=Ii(e.rtl,this.left,this.width),c=K(a.font),{padding:l}=a,u=c.size,d=u/2,f;this.drawTitle(),r.textAlign=s.textAlign(`left`),r.textBaseline=`middle`,r.lineWidth=.5,r.font=c.string;let{boxWidth:p,boxHeight:m,itemHeight:h}=Ml(a,u),g=function(e,t,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();let i=L(n.lineWidth,1);if(r.fillStyle=L(n.fillStyle,o),r.lineCap=L(n.lineCap,`butt`),r.lineDashOffset=L(n.lineDashOffset,0),r.lineJoin=L(n.lineJoin,`miter`),r.lineWidth=i,r.strokeStyle=L(n.strokeStyle,o),r.setLineDash(L(n.lineDash,[])),a.usePointStyle)vr(r,{radius:m*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},s.xPlus(e,p/2),t+d,a.pointStyleWidth&&p);else{let a=t+Math.max((u-m)/2,0),o=s.leftForLtr(e,p),c=Fr(n.borderRadius);r.beginPath(),Object.values(c).some(e=>e!==0)?Or(r,{x:o,y:a,w:p,h:m,radius:c}):r.rect(o,a,p,m),r.fill(),i!==0&&r.stroke()}r.restore()},_=function(e,t,n){Dr(r,n.text,e,t+h/2,c,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();f=v?{x:Bn(i,this.left+l,this.right-n[0]),y:this.top+l+y,line:0}:{x:this.left+l,y:Bn(i,this.top+y+l,this.bottom-t[0].height),line:0},Li(this.ctx,e.textDirection);let b=h+l;this.legendItems.forEach((o,u)=>{r.strokeStyle=o.fontColor,r.fillStyle=o.fontColor;let m=r.measureText(o.text).width,h=s.textAlign(o.textAlign||=a.textAlign),x=p+d+m,S=f.x,C=f.y;if(s.setWidth(this.width),v?u>0&&S+x+l>this.right&&(C=f.y+=b,f.line++,S=f.x=Bn(i,this.left+l,this.right-n[f.line])):u>0&&C+b>this.bottom&&(S=f.x=S+t[f.line].width+l,f.line++,C=f.y=Bn(i,this.top+y+l,this.bottom-t[f.line].height)),g(s.x(S),C,o),S=Vn(h,S+p+d,v?S+x:this.right,e.rtl),_(s.x(S),C,o),v)f.x+=x+l;else if(typeof o.text!=`string`){let e=c.lineHeight;f.y+=Rl(o,e)+l}else f.y+=b}),Ri(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,n=K(t.font),r=G(t.padding);if(!t.display)return;let i=Ii(e.rtl,this.left,this.width),a=this.ctx,o=t.position,s=n.size/2,c=r.top+s,l,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),l=this.top+c,u=Bn(e.align,u,this.right-d);else{let t=this.columnSizes.reduce((e,t)=>Math.max(e,t.height),0);l=c+Bn(e.align,this.top,this.bottom-t-e.labels.padding-this._computeTitleHeight())}let f=Bn(o,u,u+d);a.textAlign=i.textAlign(zn(o)),a.textBaseline=`middle`,a.strokeStyle=t.color,a.fillStyle=t.color,a.font=n.string,Dr(a,t.text,f,l,n)}_computeTitleHeight(){let e=this.options.title,t=K(e.font),n=G(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,r,i;if(Dn(e,this.left,this.right)&&Dn(t,this.top,this.bottom)){for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],Dn(e,r.left,r.left+r.width)&&Dn(t,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(e){let t=this.options;if(!zl(e.type,t))return;let n=this._getLegendItemAt(e.x,e.y);if(e.type===`mousemove`||e.type===`mouseout`){let r=this._hoveredItem,i=Nl(r,n);r&&!i&&R(t.onLeave,[e,r,this],this),this._hoveredItem=n,n&&!i&&R(t.onHover,[e,n,this],this)}else n&&R(t.onClick,[e,n,this],this)}};function Fl(e,t,n,r,i){return{itemWidth:Il(r,e,t,n),itemHeight:Ll(i,r,t.lineHeight)}}function Il(e,t,n,r){let i=e.text;return i&&typeof i!=`string`&&(i=i.reduce((e,t)=>e.length>t.length?e:t)),t+n.size/2+r.measureText(i).width}function Ll(e,t,n){let r=e;return typeof t.text!=`string`&&(r=Rl(t,n)),r}function Rl(e,t){return t*(e.text?e.text.length:0)}function zl(e,t){return!!((e===`mousemove`||e===`mouseout`)&&(t.onHover||t.onLeave)||t.onClick&&(e===`click`||e===`mouseup`))}var Bl={id:`legend`,_element:Pl,start(e,t,n){let r=e.legend=new Pl({ctx:e.ctx,options:n,chart:e});Co.configure(e,r,n),Co.addBox(e,r)},stop(e){Co.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){let r=e.legend;Co.configure(e,r,n),r.options=n},afterUpdate(e){let t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:`top`,align:`center`,fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){let r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(e=>{let c=e.controller.getStyle(n?0:void 0),l=G(c.borderWidth);return{text:t[e.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!e.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(s||c.borderRadius),datasetIndex:e.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:`center`,text:``}},descriptors:{_scriptable:e=>!e.startsWith(`on`),labels:{_scriptable:e=>![`generateLabels`,`filter`,`sort`].includes(e)}}},Vl=class extends qo{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;let r=P(n.text)?n.text.length:1;this._padding=G(n.padding);let i=r*K(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){let e=this.options.position;return e===`top`||e===`bottom`}_drawArgs(e){let{top:t,left:n,bottom:r,right:i,options:a}=this,o=a.align,s=0,c,l,u;return this.isHorizontal()?(l=Bn(o,n,i),u=t+e,c=i-n):(a.position===`left`?(l=n+e,u=Bn(o,r,t),s=B*-.5):(l=i-e,u=Bn(o,t,r),s=B*.5),c=r-t),{titleX:l,titleY:u,maxWidth:c,rotation:s}}draw(){let e=this.ctx,t=this.options;if(!t.display)return;let n=K(t.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:a,maxWidth:o,rotation:s}=this._drawArgs(r);Dr(e,t.text,0,0,n,{color:t.color,maxWidth:o,rotation:s,textAlign:zn(t.align),textBaseline:`middle`,translation:[i,a]})}};function Hl(e,t){let n=new Vl({ctx:e.ctx,options:t,chart:e});Co.configure(e,n,t),Co.addBox(e,n),e.titleBlock=n}var Ul={id:`title`,_element:Vl,start(e,t,n){Hl(e,n)},stop(e){let t=e.titleBlock;Co.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){let r=e.titleBlock;Co.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`bold`},fullSize:!0,padding:10,position:`top`,text:``,weight:2e3},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Wl=new WeakMap,Gl={id:`subtitle`,start(e,t,n){let r=new Vl({ctx:e.ctx,options:n,chart:e});Co.configure(e,r,n),Co.addBox(e,r),Wl.set(e,r)},stop(e){Co.removeBox(e,Wl.get(e)),Wl.delete(e)},beforeUpdate(e,t,n){let r=Wl.get(e);Co.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`normal`},fullSize:!0,padding:0,position:`top`,text:``,weight:1500},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Kl={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=xn(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function ql(e,t){return t&&(P(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Jl(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Yl(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Xl(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=K(t.bodyFont),l=K(t.titleFont),u=K(t.footerFont),d=a.length,f=i.length,p=r.length,m=G(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,z(e.title,y),n.font=c.string,z(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,z(r,e=>{z(e.before,y),z(e.lines,y),z(e.after,y)}),v=0,n.font=u.string,z(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function Zl(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Ql(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function $l(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Ql(l,e,t,n)&&(l=`center`),l}function eu(e,t,n){let r=n.yAlign||t.yAlign||Zl(e,n);return{xAlign:n.xAlign||t.xAlign||$l(e,t,n,r),yAlign:r}}function tu(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function nu(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:t===`bottom`?r-=i+n:r-=i/2,r}function ru(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Fr(o),m=tu(t,s),h=nu(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:Tn(m,0,r.width-t.width),y:Tn(h,0,r.height-t.height)}}function iu(e,t,n){let r=G(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function au(e){return ql([],Jl(e))}function ou(e,t,n){return Rr(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function su(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var cu={beforeTitle:It,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:It,beforeBody:It,beforeLabel:It,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return N(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:It,afterBody:It,beforeFooter:It,footer:It,afterFooter:It};function lu(e,t,n,r){let i=e[t].call(n,r);return i===void 0?cu[t].call(n,r):i}var uu=class extends qo{static positioners=Kl;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new ia(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=ou(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=lu(n,`beforeTitle`,this,e),i=lu(n,`title`,this,e),a=lu(n,`afterTitle`,this,e),o=[];return o=ql(o,Jl(r)),o=ql(o,Jl(i)),o=ql(o,Jl(a)),o}getBeforeBody(e,t){return au(lu(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return z(e,e=>{let t={before:[],lines:[],after:[]},i=su(n,e);ql(t.before,Jl(lu(i,`beforeLabel`,this,e))),ql(t.lines,lu(i,`label`,this,e)),ql(t.after,Jl(lu(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return au(lu(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=lu(n,`beforeFooter`,this,e),i=lu(n,`footer`,this,e),a=lu(n,`afterFooter`,this,e),o=[];return o=ql(o,Jl(r)),o=ql(o,Jl(i)),o=ql(o,Jl(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Yl(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),z(o,t=>{let n=su(e.callbacks,t);r.push(lu(n,`labelColor`,this,t)),i.push(lu(n,`labelPointStyle`,this,t)),a.push(lu(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=Kl[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Xl(this,n),o=Object.assign({},e,t),s=eu(this.chart,n,o),c=ru(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=Fr(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=Ii(n.rtl,this.x,this.width);for(e.x=iu(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=K(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=K(i.bodyFont),u=iu(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,_r(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,_r(e,t,n,l)}else{e.lineWidth=F(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=Fr(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,Or(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),Or(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=K(n.bodyFont),d=u.lineHeight,f=0,p=Ii(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=iu(this,h,n),t.fillStyle=n.bodyColor,z(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,z(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;z(g.after,m)}f=0,d=u.lineHeight,z(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=Ii(n.rtl,this.x,this.width);for(e.x=iu(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=K(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Fr(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=Kl[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Xl(this,e),o=Object.assign({},n,this._size),s=eu(t,e,o),c=ru(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=G(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),Li(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),Ri(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!Vt(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!Vt(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=Kl[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},du=Object.freeze({__proto__:null,Colors:Jc,Decimation:el,Filler:jl,Legend:Bl,SubTitle:Gl,Title:Ul,Tooltip:{id:`tooltip`,_element:uu,positioners:Kl,afterInit(e,t,n){n&&(e.tooltip=new uu({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:cu},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]}}),fu=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function pu(e,t,n,r){let i=e.indexOf(t);return i===-1?fu(e,t,n,r):i===e.lastIndexOf(t)?i:n}var mu=(e,t)=>e===null?null:Tn(Math.round(e),0,t);function hu(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var gu=class extends ps{static id=`category`;static defaults={ticks:{callback:hu}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(N(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:pu(n,e,L(t,e),this._addedLabels),mu(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return hu.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function _u(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!N(a),_=!N(o),v=!N(c),y=(h-m)/(u+1),b=fn((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=fn(w*b/p/f)*f),N(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&gn((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=dn(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(yn(b),yn(S));x=10**(N(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,dn(Math.round((S+E*b)*x)/x,a,vu(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&dn(n[n.length-1].value,o,vu(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function vu(e,t,{horizontal:n,minRotation:r}){let i=U(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var yu=class extends ps{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return N(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=un(r),t=un(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=_u({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&_n(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return rr(e,this.chart.options.locale,this.options.ticks.format)}},bu=class extends yu{static id=`linear`;static defaults={ticks:{callback:or.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=I(e)?e:0,this.max=I(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=U(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},xu=e=>Math.floor(ln(e)),Su=(e,t)=>10**(xu(e)+t);function Cu(e){return e/10**xu(e)==1}function wu(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function Tu(e,t){let n=xu(t-e);for(;wu(e,t,n)>10;)n++;for(;wu(e,t,n)<10;)n--;return Math.min(n,xu(e))}function Eu(e,{min:t,max:n}){t=Rt(e.min,t);let r=[],i=xu(t),a=Tu(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=Rt(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:Cu(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=Rt(e.max,f);return r.push({value:p,major:Cu(p),significand:d}),r}var Du=class extends ps{static id=`logarithmic`;static defaults={ticks:{callback:or.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=yu.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return I(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=I(e)?Math.max(0,e):null,this.max=I(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!I(this._userMin)&&(this.min=e===Su(this.min,0)?Su(this.min,-1):Su(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(Su(n,-1)),a(Su(r,1)))),n<=0&&i(Su(r,-1)),r<=0&&a(Su(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=Eu({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&_n(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:rr(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=ln(e),this._valueRange=ln(this.max)-ln(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(ln(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}};function Ou(e){let t=e.ticks;if(t.display&&e.display){let e=G(t.backdropPadding);return L(t.font&&t.font.size,W.font.size)+e.height}return 0}function ku(e,t,n){return n=P(n)?n:[n],{w:mr(e,t.string,n),h:n.length*t.lineHeight}}function Au(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function ju(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?B/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=K(a.font),d=ku(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=Cn(e.getIndexAngle(c)+s),p=Math.round(vn(f));Mu(n,t,f,Au(p,l.x,d.w,0,180),Au(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Fu(e,r,i)}function Mu(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function Nu(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(vn(Cn(c.angle+H))),u=Ru(c.y,s.h,l),d=Iu(l),f=Lu(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function Pu(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(yr({x:n,y:r},t)||yr({x:n,y:a},t)||yr({x:i,y:r},t)||yr({x:i,y:a},t))}function Fu(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:Ou(a)/2,additionalAngle:o?B/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=Nu(e,a,c);r.push(i),s===`auto`&&(i.visible=Pu(i,l),i.visible&&(l=i))}return r}function Iu(e){return e===0||e===180?`center`:e<180?`left`:`right`}function Lu(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function Ru(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function zu(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!N(s)){let n=Fr(t.borderRadius),c=G(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),Or(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function Bu(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));zu(n,a,t);let o=K(a.font),{x:s,y:c,textAlign:l}=t;Dr(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function Vu(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,V);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function Hu(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),Vu(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function Uu(e,t,n){return Rr(e,{label:n,index:t,type:`pointLabel`})}var Wu=class extends yu{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:or.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=G(Ou(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=I(e)&&!isNaN(e)?e:0,this.max=I(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ou(this.options))}generateTickLabels(e){yu.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=R(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?ju(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=V/(this._pointLabels.length||1),n=this.options.startAngle||0;return Cn(e*t+U(n))}getDistanceFromCenterForValue(e){if(N(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(N(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return Uu(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-H+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),Vu(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&Bu(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);Hu(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=K(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=G(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}Dr(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}},Gu={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ku=Object.keys(Gu);function qu(e,t){return e-t}function Ju(e,t){if(N(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),I(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(hn(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function Yu(e,t,n,r){let i=Ku.length;for(let a=Ku.indexOf(e);a<i-1;++a){let e=Gu[Ku[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Ku[a]}return Ku[i-1]}function Xu(e,t,n,r,i){for(let a=Ku.length-1;a>=Ku.indexOf(n);a--){let n=Ku[a];if(Gu[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Ku[n?Ku.indexOf(n):0]}function Zu(e){for(let t=Ku.indexOf(e)+1,n=Ku.length;t<n;++t)if(Gu[Ku[t]].common)return Ku[t]}function Qu(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=On(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function $u(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function ed(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:$u(e,r,i,n)}var td=class extends ps{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Xa._date(e.adapters.date);r.init(t),Kt(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Ju(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=I(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=I(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=jn(r,i,a);return this._unit=t.unit||(n.autoSkip?Yu(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Xu(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Zu(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),ed(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=Tn(t,0,a),n=Tn(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||Yu(i.minUnit,t,n,this._getLabelCapacity(t)),o=L(r.ticks.stepSize,1),s=a===`week`?i.isoWeekday:!1,c=hn(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)Qu(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&Qu(l,d,p),Object.keys(l).sort(qu).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return R(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=U(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,ed(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(Ju(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Fn(e.sort(qu))}};function nd(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=kn(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=kn(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}var rd=class extends td{static id=`timeseries`;static defaults=td.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=nd(t,this.min),this._tableRange=nd(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(nd(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return nd(this._table,n*this._tableRange+this._minPos,!0)}},id=[Ja,Ic,du,Object.freeze({__proto__:null,CategoryScale:gu,LinearScale:bu,LogarithmicScale:Du,RadialLinearScale:Wu,TimeScale:td,TimeSeriesScale:rd})];tc.register(...id);var ad=tc,od={modes:{point(e,t){return ud(e,t,{intersect:!0})},nearest(e,t,n){return dd(e,t,n)},x(e,t,n){return ud(e,t,{intersect:n.intersect,axis:`x`})},y(e,t,n){return ud(e,t,{intersect:n.intersect,axis:`y`})}}};function sd(e,t,n){return(od.modes[n.mode]||od.modes.nearest)(e,t,n)}function cd(e,t,n){return n!==`x`&&n!==`y`?e.inRange(t.x,t.y,`x`,!0)||e.inRange(t.x,t.y,`y`,!0):e.inRange(t.x,t.y,n,!0)}function ld(e,t,n){return n===`x`?{x:e.x,y:t.y}:n===`y`?{x:t.x,y:e.y}:t}function ud(e,t,n){return e.filter(e=>n.intersect?e.inRange(t.x,t.y):cd(e,t,n.axis))}function dd(e,t,n){let r=1/0;return ud(e,t,n).reduce((e,i)=>{let a=xn(t,ld(t,i.getCenterPoint(),n.axis));return a<r?(e=[i],r=a):a===r&&e.push(i),e},[]).sort((e,t)=>e._index-t._index).slice(0,1)}function fd(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=t.x,o=t.y;return{x:a+r*(e.x-a)-i*(e.y-o),y:o+i*(e.x-a)+r*(e.y-o)}}var pd=(e,t)=>t>e||e.length>t.length&&e.slice(0,t.length)===t,md=.001,hd=(e,t,n)=>Math.min(n,Math.max(t,e)),gd=(e,t)=>e.value>=e.start-t&&e.value<=e.end+t;function _d(e,t,n){for(let r of Object.keys(e))e[r]=hd(e[r],t,n);return e}function vd(e,t,n,r){return!e||!t||n<=0?!1:(e.x-t.x)**2+(e.y-t.y)**2<=(n+r)**2}function yd(e,{x:t,y:n,x2:r,y2:i},a,{borderWidth:o,hitTolerance:s}){let c=(o+s)/2,l=e.x>=t-c-md&&e.x<=r+c+md,u=e.y>=n-c-md&&e.y<=i+c+md;return a===`x`?l:(a===`y`||l)&&u}function bd(e,{rect:t,center:n},r,{rotation:i,borderWidth:a,hitTolerance:o}){return yd(fd(e,n,U(-i)),t,r,{borderWidth:a,hitTolerance:o})}function xd(e,t){let{centerX:n,centerY:r}=e.getProps([`centerX`,`centerY`],t);return{x:n,y:r}}function Sd(e,t,n,r=!0){let i=n.split(`.`),a=0;for(let o of t.split(`.`)){let s=i[a++];if(parseInt(o,10)<parseInt(s,10))break;if(pd(s,o)){if(r)throw Error(`${e} v${n} is not supported. v${t} or newer is required.`);return!1}}return!0}var Cd=e=>typeof e==`string`&&e.endsWith(`%`),wd=e=>parseFloat(e)/100,Td=e=>hd(wd(e),0,1),Ed=(e,t)=>({x:e,y:t,x2:e,y2:t,width:0,height:0}),Dd={box:e=>Ed(e.centerX,e.centerY),doughnutLabel:e=>Ed(e.centerX,e.centerY),ellipse:e=>({centerX:e.centerX,centerY:e.centerX,radius:0,width:0,height:0}),label:e=>Ed(e.centerX,e.centerY),line:e=>Ed(e.x,e.y),point:e=>({centerX:e.centerX,centerY:e.centerY,radius:0,width:0,height:0}),polygon:e=>Ed(e.centerX,e.centerY)};function Od(e,t){return t===`start`?0:t===`end`?e:Cd(t)?Td(t)*e:e/2}function kd(e,t,n=!0){return typeof t==`number`?t:Cd(t)?(n?Td(t):wd(t))*e:e}function Ad(e,t){let{x:n,width:r}=e,i=t.textAlign;return i===`center`?n+r/2:i===`end`||i===`right`?n+r:n}function jd(e,t,{borderWidth:n,position:r,xAdjust:i,yAdjust:a},o){let s=F(o),c=t.width+(s?o.width:0)+n,l=t.height+(s?o.height:0)+n,u=Md(r),d=Id(e.x,c,i,u.x),f=Id(e.y,l,a,u.y);return{x:d,y:f,x2:d+c,y2:f+l,width:c,height:l,centerX:d+c/2,centerY:f+l/2}}function Md(e,t=`center`){return F(e)?{x:L(e.x,t),y:L(e.y,t)}:(e=L(e,t),{x:e,y:e})}var Nd=(e,t)=>e&&e.autoFit&&t<1;function Pd(e,t){let n=e.font,r=P(n)?n:[n];return Nd(e,t)?r.map(function(e){let n=K(e);return n.size=Math.floor(e.size*t),n.lineHeight=e.lineHeight,K(n)}):r.map(e=>K(e))}function Fd(e){return e&&($t(e.xValue)||$t(e.yValue))}function Id(e,t,n=0,r){return e-Od(t,r)+n}function Ld(e,t,n){let r=n.init;if(r)return r===!0?zd(t,n):Bd(e,t,n)}function Rd(e,t,n){let r=!1;return t.forEach(t=>{en(e[t])?(r=!0,n[t]=e[t]):$t(n[t])&&delete n[t]}),r}function zd(e,t){return Dd[t.type||`line`](e)}function Bd(e,t,n){let r=R(n.init,[{chart:e,properties:t,options:n}]);if(r===!0)return zd(t,n);if(F(r))return r}var Vd=new Map,Hd=e=>isNaN(e)||e<=0,Ud=e=>e.reduce(function(e,t){return e+=t.string,e},``);function Wd(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object HTMLImageElement]`||t===`[object HTMLCanvasElement]`}}function Gd(e,{x:t,y:n},r){r&&(e.translate(t,n),e.rotate(U(r)),e.translate(-t,-n))}function Kd(e,t){if(t&&t.borderWidth)return e.lineCap=t.borderCapStyle||`butt`,e.setLineDash(t.borderDash),e.lineDashOffset=t.borderDashOffset,e.lineJoin=t.borderJoinStyle||`miter`,e.lineWidth=t.borderWidth,e.strokeStyle=t.borderColor,!0}function qd(e,t){e.shadowColor=t.backgroundShadowColor,e.shadowBlur=t.shadowBlur,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY}function Jd(e,t){let n=t.content;if(Wd(n))return{width:kd(n.width,t.width),height:kd(n.height,t.height)};let r=Pd(t),i=t.textStrokeWidth,a=P(n)?n:[n],o=a.join()+Ud(r)+i+(e._measureText?`-spriting`:``);return Vd.has(o)||Vd.set(o,ef(e,a,r,i)),Vd.get(o)}function Yd(e,t,n){let{x:r,y:i,width:a,height:o}=t;e.save(),qd(e,n);let s=Kd(e,n);e.fillStyle=n.backgroundColor,e.beginPath(),Or(e,{x:r,y:i,w:a,h:o,radius:_d(Fr(n.borderRadius),0,Math.min(a,o)/2)}),e.closePath(),e.fill(),s&&(e.shadowColor=n.borderShadowColor,e.stroke()),e.restore()}function Xd(e,t,n,r){let i=n.content;if(Wd(i)){e.save(),e.globalAlpha=rf(n.opacity,i.style.opacity),e.drawImage(i,t.x,t.y,t.width,t.height),e.restore();return}let a=P(i)?i:[i],o=Pd(n,r),s=n.color,c=P(s)?s:[s],l=Ad(t,n),u=t.y+n.textStrokeWidth/2;e.save(),e.textBaseline=`middle`,e.textAlign=n.textAlign,Zd(e,n)&&tf(e,{x:l,y:u},a,o),nf(e,{x:l,y:u},a,{fonts:o,colors:c}),e.restore()}function Zd(e,t){if(t.textStrokeWidth>0)return e.lineJoin=`round`,e.miterLimit=2,e.lineWidth=t.textStrokeWidth,e.strokeStyle=t.textStrokeColor,!0}function Qd(e,t,n,r){let{radius:i,options:a}=t,o=a.pointStyle,s=a.rotation,c=(s||0)*on;if(Wd(o)){e.save(),e.translate(n,r),e.rotate(c),e.drawImage(o,-o.width/2,-o.height/2,o.width,o.height),e.restore();return}Hd(i)||$d(e,{x:n,y:r,radius:i,rotation:s,style:o,rad:c})}function $d(e,{x:t,y:n,radius:r,rotation:i,style:a,rad:o}){let s,c,l,u;switch(e.beginPath(),a){default:e.arc(t,n,r,0,V),e.closePath();break;case`triangle`:e.moveTo(t+Math.sin(o)*r,n-Math.cos(o)*r),o+=cn,e.lineTo(t+Math.sin(o)*r,n-Math.cos(o)*r),o+=cn,e.lineTo(t+Math.sin(o)*r,n-Math.cos(o)*r),e.closePath();break;case`rectRounded`:u=r*.516,l=r-u,s=Math.cos(o+sn)*l,c=Math.sin(o+sn)*l,e.arc(t-s,n-c,u,o-B,o-H),e.arc(t+c,n-s,u,o-H,o),e.arc(t+s,n+c,u,o,o+H),e.arc(t-c,n+s,u,o+H,o+B),e.closePath();break;case`rect`:if(!i){l=Math.SQRT1_2*r,e.rect(t-l,n-l,2*l,2*l);break}o+=sn;case`rectRot`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+c,n-s),e.lineTo(t+s,n+c),e.lineTo(t-c,n+s),e.closePath();break;case`crossRot`:o+=sn;case`cross`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s);break;case`star`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s),o+=sn,s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s);break;case`line`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c);break;case`dash`:e.moveTo(t,n),e.lineTo(t+Math.cos(o)*r,n+Math.sin(o)*r);break}e.fill()}function ef(e,t,n,r){e.save();let i=t.length,a=0,o=r;for(let s=0;s<i;s++){let i=n[Math.min(s,n.length-1)];e.font=i.string;let c=t[s];a=Math.max(a,e.measureText(c).width+r),o+=i.lineHeight}return e.restore(),{width:a,height:o}}function tf(e,{x:t,y:n},r,i){e.beginPath();let a=0;r.forEach(function(r,o){let s=i[Math.min(o,i.length-1)],c=s.lineHeight;e.font=s.string,e.strokeText(r,t,n+c/2+a),a+=c}),e.stroke()}function nf(e,{x:t,y:n},r,{fonts:i,colors:a}){let o=0;r.forEach(function(r,s){let c=a[Math.min(s,a.length-1)],l=i[Math.min(s,i.length-1)],u=l.lineHeight;e.beginPath(),e.font=l.string,e.fillStyle=c,e.fillText(r,t,n+u/2+o),o+=u,e.fill()})}function rf(e,t){let n=hn(e)?e:t;return hn(n)?hd(n,0,1):1}var af=[`left`,`bottom`,`top`,`right`];function of(e,t){let{pointX:n,pointY:r,options:i}=t,a=i.callout,o=a&&a.display&&df(t,a);if(!o||pf(t,a,o))return;if(e.save(),e.beginPath(),!Kd(e,a))return e.restore();let{separatorStart:s,separatorEnd:c}=sf(t,o),{sideStart:l,sideEnd:u}=lf(t,o,s);(a.margin>0||i.borderWidth===0)&&(e.moveTo(s.x,s.y),e.lineTo(c.x,c.y)),e.moveTo(l.x,l.y),e.lineTo(u.x,u.y);let d=fd({x:n,y:r},t.getCenterPoint(),U(-t.rotation));e.lineTo(d.x,d.y),e.stroke(),e.restore()}function sf(e,t){let{x:n,y:r,x2:i,y2:a}=e,o=cf(e,t),s,c;return t===`left`||t===`right`?(s={x:n+o,y:r},c={x:s.x,y:a}):(s={x:n,y:r+o},c={x:i,y:s.y}),{separatorStart:s,separatorEnd:c}}function cf(e,t){let{width:n,height:r,options:i}=e,a=i.callout.margin+i.borderWidth/2;return t===`right`?n+a:t===`bottom`?r+a:-a}function lf(e,t,n){let{y:r,width:i,height:a,options:o}=e,s=o.callout.start,c=uf(t,o.callout),l,u;return t===`left`||t===`right`?(l={x:n.x,y:r+kd(a,s)},u={x:l.x+c,y:l.y}):(l={x:n.x+kd(i,s),y:n.y},u={x:l.x,y:l.y+c}),{sideStart:l,sideEnd:u}}function uf(e,t){let n=t.side;return e===`left`||e===`top`?-n:n}function df(e,t){let n=t.position;return af.includes(n)?n:ff(e,t)}function ff(e,t){let{x:n,y:r,x2:i,y2:a,width:o,height:s,pointX:c,pointY:l,centerX:u,centerY:d,rotation:f}=e,p={x:u,y:d},m=t.start,h=kd(o,m),g=kd(s,m),_=[n,n+h,n+h,i],v=[r+g,a,r,a],y=[];for(let e=0;e<4;e++){let t=fd({x:_[e],y:v[e]},p,U(f));y.push({position:af[e],distance:xn(t,{x:c,y:l})})}return y.sort((e,t)=>e.distance-t.distance)[0].position}function pf(e,t,n){let{pointX:r,pointY:i}=e,a=t.margin,o=r,s=i;return n===`left`?o+=a:n===`right`?o-=a:n===`top`?s+=a:n===`bottom`&&(s-=a),e.inRange(o,s)}var mf={xScaleID:{min:`xMin`,max:`xMax`,start:`left`,end:`right`,startProp:`x`,endProp:`x2`},yScaleID:{min:`yMin`,max:`yMax`,start:`bottom`,end:`top`,startProp:`y`,endProp:`y2`}};function hf(e,t,n){return t=typeof t==`number`?t:e.parse(t),I(t)?e.getPixelForValue(t):n}function gf(e,t,n){let r=t[n];if(r||n===`scaleID`)return r;let i=n.charAt(0),a=Object.values(e).filter(e=>e.axis&&e.axis===i);return a.length?a[0].id:i}function _f(e,t){if(e){let n=e.options.reverse;return{start:hf(e,t.min,n?t.end:t.start),end:hf(e,t.max,n?t.start:t.end)}}}function vf(e,t){let{chartArea:n,scales:r}=e,i=r[gf(r,t,`xScaleID`)],a=r[gf(r,t,`yScaleID`)],o=n.width/2,s=n.height/2;return i&&(o=hf(i,t.xValue,i.left+i.width/2)),a&&(s=hf(a,t.yValue,a.top+a.height/2)),{x:o,y:s}}function yf(e,t){let n=e.scales,r=n[gf(n,t,`xScaleID`)],i=n[gf(n,t,`yScaleID`)];if(!r&&!i)return{};let{left:a,right:o}=r||e.chartArea,{top:s,bottom:c}=i||e.chartArea,l=wf(r,{min:t.xMin,max:t.xMax,start:a,end:o});a=l.start,o=l.end;let u=wf(i,{min:t.yMin,max:t.yMax,start:c,end:s});return s=u.start,c=u.end,{x:a,y:s,x2:o,y2:c,width:o-a,height:c-s,centerX:a+(o-a)/2,centerY:s+(c-s)/2}}function bf(e,t){if(!Fd(t)){let n=yf(e,t),r=t.radius;(!r||isNaN(r))&&(r=Math.min(n.width,n.height)/2,t.radius=r);let i=r*2,a=n.centerX+t.xAdjust,o=n.centerY+t.yAdjust;return{x:a-r,y:o-r,x2:a+r,y2:o+r,centerX:a,centerY:o,width:i,height:i,radius:r}}return Cf(e,t)}function xf(e,t){let{scales:n,chartArea:r}=e,i=n[t.scaleID],a={x:r.left,y:r.top,x2:r.right,y2:r.bottom};return i?Tf(i,a,t):Ef(n,a,t),a}function Sf(e,t){let n=yf(e,t);return n.initProperties=Ld(e,n,t),n.elements=[{type:`label`,optionScope:`label`,properties:Af(e,n,t),initProperties:n.initProperties}],n}function Cf(e,t){let n=vf(e,t),r=t.radius*2;return{x:n.x-t.radius+t.xAdjust,y:n.y-t.radius+t.yAdjust,x2:n.x+t.radius+t.xAdjust,y2:n.y+t.radius+t.yAdjust,centerX:n.x+t.xAdjust,centerY:n.y+t.yAdjust,radius:t.radius,width:r,height:r}}function wf(e,t){let n=_f(e,t)||t;return{start:Math.min(n.start,n.end),end:Math.max(n.start,n.end)}}function Tf(e,t,n){let r=hf(e,n.value,NaN),i=hf(e,n.endValue,r);e.isHorizontal()?(t.x=r,t.x2=i):(t.y=r,t.y2=i)}function Ef(e,t,n){for(let r of Object.keys(mf)){let i=e[gf(e,n,r)];if(i){let{min:e,max:a,start:o,end:s,startProp:c,endProp:l}=mf[r],u=_f(i,{min:n[e],max:n[a],start:i[o],end:i[s]});t[c]=u.start,t[l]=u.end}}}function Df({properties:e,options:t},n,r,i){let{x:a,x2:o,width:s}=e;return kf({start:a,end:o,size:s,borderWidth:t.borderWidth},{position:r.x,padding:{start:i.left,end:i.right},adjust:t.label.xAdjust,size:n.width})}function Of({properties:e,options:t},n,r,i){let{y:a,y2:o,height:s}=e;return kf({start:a,end:o,size:s,borderWidth:t.borderWidth},{position:r.y,padding:{start:i.top,end:i.bottom},adjust:t.label.yAdjust,size:n.height})}function kf(e,t){let{start:n,end:r,borderWidth:i}=e,{position:a,padding:{start:o,end:s},adjust:c}=t,l=r-i-n-o-s-t.size;return n+i/2+c+Od(l,a)}function Af(e,t,n){let r=n.label;r.backgroundColor=`transparent`,r.callout.display=!1;let i=Md(r.position),a=G(r.padding),o=Jd(e.ctx,r),s=Df({properties:t,options:n},o,i,a),c=Of({properties:t,options:n},o,i,a),l=o.width+a.width,u=o.height+a.height;return{x:s,y:c,x2:s+l,y2:c+u,width:l,height:u,centerX:s+l/2,centerY:c+u/2,rotation:r.rotation}}var jf=[`enter`,`leave`],Mf=jf.concat(`click`);function Nf(e,t,n){t.listened=Rd(n,Mf,t.listeners),t.moveListened=!1,jf.forEach(e=>{en(n[e])&&(t.moveListened=!0)}),(!t.listened||!t.moveListened)&&t.annotations.forEach(e=>{!t.listened&&en(e.click)&&(t.listened=!0),t.moveListened||jf.forEach(n=>{en(e[n])&&(t.listened=!0,t.moveListened=!0)})})}function Pf(e,t,n){if(e.listened)switch(t.type){case`mousemove`:case`mouseout`:return Ff(e,t,n);case`click`:return Lf(e,t,n)}}function Ff(e,t,n){if(!e.moveListened)return;let r;r=t.type===`mousemove`?sd(e.visibleElements,t,n.interaction):[];let i=e.hovered;e.hovered=r;let a={state:e,event:t},o=If(a,`leave`,i,r);return If(a,`enter`,r,i)||o}function If({state:e,event:t},n,r,i){let a;for(let o of r)i.indexOf(o)<0&&(a=Rf(o.options[n]||e.listeners[n],o,t)||a);return a}function Lf(e,t,n){let r=e.listeners,i=sd(e.visibleElements,t,n.interaction),a;for(let e of i)a=Rf(e.options.click||r.click,e,t)||a;return a}function Rf(e,t,n){return R(e,[t.$context,n])===!0}var zf=[`afterDraw`,`beforeDraw`];function Bf(e,t,n){let r=t.visibleElements;t.hooked=Rd(n,zf,t.hooks),t.hooked||r.forEach(e=>{t.hooked||zf.forEach(n=>{en(e.options[n])&&(t.hooked=!0)})})}function Vf(e,t,n){if(e.hooked)return R(t.options[n]||e.hooks[n],[t.$context])}function Hf(e,t,n){let r=Jf(e.scales,t,n),i=Wf(t,r,`min`,`suggestedMin`);i=Wf(t,r,`max`,`suggestedMax`)||i,i&&en(t.handleTickRangeOptions)&&t.handleTickRangeOptions()}function Uf(e,t){for(let n of e)Kf(n,t)}function Wf(e,t,n,r){if(I(t[n])&&!Gf(e.options,n,r)){let r=e[n]!==t[n];return e[n]=t[n],r}}function Gf(e,t,n){return $t(e[t])||$t(e[n])}function Kf(e,t){for(let n of[`scaleID`,`xScaleID`,`yScaleID`]){let r=gf(t,e,n);r&&!t[r]&&qf(e,n)&&console.warn(`No scale found with id '${r}' for annotation '${e.id}'`)}}function qf(e,t){if(t===`scaleID`)return!0;let n=t.charAt(0);for(let t of[`Min`,`Max`,`Value`])if($t(e[n+t]))return!0;return!1}function Jf(e,t,n){let r=t.axis,i=t.id,a=r+`ScaleID`,o={min:L(t.min,-1/0),max:L(t.max,1/0)};for(let s of n)s.scaleID===i?Yf(s,t,[`value`,`endValue`],o):gf(e,s,a)===i&&Yf(s,t,[r+`Min`,r+`Max`,r+`Value`],o);return o}function Yf(e,t,n,r){for(let i of n){let n=e[i];if($t(n)){let e=t.parse(n);r.min=Math.min(r.min,e),r.max=Math.max(r.max,e)}}}var Xf=class extends qo{inRange(e,t,n,r){let{x:i,y:a}=fd({x:e,y:t},this.getCenterPoint(r),U(-this.options.rotation));return yd({x:i,y:a},this.getProps([`x`,`y`,`x2`,`y2`],r),n,this.options)}getCenterPoint(e){return xd(this,e)}draw(e){e.save(),Gd(e,this.getCenterPoint(),this.options.rotation),Yd(e,this,this.options),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){return Sf(e,t)}};Xf.id=`boxAnnotation`,Xf.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,init:void 0,hitTolerance:0,label:{backgroundColor:`transparent`,borderWidth:0,callout:{display:!1},color:`black`,content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:`bold`},height:void 0,hitTolerance:void 0,opacity:void 0,padding:6,position:`center`,rotation:void 0,textAlign:`start`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},Xf.defaultRoutes={borderColor:`color`,backgroundColor:`color`},Xf.descriptors={label:{_fallback:!0}};var Zf=class extends qo{inRange(e,t,n,r){return bd({x:e,y:t},{rect:this.getProps([`x`,`y`,`x2`,`y2`],r),center:this.getCenterPoint(r)},n,{rotation:this.rotation,borderWidth:0,hitTolerance:this.options.hitTolerance})}getCenterPoint(e){return xd(this,e)}draw(e){let t=this.options;!t.display||!t.content||(rp(e,this),e.save(),Gd(e,this.getCenterPoint(),this.rotation),Xd(e,this,t,this._fitRatio),e.restore())}resolveElementProperties(e,t){let n=Qf(e,t);if(!n)return{};let{controllerMeta:r,point:i,radius:a}=ep(e,t,n),o=Jd(e.ctx,t),s=tp(o,a);Nd(t,s)&&(o={width:o.width*s,height:o.height*s});let{position:c,xAdjust:l,yAdjust:u}=t,d=jd(i,o,{borderWidth:0,position:c,xAdjust:l,yAdjust:u});return{initProperties:Ld(e,d,t),...d,...r,rotation:t.rotation,_fitRatio:s}}};Zf.id=`doughnutLabelAnnotation`,Zf.defaults={autoFit:!0,autoHide:!0,backgroundColor:`transparent`,backgroundShadowColor:`transparent`,borderColor:`transparent`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderShadowColor:`transparent`,borderWidth:0,color:`black`,content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,hitTolerance:0,init:void 0,opacity:void 0,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,spacing:1,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0},Zf.defaultRoutes={};function Qf(e,t){return e.getSortedVisibleDatasetMetas().reduce(function(n,r){let i=r.controller;return i instanceof Ga&&$f(e,t,r.data)&&(!n||i.innerRadius<n.controller.innerRadius)&&i.options.circumference>=90?r:n},void 0)}function $f(e,t,n){if(!t.autoHide)return!0;for(let t=0;t<n.length;t++)if(!n[t].hidden&&e.getDataVisibility(t))return!0}function ep({chartArea:e},t,n){let{left:r,top:i,right:a,bottom:o}=e,{innerRadius:s,offsetX:c,offsetY:l}=n.controller,u=(r+a)/2+c,d=(i+o)/2+l,f={left:Math.max(u-s,r),right:Math.min(u+s,a),top:Math.max(d-s,i),bottom:Math.min(d+s,o)},p={x:(f.left+f.right)/2,y:(f.top+f.bottom)/2},m=t.spacing+t.borderWidth/2,h=s-m,g=p.y>d;return{controllerMeta:{_centerX:u,_centerY:d,_radius:h,_counterclockwise:g,...np(g?i+m:o-m,u,d,h)},point:p,radius:Math.min(s,Math.min(f.right-f.left,f.bottom-f.top)/2)}}function tp({width:e,height:t},n){let r=Math.sqrt(e**2+t**2);return n*2/r}function np(e,t,n,r){let i=(n-e)**2,a=r**2,o=t*-2,s=t**2+i-a,c=o**2-4*s;if(c<=0)return{_startAngle:0,_endAngle:V};let l=(-o-Math.sqrt(c))/2,u=(-o+Math.sqrt(c))/2;return{_startAngle:bn({x:t,y:n},{x:l,y:e}).angle,_endAngle:bn({x:t,y:n},{x:u,y:e}).angle}}function rp(e,t){let{_centerX:n,_centerY:r,_radius:i,_startAngle:a,_endAngle:o,_counterclockwise:s,options:c}=t;e.save();let l=Kd(e,c);e.fillStyle=c.backgroundColor,e.beginPath(),e.arc(n,r,i,a,o,s),e.closePath(),e.fill(),l&&e.stroke(),e.restore()}var ip=class extends qo{inRange(e,t,n,r){return bd({x:e,y:t},{rect:this.getProps([`x`,`y`,`x2`,`y2`],r),center:this.getCenterPoint(r)},n,{rotation:this.rotation,borderWidth:this.options.borderWidth,hitTolerance:this.options.hitTolerance})}getCenterPoint(e){return xd(this,e)}draw(e){let t=this.options,n=!$t(this._visible)||this._visible;!t.display||!t.content||!n||(e.save(),Gd(e,this.getCenterPoint(),this.rotation),of(e,this),Yd(e,this,t),Xd(e,ap(this),t),e.restore())}resolveElementProperties(e,t){let n;if(Fd(t))n=vf(e,t);else{let{centerX:r,centerY:i}=yf(e,t);n={x:r,y:i}}let r=G(t.padding),i=Jd(e.ctx,t),a=jd(n,i,t,r);return{initProperties:Ld(e,a,t),pointX:n.x,pointY:n.y,...a,rotation:t.rotation}}};ip.id=`labelAnnotation`,ip.defaults={adjustScaleRange:!0,backgroundColor:`transparent`,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:0,borderShadowColor:`transparent`,borderWidth:0,callout:{borderCapStyle:`butt`,borderColor:void 0,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:1,display:!1,margin:5,position:`auto`,side:5,start:`50%`},color:`black`,content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,hitTolerance:0,init:void 0,opacity:void 0,padding:6,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},ip.defaultRoutes={borderColor:`color`};function ap({x:e,y:t,width:n,height:r,options:i}){let a=i.borderWidth/2,o=G(i.padding);return{x:e+o.left+a,y:t+o.top+a,width:n-o.left-o.right-i.borderWidth,height:r-o.top-o.bottom-i.borderWidth}}var op=(e,t,n)=>({x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}),sp=(e,t,n)=>op(t,n,Math.abs((e-t.y)/(n.y-t.y))).x,cp=(e,t,n)=>op(t,n,Math.abs((e-t.x)/(n.x-t.x))).y,lp=e=>e*e,up=(e,t,{x:n,y:r,x2:i,y2:a},o)=>o===`y`?{start:Math.min(r,a),end:Math.max(r,a),value:t}:{start:Math.min(n,i),end:Math.max(n,i),value:e},dp=(e,t,n,r)=>(1-r)*(1-r)*e+2*(1-r)*r*t+r*r*n,fp=(e,t,n,r)=>({x:dp(e.x,t.x,n.x,r),y:dp(e.y,t.y,n.y,r)}),pp=(e,t,n,r)=>2*(1-r)*(t-e)+2*r*(n-t),mp=(e,t,n,r)=>-Math.atan2(pp(e.x,t.x,n.x,r),pp(e.y,t.y,n.y,r))+.5*B,hp=class extends qo{inRange(e,t,n,r){let i=(this.options.borderWidth+this.options.hitTolerance)/2;if(n!==`x`&&n!==`y`){let n={mouseX:e,mouseY:t},{path:a,ctx:o}=this;if(a){Kd(o,this.options),o.lineWidth+=this.options.hitTolerance;let{chart:i}=this.$context,s=e*i.currentDevicePixelRatio,c=t*i.currentDevicePixelRatio,l=o.isPointInStroke(a,s,c)||Sp(this,n,r);return o.restore(),l}let s=lp(i);return xp(this,n,s,r)||Sp(this,n,r)}return _p(this,{mouseX:e,mouseY:t},n,{hitSize:i,useFinalPosition:r})}getCenterPoint(e){return xd(this,e)}draw(e){let{x:t,y:n,x2:r,y2:i,cp:a,options:o}=this;if(e.save(),!Kd(e,o))return e.restore();qd(e,o);let s=Math.sqrt((r-t)**2+(i-n)**2);if(o.curve&&a)return Ip(e,this,a,s),e.restore();let{startOpts:c,endOpts:l,startAdjust:u,endAdjust:d}=jp(this),f=Math.atan2(i-n,r-t);e.translate(t,n),e.rotate(f),e.beginPath(),e.moveTo(0+u,0),e.lineTo(s-d,0),e.shadowColor=o.borderShadowColor,e.stroke(),Np(e,0,u,c),Np(e,s,-d,l),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){let n=xf(e,t),{x:r,y:i,x2:a,y2:o}=n,s=vp(n,e.chartArea),c=s?bp({x:r,y:i},{x:a,y:o},e.chartArea):{x:r,y:i,x2:a,y2:o,width:Math.abs(a-r),height:Math.abs(o-i)};c.centerX=(a+r)/2,c.centerY=(o+i)/2,c.initProperties=Ld(e,c,t),t.curve&&(c.cp=Pp(c,t,xn({x:c.x,y:c.y},{x:c.x2,y:c.y2})));let l=Cp(e,c,t.label);return l._visible=s,c.elements=[{type:`label`,optionScope:`label`,properties:l,initProperties:c.initProperties}],c}};hp.id=`lineAnnotation`;var gp={backgroundColor:void 0,backgroundShadowColor:void 0,borderColor:void 0,borderDash:void 0,borderDashOffset:void 0,borderShadowColor:void 0,borderWidth:void 0,display:void 0,fill:void 0,length:void 0,shadowBlur:void 0,shadowOffsetX:void 0,shadowOffsetY:void 0,width:void 0};hp.defaults={adjustScaleRange:!0,arrowHeads:{display:!1,end:Object.assign({},gp),fill:!1,length:12,start:Object.assign({},gp),width:6},borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:2,curve:!1,controlPoint:{y:`-50%`},display:!0,endValue:void 0,init:void 0,hitTolerance:0,label:{backgroundColor:`rgba(0,0,0,0.8)`,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderColor:`black`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:6,borderShadowColor:`transparent`,borderWidth:0,callout:Object.assign({},ip.defaults.callout),color:`#fff`,content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:`bold`},height:void 0,hitTolerance:void 0,opacity:void 0,padding:6,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},scaleID:void 0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,value:void 0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},hp.descriptors={arrowHeads:{start:{_fallback:!0},end:{_fallback:!0},_fallback:!0}},hp.defaultRoutes={borderColor:`color`};function _p(e,{mouseX:t,mouseY:n},r,{hitSize:i,useFinalPosition:a}){return gd(up(t,n,e.getProps([`x`,`y`,`x2`,`y2`],a),r),i)||Sp(e,{mouseX:t,mouseY:n},a,r)}function vp({x:e,y:t,x2:n,y2:r},{top:i,right:a,bottom:o,left:s}){return!(e<s&&n<s||e>a&&n>a||t<i&&r<i||t>o&&r>o)}function yp({x:e,y:t},n,{top:r,right:i,bottom:a,left:o}){return e<o&&(t=cp(o,{x:e,y:t},n),e=o),e>i&&(t=cp(i,{x:e,y:t},n),e=i),t<r&&(e=sp(r,{x:e,y:t},n),t=r),t>a&&(e=sp(a,{x:e,y:t},n),t=a),{x:e,y:t}}function bp(e,t,n){let{x:r,y:i}=yp(e,t,n),{x:a,y:o}=yp(t,e,n);return{x:r,y:i,x2:a,y2:o,width:Math.abs(a-r),height:Math.abs(o-i)}}function xp(e,{mouseX:t,mouseY:n},r=md,i){let{x:a,y:o,x2:s,y2:c}=e.getProps([`x`,`y`,`x2`,`y2`],i),l=s-a,u=c-o,d=lp(l)+lp(u),f=d===0?-1:((t-a)*l+(n-o)*u)/d,p,m;return f<0?(p=a,m=o):f>1?(p=s,m=c):(p=a+f*l,m=o+f*u),lp(t-p)+lp(n-m)<=r}function Sp(e,{mouseX:t,mouseY:n},r,i){let a=e.label;return a.options.display&&a.inRange(t,n,i,r)}function Cp(e,t,n){let r=n.borderWidth,i=G(n.padding),a=Jd(e.ctx,n);return Tp(t,n,{width:a.width+i.width+r,height:a.height+i.height+r,padding:i},e.chartArea)}function wp(e){let{x:t,y:n,x2:r,y2:i}=e,a=Math.atan2(i-n,r-t);return a>B/2?a-B:a<B/-2?a+B:a}function Tp(e,t,n,r){let{width:i,height:a,padding:o}=n,{xAdjust:s,yAdjust:c}=t,l={x:e.x,y:e.y},u={x:e.x2,y:e.y2},d=t.rotation===`auto`?wp(e):U(t.rotation),f=Ep(i,a,d),p=Dp(e,t,{labelSize:f,padding:o},r),m=e.cp?fp(l,e.cp,u,p):op(l,u,p),h={size:f.w,min:r.left,max:r.right,padding:o.left},g={size:f.h,min:r.top,max:r.bottom,padding:o.top},_=Ap(m.x,h)+s,v=Ap(m.y,g)+c;return{x:_-i/2,y:v-a/2,x2:_+i/2,y2:v+a/2,centerX:_,centerY:v,pointX:m.x,pointY:m.y,width:i,height:a,rotation:vn(d)}}function Ep(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{w:Math.abs(e*r)+Math.abs(t*i),h:Math.abs(e*i)+Math.abs(t*r)}}function Dp(e,t,n,r){let i,a=kp(e,r);return i=t.position===`start`?Op({w:e.x2-e.x,h:e.y2-e.y},n,t,a):t.position===`end`?1-Op({w:e.x-e.x2,h:e.y-e.y2},n,t,a):Od(1,t.position),i}function Op(e,t,n,r){let{labelSize:i,padding:a}=t,o=e.w*r.dx,s=e.h*r.dy,c=o>0&&(i.w/2+a.left-r.x)/o,l=s>0&&(i.h/2+a.top-r.y)/s;return hd(Math.max(c,l),0,.25)}function kp(e,t){let{x:n,x2:r,y:i,y2:a}=e,o=Math.min(i,a)-t.top,s=Math.min(n,r)-t.left,c=t.bottom-Math.max(i,a),l=t.right-Math.max(n,r);return{x:Math.min(s,l),y:Math.min(o,c),dx:s<=l?1:-1,dy:o<=c?1:-1}}function Ap(e,t){let{size:n,min:r,max:i,padding:a}=t,o=n/2;return n>i-r?(i+r)/2:(r>=e-a-o&&(e=r+a+o),i<=e+a+o&&(e=i-a-o),e)}function jp(e){let t=e.options,n=t.arrowHeads&&t.arrowHeads.start,r=t.arrowHeads&&t.arrowHeads.end;return{startOpts:n,endOpts:r,startAdjust:Mp(e,n),endAdjust:Mp(e,r)}}function Mp(e,t){if(!t||!t.display)return 0;let{length:n,width:r}=t,i=e.options.borderWidth/2,a={x:n,y:r+i};return Math.abs(sp(0,a,{x:0,y:i}))}function Np(e,t,n,r){if(!r||!r.display)return;let{length:i,width:a,fill:o,backgroundColor:s,borderColor:c}=r,l=Math.abs(t-i)+n;e.beginPath(),qd(e,r),Kd(e,r),e.moveTo(l,-a),e.lineTo(t+n,0),e.lineTo(l,a),o===!0?(e.fillStyle=s||c,e.closePath(),e.fill(),e.shadowColor=`transparent`):e.shadowColor=r.borderShadowColor,e.stroke()}function Pp(e,t,n){let{x:r,y:i,x2:a,y2:o,centerX:s,centerY:c}=e,l=Math.atan2(o-i,a-r),u=Md(t.controlPoint,0);return fd({x:s+kd(n,u.x,!1),y:c+kd(n,u.y,!1)},{x:s,y:c},l)}function Fp(e,{x:t,y:n},{angle:r,adjust:i},a){!a||!a.display||(e.save(),e.translate(t,n),e.rotate(r),Np(e,0,-i,a),e.restore())}function Ip(e,t,n,r){let{x:i,y:a,x2:o,y2:s,options:c}=t,{startOpts:l,endOpts:u,startAdjust:d,endAdjust:f}=jp(t),p={x:i,y:a},m={x:o,y:s},h=mp(p,n,m,0),g=mp(p,n,m,1)-B,_=fp(p,n,m,d/r),v=fp(p,n,m,1-f/r),y=new Path2D;e.beginPath(),y.moveTo(_.x,_.y),y.quadraticCurveTo(n.x,n.y,v.x,v.y),e.shadowColor=c.borderShadowColor,e.stroke(y),t.path=y,t.ctx=e,Fp(e,_,{angle:h,adjust:d},l),Fp(e,v,{angle:g,adjust:f},u)}var Lp=class extends qo{inRange(e,t,n,r){let i=this.options.rotation,a=(this.options.borderWidth+this.options.hitTolerance)/2;if(n!==`x`&&n!==`y`)return Rp({x:e,y:t},this.getProps([`width`,`height`,`centerX`,`centerY`],r),i,a);let{x:o,y:s,x2:c,y2:l}=this.getProps([`x`,`y`,`x2`,`y2`],r),u=n===`y`?{start:s,end:l}:{start:o,end:c},d=fd({x:e,y:t},this.getCenterPoint(r),U(-i));return d[n]>=u.start-a-md&&d[n]<=u.end+a+md}getCenterPoint(e){return xd(this,e)}draw(e){let{width:t,height:n,centerX:r,centerY:i,options:a}=this;e.save(),Gd(e,this.getCenterPoint(),a.rotation),qd(e,this.options),e.beginPath(),e.fillStyle=a.backgroundColor;let o=Kd(e,a);e.ellipse(r,i,n/2,t/2,B/2,0,2*B),e.fill(),o&&(e.shadowColor=a.borderShadowColor,e.stroke()),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){return Sf(e,t)}};Lp.id=`ellipseAnnotation`,Lp.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,label:Object.assign({},Xf.defaults.label),rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},Lp.defaultRoutes={borderColor:`color`,backgroundColor:`color`},Lp.descriptors={label:{_fallback:!0}};function Rp(e,t,n,r){let{width:i,height:a,centerX:o,centerY:s}=t,c=i/2,l=a/2;if(c<=0||l<=0)return!1;let u=U(n||0),d=Math.cos(u),f=Math.sin(u),p=(d*(e.x-o)+f*(e.y-s))**2,m=(f*(e.x-o)-d*(e.y-s))**2;return p/(c+r)**2+m/(l+r)**2<=1.0001}var zp=class extends qo{inRange(e,t,n,r){let{x:i,y:a,x2:o,y2:s,width:c}=this.getProps([`x`,`y`,`x2`,`y2`,`width`],r),l=(this.options.borderWidth+this.options.hitTolerance)/2;return n!==`x`&&n!==`y`?vd({x:e,y:t},this.getCenterPoint(r),c/2,l):gd(n===`y`?{start:a,end:s,value:t}:{start:i,end:o,value:e},l)}getCenterPoint(e){return xd(this,e)}draw(e){let t=this.options,n=t.borderWidth;if(t.radius<.1)return;e.save(),e.fillStyle=t.backgroundColor,qd(e,t);let r=Kd(e,t);Qd(e,this,this.centerX,this.centerY),r&&!Wd(t.pointStyle)&&(e.shadowColor=t.borderShadowColor,e.stroke()),e.restore(),t.borderWidth=n}resolveElementProperties(e,t){let n=bf(e,t);return n.initProperties=Ld(e,n,t),n}};zp.id=`pointAnnotation`,zp.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,pointStyle:`circle`,radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},zp.defaultRoutes={borderColor:`color`,backgroundColor:`color`};var Bp=class extends qo{inRange(e,t,n,r){if(n!==`x`&&n!==`y`)return this.options.radius>=.1&&this.elements.length>1&&Hp(this.elements,e,t,r);let i=fd({x:e,y:t},this.getCenterPoint(r),U(-this.options.rotation)),a=this.elements.map(e=>n===`y`?e.bY:e.bX),o=Math.min(...a),s=Math.max(...a);return i[n]>=o&&i[n]<=s}getCenterPoint(e){return xd(this,e)}draw(e){let{elements:t,options:n}=this;e.save(),e.beginPath(),e.fillStyle=n.backgroundColor,qd(e,n);let r=Kd(e,n),i=!0;for(let n of t)i?(e.moveTo(n.x,n.y),i=!1):e.lineTo(n.x,n.y);e.closePath(),e.fill(),r&&(e.shadowColor=n.borderShadowColor,e.stroke()),e.restore()}resolveElementProperties(e,t){let n=bf(e,t),{sides:r,rotation:i}=t,a=[],o=2*B/r,s=i*on;for(let i=0;i<r;i++,s+=o){let r=Vp(n,t,s);r.initProperties=Ld(e,n,t),a.push(r)}return n.elements=a,n}};Bp.id=`polygonAnnotation`,Bp.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,point:{radius:0},radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,sides:3,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},Bp.defaultRoutes={borderColor:`color`,backgroundColor:`color`};function Vp({centerX:e,centerY:t},{radius:n,borderWidth:r,hitTolerance:i},a){let o=(r+i)/2,s=Math.sin(a),c=Math.cos(a),l={x:e+s*n,y:t-c*n};return{type:`point`,optionScope:`point`,properties:{x:l.x,y:l.y,centerX:l.x,centerY:l.y,bX:e+s*(n+o),bY:t-c*(n+o)}}}function Hp(e,t,n,r){let i=!1,a=e[e.length-1].getProps([`bX`,`bY`],r);for(let o of e){let e=o.getProps([`bX`,`bY`],r);e.bY>n!=a.bY>n&&t<(a.bX-e.bX)*(n-e.bY)/(a.bY-e.bY)+e.bX&&(i=!i),a=e}return i}var Up={box:Xf,doughnutLabel:Zf,ellipse:Lp,label:ip,line:hp,point:zp,polygon:Bp};Object.keys(Up).forEach(e=>{W.describe(`elements.${Up[e].id}`,{_fallback:`plugins.annotation.common`})});var Wp={update:Object.assign},Gp=Mf.concat(zf),Kp=(e,t)=>F(t)?tm(e,t):e,qp=e=>e===`color`||e===`font`;function Jp(e=`line`){return Up[e]?e:(console.warn(`Unknown annotation type: '${e}', defaulting to 'line'`),`line`)}function Yp(e,t,n,r){let i=Zp(e,n.animations,r),a=t.annotations,o=rm(t.elements,a);for(let t=0;t<a.length;t++){let n=a[t],r=$p(o,t,n.type),s=n.setContext(nm(e,r,o,n)),c=r.resolveElementProperties(e,s);c.skip=Xp(c),`elements`in c&&(Qp(r,c.elements,s,i),delete c.elements),$t(r.x)||Object.assign(r,c),Object.assign(r,c.initProperties),c.options=em(s),i.update(r,c)}}function Xp(e){return isNaN(e.x)||isNaN(e.y)}function Zp(e,t,n){return n===`reset`||n===`none`||n===`resize`?Wp:new ia(e,t)}function Qp(e,t,n,r){let i=e.elements||=[];i.length=t.length;for(let e=0;e<t.length;e++){let a=t[e],o=a.properties,s=$p(i,e,a.type,a.initProperties);o.options=em(n[a.optionScope].override(a)),r.update(s,o)}}function $p(e,t,n,r){let i=Up[Jp(n)],a=e[t];return(!a||!(a instanceof i))&&(a=e[t]=new i,Object.assign(a,r)),a}function em(e){let t=Up[Jp(e.type)],n={};n.id=e.id,n.type=e.type,n.drawTime=e.drawTime,Object.assign(n,tm(e,t.defaults),tm(e,t.defaultRoutes));for(let t of Gp)n[t]=e[t];return n}function tm(e,t){let n={};for(let r of Object.keys(t)){let i=t[r],a=e[r];qp(r)&&P(a)?n[r]=a.map(e=>Kp(e,i)):n[r]=Kp(a,i)}return n}function nm(e,t,n,r){return t.$context||=Object.assign(Object.create(e.getContext()),{element:t,get elements(){return n.filter(e=>e&&e.options)},id:r.id,type:`annotation`})}function rm(e,t){let n=t.length,r=e.length;if(r<n){let t=n-r;e.splice(r,0,...Array(t))}else r>n&&e.splice(n,r-n);return e}var im=`3.1.0`,am=new Map,om=e=>e.type!==`doughnutLabel`,sm=Mf.concat(zf),cm={id:`annotation`,version:im,beforeRegister(){Sd(`chart.js`,`4.0`,tc.version)},afterRegister(){tc.register(Up)},afterUnregister(){tc.unregister(Up)},beforeInit(e){am.set(e,{annotations:[],elements:[],visibleElements:[],listeners:{},listened:!1,moveListened:!1,hooks:{},hooked:!1,hovered:[]})},beforeUpdate(e,t,n){let r=am.get(e),i=r.annotations=[],a=n.annotations;F(a)?Object.keys(a).forEach(e=>{let t=a[e];F(t)&&(t.id=e,i.push(t))}):P(a)&&i.push(...a),Uf(i.filter(om),e.scales)},afterDataLimits(e,t){let n=am.get(e);Hf(e,t.scale,n.annotations.filter(om).filter(e=>e.display&&e.adjustScaleRange))},afterUpdate(e,t,n){let r=am.get(e);Nf(e,r,n),Yp(e,r,n,t.mode),r.visibleElements=r.elements.filter(e=>!e.skip&&e.options.display),Bf(e,r,n)},beforeDatasetsDraw(e,t,n){lm(e,`beforeDatasetsDraw`,n.clip)},afterDatasetsDraw(e,t,n){lm(e,`afterDatasetsDraw`,n.clip)},beforeDatasetDraw(e,t,n){lm(e,t.index,n.clip)},beforeDraw(e,t,n){lm(e,`beforeDraw`,n.clip)},afterDraw(e,t,n){lm(e,`afterDraw`,n.clip)},beforeEvent(e,t,n){Pf(am.get(e),t.event,n)&&(t.changed=!0)},afterDestroy(e){am.delete(e)},getAnnotations(e){let t=am.get(e);return t?t.elements:[]},_getAnnotationElementsAtEventForMode(e,t,n){return sd(e,t,n)},defaults:{animations:{numbers:{properties:[`x`,`y`,`x2`,`y2`,`width`,`height`,`centerX`,`centerY`,`pointX`,`pointY`,`radius`],type:`number`},colors:{properties:[`backgroundColor`,`borderColor`],type:`color`}},clip:!0,interaction:{mode:void 0,axis:void 0,intersect:void 0},common:{drawTime:`afterDatasetsDraw`,init:!1,label:{}}},descriptors:{_indexable:!1,_scriptable:e=>!sm.includes(e)&&e!==`init`,annotations:{_allKeys:!1,_fallback:(e,t)=>`elements.${Up[Jp(t.type)].id}`},interaction:{_fallback:!0},common:{label:{_indexable:qp,_fallback:!0},_indexable:qp}},additionalOptionScopes:[``]};function lm(e,t,n){let{ctx:r,chartArea:i}=e,a=am.get(e);n&&br(r,i);let o=um(a.visibleElements,t).sort((e,t)=>e.element.options.z-t.element.options.z);for(let e of o)dm(r,i,a,e);n&&xr(r)}function um(e,t){let n=[];for(let r of e)if(r.options.drawTime===t&&n.push({element:r,main:!0}),r.elements&&r.elements.length)for(let e of r.elements)e.options.display&&e.options.drawTime===t&&n.push({element:e});return n}function dm(e,t,n,r){let i=r.element;r.main?(Vf(n,i,`beforeDraw`),i.draw(e,t),Vf(n,i,`afterDraw`)):i.draw(e,t)}ad.register(cm);var fm=class extends O{constructor(...e){super(...e),this.records=[],this.showInput=!1,this.showTable=!1,this.inputDate=``,this.inputTotal=``,this.inputDirect=``,this.inputIndirect=``,this.chart=null}static{this.styles=c`
    :host {
      display: block;
    }
    .chart-container {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .chart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .chart-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .add-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #1890ff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .add-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
    }
    .chart-canvas-container {
      position: relative;
      height: 250px;
      width: 100%;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
    }
    .input-form {
      background: #f8f6ff;
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    .input-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
    }
    .input-row {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }
    .input-group {
      flex: 1;
    }
    .input-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .input-field {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .input-field:focus {
      border-color: #1890ff;
    }
    .input-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
    .cancel-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
    }
    .save-btn {
      background: #1890ff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .legend {
      display: flex;
      gap: 16px;
      margin-top: 12px;
      justify-content: center;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #666;
    }
    .legend-color {
      width: 12px;
      height: 3px;
      border-radius: 2px;
    }
    .legend-color.total {
      background: #ff4d4f;
    }
    .legend-color.direct {
      background: #52c41a;
    }
    .legend-color.indirect {
      background: #1890ff;
    }
    .normal-range {
      font-size: 11px;
      color: #999;
      text-align: center;
      margin-top: 8px;
    }
    .table-toggle-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      margin-top: 12px;
      transition: all 0.2s;
    }
    .table-toggle-btn:hover {
      background: #e8e8e8;
    }
    .table-toggle-btn.active {
      background: #e6f7ff;
      color: #1890ff;
    }
    .data-table {
      margin-top: 16px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #f0f0f0;
    }
    .data-table table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .data-table th {
      background: #fafafa;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    .data-table td {
      padding: 12px 16px;
      color: #666;
      border-bottom: 1px solid #f0f0f0;
    }
    .data-table tr:last-child td {
      border-bottom: none;
    }
    .data-table tr:hover td {
      background: #fafafa;
    }
    .no-data {
      text-align: center;
      padding: 20px;
      color: #999;
      font-size: 14px;
    }
    .estimate-card {
      margin-top: 16px;
      padding: 16px;
      border-radius: 12px;
      background: linear-gradient(135deg, #f6ffed 0%, #e6fff1 100%);
      border: 1px solid #b7eb8f;
    }
    .estimate-card.warning {
      background: linear-gradient(135deg, #fffbe6 0%, #fff7e6 100%);
      border-color: #ffe58f;
    }
    .estimate-card.danger {
      background: linear-gradient(135deg, #fff1f0 0%, #ffe7e6 100%);
      border-color: #ffccc7;
    }
    .estimate-card.success {
      background: linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%);
      border-color: #52c41a;
    }
    .estimate-title {
      font-size: 13px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .estimate-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .estimate-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }
    .estimate-label {
      color: #666;
    }
    .estimate-value {
      font-weight: 600;
      color: #333;
    }
    .estimate-value.danger {
      color: #ff4d4f;
    }
    .estimate-value.warning {
      color: #faad14;
    }
    .estimate-value.success {
      color: #52c41a;
    }
    .estimate-message {
      font-size: 12px;
      color: #666;
      margin-top: 8px;
      line-height: 1.5;
    }
  `}getSortedRecords(){return!this.records||this.records.length===0?[]:[...this.records].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())}calculateEstimate(){let e=this.getSortedRecords();if(e.length<2)return null;let t=e.length,n=e.map(e=>new Date(e.date).getTime()),r=e.map(e=>e.total),i=n[0],a=n.map(e=>(e-i)/(1e3*60*60*24)),o=r.reduce((e,t)=>e+t,0)/t,s=0,c=0;for(let e=0;e<t;e++)s+=a[e]*(r[e]-o),c+=a[e]*a[e];if(c===0)return null;let l=s/c,u=e[e.length-1],d=u.total,f=new Date(u.date).getTime(),p=`stable`;if(l<-1?p=`down`:l>1&&(p=`up`),d<=50)return{daysTo50:0,trend:p,currentValue:d};if(p!==`down`||l>=0)return{daysTo50:-1,trend:p,currentValue:d};let m=Math.ceil((50-d)/l);return new Date(f+m*24*60*60*1e3),{daysTo50:m,trend:p,currentValue:d}}initChart(){if(!this.canvas)return;let e=this.getSortedRecords();if(e.length===0)return;let t={labels:e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`}),datasets:[{label:`总胆红素`,data:e.map(e=>e.total),borderColor:`#ff4d4f`,backgroundColor:`rgba(255, 77, 79, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6},{label:`直接胆红素`,data:e.map(e=>e.direct),borderColor:`#52c41a`,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6},{label:`间接胆红素`,data:e.map(e=>e.indirect),borderColor:`#1890ff`,backgroundColor:`rgba(24, 144, 255, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6}]};this.chart&&this.chart.destroy(),this.chart=new ad(this.canvas,{type:`line`,data:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:`index`,intersect:!1},annotation:{annotations:{zone1:{type:`box`,yMin:0,yMax:50,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:0,label:{display:!0,content:`可治疗`,position:`end`,color:`#52c41a`,font:{size:10}}},zone2:{type:`box`,yMin:50,yMax:100,backgroundColor:`rgba(250, 173, 20, 0.1)`,borderWidth:0,label:{display:!0,content:`需评估`,position:`end`,color:`#faad14`,font:{size:10}}},zone3:{type:`box`,yMin:100,yMax:400,backgroundColor:`rgba(255, 77, 79, 0.1)`,borderWidth:0,label:{display:!0,content:`待治疗`,position:`end`,color:`#ff4d4f`,font:{size:10}}}}}},scales:{y:{beginAtZero:!0,min:0,max:400,title:{display:!0,text:`μmol/L`},grid:{color:`rgba(0, 0, 0, 0.05)`}},x:{grid:{display:!1}}},interaction:{mode:`nearest`,axis:`x`,intersect:!1}}})}updateChart(){if(!this.chart){this.initChart();return}let e=this.getSortedRecords();if(e.length===0){this.chart.destroy(),this.chart=null;return}let t=e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`});this.chart.data.labels=t,this.chart.data.datasets[0].data=e.map(e=>e.total),this.chart.data.datasets[1].data=e.map(e=>e.direct),this.chart.data.datasets[2].data=e.map(e=>e.indirect),this.chart.update()}updated(e){e.has(`records`)&&this.updateChart()}handleAddClick(){this.inputDate=new Date().toISOString().split(`T`)[0],this.inputTotal=``,this.inputDirect=``,this.inputIndirect=``,this.showInput=!0}handleCancel(){this.showInput=!1}handleToggleTable(){this.showTable=!this.showTable}handleSave(){if(!this.inputDate||!this.inputTotal)return;let e=parseFloat(this.inputTotal)||0,t=parseFloat(this.inputDirect)||0,n=parseFloat(this.inputIndirect)||e-t;this.dispatchEvent(new CustomEvent(`add-record`,{bubbles:!0,composed:!0,detail:{id:Date.now().toString(),date:this.inputDate,total:e,direct:t,indirect:n,unit:`μmol/L`}})),this.showInput=!1}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.initChart(),0)}disconnectedCallback(){super.disconnectedCallback(),this.chart&&=(this.chart.destroy(),null)}render(){let e=this.records&&this.records.length>0,t=this.getSortedRecords(),n=this.calculateEstimate();return D`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">📊 胆红素指标趋势</span>
          <div style="display: flex; gap: 8px;">
            ${e?D`
              <button class="table-toggle-btn ${this.showTable?`active`:``}" @click="${this.handleToggleTable}">
                ${this.showTable?`收起数据`:`查看数据`}
              </button>
            `:``}
            <button class="add-btn" @click="${this.handleAddClick}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              录入
            </button>
          </div>
        </div>

        ${e?D`
          <div class="chart-canvas-container">
            <canvas id="bilirubin-canvas"></canvas>
          </div>
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color total"></div>
              总胆红素
            </div>
            <div class="legend-item">
              <div class="legend-color direct"></div>
              直接胆红素
            </div>
            <div class="legend-item">
              <div class="legend-color indirect"></div>
              间接胆红素
            </div>
          </div>
          <div class="normal-range">
            正常范围：总胆红素 5.1-19.0 μmol/L | 直接胆红素 0-6.8 μmol/L
          </div>
          ${n&&n.daysTo50>=0?D`
            <div class="estimate-card ${n.currentValue<=50?`success`:n.daysTo50<=30?`warning`:`danger`}">
              <div class="estimate-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                到达可治疗水平预估
              </div>
              <div class="estimate-content">
                <div class="estimate-row">
                  <span class="estimate-label">当前总胆红素</span>
                  <span class="estimate-value ${n.currentValue<=50?`success`:n.currentValue<=100?`warning`:`danger`}">${n.currentValue.toFixed(1)} μmol/L</span>
                </div>
                <div class="estimate-row">
                  <span class="estimate-label">趋势状态</span>
                  <span class="estimate-value">${n.trend===`down`?`📉 下降中`:n.trend===`up`?`📈 上升中`:`➡️ 稳定`}</span>
                </div>
                ${n.currentValue>50?D`
                  <div class="estimate-row">
                    <span class="estimate-label">预计到达50的时间</span>
                    <span class="estimate-value ${n.daysTo50<=30?`warning`:`danger`}">约 ${n.daysTo50} 天</span>
                  </div>
                `:``}
              </div>
              <div class="estimate-message">
                ${n.currentValue<=50?`🎉 已达到可治疗水平，请与医生讨论化疗方案。`:n.daysTo50<=30?`⏰ 预计一个月内可达到治疗条件，继续保持。`:n.daysTo50>0?`⏰ 预计需要更长时间，建议与医生讨论其他治疗方案。`:`⚠️ 当前趋势无法预估到达时间，建议继续监测。`}
              </div>
            </div>
          `:``}
          ${this.showTable?D`
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>总胆红素</th>
                    <th>直接胆红素</th>
                    <th>间接胆红素</th>
                  </tr>
                </thead>
                <tbody>
                  ${t.map(e=>D`
                    <tr>
                      <td>${new Date(e.date).toLocaleDateString(`zh-CN`)}</td>
                      <td>${e.total} μmol/L</td>
                      <td>${e.direct} μmol/L</td>
                      <td>${e.indirect} μmol/L</td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          `:``}
        `:D`
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5; margin-bottom: 12px;">
              <path d="M3 3v18h18"></path>
              <path d="M18 17l-5-5-4 4-4-4"></path>
            </svg>
            <p>暂无胆红素记录</p>
            <p style="font-size: 12px; margin-top: 4px;">点击上方按钮录入第一次数据</p>
          </div>
        `}

        ${this.showInput?D`
          <div class="input-form">
            <div class="input-title">录入胆红素指标</div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">日期</div>
                <input type="date" class="input-field" .value="${this.inputDate}" @input="${e=>this.inputDate=e.target.value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">总胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="如：25.5" .value="${this.inputTotal}" @input="${e=>this.inputTotal=e.target.value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">直接胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="选填，自动计算间接" .value="${this.inputDirect}" @input="${e=>this.inputDirect=e.target.value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">间接胆红素 (μmol/L)</div>
                <input type="number" class="input-field" placeholder="选填" .value="${this.inputIndirect}" @input="${e=>this.inputIndirect=e.target.value}">
              </div>
            </div>
            <div class="input-actions">
              <button class="cancel-btn" @click="${this.handleCancel}">取消</button>
              <button class="save-btn" @click="${this.handleSave}">保存</button>
            </div>
          </div>
        `:``}
      </div>
    `}};M([A({type:Array})],fm.prototype,`records`,void 0),M([j()],fm.prototype,`showInput`,void 0),M([j()],fm.prototype,`showTable`,void 0),M([j()],fm.prototype,`inputDate`,void 0),M([j()],fm.prototype,`inputTotal`,void 0),M([j()],fm.prototype,`inputDirect`,void 0),M([j()],fm.prototype,`inputIndirect`,void 0),M([He(`#bilirubin-canvas`)],fm.prototype,`canvas`,void 0),fm=M([k(`bilirubin-chart`)],fm);var pm=class extends O{constructor(...e){super(...e),this.records=[],this.showInput=!1,this.showTable=!1,this.inputDate=``,this.inputVolume=``,this.inputColor=``,this.inputNotes=``,this.chart=null}static{this.styles=c`
    :host {
      display: block;
    }
    .chart-container {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .chart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .chart-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .add-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #52c41a;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .add-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
    }
    .chart-canvas-container {
      position: relative;
      height: 200px;
      width: 100%;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
    }
    .input-form {
      background: #f6ffed;
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    .input-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
    }
    .input-row {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }
    .input-group {
      flex: 1;
    }
    .input-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .input-field {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .input-field:focus {
      border-color: #52c41a;
    }
    .input-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
    .cancel-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
    }
    .save-btn {
      background: #52c41a;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .color-tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      background: #f5f5f5;
      color: #666;
    }
    .table-toggle-btn {
      background: #f5f5f5;
      color: #666;
      border: none;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .table-toggle-btn:hover {
      background: #e8e8e8;
    }
    .table-toggle-btn.active {
      background: #f6ffed;
      color: #52c41a;
    }
    .data-table {
      margin-top: 16px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #b7eb8f;
    }
    .data-table table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .data-table th {
      background: #f6ffed;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #b7eb8f;
    }
    .data-table td {
      padding: 12px 16px;
      color: #666;
      border-bottom: 1px solid #f0f0f0;
    }
    .data-table tr:last-child td {
      border-bottom: none;
    }
    .data-table tr:hover td {
      background: #fafafa;
    }
    .no-data {
      text-align: center;
      padding: 20px;
      color: #999;
      font-size: 14px;
    }
    .tips {
      background: #fff1f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px;
      margin-top: 12px;
      font-size: 12px;
      color: #666;
    }
    .tips-title {
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 4px;
    }
  `}getSortedRecords(){return!this.records||this.records.length===0?[]:[...this.records].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())}initChart(){if(!this.canvas)return;let e=this.getSortedRecords();if(e.length===0)return;let t={labels:e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`}),datasets:[{label:`引流量`,data:e.map(e=>e.volume),borderColor:`#52c41a`,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6}]};this.chart&&this.chart.destroy(),this.chart=new ad(this.canvas,{type:`line`,data:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:`index`,intersect:!1,callbacks:{afterLabel:t=>`颜色: ${e[t.dataIndex].color||`未记录`}`}}},scales:{y:{beginAtZero:!0,title:{display:!0,text:`ml`},grid:{color:`rgba(0, 0, 0, 0.05)`}},x:{grid:{display:!1}}},interaction:{mode:`nearest`,axis:`x`,intersect:!1}}})}updateChart(){if(!this.chart){this.initChart();return}let e=this.getSortedRecords();if(e.length===0){this.chart.destroy(),this.chart=null;return}let t=e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`});this.chart.data.labels=t,this.chart.data.datasets[0].data=e.map(e=>e.volume),this.chart.update()}updated(e){e.has(`records`)&&this.updateChart()}handleAddClick(){this.inputDate=new Date().toISOString().split(`T`)[0],this.inputVolume=``,this.inputColor=``,this.inputNotes=``,this.showInput=!0}handleCancel(){this.showInput=!1}handleToggleTable(){this.showTable=!this.showTable}handleSave(){if(!this.inputDate||!this.inputVolume)return;let e=parseFloat(this.inputVolume)||0;this.dispatchEvent(new CustomEvent(`add-record`,{bubbles:!0,composed:!0,detail:{id:Date.now().toString(),date:this.inputDate,volume:e,color:this.inputColor||`金黄色`,notes:this.inputNotes}})),this.showInput=!1}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.initChart(),0)}disconnectedCallback(){super.disconnectedCallback(),this.chart&&=(this.chart.destroy(),null)}render(){let e=this.records&&this.records.length>0,t=this.getSortedRecords();return D`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">💧 PTCD引流量记录</span>
          <div style="display: flex; gap: 8px;">
            ${e?D`
              <button class="table-toggle-btn ${this.showTable?`active`:``}" @click="${this.handleToggleTable}">
                ${this.showTable?`收起数据`:`查看数据`}
              </button>
            `:``}
            <button class="add-btn" @click="${this.handleAddClick}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              录入
            </button>
          </div>
        </div>

        ${e?D`
          <div class="chart-canvas-container">
            <canvas id="drainage-canvas"></canvas>
          </div>
          ${this.showTable?D`
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>引流量</th>
                    <th>颜色</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  ${t.map(e=>D`
                    <tr>
                      <td>${new Date(e.date).toLocaleDateString(`zh-CN`)}</td>
                      <td>${e.volume} ml</td>
                      <td><span class="color-tag">${e.color}</span></td>
                      <td>${e.notes||`-`}</td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          `:``}
        `:D`
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5; margin-bottom: 12px;">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
            <p>暂无引流量记录</p>
            <p style="font-size: 12px; margin-top: 4px;">点击上方按钮录入每日引流量</p>
          </div>
        `}

        <div class="tips">
          <div class="tips-title">💡 记录提示</div>
          <div>• 建议每日固定时间记录引流量（如早上8点）</div>
          <div>• 正常PTCD引流量约为200-400ml/天</div>
          <div>• 引流量突然减少或增多时请及时联系医生</div>
        </div>

        ${this.showInput?D`
          <div class="input-form">
            <div class="input-title">录入引流量</div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">日期</div>
                <input type="date" class="input-field" .value="${this.inputDate}" @input="${e=>this.inputDate=e.target.value}">
              </div>
              <div class="input-group">
                <div class="input-label">引流量 (ml)</div>
                <input type="number" class="input-field" placeholder="如：250" .value="${this.inputVolume}" @input="${e=>this.inputVolume=e.target.value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">颜色</div>
                <input type="text" class="input-field" placeholder="如：金黄色、墨绿色" .value="${this.inputColor}" @input="${e=>this.inputColor=e.target.value}">
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <div class="input-label">备注（选填）</div>
                <input type="text" class="input-field" placeholder="如：晚上引流量较多" .value="${this.inputNotes}" @input="${e=>this.inputNotes=e.target.value}">
              </div>
            </div>
            <div class="input-actions">
              <button class="cancel-btn" @click="${this.handleCancel}">取消</button>
              <button class="save-btn" @click="${this.handleSave}">保存</button>
            </div>
          </div>
        `:``}
      </div>
    `}};M([A({type:Array})],pm.prototype,`records`,void 0),M([j()],pm.prototype,`showInput`,void 0),M([j()],pm.prototype,`showTable`,void 0),M([j()],pm.prototype,`inputDate`,void 0),M([j()],pm.prototype,`inputVolume`,void 0),M([j()],pm.prototype,`inputColor`,void 0),M([j()],pm.prototype,`inputNotes`,void 0),M([He(`#drainage-canvas`)],pm.prototype,`canvas`,void 0),pm=M([k(`drainage-chart`)],pm);var mm=class extends O{constructor(...e){super(...e),this.archive=null,this.disease=null,this.expandedGroups=new Set,this.showPortalVeinThrombusOption=!1}static{this.styles=c`
    :host {
      display: block;
    }
    .guide-section {
      margin-bottom: 20px;
    }
    .guide-section:last-child {
      margin-bottom: 0;
    }
    .guide-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .guide-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .guide-icon.current {
      background: #fff1f0;
    }
    .guide-icon.next {
      background: #f6ffed;
    }
    .guide-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .guide-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.6;
    }
    .guide-item.current {
      background: #fff1f0;
      border: 1px solid #ffccc7;
    }
    .guide-item.next {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .guide-item.pending {
      background: #f5f5f5;
      border: 1px solid #e8e8e8;
    }
    .guide-item.completed {
      background: #f8f6ff;
      border: 1px solid #d3c6ff;
    }
    .item-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .item-check.completed {
      background: #1890ff;
    }
    .item-check.current {
      background: #ff4d4f;
    }
    .item-check.next {
      background: #52c41a;
    }
    .item-check.pending {
      background: #d9d9d9;
    }
    .item-text {
      flex: 1;
      color: #333;
    }
    .item-name {
      font-weight: 500;
      margin-bottom: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #666;
    }
    .completed-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      background: #1890ff;
      color: white;
      margin-left: 8px;
    }
    .bilirubin-section {
      margin-top: 20px;
    }
    .core-task-section {
      margin-top: 20px;
      padding: 16px;
      background: linear-gradient(135deg, #fff1f0 0%, #fff2f0 100%);
      border-radius: 12px;
      border: 1px solid #ffccc7;
    }
    .core-task-title {
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .core-task-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #ffe7e6;
    }
    .core-task-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .core-task-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 12px;
    }
    .core-task-icon.warning {
      background: #fff1f0;
      color: #ff4d4f;
    }
    .core-task-icon.tip {
      background: #f6ffed;
      color: #52c41a;
    }
    .core-task-content {
      flex: 1;
    }
    .core-task-name {
      font-weight: 500;
      font-size: 14px;
      color: #333;
      margin-bottom: 2px;
    }
    .core-task-desc {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
    }
    .bilirubin-target {
      color: #ff4d4f;
      font-weight: 600;
    }
    .task-badge {
      display: inline-block;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 6px;
      font-weight: 500;
    }
    .task-badge.required {
      background: #ff4d4f;
      color: white;
    }
    .task-badge.optional {
      background: #52c41a;
      color: white;
    }
    .task-group {
      background: white;
      border-radius: 10px;
      margin-bottom: 8px;
      border: 1px solid #e8e8e8;
      overflow: hidden;
    }
    .task-group:last-child {
      margin-bottom: 0;
    }
    .task-group-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      cursor: pointer;
      background: #fafafa;
      transition: background 0.2s;
    }
    .task-group-header:hover {
      background: #f0f0f0;
    }
    .task-group-icon {
      font-size: 16px;
    }
    .task-group-content {
      flex: 1;
    }
    .task-group-name {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
    .task-group-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }
    .task-group-time {
      font-size: 12px;
      color: #ff4d4f;
      font-weight: 500;
    }
    .task-group-detail {
      font-size: 12px;
      color: #1890ff;
      cursor: pointer;
      text-decoration: none;
    }
    .task-group-detail:hover {
      text-decoration: underline;
    }
    .task-group-toggle {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    .task-group-toggle.expanded {
      transform: rotate(90deg);
    }
    .task-group-items {
      padding: 8px 14px 12px 44px;
    }
    .task-sub-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    .task-sub-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .task-sub-icon {
      font-size: 14px;
      margin-top: 2px;
    }
    .task-sub-content {
      flex: 1;
    }
    .task-sub-name {
      font-weight: 500;
      font-size: 13px;
      color: #333;
      margin-bottom: 2px;
    }
    .task-sub-desc {
      font-size: 12px;
      color: #666;
      line-height: 1.4;
    }
    .portal-vein-section {
      margin-top: 12px;
      padding: 14px;
      background: #fff8e6;
      border-radius: 10px;
      border: 1px solid #ffe58f;
    }
    .portal-vein-title {
      font-size: 13px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 10px;
    }
    .portal-vein-option {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #333;
    }
    .portal-vein-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    .portal-vein-warning {
      margin-top: 10px;
      padding: 10px 12px;
      background: #fff1f0;
      border-radius: 8px;
      border: 1px solid #ffccc7;
      font-size: 12px;
      color: #ff4d4f;
      line-height: 1.5;
    }
    .warning-icon {
      margin-right: 4px;
    }

    @media (max-width: 600px) {
      .guide-section {
        margin-bottom: 16px;
      }
      .guide-title {
        font-size: 14px;
        margin-bottom: 10px;
      }
      .guide-list {
        gap: 8px;
      }
      .guide-item {
        padding: 12px;
        border-radius: 8px;
        border: none;
      }
      .guide-item.current {
        background: #fff7e6;
      }
      .guide-item.next {
        background: #f6ffed;
      }
      .guide-item.pending {
        background: #fafafa;
      }
      .guide-item.completed {
        background: #f5f0ff;
      }
      .item-name {
        font-size: 13px;
      }
      .item-desc {
        font-size: 11px;
      }
      .completed-badge {
        font-size: 10px;
        padding: 2px 6px;
      }
      .bilirubin-section {
        margin-top: 16px;
      }
      .core-task-section {
        margin-top: 16px;
        padding: 12px;
        border-radius: 8px;
        border: none;
        background: #fffbe6;
      }
      .core-task-title {
        font-size: 13px;
        margin-bottom: 10px;
      }
      .core-task-item {
        padding: 8px 0;
      }
      .core-task-name {
        font-size: 13px;
      }
      .core-task-desc {
        font-size: 11px;
      }
      .task-group {
        border-radius: 8px;
        border: none;
        background: #fafafa;
      }
      .task-group-header {
        padding: 10px 12px;
      }
      .task-group-name {
        font-size: 13px;
      }
      .task-group-items {
        padding: 6px 12px 10px 40px;
      }
      .task-sub-item {
        padding: 6px 0;
      }
      .task-sub-name {
        font-size: 12px;
      }
      .task-sub-desc {
        font-size: 11px;
      }
      .portal-vein-section {
        margin-top: 10px;
        padding: 12px;
        border-radius: 8px;
        border: none;
        background: #fffbe6;
      }
      .portal-vein-title {
        font-size: 12px;
        margin-bottom: 8px;
      }
      .portal-vein-option {
        font-size: 12px;
      }
      .portal-vein-warning {
        margin-top: 8px;
        padding: 8px 10px;
        border-radius: 6px;
        border: none;
        background: #fff1f0;
        font-size: 11px;
      }
    }
  `}hasBloodTest(){return this.archive?(this.archive.completedExamIds||[]).includes(`blood-test`):!1}hasPTCD(){return this.archive?(this.archive.completedTreatmentIds||[]).includes(`biliary-drainage`):!1}hasCTMRI(){return this.archive?(this.archive.completedExamIds||[]).includes(`ct-mri`):!1}handlePortalVeinThrombusChange(e){let t=e.target.checked;this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:{hasPortalVeinTumorThrombus:t}}))}calculateBilirubinEstimateTime(){if(!this.archive||!this.archive.bilirubinRecords||this.archive.bilirubinRecords.length===0)return;let e=[...this.archive.bilirubinRecords].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())[0];if(e.total<=50)return`已达标`;let t=e.total-50,n=Math.ceil(t/50);return n<=0?`已达标`:n===1?`约1周`:`约${n}周`}getExamStatus(e){if(!this.archive)return`pending`;let t=this.archive.completedExamIds||[];if(t.includes(e))return`completed`;if(!this.disease)return`pending`;let n=this.disease.examItems.findIndex(t=>t.id===e);if(t.length===0)return n===0?`current`:`pending`;let r=Math.max(...t.map(e=>this.disease.examItems.findIndex(t=>t.id===e)));return n<=r?`completed`:n===r+1?`next`:`pending`}handleAddBilirubinRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainageRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}toggleGroup(e){this.expandedGroups.has(e)?this.expandedGroups.delete(e):this.expandedGroups.add(e),this.expandedGroups=new Set(this.expandedGroups)}getCoreTasksForDisease(e){return{"hilar-cholangiocarcinoma":{standalone:[{name:`总胆红素降至50以内`,desc:D`总胆红素需要降至<span class="bilirubin-target">50μmol/L以下</span>才能考虑化疗。
              若总胆红素在<span class="bilirubin-target">100μmol/L以内</span>，建议联系医生评估是否存在可行方案。`,icon:`💛`,required:!0,estimateTime:this.calculateBilirubinEstimateTime()}],groups:[{id:`pathology`,name:`马上进行病理确认`,icon:`🔬`,estimateTime:`约2-3周`,detailRoute:`#/pathology-detail`,items:[{name:`基本病理检测`,desc:`通过组织样本明确肿瘤性质，是制定治疗方案的基础依据。`,icon:`🔬`,required:!0},{name:`免疫组化染色检测`,desc:`检测肿瘤标志物表达情况，指导靶向和免疫治疗药物选择。`,icon:`🧪`,required:!0},{name:`基因检测`,desc:`检测基因突变情况（FGFR2、IDH1、MSI/TMB、HER2、NTRK等），为靶向治疗提供依据。胆道肿瘤常见靶点：FGFR2融合、IDH1突变等。`,icon:`🧬`,required:!1}]}]}}[e]||{standalone:[],groups:[]}}render(){if(!this.archive||!this.disease)return D``;let e=this.hasBloodTest(),t=this.hasPTCD(),n=this.getCoreTasksForDisease(this.disease.id),r=n.standalone.length>0||n.groups.length>0;return D`
      ${this.disease&&r?D`
        <div class="core-task-section">
          <div class="core-task-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            核心任务（化疗前提条件）
          </div>

          ${n.standalone.map(e=>D`
            <div class="core-task-item">
              <div class="core-task-icon warning">${e.icon}</div>
              <div class="core-task-content">
                <div class="core-task-name">
                  ${e.name}
                  <span class="task-badge ${e.required?`required`:`optional`}">${e.required?`必做`:`可选`}</span>
                  ${e.estimateTime?D`<span class="task-badge" style="background: #faad14; margin-left: 4px;">${e.estimateTime}</span>`:``}
                </div>
                <div class="core-task-desc">${e.desc}</div>
              </div>
            </div>
          `)}

          ${n.groups.map(e=>D`
            <div class="task-group">
              <div class="task-group-header" @click="${()=>this.toggleGroup(e.id)}">
                <div class="task-group-toggle ${this.expandedGroups.has(e.id)?`expanded`:``}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div class="task-group-icon">${e.icon}</div>
                <div class="task-group-content">
                  <div class="task-group-name">${e.name}</div>
                  <div class="task-group-meta">
                    ${e.estimateTime?D`<span class="task-group-time">${e.estimateTime}</span>`:``}
                    ${e.detailRoute?D`
                      <span class="task-group-detail" @click="${t=>{t.stopPropagation(),window.location.hash=e.detailRoute}}">
                        查看详情 →
                      </span>
                    `:``}
                  </div>
                </div>
              </div>
              ${this.expandedGroups.has(e.id)?D`
                <div class="task-group-items">
                  ${e.items.map(e=>D`
                    <div class="task-sub-item">
                      <div class="task-sub-icon">${e.icon}</div>
                      <div class="task-sub-content">
                        <div class="task-sub-name">
                          ${e.name}
                          <span class="task-badge ${e.required?`required`:`optional`}">${e.required?`必做`:`可选`}</span>
                        </div>
                        <div class="task-sub-desc">
                          ${e.desc}
                          ${e.name===`基因检测`&&this.archive?.hasPortalVeinTumorThrombus?D`
                            <div style="margin-top: 8px; padding: 10px; background: #fff1f0; border-radius: 8px; border: 1px solid #ffccc7;">
                              <div style="font-size: 12px; color: #ff4d4f; font-weight: 600;">⚠️ 门静脉癌栓患者注意</div>
                              <div style="font-size: 12px; color: #666; margin-top: 4px; line-height: 1.5;">
                                若治疗过程中发生消化道出血需要输血，基因检测需推迟<span style="color: #ff4d4f; font-weight: 600;">至少15天</span>。请提前与医生沟通安排基因检测抽血时间。
                              </div>
                            </div>
                          `:``}
                        </div>
                      </div>
                    </div>
                  `)}
                </div>
              `:``}
            </div>
          `)}
        </div>
      `:``}

      ${t?D`
        <div class="bilirubin-section">
          <drainage-chart
            .records="${this.archive.drainageRecords||[]}"
            @add-record="${this.handleAddDrainageRecord}"
          ></drainage-chart>
        </div>
      `:``}

      ${e?D`
        <div class="bilirubin-section">
          <bilirubin-chart
            .records="${this.archive.bilirubinRecords||[]}"
            @add-record="${this.handleAddBilirubinRecord}"
          ></bilirubin-chart>
        </div>
      `:``}

      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon current">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          检查项目进度
        </div>
        <div class="guide-list">
          ${this.disease.examItems.map(e=>{let t=this.getExamStatus(e.id);return D`
              <div class="guide-item ${t}">
                <div class="item-check ${t}">
                  ${t===`completed`?D`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  `:t===`current`?D`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  `:``}
                </div>
                <div class="item-text">
                  <div class="item-name">
                    ${e.name}
                    ${t===`completed`?D`<span class="completed-badge">已完成</span>`:``}
                  </div>
                  <div class="item-desc">${e.desc}</div>
                </div>
              </div>
              ${e.id===`ct-mri`&&t===`completed`?D`
                <div class="portal-vein-section">
                  <div class="portal-vein-title">CT/MRI报告补充信息</div>
                  <label class="portal-vein-option">
                    <input
                      type="checkbox"
                      class="portal-vein-checkbox"
                      .checked="${this.archive?.hasPortalVeinTumorThrombus===!0}"
                      @change="${this.handlePortalVeinThrombusChange}"
                    />
                    存在门静脉癌栓
                  </label>
                </div>
              `:``}
            `})}
        </div>
      </div>

      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          下一步提示
        </div>
        <div class="guide-list">
          <div class="guide-item next">
            <div class="item-check next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">等待病理确诊</div>
              <div class="item-desc">完成病理活检是进入治疗阶段的关键依据</div>
            </div>
          </div>
          <div class="guide-item pending">
            <div class="item-check pending">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">准备治疗方案</div>
              <div class="item-desc">确诊后可与医生讨论手术可能性及综合治疗方案</div>
            </div>
          </div>
        </div>
      </div>
    `}};M([A({type:Object})],mm.prototype,`archive`,void 0),M([A({type:Object})],mm.prototype,`disease`,void 0),M([j()],mm.prototype,`expandedGroups`,void 0),M([j()],mm.prototype,`showPortalVeinThrombusOption`,void 0),mm=M([k(`examination-tab`)],mm);var hm=class extends O{constructor(...e){super(...e),this.assessment={bismuthType:`I`,resectability:`resectable`,vascularInvasion:`none`,lymphNodeStatus:`N0`,metastasis:`M0`,ecogScore:0,hasJaundice:!1,tbilLevel:void 0},this.expandedPlanId=null,this.activeCategory=`all`,this.treatmentPlans=[{id:`surgery-hepatectomy`,name:`肝叶切除+肝外胆管切除+淋巴结廓清`,category:`surgery`,indication:`根治性切除术`,description:`联合规则性肝段切除、肝尾状叶切除、区域淋巴结和神经丛廓清，以及肝管-空肠Roux-en-Y吻合术。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`resectable`],bismuthTypes:[`I`,`II`,`IIIa`,`IIIb`],lymphNodeStatus:[`N0`,`N1`],metastasis:[`M0`],ecogMax:2}},{id:`surgery-expanded`,name:`扩大肝切除术（右三区/左三区切除）`,category:`surgery`,indication:`Bismuth IV型根治术`,description:`适用于Bismuth IV型患者，肿瘤广泛浸润左右肝管二级分支以上时，需行肝三叶联合肝尾状叶切除术。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`resectable`],bismuthTypes:[`IV`],metastasis:[`M0`],ecogMax:1}},{id:`surgery-parenchymal`,name:`保留功能性肝实质手术（围肝门切除）`,category:`surgery`,indication:`不适合大范围肝切除的患者`,description:`围肝门切除+胆管空肠吻合术，适用于部分Bismuth IV型但又无法承受大范围肝切除的患者。`,recommendations:[{level:`weak`,evidence:`证据等级4，弱推荐`}],suitableFor:{resectability:[`borderline`,`unresectable`],bismuthTypes:[`IV`],ecogMax:2}},{id:`surgery-vascular`,name:`联合血管切除重建术`,category:`surgery`,indication:`合并血管侵犯`,description:`门静脉切除重建适用于拟保留侧门静脉受累的患者；肝动脉切除重建适用于拟保留侧肝动脉受累的患者。`,recommendations:[{level:`strong`,evidence:`门静脉：证据等级2，强推荐`},{level:`weak`,evidence:`肝动脉：证据等级2，弱推荐`}],suitableFor:{resectability:[`resectable`,`borderline`],vascularInvasion:[`portal_vein`,`hepatic_artery`],metastasis:[`M0`],ecogMax:1}},{id:`surgery-hepatopancreatectomy`,name:`肝胰十二指肠切除术`,category:`surgery`,indication:`晚期广泛侵犯`,description:`适用于肿瘤侵犯胰腺段胆管、远端胆管癌侵犯肝门部、或肝门部和胰腺段胆管存在广泛肝外胆管受累的患者。`,recommendations:[{level:`weak`,evidence:`证据等级3，弱推荐`}],suitableFor:{resectability:[`resectable`,`borderline`],metastasis:[`M0`],ecogMax:1}},{id:`transplant`,name:`肝移植治疗`,category:`transplant`,indication:`严格筛选的早期患者`,description:`适用于肿瘤直径<3cm、无淋巴结转移、无肝内和肝外转移的患者。不可切除的局部进展期可行新辅助放化疗后肝移植。`,recommendations:[{level:`weak`,evidence:`证据等级2，弱推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`],ecogMax:1}},{id:`systemic-first-gemcisp`,name:`吉西他滨+顺铂`,category:`systemic`,indication:`晚期一线标准治疗`,description:`晚期肝门部胆管癌一线标准治疗方案之一，中位总生存期显著优于单药吉西他滨。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:2}},{id:`systemic-first-imunochem`,name:`度伐利尤单抗+吉西他滨+顺铂`,category:`systemic`,indication:`晚期一线首选`,description:`TOPAZ-1试验结果显示该联合方案能显著改善总生存期和无进展生存期。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:1}},{id:`systemic-first-pembrochem`,name:`帕博利珠单抗+吉西他滨+顺铂`,category:`systemic`,indication:`晚期一线治疗`,description:`KEYNOTE-966试验显示出生存期优势。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:1}},{id:`systemic-first-gemsft`,name:`吉西他滨+替吉奥`,category:`systemic`,indication:`晚期一线替代方案`,description:`FUGA-BT/JCOG1113研究显示疗效与吉西他滨联合顺铂相当，且在无进展生存期方面表现优势。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:2}},{id:`systemic-first-gemcisft`,name:`吉西他滨+顺铂+替吉奥`,category:`systemic`,indication:`体能良好患者强化方案`,description:`KHBO1401-MITSUBA试验显示三药联合能显著提高中位总生存期和中位无进展生存期。`,recommendations:[{level:`weak`,evidence:`证据等级2，弱推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:0}},{id:`systemic-second-folfox`,name:`FOLFOX+积极症状控制`,category:`systemic`,indication:`二线标准治疗`,description:`ABC-06试验显示中位总生存期5.3个月 vs 6.2个月（积极控制组）。`,recommendations:[{level:`strong`,evidence:`证据等级3，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:2}},{id:`systemic-adjuvant-capecitabine`,name:`卡培他滨辅助治疗（6个月）`,category:`systemic`,indication:`术后辅助治疗`,description:`BILCAP试验：中位总生存期49.6个月 vs 36.1个月（观察组）。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`resectable`],lymphNodeStatus:[`N0`,`N1`,`N2`],metastasis:[`M0`],ecogMax:2}},{id:`systemic-adjuvant-ts`,name:`替吉奥辅助治疗（6个月）`,category:`systemic`,indication:`术后辅助治疗`,description:`JCOG1202/ASCOT试验：5年总生存率64.1% vs 52.2%（观察组）。`,recommendations:[{level:`strong`,evidence:`证据等级2，强推荐`}],suitableFor:{resectability:[`resectable`],lymphNodeStatus:[`N0`,`N1`,`N2`],metastasis:[`M0`],ecogMax:2}},{id:`radiation-adjuvant`,name:`术后辅助放疗`,category:`radiation`,indication:`R1/R2切除或淋巴结阳性`,description:`适用于术后存在阳性切缘或淋巴结阳性的患者，可降低复发率并改善总生存期。`,recommendations:[{level:`weak`,evidence:`证据等级4，弱推荐`}],suitableFor:{resectability:[`resectable`],lymphNodeStatus:[`N1`,`N2`],metastasis:[`M0`],ecogMax:2}},{id:`palliative-stent`,name:`姑息性胆道引流/支架`,category:`palliative`,indication:`不可切除伴胆道梗阻`,description:`适用于晚期无法手术切除患者的胆道减压，缓解黄疸症状。金属支架优于塑料支架。`,recommendations:[{level:`strong`,evidence:`证据等级3，强推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M1`],ecogMax:3}},{id:`palliative-hai`,name:`肝动脉灌注化疗（HAIC）`,category:`palliative`,indication:`姑息性治疗`,description:`肝动脉灌注化疗术联合系统治疗可提高远期疗效，高胆红素血症患者在充分胆道引流后也可考虑。`,recommendations:[{level:`weak`,evidence:`证据等级4，弱推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:2}},{id:`palliative-pdt`,name:`光动力治疗`,category:`palliative`,indication:`姑息性治疗`,description:`光动力治疗结合支架置入可提高1年和2年生存率，且未增加胆管炎及其他治疗相关不良事件。`,recommendations:[{level:`weak`,evidence:`证据等级4，弱推荐`}],suitableFor:{resectability:[`unresectable`],metastasis:[`M0`,`M1`],ecogMax:2}}]}static{this.styles=c`
    :host {
      display: block;
    }
    .selector-card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .selector-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }
    .selector-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .selector-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    .selector-subtitle {
      font-size: 12px;
      color: #666;
      margin-top: 2px;
    }
    .filter-section {
      margin-bottom: 20px;
    }
    .filter-group {
      margin-bottom: 16px;
    }
    .filter-label {
      font-size: 13px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .filter-label .required {
      color: #ff4d4f;
    }
    .filter-options {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filter-chip {
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      border: 1px solid #d9d9d9;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      color: #333;
    }
    .filter-chip:hover {
      border-color: #52c41a;
      color: #52c41a;
    }
    .filter-chip.selected {
      background: #52c41a;
      border-color: #52c41a;
      color: white;
    }
    .filter-chip.highlight-warning {
      border-color: #fa8c16;
    }
    .filter-chip.selected.highlight-warning {
      background: #fa8c16;
      border-color: #fa8c16;
    }
    .filter-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .filter-input:focus {
      border-color: #52c41a;
    }
    .category-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .category-tab {
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      border: 1px solid #e8e8e8;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .category-tab:hover {
      border-color: #52c41a;
      color: #52c41a;
    }
    .category-tab.active {
      background: #f6ffed;
      border-color: #52c41a;
      color: #52c41a;
    }
    .category-tab .count {
      display: inline-block;
      background: #f0f0f0;
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 11px;
      margin-left: 4px;
    }
    .category-tab.active .count {
      background: #d9f7be;
      color: #389e0d;
    }
    .plans-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .plan-card {
      border: 1px solid #e8e8e8;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s;
    }
    .plan-card:hover {
      border-color: #52c41a;
      box-shadow: 0 2px 12px rgba(82, 196, 26, 0.15);
    }
    .plan-card.primary {
      border-color: #52c41a;
      background: #fafff0;
    }
    .plan-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      cursor: pointer;
      background: white;
    }
    .plan-card.primary .plan-header {
      background: #f6ffed;
    }
    .plan-category-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    .plan-category-icon.surgery {
      background: #e6f7ff;
    }
    .plan-category-icon.systemic {
      background: #fff0f6;
    }
    .plan-category-icon.radiation {
      background: #fff7e6;
    }
    .plan-category-icon.palliative {
      background: #f5f5f5;
    }
    .plan-category-icon.transplant {
      background: #f9f0ff;
    }
    .plan-info {
      flex: 1;
      min-width: 0;
    }
    .plan-name {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 4px;
    }
    .plan-indication {
      font-size: 12px;
      color: #666;
    }
    .plan-badges {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .badge {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 500;
    }
    .badge.primary {
      background: #52c41a;
      color: white;
    }
    .badge.strong {
      background: #1890ff;
      color: white;
    }
    .badge.weak {
      background: #faad14;
      color: white;
    }
    .expand-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
      color: #999;
    }
    .expand-icon.expanded {
      transform: rotate(180deg);
    }
    .plan-detail {
      padding: 0 16px 16px 16px;
      background: white;
      border-top: 1px solid #f0f0f0;
    }
    .plan-card.primary .plan-detail {
      background: #fafff0;
      border-top-color: #b7eb8f;
    }
    .plan-description {
      font-size: 13px;
      color: #333;
      line-height: 1.6;
      margin-bottom: 12px;
      padding-top: 12px;
    }
    .plan-evidence {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .evidence-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      color: #666;
    }
    .evidence-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .evidence-icon.strong {
      background: #1890ff;
    }
    .evidence-icon.weak {
      background: #faad14;
    }
    .evidence-icon svg {
      width: 10px;
      height: 10px;
    }
    .no-results {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-results-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }
    .no-results-text {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .no-results-hint {
      font-size: 12px;
      color: #bfbfbf;
    }
    .divider {
      height: 1px;
      background: #f0f0f0;
      margin: 20px 0;
    }
    .summary-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 16px;
      color: white;
      margin-bottom: 20px;
    }
    .summary-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 13px;
      opacity: 0.9;
      line-height: 1.5;
    }
  `}isPlanSuitable(e){let{suitableFor:t}=e,n=this.assessment;return!(t.bismuthTypes&&!t.bismuthTypes.includes(n.bismuthType)||t.resectability&&!t.resectability.includes(n.resectability)||t.vascularInvasion&&!(n.vascularInvasion===`none`&&t.vascularInvasion.includes(`none`))&&n.vascularInvasion!==`none`&&!t.vascularInvasion.includes(n.vascularInvasion)||t.lymphNodeStatus&&!t.lymphNodeStatus.includes(n.lymphNodeStatus)||t.metastasis&&!t.metastasis.includes(n.metastasis)||t.ecogMax!==void 0&&n.ecogScore>t.ecogMax)}getFilteredPlans(){return this.treatmentPlans.filter(e=>this.isPlanSuitable(e))}getFilteredPlansByCategory(e){let t=this.getFilteredPlans();return e===`all`?t:t.filter(t=>t.category===e)}getCategoryCount(e){return e===`all`?this.getFilteredPlans().length:this.getFilteredPlans().filter(t=>t.category===e).length}getPrimaryRecommendation(){let e=this.getFilteredPlans(),t=e.filter(e=>e.recommendations.some(e=>e.level===`strong`));return t.length>0?t[0]:e.length>0?e[0]:null}getCategoryIcon(e){return{surgery:`🔪`,systemic:`💊`,radiation:`☢️`,palliative:`🩹`,transplant:`🏥`}[e]}getCategoryLabel(e){return{surgery:`手术`,systemic:`药物治疗`,radiation:`放疗`,palliative:`姑息治疗`,transplant:`肝移植`}[e]}handleFilterChange(e,t){this.assessment={...this.assessment,[e]:t}}togglePlan(e){this.expandedPlanId=this.expandedPlanId===e?null:e}render(){this.getFilteredPlans();let e=this.getPrimaryRecommendation();return D`
      <div class="selector-card">
        <div class="selector-header">
          <div class="selector-icon">📋</div>
          <div>
            <div class="selector-title">个性化治疗方案</div>
            <div class="selector-subtitle">根据患者评估信息智能推荐治疗方案</div>
          </div>
        </div>

        ${e?D`
          <div class="summary-card">
            <div class="summary-title">💡 推荐方案</div>
            <div class="summary-text">
              基于当前患者评估，<strong>${e.name}</strong> 为首选推荐方案。
              ${e.recommendations.some(e=>e.level===`strong`)?`该方案具有强有力的循证医学证据支持。`:`该方案可作为备选方案。`}
            </div>
          </div>
        `:``}

        <div class="filter-section">
          <div class="filter-group">
            <div class="filter-label">
              Bismuth分型 <span class="required">*</span>
            </div>
            <div class="filter-options">
              ${[`I`,`II`,`IIIa`,`IIIb`,`IV`].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.bismuthType===e?`selected`:``}"
                  @click="${()=>this.handleFilterChange(`bismuthType`,e)}"
                >
                  ${e===`I`?`I型`:e===`II`?`II型`:e===`IIIa`?`IIIa型`:e===`IIIb`?`IIIb型`:`IV型`}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">
              可切除性评估 <span class="required">*</span>
            </div>
            <div class="filter-options">
              ${[{value:`resectable`,label:`可切除`},{value:`borderline`,label:`边界可切除`},{value:`unresectable`,label:`不可切除`}].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.resectability===e.value?`selected`:``} ${e.value===`borderline`?`highlight-warning`:``}"
                  @click="${()=>this.handleFilterChange(`resectability`,e.value)}"
                >
                  ${e.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">血管侵犯</div>
            <div class="filter-options">
              ${[{value:`none`,label:`无血管侵犯`},{value:`portal_vein`,label:`门静脉侵犯`},{value:`hepatic_artery`,label:`肝动脉侵犯`}].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.vascularInvasion===e.value?`selected`:``}"
                  @click="${()=>this.handleFilterChange(`vascularInvasion`,e.value)}"
                >
                  ${e.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">淋巴结状态</div>
            <div class="filter-options">
              ${[{value:`N0`,label:`N0 (无转移)`},{value:`N1`,label:`N1 (1-3枚)`},{value:`N2`,label:`N2 (≥4枚)`}].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.lymphNodeStatus===e.value?`selected`:``}"
                  @click="${()=>this.handleFilterChange(`lymphNodeStatus`,e.value)}"
                >
                  ${e.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">远处转移</div>
            <div class="filter-options">
              ${[{value:`M0`,label:`M0 (无远处转移)`},{value:`M1`,label:`M1 (有远处转移)`}].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.metastasis===e.value?`selected`:``} ${e.value===`M1`?`highlight-warning`:``}"
                  @click="${()=>this.handleFilterChange(`metastasis`,e.value)}"
                >
                  ${e.label}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">体能状态 (ECOG)</div>
            <div class="filter-options">
              ${[0,1,2,3].map(e=>D`
                <button
                  class="filter-chip ${this.assessment.ecogScore===e?`selected`:``}"
                  @click="${()=>this.handleFilterChange(`ecogScore`,e)}"
                >
                  ${e}分 ${e===0?`(正常)`:e===1?`(能走动)`:e===2?`(能起床)`:`(卧床)`}
                </button>
              `)}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-label">黄疸状态</div>
            <div class="filter-options">
              <button
                class="filter-chip ${this.assessment.hasJaundice?``:`selected`}"
                @click="${()=>this.handleFilterChange(`hasJaundice`,!1)}"
              >
                无黄疸
              </button>
              <button
                class="filter-chip ${this.assessment.hasJaundice?`selected`:``} highlight-warning"
                @click="${()=>this.handleFilterChange(`hasJaundice`,!0)}"
              >
                有黄疸
              </button>
              ${this.assessment.hasJaundice?D`
                <input
                  type="number"
                  class="filter-input"
                  style="width: 120px; margin-left: 8px;"
                  placeholder="胆红素(μmol/L)"
                  .value="${this.assessment.tbilLevel?.toString()||``}"
                  @input="${e=>this.handleFilterChange(`tbilLevel`,parseFloat(e.target.value)||void 0)}"
                />
              `:``}
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="category-tabs">
          <button
            class="category-tab ${this.activeCategory===`all`?`active`:``}"
            @click="${()=>this.activeCategory=`all`}"
          >
            全部 <span class="count">${this.getCategoryCount(`all`)}</span>
          </button>
          ${[`surgery`,`systemic`,`radiation`,`palliative`,`transplant`].map(e=>D`
            <button
              class="category-tab ${this.activeCategory===e?`active`:``}"
              @click="${()=>this.activeCategory=e}"
            >
              ${this.getCategoryIcon(e)} ${this.getCategoryLabel(e)} <span class="count">${this.getCategoryCount(e)}</span>
            </button>
          `)}
        </div>

        <div class="plans-list">
          ${this.getFilteredPlansByCategory(this.activeCategory).length===0?D`
            <div class="no-results">
              <div class="no-results-icon">🔍</div>
              <div class="no-results-text">没有找到匹配的治疗方案</div>
              <div class="no-results-hint">请调整筛选条件后重试</div>
            </div>
          `:this.getFilteredPlansByCategory(this.activeCategory).map(t=>D`
            <div class="plan-card ${e?.id===t.id?`primary`:``}">
              <div class="plan-header" @click="${()=>this.togglePlan(t.id)}">
                <div class="plan-category-icon ${t.category}">
                  ${this.getCategoryIcon(t.category)}
                </div>
                <div class="plan-info">
                  <div class="plan-name">${t.name}</div>
                  <div class="plan-indication">${t.indication}</div>
                </div>
                <div class="plan-badges">
                  ${t.recommendations.some(e=>e.level===`strong`)?D`
                    <span class="badge ${e?.id===t.id?`primary`:`strong`}">
                      ${e?.id===t.id?`首选`:`强推荐`}
                    </span>
                  `:D`
                    <span class="badge weak">可选</span>
                  `}
                </div>
                <div class="expand-icon ${this.expandedPlanId===t.id?`expanded`:``}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              ${this.expandedPlanId===t.id?D`
                <div class="plan-detail">
                  <div class="plan-description">${t.description}</div>
                  <div class="plan-evidence">
                    ${t.recommendations.map(e=>D`
                      <div class="evidence-item">
                        <div class="evidence-icon ${e.level}">
                          ${e.level===`strong`?D`
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          `:D`
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          `}
                        </div>
                        <span>${e.evidence}</span>
                      </div>
                    `)}
                  </div>
                </div>
              `:``}
            </div>
          `)}
        </div>
      </div>
    `}};M([j()],hm.prototype,`assessment`,void 0),M([j()],hm.prototype,`expandedPlanId`,void 0),M([j()],hm.prototype,`activeCategory`,void 0),hm=M([k(`treatment-plan-selector`)],hm);var gm=class extends O{constructor(...e){super(...e),this.archive=null,this.disease=null}static{this.styles=c`
    :host {
      display: block;
    }
    .guide-section {
      margin-bottom: 20px;
    }
    .guide-section:last-child {
      margin-bottom: 0;
    }
    .guide-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .guide-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .guide-icon.current {
      background: #fff1f0;
    }
    .guide-icon.next {
      background: #f6ffed;
    }
    .guide-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .guide-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.6;
    }
    .guide-item.current {
      background: #fff1f0;
      border: 1px solid #ffccc7;
    }
    .guide-item.next {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .guide-item.pending {
      background: #f5f5f5;
      border: 1px solid #e8e8e8;
    }
    .guide-item.completed {
      background: #f8f6ff;
      border: 1px solid #d3c6ff;
    }
    .item-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .item-check.completed {
      background: #1890ff;
    }
    .item-check.current {
      background: #ff4d4f;
    }
    .item-check.next {
      background: #52c41a;
    }
    .item-check.pending {
      background: #d9d9d9;
    }
    .item-text {
      flex: 1;
      color: #333;
    }
    .item-name {
      font-weight: 500;
      margin-bottom: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #666;
    }
    .completed-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      background: #1890ff;
      color: white;
      margin-left: 8px;
    }
    .bilirubin-section {
      margin-top: 20px;
    }
    .plan-selector-section {
      margin-top: 24px;
    }

    @media (max-width: 600px) {
      .guide-section {
        margin-bottom: 16px;
      }
      .guide-title {
        font-size: 14px;
        margin-bottom: 10px;
      }
      .guide-list {
        gap: 8px;
      }
      .guide-item {
        padding: 12px;
        border-radius: 8px;
        border: none;
      }
      .guide-item.current {
        background: #fff7e6;
      }
      .guide-item.next {
        background: #f6ffed;
      }
      .guide-item.pending {
        background: #fafafa;
      }
      .guide-item.completed {
        background: #f5f0ff;
      }
      .item-name {
        font-size: 13px;
      }
      .item-desc {
        font-size: 11px;
      }
      .completed-badge {
        font-size: 10px;
        padding: 2px 6px;
      }
      .bilirubin-section {
        margin-top: 16px;
      }
      .plan-selector-section {
        margin-top: 16px;
      }
    }
  `}hasBloodTest(){return this.archive?(this.archive.completedExamIds||[]).includes(`blood-test`):!1}getTreatmentStatus(e){if(!this.archive)return`pending`;let t=this.archive.completedTreatmentIds||[];if(t.includes(e))return`completed`;if(!this.disease)return`pending`;let n=this.disease.treatmentItems.findIndex(t=>t.id===e);if(t.length===0)return n===0?`current`:`pending`;let r=Math.max(...t.map(e=>this.disease.treatmentItems.findIndex(t=>t.id===e)));return n<=r?`completed`:n===r+1?`next`:`pending`}handleAddBilirubinRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}render(){if(!this.archive||!this.disease)return D``;let e=this.hasBloodTest();return D`
      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon current">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          治疗项目进度
        </div>
        <div class="guide-list">
          ${this.disease.treatmentItems.map(e=>{let t=this.getTreatmentStatus(e.id);return D`
              <div class="guide-item ${t}">
                <div class="item-check ${t}">
                  ${t===`completed`?D`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  `:t===`current`?D`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  `:``}
                </div>
                <div class="item-text">
                  <div class="item-name">
                    ${e.name}
                    ${t===`completed`?D`<span class="completed-badge">已完成</span>`:``}
                  </div>
                  <div class="item-desc">${e.desc}</div>
                </div>
              </div>
            `})}
        </div>
      </div>

      ${e?D`
        <div class="bilirubin-section">
          <bilirubin-chart
            .records="${this.archive.bilirubinRecords||[]}"
            @add-record="${this.handleAddBilirubinRecord}"
          ></bilirubin-chart>
        </div>
      `:``}

      <div class="plan-selector-section">
        <treatment-plan-selector></treatment-plan-selector>
      </div>

      <div class="guide-section">
        <div class="guide-title">
          <div class="guide-icon next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          治疗期间注意事项
        </div>
        <div class="guide-list">
          <div class="guide-item next">
            <div class="item-check next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">定期复查</div>
              <div class="item-desc">治疗结束后需定期进行肿瘤标志物和影像学复查</div>
            </div>
          </div>
          <div class="guide-item pending">
            <div class="item-check pending">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <div class="item-text">
              <div class="item-name">营养支持</div>
              <div class="item-desc">注意补充蛋白质，保持良好的营养状态</div>
            </div>
          </div>
        </div>
      </div>
    `}};M([A({type:Object})],gm.prototype,`archive`,void 0),M([A({type:Object})],gm.prototype,`disease`,void 0),gm=M([k(`treatment-tab`)],gm);var _m=class extends O{constructor(...e){super(...e),this.archive=null,this.disease=null,this.activeTab=`examination`,this.expandedGroups=new Set}static{this.styles=c`
    :host {
      display: block;
    }
    .guide-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .stage-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .stage-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .stage-icon.examination {
      background: #1890ff;
    }
    .stage-icon.treatment {
      background: #52c41a;
    }
    .stage-info {
      flex: 1;
    }
    .stage-label {
      font-size: 13px;
      color: #999;
      margin-bottom: 4px;
    }
    .stage-name {
      font-size: 22px;
      font-weight: 700;
      color: #333;
    }
    .tab-container {
      margin-top: 20px;
    }
    .tab-header {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 12px;
    }
    .tab-btn {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .tab-btn:hover {
      background: #f5f5f5;
    }
    .tab-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .tab-btn.examination.active {
      background: #1890ff;
    }
    .tab-btn.treatment.active {
      background: #52c41a;
    }
    .tab-content {
      min-height: 200px;
    }
    .empty-state {
      text-align: center;
      padding: 20px;
      color: #999;
    }
    .edit-btn {
      width: 100%;
      background: white;
      color: #1890ff;
      border: 2px solid #1890ff;
      padding: 12px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 16px;
      transition: all 0.2s;
    }
    .edit-btn:hover {
      background: #f0f9ff;
    }
    .cross-stage-section {
      margin-bottom: 20px;
    }
    .cross-stage-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cross-stage-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .cross-stage-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .task-group {
      background: white;
      border-radius: 10px;
      margin-bottom: 8px;
      border: 1px solid #e8e8e8;
      overflow: hidden;
    }
    .task-group:last-child {
      margin-bottom: 0;
    }
    .task-group-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      cursor: pointer;
      background: #fafafa;
      transition: background 0.2s;
    }
    .task-group-header:hover {
      background: #f0f0f0;
    }
    .task-group-icon {
      font-size: 16px;
    }
    .task-group-content {
      flex: 1;
    }
    .task-group-name {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
    .task-group-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }
    .task-group-time {
      font-size: 12px;
      color: #fa8c16;
      font-weight: 500;
    }
    .task-group-detail {
      font-size: 12px;
      color: #1890ff;
      cursor: pointer;
      text-decoration: none;
    }
    .task-group-detail:hover {
      text-decoration: underline;
    }
    .task-group-toggle {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    .task-group-toggle.expanded {
      transform: rotate(90deg);
    }
    .task-group-items {
      padding: 8px 14px 12px 44px;
    }
    .task-sub-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    .task-sub-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .task-sub-icon {
      font-size: 14px;
      margin-top: 2px;
    }
    .task-sub-content {
      flex: 1;
    }
    .task-sub-name {
      font-weight: 500;
      font-size: 13px;
      color: #333;
      margin-bottom: 2px;
    }
    .task-sub-desc {
      font-size: 12px;
      color: #666;
      line-height: 1.4;
    }
    .task-badge {
      display: inline-block;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 6px;
      font-weight: 500;
    }
    .task-badge.required {
      background: #fa8c16;
      color: white;
    }
    .task-badge.optional {
      background: #52c41a;
      color: white;
    }

    @media (max-width: 600px) {
      .guide-card {
        border-radius: 0;
        padding: 16px;
        box-shadow: none;
      }
      .stage-header {
        gap: 12px;
        margin-bottom: 16px;
      }
      .stage-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        font-size: 24px;
      }
      .stage-name {
        font-size: 18px;
      }
      .tab-container {
        margin-top: 16px;
      }
      .tab-header {
        gap: 6px;
        padding-bottom: 10px;
      }
      .tab-btn {
        padding: 10px 12px;
        font-size: 13px;
        border-radius: 8px;
      }
      .cross-stage-section {
        margin-bottom: 16px;
      }
      .cross-stage-title {
        font-size: 13px;
        margin-bottom: 10px;
      }
      .task-group {
        border-radius: 8px;
        border: none;
        background: #fafafa;
      }
      .task-group-header {
        padding: 10px 12px;
      }
      .task-group-name {
        font-size: 13px;
      }
      .task-group-items {
        padding: 6px 12px 10px 40px;
      }
      .task-sub-item {
        padding: 6px 0;
      }
      .task-sub-name {
        font-size: 12px;
      }
      .task-sub-desc {
        font-size: 11px;
      }
      .edit-btn {
        border-radius: 8px;
        margin-top: 12px;
      }
    }
  `}handleTabClick(e){this.activeTab=e}toggleGroup(e){this.expandedGroups.has(e)?this.expandedGroups.delete(e):this.expandedGroups.add(e),this.expandedGroups=new Set(this.expandedGroups)}getCrossStageTasks(){return[{id:`nutrition`,name:`保证营养状态`,icon:`🍎`,detailRoute:`#/nutrition-detail`,items:[{name:`白蛋白（ALB）`,desc:`白蛋白是反映营养状态的关键指标，正常值35-50 g/L，低于35g/L需加强营养支持。直接影响身体恢复能力和化疗耐受性。`,icon:`🥚`,required:!0},{name:`微量元素`,desc:`锌、硒、镁等微量元素参与多种生理过程。缺锌导致免疫力下降、伤口愈合慢；缺硒影响化疗效果和身体恢复。`,icon:`⚡`,required:!0}]},{id:`complications`,name:`小心并发症`,icon:`⚠️`,items:[{name:`门静脉癌栓`,desc:`门静脉癌栓是胆管癌常见并发症，会导致门静脉压力升高、脾功能亢进、消化道出血风险增加。`,icon:`🔴`,required:!0},{name:`梗阻性黄疸`,desc:`肿瘤阻塞胆管导致胆红素升高，需密切监测胆红素变化，必要时进行胆道引流。`,icon:`💛`,required:!0},{name:`胆道感染`,desc:`胆道梗阻易导致胆管炎，表现为发热、腹痛、黄疸加重。出现发热需及时就医。`,icon:`🤒`,required:!0}]}]}handleEdit(){this.dispatchEvent(new CustomEvent(`edit-stage`,{bubbles:!0,composed:!0}))}handleAddBilirubin(e){this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainage(e){this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdatePortalVeinThrombus(e){this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:e.detail}))}render(){if(!this.archive||!this.disease)return D`<div class="empty-state">加载中...</div>`;let e=this.archive.currentStage!==`treatment`;return D`
      <div class="guide-card">
        <div class="stage-header">
          <div class="stage-icon ${this.archive.currentStage}">
            ${e?`🔍`:`💊`}
          </div>
          <div class="stage-info">
            <div class="stage-label">当前阶段</div>
            <div class="stage-name">${e?`检查/等待治疗阶段`:`治疗阶段`}</div>
          </div>
        </div>

        <div class="cross-stage-section">
          <div class="cross-stage-title">
            <div class="cross-stage-icon" style="background: #fff2e6;">⚡</div>
            跨阶段核心任务（贯穿全程）
          </div>
          <div class="cross-stage-list">
            ${this.getCrossStageTasks().map(e=>D`
              <div class="task-group">
                <div class="task-group-header" @click="${()=>this.toggleGroup(e.id)}">
                  <div class="task-group-toggle ${this.expandedGroups.has(e.id)?`expanded`:``}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <div class="task-group-icon">${e.icon}</div>
                  <div class="task-group-content">
                    <div class="task-group-name">${e.name}</div>
                    <div class="task-group-meta">
                      ${e.detailRoute?D`
                        <span class="task-group-detail" @click="${t=>{t.stopPropagation(),window.location.hash=e.detailRoute}}">
                          查看详情 →
                        </span>
                      `:``}
                    </div>
                  </div>
                </div>
                ${this.expandedGroups.has(e.id)?D`
                  <div class="task-group-items">
                    ${e.items.map(e=>D`
                      <div class="task-sub-item">
                        <div class="task-sub-icon">${e.icon}</div>
                        <div class="task-sub-content">
                          <div class="task-sub-name">
                            ${e.name}
                            <span class="task-badge ${e.required?`required`:`optional`}">${e.required?`必做`:`可选`}</span>
                          </div>
                          <div class="task-sub-desc">${e.desc}</div>
                        </div>
                      </div>
                    `)}
                  </div>
                `:``}
              </div>
            `)}
          </div>
        </div>

        <div class="tab-container">
          <div class="tab-header">
            <button
              class="tab-btn examination ${this.activeTab===`examination`?`active`:``}"
              @click="${()=>this.handleTabClick(`examination`)}"
            >
              🔍 检查/等待治疗阶段
            </button>
            <button
              class="tab-btn treatment ${this.activeTab===`treatment`?`active`:``}"
              @click="${()=>this.handleTabClick(`treatment`)}"
            >
              💊 治疗阶段
            </button>
          </div>
          <div class="tab-content">
            ${this.activeTab===`examination`?D`
              <examination-tab
                .archive="${this.archive}"
                .disease="${this.disease}"
                @add-bilirubin="${this.handleAddBilirubin}"
                @add-drainage="${this.handleAddDrainage}"
                @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
              ></examination-tab>
            `:D`
              <treatment-tab
                .archive="${this.archive}"
                .disease="${this.disease}"
                @add-bilirubin="${this.handleAddBilirubin}"
              ></treatment-tab>
            `}
          </div>
        </div>

        <button class="edit-btn" @click="${this.handleEdit}">
          更新检查/治疗进度
        </button>
      </div>
    `}};M([A({type:Object})],_m.prototype,`archive`,void 0),M([A({type:Object})],_m.prototype,`disease`,void 0),M([j()],_m.prototype,`activeTab`,void 0),M([j()],_m.prototype,`expandedGroups`,void 0),_m=M([k(`stage-guide`)],_m);var vm=class extends O{constructor(...e){super(...e),this.archive=null}static{this.styles=c`
    :host {
      display: block;
    }
    .card {
      background: #1890ff;
      border-radius: 16px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.2s;
      color: white;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(24, 144, 255, 0.4);
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    .disease-icon {
      width: 48px;
      height: 48px;
      background: rgba(255,255,255,0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 600;
    }
    .card-date {
      font-size: 12px;
      opacity: 0.8;
      margin-top: 4px;
    }
    .card-stats {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-top: 12px;
      border-top: 1px solid rgba(255,255,255,0.2);
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      opacity: 0.9;
    }
    .stat-item svg {
      width: 16px;
      height: 16px;
    }
    .stage-badge {
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    @media (max-width: 600px) {
      .card {
        border-radius: 12px;
        padding: 16px;
      }
      .disease-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        font-size: 20px;
      }
      .card-title {
        font-size: 17px;
      }
      .card-date {
        font-size: 11px;
      }
      .card-stats {
        padding-top: 10px;
      }
      .stat-item {
        font-size: 12px;
      }
      .stage-badge {
        font-size: 11px;
        padding: 3px 10px;
      }
    }
  `}getDiseaseIcon(e){return{"hilar-cholangiocarcinoma":`🫀`}[e]||`📋`}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}handleClick(){this.archive&&(window.location.hash=`#/archive/${this.archive.id}`)}render(){if(!this.archive)return D``;let e=this.archive.currentStage===`examination`;return D`
      <div class="card" @click="${this.handleClick}">
        <div class="card-header">
          <div class="disease-icon">${this.getDiseaseIcon(this.archive.diseaseType)}</div>
          <div>
            <div class="card-title">${this.archive.diseaseName}</div>
            <div class="card-date">创建于 ${this.formatDate(this.archive.createdAt)}</div>
          </div>
        </div>
        <div class="card-stats">
          <div class="stage-badge">
            ${e?`🔍 检查阶段`:`💊 治疗阶段`}
          </div>
        </div>
      </div>
    `}};M([A({type:Object})],vm.prototype,`archive`,void 0),vm=M([k(`archive-card`)],vm);var ym=`canotion-patient-data`,bm=`canotion-articles`,xm=`canotion-archives`,Sm={name:``,age:null,gender:``,phone:``,idNumber:``};function Cm(){try{let e=localStorage.getItem(xm);if(!e)return!1;let t=JSON.parse(e);if(!Array.isArray(t)||t.length===0)return!1;let n=localStorage.getItem(ym),r=n?JSON.parse(n):{patientInfo:{...Sm},archives:[]},i=[],a=new Set;for(let e of t){if(!e.id)continue;let t=r.archives?.find(t=>t.id===e.id);t?i.push({...t,...e,bilirubinRecords:e.bilirubinRecords?.length>0?e.bilirubinRecords:t.bilirubinRecords||[],pathologyReport:e.pathologyReport||t.pathologyReport,completedExamIds:e.completedExamIds?.length>0?e.completedExamIds:t.completedExamIds||[],completedTreatmentIds:e.completedTreatmentIds?.length>0?e.completedTreatmentIds:t.completedTreatmentIds||[]}):i.push(e),a.add(e.id)}for(let e of r.archives||[])a.has(e.id)||i.push(e);let o={patientInfo:{...Sm,...r.patientInfo},archives:i};return localStorage.setItem(ym,JSON.stringify(o)),console.log(`[Storage Migration] 成功迁移 ${t.length} 个旧档案，合并后共 ${i.length} 个档案`),!0}catch(e){return console.error(`[Storage Migration] 迁移失败:`,e),!1}}var wm=class{constructor(){this.migrated=!1}load(){this.migrated||=(Cm(),!0);try{let e=localStorage.getItem(ym);if(e){let t=JSON.parse(e);return{patientInfo:{...Sm,...t.patientInfo},archives:t.archives||[]}}}catch(e){console.error(`Failed to load data from localStorage:`,e)}return{patientInfo:{...Sm},archives:[]}}save(e){try{localStorage.setItem(ym,JSON.stringify(e))}catch(e){console.error(`Failed to save data to localStorage:`,e)}}clear(){localStorage.removeItem(ym)}},Tm=class{load(){try{let e=localStorage.getItem(bm);if(e){let t=JSON.parse(e);return{articles:t.articles||[],lastUpdated:t.lastUpdated||new Date().toISOString()}}}catch(e){console.error(`Failed to load articles from localStorage:`,e)}return{articles:[],lastUpdated:new Date().toISOString()}}save(e){try{localStorage.setItem(bm,JSON.stringify(e))}catch(e){console.error(`Failed to save articles to localStorage:`,e)}}clear(){localStorage.removeItem(bm)}},Em=new wm,Dm=new Tm,Om=new class{constructor(){this.CURRENT_VERSION=`1.0.0`}exportAll(){let e=Em.load(),t=Dm.load(),n={version:this.CURRENT_VERSION,exportDate:new Date().toISOString(),patientData:{patientInfo:e.patientInfo,archives:e.archives},articles:{articles:t.articles,lastUpdated:t.lastUpdated}},r=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`canotion_backup_${new Date().toISOString().slice(0,19).replace(/[-:T]/g,``)}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}async importFromFile(e,t={}){let{mergeStrategy:n=`merge`}=t;try{let t=await e.text(),r=JSON.parse(t);if(!this.validateBackupData(r))return{success:!1,message:`无效的备份文件格式`};let i=0,a=0;if(r.patientData?.archives){let e=Em.load(),t=r.patientData.archives;switch(n){case`replace`:e.archives=t,i=t.length;break;case`skip-existing`:let n=new Set(e.archives.map(e=>e.id)),r=t.filter(e=>!n.has(e.id));e.archives=[...e.archives,...r],i=r.length;break;default:let a=new Map(e.archives.map(e=>[e.id,e]));for(let e of t)a.set(e.id,e),i++;e.archives=Array.from(a.values());break}r.patientData.patientInfo&&(e.patientInfo={...e.patientInfo,...r.patientData.patientInfo}),Em.save(e)}if(r.articles?.articles){let e=Dm.load(),t=r.articles.articles;switch(n){case`replace`:e.articles=t,a=t.length;break;case`skip-existing`:let n=new Set(e.articles.map(e=>e.id)),r=t.filter(e=>!n.has(e.id));e.articles=[...e.articles,...r],a=r.length;break;default:let i=new Map(e.articles.map(e=>[e.id,e]));for(let e of t)i.set(e.id,e),a++;e.articles=Array.from(i.values());break}e.lastUpdated=new Date().toISOString(),Dm.save(e)}return{success:!0,message:`成功导入 ${i} 个档案和 ${a} 篇文章`,importedArchives:i,importedArticles:a}}catch(e){return{success:!1,message:`导入失败: ${e instanceof Error?e.message:`未知错误`}`}}}validateBackupData(e){if(!e||typeof e!=`object`)return!1;let t=e;return!(!t.version||typeof t.version!=`string`||!t.exportDate||typeof t.exportDate!=`string`||t.patientData&&!Array.isArray(t.patientData.archives)||t.articles&&!Array.isArray(t.articles.articles))}getDataSummary(){let e=Em.load(),t=Dm.load();return{archiveCount:e.archives.length,articleCount:t.articles.length,lastUpdated:t.lastUpdated}}},km=class extends O{constructor(...e){super(...e),this.archives=[],this.showSelector=!1,this.showImportDialog=!1,this.importResult=null,this.isImporting=!1}static{this.styles=c`
    :host {
      display: block;
    }
    .header {
      background: white;
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header h1 {
      color: #333;
      font-size: 28px;
      margin-bottom: 8px;
    }
    .header p {
      color: #666;
      font-size: 14px;
    }
    .new-archive-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1890ff;
      color: white;
      border: none;
      padding: 14px 28px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .new-archive-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
    }
    .archives-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .section-title {
      color: #333;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .archives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }
    .empty-state {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    .empty-state svg {
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }
    .disclaimer-banner {
      background: #fff7e6;
      border: 1px solid #ffd591;
      border-radius: 12px;
      padding: 14px 16px;
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .disclaimer-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .disclaimer-content {
      flex: 1;
    }
    .disclaimer-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 4px;
    }
    .disclaimer-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .privacy-banner {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
      padding: 14px 16px;
      margin-top: 12px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .privacy-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .privacy-content {
      flex: 1;
    }
    .privacy-title {
      font-size: 14px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 4px;
    }
    .privacy-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }

    .backup-section {
      display: flex;
      gap: 12px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .backup-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f5f5f5;
      color: #666;
      border: 1px solid #d9d9d9;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .backup-btn:hover {
      background: #e6f7ff;
      border-color: #1890ff;
      color: #1890ff;
    }
    .backup-btn.export {
      background: #e6f7ff;
      border-color: #1890ff;
      color: #1890ff;
    }
    .backup-btn.export:hover {
      background: #1890ff;
      color: white;
    }

    /* 导入对话框 */
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    }
    .dialog {
      background: white;
      border-radius: 16px;
      padding: 24px;
      width: 90%;
      max-width: 480px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .dialog-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #333;
    }
    .file-input-wrapper {
      border: 2px dashed #d9d9d9;
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      margin-bottom: 16px;
    }
    .file-input-wrapper:hover {
      border-color: #1890ff;
      background: #f0f9ff;
    }
    .file-input-wrapper.has-file {
      border-color: #52c41a;
      background: #f6ffed;
    }
    .file-input {
      display: none;
    }
    .file-input-label {
      cursor: pointer;
      color: #666;
    }
    .file-input-label strong {
      color: #1890ff;
    }
    .merge-strategy {
      margin-bottom: 16px;
    }
    .merge-strategy label {
      display: block;
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .merge-strategy select {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      font-size: 14px;
      background: white;
    }
    .dialog-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
    .dialog-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    .dialog-btn.cancel {
      background: #f5f5f5;
      color: #666;
    }
    .dialog-btn.cancel:hover {
      background: #e8e8e8;
    }
    .dialog-btn.confirm {
      background: #1890ff;
      color: white;
    }
    .dialog-btn.confirm:hover {
      background: #40a9ff;
    }
    .dialog-btn.confirm:disabled {
      background: #d9d9d9;
      cursor: not-allowed;
    }
    .import-result {
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .import-result.success {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .import-result.error {
      background: #fff2f0;
      border: 1px solid #ffccc7;
    }
    .import-result-title {
      font-weight: 600;
      margin-bottom: 8px;
    }
    .import-result.success .import-result-title {
      color: #52c41a;
    }
    .import-result.error .import-result-title {
      color: #ff4d4f;
    }
    .import-result-message {
      font-size: 14px;
      color: #666;
    }
    .import-stats {
      display: flex;
      gap: 16px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #d9d9d9;
    }
    .import-stat {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: #666;
    }
    .import-stat-value {
      font-weight: 600;
      color: #1890ff;
    }

    @media (max-width: 600px) {
      .header {
        background: transparent;
        border-radius: 0;
        padding: 16px;
        margin-bottom: 12px;
        box-shadow: none;
      }
      .header h1 {
        font-size: 22px;
      }
      .new-archive-btn {
        padding: 12px 20px;
        font-size: 15px;
      }
      .archives-section {
        background: transparent;
        border-radius: 0;
        padding: 12px;
        box-shadow: none;
      }
      .archives-grid {
        gap: 12px;
      }
      .disclaimer-banner,
      .privacy-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 12px;
        border: none;
      }
      .disclaimer-banner {
        background: #fffbe6;
      }
      .privacy-banner {
        background: #f6ffed;
      }
      .backup-section {
        flex-direction: column;
      }
      .backup-btn {
        width: 100%;
        justify-content: center;
      }
      .dialog {
        width: 95%;
        padding: 20px;
      }
    }
  `}handleCreateArchive(){this.showSelector=!0}handleDiseaseSelect(e){let t=e.detail;this.showSelector=!1,t&&this.dispatchEvent(new CustomEvent(`create-archive`,{bubbles:!0,composed:!0,detail:t}))}handleSelectorClose(){this.showSelector=!1}handleExport(){Om.exportAll()}handleImportClick(){this.showImportDialog=!0,this.importResult=null}handleImportDialogClose(){this.showImportDialog=!1,this.importResult=null}async handleFileSelect(e){let t=e.target,n=t.files?.[0];if(!n)return;this.isImporting=!0;let r=this.shadowRoot?.querySelector(`.merge-strategy select`)?.value||`merge`,i=await Om.importFromFile(n,{mergeStrategy:r});this.importResult=i,this.isImporting=!1,i.success&&this.dispatchEvent(new CustomEvent(`data-imported`,{bubbles:!0,composed:!0,detail:i})),t.value=``}handleDragOver(e){e.preventDefault(),e.currentTarget.classList.add(`drag-over`)}handleDragLeave(e){e.preventDefault(),e.currentTarget.classList.remove(`drag-over`)}async handleDrop(e){e.preventDefault(),e.currentTarget.classList.remove(`drag-over`);let t=e.dataTransfer?.files[0];if(!t)return;if(!t.name.endsWith(`.json`)){this.importResult={success:!1,message:`请选择 JSON 格式的备份文件`};return}this.isImporting=!0;let n=this.shadowRoot?.querySelector(`.merge-strategy select`)?.value||`merge`,r=await Om.importFromFile(t,{mergeStrategy:n});this.importResult=r,this.isImporting=!1,r.success&&this.dispatchEvent(new CustomEvent(`data-imported`,{bubbles:!0,composed:!0,detail:r}))}render(){return D`
      <div class="header">
        <h1>🩺 癌症患者周期向导</h1>
        <p>根据公开资料，提供诊疗阶段提示</p>
        <button class="new-archive-btn" @click="${this.handleCreateArchive}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          新建档案
        </button>
        <div class="disclaimer-banner">
          <div class="disclaimer-icon">ℹ️</div>
          <div class="disclaimer-content">
            <div class="disclaimer-title">免责声明</div>
            <div class="disclaimer-text">
              本项目是我在陪伴母亲治疗肝门胆管癌过程中开发的。所有数据来源于个人诊疗经历和公开资料，<strong>不构成专业医疗意见</strong>。请务必以主治医生的建议为准，本工具仅供参考辅助，甄别使用。
            </div>
          </div>
        </div>
        <div class="privacy-banner">
          <div class="privacy-icon">🔒</div>
          <div class="privacy-content">
            <div class="privacy-title">隐私保护说明</div>
            <div class="privacy-text">
              <strong>您的隐私数据仅存储在本地浏览器中</strong>，不会上传到任何服务器。包括：档案信息、胆红素记录、PTCD引流量等所有个人健康数据。请放心使用，但请注意清除浏览器数据会导致档案丢失，建议定期备份重要数据。
            </div>
          </div>
        </div>

        <div class="backup-section">
          <button class="backup-btn export" @click="${this.handleExport}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            导出备份
          </button>
          <button class="backup-btn" @click="${this.handleImportClick}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            导入恢复
          </button>
        </div>
      </div>

      <div class="archives-section">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1890ff" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          我的档案
        </div>

        ${this.archives.length===0?D`
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
            <p>还没有档案，点击上方按钮创建第一份档案</p>
          </div>
        `:D`
          <div class="archives-grid">
            ${this.archives.map(e=>D`
              <archive-card .archive="${e}"></archive-card>
            `)}
          </div>
        `}
      </div>

      ${this.showSelector?D`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleSelectorClose}"
        ></disease-selector>
      `:``}

      ${this.showImportDialog?D`
        <div class="dialog-overlay" @click="${this.handleImportDialogClose}">
          <div class="dialog" @click="${e=>e.stopPropagation()}">
            <div class="dialog-title">📥 导入备份数据</div>

            ${this.importResult?D`
              <div class="import-result ${this.importResult.success?`success`:`error`}">
                <div class="import-result-title">
                  ${this.importResult.success?`✅ 导入成功`:`❌ 导入失败`}
                </div>
                <div class="import-result-message">${this.importResult.message}</div>
                ${this.importResult.success&&(this.importResult.importedArchives!==void 0||this.importResult.importedArticles!==void 0)?D`
                  <div class="import-stats">
                    ${this.importResult.importedArchives===void 0?``:D`
                      <div class="import-stat">
                        <span>档案:</span>
                        <span class="import-stat-value">${this.importResult.importedArchives}</span>
                      </div>
                    `}
                    ${this.importResult.importedArticles===void 0?``:D`
                      <div class="import-stat">
                        <span>文章:</span>
                        <span class="import-stat-value">${this.importResult.importedArticles}</span>
                      </div>
                    `}
                  </div>
                `:``}
              </div>
            `:``}

            <div class="merge-strategy">
              <label>合并策略</label>
              <select ?disabled="${this.isImporting||!!this.importResult}">
                <option value="merge">智能合并（相同ID覆盖，不同ID追加）</option>
                <option value="skip-existing">跳过已存在（保留现有数据）</option>
                <option value="replace">完全替换（清空现有数据）</option>
              </select>
            </div>

            <div
              class="file-input-wrapper"
              @dragover="${this.handleDragOver}"
              @dragleave="${this.handleDragLeave}"
              @drop="${this.handleDrop}"
            >
              <input
                type="file"
                id="import-file"
                class="file-input"
                accept=".json"
                ?disabled="${this.isImporting}"
                @change="${this.handleFileSelect}"
              >
              <label class="file-input-label" for="import-file">
                ${this.isImporting?D`
                  <div>⏳ 正在导入...</div>
                `:D`
                  <div>📁 点击选择或拖拽文件到此处</div>
                  <div style="font-size: 12px; margin-top: 8px; color: #999;">支持 .json 格式的备份文件</div>
                `}
              </label>
            </div>

            <div class="dialog-actions">
              <button class="dialog-btn cancel" @click="${this.handleImportDialogClose}">
                ${this.importResult?.success?`关闭`:`取消`}
              </button>
            </div>
          </div>
        </div>
      `:``}
    `}};M([A({type:Array})],km.prototype,`archives`,void 0),M([j()],km.prototype,`showSelector`,void 0),M([j()],km.prototype,`showImportDialog`,void 0),M([j()],km.prototype,`importResult`,void 0),M([j()],km.prototype,`isImporting`,void 0),km=M([k(`archive-list-page`)],km);var Am=class extends O{constructor(...e){super(...e),this.archive=null,this.disease=null,this.localSuspectDocsSaved=!1,this.showBilirubinInput=!1,this.inputBilirubinDate=``,this.inputBilirubinTotal=``}static{this.styles=c`
    :host {
      display: block;
    }
    .archive-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header-top {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }
    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .archive-icon {
      width: 56px;
      height: 56px;
      background: rgba(255,255,255,0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .archive-info {
      flex: 1;
      color: white;
    }
    .archive-name {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .archive-date {
      font-size: 14px;
      opacity: 0.8;
    }
    .delete-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .delete-btn:hover {
      background: rgba(255,100,100,0.4);
    }
    .guide-section {
      margin-top: 20px;
    }
    .stage-prompt {
      background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
      border: 2px solid rgba(102,126,234,0.3);
      border-radius: 16px;
      padding: 32px;
      text-align: center;
    }
    .stage-prompt-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin: 0 auto 16px;
    }
    .stage-prompt-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .stage-prompt-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .set-stage-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 14px 32px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .set-stage-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    .suspect-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    .suspect-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .suspect-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .suspect-info {
      flex: 1;
    }
    .suspect-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .suspect-subtitle {
      font-size: 14px;
      color: #ff5722;
      font-weight: 500;
    }
    .suspect-tips {
      background: #fff8e6;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .suspect-tips-title {
      font-size: 14px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 12px;
    }
    .suspect-tip-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      color: #333;
      line-height: 1.5;
    }
    .suspect-tip-icon {
      color: #ff5722;
      flex-shrink: 0;
    }
    .suspect-department {
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      color: white;
      padding: 16px;
      border-radius: 12px;
      text-align: center;
    }
    .suspect-department-label {
      font-size: 13px;
      opacity: 0.9;
      margin-bottom: 4px;
    }
    .suspect-department-name {
      font-size: 18px;
      font-weight: 600;
    }
    .suspect-action {
      margin-top: 16px;
    }
    .suspect-docs-checkbox {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .suspect-docs-checkbox:hover {
      background: #e8e8e8;
    }
    .suspect-docs-checkbox.checked {
      background: #e6f7ff;
    }
    .suspect-docs-checkbox input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .suspect-docs-text {
      flex: 1;
      font-size: 14px;
      color: #333;
    }
    .suspect-next-btn {
      width: 100%;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      color: white;
      border: none;
      padding: 14px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .suspect-next-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
    }
    .suspect-next-btn:disabled {
      background: #d9d9d9;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    .bilirubin-input-section {
      background: #fff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      border: 1px solid #e8e8e8;
    }
    .bilirubin-input-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bilirubin-input-row {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }
    .bilirubin-input-group {
      flex: 1;
    }
    .bilirubin-input-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .bilirubin-input-field {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    .bilirubin-input-field:focus {
      border-color: #1890ff;
    }
    .bilirubin-save-btn {
      background: #1890ff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
    }
    .bilirubin-save-btn:hover {
      background: #40a9ff;
    }
    .bilirubin-result {
      margin-top: 16px;
      padding: 14px;
      border-radius: 10px;
    }
    .bilirubin-result.safe {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .bilirubin-result.warning {
      background: #fffbe6;
      border: 1px solid #ffe58f;
    }
    .bilirubin-result.danger {
      background: #fff1f0;
      border: 1px solid #ffccc7;
    }
    .bilirubin-result.critical {
      background: #ffccc7;
      border: 1px solid #ff4d4f;
    }
    .privacy-notice {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
      padding: 12px 16px;
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      color: #52c41a;
    }
    .privacy-notice-icon {
      font-size: 18px;
    }
    .bilirubin-result-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .bilirubin-result-icon {
      font-size: 18px;
    }
    .bilirubin-result-level {
      font-size: 14px;
      font-weight: 600;
    }
    .bilirubin-result.safe .bilirubin-result-level {
      color: #52c41a;
    }
    .bilirubin-result.warning .bilirubin-result-level {
      color: #faad14;
    }
    .bilirubin-result.danger .bilirubin-result-level {
      color: #ff7a45;
    }
    .bilirubin-result.critical .bilirubin-result-level {
      color: #ff4d4f;
    }
    .bilirubin-result-value {
      font-size: 13px;
      color: #666;
      margin-bottom: 8px;
    }
    .bilirubin-result-advice {
      font-size: 13px;
      color: #333;
      line-height: 1.6;
    }

    @media (max-width: 600px) {
      .archive-header {
        border-radius: 0;
        padding: 16px;
        margin-bottom: 12px;
        box-shadow: none;
      }
      .header-top {
        gap: 12px;
        margin-bottom: 12px;
      }
      .archive-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        font-size: 24px;
      }
      .archive-name {
        font-size: 20px;
      }
      .back-btn,
      .delete-btn {
        width: 36px;
        height: 36px;
        border-radius: 8px;
      }
      .guide-section {
        margin-top: 12px;
      }
      .stage-prompt {
        border-radius: 0;
        padding: 20px 16px;
        border: none;
        background: linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%);
      }
      .stage-prompt-icon {
        width: 56px;
        height: 56px;
        font-size: 28px;
      }
      .stage-prompt-title {
        font-size: 18px;
      }
      .suspect-section {
        border-radius: 0;
        padding: 16px;
        box-shadow: none;
        margin-top: 12px;
      }
      .suspect-header {
        gap: 12px;
        margin-bottom: 16px;
      }
      .suspect-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        font-size: 24px;
      }
      .suspect-title {
        font-size: 18px;
      }
      .suspect-tips {
        border-radius: 8px;
        padding: 12px;
      }
      .suspect-department {
        border-radius: 8px;
        padding: 14px;
      }
      .suspect-docs-checkbox {
        padding: 12px;
        border-radius: 8px;
      }
      .suspect-next-btn {
        border-radius: 8px;
      }
      .bilirubin-input-section {
        border-radius: 8px;
        padding: 12px;
        border: none;
        background: #fafafa;
      }
      .bilirubin-input-row {
        flex-direction: column;
        gap: 10px;
      }
      .bilirubin-save-btn {
        width: 100%;
      }
      .bilirubin-result {
        border-radius: 8px;
        border: none;
      }
      .privacy-notice {
        border-radius: 8px;
        border: none;
        padding: 10px 12px;
      }
    }
  `}hasCompletedItems(){if(!this.archive)return!1;let e=this.archive.completedExamIds||[],t=this.archive.completedTreatmentIds||[];return e.length>0||t.length>0}getDiseaseIcon(e){return{"hilar-cholangiocarcinoma":`🫀`}[e]||`📋`}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}getBilirubinAdvice(e){return e<50?{level:`✅ 达标`,class:`safe`,advice:`胆红素已降至化疗安全范围，可以考虑进行化疗。请继续监测。`}:e<=85?{level:`🟡 接近达标`,class:`warning`,advice:`胆红素已接近安全范围（<50 μmol/L），但仍需继续降至50以下才能进行化疗。`}:e<=170?{level:`🟠 明显升高`,class:`danger`,advice:`胆红素明显升高，需要密切关注。建议咨询医生考虑进行胆道引流治疗（PTCD/ERCP支架），几乎所有治疗都要求待胆红素降至50 μmol/L以下，请重点关注。`}:e<=200?{level:`🔴 重度黄疸`,class:`critical`,advice:`胆红素重度升高（>170 μmol/L）。根据诊疗指南，建议进行术前胆道引流（PTCD或ERCP支架）降低胆红素水平。胆红素需降至50 μmol/L以下才能考虑化疗或手术。`}:{level:`🚨 极高危`,class:`critical`,advice:`胆红素极高（>200 μmol/L）！此时不宜直接进行手术或化疗，风险极高。必须先进行PTCD外引流或支架置入内引流，待胆红素显著下降后再评估治疗方案。请立即就医！`}}handleBack(){this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}handleDelete(){this.dispatchEvent(new CustomEvent(`delete-archive`,{bubbles:!0,composed:!0}))}handleEditStage(){this.dispatchEvent(new CustomEvent(`edit-stage`,{bubbles:!0,composed:!0}))}handleAddBilirubin(e){this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainage(e){this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdatePortalVeinThrombus(e){this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdateSuspectDocsSaved(e){this.dispatchEvent(new CustomEvent(`update-suspect-docs-saved`,{bubbles:!0,composed:!0,detail:e.detail}))}handleDocsSavedChange(e){let t=e.target.checked;this.localSuspectDocsSaved=t,this.handleUpdateSuspectDocsSaved(new CustomEvent(`update-suspect-docs-saved`,{bubbles:!0,composed:!0,detail:{suspectDocsSaved:t}}))}handleConfirmSuspectStage(){this.dispatchEvent(new CustomEvent(`confirm-suspect-stage`,{bubbles:!0,composed:!0}))}handleShowBilirubinInput(){this.showBilirubinInput=!this.showBilirubinInput,this.showBilirubinInput&&(this.inputBilirubinDate=new Date().toISOString().split(`T`)[0],this.inputBilirubinTotal=``)}handleBilirubinDateChange(e){this.inputBilirubinDate=e.target.value}handleBilirubinTotalChange(e){this.inputBilirubinTotal=e.target.value}handleSaveBilirubin(){if(!this.inputBilirubinDate||!this.inputBilirubinTotal)return;let e=parseFloat(this.inputBilirubinTotal)||0;if(e<=0)return;let t={id:Date.now().toString(),date:this.inputBilirubinDate,total:e,direct:0,indirect:0,unit:`μmol/L`};this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:t})),this.showBilirubinInput=!1}render(){if(!this.archive||!this.disease)return D`<div>加载中...</div>`;let e=this.hasCompletedItems(),t=this.archive.currentStage===`suspect`,n=this.disease.suspectStageInfo,r=this.localSuspectDocsSaved||this.archive.suspectDocsSaved;return D`
      <div class="archive-header">
        <div class="header-top">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="archive-icon">${this.getDiseaseIcon(this.archive.diseaseType)}</div>
          <div class="archive-info">
            <div class="archive-name">${this.archive.diseaseName}</div>
            <div class="archive-date">创建于 ${this.formatDate(this.archive.createdAt)}</div>
          </div>
          <button class="delete-btn" @click="${this.handleDelete}" title="删除档案">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
        <div class="privacy-notice">
          <span class="privacy-notice-icon">🔒</span>
          <span>本档案所有数据仅存储在您的设备本地，不会上传到服务器</span>
        </div>
      </div>

      ${t&&n?D`
        <div class="suspect-section">
          <div class="suspect-header">
            <div class="suspect-icon">⚠️</div>
            <div class="suspect-info">
              <div class="suspect-title">${n.title}</div>
              <div class="suspect-subtitle">请按照以下提示做好准备</div>
            </div>
          </div>

          <div class="suspect-tips">
            <div class="suspect-tips-title">📋 需要完成的事项</div>
            ${n.tips.map(e=>D`
              <div class="suspect-tip-item">
                <span class="suspect-tip-icon">•</span>
                <span>${e}</span>
              </div>
            `)}
          </div>

          <div class="bilirubin-input-section">
            <div class="bilirubin-input-title">
              💉 胆红素指标（第一时间录入）
              <span style="font-size: 12px; color: #ff4d4f; font-weight: normal;">（后续所有治疗都必须在胆红素50以下才能进行）</span>
            </div>

            ${this.showBilirubinInput?D`
              <div class="bilirubin-input-row">
                <div class="bilirubin-input-group">
                  <div class="bilirubin-input-label">日期</div>
                  <input
                    type="date"
                    class="bilirubin-input-field"
                    .value="${this.inputBilirubinDate}"
                    @input="${this.handleBilirubinDateChange}"
                  />
                </div>
                <div class="bilirubin-input-group">
                  <div class="bilirubin-input-label">总胆红素 (μmol/L)</div>
                  <input
                    type="number"
                    class="bilirubin-input-field"
                    placeholder="如：85"
                    .value="${this.inputBilirubinTotal}"
                    @input="${this.handleBilirubinTotalChange}"
                  />
                </div>
                <button class="bilirubin-save-btn" @click="${this.handleSaveBilirubin}">保存</button>
              </div>
            `:D`
              <button
                class="suspect-next-btn"
                style="background: #1890ff; margin-top: 0;"
                @click="${this.handleShowBilirubinInput}"
              >
                ${this.archive?.bilirubinRecords&&this.archive.bilirubinRecords.length>0?`📊 录入新胆红素数据`:`💉 录入胆红素指标`}
              </button>
            `}

            ${this.archive?.bilirubinRecords&&this.archive.bilirubinRecords.length>0?D`
              ${(()=>{let e=[...this.archive.bilirubinRecords].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())[0],t=this.getBilirubinAdvice(e.total);return D`
                  <div class="bilirubin-result ${t.class}">
                    <div class="bilirubin-result-header">
                      <span class="bilirubin-result-icon">${e.total<50?`✅`:e.total<=85?`🟡`:e.total<=170?`🟠`:`🔴`}</span>
                      <span class="bilirubin-result-level">${t.level}</span>
                    </div>
                    <div class="bilirubin-result-value">
                      最新胆红素：${e.total} μmol/L（${new Date(e.date).toLocaleDateString(`zh-CN`)}）
                    </div>
                    <div class="bilirubin-result-advice">${t.advice}</div>
                  </div>
                `})()}
            `:``}
          </div>

          <div class="suspect-department">
            <div class="suspect-department-label">推荐就诊科室</div>
            <div class="suspect-department-name">${n.recommendDepartment}</div>
          </div>

          <div class="suspect-action">
            <label class="suspect-docs-checkbox ${r?`checked`:``}">
              <input
                type="checkbox"
                .checked="${r}"
                @change="${this.handleDocsSavedChange}"
              />
              <span class="suspect-docs-text">我已确认保存好所有资料</span>
            </label>
            <button
              class="suspect-next-btn"
              ?disabled="${!r}"
              @click="${this.handleConfirmSuspectStage}"
            >
              资料已准备好，前往设置当前阶段
            </button>
          </div>
        </div>
      `:e?D`
        <div class="guide-section">
          <stage-guide
            .archive="${this.archive}"
            .disease="${this.disease}"
            @edit-stage="${this.handleEditStage}"
            @add-bilirubin="${this.handleAddBilirubin}"
            @add-drainage="${this.handleAddDrainage}"
            @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
          ></stage-guide>
        </div>
      `:D`
        <div class="stage-prompt">
          <div class="stage-prompt-icon">🔍</div>
          <div class="stage-prompt-title">设置诊疗阶段</div>
          <div class="stage-prompt-desc">
            请选择您目前已完成的检查和治疗项目<br>
            系统将根据您的选择判断当前所处阶段
          </div>
          <button class="set-stage-btn" @click="${this.handleEditStage}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            设置阶段
          </button>
        </div>
      `}
    `}};M([A({type:Object})],Am.prototype,`archive`,void 0),M([A({type:Object})],Am.prototype,`disease`,void 0),M([j()],Am.prototype,`localSuspectDocsSaved`,void 0),M([j()],Am.prototype,`showBilirubinInput`,void 0),M([j()],Am.prototype,`inputBilirubinDate`,void 0),M([j()],Am.prototype,`inputBilirubinTotal`,void 0),Am=M([k(`archive-detail-page`)],Am);var jm=class extends O{static{this.styles=c`
    :host {
      display: block;
    }
    .page-container {
      padding: 20px;
    }
    .page-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }
    .back-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: #e8e8e8;
    }
    .page-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .content-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .content-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .content-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #fa8c16 0%, #ff7a45 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .content-title-group {
      flex: 1;
    }
    .content-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .content-subtitle {
      font-size: 13px;
      color: #999;
    }
    .warning-banner {
      background: linear-gradient(135deg, #fff2e6 0%, #fff7e6 100%);
      border: 1px solid #ffb977;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 20px;
    }
    .warning-banner-title {
      font-size: 15px;
      font-weight: 600;
      color: #d46b08;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .warning-banner-icon {
      font-size: 20px;
    }
    .warning-banner-content {
      font-size: 14px;
      color: #666;
      line-height: 1.7;
    }
    .key-indicators {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .indicator-card {
      background: #fafafa;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      border: 1px solid #e8e8e8;
    }
    .indicator-card:last-child {
      margin-bottom: 0;
    }
    .indicator-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    .indicator-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .indicator-icon.albumin {
      background: #e6f7ff;
    }
    .indicator-icon.mineral {
      background: #f6ffed;
    }
    .indicator-name {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .indicator-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .indicator-values {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .value-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
    }
    .value-tag.normal {
      background: #f6ffed;
      color: #52c41a;
      border: 1px solid #b7eb8f;
    }
    .value-tag.low {
      background: #fff1f0;
      color: #ff4d4f;
      border: 1px solid #ffccc7;
    }
    .relationship-section {
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .relationship-title {
      font-size: 15px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .relationship-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #e6f7e6;
    }
    .relationship-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .relationship-icon {
      font-size: 16px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .relationship-text {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .relationship-text strong {
      color: #52c41a;
    }
    .tips-section {
      background: #fff8e6;
      border: 1px solid #ffe58f;
      border-radius: 12px;
      padding: 16px;
    }
    .tips-title {
      font-size: 15px;
      font-weight: 600;
      color: #d48806;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tip-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
    }
    .tip-item:last-child {
      padding-bottom: 0;
    }
    .tip-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #d48806;
      flex-shrink: 0;
      margin-top: 7px;
    }
    .tip-text {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .important-note {
      margin-top: 20px;
      padding: 16px;
      background: #fff1f0;
      border-radius: 12px;
      border: 1px solid #ffccc7;
    }
    .important-note-title {
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .important-note-content {
      font-size: 13px;
      color: #666;
      line-height: 1.7;
    }
  `}handleBack(){window.history.back()}render(){return D`
      <div class="page-container">
        <div class="page-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="page-title">保证营养状态</span>
        </div>

        <div class="content-container">
          <div class="content-header">
            <div class="content-icon">🍎</div>
            <div class="content-title-group">
              <div class="content-title">营养状态准备</div>
              <div class="content-subtitle">化疗前的身体基础条件</div>
            </div>
          </div>

          <div class="warning-banner">
            <div class="warning-banner-title">
              <div class="warning-banner-icon">⚠️</div>
              化疗前重点关注指标
            </div>
            <div class="warning-banner-content">
              化疗期间身体消耗大，对营养状态要求更高。<strong>白蛋白</strong>和<strong>微量元素</strong>是评估营养状态的关键指标，直接影响身体的<strong>恢复能力</strong>和<strong>化疗耐受性</strong>。
            </div>
          </div>

          <div class="key-indicators">
            <div class="section-title">
              <span>🔬</span>
              重点关注指标
            </div>

            <div class="indicator-card">
              <div class="indicator-header">
                <div class="indicator-icon albumin">🥚</div>
                <div class="indicator-name">白蛋白（ALB）</div>
              </div>
              <div class="indicator-desc">
                白蛋白是维持机体正常生理功能的重要蛋白质。化疗期间蛋白质消耗增加，低白蛋白会导致：
                <br>• 身体修复能力下降
                <br>• 化疗耐受性降低
                <br>• 感染风险增加
              </div>
              <div class="indicator-values">
                <span class="value-tag normal">正常值：35-50 g/L</span>
                <span class="value-tag low">⚠️ 低于35需警惕</span>
              </div>
            </div>

            <div class="indicator-card">
              <div class="indicator-header">
                <div class="indicator-icon mineral">⚡</div>
                <div class="indicator-name">微量元素</div>
              </div>
              <div class="indicator-desc">
                微量元素在体内含量虽少，但参与多种重要生理过程。化疗患者常见的微量元素缺乏包括：
                <br>• <strong>锌（Zn）</strong>：参与免疫功能，缺锌会导致伤口愈合慢、免疫力下降
                <br>• <strong>硒（Se）</strong>：抗氧化作用，缺硒会影响化疗效果和身体恢复
                <br>• <strong>镁（Mg）</strong>：参与能量代谢，缺镁会导致乏力、食欲下降
              </div>
              <div class="indicator-values">
                <span class="value-tag normal">锌：11-24 μmol/L</span>
                <span class="value-tag normal">硒：0.6-1.2 μg/mL</span>
                <span class="value-tag normal">镁：0.6-1.2 mmol/L</span>
              </div>
            </div>
          </div>

          <div class="relationship-section">
            <div class="relationship-title">
              <span>📊</span>
              与身体情况及化疗耐受性的关系
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">💪</span>
              <div class="relationship-text">
                <strong>营养状态 → 身体储备</strong><br>
                良好的营养状态意味着身体有充足的蛋白质和微量元素储备，能更好地承受化疗带来的副作用。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">🛡️</span>
              <div class="relationship-text">
                <strong>白蛋白水平 → 免疫力</strong><br>
                白蛋白不仅是营养指标，也与免疫力密切相关。低白蛋白提示身体处于消耗状态，免疫力低下。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">💊</span>
              <div class="relationship-text">
                <strong>微量元素 → 药物代谢</strong><br>
                微量元素参与药物代谢过程。缺乏会影响化疗药物的疗效和毒性反应。
              </div>
            </div>
            <div class="relationship-item">
              <span class="relationship-icon">⚕️</span>
              <div class="relationship-text">
                <strong>综合评估 → 治疗决策</strong><br>
                医生会根据白蛋白和微量元素水平综合评估患者的营养状态和治疗耐受性，必要时先进行营养支持治疗。
              </div>
            </div>
          </div>

          <div class="tips-section">
            <div class="tips-title">
              <span>💡</span>
              营养补充建议
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>优质蛋白摄入</strong>：每天摄入鸡蛋、牛奶、鱼肉、豆腐等优质蛋白，有助于提升白蛋白水平</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>少量多餐</strong>：化疗期间胃口可能较差，建议少量多餐，保证营养摄入</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>补充微量元素</strong>：可适当食用富含锌、硒的食物，如海鲜、坚果等，必要时在医生指导下补充</div>
            </div>
            <div class="tip-item">
              <div class="tip-bullet"></div>
              <div class="tip-text"><strong>定期监测</strong>：化疗期间定期复查白蛋白和微量元素，及时发现并纠正营养缺乏</div>
            </div>
          </div>

          <div class="important-note">
            <div class="important-note-title">
              <span>⚠️</span>
              门静脉癌栓患者特别提示
            </div>
            <div class="important-note-content">
              若存在门静脉癌栓，饮食需特别注意避免消化道出血风险：
              <br>• 禁止进食硬质食物（坚果、骨头、脆皮等）
              <br>• 严禁过烫食物，温度适宜后再进食
              <br>• 避免过饱，采用少食多餐
              <br>• 选择软烂、易消化的食物
              <br>如有出血风险，请务必与主治医生沟通制定合适的营养方案。
            </div>
          </div>
        </div>
      </div>
    `}};jm=M([k(`nutrition-detail-page`)],jm);var Mm=[{name:`Ki-67`,fullName:`Ki-67 增殖指数`},{name:`P53`,fullName:`P53 蛋白`},{name:`CK7`,fullName:`细胞角蛋白7`},{name:`CK19`,fullName:`细胞角蛋白19`},{name:`CK20`,fullName:`细胞角蛋白20`},{name:`CEA`,fullName:`癌胚抗原`},{name:`CA19-9`,fullName:`糖类抗原19-9`},{name:`MUC-1`,fullName:`黏蛋白1`},{name:`MUC-5AC`,fullName:`黏蛋白5AC`},{name:`HER-2`,fullName:`人表皮生长因子受体2`},{name:`MLH1`,fullName:`MutL同源蛋白1`},{name:`MSH2`,fullName:`MutS同源蛋白2`},{name:`MSH6`,fullName:`MutS同源蛋白6`},{name:`PMS2`,fullName:`PMS2蛋白`}],Nm=[{name:`FGFR2`,desc:`FGFR2 融合/通路改变`},{name:`IDH1`,desc:`IDH1 突变`},{name:`BRAF`,desc:`BRAF V600E 突变`},{name:`HER2/ERBB2`,desc:`HER2 过表达/扩增`},{name:`MSI`,desc:`微卫星不稳定性`},{name:`NTRK`,desc:`NTRK 融合突变`},{name:`KRAS`,desc:`KRAS G12C 突变`}],Pm=class extends O{constructor(...e){super(...e),this.report=null,this.formData={},this.ihcItems=[],this.geneItems=[],this.showIhcSection=!1,this.showGeneSection=!1,this.customIhcName=``,this.customGeneName=``}static{this.styles=c`
    :host {
      display: block;
    }
    .form-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #f0f0f0;
    }
    .form-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .form-header-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    /* 表单组 */
    .form-section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .form-group.full-width {
      grid-column: 1 / -1;
    }
    .form-label {
      font-size: 13px;
      font-weight: 600;
      color: #555;
    }
    .form-label .required {
      color: #ff4d4f;
      margin-left: 2px;
    }
    .form-input, .form-select, .form-textarea {
      padding: 10px 14px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: inherit;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    .form-textarea {
      resize: vertical;
      min-height: 60px;
    }
    .form-select {
      cursor: pointer;
      background: white;
    }

    /* 布尔开关 */
    .toggle-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .toggle {
      position: relative;
      width: 44px;
      height: 24px;
      background: #ddd;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .toggle.active {
      background: #667eea;
    }
    .toggle-knob {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      transition: transform 0.3s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .toggle.active .toggle-knob {
      transform: translateX(20px);
    }
    .toggle-label {
      font-size: 13px;
      color: #666;
    }

    /* 免疫组化 */
    .collapsible-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 12px 16px;
      background: #fafafa;
      border-radius: 10px;
      margin-bottom: 12px;
      transition: background 0.2s;
    }
    .collapsible-header:hover {
      background: #f0f0f0;
    }
    .collapsible-left {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
    .collapsible-badge {
      font-size: 11px;
      padding: 2px 8px;
      background: #667eea;
      color: white;
      border-radius: 10px;
    }
    .collapsible-arrow {
      transition: transform 0.3s;
      color: #999;
    }
    .collapsible-arrow.open {
      transform: rotate(180deg);
    }
    .collapsible-body {
      display: grid;
      gap: 8px;
      margin-bottom: 16px;
    }
    .ihc-row, .gene-row {
      display: grid;
      grid-template-columns: 140px 1fr 1fr;
      gap: 8px;
      align-items: center;
      padding: 8px 12px;
      background: #fafafa;
      border-radius: 8px;
    }
    .ihc-row-name, .gene-row-name {
      font-size: 13px;
      font-weight: 600;
      color: #333;
    }
    .ihc-row-name small, .gene-row-name small {
      font-weight: 400;
      color: #999;
      display: block;
      font-size: 11px;
    }
    .add-item-row {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 8px 12px;
      border: 1px dashed #d9d9d9;
      border-radius: 8px;
    }
    .add-item-row input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid #e8e8e8;
      border-radius: 6px;
      font-size: 13px;
      outline: none;
    }
    .add-item-row input:focus {
      border-color: #667eea;
    }
    .add-btn {
      padding: 6px 12px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
    }
    .add-btn:hover {
      opacity: 0.9;
    }
    .remove-btn {
      width: 24px;
      height: 24px;
      border: none;
      background: #ff4d4f;
      color: white;
      border-radius: 50%;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .remove-btn:hover {
      opacity: 0.8;
    }

    /* 按钮 */
    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #f0f0f0;
    }
    .btn {
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
    .btn-secondary {
      background: #f5f5f5;
      color: #666;
    }
    .btn-secondary:hover {
      background: #e8e8e8;
    }

    .form-hint {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }

    @media (max-width: 600px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      .ihc-row, .gene-row {
        grid-template-columns: 1fr;
        gap: 6px;
      }
    }
  `}connectedCallback(){super.connectedCallback(),this.report?(this.formData={...this.report},this.ihcItems=(this.report.ihcResults||[]).map(e=>({name:e.name,fullName:e.fullName,value:e.value,numericValue:e.numericValue})),this.geneItems=(this.report.geneTestResults||[]).map(e=>({geneName:e.geneName,desc:e.mutationType,result:e.result,mutationType:e.mutationType,significance:e.clinicalSignificance})),this.ihcItems.length>0&&(this.showIhcSection=!0),this.geneItems.length>0&&(this.showGeneSection=!0)):this.formData={reportDate:new Date().toISOString().split(`T`)[0],specimenSource:``,histologicalType:`腺癌`,differentiation:`moderate`,vascularInvasion:!1,perineuralInvasion:!1,marginStatus:`pending`,ihcResults:[],geneTestResults:[]}}updateField(e,t){this.formData={...this.formData,[e]:t}}toggleBoolean(e){this.formData={...this.formData,[e]:!this.formData[e]}}updateIhcValue(e,t,n){let r=[...this.ihcItems];if(t===`numericValue`){let t=parseFloat(n);r[e]={...r[e],numericValue:isNaN(t)?void 0:t}}else r[e]={...r[e],value:n};this.ihcItems=r}removeIhcItem(e){this.ihcItems=this.ihcItems.filter((t,n)=>n!==e)}addCustomIhc(){this.customIhcName.trim()&&(this.ihcItems=[...this.ihcItems,{name:this.customIhcName.trim(),fullName:this.customIhcName.trim(),value:``}],this.customIhcName=``)}addDefaultIhc(){let e=new Set(this.ihcItems.map(e=>e.name)),t=Mm.filter(t=>!e.has(t.name));t.length!==0&&(this.ihcItems=[...this.ihcItems,...t.map(e=>({name:e.name,fullName:e.fullName,value:``}))],this.showIhcSection=!0)}updateGeneResult(e,t,n){let r=[...this.geneItems];r[e][t]=n,this.geneItems=r}removeGeneItem(e){this.geneItems=this.geneItems.filter((t,n)=>n!==e)}addCustomGene(){this.customGeneName.trim()&&(this.geneItems=[...this.geneItems,{geneName:this.customGeneName.trim(),desc:``,result:``,mutationType:``,significance:``}],this.customGeneName=``)}addDefaultGenes(){let e=new Set(this.geneItems.map(e=>e.geneName)),t=Nm.filter(t=>!e.has(t.name));t.length!==0&&(this.geneItems=[...this.geneItems,...t.map(e=>({geneName:e.name,desc:e.desc,result:``,mutationType:``,significance:``}))],this.showGeneSection=!0)}handleSave(){let e={reportDate:this.formData.reportDate||``,specimenSource:this.formData.specimenSource||``,histologicalType:this.formData.histologicalType||`腺癌`,differentiation:this.formData.differentiation||`moderate`,bismuthType:this.formData.bismuthType,tnmStage:this.formData.tnmStage,vascularInvasion:this.formData.vascularInvasion||!1,perineuralInvasion:this.formData.perineuralInvasion||!1,marginStatus:this.formData.marginStatus||`pending`,lymphNodeStatus:this.formData.lymphNodeStatus,ihcResults:this.ihcItems.map(e=>({name:e.name,fullName:e.fullName,value:e.value,numericValue:e.numericValue})),geneTestResults:this.geneItems.filter(e=>e.result).map(e=>({geneName:e.geneName,mutationType:e.mutationType||e.desc,result:e.result,clinicalSignificance:e.significance||``,therapeuticImplication:``})),notes:this.formData.notes};this.dispatchEvent(new CustomEvent(`save`,{bubbles:!0,composed:!0,detail:e}))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0}))}render(){let e=this.formData;return D`
      <div class="form-card">
        <div class="form-header">
          <div class="form-header-icon">📝</div>
          录入病理报告
        </div>

        <!-- 基本信息 -->
        <div class="form-section">
          <div class="section-title">📋 基本信息</div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">报告日期<span class="required">*</span></label>
              <input
                type="date"
                class="form-input"
                .value="${e.reportDate||``}"
                @input="${e=>this.updateField(`reportDate`,e.target.value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">标本来源<span class="required">*</span></label>
              <select
                class="form-select"
                .value="${e.specimenSource||``}"
                @change="${e=>this.updateField(`specimenSource`,e.target.value)}"
              >
                <option value="">请选择</option>
                <option value="穿刺活检">穿刺活检</option>
                <option value="手术切除">手术切除</option>
                <option value="刷片/脱落细胞">刷片/脱落细胞</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">组织学类型</label>
              <select
                class="form-select"
                .value="${e.histologicalType||`腺癌`}"
                @change="${e=>this.updateField(`histologicalType`,e.target.value)}"
              >
                <option value="腺癌">腺癌</option>
                <option value="胰胆管型腺癌">胰胆管型腺癌</option>
                <option value="肠型腺癌">肠型腺癌</option>
                <option value="乳头状腺癌">乳头状腺癌</option>
                <option value="黏液腺癌">黏液腺癌</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">分化程度</label>
              <select
                class="form-select"
                .value="${e.differentiation||`moderate`}"
                @change="${e=>this.updateField(`differentiation`,e.target.value)}"
              >
                <option value="well">高分化</option>
                <option value="moderate">中分化</option>
                <option value="poor">低分化</option>
                <option value="undifferentiated">未分化</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Bismuth 分型</label>
              <select
                class="form-select"
                .value="${e.bismuthType||``}"
                @change="${e=>this.updateField(`bismuthType`,e.target.value)}"
              >
                <option value="">未分型</option>
                <option value="I型">I 型</option>
                <option value="II型">II 型</option>
                <option value="IIIa型">IIIa 型</option>
                <option value="IIIb型">IIIb 型</option>
                <option value="IV型">IV 型</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">TNM 分期</label>
              <input
                type="text"
                class="form-input"
                placeholder="如 T2N0M0"
                .value="${e.tnmStage||``}"
                @input="${e=>this.updateField(`tnmStage`,e.target.value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">淋巴结状态</label>
              <input
                type="text"
                class="form-input"
                placeholder="如 0/12枚淋巴结转移"
                .value="${e.lymphNodeStatus||``}"
                @input="${e=>this.updateField(`lymphNodeStatus`,e.target.value)}"
              />
            </div>
            <div class="form-group">
              <label class="form-label">切缘状态</label>
              <select
                class="form-select"
                .value="${e.marginStatus||`pending`}"
                @change="${e=>this.updateField(`marginStatus`,e.target.value)}"
              >
                <option value="pending">待评估</option>
                <option value="R0">R0 - 切缘阴性</option>
                <option value="R1">R1 - 镜下阳性</option>
                <option value="R2">R2 - 肉眼阳性</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 24px; margin-top: 14px;">
            <div class="toggle-group">
              <div
                class="toggle ${e.vascularInvasion?`active`:``}"
                @click="${()=>this.toggleBoolean(`vascularInvasion`)}"
              >
                <div class="toggle-knob"></div>
              </div>
              <span class="toggle-label">脉管侵犯</span>
            </div>
            <div class="toggle-group">
              <div
                class="toggle ${e.perineuralInvasion?`active`:``}"
                @click="${()=>this.toggleBoolean(`perineuralInvasion`)}"
              >
                <div class="toggle-knob"></div>
              </div>
              <span class="toggle-label">神经侵犯</span>
            </div>
          </div>
        </div>

        <!-- 免疫组化 -->
        <div class="form-section">
          <div class="collapsible-header" @click="${()=>{this.showIhcSection=!this.showIhcSection}}">
            <div class="collapsible-left">
              <span>🧪</span> 免疫组化结果
              ${this.ihcItems.length>0?D`
                <span class="collapsible-badge">${this.ihcItems.length} 项</span>
              `:``}
            </div>
            <svg class="collapsible-arrow ${this.showIhcSection?`open`:``}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          ${this.showIhcSection?D`
            <div class="collapsible-body">
              ${this.ihcItems.map((e,t)=>D`
                <div class="ihc-row">
                  <div class="ihc-row-name">
                    ${e.name}
                    <small>${e.fullName}</small>
                  </div>
                  <input
                    type="text"
                    class="form-input"
                    placeholder="如 40%, 2+, 阳性"
                    .value="${e.value}"
                    @input="${e=>this.updateIhcValue(t,`value`,e.target.value)}"
                  />
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <input
                      type="number"
                      class="form-input"
                      style="width: 80px"
                      placeholder="数值%"
                      .value="${e.numericValue===void 0?``:String(e.numericValue)}"
                      @input="${e=>this.updateIhcValue(t,`numericValue`,e.target.value)}"
                    />
                    <button class="remove-btn" @click="${()=>this.removeIhcItem(t)}">×</button>
                  </div>
                </div>
              `)}
              <div class="add-item-row">
                <input
                  type="text"
                  placeholder="自定义检测项名称"
                  .value="${this.customIhcName}"
                  @input="${e=>{this.customIhcName=e.target.value}}"
                  @keydown="${e=>{e.key===`Enter`&&this.addCustomIhc()}}"
                />
                <button class="add-btn" @click="${this.addCustomIhc}">添加</button>
                <button class="add-btn" style="background: #52c41a" @click="${this.addDefaultIhc}">添加常用项</button>
              </div>
            </div>
          `:``}
        </div>

        <!-- 基因检测 -->
        <div class="form-section">
          <div class="collapsible-header" @click="${()=>{this.showGeneSection=!this.showGeneSection}}">
            <div class="collapsible-left">
              <span>🧬</span> 基因检测结果
              ${this.geneItems.length>0?D`
                <span class="collapsible-badge">${this.geneItems.length} 项</span>
              `:``}
            </div>
            <svg class="collapsible-arrow ${this.showGeneSection?`open`:``}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          ${this.showGeneSection?D`
            <div class="collapsible-body">
              ${this.geneItems.map((e,t)=>D`
                <div class="gene-row">
                  <div class="gene-row-name">
                    ${e.geneName}
                    <small>${e.desc}</small>
                  </div>
                  <select
                    class="form-select"
                    .value="${e.result}"
                    @change="${e=>this.updateGeneResult(t,`result`,e.target.value)}"
                  >
                    <option value="">未检测</option>
                    <option value="阳性">阳性</option>
                    <option value="阴性">阴性</option>
                    <option value="未检出">未检出</option>
                    <option value="待检测">待检测</option>
                  </select>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <input
                      type="text"
                      class="form-input"
                      placeholder="临床意义"
                      .value="${e.significance}"
                      @input="${e=>this.updateGeneResult(t,`significance`,e.target.value)}"
                    />
                    <button class="remove-btn" @click="${()=>this.removeGeneItem(t)}">×</button>
                  </div>
                </div>
              `)}
              <div class="add-item-row">
                <input
                  type="text"
                  placeholder="自定义基因名称"
                  .value="${this.customGeneName}"
                  @input="${e=>{this.customGeneName=e.target.value}}"
                  @keydown="${e=>{e.key===`Enter`&&this.addCustomGene()}}"
                />
                <button class="add-btn" @click="${this.addCustomGene}">添加</button>
                <button class="add-btn" style="background: #52c41a" @click="${this.addDefaultGenes}">添加常用项</button>
              </div>
            </div>
          `:``}
        </div>

        <!-- 备注 -->
        <div class="form-section">
          <div class="form-group full-width">
            <label class="form-label">备注</label>
            <textarea
              class="form-textarea"
              placeholder="其他需要记录的病理信息..."
              .value="${e.notes||``}"
              @input="${e=>this.updateField(`notes`,e.target.value)}"
            ></textarea>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="form-actions">
          <button class="btn btn-secondary" @click="${this.handleCancel}">取消</button>
          <button class="btn btn-primary" @click="${this.handleSave}">保存病理报告</button>
        </div>
      </div>
    `}};M([A({type:Object})],Pm.prototype,`report`,void 0),M([j()],Pm.prototype,`formData`,void 0),M([j()],Pm.prototype,`ihcItems`,void 0),M([j()],Pm.prototype,`geneItems`,void 0),M([j()],Pm.prototype,`showIhcSection`,void 0),M([j()],Pm.prototype,`showGeneSection`,void 0),M([j()],Pm.prototype,`customIhcName`,void 0),M([j()],Pm.prototype,`customGeneName`,void 0),Pm=M([k(`pathology-form`)],Pm);var Fm=[{grade:`low`,label:`低增殖`,color:`#52c41a`,bgColor:`#f6ffed`,range:`< 10%`,description:`肿瘤细胞增殖活性较低，生长相对缓慢`,riskLevel:`低风险`},{grade:`moderate`,label:`中等增殖`,color:`#1890ff`,bgColor:`#e6f7ff`,range:`10% ~ 30%`,description:`肿瘤细胞具有中等增殖活性`,riskLevel:`中低风险`},{grade:`high`,label:`高增殖`,color:`#faad14`,bgColor:`#fffbe6`,range:`30% ~ 60%`,description:`肿瘤细胞增殖活跃，需密切关注复发风险`,riskLevel:`中高风险`},{grade:`very-high`,label:`极高增殖`,color:`#ff4d4f`,bgColor:`#fff2f0`,range:`> 60%`,description:`肿瘤细胞增殖极活跃，侵袭性强，复发和转移风险高`,riskLevel:`高风险`}],Im=class extends O{constructor(...e){super(...e),this.reportDate=``,this.showDetail=!1}static{this.styles=c`
    :host {
      display: block;
    }
    .assessment-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #f0f0f0;
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .card-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .card-title-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .report-date {
      font-size: 12px;
      color: #999;
    }
    .no-data {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-data-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }
    .no-data-text {
      font-size: 14px;
      margin-bottom: 4px;
    }

    /* 主仪表盘 */
    .gauge-section {
      display: flex;
      align-items: center;
      gap: 32px;
      margin-bottom: 24px;
      padding: 20px;
      background: #fafafa;
      border-radius: 12px;
    }
    .gauge-container {
      position: relative;
      width: 140px;
      height: 140px;
      flex-shrink: 0;
    }
    .gauge-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }
    .gauge-bg {
      fill: none;
      stroke: #f0f0f0;
      stroke-width: 12;
    }
    .gauge-fill {
      fill: none;
      stroke-width: 12;
      stroke-linecap: round;
      transition: stroke-dashoffset 1s ease, stroke 0.5s ease;
    }
    .gauge-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .gauge-value {
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
    }
    .gauge-unit {
      font-size: 14px;
      color: #999;
      margin-top: 2px;
    }
    .gauge-info {
      flex: 1;
    }
    .grade-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .grade-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .grade-description {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 8px;
    }
    .risk-tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 6px;
    }

    /* 分级条 */
    .grade-bar {
      display: flex;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .grade-bar-segment {
      flex: 1;
      transition: opacity 0.3s;
      position: relative;
    }
    .grade-bar-segment.active {
      box-shadow: 0 0 8px rgba(0,0,0,0.2);
    }
    .grade-bar-labels {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .grade-bar-label {
      font-size: 11px;
      color: #999;
      text-align: center;
      width: 25%;
    }

    /* 详细信息 */
    .detail-section {
      border-top: 1px solid #f0f0f0;
      padding-top: 20px;
    }
    .detail-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      color: #667eea;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      margin-bottom: 16px;
    }
    .detail-toggle:hover {
      opacity: 0.8;
    }
    .detail-toggle svg {
      transition: transform 0.3s;
    }
    .detail-toggle.open svg {
      transform: rotate(180deg);
    }
    .detail-content {
      display: grid;
      gap: 12px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .detail-item {
      background: #fafafa;
      border-radius: 10px;
      padding: 14px;
    }
    .detail-item-label {
      font-size: 12px;
      color: #999;
      margin-bottom: 4px;
    }
    .detail-item-value {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .detail-item-value.positive {
      color: #ff4d4f;
    }
    .detail-item-value.negative {
      color: #52c41a;
    }
    .detail-item-value.warning {
      color: #faad14;
    }

    /* 免疫组化结果列表 */
    .ihc-section {
      margin-top: 16px;
    }
    .ihc-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .ihc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
    }
    .ihc-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: #fafafa;
      border-radius: 8px;
      font-size: 13px;
    }
    .ihc-item-name {
      color: #666;
      font-weight: 500;
    }
    .ihc-item-value {
      font-weight: 700;
    }
    .ihc-item-value.high {
      color: #ff4d4f;
    }
    .ihc-item-value.moderate {
      color: #faad14;
    }
    .ihc-item-value.low {
      color: #52c41a;
    }

    /* 建议 */
    .suggestions {
      margin-top: 20px;
      padding: 16px;
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }
    .suggestions-title {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .suggestion-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 13px;
      color: #555;
      line-height: 1.6;
      margin-bottom: 6px;
    }
    .suggestion-item:last-child {
      margin-bottom: 0;
    }
    .suggestion-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (max-width: 600px) {
      .gauge-section {
        flex-direction: column;
        text-align: center;
      }
      .detail-grid {
        grid-template-columns: 1fr;
      }
      .ihc-grid {
        grid-template-columns: 1fr;
      }
    }
  `}get ki67Value(){return this.pathologyReport?.ihcResults?.find(e=>e.name.toUpperCase()===`KI-67`||e.name.toUpperCase()===`KI67`)?.numericValue??null}get ki67Grade(){let e=this.ki67Value;return e===null?null:e<10?Fm[0]:e<=30?Fm[1]:e<=60?Fm[2]:Fm[3]}getGaugeColor(){return this.ki67Grade?.color||`#ccc`}getGaugeOffset(){let e=this.ki67Value;if(e===null)return 0;let t=2*Math.PI*54;return t-Math.min(e,100)/100*t}getSuggestions(){let e=[],t=this.pathologyReport;if(!t)return e;this.ki67Grade;let n=this.ki67Value;n!==null&&n>30&&e.push({icon:`⚠️`,text:`Ki-67 为 ${n}%，肿瘤增殖活跃，建议加强术后随访频率，前2年每3个月复查一次`}),n!==null&&n>60&&e.push({icon:`🔴`,text:`Ki-67 极高，提示肿瘤侵袭性强，建议与主治医师讨论是否需要辅助化疗`}),n!==null&&n<=10&&e.push({icon:`✅`,text:`Ki-67 较低，肿瘤增殖活性不高，预后相对较好，但仍需按指南定期随访`}),(t.differentiation===`poor`||t.differentiation===`undifferentiated`)&&e.push({icon:`⚠️`,text:`${t.differentiation===`poor`?`低`:`未`}分化腺癌侵袭性强，建议完善基因检测以寻找靶向治疗机会`}),t.perineuralInvasion&&e.push({icon:`⚠️`,text:`存在神经侵犯，可能增加局部复发风险，建议术后辅助治疗并密切随访`}),t.vascularInvasion&&e.push({icon:`⚠️`,text:`存在脉管侵犯，提示远处转移风险增加，建议术后定期影像学检查`}),t.marginStatus===`R1`?e.push({icon:`🔴`,text:`切缘阳性（R1），建议术后辅助放化疗以降低局部复发风险`}):t.marginStatus===`R0`&&e.push({icon:`✅`,text:`切缘阴性（R0），根治性切除完整，但仍需按指南进行辅助治疗和随访`});let r=t.ihcResults?.find(e=>e.name.toUpperCase()===`P53`);return r&&r.numericValue&&r.numericValue>50&&e.push({icon:`🧬`,text:`P53 高表达（突变型），可能与肿瘤进展相关，建议关注免疫治疗机会`}),e}getDifferentiationLabel(e){return{well:`高分化`,moderate:`中分化`,poor:`低分化`,undifferentiated:`未分化`}[e]||e}getMarginStatusLabel(e){return{R0:`R0 - 切缘阴性`,R1:`R1 - 镜下切缘阳性`,R2:`R2 - 肉眼切缘阳性`,pending:`待评估`}[e]||e}getIHCColorClass(e){return(e.name.toUpperCase()===`KI-67`||e.name.toUpperCase()===`KI67`)&&e.numericValue!==void 0?e.numericValue>60?`high`:e.numericValue>30?`moderate`:`low`:e.name.toUpperCase()===`P53`&&e.numericValue!==void 0?e.numericValue>50?`high`:e.numericValue>20?`moderate`:`low`:``}toggleDetail(){this.showDetail=!this.showDetail}render(){if(!this.pathologyReport)return D`
        <div class="assessment-card">
          <div class="card-header">
            <div class="card-title">
              <div class="card-title-icon">🔬</div>
              Ki-67 肿瘤增殖评估
            </div>
          </div>
          <div class="no-data">
            <div class="no-data-icon">📋</div>
            <div class="no-data-text">暂无病理报告数据</div>
            <div style="font-size: 12px; color: #bbb;">录入病理报告后可查看 Ki-67 增殖评估</div>
          </div>
        </div>
      `;let e=this.ki67Grade,t=this.ki67Value,n=this.pathologyReport,r=this.getSuggestions(),i=2*Math.PI*54;return D`
      <div class="assessment-card">
        <div class="card-header">
          <div class="card-title">
            <div class="card-title-icon">🔬</div>
            Ki-67 肿瘤增殖评估
          </div>
          ${n.reportDate?D`
            <div class="report-date">报告日期: ${n.reportDate}</div>
          `:``}
        </div>

        ${t!==null&&e?D`
          <!-- 主仪表盘 -->
          <div class="gauge-section">
            <div class="gauge-container">
              <svg class="gauge-svg" viewBox="0 0 120 120">
                <circle class="gauge-bg" cx="60" cy="60" r="54" />
                <circle
                  class="gauge-fill"
                  cx="60" cy="60" r="54"
                  stroke="${e.color}"
                  stroke-dasharray="${i}"
                  stroke-dashoffset="${this.getGaugeOffset()}"
                />
              </svg>
              <div class="gauge-center">
                <div class="gauge-value" style="color: ${e.color}">${t}</div>
                <div class="gauge-unit">%</div>
              </div>
            </div>
            <div class="gauge-info">
              <div class="grade-badge" style="background: ${e.bgColor}; color: ${e.color}">
                <span class="grade-dot" style="background: ${e.color}"></span>
                ${e.label}
              </div>
              <div class="grade-description">${e.description}</div>
              <div class="risk-tag" style="background: ${e.bgColor}; color: ${e.color}">
                ${e.riskLevel===`高风险`?`🔴`:e.riskLevel===`中高风险`?`🟠`:e.riskLevel===`中低风险`?`🟡`:`🟢`}
                ${e.riskLevel}
              </div>
            </div>
          </div>

          <!-- 分级条 -->
          <div class="grade-bar">
            ${Fm.map(t=>D`
              <div
                class="grade-bar-segment ${t.grade===e.grade?`active`:``}"
                style="background: ${t.color}; opacity: ${t.grade===e.grade?1:.25}"
              ></div>
            `)}
          </div>
          <div class="grade-bar-labels">
            ${Fm.map(t=>D`
              <div class="grade-bar-label" style="${t.grade===e.grade?`color: ${t.color}; font-weight: 600`:``}">${t.range}</div>
            `)}
          </div>
        `:D`
          <div class="no-data" style="padding: 20px;">
            <div class="no-data-icon">📊</div>
            <div class="no-data-text">病理报告中未包含 Ki-67 数据</div>
          </div>
        `}

        <!-- 详细信息 -->
        <div class="detail-section">
          <button class="detail-toggle ${this.showDetail?`open`:``}" @click="${this.toggleDetail}">
            <span>病理报告详情</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          ${this.showDetail?D`
            <div class="detail-content">
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-item-label">组织学类型</div>
                  <div class="detail-item-value">${n.histologicalType||`未记录`}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">分化程度</div>
                  <div class="detail-item-value ${n.differentiation===`poor`||n.differentiation===`undifferentiated`?`warning`:``}">
                    ${this.getDifferentiationLabel(n.differentiation)}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">脉管侵犯</div>
                  <div class="detail-item-value ${n.vascularInvasion?`positive`:`negative`}">
                    ${n.vascularInvasion?`阳性 ⚠️`:`阴性 ✅`}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">神经侵犯</div>
                  <div class="detail-item-value ${n.perineuralInvasion?`positive`:`negative`}">
                    ${n.perineuralInvasion?`阳性 ⚠️`:`阴性 ✅`}
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-item-label">切缘状态</div>
                  <div class="detail-item-value ${n.marginStatus===`R1`||n.marginStatus===`R2`?`positive`:n.marginStatus===`R0`?`negative`:``}">
                    ${this.getMarginStatusLabel(n.marginStatus)}
                  </div>
                </div>
                ${n.tnmStage?D`
                  <div class="detail-item">
                    <div class="detail-item-label">TNM 分期</div>
                    <div class="detail-item-value">${n.tnmStage}</div>
                  </div>
                `:``}
                ${n.bismuthType?D`
                  <div class="detail-item">
                    <div class="detail-item-label">Bismuth 分型</div>
                    <div class="detail-item-value">${n.bismuthType}</div>
                  </div>
                `:``}
                ${n.lymphNodeStatus?D`
                  <div class="detail-item">
                    <div class="detail-item-label">淋巴结状态</div>
                    <div class="detail-item-value ${n.lymphNodeStatus.includes(`N1`)||n.lymphNodeStatus.includes(`N2`)?`positive`:`negative`}">
                      ${n.lymphNodeStatus}
                    </div>
                  </div>
                `:``}
              </div>

              <!-- 免疫组化结果 -->
              ${n.ihcResults&&n.ihcResults.length>0?D`
                <div class="ihc-section">
                  <div class="ihc-title">
                    <span>🧪</span> 免疫组化结果
                  </div>
                  <div class="ihc-grid">
                    ${n.ihcResults.map(e=>D`
                      <div class="ihc-item">
                        <span class="ihc-item-name">${e.name}</span>
                        <span class="ihc-item-value ${this.getIHCColorClass(e)}">${e.value}</span>
                      </div>
                    `)}
                  </div>
                </div>
              `:``}

              <!-- 基因检测结果 -->
              ${n.geneTestResults&&n.geneTestResults.length>0?D`
                <div class="ihc-section">
                  <div class="ihc-title">
                    <span>🧬</span> 基因检测结果
                  </div>
                  <div class="ihc-grid">
                    ${n.geneTestResults.map(e=>D`
                      <div class="ihc-item">
                        <span class="ihc-item-name">${e.geneName}</span>
                        <span class="ihc-item-value ${e.result===`阳性`?`high`:e.result===`阴性`?`low`:``}">${e.result}</span>
                      </div>
                    `)}
                  </div>
                </div>
              `:``}
            </div>
          `:``}
        </div>

        <!-- 建议 -->
        ${r.length>0?D`
          <div class="suggestions">
            <div class="suggestions-title">
              <span>💡</span> 个性化建议
            </div>
            ${r.map(e=>D`
              <div class="suggestion-item">
                <span class="suggestion-icon">${e.icon}</span>
                <span>${e.text}</span>
              </div>
            `)}
          </div>
        `:``}
      </div>
    `}};M([A({type:Object})],Im.prototype,`pathologyReport`,void 0),M([A({type:String})],Im.prototype,`reportDate`,void 0),M([j()],Im.prototype,`showDetail`,void 0),Im=M([k(`ki67-assessment`)],Im);var Lm=class extends O{constructor(...e){super(...e),this.archive=null,this.viewMode=`guide`,this.savedReport=null}static{this.styles=c`
    :host {
      display: block;
    }
    .page-container {
      padding: 20px;
    }
    .page-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }
    .back-btn {
      width: 40px;
      height: 40px;
      border: none;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .back-btn:hover {
      background: #e8e8e8;
    }
    .page-title-group {
      flex: 1;
    }
    .page-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    .page-subtitle {
      font-size: 13px;
      color: #999;
      margin-top: 2px;
    }
    .action-btn {
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .action-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    .action-btn.edit {
      background: #f5f5f5;
      color: #666;
    }
    .action-btn.edit:hover {
      background: #e8e8e8;
      box-shadow: none;
      transform: none;
    }

    /* ===== 流程时间线 ===== */
    .timeline-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-bottom: 24px;
    }
    .timeline-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .timeline-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .timeline-title-group {
      flex: 1;
    }
    .timeline-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .timeline-subtitle {
      font-size: 13px;
      color: #999;
    }
    .total-time {
      background: #fff1f0;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      color: #ff4d4f;
    }
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, #667eea, #52c41a);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 20px;
    }
    .timeline-item:last-child {
      padding-bottom: 0;
    }
    .timeline-dot {
      position: absolute;
      left: -32px;
      top: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      z-index: 1;
    }
    .timeline-dot.completed { background: #52c41a; color: white; }
    .timeline-dot.current { background: #667eea; color: white; animation: pulse 2s infinite; }
    .timeline-dot.pending { background: #d9d9d9; color: white; }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
      50% { box-shadow: 0 0 0 8px rgba(102, 126, 234, 0); }
    }
    .timeline-item.urgent { position: relative; }
    .timeline-item.urgent::before {
      content: '';
      position: absolute;
      left: -8px; right: -8px; top: -4px; bottom: -4px;
      background: linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.urgent .timeline-content {
      position: relative; z-index: 1;
      background: white; border: 2px solid #ff4d4f;
    }
    .timeline-item.urgent .timeline-item-name { color: #ff4d4f; }
    .timeline-item.required { position: relative; }
    .timeline-item.required::before {
      content: '';
      position: absolute;
      left: -8px; right: -8px; top: -4px; bottom: -4px;
      background: linear-gradient(135deg, #fff2e6 0%, #ffd591 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.required .timeline-content {
      position: relative; z-index: 1;
      background: white; border: 2px solid #fa8c16;
    }
    .timeline-item.required .timeline-item-name { color: #d46b08; }
    .timeline-item.gene-test { position: relative; }
    .timeline-item.gene-test::before {
      content: '';
      position: absolute;
      left: -8px; right: -8px; top: -4px; bottom: -4px;
      background: linear-gradient(135deg, #f6ffed 0%, #b7eb8f 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.gene-test .timeline-content {
      position: relative; z-index: 1;
      background: white; border: 2px solid #52c41a;
    }
    .timeline-item.gene-test .timeline-item-name { color: #52c41a; }
    .timeline-content {
      background: #fafafa;
      border-radius: 12px;
      padding: 16px;
    }
    .timeline-item-name {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .timeline-item-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .timeline-item-time {
      display: inline-block;
      font-size: 12px;
      color: #999;
      margin-top: 8px;
      padding: 4px 10px;
      background: white;
      border-radius: 12px;
    }
    .banner {
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      color: white;
    }
    .banner.urgent { background: #ff4d4f; }
    .banner.required { background: #fa8c16; }
    .banner.gene { background: #52c41a; }
    .bifurcation-section {
      margin-top: 24px;
      background: #fff7e6;
      border: 1px solid #ffd591;
      border-radius: 12px;
      padding: 16px;
    }
    .bifurcation-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bifurcation-icon {
      width: 24px; height: 24px;
      background: #ffd591;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .bifurcation-paths { display: flex; gap: 12px; }
    .bifurcation-path {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      background: white;
    }
    .path-result { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
    .path-result.excluded { color: #52c41a; }
    .path-result.cancer { color: #ff4d4f; }
    .path-action { font-size: 12px; color: #666; line-height: 1.4; }
    .path-action strong { color: #ff4d4f; }
    .note-section {
      margin-top: 24px;
      padding: 16px;
      background: #f6ffed;
      border: 1px solid #b7eb8f;
      border-radius: 12px;
    }
    .note-title {
      font-size: 14px;
      font-weight: 600;
      color: #52c41a;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .note-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .gene-test-warning {
      margin-top: 20px;
      background: linear-gradient(135deg, #fff2e6 0%, #fff7e6 100%);
      border: 1px solid #ffb977;
      border-radius: 12px;
      padding: 16px;
    }
    .gene-test-warning-title {
      font-size: 15px;
      font-weight: 600;
      color: #d46b08;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .gene-test-warning-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .warning-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      background: white;
      border-radius: 8px;
    }
    .warning-icon { font-size: 18px; flex-shrink: 0; }
    .warning-text { font-size: 13px; color: #666; line-height: 1.5; }
    .warning-text strong { color: #d46b08; }

    /* ===== 结果区域间距 ===== */
    .result-section {
      margin-bottom: 24px;
    }
  `}connectedCallback(){super.connectedCallback(),this.archive?.pathologyReport&&(this.savedReport=this.archive.pathologyReport,this.viewMode=`result`)}handleBack(){this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}handleStartInput(){this.viewMode=`form`}handleEditReport(){this.viewMode=`form`}handleSaveReport(e){this.savedReport=e.detail,this.viewMode=`result`,this.dispatchEvent(new CustomEvent(`pathology-save`,{bubbles:!0,composed:!0,detail:e.detail}))}handleCancelForm(){this.savedReport?this.viewMode=`result`:this.viewMode=`guide`}render(){return D`
      <div class="page-container">
        <div class="page-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="page-title-group">
            <div class="page-title">病理确认</div>
            <div class="page-subtitle">明确肿瘤性质，制定治疗方案的基础依据</div>
          </div>
          ${this.viewMode===`guide`?D`
            <button class="action-btn" @click="${this.handleStartInput}">
              📝 录入病理报告
            </button>
          `:this.viewMode===`result`?D`
            <button class="action-btn edit" @click="${this.handleEditReport}">
              ✏️ 修改报告
            </button>
          `:``}
        </div>

        ${this.viewMode===`guide`?this.renderGuide():``}
        ${this.viewMode===`form`?this.renderForm():``}
        ${this.viewMode===`result`?this.renderResult():``}
      </div>
    `}renderGuide(){return D`
      <div class="timeline-container">
        <div class="timeline-header">
          <div class="timeline-icon">🔬</div>
          <div class="timeline-title-group">
            <div class="timeline-title">病理确认流程</div>
            <div class="timeline-subtitle">了解病理确认的完整流程和注意事项</div>
          </div>
          <div class="total-time">约2-3周</div>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot completed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">门诊评估</div>
              <div class="timeline-item-desc">医生评估病情，开具检查单，安排入院或穿刺时间</div>
              <div class="timeline-item-time">约1-3天</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot completed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">入院检查</div>
              <div class="timeline-item-desc">完成必要的血液检查、影像检查等，评估身体状况是否适合穿刺</div>
              <div class="timeline-item-time">约3-7天</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot current">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><circle cx="12" cy="12" r="4"></circle></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">穿刺活检</div>
              <div class="timeline-item-desc">在影像引导下进行穿刺，获取组织样本进行病理分析</div>
              <div class="timeline-item-time">约1-2天（住院）</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot pending">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><circle cx="12" cy="12" r="1"></circle></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">病理分析</div>
              <div class="timeline-item-desc">组织样本送检，显微镜下分析细胞形态，明确肿瘤性质</div>
              <div class="timeline-item-time">约5-10天</div>
            </div>
          </div>

          <div class="timeline-item urgent">
            <div class="timeline-dot pending">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><circle cx="12" cy="12" r="1"></circle></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">出具报告 ⚡</div>
              <div class="timeline-item-desc">病理报告出炉，明确诊断结果</div>
              <div class="timeline-item-time">1-2天</div>
              <div class="banner urgent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                报告出炉后立刻约门诊，同时送检基因检测！
              </div>
            </div>
          </div>

          <div class="timeline-item required">
            <div class="timeline-dot pending">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><circle cx="12" cy="12" r="1"></circle></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">免疫组化染色检测 🔬</div>
              <div class="timeline-item-desc">检测 Ki-67、P53、CK7/19 等肿瘤标志物表达情况，指导靶向和免疫治疗药物选择</div>
              <div class="timeline-item-time">约5-7天</div>
              <div class="banner required">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                必做！包含 Ki-67 增殖指数评估，用于判断肿瘤恶性程度
              </div>
            </div>
          </div>

          <div class="timeline-item gene-test">
            <div class="timeline-dot pending">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><circle cx="12" cy="12" r="1"></circle></svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-item-name">基因检测 🧬</div>
              <div class="timeline-item-desc">检测 FGFR2、IDH1、MSI/TMB、HER2、NTRK 等基因突变，为靶向治疗提供依据</div>
              <div class="timeline-item-time">约10-14天</div>
              <div class="banner gene">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                可与免疫组化同时进行，不耽误时间
              </div>
            </div>
          </div>
        </div>

        <div class="bifurcation-section">
          <div class="bifurcation-title">
            <div class="bifurcation-icon">⚡</div>
            分叉点：病理报告结果
          </div>
          <div class="bifurcation-paths">
            <div class="bifurcation-path">
              <div class="path-result excluded">排除癌症</div>
              <div class="path-action">病理报告显示为良性病变，可排除癌症可能，结束当前诊疗流程。</div>
            </div>
            <div class="bifurcation-path">
              <div class="path-result cancer">确诊癌症</div>
              <div class="path-action">明确为腺癌等。<br><br>
                <strong>请立即同时进行：</strong><br>
                1. <strong>免疫组化染色检测</strong>（必做）<br>
                2. <strong>基因检测</strong>（建议做）</div>
            </div>
          </div>
        </div>

        <div class="note-section">
          <div class="note-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            重要提示
          </div>
          <div class="note-content">
            基本病理报告出具后，根据结果分为两条路径：<br><br>
            1. 若排除癌症：恭喜，可结束当前诊疗流程<br><br>
            2. 若确诊癌症：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• <strong>免疫组化染色检测（必做）</strong>：包含 Ki-67 增殖指数，用于评估肿瘤恶性程度和指导治疗方案<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• <strong>基因检测（建议做）</strong>：用于靶向治疗药物选择<br><br>
            <strong>注意：免疫组化和基因检测可以同时送检，请务必在拿到病理报告后第一时间联系您的主治医生。</strong>
          </div>
        </div>

        <div class="gene-test-warning">
          <div class="gene-test-warning-title">
            <div style="font-size: 20px;">🧬</div>
            基因检测抽血注意事项
          </div>
          <div class="gene-test-warning-content">
            <div class="warning-item">
              <div class="warning-icon">💉</div>
              <div class="warning-text"><strong>基因检测需要血液抽检</strong><br>为保证检测结果准确性，<strong>抽血前14天内应避免输血</strong>。</div>
            </div>
            <div class="warning-item">
              <div class="warning-icon">⚠️</div>
              <div class="warning-text"><strong>门静脉癌栓风险提示</strong><br>若并发门静脉癌栓，出现消化道出血的风险较高。一旦发生输血，基因检测将<strong>推迟至少15天</strong>。</div>
            </div>
            <div class="warning-item">
              <div class="warning-icon">📋</div>
              <div class="warning-text"><strong>建议措施</strong><br>请提前与医生沟通，在窗口期内优先安排基因检测抽血。</div>
            </div>
          </div>
        </div>
      </div>
    `}renderForm(){return D`
      <pathology-form
        .report="${this.savedReport}"
        @save="${this.handleSaveReport}"
        @cancel="${this.handleCancelForm}"
      ></pathology-form>
    `}renderResult(){return D`
      <div class="result-section">
        <ki67-assessment .pathologyReport="${this.savedReport}"></ki67-assessment>
      </div>
    `}};M([A({type:Object})],Lm.prototype,`archive`,void 0),M([j()],Lm.prototype,`viewMode`,void 0),M([j()],Lm.prototype,`savedReport`,void 0),Lm=M([k(`pathology-detail-page`)],Lm);var Rm=[{id:`guide-2025`,slug:`guide-2025`,title:`肝门部胆管癌诊断和治疗指南（2025版）`,summary:`中国研究型医院学会肝胆胰外科专业委员会和《中华消化外科杂志》编辑委员会组织全国肝门部胆管癌领域专家共同制订的2025版诊疗指南，涵盖诊断、分型分期、可切除性评估、手术方式、系统治疗、随访监测等完整诊疗环节。`,author:`中国研究型医院学会肝胆胰外科专业委员会`,tags:[`指南`,`2025版`,`肝门部胆管癌`,`诊疗规范`,`手术`,`化疗`,`靶向治疗`,`免疫治疗`],components:[{id:`matcher-1`,type:`archive-matcher`,title:`本文与您的档案匹配度`},{id:`tree-1`,type:`decision-tree`,title:`治疗方案决策树`,config:{treeType:`treatment`}}],publishedAt:`2025-01-22`},{id:`recent-advantages-2026`,slug:`recent-advantages-2026`,title:`胆道癌系统治疗最新进展文献综述 - pCCA相关内容提炼`,summary:`基于Hussain MM等发表的J Gastrointest Oncol (2026)文献综述，提炼与肝门部胆管癌(pCCA)相关的分子特征、靶向治疗和免疫治疗最新进展。`,author:`Hussain MM, et al.`,tags:[`综述`,`2026版`,`胆道癌`,`pCCA`,`肝门部胆管癌`,`靶向治疗`,`免疫治疗`,`HER2`,`FGFR2`,`IDH1`],components:[{id:`matcher-1`,type:`archive-matcher`,title:`本文与您的档案匹配度`}],publishedAt:`2026-03-15`}];async function zm(e){try{let t=await fetch(`/articles/${e}.md`);if(!t.ok)throw Error(`Failed to load article: ${t.status}`);return await t.text()}catch(e){return console.error(`Error loading article:`,e),``}}function Bm(e){let t=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!t)return{frontmatter:{},body:e};let n=t[1],r=t[2],i={};return n.split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t>0){let n=e.slice(0,t).trim(),r=e.slice(t+1).trim();if(r.startsWith(`[`)&&r.endsWith(`]`))try{i[n]=JSON.parse(r)}catch{i[n]=r}else i[n]=r}}),{frontmatter:i,body:r}}async function Vm(e){let t=Rm.find(t=>t.slug===e);if(!t)return null;let n=await zm(e);if(!n)return null;let{frontmatter:r,body:i}=Bm(n);return{id:t.id,title:r.title||t.title,summary:t.summary,content:i,author:r.author||t.author,tags:r.tags||t.tags,embeddedComponents:t.components,createdAt:r.date||t.publishedAt,updatedAt:r.updated||t.publishedAt,is_published:!0,published_at:t.publishedAt}}function Hm(){return Rm.map(e=>({id:e.id,title:e.title,summary:e.summary,content:``,author:e.author,tags:e.tags,createdAt:e.publishedAt,updatedAt:e.publishedAt,is_published:!0,published_at:e.publishedAt}))}function Um(e){let t=e.toLowerCase();return Rm.filter(e=>e.title.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t))).map(e=>({id:e.id,title:e.title,summary:e.summary,content:``,author:e.author,tags:e.tags,createdAt:e.publishedAt,updatedAt:e.publishedAt,is_published:!0,published_at:e.publishedAt}))}function Wm(e){return Rm.filter(t=>t.tags.includes(e)).map(e=>({id:e.id,title:e.title,summary:e.summary,content:``,author:e.author,tags:e.tags,createdAt:e.publishedAt,updatedAt:e.publishedAt,is_published:!0,published_at:e.publishedAt}))}function Gm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Km(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var qm=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Jm=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Ym=class extends Jm{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Xm=class extends Jm{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Zm=class extends Jm{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},Qm;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(Qm||={});var $m=class{constructor(e,{headers:t={},customFetch:n,region:r=Qm.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=qm(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Km(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new Ym(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new Xm(m);if(!m.ok)throw new Zm(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),_;return _=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:_,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof Zm||e instanceof Xm?e.context:void 0}}finally{n&&clearTimeout(n)}})}},eh=3,th=e=>Math.min(1e3*2**e,3e4),nh=[520,503],rh=[`GET`,`HEAD`,`OPTIONS`],ih=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function ah(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function oh(e,t,n,r){return!(!r||n>=eh||!rh.includes(e)||!nh.includes(t))}var sh=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t=new Headers(n.headers);e>0&&t.set(`X-Retry-Count`,String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t instanceof Error&&(t.name===`AbortError`||`code`in t&&t.code===`ABORT_ERR`)||!rh.includes(n.method))throw t;if(n.retryEnabled&&e<eh){let t=th(e);e++,await ah(t,n.signal);continue}throw t}if(oh(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?th(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await ah(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let n=await e.text();n===``||(r=t.headers.get(`Accept`)===`text/csv`||t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)?n:JSON.parse(n))}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new ih(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},ch=class extends sh{select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},lh=RegExp(`[,()]`),uh=class extends ch{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&lh.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&lh.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},dh=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new uh({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new uh({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new uh({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new uh({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new uh({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function fh(e){"@babel/helpers - typeof";return fh=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},fh(e)}function ph(e,t){if(fh(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(fh(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function mh(e){var t=ph(e,`string`);return fh(t)==`symbol`?t:t+``}function hh(e,t,n){return(t=mh(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?gh(Object(n),!0).forEach(function(t){hh(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var vh=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,_h(_h({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,_h(_h({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new dh(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new uh({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},yh=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node){let t=e.node,n=parseInt(t.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,wsConstructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},bh=`realtime-js/2.105.3`,xh=`1.0.0`,Sh=`2.0.0`,Ch=Sh,wh=1e4,Th={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Eh={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},Dh={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Oh=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},q;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(q||={});var kh=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Ah(i,e,t,r),n),{}):{}},Ah=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?jh(i,a):Mh(a)},jh=(e,t)=>{if(e.charAt(0)===`_`)return Ih(t,e.slice(1,e.length));switch(e){case q.bool:return Nh(t);case q.float4:case q.float8:case q.int2:case q.int4:case q.int8:case q.numeric:case q.oid:return Ph(t);case q.json:case q.jsonb:return Fh(t);case q.timestamp:return Lh(t);case q.abstime:case q.date:case q.daterange:case q.int4range:case q.int8range:case q.money:case q.reltime:case q.text:case q.time:case q.timestamptz:case q.timetz:case q.tsrange:case q.tstzrange:return Mh(t);default:return Mh(t)}},Mh=e=>e,Nh=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},Ph=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Fh=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Ih=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>jh(t,e))}return e},Lh=e=>typeof e==`string`?e.replace(` `,`T`):e,Rh=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},zh=e=>typeof e==`function`?e:function(){return e},Bh=typeof self<`u`?self:null,Vh=typeof window<`u`?window:null,Hh=Bh||Vh||globalThis,Uh=`2.0.0`,Wh=1e4,Gh=1e3,Kh={connecting:0,open:1,closing:2,closed:3},qh={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Jh={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},Yh={longpoll:`longpoll`,websocket:`websocket`},Xh={complete:4},Zh=`base64url.bearer.phx.`,Qh=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},$h=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},eg=class{constructor(e,t,n){this.state=qh.closed,this.topic=e,this.params=zh(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Qh(this,Jh.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new $h(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=qh.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=qh.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=qh.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=qh.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new Qh(this,Jh.leave,zh({}),this.timeout).send(),this.state=qh.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Jh.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=qh.closed,this.bindings=[]}onClose(e){this.on(Jh.close,e)}onError(e){return this.on(Jh.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Qh(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=qh.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(Jh.close,`leave`)},n=new Qh(this,Jh.leave,zh({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=qh.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===qh.closed}isErrored(){return this.state===qh.errored}isJoined(){return this.state===qh.joined}isJoining(){return this.state===qh.joining}isLeaving(){return this.state===qh.leaving}},tg=class{static request(e,t,n,r,i,a,o){if(Hh.XDomainRequest){let n=new Hh.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(Hh.XMLHttpRequest){let s=new Hh.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(Hh.fetch&&Hh.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),Hh.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Xh.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},ng=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},rg=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(Zh)&&(this.authToken=atob(t[1].slice(Zh.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=Kh.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+Yh.websocket),`$1/`+Yh.longpoll)}endpointURL(){return tg.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=Kh.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===Kh.open||this.readyState===Kh.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Kh.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=ng(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=Kh.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=tg.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},ig=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},ag={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:Jh.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},og=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Wh,this.transport=t.transport||Hh.WebSocket||rg,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null,this.sessionStore=t.sessionStorage||Hh&&Hh.sessionStorage,this.establishedConnections=0,this.defaultEncoder=ag.encode.bind(ag),this.defaultDecoder=ag.decode.bind(ag),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===rg?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let n=null;Vh&&Vh.addEventListener&&(Vh.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),n=this.connectClock)}),Vh.addEventListener(`pageshow`,e=>{n===this.connectClock&&(n=null,this.connect())}),Vh.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=zh(t.params||{}),this.endPoint=`${e}/${Yh.websocket}`,this.vsn=t.vsn||Uh,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new $h(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return rg}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=tg.appendParams(tg.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=zh(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==rg?this.connectWithFallback(rg,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case rg:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${Zh}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Gh,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===Kh.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(Jh.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case Kh.connecting:return`connecting`;case Kh.open:return`open`;case Kh.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new eg(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},sg=class e{constructor(t,n){let r=ug(n);this.presence=new ig(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=lg(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=cg(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:dg(t),newPresences:cg(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:dg(t),leftPresences:cg(n)}}};function cg(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function lg(e){return JSON.parse(JSON.stringify(e))}function ug(e){return e?.events&&{events:e.events}}function dg(e){return e?.metas?cg(e):[]}var fg;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(fg||={});var pg=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new sg(this.channel.channelAdapter,t)}};function mg(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var hg=class{constructor(e,t,n){let r=gg(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Th.joined}isJoined(){return this.state===Th.joined}isJoining(){return this.state===Th.joining}isClosed(){return this.state===Th.closed}isLeaving(){return this.state===Th.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function gg(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var _g;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(_g||={});var vg;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(vg||={});var yg;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(yg||={});var bg=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new hg(this.socket.socketAdapter,e,this.params),this.presence=new pg(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Rh(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[vg.PRESENCE]&&this.bindings[vg.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(yg.CHANNEL_ERROR,mg(t))}),this._onClose(()=>e?.(yg.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(yg.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=Th.errored;let n=Object.values(t).join(`, `)||`error`;e?.(yg.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(yg.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=Th.errored,n?.(yg.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=Th.errored&&n&&n(yg.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===vg.PRESENCE||e===vg.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(r.Authorization=`Bearer ${this.socket.accessTokenValue}`);let i={method:`POST`,headers:r,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},a=await this._fetchWithTimeout(this.broadcastEndpointURL,i,n.timeout??this.timeout);if(a.status===202)return{success:!0};let o=a.statusText;try{let e=await a.json();o=e.error||e.message||o}catch{}return Promise.reject(Error(o))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Eh;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=kh(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=kh(e.columns,e.old_record)),t}},xg=class{constructor(e,t){this.socket=new og(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Dh.connecting}isDisconnecting(){return this.socket.connectionState()==Dh.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},Sg={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Cg=[1e3,2e3,5e3,1e4],wg=1e4,Tg=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Eg=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Oh,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new xg(e,n),this.httpEndpoint=Rh(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||Dh.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new bg(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:bh};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Eh.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Tg],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??wh,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??Sg.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??Sg.HEARTBEAT_INTERVAL),t.transport=e?.transport??yh.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Cg[e-1]||wg);let n,r,i=e?.vsn??Ch;switch(i){case xh:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case Sh:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Dg=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Og(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function kg(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Ag(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=Og(e.baseUrl,r,i),c=await kg(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Dg(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function jg(e){return e.join(``)}var Mg=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:jg(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${jg(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${jg(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${jg(e.namespace)}`}),!0}catch(e){if(e instanceof Dg&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Dg&&e.status===409)return;throw e}}};function Ng(e){return e.join(``)}var Pg=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Ng(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Dg&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Dg&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Fg=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Ag({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Mg(this.client,t),this.tableOps=new Pg(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Ig(e){"@babel/helpers - typeof";return Ig=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ig(e)}function Lg(e,t){if(Ig(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ig(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Rg(e){var t=Lg(e,`string`);return Ig(t)==`symbol`?t:t+``}function zg(e,t,n){return(t=Rg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Bg(Object(n),!0).forEach(function(t){zg(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bg(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Vg=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Hg(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Ug=class extends Vg{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return J({},super.toJSON())}},Wg=class extends Vg{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function Gg(e,t,n){let r=J({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function Kg(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var qg=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Jg=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Yg=e=>{if(Array.isArray(e))return e.map(e=>Yg(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=Yg(n)}),t},Xg=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),Zg=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},Qg=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Ug(Zg(e),i,n,r))}).catch(()=>{let e=i+``;t(new Ug(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Wg(Zg(e),e,r))},$g=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return J(J({},i),n);if(Jg(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=Gg(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),J(J({},i),n)};async function e_(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,$g(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>Qg(e,c,r,o))})}function t_(e=`storage`){return{get:async(t,n,r,i)=>e_(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>e_(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>e_(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>e_(t,`HEAD`,n,J(J({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>e_(t,`DELETE`,n,i,a,r,e)}}var{get:n_,post:r_,put:i_,head:a_,remove:o_}=t_(`storage`),s_=t_(`vectors`),c_=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=Kg(t),this.fetch=qg(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Gg(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Hg(e))return{data:null,error:e};throw e}}},l_=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Hg(t))return{data:null,error:t};throw t}}},u_=Symbol.toStringTag,d_=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[u_]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new l_(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Hg(t))return{data:null,error:t};throw t}}},f_={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},p_={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},m_=class extends c_{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=J(J({},p_),r),s=J(J({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=Gg(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?i_:r_)(i.fetch,`${i.url}/object/${u}`,a,J({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=J(J({},p_),r),o=J(J({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=Gg(o,e,t);return{path:a,fullPath:(await i_(i.fetch,s.toString(),e,J({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=J({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await r_(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new Vg(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await r_(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await r_(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await r_(r.fetch,`${r.url}/object/sign/${i}`,J({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await r_(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>J(J({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new d_(()=>n_(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>Yg(await n_(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await a_(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Hg(e)){let t=e instanceof Ug?e.status:e instanceof Wg?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await o_(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=J(J(J({},f_),t),{},{prefix:e||``});return await r_(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=J({},e);return await r_(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},h_={"X-Client-Info":`storage-js/2.105.3`},g_=class extends c_{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=J(J({},h_),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await n_(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await n_(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await r_(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await i_(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await r_(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await o_(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},__=class extends c_{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=J(J({},h_),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await r_(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await n_(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await o_(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!Xg(e))throw new Vg(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Fg({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},v_=class extends c_{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=J(J({},h_),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await s_.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await s_.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},y_=class extends c_{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=J(J({},h_),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},b_=class extends c_{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=J(J({},h_),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await s_.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},x_=class extends b_{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new S_(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},S_=class extends v_{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new C_(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},C_=class extends y_{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,J(J({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},w_=class extends g_{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new m_(this.url,this.headers,e,this.fetch)}get vectors(){return new x_(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new __(this.url+`/iceberg`,this.headers,this.fetch)}},T_=`2.105.3`,E_=30*1e3,D_=3*E_,O_=`http://localhost:9999`,k_=`supabase.auth.token`,A_={"X-Client-Info":`gotrue-js/${T_}`},j_=`X-Supabase-Api-Version`,M_={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},N_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,P_=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function Y(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var F_=class extends P_{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function I_(e){return Y(e)&&e.name===`AuthApiError`}var L_=class extends P_{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},R_=class extends P_{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},z_=class extends R_{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function B_(e){return Y(e)&&e.name===`AuthSessionMissingError`}var V_=class extends R_{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},H_=class extends R_{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},U_=class extends R_{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function W_(e){return Y(e)&&e.name===`AuthImplicitGrantRedirectError`}var G_=class extends R_{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},K_=class extends R_{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},q_=class extends R_{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function J_(e){return Y(e)&&e.name===`AuthRetryableFetchError`}var Y_=class extends R_{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},X_=class extends R_{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},Z_=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),Q_=` 	
\r=`.split(``),$_=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Q_.length;t+=1)e[Q_[t].charCodeAt(0)]=-2;for(let t=0;t<Z_.length;t+=1)e[Z_[t].charCodeAt(0)]=t;return e})();function ev(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(Z_[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(Z_[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function tv(e,t,n){let r=$_[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function nv(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{av(e,r,n)};for(let t=0;t<e.length;t+=1)tv(e.charCodeAt(t),i,a);return t.join(``)}function rv(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function iv(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}rv(r,t)}}function av(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function ov(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)tv(e.charCodeAt(t),n,r);return new Uint8Array(t)}function sv(e){let t=[];return iv(e,e=>t.push(e)),new Uint8Array(t)}function cv(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>ev(e,n,r)),ev(null,n,r),t.join(``)}function lv(e){return Math.round(Date.now()/1e3)+e}function uv(){return Symbol(`auth-callback`)}var dv=()=>typeof window<`u`&&typeof document<`u`,fv={tested:!1,writable:!1},pv=()=>{if(!dv())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(fv.tested)return fv.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),fv.tested=!0,fv.writable=!0}catch{fv.tested=!0,fv.writable=!1}return fv.writable};function mv(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var hv=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),gv=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,_v=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},vv=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},yv=async(e,t)=>{await e.removeItem(t)},bv=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};bv.promiseConstructor=Promise;function xv(e){let t=e.split(`.`);if(t.length!==3)throw new X_(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!N_.test(t[e]))throw new X_(`JWT not in base64url format`);return{header:JSON.parse(nv(t[0])),payload:JSON.parse(nv(t[1])),signature:ov(t[2]),raw:{header:t[0],payload:t[1]}}}async function Sv(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Cv(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function wv(e){return(`0`+e.toString(16)).substr(-2)}function Tv(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,wv).join(``)}async function Ev(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Dv(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Ev(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function Ov(e,t,n=!1){let r=Tv(),i=r;n&&(i+=`/recovery`),await _v(e,`${t}-code-verifier`,i);let a=await Dv(r);return[a,r===a?`plain`:`s256`]}var kv=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Av(e){let t=e.headers.get(j_);if(!t||!t.match(kv))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function jv(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Mv(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var Nv=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Pv(e){if(!Nv.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function Fv(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Iv(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Lv(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function Rv(e){return JSON.parse(JSON.stringify(e))}var zv=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},Bv=[502,503,504,520,521,522,523,524,530];async function Vv(e){if(!gv(e))throw new q_(zv(e),0);if(Bv.includes(e.status))throw new q_(zv(e),e.status);let t;try{t=await e.json()}catch(e){throw new L_(zv(e),e)}let n,r=Av(e);if(r&&r.getTime()>=M_[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new Y_(zv(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new Y_(zv(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new z_;throw new F_(zv(t),e.status||500,n)}var Hv=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function X(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[j_]=M_[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await Uv(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function Uv(e,t,n,r,i,a){let o=Hv(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new q_(zv(e),0)}if(s.ok||await Vv(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await Vv(e)}}function Wv(e){let t=null;Xv(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=lv(e.expires_in)));let n=e.user??e;return{data:{session:t,user:n},error:null}}function Gv(e){let t=Wv(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function Kv(e){return{data:{user:e.user??e},error:null}}function qv(e){return{data:e,error:null}}function Jv(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=Gm(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function Yv(e){return e}function Xv(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var Zv=[`global`,`local`,`others`],Qv=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=hv(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Zv[0]){if(Zv.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${Zv.join(`, `)}`);try{return await X(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(Y(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await X(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Kv})}catch(e){if(Y(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=Gm(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await X(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Jv,redirectTo:t?.redirectTo})}catch(e){if(Y(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await X(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Kv})}catch(e){if(Y(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await X(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Yv});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(Y(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){Pv(e);try{return await X(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Kv})}catch(e){if(Y(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){Pv(e);try{return await X(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Kv})}catch(e){if(Y(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){Pv(e);try{return await X(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Kv})}catch(e){if(Y(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){Pv(e.userId);try{let{data:t,error:n}=await X(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _deleteFactor(e){Pv(e.userId),Pv(e.id);try{return{data:await X(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await X(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Yv});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(Y(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await X(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await X(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await X(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await X(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await X(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await X(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(Y(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await X(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await X(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await X(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await X(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){Fv(this.experimental),Pv(e.userId);try{return await X(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(Y(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){Fv(this.experimental),Pv(e.userId),Pv(e.passkeyId);try{return await X(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(Y(e))return{data:null,error:e};throw e}}};function $v(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}var ey={debug:!!(globalThis&&pv()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`)===`true`)},ty=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}},ny=class extends ty{};async function ry(e,t,n){ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire lock`,e,t);let r=new globalThis.AbortController,i;t>0&&(i=setTimeout(()=>{r.abort(),ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock acquire timed out`,e)},t)),await Promise.resolve();try{return await globalThis.navigator.locks.request(e,t===0?{mode:`exclusive`,ifAvailable:!0}:{mode:`exclusive`,signal:r.signal},async r=>{if(r){clearTimeout(i),ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquired`,e,r.name);try{return await n()}finally{ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released`,e,r.name)}}else if(t===0)throw ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: not immediately available`,e),new ny(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);else{if(ey.debug)try{let e=await globalThis.navigator.locks.query();console.log(`@supabase/gotrue-js: Navigator LockManager state`,JSON.stringify(e,null,`  `))}catch(e){console.warn(`@supabase/gotrue-js: Error when querying Navigator LockManager state`,e)}return console.warn(`@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`),clearTimeout(i),await n()}})}catch(a){if(t>0&&clearTimeout(i),typeof a==`object`&&a&&`name`in a&&a.name===`AbortError`&&t>0){if(r.signal.aborted)return ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock`,e),console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,{mode:`exclusive`,steal:!0},async t=>{if(t){ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: recovered (stolen)`,e,t.name);try{return await n()}finally{ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released (stolen)`,e,t.name)}}else return console.warn(`@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true`),await n()}));throw ey.debug&&console.log(`@supabase/gotrue-js: navigatorLock: lock was stolen by another request`,e),new ny(`Lock "${e}" was released because another request stole it`)}throw a}}function iy(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,`__magic__`,{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function ay(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function oy(e){return parseInt(e,16)}function sy(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function cy(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=ay(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var ly=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},uy=class extends ly{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function dy({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new ly({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new ly({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new ly({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new ly({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new ly({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new ly({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new ly({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new ly({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!vy(t))return new ly({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new ly({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new ly({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new ly({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new ly({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function fy({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new ly({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new ly({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!vy(t))return new ly({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new ly({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new ly({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new ly({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var py=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function my(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=Gm(e,[`challenge`,`user`,`excludeCredentials`]),a=ov(t).buffer,o=Object.assign(Object.assign({},n),{id:ov(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:ov(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function hy(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=Gm(e,[`challenge`,`allowCredentials`]),i=ov(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:ov(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function gy(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:cv(new Uint8Array(e.response.attestationObject)),clientDataJSON:cv(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function _y(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:cv(new Uint8Array(r.authenticatorData)),clientDataJSON:cv(new Uint8Array(r.clientDataJSON)),signature:cv(new Uint8Array(r.signature)),userHandle:r.userHandle?cv(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function vy(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function yy(){return!!(dv()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function by(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new uy(`Browser returned unexpected credential type`,t)}:{data:null,error:new uy(`Empty credential response`,t)}}catch(t){return{data:null,error:dy({error:t,options:e})}}}async function xy(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new uy(`Browser returned unexpected credential type`,t)}:{data:null,error:new uy(`Empty credential response`,t)}}catch(t){return{data:null,error:fy({error:t,options:e})}}}var Sy={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Cy={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function wy(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=wy(n,a):r[e]=wy(a)}else r[e]=a}return r}function Ty(e,t){return wy(Sy,e,t||{})}function Ey(e,t){return wy(Cy,e,t||{})}var Dy=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??py.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await by({publicKey:Ty(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Ey(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await xy(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return Y(e)?{data:null,error:e}:{data:null,error:new L_(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new P_(`rpId is required for WebAuthn authentication`)};try{if(!yy())return{data:null,error:new L_(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return Y(e)?{data:null,error:e}:{data:null,error:new L_(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new P_(`rpId is required for WebAuthn registration`)};try{if(!yy())return{data:null,error:new L_(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return Y(e)?{data:null,error:e}:{data:null,error:new L_(`Unexpected error in register`,e)}}}};iy();var Oy={url:O_,storageKey:k_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:A_,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};async function ky(e,t,n){return await n()}var Ay={},jy=class e{get jwks(){return Ay[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Ay[this.storageKey]=Object.assign(Object.assign({},Ay[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Ay[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Ay[this.storageKey]=Object.assign(Object.assign({},Ay[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Oy),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&dv()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new Qv({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=hv(r.fetch),this.lock=r.lock||ky,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock?this.lock=r.lock:this.persistSession&&dv()&&(globalThis==null?void 0:globalThis.navigator)?.locks?this.lock=ry:this.lock=ky,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Dy(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:pv()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=$v(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=$v(this.memoryStorage)),dv()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${T_}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(dv()&&(e=mv(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),dv()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),W_(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return Y(e)?this._returnResult({error:e}):this._returnResult({error:new L_(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await X(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:Wv});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await Ov(this.storage,this.storageKey)),t=await X(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:Wv})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await X(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Wv})}else throw new H_(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await yv(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await X(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Gv})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await X(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Gv})}else throw new H_(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new V_;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!dv()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=ay(l[0]),d=o?.signInWithEthereum?.chainId;d||=oy(await s.request({method:`eth_chainId`})),t=cy({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[sy(t),u]})}try{let{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:Wv});if(i)throw i;if(!r||!r.session||!r.user){let e=new V_;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!dv()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:cv(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:Wv});if(i)throw i;if(!r||!r.session||!r.user){let e=new V_;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await vv(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new K_;let{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:Wv});if(await yv(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new V_;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await X(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:Wv});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new V_;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await Ov(this.storage,this.storageKey));let{error:a}=await X(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new H_(`You must provide either an email or phone number.`)}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:Wv});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await Ov(this.storage,this.storageKey));let r=await X(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:qv});return r.data?.url&&dv()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new z_;let{error:r}=await X(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,{error:a}=await X(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},redirectTo:i?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await X(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new H_(`You must provide either an email or phone number and a type`)}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lockAcquired||this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await vv(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<D_:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await vv(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=Iv()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=Lv(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await X(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:Kv}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new z_}:await X(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:Kv})})}catch(e){if(Y(e))return B_(e)&&(await this._removeSession(),await yv(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new z_;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await Ov(this.storage,this.storageKey));let{data:c,error:l}=await X(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:Kv});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new z_;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=xv(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(Y(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new z_;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!dv())throw new U_(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new U_(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new G_(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new U_(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new G_(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new U_(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(Y(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){let t=await vv(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!B_(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(I_(t)&&(t.status===404||t.status===401||t.status===403)||B_(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await yv(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=uv(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),B_(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await Ov(this.storage,this.storageKey,!0));try{return await X(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await X(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return dv()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(Y(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await X(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Wv});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new V_}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await yv(this.storage,`${this.storageKey}-code-verifier`),Y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await X(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,`begin`);try{let n=Date.now();return await Cv(async n=>(n>0&&await Sv(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await X(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Wv})),(e,t)=>{let r=200*2**e;return t&&J_(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),Y(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),dv()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await vv(this.storage,this.storageKey);if(t&&this.userStorage){let e=await vv(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await _v(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??Iv()}else if(t&&!t.user&&!t.user){let e=await vv(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await yv(this.storage,this.storageKey+`-user`),await _v(this.storage,this.storageKey,t)):t.user=Iv()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<D_;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${D_}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(console.error(n),J_(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession()))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new z_;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,`begin`);try{this.refreshingDeferred=new bv;let{data:t,error:n}=await this._refreshAccessToken(e);if(n)throw n;if(!t.session)throw new z_;await this._saveSession(t.session),await this._notifyAllSubscribers(`TOKEN_REFRESHED`,t.session);let r={data:t.session,error:null};return this.refreshingDeferred.resolve(r),r}catch(e){if(this._debug(r,`error`,e),Y(e)){let n={data:null,error:e};return J_(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await yv(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await _v(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=Rv(e);await _v(this.storage,this.storageKey,r)}else{let e=Rv(t);await _v(this.storage,this.storageKey,e)}}async _removeSession(){this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await yv(this.storage,this.storageKey),await yv(this.storage,this.storageKey+`-code-verifier`),await yv(this.storage,this.storageKey+`-user`),this.userStorage&&await yv(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&dv()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),E_);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug(`#_autoRefreshTokenTick()`,`begin`);try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/E_);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${E_}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof ty)this._debug(`auto refresh token tick lock not available`);else throw e}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!dv()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()}))):document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await Ov(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await X(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await X(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?gy(e.webauthn.credential_response):_y(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await X(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await X(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:my(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:hy(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}})}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=xv(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=xv(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await X(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new z_})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new z_});let a=await X(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&dv()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new z_});let a=await X(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&dv()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await X(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new z_})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await X(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new z_})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await X(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=xv(n);t?.allowExpired||jv(i.exp);let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Mv(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,sv(`${o}.${s}`)))throw new X_(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){Fv(this.experimental);try{if(!yy())return this._returnResult({data:null,error:new L_(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await xy({publicKey:hy(t.options),signal:e?.options?.signal??py.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new L_(`WebAuthn ceremony failed`,null)});let a=_y(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){Fv(this.experimental);try{if(!yy())return this._returnResult({data:null,error:new L_(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await by({publicKey:my(t.options),signal:e?.options?.signal??py.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new L_(`WebAuthn ceremony failed`,null)});let a=gy(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){Fv(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new z_});let{data:r,error:i}=await X(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){Fv(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new z_});let{data:i,error:a}=await X(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){Fv(this.experimental);try{let{data:t,error:n}=await X(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){Fv(this.experimental);try{let{data:t,error:n}=await X(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:Wv});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){Fv(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new z_});let{data:r,error:i}=await X(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){Fv(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new z_});let{data:i,error:a}=await X(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){Fv(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new z_});let{error:i}=await X(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(Y(e))return this._returnResult({data:null,error:e});throw e}}};jy.nextInstanceID={};var My=jy,Ny=`2.105.3`,Py=``;Py=typeof Deno<`u`?`deno`:typeof document<`u`?`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?`react-native`:`node`;var Fy={headers:{"X-Client-Info":`supabase-js-${Py}/${Ny}`}},Iy={schema:`public`},Ly={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},Ry={};function zy(e){"@babel/helpers - typeof";return zy=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},zy(e)}function By(e,t){if(zy(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(zy(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Vy(e){var t=By(e,`string`);return zy(t)==`symbol`?t:t+``}function Hy(e,t,n){return(t=Vy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Uy(Object(n),!0).forEach(function(t){Hy(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uy(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Wy=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Gy=()=>Headers,Ky=(e,t,n)=>{let r=Wy(n),i=Gy();return async(n,a)=>{let o=await t()??e,s=new i(a?.headers);return s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${o}`),r(n,Z(Z({},a),{},{headers:s}))}};function qy(e){return e.endsWith(`/`)?e:e+`/`}function Jy(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u={db:Z(Z({},o),n),auth:Z(Z({},s),r),realtime:Z(Z({},c),i),storage:{},global:Z(Z(Z({},l),a),{},{headers:Z(Z({},l?.headers??{}),a?.headers??{})}),accessToken:async()=>``};return e.accessToken?u.accessToken=e.accessToken:delete u.accessToken,u}function Yy(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(qy(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Xy=class extends My{constructor(e){super(e)}},Zy=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Yy(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:Iy,realtime:Ry,auth:Z(Z({},Ly),{},{storageKey:i}),global:Fy},o=Jy(n??{},a);this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=Ky(t,this._getAccessToken.bind(this),o.global.fetch),this.realtime=this._initRealtimeClient(Z({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new vh(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new w_(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new $m(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Xy({url:this.authUrl.href,headers:Z(Z({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Eg(this.realtimeUrl.href,Z(Z({},e),{},{params:Z(Z({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Qy=(e,t,n)=>new Zy(e,t,n);function $y(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}$y()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var eb=Qy(`https://guioeoxticwrlcwomwsc.supabase.co`,`sb_publishable_QpmXggBCYabyzBvXv0Phlw_O6wZAt7f`);async function tb(e){let{data:{session:t}}=await eb.auth.getSession();if(!t)throw Error(`请先登录`);let n=new Date().toISOString(),r=e.is_published||!1,{data:i,error:a}=await eb.from(`articles`).insert({title:e.title||``,summary:e.summary||``,content:e.content||``,author:e.author||``,cover_image:e.cover_image||``,tags:e.tags||[],is_published:r,published_at:r?n:null,created_at:n,updated_at:n}).select().single();if(a)throw console.error(`创建文章失败:`,a),a;return rb(i)}async function nb(e,t){let{data:{session:n}}=await eb.auth.getSession();if(!n)throw Error(`请先登录`);let r=new Date().toISOString(),i={...t,updated_at:r};t.is_published!==void 0&&(i.is_published=t.is_published,t.is_published&&!t.published_at&&(i.published_at=r));let{data:a,error:o}=await eb.from(`articles`).update(i).eq(`id`,e).select().single();if(o)throw console.error(`更新文章失败:`,o),o;return rb(a)}function rb(e){return{id:e.id,title:e.title,summary:e.summary||``,content:e.content,author:e.author||``,cover_image:e.cover_image||``,tags:e.tags||[],is_published:e.is_published,published_at:e.published_at,createdAt:e.created_at,updatedAt:e.updated_at}}var ib=t({canEditArticles:()=>ob,getCurrentUser:()=>ab,onAuthStateChange:()=>lb,signInWithEmail:()=>sb,signOut:()=>cb});async function ab(){let{data:{session:e}}=await eb.auth.getSession();if(!e?.user)return null;let{data:t}=await eb.from(`user_roles`).select(`role`).eq(`user_id`,e.user.id).single();return{id:e.user.id,email:e.user.email,role:t?.role||`user`}}async function ob(){let e=await ab();return e?.role===`admin`||e?.role===`editor`}async function sb(e,t){let{data:n,error:r}=await eb.auth.signInWithPassword({email:e,password:t});if(r)throw r;return n}async function cb(){let{error:e}=await eb.auth.signOut();if(e)throw e}function lb(e){return eb.auth.onAuthStateChange(async(t,n)=>{if(n?.user){let{data:t}=await eb.from(`user_roles`).select(`role`).eq(`user_id`,n.user.id).single();e({id:n.user.id,email:n.user.email,role:t?.role||`user`})}else e(null)})}var ub=`modulepreload`,db=function(e,t){return new URL(e,t).href},fb={},pb=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=db(t,n),t in fb)return;fb[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ub,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},mb=class extends O{constructor(...e){super(...e),this.articles=[],this.loading=!0,this.error=``,this.selectedTag=null,this.searchKeyword=``,this.user=null,this.canEdit=!1,this.showLoginModal=!1,this.loginEmail=``,this.loginPassword=``,this.loginError=``,this.loginLoading=!1}static{this.styles=c`
    :host {
      display: block;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    .header h1 {
      color: white;
      font-size: 28px;
      margin-bottom: 8px;
    }
    .header p {
      color: rgba(255,255,255,0.8);
      font-size: 14px;
    }
    .user-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .user-info {
      color: white;
      font-size: 14px;
      text-align: right;
    }
    .user-role {
      font-size: 12px;
      color: rgba(255,255,255,0.7);
    }
    .login-btn, .logout-btn {
      padding: 8px 16px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .login-btn:hover, .logout-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .search-section {
      display: flex;
      gap: 12px;
    }
    .search-input {
      flex: 1;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
    }
    .search-btn {
      padding: 12px 24px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .search-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .articles-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .section-title {
      color: #333;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tags-filter {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .tag-btn {
      padding: 6px 14px;
      border: 1px solid #e8e8e8;
      background: white;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
      color: #666;
    }
    .tag-btn:hover {
      border-color: #667eea;
      color: #667eea;
    }
    .tag-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .article-card {
      background: #fafafa;
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    .article-card:hover {
      background: white;
      border-color: #667eea;
      box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
      transform: translateY(-2px);
    }
    .article-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .article-summary {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .article-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      color: #999;
    }
    .article-tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .article-tag {
      padding: 2px 8px;
      background: #f0f0f0;
      border-radius: 4px;
      font-size: 11px;
      color: #666;
    }
    .loading {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }
    .empty-icon {
      font-size: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }
    .error {
      text-align: center;
      padding: 40px 20px;
      color: #e74c3c;
    }
    .retry-btn {
      margin-top: 16px;
      padding: 10px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .write-btn {
      position: fixed;
      right: 24px;
      bottom: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .write-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(102, 126, 234, 0.5);
    }
    .write-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .modal {
      background: white;
      border-radius: 16px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .modal-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #333;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
    }
    .form-input:focus {
      border-color: #667eea;
    }
    .modal-error {
      background: #fff2f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
      color: #cf1322;
      font-size: 14px;
    }
    .modal-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    .modal-btn {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .modal-btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
    }
    .modal-btn-primary:hover:not(:disabled) {
      opacity: 0.9;
    }
    .modal-btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .modal-btn-secondary {
      background: #f5f5f5;
      color: #666;
      border: none;
    }
    .modal-btn-secondary:hover {
      background: #e8e8e8;
    }
  `}async connectedCallback(){super.connectedCallback(),this.loadArticles(),this.checkUserPermissions();let{data:e}=lb(e=>{this.user=e,this.checkUserPermissions()});this.authUnsubscribe=e.subscription.unsubscribe}disconnectedCallback(){super.disconnectedCallback(),this.authUnsubscribe?.()}async checkUserPermissions(){let e=await ab();this.user=e,this.canEdit=await ob()}async loadArticles(){this.loading=!0,this.error=``;try{this.articles=Hm()}catch(e){this.error=`加载文章失败`,console.error(e)}finally{this.loading=!1}}async handleSearch(){if(!this.searchKeyword.trim()){this.loadArticles();return}this.loading=!0,this.error=``;try{this.articles=await Um(this.searchKeyword.trim()),this.selectedTag=null}catch(e){this.error=`搜索失败，请重试`,console.error(e)}finally{this.loading=!1}}async handleTagClick(e){if(this.selectedTag===e){this.selectedTag=null,this.loadArticles();return}this.selectedTag=e,this.loading=!0,this.error=``;try{this.articles=await Wm(e)}catch(e){this.error=`加载文章失败`,console.error(e)}finally{this.loading=!1}}handleArticleClick(e){this.dispatchEvent(new CustomEvent(`article-click`,{bubbles:!0,composed:!0,detail:e}))}handleWriteArticle(){if(!this.canEdit){this.showLoginModal=!0;return}this.dispatchEvent(new CustomEvent(`write-article`,{bubbles:!0,composed:!0}))}async handleLogin(){if(!this.loginEmail.trim()||!this.loginPassword.trim()){this.loginError=`请输入邮箱和密码`;return}this.loginLoading=!0,this.loginError=``;try{let{signInWithEmail:e}=await pb(async()=>{let{signInWithEmail:e}=await Promise.resolve().then(()=>ib);return{signInWithEmail:e}},void 0,import.meta.url);if(await e(this.loginEmail.trim(),this.loginPassword.trim()),!await ob()){this.loginError=`您没有编辑文章的权限`,await cb(),this.loginLoading=!1;return}this.showLoginModal=!1,this.loginEmail=``,this.loginPassword=``,await this.checkUserPermissions()}catch(e){this.loginError=e.message||`登录失败`}finally{this.loginLoading=!1}}async handleLogout(){try{let{signOut:e}=await pb(async()=>{let{signOut:e}=await Promise.resolve().then(()=>ib);return{signOut:e}},void 0,import.meta.url);await e(),this.user=null,this.canEdit=!1}catch(e){console.error(`退出失败:`,e)}}getAllTags(){let e=new Set;return this.articles.forEach(t=>{t.tags?.forEach(t=>e.add(t))}),Array.from(e)}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}getRoleLabel(e){return{admin:`管理员`,editor:`编辑`,user:`用户`}[e]||e}render(){let e=this.getAllTags();return D`
      <div class="header">
        <div class="header-top">
          <div>
            <h1>📚 文章中心</h1>
            <p>阅读专业指南，评估治疗方案</p>
          </div>
          <div class="user-section">
            ${this.user?D`
              <div class="user-info">
                <div>${this.user.email}</div>
                <div class="user-role">${this.getRoleLabel(this.user.role)}</div>
              </div>
              <button class="logout-btn" @click="${this.handleLogout}">退出</button>
            `:D`
              <button class="login-btn" @click="${()=>this.showLoginModal=!0}">登录</button>
            `}
          </div>
        </div>
        <div class="search-section">
          <input
            type="text"
            class="search-input"
            placeholder="搜索文章标题或摘要..."
            .value="${this.searchKeyword}"
            @input="${e=>{this.searchKeyword=e.target.value}}"
            @keydown="${e=>{e.key===`Enter`&&this.handleSearch()}}"
          />
          <button class="search-btn" @click="${this.handleSearch}">搜索</button>
        </div>
      </div>

      <div class="articles-section">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          ${this.selectedTag?`标签: ${this.selectedTag}`:`全部文章`}
        </div>

        ${e.length>0?D`
          <div class="tags-filter">
            <button
              class="tag-btn ${this.selectedTag?``:`active`}"
              @click="${()=>{this.selectedTag=null,this.loadArticles()}}"
            >
              全部
            </button>
            ${e.map(e=>D`
              <button
                class="tag-btn ${this.selectedTag===e?`active`:``}"
                @click="${()=>this.handleTagClick(e)}"
              >
                ${e}
              </button>
            `)}
          </div>
        `:``}

        ${this.loading?D`
          <div class="loading">
            <div class="empty-icon">⏳</div>
            <p>加载中...</p>
          </div>
        `:this.error?D`
          <div class="error">
            <p>${this.error}</p>
            <button class="retry-btn" @click="${this.loadArticles}">重试</button>
          </div>
        `:this.articles.length===0?D`
          <div class="empty-state">
            <div class="empty-icon">📝</div>
            <p>暂无文章</p>
          </div>
        `:D`
          <div class="articles-grid">
            ${this.articles.map(e=>D`
              <div class="article-card" @click="${()=>this.handleArticleClick(e)}">
                <div class="article-title">${e.title}</div>
                <div class="article-summary">${e.summary}</div>
                <div class="article-meta">
                  <span>📅 ${this.formatDate(e.published_at||e.createdAt)}</span>
                  ${e.tags&&e.tags.length>0?D`
                    <div class="article-tags">
                      ${e.tags.slice(0,3).map(e=>D`
                        <span class="article-tag">${e}</span>
                      `)}
                    </div>
                  `:``}
                </div>
              </div>
            `)}
          </div>
        `}
      </div>

      <button 
        class="write-btn" 
        @click="${this.handleWriteArticle}" 
        title="${this.canEdit?`写文章`:`需要登录才能写文章`}"
        ?disabled="${!this.canEdit&&!this.user}"
      >
        ✏️
      </button>

      ${this.showLoginModal?D`
        <div class="modal-overlay" @click="${e=>{e.target===e.currentTarget&&(this.showLoginModal=!1)}}">
          <div class="modal">
            <div class="modal-title">🔐 管理员登录</div>
            
            ${this.loginError?D`
              <div class="modal-error">${this.loginError}</div>
            `:``}
            
            <div class="form-group">
              <label class="form-label">邮箱</label>
              <input
                type="email"
                class="form-input"
                placeholder="输入邮箱"
                .value="${this.loginEmail}"
                @input="${e=>{this.loginEmail=e.target.value}}"
                @keydown="${e=>{e.key===`Enter`&&this.handleLogin()}}"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">密码</label>
              <input
                type="password"
                class="form-input"
                placeholder="输入密码"
                .value="${this.loginPassword}"
                @input="${e=>{this.loginPassword=e.target.value}}"
                @keydown="${e=>{e.key===`Enter`&&this.handleLogin()}}"
              />
            </div>
            
            <div class="modal-actions">
              <button 
                class="modal-btn modal-btn-secondary" 
                @click="${()=>this.showLoginModal=!1}"
              >
                取消
              </button>
              <button 
                class="modal-btn modal-btn-primary" 
                @click="${this.handleLogin}"
                ?disabled="${this.loginLoading}"
              >
                ${this.loginLoading?`登录中...`:`登录`}
              </button>
            </div>
          </div>
        </div>
      `:``}
    `}};M([j()],mb.prototype,`articles`,void 0),M([j()],mb.prototype,`loading`,void 0),M([j()],mb.prototype,`error`,void 0),M([j()],mb.prototype,`selectedTag`,void 0),M([j()],mb.prototype,`searchKeyword`,void 0),M([j()],mb.prototype,`user`,void 0),M([j()],mb.prototype,`canEdit`,void 0),M([j()],mb.prototype,`showLoginModal`,void 0),M([j()],mb.prototype,`loginEmail`,void 0),M([j()],mb.prototype,`loginPassword`,void 0),M([j()],mb.prototype,`loginError`,void 0),M([j()],mb.prototype,`loginLoading`,void 0),mb=M([k(`article-list-page`)],mb);function hb(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var gb=hb();function _b(e){gb=e}var vb={exec:()=>null};function Q(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(bb.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var yb=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),bb={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},xb=/^(?:[ \t]*(?:\n|$))+/,Sb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Cb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,wb=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Eb=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Db=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ob=Q(Db).replace(/bull/g,Eb).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),kb=Q(Db).replace(/bull/g,Eb).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ab=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,jb=/^[^\n]+/,Mb=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Nb=Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Mb).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pb=Q(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Eb).getRegex(),Fb=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Ib=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lb=Q(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Ib).replace(`tag`,Fb).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rb=Q(Ab).replace(`hr`,wb).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Fb).getRegex(),zb={blockquote:Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Rb).getRegex(),code:Sb,def:Nb,fences:Cb,heading:Tb,hr:wb,html:Lb,lheading:Ob,list:Pb,newline:xb,paragraph:Rb,table:vb,text:jb},Bb=Q(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,wb).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Fb).getRegex(),Vb={...zb,lheading:kb,table:Bb,paragraph:Q(Ab).replace(`hr`,wb).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Bb).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Fb).getRegex()},Hb={...zb,html:Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Ib).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vb,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Q(Ab).replace(`hr`,wb).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ob).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ub=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Wb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Gb=/^( {2,}|\\)\n(?!\s*$)/,Kb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qb=/[\p{P}\p{S}]/u,Jb=/[\s\p{P}\p{S}]/u,Yb=/[^\s\p{P}\p{S}]/u,Xb=Q(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Jb).getRegex(),Zb=/(?!~)[\p{P}\p{S}]/u,Qb=/(?!~)[\s\p{P}\p{S}]/u,$b=/(?:[^\s\p{P}\p{S}]|~)/u,ex=Q(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,yb?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),tx=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,nx=Q(tx,`u`).replace(/punct/g,qb).getRegex(),rx=Q(tx,`u`).replace(/punct/g,Zb).getRegex(),ix=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ax=Q(ix,`gu`).replace(/notPunctSpace/g,Yb).replace(/punctSpace/g,Jb).replace(/punct/g,qb).getRegex(),ox=Q(ix,`gu`).replace(/notPunctSpace/g,$b).replace(/punctSpace/g,Qb).replace(/punct/g,Zb).getRegex(),sx=Q(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Yb).replace(/punctSpace/g,Jb).replace(/punct/g,qb).getRegex(),cx=Q(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,qb).getRegex(),lx=Q(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Yb).replace(/punctSpace/g,Jb).replace(/punct/g,qb).getRegex(),ux=Q(/\\(punct)/,`gu`).replace(/punct/g,qb).getRegex(),dx=Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fx=Q(Ib).replace(`(?:-->|$)`,`-->`).getRegex(),px=Q(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,fx).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),mx=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,hx=Q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,mx).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gx=Q(/^!?\[(label)\]\[(ref)\]/).replace(`label`,mx).replace(`ref`,Mb).getRegex(),_x=Q(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Mb).getRegex(),vx=Q(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,gx).replace(`nolink`,_x).getRegex(),yx=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,bx={_backpedal:vb,anyPunctuation:ux,autolink:dx,blockSkip:ex,br:Gb,code:Wb,del:vb,delLDelim:vb,delRDelim:vb,emStrongLDelim:nx,emStrongRDelimAst:ax,emStrongRDelimUnd:sx,escape:Ub,link:hx,nolink:_x,punctuation:Xb,reflink:gx,reflinkSearch:vx,tag:px,text:Kb,url:vb},xx={...bx,link:Q(/^!?\[(label)\]\((.*?)\)/).replace(`label`,mx).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,mx).getRegex()},Sx={...bx,emStrongRDelimAst:ox,emStrongLDelim:rx,delLDelim:cx,delRDelim:lx,url:Q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,yx).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Q(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,yx).getRegex()},Cx={...Sx,br:Q(Gb).replace(`{2,}`,`*`).getRegex(),text:Q(Sx.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},wx={normal:zb,gfm:Vb,pedantic:Hb},Tx={normal:bx,gfm:Sx,breaks:Cx,pedantic:xx},Ex={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Dx=e=>Ex[e];function Ox(e,t){if(t){if(bb.escapeTest.test(e))return e.replace(bb.escapeReplace,Dx)}else if(bb.escapeTestNoEncode.test(e))return e.replace(bb.escapeReplaceNoEncode,Dx);return e}function kx(e){try{e=encodeURI(e).replace(bb.percentDecode,`%`)}catch{return null}return e}function Ax(e,t){let n=e.replace(bb.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(bb.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(bb.slashPipe,`|`);return n}function jx(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Mx(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&bb.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Nx(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Px(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Fx(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ix(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Lx=class{options;rules;lexer;constructor(e){this.options=e||gb}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Mx(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ix(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=jx(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:jx(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:jx(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=jx(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Px(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Mx(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:jx(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ax(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:jx(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Ax(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:jx(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=jx(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Nx(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Fx(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Fx(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Rx=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||gb,this.options.tokenizer=this.options.tokenizer||new Lx,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:bb,block:wx.normal,inline:Tx.normal};this.options.pedantic?(t.block=wx.pedantic,t.inline=Tx.pedantic):this.options.gfm&&(t.block=wx.gfm,this.options.breaks?t.inline=Tx.breaks:t.inline=Tx.gfm),this.tokenizer.rules=t}static get rules(){return{block:wx,inline:Tx}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(bb.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(bb.tabCharGlobal,`    `).replace(bb.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},zx=class{options;parser;constructor(e){this.options=e||gb}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(bb.notSpaceStart)?.[0],i=e.replace(bb.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Ox(r)+`">`+(n?i:Ox(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Ox(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ox(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=kx(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Ox(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=kx(e);if(i===null)return Ox(n);e=i;let a=`<img src="${e}" alt="${Ox(n)}"`;return t&&(a+=` title="${Ox(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Ox(e.text)}},Bx=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Vx=class e{options;renderer;textRenderer;constructor(e){this.options=e||gb,this.options.renderer=this.options.renderer||new zx,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Bx}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Hx=class{options;block;constructor(e){this.options=e||gb}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Rx.lex:Rx.lexInline}provideParser(e=this.block){return e?Vx.parse:Vx.parseInline}},Ux=new class{defaults=hb();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Vx;Renderer=zx;TextRenderer=Bx;Lexer=Rx;Tokenizer=Lx;Hooks=Hx;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new zx(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Lx(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Hx;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Hx.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Hx.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Rx.lex(e,t??this.defaults)}parser(e,t){return Vx.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Rx.lex:Rx.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Vx.parse:Vx.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Rx.lex:Rx.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Vx.parse:Vx.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ox(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Ux.parse(e,t)}$.options=$.setOptions=function(e){return Ux.setOptions(e),$.defaults=Ux.defaults,_b($.defaults),$},$.getDefaults=hb,$.defaults=gb,$.use=function(...e){return Ux.use(...e),$.defaults=Ux.defaults,_b($.defaults),$},$.walkTokens=function(e,t){return Ux.walkTokens(e,t)},$.parseInline=Ux.parseInline,$.Parser=Vx,$.parser=Vx.parse,$.Renderer=zx,$.TextRenderer=Bx,$.Lexer=Rx,$.lexer=Rx.lex,$.Tokenizer=Lx,$.Hooks=Hx,$.parse=$,$.options,$.setOptions,$.use,$.walkTokens,$.parseInline,Vx.parse,Rx.lex;var Wx=class extends O{constructor(...e){super(...e),this.archives=[],this.selectedArchiveId=``,this.matchResults=[],this.recommendations=[],this.overallMatch=0}static{this.styles=c`
    :host {
      display: block;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
    }
    .header-icon {
      font-size: 24px;
    }
    .header-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .archive-selector {
      margin-bottom: 16px;
    }
    .selector-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .archive-chips {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .archive-chip {
      padding: 8px 16px;
      background: #f5f5f5;
      border: 2px solid transparent;
      border-radius: 20px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .archive-chip:hover {
      background: #e8e8e8;
    }
    .archive-chip.active {
      background: #f0f5ff;
      border-color: #667eea;
      color: #667eea;
    }
    .match-overview {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
      color: white;
    }
    .match-score {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .score-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: 700;
    }
    .score-label {
      font-size: 14px;
      opacity: 0.9;
    }
    .score-value {
      font-size: 32px;
      font-weight: 700;
    }
    .match-details {
      margin-top: 16px;
    }
    .match-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .match-item:last-child {
      border-bottom: none;
    }
    .match-icon {
      font-size: 18px;
    }
    .match-text {
      flex: 1;
      font-size: 14px;
    }
    .recommendations {
      margin-top: 16px;
    }
    .rec-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .rec-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 12px;
      border-left: 4px solid #667eea;
    }
    .rec-card.high {
      border-left-color: #ff4d4f;
      background: #fff2f0;
    }
    .rec-card.medium {
      border-left-color: #faad14;
      background: #fffbe6;
    }
    .rec-card.low {
      border-left-color: #52c41a;
      background: #f6ffed;
    }
    .rec-card.gene {
      border-left-color: #722ed1;
      background: #f9f0ff;
    }
    .rec-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .rec-priority {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 600;
    }
    .rec-priority.high {
      background: #ffccc7;
      color: #cf1322;
    }
    .rec-priority.medium {
      background: #ffe58f;
      color: #d48806;
    }
    .rec-priority.low {
      background: #b7eb8f;
      color: #389e0d;
    }
    .rec-priority.gene {
      background: #d3adf7;
      color: #722ed1;
    }
    .rec-card-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .rec-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .rec-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .rec-action:hover {
      opacity: 0.9;
    }
    .no-archive {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }
    .no-archive-icon {
      font-size: 48px;
      margin-bottom: 12px;
    }
    .create-archive-btn {
      margin-top: 16px;
      padding: 10px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
    }
  `}connectedCallback(){super.connectedCallback(),this.archives.length>0&&(this.selectedArchiveId=this.archives[0].id,this.calculateMatch())}get selectedArchive(){return this.archives.find(e=>e.id===this.selectedArchiveId)}calculateMatch(){let e=this.selectedArchive;if(!e)return;let t=[],n=0,r=0,i=this.matchStage(e);t.push(i),n+=i.weight,i.status===`match`&&(r+=i.weight);let a=this.matchBilirubin(e);t.push(a),n+=a.weight,(a.status===`match`||a.status===`info`)&&(r+=a.weight);let o=this.matchTreatmentStage(e);t.push(o),n+=o.weight,o.status===`match`&&(r+=o.weight);let s=this.matchExaminations(e);t.push(s),n+=s.weight,s.status===`match`&&(r+=s.weight);let c=this.matchGenes(e);t.push(c),n+=c.weight,(c.status===`match`||c.status===`partial`)&&(r+=c.weight),this.matchResults=t,this.overallMatch=Math.round(r/n*100),this.generateRecommendations(e,t)}matchStage(e){let t=this.article.title.includes(`手术`)||this.article.content.includes(`根治性切除`),n=this.article.title.includes(`化疗`)||this.article.content.includes(`系统治疗`);return t&&e.currentStage===`treatment`?{field:`stage`,label:`治疗阶段`,status:`match`,message:`您当前处于治疗阶段，本文手术方案适用`,weight:30}:n&&e.currentStage===`treatment`?{field:`stage`,label:`治疗阶段`,status:`match`,message:`您当前处于治疗阶段，本文化疗方案适用`,weight:30}:{field:`stage`,label:`治疗阶段`,status:`info`,message:`当前阶段: ${e.currentStage===`examination`?`检查阶段`:`治疗阶段`}`,weight:30}}matchBilirubin(e){let t=e.bilirubinRecords||[];if(t.length===0)return{field:`bilirubin`,label:`胆红素水平`,status:`info`,message:`暂无胆红素记录`,weight:25};let n=t[t.length-1].total;return n>200?{field:`bilirubin`,label:`胆红素水平`,status:`mismatch`,message:`总胆红素 ${n} μmol/L，极高危，需先引流`,weight:25}:n>85?{field:`bilirubin`,label:`胆红素水平`,status:`partial`,message:`总胆红素 ${n} μmol/L，建议术前引流`,weight:25}:n>51?{field:`bilirubin`,label:`胆红素水平`,status:`match`,message:`总胆红素 ${n} μmol/L，接近手术标准`,weight:25}:{field:`bilirubin`,label:`胆红素水平`,status:`match`,message:`总胆红素 ${n} μmol/L，符合手术条件`,weight:25}}matchTreatmentStage(e){let t=e.stageSelectResults?.flatMap(e=>e.completedTreatments||[])||[],n=t.includes(`biliary-drainage`);return t.includes(`surgery`)?{field:`treatment`,label:`治疗状态`,status:`match`,message:`已完成手术，可查看术后辅助治疗`,weight:25}:n?{field:`treatment`,label:`治疗状态`,status:`match`,message:`已完成胆道引流，可考虑手术评估`,weight:25}:{field:`treatment`,label:`治疗状态`,status:`info`,message:`尚未开始主要治疗`,weight:25}}matchExaminations(e){let t=e.stageSelectResults?.flatMap(e=>e.completedExaminations||[])||[];return[`ct`,`mri`,`mrcp`].some(e=>t.includes(e))?{field:`examination`,label:`检查完成度`,status:`match`,message:`已完成 ${t.length} 项检查`,weight:20}:{field:`examination`,label:`检查完成度`,status:`partial`,message:`建议完成CT/MRI/MRCP检查`,weight:20}}matchGenes(e){let t=e.pathologyReport?.geneTestResults||[];if(t.length===0)return{field:`gene`,label:`基因检测`,status:`info`,message:`暂无基因检测记录，建议进行分子分型检测`,weight:25};let n=[`HER2`,`FGFR2`,`IDH1`,`BRAF`,`NTRK`,`MSI-H`,`KRAS`,`RET`,`ERBB2`],r=t.filter(e=>n.some(t=>e.geneName.toUpperCase().includes(t.toUpperCase()))&&e.result===`阳性`).map(e=>e.geneName);return r.length>0?{field:`gene`,label:`基因检测`,status:`match`,message:`检测到可靶向基因突变: ${r.join(`, `)}`,weight:25}:{field:`gene`,label:`基因检测`,status:`info`,message:`已检测基因: ${t.map(e=>e.geneName).join(`, `)}，未发现本文涉及的可靶向突变`,weight:25}}generateRecommendations(e,t){let n=[],r=t.find(e=>e.field===`bilirubin`);r?.status===`mismatch`?n.push({priority:`high`,title:`胆红素过高，需先行引流`,content:`您的胆红素水平超过200μmol/L，属于极高危。根据指南推荐，应先行胆道引流（PTBD或ENBD），将胆红素降至51μmol/L以下再考虑手术。`,action:`查看引流方案`}):r?.status===`partial`&&n.push({priority:`medium`,title:`建议术前胆道引流`,content:`您的胆红素水平在85-200μmol/L之间，建议行术前胆道引流，降低手术风险。`,action:`了解引流方式`}),t.find(e=>e.field===`examination`)?.status===`partial`&&n.push({priority:`medium`,title:`完善术前检查`,content:`建议完成增强CT、MRI+MRCP检查，以准确评估肿瘤分期和可切除性。`,action:`查看检查清单`});let i=t.find(e=>e.field===`gene`);i?.status===`info`&&i.message.includes(`暂无`)&&n.push({priority:`gene`,title:`建议进行基因检测`,content:`基因检测可帮助制定精准治疗方案，特别是HER2、FGFR2、IDH1等靶点的检测。`,action:`了解靶向治疗`}),e.currentStage===`examination`&&n.push({priority:`low`,title:`当前处于检查阶段`,content:`建议完成所有必要检查后，由MDT团队评估最佳治疗方案。`,action:`查看检查阶段指南`}),this.recommendations=n}handleArchiveSelect(e){this.selectedArchiveId=e,this.calculateMatch()}handleAction(e){this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{action:e,articleId:this.article.id}}))}render(){return this.archives.length===0?D`
        <div class="no-archive">
          <div class="no-archive-icon">📋</div>
          <div>暂无患者档案</div>
          <div style="font-size: 13px; margin-top: 8px;">创建档案后可查看本文与您的匹配度</div>
          <button class="create-archive-btn" @click="${()=>this.handleAction(`create-archive`)}">
            创建档案
          </button>
        </div>
      `:D`
      <div class="header">
        <span class="header-icon">📊</span>
        <span class="header-title">本文与您的档案匹配度</span>
      </div>

      <div class="archive-selector">
        <div class="selector-label">选择档案：</div>
        <div class="archive-chips">
          ${this.archives.map(e=>D`
            <div 
              class="archive-chip ${this.selectedArchiveId===e.id?`active`:``}"
              @click="${()=>this.handleArchiveSelect(e.id)}"
            >
              ${e.diseaseName}
            </div>
          `)}
        </div>
      </div>

      <div class="match-overview">
        <div class="match-score">
          <div class="score-circle">${this.overallMatch}%</div>
          <div>
            <div class="score-label">整体匹配度</div>
            <div class="score-value">${this.overallMatch>=70?`高度适用`:this.overallMatch>=40?`部分适用`:`参考适用`}</div>
          </div>
        </div>
        
        <div class="match-details">
          ${this.matchResults.map(e=>D`
            <div class="match-item">
              <span class="match-icon">
                ${e.status===`match`?`✅`:e.status===`partial`?`⚠️`:e.status===`mismatch`?`❌`:`ℹ️`}
              </span>
              <span class="match-text">${e.message}</span>
            </div>
          `)}
        </div>
      </div>

      ${this.recommendations.length>0?D`
        <div class="recommendations">
          <div class="rec-title">💡 个性化建议</div>
          ${this.recommendations.map(e=>D`
            <div class="rec-card ${e.priority===`gene`?`gene`:e.priority}">
              <div class="rec-header">
                <span class="rec-priority ${e.priority}">
                  ${e.priority===`high`?`重要`:e.priority===`medium`?`建议`:e.priority===`gene`?`靶向`:`提示`}
                </span>
                <span class="rec-card-title">${e.title}</span>
              </div>
              <div class="rec-content">${e.content}</div>
              ${e.action?D`
                <span class="rec-action" @click="${()=>this.handleAction(e.action)}">
                  ${e.action} →
                </span>
              `:``}
            </div>
          `)}
        </div>
      `:``}
    `}};M([A({type:Object})],Wx.prototype,`article`,void 0),M([A({type:Object})],Wx.prototype,`componentConfig`,void 0),M([A({type:Array})],Wx.prototype,`archives`,void 0),M([j()],Wx.prototype,`selectedArchiveId`,void 0),M([j()],Wx.prototype,`matchResults`,void 0),M([j()],Wx.prototype,`recommendations`,void 0),M([j()],Wx.prototype,`overallMatch`,void 0),Wx=M([k(`article-archive-matcher`)],Wx);var Gx=class extends O{constructor(...e){super(...e),this.gene=``,this.archives=[],this.showModal=!1,this.selectedResult=``}static{this.styles=c`
    :host {
      display: inline-block;
    }
    .hint {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid transparent;
    }
    .hint:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .hint.positive {
      background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
      color: white;
    }
    .hint.negative {
      background: #f5f5f5;
      color: #666;
      border-color: #d9d9d9;
    }
    .hint.no-data {
      background: #fffbe6;
      color: #d48806;
      border-color: #ffe58f;
    }
    .hint-icon {
      font-size: 14px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal {
      background: white;
      border-radius: 16px;
      padding: 24px;
      width: 320px;
      max-width: 90vw;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
      text-align: center;
    }
    .modal-gene {
      font-size: 24px;
      font-weight: 700;
      color: #667eea;
      text-align: center;
      margin-bottom: 20px;
    }
    .modal-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .modal-option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid #e8e8e8;
    }
    .modal-option:hover {
      border-color: #667eea;
      background: #f6f8ff;
    }
    .modal-option.positive {
      border-color: #52c41a;
    }
    .modal-option.positive.selected {
      background: #f6ffed;
      border-color: #52c41a;
    }
    .modal-option.negative {
      border-color: #ff4d4f;
    }
    .modal-option.negative.selected {
      background: #fff2f0;
      border-color: #ff4d4f;
    }
    .modal-option.skip {
      border-color: #d9d9d9;
    }
    .modal-option.skip.selected {
      background: #f5f5f5;
      border-color: #999;
    }
    .option-icon {
      font-size: 24px;
    }
    .option-text {
      flex: 1;
    }
    .option-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .option-desc {
      font-size: 12px;
      color: #666;
      margin-top: 2px;
    }
    .modal-close {
      margin-top: 16px;
      width: 100%;
      padding: 12px;
      background: #f5f5f5;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    .modal-close:hover {
      background: #e8e8e8;
    }
  `}checkGeneMatch(){if(this.archives.length===0)return{status:`no-data`,text:`点击设置基因状态`,found:!1};let e=this.archives[0]?.pathologyReport?.geneTestResults||[];if(e.length===0)return{status:`no-data`,text:`点击设置基因状态`,found:!1};let t=this.gene.toUpperCase(),n=e.find(e=>e.geneName.toUpperCase().includes(t));return n?n.result===`阳性`?{status:`positive`,text:`✓ ${this.gene}阳性 - 适合靶向药`,found:!0}:{status:`negative`,text:`✗ ${this.gene}${n.result} - 不适合`,found:!0}:{status:`no-data`,text:`点击设置基因状态`,found:!1}}handleHintClick(){this.selectedResult=``,this.showModal=!0}handleOptionSelect(e){this.selectedResult=e}handleConfirm(){this.selectedResult&&(this.dispatchEvent(new CustomEvent(`gene-status-change`,{bubbles:!0,composed:!0,detail:{gene:this.gene,result:this.selectedResult}})),this.showModal=!1)}handleSkip(){this.showModal=!1}render(){let{status:e,text:t}=this.checkGeneMatch();return D`
      <span class="hint ${e}" @click="${this.handleHintClick}">
        <span class="hint-icon">
          ${e===`positive`?`🎯`:e===`negative`?`✗`:`?`}
        </span>
        ${t}
      </span>

      ${this.showModal?D`
        <div class="modal-overlay" @click="${this.handleSkip}">
          <div class="modal" @click="${e=>e.stopPropagation()}">
            <div class="modal-title">设置您的基因状态</div>
            <div class="modal-gene">${this.gene}</div>
            <div class="modal-options">
              <div
                class="modal-option positive ${this.selectedResult===`阳性`?`selected`:``}"
                @click="${()=>this.handleOptionSelect(`阳性`)}"
              >
                <span class="option-icon">🎯</span>
                <div class="option-text">
                  <div class="option-title">阳性</div>
                  <div class="option-desc">适合使用 ${this.gene} 靶向药物</div>
                </div>
              </div>
              <div
                class="modal-option negative ${this.selectedResult===`阴性`?`selected`:``}"
                @click="${()=>this.handleOptionSelect(`阴性`)}"
              >
                <span class="option-icon">✗</span>
                <div class="option-text">
                  <div class="option-title">阴性</div>
                  <div class="option-desc">不适合使用 ${this.gene} 靶向药物</div>
                </div>
              </div>
              <div
                class="modal-option skip ${this.selectedResult===`未检测`?`selected`:``}"
                @click="${()=>this.handleOptionSelect(`未检测`)}"
              >
                <span class="option-icon">—</span>
                <div class="option-text">
                  <div class="option-title">未检测/未知</div>
                  <div class="option-desc">暂不设置，提醒检测</div>
                </div>
              </div>
            </div>
            <button
              class="modal-close"
              @click="${this.handleConfirm}"
              ?disabled="${!this.selectedResult}"
              style="${this.selectedResult?``:`opacity:0.5;cursor:not-allowed`}"
            >
              确认
            </button>
          </div>
        </div>
      `:``}
    `}};M([A({type:String})],Gx.prototype,`gene`,void 0),M([A({type:Array})],Gx.prototype,`archives`,void 0),M([j()],Gx.prototype,`showModal`,void 0),M([j()],Gx.prototype,`selectedResult`,void 0),Gx=M([k(`gene-match-hint`)],Gx);var Kx=class extends O{constructor(...e){super(...e),this.type=`treatment`,this.expandedNodes=new Set,this.currentPath=[]}static{this.styles=c`
    :host {
      display: block;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .header-icon {
      font-size: 24px;
    }
    .header-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .tree-container {
      position: relative;
    }
    .node {
      position: relative;
      margin-bottom: 12px;
    }
    .node-content {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: #f8f9fa;
      border-radius: 10px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s;
    }
    .node-content:hover {
      background: #f0f0f0;
    }
    .node-content.active {
      background: #f0f5ff;
      border-color: #667eea;
    }
    .node-content.completed {
      background: #f6ffed;
      border-color: #52c41a;
    }
    .node-icon {
      font-size: 20px;
      flex-shrink: 0;
    }
    .node-text {
      flex: 1;
    }
    .node-title {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
    }
    .node-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .node-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 600;
      white-space: nowrap;
    }
    .node-badge.current {
      background: #667eea;
      color: white;
    }
    .node-badge.completed {
      background: #52c41a;
      color: white;
    }
    .node-badge.pending {
      background: #d9d9d9;
      color: #666;
    }
    .expand-icon {
      font-size: 12px;
      color: #999;
      transition: transform 0.2s;
    }
    .expand-icon.expanded {
      transform: rotate(90deg);
    }
    .children {
      margin-left: 28px;
      padding-left: 16px;
      border-left: 2px solid #e8e8e8;
      margin-top: 8px;
    }
    .path-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      margin-bottom: 16px;
      color: white;
    }
    .path-title {
      font-size: 14px;
      font-weight: 600;
    }
    .path-steps {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      opacity: 0.9;
    }
    .path-step {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .path-arrow {
      opacity: 0.6;
    }
    .action-panel {
      margin-top: 16px;
      padding: 16px;
      background: #f0f5ff;
      border-radius: 10px;
      border-left: 4px solid #667eea;
    }
    .action-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .action-content {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    .action-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .action-btn:hover {
      opacity: 0.9;
    }
    .legend {
      display: flex;
      gap: 16px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e8e8e8;
      font-size: 12px;
      color: #666;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .legend-dot.current {
      background: #667eea;
    }
    .legend-dot.completed {
      background: #52c41a;
    }
    .legend-dot.pending {
      background: #d9d9d9;
    }
  `}connectedCallback(){super.connectedCallback(),this.calculateCurrentPath()}getDecisionTree(){switch(this.type){case`diagnosis`:return this.getDiagnosisTree();case`followup`:return this.getFollowupTree();default:return this.getTreatmentTree()}}getTreatmentTree(){return{id:`root`,title:`治疗方案选择`,description:`根据病情评估选择最佳治疗策略`,children:[{id:`resectable`,title:`可切除肿瘤`,description:`肿瘤可完全切除，无远处转移`,condition:e=>this.isResectable(e),children:[{id:`surgery-direct`,title:`直接手术`,description:`胆红素<51，一般情况良好`,condition:e=>this.canDirectSurgery(e),action:`预约手术评估`},{id:`preop-drainage`,title:`术前引流+手术`,description:`胆红素51-200，需先引流`,condition:e=>this.needsPreopDrainage(e),action:`安排PTBD/ENBD`}]},{id:`unresectable`,title:`不可切除肿瘤`,description:`肿瘤局部晚期或远处转移`,condition:e=>!this.isResectable(e),children:[{id:`conversion-therapy`,title:`转化治疗`,description:`化疗/靶向/免疫治疗，争取手术机会`,condition:e=>this.mayBenefitFromConversion(e),action:`制定化疗方案`},{id:`palliative-care`,title:`姑息治疗`,description:`以改善生活质量为主`,condition:e=>this.needsPalliativeCare(e),action:`多学科会诊`}]}]}}getDiagnosisTree(){return{id:`root`,title:`诊断流程`,description:`从疑似到确诊的标准流程`,children:[{id:`screening`,title:`初步筛查`,description:`超声检查 + 肝功能 + 肿瘤标志物`,children:[{id:`imaging`,title:`影像学检查`,description:`增强CT + MRI/MRCP`,action:`预约影像检查`},{id:`biopsy`,title:`病理确诊`,description:`ERCP/PTC活检或EUS穿刺`,action:`安排活检`}]}]}}getFollowupTree(){return{id:`root`,title:`术后随访`,description:`手术后的定期监测方案`,children:[{id:`early-followup`,title:`早期随访（术后1-2年）`,description:`每3个月复查一次`,children:[{id:`lab-check`,title:`实验室检查`,description:`肝功能、CA19-9、CEA`,action:`定期验血`},{id:`imaging-followup`,title:`影像学复查`,description:`每6个月CT/MRI`,action:`预约复查`}]}]}}isResectable(e){let t=e.bilirubinRecords||[];return(t[t.length-1]?.total||0)<300}canDirectSurgery(e){let t=e.bilirubinRecords||[];return(t[t.length-1]?.total||0)<51}needsPreopDrainage(e){let t=e.bilirubinRecords||[],n=t[t.length-1]?.total||0;return n>=51&&n<200}mayBenefitFromConversion(e){return e.currentStage===`treatment`&&!this.isResectable(e)}needsPalliativeCare(e){return!1}calculateCurrentPath(){if(!this.archive)return;let e=this.getDecisionTree();this.currentPath=this.findPath(e,this.archive),this.expandedNodes=new Set(this.currentPath)}findPath(e,t,n=[]){let r=[...n,e.id];if(!e.children||e.children.length===0)return r;for(let n of e.children)if(!n.condition||n.condition(t))return this.findPath(n,t,r);return r}toggleNode(e){this.expandedNodes.has(e)?this.expandedNodes.delete(e):this.expandedNodes.add(e),this.requestUpdate()}getNodeStatus(e){let t=this.currentPath.indexOf(e.id);return t===-1?`pending`:t===this.currentPath.length-1?`current`:`completed`}handleAction(e){this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{action:e}}))}renderNode(e,t=0){let n=this.getNodeStatus(e),r=this.expandedNodes.has(e.id),i=e.children&&e.children.length>0,a=n===`current`;return D`
      <div class="node" style="margin-left: ${t*20}px">
        <div 
          class="node-content ${n} ${a?`active`:``}"
          @click="${()=>i&&this.toggleNode(e.id)}"
        >
          <span class="node-icon">
            ${n===`completed`?`✅`:n===`current`?`📍`:i?`📁`:`📄`}
          </span>
          <div class="node-text">
            <div class="node-title">${e.title}</div>
            ${e.description?D`
              <div class="node-desc">${e.description}</div>
            `:``}
          </div>
          <span class="node-badge ${n}">
            ${n===`current`?`当前`:n===`completed`?`已完成`:`待进行`}
          </span>
          ${i?D`
            <span class="expand-icon ${r?`expanded`:``}">▶</span>
          `:``}
        </div>

        ${i&&r?D`
          <div class="children">
            ${e.children.map(e=>this.renderNode(e,t+1))}
          </div>
        `:``}
      </div>
    `}render(){let e=this.getDecisionTree(),t=this.findCurrentNode(e);return D`
      <div class="header">
        <span class="header-icon">🌳</span>
        <span class="header-title">${e.title}</span>
      </div>

      ${this.currentPath.length>0?D`
        <div class="path-indicator">
          <span class="path-title">当前路径：</span>
          <div class="path-steps">
            ${this.currentPath.map((t,n)=>D`
              <span class="path-step">
                ${n>0?D`<span class="path-arrow">→</span>`:``}
                ${this.getNodeTitle(e,t)}
              </span>
            `)}
          </div>
        </div>
      `:``}

      <div class="tree-container">
        ${e.children?.map(e=>this.renderNode(e))}
      </div>

      ${t?.action?D`
        <div class="action-panel">
          <div class="action-title">💡 下一步行动建议</div>
          <div class="action-content">
            根据您当前的情况，建议：${t.title}
          </div>
          <span class="action-btn" @click="${()=>this.handleAction(t.action)}">
            ${t.action} →
          </span>
        </div>
      `:``}

      <div class="legend">
        <div class="legend-item">
          <span class="legend-dot current"></span>
          <span>当前阶段</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot completed"></span>
          <span>已完成</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot pending"></span>
          <span>待进行</span>
        </div>
      </div>
    `}findCurrentNode(e){if(e.id===this.currentPath[this.currentPath.length-1])return e;if(e.children)for(let t of e.children){let e=this.findCurrentNode(t);if(e)return e}return null}getNodeTitle(e,t){if(e.id===t)return e.title;if(e.children)for(let n of e.children){let e=this.getNodeTitle(n,t);if(e)return e}return``}};M([A({type:Object})],Kx.prototype,`archive`,void 0),M([A({type:String})],Kx.prototype,`type`,void 0),M([j()],Kx.prototype,`expandedNodes`,void 0),M([j()],Kx.prototype,`currentPath`,void 0),Kx=M([k(`decision-tree`)],Kx);var qx=class extends O{constructor(...e){super(...e),this.article=null,this.archives=[],this.articleSlug=``,this.contentParts=[],this.loading=!1,this.error=``,this.activeComponent=null}static{this.styles=c`
    :host {
      display: block;
    }
    .article-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 20px;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .article-title {
      color: white;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .article-meta {
      color: rgba(255,255,255,0.8);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .article-tags {
      display: flex;
      gap: 8px;
    }
    .article-tag {
      padding: 4px 12px;
      background: rgba(255,255,255,0.2);
      border-radius: 12px;
      font-size: 12px;
    }
    .article-content {
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      font-size: 16px;
      line-height: 1.8;
      color: #333;
    }
    .content-block {
      margin: 16px 0;
    }
    .content-block h1 {
      font-size: 28px;
      font-weight: 700;
      margin: 32px 0 16px;
      color: #1a1a1a;
      border-bottom: 2px solid #667eea;
      padding-bottom: 8px;
    }
    .content-block h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 28px 0 14px;
      color: #1a1a1a;
    }
    .content-block h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 24px 0 12px;
      color: #333;
    }
    .content-block p {
      margin: 16px 0;
    }
    .content-block ul, .content-block ol {
      margin: 16px 0;
      padding-left: 24px;
    }
    .content-block li {
      margin: 8px 0;
    }
    .content-block strong {
      color: #667eea;
    }
    .content-block em {
      color: #666;
    }
    .content-block blockquote {
      background: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 16px 20px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
      color: #555;
    }
    .content-block code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      color: #e83e8c;
    }
    .content-block pre {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
    }
    .content-block pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
    .content-block table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .content-block th, .content-block td {
      border: 1px solid #e8e8e8;
      padding: 12px;
      text-align: left;
    }
    .content-block th {
      background: #f8f9fa;
      font-weight: 600;
    }
    .content-block td.gene-highlight {
      background: #e6f7ff;
      font-weight: 600;
      position: relative;
    }
    .content-block td.gene-highlight::after {
      content: '🎯';
      font-size: 12px;
      position: absolute;
      top: 2px;
      right: 4px;
    }
    .content-block td.gene-no-match {
      opacity: 0.5;
    }
    .content-block a {
      color: #667eea;
      text-decoration: none;
    }
    .content-block a:hover {
      text-decoration: underline;
    }
    .component-embed {
      margin: 24px 0;
      padding: 24px;
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border-radius: 16px;
      border: 2px solid #667eea;
    }
    .component-embed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .component-embed-title {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .component-embed-btn {
      padding: 8px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .component-embed-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    .component-embed-inner {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
    .component-embed-inline {
      display: inline;
      margin: 0 8px;
    }
    .unknown-component {
      color: #999;
      font-size: 13px;
      font-style: italic;
    }
    .component-active-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .component-active-modal {
      background: white;
      border-radius: 16px;
      width: 100%;
      max-width: 800px;
      max-height: 80vh;
      overflow: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .component-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid #e8e8e8;
    }
    .component-modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .component-modal-close {
      width: 36px;
      height: 36px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .component-modal-close:hover {
      background: #e8e8e8;
    }
    .component-modal-body {
      padding: 24px;
    }
  `}connectedCallback(){super.connectedCallback(),this.articleSlug?this.loadArticle():this.article&&this.parseArticleContent()}updated(e){e.has(`articleSlug`)&&this.articleSlug&&this.loadArticle(),e.has(`article`)&&this.article&&this.parseArticleContent(),(e.has(`archives`)||e.has(`contentParts`))&&this.updateGeneHighlighting()}updateGeneHighlighting(){let e=(this.archives[0]?.pathologyReport?.geneTestResults||[]).filter(e=>e.result===`阳性`).map(e=>e.geneName.toUpperCase());if(e.length===0)return;let t=[`HER2`,`FGFR2`,`IDH1`,`BRAF`,`NTRK`,`MSI-H`,`KRAS`,`RET`,`ERBB2`,`ERBB3`],n=this.shadowRoot?.querySelector(`.article-content`);n&&n.querySelectorAll(`table`).forEach(n=>{n.querySelectorAll(`td`).forEach(n=>{let r=n.textContent||``;t.find(t=>e.some(e=>e.includes(t)||t.includes(e))&&r.includes(t))&&n.classList.add(`gene-highlight`)})})}async loadArticle(){if(this.articleSlug){this.loading=!0,this.error=``;try{let e=await Vm(this.articleSlug);e?(this.article=e,this.parseArticleContent()):this.error=`文章不存在`}catch(e){this.error=`加载文章失败`,console.error(e)}finally{this.loading=!1}}}parseArticleContent(){if(!this.article){this.contentParts=[];return}let e=this.article.content,t=/<web-component\s+name="([^"]+)"(?:\s+props='([^']*)')?>([\s\S]*?)<\/web-component>/gi,n=[],r=0,i;for(;(i=t.exec(e))!==null;){if(i.index>r){let t=e.slice(r,i.index).trim();t&&n.push({type:`markdown`,content:t})}let t=i[1],a=i[2]?JSON.parse(i[2]):{},o=i[3].trim();n.push({type:`component`,name:t,props:a,inner:o}),r=i.index+i[0].length}if(r<e.length){let t=e.slice(r).trim();t&&n.push({type:`markdown`,content:t})}this.contentParts=n}handleBack(){this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}handleComponentClick(e,t){this.activeComponent={name:e,props:t}}handleCloseComponent(){this.activeComponent=null}handleOverlayClick(e){e.target.classList.contains(`component-active-overlay`)&&this.handleCloseComponent()}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}getComponentTitle(e){return{"stage-guide":`诊疗阶段向导`,"bilirubin-chart":`胆红素监测表`,"drainage-chart":`引流记录表`,"archive-matcher":`档案匹配评估`,"decision-tree":`诊疗决策树`}[e]||e}renderEmbeddedComponent(e){switch(e.type){case`archive-matcher`:return D`
          <article-archive-matcher
            .article="${this.article}"
            .componentConfig="${e}"
            .archives="${this.archives}"
            @action-click="${this.handleComponentAction}"
          ></article-archive-matcher>
        `;case`decision-tree`:return D`
          <decision-tree
            .archive="${this.archives[0]}"
            .type="${e.config?.treeType||`treatment`}"
            @action-click="${this.handleComponentAction}"
          ></decision-tree>
        `;default:return D`<div>未知组件类型: ${e.type}</div>`}}handleComponentAction(e){console.log(`Component action:`,e.detail)}renderComponentEmbed(e){let t=this.renderComponentByName(e.name,e.props);return D`
      <div class="component-embed-inline" @gene-status-change="${this.handleGeneStatusChange}">
        ${t}
      </div>
    `}handleGeneStatusChange(e){let{gene:t,result:n}=e.detail;console.log(`Gene status change:`,t,n),this.dispatchEvent(new CustomEvent(`archive-gene-update`,{bubbles:!0,composed:!0,detail:{gene:t,result:n}}))}renderComponentByName(e,t){switch(e){case`gene-match-hint`:return D`<gene-match-hint .gene="${t.gene||``}" .archives="${this.archives}"></gene-match-hint>`;case`archive-matcher`:return D`<article-archive-matcher .article="${this.article}" .archives="${this.archives}"></article-archive-matcher>`;default:return D`<span class="unknown-component">未知组件: ${e}</span>`}}renderActiveComponent(){if(!this.activeComponent)return null;let{name:e}=this.activeComponent;return e===`stage-guide`?D`
        <stage-guide
          .archive="${null}"
          .disease="${null}"
        ></stage-guide>
      `:D`
      <div style="padding: 40px; text-align: center; color: #666;">
        <p>组件 "${e}" 加载中...</p>
      </div>
    `}sanitizeHtmlContent(e){return e.includes(`<app-root`)?(console.error(`Content contains <app-root>, skipping render to prevent infinite nesting`),`<p style="color: red;">文章内容加载错误：检测到页面嵌套</p>`):e}render(){return this.article?D`
      <div class="article-header">
        <button class="back-btn" @click="${this.handleBack}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          返回文章列表
        </button>
        <div class="article-title">${this.article.title}</div>
        <div class="article-meta">
          <span>📅 ${this.formatDate(this.article.createdAt)}</span>
          ${this.article.tags&&this.article.tags.length>0?D`
            <div class="article-tags">
              ${this.article.tags.map(e=>D`
                <span class="article-tag">${e}</span>
              `)}
            </div>
          `:``}
        </div>
      </div>

      <div class="article-content">
        ${this.contentParts.map(e=>e.type===`markdown`?D`<div class="content-block" .innerHTML="${this.sanitizeHtmlContent($.parse(e.content,{async:!1}))}"></div>`:this.renderComponentEmbed(e))}
      </div>

      ${this.article.embeddedComponents&&this.article.embeddedComponents.length>0?D`
        <div class="embedded-components-section">
          <div class="section-title">
            <span class="section-icon">🧩</span>
            配套工具
          </div>
          ${this.article.embeddedComponents.map(e=>D`
            <div class="embedded-component-wrapper">
              ${this.renderEmbeddedComponent(e)}
            </div>
          `)}
        </div>
      `:``}

      ${this.activeComponent?D`
        <div class="component-active-overlay" @click="${this.handleOverlayClick}">
          <div class="component-active-modal">
            <div class="component-modal-header">
              <span class="component-modal-title">${this.getComponentTitle(this.activeComponent.name)}</span>
              <button class="component-modal-close" @click="${this.handleCloseComponent}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="component-modal-body">
              ${this.renderActiveComponent()}
            </div>
          </div>
        </div>
      `:``}
    `:D`<div>加载中...</div>`}};M([A({type:Object})],qx.prototype,`article`,void 0),M([A({type:Array})],qx.prototype,`archives`,void 0),M([A({type:String})],qx.prototype,`articleSlug`,void 0),M([j()],qx.prototype,`contentParts`,void 0),M([j()],qx.prototype,`loading`,void 0),M([j()],qx.prototype,`error`,void 0),M([j()],qx.prototype,`activeComponent`,void 0),qx=M([k(`article-detail-page`)],qx);var Jx=class extends O{constructor(...e){super(...e),this.article=null,this.title=``,this.summary=``,this.content=``,this.author=``,this.tagsInput=``,this.isPublished=!1,this.saving=!1,this.error=``}static{this.styles=c`
    :host {
      display: block;
    }
    .editor-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 24px 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .back-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .back-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .header-title {
      color: white;
      font-size: 24px;
      font-weight: 600;
    }
    .header-actions {
      display: flex;
      gap: 12px;
    }
    .save-btn {
      background: white;
      color: #667eea;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .save-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .save-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .publish-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .publish-btn:hover:not(:disabled) {
      background: rgba(255,255,255,0.3);
    }
    .publish-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .cancel-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cancel-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    .editor-content {
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .form-group {
      margin-bottom: 24px;
    }
    .form-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .form-input:focus {
      border-color: #667eea;
    }
    .form-textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      resize: vertical;
      min-height: 80px;
      font-family: inherit;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .form-textarea:focus {
      border-color: #667eea;
    }
    .content-textarea {
      min-height: 400px;
      font-family: 'Courier New', monospace;
      line-height: 1.6;
    }
    .help-text {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .tag {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      background: #f0f5ff;
      border: 1px solid #667eea;
      border-radius: 16px;
      font-size: 12px;
      color: #667eea;
    }
    .tag-remove {
      cursor: pointer;
      opacity: 0.6;
    }
    .tag-remove:hover {
      opacity: 1;
    }
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: #f8f9fa;
      border-radius: 8px;
      cursor: pointer;
    }
    .checkbox-group input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    .checkbox-group label {
      cursor: pointer;
      font-size: 14px;
      color: #333;
    }
    .component-hint {
      background: #fff8e6;
      border: 1px solid #ffd591;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }
    .component-hint-title {
      font-size: 14px;
      font-weight: 600;
      color: #fa8c16;
      margin-bottom: 8px;
    }
    .component-hint-code {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 12px;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      overflow-x: auto;
    }
    .error-message {
      background: #fff2f0;
      border: 1px solid #ffccc7;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 20px;
      color: #cf1322;
      font-size: 14px;
    }
  `}connectedCallback(){super.connectedCallback(),this.article&&(this.title=this.article.title,this.summary=this.article.summary||``,this.content=this.article.content,this.author=this.article.author||``,this.tagsInput=this.article.tags?.join(`, `)||``,this.isPublished=this.article.is_published||!1)}handleBack(){this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}validate(){return this.title.trim()?this.content.trim()?(this.error=``,!0):(this.error=`请输入文章内容`,!1):(this.error=`请输入文章标题`,!1)}async saveArticle(e=!1){if(this.validate()){this.saving=!0,this.error=``;try{let t=this.tagsInput.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),n={title:this.title.trim(),summary:this.summary.trim(),content:this.content.trim(),author:this.author.trim(),tags:t,is_published:e||this.isPublished},r;r=this.article?await nb(this.article.id,n):await tb(n),this.dispatchEvent(new CustomEvent(`save-article`,{bubbles:!0,composed:!0,detail:r}))}catch(e){this.error=e.message||`保存失败，请重试`,console.error(`保存文章失败:`,e)}finally{this.saving=!1}}}handleSave(){this.saveArticle(!1)}handlePublish(){this.saveArticle(!0)}render(){let e=this.tagsInput.split(`,`).map(e=>e.trim()).filter(e=>e.length>0);return D`
      <div class="editor-header">
        <div class="header-left">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            取消
          </button>
          <span class="header-title">${this.article?`编辑文章`:`写文章`}</span>
        </div>
        <div class="header-actions">
          <button class="cancel-btn" @click="${this.handleBack}">取消</button>
          <button class="save-btn" @click="${this.handleSave}" ?disabled="${this.saving}">
            ${this.saving?`⏳`:`💾`} 保存草稿
          </button>
          <button class="publish-btn" @click="${this.handlePublish}" ?disabled="${this.saving}">
            ${this.saving?`⏳`:`🚀`} ${this.article?.is_published?`更新发布`:`立即发布`}
          </button>
        </div>
      </div>

      <div class="editor-content">
        ${this.error?D`
          <div class="error-message">${this.error}</div>
        `:``}

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">标题 *</label>
            <input
              type="text"
              class="form-input"
              placeholder="输入文章标题"
              .value="${this.title}"
              @input="${e=>{this.title=e.target.value}}"
            />
          </div>

          <div class="form-group">
            <label class="form-label">作者</label>
            <input
              type="text"
              class="form-input"
              placeholder="输入作者名称"
              .value="${this.author}"
              @input="${e=>{this.author=e.target.value}}"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">摘要</label>
          <textarea
            class="form-textarea"
            placeholder="输入文章摘要（可选，用于列表展示）"
            .value="${this.summary}"
            @input="${e=>{this.summary=e.target.value}}"
          ></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">标签（用逗号分隔）</label>
          <input
            type="text"
            class="form-input"
            placeholder="如：指南, 治疗, 手术"
            .value="${this.tagsInput}"
            @input="${e=>{this.tagsInput=e.target.value}}"
          />
          ${e.length>0?D`
            <div class="tags-container">
              ${e.map(e=>D`
                <span class="tag">
                  ${e}
                  <span class="tag-remove" @click="${()=>{this.tagsInput=this.tagsInput.split(`,`).map(e=>e.trim()).filter(t=>t!==e).join(`, `)}}">×</span>
                </span>
              `)}
            </div>
          `:``}
        </div>

        <div class="form-group">
          <label class="form-label">文章内容（支持 Markdown）*</label>
          <textarea
            class="form-textarea content-textarea"
            placeholder="输入文章内容..."
            .value="${this.content}"
            @input="${e=>{this.content=e.target.value}}"
          ></textarea>
          <div class="help-text">支持标准 Markdown 语法</div>
        </div>

        <div class="form-group">
          <div class="checkbox-group" @click="${()=>{this.isPublished=!this.isPublished}}">
            <input
              type="checkbox"
              .checked="${this.isPublished}"
              @change="${e=>{this.isPublished=e.target.checked}}"
            />
            <label>发布文章（勾选后文章将对所有用户可见）</label>
          </div>
        </div>

        <div class="component-hint">
          <div class="component-hint-title">💡 嵌入交互组件</div>
          <div class="component-hint-code">
            &lt;web-component name="stage-guide"&gt;<br>
            &nbsp;&nbsp;点击此处使用诊疗阶段向导<br>
            &lt;/web-component&gt;
          </div>
        </div>
      </div>
    `}};M([A({type:Object})],Jx.prototype,`article`,void 0),M([j()],Jx.prototype,`title`,void 0),M([j()],Jx.prototype,`summary`,void 0),M([j()],Jx.prototype,`content`,void 0),M([j()],Jx.prototype,`author`,void 0),M([j()],Jx.prototype,`tagsInput`,void 0),M([j()],Jx.prototype,`isPublished`,void 0),M([j()],Jx.prototype,`saving`,void 0),M([j()],Jx.prototype,`error`,void 0),Jx=M([k(`article-editor-page`)],Jx);var Yx=class extends O{constructor(...e){super(...e),this.archives=[],this.mode=`archive`,this.archivePage=`list`,this.articlePage=`list`,this.currentArchive=null,this.currentArticle=null,this.currentDetailPage=null,this.showDiseaseSelector=!1,this.showStageSelector=!1,this.diseases=[{id:`hilar-cholangiocarcinoma`,name:`肝门胆管癌`,desc:`发生在肝门部的胆管癌`,icon:`🫀`,diagnosisKeyItem:`pathology-biopsy`,examItems:[{id:`blood-test`,name:`血液检查`,desc:`肝功能、肿瘤标志物CA19-9等`,category:`blood`},{id:`abdominal-ultrasound`,name:`腹部超声`,desc:`初步评估肝胆结构`,category:`imaging`},{id:`ct-mri`,name:`CT/MRI检查`,desc:`详细评估肿瘤位置和范围`,category:`imaging`},{id:`mrcp`,name:`MRCP`,desc:`磁共振胰胆管成像，显示胆道梗阻情况`,category:`imaging`},{id:`ercp`,name:`ERCP`,desc:`逆行胰胆管造影，可同时进行胆道引流`,category:`imaging`},{id:`pathology-biopsy`,name:`病理活检`,desc:`获取组织样本进行病理确诊`,category:`pathology`}],treatmentItems:[{id:`picc`,name:`PICC置管`,desc:`经外周静脉穿刺中心静脉置管，保护静脉方便化疗输注`,category:`preparation`},{id:`surgery`,name:`手术治疗`,desc:`肝门胆管癌根治术`,category:`surgery`},{id:`chemotherapy`,name:`化疗`,desc:`辅助化疗或姑息化疗`,category:`chemo`},{id:`radiation`,name:`放疗`,desc:`辅助放疗或姑息放疗`,category:`radiation`},{id:`targeted-immune`,name:`靶向/免疫治疗`,desc:`根据基因检测结果选择靶向药物或免疫治疗`,category:`targeted`},{id:`biliary-drainage`,name:`胆道引流`,desc:`PTCD或支架置入缓解黄疸`,category:`drainage`}]}]}static{this.styles=c`
    :host {
      display: block;
      min-height: 100vh;
      background: #f5f7fa;
    }
    .mode-switch {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      background: white;
      border-radius: 30px;
      padding: 4px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 1000;
    }
    .mode-btn {
      padding: 10px 28px;
      border: none;
      background: transparent;
      border-radius: 26px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      color: #666;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .mode-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .mode-btn:not(.active):hover {
      background: #f5f5f5;
    }
    .main-content {
      padding-top: 80px;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 40px;
    }
  `}connectedCallback(){super.connectedCallback(),this.archives=this.loadArchives(),this.setupNavigation()}loadArchives(){return Em.load().archives||[]}saveArchives(){let e=Em.load();e.archives=this.archives,Em.save(e)}setupNavigation(){window.addEventListener(`popstate`,()=>{this.handleRoute(window.location.hash)}),this.handleRoute(window.location.hash||`#/`)}handleRoute(e){if(e.startsWith(`#/article/`)){let t=e.replace(`#/article/`,``);this.viewArticle(t)}else if(e.startsWith(`#/archive/`)){let t=e.replace(`#/archive/`,``);this.viewArchive(t)}else e===`#/article-edit`?this.showArticleEditor():e===`#/nutrition-detail`?this.showNutritionDetail():e===`#/pathology-detail`?this.showPathologyDetail():this.showList()}showList(){this.mode===`archive`?(this.archivePage=`list`,this.currentArchive=null):(this.articlePage=`list`,this.currentArticle=null)}showNutritionDetail(){this.archivePage=`detail`,this.currentDetailPage=`nutrition`,this.currentArchive=null}showPathologyDetail(){this.archivePage=`detail`,this.currentDetailPage=`pathology`,this.currentArchive=null}viewArchive(e){let t=this.archives.find(t=>t.id===e);t?(this.mode=`archive`,this.currentArchive=t,this.archivePage=`detail`):this.showList()}async viewArticle(e){let t=await Vm(e);t?(this.mode=`article`,this.currentArticle=t,this.articlePage=`detail`):this.showList()}showArticleEditor(e){this.currentArticle=e||null,this.articlePage=`editor`}navigateTo(e){window.location.hash=e}switchMode(e){this.mode=e,e===`archive`?(this.archivePage=`list`,this.currentArchive=null):(this.articlePage=`list`,this.currentArticle=null),this.navigateTo(`#/`)}createArchive(e){let t={id:Date.now().toString(),diseaseType:e.id,diseaseName:e.name,createdAt:new Date().toISOString(),completedExamIds:[],completedTreatmentIds:[],currentStage:`examination`,bilirubinRecords:[]};this.archives=[t,...this.archives],this.saveArchives(),this.navigateTo(`#/archive/${t.id}`)}updateArchiveStage(e){if(!this.currentArchive)return;let t=this.archives.find(e=>e.id===this.currentArchive.id);t&&(t.completedExamIds=e.completedExamIds,t.completedTreatmentIds=e.completedTreatmentIds,t.currentStage=e.currentStage,this.saveArchives(),this.currentArchive={...t},this.archives=[...this.archives])}addBilirubinRecord(e){if(!this.currentArchive)return;let t=this.archives.find(e=>e.id===this.currentArchive.id);if(t){if(t.bilirubinRecords||=[],t.bilirubinRecords.some(t=>t.id===e.id))return;t.bilirubinRecords=[e,...t.bilirubinRecords],this.saveArchives(),this.currentArchive={...t},this.archives=[...this.archives]}}deleteArchive(e){this.archives=this.archives.filter(t=>t.id!==e),this.saveArchives(),this.navigateTo(`#/`)}handleArticleSaved(e){this.currentArticle=e,this.navigateTo(`#/article/${e.id}`)}handleCreateArchive(){this.showDiseaseSelector=!0}handleDiseaseSelect(e){let t=e.detail;this.showDiseaseSelector=!1,t&&this.createArchive(t)}handleDiseaseSelectorClose(){this.showDiseaseSelector=!1}handleDeleteArchive(){this.currentArchive&&confirm(`确定要删除这个档案吗？此操作无法撤销。`)&&this.deleteArchive(this.currentArchive.id)}handleBack(){this.navigateTo(`#/`)}handleEditStage(){this.showStageSelector=!0}handleStageSelect(e){this.showStageSelector=!1,e.detail&&this.updateArchiveStage(e.detail)}handleStageSelectorClose(){this.showStageSelector=!1}handleAddBilirubin(e){this.addBilirubinRecord(e.detail)}handlePathologySave(e){if(!this.currentArchive)return;let t=this.archives.find(e=>e.id===this.currentArchive.id);t&&(t.pathologyReport=e.detail,this.saveArchives(),this.currentArchive={...t},this.archives=[...this.archives])}handleArticleClick(e){this.navigateTo(`#/article/${e.detail.id}`)}handleWriteArticle(){this.navigateTo(`#/article-edit`)}handleSaveArticle(e){this.handleArticleSaved(e.detail)}handleArticleEditorBack(){this.navigateTo(`#/`)}handleComponentClick(e){e.detail.name===`stage-guide`&&this.navigateTo(`#/`)}handleDataImported(){this.archives=this.loadArchives()}getDiseaseForArchive(){return this.currentArchive&&this.diseases.find(e=>e.id===this.currentArchive.diseaseType)||null}render(){let e=this.getDiseaseForArchive();return D`
      <div class="mode-switch">
        <button
          class="mode-btn ${this.mode===`archive`?`active`:``}"
          @click="${()=>this.switchMode(`archive`)}"
        >
          🗂️ 我的档案
        </button>
        <button
          class="mode-btn ${this.mode===`article`?`active`:``}"
          @click="${()=>this.switchMode(`article`)}"
        >
          📚 文章
        </button>
      </div>

      <div class="main-content">
        ${this.mode===`archive`?D`
          ${this.archivePage===`list`?D`
            <archive-list-page
              .archives="${this.archives}"
              @create-archive="${this.handleCreateArchive}"
              @data-imported="${this.handleDataImported}"
            ></archive-list-page>
          `:``}
          ${this.archivePage===`detail`&&this.currentArchive&&e?D`
            <archive-detail-page
              .archive="${this.currentArchive}"
              .disease="${e}"
              @delete-archive="${this.handleDeleteArchive}"
              @back="${this.handleBack}"
              @edit-stage="${this.handleEditStage}"
              @add-bilirubin="${this.handleAddBilirubin}"
            ></archive-detail-page>
          `:``}
          ${this.archivePage===`detail`&&this.currentDetailPage===`nutrition`?D`
            <nutrition-detail-page></nutrition-detail-page>
          `:``}
          ${this.archivePage===`detail`&&this.currentDetailPage===`pathology`?D`
            <pathology-detail-page
              .archive="${this.currentArchive}"
              @back="${this.handleBack}"
              @pathology-save="${this.handlePathologySave}"
            ></pathology-detail-page>
          `:``}
        `:D`
          ${this.articlePage===`list`?D`
            <article-list-page
              @article-click="${this.handleArticleClick}"
              @write-article="${this.handleWriteArticle}"
            ></article-list-page>
          `:``}
          ${this.articlePage===`detail`&&this.currentArticle?D`
            <article-detail-page
              .article="${this.currentArticle}"
              .archives="${this.archives}"
              @back="${this.handleBack}"
              @component-click="${this.handleComponentClick}"
            ></article-detail-page>
          `:``}
          ${this.articlePage===`editor`?D`
            <article-editor-page
              .article="${this.currentArticle}"
              @save-article="${this.handleSaveArticle}"
              @back="${this.handleArticleEditorBack}"
            ></article-editor-page>
          `:``}
        `}
      </div>

      ${this.showDiseaseSelector?D`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleDiseaseSelectorClose}"
        ></disease-selector>
      `:``}

      ${this.showStageSelector&&e&&this.currentArchive?D`
        <stage-selector
          .disease="${e}"
          .completedExamIds="${this.currentArchive.completedExamIds||[]}"
          .completedTreatmentIds="${this.currentArchive.completedTreatmentIds||[]}"
          @stage-select="${this.handleStageSelect}"
          @close="${this.handleStageSelectorClose}"
        ></stage-selector>
      `:``}
    `}};M([j()],Yx.prototype,`archives`,void 0),M([j()],Yx.prototype,`mode`,void 0),M([j()],Yx.prototype,`archivePage`,void 0),M([j()],Yx.prototype,`articlePage`,void 0),M([j()],Yx.prototype,`currentArchive`,void 0),M([j()],Yx.prototype,`currentArticle`,void 0),M([j()],Yx.prototype,`currentDetailPage`,void 0),M([j()],Yx.prototype,`showDiseaseSelector`,void 0),M([j()],Yx.prototype,`showStageSelector`,void 0),Yx=M([k(`app-root`)],Yx);