(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{exkK:function(e,t,a){e.exports={"dashboard-header":"dashboard-header___1G-cm",container:"container___3XY91",info:"info___2hPU_",left:"left___2H0J7",right:"right___3vH25",animateAddUp:"animateAddUp___1P4wI","add-up":"add-up___dr1da"}},"pq+I":function(e,t,a){e.exports={"dashboard-header":"dashboard-header___3iDiF",container:"container___1hIeo",gallery:"gallery___3tyeG",beforeLeft:"beforeLeft___28gev","left-to-right":"left-to-right___1lvVa",left:"left___3ZlZv",center:"center___1kad0",right:"right___1wmxO",afterRight:"afterRight___3KTel","right-to-left":"right-to-left___15jo_"}},r6KQ:function(e,t,a){"use strict";var i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,s,l=i(a("o0o1")),d=i(a("yXPU")),r=i(a("B0EO")),o=i(a("pq+I")),c=a("MuoO"),h=i(a("unmI")),f=i(a("TSYQ")),m=(n=(0,c.connect)(e=>{var t=e.common,a=e.loading;return{loading:a,common:t}}),n(s=class extends r.default.Component{constructor(){super(...arguments),this.state={position:{[-1]:"beforeLeft",[0]:"left",[1]:"center",[2]:"right",[3]:"afterRight"},leftIndex:0,centerIndex:1,rightIndex:2,leftImage:void 0,centerImage:void 0,rightImage:void 0,canSwitch:!0,currentImageIndex:0},this.generatePosition=((e,t)=>{return"+"===t?e+1>3?0:e+1:e-1<-1?2:e-1}),this.getSwitchDirection=(e=>{return 0===e?"+":1===e?"":"-"}),this.handleSwitchGallery=(e=>{if(e&&this.state.canSwitch){var t=this.state,a=t.leftIndex,i=t.rightIndex,n=t.centerIndex,s=t.currentImageIndex,l=this.props.common.lifestyle;(0===a&&"-"===e||2===a&&"+"===e)&&setTimeout(()=>{this.setState({leftImage:"-"===e?l[s+2]:l[s-2]})},700),(0===i&&"-"===e||2===i&&"+"===e)&&setTimeout(()=>{this.setState({rightImage:"-"===e?l[s+2]:l[s-2]})},700),(0===n&&"-"===e||2===n&&"+"===e)&&setTimeout(()=>{this.setState({centerImage:"-"===e?l[s+2]:l[s-2]})},700),this.setState({leftIndex:this.generatePosition(a,e),centerIndex:this.generatePosition(n,e),rightIndex:this.generatePosition(i,e),currentImageIndex:"+"===e?s-1:s+1})}}),this.handleDisableClick=(()=>{this.setState({canSwitch:!1})}),this.handleFixPosition=(e=>{-1===this.state[e]?this.setState({[e]:2}):3===this.state[e]&&this.setState({[e]:0}),this.setState({canSwitch:!0})})}componentDidMount(){var e=this;return(0,d.default)(l.default.mark(function t(){return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.props.dispatch({type:"common/getMediaByCategory",payload:{category:e.props.location.query.category}}).then(t=>{var a=t.find(t=>t._id===e.props.location.query._id),i=t.indexOf(a);e.setState({centerImage:a,currentImageIndex:i}),i>0&&e.setState({leftImage:t[i-1]}),i<t.length-1&&e.setState({rightImage:t[i+1]})});case 1:case"end":return t.stop()}},t,this)}))()}render(){var e=this.state,t=e.centerImage,a=e.leftImage,i=e.rightImage,n=e.leftIndex,s=e.rightIndex,l=e.centerIndex,d=e.position,c=e.currentImageIndex,m=this.props.common.lifestyle;return r.default.createElement("div",{className:o.default.container,ref:e=>this._container=e},r.default.createElement("div",{className:(0,f.default)(o.default[d[n]],o.default.gallery),onAnimationStart:this.handleDisableClick,onAnimationEnd:this.handleFixPosition.bind(this,"leftIndex"),style:a?{visibility:"visible"}:{visibility:"hidden"}},a&&r.default.createElement(h.default,{isCurrent:c===m.indexOf(a),key:"left",image:a,switchCallback:this.handleSwitchGallery.bind(this,this.getSwitchDirection(n))})),r.default.createElement("div",{className:(0,f.default)(o.default[d[l]],o.default.gallery),onAnimationStart:this.handleDisableClick,onAnimationEnd:this.handleFixPosition.bind(this,"centerIndex"),style:t?{visibility:"visible"}:{visibility:"hidden"}},t&&r.default.createElement(h.default,{isCurrent:c===m.indexOf(t),key:"center",image:t,switchCallback:this.handleSwitchGallery.bind(this,this.getSwitchDirection(l))})),r.default.createElement("div",{className:(0,f.default)(o.default[d[s]],o.default.gallery),onAnimationStart:this.handleDisableClick,onAnimationEnd:this.handleFixPosition.bind(this,"rightIndex"),style:i?{visibility:"visible"}:{visibility:"hidden"}},i&&r.default.createElement(h.default,{isCurrent:c===m.indexOf(i),key:"right",image:i,switchCallback:this.handleSwitchGallery.bind(this,this.getSwitchDirection(s))})))}})||s);t.default=m},unmI:function(e,t,a){"use strict";var i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,s,l,d,r=i(a("B0EO")),o=(i(a("17x9")),i(a("exkK"))),c=i(a("uiBP")),h=a("MuoO"),f=(n=(0,h.connect)(e=>{var t=e.loading;return{loading:t}}),n((d=l=class extends r.default.Component{constructor(){super(...arguments),this.state={claps:0,favs:0,imageId:void 0,isAddingClap:!1,isAddingFav:!1},this.handleSwitch=(()=>{this.props.switchCallback()}),this.handleClap=(e=>{e.stopPropagation(),this.setState({isAddingClap:!0}),this.props.dispatch({type:"common/clap",payload:{_id:this.props.image._id,category:this.props.image.category}}),setTimeout(()=>{this.setState({isAddingClap:!1}),this.setState({claps:this.state.claps+1})},200)}),this.handleFavs=(e=>{e.stopPropagation(),this.setState({isAddingFav:!0}),this.props.dispatch({type:"common/favs",payload:{_id:this.props.image._id,category:this.props.image.category}}),setTimeout(()=>{this.setState({isAddingFav:!1}),this.setState({favs:this.state.favs+1})},200)})}static getDerivedStateFromProps(e,t){return e.image._id!==t.imageId?{claps:e.image.meta.claps,favs:e.image.meta.favs,imageId:e.image._id}:{}}render(){var e=this.props,t=e.image,a=(e.isCurrent,e.loading,this.state),i=a.claps,n=a.favs,s=a.isAddingClap,l=a.isAddingFav;return r.default.createElement("div",{className:o.default.container,onClick:this.handleSwitch},r.default.createElement(c.default,{image:t,size:"large",hasNote:!1,noClick:!0}),r.default.createElement("div",{className:o.default.info},r.default.createElement("div",{className:o.default.left},r.default.createElement("div",{className:o.default.title},t.title),r.default.createElement("div",{className:o.default.description},t.description)),r.default.createElement("div",{className:o.default.right},r.default.createElement("div",{className:o.default.statistics,onClick:this.handleClap},r.default.createElement("span",null,"\ud83d\udc4f"),r.default.createElement("span",{className:s?o.default.animateAddUp:null,onAnimationStart:e=>e.stopPropagation()},i)),r.default.createElement("div",{className:o.default.statistics,onClick:this.handleFavs},r.default.createElement("span",null,"\u2764\ufe0f"),r.default.createElement("span",{className:l?o.default.animateAddUp:null,onAnimationStart:e=>e.stopPropagation()},n)))))}},l.defaultProps={image:{}},s=d))||s);t.default=f}}]);