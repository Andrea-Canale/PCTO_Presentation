import{N as m,y as h,b as f,e,a6 as c,x as r,A as v,c as p,k as u,g as d,r as x,o as n,p as k,a as g}from"../modules/vue-DLozXdZ-.js";import{_ as N,a as S}from"../index-C8vsZ_wi.js";import"../modules/shiki-DOjNGa0F.js";const y=o=>(k("data-v-6313aa92"),o=o(),g(),o),B={class:"grid justify-center pt-15%"},I=y(()=>e("h1",{class:"text-9xl font-bold"}," 404 ",-1)),R={class:"text-2xl"},C={class:"op-70"},V={class:"mt-3 flex flex-col gap-2"},b={__name:"404",setup(o){const{currentRoute:l}=m(),{total:_}=S(),a=h(()=>{const s=l.value.path.match(/\d+/);if(s){const t=+s[0];if(t>0&&t<=_.value)return t}return null});return(i,s)=>{const t=x("RouterLink");return n(),f("div",B,[e("div",null,[I,e("p",R,[c(" Page not found"),e("code",C,":"+r(v(l).path),1)]),e("div",V,[a.value!==1?(n(),p(t,{key:0,to:"/",class:"page-link"},{default:u(()=>[c(" Go Home ")]),_:1})):d("",!0),a.value?(n(),p(t,{key:1,to:`/${a.value}`,class:"page-link"},{default:u(()=>[c(" Go to Slide "+r(a.value),1)]),_:1},8,["to"])):d("",!0)])])])}}},j=N(b,[["__scopeId","data-v-6313aa92"]]);export{j as default};
