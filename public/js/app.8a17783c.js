(function(e){function t(t){for(var a,c,s=t[0],i=t[1],u=t[2],p=0,b=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d37":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-main",[n("router-view")],1)],1)},o=[],c=(n("5c0b"),n("2877")),s=n("6544"),i=n.n(s),u=n("7496"),l=n("f6c4"),p={},b=Object(c["a"])(p,r,o,!1,null,null,null),d=b.exports;i()(b,{VApp:u["a"],VMain:l["a"]});var f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("HomeComponent")],1)},h=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page"},[n("v-list",{attrs:{subheader:"","two-line":""}},[n("v-subheader",{attrs:{inset:""}},[e._v("Databases")]),e._l(e.databases,(function(t){return n("v-list-item",{key:t.name},[n("v-list-item-avatar",[n("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[e._v(" mdi-database ")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}}),n("v-list-item-subtitle",{domProps:{textContent:e._s("Size: "+e.formatBytes(t.sizeOnDisk))}}),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.empty?"Empty: YES":"Empty: NO")}})],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:"",title:"Backup"},on:{click:function(n){return e.toggleBackup(t.name)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-backup-restore")])],1),e.activeDatabase===t.name?n("BackupForm",{attrs:{database:t},on:{close:function(t){e.activeDatabase=null}}}):e._e()],1)],1)}))],2)],1)},g=[],w=(n("b680"),n("96cf"),n("1da1")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{staticClass:"backup-form",on:{submit:function(e){e.preventDefault()}}},[n("v-container",[e.progress?e._e():n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Host (optional)"},model:{value:e.backupForm.host,callback:function(t){e.$set(e.backupForm,"host",t)},expression:"backupForm.host"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Port (optional)"},model:{value:e.backupForm.port,callback:function(t){e.$set(e.backupForm,"port",t)},expression:"backupForm.port"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Directory (optional)"},model:{value:e.backupForm.directory,callback:function(t){e.$set(e.backupForm,"directory",t)},expression:"backupForm.directory"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Database Name",required:""},model:{value:e.backupForm.database,callback:function(t){e.$set(e.backupForm,"database",t)},expression:"backupForm.database"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},e._l(e.database.collections,(function(t){return n("div",{key:t},[n("v-checkbox",{attrs:{label:t,color:"red darken-3",value:t,"hide-details":""},on:{change:function(n){return e.toggleCollection(t)}}})],1)})),0)],1),e.progress?e._e():n("v-row",{staticClass:"footer"},[n("v-btn",{attrs:{depressed:"",elevation:"0",outlined:""},on:{click:function(t){return e.close()}}},[e._v(" Close ")]),n("v-btn",{attrs:{depressed:"",elevation:"2",outlined:""},on:{click:function(t){return e.createBackup()}}},[e._v(" Backup ")])],1),e.progress?n("v-row",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e._e(),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.message)+" ")])],1)],1)},x=[],_=(n("4de4"),n("caad"),n("b0c0"),n("2532"),n("d4ec")),F=n("bee2"),O=n("bc3a"),B=n.n(O),j="/api/v1",C=function(){function e(){Object(_["a"])(this,e)}return Object(F["a"])(e,null,[{key:"createBackup",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(j,"/backup"),e.next=4,B.a.post(n,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),V={name:"BackupForm",props:["database"],data:function(){return{progress:!1,message:null,snackbar:!1,backupForm:{host:null,port:null,database:null,directory:null,collections:[]}}},mounted:function(){this.backupForm.database=this.database.name},methods:{createBackup:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.progress=!0,t.next=3,C.createBackup(e.backupForm);case 3:n=t.sent,n.success&&(e.message=n.message,e.progress=!1,e.snackbar=!0);case 5:case"end":return t.stop()}}),t)})))()},toggleCollection:function(e){this.backupForm.collections.includes(e)?this.backupForm.collections=this.backupForm.collections.filter((function(t){return t!==e})):this.backupForm.collections.push(e)},close:function(){this.$emit("close")}}},D=V,P=(n("a2aa"),n("8336")),S=n("ac7c"),R=n("62ad"),M=n("a523"),$=n("4bd4"),E=n("490a"),H=n("0fd9"),I=n("2db4"),L=n("8654"),A=Object(c["a"])(D,y,x,!1,null,"73ee3a69",null),T=A.exports;i()(A,{VBtn:P["a"],VCheckbox:S["a"],VCol:R["a"],VContainer:M["a"],VForm:$["a"],VProgressCircular:E["a"],VRow:H["a"],VSnackbar:I["a"],VTextField:L["a"]});var N="/api/v1",q=function(){function e(){Object(_["a"])(this,e)}return Object(F["a"])(e,null,[{key:"getDatabases",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(N,"/databases"),e.next=4,B.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),z={name:"HomeComponent",components:{BackupForm:T},data:function(){return{databases:[],activeDatabase:null}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadDatabases();case 2:e.databases=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{loadDatabases:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.getDatabases();case 2:return t=e.sent,e.abrupt("return",t.databases);case 4:case"end":return e.stop()}}),e)})))()},formatBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=1024,a=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,o)).toFixed(a))+" "+r[o]},toggleBackup:function(e){this.activeDatabase=this.activeDatabase!==e?e:null}}},J=z,Y=n("132d"),G=n("8860"),K=n("da13"),Z=n("1800"),Q=n("8270"),U=n("5d23"),W=n("e0c7"),X=Object(c["a"])(J,k,g,!1,null,null,null),ee=X.exports;i()(X,{VBtn:P["a"],VIcon:Y["a"],VList:G["a"],VListItem:K["a"],VListItemAction:Z["a"],VListItemAvatar:Q["a"],VListItemContent:U["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VSubheader:W["a"]});var te={name:"Home",components:{HomeComponent:ee}},ne=te,ae=Object(c["a"])(ne,v,h,!1,null,null,null),re=ae.exports;i()(ae,{VContainer:M["a"]}),a["a"].use(m["a"]);var oe=[{path:"/",name:"Home",component:re},{path:"/home",name:"Home",component:re}],ce=new m["a"]({mode:"history",base:"/",routes:oe}),se=ce,ie=n("2f62");a["a"].use(ie["a"]);var ue=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}}),le=n("f309");a["a"].use(le["a"]);var pe=new le["a"]({});n("d5e8"),n("5363");a["a"].config.productionTip=!1,new a["a"]({router:se,store:ue,vuetify:pe,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a2aa:function(e,t,n){"use strict";n("1d37")}});
//# sourceMappingURL=app.8a17783c.js.map