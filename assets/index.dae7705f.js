(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function f(){}function P(e){return e()}function j(){return Object.create(null)}function g(e){e.forEach(P)}function B(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function H(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function J(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let E;function d(e){E=e}const a=[],S=[],p=[],k=[],U=Promise.resolve();let b=!1;function V(){b||(b=!0,U.then(T))}function w(e){p.push(e)}const $=new Set;let h=0;function T(){const e=E;do{for(;h<a.length;){const t=a[h];h++,d(t),W(t.$$)}for(d(null),a.length=0,h=0;S.length;)S.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];$.has(n)||($.add(n),n())}p.length=0}while(a.length);for(;k.length;)k.pop()();b=!1,$.clear(),d(e)}function W(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}const _=new Set;let X;function q(e,t){e&&e.i&&(_.delete(e),e.i(t))}function Y(e,t,n,o){if(e&&e.o){if(_.has(e))return;_.add(e),X.c.push(()=>{_.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Z(e){e&&e.c()}function F(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||w(()=>{const u=e.$$.on_mount.map(P).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...u):g(u),e.$$.on_mount=[]}),i.forEach(w)}function K(e,t){const n=e.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(a.push(e),V(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,o,r,i,u,l=[-1]){const m=E;d(e);const s=e.$$={fragment:null,ctx:[],props:i,update:f,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:j(),dirty:l,skip_bound:!1,root:t.target||m.$$.root};u&&u(s.root);let L=!1;if(s.ctx=n?n(e,t.props||{},(c,O,...A)=>{const N=A.length?A[0]:O;return s.ctx&&r(s.ctx[c],s.ctx[c]=N)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](N),L&&ee(e,c)),O}):[],s.update(),L=!0,g(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const c=Q(t.target);s.fragment&&s.fragment.l(c),c.forEach(v)}else s.fragment&&s.fragment.c();t.intro&&q(e.$$.fragment),F(e,t.target,t.anchor,t.customElement),T()}d(m)}class D{$destroy(){K(this,1),this.$destroy=f}$on(t,n){if(!B(n))return f;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){let t,n,o,r,i;return{c(){t=x("button"),n=C("count is "),o=C(e[0])},m(u,l){M(u,t,l),y(t,n),y(t,o),r||(i=H(t,"click",e[1]),r=!0)},p(u,[l]){l&1&&R(o,u[0])},i:f,o:f,d(u){u&&v(t),r=!1,i()}}}function ne(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class re extends D{constructor(t){super(),z(this,t,ne,te,I,{})}}function oe(e){let t,n,o,r;return o=new re({}),{c(){t=x("main"),n=x("div"),Z(o.$$.fragment),J(n,"class","card")},m(i,u){M(i,t,u),y(t,n),F(o,n,null),r=!0},p:f,i(i){r||(q(o.$$.fragment,i),r=!0)},o(i){Y(o.$$.fragment,i),r=!1},d(i){i&&v(t),K(o)}}}class ie extends D{constructor(t){super(),z(this,t,null,oe,I,{})}}new ie({target:document.getElementById("app")});