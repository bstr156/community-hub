(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{260:function(t,e,s){"use strict";s.r(e);var a=s(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},disable:{type:Boolean,default:!1}},methods:{setStyle(t){this.disable||(t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0")},unsetStyle(t){this.disable||(t.style.transform="translateY(0)",t.style.opacity="1")}}}),n=(s(270),s(2)),i=Object(n.a)(a,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=i.exports},261:function(t,e,s){},270:function(t,e,s){"use strict";s(261)}}]);