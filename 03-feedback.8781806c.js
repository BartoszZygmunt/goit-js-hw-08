function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function w(e){return c=e,u=setTimeout(T,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function T(){var e=v();if(j(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(T,t),b(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=p(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:h(v())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",e(t)((e=>{if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName){const e=new FormData(b),t=Object.fromEntries(e.entries());localStorage.setItem("feedback-form-state",JSON.stringify(t))}}),500));const w=localStorage.getItem("feedback-form-state"),j=b.querySelector('input[name="email"]'),T=b.querySelector('textarea[name="message"]');if(null!==w)try{const e=JSON.parse(w);j.value=e.email,T.value=e.message}catch{console.log("Błąd wczytywanie danych z magazynu!"),j.value="",T.value=""}else j.value="",T.value="";b.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(b),n=Object.fromEntries(t.entries());console.log(n),localStorage.removeItem("feedback-form-state"),j.value="",T.value=""}));
//# sourceMappingURL=03-feedback.8781806c.js.map
