(this.webpackJsonppersonalexpensewallet=this.webpackJsonppersonalexpensewallet||[]).push([[0],{201:function(e,t,a){},202:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(106),s=a.n(r),l=(a(201),a(202),a(17)),i=a(18),o=a(20),d=a(19),j=a(21),u=a(0),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j.b,{className:"navbar-brand order-1 ",to:"/",children:"Personal Expense Wallet"}),Object(u.jsx)("button",{className:"navbar-toggler order-2",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse order-3",id:"mobile-nav",children:[Object(u.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{className:"nav-link",to:"/WalletPanel",children:"Wallet Panel"})})}),Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{className:"nav-link ",to:"/Register",children:"Sign Up"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{className:"nav-link",to:"/Login",children:"Login"})})]})]})]})})})}}]),a}(c.Component),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"landing",children:Object(u.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-12 text-center",children:[Object(u.jsx)("div",{className:"card text-center",children:Object(u.jsx)("div",{className:"card-header",children:Object(u.jsx)("h1",{className:"display-3 mb-4",children:"Personal Expense Wallet"})})}),Object(u.jsx)("p",{className:"text-muted",children:"Create your account to manage your daily expense"}),Object(u.jsx)(j.b,{to:"/Register",className:"btn btn-danger",children:"Sign Up"}),Object(u.jsx)(j.b,{to:"/Login",className:"btn btn-success",children:"Login"})]})})})})})}}]),a}(c.Component),m=(a(208),a(69)),h=a(41),O=a.n(h),x=a(71),v=a(72),f=a.n(v),N="GET_ERRORS",g="GET_WALLETS",y="GET_WALLET",w="DELETE_WALLET",k=a(44),W=a(56),C=a.n(W),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).changeHandler=function(e,t){c.setState(Object(m.a)({},t,e.target.value))},c.submitHandler=function(e){var t={name:c.state.name,accountNumber:c.state.accountNumber,description:c.state.description,priority:c.state.priority};c.props.createWallet(t,c.props.history),e.preventDefault()},c.state={name:"",accountNumber:"",description:"",priority:"",errors:""},c}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"project",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(u.jsx)("h5",{className:"display-4 text-center",children:"Create Wallet"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t)},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"text",onChange:function(t){return e.changeHandler(t,"name")},className:C()("form-control form-control-lg ",{"is-invalid":this.state.errors.name}),placeholder:"Account Name"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.name})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"text",onChange:function(t){return e.changeHandler(t,"accountNumber")},className:C()("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber}),placeholder:"Account No"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.accountNumber})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("textarea",{onChange:function(t){return e.changeHandler(t,"description")},className:C()("form-control form-control-lg",{"is-invalid":this.state.errors.description}),placeholder:"Description"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.description})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("select",{className:"form-control form-control-lg",onChange:function(t){return e.changeHandler(t,"priority")},children:[Object(u.jsx)("option",{value:3,children:"Display Priority"}),Object(u.jsx)("option",{value:1,children:"High"}),Object(u.jsx)("option",{value:2,children:"Medium"}),Object(u.jsx)("option",{value:3,children:"Low"})]})}),Object(u.jsx)("input",{type:"submit",className:"btn btn-success btn-block mt-4",value:"Create"})]})]})})})})}}]),a}(c.Component),P=Object(k.b)((function(e){return{errors:e.errors}}),{createWallet:function(e,t){return function(){var a=Object(x.a)(O.a.mark((function a(c){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.post("/wallet",e).then((function(e){t.push("/WalletPanel")})).catch((function(e){c({type:N,payload:e.response.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(H),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"container",children:Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col-md-12",children:Object(u.jsxs)("div",{class:"error-template",children:[Object(u.jsx)("h1",{children:"Oops!"}),Object(u.jsx)("h2",{children:"404 Not Found"}),Object(u.jsx)("div",{class:"error-details",children:"Sorry, an error has occured, Requested page not found!"}),Object(u.jsx)("div",{class:"error-actions",children:Object(u.jsxs)(j.b,{to:"/",class:"btn btn-primary btn-lg",children:[Object(u.jsx)("span",{class:"glyphicon glyphicon-home"}),"Take Me To THe Home Page "]})})]})})})})}}]),a}(c.Component),B=a(70),E=a(196),L={};var S=a(62),R={wallets:[],wallet:""};var T=Object(B.b)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;default:return e}},wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(S.a)(Object(S.a)({},e),{},{wallets:t.payload});case y:return Object(S.a)(Object(S.a)({},e),{},{wallet:t.payload});case w:return Object(S.a)(Object(S.a)({},e),{},{wallets:e.wallets.filter((function(e){return e.id!==t.payload}))});default:return e}}}),D=[E.a],U=Object(B.d)(T,{},Object(B.c)(B.a.apply(void 0,D))),M=a(16),_=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).deleteBtnClick=function(){window.confirm("Are you using this wallet or want to delete it ")&&e.props.deleteWallet(e.props.wallet.id)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.wallet;return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-4 col-md-3 col-6",children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsxs)("p",{children:["Account Number: ",t.accountNumber]}),Object(u.jsxs)("p",{children:[" ",t.description," "]})]}),Object(u.jsxs)("div",{className:"col-lg-4 col-md-3 col-6 text-center",children:[Object(u.jsx)("h3",{children:"Balance"}),Object(u.jsxs)("h1",{children:["Rs. ",t.currentBalance]})]}),Object(u.jsx)("div",{className:"col-md-4 col-12 d-lg-block",children:Object(u.jsxs)("ul",{className:"list-group",children:[Object(u.jsx)(j.b,{to:"/WalletUpdate/".concat(t.id),children:Object(u.jsx)("li",{className:"list-group-item list-group-item-dark",children:Object(u.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Account Information"})})}),Object(u.jsx)(j.b,{to:"/WalletPanel",onClick:function(){return e.deleteBtnClick()},children:Object(u.jsx)("li",{className:"list-group-item delete text-danger",children:Object(u.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete this Account"})})})]})})]})})})}}]),a}(c.Component),G=Object(k.b)(null,{deleteWallet:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.delete("/wallet/".concat(e)).then((function(t){a({type:w,payload:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={totalBalance:0},c}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){if(e.wallets){for(var t=0,a=0;a<e.wallets.length;a++)t+=e.wallets[a].currentBalance;this.setState({totalBalance:t})}}},{key:"componentDidMount",value:function(){this.props.getWallets()}},{key:"render",value:function(){var e=this.props.wallets.map((function(e){return Object(u.jsx)(G,{wallet:e},e.id)}));return Object(u.jsx)("div",{className:"projects",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-12",children:[Object(u.jsx)("h1",{className:"display-4 text-center",children:"Your Personal Wallet"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Create new wallet"}),Object(u.jsx)("div",{className:"dropdown-menu",children:Object(u.jsx)(j.b,{className:"dropdown-item",to:"/WalletCreate",children:"Wallet"})})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"card text-center",children:Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("h4",{className:"card-title",children:" Total Current Balance"}),Object(u.jsxs)("h1",{children:["Rs. ",this.state.totalBalance]})]})}),Object(u.jsx)("hr",{}),e]})})})})}}]),a}(c.Component),q=Object(k.b)((function(e){return{wallets:e.wallet.wallets}}),{getWallets:function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/wallet").then((function(e){t({type:g,payload:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(I),J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).changeHandler=function(e,t){c.setState(Object(m.a)({},t,e.target.value))},c.submitHandler=function(e){var t={id:c.state.id,name:c.state.name,accountNumber:c.state.accountNumber,description:c.state.description,currentBalance:c.state.currentBalance,priority:c.state.priority};c.props.updateWallet(c.state.id,t,c.props.history),e.preventDefault()},c.state={id:"",name:"",accountNumber:"",description:"",priority:"",currentBalance:"",errors:""},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getWallet(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.wallet&&this.setState({id:e.wallet.id,name:e.wallet.name,accountNumber:e.wallet.accountNumber,description:e.wallet.description,currentBalance:e.wallet.currentBalance,priority:e.wallet.priority})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"project",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(u.jsx)("h5",{className:"display-4 text-center",children:"Update Wallet"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t)},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"text",value:this.state.name,onChange:function(t){return e.changeHandler(t,"name")},className:C()("form-control form-control-lg ",{"is-invalid":this.state.errors.name}),placeholder:"Account Name"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.name})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"text",value:this.state.accountNumber,onChange:function(t){return e.changeHandler(t,"accountNumber")},className:C()("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber}),placeholder:"Account No"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.accountNumber})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("textarea",{value:this.state.description,onChange:function(t){return e.changeHandler(t,"description")},className:C()("form-control form-control-lg",{"is-invalid":this.state.errors.description}),placeholder:"Description"}),Object(u.jsx)("p",{className:"text-danger",children:this.state.errors.description})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("select",{className:"form-control form-control-lg",value:this.state.priority,onChange:function(t){return e.changeHandler(t,"priority")},children:[Object(u.jsx)("option",{value:3,children:"Display Priority"}),Object(u.jsx)("option",{value:1,children:"High"}),Object(u.jsx)("option",{value:2,children:"Medium"}),Object(u.jsx)("option",{value:3,children:"Low"})]})}),Object(u.jsx)("input",{type:"submit",className:"btn btn-success btn-block mt-4",value:"Update"})]})]})})})})}}]),a}(c.Component),F=Object(k.b)((function(e){return{errors:e.errors,wallet:e.wallet.wallet}}),{getWallet:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("/wallet/".concat(e)).then((function(e){a({type:y,payload:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateWallet:function(e,t,a){return function(){var c=Object(x.a)(O.a.mark((function c(n){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,f.a.put("/wallet/".concat(e),t).then((function(e){a.push("/WalletPanel")})).catch((function(e){n({type:N,payload:e.response.data})}));case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})(J),Y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"login",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(u.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(u.jsxs)("form",{action:"/WalletPanel",children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email Address",name:"email"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",name:"password"})}),Object(u.jsx)("div",{class:"form-actions",children:Object(u.jsx)("input",{type:"submit",className:"btn btn-dark"})})]})]})})})})}}]),a}(c.Component),z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"register",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(u.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(u.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(u.jsxs)("form",{action:"/",children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",name:"name",required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email Address",name:"email"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",name:"password"})}),Object(u.jsx)("div",{class:"form-actions",children:Object(u.jsx)("input",{type:"submit",className:"btn btn-dark"})})]})]})})})})}}]),a}(c.Component);a(227);var K=function(){return Object(u.jsx)(k.a,{store:U,children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(M.a,{path:"/",component:b}),Object(u.jsxs)(M.c,{children:[Object(u.jsx)(M.a,{path:"/",exact:!0,component:p}),Object(u.jsx)(M.a,{path:"/WalletPanel",exact:!0,component:q}),Object(u.jsx)(M.a,{path:"/WalletCreate",exact:!0,component:P}),Object(u.jsx)(M.a,{path:"/WalletUpdate/:id",exact:!0,component:F}),Object(u.jsx)(M.a,{path:"/Login",exact:!0,component:Y}),Object(u.jsx)(M.a,{path:"/Register",exact:!0,component:z}),Object(u.jsx)(M.a,{path:"/",component:A})]})]})})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root"))}},[[435,1,2]]]);
//# sourceMappingURL=main.ea37a297.chunk.js.map