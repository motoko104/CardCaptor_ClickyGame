(this.webpackJsonpcardcaptor_clickygame=this.webpackJsonpcardcaptor_clickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/ccs/images/5/55/ClowWatery.jpg/revision/latest/scale-to-width-down/214?cb=20181210150329","name":"The Watery","clicked":false},{"id":2,"image":"https://vignette.wikia.nocookie.net/ccs/images/e/e8/ClowWood.jpg/revision/latest/scale-to-width-down/214?cb=20181209185223","name":"The Wood","clicked":false},{"id":3,"image":"https://vignette.wikia.nocookie.net/ccs/images/5/58/ClowStorm.jpg/revision/latest/scale-to-width-down/214?cb=20181209174634","name":"The Storm","clicked":false},{"id":4,"image":"https://vignette.wikia.nocookie.net/ccs/images/5/56/ClowDark.jpg/revision/latest/scale-to-width-down/214?cb=20181209145715","name":"The Dark","clicked":false},{"id":5,"image":"https://vignette.wikia.nocookie.net/ccs/images/7/72/ClowEarthy.jpg/revision/latest/scale-to-width-down/214?cb=20181209190456","name":"The Earthy","clicked":false},{"id":6,"image":"https://vignette.wikia.nocookie.net/ccs/images/8/88/ClowDream.jpg/revision/latest/scale-to-width-down/214?cb=20181209192506","name":"The Dream","clicked":false},{"id":7,"image":"https://vignette.wikia.nocookie.net/ccs/images/1/12/ClowFirey.jpg/revision/latest/scale-to-width-down/214?cb=20181210180715","name":"The Firey","clicked":false},{"id":8,"image":"https://vignette.wikia.nocookie.net/ccs/images/0/00/ClowFreeze.jpg/revision/latest/scale-to-width-down/214?cb=20181211074430","name":"The Freeze","clicked":false},{"id":9,"image":"https://vignette.wikia.nocookie.net/ccs/images/3/3c/ClowFly.jpg/revision/latest/scale-to-width-down/214?cb=20181209182009","name":"The Fly","clicked":false},{"id":10,"image":"https://vignette.wikia.nocookie.net/ccs/images/6/66/ClowLight.jpg/revision/latest/scale-to-width-down/214?cb=20181209150109","name":"The Light","clicked":false},{"id":11,"image":"https://vignette.wikia.nocookie.net/ccs/images/7/7c/ClowShot.jpg/revision/latest/scale-to-width-down/214?cb=20181209150506","name":"The Shot","clicked":false},{"id":12,"image":"https://vignette.wikia.nocookie.net/ccs/images/e/e8/ClowSleep.jpg/revision/latest/scale-to-width-down/214?cb=20181210164525","name":"The Sleep","clicked":false}]')},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),s=a.n(n),o=(a(14),a(4)),l=a(5),r=a(7),d=a(6),m=a(8),h=(a(15),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClicked(e.id)}},c.a.createElement("div",{className:"image-spot"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(a(16),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"titleSpace"},c.a.createElement("a",{href:"/clicky-game/"},e.title)),c.a.createElement("li",{id:"msg"},e.message),c.a.createElement("li",{id:"scr"},"\u3042\u306a\u305f\u306e\u30b9\u30b3\u30a2: ",e.score),c.a.createElement("li",{id:"top-scr"},"\u30c8\u30c3\u30d7\u30b9\u30b3\u30a2: ",e.topScore)))}),k=(a(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),u=(a(18),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),p=(a(19),function(e){return c.a.createElement("div",{className:"cardArea"},e.children)}),w=a(1);a(20);var f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={charas:w,score:0,topScore:0,message:"",clicked:[]},a.handleClicked=function(e){-1===a.state.clicked.indexOf(e)?(a.setState({message:""}),a.handleIncrease(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrease=function(){var e=a.state.score+1;a.setState({score:e}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.setState({message:"\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01"}),a.shuffle()},a.handleReset=function(){a.setState({score:0,topScore:a.state.topScore,message:"\u3082\u3046\u4e00\u540c\uff01",clicked:[]}),a.shuffle()},a.shuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}(w);a.setState({charas:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(k,null,c.a.createElement(g,{title:"\u30af\u30ed\u30a6\u30ab\u30fc\u30c9\u306e\u30b7\u30e3\u30c3\u30d5\u30eb!!",score:this.state.score,topScore:this.state.topScore,message:this.state.message}),c.a.createElement(u,null,"\u306f\u3058\u3081\u307e\u3057\u3087\u3046!\u3000\u30ab\u30fc\u30c9\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u304c\u3001\u540c\u3058\u30ab\u30fc\u30c9\u3092\u4e8c\u56de\u30af\u30ea\u30c3\u30af\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",c.a.createElement("br",null),c.a.createElement("small",null,"Lets begin! Click on a card, but don't click on the same card twice.")),c.a.createElement(p,null,this.state.charas.map((function(t){return c.a.createElement(h,{key:t.id,handleClicked:e.handleClicked,handleIncrease:e.handleIncrease,handleReset:e.handleReset,shuffle:e.shuffle,id:t.id,image:t.image})}))))}}]),t}(i.Component);s.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.68a53c00.chunk.js.map