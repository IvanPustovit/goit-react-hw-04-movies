(this.webpackJsonph4=this.webpackJsonph4||[]).push([[9],{102:function(e,t,n){"use strict";n.r(t);var a=n(57),c=n(0),r=n.n(c),u=n(54);t.default=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),l=n[0],i=n[1],o=Object(c.useState)(""),s=Object(a.a)(o,2),h=s[0],m=s[1],f=e.match.params.movieId;return Object(c.useEffect)((function(){Object(u.e)(f).then((function(e){return i(e.results)})).catch((function(e){return m(e)}))}),[f]),r.a.createElement("div",null,h&&r.a.createElement(r.a.Fragment,null,"Something went wrong"),l.map((function(e){var t=e.id,n=e.author,a=e.content;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,n),r.a.createElement("p",null,a))})))}}}]);
//# sourceMappingURL=9.44984fbe.chunk.js.map