(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81],{5640:function(t,n,e){"use strict";var r=(0,e(6771).Z)("hr",{target:"eka6gpi0"})("margin:",(function(t){return t.theme.spacing[7]})," 0;background:",(function(t){return t.theme.colors.accent}),";height:1px;border:0;");n.Z=r},3945:function(t,n,e){"use strict";var r=(0,e(6771).Z)("div",{target:"e11u2t0n0"})("margin-bottom:",(function(t){return t.theme.spacing[5]}),";border-radius:",(function(t){return t.theme.spacing[3]}),";background:",(function(t){return t.bg}),";box-shadow:0 3px 10px rgba(0, 0, 0, 0.1);transition:box-shadow 0.4s,background 0.3s;&:hover{box-shadow:0 10px 30px rgba(0, 0, 0, 0.1);background:",(function(t){return t.bgHover}),";}a{display:block;text-decoration:none;color:",(function(t){return t.theme.colors.text}),";}header{padding:",(function(t){var n=t.theme;return t.short?n.spacing[3]:n.spacing[6]})," ",(function(t){return t.theme.spacing[7]}),";}h2{margin-bottom:",(function(t){return t.theme.spacing[1]}),";margin-top:",(function(t){return t.theme.spacing[0]}),";font-size:",(function(t){return t.theme.fontSizes[3]}),";font-weight:",(function(t){return t.theme.fontWeights.regular}),";color:",(function(t){return t.theme.colors.black}),";}p{margin:",(function(t){return t.theme.spacing[0]}),";}");n.Z=r},44:function(t,n,e){"use strict";e(7294);var r=e(5444),i=e(3945),o=e(5130),a=e(3431);n.Z=function(t){var n=t.post,e=n.frontmatter.title,s=n.frontmatter.tags;return s&&s.sort(),(0,a.jsx)("li",null,(0,a.jsx)("article",{itemScope:!0,schema:"https://schema.org/Article"},(0,a.jsx)(i.Z,{bg:o.Z.colors.brightgray},(0,a.jsx)(r.rU,{to:n.fields.slug,itemProp:"url"},(0,a.jsx)("header",null,(0,a.jsx)("h2",null,(0,a.jsx)("span",{itemProp:"headline"},e)),(0,a.jsx)("p",{itemProp:"description"},n.frontmatter.description||n.excerpt),n.frontmatter.date&&(0,a.jsx)("small",null,n.frontmatter.date))))))}},7632:function(t,n,e){"use strict";e.r(n);var r=e(6771),i=(e(7294),e(5444)),o=e(6257),a=e(3751),s=e(44),u=e(5640),c=e(3431);var l=(0,r.Z)("div",{target:"ej4a4f32"})("padding-top:",(function(t){return t.theme.spacing[5]}),";display:grid;grid-template-columns:1fr min(",(function(t){return t.theme.widths.main}),", 100%) ",(function(t){return t.theme.widths.aside})," 1fr;>*{grid-column:2;}@media (max-width: ",(function(t){return t.theme.widths.full}),"){grid-template-columns:1fr min(",(function(t){return t.theme.widths.main}),", 100%) 1fr;}"),g=(0,r.Z)("div",{target:"ej4a4f31"})("padding:0 ",(function(t){return t.theme.spacing[5]}),";h1{margin-top:0;}"),m=(0,r.Z)("ol",{target:"ej4a4f30"})({name:"qr8q5p",styles:"list-style:none"});n.default=function(t){var n,e=t.pageContext,r=t.data,d=t.location,f=(null===(n=r.site.siteMetadata)||void 0===n?void 0:n.title)||"Title",h=e.tag,p=r.allMdx,x=p.edges,b="“"+h+"” 태그로 "+p.totalCount+"건이 검색되었습니다.";return(0,c.jsx)(o.Z,{location:d,title:f},(0,c.jsx)(a.Z,{title:h,description:h+" 검색 결과"}),(0,c.jsx)(l,null,(0,c.jsx)(g,null,(0,c.jsx)("h1",null,b),(0,c.jsx)("p",null,(0,c.jsx)(i.rU,{to:"/"},"메인 페이지로 돌아가기")),(0,c.jsx)(i.rU,{to:"/tags"},"모든 태그 보기"),(0,c.jsx)(u.Z,null),(0,c.jsx)(m,null,x.map((function(t){var n=t.node;return(0,c.jsx)(s.Z,{post:n})}))))))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-26d88d90f09e8fb735db.js.map