import{f as b,k as x,an as C,R as w,s as T,a1 as f,ao as i,o as s,h as r,j as e,a as o,t as a,m as l,b as n,F as V,q as d,ap as F,r as $}from"./app-8f4bd2cf.js";const B={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},H={key:0,class:"beian",m:"y-2"},N={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},S={class:"copyright flex justify-center items-center gap-2",p:"1"},Y=["href","title"],j={key:1,class:"powered",m:"2"},z=["innerHTML"],D=["href","title"],q=b({__name:"YunFooter",setup(I){const{t:p}=x(),h=C(),v=w(),t=T(),u=new Date().getFullYear(),g=f(()=>u===t.value.footer.since),k=f(()=>p("footer.powered",[`<a href="${i.repository}" target="_blank" rel="noopener">Valaxy</a> v${i.version}`])),c=f(()=>t.value.footer.icon||{url:i.repository,name:"i-ri-cloud-line",title:i.name});return(y,L)=>{var m,_;return s(),r("footer",B,[(m=e(t).footer.beian)!=null&&m.enable&&e(t).footer.beian.icp?(s(),r("div",H,[o("a",N,a(e(t).footer.beian.icp),1)])):l("v-if",!0),o("div",S,[o("span",null,[n(" © "),g.value?l("v-if",!0):(s(),r(V,{key:0},[n(a(e(t).footer.since)+" - ",1)],64)),n(" "+a(e(u)),1)]),(_=e(t).footer.icon)!=null&&_.enable?(s(),r("a",{key:0,class:d(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:c.value.url,target:"_blank",title:c.value.title},[o("div",{class:d(c.value.name)},null,2)],10,Y)):l("v-if",!0),o("span",null,a(e(v).author.name),1)]),e(t).footer.powered?(s(),r("div",j,[o("span",{innerHTML:k.value},null,8,z),n(" | "),o("span",null,[n(a(e(p)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},a(F(e(h).theme)),9,D),n(" v"+a(e(t).pkg.version),1)])])):l("v-if",!0),$(y.$slots,"default")])}}});export{q as _};
