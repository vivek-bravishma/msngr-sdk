webpackJsonp([110],{985:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"-ви";case 2:return t+"-ри";case 7:case 8:return t+"-ми"}return t+"-ти"}Object.defineProperty(t,"__esModule",{value:!0});var o=n(223),a=r(o),l=n(222),f=r(l),s={narrow:["не","по","вт","ср","че","пе","са"],short:["нед","пон","вто","сре","чет","пет","саб"],long:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},d={short:["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек"],long:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},c={long:["претпладне","попладне"]},i={ordinalNumber:u,weekday:(0,a.default)(s,"long"),weekdays:(0,f.default)(s,"long"),month:(0,a.default)(d,"long"),months:(0,f.default)(d,"long"),timeOfDay:(0,a.default)(c,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,f.default)(c,"long")};t.default=i,e.exports=t.default}});
//# sourceMappingURL=275fdf7fd795abf8329d.js.map