require("app",function(r,n){function i(){return c(s,arguments)}function e(r){var n,i,e=v.div(),t=!0;for(n in r)i=r[n],t?t=!1:v.add(e,v.tag("span",[", "])),v.add(e,v.tag("span",[n]),v.tag("span","grey",[" ("+i+")"]));return e}function t(r){var n,i;for(n in r)i=r[n],g.scores[n]=(g.scores[n]||0)+i}function d(r){return r=""+r,r.substr(0,2)+" / "+r.substr(2,2)+" / "+r.substr(4)}function a(r){var n,i=[];for(n in r)i.push(n);return i}function o(r,n,i){var e=null,t=9999999999;return r.forEach(function(r){if(!u(a(r),n,i)){var d=f(r);d<t&&(t=d,e=r)}}),e}function u(r,n,i){for(var e,t,d,a=0;a<r.length;a++)if(e=r[a],t=g.restrictions[e],"undefined"!=typeof t&&(d=t[n],"undefined"!=typeof d&&i!=d))return!0;return!1}function f(r){var n,i=9999999999999;for(n in r)i=Math.min(i,g.scores[n]||0);return i}var s={en:{},fr:{}},c=require("$").intl,v=require("dom"),g=require("config");r.start=function(){var r=document.body,n=v.div("table",[v.div("header",[v.div(["Date"]),v.div(["Aller"]),v.div(["Retour"])]),v.div([v.div(["16 / 09 / 2016"]),v.div(["Valentin"]),v.div(["Hortense"])])]);v.add(r,n),g.calendar.forEach(function(r){var i,u,f=v.div([v.div([d(r)])]);v.add(n,f),i=o(g.go,r,"G"),u=a(i),v.add(f,e(i)),t(i),i=o(g.back,r,"B"),u=a(i),v.add(f,e(i)),t(i),v.add(f,v.div("debug",[JSON.stringify(g.scores)]))})},n.exports._=i});
//# sourceMappingURL=app.js.map