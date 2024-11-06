(function(){"use strict";var o={6384:function(o,a,t){var i=t(5130),n=t(6768);function e(o,a,t,i,e,r){const s=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(s)}var r={name:"App"},s=t(1241);const u=(0,s.A)(r,[["render",e]]);var l=u,h=t(1387),p=t(4232);const c={class:"login-container"},d={class:"login-box"},g={class:"input-container"},m={key:0};function v(o,a,t,e,r,s){return(0,n.uX)(),(0,n.CE)("div",c,[(0,n.Lk)("div",d,[a[4]||(a[4]=(0,n.Lk)("h1",null,"Kirish sahifasi",-1)),(0,n.Lk)("form",{onSubmit:a[2]||(a[2]=(0,i.D$)(((...o)=>s.login&&s.login(...o)),["prevent"]))},[(0,n.Lk)("div",g,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>r.username=o),type:"text",placeholder:"Foydalanuvchi nomi",required:""},null,512),[[i.Jo,r.username]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>r.password=o),type:"password",placeholder:"Parol",required:""},null,512),[[i.Jo,r.password]])]),a[3]||(a[3]=(0,n.Lk)("button",{type:"submit",class:"login-btn"},"Kirish",-1))],32),r.error?((0,n.uX)(),(0,n.CE)("p",m,(0,p.v_)(r.error),1)):(0,n.Q3)("",!0)])])}t(4114);var k={name:"LoginPage",data(){return{username:"",password:"",error:null}},methods:{async login(){try{const o=await fetch("https://trackapi.pochta.uz/api/token/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})});if(!o.ok)throw new Error("Login failed");const a=await o.json();localStorage.setItem("token",a.access),this.$router.push("/dashboard")}catch(o){this.error=o.message}}}};const b=(0,s.A)(k,[["render",v],["__scopeId","data-v-77e3f060"]]);var y=b;const f={class:"dashboard"},q={class:"banner"},S={class:"filters"},P={class:"filter-card"},L=["value"],z={class:"results"},x=["onClick"],T=["src"],C={class:"popup-content"},O=["src"],_={class:"pagination"},F=["disabled"],B={class:"page-info"},D=["disabled"];function Q(o,a,t,e,r,s){return(0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("div",q,[a[14]||(a[14]=(0,n.Lk)("h2",null,"GIBRID XATLARINI TOPSHIRILISHINI NAZORAT QILISH DASTURI",-1)),(0,n.Lk)("button",{onClick:a[0]||(a[0]=(...o)=>s.logout&&s.logout(...o)),class:"logout-button"},"Chiqish")]),(0,n.Lk)("div",S,[(0,n.Lk)("div",P,[(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":a[1]||(a[1]=o=>r.region=o),onChange:a[2]||(a[2]=(...o)=>s.updateDistricts&&s.updateDistricts(...o))},a[15]||(a[15]=[(0,n.Fv)('<option value="" data-v-8049777a>Viloyatlar</option><option value="Toshkent shahar" data-v-8049777a>Toshkent shahar</option><option value="Surxondaryo" data-v-8049777a>Surxondaryo</option><option value="Samarqand" data-v-8049777a>Samarqand</option><option value="Buxoro" data-v-8049777a>Buxoro</option><option value="Andijon" data-v-8049777a>Andijon</option><option value="Namangan" data-v-8049777a>Namangan</option><option value="Farg&#39;ona" data-v-8049777a>Farg&#39;ona</option><option value="Jizzax" data-v-8049777a>Jizzax</option><option value="Sirdaryo" data-v-8049777a>Sirdaryo</option><option value="Qashqadaryo" data-v-8049777a>Qashqadaryo</option><option value="Toshkent viloyati" data-v-8049777a>Toshkent viloyati</option><option value="Xorazm" data-v-8049777a>Xorazm</option><option value="Navoiy" data-v-8049777a>Navoiy</option><option value="Qoraqalpog&#39;iston Respublikasi" data-v-8049777a> Qoraqalpog&#39;iston Respublikasi </option>',15)]),544),[[i.u1,r.region]]),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":a[3]||(a[3]=o=>r.district=o)},[a[16]||(a[16]=(0,n.Lk)("option",{value:""},"Tumanlar",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.districts,(o=>((0,n.uX)(),(0,n.CE)("option",{key:o,value:o},(0,p.v_)(o),9,L)))),128))],512),[[i.u1,r.district]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>r.barcode=o),placeholder:"Barcode"},null,512),[[i.Jo,r.barcode]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[5]||(a[5]=o=>r.fish=o),placeholder:"F.I.SH"},null,512),[[i.Jo,r.fish]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[6]||(a[6]=o=>r.post_name=o),placeholder:"Aloqa bo'lim"},null,512),[[i.Jo,r.post_name]]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[7]||(a[7]=o=>r.date=o),placeholder:"ДД.ММ.РРРР",type:"date"},null,512),[[i.Jo,r.date]]),(0,n.Lk)("button",{onClick:a[8]||(a[8]=(...o)=>s.applyFilter&&s.applyFilter(...o))},"Filterni qo'llash")])]),(0,n.Lk)("div",z,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.images,(o=>((0,n.uX)(),(0,n.CE)("div",{key:o.barcode,class:"image-card",onClick:a=>s.openPopup(o)},[(0,n.Lk)("img",{src:`https://trackapi.pochta.uz/media/${o.photo}`,alt:"Image"},null,8,T)],8,x)))),128))]),r.showPopup?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"popup",onClick:a[11]||(a[11]=(0,i.D$)(((...o)=>s.closePopup&&s.closePopup(...o)),["self"]))},[(0,n.Lk)("div",C,[(0,n.Lk)("span",{class:"close",onClick:a[9]||(a[9]=(...o)=>s.closePopup&&s.closePopup(...o))},"×"),(0,n.Lk)("img",{src:`https://trackapi.pochta.uz/media/${r.popupData.photo}`,alt:"Popup Image",onClick:a[10]||(a[10]=(...o)=>s.toggleFullScreen&&s.toggleFullScreen(...o)),class:"popup-image image-container"},null,8,O),(0,n.Lk)("p",null,"Barcode: "+(0,p.v_)(r.popupData.barcode),1),(0,n.Lk)("p",null,"F.I.SH: "+(0,p.v_)(r.popupData.fish),1),(0,n.Lk)("p",null,"Viloyat: "+(0,p.v_)(r.popupData.region__name),1),(0,n.Lk)("p",null,"Tuman: "+(0,p.v_)(r.popupData.district__name),1),(0,n.Lk)("p",null,"Sana: "+(0,p.v_)(r.popupData.date),1),(0,n.Lk)("p",null,"Aloqa bo'lim: "+(0,p.v_)(r.popupData.post_name),1),a[17]||(a[17]=(0,n.Lk)("p",null,"Oluvchi manzili:",-1))])])):(0,n.Q3)("",!0),(0,n.Lk)("div",_,[(0,n.Lk)("button",{onClick:a[12]||(a[12]=o=>s.goToPage(r.currentPage-1)),disabled:!r.previous,class:"pag-button"}," Orqaga ",8,F),(0,n.Lk)("span",B,(0,p.v_)(r.currentPage)+" ... "+(0,p.v_)(r.totalPages),1),(0,n.Lk)("button",{onClick:a[13]||(a[13]=o=>s.goToPage(r.currentPage+1)),disabled:!r.next,class:"pag-button"}," Oldinga ",8,D)])])}var w=t(4982),I={name:"DashboardPage",data(){return{barcode:"",fish:"",region:"",district:"",post_name:"",date:"",images:[],currentPage:1,totalPages:1,next:null,previous:null,showPopup:!1,popupData:{},itemsPerPage:200,districts:[]}},beforeRouteEnter(o,a,t){const i=localStorage.getItem("token");i?t():t({name:"Login"})},methods:{logout(){localStorage.removeItem("token"),this.$router.push({name:"Login"})},updateDistricts(){"Buxoro"===this.region?this.districts=["Jondor","Buxoro Tuman","Peshku","Qorovulbozor","Buxoro Shahar","G'ijduvon","Shofirkon","Kogon","Olot","Romitan","Vobkent","Qorako'l"]:"Toshkent shahar"===this.region?this.districts=["Bektemir","Chilanzar","Mirabad","Mirzo Ulugbek","Olmazor","Shayhontohur","Sirgali","Uchtepa","Yashnabad","Yangi Hayot","Yunusabad","Yakkasaray"]:"Samarqand"===this.region?this.districts=["Samarqand","Nurobod","Kattaqo'rg'on","Payariq","Samarqand shahri","Pastdarg'om","Ishtixon","Oqdaryo","Narpay","Qo'shhrabot","Urgut","Jomboy","Toyloq","Samarqand tumani","Paxtachi","Bulung'ur","Kattaqo'rg'on tumani"]:"Andijon"===this.region?this.districts=["Izboskan","Oltinko'l","Buloqboshi","Andijon shahri","Jalolquduq","Xo'jaobod","Honobod","Paxtaobod Andijon","Shahrixon","Asaka","Marhamat","Ulug'nor","Baliqchi","Bo'ston","Qo'rg'ontepa"]:"Surxondaryo"===this.region?this.districts=["Sho'rchi","Boysun","Muzrabot","Oltinsoy","Qumqo'rg'on","Jarqo'rg'on","Angor","Bandixon","Sherobod","Termiz","Sariosiyo","Uzun","Qiziriq","Denov"]:"Namangan"===this.region?this.districts=["Namangan shahri","Uychi","Pop","Chust","Yangiqo'rg'on","To'raqo'rg'on","Mingbuloq","Chortoq","Kosonsoy","Namangan Tumani","Uchqo'rg'on","Norin"]:"Farg'ona"===this.region?this.districts=["Dang'ara","Beshariq","Oltiariq","Furqat","Qushtepa","Yozyovon","O'zbekiston tumani","Quvasoy","Quva","Farg'ona shahar","Farg'ona tumani","Toshloq","Rishton","Buvayda","Qo'qon Shahri","Uchko'prik","So'x","Bog'dod","Marg'ilon"]:"Jizzax"===this.region?this.districts=["Mirzacho'l","Jizzax shahri","Sharof Rashidov","G'allaorol","Zomin","Zafarobod","Forish","Paxtakor","Do'stlik","Yangiobod","Arnasoy","Baxmal","Zarbdor"]:"Sirdaryo"===this.region?this.districts=["Oqoltin","Guliston","Dehqonobod Sirdaryo","Sirdaryo tuman","Xovos","Boyovut tumani","Sayxunobod","Sardoba","Mirzaobod"]:"Qashqadaryo"===this.region?this.districts=["Beshkent","Qamashi","G'uzor","Qarshi Shahri","Nishon","Mirishkor","Koson","Yakkabog'","Kitob","Chiroqchi","Kasbi","Muborak","Dehqonobod","Shahrisabz"]:"Toshkent viloyati"===this.region?this.districts=["Olmaliq shahri","Buka","Oqqo'rg'on","Urta Chirchiq","Bekobod shahri","Chirchiq shahri","Ohangaron","Quyi Chirchiq","Bekobod tumani","Toshkent Tuman","Yangiyul shahri","Qibray","Angren Shahri","Parkent","Piskent","Yangiyul tumani","Yuqori Chirchiq","Bostanlik","Chinaz","Zangiota"]:"Xorazm"===this.region?this.districts=["Tuproqqal'a","Xonqa","Urganch Shahri","Shovot","Urganch tumani","Yangibozor","Bog'ot","Qo'shko'pir","Gurlan","Yangiariq","Xiva","Hazorasp"]:"Navoiy"===this.region?this.districts=["Karmana","Konimex","Qiziltepa","Xatirchi","Navoiy Shahri","Uchquduq","Navbahor","Nurota","Zarafshan"]:"Qoraqalpog'iston Respublikasi"===this.region?this.districts=["Ellikqala","Qo'ng'irot","Nukus Shahar","Nukus tumani","Moynoq","Xo'jayli","Beruniy Tumani","Chimboy tumani","Shumanay","Taxtako'pir","Qorao'zak","Amudaryo Tumani","Kegeyli","To'rtko'l","Qanliko'l"]:this.districts=[],this.district=""},async fetchData(o={}){try{const a=localStorage.getItem("token"),t=await w.A.get("https://trackapi.pochta.uz/api/users/reimages/",{headers:{Authorization:`Bearer ${a}`},params:{barcode:o.barcode||this.barcode,fish:o.fish||this.fish,region:o.region||this.region,district:o.district||this.district,post_name:o.post_name||this.post_name,date:o.date||this.date,page:this.currentPage,page_size:this.itemsPerPage}});this.images=t.data.results.images,this.totalPages=Math.ceil(t.data.count/this.itemsPerPage),this.next=t.data.next,this.previous=t.data.previous}catch(a){a.response&&401===a.response.status?this.logout():console.error("Error fetching data:",a)}},applyFilter(){this.currentPage=1,this.fetchData()},goToPage(o){o>=1&&o<=this.totalPages&&(this.currentPage=o,this.fetchData())},openPopup(o){this.popupData=o,this.showPopup=!0},closePopup(){this.showPopup=!1,this.popupData={}},toggleFullScreen(){const o=document.querySelector(".popup-image");o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}},mounted(){this.fetchData()}};const A=(0,s.A)(I,[["render",Q],["__scopeId","data-v-8049777a"]]);var N=A;const U=[{path:"/",name:"Login",component:y},{path:"/dashboard",name:"Dashboard",component:N}],X=(0,h.aE)({history:(0,h.LA)("/"),routes:U});var j=X;const R=(0,i.Ef)(l);R.use(j),R.mount("#app")}},a={};function t(i){var n=a[i];if(void 0!==n)return n.exports;var e=a[i]={exports:{}};return o[i].call(e.exports,e,e.exports,t),e.exports}t.m=o,function(){var o=[];t.O=function(a,i,n,e){if(!i){var r=1/0;for(h=0;h<o.length;h++){i=o[h][0],n=o[h][1],e=o[h][2];for(var s=!0,u=0;u<i.length;u++)(!1&e||r>=e)&&Object.keys(t.O).every((function(o){return t.O[o](i[u])}))?i.splice(u--,1):(s=!1,e<r&&(r=e));if(s){o.splice(h--,1);var l=n();void 0!==l&&(a=l)}}return a}e=e||0;for(var h=o.length;h>0&&o[h-1][2]>e;h--)o[h]=o[h-1];o[h]=[i,n,e]}}(),function(){t.n=function(o){var a=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(a,{a:a}),a}}(),function(){t.d=function(o,a){for(var i in a)t.o(a,i)&&!t.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),function(){t.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={524:0};t.O.j=function(a){return 0===o[a]};var a=function(a,i){var n,e,r=i[0],s=i[1],u=i[2],l=0;if(r.some((function(a){return 0!==o[a]}))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(u)var h=u(t)}for(a&&a(i);l<r.length;l++)e=r[l],t.o(o,e)&&o[e]&&o[e][0](),o[e]=0;return t.O(h)},i=self["webpackChunkrasm"]=self["webpackChunkrasm"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(6384)}));i=t.O(i)})();
//# sourceMappingURL=app.ff17f788.js.map