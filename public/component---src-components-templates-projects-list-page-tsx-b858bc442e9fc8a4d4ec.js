(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/FxX":function(e,t,a){},OPKa:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("vrFN"),i=a("LvOA"),o=a("UXk7");t.default=function(e){var t,a=(null===(t=e.pageContext.slug)||void 0===t?void 0:t.replace("/",""))||"all";return console.log("navid smartSlug= ",a),n.a.createElement("section",{className:"page-container"},n.a.createElement(r.a,{title:"هزارچیز"}),n.a.createElement(i.a,null),n.a.createElement(o.a,{includePhrase:a}))}},UXk7:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=(a("/FxX"),a("9eSz")),o=a.n(i),c=function(e){var t=e.slug,a=e.title,l=e.description,i=(e.domain,e.domainName),c=e.imageFluid,s=e.logoFluid,m=e.refCurrent;return n.a.createElement("div",{className:"h-card"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"out-div dark-glass"},n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"img-box"},n.a.createElement(o.a,{fluid:s})),n.a.createElement("div",{className:"details"},n.a.createElement("h2",null,a)),n.a.createElement("h3",null,i))),n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"img-box green-glass"},n.a.createElement(o.a,{fluid:c,imgStyle:{transition:"all 0.7s"}}))),n.a.createElement("div",{className:"bottom green-glass"},n.a.createElement("p",null,l),n.a.createElement(r.Link,{to:t,className:"button",onClick:function(){sessionStorage.setItem("listPageScroll",m.scrollTop)}},"مشاهده بیشتر"))))};t.a=function(e){var t=Object(r.useStaticQuery)("89403908").allMarkdownRemark,a=Object(l.useRef)();return Object(l.useEffect)((function(){var e=sessionStorage.getItem("listPageScroll")||0;return void 0!==typeof a&&window.innerWidth>800&&(a.current.scrollTop=e),sessionStorage.removeItem("listPageScroll")}),[a]),n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{role:"main",style:{width:"100%"}},n.a.createElement("div",{className:"content",ref:a},t.edges.map((function(t){var l,r,i,o,s,m,d,u=t.node;if("all"===e.includePhrase||u.frontmatter.keywords.includes(e.includePhrase))return n.a.createElement(c,{key:null==u||null===(l=u.frontmatter)||void 0===l?void 0:l.domain,slug:u.fields.slug,title:u.frontmatter.title,description:u.frontmatter.description,domain:(null==u||null===(r=u.frontmatter)||void 0===r?void 0:r.domain)||"",domainName:(null==u||null===(i=u.frontmatter)||void 0===i?void 0:i.domainName)||"",imageFluid:null==u||null===(o=u.frontmatter)||void 0===o||null===(s=o.img)||void 0===s?void 0:s.children[0].fluid,logoFluid:null==u||null===(m=u.frontmatter)||void 0===m||null===(d=m.logo)||void 0===d?void 0:d.children[0].fluid,refCurrent:a.current})})))))}}}]);
//# sourceMappingURL=component---src-components-templates-projects-list-page-tsx-b858bc442e9fc8a4d4ec.js.map