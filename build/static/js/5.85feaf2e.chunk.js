(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{656:function(e,a,t){"use strict";t.r(a);t(286);var l=t(299),r=(t(393),t(651)),n=(t(277),t(285)),i=(t(300),t(324)),o=t(113),c=t(17),s=t(18),u=t(21),d=t(19),m=t(20),p=t(0),f=t.n(p),h=t(32),b=t(134),g=t.n(b),v=(t(327),t(388)),N=(t(650),t(646)),E=(t(157),t(27)),y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).itemRender=function(e,a,t){return"prev"===a?f.a.createElement("span",null,f.a.createElement(E.a,{type:"caret-left"})," Previous"):"next"===a?f.a.createElement("span",null,"Next ",f.a.createElement(E.a,{type:"caret-right"})):t},t.showTotal=function(e,a){return"Total ".concat(e)},t.handleChange=function(e,a){t.props.onChangePage(e,a)},t.handleShowSizeChange=function(e,a){t.props.onChangeSize(e,a)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.rowSelection,t=e.columns,l=e.dataSource,r=e.loading,n=e.PageFlag;return f.a.createElement("div",null,f.a.createElement(N.a,{rowSelection:a||null,loading:!r,columns:t,dataSource:l.data,pagination:!1,rowKey:function(e){return e.rowNumber},bordered:!0,size:"middle",scroll:{x:1850,y:400}}),0!==n?f.a.createElement(v.a,{current:l.page,total:l.total,pageSize:l.length?l.length:null,itemRender:this.itemRender,showTotal:this.showTotal,onChange:this.handleChange,onShowSizeChange:this.handleShowSizeChange,showSizeChanger:!0}):null)}}]),a}(p.Component),w=t(63),C=(t(477),t(654)),O=(t(478),t(653)),j=t(52),k=t(296),M=t.n(k),B=function(e,a){return f.a.createElement(j.a,{id:e,defaultMessage:a||""})},x=function(e){return function(a){return e.formatMessage({id:a})}},S=function(e,a){var t=0,l=0,r=e+"",n=a+"";try{t=r.split(".")[1].length}catch(o){}try{l=n.split(".")[1].length}catch(o){}var i=Math.pow(10,t+l);return Number(r.replace(".",""))*Number(n.replace(".",""))/i},T=function(e,a){var t=0,l=0,r=e+"",n=a+"";try{t=r.split(".")[1].length}catch(o){}try{l=n.split(".")[1].length}catch(o){}var i=Math.pow(10,Math.max(t,l));return(S(e,i)+S(a,i))/i},A=function(e,a){var t=0,l=0,r=e+"",n=a+"";try{t=r.split(".")[1].length}catch(o){}try{l=n.split(".")[1].length}catch(o){}var i=Math.pow(10,Math.max(t,l));return(S(e,i)-S(a,i))/i},P=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":"")},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(n.a,{placeholder:a.placeholder?a.placeholder:"",disabled:!!a.disabled&&a.disabled,allowClear:!0,type:a.inputType?a.inputType:"text",value:a.value?a.value:"",onChange:function(e){return t(e.target.value)}}),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),q=(t(301),t(298)),R=q.a.Option,D=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange,l=e.mode,r="";return r="multiple"===l?M.a.intersection(a.value,a.list.map(function(e){return e.value})):-1!==M.a.indexOf(a.list.map(function(e){return e.value}),a.value)?a.value:"",f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":null)},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(q.a,{disabled:!!a.disabled&&a.disabled,value:r,mode:l||null,onChange:function(e){return t(e)}},a.list&&M.a.isArray(a.list)&&a.list.map(function(e,a){return f.a.createElement(R,{value:e.value,key:e.value},e.label)})),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),I=(t(652),t(647)),z=t(649),F=t(59),L=t(58),G=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange,l={showUploadList:{showPreviewIcon:!1},name:"file",action:L.d,headers:{Token:Object(F.b)()},onRemove:function(e){var l=a.value.indexOf(e),r=a.value.slice();r.splice(l,1),t(r)},beforeUpload:function(e){var a="image/jpeg"===e.type||"image/png"===e.type;a||i.a.error("\u53ea\u80fd\u4e0a\u4f20\u56fe\u7247!");var t=e.size/1024/1024<2;return t||i.a.error("\u56fe\u7247\u5fc5\u987b\u5c0f\u4e8e2M!"),t&&a},onChange:function(e){var a=Object(z.a)(e.fileList);a=a.map(function(e){return e.response&&(e.url=e.response.url,e.relativeUrl=e.response.url),e}),t(a)},fileList:a.value},r=f.a.createElement("div",null,f.a.createElement(E.a,{type:"plus",style:{fontSize:"32px",color:"#808080"}}));return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":null)},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(I.a,Object.assign({},l,{listType:"picture-card",disabled:!!a.disabled&&a.disabled,className:"avatar-uploader"}),r),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),V=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(e){t.props.onChange(e)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.field,a=e.list.filter(function(a){return!e.value.includes(a.label)});return f.a.createElement("div",{className:"form-control ".concat(e.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(e.required?"form-control-item-required":null)},B(e.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(q.a,{mode:"multiple",value:e.value,onChange:this.handleChange,style:{width:"100%"}},a.map(function(e){return f.a.createElement(q.a.Option,{key:e.value,value:e.label},e.label)})),f.a.createElement("div",{className:"form-explain-holder"},e.error?e.errorMsg:null)))}}]),a}(p.PureComponent),U=n.a.TextArea,$=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a,t=this.props,l=t.field,r=t.onChange,n=function(e){return f.a.createElement(U,{disabled:!!l.disabled&&l.disabled,rows:"".concat(l.rows?l.rows:4),value:l.value,placeholder:e,onChange:function(e){return r(e.target.value)}})};return f.a.createElement("div",{className:"form-control ".concat(l.error?"has-error":"")},""!==l.label?f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(l.required?"form-control-item-required":null)},B(l.label))):null,f.a.createElement("div",{className:"form-control-item"},l.placeholder?(e=l.placeholder,a=n,f.a.createElement(j.a,{id:e},a)):n(""),f.a.createElement("div",{className:"form-explain-holder"},l.error?l.errorMsg:null)))}}]),a}(p.PureComponent),J=(t(389),t(387)),K=J.a.RangePicker,Q=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":"")},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(K,{value:a.value,onChange:function(e,a){t(e)}}),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),_=t(65),H=t.n(_),W=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":"")},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(J.a,{value:a.value?H()(a.value):null,onChange:function(e,a){return t(a)}}),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),X=(t(520),t(648)),Y=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":"")},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(X.a,{min:a.min?a.min:0,disabled:!!a.disabled&&a.disabled,allowClear:!0,value:a.value?a.value:0,onChange:function(e){return t(e)}}),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),Z=(t(329),t(325)),ee=Z.a.Group,ae=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":null)},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(ee,{disabled:!!a.disabled&&a.disabled,buttonStyle:"solid",onChange:function(e){return t(e.target.value)},value:a.value?a.value:null},a.list&&M.a.isArray(a.list)&&a.list.map(function(e,a){return f.a.createElement(Z.a.Button,{value:e.value,key:e.value},e.label)})),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),te=(t(523),t(525)),le=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange;return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":null)},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement(te.a,{checked:!!a.value,disabled:!!a.disabled&&a.disabled,onChange:function(e){t(e?1:0)}}),f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(p.PureComponent),re=t(267),ne=t.n(re),ie=t(553),oe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1,color:"#000"},t.handleClick=function(){t.setState({displayColorPicker:!t.state.displayColorPicker})},t.handleClose=function(){t.setState({displayColorPicker:!1})},t.handleChange=function(e){t.setState({color:e.rgb})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.field,t=e.onChange,l=a.value?a.value:this.state.color,r=ne()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:l},swatch:{padding:"8px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer",marginRight:"1rem"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},colorContent:{display:"flex",alignItem:"center"}}});return f.a.createElement("div",{className:"form-control ".concat(a.error?"has-error":"")},f.a.createElement("div",{className:"form-control-label"},f.a.createElement("label",{className:"".concat(a.required?"form-control-item-required":"")},B(a.label))),f.a.createElement("div",{className:"form-control-item"},f.a.createElement("div",{style:r.colorContent},f.a.createElement("div",{className:"color-picker",style:r.swatch,onClick:this.handleClick},f.a.createElement("div",{style:r.color})),f.a.createElement("div",null,f.a.createElement(n.a,{disabled:!!a.disabled&&a.disabled,allowClear:!0,type:a.inputType?a.inputType:"text",value:a.value?a.value:"",onChange:function(e){return t(e.target.value)}}))),this.state.displayColorPicker?f.a.createElement("div",{style:r.popover},f.a.createElement("div",{style:r.cover,onClick:this.handleClose}),f.a.createElement(ie.ChromePicker,{color:a.value?a.value:this.state.color,onChangeComplete:function(e){return t(e.hex)}})):null,f.a.createElement("div",{className:"form-explain-holder"},a.error?a.errorMsg:null)))}}]),a}(f.a.Component),ce=t(605),se=t.n(ce),ue=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).chooseComponent=function(e){var a=null;switch(e.type){case"customize":a=f.a.createElement(e.component,null);break;case"switch":a=f.a.createElement(le,null);break;case"inputnumber":a=f.a.createElement(Y,null);break;case"colorpicker":a=f.a.createElement(oe,null);break;case"datepicker":a=f.a.createElement(W,null);break;case"rangepicker":a=f.a.createElement(Q,null);break;case"textarea":a=f.a.createElement($,null);break;case"radio":a=f.a.createElement(ae,null);break;case"textfield":a=f.a.createElement(P,null);break;case"multiSelection":a=f.a.createElement(D,{mode:"multiple"});break;case"selection":a=f.a.createElement(D,null);break;case"uploadfile":a=f.a.createElement(G,null);break;case"searchfield":a=f.a.createElement(V,null);break;default:a=f.a.createElement(P,null)}return a},t.onChange=function(e){return function(a){t.props.handleChange(e,a),t.validator&&(t.fieldValues[e]=a,t.validator.validate(t.fieldValues,function(e,a){t.props.handleError(t.handleErrors(e))}))}},t.handleErrors=function(e){return function(a){var t={};return Object.keys(a.fields).map(function(l){if("undefined"!==typeof a.fields[l].error&&delete a.fields[l].error,"undefined"!==typeof a.fields[l].errorMsg&&delete a.fields[l].errorMsg,M.a.isArray(e)&&e.length>0){var r=M.a.where(e,{field:l});if(r.length>0){a.fields[l].error=!0;var n=r.map(function(e){return e.message});a.fields[l].errorMsg=1===n.length?n[0]:n.join(",")}}return t[l]=a.fields[l],null}),{fields:t}}},t.onSubmit=function(e){t.validator=new se.a(t.descriptor),Object.keys(e).map(function(a){return t.fieldValues[a]=e[a].value,null}),t.validator.validate(t.fieldValues,function(e,a){e?t.props.handleError(t.handleErrors(e)):t.props.onSubmit(t.fieldValues)})},t.getFieldDecorator=function(e,a){var l={field:t.props.fields[e],key:e};return l.onChange=t.onChange(e),a.rules&&M.a.isArray(a.rules)&&a.rules.length>0&&(1===a.rules.length?t.descriptor[e]=a.rules[0]:t.descriptor[e]=a.rules),function(e){return f.a.createElement(e.type,Object.assign({},e.props,l))}},t.validator=null,t.descriptor={},t.fieldValues={},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.layout,l=a.fields,r=a.align;return this.descriptor={},f.a.createElement("form",{className:"form-wrapper ".concat(r||"form-vertical"),onSubmit:function(a){a.preventDefault(),e.onSubmit(l)}},Object.keys(t).map(function(a,r){var n=t[a].subFields;return f.a.createElement("div",{key:"section_".concat(r),className:"form-section"},t[a].title?f.a.createElement("h3",null,t[a].title):null,n.map(function(a,t){var r=Object.keys(a).length,n="row-".concat(t);return f.a.createElement(C.a,{key:n,type:"flex",justify:"start",gutter:16},Object.keys(a).map(function(t,i){return f.a.createElement(O.a,{lg:24/r,xs:24,md:24,key:n+"col"+i},a[t]?e.getFieldDecorator(a[t],{rules:l[a[t]].rules})(e.chooseComponent(l[a[t]])):null)}))}))}),this.props.footer)}}]),a}(p.PureComponent),de=t(10),me=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={layout:{default:{subFields:[{"col-1":"queryKey","col-2":"type","col-3":"payment"}]}},fields:{},params:{data:[]}},t.handleChange=function(e,a){var l=Object(o.a)({},e,{value:{$set:a}});t.props.updateSearchFields(l)},t.handleError=function(e){},t.handleSearch=function(){var e=parseInt(Object(de.c)());t.props.getList(e)},t.submit=function(){for(var e=t.props,a=e.list,l=e.intl,r=parseInt(Object(de.c)()),n=!0,o=0;o<t.state.params.data.length;o++){if(t.state.params.data[o].sapNewBillingModel.remaining<0){n=!0;break}n=!1}a&&a.map&&"difference"===a.map.soldTo?i.a.error(x(l)("differenceSoldTO")):a&&a.map&&"difference"===a.map.customerName?i.a.error(x(l)("differenceCustomerName")):a&&a.map&&"difference"===a.map.tc?i.a.error(x(l)("differenceTC")):n?i.a.error(x(l)("outnumber")):t.props.updateList(r,t.state.params)},t.onBlur=function(e,a,l){var r=t.state.params,n=0,i=0;r&&r.data.map(function(t,o){return"newToClear"===l&&(t.sapNewBillingModel.total?(t.sapNewBillingModel.toClear=n,i=T(i,n),t.sapNewBillingModel.remaining=A(A(t.sapNewBillingModel.billingAmount,t.sapNewBillingModel.cleared),t.sapNewBillingModel.toClear),t.sapNewBillingModel.sumTotal&&(t.sapNewBillingModel.toClear=i,t.sapNewBillingModel.remaining=A(A(t.sapNewBillingModel.billingAmount,t.sapNewBillingModel.cleared),t.sapNewBillingModel.toClear)),n=0):o===a.rowNumber?(t.sapNewBillingModel.toClear=Number(e),t.sapNewBillingModel.remaining=A(A(t.sapNewBillingModel.billingAmount,t.sapNewBillingModel.cleared),Number(e)),n=T(n,Number(t.sapNewBillingModel.toClear))):n=T(n,Number(t.sapNewBillingModel.toClear))),"newRemarks"===l&&o===a.rowNumber&&(t.sapNewBillingModel.remarks=e),r}),t.setState({params:r})},t.onChange=function(e,a,l,r){var n={params:{data:Object(o.a)({},a.rowNumber,Object(o.a)({},l,Object(o.a)({},r,{$set:e})))}};t.setState(g()(t.state,n))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props,a=e.list,t=e.status,l=e.savingStatus,r=e.intl;if(""!==t&&"success"!==t&&"saving"!==t?(this.props.setGeneral({status:""}),i.a.error(x(r)("queryFailed"))):"success"===t&&(this.setState({params:{data:a.data}}),this.props.setGeneral({status:""})),""!==l&&"success"!==l&&"outnumber"!==l&&"toclear"!==l&&"saving"!==l)this.props.setGeneral({savingStatus:""}),i.a.error(x(r)("submitFailed"));else if("outnumber"===l)this.props.setGeneral({savingStatus:""}),i.a.error(x(r)("outnumber"));else if("toclear"===l)this.props.setGeneral({savingStatus:""}),i.a.error(x(r)("toclear"));else if("success"===l){this.props.setGeneral({savingStatus:""});this.props.updateSearchFields({payment:{value:{$set:""}}}),this.handleSearch(),i.a.success(x(r)("submitSuccess"))}}},{key:"render",value:function(){var e=this,a=this.props,t=a.list,i=a.listLoaded,o=a.fields,c=this.state,s=c.layout,u=c.params,d=[{title:"Debit Memo and New Billings",children:[{title:"DM#",dataIndex:"sapNewBillingModel.salesDoc",key:"sapNewBillingModel.salesDoc",width:100},{title:"Billing#",dataIndex:"sapNewBillingModel.billDoc",key:"sapNewBillingModel.billDoc",width:100},{title:"Date",dataIndex:"sapNewBillingModel.billingDate",key:"sapNewBillingModel.billingDate",width:150},{title:"P/T",dataIndex:"sapNewBillingModel.paymentTerm",key:"sapNewBillingModel.paymentTerm",width:200},{title:"Amount",dataIndex:"sapNewBillingModel.billingAmount",key:"sapNewBillingModel.billingAmount",width:100},{title:"Cleared",dataIndex:"sapNewBillingModel.cleared",key:"sapNewBillingModel.cleared",width:100},{title:"To Clear",dataIndex:"sapNewBillingModel.toClear",key:"sapNewBillingModel.toClear",width:150,render:function(a,t){return f.a.createElement("div",null,t.sapNewBillingModel.total||null===t.sapNewBillingModel.salesDoc||null===t.sapNewBillingModel.billDoc?f.a.createElement("span",null,t.sapNewBillingModel.toClear):f.a.createElement(n.a,{disabled:!1,allowClear:!0,type:"text",value:t.sapNewBillingModel.toClear,onChange:function(a){return e.onChange(a.target.value,t,"sapNewBillingModel","toClear")},onBlur:function(a){return e.onBlur(a.target.value,t,"newToClear")}}))}},{title:"Remaining",dataIndex:"sapNewBillingModel.remaining",key:"sapNewBillingModel.remaining",width:100,render:function(e,a){return f.a.createElement("div",null,f.a.createElement("span",{className:a.sapNewBillingModel.remaining<0?"red":""},a.sapNewBillingModel.remaining))}},{title:"Remarks",dataIndex:"sapNewBillingModel.remarks",key:"sapNewBillingModel.remarks",width:200,render:function(a,t){return f.a.createElement("div",null,t.sapNewBillingModel.total||null===t.sapNewBillingModel.salesDoc||null===t.sapNewBillingModel.billDoc?f.a.createElement("span",null,t.sapNewBillingModel.remarks):f.a.createElement(n.a,{disabled:!1,allowClear:!0,type:"text",value:t.sapNewBillingModel.remarks,onChange:function(a){return e.onChange(a.target.value,t,"sapNewBillingModel","remarks")},onBlur:function(a){return e.onBlur(a.target.value,t,"newRemarks")}}))}}]},{title:"Old SO Billings",children:[{title:"SO#",dataIndex:"oldBillingModel.orderNumber",key:"oldBillingModel.orderNumber",width:100},{title:"Billing#",dataIndex:"oldBillingModel.billingNumber",key:"oldBillingModel.billingNumber",width:100},{title:"Amount",dataIndex:"oldBillingModel.billingAmount",key:"oldBillingModel.billingAmount",width:100},{title:"Date",dataIndex:"oldBillingModel.billingDate",key:"oldBillingModel.billingDate",width:150},{title:"P/T",dataIndex:"oldBillingModel.paymentTerm",key:"oldBillingModel.paymentTerm",width:200}]}],m={layout:s,fields:o,handleChange:this.handleChange,handleError:this.handleError,onSubmit:this.handleSearch};return f.a.createElement("div",{className:"financeARClearance-list"},f.a.createElement(r.a,{style:{padding:"0 2%"}},f.a.createElement(r.a.Item,null,"Please enter SO# or Old Billing# or New Billing#, and customer payment, this tool will provide suggested list of old and new billings to clear.")),f.a.createElement("div",{style:{padding:"0 2%"}},f.a.createElement("div",{className:"financeARClearance-search"},f.a.createElement("div",{className:"search-right"},f.a.createElement(ue,Object.assign({},m,{footer:f.a.createElement("div",{className:"search-button"},f.a.createElement(l.a,{type:"primary",htmlType:"submit",className:"form-button"},"Query"),f.a.createElement(l.a,{type:"primary",onClick:this.submit,className:"form-button"},"Submit"))})))),f.a.createElement("div",{className:"financeARClearance-search"},f.a.createElement("div",{className:"search-right"},f.a.createElement("div",{className:t&&t.map&&"difference"===t.map.soldTo?"financeARClearance-title red":"financeARClearance-title"},"Sold TO: ",t&&t.map&&"difference"===t.map.soldTo?"Sold TO value is inconsistent on both sides":t&&t.map&&t.map.soldTo?t.map.soldTo:""),f.a.createElement("div",{className:t&&t.map&&"difference"===t.map.customerName?"financeARClearance-title red":"financeARClearance-title"},"Customer Name: ",t&&t.map&&"difference"===t.map.customerName?"Customer name value is inconsistent on both sides":t&&t.map&&t.map.customerName?t.map.customerName:""),f.a.createElement("div",{className:t&&t.map&&"difference"===t.map.tc?"financeARClearance-title red":"financeARClearance-title"},"TC: ",t&&t.map&&"difference"===t.map.tc?"TC value is inconsistent on both sides":t&&t.map&&t.map.tc?t.map.tc:""))),f.a.createElement(y,{loading:i,columns:d,dataSource:u,PageFlag:0})),f.a.createElement("div",{style:{padding:"0 2%"}},"* TC = Transaction Currency"))}}]),a}(p.Component),pe={getList:w.e,updateList:w.g,setGeneral:w.f,updateSearchFields:w.h};a.default=Object(h.b)(function(e){var a=e.financeARClearance;return{list:a.list,listLoaded:a.listLoaded,status:a.status,savingStatus:a.savingStatus,fields:a.searchfields}},pe)(me)}}]);
//# sourceMappingURL=5.85feaf2e.chunk.js.map