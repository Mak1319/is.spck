var __awaiter=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,o){function s(e){try{i(n.next(e))}catch(e){o(e)}}function c(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}i((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var a,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};bot.commands=[{command:"var <variable name>:any",help:"var variableName = "},{command:"const <variable name>:any",help:"const variableName = "},{command:"let <variable name>:any",help:"let variableName = "},{command:"set case snake",help:"Change default to snake_case."},{command:"set case camel",help:"Change default to camelCase."},{command:"set case upper",help:"Change default to UPPER_CASE."},{command:"set case flat",help:"Change default to flatcase."},{command:"goto def",help:"Go to the declaration (if found)."},{command:"show info",help:"Show variable info (if found)."},{command:"show signature",help:"Show function signature (if found)."}],bot.oncomplete=function(e,t){switch(t.currentLanguage){case"javascript":case"typescript":case"tsx":return bot.commands;default:return null}},bot.take=function(e,t){switch(t){case"javascript":case"typescript":case"tsx":return e=e.trim(),/^(var |const |let |f )(\s+\w+,?)*/.test(e)||/^(f|goto def|show info|show signature)$/.test(e)||/^set case\s(flat|upper|camel|snake|pascal)$/.test(e);default:return!1}},bot.onmessage=function(){return function(t,a){return __awaiter(this,void 0,void 0,(function(){var n,r,o,s,c,i;return __generator(this,(function(u){switch(u.label){case 0:switch(t=t.trim(),n=a.editor,t){case"format":return[3,1];case"show info":return[3,2];case"show signature":return[3,3];case"goto def":return[3,4]}return[3,5];case 1:return n.execCommand("format"),[3,10];case 2:return n.execCommand("getInfo"),[3,10];case 3:return n.execCommand("getSignature"),[3,10];case 4:return n.execCommand("goToDefinition"),[3,10];case 5:return t.match(/(var|const|let)\s+(\w+)+/)?(o=(r=n).insertAtAllSelectionRanges,s=e,c=[(l=t,l.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/g))],[4,a.storage.getItem("casing")]):[3,7];case 6:return o.apply(r,[s.apply(void 0,c.concat([u.sent()]))]),[2];case 7:return(i=t.match(/^set case\s(flat|upper|camel|snake|pascal)/))&&i[1]?[4,a.storage.setItem("casing",i[1])]:[3,9];case 8:return u.sent(),bot.reply('Changed default casing to "'+i[1]+'".'),[2];case 9:bot.reply("["+a.name+'] Unknown command: "'+t+'"',2500),u.label=10;case 10:return[2]}var l}))}))};function e(e,a){var n=e.shift();switch(a){case"flat":return n+" "+function(e){var t="";if(e.length){t+=e[0].toLowerCase();for(var a=1;a<e.length;a++)t+=e[a].toLowerCase()}return t}(e)+" = ";case"snake":return n+" "+function(e){var t="";if(e.length){t+=e[0].toLowerCase();for(var a=1;a<e.length;a++)t+="_"+e[a].toLowerCase()}return t}(e)+" = ";case"upper":return n+" "+function(e){var t="";if(e.length){t+=e[0].toUpperCase();for(var a=1;a<e.length;a++)t+="_"+e[a].toUpperCase()}return t}(e)+" = ";case"pascal":return n+" "+function(e){var a="";if(e.length){a+=t(e[0]);for(var n=1;n<e.length;n++)a+=t(e[n])}return a}(e)+" = ";default:return n+" "+function(e){var a="";if(e.length){a+=e[0].toLowerCase();for(var n=1;n<e.length;n++)a+=t(e[n])}return a}(e)+" = "}}function t(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}}();