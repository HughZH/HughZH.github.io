import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c209eabe.js";import{f as k,g as _,o as l,h as d,a as o,F as g,i as v,n as $,t as p,j as y,_ as w,u as b,p as H,c as j,w as e,d as B,r as n}from"./app-8f4bd2cf.js";import{o as S}from"./index-463abdac.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-84f104c3.js";import"./YunCard.vue_vue_type_script_setup_true_lang-cc3d92d9.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-e5d4dae8.js";const D={class:"links"},N={class:"link-items"},Z=["href","title"],E={class:"link-left"},I=["src","alt"],L={class:"link-info",m:"l-2"},O={class:"link-blog",font:"serif black"},V={class:"link-desc"},z=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(t){const i=t,{data:c}=_(i.links,i.random);function f(s){S(s,i.errorImg)}return(s,u)=>(l(),d("div",D,[o("ul",N,[(l(!0),d(g,null,v(y(c),(a,m)=>(l(),d("li",{key:m,class:"link-item",style:$(`--primary-color: ${a.color}`)},[o("a",{class:"link-url",p:"x-4 y-2",href:a.url,title:a.name,alt:"portrait",rel:"friend"},[o("div",E,[o("img",{class:"link-avatar",width:"64",height:"64",w:"16",h:"16",loading:"lazy",src:a.avatar,alt:a.name,onError:f},null,40,I)]),o("div",L,[o("div",O,p(a.blog),1),o("div",V,p(a.desc),1)])],8,Z)],4))),128))])]))}});const M=JSON.parse('{"title":"我的小伙伴们","description":"未明的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"未明的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/home/runner/work/HughZH.github.io/HughZH.github.io/pages/links/index.md","lastUpdated":1696766888000}'),r=JSON.parse('{"title":"我的小伙伴们","description":"未明的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"未明的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/home/runner/work/HughZH.github.io/HughZH.github.io/pages/links/index.md","lastUpdated":1696766888000}'),C={name:"pages/links/index.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const t=b();t.meta.frontmatter=Object.assign(t.meta.frontmatter,r.frontmatter),H("pageData",r)}};function F(t,i,c,f,s,u){const a=z,m=h;return l(),j(m,{frontmatter:s.frontmatter,data:s.data},{"main-content-md":e(()=>[B(a,{links:s.frontmatter.links,random:s.frontmatter.random},null,8,["links","random"])]),"main-header":e(()=>[n(t.$slots,"main-header")]),"main-header-after":e(()=>[n(t.$slots,"main-header-after")]),"main-nav":e(()=>[n(t.$slots,"main-nav")]),"main-content":e(()=>[n(t.$slots,"main-content")]),"main-content-after":e(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(t.$slots,"main-nav-after")]),comment:e(()=>[n(t.$slots,"comment")]),footer:e(()=>[n(t.$slots,"footer")]),aside:e(()=>[n(t.$slots,"aside")]),"aside-custom":e(()=>[n(t.$slots,"aside-custom")]),default:e(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const q=w(C,[["render",F]]);export{M as __pageData,q as default};