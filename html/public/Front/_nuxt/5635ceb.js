(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{485:function(t,e){},486:function(t,e){},491:function(t,e){},492:function(t,e){},497:function(t,e){},498:function(t,e){},500:function(t,e){},504:function(t,e){},506:function(t,e){},509:function(t,e){},514:function(t,e){},516:function(t,e){},573:function(t,e,o){var content=o(711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("37df5597",content,!0,{sourceMap:!1})},710:function(t,e,o){"use strict";o(573)},711:function(t,e,o){var n=o(28)(!1);n.push([t.i,".reg{margin-bottom:20px}.v-slide-group__prev{position:absolute}",""]),t.exports=n},734:function(t,e,o){"use strict";o.r(e);o(158),o(6),o(20);var n=o(483),r={layout:"empty",data:function(){return{UserName:"",Password:"",Rpassword:"",EMail:"",Indirizzo:"",pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,valid:!1,show:!1,alert:{message:"",show:!1,type:""},user:sessionStorage.getItem("nome"),items:[{title:"General",icon:"mdi-account"},{title:"I miei noleggi",icon:"mdi-home-city"},{title:"Users",icon:"mdi-account-group-outline"}]}},beforeMount:function(){var t=this;this.$axios.$get("http://site202109.tw.cs.unibo.it/mongo/people?nome="+this.user).then((function(e){t.user=e.val}))},methods:{active:function(t){var e=new Date(t.inizio),o=new Date(t.fine),n=new Date(Date.now());return""===t.funzionario?"background-color: #f1c40f":n<e?"background-color: #3498db":n>o&&"Concluso"===t.concluso?"background-color: #27ae60":n>=e&&n<=o?"background-color: #e67e22":n>o&&"Concluso ma non pagato"===t.concluso?"background-color: #e74c3c":void 0},elimina:function(){this.user.storico_noleggi.find((function(t){return"Da concludere"===t.concluso||"Concluso ma non pagato"===t.concluso||"In corso"===t.concluso||"Da iniziare"===t.concluso}))?(this.alert.message="Alcuni noleggi non permettono la cancellazione",this.alert.type="warning",this.alert.show=!0):this.$axios({method:"delete",url:"http://site202109.tw.cs.unibo.it/mongo/deletehere?type=cliente",data:{nome:this.user.nome}}).then(window.location.href="../")},eliminaNoleggio:function(t){console.log(t)},modificaShow:function(t,e){this.$axios({method:"get",url:"http://site202109.tw.cs.unibo.it/mongo/offices?nome="+t.office_id}).then((function(o){sessionStorage.setItem(o.data._id,JSON.stringify(o.data)),sessionStorage.setItem("modifica",e),sessionStorage.setItem("noleggio",JSON.stringify(t)),sessionStorage.setItem("show",!e),window.location.href="../Pay/#"+o.data._id}))},modifica:function(){var t=this;this.UserName||this.EMail||this.Password||this.Indirizzo?this.$axios({method:"get",url:"http://site202109.tw.cs.unibo.it/mongo/people?nome="+this.UserName}).then((function(e){"non trovato"!==e.data?(t.alert.message="Nome utente già presente",t.alert.type="error",t.alert.show=!0):t.$axios({method:"get",url:"http://site202109.tw.cs.unibo.it/mongo/people?mail="+t.EMail}).then((function(e){"non trovato"!==e.data?(t.alert.message="Email già presente",t.alert.type="error",t.alert.show=!0):""===t.EMail||t.pattern.test(t.EMail)?t.Password!==t.Rpassword?(t.alert.message="Password diverse",t.alert.type="error",t.alert.show=!0,t.Rpassword=""):n.hash(t.Password||t.user.psw,10,(function(e,o){if(e)throw e;t.$axios({method:"put",url:"http://site202109.tw.cs.unibo.it/mongo/puthere?type=modcliente",headers:{},data:{ToChange:t.user.nome,nome:t.UserName?t.UserName:t.user.nome,indirizzo:t.Indirizzo?t.Indirizzo:t.user.indirizzo,mail:t.EMail?t.EMail:t.user.mail,psw:t.Password?o:t.user.psw}}).then((function(e){200===e.status&&(t.alert.message="Modifica con successo",t.alert.type="success",t.alert.show=!0,""!==t.UserName&&sessionStorage.setItem("user",JSON.stringify({nome:t.UserName})),window.location.reload())}))})):(t.alert.message="Email non corretta",t.alert.type="error",t.alert.show=!0)}))})):(this.alert.message="Nessun elemnto da modificare",this.alert.type="warning",this.alert.show=!0)}}},l=(o(710),o(88)),c=o(89),d=o.n(c),v=o(720),m=o(190),f=o(426),h=o(427),w=o(414),_=o(408),y=o(719),x=o(627),z=o(402),I=o(587),N=o(187),S=o(188),V=o(120),k=o(75),C=o(411),M=o(726),E=o(727),U=o(736),D=o(718),P=o(453),T=o(574),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{padding:"3% 10% 2% 10%",height:"100%"}},[o("v-row",{staticClass:"justify-start",attrs:{dense:""}},[o("v-col",{attrs:{cols:"12"}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.window.location.href="../Home"}}},[o("v-icon",[t._v(" mdi-chevron-left ")]),t._v(" "),o("v-icon",[t._v(" mdi-home ")])],1)],1)],1),t._v(" "),o("v-row",{staticStyle:{height:"100%"}},[o("v-card",{staticStyle:{height:"100%",width:"100%"}},[o("v-toolbar",{attrs:{flat:"",dark:""}},[o("v-toolbar-title",[t._v("User Profile")])],1),t._v(" "),o("v-tabs",{attrs:{"hide-slider":"","slider-size":"0","slider-color":"trasparent"}},[o("v-tab",[o("v-icon",[t._v("\n\t\t\t\t\t\tmdi-account\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\tGeneral\n\t\t\t\t")],1),t._v(" "),o("v-tab",[o("v-icon",[t._v("\n\t\t\t\t\t\tmdi-home\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\tI miei noleggi\n\t\t\t\t")],1),t._v(" "),o("v-tab",[o("v-icon",[t._v("\n\t\t\t\t\t\tmdi-pencil\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\tModifica\n\t\t\t\t")],1),t._v(" "),o("v-tab-item",[o("v-container",{staticStyle:{margin:"20px 20px 20px 20px"}},[o("v-row",{staticStyle:{"margin-bottom":"20px"}},[o("v-col",{attrs:{cols:"4",sm:"2"}},[o("v-avatar",{attrs:{size:"70"}},[o("img",{attrs:{alt:"user",src:"https://picsum.photos/200/300"}})])],1),t._v(" "),o("v-col",{staticClass:"d-flex align-center",attrs:{cols:"8",sm:"10"}},[o("v-row",[o("p",[t._v("Nome"),o("br"),t._v(t._s(t.user.nome))])])],1)],1),t._v(" "),o("v-row",[o("v-divider")],1),t._v(" "),o("v-row",{staticStyle:{"margin-top":"10px"}},[o("v-col",[o("v-row",[o("p",[t._v("E-Mail"),o("br"),t._v(t._s(t.user.mail))])]),t._v(" "),o("v-row",[o("p",[t._v("Indirizzo di fatturazione"),o("br"),t._v(t._s(t.user.indirizzo))])])],1)],1)],1)],1),t._v(" "),o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",[o("v-list",{attrs:{dense:""}},t._l(t.user.storico_noleggi,(function(e,n){return o("v-list-item",{key:n,staticStyle:{border:"1px solid white"},style:t.active(e),attrs:{dense:""}},[o("v-list-item-content",[o("v-col",{attrs:{cols:"8",sm:"5"}},[o("v-row",[o("v-list-item-title",[t._v("Ufficio: "+t._s(e.office_id))])],1),t._v(" "),o("v-row",[o("v-list-item-subtitle",[t._v("Started at: "+t._s(e.inizio))])],1),t._v(" "),o("v-row",[o("v-list-item-subtitle",[t._v("Ended at: "+t._s(e.fine))])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"8",sm:"5"}},[o("v-row",[o("v-list-item-title",[t._v("Stato: "+t._s(e.concluso))])],1),t._v(" "),o("v-row",[o("v-list-item-subtitle",[t._v("Prezzo: "+t._s(e.pagamento))])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"Da iniziare"===e.concluso?1:2}},[o("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:function(o){return t.modificaShow(e,!1)}}},[o("v-icon",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tmdi-eye\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:"Da iniziare"===e.concluso||""===e.funzionario,expression:"noleggio.concluso === 'Da iniziare' || noleggio.funzionario === ''"}],attrs:{cols:"1"}},[o("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:function(o){return t.modificaShow(e,!0)}}},[o("v-icon",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tmdi-pencil\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),o("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:function(o){return t.eliminaNoleggio(e)}}},[o("v-icon",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tmdi-close\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)})),1)],1)],1)],1),t._v(" "),o("v-tab-item",[o("v-card",{staticStyle:{padding:"20px 30px 0px 10px"},attrs:{flat:""}},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.modifica.apply(null,arguments)}}},[o("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{clearable:"",dense:"",placeholder:t.user.nome,label:"Nuovo UserName","hide-details":""},model:{value:t.UserName,callback:function(e){t.UserName=e},expression:"UserName"}}),t._v(" "),o("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{type:"email",clearable:"",dense:"",placeholder:t.user.mail,label:"Nuova E-Mail","hide-details":""},model:{value:t.EMail,callback:function(e){t.EMail=e},expression:"EMail"}}),t._v(" "),o("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{clearable:"",dense:"",placeholder:t.user.indirizzo,label:"Nuovo Indirizzo di fatturazzione","hide-details":""},model:{value:t.Indirizzo,callback:function(e){t.Indirizzo=e},expression:"Indirizzo"}}),t._v(" "),o("v-text-field",{staticClass:"reg",attrs:{type:t.show?"text":"password",clearable:"",dense:"",label:" Nuova password","hide-details":"","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.Password,callback:function(e){t.Password=e},expression:"Password"}}),t._v(" "),o("v-text-field",{staticClass:"reg",attrs:{type:t.show?"text":"password",clearable:"",dense:"",label:"Ripeti nuova password","hide-details":"","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.Rpassword,callback:function(e){t.Rpassword=e},expression:"Rpassword"}}),t._v(" "),o("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\tSalva Modifiche\n\t\t\t\t\t\t\t")])],1),t._v(" "),o("v-divider"),t._v(" "),o("div",{staticClass:"d-flex justify-end"},[o("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:t.elimina}},[t._v("\n\t\t\t\t\t\t\t\tElimina account\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{transition:"dialog-top-transition",width:"auto"},model:{value:t.alert.show,callback:function(e){t.$set(t.alert,"show",e)},expression:"alert.show"}},[o("v-alert",{staticClass:"ma-0",attrs:{type:t.alert.type}},[t._v(t._s(t.alert.message))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:v.a,VAvatar:m.a,VBtn:f.a,VCard:h.a,VCardText:w.a,VCol:_.a,VContainer:y.a,VDialog:x.a,VDivider:z.a,VForm:I.a,VIcon:N.a,VList:S.a,VListItem:V.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:C.a,VTab:M.a,VTabItem:E.a,VTabs:U.a,VTextField:D.a,VToolbar:P.a,VToolbarTitle:T.a})}}]);