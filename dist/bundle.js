/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-sparse-arrays
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.eCommerceBasics=e():t.eCommerceBasics=e()}(this,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{addToCart:()=>c,calculateTotal:()=>o,calculateTotalItemCount:()=>l,clearCart:()=>f,default:()=>d,fetchProducts:()=>s,formatCurrency:()=>u,removeFromCart:()=>a,removeProductFromCart:()=>i});var r=function(t,e,r,n){return new(r||(r=Promise))((function(o,u){function c(t){try{i(n.next(t))}catch(t){u(t)}}function a(t){try{i(n.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,a)}i((n=n.apply(t,e||[])).next())}))},n=function(t,e){var r,n,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(c=0)),c;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function o(t){return t.reduce((function(t,e){return t+e.price*e.quantity}),0)}function u(t){return"$".concat(t.toFixed(2))}function c(t,e){var r=t.find((function(t){return t.id===e.id}));r?r.quantity+=e.quantity:t.push(e)}function a(t,e){var r=t.find((function(t){return t.id===e.id}));r&&(r.quantity-=1,r.quantity<=0&&t.splice(t.indexOf(r),1))}function i(t,e){t.splice(t.indexOf(e),1)}function l(t){return t.reduce((function(t,e){return t+e.quantity}),0)}function f(t){return[]}function s(t){return r(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch(t)];case 1:if(!(e=n.sent()).ok)throw new Error("Failed to fetch product data");return[4,e.json()];case 2:return[2,n.sent()];case 3:return r=n.sent(),console.error("Error fetching product data:",r),[2,null];case 4:return[2]}}))}))}const d={calculateTotal:o,formatCurrency:u,addToCart:c,removeFromCart:a,removeProductFromCart:i,calculateTotalItemCount:l,clearCart:f,fetchProducts:s};return e})()));