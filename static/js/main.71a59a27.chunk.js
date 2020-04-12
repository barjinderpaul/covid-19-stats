(this["webpackJsonpcovid-19-stats"]=this["webpackJsonpcovid-19-stats"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(76),c=a.n(o),i=a(6),s=a.n(i),l=a(10),u=a(77),d=a(78),m=a(89),p=a(88),f=a(230),v=a(231),h=a(235),b=a(232),g=a(233),E=a(13),y=a.n(E),w=a(32),x=a.n(w),C=a(33),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,o=t.deaths,c=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:_()(y.a.card,y.a.infected)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:1,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:1,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of recovered cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:o.value,duration:1,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):r.a.createElement(f.a,{color:"secondary"})},j=a(31),D=a(34),k=a.n(D),S="https://covid19.mathdro.id/api",N=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,o,c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(S,"/countries/").concat(t):S,e.prev=1,e.next=4,k.a.get(a);case 4:return n=e.sent,r=n.data,o=r.confirmed,c=r.recovered,i=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:o,recovered:c,deaths:i,lastUpdate:l});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=a(45),z=a(84),B=a.n(z),P=function(e){var t=e.data,a=t.confirmed,o=t.recovered,c=t.deaths,i=e.country,u=Object(n.useState)({}),d=Object(j.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),console.log("daily data: "),console.log(m);var f=m.length?r.a.createElement(M.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(M.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!0},title:{display:!0,text:"".concat(i)}}}):null;return r.a.createElement("div",{className:B.a.container},i?v:f)},U=a(236),V=a(234),A=a(85),F=a.n(A),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),o=Object(j.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,W();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log("fetchedCountries: "),console.log(c),r.a.createElement(U.a,{className:F.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e,e.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),";"))},J=a(46),L=a.n(J),Q=a(86),R=a.n(Q),q=(a(211),a(87)),Y=a.n(q),Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:"",screenWidth:window.innerWidth,screenOrientation:null},e.isPortraitMode=function(){return"portrait"===e.state.screenOrientation},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(n),t.next=4,N(n);case 4:r=t.sent,e.setState({data:r,country:n});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,console.log(t),this.setState({data:t}),window.addEventListener("resize",(function(){return a.updateWindowDimensions()}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({screenWidth:window.innerWidth}),window.matchMedia("(orientation: portrait)").matches&&(console.log("orientation: portrait"),this.setState({screenOrientation:"portrait"})),window.matchMedia("(orientation: landscape)").matches&&(console.log("orientation: landscape"),this.setState({screenOrientation:"landscape"},console.log("orientation: landscape")))}},{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"overline",display:"block",gutterBottom:!0},r.a.createElement(Y.a,{fontSize:"small",color:"error"})," For better experience, please use landscape mode.")," "),t=this.state,a=t.data,n=t.country,o=t.screenWidth;return r.a.createElement("div",{className:L.a.container},r.a.createElement("img",{className:L.a.image,src:R.a,alt:"COVID-19"}),r.a.createElement(O,{data:a}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),o<=776&&this.isPortraitMode()?e:null,r.a.createElement(P,{data:a,country:n}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(Z,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},84:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},85:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},86:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},91:function(e,t,a){e.exports=a(214)}},[[91,1,2]]]);
//# sourceMappingURL=main.71a59a27.chunk.js.map