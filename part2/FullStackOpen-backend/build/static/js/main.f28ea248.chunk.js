(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(14),u=n.n(r),i=(n(19),n(3)),a=n(4),s=n.n(a),l="/api/persons",j=function(){return s.a.get(l)},b=function(e){return s.a.post(l,e)},d=function(e){return s.a.delete("".concat(l,"/").concat(e))},h=(n(38),n(0)),f=function(e){var t=e.message;return null===t?null:Object(h.jsx)("div",{className:"error",children:t})},O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),a=u[0],s=u[1],l=Object(c.useState)(""),O=Object(i.a)(l,2),v=O[0],x=O[1],m=Object(c.useState)(""),g=Object(i.a)(m,2),p=g[0],k=g[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),S=C[0],y=C[1];Object(c.useEffect)((function(){j().then((function(e){o(e.data)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(f,{message:S}),Object(h.jsx)("p",{children:"filter by:"}),"   ",Object(h.jsx)("input",{value:p,onChange:function(e){console.log(e.target.value),k(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){var e=n.filter((function(e){return e.name.toLowerCase().startsWith(p.toLowerCase())}));console.log(e)},children:"search"}),Object(h.jsxs)("form",{onSubmit:function(e){if(void 0!=n.find((function(e){return e.name===a})))return y("The contact '".concat(a,"' already exists")),void setTimeout((function(){y(null)}),5e3);e.preventDefault();var t={name:a,number:v,id:n.length+1};b(t).then((function(){o(n.concat(t)),s(""),x(""),console.log(n)}))},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:a,onChange:function(e){console.log(e.target.value),s(e.target.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:v,onChange:function(e){console.log(e.target.value),x(e.target.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsxs)("li",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(){return t=e.id,window.confirm("Are you sure you want to detele this contact?"),void d(t).then((function(){return j()})).then((function(e){return o(e.data)}));var t},children:"delete"})]},e.id)}))})]})};u.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f28ea248.chunk.js.map