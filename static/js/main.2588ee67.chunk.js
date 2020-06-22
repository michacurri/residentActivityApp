(this["webpackJsonpexcursions-app"]=this["webpackJsonpexcursions-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=(a(19),a(1)),u=a(2),s=a(4),o=a(3),m=(a(20),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AdminInputSpotsAvail"})}}]),a}(n.Component)),v=a(13),d=a(7),h=a.n(d);a(22);h.a.initializeApp({apiKey:"AIzaSyDmWwuvLnKOdbyyMY71auoY-uhRkvQuK_E",authDomain:"excursions-userdata.firebaseapp.com",databaseURL:"https://excursions-userdata.firebaseio.com",projectId:"excursions-userdata",storageBucket:"excursions-userdata.appspot.com",messagingSenderId:"955447819901",appId:"1:955447819901:web:ef6954f4547765e046fb14"});var p=h.a,b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),p.database().ref().push(e.state.activities),e.setState({activityName:"",activityDate:{},activitySpotsAvail:0}),console.log(e.state)},e.state={activities:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref().on("value",(function(t){var a=[],n=t.val().activities;for(var r in console.log(n),n)a.push({activity:n[r],id:r}),console.log(n[r]),console.log(r);console.log(e.state.newActivities),e.setState({activities:a})}))}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"activityName"},"Activity Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.activityName,onChange:this.handleChange,name:"activityName",id:"activityName"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"activityDate"},"Date of Activity"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",value:this.state.date,onChange:this.handleChange,name:"activityDate",id:"activityDate"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"activitySpots"},"Space Available"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:this.state.activitySpotsAvail,onChange:this.handleChange,name:"activitySpotsAvail",id:"activitySpotsAvail",placeholder:"#"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Add Activity to the Calendar"))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"adminCreateActivity"},r.a.createElement(b,null),r.a.createElement(m,null))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"inputActivityBlock"},r.a.createElement("h1",null,"activity maker"),r.a.createElement("div",{className:"activityBackground"},r.a.createElement(E,null)))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={residents:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref().on("value",(function(t){var a=[],n=t.val().userData;for(var r in n)a.push({resident:n[r],id:r});e.setState({residents:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"residentData"},r.a.createElement("table",null,r.a.createElement("caption",null,r.a.createElement("h2",null,"Resident Data")),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Suite"),r.a.createElement("th",null,"First"),r.a.createElement("th",null,"Last"),r.a.createElement("th",null,"Caregiver"),r.a.createElement("th",null,"Assistance"),r.a.createElement("th",null,"Meal"),r.a.createElement("th",null,"email")))),this.state.residents.map((function(e){var t=e.id,a=e.resident;return r.a.createElement("table",{key:t},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("td",{name:"suite"},a.suite),r.a.createElement("td",{name:"first"},a.first),r.a.createElement("td",{name:"last"},a.last),r.a.createElement("td",{name:"hasCaregiver"},a.hasCaregiver),r.a.createElement("td",{name:"requiresAssist"},a.requiresAssist),r.a.createElement("td",{name:"mealPreference"},a.mealPreference),r.a.createElement("td",{name:"email"},a.email))))})),";")}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"adminPage"},r.a.createElement(f,null),r.a.createElement(y,null))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(O,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2588ee67.chunk.js.map