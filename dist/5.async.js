(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{RXBc:function(e,t,o){"use strict";var l=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(o("q1tI")),n=l(o("XfOM")),r=l(o("950E")),s=l(o("JB2W")),i=l(o("blUz")),u=l(o("KXGL"));class d extends a.default.Component{constructor(){super(...arguments),this.state={slogon:["50","percent","of","art","50","percent","of","tech"]},this._logoWriter=null,this._slogonWriter=null,this.writeSlogon=(()=>{this.state.slogon.forEach((e,t)=>{(0,i.default)().reveal(this[`slogon${t}`],{delay:200*t})})}),this.writeMenu=(()=>{})}componentDidMount(){this._logoWriter=new r.default(this.logo,{}),this._logoWriter.typeString("50 PERCENT").start().pauseFor(10).callFunction(this.writeSlogon)}render(){var e=this.state.slogon;return a.default.createElement("div",{className:n.default["container"]},a.default.createElement("div",{className:n.default.wrapper},a.default.createElement("div",{className:n.default.logo,ref:e=>this.logo=e}),a.default.createElement("div",{className:n.default.slogonContainer},e.map((e,t)=>a.default.createElement("div",{className:n.default.slogon,ref:e=>this[`slogon${t}`]=e,key:t},e)))),a.default.createElement("div",{className:n.default.menu,ref:e=>this.menu=e},u.default.map((e,t)=>a.default.createElement(s.default,{url:e.url,text:e.text,key:t}))))}}t.default=d},XfOM:function(e,t,o){e.exports={container:"container___rRDCW",wrapper:"wrapper___3wqQT",logo:"logo___36Z1w",slogonContainer:"slogonContainer___SwZQK",slogon:"slogon___1kCft",menu:"menu___2moP7"}}}]);