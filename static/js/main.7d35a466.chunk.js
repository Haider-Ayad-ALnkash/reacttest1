(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),s=n.n(c),i=(n(19),n(8)),o=n(9),l=n(14),d=n(11),u=n(10),b=n.n(u),m=n(4),j="ADD_REMINDER",h="REMOVE_REMINDER",p="CLEAR_REMINDERS",x=n(1),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={text:"",date:Date(),range:""},e.render_Reminders=function(){var t=e.props.reminders;return Object(x.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(x.jsx)("li",{className:"list-group-item",children:Object(x.jsxs)("div",{className:"list-group-item list-group-item-action",children:[Object(x.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(x.jsx)("h4",{className:"mb-1",children:t.text}),Object(x.jsx)("small",{className:"text-muted",children:b()(new Date(t.date)).fromNow()})]}),Object(x.jsx)("small",{className:"text-muted",children:Object(x.jsx)("div",{className:"remove btn btn-danger btn-right",onClick:function(){return e.props.remove_Reminder(t.id)},children:"X"})})]})},t.id)}))})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App container",children:[Object(x.jsx)("div",{className:"reminder-title",children:Object(x.jsx)("h2",{className:"text-center",children:"What Should U Do ? "})}),Object(x.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter Your Task",onChange:function(t){return e.setState({text:t.target.value})},value:this.state.text}),Object(x.jsx)("input",{className:"form-control",type:"datetime-local",onChange:function(t){return e.setState({date:t.target.value})},value:this.state.date}),Object(x.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){e.props.add_Reminder(e.state.text,e.state.date,e.state.range),e.setState({text:"",date:Date("y")})},children:"Add Task"}),Object(x.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e.props.clear_allTasks()},children:"Delete All Tasks "}),this.render_Reminders()]})}}]),n}(r.Component),f=Object(m.b)((function(e){return{reminders:e}}),{add_Reminder:function(e,t){return{type:j,text:e,date:t}},remove_Reminder:function(e){return{type:h,id:e}},clear_allTasks:function(){return{type:p}}})(O),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},g=n(13),k=n(12),N=n(2),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return e=Object(N.read_cookie)("reminders"),t.type===j?(n=[].concat(Object(k.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(N.bake_cookie)("reminders",n),n):t.type===h?(n=e.filter((function(e){return e.id!==t.id})),Object(N.bake_cookie)("reminders",n),n):t.type===p?(n=[],Object(N.bake_cookie)("reminders",n),n):e},_=Object(g.a)(y);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(m.a,{store:_,children:Object(x.jsx)(f,{})})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.7d35a466.chunk.js.map