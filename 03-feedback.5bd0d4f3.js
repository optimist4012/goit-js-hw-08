!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var i,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),d?g(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=b();if(j(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&i?g(e):(i=o=void 0,u)}function w(){var e=b(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=x(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(x(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:O(b())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var S="feedback-form-state",j={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('.feedback-form input[name="email"]'),textarea:document.querySelector(".feedback-form textarea")};!function(){var e=localStorage.getItem(S);if(e){var t=JSON.parse(e),n=t.email,i=t.message;j.emailInput.value=n,j.textarea.value=i}}(),j.form.addEventListener("submit",(function(e){if(e.preventDefault(),h.email=j.emailInput.value,h.message=j.textarea.value,""===h.email||""===h.message)return void alert("Please fill in all the fields!");console.log("Submitted:",h),j.form.reset(),localStorage.removeItem(S)})),j.textarea.addEventListener("input",e(t)(O,500)),j.emailInput.addEventListener("input",e(t)(O,500));var h={email:"",message:""};function O(e){var t={email:j.emailInput.value,message:j.textarea.value};localStorage.setItem(S,JSON.stringify(t))}}();
//# sourceMappingURL=03-feedback.5bd0d4f3.js.map
