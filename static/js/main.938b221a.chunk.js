(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/music1.c3c53098.mp3"},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),c=t.n(i),s=t(9),r=t(1),o=t(2),m=t(5),p=t(4),h=t(3),u=t(6),d=(t(16),function(e){return l.a.createElement("div",null,l.a.createElement("p",{className:"fullName"}," ",e.firstName," ",e.lastName," "),l.a.createElement("p",{className:"searchingPosition"},e.position),l.a.createElement("div",null,l.a.createElement("span",{style:{display:e.mobile?"":"none"}},l.a.createElement("i",{class:"fas fa-phone",style:{color:"blue",paddingRight:"5px"}}),e.mobile," "),l.a.createElement("span",{style:{display:e.placeLiving?"":"none"}},l.a.createElement("i",{class:"fa fa-map-marker","aria-hidden":"true",style:{color:"blue",paddingRight:"5px",paddingLeft:"20px"}}),e.placeLiving," "),l.a.createElement("p",{style:{display:e.email?"":"none"}},l.a.createElement("i",{class:"fas fa-at",style:{color:"blue",paddingRight:"5px"}}),e.email)))}),g=t(10),E=t.n(g),y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).play=function(){t.setState({play:!0,pause:!1}),console.log(t.audio),t.audio.play()},t.pause=function(){t.setState({play:!1,pause:!0}),t.audio.pause()},t.state={play:!1,pause:!0},t.audio=new Audio(E.a),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.play},"Play"),l.a.createElement("button",{onClick:this.pause},"Pause"))}}]),a}(l.a.Component),f=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(m.a)(this,Object(p.a)(a).call(this))).state={firstName:"",lastName:"",position:"",mobile:"",placeLiving:"",email:"",age:null,gender:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"firstName",placeholder:"firstName",onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"lastName",placeholder:"lastName",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"position",placeholder:"position",onChange:this.handleChange}),l.a.createElement("hr",null),l.a.createElement("input",{type:"text",name:"mobile",onChange:this.handleChange,placeholder:"Phone"}),l.a.createElement("input",{type:"text",name:"placeLiving",onChange:this.handleChange,placeholder:"country,city"}),l.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange,placeholder:"email"}),l.a.createElement("input",{type:"number",name:"age",placeholder:"age",onChange:this.handleChange}),l.a.createElement("hr",null),l.a.createElement("input",{type:"radio",name:"gender",value:"Male",onChange:this.handleChange})," Male",l.a.createElement("input",{type:"radio",name:"gender",value:"Famale",onChange:this.handleChange})," Famale ",l.a.createElement("hr",null)),l.a.createElement(d,{firstName:this.state.firstName,lastName:this.state.lastName,position:this.state.position,mobile:this.state.mobile,placeLiving:this.state.placeLiving,email:this.state.email})),l.a.createElement(y,null))}}]),a}(l.a.Component);t(17);c.a.render(l.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.938b221a.chunk.js.map