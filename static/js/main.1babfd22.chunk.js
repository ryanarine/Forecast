(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/Rainy.2f78334f.PNG"},function(t,e,a){t.exports=a.p+"static/media/Snowy.cad3feb8.PNG"},function(t,e,a){t.exports=a.p+"static/media/cloudy.2fb2183f.jpg"},function(t,e,a){t.exports=a.p+"static/media/Clear.122dd7e9.jpeg"},function(t,e,a){t.exports=a.p+"static/media/Thunderstorm.45c32976.jpg"},function(t,e,a){t.exports=a.p+"static/media/Drizzle.eada9e67.jpg"},function(t,e,a){t.exports=a.p+"static/media/Fog.1c9f4f24.png"},function(t,e,a){t.exports=a(25)},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=a(4),c=a(5),l=a(7),h=a(6),u=a(2),d=a(8),p=a(1),m=a.n(p),f=a(3),g=a(11),w=a.n(g),y=a(12),v=a.n(y),x=a(13),b=a.n(x),E=a(14),k=a.n(E),j=a(15),C=a.n(j),O=a(16),S=a.n(O),F=a(17),M=a.n(F),z="1px 1px #000000, -1px 1px #000000, 1px -1px #000000, -1px -1px #000000",A={fontFamily:"Arial",color:"white",textShadow:z,fontWeight:300,margin:"10px",fontSize:"calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)))"},D={fontFamily:"Arial",color:"orange",textShadow:z,fontWeight:200,fontSize:"calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)))"},T={fontFamily:"Arial",color:"skyblue",textShadow:z,fontWeight:200,fontSize:"calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)))"};var H=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).Redirect=function(){window.location=window.location+"/"+a.state.name},a.state={name:"",high:0,low:0,cond:"",bg:""},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.Redirect,style:this.state.bg},r.a.createElement("h2",{style:A},this.state.name),r.a.createElement("h2",{style:A},this.state.cond),r.a.createElement("h2",{style:D},this.state.high),r.a.createElement("h2",{style:T},this.state.low))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var a,n="Clear"===(a=t.condition)?k.a:"Clouds"===a?b.a:"Rain"===a?w.a:"Snow"===a?v.a:"Thunderstorm"===a?C.a:"Drizzle"===a?S.a:M.a;return{name:t.day,high:"High: "+t.high+"\xb0C",low:"Low: "+t.low+"\xb0C",cond:t.condition,bg:{backgroundSize:"cover",backgroundImage:"url("+n+")",backgroundColor:"#F5F6FA",width:"calc(100% - 12px)",float:"left",height:"35vw",textAlign:"center",border:"4px solid black",marginLeft:"6px"}}}}]),e}(r.a.Component),R=(r.a.Component,"54a84a123d401ac68736a6bca89f4301"),W={6167865:"Toronto",5907364:"Brampton",6075357:"Mississauga",6122091:"Richmond Hill",5992996:"Kitchener",6176823:"Waterloo",6066513:"Markham",6094817:"Ottawa",5969782:"Hamilton",6173577:"Vaughan",6094578:"Oshawa"},_={toronto:"6167865",brampton:"5907364",mississauga:"6075357",richmondhill:"6122091",kitchener:"5992996",waterloo:"6176823",markham:"6066513",ottawa:"6094817",hamilton:"5969782",vaughan:"6173577",oshawa:"6094578"},N="https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid="+R,I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],B={width:"20%",float:"left"},G={minWidth:"500px"};var P=Object(f.a)(m.a.mark(function t(){var e,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(N);case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",Object(f.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})));case 7:case"end":return t.stop()}},t)}))();function J(){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P;case 2:return e=t.sent,t.next=5,e();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function L(t){for(var e=[],a=0;a<40;a+=8)e.push(I[(new Date(t.list[a].dt_txt.slice(0,10)).getDay()+1)%7]);return e}function V(t){for(var e=[],a=0;a<40;a+=8)e.push(t.list[a].weather[0].main);return e}function X(t,e){for(var a=[],n=[],r=0;r<e.length-1;r++){for(var i=0,o=Number.MAX_SAFE_INTEGER,s=e[r],c=e[r+1],l=s;l<c;l++)i=Math.max(i,t.list[l].main.temp_max),o=Math.min(o,t.list[l].main.temp_min);n.push((i-273.15).toFixed(2)),a.push((o-273.15).toFixed(2))}return{highs:n,lows:a}}function q(t){var e,a=[],n=(e=t[0],(24-new Date(e.dt_txt).getHours())/3);a.push(0);for(var r=n;r<=40;r+=8)a.push(r);return a}var Q={getHourly:function(){var t=Object(f.a)(m.a.mark(function t(e){var a,n,r,i,o,s,c,l,h;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,J();case 3:if(n=t.sent,console.log(n),r=n.list,i=q(r),-1!==(o=L(n).findIndex(function(t){return t===e}))){t.next=10;break}return t.abrupt("return",null);case 10:if(s=i[o],c=i[o+1],0===s)for(l=0;l<8-c;l++)a.push("N/A");for(h=s;h<c;h++)a.push((r[h].main.temp-273.15).toFixed(2)+"\xb0C");return t.abrupt("return",a);case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),getEverything:function(){var t=Object(f.a)(m.a.mark(function t(){var e,a,n,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:return e=t.sent,a=q(e.list),(n={}).days=L(e),n.conditions=V(e),r=X(e,a),n.highs=r.highs,n.lows=r.lows,t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},U=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={days:0,highs:0,lows:0,conds:0,formCity:"toronto",city:"toronto",code:"6167865"},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.setState({formCity:t.target.value})}},{key:"handleSubmit",value:function(t){this.setState({city:this.state.formCity,code:_[this.state.formCity]}),console.log(this.state),t.preventDefault()}},{key:"render",value:function(){return 0===this.state.days?r.a.createElement("h1",null,"The Forecast is loading, please wait"):r.a.createElement("div",{style:G},r.a.createElement("h1",null,W[this.state.code]+"'s Forecast"),r.a.createElement("div",null,r.a.createElement("div",{style:B}," ",r.a.createElement(H,{day:this.state.days[0],high:this.state.highs[0],low:this.state.lows[0],condition:this.state.conds[0]})," "),r.a.createElement("div",{style:B}," ",r.a.createElement(H,{day:this.state.days[1],high:this.state.highs[1],low:this.state.lows[1],condition:this.state.conds[1]})," "),r.a.createElement("div",{style:B}," ",r.a.createElement(H,{day:this.state.days[2],high:this.state.highs[2],low:this.state.lows[2],condition:this.state.conds[2]})," "),r.a.createElement("div",{style:B}," ",r.a.createElement(H,{day:this.state.days[3],high:this.state.highs[3],low:this.state.lows[3],condition:this.state.conds[3]})," "),r.a.createElement("div",{style:B}," ",r.a.createElement(H,{day:this.state.days[4],high:this.state.highs[4],low:this.state.lows[4],condition:this.state.conds[4]})," ")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Choose a city to display its forecast ",r.a.createElement("br",null),r.a.createElement("select",{value:this.state.formCity,onChange:this.handleChange},r.a.createElement("option",{value:"toronto"},"Toronto"),r.a.createElement("option",{value:"brampton"},"Brampton"),r.a.createElement("option",{value:"mississauga"},"Mississauga"),r.a.createElement("option",{value:"richmondhill"},"Richmond Hill"),r.a.createElement("option",{value:"kitchener"},"Kitchener"),r.a.createElement("option",{value:"waterloo"},"Waterloo"),r.a.createElement("option",{value:"markham"},"Markham"),r.a.createElement("option",{value:"ottawa"},"Ottawa"),r.a.createElement("option",{value:"hamilton"},"Hamilton"),r.a.createElement("option",{value:"vaughan"},"Vaughan"),r.a.createElement("option",{value:"oshawa"},"Oshawa"))),r.a.createElement("input",{type:"submit",value:"Submit"})))}},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.state.city,N="https://api.openweathermap.org/data/2.5/forecast?id="+_[a]+"&appid="+R,t.next=3,Q.getEverything();case 3:e=t.sent,this.setState({days:e.days,highs:e.highs,lows:e.lows,conds:e.conditions});case 5:case"end":return t.stop()}var a},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(r.a.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1babfd22.chunk.js.map