(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0uww":function(e,t,d){e.exports={photoGridExample:"photoGridExample___3p5AZ",photoGrid:"photoGrid___1xkCN",photoGridTitle:"photoGridTitle___1mMNg",photoGridSquare:"photoGridSquare___eMdyz",photoGridShader:"photoGridShader___2Jydd",photoGridImg:"photoGridImg___39oXz",photoGridSquareExpanded:"photoGridSquareExpanded___11QaU",photoGridContentContainer:"photoGridContentContainer___2M35I",photoHeading:"photoHeading___2Ovau",photoHeadingFocused:"photoHeadingFocused___1T-DD",photoGridShaderHidden:"photoGridShaderHidden___btJrL",photoGridLead:"photoGridLead___1fxMB",photoGridFocused:"photoGridFocused___Orcf4"}},Neet:function(e,t,d){"use strict";var o=d("284h"),a=d("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(d("0uww")),r=o(d("q1tI")),l=d("yZBc"),p=[{img:detail1Img,title:"The Great Outdoors"},{img:detail5Img,title:"The Hills are Alive"},{img:detail8Img,title:"Tree in The Fog"},{img:detail6Img,title:"What a Mountain"}];class n extends r.Component{constructor(){super(...arguments),this.applyZIndex=(e=>{e.style.zIndex=3}),this.removeZIndex=(e=>{e.style.zIndex=""}),this.state={focused:!1},this.togglefocused=(()=>{this.setState({focused:!this.state.focused})})}render(){var e=this.state.focused;return r.default.createElement("div",{className:i.default.photoGridExample},r.default.createElement(l.Flipper,{flipKey:e},r.default.createElement("div",{className:i.default.photoGrid},p.map((t,d)=>{return r.default.createElement("div",{key:d},d!==e&&r.default.createElement("div",{className:i.default.photoGridSquare,onClick:()=>{this.setState({focused:d})}},r.default.createElement(l.Flipped,{flipId:`img-${d}`,onStart:this.applyZIndex,onComplete:this.removeZIndex},r.default.createElement("img",{src:t.img,alt:"",className:i.default.photoGridImg}))))})),"number"===typeof e&&r.default.createElement("div",{className:i.default.photoGridSquareExpanded,onClick:()=>{this.setState({focused:null})}},r.default.createElement(l.Flipped,{flipId:`img-${e}`,onStart:this.applyZIndex},r.default.createElement("img",{src:p[e].img,alt:"",className:i.default.photoGridImg})))))}}var s=n;t.default=s}}]);