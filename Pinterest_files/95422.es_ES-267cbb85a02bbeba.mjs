(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[95422],{613316:(e,t,o)=>{function r(e){return[0,24,21,26].includes(e)}function n({articleType:e,id:t,title:o}){const r=o.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return"today"===e?`/today/shop/${r}/${t}/`:`/discover/article/${r}/${t}/`}o.d(t,{x:()=>n,y:()=>r})},701500:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(667294),n=o(249647),i=o(570470),s=o(883119),l=o(785893);class a extends r.Component{renderPulsar(){const{anchor:e,handleComplete:t,handlePulsarCompleteOnHover:o,zIndex:r}=this.props;return(0,l.jsx)(i.Z,{anchor:e,onTouch:t,onMouseEnter:o,zIndex:r})}renderFlyout(){const{anchor:e,tooltip:t,handleDismiss:o,handleComplete:r}=this.props;if(!t)return null;const{cancelButtonText:n,confirmButtonText:i,mainText:a,idealDirection:d="down"}=t,c=n&&o&&i&&r;return(0,l.jsx)(s.J2,{anchor:e,color:"blue",idealDirection:d,onDismiss:o,shouldFocus:!1,showCaret:!0,size:"flexible",children:(0,l.jsxs)(s.xu,{maxWidth:284,padding:3,width:"max-content",children:[(0,l.jsx)(s.xv,{color:"inverse",overflow:"breakWord",weight:"bold",children:a}),c?(0,l.jsxs)(s.xu,{marginTop:2,display:"flex",alignItems:"center",children:[(0,l.jsx)(s.xu,{column:6,marginEnd:1,children:(0,l.jsx)(s.zx,{fullWidth:!0,color:"transparentWhiteText",onClick:e=>o(e),size:"md",text:String(n)})}),(0,l.jsx)(s.xu,{column:6,children:(0,l.jsx)(s.zx,{fullWidth:!0,color:"white",size:"md",text:String(i),onClick:r})})]}):null]})})}render(){const{anchor:e,pulserOnly:t}=this.props;return e?t?this.renderPulsar():this.renderFlyout():null}}var d=o(70061),c=o(764990),u=o(123159);function h({anchor:e,anchorElementRef:t,children:o,containerBoxConfig:i,experience:h,isHidden:p,onCompleteClick:g,zIndex:x}){var _;const{completeExperience:y,dismissExperience:m,experiences:f,viewExperience:b}=(0,u.M)(),v=(({anchor:e,anchorExperiences:t,passedExperience:o})=>o||(t?t[e]:null))({anchor:e,anchorExperiences:Object.values(f).reduce(((e,t)=>(8===t.type&&(e[(0,c.A0)(t)]=t),e)),{}),passedExperience:h}),T=(null==v||null===(_=v.display_data)||void 0===_?void 0:_.delay)||0,[j,I]=(0,r.useState)(!!T);if((0,r.useEffect)((()=>{if(T>0&&j){const e=setTimeout((()=>{I(!1)}));return()=>clearTimeout(e)}return()=>{}}),[T,j]),(0,r.useEffect)((()=>{!j&&v&&b(v.placement_id,v.experience_id)}),[j,v]),!v||j||p)return r.Children.only(o);const C=(e=>{const{display_data:t}=e;return t.tooltip&&(t.tooltip={...t.tooltip.options,...t.tooltip},delete t.tooltip.options),(0,n.Z)(d.Z,!0)(t)})(v),E=()=>{var e;null!==(e=v.display_data)&&void 0!==e&&e.complete_on_hover&&y(v.placement_id,v.experience_id)};return(0,l.jsxs)(s.xu,{position:"relative",height:null==i?void 0:i.height,display:null==i?void 0:i.display,children:[(0,l.jsx)(s.iP,{onMouseEnter:E,onTap:()=>{g&&g(),C.skipComplete||y(v.placement_id,v.experience_id)},children:r.Children.only(o)}),(0,l.jsx)(a,{anchor:t||null,handlePulsarCompleteOnHover:E,handleComplete:()=>{t instanceof HTMLElement&&t.click()},handleDismiss:e=>{null!=e&&e.event&&e.event.stopPropagation(),m(v.placement_id,v.experience_id)},pulserOnly:!!C.pulserOnly,tooltip:C.tooltip,zIndex:x})]})}},249647:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(968630),n=o.n(r);function i(e,t=!1){return o=>{if(!n()(o))return t&&Array.isArray(o)?o.map(i(e,t)):o;const r={};return Object.keys(o).forEach((s=>{const l=e(o[s],s);n()(o[s])||t&&Array.isArray(o[s])?r[l]=i(e,t)(o[s]):r[l]=o[s]})),r}}function s(e,t=!1){const o=(t,o)=>e(o);return e=>i(o,t)(e)}},391143:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(643913),n=o(613316);function i({storyCategory:e,query:t,referringSource:o,bubbleId:i,storyId:s,title:l}){const a=[0,24,21,26].includes(e),d=(0,r.Z)({q:t,rs:o||void 0,b_id:i,source_id:s}),c=a&&l?(0,n.x)({title:l,id:i,articleType:"discover"}):`/discover/article/${i}/`;return a?c:"/search/pins/"+(d?"?"+d:"")}},80816:(e,t,o)=>{o.d(t,{i:()=>r});const r={REGISTRATION:"registration",SETTINGS:"settings",GOOGLE_PEOPLE_API:"google_people_api",HOLISTIC_PROFILE_PROMPT:"holistic_profile_prompt",IN_APP_BIRTHDAY_PROMPT:"in_app_birthday_prompt",FIX_EMAIL_PROMPT:"fix_email_prompt",NUX:"nux",UNKNOWN:"unknown"}},940882:(e,t,o)=>{o.d(t,{J:()=>r,Z:()=>n});const r=-1;function n(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},91214:(e,t,o)=>{o.d(t,{HW:()=>s,YW:()=>u,i3:()=>h,o2:()=>c});var r=o(667294),n=o(425288),i=o(785893);const s=660,l={educationId:null,paddingRight:0,zIndex:s};function a(e,t){switch(t.type){case"FOOTER_SET_EDUCATION_ID":const{educationId:o}=t.payload;return{...e,educationId:o};case"FOOTER_SET_PADDING_RIGHT":const{paddingRight:r}=t.payload;return{...e,paddingRight:r};case"FOOTER_SET_Z_INDEX":const{zIndex:n}=t.payload;return{...e,zIndex:n};default:return e}}const{Provider:d,Consumer:c,useHook:u}=(0,n.Z)("footerContext");function h({children:e}){const[t,o]=(0,r.useReducer)(a,l),n=(0,r.useCallback)((e=>o({type:"FOOTER_SET_PADDING_RIGHT",payload:{paddingRight:e}})),[]),s=(0,r.useCallback)((e=>o({type:"FOOTER_SET_EDUCATION_ID",payload:{educationId:e}})),[]),c=(0,r.useCallback)((e=>o({type:"FOOTER_SET_Z_INDEX",payload:{zIndex:e}})),[]),u=(0,r.useMemo)((()=>({...t,setEducationId:s,setPaddingRight:n,setZIndex:c})),[t,s,n,c]);return(0,i.jsx)(d,{value:u,children:e})}},57636:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(667294),n=o(116303),i=o(63444),s=o(564194),l=o(391143),a=o(667976),d=o(66699),c=o(898781),u=o(19121),h=o(940882),p=o(883119),g=o(785893);function x({bubble:e,contextLogData:t,disableTabIndex:o,handleReport:x,height:_,imgSignature:y,isHovered:m,lightOverlay:f,onClick:b,onMouseEnter:v,onMouseLeave:T,referringSource:j,searchBoxRenderStopwatch:I,showFlag:C,slotIndex:E,storyId:S,viewParameter:w,viewType:P,width:O}){const R=(0,c.ZP)(),A=(0,u.Z)(),{id:z,action:k,cover_images:M,dominant_colors:D,identifier_icon_type:Z,title:L,story_category:F,curator:H}=e,B=M&&M[0]?M[0]["280x280"]||M[0]["236x"]:void 0,N=(0,d.Z)(L&&L.format||"",L&&L.args||{}),W=D&&D.length?D[0]:"gray",G=(null==k?void 0:k.url)||(0,l.Z)({storyCategory:F,query:N,referringSource:j,bubbleId:z,storyId:S,title:L.format});return(0,g.jsx)(s.Z,{impressionAuxFields:{storyCategory:F,storyIdStr:S},impressionType:"Article",loggingId:z,viewType:P,viewParameter:w,slotIndex:E,contextLogData:{story_id:S,...t},children:(0,g.jsx)(i.Z,{backgroundColor:W,coverImage:B,disableTabIndex:o,height:_,id:z,isHovered:m,lightOverlay:f,onClick:b,onMouseEnter:v,onMouseLeave:T,searchBoxRenderStopwatch:I,url:G,width:O,children:({isHovered:e})=>(0,g.jsxs)(r.Fragment,{children:[H&&26!==F&&(0,g.jsx)(p.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,g.jsx)(n.Z,{outline:!0,size:"xs",src:H.image_small_url,name:H.full_name})}),Z&&Z!==h.J&&(0,g.jsx)(p.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,g.jsx)(p.JO,{icon:(0,h.Z)(Z),accessibilityLabel:R.bt("Icono de compras", "Shopping icon", "bubble.shoppingIcon.label", undefined, true),color:"default",size:12})}),(0,g.jsx)(p.xu,{display:"flex",height:_,width:O||"100%",position:"absolute",top:!0,padding:3,alignItems:26===F?"end":"center",justifyContent:"center",children:(0,g.jsxs)(p.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[_>200?(0,g.jsx)(p.X6,{size:"500",align:"center",color:"light",children:N}):(0,g.jsx)(p.xv,{align:"center",color:"light",weight:"bold",children:N}),H&&26===F&&(0,g.jsxs)(p.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,g.jsx)(p.xu,{marginEnd:2,children:(0,g.jsx)(n.Z,{outline:!0,size:"xs",src:H.image_small_url,name:H.full_name})}),(0,g.jsx)(p.xv,{size:"100",color:"light",children:H.full_name})]})]})}),A.isAuth&&A.isEmployee&&C?(0,g.jsx)(p.xu,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:(0,g.jsx)(a.Z,{handleReport:x,imgSignature:y||"",isVisible:e})}):null]})})})}},63444:(e,t,o)=>{o.d(t,{A:()=>s,Z:()=>l});var r=o(667294),n=o(883119),i=o(785893);const s={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"},lightHoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.2)"}};function l({backgroundColor:e,children:t,coverImage:o,disableTabIndex:l,height:a,id:d,isHovered:c,lightOverlay:u=!1,onClick:h,onMouseEnter:p,onMouseLeave:g,searchBoxRenderStopwatch:x,url:_,width:y}){var m,f;const[b,v]=(0,r.useState)(!1),T=()=>{p?p():v(!0)},j=()=>{g?g():v(!1)},I=c||b;let C=I?s.hoverOverlay:s.bubbleOverlay;u&&(C=I?s.lightHoverOverlay:{});return(0,i.jsx)(n.iP,{href:_,onBlur:j,onFocus:T,onMouseEnter:T,onMouseLeave:j,onTap:()=>{null==h||h(d)},role:"link",rounding:4,tabIndex:l?-1:void 0,children:(0,i.jsx)(n.zd,{rounding:4,width:y||"100%",height:a,children:null!=o&&o.url?(0,i.jsxs)(n.Ee,{alt:"",color:e,fit:"cover",naturalHeight:null!==(m=o.height)&&void 0!==m?m:1,naturalWidth:null!==(f=o.width)&&void 0!==f?f:1,onLoad:()=>{null==x||x.stop()},role:"presentation",src:o.url,children:[(0,i.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:C},height:"100%",width:"100%"}),"function"==typeof t?t({isHovered:I}):t]}):(0,i.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:"100%",width:"100%"})})})}},958155:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(667294);const n={backgroundColor:"transparent"},i={backgroundColor:"rgba(216, 216, 216, 0.37)"},s={borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},l={outline:"0"};var a=o(883119),d=o(785893);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class u extends r.Component{constructor(...e){super(...e),c(this,"state",{hovered:!1}),c(this,"handleMouseEnter",(()=>this.setState({hovered:!0}))),c(this,"handleMouseLeave",(()=>this.setState({hovered:!1})))}render(){const{backgroundHaloSize:e,onClick:t,color:o="subtle"}=this.props,r=Object.freeze({height:e,width:e}),c={border:0,display:"block",background:"transparent",cursor:"pointer",...l},u={...r,...{...s,...n,...this.state.hovered?i:{}}};return(0,d.jsx)("button",{type:"button",style:c,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:(0,d.jsx)("div",{style:u,children:(0,d.jsx)(a.xu,{rounding:"circle",children:(0,d.jsx)(a.JO,{accessibilityLabel:"",icon:"flag",size:e/2,color:o})})})})}}const h=u},667976:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(667294),n=o(958155),i=o(121151),s=o(6637),l=o(499128),a=o(844949),d=o(898781),c=o(343341),u=o(883119),h=o(785893);function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class g extends r.PureComponent{constructor(...e){var t;super(...e),t=this,p(this,"state",{showModal:!1,reportType:null}),p(this,"handleDismiss",(()=>this.setState({showModal:!1}))),p(this,"handleClick",(()=>{const{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()})),p(this,"reportSuggestionImage",(async function(){const{imgSignature:e,reportImage:o,pinIds:r}=t.props;if(t.setState({showModal:!1}),r)return void r.forEach((e=>o(e)));const n=(await s.Z.create("GetPinFromSignature",{imgSignature:e}).callGet()).resource_response.data.id;o(n)})),p(this,"reportSuggestionText",(()=>{const{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast((({hideToast:e})=>(0,h.jsx)(l.ZP,{onHide:e,text:this.props.i18n.bt("¡Gracias por tu denuncia! Será revisada por nuestro equipo de confianza y seguridad", "Thanks for your report! This will be reviewed by our Trust and Safety Team", "ReportingFlag.Toast.text", undefined, true)}))),this.handleDismiss())})),p(this,"showModal",(({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})}))}render(){const{showModal:e}=this.state;return(0,h.jsxs)(r.Fragment,{children:[this.props.isVisible&&(0,h.jsx)(n.Z,{onClick:this.showModal,backgroundHaloSize:24}),e&&(0,h.jsx)(i.ZP,{accessibilityModalLabel:this.props.i18n.bt("Denunciar término de búsqueda", "Report search term", "ReportingFlag.Modal.accessibilityModalLabel", undefined, true),heading:this.props.i18n.bt("Denunciar término de búsqueda", "Report search term", "ReportingFlag.Modal.heading", undefined, true),onDismiss:this.handleDismiss,size:"sm",children:(0,h.jsxs)(u.xu,{children:[(0,h.jsx)(u.xu,{padding:5,children:(0,h.jsx)(u.xv,{children:this.props.i18n.bt("Cuando marques esto, nuestro equipo de confianza y seguridad lo revisará. Si no cumple nuestras Directrices para la comunidad, se bloqueará.", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true)})}),(0,h.jsxs)(u.FX,{id:"reporting-flag-options-group",legend:this.props.i18n.bt("Cuando marques esto, nuestro equipo de confianza y seguridad lo revisará. Si no cumple nuestras Directrices para la comunidad, se bloqueará.", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true),legendDisplay:"hidden",children:[(0,h.jsxs)(u.xu,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[(0,h.jsxs)(u.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,h.jsx)(u.FX.RadioButton,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,h.jsx)(u.xu,{flex:"grow",children:(0,h.jsx)(u.__,{htmlFor:"textType",children:(0,h.jsx)(u.xu,{paddingX:2,children:(0,h.jsx)(u.xv,{children:"Report search text"})})})})]}),(0,h.jsxs)(u.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,h.jsx)(u.FX.RadioButton,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,h.jsx)(u.xu,{flex:"grow",children:(0,h.jsx)(u.__,{htmlFor:"imageType",children:(0,h.jsx)(u.xu,{paddingX:2,children:(0,h.jsx)(u.xv,{children:"Report search image"})})})})]})]}),(0,h.jsx)(u.iz,{}),(0,h.jsxs)(u.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,h.jsx)(u.xu,{margin:2,children:(0,h.jsx)(u.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n.bt("Cancelar", "Cancel", "ReportingFlag.Box.Button.text.cancel", undefined, true)})}),(0,h.jsx)(u.xu,{margin:2,children:(0,h.jsx)(u.zx,{fullWidth:!0,color:"red",onClick:this.handleClick,text:this.props.i18n.bt("Denunciar", "Report", "ReportingFlag.Box.Button.text.report", undefined, true),disabled:!this.state.reportType})})]})]})]})})]})}}function x(e){const t=(0,d.ZP)(),{reportImage:o}=(0,a.f)();return(0,h.jsx)(g,{...e,i18n:t,reportImage:o,toastManagerContext:(0,c.F9)()})}},741982:(e,t,o)=>{o.d(t,{S:()=>c,w:()=>u});var r=o(667294),n=o(695683),i=o(311541),s=o(425288),l=o(785893);const a=()=>o.e(90251).then(o.bind(o,590251)),{Provider:d,useHook:c}=(0,s.Z)("MerchantStorefrontSettings");function u({children:e}){const[t,o]=(0,i.Z)(a,n.Z),s=(0,r.useMemo)((()=>({merchantStorefrontSettings:t,updateLocaleStorefrontSetting:(e,t,r)=>{o({type:"UPDATE_LOCALE_STOREFRONT_SETTING",payload:{country:e,language:t,feedProfileId:r}})},updateStorefrontLastUpdated:e=>{o({type:"UPDATE_STOREFRONT_LAST_UPDATED",payload:e})}})),[o,t]);return(0,l.jsx)(d,{value:s,children:e})}},695683:(e,t,o)=>{o.d(t,{Z:()=>r});const r={currentViewingLocale:{country:"",language:"",feedProfileId:""},lastUpdated:0}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/95422.es_ES-267cbb85a02bbeba.mjs.map