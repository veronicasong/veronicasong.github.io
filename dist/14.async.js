(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"/gnO":function(e,t,a){"use strict";var i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=i(a("/wGt"));a("+L6B");var d=i(a("2/Rp"));a("5NDa");var n=i(a("5rEg"));a("BoS7");var r=i(a("Sdc0"));a("DZo9");var s=i(a("8z0m"));a("Pwec");var o,c,h=i(a("CtXQ")),u=i(a("MVZn")),m=i(a("q1tI")),p=i(a("ILmL")),f=a("MuoO"),v=(o=(0,f.connect)(e=>{var t=e.loading;return{loading:t}}),o(c=class extends m.default.Component{constructor(){var e;e=super(...arguments),this.state={title:"",description:"",hidden:!1,fileList:[],content:""},this.handleUpdateTitle=(e=>{this.setState({title:e.target.value})}),this.handleUpdateDescription=(e=>{this.setState({description:e.target.value})}),this.handleUpdateVisibility=(e=>{this.setState({hidden:e})}),this.handleClose=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.props.onClose(a)},this.handleSubmit=(()=>{var e=this.state,t=e.content,a=e.title,i=e.description,l=e.hidden,d=this.props,n=d.mode,r=d.media,s=d.category;this.props.dispatch({type:"edit"===n?"common/updateMedia":"common/postMedia",payload:"edit"===n?(0,u.default)({},r,{title:a,description:i,hidden:l,content:t,category:s}):{title:a,description:i,hidden:l,content:t,category:s}}).then(e=>{e&&this.handleClose(null,!0)})}),this.handleFileChange=(e=>{var t=e.fileList;return this.setState({fileList:t})}),this.handleUploadFile=(e=>{var t=new FormData,a=this.props.category;return t.append("file",e),t.append("category",a),t.append("fileName",e.name),this.props.dispatch({type:"common/uploadFileToOss",payload:t}).then(e=>{this.setState({content:e})}),!1})}componentDidMount(){var e=this.props.media;e&&this.setState({content:e.content,title:e.title,description:e.description,hidden:e.hidden})}renderUpload(){return m.default.createElement("div",{className:"clearfix"},m.default.createElement(s.default,{beforeUpload:this.handleUploadFile,listType:"picture-card",fileList:this.state.fileList,onPreview:()=>{},onChange:this.handleFileChange},this.state.fileList.length>=1?null:m.default.createElement("div",null,m.default.createElement(h.default,{type:"plus"}),m.default.createElement("div",{className:"ant-upload-text"},"Upload"))))}render(){var e=this.props,t=e.media,a=e.visible,i=e.mode,s=this.state,o=s.title,c=s.description,h=s.hidden;return m.default.createElement(l.default,{title:"edit"===i?"Edit":"Upload",placement:"right",onClose:this.handleClose,visible:a,width:500,style:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:53}},m.default.createElement("div",{className:p.default.drawer},"edit"===i?m.default.createElement("img",{src:t.url}):this.renderUpload(),m.default.createElement("div",{className:p.default.formItem},m.default.createElement("span",null,"Hidden:"),m.default.createElement("div",null,m.default.createElement(r.default,{checkedChildren:"ON",unCheckedChildren:"OFF",checked:h,onChange:this.handleUpdateVisibility}))),m.default.createElement("div",{className:p.default.formItem},m.default.createElement("span",null,"Title:"),m.default.createElement(n.default,{value:o,onChange:this.handleUpdateTitle})),m.default.createElement("div",{className:p.default.formItem},m.default.createElement("span",null,"Description:"),m.default.createElement(n.default.TextArea,{rows:4,value:c,onChange:this.handleUpdateDescription}))),m.default.createElement("div",{className:p.default.footer},m.default.createElement(d.default,{type:"default",style:{marginRight:8},onClick:this.handleClose},"Cancel"),m.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit},"Submit")))}})||c);t.default=v},ILmL:function(e,t,a){e.exports={"dashboard-header":"dashboard-header___3tEp0",drawer:"drawer___3eOCN",formItem:"formItem___8LxVe",footer:"footer___3mhwE"}},IUAb:function(e,t,a){e.exports={"dashboard-header":"dashboard-header___3GJ4k",container:"container___1EiIN",header:"header___3Nhsd",mediaList:"mediaList___3lfIn",imgWrapper:"imgWrapper___uePMI",mask:"mask___6CqjR",img:"img___2-Jwi"}},PEvu:function(e,t,a){"use strict";var i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=i(a("CtXQ"));a("+L6B");var d,n,r=i(a("2/Rp")),s=i(a("q1tI")),o=i(a("IUAb")),c=a("MuoO"),h=i(a("/gnO")),u=(d=(0,c.connect)(e=>{var t=e.loading,a=e.common;return{loading:t,common:a}}),d(n=class extends s.default.Component{constructor(){super(...arguments),this.state={drawerVisible:!1,currentMedia:{_id:Date.now()},mode:"upload"},this.getData=(()=>{this.props.dispatch({type:"common/getMediaByCategory",payload:{console:!0,category:"lifestyle"}})}),this.handleEdit=(e=>{this.setState({currentMedia:e,mode:"edit"},()=>this.handleDrawerVisible(!0))}),this.handleUpload=(()=>{this.setState({currentMedia:{_id:Date.now()},mode:"upload"},()=>this.handleDrawerVisible(!0))}),this.handleDrawerVisible=(e=>{this.setState({drawerVisible:e})}),this.handleDrawerClose=(e=>{this.handleDrawerVisible(!1),e&&this.getData()})}componentDidMount(){this.getData()}render(){var e=this.props.common.lifestyle,t=this.state,a=t.drawerVisible,i=t.currentMedia,d=t.mode;return s.default.createElement("div",{className:o.default.container},s.default.createElement("div",{className:o.default.header},"Lifestyle"),s.default.createElement("div",{className:o.default.operation},s.default.createElement(r.default,{type:"primary",onClick:this.handleUpload},"Upload")),s.default.createElement("div",{className:o.default.mediaList},e&&e.map((e,t)=>s.default.createElement("div",{className:o.default.imgWrapper,key:t,onClick:this.handleEdit.bind(this,e)},s.default.createElement("div",{className:o.default.mask},s.default.createElement(l.default,{type:"edit"})),s.default.createElement("img",{className:o.default.img,src:e.url})))),s.default.createElement(h.default,{key:i._id,visible:a,onClose:this.handleDrawerClose,media:i,mode:d,category:"lifestyle"}))}})||n);t.default=u}}]);