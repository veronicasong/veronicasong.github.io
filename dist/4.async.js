(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{PUTc:function(e,t,a){e.exports={header:"header___2_57M",container:"container___erFot",navigator:"navigator___23eUz",bold:"bold___29q_2",content:"content___2QN8t"}},aArQ:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=n(a("q1tI")),r=n(a("PUTc")),d=a("dtw8"),s=n(a("JB2W")),c=n(a("KXGL")),i=(0,d.withRouter)(o=class extends l.default.Component{constructor(){super(...arguments),this.handleJump=(()=>{this.props.history.push("/")})}render(){return/^\/(console||console\/.*)?$/.test(this.props.location.pathname)?this.props.children:l.default.createElement("div",{className:r.default.container},l.default.createElement("div",{className:r.default.navigator},l.default.createElement("div",{className:r.default.bold,onClick:this.handleJump},"50 percent"),c.default.map((e,t)=>l.default.createElement(s.default,{url:e.url,text:e.text,key:t}))),l.default.createElement("div",{className:r.default.content},this.props.children))}})||o;t.default=i}}]);