(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/Rainy.2f78334f.PNG"},function(t,e,a){t.exports=a.p+"static/media/Snowy.cad3feb8.PNG"},function(t,e,a){t.exports=a.p+"static/media/cloudy.2fb2183f.jpg"},function(t,e,a){t.exports=a.p+"static/media/Clear.122dd7e9.jpeg"},function(t,e,a){t.exports=a.p+"static/media/Thunderstorm.45c32976.jpg"},function(t,e,a){t.exports=a.p+"static/media/Drizzle.eada9e67.jpg"},function(t,e,a){t.exports=a.p+"static/media/Fog.1c9f4f24.png"},function(t,e,a){t.exports=a(25)},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=a(4),c=a(5),l=a(7),u=a(6),h=a(2),d=a(8),p=a(1),m=a.n(p),f=a(3),g=a(11),y=a.n(g),w=a(12),v=a.n(w),b=a(13),x=a.n(b),E=a(14),j=a.n(E),k=a(15),O=a.n(k),S=a(16),C=a.n(S),F=a(17),T=a.n(F),M="1px 1px #000000, -1px 1px #000000, 1px -1px #000000, -1px -1px #000000",z={fontFamily:"Arial",color:"white",textShadow:M,fontWeight:300,margin:"10px",fontSize:"30px"},A={fontFamily:"Arial",color:"orange",textShadow:M,fontWeight:200,fontSize:"30px"},D={fontFamily:"Arial",color:"skyblue",textShadow:M,fontWeight:200,fontSize:"30px"};var H=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).Redirect=function(){window.location=window.location+"/"+a.state.name},a.state={name:"",high:0,low:0,cond:"",bg:""},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.Redirect,style:this.state.bg},r.a.createElement("h2",{style:z},this.state.name),r.a.createElement("h2",{style:z},this.state.cond),r.a.createElement("h2",{style:A},this.state.high),r.a.createElement("h2",{style:D},this.state.low))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var a,n="Clear"===(a=t.condition)?j.a:"Clouds"===a?x.a:"Rain"===a?y.a:"Snow"===a?v.a:"Thunderstorm"===a?O.a:"Drizzle"===a?C.a:T.a;return{name:t.day,high:"High: "+t.high+"\xb0C",low:"Low: "+t.low+"\xb0C",cond:t.condition,bg:{backgroundSize:"cover",backgroundImage:"url("+n+")",backgroundColor:"#F5F6FA",width:"calc(100% - 12px)",float:"left",height:"480px",textAlign:"center",border:"4px solid black",marginLeft:"6px"}}}}]),e}(r.a.Component),R=(r.a.Component,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),W={width:"20%",float:"left"},_=Object(f.a)(m.a.mark(function t(){var e,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=54a84a123d401ac68736a6bca89f4301");case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",Object(f.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})));case 7:case"end":return t.stop()}},t)}))();function N(){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_;case 2:return e=t.sent,t.next=5,e();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function B(t){for(var e=[],a=0;a<40;a+=8)e.push(R[(new Date(t.list[a].dt_txt.slice(0,10)).getDay()+1)%7]);return e}function G(t){for(var e=[],a=0;a<40;a+=8)e.push(t.list[a].weather[0].main);return e}function P(t,e){for(var a=[],n=[],r=0;r<e.length-1;r++){for(var i=0,o=Number.MAX_SAFE_INTEGER,s=e[r],c=e[r+1],l=s;l<c;l++)i=Math.max(i,t.list[l].main.temp_max),o=Math.min(o,t.list[l].main.temp_min);n.push((i-273.15).toFixed(2)),a.push((o-273.15).toFixed(2))}return{highs:n,lows:a}}function J(t){var e,a=[],n=(e=t[0],(24-new Date(e.dt_txt).getHours())/3);a.push(0);for(var r=n;r<=40;r+=8)a.push(r);return a}var K={getHourly:function(){var t=Object(f.a)(m.a.mark(function t(e){var a,n,r,i,o,s,c,l,u;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,N();case 3:if(n=t.sent,console.log(n),r=n.list,i=J(r),-1!==(o=B(n).findIndex(function(t){return t===e}))){t.next=10;break}return t.abrupt("return",null);case 10:if(s=i[o],c=i[o+1],0===s)for(l=0;l<8-c;l++)a.push("N/A");for(u=s;u<c;u++)a.push((r[u].main.temp-273.15).toFixed(2)+"\xb0C");return t.abrupt("return",a);case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),getEverything:function(){var t=Object(f.a)(m.a.mark(function t(){var e,a,n,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:return e=t.sent,console.log(e),a=J(e.list),(n={}).days=B(e),n.conditions=G(e),r=P(e,a),n.highs=r.highs,n.lows=r.lows,t.abrupt("return",n);case 12:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},L=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={days:0,highs:0,lows:0,conds:0,formCity:"Toronto",city:"Toronto"},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.setState({formCity:t.target.value})}},{key:"handleSubmit",value:function(t){this.setState({city:this.state.formCity}),console.log(this.state),t.preventDefault()}},{key:"render",value:function(){return 0===this.state.days?r.a.createElement("h1",null,"The Forecast is loading, please wait"):r.a.createElement("div",null,r.a.createElement("h1",null,this.state.city+"'s Forecast"),r.a.createElement("div",null,r.a.createElement("div",{style:W}," ",r.a.createElement(H,{day:this.state.days[0],high:this.state.highs[0],low:this.state.lows[0],condition:this.state.conds[0]})," "),r.a.createElement("div",{style:W}," ",r.a.createElement(H,{day:this.state.days[1],high:this.state.highs[1],low:this.state.lows[1],condition:this.state.conds[1]})," "),r.a.createElement("div",{style:W}," ",r.a.createElement(H,{day:this.state.days[2],high:this.state.highs[2],low:this.state.lows[2],condition:this.state.conds[2]})," "),r.a.createElement("div",{style:W}," ",r.a.createElement(H,{day:this.state.days[3],high:this.state.highs[3],low:this.state.lows[3],condition:this.state.conds[3]})," "),r.a.createElement("div",{style:W}," ",r.a.createElement(H,{day:this.state.days[4],high:this.state.highs[4],low:this.state.lows[4],condition:this.state.conds[4]})," ")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Choose a city to display its forecast ",r.a.createElement("br",null),r.a.createElement("select",{value:this.state.formCity,onChange:this.handleChange},r.a.createElement("option",{value:"Toronto"},"Toronto"),r.a.createElement("option",{value:"Brampton"},"Brampton"),r.a.createElement("option",{value:"Mississauga"},"Mississauga"),r.a.createElement("option",{value:"Richmond Hill"},"Richmond Hill"),r.a.createElement("option",{value:"Kitchener"},"Kitchener"),r.a.createElement("option",{value:"Waterloo"},"Waterloo"),r.a.createElement("option",{value:"Markham"},"Markham"),r.a.createElement("option",{value:"Ottawa"},"Ottawa"),r.a.createElement("option",{value:"Hamilton"},"Hamilton"),r.a.createElement("option",{value:"Vaughan"},"Vaughan"),r.a.createElement("option",{value:"Oshawa"},"Oshawa"))),r.a.createElement("input",{type:"submit",value:"Submit"})))}},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.getEverything();case 2:e=t.sent,this.setState({days:e.days,highs:e.highs,lows:e.lows,conds:e.conditions});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(r.a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b370aaed.chunk.js.map