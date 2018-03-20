webpackJsonp([1],{"+qQs":function(t,e){},FzXZ:function(t,e){},GRAY:function(t,e){},LFPy:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Vue.js Web Apps")]),this._v(" "),e("router-view"),this._v(" "),e("div",{staticClass:"pv4"},[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1)],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},r,!1,function(t){s("NmR/")},null,null).exports,o=s("/ocq"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h2",[t._v(t._s(t.msg))]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/meal"}},[t._v("Meal Calories Table")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/counter"}},[t._v("Simple Counter")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/calorie-calculator"}},[t._v("Calorie Calculator")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/firebase-calorie-calculator"}},[t._v("Firebase Calorie Calculator")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/auth"}},[t._v("Login")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/success"}},[t._v("Welcome")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/xslt"}},[t._v("XSLT")])],1)])])},staticRenderFns:[]};var l=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"App list:"}}},n,!1,function(t){s("FzXZ")},"data-v-c4ae4808",null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"w-100 mw5 center collapse"},[t._m(0),t._v(" "),s("tbody",[t._l(t.meals,function(e){return s("tr",{key:e.description,staticClass:"stripe-dark"},[s("td",{staticClass:"pa2"},[t._v(t._s(e.description))]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(e.calories))])])}),t._v(" "),s("tr",{staticClass:"bt b"},[s("td",{staticClass:"pa2 tr"},[t._v(" Total")]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(t.total))])])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pa2 tl"},[this._v("Meal")]),this._v(" "),e("th",{staticClass:"pa2 tr"},[this._v("Calories")])])])}]};var u=s("VU/8")({name:"Meal",data:function(){return{meals:[{description:"Breakfast",calories:460},{description:"Snack",calories:180},{description:"Lunch",calories:600}]}},computed:{total:function(){return this.meals.map(function(t){return t.calories}).reduce(function(t,e){return t+e},0)}}},c,!1,function(t){s("GRAY")},"data-v-34130d0c",null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mv2"},[t._v("Count: "+t._s(t.counter))]),t._v(" "),s("button",{staticClass:"pv1 ph2 mr2",on:{click:function(e){t.counter++}}},[t._v("+")]),t._v(" "),s("button",{staticClass:"pv1 ph2",on:{click:function(e){t.counter--}}},[t._v("-")])])},staticRenderFns:[]};var d=s("VU/8")({name:"HelloWorld",data:function(){return{counter:0}}},m,!1,function(t){s("cmH5")},"data-v-24881c00",null).exports,h={name:"Meal",data:function(){return{showForm:!1,meal:"",calories:1,errors:[],mode:null,meals:[{description:"Breakfast",calories:460},{description:"Snack",calories:180},{description:"Lunch",calories:600}]}},created:function(){this.CONSTANTS={MODE:{ADD:"Add",EDIT:"Edit"}},Object.defineProperty(this,"CONSTANTS",{configurable:!1,writable:!1}),this.mode=this.CONSTANTS.MODE.ADD},computed:{total:function(){return this.meals.map(function(t){return t.calories}).reduce(function(t,e){return t+e},0)}},methods:{showAddForm:function(){this.errors=[],this.mode=this.CONSTANTS.MODE.ADD,this.showForm=!0},save:function(){var t=this;if(this.checkForm())switch(this.showForm=!1,this.mode){case this.CONSTANTS.MODE.EDIT:this.meals=this.meals.map(function(e){return e.description.toUpperCase()===t.meal.toUpperCase()?{description:t.meal,calories:t.calories}:e});break;default:this.meals.some(function(e){return e.description.toUpperCase()===t.meal.toUpperCase()})?this.errors=["Meal "+this.meal+" already exists"]:this.meals.push({description:this.meal,calories:this.calories})}},checkForm:function(){if(this.errors=[],this.meal&&this.calories)return!0;this.meal||this.errors.push("Meal required."),this.calories||this.errors.push("Calories required.")},deleteMeal:function(t){console.log(t),this.meals=this.meals.filter(function(e){return e.description!==t})},editMeal:function(t){var e=this.meals.filter(function(e){return e.description===t});this.meal=e[0].description,this.calories=e[0].calories,this.showForm=!0,this.mode=this.CONSTANTS.MODE.EDIT}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-100 mw5 center"},[t.errors.length?s("p",[s("b",[t._v("Please correct the following error(s):")]),t._v(" "),s("ul",t._l(t.errors,function(e){return s("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showForm,expression:"!showForm"}],staticClass:"mv3",on:{click:t.showAddForm}},[t._v("Add Meal")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}]},[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{attrs:{for:"meal"}},[t._v("Meal:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.meal,expression:"meal",modifiers:{trim:!0}}],staticClass:"db mv1",attrs:{type:"text",name:"meal",id:"meal"},domProps:{value:t.meal},on:{input:function(e){e.target.composing||(t.meal=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("label",{attrs:{for:"calories"}},[t._v("Calories:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.calories,expression:"calories",modifiers:{number:!0}}],staticClass:"db mv1",attrs:{type:"number",min:"1",name:"calories",id:"calories"},domProps:{value:t.calories},on:{input:function(e){e.target.composing||(t.calories=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("button",{staticClass:"mv2",on:{click:t.save}},[t._v("Save")]),t._v(" "),s("button",{staticClass:"mv2",on:{click:function(e){t.errors=[],t.showForm=!1}}},[t._v("Cancel")])])])]),t._v(" "),s("table",{staticClass:"w-100 mw5 center collapse"},[t._m(0),t._v(" "),s("tbody",[t._l(t.meals,function(e){return s("tr",{key:e.description,staticClass:"stripe-dark"},[s("td",{staticClass:"pa2"},[t._v(t._s(e.description))]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(e.calories))]),t._v(" "),s("td",{staticClass:"pa2 tr"},[s("span",{on:{click:function(s){t.deleteMeal(e.description)}}},[s("i",{staticClass:"far fa-trash-alt ph2 pointer"})]),t._v(" "),s("span",{on:{click:function(s){t.editMeal(e.description)}}},[s("i",{staticClass:"fas fa-pencil-alt pointer"})])])])}),t._v(" "),s("tr",{staticClass:"bt b"},[s("td",{staticClass:"pa2 tr"},[t._v(" Total")]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(t.total))]),t._v(" "),s("td")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pa2 tl"},[this._v("Meal")]),this._v(" "),e("th",{staticClass:"pa2 tr"},[this._v("Calories")]),this._v(" "),e("th")])])}]};var v=s("VU/8")(h,p,!1,function(t){s("dPVU")},"data-v-7dd4e9ba",null).exports,f=s("Sazm"),_=s.n(f),C=Object(f.initializeApp)({apiKey:"AIzaSyD1TS-CGBjd76ersgXpe-WEuOHfLnO-eOw",authDomain:"calorie-calculator-40678.firebaseapp.com",databaseURL:"https://calorie-calculator-40678.firebaseio.com",projectId:"calorie-calculator-40678",storageBucket:"",messagingSenderId:"433036388378"}).database().ref("names"),w={name:"Meal",data:function(){return{showForm:!1,meal:"",calories:1,errors:[],mode:null}},firebase:{meals:C},created:function(){this.CONSTANTS={MODE:{ADD:"Add",EDIT:"Edit"}},Object.defineProperty(this,"CONSTANTS",{configurable:!1,writable:!1}),this.mode=this.CONSTANTS.MODE.ADD},computed:{total:function(){return this.meals.map(function(t){return t.calories}).reduce(function(t,e){return t+e},0)}},methods:{showAddForm:function(){this.errors=[],this.mode=this.CONSTANTS.MODE.ADD,this.showForm=!0},save:function(){var t=this;if(this.checkForm())switch(this.showForm=!1,this.mode){case this.CONSTANTS.MODE.EDIT:this.meals.some(function(e){return e.description.toUpperCase()===t.meal.toUpperCase()&&(C.child(e[".key"]).update({description:t.meal,calories:t.calories}),!0)});break;default:this.meals.some(function(e){return e.description.toUpperCase()===t.meal.toUpperCase()})?this.errors=["Meal "+this.meal+" already exists"]:C.push({description:this.meal,calories:this.calories})}},checkForm:function(){if(this.errors=[],this.meal&&this.calories)return!0;this.meal||this.errors.push("Meal required."),this.calories||this.errors.push("Calories required.")},deleteMeal:function(t){C.child(t).remove()},editMeal:function(t){var e=this.meals.filter(function(e){return e.description===t});this.meal=e[0].description,this.calories=e[0].calories,this.showForm=!0,this.mode=this.CONSTANTS.MODE.EDIT}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-100 mw5 center"},[t.errors.length?s("p",[s("b",[t._v("Please correct the following error(s):")]),t._v(" "),s("ul",t._l(t.errors,function(e){return s("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showForm,expression:"!showForm"}],staticClass:"mv3",on:{click:t.showAddForm}},[t._v("Add Meal")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}]},[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{attrs:{for:"meal"}},[t._v("Meal:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.meal,expression:"meal",modifiers:{trim:!0}}],staticClass:"db mv1",attrs:{type:"text",name:"meal",id:"meal"},domProps:{value:t.meal},on:{input:function(e){e.target.composing||(t.meal=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("label",{attrs:{for:"calories"}},[t._v("Calories:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.calories,expression:"calories",modifiers:{number:!0}}],staticClass:"db mv1",attrs:{type:"number",min:"1",name:"calories",id:"calories"},domProps:{value:t.calories},on:{input:function(e){e.target.composing||(t.calories=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("button",{staticClass:"mv2",on:{click:t.save}},[t._v("Save")]),t._v(" "),s("button",{staticClass:"mv2",on:{click:function(e){t.errors=[],t.showForm=!1}}},[t._v("Cancel")])])])]),t._v(" "),s("table",{staticClass:"w-100 mw5 center collapse"},[t._m(0),t._v(" "),s("tbody",[t._l(t.meals,function(e){return s("tr",{key:e[".key"],staticClass:"stripe-dark"},[s("td",{staticClass:"pa2"},[t._v(t._s(e.description))]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(e.calories))]),t._v(" "),s("td",{staticClass:"pa2 tr"},[s("span",{on:{click:function(s){t.deleteMeal(e[".key"])}}},[s("i",{staticClass:"far fa-trash-alt ph2 pointer"})]),t._v(" "),s("span",{on:{click:function(s){t.editMeal(e.description)}}},[s("i",{staticClass:"fas fa-pencil-alt pointer"})])])])}),t._v(" "),s("tr",{staticClass:"bt b"},[s("td",{staticClass:"pa2 tr"},[t._v(" Total")]),t._v(" "),s("td",{staticClass:"pa2 tr"},[t._v(t._s(t.total))]),t._v(" "),s("td")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pa2 tl"},[this._v("Meal")]),this._v(" "),e("th",{staticClass:"pa2 tr"},[this._v("Calories")]),this._v(" "),e("th")])])}]};var g=s("VU/8")(w,b,!1,function(t){s("hqe3")},"data-v-889ca88c",null).exports,k=s("2ahc"),A=s.n(k),D={name:"auth",mounted:function(){var t={signInSuccessUrl:"/success",signInOptions:[_.a.auth.GoogleAuthProvider.PROVIDER_ID,_.a.auth.EmailAuthProvider.PROVIDER_ID]},e=A.a.auth.AuthUI.getInstance();e||(e=new A.a.auth.AuthUI(_.a.auth())),e.start("#firebaseui-auth-container",t)}},T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v(" Auth ")]),this._v(" "),e("div",{attrs:{id:"firebaseui-auth-container"}})])}]};var x=s("VU/8")(D,T,!1,function(t){s("+qQs")},null,null).exports,F={data:function(){return{name:"",email:"",user:{}}},created:function(){var t=this;_.a.auth().onAuthStateChanged(function(e){e&&(t.user=e,t.name=t.user.displayName,t.email=t.user.email)})},methods:{logout:function(){_.a.auth().signOut()}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Success")]),t._v(" "),s("p",[t._v(t._s(t.name))]),t._v(" "),s("p",[t._v(t._s(t.email))]),t._v(" "),s("button",{on:{click:t.logout}},[t._v("Logout")])])},staticRenderFns:[]},N=s("VU/8")(F,M,!1,null,null,null).exports,S={name:"Xslt",data:function(){return{url:"https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=cancer",xhttp:{},output:""}},watch:{url:function(){this.output=this.transform()}},created:function(){window.ActiveXObject?this.xhttp=new window.ActiveXObject("Msxml2.XMLHTTP"):this.xhttp=new XMLHttpRequest},methods:{loadXMLDoc:function(t){this.xhttp.open("GET",t,!1);try{this.xhttp.responseType="msxml-document"}catch(t){}return this.xhttp.send(""),this.xhttp.responseXML},download:function(t,e){var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),s.setAttribute("download",t),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)},downloadData:function(){this.download("idlist.txt",this.output)},transform:function(){var t=this.loadXMLDoc(this.url),e=this.loadXMLDoc("https://yucigou.github.io/staticfs/xsl/rest2ids.xsl");if(window.ActiveXObject||"msxml-document"===this.xhttp.responseType)return t.transformNode(e);if(document.implementation&&document.implementation.createDocument){var s=new XSLTProcessor;return s.importStylesheet(e),s.transformToFragment(t,document).textContent}}},mounted:function(){this.output=this.transform()}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",size:"70"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),s("fieldset",[s("legend",[t._v("Output")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.output,expression:"output"}],attrs:{id:"output",cols:"56",rows:"10"},domProps:{value:t.output},on:{input:function(e){e.target.composing||(t.output=e.target.value)}}})]),t._v(" "),s("button",{on:{click:t.downloadData}},[t._v("Download")])])},staticRenderFns:[]};var O=s("VU/8")(S,E,!1,function(t){s("LFPy")},"data-v-181275bd",null).exports;a.a.use(o.a);var y=new o.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/meal",name:"Meal",component:u},{path:"/counter",name:"Counter",component:d},{path:"/calorie-calculator",name:"CalorieCalculator",component:v},{path:"/firebase-calorie-calculator",name:"FirebaseCalorieCalculator",component:g},{path:"/auth",component:x},{path:"/success",component:N},{path:"/xslt",component:O}]}),U=s("1mcD"),P=s.n(U);a.a.use(P.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:i},template:"<App/>",created:function(){var t=this;_.a.auth().onAuthStateChanged(function(e){e?t.$router.push("/success"):t.$router.push("/auth")})}})},"NmR/":function(t,e){},cmH5:function(t,e){},dPVU:function(t,e){},hqe3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.85f3f7acf26566724288.js.map