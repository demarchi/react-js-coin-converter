(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(14),n(15),n(4)),l=n(5),s=n(7),u=n(6),v=n(1),m=n(8),h=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={coinA_value:"",coinB_value:0},n.converter=n.converter.bind(Object(v.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"converter",value:function(){var e=this,t="".concat(this.props.coinA,"_").concat(this.props.coinB),n="https://free.currconv.com/api/v7/convert?q=".concat(t,"&compact=y&apiKey=9bc4c3198176577a4d65");fetch(n).then((function(e){return e.json()})).then((function(n){var a=n[t].val,c=(parseFloat(e.state.coinA_value)*a).toFixed(2);e.setState({coinB_value:c})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"converter"},c.a.createElement("h2",null,this.props.coinA," to ",this.props.coinB),c.a.createElement("input",{type:"text",onChange:function(t){e.setState({coinA_value:t.target.value})}}),c.a.createElement("input",{type:"button",value:"Converter",onClick:this.converter}),c.a.createElement("h2",null,this.state.coinB_value))}}]),t}(a.Component));var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Coin Converter"),c.a.createElement("div",{className:"row"},c.a.createElement(h,{coinA:"GBP",coinB:"BRL"}),c.a.createElement(h,{coinA:"BRL",coinB:"GBP"})),c.a.createElement("div",{className:"row"},c.a.createElement(h,{coinA:"USD",coinB:"BRL"}),c.a.createElement(h,{coinA:"BRL",coinB:"USD"})),c.a.createElement("div",{className:"row"},c.a.createElement(h,{coinA:"EUR",coinB:"BRL"}),c.a.createElement(h,{coinA:"BRL",coinB:"EUR"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.56c242d6.chunk.js.map