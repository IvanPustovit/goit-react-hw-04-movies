(this.webpackJsonph4=this.webpackJsonph4||[]).push([[6],{104:function(e,t,n){"use strict";n.r(t);var a=n(57),c=n(0),r=n.n(c),o=n(54),u=n(9),i=n(6),l=n(7),s={color:"brown"},m=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,101))})),f=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,102))}));t.default=function(e){var t=Object(c.useState)({}),n=Object(a.a)(t,2),p=n[0],h=n[1],d=Object(c.useState)(""),v=Object(a.a)(d,2),E=v[0],b=v[1],g=e.match.params.movieId;Object(c.useEffect)((function(){Object(o.c)(g).then((function(e){h(e)})).catch((function(e){return b(e)}))}),[g]);return r.a.createElement("div",null,E&&r.a.createElement(r.a.Fragment,null,"Something went wrong"),r.a.createElement("button",{onClick:function(){var t=e.location.state;t?e.history.push(t.from):e.history.push({pathname:l.a.HOME,search:""})}},"Go back"),r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(p.poster_path),alt:p.title}),r.a.createElement("h2",null,p.title),r.a.createElement("p",null,"User score: ",p.vote_average),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,p.overview),r.a.createElement("h3",null,"Genres"),r.a.createElement("p",null,p.status)),r.a.createElement("div",null,r.a.createElement("p",null,"Additional information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.c,{to:{pathname:"/movies/".concat(g,"/cast"),state:{from:e.location.state.from}},exact:!0,activeStyle:s},"Cast")),r.a.createElement("li",null,r.a.createElement(u.c,{to:{pathname:"/movies/".concat(g,"/reviews"),state:{from:e.location.state.from}},activeStyle:s},"Reviews")))),r.a.createElement(c.Suspense,{fallback:r.a.createElement("p",null,"...Loading")},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"".concat(e.match.path).concat(l.a.MOVIE_CAST),component:m}),r.a.createElement(i.a,{path:"".concat(e.match.path).concat(l.a.MOVIE_REVIEWS),component:f}))))}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return p}));var a=n(58),c=n.n(a),r=n(59),o=n(55),u=n.n(o),i=n(56),l=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/trending/movie/week?api_key=".concat(i.a)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){return u.a.get("/movie/".concat(e,"?api_key=").concat(i.a)).then((function(e){return e.data}))},m=function(e){return u.a.get("/movie/".concat(e,"/credits?api_key=").concat(i.a)).then((function(e){return e.data}))},f=function(e){return u.a.get("/movie/".concat(e,"/reviews?api_key=").concat(i.a)).then((function(e){return e.data}))},p=function(e){return u.a.get("/search/movie?api_key=".concat(i.a,"&query=").concat(e)).then((function(e){return e.data}))}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=n(55),c="d9f8ae7b9574459eeae778ce17dfe5fd";n.n(a).a.defaults.baseURL="https://api.themoviedb.org/3";var r="https://image.tmdb.org/t/p/w500/"}}]);
//# sourceMappingURL=6.72fc0557.chunk.js.map