(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(15),o=t.n(a),u=t(3),i=t(4),s=t(0),d=function(e){var n=e.handle;return Object(s.jsxs)(s.Fragment,{children:["filter shown with ",Object(s.jsx)("input",{type:"text",onChange:n})]})},l=function(e){var n=e.nameValue,t=e.numberValue,c=e.handleName,r=e.handleNumber,a=e.handleAdd;return Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n,onChange:c}),Object(s.jsx)("br",{}),"number: ",Object(s.jsx)("input",{value:t,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},b=function(e){var n=e.person,t=e.remove;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"delete"})]},n.name)})},j=function(e){var n=e.message,t={color:e.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:Object(s.jsx)("div",{style:t,children:n})},f=t(5),h=t.n(f),m="/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},p=function(e){return h.a.post(m,e).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e}))},x=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),f=o[0],h=o[1],m=Object(c.useState)(""),v=Object(i.a)(m,2),w=v[0],k=v[1],y=Object(c.useState)(""),S=Object(i.a)(y,2),C=S[0],N=S[1],V=Object(c.useState)({message:null,color:"green"}),A=Object(i.a)(V,2),E=A[0],R=A[1];Object(c.useEffect)((function(){O().then((function(e){return r(e)}))}),[]);var T=t.filter((function(e){return-1!==e.name.search(new RegExp(C,"i"))}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{message:E.message,color:E.color}),Object(s.jsx)(d,{handle:function(e){N(e.target.value)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(l,{nameValue:f,numberValue:w,handleName:function(e){h(e.target.value)},handleNumber:function(e){k(e.target.value)},handleAdd:function(e){if(e.preventDefault(),t.find((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already added to phonebook. Replace old number with a new one?"))){var n=t.find((function(e){return e.name===f})),c=Object(u.a)(Object(u.a)({},n),{},{number:w});x(n.id,c).then((function(e){r(t.map((function(n){return n.name===f?e:n})))})).catch((function(e){R({message:"".concat(e.response.data),color:"red"}),setTimeout((function(){R({message:null})}),3e3)}))}}else p({name:f,number:w}).then((function(e){r(t.concat(e)),R({message:"Added ".concat(e.name),color:"green"}),setTimeout((function(){R(Object(u.a)(Object(u.a)({},E),{},{message:null}))}),3e3),h(""),k("")})).catch((function(e){R({message:"".concat(e.response.data),color:"red"}),setTimeout((function(){R(Object(u.a)(Object(u.a)({},E),{},{message:null}))}),3e3)}))}}),Object(s.jsx)("h2",{children:"Numbers"}),T.map((function(e){return Object(s.jsx)(b,{person:e,remove:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&g(e).then((function(e){O().then((function(e){return r(e)}))})).catch((function(n){alert("the person with id ".concat(e," was already deleted from server")),r(t.filter((function(n){return n.id!==e})))}))}(e.id)}},e.id)}))]})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9bf3e7f9.chunk.js.map