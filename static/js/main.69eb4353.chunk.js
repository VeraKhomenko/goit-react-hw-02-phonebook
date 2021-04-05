(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"ContactListItem_item__3ppXX",text:"ContactListItem_text__2FafW",button:"ContactListItem_button__1UTnZ"}},13:function(t,e,n){t.exports={container:"Container_container__fVnlK"}},14:function(t,e,n){t.exports={form:"ContactList_form__23xiZ"}},3:function(t,e,n){t.exports={form:"Form_form__3Jkrr",label:"Form_label__1XUeF",text:"Form_text__1smQP",button:"Form_button__3U8FF"}},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=n(16),o=n(6),l=n(7),u=n(9),m=n(8),b=n(13),d=n.n(b),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})},f=n(17),p=n(14),x=n.n(p),O=n(10),_=n.n(O),C=n(2),v=n.n(C),g=function(t){var e=t.id,n=t.listItem,a=t.onDeleteContact;return Object(h.jsxs)("li",{className:_.a.item,children:[n.map((function(t){return Object(h.jsx)("span",{className:_.a.text,children:t},v.a.generate())})),Object(h.jsx)("button",{type:"button",className:_.a.button,onClick:function(){return a(e)},children:Object(h.jsx)("p",{children:"Delete"})})]})},F=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:x.a.form,children:e.map((function(t){var e=t.id,a=Object(f.a)(t,["id"]);return Object(h.jsx)(g,{id:e,listItem:Object.values(a),onDeleteContact:n},e)}))})},I=n(15),N=n(3),y=n.n(N),S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=v.a.generate(),t.numberInputId=v.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(I.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.form,children:[Object(h.jsxs)("label",{htmlFor:this.nameInputId,className:y.a.label,children:[Object(h.jsx)("p",{className:y.a.text,children:"Name"})," ",Object(h.jsx)("input",{type:"text",name:"name",value:this.state.name,id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(h.jsxs)("label",{htmlFor:this.numberInputId,className:y.a.label,children:[Object(h.jsx)("p",{className:y.a.text,children:"Number"})," ",Object(h.jsx)("input",{type:"tel",name:"number",value:this.state.number,id:this.numberInputId,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",className:y.a.button,children:"Add contact"})]})}}]),n}(a.Component),L=n(4),A=n.n(L),w=function(t){var e=t.value,n=t.onChange;return Object(h.jsx)("div",{className:A.a.form,children:Object(h.jsxs)("label",{className:A.a.label,htmlFor:"",children:[Object(h.jsx)("p",{className:A.a.text,children:"Find contacts by name:"}),Object(h.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:n})]})})},D=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addFilterContact=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var n={id:v.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(S,{onSubmit:this.addFilterContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(w,{value:t,onChange:this.changeFilter}),Object(h.jsx)(F,{contactList:e,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component);n(31),n(32);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={form:"Filter_form__2e18R",label:"Filter_label__3SiWg",text:"Filter_text__39LL7"}}},[[33,1,2]]]);
//# sourceMappingURL=main.69eb4353.chunk.js.map