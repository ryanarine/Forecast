(window.webpackJsonpforecast=window.webpackJsonpforecast||[]).push([[0],{20:function(t,e,a){t.exports=a.p+"static/media/Rainy.2f78334f.png"},21:function(t,e,a){t.exports=a.p+"static/media/Snowy.cad3feb8.png"},22:function(t,e,a){t.exports=a.p+"static/media/cloudy.a4699f94.jpg"},23:function(t,e,a){t.exports=a.p+"static/media/Clear.122dd7e9.jpeg"},24:function(t,e,a){t.exports=a.p+"static/media/Thunderstorm.45c32976.jpg"},25:function(t,e,a){t.exports=a.p+"static/media/Drizzle.eada9e67.jpg"},26:function(t,e,a){t.exports=a.p+"static/media/Fog.79022001.png"},28:function(t,e,a){t.exports=a(57)},34:function(t,e,a){},35:function(t,e,a){},57:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),s=a(7),c=a.n(s),u=a(19),l=a(8),d=a(2),h=a(3),m=a(5),p=a(4),f=a(1),b=a(6),y=a(20),v=a.n(y),g=a(21),E=a.n(g),w=a(22),k=a.n(w),x=a(23),C=a.n(x),O=a(24),j=a.n(O),S=a(25),M=a.n(S),N=a(26),F=a.n(N);a(34);var A=function(t){return"Clear"===t?C.a:"Clouds"===t?k.a:"Rain"===t?v.a:"Snow"===t?E.a:"Thunderstorm"===t?j.a:"Drizzle"===t?M.a:F.a};var D=function(t){return r.a.createElement("div",{className:"weatherCard",style:{backgroundImage:"url("+A(t.condition)+")"}},r.a.createElement("h2",{className:"mainh2"},t.day),r.a.createElement("h2",{className:"mainh2"},t.condition),r.a.createElement("h2",{className:"highh2"},"High: "+t.high+"\xb0C"),r.a.createElement("h2",{className:"lowh2"},"Low: "+t.low+"\xb0C"))};var P=function(t){var e={backgroundColor:"mediumaquamarine",backgroundImage:"url("+A(t.mainCondition)+")",backgroundSize:"cover",borderRadius:"4%"},a=["12 AM","3 AM","6 AM","9 AM","12 PM","3 PM","6 PM","9 PM"],n=[0,1,2,3,4,5,6,7].map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,a[e]),r.a.createElement("td",null,t.values[t.start+e]),r.a.createElement("td",null,t.conditions[t.start+e]),r.a.createElement("td",null,t.descriptions[t.start+e]))});return r.a.createElement("table",{align:"center",style:e},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"4"},t.day)),r.a.createElement("tr",null,r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Temperature"),r.a.createElement("th",null,"Condition"),r.a.createElement("th",null,"Description")),n))},I=(a(35),a(27)),T=a.n(I),z=43.59,B=-79.7,R=8,_=z,K=B,H=R,L=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(m.a)(this,Object(p.a)(e).call(this))).state={lat:z,lng:B},t.handleClick=t.handleClick.bind(Object(f.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(f.a)(t)),t}return Object(b.a)(e,t),Object(h.a)(e,[{key:"handleClick",value:function(t){this.setState({lat:t.lat,lng:t.lng})}},{key:"handleSubmit",value:function(){this.props.submit(this.state.lat,this.state.lng)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{id:"mapContainer"},r.a.createElement("label",null,"Or click on the map to see the forecast there")," ",r.a.createElement("br",null),r.a.createElement("label",null,"Latitude: ",this.state.lat," Longitude: ",this.state.lng),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit Coordinates",onClick:this.handleSubmit}),r.a.createElement(T.a,{bootstrapURLKeys:{key:"AIzaSyA5XxXKw44uRve7wAs046c_jGmKNhK6B1Y"},defaultCenter:{lat:z,lng:B},defaultZoom:R,onClick:function(e){return t.setState({lat:e.lat,lng:e.lng})},onChange:function(t){_=t.center.lat,K=t.center.lng,H=t.zoom}}))}},{key:"componentWillUnmount",value:function(){z=_,B=K,R=H}}]),e}(n.Component),V=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function W(t){var e=t.city.name;return e?e+"'s Forecast":"Forecast of Unknown City"}function U(t){for(var e=[],a=0;a<40;a+=8)e.push(V[(new Date(t.list[a].dt_txt.slice(0,10)).getDay()+1)%7]);return e}function X(t,e){for(var a=[],n=[],r=[1,1,2,3,3,3,2,1],i=0;i<5;i++){n={maxValue:0,maxCondition:"N/A"};for(var o=8*i;o<8*(i+1);o++){var s=t[o];"N/A"!==s&&(n[s]=n[s]+r[o%8]||r[o%8],n[s]>n.maxValue&&(n.maxValue=n[s],n.maxCondition=s))}a.push(n.maxCondition)}return a}function q(t,e){for(var a=[],n=[],r=0;r<e.length-1;r++){for(var i=0,o=Number.MAX_SAFE_INTEGER,s=e[r],c=e[r+1],u=s;u<c;u++)i=Math.max(i,t.list[u].main.temp_max),o=Math.min(o,t.list[u].main.temp_min);n.push((i-273.15).toFixed(2)),a.push((o-273.15).toFixed(2))}return{highs:n,lows:a}}function G(t){var e,a=[],n=(e=t[0],(24-new Date(e.dt_txt).getHours())/3);a.push(0);for(var r=n;r<=40;r+=8)a.push(r);return a}function J(t,e){for(var a=e[1],n=[],r=[],i=[],o=0;o<8-a;o++)n.push("N/A"),r.push("N/A"),i.push("N/A");for(var s=0;s<32+a;s++)n.push((t[s].main.temp-273.15).toFixed(2)+"\xb0C"),r.push(t[s].weather[0].main),i.push(t[s].weather[0].description);return{temps:n,conds:r,descs:i}}function Y(){return(Y=Object(l.a)(c.a.mark(function t(e){var a,n,r,i,o,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if(429!==(a=t.sent).status){t.next=5;break}return t.abrupt("return",-1);case 5:return t.next=7,a.json();case 7:return n=t.sent,r=G(n.list),(i={}).header=W(n),i.days=U(n),o=q(n,r),s=J(n.list,r),i.conditions=X(s.conds),i.highs=o.highs,i.lows=o.lows,i.hourly=s.temps,i.hourlyConditions=s.conds,i.descriptions=s.descs,t.next=22,i;case 22:return t.abrupt("return",t.sent);case 23:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Z=function(t){return Y.apply(this,arguments)},Q=["toronto","brampton","mississauga","richmondhill","kitchener","waterloo","markham","ottawa","hamilton","vaughan","oshawa"],$=["Toronto","Brampton","Mississauga","Richmond Hill","Kitchener","Waterloo","Markham","Ottawa","Hamilton","Vaughan","Oshawa"],tt=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this))).state={city:"toronto",name:t.name},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"handleChange",value:function(t){t.target.value!==this.state.city&&this.setState({city:t.target.value})}},{key:"render",value:function(){var t=Q.map(function(t,e){return r.a.createElement("option",{key:e,value:t},$[e])});return r.a.createElement("select",{value:this.state.city,onChange:this.handleChange,name:this.state.name},t)}}]),e}(n.Component);function et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function at(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?et(a,!0).forEach(function(e){Object(u.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):et(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var nt="54a84a123d401ac68736a6bca89f4301",rt={toronto:"6167865",brampton:"5907364",mississauga:"6075357",richmondhill:"6122091",kitchener:"5992996",waterloo:"6176823",markham:"6066513",ottawa:"6094817",hamilton:"5969782",vaughan:"6173577",oshawa:"6094578"},it="https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid="+nt,ot={minWidth:"500px + 3vh"};function st(t){return t!==it&&(it=t,!0)}var ct=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).state={days:0,highs:0,lows:0,conditions:0,header:"Toronto's Forecast",status:200,hourly:[],hourlyConditions:[],descriptions:[],dayIndex:-1},a.handleMapSubmit=a.handleMapSubmit.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.dayFocus=a.dayFocus.bind(Object(f.a)(a)),a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"handleMapSubmit",value:function(t,e){(function(t,e){return st("https://api.openweathermap.org/data/2.5/forecast?lat="+t+"&lon="+e+"&appid="+nt)})(t,e)&&this.componentDidMount()}},{key:"handleSubmit",value:function(t){var e;t.preventDefault(),e=t.target.elements.box.value,st("https://api.openweathermap.org/data/2.5/forecast?id="+rt[e]+"&appid="+nt)&&this.componentDidMount()}},{key:"dayFocus",value:function(t){this.setState({dayIndex:t})}},{key:"render",value:function(){var t=this;if(0===this.state.days)return r.a.createElement("h1",null,"The Forecast is loading, please wait");if(429===this.state.status)return r.a.createElement("h1",null,"Too many forecast requests have been made. Please come back in an hour.");if(-1!==this.state.dayIndex)return r.a.createElement("div",{style:ot},r.a.createElement(P,{day:this.state.days[this.state.dayIndex],values:this.state.hourly,start:8*this.state.dayIndex,conditions:this.state.hourlyConditions,descriptions:this.state.descriptions,mainCondition:this.state.conditions[this.state.dayIndex]}),r.a.createElement("button",{id:"prevbtn",className:"cardButton",onClick:function(){return t.dayFocus((t.state.dayIndex+4)%5)}},"Previous"),r.a.createElement("button",{id:"backbtn",className:"cardButton",onClick:function(){return t.dayFocus(-1)}},"Back"),r.a.createElement("button",{id:"nextbtn",className:"cardButton",onClick:function(){return t.dayFocus((t.state.dayIndex+1)%5)}},"Next"));var e=[0,1,2,3,4].map(function(e){return r.a.createElement("div",{onClick:function(){return t.dayFocus(e)},className:"Card",key:e},r.a.createElement(D,{day:t.state.days[e],high:t.state.highs[e],low:t.state.lows[e],condition:t.state.conditions[e]}))});return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.header),r.a.createElement("div",{id:"cardContainer"},e),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Choose a city to display its forecast ",r.a.createElement("br",null),r.a.createElement(tt,{name:"box"})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(L,{submit:this.handleMapSubmit}))}},{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(it);case 2:-1===(e=t.sent)?this.setState({status:429}):this.setState(at({},e));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(r.a.Component);o.a.render(r.a.createElement(ct,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.cea93d5c.chunk.js.map