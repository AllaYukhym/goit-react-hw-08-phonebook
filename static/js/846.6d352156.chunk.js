"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[846],{2846:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,i,o,c,l,s,u,d,p,m,x=t(2791),f=t(9434),b=t(6916),h=function(n){return n.data.contacts},g=function(n){return n.filter.letters},Z=function(n){return n.data.isLoading},j=(0,b.P1)([g,h],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),v=t(3634),w=t(168),y=t(6444),k=(y.ZP.li(r||(r=(0,w.Z)(["\n  font-size: 18px;\n  margin-bottom: 14px;\n"]))),y.ZP.button(a||(a=(0,w.Z)(["\n  margin-left: 10px;\n  margin-bottom: 11px;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid purple;\n  color: white;\n  background: purple;\n"])))),P=t(184),z=function(n){var e=n.contact,t=e.name,r=e.number,a=(0,f.I0)();return(0,P.jsxs)(P.Fragment,{children:[t," : ",r,(0,P.jsx)(k,{type:"submit",onClick:function(){return a((0,v.GK)(e.id))},children:"Delete"})]})},C=y.ZP.ul(i||(i=(0,w.Z)(["\n  margin-left: 33vw;\n  padding-left: 0;\n"]))),F=function(){var n=(0,f.v9)(h),e=(0,f.v9)(g),t=(0,f.v9)(j);return(0,P.jsx)(C,{children:e?t.map((function(n){return(0,P.jsx)("li",{children:(0,P.jsx)(z,{contact:n})},n.id)})):n.map((function(n){return(0,P.jsx)("li",{children:(0,P.jsx)(z,{contact:n})},n.id)}))})},A=t(5705),_=t(2797),q=(y.ZP.div(o||(o=(0,w.Z)(["\n  width: 320px;\n  padding: 15px;\n  outline: 1px solid black;\n"]))),(0,y.ZP)(A.l0)(c||(c=(0,w.Z)(["\n  margin-left: 33vw;\n  display: flex;\n  flex-direction: column;\n"])))),I=y.ZP.label(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: bold;\n"]))),N=(0,y.ZP)(A.gN)(s||(s=(0,w.Z)(["\n  width: 200px;\n  margin-top: 5px;\n  border: 1px solid purple;\n  background-color: white;\n  &:focus {\n    border-color: blue;\n    background-color: white;\n  }\n"]))),B=y.ZP.button(u||(u=(0,w.Z)(["\n  width: fit-content;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid purple;\n  color: white;\n  background: purple;\n"]))),L=_.Ry().shape({name:_.Z_().required(),number:_.Z_().min(5).max(12).required()}),J={name:"",number:""},K=function(){var n=(0,f.v9)(h),e=(0,f.I0)();return(0,P.jsx)(A.J9,{initialValues:J,onSubmit:function(t,r){var a,i=r.resetForm;n.some((function(n){return n.name===t.name}))?alert("".concat(t.name," is already in contacts")):(a=t,e((0,v.uK)(a))),i()},validationSchema:L,children:(0,P.jsxs)(q,{children:[(0,P.jsxs)(I,{children:["Name",(0,P.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)(A.Bc,{name:"name"})]}),(0,P.jsxs)(I,{children:["Number",(0,P.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsx)(A.Bc,{name:"number"})]}),(0,P.jsx)(B,{type:"submit",children:"Add contact"})]})})},M=t(4808),R=y.ZP.label(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 35px;\n  margin-left: 33vw;\n  font-size: 18px;\n  font-weight: bold;\n"]))),S=y.ZP.input(p||(p=(0,w.Z)(["\n  width: 200px;\n  margin-top: 5px;\n  border: 1px solid purple;\n  &:focus {\n    border-color: blue;\n    background-color: white;\n  }\n"]))),D=function(){var n=(0,f.I0)(),e=(0,f.v9)(g);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(R,{children:["Find contact by name",(0,P.jsx)(S,{type:"text",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,M.M)(t))}})]})})},E=y.ZP.div(m||(m=(0,w.Z)(["\n  margin-left: 33vw;\n"])));function G(){var n=(0,f.I0)(),e=(0,f.v9)(Z);return(0,x.useEffect)((function(){n((0,v.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(K,{}),(0,P.jsx)(D,{}),(0,P.jsx)(E,{children:e&&"Request in progress..."}),(0,P.jsx)(F,{})]})}}}]);
//# sourceMappingURL=846.6d352156.chunk.js.map