(window.webpackJsonp=window.webpackJsonp||[]).push([[25,20,21],{377:function(e,t,o){"use strict";o.r(t);var c=o(488),n={props:{label:{type:String,default:void 0},icon:{type:String,default:void 0},login:{type:String,default:void 0},height:{type:String,default:void 0}}},r=o(38),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)(c.a,{attrs:{label:e.label,dark:"","persistent-placeholder":"",outlined:"",rules:[function(){return!!e.login||"This field is required"}],"append-icon":e.icon,height:e.height},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},381:function(e,t,o){"use strict";o.r(t);var c=o(488),n={props:{height:{type:String,default:void 0}},data:function(){return{client:{},showPassword:!1}}},r=o(38),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)(c.a,{attrs:{dark:"","persistent-placeholder":"",rules:[function(){return!!e.client.password||"This field is required"}],"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",label:"Password",height:e.height,outlined:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.client.password,callback:function(t){e.$set(e.client,"password",t)},expression:"client.password"}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},384:function(e,t,o){var content=o(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("80305dd4",content,!0,{sourceMap:!1})},400:function(e,t,o){"use strict";o(384)},401:function(e,t,o){var c=o(15)(!1);c.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=ABeeZee);"]),c.push([e.i,'.fade-enter-active[data-v-0c90ee8c],.fade-leave-active[data-v-0c90ee8c]{transition:opacity .5s ease}.fade-enter-from[data-v-0c90ee8c],.fade-leave-to[data-v-0c90ee8c]{opacity:0}.h-0[data-v-0c90ee8c]{height:0%}.w-0[data-v-0c90ee8c]{width:0}.h-25[data-v-0c90ee8c]{height:25%}.w-25[data-v-0c90ee8c]{width:25%}.h-50[data-v-0c90ee8c]{height:50%}.w-50[data-v-0c90ee8c]{width:50%}.h-75[data-v-0c90ee8c]{height:75%}.w-75[data-v-0c90ee8c]{width:75%}.h-100[data-v-0c90ee8c]{height:100%}.w-100[data-v-0c90ee8c]{width:100%}.v-treeview-node__toggle[data-v-0c90ee8c]{color:#fff!important}input[data-v-0c90ee8c]:-webkit-autofill,input[data-v-0c90ee8c]:-webkit-autofill:active,input[data-v-0c90ee8c]:-webkit-autofill:focus,input[data-v-0c90ee8c]:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}input[data-v-0c90ee8c]:-webkit-autofill{-webkit-text-fill-color:#fff!important}.tab-button[data-v-0c90ee8c]{background-color:grey;width:10px;height:10px}.transition[data-v-0c90ee8c]{display:inline-block;color:#fff}.transition[data-v-0c90ee8c]:after{content:"";display:block;width:0;height:3px!important;background:#000!important;transition:width .2s}.transition[data-v-0c90ee8c]:hover:after{width:100%;transition:width .2s}.transition .v-ripple__container[data-v-0c90ee8c],.transition[data-v-0c90ee8c]:before{opacity:0!important}.h0[data-v-0c90ee8c]{font-size:12rem}.h1[data-v-0c90ee8c]{font-size:8rem}.h2[data-v-0c90ee8c]{font-size:6rem}.h3[data-v-0c90ee8c]{font-size:4rem}.h4[data-v-0c90ee8c]{font-size:3rem}.h5[data-v-0c90ee8c]{font-size:2rem}.h6[data-v-0c90ee8c]{font-size:1.5rem}.h7[data-v-0c90ee8c]{font-size:1.26rem}@media screen and (max-width:1264px){.heading[data-v-0c90ee8c]{font-size:22vw}.head[data-v-0c90ee8c]{line-height:18vw}}@media screen and (min-width:1264px){.heading[data-v-0c90ee8c]{font-size:12vw}.head[data-v-0c90ee8c]{letter-spacing:.1vw;line-height:10vw}}.progress-indicator-wrapper[data-v-0c90ee8c]{z-index:5;position:fixed;height:6px;background-color:#eee;width:100%;top:80px}.progress-indicator-wrapper .progress-indicator[data-v-0c90ee8c]{height:6px;background:#fc4097}.word-wrap-normal[data-v-0c90ee8c]{word-wrap:normal;word-break:keep-all;text-align:justify;text-justify:inter-character}.v-carousel .theme--dark.v-btn.v-btn--icon .mdi-circle[data-v-0c90ee8c]{color:#000}.text-alignment[data-v-0c90ee8c]{line-height:1.5rem;letter-spacing:.025em}.theme--light.v-sheet .no-color[data-v-0c90ee8c]{background-color:transparent;border-color:transparent;color:rgba(0,0,0,.87)}.label-icon[data-v-0c90ee8c]{height:0!important}.v-label[data-v-0c90ee8c]{font-size:2rem}',""]),e.exports=c},429:function(e,t,o){"use strict";o.r(t);var c=o(185),n=o(364),r=o(46),l={data:function(){return{forms:[{label:"First name",class:"mt-6 ml-1"},{label:"Last name",class:"mt-6 ml-5 mr-1"}],cards:[{text:"Email"},{text:"Password"}],buttons:[{text:"Change method"},{text:"Create account"}]}}},d=(o(400),o(38)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t(r.a,{attrs:{width:"40%",color:"transparent grey--text"}},[t("div",{staticClass:"h6 font-weight-bold"},[e._v("START FOR FREE")]),e._v(" "),t("div",{staticClass:"h5 white--text font-weight-bold"},[e._v("Create new account.")]),e._v(" "),t(r.a,{staticClass:"mt-2",attrs:{width:"100%",color:"transparent"}},[t(n.a,{attrs:{dense:""}},e._l(e.forms,(function(form,o){return t("kq-form",{key:o,class:form.class,attrs:{label:form.label,"v-model":e.login,icon:form.icon}})})),1),e._v(" "),t("kq-form",{attrs:{label:"Email","v-model":e.login,icon:"mdi-email"}}),e._v(" "),t("kq-form-password"),e._v(" "),e._l(e.buttons,(function(button,o){return t(c.a,{key:o,staticClass:"rounded-pill mr-5 mt-11 white-text",class:button.class,attrs:{height:"8vh",color:"white",outlined:""}},[t("div",[e._v(e._s(button.text))])])}))],2)],1)}),[],!1,null,"0c90ee8c",null);t.default=component.exports;installComponents(component,{KqForm:o(377).default,KqFormPassword:o(381).default})}}]);