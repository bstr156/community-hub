(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12,36,37,38,39,40,41,47,48,49,50,51,60],{254:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return f}));n(47);const i=/#.*$/u,s=/\.(md|html)$/u,r=/\/$/u,o=/^[a-z]+:/iu,a=t=>decodeURI(t).replace(i,"").replace(s,""),l=t=>o.test(t),c=t=>t.startsWith("mailto:"),u=t=>t.startsWith("tel:"),h=t=>{if(l(t))return t;const e=i.exec(t),n=e?e[0]:"",s=a(t);return s.endsWith("/")?t:`${s}.html${n}`},p=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const n=decodeURIComponent(t.hash),s=(t=>{const e=i.exec(t);return e?e[0]:""})(e);if(s&&n!==s)return!1;return a(t.path)===a(e)},f=(t,e,n)=>{if(l(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${e}${t}`;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}return""!==s[0]&&s.unshift(""),s.join("/")}},258:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(254),r=i.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(s.c)(this.item.link)},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),o=(n(266),n(2)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isInternal?e("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:`iconfont ${t.item.iconPrefix||t.iconPrefix}${t.item.icon} ${t.item.iconClass}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:`iconfont ${t.item.iconPrefix||t.iconPrefix}${t.item.icon} ${t.item.iconClass}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},259:function(t,e,n){},265:function(t,e,n){},266:function(t,e,n){"use strict";n(259)},267:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(47);var i=n(254);const s=t=>{const e=t.map(t=>Object.assign({},t));let n;return e.forEach(t=>{2===t.level?n=t:n&&(n.children||(n.children=[]),n.children.push(t))}),e.filter(t=>2===t.level)},r=(t,e)=>{if(Object(i.f)(e))return{type:"external",path:e};const n=Object(i.i)(e);for(const e of t)if(Object(i.i)(e.regularPath)===n)return Object.assign(Object.assign({},e),{type:"page",path:Object(i.c)(e.path)});return console.error(`Sidebar: "${n}" has no matching page`),{type:"error",path:n}},o=(t,e,n)=>Object(i.k)(`${t}${e}`,n),a=(t,e,n,i="")=>{if("string"==typeof t)return r(e,o(i,t,n));if(Array.isArray(t))return Object.assign(r(e,o(i,t[0],n)),{title:t[1]});const s=t.children||[];return 0===s.length&&t.path?Object.assign(r(e,o(i,t.path,n)),{title:t.title}):Object.assign(Object.assign({},t),{type:"group",path:t.path?o(i,t.path,n):"",children:s.map(s=>a(s,e,n,`${i}${t.prefix||""}`)),collapsable:!1!==t.collapsable})},l=(t,e,n)=>{const{themeConfig:r,pages:o}=e,l=(n&&r.locales&&r.locales[n]||r).sidebar||r.sidebar;if("auto"===t.frontmatter.sidebar||"auto"===l)return(t=>{const e=t.headers?s(t.headers):[];return[{type:"group",collapsable:!1,title:t.title,icon:t.frontmatter.icon,path:"",children:e.map(e=>Object.assign(Object.assign({},e),{type:"header",basePath:t.path,path:`${t.path}#${e.slug}`,children:e.children}))}]})(t);if(!l)return[];const c=((t,e)=>{if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(Object(i.b)(t).startsWith(encodeURI(n)))return{base:n,config:e[n]};return console.warn(t+" do not have valid sidebar config"),!1})(t.regularPath,l);return c?c.config.map(t=>a(t,o,c.base)):[]}},268:function(t,e,n){},272:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=(t,e="")=>{var n;const s=e+(t.prefix||""),r=Object.assign({},t);return s&&(void 0!==r.link&&(r.link=s+r.link),delete r.prefix),(null===(n=r.items)||void 0===n?void 0:n.length)?Object.assign(r,{type:"links",items:r.items.map(t=>i(t,s))}):r.type="link",r}},275:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}}),s=(n(281),n(2)),r=Object(s.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},276:function(t,e,n){},278:function(t,e,n){},279:function(t,e,n){},281:function(t,e,n){"use strict";n(265)},284:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"RepoLink",computed:{repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/u.test(t)?t:"https://github.com/"+t:""},repoLabel(){if(!this.repoLink)return"";if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const[t]=/^https?:\/\/[^/]+/u.exec(this.repoLink)||[""],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"iu").test(t))return i}return"Source"}}}),s=(n(289),n(2)),r=Object(s.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return this.repoLink&&!1!==this.$themeConfig.repoDisplay?t("a",{staticClass:"repo-link",attrs:{rel:"noopener noreferrer",href:this.repoLink,target:"_blank"}},[this._v("\n  "+this._s(this.repoLabel)+"\n  "),t("OutboundLink")],1):this._e()}),[],!1,null,null,null);e.default=r.exports},288:function(t,e,n){},289:function(t,e,n){"use strict";n(268)},290:function(t,e,n){},292:function(t,e,n){},293:function(t,e,n){},301:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(258),r=i.a.extend({name:"DropdownLink",components:{NavLink:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},handleDropdown(t){0===t.detail&&this.setOpen(!this.open)},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),o=(n(306),n(2)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[t._t("title",(function(){return[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n        "+t._s(t.item.text)+"\n      ")])]})),t._v(" "),e("span",{staticClass:"arrow"})],2),t._v(" "),e("ul",{staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?[e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1),t._v(" "),e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)]:e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],2)})),0)])}),[],!1,null,null,null);e.default=a.exports},305:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(342),r=n(324),o=n(254);const a=(t,e)=>"group"===e.type&&e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(o.e)(t,e.path));var l=i.a.extend({name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:r.default},props:{items:{type:Array,required:!0},depth:{type:Number,required:!0}},data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=((t,e)=>{for(let n=0;n<e.length;n++)if(a(t,e[n]))return n;return-1})(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(o.e)(this.$route,t.regularPath)}}}),c=n(2),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},306:function(t,e,n){"use strict";n(276)},308:function(t,e,n){"use strict";n(278)},309:function(t,e,n){"use strict";n(279)},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},323:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(275),r=n(258),o=i.a.extend({name:"SidebarDropdownLink",components:{NavLink:r.default,DropdownTransition:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),a=(n(308),n(2)),l=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mobile-dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=l.exports},324:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(254),r=n(267);const o=(t,e)=>e?t("i",{class:["iconfont",e]}):null,a=(t,{icon:e="",text:n,link:i,level:s,active:r})=>t("RouterLink",{props:{to:i,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0,[s?"heading"+s:""]:s&&2!==s}},[o(t,e),n]),l=(t,{children:e,path:n,route:i,maxDepth:r,depth:o=1})=>!e||o>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(s.e)(i,`${n}#${e.slug}`);return t("li",{class:"sidebar-sub-header"},[a(t,{text:e.title,link:`${n}#${e.slug}`,level:e.level,active:c}),l(t,{children:e.children||!1,path:n,route:i,maxDepth:r,depth:o+1})])}));var c=i.a.extend({name:"SidebarLink",functional:!0,props:{item:{type:Object,required:!0}},render(t,{parent:{$page:e,$route:n,$themeConfig:i,$themeLocaleConfig:o},props:c}){const{item:u}=c;if("error"===u.type)return null;if("external"===u.type)return((t,{path:e,title:n=e})=>t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")]))(t,u);const h=Object(s.e)(n,u.path),p="header"===u.type?h||(u.children||[]).some(t=>Object(s.e)(n,`${u.basePath}#${t.slug}`)):h,d=e.frontmatter.sidebarDepth,f=o.sidebarDepth,m=i.sidebarDepth,g="number"==typeof d?d:"number"==typeof f?f:"number"==typeof m?m:2;if("header"===u.type)return[a(t,{text:u.title||u.path,link:u.path,level:u.level,active:p}),l(t,{children:u.children||!1,path:u.basePath,route:n,maxDepth:g})];const b=o.displayAllHeaders||i.displayAllHeaders,v=a(t,{icon:!1!==i.sidebarIcon&&u.frontmatter.icon?`${""===i.iconPrefix?"":i.iconPrefix||"icon-"}${u.frontmatter.icon}`:"",text:u.title||u.path,link:u.path,active:p});if((p||b)&&u.headers&&!s.d.test(u.path)){const e=Object(r.b)(u.headers);return[v,l(t,{children:e,path:u.path,route:n,maxDepth:g})]}return v}}),u=(n(309),n(2)),h=Object(u.a)(c,void 0,void 0,!1,null,null,null);e.default=h.exports},328:function(t,e,n){"use strict";n(288)},329:function(t,e,n){"use strict";n(290)},330:function(t,e,n){"use strict";n(292)},331:function(t,e,n){"use strict";n(293)},342:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(275),r=n(254),o=i.a.extend({name:"SidebarGroup",components:{DropdownTransition:s.default},props:{item:{type:Object,required:!0},open:{type:Boolean},depth:{type:Number,required:!0}},beforeCreate(){this.$options.components.SidebarLinks=n(305).default},methods:{getIcon(t){const{iconPrefix:e}=this.$themeConfig;return!1!==this.$themeConfig.sidebarIcon&&t?`${""===e?"":e||"icon-"}${t}`:""},isActive:r.e}}),a=(n(331),n(2)),l=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.item.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:"iconfont "+t.getIcon(t.item.icon)}):t._e(),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{clickable:t.item.collapsable,open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:"iconfont "+t.getIcon(t.item.icon)}):t._e(),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.item.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{depth:t.depth+1,items:t.item.children}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=l.exports},350:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),r=n(301),o=n(359),a=n(258),l=n(272),c=i.a.extend({name:"LanguageDropdown",components:{NavLink:a.default,DropdownLink:r.default},computed:{dropdown(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,{routes:n}=this.$router.options,i=this.$themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const r=t[s],o=i[s]&&i[s].label||r.lang||"Unknown Language";let a;return r.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,s),(n||[]).some(t=>t.path===a)||(a=s)),{text:o,link:a}})};return Object(l.a)(s)}return!1}},render(t){return this.dropdown?t("div",{class:"nav-links"},[t("div",{class:"nav-item"},[t(r.default,{props:{item:this.dropdown}},[t(o.default,{slot:"title",style:{width:"1rem",height:"1rem",verticalAlign:"middle",marginLeft:"1rem"}})])])]):null}}),u=n(352),h=n(284),p=(n(47),n(100)),d=n.n(p),f=(t,e,n=null)=>{let i=d()(e,"title","");return d()(e,"frontmatter.tags")&&(i+=" "+e.frontmatter.tags.join(" ")),n&&(i+=" "+n),m(t,i)};const m=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(i.test(t))return s.some(t=>e.toLowerCase().indexOf(t)>-1);{const i=t.endsWith(" ");return new RegExp(s.map((t,e)=>s.length!==e+1||i?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var g={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||10,i=this.$localePath,s=[];for(let r=0;r<e.length&&!(s.length>=n);r++){const o=e[r];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(f(t,o))s.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(s.length>=n);e++){const n=o.headers[e];n.title&&f(t,o,n.title)&&s.push(Object.assign({},o,{path:o.path+"#"+n.slug,header:n}))}}return s},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},b=(n(377),n(2)),v=Object(b.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,i){return e("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,k=n(360);let _;const x=(t,e)=>t.ownerDocument.defaultView.getComputedStyle(t,null)[e];var y=i.a.extend({name:"Navbar",components:{AlgoliaSearchBox:s.a,LanguageDropdown:c,NavLinks:u.default,RepoLink:h.default,SearchBox:v,SidebarButton:k.default,ThemeColor:s.a},data:()=>({linksWrapMaxWidth:0,isMobile:!1}),computed:{siteBrandTitle(){return this.$site.title},canHideSiteBrandTitle(){return Boolean(this.siteBrandTitle)&&!1!==this.$themeConfig.hideSiteTitleonMobile},siteBrandLogo(){const{logo:t}=this.$themeConfig;return t?this.$withBase(t):""},siteBrandDarkLogo(){const{darkLogo:t}=this.$themeConfig;return t?this.$withBase(t):""},algoliaConfig(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||!1},isAlgoliaSearch(){return Boolean(this.algoliaConfig&&this.algoliaConfig.apiKey&&this.algoliaConfig.indexName)},canHide(){const t=this.$themeConfig.navAutoHide;return"none"!==t&&("always"===t||this.isMobile)}},mounted(){const t=parseInt(x(this.$el,"paddingLeft"))+parseInt(x(this.$el,"paddingRight"));_=()=>{document.documentElement.clientWidth<719?(this.isMobile=!0,this.linksWrapMaxWidth=0):(this.isMobile=!1,this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteInfo&&this.$refs.siteInfo.$el&&this.$refs.siteInfo.$el.offsetWidth||0))},_(),window.addEventListener("resize",_),window.addEventListener("orientationchange",_)},beforeDestroy(){window.removeEventListener("resize",_),window.removeEventListener("orientationchange",_)}}),$=(n(378),Object(b.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"navbar",class:{"can-hide":t.canHide}},[t._t("start"),t._v(" "),e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{ref:"siteInfo",staticClass:"home-link",attrs:{to:t.$localePath}},[t.siteBrandLogo?e("img",{staticClass:"logo",class:{light:Boolean(t.siteBrandDarkLogo)},attrs:{src:t.siteBrandLogo,alt:t.siteBrandTitle}}):t._e(),t._v(" "),t.siteBrandDarkLogo?e("img",{staticClass:"logo dark",attrs:{src:t.siteBrandDarkLogo,alt:t.siteBrandTitle}}):t._e(),t._v(" "),t.siteBrandTitle?e("span",{staticClass:"site-name",class:{"can-hide":t.canHideSiteBrandTitle}},[t._v(t._s(t.siteBrandTitle))]):t._e()]),t._v(" "),t._t("center"),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("ThemeColor"),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algoliaConfig}}):!1!==t.$themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("LanguageDropdown"),t._v(" "),e("RepoLink",{staticClass:"can-hide"}),t._v(" "),t._t("end")],2)],2)}),[],!1,null,null,null));e.default=$.exports},352:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(301),r=n(258),o=n(272),a=i.a.extend({name:"NavLinks",components:{DropdownLink:s.default,NavLink:r.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(o.a)(t))}}}),l=(n(328),n(2)),c=Object(l.a)(a,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"nav-links"},this._l(this.navLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),0)}),[],!1,null,null,null);e.default=c.exports},353:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),r=n(354),o=n(305),a=i.a.extend({name:"Sidebar",components:{BlogInfo:s.a,BloggerInfo:s.a,SidebarLinks:o.default,SidebarNavLinks:r.default},props:{items:{type:Array,required:!0}},computed:{blogConfig(){return this.$themeConfig.blog||{}},sidebarDisplay(){return this.blogConfig.sidebarDisplay||"none"}}}),l=(n(379),n(2)),c=Object(l.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("aside",{staticClass:"sidebar"},["none"!==t.sidebarDisplay?[e("BloggerInfo",{class:{mobile:"mobile"===t.sidebarDisplay}}),t._v(" "),e("hr")]:t._e(),t._v(" "),t._t("top"),t._v(" "),e("SidebarNavLinks"),t._v(" "),t._t("center"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t.$frontmatter.blog&&!1!==t.$themeConfig.blog?e("BlogInfo"):t._e()],2)}),[],!1,null,null,null);e.default=c.exports},354:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(284),r=n(323),o=n(258),a=n(272),l=i.a.extend({name:"SidebarNavLinks",components:{RepoLink:s.default,SidebarDropdownLink:r.default,NavLink:o.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(a.a)(t))}}}),c=(n(330),n(2)),u=Object(c.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"sidebar-nav-links"},[this._l(this.navLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("SidebarDropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),this._v(" "),t("RepoLink")],2)}),[],!1,null,null,null);e.default=u.exports},359:function(t,e,n){"use strict";n.r(e);var i=n(2),s=Object(i.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon i18n-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M639.981 344.075c14.805 44.45 34.542 79.023 69.084 113.596 29.603-29.634 49.34-69.146 64.145-113.596H639.981zM314.33 591.024h128.29l-64.145-172.865-64.145 172.865z",fill:"currentColor"}}),this._v(" "),t("path",{attrs:{d:"M807.746 116.882H215.643c-54.274 0-98.681 44.45-98.681 98.78v592.677c0 54.329 44.407 98.78 98.68 98.78h592.104c54.273 0 98.681-44.451 98.681-98.78V215.66c0-54.329-39.475-98.78-98.68-98.78zM565.971 754.01c-9.866 9.878-19.738 9.878-29.603 9.878-4.94 0-14.805 0-19.738-4.939-4.939-4.939-9.872 0-9.872-4.939s-4.932-9.878-9.865-19.756c-4.94-9.878-4.94-14.817-9.872-24.695L467.29 655.23H294.592l-19.737 54.33c-9.866 19.755-14.805 34.572-19.738 44.45-4.939 9.878-14.804 9.878-29.603 9.878-9.871 0-19.737-4.939-29.609-9.878-9.865-9.878-14.798-14.817-14.798-24.695 0-4.939 0-9.878 4.933-19.756 4.939-9.878 4.939-14.817 9.865-24.695l108.553-276.583c4.939-9.878 4.939-19.756 9.872-29.633 4.932-9.878 9.865-19.756 14.798-24.695 4.939-4.94 9.872-14.817 19.737-19.756 9.872-4.94 19.738-4.94 29.61-4.94 9.865 0 19.73 0 29.603 4.94 9.865 4.939 14.804 9.878 19.737 19.756 4.933 4.939 9.866 14.817 14.798 24.695 4.94 9.877 9.872 19.755 14.805 34.572l108.553 271.644c9.865 19.756 14.804 34.573 14.804 44.451-4.939 4.94-9.872 14.817-14.804 24.695zm271.378-192.62c-54.273-19.756-93.748-44.451-128.29-74.085-34.536 34.573-78.943 59.268-133.223 74.085l-14.798-24.695c54.273-14.817 98.68-34.573 133.223-69.146-34.542-34.573-64.145-79.024-74.017-128.413h-49.34V319.38h133.228c-9.877-14.817-19.743-34.573-29.609-49.39l14.799-4.94c9.871 14.818 24.676 34.574 34.542 54.33h123.35v24.695h-49.34c-14.798 49.39-39.468 93.84-69.077 123.474 34.541 29.634 74.01 54.329 128.29 69.146l-19.738 24.695z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=s.exports},360:function(t,e,n){"use strict";n.r(e);n(329);var i=n(2),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("button",{staticClass:"sidebar-button",attrs:{title:"Sidebar Button"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("span",{staticClass:"icon"})])}),[],!1,null,null,null);e.default=s.exports},377:function(t,e,n){"use strict";n(315)},378:function(t,e,n){"use strict";n(316)},379:function(t,e,n){"use strict";n(317)}}]);