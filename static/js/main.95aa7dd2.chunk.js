(this["webpackJsonpreact-todos-code-challenge"]=this["webpackJsonpreact-todos-code-challenge"]||[]).push([[0],{10:function(e,t,a){e.exports={header:"styles_header__1QuuX",title:"styles_title__goIRt"}},11:function(e,t,a){e.exports={input:"styles_input__2Dz5-",completeBtn:"styles_completeBtn__26pVC"}},16:function(e,t,a){e.exports={container:"styles_container__1M4Ug"}},18:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(23),a(10)),s=a.n(o);function i(e){var t=e.title;return r.a.createElement("header",{className:s.a.header},r.a.createElement("h1",{className:s.a.title},t))}i.defaultProps={title:"React Todos"};var u=i,m=a(16),d=a.n(m);var p=function(e){var t=e.children;return r.a.createElement("section",{className:d.a.container},t)},f=a(4);var _=a(11),E=a.n(_),O=a(32),y=a(1);var b=function(){var e=Object(n.useState)(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(y.b)();return r.a.createElement("form",{className:"align-items-center forrm",style:{display:"flex",justifyItems:"center",justifyContent:"space-between"},onSubmit:function(e){e.preventDefault(),l({type:"DAA_TODO",payload:{id:Object(O.a)(),name:a}}),c("")}},r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:a,type:"text",placeholder:"What do you have to do?",className:E.a.input}),r.a.createElement("button",{type:"submit",className:E.a.completeBtn},"Add"))},v=a(14),h=a(5),g=a.n(h);var j=function(e){var t=e.todo,a=Object(n.useState)(!1),c=Object(f.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(t.name),i=Object(f.a)(s,2),u=i[0],m=i[1],d=Object(y.b)();return r.a.createElement("div",{className:g.a.card},r.a.createElement("div",{className:"row  align-items-center"},r.a.createElement("div",{className:"col"},l?r.a.createElement("input",{type:"text",className:"form-control",value:u,onChange:function(e){return m(e.target.value)}}):r.a.createElement("h2",{className:g.a.title},t.name)),r.a.createElement("button",{onClick:function(){d(function(e){return{type:"UPDATE_TODO",payload:e}}(Object(v.a)(Object(v.a)({},t),{},{name:u}))),l&&m(t.name),o(!l)},className:g.a.completeBtn},l?"Update":"Complete"),r.a.createElement("button",{onClick:function(){return d({type:"DELETE_TODO",payload:t.id})},className:g.a.deleteBtn},"Delete")))};var D=function(){var e=Object(y.c)((function(e){return e}));return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(j,{key:e.id,todo:e})})))};var N=function(){return r.a.createElement("main",null,r.a.createElement(u,null),r.a.createElement(p,null,r.a.createElement(b,null),r.a.createElement(D,null)))},S=a(3),T=a(8),B=[{id:1,name:"finish project"},{id:2,name:"prepare food"},{id:3,name:"read book"},{id:4,name:"feed pets"}],x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.b,C=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),w=Object(S.c)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DAA_TODO":return(e=Object(T.a)(t)).unshift(a.payload),e;case"DELETE_TODO":return e=(e=Object(T.a)(t)).filter((function(e){return e.id!==a.payload}));case"UPDATE_TODO":e=Object(T.a)(t);for(var n=-1,r=0;r<e.length&&(n++,e[r].id!==a.payload.id);r++)console.log(n);if(-1!==n)return e[n]=a.payload,e}return t}),C,x());w.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(w.getState())})),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:w},r.a.createElement(N,null))),document.getElementById("root"))},5:function(e,t,a){e.exports={card:"styles_card__2v4eY",title:"styles_title__3gs4e",completeBtn:"styles_completeBtn__28dP5",deleteBtn:"styles_deleteBtn__1XGKn"}}},[[18,1,2]]]);
//# sourceMappingURL=main.95aa7dd2.chunk.js.map