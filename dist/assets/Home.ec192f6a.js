import{c as w,V as z,u as oe,a as N,b as R,d as E}from"./VList.167bb292.js";import{ab as ce,y as re,s as t,q as G,S as g,u as ue,x as me,c as F,a2 as fe,a3 as he,ac as _e,l as c,m as y,w as n,C as s,t as b,B,ad as p,n as d,M as H,ae as M}from"./index.a1f9b78a.js";import{a as T,q as O,j as A,R as ve,b as pe,r as ge,c as ye,s as be,t as xe,v as ke,d as Ce,w as Ie,m as Ae,x as Ve,f as Se,y as Pe,z as we,A as Be,g as Te,B as Le,C as De,D as $e,h as ze,E as Ne,i as Re,L as Ee,F as Fe,_ as He,V as Me,o as V,p as f,G as j,n as W}from"./VRow.9d422c13.js";const Y=ce({name:"VCardActions",setup(e,i){let{slots:l}=i;return re({VBtn:{variant:"text"}}),T(()=>{var a;return t("div",{class:"v-card-actions"},[(a=l.default)==null?void 0:a.call(l)])}),{}}}),je=w("v-card-subtitle"),S=w("v-card-title"),qe=G()({name:"VCardItem",props:{appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:String,title:String,...O()},setup(e,i){let{slots:l}=i;return T(()=>{var h;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||l.prepend),r=!!(e.appendAvatar||e.appendIcon),k=!!(r||l.append),C=!!(e.title||l.title),I=!!(e.subtitle||l.subtitle);return t("div",{class:"v-card-item"},[o&&t("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?t(A,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},l.prepend):a&&t(z,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[C&&t(S,{key:"title"},{default:()=>{var u,m;return[(m=(u=l.title)==null?void 0:u.call(l))!=null?m:e.title]}}),I&&t(je,{key:"subtitle"},{default:()=>{var u,m;return[(m=(u=l.subtitle)==null?void 0:u.call(l))!=null?m:e.subtitle]}}),(h=l.default)==null?void 0:h.call(l)]),k&&t("div",{key:"append",class:"v-card-item__append"},[l.append?t(A,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},l.append):r&&t(z,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),x=w("v-card-text"),P=G()({name:"VCard",directives:{Ripple:ve},props:{appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ue(),...pe(),...O(),...ge(),...ye(),...be(),...xe(),...ke(),...Ce(),...Ie(),...Ae(),...Ve({variant:"elevated"})},setup(e,i){let{attrs:l,slots:a}=i;const{themeClasses:o}=me(e),{borderClasses:r}=Se(e),{colorClasses:k,colorStyles:C,variantClasses:I}=Pe(e),{densityClasses:h}=we(e),{dimensionStyles:u}=Be(e),{elevationClasses:m}=Te(e),{loaderClasses:J}=Le(e),{locationStyles:K}=De(e),{positionClasses:Q}=$e(e),{roundedClasses:U}=ze(e),_=Ne(e,l),X=F(()=>e.link!==!1&&_.isLink.value),v=F(()=>!e.disabled&&e.link!==!1&&(e.link||_.isClickable.value));return T(()=>{const Z=X.value?"a":e.tag,ee=!!(a.title||e.title),te=!!(a.subtitle||e.subtitle),ae=ee||te,ne=!!(a.append||e.appendAvatar||e.appendIcon),se=!!(a.prepend||e.prependAvatar||e.prependIcon),le=!!(a.image||e.image),ie=ae||se||ne,de=!!(a.text||e.text);return fe(t(Z,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},o.value,r.value,k.value,h.value,m.value,J.value,Q.value,U.value,I.value],style:[C.value,u.value,K.value],href:_.href.value,onClick:v.value&&_.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[le&&t("div",{key:"image",class:"v-card__image"},[a.image?t(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(Re,{key:"image-img",cover:!0,src:e.image},null)]),t(Ee,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ie&&t(qe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),de&&t(x,{key:"text"},{default:()=>{var D,$;return[($=(D=a.text)==null?void 0:D.call(a))!=null?$:e.text]}}),(L=a.default)==null?void 0:L.call(a),a.actions&&t(Y,null,{default:a.actions}),Fe(v.value,"v-card")]}}),[[he("ripple"),v.value&&e.ripple]])}),{}}}),Ge={name:"StartButton",props:["title","subtitle","tabName"],computed:{..._e(oe,["tab"])},methods:{setTab(){this.tab=this.tabName}}};function Oe(e,i,l,a,o,r){return c(),y(P,{density:"compact",variant:"tonal",color:"primary",style:{width:"100%"},class:"pa-2"},{default:n(()=>[t(x,{style:{"font-size":"16px"}},{default:n(()=>[s(b(l.subtitle),1)]),_:1}),t(Y,null,{default:n(()=>[t(Me,{variant:"tonal",class:"text-h5",size:"large",href:"/co-aid/patterns",onClick:r.setTab},{default:n(()=>[s(b(l.title),1)]),_:1},8,["onClick"])]),_:1})]),_:1})}const q=He(Ge,[["render",Oe]]),We={class:"d-flex flex-column",style:{gap:"20px"}},Ye={class:"text-container"},Je={class:"d-flex flex-column",style:{gap:"20px"}},Ke={__name:"CoAIDInfoCol",setup(e){return(i,l)=>{const a=B("font");return c(),p("div",We,[d("div",null,[d("div",Ye,[t(a,{class:"text-normal"},{default:n(()=>[s(" Co.AID guides the design of your AI system towards "),t(a,{class:"text-hl"},{default:n(()=>[s("human-AI complementarity")]),_:1}),s(" by providing you with design patterns (best practices) for your use case. Note that the guidance offered in this toolkit is limited to settings of "),t(a,{class:"text-hl"},{default:n(()=>[s("AI-assisted decision-making")]),_:1}),s(". ")]),_:1}),t(a,{class:"text-normal"},{default:n(()=>[s(" The focus of this toolkit is not to simply maximize the performance of your machine learning (ML) model, but to facilitate the "),t(a,{class:"text-hl"},{default:n(()=>[s("collaboration between humans and AI")]),_:1}),s(" with the goal of "),t(a,{class:"text-hl"},{default:n(()=>[s("maximizing their team performance")]),_:1}),s(". ")]),_:1}),t(a,{class:"text-normal"},{default:n(()=>[s(" You can stay on this page to familiarize yourself with the concept of complementarity, or you can dive right into the design patterns. ")]),_:1})])]),d("div",Je,[t(q,{title:"Guide me!",subtitle:"Let us guide you through the design process by answering a few questions about your project.",tabName:"guidance"}),t(q,{title:"Explore",subtitle:"Freely explore the design patterns",tabName:"filters"})])])}}};const Qe={class:"d-flex flex-column"},Ue={class:"text-container"},Xe={name:"CompInfoCol",data(){return{humanStrengths:["Contextualization","Intuition","Empathy","Creativity"],aiStrengths:["Processing large amounts of data","Consistency","Finding patterns in data","Probilistic methdos"]}}},Ze=Object.assign(Xe,{setup(e){return(i,l)=>{const a=B("font");return c(),p("div",Qe,[d("div",Ue,[t(a,{class:"text-normal"},{default:n(()=>[s(" In general, the capabilities of humans and AI are different. The goal is to enable AI and humans to "),t(a,{class:"text-hl"},{default:n(()=>[s("leverage their respective strengths")]),_:1}),s(" and "),t(a,{class:"text-hl"},{default:n(()=>[s("overcome each other's weaknesses")]),_:1}),s(". If the team performance exceeds the performance of both the AI and the the human(s), the result is called "),t(a,{class:"text-hl"},{default:n(()=>[s("complementary team performance (CTP)")]),_:1}),s(". ")]),_:1}),t(a,{class:"text-normal"},{default:n(()=>[s(" To achieve this goal, the AI and the system's collaboration mechanisms must be designed in a way that capitalizes on the strengths of both humans and AI. ")]),_:1})]),t(W,null,{default:n(()=>[t(V,null,{default:n(()=>[t(f,{id:"hs-list"},{default:n(()=>[t(P,{height:"100%",color:"primary",variant:"tonal"},{default:n(()=>[t(S,null,{default:n(()=>[s(" Humans' Strengths ")]),_:1}),t(x,null,{default:n(()=>[t(N,{density:"compact"},{default:n(()=>[(c(!0),p(H,null,M(i.humanStrengths,o=>(c(),y(R,{color:"secondary"},{prepend:n(()=>[t(j,{color:"secondary",icon:"mdi-plus-circle"})]),default:n(()=>[t(E,{class:"text-wrap"},{default:n(()=>[t(a,{color:"#455A64",class:"font-weight-medium"},{default:n(()=>[s(b(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{id:"ais-list"},{default:n(()=>[t(P,{height:"100%",color:"primary",variant:"tonal"},{default:n(()=>[t(S,null,{default:n(()=>[s(" AI's Strengths ")]),_:1}),t(x,null,{default:n(()=>[t(N,{density:"compact"},{default:n(()=>[(c(!0),p(H,null,M(i.aiStrengths,o=>(c(),y(R,{color:"secondary"},{prepend:n(()=>[t(j,{color:"secondary",icon:"mdi-plus-circle"})]),default:n(()=>[t(E,null,{default:n(()=>[t(a,{color:"#455A64",class:"font-weight-medium"},{default:n(()=>[s(b(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),et={class:"text-h4"},tt={class:"text-h4"},at={class:"text-h4"},nt={class:"text-h4 text-center"},st={class:"text-h4 text-center"},ot={__name:"Home",setup(e){return(i,l)=>{const a=B("font");return c(),y(W,{style:{height:"100%"}},{default:n(()=>[t(V,{class:"align-center"},{default:n(()=>[t(f,{cols:"4"},{default:n(()=>[d("div",et,[t(a,{color:"primary"},{default:n(()=>[s("Co")]),_:1}),t(a,{color:"#455A64"},{default:n(()=>[s("mplementarity")]),_:1})]),d("div",tt,[t(a,{color:"primary"},{default:n(()=>[s("AI")]),_:1})]),d("div",at,[t(a,{color:"primary"},{default:n(()=>[s("D")]),_:1}),t(a,{color:"#455A64"},{default:n(()=>[s("esign")]),_:1})])]),_:1}),t(f,{cols:"8"},{default:n(()=>[d("div",nt,[t(a,{color:"#455A64"},{default:n(()=>[s("Human-AI")]),_:1})]),d("div",st,[t(a,{color:"#455A64"},{default:n(()=>[s("Complementarity")]),_:1})])]),_:1})]),_:1}),t(V,null,{default:n(()=>[t(f,{cols:"4"},{default:n(()=>[t(Ke)]),_:1}),t(f,{cols:"8"},{default:n(()=>[t(Ze)]),_:1})]),_:1})]),_:1})}}};export{ot as default};
