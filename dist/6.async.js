(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"4ZnT":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("o0o1")),l=n(a("yXPU")),d=n(a("Nlzp")),s=n(a("DG18"));class i{constructor(){this.getListByCategory=function(){var e=(0,l.default)(r.default.mark(function e(t){var a,n,l,i,o;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=d.default[t].all,e.next=3,(0,s.default)(a);case 3:if(n=e.sent,l=n.data,i=n.success,o=n.message,!i){e.next=11;break}return e.abrupt("return",l);case 11:console.log("api error: ",o);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}var o=new i,u=o;t.default=u},DG18:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,(0,r.default)({},t)).then(e=>e.json())},d=l;t.default=d},H6Sj:function(e,t,a){e.exports={container:"container___m-yJA",imgContainer:"imgContainer___1hG7C",imgExpandContainer:"imgExpandContainer___3ixs7",blur:"blur___2GncT"}},IIzw:function(e,t,a){e.exports={grid:"grid___1YzFh",gridImg:"gridImg___j1Ur4",expandedImg:"expandedImg___YRNRV",mask:"mask___b9f8T",gridWithHover:"gridWithHover___3wycO"}},Nlzp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="http",r="106.14.13.38/api",l=`${n}://${r}`,d={meals:{all:`${l}/meals`}},s=d;t.default=s},TyWn:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("o0o1")),l=n(a("yXPU")),d=n(a("q1tI")),s=a("yZBc"),i=n(a("blUz")),o=n(a("4ZnT")),u=n(a("H6Sj")),c=n(a("uiBP"));class f extends d.default.Component{constructor(){super(...arguments),this.state={mealList:[],focused:null,mock:[{url:"",name:"1",color:"#d4cfc1"},{url:"",name:"2",color:"#e4cfc1"},{url:"",name:"3",color:"#a4cfc1"},{url:"",name:"4",color:"#b4cfc1"}]},this.toggleExpand=(e=>{(null===e||this.state.loaded[e])&&this.setState({focused:e})}),this.animateIn=(()=>{console.log("this.blurRef : ",this.blurRef),this.blurRef.style.filter="blur(10px)",this.blurRef.style.backgroundColor="rgba(233, 233, 233, .8)"}),this.handleSetLoaded=(e=>{var t=this.state.loaded;t[e]=1,this.setState({loaded:t})})}componentDidMount(){var e=this;return(0,l.default)(r.default.mark(function t(){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.getListByCategory("meals");case 2:a=t.sent,e.setState({mealList:a,loaded:new Array(a.length).fill(0)}),a.forEach((t,a)=>{(0,i.default)().reveal(e[`meal${a}Ref`],{delay:300,container:e.revealContainer})});case 5:case"end":return t.stop()}},t,this)}))()}render(){var e=this.state,t=e.mealList,a=e.focused;return d.default.createElement(s.Flipper,{flipKey:a},d.default.createElement("div",{className:u.default.container,ref:e=>this.revealContainer=e},t.map((e,t)=>d.default.createElement("div",{key:t,className:u.default.imgContainer,onClick:this.toggleExpand.bind(this,t)},a!==t&&d.default.createElement(c.default,{setLoaded:this.handleSetLoaded.bind(this,t),index:t,image:e,revealRef:e=>this[`meal${t}Ref`]=e}))),"number"===typeof a&&d.default.createElement("div",{className:u.default.imgExpandContainer,onClick:this.toggleExpand.bind(this,null)},d.default.createElement("div",{className:u.default.blur,ref:e=>this.blurRef=e}),d.default.createElement(c.default,{expanded:!0,index:a,image:t[a],onComplete:this.animateIn}))))}}t.default=f},uiBP:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),l=a("yZBc"),d=n(a("IIzw"));class s extends r.default.Component{constructor(){super(...arguments),this.state={loaded:!1},this.handleOnLoad=(()=>{this.setState({loaded:!0}),this.props.setLoaded&&this.props.setLoaded()}),this.onStart=(e=>{e.style.zIndex=10}),this.onComplete=(e=>{e.style.zIndex="",this.props.onComplete&&this.props.onComplete()}),this.render=(()=>{var e=this.state.loaded,t=this.props,a=t.image,n=t.revealRef,s=t.index,i=t.expanded;return r.default.createElement("div",{className:i?d.default.grid:`${d.default.grid} ${d.default.gridWithHover}`,ref:n},e?null:r.default.createElement("div",{className:d.default.mask,style:{backgroundColor:a.color}}),r.default.createElement(l.Flipped,{flipId:`img-${s}`,onStart:this.onStart,onComplete:this.onComplete},r.default.createElement("img",{className:i?d.default.expandedImg:d.default.gridImg,src:a.url,onLoad:this.handleOnLoad})))})}}t.default=s}}]);