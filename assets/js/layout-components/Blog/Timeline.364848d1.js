(window.webpackJsonp=window.webpackJsonp||[]).push([[30,17,35],{254:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"j",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return m}));n(47);const r=/#.*$/u,i=/\.(md|html)$/u,s=/\/$/u,a=/^[a-z]+:/iu,u=t=>decodeURI(t).replace(r,"").replace(i,""),o=t=>a.test(t),c=t=>t.startsWith("mailto:"),l=t=>t.startsWith("tel:"),f=t=>{if(o(t))return t;const e=r.exec(t),n=e?e[0]:"",i=u(t);return i.endsWith("/")?t:`${i}.html${n}`},h=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const n=decodeURIComponent(t.hash),i=(t=>{const e=r.exec(t);return e?e[0]:""})(e);if(i&&n!==i)return!1;return u(t.path)===u(e)},m=(t,e,n)=>{if(o(t))return t;const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return`${e}${t}`;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//u,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}return""!==i[0]&&i.unshift(""),i.join("/")}},255:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(97);const r=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,i={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},s=Object.keys(i);Object.fromEntries(s.map(t=>[i[t],t]))},260:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},disable:{type:Boolean,default:!1}},methods:{setStyle(t){this.disable||(t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0")},unsetStyle(t){this.disable||(t.style.transform="translateY(0)",t.style.opacity="1")}}}),i=(n(270),n(2)),s=Object(i.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},261:function(t,e,n){},264:function(t,e,n){},270:function(t,e,n){"use strict";n(261)},273:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return a}));n(47);var r=n(336);const i=t=>{const e=r(t instanceof Date||"number"==typeof t?t:t.trim());if(e.isValid()){const t=e.year(),n=e.month()+1,r=e.date(),i=e.hour(),s=e.minute(),a=e.second(),u=e.millisecond();return 8!==i&&0!==i||0!==s||0!==a||0!==u?[t,n,r,i,s,a]:[t,n,r,void 0,void 0,void 0]}const[,n,i,s,a,u,o]=/(?:(\d+)[/-](\d+)[/-](\d+))?\s*(?:(\d+):(\d+)(?::(\d+))?)?/u.exec(t.trim())||[],c=t=>void 0===t?void 0:Number(t);return[(f=c(n),f&&f<100?f+2e3:f),c(i),c(s),c(a),c(u),(l=c(o),a&&u&&!o?0:l)];var l,f},s=(t,e)=>t.filter(t=>{const{frontmatter:{article:n,blogpage:r,home:i},title:s}=t;return void 0!==s&&!0!==r&&!0!==i&&!1!==n&&(!e||e(t))}),a=(t,e)=>t.slice(0).sort((t,n)=>{if(e){const r=t.frontmatter[e],i=n.frontmatter[e];if(r&&i&&r!==i)return Number(i)-Number(r);if(r&&!i)return-1;if(!r&&i)return 1}return((t,e)=>{if(!t)return 1;if(!e)return-1;const n=(t,e)=>0===t.length?0:void 0===e[0]?void 0===t[0]||0===t[0]?0:-1:void 0===t[0]?0===e[0]?0:1:e[0]-t[0]==0?(t.shift(),e.shift(),n(t,e)):e[0]-t[0];return n(i(t),i(e))})(t.frontmatter.time||t.frontmatter.date||t.createTimeStamp,n.frontmatter.time||n.frontmatter.date||n.createTimeStamp)})},274:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(47);var r=n(0),i=n(273);const s=r.a.extend({computed:{$timelineItems(){const{pages:t}=this.$site;return Object(i.c)(Object(i.a)(t,t=>Boolean(t.frontmatter.time||t.frontmatter.date||t.createTimeStamp)&&!1!==t.frontmatter.timeline))},$timeline(){const t=[];return this.$timelineItems.forEach(e=>{const{frontmatter:{date:n,time:r=n},createTimeStamp:s}=e,[a,u,o]=Object(i.b)(r||s);a&&u&&o&&(t[0]&&t[0].year===a||t.unshift({year:a,articles:[]}),e.frontmatter.parsedDate=`${u}/${o}`,t[0].articles.push(e))}),t.reverse()}}})},280:function(t,e,n){"use strict";n(264)},286:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(254);const s=(t,{text:e,link:n,level:r})=>t("RouterLink",{props:{to:n,activeClass:"",exactActiveClass:""},class:{"anchor-link":!0,[r?"heading"+r:""]:r}},[t("div",{},[e])]),a=(t,{children:e,route:n})=>t("ul",{class:"anchor-list"},e.map(e=>{const r=Object(i.e)(n,`${n.path}#${e.slug}`);return t("li",{class:{anchor:!0,active:r}},[s(t,{text:e.title,link:`${n.path}#${e.slug}`,level:e.level})])}));var u=r.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:()=>[]}},render:(t,{props:e,parent:{$page:n,$route:r}})=>t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[n.headers&&n.headers.length?t("div",{class:"anchor-header"},["On this page"]):null,t("div",{class:"anchor-wrapper"},[e.items.length?a(t,{children:e.items,route:r}):n.headers?a(t,{children:n.headers,route:r}):null]),n.headers&&n.headers.length?t("div",[t("div",{class:"anchor-header anchor-support"},["Support"]),t("div",{class:"anchor-support-links"},[t("a",{attrs:{href:"https://discord.gg/rollux",target:"_blank"}},[t("div",[t("i",{attrs:{class:"fab fa-discord"}})," Discord community"])]),t("a",{attrs:{href:"https://github.com/SYS-Labs/rollux",target:"_blank"}},[t("div",[t("i",{attrs:{class:"fab fa-github"}})," Make an issue on GitHub"])]),t("a",{attrs:{href:"https://github.com/SYS-Labs/rollux",target:"_blank"}},[t("div",[t("i",{attrs:{class:"far fa-hands-helping"}})," Contribute to Rollux"])])])]):null])])}),o=(n(280),n(2)),c=Object(o.a)(u,void 0,void 0,!1,null,null,null);e.default=c.exports},299:function(t,e,n){},336:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",l="year",f="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:u,d:a,D:f,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=p;var b="$isDayjsObject",S=function(t){return t instanceof w||!(!t||!t[b])},M=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;g[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},_=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},D=v;D.l=M,D.i=S,D.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return _(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<_(t)},$.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,c=!!D.u(e)||e,h=D.p(t),d=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return c?d(1,0):d(31,11);case o:return c?d(1,$):d(0,$+1);case u:var g=this.$locale().weekStart||0,b=(p<g?p+7:p)-g;return d(c?v-b:v+(6-b),$);case a:case f:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var u,c=D.p(t),h="set"+(this.$u?"UTC":""),d=(u={},u[a]=h+"Date",u[f]=h+"Date",u[o]=h+"Month",u[l]=h+"FullYear",u[s]=h+"Hours",u[i]=h+"Minutes",u[r]=h+"Seconds",u[n]=h+"Milliseconds",u)[c],m=c===a?this.$D+(e-this.$W):e;if(c===o||c===l){var p=this.clone().set(f,1);p.$d[d](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[D.p(t)]()},$.add=function(n,c){var f,h=this;n=Number(n);var d=D.p(c),m=function(t){var e=_(h);return D.w(e.date(e.date()+Math.round(t*n)),h)};if(d===o)return this.set(o,this.$M+n);if(d===l)return this.set(l,this.$y+n);if(d===a)return m(1);if(d===u)return m(7);var p=(f={},f[i]=t,f[s]=e,f[r]=1e3,f)[d]||1,$=this.$d.getTime()+n*p;return D.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return D.s(s%12||12,t,"0")},p=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return u+1;case"MM":return D.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return D.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,f,h){var d,m=this,p=D.p(f),$=_(n),v=($.utcOffset()-this.utcOffset())*t,y=this-$,g=function(){return D.m(m,$)};switch(p){case l:d=g()/12;break;case o:d=g();break;case c:d=g()/3;break;case u:d=(y-v)/6048e5;break;case a:d=(y-v)/864e5;break;case s:d=y/e;break;case i:d=y/t;break;case r:d=y/1e3;break;default:d=y}return h?d:D.a(d)},$.daysInMonth=function(){return this.endOf(o).$D},$.$locale=function(){return g[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),O=w.prototype;return _.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",l],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,w,_),t.$i=!0),_},_.locale=M,_.isDayjs=S,_.unix=function(t){return _(1e3*t)},_.en=g[y],_.Ls=g,_.p={},_}()},339:function(t,e,n){"use strict";n(299)},357:function(t,e,n){"use strict";n.r(e);n(47);var r=n(286),i=n(260),s=n(274),a=n(255),u=s.a.extend({name:"Timeline",components:{Anchor:r.default,MyTransition:i.default},computed:{hint(){return this.$themeConfig.blog&&this.$themeConfig.blog.timeline||this.$themeLocaleConfig.blog.timelineText||Object(a.getDefaultLocale)().blog.timelineText},anchorConfig(){return this.$timeline.map(t=>({title:t.year.toString(),level:2,slug:t.year.toString()}))}},methods:{navigate(t){this.$router.push(t)}}}),o=(n(339),n(2)),c=Object(o.a)(u,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"timeline-wrapper"},[e("ul",{staticClass:"timeline-content"},[e("MyTransition",[e("li",{staticClass:"desc"},[t._v(t._s(t.hint))])]),t._v(" "),e("Anchor",{attrs:{items:t.anchorConfig}}),t._v(" "),t._l(t.$timeline,(function(n,r){return e("MyTransition",{key:r,attrs:{delay:.08*(r+1)}},[e("li",[e("h3",{staticClass:"year",attrs:{id:n.year}},[e("span",[t._v(t._s(n.year))])]),t._v(" "),e("ul",{staticClass:"year-wrapper"},t._l(n.articles,(function(n,r){return e("li",{key:r},[e("span",{staticClass:"date"},[t._v(t._s(n.frontmatter.parsedDate))]),t._v(" "),e("span",{staticClass:"title",on:{click:function(e){return t.navigate(n.path)}}},[t._v("\n              "+t._s(n.title)+"\n            ")])])})),0)])])}))],2)])}),[],!1,null,null,null);e.default=c.exports}}]);