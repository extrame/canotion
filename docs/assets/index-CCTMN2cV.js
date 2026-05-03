(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,_=g?g.emptyScript:``,v=h.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(y(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?b:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?b:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[y(`elementProperties`)]=new Map,C[y(`finalized`)]=new Map,v?.({ReactiveElement:C}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var w=globalThis,T=e=>e,E=w.trustedTypes,D=E?E.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ee=`$lit$`,O=`lit$${Math.random().toFixed(9).slice(2)}$`,te=`?`+O,ne=`<${te}>`,re=document,ie=()=>re.createComment(``),ae=e=>e===null||typeof e!=`object`&&typeof e!=`function`,oe=Array.isArray,se=e=>oe(e)||typeof e?.[Symbol.iterator]==`function`,ce=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,de=/>/g,fe=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),pe=/'/g,me=/"/g,he=/^(?:script|style|textarea|title)$/i,k=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ge=Symbol.for(`lit-noChange`),A=Symbol.for(`lit-nothing`),_e=new WeakMap,ve=re.createTreeWalker(re,129);function ye(e,t){if(!oe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return D===void 0?t:D.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=le;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===le?c[1]===`!--`?o=ue:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=fe):(he.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=fe):o=de:o===fe?c[0]===`>`?(o=i??le,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?fe:c[3]===`"`?me:pe):o===me||o===pe?o=fe:o===ue||o===de?o=le:(o=fe,i=void 0);let d=o===fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===le?n+ne:l>=0?(r.push(s),n.slice(0,l)+ee+n.slice(l)+O+d):n+O+(l===-2?t:d)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},xe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),ve.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ve.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ee)){let t=u[o++],n=i.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ee:r[1]===`?`?De:r[1]===`@`?Oe:Te}),i.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(he.test(i.tagName)){let e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ie()),ve.nextNode(),c.push({type:2,index:++a});i.append(e[t],ie())}}}else if(i.nodeType===8)if(i.data===te)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(O,e+1))!==-1;)c.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){let n=re.createElement(`template`);return n.innerHTML=e,n}};function Se(e,t,n=e,r){if(t===ge)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ae(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Se(e,i._$AS(e,t.values),i,r)),t}var Ce=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??re).importNode(t,!0);ve.currentNode=r;let i=ve.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new we(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ve.nextNode(),a++)}return ve.currentNode=re,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},we=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Se(this,e,t),ae(e)?e===A||e==null||e===``?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ge&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=xe.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ce(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new xe(e)),t}k(t){oe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ie()),this.O(ie()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=T(e).nextSibling;T(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Se(this,e,t,0),a=!ae(e)||e!==this._$AH&&e!==ge,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Se(this,r[n+o],t,o),s===ge&&(s=this._$AH[o]),a||=!ae(s)||s!==this._$AH[o],s===A?e=A:e!==A&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ee=class extends Te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},De=class extends Te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},Oe=class extends Te{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Se(this,e,t,0)??A)===ge)return;let n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}},Ae=w.litHtmlPolyfillSupport;Ae?.(xe,we),(w.litHtmlVersions??=[]).push(`3.3.2`);var je=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new we(t.insertBefore(ie(),e),e,void 0,n??{})}return i._$AI(e),i},Me=globalThis,j=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=je(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};j._$litElement$=!0,j.finalized=!0,Me.litElementHydrateSupport?.({LitElement:j});var Ne=Me.litElementPolyfillSupport;Ne?.({LitElement:j}),(Me.litElementVersions??=[]).push(`4.2.2`);var Pe=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Fe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},Ie=(e=Fe,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function M(e){return(t,n)=>typeof n==`object`?Ie(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function N(e){return M({...e,state:!0,attribute:!1})}var Le=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Re(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Le(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Le(n,r,{get(){return a(this)}})}}function P(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ze=class extends j{constructor(...e){super(...e),this.show=!1,this.diseases=[{id:`hilar-cholangiocarcinoma`,name:`肝门胆管癌`,desc:`发生在肝门部的胆管癌`,icon:`🫀`,diagnosisKeyItem:`pathology-biopsy`,examItems:[{id:`blood-test`,name:`血液检查`,desc:`肝功能、肿瘤标志物CA19-9等`,category:`blood`},{id:`abdominal-ultrasound`,name:`腹部超声`,desc:`初步评估肝胆结构`,category:`imaging`},{id:`ct-mri`,name:`CT/MRI检查`,desc:`详细评估肿瘤位置和范围`,category:`imaging`},{id:`mrcp`,name:`MRCP`,desc:`磁共振胰胆管成像，显示胆道梗阻情况`,category:`imaging`},{id:`ercp`,name:`ERCP`,desc:`逆行胰胆管造影，可同时进行胆道引流`,category:`imaging`},{id:`pathology-biopsy`,name:`病理活检`,desc:`获取组织样本进行病理确诊`,category:`pathology`}],treatmentItems:[{id:`surgery`,name:`手术治疗`,desc:`肝门胆管癌根治术`,category:`surgery`},{id:`chemotherapy`,name:`化疗`,desc:`辅助化疗或姑息化疗`,category:`chemo`},{id:`radiation`,name:`放疗`,desc:`辅助放疗或姑息放疗`,category:`radiation`},{id:`targeted-immune`,name:`靶向/免疫治疗`,desc:`根据基因检测结果选择靶向药物或免疫治疗`,category:`targeted`},{id:`biliary-drainage`,name:`胆道引流`,desc:`PTCD或支架置入缓解黄疸`,category:`drainage`}]}]}static{this.styles=o`
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
  `}connectedCallback(){super.connectedCallback(),this.show=!0}handleSelect(e){this.dispatchEvent(new CustomEvent(`disease-select`,{bubbles:!0,composed:!0,detail:e}))}handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}handleOverlayClick(e){e.target===e.currentTarget&&this.handleClose()}render(){return k`
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
            ${this.diseases.map(e=>k`
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
    `}};P([N()],ze.prototype,`show`,void 0),ze=P([Pe(`disease-selector`)],ze);var Be=class extends j{constructor(...e){super(...e),this.disease=null,this.completedExamIds=[],this.completedTreatmentIds=[],this.selectedExamIds=new Set,this.selectedTreatmentIds=new Set}static{this.styles=o`
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
  `}updated(e){e.has(`completedExamIds`)&&(this.selectedExamIds=new Set(this.completedExamIds)),e.has(`completedTreatmentIds`)&&(this.selectedTreatmentIds=new Set(this.completedTreatmentIds))}handleExamToggle(e){this.selectedExamIds.has(e)?this.selectedExamIds.delete(e):this.selectedExamIds.add(e),this.selectedExamIds=new Set(this.selectedExamIds)}handleTreatmentToggle(e){this.selectedTreatmentIds.has(e)?this.selectedTreatmentIds.delete(e):this.selectedTreatmentIds.add(e),this.selectedTreatmentIds=new Set(this.selectedTreatmentIds)}getCurrentStage(){return this.disease&&this.completedTreatmentIds.size>0?`treatment`:`examination`}getStageText(){return this.getCurrentStage()===`treatment`?`治疗阶段`:`检查阶段`}handleConfirm(){this.disease&&this.dispatchEvent(new CustomEvent(`stage-select`,{bubbles:!0,composed:!0,detail:{disease:this.disease,completedExamIds:Array.from(this.selectedExamIds),completedTreatmentIds:Array.from(this.selectedTreatmentIds),currentStage:this.getCurrentStage()}}))}handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}handleOverlayClick(e){e.target===e.currentTarget&&this.handleClose()}getCategoryName(e){return{blood:`血液检查`,imaging:`影像学检查`,pathology:`病理检查`,surgery:`手术`,chemo:`化疗`,radiation:`放疗`,targeted:`靶向/免疫治疗`,drainage:`胆道引流`}[e]||e}groupByCategory(e){let t={};for(let n of e){let e=n.category;t[e]||(t[e]=[]),t[e].push(n)}return t}render(){if(!this.disease)return k``;let e=this.groupByCategory(this.disease.examItems),t=this.groupByCategory(this.disease.treatmentItems),n=this.selectedExamIds.size>0||this.selectedTreatmentIds.size>0;return k`
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

          ${n?k`
            <div class="stage-result">
              <div class="stage-result-label">当前阶段</div>
              <div class="stage-result-text">${this.getStageText()}</div>
            </div>
          `:k`
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
            ${Object.entries(e).map(([e,t])=>k`
              <div class="category-divider">${this.getCategoryName(e)}</div>
              <div class="item-list">
                ${t.map(e=>k`
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
            ${Object.entries(t).map(([e,t])=>k`
              <div class="category-divider">${this.getCategoryName(e)}</div>
              <div class="item-list">
                ${t.map(e=>k`
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
    `}};P([M({type:Object})],Be.prototype,`disease`,void 0),P([M({type:Array})],Be.prototype,`completedExamIds`,void 0),P([M({type:Array})],Be.prototype,`completedTreatmentIds`,void 0),P([N()],Be.prototype,`selectedExamIds`,void 0),P([N()],Be.prototype,`selectedTreatmentIds`,void 0),Be=P([Pe(`stage-selector`)],Be);function Ve(e){return e+.5|0}var He=(e,t,n)=>Math.max(Math.min(e,n),t);function Ue(e){return He(Ve(e*2.55),0,255)}function We(e){return He(Ve(e*255),0,255)}function Ge(e){return He(Ve(e/2.55)/100,0,1)}function Ke(e){return He(Ve(e*100),0,100)}var qe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Je=[...`0123456789ABCDEF`],Ye=e=>Je[e&15],Xe=e=>Je[(e&240)>>4]+Je[e&15],Ze=e=>(e&240)>>4==(e&15),Qe=e=>Ze(e.r)&&Ze(e.g)&&Ze(e.b)&&Ze(e.a);function $e(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&qe[e[1]]*17,g:255&qe[e[2]]*17,b:255&qe[e[3]]*17,a:t===5?qe[e[4]]*17:255}:(t===7||t===9)&&(n={r:qe[e[1]]<<4|qe[e[2]],g:qe[e[3]]<<4|qe[e[4]],b:qe[e[5]]<<4|qe[e[6]],a:t===9?qe[e[7]]<<4|qe[e[8]]:255})),n}var et=(e,t)=>e<255?t(e):``;function tt(e){var t=Qe(e)?Ye:Xe;return e?`#`+t(e.r)+t(e.g)+t(e.b)+et(e.a,t):void 0}var nt=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function rt(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function it(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function at(e,t,n){let r=rt(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ot(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function st(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ot(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function ct(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(We)}function lt(e,t,n){return ct(rt,e,t,n)}function ut(e,t,n){return ct(at,e,t,n)}function dt(e,t,n){return ct(it,e,t,n)}function ft(e){return(e%360+360)%360}function pt(e){let t=nt.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Ue(+t[5]):We(+t[5]));let i=ft(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?ut(i,a,o):t[1]===`hsv`?dt(i,a,o):lt(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function mt(e,t){var n=st(e);n[0]=ft(n[0]+t),n=lt(n),e.r=n[0],e.g=n[1],e.b=n[2]}function ht(e){if(!e)return;let t=st(e),n=t[0],r=Ke(t[1]),i=Ke(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Ge(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var gt={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},_t={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function vt(){let e={},t=Object.keys(_t),n=Object.keys(gt),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,gt[a]);a=parseInt(_t[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var yt;function bt(e){yt||(yt=vt(),yt.transparent=[0,0,0,0]);let t=yt[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var xt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function St(e){let t=xt.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?Ue(e):He(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?Ue(r):He(r,0,255)),i=255&(t[4]?Ue(i):He(i,0,255)),a=255&(t[6]?Ue(a):He(a,0,255)),{r,g:i,b:a,a:n}}}function Ct(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ge(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var wt=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Tt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Et(e,t,n){let r=Tt(Ge(e.r)),i=Tt(Ge(e.g)),a=Tt(Ge(e.b));return{r:We(wt(r+n*(Tt(Ge(t.r))-r))),g:We(wt(i+n*(Tt(Ge(t.g))-i))),b:We(wt(a+n*(Tt(Ge(t.b))-a))),a:e.a+n*(t.a-e.a)}}function Dt(e,t,n){if(e){let r=st(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=lt(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Ot(e,t){return e&&Object.assign(t||{},e)}function kt(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=We(e[3]))):(t=Ot(e,{r:0,g:0,b:0,a:1}),t.a=We(t.a)),t}function At(e){return e.charAt(0)===`r`?St(e):pt(e)}var jt=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=kt(t):n===`string`&&(r=$e(t)||bt(t)||At(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Ot(this._rgb);return e&&(e.a=Ge(e.a)),e}set rgb(e){this._rgb=kt(e)}rgbString(){return this._valid?Ct(this._rgb):void 0}hexString(){return this._valid?tt(this._rgb):void 0}hslString(){return this._valid?ht(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Et(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=We(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=Ve(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Dt(this._rgb,2,e),this}darken(e){return Dt(this._rgb,2,-e),this}saturate(e){return Dt(this._rgb,1,e),this}desaturate(e){return Dt(this._rgb,1,-e),this}rotate(e){return mt(this._rgb,e),this}};function Mt(){}var Nt=(()=>{let e=0;return()=>e++})();function F(e){return e==null}function I(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function L(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function R(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function Pt(e,t){return R(e)?e:t}function z(e,t){return e===void 0?t:e}var Ft=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100:+e/t,It=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function B(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function V(e,t,n,r){let i,a,o;if(I(e))if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i);else if(L(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function Lt(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Rt(e){if(I(e))return e.map(Rt);if(L(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=Rt(e[n[i]]);return t}return e}function zt(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function Bt(e,t,n,r){if(!zt(e))return;let i=t[e],a=n[e];L(i)&&L(a)?Vt(i,a,r):t[e]=Rt(a)}function Vt(e,t,n){let r=I(t)?t:[t],i=r.length;if(!L(e))return e;n||={};let a=n.merger||Bt,o;for(let t=0;t<i;++t){if(o=r[t],!L(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function Ht(e,t){return Vt(e,t,{merger:Ut})}function Ut(e,t,n){if(!zt(e))return;let r=t[e],i=n[e];L(r)&&L(i)?Ht(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Rt(i))}var Wt={"":e=>e,x:e=>e.x,y:e=>e.y};function Gt(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function Kt(e){let t=Gt(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function qt(e,t){return(Wt[t]||(Wt[t]=Kt(t)))(e)}function Jt(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Yt=e=>e!==void 0,Xt=e=>typeof e==`function`,Zt=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function Qt(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var H=Math.PI,U=2*H,$t=U+H,en=1/0,tn=H/180,W=H/2,nn=H/4,rn=H*2/3,an=Math.log10,on=Math.sign;function sn(e,t,n){return Math.abs(e-t)<n}function cn(e){let t=Math.round(e);e=sn(e,t,e/1e3)?t:e;let n=10**Math.floor(an(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function ln(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function un(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function dn(e){return!un(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function fn(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function pn(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function G(e){return H/180*e}function mn(e){return 180/H*e}function hn(e){if(!R(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function gn(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*H&&(a+=U),{angle:a,distance:i}}function _n(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function vn(e,t){return(e-t+$t)%U-H}function K(e){return(e%U+U)%U}function yn(e,t,n,r){let i=K(e),a=K(t),o=K(n),s=K(a-i),c=K(o-i),l=K(i-a),u=K(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function q(e,t,n){return Math.max(t,Math.min(n,e))}function bn(e){return q(e,-32768,32767)}function xn(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Sn(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var Cn=(e,t,n,r)=>Sn(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),wn=(e,t,n)=>Sn(e,n,r=>e[r][t]>=n);function Tn(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var En=[`push`,`pop`,`shift`,`splice`,`unshift`];function Dn(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,`_chartjs`,{configurable:!0,enumerable:!1,value:{listeners:[t]}}),En.forEach(t=>{let n=`_onData`+Jt(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function On(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(En.forEach(t=>{delete e[t]}),delete e._chartjs)}function kn(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var An=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function jn(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,An.call(window,()=>{r=!1,e.apply(t,n)}))}}function Mn(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var Nn=e=>e===`start`?`left`:e===`end`?`right`:`center`,J=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2,Pn=(e,t,n,r)=>e===(r?`left`:`right`)?n:e===`center`?(t+n)/2:t;function Fn(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(Cn(c,u,d).lo,n?r:Cn(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!F(e[s.axis]));i-=Math.max(0,e)}i=q(i,0,r-1)}if(m){let e=Math.max(Cn(c,o.axis,f,!0).hi+1,n?0:Cn(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!F(e[s.axis]));e+=Math.max(0,t)}a=q(e,i,r)-i}else a=r-i}return{start:i,count:a}}function In(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var Ln=e=>e===0||e===1,Rn=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*U/n)),zn=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*U/n)+1,Bn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*W)+1,easeOutSine:e=>Math.sin(e*W),easeInOutSine:e=>-.5*(Math.cos(H*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>Ln(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ln(e)?e:Rn(e,.075,.3),easeOutElastic:e=>Ln(e)?e:zn(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return Ln(e)?e:e<.5?.5*Rn(e*2,t,n):.5+.5*zn(e*2-1,t,n)},easeInBack(e){let t=1.70158;return e*e*((t+1)*e-t)},easeOutBack(e){let t=1.70158;return--e*e*((t+1)*e+t)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Bn.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?Bn.easeInBounce(e*2)*.5:Bn.easeOutBounce(e*2-1)*.5+.5};function Vn(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function Hn(e){return Vn(e)?e:new jt(e)}function Un(e){return Vn(e)?e:new jt(e).saturate(.5).darken(.1).hexString()}var Wn=[`x`,`y`,`borderWidth`,`radius`,`tension`],Gn=[`color`,`borderColor`,`backgroundColor`];function Kn(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:Gn},numbers:{type:`number`,properties:Wn}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function qn(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Jn=new Map;function Yn(e,t){t||={};let n=e+JSON.stringify(t),r=Jn.get(n);return r||(r=new Intl.NumberFormat(e,t),Jn.set(n,r)),r}function Xn(e,t,n){return Yn(t,n).format(e)}var Zn={values(e){return I(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=Qn(e,n)}let o=an(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Xn(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(an(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?Zn.numeric.call(this,e,t,n):``}};function Qn(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var $n={formatters:Zn};function er(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$n.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var tr=Object.create(null),nr=Object.create(null);function rr(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function ir(e,t,n){return typeof t==`string`?Vt(rr(e,t),n):Vt(rr(e,``),t)}var Y=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>Un(t.backgroundColor),this.hoverBorderColor=(e,t)=>Un(t.borderColor),this.hoverColor=(e,t)=>Un(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return ir(this,e,t)}get(e){return rr(this,e)}describe(e,t){return ir(nr,e,t)}override(e,t){return ir(tr,e,t)}route(e,t,n,r){let i=rr(this,e),a=rr(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return L(e)?Object.assign({},t,e):z(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Kn,qn,er]);function ar(e){return!e||F(e.size)||F(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function or(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function sr(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!I(d))o=or(e,i,a,o,d);else if(I(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!I(f)&&(o=or(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function cr(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function lr(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function ur(e,t,n,r){dr(e,t,n,r,null)}function dr(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*tn;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,U):e.arc(n,r,h,0,U),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=rn,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=rn,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+nn)*c,d=Math.cos(g+nn)*(i?i/2-l:c),s=Math.sin(g+nn)*c,f=Math.sin(g+nn)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-H,g-W),e.arc(n+f,r-o,l,g-W,g),e.arc(n+d,r+s,l,g,g+W),e.arc(n-f,r+o,l,g+W,g+H),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=nn;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=nn;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=nn,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function fr(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function pr(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function mr(e){e.restore()}function hr(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function gr(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function _r(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),F(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function vr(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function yr(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function br(e,t,n,r,i,a={}){let o=I(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,_r(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&yr(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),F(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),vr(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function xr(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*H,H,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,H,W,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,W,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-W,!0),e.lineTo(n+o.topLeft,r)}var Sr=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Cr=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wr(e,t){let n=(``+e).match(Sr);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100;break}return t*e}var Tr=e=>+e||0;function Er(e,t){let n={},r=L(t),i=r?Object.keys(t):t,a=L(e)?r?n=>z(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=Tr(a(e));return n}function Dr(e){return Er(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function Or(e){return Er(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function X(e){let t=Dr(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Z(e,t){e||={},t||=Y.font;let n=z(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=z(e.style,t.style);r&&!(``+r).match(Cr)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:z(e.family,t.family),lineHeight:wr(z(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:z(e.weight,t.weight),string:``};return i.string=ar(i),i}function kr(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&I(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function Ar(e,t,n){let{min:r,max:i}=e,a=It(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function jr(e,t){return Object.assign(Object.create(e),t)}function Mr(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=Jr(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>Mr([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Lr(n,r,()=>qr(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return Yr(e).includes(t)},ownKeys(e){return Yr(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function Nr(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Pr(e,r),setContext:t=>Nr(e,t,n,r),override:i=>Nr(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Lr(e,t,()=>Rr(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function Pr(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Xt(n)?n:()=>n,isIndexable:Xt(r)?r:()=>r}}var Fr=(e,t)=>e?e+Jt(t):t,Ir=(e,t)=>L(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Lr(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function Rr(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return Xt(s)&&o.isScriptable(t)&&(s=zr(t,s,e,n)),I(s)&&s.length&&(s=Br(t,s,e,o.isIndexable)),Ir(t,s)&&(s=Nr(s,i,a&&a[t],o)),s}function zr(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),Ir(e,c)&&(c=Wr(i._scopes,i,e,c)),c}function Br(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(L(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=Wr(r,i,e,c);t.push(Nr(n,a,o&&o[e],s))}}return t}function Vr(e,t,n){return Xt(e)?e(t,n):e}var Hr=(e,t)=>e===!0?t:typeof e==`string`?qt(t,e):void 0;function Ur(e,t,n,r,i){for(let a of t){let t=Hr(n,a);if(t){e.add(t);let a=Vr(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function Wr(e,t,n,r){let i=t._rootScopes,a=Vr(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Gr(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Gr(s,o,a,c,r),c===null)?!1:Mr(Array.from(s),[``],i,a,()=>Kr(t,n,r))}function Gr(e,t,n,r,i){for(;n;)n=Ur(e,t,n,r,i);return n}function Kr(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return I(i)&&L(n)?n:i||{}}function qr(e,t,n,r){let i;for(let a of t)if(i=Jr(Fr(a,e),n),i!==void 0)return Ir(e,i)?Wr(n,r,e,i):i}function Jr(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function Yr(e){let t=e._keys;return t||=e._keys=Xr(e._scopes),t}function Xr(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}function Zr(e,t,n,r){let{iScale:i}=e,{key:a=`r`}=this._parsing,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={r:i.parse(qt(u,a),l)};return o}var Qr=2**-52||1e-14,$r=(e,t)=>t<e.length&&!e[t].skip&&e[t],ei=e=>e===`x`?`y`:`x`;function ti(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=_n(a,i),c=_n(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function ni(e,t,n){let r=e.length,i,a,o,s,c,l=$r(e,0);for(let u=0;u<r-1;++u)if(c=l,l=$r(e,u+1),!(!c||!l)){if(sn(t[u],0,Qr)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function ri(e,t,n=`x`){let r=ei(n),i=e.length,a,o,s,c=$r(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=$r(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function ii(e,t=`x`){let n=ei(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=$r(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=$r(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?on(i[o-1])===on(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}ni(e,i,a),ri(e,a,t)}function ai(e,t,n){return Math.max(Math.min(e,n),t)}function oi(e,t){let n,r,i,a,o,s=fr(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&fr(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=ai(i.cp1x,t.left,t.right),i.cp1y=ai(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=ai(i.cp2x,t.left,t.right),i.cp2y=ai(i.cp2y,t.top,t.bottom)))}function si(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)ii(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=ti(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&oi(e,n)}function ci(){return typeof window<`u`&&typeof document<`u`}function li(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function ui(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var di=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function fi(e,t){return di(e).getPropertyValue(t)}var pi=[`top`,`right`,`bottom`,`left`];function mi(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=pi[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var hi=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function gi(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(hi(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function _i(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=di(n),a=i.boxSizing===`border-box`,o=mi(i,`padding`),s=mi(i,`border`,`width`),{x:c,y:l,box:u}=gi(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function vi(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&li(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=di(a),s=mi(o,`border`,`width`),c=mi(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=ui(o.maxWidth,a,`clientWidth`),i=ui(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||en,maxHeight:i||en}}var yi=e=>Math.round(e*10)/10;function bi(e,t,n,r){let i=di(e),a=mi(i,`margin`),o=ui(i.maxWidth,e,`clientWidth`)||en,s=ui(i.maxHeight,e,`clientHeight`)||en,c=vi(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=mi(i,`border`,`width`),t=mi(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=yi(Math.min(l,o,c.maxWidth)),u=yi(Math.min(u,s,c.maxHeight)),l&&!u&&(u=yi(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=yi(Math.floor(u*r))),{width:l,height:u}}function xi(e,t,n){let r=t||1,i=yi(e.height*r),a=yi(e.width*r);e.height=yi(e.height),e.width=yi(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var Si=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};ci()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function Ci(e,t){let n=fi(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function wi(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Ti(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function Ei(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=wi(e,i,n),s=wi(i,a,n),c=wi(a,t,n);return wi(wi(o,s,n),wi(s,c,n),n)}var Di=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},Oi=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ki(e,t,n){return e?Di(t,n):Oi()}function Ai(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function ji(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function Mi(e){return e===`angle`?{between:yn,compare:vn,normalize:K}:{between:xn,compare:(e,t)=>e-t,normalize:e=>e}}function Ni({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function Pi(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=Mi(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function Fi(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=Mi(r),{start:u,end:d,loop:f,style:p}=Pi(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(Ni({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(Ni({start:g,end:d,loop:f,count:o,style:p})),m}function Ii(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=Fi(r[i],e.points,t);a.length&&n.push(...a)}return n}function Li(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Ri(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function zi(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=Li(n,i,a,r);return r===!0?Bi(e,[{start:o,end:s,loop:a}],n,t):Bi(e,Ri(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function Bi(e,t,n,r){return!r||!r.setContext||!n?t:Vi(e,t,n,r)}function Vi(e,t,n,r){let i=e._chart.getContext(),a=Hi(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=Hi(r.setContext(jr(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Ui(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function Hi(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Ui(e,t){if(!t)return!1;let n=[],r=function(e,t){return Vn(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Wi(e,t,n){return e.options.clip?e[n]:t[n]}function Gi(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Wi(n,t,`left`),right:Wi(n,t,`right`),top:Wi(r,t,`top`),bottom:Wi(r,t,`bottom`)}:t}function Ki(e,t){let n=t._clip;if(n.disabled)return!1;let r=Gi(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var qi=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,An.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},Ji=`transparent`,Yi={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=Hn(e||Ji),i=r.valid&&Hn(t||Ji);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},Xi=class{constructor(e,t,n,r){let i=t[n];r=kr([e.to,r,i,e.from]);let a=kr([e.from,i,r]);this._active=!0,this._fn=e.fn||Yi[e.type||typeof a],this._easing=Bn[e.easing]||Bn.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=kr([e.to,t,r,e.from]),this._from=kr([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},Zi=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!L(e))return;let t=Object.keys(Y.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!L(i))return;let a={};for(let e of t)a[e]=i[e];(I(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=$i(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&Qi(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u)if(d&&u.active()){u.update(d,l,o);continue}else u.cancel();if(!d||!d.duration){e[c]=l;continue}i[c]=u=new Xi(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return qi.add(this._chart,n),!0}};function Qi(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function $i(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function ea(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function ta(e,t,n){if(n===!1)return!1;let r=ea(e,n),i=ea(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function na(e){let t,n,r,i;return L(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function ra(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function ia(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],R(l)&&(a||t===0||on(t)===on(l))&&(t+=l)}return!u&&!r.all?0:t}function aa(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function oa(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function sa(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function ca(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function la(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function ua(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function da(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=sa(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=la(i,u,a),f[s]=d,f._top=ua(f,o,!0,r.type),f._bottom=ua(f,o,!1,r.type);let m=f._visualValues||={};m[s]=d}}function fa(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function pa(e,t){return jr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function ma(e,t,n){return jr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function ha(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var ga=e=>e===`reset`||e===`none`,_a=(e,t)=>t?e:Object.assign({},e),va=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:ra(n,!0),values:null},ya=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=oa(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&ha(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=z(n.xAxisID,fa(e,`x`)),a=t.yAxisID=z(n.yAxisID,fa(e,`y`)),o=t.rAxisID=z(n.rAxisID,fa(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&On(this._data,this),e._stacked&&ha(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(L(t)){let e=this._cachedMeta;this._data=aa(t,e)}else if(n!==t){if(n){On(n,this);let e=this._cachedMeta;ha(e),e._parsed=[]}t&&Object.isExtensible(t)&&Dn(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=oa(t.vScale,t),t.stack!==n.stack&&(r=!0,ha(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(da(this,t._parsed),t._stacked=oa(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length?!0:n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=I(r[e])?this.parseArrayData(n,r,e,t):L(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&da(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(qt(f,o),d),y:a.parse(qt(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return ia({keys:ra(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=ia(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=va(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=ca(o),d,f;function p(){f=r[d];let t=f[o.axis];return!R(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],R(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=na(z(this.options.clip,ta(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=ma(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=pa(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&Yt(n);if(o)return _a(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(Y.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(_a(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Zi(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||ga(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){ga(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!ga(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&ha(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}};function ba(e,t){if(!e._cache.$bar){let n=e.getMatchingVisibleMetas(t),r=[];for(let t=0,i=n.length;t<i;t++)r=r.concat(n[t].controller.getAllParsedValues(e));e._cache.$bar=kn(r.sort((e,t)=>e-t))}return e._cache.$bar}function xa(e){let t=e.iScale,n=ba(t,e.type),r=t._length,i,a,o,s,c=()=>{o===32767||o===-32768||(Yt(s)&&(r=Math.min(r,Math.abs(o-s)||r)),s=o)};for(i=0,a=n.length;i<a;++i)o=t.getPixelForValue(n[i]),c();for(s=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),c();return r}function Sa(e,t,n,r){let i=n.barThickness,a,o;return F(i)?(a=t.min*n.categoryPercentage,o=n.barPercentage):(a=i*r,o=1),{chunk:a/r,ratio:o,start:t.pixels[e]-a/2}}function Ca(e,t,n,r){let i=t.pixels,a=i[e],o=e>0?i[e-1]:null,s=e<i.length-1?i[e+1]:null,c=n.categoryPercentage;o===null&&(o=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-o);let l=a-(a-Math.min(o,s))/2*c;return{chunk:Math.abs(s-o)/2*c/r,ratio:n.barPercentage,start:l}}function wa(e,t,n,r){let i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),s=Math.max(i,a),c=o,l=s;Math.abs(o)>Math.abs(s)&&(c=s,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:a,min:o,max:s}}function Ta(e,t,n,r){return I(e)?wa(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Ea(e,t,n,r){let i=e.iScale,a=e.vScale,o=i.getLabels(),s=i===a,c=[],l,u,d,f;for(l=n,u=n+r;l<u;++l)f=t[l],d={},d[i.axis]=s||i.parse(o[l],l),c.push(Ta(f,d,a,l));return c}function Da(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Oa(e,t,n){return e===0?(t.isHorizontal()?1:-1)*(t.min>=n?1:-1):on(e)}function ka(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n=`left`,r=`right`):(t=e.base<e.y,n=`bottom`,r=`top`),t?(i=`end`,a=`start`):(i=`start`,a=`end`),{start:n,end:r,reverse:t,top:i,bottom:a}}function Aa(e,t,n,r){let i=t.borderSkipped,a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:s,reverse:c,top:l,bottom:u}=ka(e);i===`middle`&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=l:(n._bottom||0)===r?i=u:(a[ja(u,o,s,c)]=!0,i=l)),a[ja(i,o,s,c)]=!0,e.borderSkipped=a}function ja(e,t,n,r){return r?(e=Ma(e,t,n),e=Na(e,n,t)):e=Na(e,t,n),e}function Ma(e,t,n){return e===t?n:e===n?t:e}function Na(e,t,n){return e===`start`?t:e===`end`?n:e}function Pa(e,{inflateAmount:t},n){e.inflateAmount=t===`auto`?n===1?.33:0:t}var Fa=class extends ya{static id=`bar`;static defaults={datasetElementType:!1,dataElementType:`bar`,categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:`number`,properties:[`x`,`y`,`base`,`width`,`height`]}}};static overrides={scales:{_index_:{type:`category`,offset:!0,grid:{offset:!0}},_value_:{type:`linear`,beginAtZero:!0}}};parsePrimitiveData(e,t,n,r){return Ea(e,t,n,r)}parseArrayData(e,t,n,r){return Ea(e,t,n,r)}parseObjectData(e,t,n,r){let{iScale:i,vScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=i.axis===`x`?o:s,l=a.axis===`x`?o:s,u=[],d,f,p,m;for(d=n,f=n+r;d<f;++d)m=t[d],p={},p[i.axis]=i.parse(qt(m,c),d),u.push(Ta(qt(m,l),p,a,d));return u}updateRangeFromParsed(e,t,n,r){super.updateRangeFromParsed(e,t,n,r);let i=n._custom;i&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,i.min),e.max=Math.max(e.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let{iScale:t,vScale:n}=this._cachedMeta,r=this.getParsed(e),i=r._custom,a=Da(i)?`[`+i.start+`, `+i.end+`]`:``+n.getLabelForValue(r[n.axis]);return{label:``+t.getLabelForValue(r[t.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{index:a,_cachedMeta:{vScale:o}}=this,s=o.getBasePixel(),c=o.isHorizontal(),l=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,r);for(let f=t;f<t+n;f++){let t=this.getParsed(f),n=i||F(t[o.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,l),m=(t._stacks||{})[o.axis],h={horizontal:c,base:n.base,enableBorderRadius:!m||Da(t._custom)||a===m._top||a===m._bottom,x:c?n.head:p.center,y:c?p.center:n.head,height:c?p.size:Math.abs(n.size),width:c?Math.abs(n.size):p.size};d&&(h.options=u||this.resolveDataElementOptions(f,e[f].active?`active`:r));let g=h.options||e[f].options;Aa(h,g,m,a),Pa(h,g,l.ratio),this.updateElement(e[f],f,h,r)}}_getStacks(e,t){let{iScale:n}=this._cachedMeta,r=n.getMatchingVisibleMetas(this._type).filter(e=>e.controller.options.grouped),i=n.options.stacked,a=[],o=this._cachedMeta.controller.getParsed(t),s=o&&o[n.axis],c=e=>{let t=e._parsed.find(e=>e[n.axis]===s),r=t&&t[e.vScale.axis];if(F(r)||isNaN(r))return!0};for(let n of r)if(!(t!==void 0&&c(n))&&((i===!1||a.indexOf(n.stack)===-1||i===void 0&&n.stack===void 0)&&a.push(n.stack),n.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(n=>e[n].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let n of this.chart.data.datasets)e[z(this.chart.options.indexAxis===`x`?n.xAxisID:n.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,n){let r=this._getStacks(e,n),i=t===void 0?-1:r.indexOf(t);return i===-1?r.length-1:i}_getRuler(){let e=this.options,t=this._cachedMeta,n=t.iScale,r=[],i,a;for(i=0,a=t.data.length;i<a;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));let o=e.barThickness;return{min:o||xa(t),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:n,index:r},options:{base:i,minBarLength:a}}=this,o=i||0,s=this.getParsed(e),c=s._custom,l=Da(c),u=s[t.axis],d=0,f=n?this.applyStack(t,s,n):u,p,m;f!==u&&(d=f-u,f=u),l&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&on(u)!==on(c.barEnd)&&(d=0),d+=u);let h=!F(i)&&!l?i:d,g=t.getPixelForValue(h);if(p=this.chart.getDataVisibility(e)?t.getPixelForValue(d+f):g,m=p-g,Math.abs(m)<a){m=Oa(m,t,o)*a,u===o&&(g-=m/2);let e=t.getPixelForDecimal(0),i=t.getPixelForDecimal(1);g=Math.max(Math.min(g,Math.max(e,i)),Math.min(e,i)),p=g+m,n&&!l&&(s._stacks[t.axis]._visualValues[r]=t.getValueForPixel(p)-t.getValueForPixel(g))}if(g===t.getPixelForValue(o)){let e=on(m)*t.getLineWidthForValue(o)/2;g+=e,m-=e}return{size:m,base:g,head:p,center:p+m/2}}_calculateBarIndexPixels(e,t){let n=t.scale,r=this.options,i=r.skipNull,a=z(r.maxBarThickness,1/0),o,s,c=this._getAxisCount();if(t.grouped){let n=i?this._getStackCount(e):t.stackCount,l=r.barThickness===`flex`?Ca(e,t,r,n*c):Sa(e,t,r,n*c),u=this.chart.options.indexAxis===`x`?this.getDataset().xAxisID:this.getDataset().yAxisID,d=this._getAxis().indexOf(z(u,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,i?e:void 0)+d;o=l.start+l.chunk*f+l.chunk/2,s=Math.min(a,l.chunk*l.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),s=Math.min(a,t.min*t.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}}draw(){let e=this._cachedMeta,t=e.vScale,n=e.data,r=n.length,i=0;for(;i<r;++i)this.getParsed(i)[t.axis]!==null&&!n[i].hidden&&n[i].draw(this._ctx)}},Ia=class extends ya{static id=`bubble`;static defaults={datasetElementType:!1,dataElementType:`point`,animations:{numbers:{type:`number`,properties:[`x`,`y`,`borderWidth`,`radius`]}}};static overrides={scales:{x:{type:`linear`},y:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,r){let i=super.parsePrimitiveData(e,t,n,r);for(let e=0;e<i.length;e++)i[e]._custom=this.resolveDataElementOptions(e+n).radius;return i}parseArrayData(e,t,n,r){let i=super.parseArrayData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=z(r[2],this.resolveDataElementOptions(e+n).radius)}return i}parseObjectData(e,t,n,r){let i=super.parseObjectData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=z(r&&r.r&&+r.r,this.resolveDataElementOptions(e+n).radius)}return i}getMaxOverflow(){let e=this._cachedMeta.data,t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y),c=a._custom;return{label:n[e]||``,value:`(`+o+`, `+s+(c?`, `+c:``)+`)`}}update(e){let t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:c}=this._getSharedOptions(t,r),l=a.axis,u=o.axis;for(let d=t;d<t+n;d++){let t=e[d],n=!i&&this.getParsed(d),f={},p=f[l]=i?a.getPixelForDecimal(.5):a.getPixelForValue(n[l]),m=f[u]=i?o.getBasePixel():o.getPixelForValue(n[u]);f.skip=isNaN(p)||isNaN(m),c&&(f.options=s||this.resolveDataElementOptions(d,t.active?`active`:r),i&&(f.options.radius=0)),this.updateElement(t,d,f,r)}}resolveDataElementOptions(e,t){let n=this.getParsed(e),r=super.resolveDataElementOptions(e,t);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let i=r.radius;return t!==`active`&&(r.radius=0),r.radius+=z(n&&n._custom,i),r}};function La(e,t,n){let r=1,i=1,a=0,o=0;if(t<U){let s=e,c=s+t,l=Math.cos(s),u=Math.sin(s),d=Math.cos(c),f=Math.sin(c),p=(e,t,r)=>yn(e,s,c,!0)?1:Math.max(t,t*n,r,r*n),m=(e,t,r)=>yn(e,s,c,!0)?-1:Math.min(t,t*n,r,r*n),h=p(0,l,d),g=p(W,u,f),_=m(H,l,d),v=m(H+W,u,f);r=(h-_)/2,i=(g-v)/2,a=-(h+_)/2,o=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:a,offsetY:o}}var Ra=class extends ya{static id=`doughnut`;static defaults={datasetElementType:!1,dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:`number`,properties:[`circumference`,`endAngle`,`innerRadius`,`outerRadius`,`startAngle`,`x`,`y`,`offset`,`borderWidth`,`spacing`]}},cutout:`50%`,rotation:0,circumference:360,radius:`100%`,spacing:0,indexAxis:`r`};static descriptors={_scriptable:e=>e!==`spacing`,_indexable:e=>e!==`spacing`&&!e.startsWith(`borderDash`)&&!e.startsWith(`hoverBorderDash`)};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data,{labels:{pointStyle:n,textAlign:r,color:i,useBorderRadius:a,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((t,s)=>{let c=e.getDatasetMeta(0).controller.getStyle(s);return{text:t,fillStyle:c.backgroundColor,fontColor:i,hidden:!e.getDataVisibility(s),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:r,pointStyle:n,borderRadius:a&&(o||c.borderRadius),index:s}}):[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){let n=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=n;else{let i=e=>+n[e];if(L(n[e])){let{key:e=`value`}=this._parsing;i=t=>+qt(n[t],e)}let a,o;for(a=e,o=e+t;a<o;++a)r._parsed[a]=i(a)}}_getRotation(){return G(this.options.rotation-90)}_getCircumference(){return G(this.options.circumference)}_getRotationExtents(){let e=U,t=-U;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){let r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),a=r._getCircumference();e=Math.min(e,i),t=Math.max(t,i+a)}return{rotation:e,circumference:t-e}}update(e){let{chartArea:t}=this.chart,n=this._cachedMeta,r=n.data,i=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(t.width,t.height)-i)/2,0),o=Math.min(Ft(this.options.cutout,a),1),s=this._getRingWeight(this.index),{circumference:c,rotation:l}=this._getRotationExtents(),{ratioX:u,ratioY:d,offsetX:f,offsetY:p}=La(l,c,o),m=(t.width-i)/u,h=(t.height-i)/d,g=Math.max(Math.min(m,h)/2,0),_=It(this.options.radius,g),v=(_-Math.max(_*o,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*_,this.offsetY=p*_,n.total=this.calculateTotal(),this.outerRadius=_-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*s,0),this.updateElements(r,0,r.length,e)}_circumference(e,t){let n=this.options,r=this._cachedMeta,i=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*i/U)}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.chartArea,s=a.options.animation,c=(o.left+o.right)/2,l=(o.top+o.bottom)/2,u=i&&s.animateScale,d=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(t,r),h=this._getRotation(),g;for(g=0;g<t;++g)h+=this._circumference(g,i);for(g=t;g<t+n;++g){let t=this._circumference(g,i),n=e[g],a={x:c+this.offsetX,y:l+this.offsetY,startAngle:h,endAngle:h+t,circumference:t,outerRadius:f,innerRadius:d};m&&(a.options=p||this.resolveDataElementOptions(g,n.active?`active`:r)),h+=t,this.updateElement(n,g,a,r)}}calculateTotal(){let e=this._cachedMeta,t=e.data,n=0,r;for(r=0;r<t.length;r++){let i=e._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!t[r].hidden&&(n+=Math.abs(i))}return n}calculateCircumference(e){let t=this._cachedMeta.total;return t>0&&!isNaN(e)?Math.abs(e)/t*U:0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Xn(t._parsed[e],n.options.locale);return{label:r[e]||``,value:i}}getMaxBorderWidth(e){let t=0,n=this.chart,r,i,a,o,s;if(!e){for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){a=n.getDatasetMeta(r),e=a.data,o=a.controller;break}}if(!e)return 0;for(r=0,i=e.length;r<i;++r)s=o.resolveDataElementOptions(r),s.borderAlign!==`inner`&&(t=Math.max(t,s.borderWidth||0,s.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,r=e.length;n<r;++n){let e=this.resolveDataElementOptions(n);t=Math.max(t,e.offset||0,e.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(z(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}},za=class extends ya{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=Fn(t,r,a);this._drawStart=o,this._drawCount=s,In(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=dn(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=F(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}},Ba=class extends ya{static id=`polarArea`;static defaults={dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:`number`,properties:[`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`]}},indexAxis:`r`,startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:n,color:r}}=e.legend.options;return t.labels.map((t,i)=>{let a=e.getDatasetMeta(0).controller.getStyle(i);return{text:t,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:`radialLinear`,angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Xn(t._parsed[e].r,n.options.locale);return{label:r[e]||``,value:i}}parseObjectData(e,t,n,r){return Zr.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){let e=this._cachedMeta,t={min:1/0,max:-1/0};return e.data.forEach((e,n)=>{let r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<t.min&&(t.min=r),r>t.max&&(t.max=r))}),t}_updateRadius(){let e=this.chart,t=e.chartArea,n=e.options,r=Math.min(t.right-t.left,t.bottom-t.top),i=Math.max(r/2,0),a=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.options.animation,s=this._cachedMeta.rScale,c=s.xCenter,l=s.yCenter,u=s.getIndexAngle(0)-.5*H,d=u,f,p=360/this.countVisibleElements();for(f=0;f<t;++f)d+=this._computeAngle(f,r,p);for(f=t;f<t+n;f++){let t=e[f],n=d,m=d+this._computeAngle(f,r,p),h=a.getDataVisibility(f)?s.getDistanceFromCenterForValue(this.getParsed(f).r):0;d=m,i&&(o.animateScale&&(h=0),o.animateRotate&&(n=m=u));let g={x:c,y:l,innerRadius:0,outerRadius:h,startAngle:n,endAngle:m,options:this.resolveDataElementOptions(f,t.active?`active`:r)};this.updateElement(t,f,g,r)}}countVisibleElements(){let e=this._cachedMeta,t=0;return e.data.forEach((e,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?G(this.resolveDataElementOptions(e,t).angle||n):0}},Va=Object.freeze({__proto__:null,BarController:Fa,BubbleController:Ia,DoughnutController:Ra,LineController:za,PieController:class extends Ra{static id=`pie`;static defaults={cutout:0,rotation:0,circumference:360,radius:`100%`}},PolarAreaController:Ba,RadarController:class extends ya{static id=`radar`;static defaults={datasetElementType:`line`,dataElementType:`point`,indexAxis:`r`,showLine:!0,elements:{line:{fill:`start`}}};static overrides={aspectRatio:1,scales:{r:{type:`radialLinear`}}};getLabelAndValue(e){let t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:``+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,r){return Zr.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta,n=t.dataset,r=t.data||[],i=t.iScale.getLabels();if(n.points=r,e!==`resize`){let t=this.resolveDatasetElementOptions(e);this.options.showLine||(t.borderWidth=0);let a={_loop:!0,_fullLoop:i.length===r.length,options:t};this.updateElement(n,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,t,n,r){let i=this._cachedMeta.rScale,a=r===`reset`;for(let o=t;o<t+n;o++){let t=e[o],n=this.resolveDataElementOptions(o,t.active?`active`:r),s=i.getPointPositionForValue(o,this.getParsed(o).r),c=a?i.xCenter:s.x,l=a?i.yCenter:s.y,u={x:c,y:l,angle:s.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(t,o,u,r)}}},ScatterController:class extends ya{static id=`scatter`;static defaults={datasetElementType:!1,dataElementType:`point`,showLine:!1,fill:!1};static overrides={interaction:{mode:`point`},scales:{x:{type:`linear`},y:{type:`linear`}}};getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y);return{label:n[e]||``,value:`(`+o+`, `+s+`)`}}update(e){let t=this._cachedMeta,{data:n=[]}=t,r=this.chart._animationsDisabled,{start:i,count:a}=Fn(t,n,r);if(this._drawStart=i,this._drawCount=a,In(t)&&(i=0,a=n.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:i,_dataset:a}=t;i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=n;let o=this.resolveDatasetElementOptions(e);o.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:o},e)}else this.datasetElementType&&=(delete t.dataset,!1);this.updateElements(n,i,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement(`line`)),super.addElements()}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,l=this.resolveDataElementOptions(t,r),u=this.getSharedOptions(l),d=this.includeOptions(r,u),f=a.axis,p=o.axis,{spanGaps:m,segment:h}=this.options,g=dn(m)?m:1/0,_=this.chart._animationsDisabled||i||r===`none`,v=t>0&&this.getParsed(t-1);for(let l=t;l<t+n;++l){let t=e[l],n=this.getParsed(l),m=_?t:{},y=F(n[p]),b=m[f]=a.getPixelForValue(n[f],l),x=m[p]=i||y?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,n,s):n[p],l);m.skip=isNaN(b)||isNaN(x)||y,m.stop=l>0&&Math.abs(n[f]-v[f])>g,h&&(m.parsed=n,m.raw=c.data[l]),d&&(m.options=u||this.resolveDataElementOptions(l,t.active?`active`:r)),_||this.updateElement(t,l,m,r),v=n}this.updateSharedOptions(u,r,l)}getMaxOverflow(){let e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}let n=e.dataset,r=n.options&&n.options.borderWidth||0;if(!t.length)return r;let i=t[0].size(this.resolveDataElementOptions(0)),a=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(r,i,a)/2}}});function Ha(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var Ua={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return Ha()}parse(){return Ha()}format(){return Ha()}add(){return Ha()}diff(){return Ha()}startOf(){return Ha()}endOf(){return Ha()}}};function Wa(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?wn:Cn;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!F(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!F(e[t.axis]));r.hi+=Math.max(0,o)}return r}else if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function Ga(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Wa(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Ka(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function qa(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||Ga(e,n,t,function(n,o,s){!i&&!fr(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Ja(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=gn(e,{x:t.x,y:t.y});yn(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return Ga(e,n,t,a),i}function Ya(e,t,n,r,i,a){let o=[],s=Ka(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Ga(e,n,t,l),o}function Xa(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?Ja(e,t,n,i):Ya(e,t,n,r,i,a)}function Za(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return Ga(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var Qa={evaluateInteractionItems:Ga,modes:{index(e,t,n,r){let i=_i(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?qa(e,i,a,r,o):Xa(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=_i(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?qa(e,i,a,r,o):Xa(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return qa(e,_i(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=_i(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return Xa(e,i,a,n.intersect,r,o)},x(e,t,n,r){return Za(e,_i(t,e),`x`,n.intersect,r)},y(e,t,n,r){return Za(e,_i(t,e),`y`,n.intersect,r)}}},$a=[`left`,`top`,`right`,`bottom`];function eo(e,t){return e.filter(e=>e.pos===t)}function to(e,t){return e.filter(e=>$a.indexOf(e.pos)===-1&&e.box.axis===t)}function no(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function ro(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function io(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!$a.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function ao(e,t){let n=io(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function oo(e){let t=ro(e),n=no(t.filter(e=>e.box.fullSize),!0),r=no(eo(t,`left`),!0),i=no(eo(t,`right`)),a=no(eo(t,`top`),!0),o=no(eo(t,`bottom`)),s=to(t,`x`),c=to(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:eo(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function so(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function co(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function lo(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!L(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&co(o,a.getPadding());let s=Math.max(0,t.outerWidth-so(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-so(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function uo(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function fo(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function po(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,fo(s.horizontal,t));let{same:o,other:d}=lo(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&po(i,t,n,r)||u}function mo(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function ho(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;Yt(c.start)&&(o=c.start),e.fullSize?mo(e,i.left,o,n.outerWidth-i.right-i.left,a):mo(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;Yt(c.start)&&(a=c.start),e.fullSize?mo(e,a,i.top,o,n.outerHeight-i.bottom-i.top):mo(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var Q={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=X(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=oo(e.boxes),c=s.vertical,l=s.horizontal;V(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);co(f,X(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=ao(c.concat(l),d);po(s.fullSize,p,d,m),po(c,p,d,m),po(l,p,d,m)&&po(c,p,d,m),uo(p),ho(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,ho(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},V(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},go=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},_o=class extends go{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},vo=`$chartjs`,yo={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},bo=e=>e===null||e===``;function xo(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[vo]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,bo(i)){let t=Ci(e,`width`);t!==void 0&&(e.width=t)}if(bo(r))if(e.style.height===``)e.height=e.width/(t||2);else{let t=Ci(e,`height`);t!==void 0&&(e.height=t)}return e}var So=Si?{passive:!0}:!1;function Co(e,t,n){e&&e.addEventListener(t,n,So)}function wo(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,So)}function To(e,t){let n=yo[e.type]||e.type,{x:r,y:i}=_i(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function Eo(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Do(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Eo(n.addedNodes,r),t&&=!Eo(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Oo(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Eo(n.removedNodes,r),t&&=!Eo(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var ko=new Map,Ao=0;function jo(){let e=window.devicePixelRatio;e!==Ao&&(Ao=e,ko.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Mo(e,t){ko.size||window.addEventListener(`resize`,jo),ko.set(e,t)}function No(e){ko.delete(e),ko.size||window.removeEventListener(`resize`,jo)}function Po(e,t,n){let r=e.canvas,i=r&&li(r);if(!i)return;let a=jn((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;n===0&&r===0||a(n,r)});return o.observe(i),Mo(e,a),o}function Fo(e,t,n){n&&n.disconnect(),t===`resize`&&No(e)}function Io(e,t,n){let r=e.canvas,i=jn(t=>{e.ctx!==null&&n(To(t,e))},e);return Co(r,t,i),i}var Lo=class extends go{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(xo(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[vo])return!1;let n=t[vo].initial;[`height`,`width`].forEach(e=>{let r=n[e];F(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[vo],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Do,detach:Oo,resize:Po}[t]||Io)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Fo,detach:Fo,resize:Fo}[t]||wo)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return bi(e,t,n,r)}isAttached(e){let t=e&&li(e);return!!(t&&t.isConnected)}};function Ro(e){return!ci()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?_o:Lo}var $=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return dn(this.x)&&dn(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function zo(e,t){let n=e.options.ticks,r=Bo(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Ho(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return Uo(t,l,a,o/i),l;let u=Vo(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(Wo(t,l,u,F(r)?0:s-r,s),e=0,n=o-1;e<n;e++)Wo(t,l,u,a[e],a[e+1]);return Wo(t,l,u,c,F(r)?t.length:c+r),l}return Wo(t,l,u),l}function Bo(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Vo(e,t,n){let r=Go(e),i=t.length/n;if(!r)return Math.max(i,1);let a=ln(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Ho(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Uo(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function Wo(e,t,n,r,i){let a=z(r,0),o=Math.min(z(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function Go(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var Ko=e=>e===`left`?`right`:e===`right`?`left`:e,qo=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,Jo=(e,t)=>Math.min(t||e,e);function Yo(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function Xo(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function Zo(e,t){V(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function Qo(e){return e.drawTicks?e.tickLength:0}function $o(e,t){if(!e.display)return 0;let n=Z(e.font,t),r=X(e.padding);return(I(e.text)?e.text.length:1)*n.lineHeight+r.height}function es(e,t){return jr(e,{scale:t,type:`scale`})}function ts(e,t,n){return jr(e,{tick:n,index:t,type:`tick`})}function ns(e,t,n){let r=Nn(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=Ko(r)),r}function rs(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=J(r,a,s),L(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:qo(e,n,t);f=s-a}else{if(L(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:qo(e,n,t);m=J(r,o,i),d=n===`left`?-W:W}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var is=class e extends ${constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=Pt(e,1/0),t=Pt(t,-1/0),n=Pt(n,1/0),r=Pt(r,-1/0),{min:Pt(e,n),max:Pt(t,r),minDefined:R(e),maxDefined:R(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:Pt(t,Pt(n,t)),max:Pt(n,Pt(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){B(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ar(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?Yo(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=zo(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){B(this.options.afterUpdate,[this])}beforeSetDimensions(){B(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){B(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),B(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){B(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=B(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){B(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){B(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=Jo(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=q(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-Qo(e.grid)-t.padding-$o(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=mn(Math.min(Math.asin(q((l.highest.height+6)/o,-1,1)),Math.asin(q(s/c,-1,1))-Math.asin(q(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){B(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){B(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=$o(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=Qo(i)+a):(e.height=this.maxHeight,e.width=Qo(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=G(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){B(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)F(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=Yo(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/Jo(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!F(p)&&!I(p))v=or(r,g.data,g.gc,v,p),y=_;else if(I(p))for(d=0,f=p.length;d<f;++d)b=p[d],!F(b)&&!I(b)&&(v=or(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}Zo(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return bn(this._alignToPixels?cr(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=ts(this.getContext(),e,n)}return this.$context||=es(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=G(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=Qo(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return cr(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,D;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,D=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,D=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(L(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,D=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(L(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let ee=z(r.ticks.maxTicksLimit,l),O=Math.max(1,Math.ceil(l/ee));for(_=0;_<l;_+=O){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=Xo(this,_,s),v!==void 0&&(y=cr(n,v,a),c?b=S=w=E=y:x=C=T=D=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:D,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=Qo(n.grid),f=d+l,p=u?-l:f,m=-G(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,D,ee=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(L(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(L(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?ee=`top`:s===`end`&&(ee=`bottom`));let O=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=I(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),D=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-O.highest.height/2-t*T+T:-O.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?O.highest.height/2-t*T:O.highest.height-E*T,u&&(D*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,D=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=X(e.backdropPadding),n=O.heights[g],r=O.widths[g],i=D-t.top,a=0-t.left;switch(ee){case`middle`:i-=n/2;break;case`bottom`:i-=n;break}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2);break}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:D,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:ee,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-G(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=cr(e,this.left,a)-a/2,l=cr(e,this.right,o)+o/2,u=d=s):(u=cr(e,this.top,a)-a/2,d=cr(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&pr(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;br(t,i,0,a,r,n)}n&&mr(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=Z(n.font),a=X(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||L(t)?(s+=a.bottom,I(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=rs(this,s,t,o);br(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:ns(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=z(t.grid&&t.grid.z,-1),i=z(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return Z(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},as=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;cs(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,os(e,a,n),this.override&&Y.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in Y[r]&&(delete Y[r][n],this.override&&delete tr[n])}};function os(e,t,n){let r=Vt(Object.create(null),[n?Y.get(n):{},Y.get(t),e.defaults]);Y.set(t,r),e.defaultRoutes&&ss(t,e.defaultRoutes),e.descriptors&&Y.describe(t,e.descriptors)}function ss(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);Y.route(a,i,c,s)})}function cs(e){return`id`in e&&`defaults`in e}var ls=new class{constructor(){this.controllers=new as(ya,`datasets`,!0),this.elements=new as($,`elements`),this.plugins=new as(Object,`plugins`),this.scales=new as(is,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):V(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Jt(e);B(n[`before`+r],[],n),t[e](n),B(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},us=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(B(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){F(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=z(n.options&&n.options.plugins,{}),i=ds(n);return r===!1&&!t?[]:ps(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function ds(e){let t={},n=[],r=Object.keys(ls.plugins.items);for(let e=0;e<r.length;e++)n.push(ls.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function fs(e,t){return!t&&e===!1?null:e===!0?{}:e}function ps(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=fs(r[t],i);c!==null&&a.push({plugin:s,options:ms(e.config,{plugin:s,local:n[t]},c,o)})}return a}function ms(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function hs(e,t){let n=Y.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function gs(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function _s(e,t){return e===t?`_index_`:`_value_`}function vs(e){if(e===`x`||e===`y`||e===`r`)return e}function ys(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function bs(e,...t){if(vs(e))return e;for(let n of t){let t=n.axis||ys(n.position)||e.length>1&&vs(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function xs(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function Ss(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return xs(e,`x`,n[0])||xs(e,`y`,n[0])}return{}}function Cs(e,t){let n=tr[e.type]||{scales:{}},r=t.scales||{},i=hs(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!L(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=bs(t,o,Ss(t,e),Y.scales[o.type]),c=_s(s,i),l=n.scales||{};a[t]=Ht(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||hs(i,t),s=(tr[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=gs(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),Ht(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];Ht(t,[Y.scales[t.type],Y.scale])}),a}function ws(e){let t=e.options||={};t.plugins=z(t.plugins,{}),t.scales=Cs(e,t)}function Ts(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Es(e){return e||={},e.data=Ts(e.data),ws(e),e}var Ds=new Map,Os=new Set;function ks(e,t){let n=Ds.get(e);return n||(n=t(),Ds.set(e,n),Os.add(n)),n}var As=(e,t,n)=>{let r=qt(t,n);r!==void 0&&e.add(r)},js=class{constructor(e){this._config=Es(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Ts(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),ws(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return ks(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return ks(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return ks(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return ks(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>As(s,e,t))),t.forEach(e=>As(s,r,e)),t.forEach(e=>As(s,tr[i]||{},e)),t.forEach(e=>As(s,Y,e)),t.forEach(e=>As(s,nr,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),Os.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,tr[t]||{},Y.datasets[t]||{},{type:t},Y,nr]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=Ms(this._resolverCache,e,r),s=a;if(Ps(a,t)){i.$shared=!1,n=Xt(n)?n():n;let t=this.createResolver(e,n,o);s=Nr(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=Ms(this._resolverCache,e,n);return L(t)?Nr(i,t,void 0,r):i}};function Ms(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:Mr(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Ns=e=>L(e)&&Object.getOwnPropertyNames(e).some(t=>Xt(e[t]));function Ps(e,t){let{isScriptable:n,isIndexable:r}=Pr(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(Xt(o)||Ns(o))||a&&I(o))return!0}return!1}var Fs=`4.5.1`,Is=[`top`,`bottom`,`left`,`right`,`chartArea`];function Ls(e,t){return e===`top`||e===`bottom`||Is.indexOf(e)===-1&&t===`x`}function Rs(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function zs(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),B(n&&n.onComplete,[e],t)}function Bs(e){let t=e.chart,n=t.options.animation;B(n&&n.onProgress,[e],t)}function Vs(e){return ci()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var Hs={},Us=e=>{let t=Vs(e);return Object.values(Hs).filter(e=>e.canvas===t).pop()};function Ws(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function Gs(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var Ks=class{static defaults=Y;static instances=Hs;static overrides=tr;static registry=ls;static version=Fs;static getChart=Us;static register(...e){ls.add(...e),qs()}static unregister(...e){ls.remove(...e),qs()}constructor(e,t){let n=this.config=new js(t),r=Vs(e),i=Us(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(Ro(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=Nt(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new us,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Mn(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],Hs[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}qi.listen(this,`complete`,zs),qi.listen(this,`progress`,Bs),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return F(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ls}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():xi(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return lr(this.canvas,this.ctx),this}stop(){return qi.stop(this),this}resize(e,t){qi.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,xi(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),B(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){V(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=bs(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),V(i,t=>{let i=t.options,a=i.id,o=bs(a,i),s=z(i.type,t.dtype);(i.position===void 0||Ls(i.position,o)!==Ls(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(ls.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),V(r,(e,t)=>{e||delete n[t]}),V(n,e=>{Q.configure(this,e,e.options),Q.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Rs(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||hs(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=ls.getController(a),{datasetElementType:r,dataElementType:o}=Y.datasets[a];Object.assign(t,{dataElementType:ls.getElement(o),datasetElementType:r&&ls.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){V(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||V(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Rs(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){V(this.scales,e=>{Q.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Zt(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Ws(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Zt(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;Q.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],V(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Xt(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(qi.has(this)?this.attached&&!qi.running(this)&&qi.start(this):(this.draw(),zs({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Ki(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&pr(t,r),e.controller.draw(),r&&mr(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return fr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=Qa.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=jr(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);Yt(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),qi.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),lr(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Hs[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};V(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){V(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},V(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});Lt(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=Qt(e),c=Gs(e,this._lastEvent,n,s);n&&(this._lastEvent=null,B(i.onHover,[e,o,this],this),s&&B(i.onClick,[e,o,this],this));let l=!Lt(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function qs(){return V(Ks.instances,e=>e._plugins.invalidate())}function Js(e,t,n){let{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:s,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,d=Math.min(l/o,K(r-n));if(e.beginPath(),e.arc(i,a,o-l/2,r+d/2,n-d/2),s>0){let t=Math.min(l/s,K(r-n));e.arc(i,a,s+l/2,n-t/2,r+t/2,!0)}else{let t=Math.min(l/2,o*K(r-n));if(u===`round`)e.arc(i,a,t,n-H/2,r+H/2,!0);else if(u===`bevel`){let o=2*t*t,s=-o*Math.cos(n+H/2)+i,c=-o*Math.sin(n+H/2)+a,l=o*Math.cos(r+H/2)+i,u=o*Math.sin(r+H/2)+a;e.lineTo(s,c),e.lineTo(l,u)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip(`evenodd`)}function Ys(e,t,n){let{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:s,innerRadius:c}=t,l=i/s;e.beginPath(),e.arc(a,o,s,r-l,n+l),c>i?(l=i/c,e.arc(a,o,c,n+l,r-l,!0)):e.arc(a,o,i,n+W,r-W),e.closePath(),e.clip()}function Xs(e){return Er(e,[`outerStart`,`outerEnd`,`innerStart`,`innerEnd`])}function Zs(e,t,n,r){let i=Xs(e.options.borderRadius),a=(n-t)/2,o=Math.min(a,r*t/2),s=e=>{let t=(n-Math.min(a,e))*r/2;return q(e,0,Math.min(a,t))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:q(i.innerStart,0,o),innerEnd:q(i.innerEnd,0,o)}}function Qs(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function $s(e,t,n,r,i,a){let{x:o,y:s,startAngle:c,pixelMargin:l,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-l,0),f=u>0?u+r+n+l:0,p=0,m=i-c;if(r){let e=((u>0?u-r:0)+(d>0?d-r:0))/2;p=(m-(e===0?m:m*e/(e+r)))/2}let h=(m-Math.max(.001,m*d-n/H)/d)/2,g=c+h+p,_=i-h-p,{outerStart:v,outerEnd:y,innerStart:b,innerEnd:x}=Zs(t,f,d,_-g),S=d-v,C=d-y,w=g+v/S,T=_-y/C,E=f+b,D=f+x,ee=g+b/E,O=_-x/D;if(e.beginPath(),a){let t=(w+T)/2;if(e.arc(o,s,d,w,t),e.arc(o,s,d,t,T),y>0){let t=Qs(C,T,o,s);e.arc(t.x,t.y,y,T,_+W)}let n=Qs(D,_,o,s);if(e.lineTo(n.x,n.y),x>0){let t=Qs(D,O,o,s);e.arc(t.x,t.y,x,_+W,O+Math.PI)}let r=(_-x/f+(g+b/f))/2;if(e.arc(o,s,f,_-x/f,r,!0),e.arc(o,s,f,r,g+b/f,!0),b>0){let t=Qs(E,ee,o,s);e.arc(t.x,t.y,b,ee+Math.PI,g-W)}let i=Qs(S,g,o,s);if(e.lineTo(i.x,i.y),v>0){let t=Qs(S,w,o,s);e.arc(t.x,t.y,v,g-W,w)}}else{e.moveTo(o,s);let t=Math.cos(w)*d+o,n=Math.sin(w)*d+s;e.lineTo(t,n);let r=Math.cos(T)*d+o,i=Math.sin(T)*d+s;e.lineTo(r,i)}e.closePath()}function ec(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s}=t,c=t.endAngle;if(a){$s(e,t,n,r,c,i);for(let t=0;t<a;++t)e.fill();isNaN(s)||(c=o+(s%U||U))}return $s(e,t,n,r,c,i),e.fill(),c}function tc(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:d,borderDashOffset:f,borderRadius:p}=c,m=c.borderAlign===`inner`;if(!l)return;e.setLineDash(d||[]),e.lineDashOffset=f,m?(e.lineWidth=l*2,e.lineJoin=u||`round`):(e.lineWidth=l,e.lineJoin=u||`bevel`);let h=t.endAngle;if(a){$s(e,t,n,r,h,i);for(let t=0;t<a;++t)e.stroke();isNaN(s)||(h=o+(s%U||U))}m&&Ys(e,t,h),c.selfJoin&&h-o>=H&&p===0&&u!==`miter`&&Js(e,t,h),a||($s(e,t,n,r,h,i),e.stroke())}var nc=class extends ${static id=`arc`;static defaults={borderAlign:`center`,borderColor:`#fff`,borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:`backgroundColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,n){let{angle:r,distance:i}=gn(this.getProps([`x`,`y`],n),{x:e,y:t}),{startAngle:a,endAngle:o,innerRadius:s,outerRadius:c,circumference:l}=this.getProps([`startAngle`,`endAngle`,`innerRadius`,`outerRadius`,`circumference`],n),u=(this.options.spacing+this.options.borderWidth)/2,d=z(l,o-a),f=yn(r,a,o)&&a!==o,p=d>=U||f,m=xn(i,s+u,c+u);return p&&m}getCenterPoint(e){let{x:t,y:n,startAngle:r,endAngle:i,innerRadius:a,outerRadius:o}=this.getProps([`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`],e),{offset:s,spacing:c}=this.options,l=(r+i)/2,u=(a+o+c+s)/2;return{x:t+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:t,circumference:n}=this,r=(t.offset||0)/4,i=(t.spacing||0)/2,a=t.circular;if(this.pixelMargin=t.borderAlign===`inner`?.33:0,this.fullCircles=n>U?Math.floor(n/U):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let o=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(o)*r,Math.sin(o)*r);let s=r*(1-Math.sin(Math.min(H,n||0)));e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,ec(e,this,s,i,a),tc(e,this,s,i,a),e.restore()}};function rc(e,t,n=t){e.lineCap=z(n.borderCapStyle,t.borderCapStyle),e.setLineDash(z(n.borderDash,t.borderDash)),e.lineDashOffset=z(n.borderDashOffset,t.borderDashOffset),e.lineJoin=z(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=z(n.borderWidth,t.borderWidth),e.strokeStyle=z(n.borderColor,t.borderColor)}function ic(e,t,n){e.lineTo(n.x,n.y)}function ac(e){return e.stepped?hr:e.tension||e.cubicInterpolationMode===`monotone`?gr:ic}function oc(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function sc(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=oc(i,n,r),u=ac(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function cc(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=oc(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function lc(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?cc:sc}function uc(e){return e.stepped?Ti:e.tension||e.cubicInterpolationMode===`monotone`?Ei:wi}function dc(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),rc(e,t.options),e.stroke(i)}function fc(e,t,n,r){let{segments:i,options:a}=t,o=lc(t);for(let s of i)rc(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var pc=typeof Path2D==`function`;function mc(e,t,n,r){pc&&!t.options.segment?dc(e,t,n,r):fc(e,t,n,r)}var hc=class extends ${static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;si(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=zi(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=Ii(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=uc(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return lc(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=lc(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),mc(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function gc(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var _c=class extends ${static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return gc(this,e,`x`,t)}inYRange(e,t){return gc(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!fr(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,ur(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};function vc(e,t){let{x:n,y:r,base:i,width:a,height:o}=e.getProps([`x`,`y`,`base`,`width`,`height`],t),s,c,l,u,d;return e.horizontal?(d=o/2,s=Math.min(n,i),c=Math.max(n,i),l=r-d,u=r+d):(d=a/2,s=n-d,c=n+d,l=Math.min(r,i),u=Math.max(r,i)),{left:s,top:l,right:c,bottom:u}}function yc(e,t,n,r){return e?0:q(t,n,r)}function bc(e,t,n){let r=e.options.borderWidth,i=e.borderSkipped,a=Dr(r);return{t:yc(i.top,a.top,0,n),r:yc(i.right,a.right,0,t),b:yc(i.bottom,a.bottom,0,n),l:yc(i.left,a.left,0,t)}}function xc(e,t,n){let{enableBorderRadius:r}=e.getProps([`enableBorderRadius`]),i=e.options.borderRadius,a=Or(i),o=Math.min(t,n),s=e.borderSkipped,c=r||L(i);return{topLeft:yc(!c||s.top||s.left,a.topLeft,0,o),topRight:yc(!c||s.top||s.right,a.topRight,0,o),bottomLeft:yc(!c||s.bottom||s.left,a.bottomLeft,0,o),bottomRight:yc(!c||s.bottom||s.right,a.bottomRight,0,o)}}function Sc(e){let t=vc(e),n=t.right-t.left,r=t.bottom-t.top,i=bc(e,n/2,r/2),a=xc(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Cc(e,t,n,r){let i=t===null,a=n===null,o=e&&!(i&&a)&&vc(e,r);return o&&(i||xn(t,o.left,o.right))&&(a||xn(n,o.top,o.bottom))}function wc(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Tc(e,t){e.rect(t.x,t.y,t.w,t.h)}function Ec(e,t,n={}){let r=e.x===n.x?0:-t,i=e.y===n.y?0:-t,a=(e.x+e.w===n.x+n.w?0:t)-r,o=(e.y+e.h===n.y+n.h?0:t)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}var Dc=Object.freeze({__proto__:null,ArcElement:nc,BarElement:class extends ${static id=`bar`;static defaults={borderSkipped:`start`,borderWidth:0,borderRadius:0,inflateAmount:`auto`,pointStyle:void 0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:a}=Sc(this),o=wc(a.radius)?xr:Tc;e.save(),(a.w!==i.w||a.h!==i.h)&&(e.beginPath(),o(e,Ec(a,t,i)),e.clip(),o(e,Ec(i,-t,a)),e.fillStyle=n,e.fill(`evenodd`)),e.beginPath(),o(e,Ec(i,t)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,t,n){return Cc(this,e,t,n)}inXRange(e,t){return Cc(this,e,null,t)}inYRange(e,t){return Cc(this,null,e,t)}getCenterPoint(e){let{x:t,y:n,base:r,horizontal:i}=this.getProps([`x`,`y`,`base`,`horizontal`],e);return{x:i?(t+r)/2:t,y:i?n:(n+r)/2}}getRange(e){return e===`x`?this.width/2:this.height/2}},LineElement:hc,PointElement:_c}),Oc=[`rgb(54, 162, 235)`,`rgb(255, 99, 132)`,`rgb(255, 159, 64)`,`rgb(255, 205, 86)`,`rgb(75, 192, 192)`,`rgb(153, 102, 255)`,`rgb(201, 203, 207)`],kc=Oc.map(e=>e.replace(`rgb(`,`rgba(`).replace(`)`,`, 0.5)`));function Ac(e){return Oc[e%Oc.length]}function jc(e){return kc[e%kc.length]}function Mc(e,t){return e.borderColor=Ac(t),e.backgroundColor=jc(t),++t}function Nc(e,t){return e.backgroundColor=e.data.map(()=>Ac(t++)),t}function Pc(e,t){return e.backgroundColor=e.data.map(()=>jc(t++)),t}function Fc(e){let t=0;return(n,r)=>{let i=e.getDatasetMeta(r).controller;i instanceof Ra?t=Nc(n,t):i instanceof Ba?t=Pc(n,t):i&&(t=Mc(n,t))}}function Ic(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Lc(e){return e&&(e.borderColor||e.backgroundColor)}function Rc(){return Y.borderColor!==`rgba(0,0,0,0.1)`||Y.backgroundColor!==`rgba(0,0,0,0.1)`}var zc={id:`colors`,defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;let{data:{datasets:r},options:i}=e.config,{elements:a}=i,o=Ic(r)||Lc(i)||a&&Ic(a)||Rc();if(!n.forceOverride&&o)return;let s=Fc(e);r.forEach(s)}};function Bc(e,t,n,r,i){let a=i.samples||r;if(a>=n)return e.slice(t,t+n);let o=[],s=(n-2)/(a-2),c=0,l=t+n-1,u=t,d,f,p,m,h;for(o[c++]=e[u],d=0;d<a-2;d++){let r=0,i=0,a,l=Math.floor((d+1)*s)+1+t,g=Math.min(Math.floor((d+2)*s)+1,n)+t,_=g-l;for(a=l;a<g;a++)r+=e[a].x,i+=e[a].y;r/=_,i/=_;let v=Math.floor(d*s)+1+t,y=Math.min(Math.floor((d+1)*s)+1,n)+t,{x:b,y:x}=e[u];for(p=m=-1,a=v;a<y;a++)m=.5*Math.abs((b-r)*(e[a].y-x)-(b-e[a].x)*(i-x)),m>p&&(p=m,f=e[a],h=a);o[c++]=f,u=h}return o[c++]=e[l],o}function Vc(e,t,n,r){let i=0,a=0,o,s,c,l,u,d,f,p,m,h,g=[],_=t+n-1,v=e[t].x,y=e[_].x-v;for(o=t;o<t+n;++o){s=e[o],c=(s.x-v)/y*r,l=s.y;let t=c|0;if(t===u)l<m?(m=l,d=o):l>h&&(h=l,f=o),i=(a*i+s.x)/++a;else{let n=o-1;if(!F(d)&&!F(f)){let t=Math.min(d,f),r=Math.max(d,f);t!==p&&t!==n&&g.push({...e[t],x:i}),r!==p&&r!==n&&g.push({...e[r],x:i})}o>0&&n!==p&&g.push(e[n]),g.push(s),u=t,a=0,m=h=l,d=f=p=o}}return g}function Hc(e){if(e._decimated){let t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,`data`,{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Uc(e){e.data.datasets.forEach(e=>{Hc(e)})}function Wc(e,t){let n=t.length,r=0,i,{iScale:a}=e,{min:o,max:s,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(r=q(Cn(t,a.axis,o).lo,0,n-1)),i=l?q(Cn(t,a.axis,s).hi+1,r,n)-r:n-r,{start:r,count:i}}var Gc={id:`decimation`,defaults:{algorithm:`min-max`,enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Uc(e);return}let r=e.width;e.data.datasets.forEach((t,i)=>{let{_data:a,indexAxis:o}=t,s=e.getDatasetMeta(i),c=a||t.data;if(kr([o,e.options.indexAxis])===`y`||!s.controller.supportsDecimation)return;let l=e.scales[s.xAxisID];if(l.type!==`linear`&&l.type!==`time`||e.options.parsing)return;let{start:u,count:d}=Wc(s,c);if(d<=(n.threshold||4*r)){Hc(t);return}F(a)&&(t._data=c,delete t.data,Object.defineProperty(t,`data`,{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(e){this._data=e}}));let f;switch(n.algorithm){case`lttb`:f=Bc(c,u,d,r,n);break;case`min-max`:f=Vc(c,u,d,r);break;default:throw Error(`Unsupported decimation algorithm '${n.algorithm}'`)}t._decimated=f})},destroy(e){Uc(e)}};function Kc(e,t,n){let r=e.segments,i=e.points,a=t.points,o=[];for(let e of r){let{start:r,end:s}=e;s=Yc(r,s,i);let c=qc(n,i[r],i[s],e.loop);if(!t.segments){o.push({source:e,target:c,start:i[r],end:i[s]});continue}let l=Ii(t,c);for(let t of l){let r=qc(n,a[t.start],a[t.end],t.loop),s=Fi(e,i,r);for(let e of s)o.push({source:e,target:t,start:{[n]:Xc(c,r,`start`,Math.max)},end:{[n]:Xc(c,r,`end`,Math.min)}})}}return o}function qc(e,t,n,r){if(r)return;let i=t[e],a=n[e];return e===`angle`&&(i=K(i),a=K(a)),{property:e,start:i,end:a}}function Jc(e,t){let{x:n=null,y:r=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:e,end:t})=>{t=Yc(e,t,i);let o=i[e],s=i[t];r===null?n!==null&&(a.push({x:n,y:o.y}),a.push({x:n,y:s.y})):(a.push({x:o.x,y:r}),a.push({x:s.x,y:r}))}),a}function Yc(e,t,n){for(;t>e;t--){let e=n[t];if(!isNaN(e.x)&&!isNaN(e.y))break}return t}function Xc(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function Zc(e,t){let n=[],r=!1;return I(e)?(r=!0,n=e):n=Jc(e,t),n.length?new hc({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function Qc(e){return e&&e.fill!==!1}function $c(e,t,n){let r=e[t].fill,i=[t],a;if(!n)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!R(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;i.push(r),r=a.fill}return!1}function el(e,t,n){let r=il(e);if(L(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return R(i)&&Math.floor(i)===i?tl(r[0],t,i,n):[`origin`,`start`,`end`,`stack`,`shape`].indexOf(r)>=0&&r}function tl(e,t,n,r){return(e===`-`||e===`+`)&&(n=t+n),n===t||n<0||n>=r?!1:n}function nl(e,t){let n=null;return e===`start`?n=t.bottom:e===`end`?n=t.top:L(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function rl(e,t,n){let r;return r=e===`start`?n:e===`end`?t.options.reverse?t.min:t.max:L(e)?e.value:t.getBaseValue(),r}function il(e){let t=e.options,n=t.fill,r=z(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?`origin`:r}function al(e){let{scale:t,index:n,line:r}=e,i=[],a=r.segments,o=r.points,s=ol(t,n);s.push(Zc({x:null,y:t.bottom},r));for(let e=0;e<a.length;e++){let t=a[e];for(let e=t.start;e<=t.end;e++)sl(i,o[e],s)}return new hc({points:i,options:{}})}function ol(e,t){let n=[],r=e.getMatchingVisibleMetas(`line`);for(let e=0;e<r.length;e++){let i=r[e];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function sl(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=n[i],{first:o,last:s,point:c}=cl(a,t,`x`);if(!(!c||o&&s)){if(o)r.unshift(c);else if(e.push(c),!s)break}}e.push(...r)}function cl(e,t,n){let r=e.interpolate(t,n);if(!r)return{};let i=r[n],a=e.segments,o=e.points,s=!1,c=!1;for(let e=0;e<a.length;e++){let t=a[e],r=o[t.start][n],l=o[t.end][n];if(xn(i,r,l)){s=i===r,c=i===l;break}}return{first:s,last:c,point:r}}var ll=class{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){let{x:r,y:i,radius:a}=this;return t||={start:0,end:U},e.arc(r,i,a,t.end,t.start,!0),!n.bounds}interpolate(e){let{x:t,y:n,radius:r}=this,i=e.angle;return{x:t+Math.cos(i)*r,y:n+Math.sin(i)*r,angle:i}}};function ul(e){let{chart:t,fill:n,line:r}=e;if(R(n))return dl(t,n);if(n===`stack`)return al(e);if(n===`shape`)return!0;let i=fl(e);return i instanceof ll?i:Zc(i,r)}function dl(e,t){let n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function fl(e){return(e.scale||{}).getPointPositionForValue?ml(e):pl(e)}function pl(e){let{scale:t={},fill:n}=e,r=nl(n,t);if(R(r)){let e=t.isHorizontal();return{x:e?r:null,y:e?null:r}}return null}function ml(e){let{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,a=r.reverse?t.max:t.min,o=rl(n,t,a),s=[];if(r.grid.circular){let e=t.getPointPositionForValue(0,a);return new ll({x:e.x,y:e.y,radius:t.getDistanceFromCenterForValue(o)})}for(let e=0;e<i;++e)s.push(t.getPointPositionForValue(e,o));return s}function hl(e,t,n){let r=ul(t),{chart:i,index:a,line:o,scale:s,axis:c}=t,l=o.options,u=l.fill,d=l.backgroundColor,{above:f=d,below:p=d}=u||{},m=Ki(i,i.getDatasetMeta(a));r&&o.points.length&&(pr(e,n),gl(e,{line:o,target:r,above:f,below:p,area:n,scale:s,axis:c,clip:m}),mr(e))}function gl(e,t){let{line:n,target:r,above:i,below:a,area:o,scale:s,clip:c}=t,l=n._loop?`angle`:t.axis;e.save();let u=a;a!==i&&(l===`x`?(_l(e,r,o.top),yl(e,{line:n,target:r,color:i,scale:s,property:l,clip:c}),e.restore(),e.save(),_l(e,r,o.bottom)):l===`y`&&(vl(e,r,o.left),yl(e,{line:n,target:r,color:a,scale:s,property:l,clip:c}),e.restore(),e.save(),vl(e,r,o.right),u=i)),yl(e,{line:n,target:r,color:u,scale:s,property:l,clip:c}),e.restore()}function _l(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Yc(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(l.x,n),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(u.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function vl(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Yc(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(n,l.y),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(n,u.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function yl(e,t){let{line:n,target:r,property:i,color:a,scale:o,clip:s}=t,c=Kc(n,r,i);for(let{source:t,target:l,start:u,end:d}of c){let{style:{backgroundColor:c=a}={}}=t,f=r!==!0;e.save(),e.fillStyle=c,bl(e,o,s,f&&qc(i,u,d)),e.beginPath();let p=!!n.pathSegment(e,t),m;if(f){p?e.closePath():xl(e,r,d,i);let t=!!r.pathSegment(e,l,{move:p,reverse:!0});m=p&&t,m||xl(e,r,u,i)}e.closePath(),e.fill(m?`evenodd`:`nonzero`),e.restore()}}function bl(e,t,n,r){let i=t.chart.chartArea,{property:a,start:o,end:s}=r||{};if(a===`x`||a===`y`){let t,r,c,l;a===`x`?(t=o,r=i.top,c=s,l=i.bottom):(t=i.left,r=o,c=i.right,l=s),e.beginPath(),n&&(t=Math.max(t,n.left),c=Math.min(c,n.right),r=Math.max(r,n.top),l=Math.min(l,n.bottom)),e.rect(t,r,c-t,l-r),e.clip()}}function xl(e,t,n,r){let i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var Sl={id:`filler`,afterDatasetsUpdate(e,t,n){let r=(e.data.datasets||[]).length,i=[],a,o,s,c;for(o=0;o<r;++o)a=e.getDatasetMeta(o),s=a.dataset,c=null,s&&s.options&&s instanceof hc&&(c={visible:e.isDatasetVisible(o),index:o,fill:el(s,o,r),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=c,i.push(c);for(o=0;o<r;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=$c(i,o,n.propagate))},beforeDraw(e,t,n){let r=n.drawTime===`beforeDraw`,i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let t=i.length-1;t>=0;--t){let n=i[t].$filler;n&&(n.line.updateControlPoints(a,n.axis),r&&n.fill&&hl(e.ctx,n,a))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!==`beforeDatasetsDraw`)return;let r=e.getSortedVisibleDatasetMetas();for(let t=r.length-1;t>=0;--t){let n=r[t].$filler;Qc(n)&&hl(e.ctx,n,e.chartArea)}},beforeDatasetDraw(e,t,n){let r=t.meta.$filler;!Qc(r)||n.drawTime!==`beforeDatasetDraw`||hl(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:`beforeDatasetDraw`}},Cl=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},wl=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index,Tl=class extends ${constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=B(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(t=>e.filter(t,this.chart.data))),e.sort&&(t=t.sort((t,n)=>e.sort(t,n,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}let n=e.labels,r=Z(n.font),i=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:s}=Cl(n,i),c,l;t.font=r.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(a,i,o,s)+10):(l=this.maxHeight,c=this._fitCols(a,r,o,s)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(l,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,r){let{ctx:i,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.lineWidths=[0],l=r+o,u=e;i.textAlign=`left`,i.textBaseline=`middle`;let d=-1,f=-l;return this.legendItems.forEach((e,p)=>{let m=n+t/2+i.measureText(e.text).width;(p===0||c[c.length-1]+m+2*o>a)&&(u+=l,c[c.length-(p>0?0:1)]=0,f+=l,d++),s[p]={left:0,top:f,row:d,width:m,height:r},c[c.length-1]+=m+o}),u}_fitCols(e,t,n,r){let{ctx:i,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.columnSizes=[],l=a-e,u=o,d=0,f=0,p=0,m=0;return this.legendItems.forEach((e,a)=>{let{itemWidth:h,itemHeight:g}=El(n,t,i,e,r);a>0&&f+g+2*o>l&&(u+=d+o,c.push({width:d,height:f}),p+=d+o,m++,d=f=0),s[a]={left:p,top:f,col:m,width:h,height:g},d=Math.max(d,h),f+=g+o}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:r},rtl:i}}=this,a=ki(i,this.left,this.width);if(this.isHorizontal()){let i=0,o=J(n,this.left+r,this.right-this.lineWidths[i]);for(let s of t)i!==s.row&&(i=s.row,o=J(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+e+r,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+r}else{let i=0,o=J(n,this.top+e+r,this.bottom-this.columnSizes[i].height);for(let s of t)s.col!==i&&(i=s.col,o=J(n,this.top+e+r,this.bottom-this.columnSizes[i].height)),s.top=o,s.left+=this.left+r,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+r}}isHorizontal(){return this.options.position===`top`||this.options.position===`bottom`}draw(){if(this.options.display){let e=this.ctx;pr(e,this),this._draw(),mr(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:n,ctx:r}=this,{align:i,labels:a}=e,o=Y.color,s=ki(e.rtl,this.left,this.width),c=Z(a.font),{padding:l}=a,u=c.size,d=u/2,f;this.drawTitle(),r.textAlign=s.textAlign(`left`),r.textBaseline=`middle`,r.lineWidth=.5,r.font=c.string;let{boxWidth:p,boxHeight:m,itemHeight:h}=Cl(a,u),g=function(e,t,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();let i=z(n.lineWidth,1);if(r.fillStyle=z(n.fillStyle,o),r.lineCap=z(n.lineCap,`butt`),r.lineDashOffset=z(n.lineDashOffset,0),r.lineJoin=z(n.lineJoin,`miter`),r.lineWidth=i,r.strokeStyle=z(n.strokeStyle,o),r.setLineDash(z(n.lineDash,[])),a.usePointStyle)dr(r,{radius:m*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},s.xPlus(e,p/2),t+d,a.pointStyleWidth&&p);else{let a=t+Math.max((u-m)/2,0),o=s.leftForLtr(e,p),c=Or(n.borderRadius);r.beginPath(),Object.values(c).some(e=>e!==0)?xr(r,{x:o,y:a,w:p,h:m,radius:c}):r.rect(o,a,p,m),r.fill(),i!==0&&r.stroke()}r.restore()},_=function(e,t,n){br(r,n.text,e,t+h/2,c,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();f=v?{x:J(i,this.left+l,this.right-n[0]),y:this.top+l+y,line:0}:{x:this.left+l,y:J(i,this.top+y+l,this.bottom-t[0].height),line:0},Ai(this.ctx,e.textDirection);let b=h+l;this.legendItems.forEach((o,u)=>{r.strokeStyle=o.fontColor,r.fillStyle=o.fontColor;let m=r.measureText(o.text).width,h=s.textAlign(o.textAlign||=a.textAlign),x=p+d+m,S=f.x,C=f.y;if(s.setWidth(this.width),v?u>0&&S+x+l>this.right&&(C=f.y+=b,f.line++,S=f.x=J(i,this.left+l,this.right-n[f.line])):u>0&&C+b>this.bottom&&(S=f.x=S+t[f.line].width+l,f.line++,C=f.y=J(i,this.top+y+l,this.bottom-t[f.line].height)),g(s.x(S),C,o),S=Pn(h,S+p+d,v?S+x:this.right,e.rtl),_(s.x(S),C,o),v)f.x+=x+l;else if(typeof o.text!=`string`){let e=c.lineHeight;f.y+=kl(o,e)+l}else f.y+=b}),ji(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,n=Z(t.font),r=X(t.padding);if(!t.display)return;let i=ki(e.rtl,this.left,this.width),a=this.ctx,o=t.position,s=n.size/2,c=r.top+s,l,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),l=this.top+c,u=J(e.align,u,this.right-d);else{let t=this.columnSizes.reduce((e,t)=>Math.max(e,t.height),0);l=c+J(e.align,this.top,this.bottom-t-e.labels.padding-this._computeTitleHeight())}let f=J(o,u,u+d);a.textAlign=i.textAlign(Nn(o)),a.textBaseline=`middle`,a.strokeStyle=t.color,a.fillStyle=t.color,a.font=n.string,br(a,t.text,f,l,n)}_computeTitleHeight(){let e=this.options.title,t=Z(e.font),n=X(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,r,i;if(xn(e,this.left,this.right)&&xn(t,this.top,this.bottom)){for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],xn(e,r.left,r.left+r.width)&&xn(t,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(e){let t=this.options;if(!Al(e.type,t))return;let n=this._getLegendItemAt(e.x,e.y);if(e.type===`mousemove`||e.type===`mouseout`){let r=this._hoveredItem,i=wl(r,n);r&&!i&&B(t.onLeave,[e,r,this],this),this._hoveredItem=n,n&&!i&&B(t.onHover,[e,n,this],this)}else n&&B(t.onClick,[e,n,this],this)}};function El(e,t,n,r,i){return{itemWidth:Dl(r,e,t,n),itemHeight:Ol(i,r,t.lineHeight)}}function Dl(e,t,n,r){let i=e.text;return i&&typeof i!=`string`&&(i=i.reduce((e,t)=>e.length>t.length?e:t)),t+n.size/2+r.measureText(i).width}function Ol(e,t,n){let r=e;return typeof t.text!=`string`&&(r=kl(t,n)),r}function kl(e,t){return t*(e.text?e.text.length:0)}function Al(e,t){return!!((e===`mousemove`||e===`mouseout`)&&(t.onHover||t.onLeave)||t.onClick&&(e===`click`||e===`mouseup`))}var jl={id:`legend`,_element:Tl,start(e,t,n){let r=e.legend=new Tl({ctx:e.ctx,options:n,chart:e});Q.configure(e,r,n),Q.addBox(e,r)},stop(e){Q.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){let r=e.legend;Q.configure(e,r,n),r.options=n},afterUpdate(e){let t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:`top`,align:`center`,fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){let r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(e=>{let c=e.controller.getStyle(n?0:void 0),l=X(c.borderWidth);return{text:t[e.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!e.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(s||c.borderRadius),datasetIndex:e.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:`center`,text:``}},descriptors:{_scriptable:e=>!e.startsWith(`on`),labels:{_scriptable:e=>![`generateLabels`,`filter`,`sort`].includes(e)}}},Ml=class extends ${constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;let r=I(n.text)?n.text.length:1;this._padding=X(n.padding);let i=r*Z(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){let e=this.options.position;return e===`top`||e===`bottom`}_drawArgs(e){let{top:t,left:n,bottom:r,right:i,options:a}=this,o=a.align,s=0,c,l,u;return this.isHorizontal()?(l=J(o,n,i),u=t+e,c=i-n):(a.position===`left`?(l=n+e,u=J(o,r,t),s=H*-.5):(l=i-e,u=J(o,t,r),s=H*.5),c=r-t),{titleX:l,titleY:u,maxWidth:c,rotation:s}}draw(){let e=this.ctx,t=this.options;if(!t.display)return;let n=Z(t.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:a,maxWidth:o,rotation:s}=this._drawArgs(r);br(e,t.text,0,0,n,{color:t.color,maxWidth:o,rotation:s,textAlign:Nn(t.align),textBaseline:`middle`,translation:[i,a]})}};function Nl(e,t){let n=new Ml({ctx:e.ctx,options:t,chart:e});Q.configure(e,n,t),Q.addBox(e,n),e.titleBlock=n}var Pl={id:`title`,_element:Ml,start(e,t,n){Nl(e,n)},stop(e){let t=e.titleBlock;Q.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){let r=e.titleBlock;Q.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`bold`},fullSize:!0,padding:10,position:`top`,text:``,weight:2e3},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Fl=new WeakMap,Il={id:`subtitle`,start(e,t,n){let r=new Ml({ctx:e.ctx,options:n,chart:e});Q.configure(e,r,n),Q.addBox(e,r),Fl.set(e,r)},stop(e){Q.removeBox(e,Fl.get(e)),Fl.delete(e)},beforeUpdate(e,t,n){let r=Fl.get(e);Q.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`normal`},fullSize:!0,padding:0,position:`top`,text:``,weight:1500},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Ll={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=_n(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function Rl(e,t){return t&&(I(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function zl(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Bl(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Vl(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=Z(t.bodyFont),l=Z(t.titleFont),u=Z(t.footerFont),d=a.length,f=i.length,p=r.length,m=X(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,V(e.title,y),n.font=c.string,V(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,V(r,e=>{V(e.before,y),V(e.lines,y),V(e.after,y)}),v=0,n.font=u.string,V(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function Hl(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Ul(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function Wl(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Ul(l,e,t,n)&&(l=`center`),l}function Gl(e,t,n){let r=n.yAlign||t.yAlign||Hl(e,n);return{xAlign:n.xAlign||t.xAlign||Wl(e,t,n,r),yAlign:r}}function Kl(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function ql(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:t===`bottom`?r-=i+n:r-=i/2,r}function Jl(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Or(o),m=Kl(t,s),h=ql(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:q(m,0,r.width-t.width),y:q(h,0,r.height-t.height)}}function Yl(e,t,n){let r=X(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Xl(e){return Rl([],zl(e))}function Zl(e,t,n){return jr(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function Ql(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var $l={beforeTitle:Mt,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:Mt,beforeBody:Mt,beforeLabel:Mt,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return F(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Mt,afterBody:Mt,beforeFooter:Mt,footer:Mt,afterFooter:Mt};function eu(e,t,n,r){let i=e[t].call(n,r);return i===void 0?$l[t].call(n,r):i}var tu=class extends ${static positioners=Ll;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Zi(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Zl(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=eu(n,`beforeTitle`,this,e),i=eu(n,`title`,this,e),a=eu(n,`afterTitle`,this,e),o=[];return o=Rl(o,zl(r)),o=Rl(o,zl(i)),o=Rl(o,zl(a)),o}getBeforeBody(e,t){return Xl(eu(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return V(e,e=>{let t={before:[],lines:[],after:[]},i=Ql(n,e);Rl(t.before,zl(eu(i,`beforeLabel`,this,e))),Rl(t.lines,eu(i,`label`,this,e)),Rl(t.after,zl(eu(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Xl(eu(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=eu(n,`beforeFooter`,this,e),i=eu(n,`footer`,this,e),a=eu(n,`afterFooter`,this,e),o=[];return o=Rl(o,zl(r)),o=Rl(o,zl(i)),o=Rl(o,zl(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Bl(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),V(o,t=>{let n=Ql(e.callbacks,t);r.push(eu(n,`labelColor`,this,t)),i.push(eu(n,`labelPointStyle`,this,t)),a.push(eu(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=Ll[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Vl(this,n),o=Object.assign({},e,t),s=Gl(this.chart,n,o),c=Jl(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=Or(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=ki(n.rtl,this.x,this.width);for(e.x=Yl(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=Z(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=Z(i.bodyFont),u=Yl(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,ur(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,ur(e,t,n,l)}else{e.lineWidth=L(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=Or(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,xr(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),xr(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=Z(n.bodyFont),d=u.lineHeight,f=0,p=ki(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Yl(this,h,n),t.fillStyle=n.bodyColor,V(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,V(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;V(g.after,m)}f=0,d=u.lineHeight,V(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=ki(n.rtl,this.x,this.width);for(e.x=Yl(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=Z(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Or(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=Ll[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Vl(this,e),o=Object.assign({},n,this._size),s=Gl(t,e,o),c=Jl(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=X(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),Ai(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),ji(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!Lt(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!Lt(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=Ll[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},nu=Object.freeze({__proto__:null,Colors:zc,Decimation:Gc,Filler:Sl,Legend:jl,SubTitle:Il,Title:Pl,Tooltip:{id:`tooltip`,_element:tu,positioners:Ll,afterInit(e,t,n){n&&(e.tooltip=new tu({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:$l},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]}}),ru=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function iu(e,t,n,r){let i=e.indexOf(t);return i===-1?ru(e,t,n,r):i===e.lastIndexOf(t)?i:n}var au=(e,t)=>e===null?null:q(Math.round(e),0,t);function ou(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var su=class extends is{static id=`category`;static defaults={ticks:{callback:ou}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(F(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:iu(n,e,z(t,e),this._addedLabels),au(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return ou.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function cu(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!F(a),_=!F(o),v=!F(c),y=(h-m)/(u+1),b=cn((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=cn(w*b/p/f)*f),F(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&fn((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=sn(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(hn(b),hn(S));x=10**(F(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,sn(Math.round((S+E*b)*x)/x,a,lu(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&sn(n[n.length-1].value,o,lu(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function lu(e,t,{horizontal:n,minRotation:r}){let i=G(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var uu=class extends is{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return F(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=on(r),t=on(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=cu({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&pn(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Xn(e,this.chart.options.locale,this.options.ticks.format)}},du=class extends uu{static id=`linear`;static defaults={ticks:{callback:$n.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=R(e)?e:0,this.max=R(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=G(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},fu=e=>Math.floor(an(e)),pu=(e,t)=>10**(fu(e)+t);function mu(e){return e/10**fu(e)==1}function hu(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function gu(e,t){let n=fu(t-e);for(;hu(e,t,n)>10;)n++;for(;hu(e,t,n)<10;)n--;return Math.min(n,fu(e))}function _u(e,{min:t,max:n}){t=Pt(e.min,t);let r=[],i=fu(t),a=gu(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=Pt(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:mu(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=Pt(e.max,f);return r.push({value:p,major:mu(p),significand:d}),r}var vu=class extends is{static id=`logarithmic`;static defaults={ticks:{callback:$n.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=uu.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return R(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=R(e)?Math.max(0,e):null,this.max=R(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!R(this._userMin)&&(this.min=e===pu(this.min,0)?pu(this.min,-1):pu(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(pu(n,-1)),a(pu(r,1)))),n<=0&&i(pu(r,-1)),r<=0&&a(pu(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=_u({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&pn(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Xn(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=an(e),this._valueRange=an(this.max)-an(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(an(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}};function yu(e){let t=e.ticks;if(t.display&&e.display){let e=X(t.backdropPadding);return z(t.font&&t.font.size,Y.font.size)+e.height}return 0}function bu(e,t,n){return n=I(n)?n:[n],{w:sr(e,t.string,n),h:n.length*t.lineHeight}}function xu(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function Su(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?H/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=Z(a.font),d=bu(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=K(e.getIndexAngle(c)+s),p=Math.round(mn(f));Cu(n,t,f,xu(p,l.x,d.w,0,180),xu(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Eu(e,r,i)}function Cu(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function wu(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(mn(K(c.angle+W))),u=ku(c.y,s.h,l),d=Du(l),f=Ou(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function Tu(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(fr({x:n,y:r},t)||fr({x:n,y:a},t)||fr({x:i,y:r},t)||fr({x:i,y:a},t))}function Eu(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:yu(a)/2,additionalAngle:o?H/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=wu(e,a,c);r.push(i),s===`auto`&&(i.visible=Tu(i,l),i.visible&&(l=i))}return r}function Du(e){return e===0||e===180?`center`:e<180?`left`:`right`}function Ou(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function ku(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function Au(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!F(s)){let n=Or(t.borderRadius),c=X(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),xr(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function ju(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));Au(n,a,t);let o=Z(a.font),{x:s,y:c,textAlign:l}=t;br(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function Mu(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,U);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function Nu(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),Mu(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function Pu(e,t,n){return jr(e,{label:n,index:t,type:`pointLabel`})}var Fu=class extends uu{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$n.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=X(yu(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=R(e)&&!isNaN(e)?e:0,this.max=R(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/yu(this.options))}generateTickLabels(e){uu.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=B(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?Su(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=U/(this._pointLabels.length||1),n=this.options.startAngle||0;return K(e*t+G(n))}getDistanceFromCenterForValue(e){if(F(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(F(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return Pu(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-W+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),Mu(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&ju(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);Nu(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=Z(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=X(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}br(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}},Iu={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Lu=Object.keys(Iu);function Ru(e,t){return e-t}function zu(e,t){if(F(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),R(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(dn(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function Bu(e,t,n,r){let i=Lu.length;for(let a=Lu.indexOf(e);a<i-1;++a){let e=Iu[Lu[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Lu[a]}return Lu[i-1]}function Vu(e,t,n,r,i){for(let a=Lu.length-1;a>=Lu.indexOf(n);a--){let n=Lu[a];if(Iu[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Lu[n?Lu.indexOf(n):0]}function Hu(e){for(let t=Lu.indexOf(e)+1,n=Lu.length;t<n;++t)if(Iu[Lu[t]].common)return Lu[t]}function Uu(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=Sn(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Wu(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function Gu(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Wu(e,r,i,n)}var Ku=class extends is{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Ua._date(e.adapters.date);r.init(t),Ht(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:zu(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=R(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=R(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=Tn(r,i,a);return this._unit=t.unit||(n.autoSkip?Bu(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Vu(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Hu(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),Gu(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=q(t,0,a),n=q(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||Bu(i.minUnit,t,n,this._getLabelCapacity(t)),o=z(r.ticks.stepSize,1),s=a===`week`?i.isoWeekday:!1,c=dn(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)Uu(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&Uu(l,d,p),Object.keys(l).sort(Ru).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return B(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=G(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Gu(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(zu(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return kn(e.sort(Ru))}};function qu(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Cn(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Cn(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}var Ju=class extends Ku{static id=`timeseries`;static defaults=Ku.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=qu(t,this.min),this._tableRange=qu(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(qu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return qu(this._table,n*this._tableRange+this._minPos,!0)}},Yu=[Va,Dc,nu,Object.freeze({__proto__:null,CategoryScale:su,LinearScale:du,LogarithmicScale:vu,RadialLinearScale:Fu,TimeScale:Ku,TimeSeriesScale:Ju})];Ks.register(...Yu);var Xu=Ks,Zu={modes:{point(e,t){return td(e,t,{intersect:!0})},nearest(e,t,n){return nd(e,t,n)},x(e,t,n){return td(e,t,{intersect:n.intersect,axis:`x`})},y(e,t,n){return td(e,t,{intersect:n.intersect,axis:`y`})}}};function Qu(e,t,n){return(Zu.modes[n.mode]||Zu.modes.nearest)(e,t,n)}function $u(e,t,n){return n!==`x`&&n!==`y`?e.inRange(t.x,t.y,`x`,!0)||e.inRange(t.x,t.y,`y`,!0):e.inRange(t.x,t.y,n,!0)}function ed(e,t,n){return n===`x`?{x:e.x,y:t.y}:n===`y`?{x:t.x,y:e.y}:t}function td(e,t,n){return e.filter(e=>n.intersect?e.inRange(t.x,t.y):$u(e,t,n.axis))}function nd(e,t,n){let r=1/0;return td(e,t,n).reduce((e,i)=>{let a=_n(t,ed(t,i.getCenterPoint(),n.axis));return a<r?(e=[i],r=a):a===r&&e.push(i),e},[]).sort((e,t)=>e._index-t._index).slice(0,1)}function rd(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=t.x,o=t.y;return{x:a+r*(e.x-a)-i*(e.y-o),y:o+i*(e.x-a)+r*(e.y-o)}}var id=(e,t)=>t>e||e.length>t.length&&e.slice(0,t.length)===t,ad=.001,od=(e,t,n)=>Math.min(n,Math.max(t,e)),sd=(e,t)=>e.value>=e.start-t&&e.value<=e.end+t;function cd(e,t,n){for(let r of Object.keys(e))e[r]=od(e[r],t,n);return e}function ld(e,t,n,r){return!e||!t||n<=0?!1:(e.x-t.x)**2+(e.y-t.y)**2<=(n+r)**2}function ud(e,{x:t,y:n,x2:r,y2:i},a,{borderWidth:o,hitTolerance:s}){let c=(o+s)/2,l=e.x>=t-c-ad&&e.x<=r+c+ad,u=e.y>=n-c-ad&&e.y<=i+c+ad;return a===`x`?l:(a===`y`||l)&&u}function dd(e,{rect:t,center:n},r,{rotation:i,borderWidth:a,hitTolerance:o}){return ud(rd(e,n,G(-i)),t,r,{borderWidth:a,hitTolerance:o})}function fd(e,t){let{centerX:n,centerY:r}=e.getProps([`centerX`,`centerY`],t);return{x:n,y:r}}function pd(e,t,n,r=!0){let i=n.split(`.`),a=0;for(let o of t.split(`.`)){let s=i[a++];if(parseInt(o,10)<parseInt(s,10))break;if(id(s,o)){if(r)throw Error(`${e} v${n} is not supported. v${t} or newer is required.`);return!1}}return!0}var md=e=>typeof e==`string`&&e.endsWith(`%`),hd=e=>parseFloat(e)/100,gd=e=>od(hd(e),0,1),_d=(e,t)=>({x:e,y:t,x2:e,y2:t,width:0,height:0}),vd={box:e=>_d(e.centerX,e.centerY),doughnutLabel:e=>_d(e.centerX,e.centerY),ellipse:e=>({centerX:e.centerX,centerY:e.centerX,radius:0,width:0,height:0}),label:e=>_d(e.centerX,e.centerY),line:e=>_d(e.x,e.y),point:e=>({centerX:e.centerX,centerY:e.centerY,radius:0,width:0,height:0}),polygon:e=>_d(e.centerX,e.centerY)};function yd(e,t){return t===`start`?0:t===`end`?e:md(t)?gd(t)*e:e/2}function bd(e,t,n=!0){return typeof t==`number`?t:md(t)?(n?gd(t):hd(t))*e:e}function xd(e,t){let{x:n,width:r}=e,i=t.textAlign;return i===`center`?n+r/2:i===`end`||i===`right`?n+r:n}function Sd(e,t,{borderWidth:n,position:r,xAdjust:i,yAdjust:a},o){let s=L(o),c=t.width+(s?o.width:0)+n,l=t.height+(s?o.height:0)+n,u=Cd(r),d=Dd(e.x,c,i,u.x),f=Dd(e.y,l,a,u.y);return{x:d,y:f,x2:d+c,y2:f+l,width:c,height:l,centerX:d+c/2,centerY:f+l/2}}function Cd(e,t=`center`){return L(e)?{x:z(e.x,t),y:z(e.y,t)}:(e=z(e,t),{x:e,y:e})}var wd=(e,t)=>e&&e.autoFit&&t<1;function Td(e,t){let n=e.font,r=I(n)?n:[n];return wd(e,t)?r.map(function(e){let n=Z(e);return n.size=Math.floor(e.size*t),n.lineHeight=e.lineHeight,Z(n)}):r.map(e=>Z(e))}function Ed(e){return e&&(Yt(e.xValue)||Yt(e.yValue))}function Dd(e,t,n=0,r){return e-yd(t,r)+n}function Od(e,t,n){let r=n.init;if(r)return r===!0?Ad(t,n):jd(e,t,n)}function kd(e,t,n){let r=!1;return t.forEach(t=>{Xt(e[t])?(r=!0,n[t]=e[t]):Yt(n[t])&&delete n[t]}),r}function Ad(e,t){return vd[t.type||`line`](e)}function jd(e,t,n){let r=B(n.init,[{chart:e,properties:t,options:n}]);if(r===!0)return Ad(t,n);if(L(r))return r}var Md=new Map,Nd=e=>isNaN(e)||e<=0,Pd=e=>e.reduce(function(e,t){return e+=t.string,e},``);function Fd(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object HTMLImageElement]`||t===`[object HTMLCanvasElement]`}}function Id(e,{x:t,y:n},r){r&&(e.translate(t,n),e.rotate(G(r)),e.translate(-t,-n))}function Ld(e,t){if(t&&t.borderWidth)return e.lineCap=t.borderCapStyle||`butt`,e.setLineDash(t.borderDash),e.lineDashOffset=t.borderDashOffset,e.lineJoin=t.borderJoinStyle||`miter`,e.lineWidth=t.borderWidth,e.strokeStyle=t.borderColor,!0}function Rd(e,t){e.shadowColor=t.backgroundShadowColor,e.shadowBlur=t.shadowBlur,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY}function zd(e,t){let n=t.content;if(Fd(n))return{width:bd(n.width,t.width),height:bd(n.height,t.height)};let r=Td(t),i=t.textStrokeWidth,a=I(n)?n:[n],o=a.join()+Pd(r)+i+(e._measureText?`-spriting`:``);return Md.has(o)||Md.set(o,Gd(e,a,r,i)),Md.get(o)}function Bd(e,t,n){let{x:r,y:i,width:a,height:o}=t;e.save(),Rd(e,n);let s=Ld(e,n);e.fillStyle=n.backgroundColor,e.beginPath(),xr(e,{x:r,y:i,w:a,h:o,radius:cd(Or(n.borderRadius),0,Math.min(a,o)/2)}),e.closePath(),e.fill(),s&&(e.shadowColor=n.borderShadowColor,e.stroke()),e.restore()}function Vd(e,t,n,r){let i=n.content;if(Fd(i)){e.save(),e.globalAlpha=Jd(n.opacity,i.style.opacity),e.drawImage(i,t.x,t.y,t.width,t.height),e.restore();return}let a=I(i)?i:[i],o=Td(n,r),s=n.color,c=I(s)?s:[s],l=xd(t,n),u=t.y+n.textStrokeWidth/2;e.save(),e.textBaseline=`middle`,e.textAlign=n.textAlign,Hd(e,n)&&Kd(e,{x:l,y:u},a,o),qd(e,{x:l,y:u},a,{fonts:o,colors:c}),e.restore()}function Hd(e,t){if(t.textStrokeWidth>0)return e.lineJoin=`round`,e.miterLimit=2,e.lineWidth=t.textStrokeWidth,e.strokeStyle=t.textStrokeColor,!0}function Ud(e,t,n,r){let{radius:i,options:a}=t,o=a.pointStyle,s=a.rotation,c=(s||0)*tn;if(Fd(o)){e.save(),e.translate(n,r),e.rotate(c),e.drawImage(o,-o.width/2,-o.height/2,o.width,o.height),e.restore();return}Nd(i)||Wd(e,{x:n,y:r,radius:i,rotation:s,style:o,rad:c})}function Wd(e,{x:t,y:n,radius:r,rotation:i,style:a,rad:o}){let s,c,l,u;switch(e.beginPath(),a){default:e.arc(t,n,r,0,U),e.closePath();break;case`triangle`:e.moveTo(t+Math.sin(o)*r,n-Math.cos(o)*r),o+=rn,e.lineTo(t+Math.sin(o)*r,n-Math.cos(o)*r),o+=rn,e.lineTo(t+Math.sin(o)*r,n-Math.cos(o)*r),e.closePath();break;case`rectRounded`:u=r*.516,l=r-u,s=Math.cos(o+nn)*l,c=Math.sin(o+nn)*l,e.arc(t-s,n-c,u,o-H,o-W),e.arc(t+c,n-s,u,o-W,o),e.arc(t+s,n+c,u,o,o+W),e.arc(t-c,n+s,u,o+W,o+H),e.closePath();break;case`rect`:if(!i){l=Math.SQRT1_2*r,e.rect(t-l,n-l,2*l,2*l);break}o+=nn;case`rectRot`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+c,n-s),e.lineTo(t+s,n+c),e.lineTo(t-c,n+s),e.closePath();break;case`crossRot`:o+=nn;case`cross`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s);break;case`star`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s),o+=nn,s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c),e.moveTo(t+c,n-s),e.lineTo(t-c,n+s);break;case`line`:s=Math.cos(o)*r,c=Math.sin(o)*r,e.moveTo(t-s,n-c),e.lineTo(t+s,n+c);break;case`dash`:e.moveTo(t,n),e.lineTo(t+Math.cos(o)*r,n+Math.sin(o)*r);break}e.fill()}function Gd(e,t,n,r){e.save();let i=t.length,a=0,o=r;for(let s=0;s<i;s++){let i=n[Math.min(s,n.length-1)];e.font=i.string;let c=t[s];a=Math.max(a,e.measureText(c).width+r),o+=i.lineHeight}return e.restore(),{width:a,height:o}}function Kd(e,{x:t,y:n},r,i){e.beginPath();let a=0;r.forEach(function(r,o){let s=i[Math.min(o,i.length-1)],c=s.lineHeight;e.font=s.string,e.strokeText(r,t,n+c/2+a),a+=c}),e.stroke()}function qd(e,{x:t,y:n},r,{fonts:i,colors:a}){let o=0;r.forEach(function(r,s){let c=a[Math.min(s,a.length-1)],l=i[Math.min(s,i.length-1)],u=l.lineHeight;e.beginPath(),e.font=l.string,e.fillStyle=c,e.fillText(r,t,n+u/2+o),o+=u,e.fill()})}function Jd(e,t){let n=dn(e)?e:t;return dn(n)?od(n,0,1):1}var Yd=[`left`,`bottom`,`top`,`right`];function Xd(e,t){let{pointX:n,pointY:r,options:i}=t,a=i.callout,o=a&&a.display&&tf(t,a);if(!o||rf(t,a,o))return;if(e.save(),e.beginPath(),!Ld(e,a))return e.restore();let{separatorStart:s,separatorEnd:c}=Zd(t,o),{sideStart:l,sideEnd:u}=$d(t,o,s);(a.margin>0||i.borderWidth===0)&&(e.moveTo(s.x,s.y),e.lineTo(c.x,c.y)),e.moveTo(l.x,l.y),e.lineTo(u.x,u.y);let d=rd({x:n,y:r},t.getCenterPoint(),G(-t.rotation));e.lineTo(d.x,d.y),e.stroke(),e.restore()}function Zd(e,t){let{x:n,y:r,x2:i,y2:a}=e,o=Qd(e,t),s,c;return t===`left`||t===`right`?(s={x:n+o,y:r},c={x:s.x,y:a}):(s={x:n,y:r+o},c={x:i,y:s.y}),{separatorStart:s,separatorEnd:c}}function Qd(e,t){let{width:n,height:r,options:i}=e,a=i.callout.margin+i.borderWidth/2;return t===`right`?n+a:t===`bottom`?r+a:-a}function $d(e,t,n){let{y:r,width:i,height:a,options:o}=e,s=o.callout.start,c=ef(t,o.callout),l,u;return t===`left`||t===`right`?(l={x:n.x,y:r+bd(a,s)},u={x:l.x+c,y:l.y}):(l={x:n.x+bd(i,s),y:n.y},u={x:l.x,y:l.y+c}),{sideStart:l,sideEnd:u}}function ef(e,t){let n=t.side;return e===`left`||e===`top`?-n:n}function tf(e,t){let n=t.position;return Yd.includes(n)?n:nf(e,t)}function nf(e,t){let{x:n,y:r,x2:i,y2:a,width:o,height:s,pointX:c,pointY:l,centerX:u,centerY:d,rotation:f}=e,p={x:u,y:d},m=t.start,h=bd(o,m),g=bd(s,m),_=[n,n+h,n+h,i],v=[r+g,a,r,a],y=[];for(let e=0;e<4;e++){let t=rd({x:_[e],y:v[e]},p,G(f));y.push({position:Yd[e],distance:_n(t,{x:c,y:l})})}return y.sort((e,t)=>e.distance-t.distance)[0].position}function rf(e,t,n){let{pointX:r,pointY:i}=e,a=t.margin,o=r,s=i;return n===`left`?o+=a:n===`right`?o-=a:n===`top`?s+=a:n===`bottom`&&(s-=a),e.inRange(o,s)}var af={xScaleID:{min:`xMin`,max:`xMax`,start:`left`,end:`right`,startProp:`x`,endProp:`x2`},yScaleID:{min:`yMin`,max:`yMax`,start:`bottom`,end:`top`,startProp:`y`,endProp:`y2`}};function of(e,t,n){return t=typeof t==`number`?t:e.parse(t),R(t)?e.getPixelForValue(t):n}function sf(e,t,n){let r=t[n];if(r||n===`scaleID`)return r;let i=n.charAt(0),a=Object.values(e).filter(e=>e.axis&&e.axis===i);return a.length?a[0].id:i}function cf(e,t){if(e){let n=e.options.reverse;return{start:of(e,t.min,n?t.end:t.start),end:of(e,t.max,n?t.start:t.end)}}}function lf(e,t){let{chartArea:n,scales:r}=e,i=r[sf(r,t,`xScaleID`)],a=r[sf(r,t,`yScaleID`)],o=n.width/2,s=n.height/2;return i&&(o=of(i,t.xValue,i.left+i.width/2)),a&&(s=of(a,t.yValue,a.top+a.height/2)),{x:o,y:s}}function uf(e,t){let n=e.scales,r=n[sf(n,t,`xScaleID`)],i=n[sf(n,t,`yScaleID`)];if(!r&&!i)return{};let{left:a,right:o}=r||e.chartArea,{top:s,bottom:c}=i||e.chartArea,l=hf(r,{min:t.xMin,max:t.xMax,start:a,end:o});a=l.start,o=l.end;let u=hf(i,{min:t.yMin,max:t.yMax,start:c,end:s});return s=u.start,c=u.end,{x:a,y:s,x2:o,y2:c,width:o-a,height:c-s,centerX:a+(o-a)/2,centerY:s+(c-s)/2}}function df(e,t){if(!Ed(t)){let n=uf(e,t),r=t.radius;(!r||isNaN(r))&&(r=Math.min(n.width,n.height)/2,t.radius=r);let i=r*2,a=n.centerX+t.xAdjust,o=n.centerY+t.yAdjust;return{x:a-r,y:o-r,x2:a+r,y2:o+r,centerX:a,centerY:o,width:i,height:i,radius:r}}return mf(e,t)}function ff(e,t){let{scales:n,chartArea:r}=e,i=n[t.scaleID],a={x:r.left,y:r.top,x2:r.right,y2:r.bottom};return i?gf(i,a,t):_f(n,a,t),a}function pf(e,t){let n=uf(e,t);return n.initProperties=Od(e,n,t),n.elements=[{type:`label`,optionScope:`label`,properties:xf(e,n,t),initProperties:n.initProperties}],n}function mf(e,t){let n=lf(e,t),r=t.radius*2;return{x:n.x-t.radius+t.xAdjust,y:n.y-t.radius+t.yAdjust,x2:n.x+t.radius+t.xAdjust,y2:n.y+t.radius+t.yAdjust,centerX:n.x+t.xAdjust,centerY:n.y+t.yAdjust,radius:t.radius,width:r,height:r}}function hf(e,t){let n=cf(e,t)||t;return{start:Math.min(n.start,n.end),end:Math.max(n.start,n.end)}}function gf(e,t,n){let r=of(e,n.value,NaN),i=of(e,n.endValue,r);e.isHorizontal()?(t.x=r,t.x2=i):(t.y=r,t.y2=i)}function _f(e,t,n){for(let r of Object.keys(af)){let i=e[sf(e,n,r)];if(i){let{min:e,max:a,start:o,end:s,startProp:c,endProp:l}=af[r],u=cf(i,{min:n[e],max:n[a],start:i[o],end:i[s]});t[c]=u.start,t[l]=u.end}}}function vf({properties:e,options:t},n,r,i){let{x:a,x2:o,width:s}=e;return bf({start:a,end:o,size:s,borderWidth:t.borderWidth},{position:r.x,padding:{start:i.left,end:i.right},adjust:t.label.xAdjust,size:n.width})}function yf({properties:e,options:t},n,r,i){let{y:a,y2:o,height:s}=e;return bf({start:a,end:o,size:s,borderWidth:t.borderWidth},{position:r.y,padding:{start:i.top,end:i.bottom},adjust:t.label.yAdjust,size:n.height})}function bf(e,t){let{start:n,end:r,borderWidth:i}=e,{position:a,padding:{start:o,end:s},adjust:c}=t,l=r-i-n-o-s-t.size;return n+i/2+c+yd(l,a)}function xf(e,t,n){let r=n.label;r.backgroundColor=`transparent`,r.callout.display=!1;let i=Cd(r.position),a=X(r.padding),o=zd(e.ctx,r),s=vf({properties:t,options:n},o,i,a),c=yf({properties:t,options:n},o,i,a),l=o.width+a.width,u=o.height+a.height;return{x:s,y:c,x2:s+l,y2:c+u,width:l,height:u,centerX:s+l/2,centerY:c+u/2,rotation:r.rotation}}var Sf=[`enter`,`leave`],Cf=Sf.concat(`click`);function wf(e,t,n){t.listened=kd(n,Cf,t.listeners),t.moveListened=!1,Sf.forEach(e=>{Xt(n[e])&&(t.moveListened=!0)}),(!t.listened||!t.moveListened)&&t.annotations.forEach(e=>{!t.listened&&Xt(e.click)&&(t.listened=!0),t.moveListened||Sf.forEach(n=>{Xt(e[n])&&(t.listened=!0,t.moveListened=!0)})})}function Tf(e,t,n){if(e.listened)switch(t.type){case`mousemove`:case`mouseout`:return Ef(e,t,n);case`click`:return Of(e,t,n)}}function Ef(e,t,n){if(!e.moveListened)return;let r;r=t.type===`mousemove`?Qu(e.visibleElements,t,n.interaction):[];let i=e.hovered;e.hovered=r;let a={state:e,event:t},o=Df(a,`leave`,i,r);return Df(a,`enter`,r,i)||o}function Df({state:e,event:t},n,r,i){let a;for(let o of r)i.indexOf(o)<0&&(a=kf(o.options[n]||e.listeners[n],o,t)||a);return a}function Of(e,t,n){let r=e.listeners,i=Qu(e.visibleElements,t,n.interaction),a;for(let e of i)a=kf(e.options.click||r.click,e,t)||a;return a}function kf(e,t,n){return B(e,[t.$context,n])===!0}var Af=[`afterDraw`,`beforeDraw`];function jf(e,t,n){let r=t.visibleElements;t.hooked=kd(n,Af,t.hooks),t.hooked||r.forEach(e=>{t.hooked||Af.forEach(n=>{Xt(e.options[n])&&(t.hooked=!0)})})}function Mf(e,t,n){if(e.hooked)return B(t.options[n]||e.hooks[n],[t.$context])}function Nf(e,t,n){let r=zf(e.scales,t,n),i=Ff(t,r,`min`,`suggestedMin`);i=Ff(t,r,`max`,`suggestedMax`)||i,i&&Xt(t.handleTickRangeOptions)&&t.handleTickRangeOptions()}function Pf(e,t){for(let n of e)Lf(n,t)}function Ff(e,t,n,r){if(R(t[n])&&!If(e.options,n,r)){let r=e[n]!==t[n];return e[n]=t[n],r}}function If(e,t,n){return Yt(e[t])||Yt(e[n])}function Lf(e,t){for(let n of[`scaleID`,`xScaleID`,`yScaleID`]){let r=sf(t,e,n);r&&!t[r]&&Rf(e,n)&&console.warn(`No scale found with id '${r}' for annotation '${e.id}'`)}}function Rf(e,t){if(t===`scaleID`)return!0;let n=t.charAt(0);for(let t of[`Min`,`Max`,`Value`])if(Yt(e[n+t]))return!0;return!1}function zf(e,t,n){let r=t.axis,i=t.id,a=r+`ScaleID`,o={min:z(t.min,-1/0),max:z(t.max,1/0)};for(let s of n)s.scaleID===i?Bf(s,t,[`value`,`endValue`],o):sf(e,s,a)===i&&Bf(s,t,[r+`Min`,r+`Max`,r+`Value`],o);return o}function Bf(e,t,n,r){for(let i of n){let n=e[i];if(Yt(n)){let e=t.parse(n);r.min=Math.min(r.min,e),r.max=Math.max(r.max,e)}}}var Vf=class extends ${inRange(e,t,n,r){let{x:i,y:a}=rd({x:e,y:t},this.getCenterPoint(r),G(-this.options.rotation));return ud({x:i,y:a},this.getProps([`x`,`y`,`x2`,`y2`],r),n,this.options)}getCenterPoint(e){return fd(this,e)}draw(e){e.save(),Id(e,this.getCenterPoint(),this.options.rotation),Bd(e,this,this.options),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){return pf(e,t)}};Vf.id=`boxAnnotation`,Vf.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,init:void 0,hitTolerance:0,label:{backgroundColor:`transparent`,borderWidth:0,callout:{display:!1},color:`black`,content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:`bold`},height:void 0,hitTolerance:void 0,opacity:void 0,padding:6,position:`center`,rotation:void 0,textAlign:`start`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},Vf.defaultRoutes={borderColor:`color`,backgroundColor:`color`},Vf.descriptors={label:{_fallback:!0}};var Hf=class extends ${inRange(e,t,n,r){return dd({x:e,y:t},{rect:this.getProps([`x`,`y`,`x2`,`y2`],r),center:this.getCenterPoint(r)},n,{rotation:this.rotation,borderWidth:0,hitTolerance:this.options.hitTolerance})}getCenterPoint(e){return fd(this,e)}draw(e){let t=this.options;!t.display||!t.content||(Jf(e,this),e.save(),Id(e,this.getCenterPoint(),this.rotation),Vd(e,this,t,this._fitRatio),e.restore())}resolveElementProperties(e,t){let n=Uf(e,t);if(!n)return{};let{controllerMeta:r,point:i,radius:a}=Gf(e,t,n),o=zd(e.ctx,t),s=Kf(o,a);wd(t,s)&&(o={width:o.width*s,height:o.height*s});let{position:c,xAdjust:l,yAdjust:u}=t,d=Sd(i,o,{borderWidth:0,position:c,xAdjust:l,yAdjust:u});return{initProperties:Od(e,d,t),...d,...r,rotation:t.rotation,_fitRatio:s}}};Hf.id=`doughnutLabelAnnotation`,Hf.defaults={autoFit:!0,autoHide:!0,backgroundColor:`transparent`,backgroundShadowColor:`transparent`,borderColor:`transparent`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderShadowColor:`transparent`,borderWidth:0,color:`black`,content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,hitTolerance:0,init:void 0,opacity:void 0,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,spacing:1,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0},Hf.defaultRoutes={};function Uf(e,t){return e.getSortedVisibleDatasetMetas().reduce(function(n,r){let i=r.controller;return i instanceof Ra&&Wf(e,t,r.data)&&(!n||i.innerRadius<n.controller.innerRadius)&&i.options.circumference>=90?r:n},void 0)}function Wf(e,t,n){if(!t.autoHide)return!0;for(let t=0;t<n.length;t++)if(!n[t].hidden&&e.getDataVisibility(t))return!0}function Gf({chartArea:e},t,n){let{left:r,top:i,right:a,bottom:o}=e,{innerRadius:s,offsetX:c,offsetY:l}=n.controller,u=(r+a)/2+c,d=(i+o)/2+l,f={left:Math.max(u-s,r),right:Math.min(u+s,a),top:Math.max(d-s,i),bottom:Math.min(d+s,o)},p={x:(f.left+f.right)/2,y:(f.top+f.bottom)/2},m=t.spacing+t.borderWidth/2,h=s-m,g=p.y>d;return{controllerMeta:{_centerX:u,_centerY:d,_radius:h,_counterclockwise:g,...qf(g?i+m:o-m,u,d,h)},point:p,radius:Math.min(s,Math.min(f.right-f.left,f.bottom-f.top)/2)}}function Kf({width:e,height:t},n){let r=Math.sqrt(e**2+t**2);return n*2/r}function qf(e,t,n,r){let i=(n-e)**2,a=r**2,o=t*-2,s=t**2+i-a,c=o**2-4*s;if(c<=0)return{_startAngle:0,_endAngle:U};let l=(-o-Math.sqrt(c))/2,u=(-o+Math.sqrt(c))/2;return{_startAngle:gn({x:t,y:n},{x:l,y:e}).angle,_endAngle:gn({x:t,y:n},{x:u,y:e}).angle}}function Jf(e,t){let{_centerX:n,_centerY:r,_radius:i,_startAngle:a,_endAngle:o,_counterclockwise:s,options:c}=t;e.save();let l=Ld(e,c);e.fillStyle=c.backgroundColor,e.beginPath(),e.arc(n,r,i,a,o,s),e.closePath(),e.fill(),l&&e.stroke(),e.restore()}var Yf=class extends ${inRange(e,t,n,r){return dd({x:e,y:t},{rect:this.getProps([`x`,`y`,`x2`,`y2`],r),center:this.getCenterPoint(r)},n,{rotation:this.rotation,borderWidth:this.options.borderWidth,hitTolerance:this.options.hitTolerance})}getCenterPoint(e){return fd(this,e)}draw(e){let t=this.options,n=!Yt(this._visible)||this._visible;!t.display||!t.content||!n||(e.save(),Id(e,this.getCenterPoint(),this.rotation),Xd(e,this),Bd(e,this,t),Vd(e,Xf(this),t),e.restore())}resolveElementProperties(e,t){let n;if(Ed(t))n=lf(e,t);else{let{centerX:r,centerY:i}=uf(e,t);n={x:r,y:i}}let r=X(t.padding),i=zd(e.ctx,t),a=Sd(n,i,t,r);return{initProperties:Od(e,a,t),pointX:n.x,pointY:n.y,...a,rotation:t.rotation}}};Yf.id=`labelAnnotation`,Yf.defaults={adjustScaleRange:!0,backgroundColor:`transparent`,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:0,borderShadowColor:`transparent`,borderWidth:0,callout:{borderCapStyle:`butt`,borderColor:void 0,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:1,display:!1,margin:5,position:`auto`,side:5,start:`50%`},color:`black`,content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,hitTolerance:0,init:void 0,opacity:void 0,padding:6,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},Yf.defaultRoutes={borderColor:`color`};function Xf({x:e,y:t,width:n,height:r,options:i}){let a=i.borderWidth/2,o=X(i.padding);return{x:e+o.left+a,y:t+o.top+a,width:n-o.left-o.right-i.borderWidth,height:r-o.top-o.bottom-i.borderWidth}}var Zf=(e,t,n)=>({x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}),Qf=(e,t,n)=>Zf(t,n,Math.abs((e-t.y)/(n.y-t.y))).x,$f=(e,t,n)=>Zf(t,n,Math.abs((e-t.x)/(n.x-t.x))).y,ep=e=>e*e,tp=(e,t,{x:n,y:r,x2:i,y2:a},o)=>o===`y`?{start:Math.min(r,a),end:Math.max(r,a),value:t}:{start:Math.min(n,i),end:Math.max(n,i),value:e},np=(e,t,n,r)=>(1-r)*(1-r)*e+2*(1-r)*r*t+r*r*n,rp=(e,t,n,r)=>({x:np(e.x,t.x,n.x,r),y:np(e.y,t.y,n.y,r)}),ip=(e,t,n,r)=>2*(1-r)*(t-e)+2*r*(n-t),ap=(e,t,n,r)=>-Math.atan2(ip(e.x,t.x,n.x,r),ip(e.y,t.y,n.y,r))+.5*H,op=class extends ${inRange(e,t,n,r){let i=(this.options.borderWidth+this.options.hitTolerance)/2;if(n!==`x`&&n!==`y`){let n={mouseX:e,mouseY:t},{path:a,ctx:o}=this;if(a){Ld(o,this.options),o.lineWidth+=this.options.hitTolerance;let{chart:i}=this.$context,s=e*i.currentDevicePixelRatio,c=t*i.currentDevicePixelRatio,l=o.isPointInStroke(a,s,c)||pp(this,n,r);return o.restore(),l}let s=ep(i);return fp(this,n,s,r)||pp(this,n,r)}return cp(this,{mouseX:e,mouseY:t},n,{hitSize:i,useFinalPosition:r})}getCenterPoint(e){return fd(this,e)}draw(e){let{x:t,y:n,x2:r,y2:i,cp:a,options:o}=this;if(e.save(),!Ld(e,o))return e.restore();Rd(e,o);let s=Math.sqrt((r-t)**2+(i-n)**2);if(o.curve&&a)return Dp(e,this,a,s),e.restore();let{startOpts:c,endOpts:l,startAdjust:u,endAdjust:d}=Sp(this),f=Math.atan2(i-n,r-t);e.translate(t,n),e.rotate(f),e.beginPath(),e.moveTo(0+u,0),e.lineTo(s-d,0),e.shadowColor=o.borderShadowColor,e.stroke(),wp(e,0,u,c),wp(e,s,-d,l),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){let n=ff(e,t),{x:r,y:i,x2:a,y2:o}=n,s=lp(n,e.chartArea),c=s?dp({x:r,y:i},{x:a,y:o},e.chartArea):{x:r,y:i,x2:a,y2:o,width:Math.abs(a-r),height:Math.abs(o-i)};c.centerX=(a+r)/2,c.centerY=(o+i)/2,c.initProperties=Od(e,c,t),t.curve&&(c.cp=Tp(c,t,_n({x:c.x,y:c.y},{x:c.x2,y:c.y2})));let l=mp(e,c,t.label);return l._visible=s,c.elements=[{type:`label`,optionScope:`label`,properties:l,initProperties:c.initProperties}],c}};op.id=`lineAnnotation`;var sp={backgroundColor:void 0,backgroundShadowColor:void 0,borderColor:void 0,borderDash:void 0,borderDashOffset:void 0,borderShadowColor:void 0,borderWidth:void 0,display:void 0,fill:void 0,length:void 0,shadowBlur:void 0,shadowOffsetX:void 0,shadowOffsetY:void 0,width:void 0};op.defaults={adjustScaleRange:!0,arrowHeads:{display:!1,end:Object.assign({},sp),fill:!1,length:12,start:Object.assign({},sp),width:6},borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:2,curve:!1,controlPoint:{y:`-50%`},display:!0,endValue:void 0,init:void 0,hitTolerance:0,label:{backgroundColor:`rgba(0,0,0,0.8)`,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderColor:`black`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderRadius:6,borderShadowColor:`transparent`,borderWidth:0,callout:Object.assign({},Yf.defaults.callout),color:`#fff`,content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:`bold`},height:void 0,hitTolerance:void 0,opacity:void 0,padding:6,position:`center`,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:`center`,textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},scaleID:void 0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,value:void 0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},op.descriptors={arrowHeads:{start:{_fallback:!0},end:{_fallback:!0},_fallback:!0}},op.defaultRoutes={borderColor:`color`};function cp(e,{mouseX:t,mouseY:n},r,{hitSize:i,useFinalPosition:a}){return sd(tp(t,n,e.getProps([`x`,`y`,`x2`,`y2`],a),r),i)||pp(e,{mouseX:t,mouseY:n},a,r)}function lp({x:e,y:t,x2:n,y2:r},{top:i,right:a,bottom:o,left:s}){return!(e<s&&n<s||e>a&&n>a||t<i&&r<i||t>o&&r>o)}function up({x:e,y:t},n,{top:r,right:i,bottom:a,left:o}){return e<o&&(t=$f(o,{x:e,y:t},n),e=o),e>i&&(t=$f(i,{x:e,y:t},n),e=i),t<r&&(e=Qf(r,{x:e,y:t},n),t=r),t>a&&(e=Qf(a,{x:e,y:t},n),t=a),{x:e,y:t}}function dp(e,t,n){let{x:r,y:i}=up(e,t,n),{x:a,y:o}=up(t,e,n);return{x:r,y:i,x2:a,y2:o,width:Math.abs(a-r),height:Math.abs(o-i)}}function fp(e,{mouseX:t,mouseY:n},r=ad,i){let{x:a,y:o,x2:s,y2:c}=e.getProps([`x`,`y`,`x2`,`y2`],i),l=s-a,u=c-o,d=ep(l)+ep(u),f=d===0?-1:((t-a)*l+(n-o)*u)/d,p,m;return f<0?(p=a,m=o):f>1?(p=s,m=c):(p=a+f*l,m=o+f*u),ep(t-p)+ep(n-m)<=r}function pp(e,{mouseX:t,mouseY:n},r,i){let a=e.label;return a.options.display&&a.inRange(t,n,i,r)}function mp(e,t,n){let r=n.borderWidth,i=X(n.padding),a=zd(e.ctx,n);return gp(t,n,{width:a.width+i.width+r,height:a.height+i.height+r,padding:i},e.chartArea)}function hp(e){let{x:t,y:n,x2:r,y2:i}=e,a=Math.atan2(i-n,r-t);return a>H/2?a-H:a<H/-2?a+H:a}function gp(e,t,n,r){let{width:i,height:a,padding:o}=n,{xAdjust:s,yAdjust:c}=t,l={x:e.x,y:e.y},u={x:e.x2,y:e.y2},d=t.rotation===`auto`?hp(e):G(t.rotation),f=_p(i,a,d),p=vp(e,t,{labelSize:f,padding:o},r),m=e.cp?rp(l,e.cp,u,p):Zf(l,u,p),h={size:f.w,min:r.left,max:r.right,padding:o.left},g={size:f.h,min:r.top,max:r.bottom,padding:o.top},_=xp(m.x,h)+s,v=xp(m.y,g)+c;return{x:_-i/2,y:v-a/2,x2:_+i/2,y2:v+a/2,centerX:_,centerY:v,pointX:m.x,pointY:m.y,width:i,height:a,rotation:mn(d)}}function _p(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{w:Math.abs(e*r)+Math.abs(t*i),h:Math.abs(e*i)+Math.abs(t*r)}}function vp(e,t,n,r){let i,a=bp(e,r);return i=t.position===`start`?yp({w:e.x2-e.x,h:e.y2-e.y},n,t,a):t.position===`end`?1-yp({w:e.x-e.x2,h:e.y-e.y2},n,t,a):yd(1,t.position),i}function yp(e,t,n,r){let{labelSize:i,padding:a}=t,o=e.w*r.dx,s=e.h*r.dy,c=o>0&&(i.w/2+a.left-r.x)/o,l=s>0&&(i.h/2+a.top-r.y)/s;return od(Math.max(c,l),0,.25)}function bp(e,t){let{x:n,x2:r,y:i,y2:a}=e,o=Math.min(i,a)-t.top,s=Math.min(n,r)-t.left,c=t.bottom-Math.max(i,a),l=t.right-Math.max(n,r);return{x:Math.min(s,l),y:Math.min(o,c),dx:s<=l?1:-1,dy:o<=c?1:-1}}function xp(e,t){let{size:n,min:r,max:i,padding:a}=t,o=n/2;return n>i-r?(i+r)/2:(r>=e-a-o&&(e=r+a+o),i<=e+a+o&&(e=i-a-o),e)}function Sp(e){let t=e.options,n=t.arrowHeads&&t.arrowHeads.start,r=t.arrowHeads&&t.arrowHeads.end;return{startOpts:n,endOpts:r,startAdjust:Cp(e,n),endAdjust:Cp(e,r)}}function Cp(e,t){if(!t||!t.display)return 0;let{length:n,width:r}=t,i=e.options.borderWidth/2,a={x:n,y:r+i};return Math.abs(Qf(0,a,{x:0,y:i}))}function wp(e,t,n,r){if(!r||!r.display)return;let{length:i,width:a,fill:o,backgroundColor:s,borderColor:c}=r,l=Math.abs(t-i)+n;e.beginPath(),Rd(e,r),Ld(e,r),e.moveTo(l,-a),e.lineTo(t+n,0),e.lineTo(l,a),o===!0?(e.fillStyle=s||c,e.closePath(),e.fill(),e.shadowColor=`transparent`):e.shadowColor=r.borderShadowColor,e.stroke()}function Tp(e,t,n){let{x:r,y:i,x2:a,y2:o,centerX:s,centerY:c}=e,l=Math.atan2(o-i,a-r),u=Cd(t.controlPoint,0);return rd({x:s+bd(n,u.x,!1),y:c+bd(n,u.y,!1)},{x:s,y:c},l)}function Ep(e,{x:t,y:n},{angle:r,adjust:i},a){!a||!a.display||(e.save(),e.translate(t,n),e.rotate(r),wp(e,0,-i,a),e.restore())}function Dp(e,t,n,r){let{x:i,y:a,x2:o,y2:s,options:c}=t,{startOpts:l,endOpts:u,startAdjust:d,endAdjust:f}=Sp(t),p={x:i,y:a},m={x:o,y:s},h=ap(p,n,m,0),g=ap(p,n,m,1)-H,_=rp(p,n,m,d/r),v=rp(p,n,m,1-f/r),y=new Path2D;e.beginPath(),y.moveTo(_.x,_.y),y.quadraticCurveTo(n.x,n.y,v.x,v.y),e.shadowColor=c.borderShadowColor,e.stroke(y),t.path=y,t.ctx=e,Ep(e,_,{angle:h,adjust:d},l),Ep(e,v,{angle:g,adjust:f},u)}var Op=class extends ${inRange(e,t,n,r){let i=this.options.rotation,a=(this.options.borderWidth+this.options.hitTolerance)/2;if(n!==`x`&&n!==`y`)return kp({x:e,y:t},this.getProps([`width`,`height`,`centerX`,`centerY`],r),i,a);let{x:o,y:s,x2:c,y2:l}=this.getProps([`x`,`y`,`x2`,`y2`],r),u=n===`y`?{start:s,end:l}:{start:o,end:c},d=rd({x:e,y:t},this.getCenterPoint(r),G(-i));return d[n]>=u.start-a-ad&&d[n]<=u.end+a+ad}getCenterPoint(e){return fd(this,e)}draw(e){let{width:t,height:n,centerX:r,centerY:i,options:a}=this;e.save(),Id(e,this.getCenterPoint(),a.rotation),Rd(e,this.options),e.beginPath(),e.fillStyle=a.backgroundColor;let o=Ld(e,a);e.ellipse(r,i,n/2,t/2,H/2,0,2*H),e.fill(),o&&(e.shadowColor=a.borderShadowColor,e.stroke()),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,t){return pf(e,t)}};Op.id=`ellipseAnnotation`,Op.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,label:Object.assign({},Vf.defaults.label),rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},Op.defaultRoutes={borderColor:`color`,backgroundColor:`color`},Op.descriptors={label:{_fallback:!0}};function kp(e,t,n,r){let{width:i,height:a,centerX:o,centerY:s}=t,c=i/2,l=a/2;if(c<=0||l<=0)return!1;let u=G(n||0),d=Math.cos(u),f=Math.sin(u),p=(d*(e.x-o)+f*(e.y-s))**2,m=(f*(e.x-o)-d*(e.y-s))**2;return p/(c+r)**2+m/(l+r)**2<=1.0001}var Ap=class extends ${inRange(e,t,n,r){let{x:i,y:a,x2:o,y2:s,width:c}=this.getProps([`x`,`y`,`x2`,`y2`,`width`],r),l=(this.options.borderWidth+this.options.hitTolerance)/2;return n!==`x`&&n!==`y`?ld({x:e,y:t},this.getCenterPoint(r),c/2,l):sd(n===`y`?{start:a,end:s,value:t}:{start:i,end:o,value:e},l)}getCenterPoint(e){return fd(this,e)}draw(e){let t=this.options,n=t.borderWidth;if(t.radius<.1)return;e.save(),e.fillStyle=t.backgroundColor,Rd(e,t);let r=Ld(e,t);Ud(e,this,this.centerX,this.centerY),r&&!Fd(t.pointStyle)&&(e.shadowColor=t.borderShadowColor,e.stroke()),e.restore(),t.borderWidth=n}resolveElementProperties(e,t){let n=df(e,t);return n.initProperties=Od(e,n,t),n}};Ap.id=`pointAnnotation`,Ap.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderDash:[],borderDashOffset:0,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,pointStyle:`circle`,radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},Ap.defaultRoutes={borderColor:`color`,backgroundColor:`color`};var jp=class extends ${inRange(e,t,n,r){if(n!==`x`&&n!==`y`)return this.options.radius>=.1&&this.elements.length>1&&Np(this.elements,e,t,r);let i=rd({x:e,y:t},this.getCenterPoint(r),G(-this.options.rotation)),a=this.elements.map(e=>n===`y`?e.bY:e.bX),o=Math.min(...a),s=Math.max(...a);return i[n]>=o&&i[n]<=s}getCenterPoint(e){return fd(this,e)}draw(e){let{elements:t,options:n}=this;e.save(),e.beginPath(),e.fillStyle=n.backgroundColor,Rd(e,n);let r=Ld(e,n),i=!0;for(let n of t)i?(e.moveTo(n.x,n.y),i=!1):e.lineTo(n.x,n.y);e.closePath(),e.fill(),r&&(e.shadowColor=n.borderShadowColor,e.stroke()),e.restore()}resolveElementProperties(e,t){let n=df(e,t),{sides:r,rotation:i}=t,a=[],o=2*H/r,s=i*tn;for(let i=0;i<r;i++,s+=o){let r=Mp(n,t,s);r.initProperties=Od(e,n,t),a.push(r)}return n.elements=a,n}};jp.id=`polygonAnnotation`,jp.defaults={adjustScaleRange:!0,backgroundShadowColor:`transparent`,borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderShadowColor:`transparent`,borderWidth:1,display:!0,hitTolerance:0,init:void 0,point:{radius:0},radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,sides:3,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},jp.defaultRoutes={borderColor:`color`,backgroundColor:`color`};function Mp({centerX:e,centerY:t},{radius:n,borderWidth:r,hitTolerance:i},a){let o=(r+i)/2,s=Math.sin(a),c=Math.cos(a),l={x:e+s*n,y:t-c*n};return{type:`point`,optionScope:`point`,properties:{x:l.x,y:l.y,centerX:l.x,centerY:l.y,bX:e+s*(n+o),bY:t-c*(n+o)}}}function Np(e,t,n,r){let i=!1,a=e[e.length-1].getProps([`bX`,`bY`],r);for(let o of e){let e=o.getProps([`bX`,`bY`],r);e.bY>n!=a.bY>n&&t<(a.bX-e.bX)*(n-e.bY)/(a.bY-e.bY)+e.bX&&(i=!i),a=e}return i}var Pp={box:Vf,doughnutLabel:Hf,ellipse:Op,label:Yf,line:op,point:Ap,polygon:jp};Object.keys(Pp).forEach(e=>{Y.describe(`elements.${Pp[e].id}`,{_fallback:`plugins.annotation.common`})});var Fp={update:Object.assign},Ip=Cf.concat(Af),Lp=(e,t)=>L(t)?Kp(e,t):e,Rp=e=>e===`color`||e===`font`;function zp(e=`line`){return Pp[e]?e:(console.warn(`Unknown annotation type: '${e}', defaulting to 'line'`),`line`)}function Bp(e,t,n,r){let i=Hp(e,n.animations,r),a=t.annotations,o=Jp(t.elements,a);for(let t=0;t<a.length;t++){let n=a[t],r=Wp(o,t,n.type),s=n.setContext(qp(e,r,o,n)),c=r.resolveElementProperties(e,s);c.skip=Vp(c),`elements`in c&&(Up(r,c.elements,s,i),delete c.elements),Yt(r.x)||Object.assign(r,c),Object.assign(r,c.initProperties),c.options=Gp(s),i.update(r,c)}}function Vp(e){return isNaN(e.x)||isNaN(e.y)}function Hp(e,t,n){return n===`reset`||n===`none`||n===`resize`?Fp:new Zi(e,t)}function Up(e,t,n,r){let i=e.elements||=[];i.length=t.length;for(let e=0;e<t.length;e++){let a=t[e],o=a.properties,s=Wp(i,e,a.type,a.initProperties);o.options=Gp(n[a.optionScope].override(a)),r.update(s,o)}}function Wp(e,t,n,r){let i=Pp[zp(n)],a=e[t];return(!a||!(a instanceof i))&&(a=e[t]=new i,Object.assign(a,r)),a}function Gp(e){let t=Pp[zp(e.type)],n={};n.id=e.id,n.type=e.type,n.drawTime=e.drawTime,Object.assign(n,Kp(e,t.defaults),Kp(e,t.defaultRoutes));for(let t of Ip)n[t]=e[t];return n}function Kp(e,t){let n={};for(let r of Object.keys(t)){let i=t[r],a=e[r];Rp(r)&&I(a)?n[r]=a.map(e=>Lp(e,i)):n[r]=Lp(a,i)}return n}function qp(e,t,n,r){return t.$context||=Object.assign(Object.create(e.getContext()),{element:t,get elements(){return n.filter(e=>e&&e.options)},id:r.id,type:`annotation`})}function Jp(e,t){let n=t.length,r=e.length;if(r<n){let t=n-r;e.splice(r,0,...Array(t))}else r>n&&e.splice(n,r-n);return e}var Yp=`3.1.0`,Xp=new Map,Zp=e=>e.type!==`doughnutLabel`,Qp=Cf.concat(Af),$p={id:`annotation`,version:Yp,beforeRegister(){pd(`chart.js`,`4.0`,Ks.version)},afterRegister(){Ks.register(Pp)},afterUnregister(){Ks.unregister(Pp)},beforeInit(e){Xp.set(e,{annotations:[],elements:[],visibleElements:[],listeners:{},listened:!1,moveListened:!1,hooks:{},hooked:!1,hovered:[]})},beforeUpdate(e,t,n){let r=Xp.get(e),i=r.annotations=[],a=n.annotations;L(a)?Object.keys(a).forEach(e=>{let t=a[e];L(t)&&(t.id=e,i.push(t))}):I(a)&&i.push(...a),Pf(i.filter(Zp),e.scales)},afterDataLimits(e,t){let n=Xp.get(e);Nf(e,t.scale,n.annotations.filter(Zp).filter(e=>e.display&&e.adjustScaleRange))},afterUpdate(e,t,n){let r=Xp.get(e);wf(e,r,n),Bp(e,r,n,t.mode),r.visibleElements=r.elements.filter(e=>!e.skip&&e.options.display),jf(e,r,n)},beforeDatasetsDraw(e,t,n){em(e,`beforeDatasetsDraw`,n.clip)},afterDatasetsDraw(e,t,n){em(e,`afterDatasetsDraw`,n.clip)},beforeDatasetDraw(e,t,n){em(e,t.index,n.clip)},beforeDraw(e,t,n){em(e,`beforeDraw`,n.clip)},afterDraw(e,t,n){em(e,`afterDraw`,n.clip)},beforeEvent(e,t,n){Tf(Xp.get(e),t.event,n)&&(t.changed=!0)},afterDestroy(e){Xp.delete(e)},getAnnotations(e){let t=Xp.get(e);return t?t.elements:[]},_getAnnotationElementsAtEventForMode(e,t,n){return Qu(e,t,n)},defaults:{animations:{numbers:{properties:[`x`,`y`,`x2`,`y2`,`width`,`height`,`centerX`,`centerY`,`pointX`,`pointY`,`radius`],type:`number`},colors:{properties:[`backgroundColor`,`borderColor`],type:`color`}},clip:!0,interaction:{mode:void 0,axis:void 0,intersect:void 0},common:{drawTime:`afterDatasetsDraw`,init:!1,label:{}}},descriptors:{_indexable:!1,_scriptable:e=>!Qp.includes(e)&&e!==`init`,annotations:{_allKeys:!1,_fallback:(e,t)=>`elements.${Pp[zp(t.type)].id}`},interaction:{_fallback:!0},common:{label:{_indexable:Rp,_fallback:!0},_indexable:Rp}},additionalOptionScopes:[``]};function em(e,t,n){let{ctx:r,chartArea:i}=e,a=Xp.get(e);n&&pr(r,i);let o=tm(a.visibleElements,t).sort((e,t)=>e.element.options.z-t.element.options.z);for(let e of o)nm(r,i,a,e);n&&mr(r)}function tm(e,t){let n=[];for(let r of e)if(r.options.drawTime===t&&n.push({element:r,main:!0}),r.elements&&r.elements.length)for(let e of r.elements)e.options.display&&e.options.drawTime===t&&n.push({element:e});return n}function nm(e,t,n,r){let i=r.element;r.main?(Mf(n,i,`beforeDraw`),i.draw(e,t),Mf(n,i,`afterDraw`)):i.draw(e,t)}Xu.register($p);var rm=class extends j{constructor(...e){super(...e),this.records=[],this.showInput=!1,this.showTable=!1,this.inputDate=``,this.inputTotal=``,this.inputDirect=``,this.inputIndirect=``,this.chart=null}static{this.styles=o`
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
  `}getSortedRecords(){return!this.records||this.records.length===0?[]:[...this.records].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())}calculateEstimate(){let e=this.getSortedRecords();if(e.length<2)return null;let t=e.length,n=e.map(e=>new Date(e.date).getTime()),r=e.map(e=>e.total),i=n[0],a=n.map(e=>(e-i)/(1e3*60*60*24)),o=r.reduce((e,t)=>e+t,0)/t,s=0,c=0;for(let e=0;e<t;e++)s+=a[e]*(r[e]-o),c+=a[e]*a[e];if(c===0)return null;let l=s/c,u=e[e.length-1],d=u.total,f=new Date(u.date).getTime(),p=`stable`;if(l<-1?p=`down`:l>1&&(p=`up`),d<=50)return{daysTo50:0,trend:p,currentValue:d};if(p!==`down`||l>=0)return{daysTo50:-1,trend:p,currentValue:d};let m=Math.ceil((50-d)/l);return new Date(f+m*24*60*60*1e3),{daysTo50:m,trend:p,currentValue:d}}initChart(){if(!this.canvas)return;let e=this.getSortedRecords();if(e.length===0)return;let t={labels:e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`}),datasets:[{label:`总胆红素`,data:e.map(e=>e.total),borderColor:`#ff4d4f`,backgroundColor:`rgba(255, 77, 79, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6},{label:`直接胆红素`,data:e.map(e=>e.direct),borderColor:`#52c41a`,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6},{label:`间接胆红素`,data:e.map(e=>e.indirect),borderColor:`#1890ff`,backgroundColor:`rgba(24, 144, 255, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6}]};this.chart&&this.chart.destroy(),this.chart=new Xu(this.canvas,{type:`line`,data:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:`index`,intersect:!1},annotation:{annotations:{zone1:{type:`box`,yMin:0,yMax:50,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:0,label:{display:!0,content:`可治疗`,position:`end`,color:`#52c41a`,font:{size:10}}},zone2:{type:`box`,yMin:50,yMax:100,backgroundColor:`rgba(250, 173, 20, 0.1)`,borderWidth:0,label:{display:!0,content:`需评估`,position:`end`,color:`#faad14`,font:{size:10}}},zone3:{type:`box`,yMin:100,yMax:400,backgroundColor:`rgba(255, 77, 79, 0.1)`,borderWidth:0,label:{display:!0,content:`待治疗`,position:`end`,color:`#ff4d4f`,font:{size:10}}}}}},scales:{y:{beginAtZero:!0,min:0,max:400,title:{display:!0,text:`μmol/L`},grid:{color:`rgba(0, 0, 0, 0.05)`}},x:{grid:{display:!1}}},interaction:{mode:`nearest`,axis:`x`,intersect:!1}}})}updateChart(){if(!this.chart){this.initChart();return}let e=this.getSortedRecords();if(e.length===0){this.chart.destroy(),this.chart=null;return}let t=e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`});this.chart.data.labels=t,this.chart.data.datasets[0].data=e.map(e=>e.total),this.chart.data.datasets[1].data=e.map(e=>e.direct),this.chart.data.datasets[2].data=e.map(e=>e.indirect),this.chart.update()}updated(e){e.has(`records`)&&this.updateChart()}handleAddClick(){this.inputDate=new Date().toISOString().split(`T`)[0],this.inputTotal=``,this.inputDirect=``,this.inputIndirect=``,this.showInput=!0}handleCancel(){this.showInput=!1}handleToggleTable(){this.showTable=!this.showTable}handleSave(){if(!this.inputDate||!this.inputTotal)return;let e=parseFloat(this.inputTotal)||0,t=parseFloat(this.inputDirect)||0,n=parseFloat(this.inputIndirect)||e-t;this.dispatchEvent(new CustomEvent(`add-record`,{bubbles:!0,composed:!0,detail:{id:Date.now().toString(),date:this.inputDate,total:e,direct:t,indirect:n,unit:`μmol/L`}})),this.showInput=!1}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.initChart(),0)}disconnectedCallback(){super.disconnectedCallback(),this.chart&&=(this.chart.destroy(),null)}render(){let e=this.records&&this.records.length>0,t=this.getSortedRecords(),n=this.calculateEstimate();return k`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">📊 胆红素指标趋势</span>
          <div style="display: flex; gap: 8px;">
            ${e?k`
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

        ${e?k`
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
          ${n&&n.daysTo50>=0?k`
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
                ${n.currentValue>50?k`
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
          ${this.showTable?k`
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
                  ${t.map(e=>k`
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
        `:k`
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5; margin-bottom: 12px;">
              <path d="M3 3v18h18"></path>
              <path d="M18 17l-5-5-4 4-4-4"></path>
            </svg>
            <p>暂无胆红素记录</p>
            <p style="font-size: 12px; margin-top: 4px;">点击上方按钮录入第一次数据</p>
          </div>
        `}

        ${this.showInput?k`
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
    `}};P([M({type:Array})],rm.prototype,`records`,void 0),P([N()],rm.prototype,`showInput`,void 0),P([N()],rm.prototype,`showTable`,void 0),P([N()],rm.prototype,`inputDate`,void 0),P([N()],rm.prototype,`inputTotal`,void 0),P([N()],rm.prototype,`inputDirect`,void 0),P([N()],rm.prototype,`inputIndirect`,void 0),P([Re(`#bilirubin-canvas`)],rm.prototype,`canvas`,void 0),rm=P([Pe(`bilirubin-chart`)],rm);var im=class extends j{constructor(...e){super(...e),this.records=[],this.showInput=!1,this.showTable=!1,this.inputDate=``,this.inputVolume=``,this.inputColor=``,this.inputNotes=``,this.chart=null}static{this.styles=o`
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
  `}getSortedRecords(){return!this.records||this.records.length===0?[]:[...this.records].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())}initChart(){if(!this.canvas)return;let e=this.getSortedRecords();if(e.length===0)return;let t={labels:e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`}),datasets:[{label:`引流量`,data:e.map(e=>e.volume),borderColor:`#52c41a`,backgroundColor:`rgba(82, 196, 26, 0.1)`,borderWidth:2,tension:.3,pointRadius:4,pointHoverRadius:6}]};this.chart&&this.chart.destroy(),this.chart=new Xu(this.canvas,{type:`line`,data:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:`index`,intersect:!1,callbacks:{afterLabel:t=>`颜色: ${e[t.dataIndex].color||`未记录`}`}}},scales:{y:{beginAtZero:!0,title:{display:!0,text:`ml`},grid:{color:`rgba(0, 0, 0, 0.05)`}},x:{grid:{display:!1}}},interaction:{mode:`nearest`,axis:`x`,intersect:!1}}})}updateChart(){if(!this.chart){this.initChart();return}let e=this.getSortedRecords();if(e.length===0){this.chart.destroy(),this.chart=null;return}let t=e.map(e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}`});this.chart.data.labels=t,this.chart.data.datasets[0].data=e.map(e=>e.volume),this.chart.update()}updated(e){e.has(`records`)&&this.updateChart()}handleAddClick(){this.inputDate=new Date().toISOString().split(`T`)[0],this.inputVolume=``,this.inputColor=``,this.inputNotes=``,this.showInput=!0}handleCancel(){this.showInput=!1}handleToggleTable(){this.showTable=!this.showTable}handleSave(){if(!this.inputDate||!this.inputVolume)return;let e=parseFloat(this.inputVolume)||0;this.dispatchEvent(new CustomEvent(`add-record`,{bubbles:!0,composed:!0,detail:{id:Date.now().toString(),date:this.inputDate,volume:e,color:this.inputColor||`金黄色`,notes:this.inputNotes}})),this.showInput=!1}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.initChart(),0)}disconnectedCallback(){super.disconnectedCallback(),this.chart&&=(this.chart.destroy(),null)}render(){let e=this.records&&this.records.length>0,t=this.getSortedRecords();return k`
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">💧 PTCD引流量记录</span>
          <div style="display: flex; gap: 8px;">
            ${e?k`
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

        ${e?k`
          <div class="chart-canvas-container">
            <canvas id="drainage-canvas"></canvas>
          </div>
          ${this.showTable?k`
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
                  ${t.map(e=>k`
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
        `:k`
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

        ${this.showInput?k`
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
    `}};P([M({type:Array})],im.prototype,`records`,void 0),P([N()],im.prototype,`showInput`,void 0),P([N()],im.prototype,`showTable`,void 0),P([N()],im.prototype,`inputDate`,void 0),P([N()],im.prototype,`inputVolume`,void 0),P([N()],im.prototype,`inputColor`,void 0),P([N()],im.prototype,`inputNotes`,void 0),P([Re(`#drainage-canvas`)],im.prototype,`canvas`,void 0),im=P([Pe(`drainage-chart`)],im);var am=class extends j{constructor(...e){super(...e),this.archive=null,this.disease=null,this.expandedGroups=new Set,this.showPortalVeinThrombusOption=!1}static{this.styles=o`
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
  `}hasBloodTest(){return this.archive?(this.archive.completedExamIds||[]).includes(`blood-test`):!1}hasPTCD(){return this.archive?(this.archive.completedTreatmentIds||[]).includes(`biliary-drainage`):!1}hasCTMRI(){return this.archive?(this.archive.completedExamIds||[]).includes(`ct-mri`):!1}handlePortalVeinThrombusChange(e){let t=e.target.checked;this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:{hasPortalVeinTumorThrombus:t}}))}calculateBilirubinEstimateTime(){if(!this.archive||!this.archive.bilirubinRecords||this.archive.bilirubinRecords.length===0)return;let e=[...this.archive.bilirubinRecords].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())[0];if(e.total<=50)return`已达标`;let t=e.total-50,n=Math.ceil(t/50);return n<=0?`已达标`:n===1?`约1周`:`约${n}周`}getExamStatus(e){if(!this.archive)return`pending`;let t=this.archive.completedExamIds||[];if(t.includes(e))return`completed`;if(!this.disease)return`pending`;let n=this.disease.examItems.findIndex(t=>t.id===e);if(t.length===0)return n===0?`current`:`pending`;let r=Math.max(...t.map(e=>this.disease.examItems.findIndex(t=>t.id===e)));return n<=r?`completed`:n===r+1?`next`:`pending`}handleAddBilirubinRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainageRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}toggleGroup(e){this.expandedGroups.has(e)?this.expandedGroups.delete(e):this.expandedGroups.add(e),this.expandedGroups=new Set(this.expandedGroups)}getCoreTasksForDisease(e){return{"hilar-cholangiocarcinoma":{standalone:[{name:`总胆红素降至50以内`,desc:k`总胆红素需要降至<span class="bilirubin-target">50μmol/L以下</span>才能考虑化疗。
              若总胆红素在<span class="bilirubin-target">100μmol/L以内</span>，建议联系医生评估是否存在可行方案。`,icon:`💛`,required:!0,estimateTime:this.calculateBilirubinEstimateTime()}],groups:[{id:`pathology`,name:`马上进行病理确认`,icon:`🔬`,estimateTime:`约2-3周`,detailRoute:`#/pathology-detail`,items:[{name:`基本病理检测`,desc:`通过组织样本明确肿瘤性质，是制定治疗方案的基础依据。`,icon:`🔬`,required:!0},{name:`免疫组化染色检测`,desc:`检测肿瘤标志物表达情况，指导靶向和免疫治疗药物选择。`,icon:`🧪`,required:!0},{name:`基因检测`,desc:`检测基因突变情况（FGFR2、IDH1、MSI/TMB、HER2、NTRK等），为靶向治疗提供依据。胆道肿瘤常见靶点：FGFR2融合、IDH1突变等。`,icon:`🧬`,required:!1}]}]}}[e]||{standalone:[],groups:[]}}render(){if(!this.archive||!this.disease)return k``;let e=this.hasBloodTest(),t=this.hasPTCD(),n=this.getCoreTasksForDisease(this.disease.id),r=n.standalone.length>0||n.groups.length>0;return k`
      ${this.disease&&r?k`
        <div class="core-task-section">
          <div class="core-task-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            核心任务（化疗前提条件）
          </div>

          ${n.standalone.map(e=>k`
            <div class="core-task-item">
              <div class="core-task-icon warning">${e.icon}</div>
              <div class="core-task-content">
                <div class="core-task-name">
                  ${e.name}
                  <span class="task-badge ${e.required?`required`:`optional`}">${e.required?`必做`:`可选`}</span>
                  ${e.estimateTime?k`<span class="task-badge" style="background: #faad14; margin-left: 4px;">${e.estimateTime}</span>`:``}
                </div>
                <div class="core-task-desc">${e.desc}</div>
              </div>
            </div>
          `)}

          ${n.groups.map(e=>k`
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
                    ${e.estimateTime?k`<span class="task-group-time">${e.estimateTime}</span>`:``}
                    ${e.detailRoute?k`
                      <span class="task-group-detail" @click="${t=>{t.stopPropagation(),window.location.hash=e.detailRoute}}">
                        查看详情 →
                      </span>
                    `:``}
                  </div>
                </div>
              </div>
              ${this.expandedGroups.has(e.id)?k`
                <div class="task-group-items">
                  ${e.items.map(e=>k`
                    <div class="task-sub-item">
                      <div class="task-sub-icon">${e.icon}</div>
                      <div class="task-sub-content">
                        <div class="task-sub-name">
                          ${e.name}
                          <span class="task-badge ${e.required?`required`:`optional`}">${e.required?`必做`:`可选`}</span>
                        </div>
                        <div class="task-sub-desc">
                          ${e.desc}
                          ${e.name===`基因检测`&&this.archive?.hasPortalVeinTumorThrombus?k`
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

      ${t?k`
        <div class="bilirubin-section">
          <drainage-chart
            .records="${this.archive.drainageRecords||[]}"
            @add-record="${this.handleAddDrainageRecord}"
          ></drainage-chart>
        </div>
      `:``}

      ${e?k`
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
          ${this.disease.examItems.map(e=>{let t=this.getExamStatus(e.id);return k`
              <div class="guide-item ${t}">
                <div class="item-check ${t}">
                  ${t===`completed`?k`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  `:t===`current`?k`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  `:``}
                </div>
                <div class="item-text">
                  <div class="item-name">
                    ${e.name}
                    ${t===`completed`?k`<span class="completed-badge">已完成</span>`:``}
                  </div>
                  <div class="item-desc">${e.desc}</div>
                </div>
              </div>
              ${e.id===`ct-mri`&&t===`completed`?k`
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
    `}};P([M({type:Object})],am.prototype,`archive`,void 0),P([M({type:Object})],am.prototype,`disease`,void 0),P([N()],am.prototype,`expandedGroups`,void 0),P([N()],am.prototype,`showPortalVeinThrombusOption`,void 0),am=P([Pe(`examination-tab`)],am);var om=class extends j{constructor(...e){super(...e),this.archive=null,this.disease=null}static{this.styles=o`
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
  `}hasBloodTest(){return this.archive?(this.archive.completedExamIds||[]).includes(`blood-test`):!1}getTreatmentStatus(e){if(!this.archive)return`pending`;let t=this.archive.completedTreatmentIds||[];if(t.includes(e))return`completed`;if(!this.disease)return`pending`;let n=this.disease.treatmentItems.findIndex(t=>t.id===e);if(t.length===0)return n===0?`current`:`pending`;let r=Math.max(...t.map(e=>this.disease.treatmentItems.findIndex(t=>t.id===e)));return n<=r?`completed`:n===r+1?`next`:`pending`}handleAddBilirubinRecord(e){this.archive&&this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}render(){if(!this.archive||!this.disease)return k``;let e=this.hasBloodTest();return k`
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
          ${this.disease.treatmentItems.map(e=>{let t=this.getTreatmentStatus(e.id);return k`
              <div class="guide-item ${t}">
                <div class="item-check ${t}">
                  ${t===`completed`?k`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  `:t===`current`?k`
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  `:``}
                </div>
                <div class="item-text">
                  <div class="item-name">
                    ${e.name}
                    ${t===`completed`?k`<span class="completed-badge">已完成</span>`:``}
                  </div>
                  <div class="item-desc">${e.desc}</div>
                </div>
              </div>
            `})}
        </div>
      </div>

      ${e?k`
        <div class="bilirubin-section">
          <bilirubin-chart
            .records="${this.archive.bilirubinRecords||[]}"
            @add-record="${this.handleAddBilirubinRecord}"
          ></bilirubin-chart>
        </div>
      `:``}

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
    `}};P([M({type:Object})],om.prototype,`archive`,void 0),P([M({type:Object})],om.prototype,`disease`,void 0),om=P([Pe(`treatment-tab`)],om);var sm=class extends j{constructor(...e){super(...e),this.archive=null,this.disease=null,this.activeTab=`examination`,this.expandedGroups=new Set}static{this.styles=o`
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
  `}handleTabClick(e){this.activeTab=e}toggleGroup(e){this.expandedGroups.has(e)?this.expandedGroups.delete(e):this.expandedGroups.add(e),this.expandedGroups=new Set(this.expandedGroups)}getCrossStageTasks(){return[{id:`nutrition`,name:`保证营养状态`,icon:`🍎`,detailRoute:`#/nutrition-detail`,items:[{name:`白蛋白（ALB）`,desc:`白蛋白是反映营养状态的关键指标，正常值35-50 g/L，低于35g/L需加强营养支持。直接影响身体恢复能力和化疗耐受性。`,icon:`🥚`,required:!0},{name:`微量元素`,desc:`锌、硒、镁等微量元素参与多种生理过程。缺锌导致免疫力下降、伤口愈合慢；缺硒影响化疗效果和身体恢复。`,icon:`⚡`,required:!0}]},{id:`complications`,name:`小心并发症`,icon:`⚠️`,items:[{name:`门静脉癌栓`,desc:`门静脉癌栓是胆管癌常见并发症，会导致门静脉压力升高、脾功能亢进、消化道出血风险增加。`,icon:`🔴`,required:!0},{name:`梗阻性黄疸`,desc:`肿瘤阻塞胆管导致胆红素升高，需密切监测胆红素变化，必要时进行胆道引流。`,icon:`💛`,required:!0},{name:`胆道感染`,desc:`胆道梗阻易导致胆管炎，表现为发热、腹痛、黄疸加重。出现发热需及时就医。`,icon:`🤒`,required:!0}]}]}handleEdit(){this.dispatchEvent(new CustomEvent(`edit-stage`,{bubbles:!0,composed:!0}))}handleAddBilirubin(e){this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainage(e){this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdatePortalVeinThrombus(e){this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:e.detail}))}render(){if(!this.archive||!this.disease)return k`<div class="empty-state">加载中...</div>`;let e=this.archive.currentStage!==`treatment`;return k`
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
            ${this.getCrossStageTasks().map(e=>k`
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
                      ${e.detailRoute?k`
                        <span class="task-group-detail" @click="${t=>{t.stopPropagation(),window.location.hash=e.detailRoute}}">
                          查看详情 →
                        </span>
                      `:``}
                    </div>
                  </div>
                </div>
                ${this.expandedGroups.has(e.id)?k`
                  <div class="task-group-items">
                    ${e.items.map(e=>k`
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
            ${this.activeTab===`examination`?k`
              <examination-tab
                .archive="${this.archive}"
                .disease="${this.disease}"
                @add-bilirubin="${this.handleAddBilirubin}"
                @add-drainage="${this.handleAddDrainage}"
                @update-portal-vein-thrombus="${this.handleUpdatePortalVeinThrombus}"
              ></examination-tab>
            `:k`
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
    `}};P([M({type:Object})],sm.prototype,`archive`,void 0),P([M({type:Object})],sm.prototype,`disease`,void 0),P([N()],sm.prototype,`activeTab`,void 0),P([N()],sm.prototype,`expandedGroups`,void 0),sm=P([Pe(`stage-guide`)],sm);var cm=class extends j{constructor(...e){super(...e),this.archive=null}static{this.styles=o`
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
  `}getDiseaseIcon(e){return{"hilar-cholangiocarcinoma":`🫀`}[e]||`📋`}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}handleClick(){this.archive&&(window.location.hash=`#/archive/${this.archive.id}`)}render(){if(!this.archive)return k``;let e=this.archive.currentStage===`examination`;return k`
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
    `}};P([M({type:Object})],cm.prototype,`archive`,void 0),cm=P([Pe(`archive-card`)],cm);var lm=class extends j{constructor(...e){super(...e),this.archives=[],this.showSelector=!1}static{this.styles=o`
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
  `}handleCreateArchive(){this.showSelector=!0}handleDiseaseSelect(e){let t=e.detail;this.showSelector=!1,t&&this.dispatchEvent(new CustomEvent(`create-archive`,{bubbles:!0,composed:!0,detail:t}))}handleSelectorClose(){this.showSelector=!1}render(){return k`
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
      </div>

      <div class="archives-section">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1890ff" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          我的档案
        </div>

        ${this.archives.length===0?k`
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
            <p>还没有档案，点击上方按钮创建第一份档案</p>
          </div>
        `:k`
          <div class="archives-grid">
            ${this.archives.map(e=>k`
              <archive-card .archive="${e}"></archive-card>
            `)}
          </div>
        `}
      </div>

      ${this.showSelector?k`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleSelectorClose}"
        ></disease-selector>
      `:``}
    `}};P([M({type:Array})],lm.prototype,`archives`,void 0),P([N()],lm.prototype,`showSelector`,void 0),lm=P([Pe(`archive-list-page`)],lm);var um=class extends j{constructor(...e){super(...e),this.archive=null,this.disease=null,this.localSuspectDocsSaved=!1,this.showBilirubinInput=!1,this.inputBilirubinDate=``,this.inputBilirubinTotal=``}static{this.styles=o`
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
  `}hasCompletedItems(){if(!this.archive)return!1;let e=this.archive.completedExamIds||[],t=this.archive.completedTreatmentIds||[];return e.length>0||t.length>0}getDiseaseIcon(e){return{"hilar-cholangiocarcinoma":`🫀`}[e]||`📋`}formatDate(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}getBilirubinAdvice(e){return e<50?{level:`✅ 达标`,class:`safe`,advice:`胆红素已降至化疗安全范围，可以考虑进行化疗。请继续监测。`}:e<=85?{level:`🟡 接近达标`,class:`warning`,advice:`胆红素已接近安全范围（<50 μmol/L），但仍需继续降至50以下才能进行化疗。`}:e<=170?{level:`🟠 明显升高`,class:`danger`,advice:`胆红素明显升高，需要密切关注。建议咨询医生考虑进行胆道引流治疗（PTCD/ERCP支架），几乎所有治疗都要求待胆红素降至50 μmol/L以下，请重点关注。`}:e<=200?{level:`🔴 重度黄疸`,class:`critical`,advice:`胆红素重度升高（>170 μmol/L）。根据诊疗指南，建议进行术前胆道引流（PTCD或ERCP支架）降低胆红素水平。胆红素需降至50 μmol/L以下才能考虑化疗或手术。`}:{level:`🚨 极高危`,class:`critical`,advice:`胆红素极高（>200 μmol/L）！此时不宜直接进行手术或化疗，风险极高。必须先进行PTCD外引流或支架置入内引流，待胆红素显著下降后再评估治疗方案。请立即就医！`}}handleBack(){this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}handleDelete(){this.dispatchEvent(new CustomEvent(`delete-archive`,{bubbles:!0,composed:!0}))}handleEditStage(){this.dispatchEvent(new CustomEvent(`edit-stage`,{bubbles:!0,composed:!0}))}handleAddBilirubin(e){this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:e.detail}))}handleAddDrainage(e){this.dispatchEvent(new CustomEvent(`add-drainage`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdatePortalVeinThrombus(e){this.dispatchEvent(new CustomEvent(`update-portal-vein-thrombus`,{bubbles:!0,composed:!0,detail:e.detail}))}handleUpdateSuspectDocsSaved(e){this.dispatchEvent(new CustomEvent(`update-suspect-docs-saved`,{bubbles:!0,composed:!0,detail:e.detail}))}handleDocsSavedChange(e){let t=e.target.checked;this.localSuspectDocsSaved=t,this.handleUpdateSuspectDocsSaved(new CustomEvent(`update-suspect-docs-saved`,{bubbles:!0,composed:!0,detail:{suspectDocsSaved:t}}))}handleConfirmSuspectStage(){this.dispatchEvent(new CustomEvent(`confirm-suspect-stage`,{bubbles:!0,composed:!0}))}handleShowBilirubinInput(){this.showBilirubinInput=!this.showBilirubinInput,this.showBilirubinInput&&(this.inputBilirubinDate=new Date().toISOString().split(`T`)[0],this.inputBilirubinTotal=``)}handleBilirubinDateChange(e){this.inputBilirubinDate=e.target.value}handleBilirubinTotalChange(e){this.inputBilirubinTotal=e.target.value}handleSaveBilirubin(){if(!this.inputBilirubinDate||!this.inputBilirubinTotal)return;let e=parseFloat(this.inputBilirubinTotal)||0;if(e<=0)return;let t={id:Date.now().toString(),date:this.inputBilirubinDate,total:e,direct:0,indirect:0,unit:`μmol/L`};this.dispatchEvent(new CustomEvent(`add-bilirubin`,{bubbles:!0,composed:!0,detail:t})),this.showBilirubinInput=!1}render(){if(!this.archive||!this.disease)return k`<div>加载中...</div>`;let e=this.hasCompletedItems(),t=this.archive.currentStage===`suspect`,n=this.disease.suspectStageInfo,r=this.localSuspectDocsSaved||this.archive.suspectDocsSaved;return k`
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
      </div>

      ${t&&n?k`
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
            ${n.tips.map(e=>k`
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

            ${this.showBilirubinInput?k`
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
            `:k`
              <button
                class="suspect-next-btn"
                style="background: #1890ff; margin-top: 0;"
                @click="${this.handleShowBilirubinInput}"
              >
                ${this.archive?.bilirubinRecords&&this.archive.bilirubinRecords.length>0?`📊 录入新胆红素数据`:`💉 录入胆红素指标`}
              </button>
            `}

            ${this.archive?.bilirubinRecords&&this.archive.bilirubinRecords.length>0?k`
              ${(()=>{let e=[...this.archive.bilirubinRecords].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())[0],t=this.getBilirubinAdvice(e.total);return k`
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
      `:e?k`
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
      `:k`
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
    `}};P([M({type:Object})],um.prototype,`archive`,void 0),P([M({type:Object})],um.prototype,`disease`,void 0),P([N()],um.prototype,`localSuspectDocsSaved`,void 0),P([N()],um.prototype,`showBilirubinInput`,void 0),P([N()],um.prototype,`inputBilirubinDate`,void 0),P([N()],um.prototype,`inputBilirubinTotal`,void 0),um=P([Pe(`archive-detail-page`)],um);var dm=class extends j{static{this.styles=o`
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
  `}handleBack(){window.history.back()}render(){return k`
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
    `}};dm=P([Pe(`nutrition-detail-page`)],dm);var fm=class extends j{static{this.styles=o`
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
    .timeline-container {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
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
      padding-bottom: 24px;
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
    .timeline-dot.completed {
      background: #52c41a;
      color: white;
    }
    .timeline-dot.current {
      background: #667eea;
      color: white;
      animation: pulse 2s infinite;
    }
    .timeline-dot.pending {
      background: #d9d9d9;
      color: white;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
      50% { box-shadow: 0 0 0 8px rgba(102, 126, 234, 0); }
    }
    .timeline-item.urgent {
      position: relative;
    }
    .timeline-item.urgent::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%);
      border-radius: 16px;
      z-index: 0;
      animation: urgentPulse 2s infinite;
    }
    @keyframes urgentPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    .timeline-item.urgent .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #ff4d4f;
    }
    .timeline-item.urgent .timeline-item-name {
      color: #ff4d4f;
    }
    .timeline-item.required {
      position: relative;
    }
    .timeline-item.required::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #fff2e6 0%, #ffd591 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.required .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #fa8c16;
    }
    .timeline-item.required .timeline-item-name {
      color: #d46b08;
    }
    .required-banner {
      background: #fa8c16;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .required-banner svg {
      flex-shrink: 0;
    }
    .timeline-item.gene-test {
      position: relative;
    }
    .timeline-item.gene-test::before {
      content: '';
      position: absolute;
      left: -8px;
      right: -8px;
      top: -4px;
      bottom: -4px;
      background: linear-gradient(135deg, #f6ffed 0%, #b7eb8f 100%);
      border-radius: 16px;
      z-index: 0;
    }
    .timeline-item.gene-test .timeline-content {
      position: relative;
      z-index: 1;
      background: white;
      border: 2px solid #52c41a;
    }
    .timeline-item.gene-test .timeline-item-name {
      color: #52c41a;
    }
    .gene-banner {
      background: #52c41a;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .gene-banner svg {
      flex-shrink: 0;
    }
    .urgent-banner {
      background: #ff4d4f;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .urgent-banner svg {
      flex-shrink: 0;
    }
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
      width: 24px;
      height: 24px;
      background: #ffd591;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .bifurcation-paths {
      display: flex;
      gap: 12px;
    }
    .bifurcation-path {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      background: white;
    }
    .path-result {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .path-result.excluded {
      color: #52c41a;
    }
    .path-result.cancer {
      color: #ff4d4f;
    }
    .path-action {
      font-size: 12px;
      color: #666;
      line-height: 1.4;
    }
    .path-action strong {
      color: #ff4d4f;
    }
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
    .gene-test-warning-icon {
      font-size: 20px;
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
    .warning-icon {
      font-size: 18px;
      flex-shrink: 0;
    }
    .warning-text {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .warning-text strong {
      color: #d46b08;
    }
  `}handleBack(){window.history.back()}render(){return k`
      <div class="page-container">
        <div class="page-header">
          <button class="back-btn" @click="${this.handleBack}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="page-title">病理确认流程</span>
        </div>

        <div class="timeline-container">
          <div class="timeline-header">
            <div class="timeline-icon">🔬</div>
            <div class="timeline-title-group">
              <div class="timeline-title">病理确认</div>
              <div class="timeline-subtitle">明确肿瘤性质，制定治疗方案的基础依据</div>
            </div>
            <div class="total-time">约2-3周</div>
          </div>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot completed">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">门诊评估</div>
                <div class="timeline-item-desc">医生评估病情，开具检查单，安排入院或穿刺时间</div>
                <div class="timeline-item-time">约1-3天</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot completed">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">入院检查</div>
                <div class="timeline-item-desc">完成必要的血液检查、影像检查等，评估身体状况是否适合穿刺</div>
                <div class="timeline-item-time">约3-7天</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot current">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">穿刺活检</div>
                <div class="timeline-item-desc">在影像引导下进行穿刺，获取组织样本进行病理分析</div>
                <div class="timeline-item-time">约1-2天（住院）</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">病理分析</div>
                <div class="timeline-item-desc">组织样本送检，显微镜下分析细胞形态，明确肿瘤性质</div>
                <div class="timeline-item-time">约5-10天</div>
              </div>
            </div>

            <div class="timeline-item urgent">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">出具报告 ⚡</div>
                <div class="timeline-item-desc">病理报告出炉，明确诊断结果</div>
                <div class="timeline-item-time">1-2天</div>
                <div class="urgent-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  报告出炉后立刻约门诊，同时送检基因检测！
                </div>
              </div>
            </div>

            <div class="timeline-item required">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">免疫组化染色检测 🔬</div>
                <div class="timeline-item-desc">检测肿瘤标志物表达情况，指导靶向和免疫治疗药物选择</div>
                <div class="timeline-item-time">约5-7天</div>
                <div class="required-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  必做！标准诊疗指南一线治疗是化疗+免疫，必须尽快完成
                </div>
              </div>
            </div>

            <div class="timeline-item gene-test">
              <div class="timeline-dot pending">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-name">基因检测 🧬</div>
                <div class="timeline-item-desc">检测基因突变情况（FGFR2、IDH1、MSI/TMB、HER2、NTRK等），为靶向治疗提供依据</div>
                <div class="timeline-item-time">约10-14天</div>
                <div class="gene-banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
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
                <div class="path-action">明确为腺癌或鳞癌等。<br><br>
                  <strong>请立即同时进行：</strong><br>
                  1. 联系医生进行<strong>免疫组化染色检测</strong>（必做）<br>
                  2. 送检<strong>基因检测</strong>（可与免疫组化并行）</div>
              </div>
            </div>
          </div>

          <div class="note-section">
            <div class="note-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52c41a" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              重要提示
            </div>
            <div class="note-content">
              基本病理报告出具后，根据结果分为两条路径：<br><br>
              1. 若排除癌症：恭喜，可结束当前诊疗流程<br><br>
              2. 若确诊癌症：<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <strong>免疫组化染色检测（必做）</strong>：用于指导化疗+免疫治疗方案选择<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• <strong>基因检测（建议做）</strong>：用于靶向治疗药物选择<br><br>
              <strong>注意：免疫组化和基因检测可以同时送检，请务必在拿到病理报告后第一时间联系您的主治医生。</strong>
            </div>
          </div>

          <div class="gene-test-warning">
            <div class="gene-test-warning-title">
              <div class="gene-test-warning-icon">🧬</div>
              基因检测抽血注意事项
            </div>
            <div class="gene-test-warning-content">
              <div class="warning-item">
                <div class="warning-icon">💉</div>
                <div class="warning-text">
                  <strong>基因检测需要血液抽检</strong><br>
                  为保证检测结果准确性，<strong>抽血前14天内应避免输血</strong>。
                </div>
              </div>
              <div class="warning-item">
                <div class="warning-icon">⚠️</div>
                <div class="warning-text">
                  <strong>门静脉癌栓风险提示</strong><br>
                  若并发门静脉癌栓，出现消化道出血的风险较高。<br>
                  一旦发生输血，基因检测将<strong>推迟至少15天</strong>。
                </div>
              </div>
              <div class="warning-item">
                <div class="warning-icon">📋</div>
                <div class="warning-text">
                  <strong>建议措施</strong><br>
                  请提前与医生沟通，在窗口期内优先安排基因检测抽血。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};fm=P([Pe(`pathology-detail-page`)],fm);var pm=class extends j{constructor(...e){super(...e),this.archives=[],this.currentPage=`archive-list`,this.currentArchive=null,this.currentDetailPage=null,this.showDiseaseSelector=!1,this.showStageSelector=!1,this.diseases=[{id:`hilar-cholangiocarcinoma`,name:`肝门胆管癌`,desc:`发生在肝门部的胆管癌`,icon:`🫀`,diagnosisKeyItem:`pathology-biopsy`,examItems:[{id:`blood-test`,name:`血液检查`,desc:`肝功能、肿瘤标志物CA19-9等`,category:`blood`},{id:`abdominal-ultrasound`,name:`腹部超声`,desc:`初步评估肝胆结构`,category:`imaging`},{id:`ct-mri`,name:`CT/MRI检查`,desc:`详细评估肿瘤位置和范围`,category:`imaging`},{id:`mrcp`,name:`MRCP`,desc:`磁共振胰胆管成像，显示胆道梗阻情况`,category:`imaging`},{id:`ercp`,name:`ERCP`,desc:`逆行胰胆管造影，可同时进行胆道引流`,category:`imaging`},{id:`pathology-biopsy`,name:`病理活检`,desc:`获取组织样本进行病理确诊`,category:`pathology`}],treatmentItems:[{id:`picc`,name:`PICC置管`,desc:`经外周静脉穿刺中心静脉置管，保护静脉方便化疗输注`,category:`preparation`},{id:`surgery`,name:`手术治疗`,desc:`肝门胆管癌根治术`,category:`surgery`},{id:`chemotherapy`,name:`化疗`,desc:`辅助化疗或姑息化疗`,category:`chemo`},{id:`radiation`,name:`放疗`,desc:`辅助放疗或姑息放疗`,category:`radiation`},{id:`targeted-immune`,name:`靶向/免疫治疗`,desc:`根据基因检测结果选择靶向药物或免疫治疗`,category:`targeted`},{id:`biliary-drainage`,name:`胆道引流`,desc:`PTCD或支架置入缓解黄疸`,category:`drainage`}]}]}connectedCallback(){super.connectedCallback(),this.archives=this.loadArchives(),this.setupNavigation()}loadArchives(){let e=localStorage.getItem(`canotion-archives`);return e?JSON.parse(e):[]}saveArchives(){localStorage.setItem(`canotion-archives`,JSON.stringify(this.archives))}setupNavigation(){window.addEventListener(`popstate`,()=>{this.handleRoute(window.location.hash)}),this.handleRoute(window.location.hash||`#/`)}handleRoute(e){if(e===``||e===`#/`||e===`#`)this.showArchiveList();else if(e.startsWith(`#/archive/`)){let t=e.replace(`#/archive/`,``);this.viewArchive(t)}else e===`#/nutrition-detail`?this.showNutritionDetail():e===`#/pathology-detail`?this.showPathologyDetail():this.showArchiveList()}showNutritionDetail(){this.currentPage=`detail`,this.currentDetailPage=`nutrition`,this.currentArchive=null}showPathologyDetail(){this.currentPage=`detail`,this.currentDetailPage=`pathology`,this.currentArchive=null}navigateTo(e){window.location.hash=e}showArchiveList(){this.currentPage=`archive-list`,this.currentArchive=null}viewArchive(e){let t=this.archives.find(t=>t.id===e);t?(this.currentArchive=t,this.currentPage=`archive-detail`):this.showArchiveList()}createArchive(e){let t={id:Date.now().toString(),diseaseType:e.id,diseaseName:e.name,createdAt:new Date().toISOString(),completedExamIds:[],completedTreatmentIds:[],currentStage:`examination`,bilirubinRecords:[]};this.archives=[t,...this.archives],this.saveArchives(),this.navigateTo(`#/archive/${t.id}`)}updateArchiveStage(e){if(!this.currentArchive)return;let t=this.archives.find(e=>e.id===this.currentArchive.id);t&&(t.completedExamIds=e.completedExamIds,t.completedTreatmentIds=e.completedTreatmentIds,t.currentStage=e.currentStage,this.saveArchives(),this.currentArchive={...t},this.archives=[...this.archives])}addBilirubinRecord(e){if(!this.currentArchive)return;let t=this.archives.find(e=>e.id===this.currentArchive.id);if(t){if(t.bilirubinRecords||=[],t.bilirubinRecords.some(t=>t.id===e.id))return;t.bilirubinRecords=[e,...t.bilirubinRecords],this.saveArchives(),this.currentArchive={...t},this.archives=[...this.archives]}}deleteArchive(e){this.archives=this.archives.filter(t=>t.id!==e),this.saveArchives(),this.showArchiveList()}handleCreateArchive(){this.showDiseaseSelector=!0}handleDiseaseSelect(e){let t=e.detail;this.showDiseaseSelector=!1,t&&this.createArchive(t)}handleDiseaseSelectorClose(){this.showDiseaseSelector=!1}handleDeleteArchive(){this.currentArchive&&confirm(`确定要删除这个档案吗？此操作无法撤销。`)&&this.deleteArchive(this.currentArchive.id)}handleBack(){this.navigateTo(`#/`)}handleEditStage(){this.showStageSelector=!0}handleStageSelect(e){this.showStageSelector=!1,e.detail&&this.updateArchiveStage(e.detail)}handleStageSelectorClose(){this.showStageSelector=!1}handleAddBilirubin(e){this.addBilirubinRecord(e.detail)}getDiseaseForArchive(){return this.currentArchive&&this.diseases.find(e=>e.id===this.currentArchive.diseaseType)||null}render(){let e=this.getDiseaseForArchive();return k`
      ${this.currentPage===`archive-list`?k`
        <archive-list-page
          .archives="${this.archives}"
          @create-archive="${this.handleCreateArchive}"
        ></archive-list-page>
      `:``}
      ${this.currentPage===`archive-detail`&&this.currentArchive&&e?k`
        <archive-detail-page
          .archive="${this.currentArchive}"
          .disease="${e}"
          @delete-archive="${this.handleDeleteArchive}"
          @back="${this.handleBack}"
          @edit-stage="${this.handleEditStage}"
          @add-bilirubin="${this.handleAddBilirubin}"
        ></archive-detail-page>
      `:``}
      ${this.currentPage===`detail`&&this.currentDetailPage===`nutrition`?k`
        <nutrition-detail-page></nutrition-detail-page>
      `:``}
      ${this.currentPage===`detail`&&this.currentDetailPage===`pathology`?k`
        <pathology-detail-page></pathology-detail-page>
      `:``}

      ${this.showDiseaseSelector?k`
        <disease-selector
          @disease-select="${this.handleDiseaseSelect}"
          @close="${this.handleDiseaseSelectorClose}"
        ></disease-selector>
      `:``}

      ${this.showStageSelector&&e&&this.currentArchive?k`
        <stage-selector
          .disease="${e}"
          .completedExamIds="${this.currentArchive.completedExamIds||[]}"
          .completedTreatmentIds="${this.currentArchive.completedTreatmentIds||[]}"
          @stage-select="${this.handleStageSelect}"
          @close="${this.handleStageSelectorClose}"
        ></stage-selector>
      `:``}
    `}};P([N()],pm.prototype,`archives`,void 0),P([N()],pm.prototype,`currentPage`,void 0),P([N()],pm.prototype,`currentArchive`,void 0),P([N()],pm.prototype,`currentDetailPage`,void 0),P([N()],pm.prototype,`showDiseaseSelector`,void 0),P([N()],pm.prototype,`showStageSelector`,void 0),pm=P([Pe(`app-root`)],pm);