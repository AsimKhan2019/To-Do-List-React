(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,c){e.exports={item:"TodoItem_item__2zn2D",checkbox:"TodoItem_checkbox__yszu8",textInput:"TodoItem_textInput__ob7Vj"}},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(1),a=c.n(o),i=c(23),s=c.n(i),r=c(8),l=c(22),d=c(11),u=c(9),j=c(3),b=function(){return Object(n.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(n.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},p=c(15),h=c(16),x=function(e){var t=Object(o.useState)({title:""}),c=Object(u.a)(t,2),a=c[0],i=c[1];return Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.title.trim()?(e.addTodoProps(a.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(n.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a.title,name:"title",onChange:function(e){i(Object(d.a)(Object(d.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}}),Object(n.jsx)("button",{className:"input-submit",children:Object(n.jsx)(h.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},O=c(17),m=c.n(O),f=function(e){var t=Object(o.useState)(!1),c=Object(u.a)(t,2),a=c[0],i=c[1];Object(o.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]);var s=e.todo,r=s.completed,l=s.id,d=s.title,j={},b={};return a?j.display="none":b.display="none",Object(n.jsxs)("li",{className:m.a.item,children:[Object(n.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(n.jsx)("input",{type:"checkbox",className:m.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(l)}}),Object(n.jsx)("button",{onClick:function(){return e.deleteTodoProps(l)},children:Object(n.jsx)(h.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(n.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:d})]}),Object(n.jsx)("input",{type:"text",style:b,className:m.a.textInput,value:d,onChange:function(t){e.setUpdate(t.target.value,l)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},g=function(e){return Object(n.jsx)("ul",{children:e.todos.map((function(t){return Object(n.jsx)(f,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},y=c(43),v=function(){var e=Object(j.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),c=t.title,o=t.description;return Object(n.jsxs)("div",{className:"main__content",children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("p",{children:o})]})},N=function(){var e=Object(j.g)(),t=e.url,c=e.path;return Object(n.jsxs)("div",{className:"about__content",children:[Object(n.jsxs)("ul",{className:"about__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(n.jsx)(j.a,{path:"".concat(c,"/:slug"),children:Object(n.jsx)(v,{})})]})},k=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"No match for this page"})})},w=c(25),S=c(26),_=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("nav",{className:"navBar",children:[Object(n.jsx)("button",{onClick:function(){a(!c)},children:c?Object(n.jsx)(w.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(n.jsx)(S.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(n.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(r.c,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},T=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(o.useEffect)((function(){var e=JSON.stringify(c);localStorage.setItem("todos",e)}),[c]);return console.log("Your process.env.PUBLIC_URL","/react-todo-project"),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)(b,{}),Object(n.jsx)(x,{addTodoProps:function(e){var t={id:Object(y.a)(),title:e,completed:!1};a([].concat(Object(l.a)(c),[t]))}}),Object(n.jsx)(g,{todos:c,handleChangeProps:function(e){a((function(t){return t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){a(Object(l.a)(c.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){a(c.map((function(c){return c.id===t&&(c.title=e),c})))}})]})})}),Object(n.jsx)(j.a,{path:"/about",children:Object(n.jsx)(N,{})}),Object(n.jsx)(j.a,{path:"*",children:Object(n.jsx)(k,{})})]})]})};c(40);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(r.a,{basename:"/react-todo-project",children:Object(n.jsx)(T,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e5726d28.chunk.js.map