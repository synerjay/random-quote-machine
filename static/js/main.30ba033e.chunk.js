(this.webpackJsonprandomquotegenerator=this.webpackJsonprandomquotegenerator||[]).push([[0],{13:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),r=s(7),o=s.n(r),u=(s(13),s(2)),a=s(3),h=s(4),l=s(0),i=function(t){var e=t.quote;return Object(l.jsxs)("p",{className:"Text",children:[Object(l.jsx)(h.a,{})," ",e]})},p=function(t){var e=t.author;return Object(l.jsxs)("p",{className:"Author",children:[" - ",e]})},j=s(6),m=s(8);function x(t){var e=t.children,s=Object(m.a)(t,["children"]);return Object(l.jsx)("a",Object(j.a)(Object(j.a)({},s),{},{className:"Link",target:"_blank",rel:"noopener noreferrer",children:e}))}var b=function(t){var e=t.quote,s=t.author,c="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent('"'.concat(e,'" - ').concat(s)),"&hashtags=quotes");return Object(l.jsx)("div",{className:"Links",children:Object(l.jsx)(x,{href:c,id:"tweet-quote",children:Object(l.jsx)(h.b,{className:"icon"})})})};var d=function(t){var e=t.onClick;return Object(l.jsxs)("button",{className:"NewQuoteButton",onClick:e,children:[" ","New Quote"," ",Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ButtonIcon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})]})},O=function(t){var e=t.changeBg,s=Object(c.useState)(""),n=Object(u.a)(s,2),r=n[0],o=n[1],h=Object(c.useState)(""),j=Object(u.a)(h,2),m=j[0],x=j[1];Object(c.useEffect)((function(){O()}),[]);var O=function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){var e=t.quotes,s=Object(a.random)(0,e.length);o(e[s].quote),x(e[s].author)})).catch((function(t){console.log(t),x("Jerome Tolentino"),o("There is something wrong with the random quote machine. Try again later!")}))};return Object(l.jsx)(c.Fragment,{children:Object(l.jsxs)("div",{className:"QuoteBox",children:[Object(l.jsx)(i,{quote:r}),Object(l.jsx)(p,{author:m}),Object(l.jsxs)("div",{className:"BottomRow",children:[Object(l.jsx)(b,{quote:r,author:m}),Object(l.jsx)(d,{onClick:function(){e(),O()}})]})]})})};var f=function(){var t=Object(c.useState)("url('https://source.unsplash.com/random')"),e=Object(u.a)(t,2),s=e[0],n=e[1],r=[["url('https://source.unsplash.com/1600x900/?nature,water')"],["url('https://source.unsplash.com/1600x900/?children,play')"],["url('https://source.unsplash.com/1600x900/?success')"],["url('https://source.unsplash.com/1600x900/?forest')"],["url('https://source.unsplash.com/1600x900/?fashion')"],["url('https://source.unsplash.com/1600x900/?suits')"],["url('https://source.unsplash.com/1600x900/?city')"],["url('https://source.unsplash.com/1600x900/?fitness')"],["url('https://source.unsplash.com/1600x900/?storm')"],["url('https://source.unsplash.com/1600x900/?animals')"],["url('https://source.unsplash.com/1600x900/?mountains')"],["url('https://source.unsplash.com/1600x900/?running')"],["url('https://source.unsplash.com/1600x900/?business')"],["url('https://source.unsplash.com/1600x900/?working')"],["url('https://source.unsplash.com/1600x900/?race')"],["url('https://source.unsplash.com/1600x900/?cars')"],["url('https://source.unsplash.com/1600x900/?rich')"],["url('https://source.unsplash.com/1600x900/?fashionable')"],["url('https://source.unsplash.com/1600x900/?construction')"],["url('https://source.unsplash.com/1600x900/?building')"],["url('https://source.unsplash.com/1600x900/?growth')"],["url('https://source.unsplash.com/1600x900/?ocean')"],["url('https://source.unsplash.com/1600x900/?river')"]],o={"--url":s};return Object(l.jsx)("div",{className:"App",style:o,children:Object(l.jsx)(O,{changeBg:function(){var t=Object(a.random)(0,r.length);n(r[t])}})})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.30ba033e.chunk.js.map