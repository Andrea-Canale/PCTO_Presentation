import{a2 as n,a8 as r,t as u,y as j,aw as $,aA as v}from"../modules/vue-DLozXdZ-.js";import{W as p,a5 as C,ae as x,a3 as S,a1 as R,a2 as T,af as l,a0 as g,ag as k,ah as E}from"../index-C8vsZ_wi.js";function F(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(g,void 0),f=n(p,u(1)),m=n(C,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:f,$zoom:m}}function O(t){var i,c;$(l,t);const{$slidev:a,$page:s}=F(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,a){return{...v(t,a===0?k:E),frontmatter:t}}export{b as f,O as p,F as u};
