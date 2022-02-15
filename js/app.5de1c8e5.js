(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"20f8":function(t,e,r){"use strict";r("ac8b")},2690:function(t,e,r){t.exports=r.p+"img/Me.a0f2743c.jpg"},"3b9f":function(t,e,r){t.exports=r.p+"img/design1.3974602e.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-gray-300 font-rubik",attrs:{id:"app"}},[r("Navbar",{on:{menuOn:function(e){t.menuOn=!0}}}),r("transition",{attrs:{name:"fade"}},[t.menuOn?r("div",{staticClass:"bg-primary-700 text-accent-1 fixed z-50 w-3/4 right-0 top-0 bottom-0 p-8"},[r("div",{staticClass:"flex flex-col space-y-10"},[r("button",{staticClass:"ml-auto",on:{click:function(e){t.menuOn=!1}}},[t._v("Close")]),r("ul",{staticClass:"flex flex-col items-center space-y-5"},[r("li",{on:{click:function(e){t.menuOn=!1}}},[r("BaseButton",{attrs:{href:"#home"}},[t._v("Home")])],1),r("li",{on:{click:function(e){t.menuOn=!1}}},[r("BaseButton",{attrs:{href:"#about"}},[t._v("About")])],1),r("li",{on:{click:function(e){t.menuOn=!1}}},[r("BaseButton",{attrs:{href:"#project"}},[t._v("Project")])],1),r("li",{on:{click:function(e){t.menuOn=!1}}},[r("BaseButton",{attrs:{href:"#design"}},[t._v("Design")])],1),r("li",{on:{click:function(e){t.menuOn=!1}}},[r("BaseButton",{attrs:{href:"#contact"}},[t._v("Contact")])],1)])])]):t._e()]),r("Home",{staticClass:"bg-primary-500"}),r("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home"},[t._m(0),t._m(1),n("section",{staticClass:"flex flex-col transition-opacity duration-1000 min-h-screen px-8 sm:px-16 md:px-20 lg:px-24 bg-primary-500",attrs:{id:"project"}},[n("h1",{staticClass:"text-2xl my-4 sm:text-3xl md:text-6xl text-center md:my-8"},[t._v("Some Things I've Built")]),n("ProjectWrapper",{attrs:{left:"",to:"https://fierce-temple-02414.herokuapp.com/",description:"Spotify web app where you can manage your spotify library like add or remove playlist, save tracks, albums and more.",techstack:["VueJS","Vuetify","Spotify API","Heroku"]},scopedSlots:t._u([{key:"image",fn:function(){return[n("img",{staticClass:"relative border border-gray-900 shadow-lg",attrs:{src:r("b06a")}})]},proxy:!0}])}),n("ProjectWrapper",{attrs:{right:"",to:"https://frozen-fjord-63502.herokuapp.com/",description:"Simple Blog website with butter cms",techstack:["NuxtJS","Butter CMS","Tailwind CSS"]},scopedSlots:t._u([{key:"image",fn:function(){return[n("img",{staticClass:"relative border border-gray-900 shadow-lg",attrs:{src:r("7976")}})]},proxy:!0}])})],1),n("section",{staticClass:"flex flex-col transition-opacity duration-1000 justify-center min-h-screen px-5 lg:px-48 space-y-8 bg-primary-700",attrs:{id:"design"}},[n("div",{staticClass:"flex flex-col lg:grid grid-cols-6 gap-3"},t._l(t.cols,(function(t,e){return n("div",{key:e,staticClass:"rounded-sm group bg-primary-400 cursor-pointer hover:shadow-2xl transition-all duration-200 relative overflow-hidden",class:t.size,staticStyle:{"max-height":"300px"}},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.image,alt:""}})])})),0)]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col transition-opacity duration-1000 justify-center min-h-screen text-white px-5 lg:px-40 space-y-5",attrs:{id:"home"}},[r("h3",{staticClass:"text-lg lg:text-2xl text-accent-1"},[t._v("Hi there, my name is")]),r("h1",{staticClass:"text-4xl lg:text-6xl text-gray-100"},[t._v("Rama.")]),r("h1",{staticClass:"text-4xl lg:text-6xl text-gray-400"},[t._v("I developed website")]),r("p",{staticClass:"text-gray-600 lg:w-1/2"},[t._v("I love creating things that live on internet, especially creating website")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col transition-opacity duration-1000 justify-center min-h-screen px-5 lg:px-48 space-y-8 bg-primary-700",attrs:{id:"about"}},[n("h1",{staticClass:"text-6xl"},[t._v("More About Me")]),n("div",{},[n("div",{staticClass:"text-base space-y-3 lg:mx-20"},[n("div",[n("div",{staticClass:"float-left w-32 h-32 mr-3",staticStyle:{"box-shadow":"5px 5px 0 0 #08ffc8"}},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r("2690"),alt:""}})]),n("p",[t._v(" My name is M Fitrah Ramadhan, i am a fresh graduate with a degree in Computer Engineering. I pursued that field of education because I’ve always been interested in computer stuff. More importantly, I have been very much interested in web development. ")]),n("p",[t._v("Now, I am all set to start my career, and hoping to get selected into your esteemed company where I can explore my abilities, and prove myself.")]),n("p",{staticClass:"mt-4"},[t._v("Here are a few technologies i've been learning and working with recently :")]),n("div",{staticClass:"clear-left"})]),n("ul",{staticClass:"grid grid-cols-2"},[n("li",[t._v("Javascript")]),n("li",[t._v("Vue.js 2")]),n("li",[t._v("Nuxt.js")]),n("li",[t._v("Node.js")]),n("li",[t._v("Express.js")]),n("li",[t._v("MongoDB")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col justify-center min-h-screen text-center bg-primary-500",attrs:{id:"contact"}},[r("h1",{staticClass:"text-2xl my-4 sm:text-3xl md:text-6xl text-center md:my-8"},[t._v("Get in Touch")]),r("p",{staticClass:"text-lg"},[t._v("I'm currently looking for opportunities to work together")]),r("a",{staticClass:"self-center px-4 py-2 my-3 rounded-md bg-accent-1 text-black hover:bg-gray-500 transition-colors duration-200",attrs:{href:"mailto:tgcfitrah26@gmail.com"}},[t._v("Mail Me")])])}],l=(r("d3b7"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-4 mb-4"},[r("div",{staticClass:"col-start-1 col-span-4 flex flex-col items-center relative group",class:{"lg:col-start-3 lg:col-span-2":t.right,"lg:col-start-1 lg:col-span-2":t.left}},[r("a",{attrs:{href:t.to,target:"_blank"}},[t._t("image")],2),r("div",{staticClass:"col-start-1 lg:absolute lg:top-1/2  lg:transform lg:-translate-y-1/2  p-3 rounded-md shadow-md max-w-sm bg-accent-1 text-gray-900 group-hover:bg-gray-300 transition-colors duration-200",class:{"lg:left-0 lg:-translate-x-1/2":t.right,"lg:right-0 lg:translate-x-1/2":t.left}},[t._v(" "+t._s(t.description)+" ")]),r("ul",{staticClass:"flex my-3 space-x-3"},t._l(t.techstack,(function(e,n){return r("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])])}),c=[],u={props:{img:{},to:{},description:{},techstack:{},right:{type:Boolean},left:{type:Boolean}}},f=u,p=r("2877"),d=Object(p["a"])(f,l,c,!1,null,null,null),m=d.exports,g={data:function(){return{cols:[{size:["col-start-1","col-span-4"],image:r("8049")},{size:["col-start-5","col-span-2"],image:r("3b9f")},{size:["row-start-2","col-start-1","col-span-2"],image:r("3b9f")},{size:["row-start-2","col-start-3","col-span-2"],image:r("8049")},{size:["row-start-2","col-start-5","col-span-2"],image:r("3b9f")}]}},components:{ProjectWrapper:m},mounted:function(){var t=this.$refs.home.childNodes,e=new IntersectionObserver((function(t){t.forEach((function(t){t.target.classList.toggle("opacity-0",!t.isIntersecting)}))}),{threshold:.2});t.forEach((function(t){"art"!=t.id&&e.observe(t)}))}},x=g,h=(r("8b71"),Object(p["a"])(x,i,o,!1,null,null,null)),v=h.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{ref:"nav",staticClass:"z-50 w-full p-2 lg:px-10 lg:py-3 bg-primary-500 transform flex flex-row items-center fixed top-0 left-0 shadow-lg"},[t._m(0),r("div",{staticClass:"mx-auto"}),r("ul",{staticClass:"hidden md:flex flex-row space-x-3"},[r("li",[r("BaseButton",{attrs:{href:"#home"}},[t._v("Home")])],1),r("li",[r("BaseButton",{attrs:{href:"#about"}},[t._v("About")])],1),r("li",[r("BaseButton",{attrs:{href:"#project"}},[t._v("Project")])],1),r("li",[r("BaseButton",{attrs:{href:"#design"}},[t._v("Design")])],1),r("li",[r("BaseButton",{attrs:{href:"#contact"}},[t._v("Contact")])],1)]),r("div",{staticClass:"inline-block md:hidden px-4 py-1 rounded-sm hover:bg-accent-1 hover:text-black transition-colors duration-200 cursor-pointer",on:{click:function(e){return t.$emit("menuOn")}}},[t._v("Menu")]),r("a",{staticClass:"ml-5",attrs:{href:"https://drive.google.com/u/0/uc?id=1OacPXGJGHkr9rkFgUrt8U2zHujRA26nJ&export=download"}},[r("BaseButton",{staticClass:"border"},[t._v("Resume")])],1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-24 h-14"},[n("img",{staticClass:"object-cover h-full w-full",attrs:{src:r("d6f5"),alt:""}})])}],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"border-accent-1 text-accent-1 px-4 py-2 rounded-sm text-sm"},[t._t("default")],2)},w=[],C={props:{}},j=C,B=Object(p["a"])(j,_,w,!1,null,null,null),k=B.exports,O={components:{BaseButton:k},created:function(){var t=this,e=0;window.addEventListener("scroll",(function(){var r=window.scrollY;t.$refs.nav.style.transform=r<e?"translateY(0)":"translateY(-100%)",e=r}))}},S=O,E=(r("20f8"),Object(p["a"])(S,b,y,!1,null,"e4b70f64",null)),M=E.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex flex-col justify-center text-center py-5 px-3 bg-primary-500 text-gray-600"},[r("h1",[t._v("Designed & Built by MFitrahRamadhan")])])}],I={},z=Object(p["a"])(I,$,P,!1,null,null,null),H=z.exports,N={name:"App",data:function(){return{menuOn:!1}},components:{Home:v,Navbar:M,Footer:H,BaseButton:k}},J=N,A=(r("034f"),Object(p["a"])(J,a,s,!1,null,null,null)),T=A.exports;r("d940");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T)}}).$mount("#app")},7976:function(t,e,r){t.exports=r.p+"img/NuxtBlog.db854b78.png"},8049:function(t,e,r){t.exports=r.p+"img/design2.c8ccbe70.png"},"85ec":function(t,e,r){},"88d7":function(t,e,r){},"8b71":function(t,e,r){"use strict";r("88d7")},ac8b:function(t,e,r){},b06a:function(t,e,r){t.exports=r.p+"img/VueSpotify.e593db05.png"},d6f5:function(t,e,r){t.exports=r.p+"img/signature.1c8d431b.png"},d940:function(t,e,r){}});
//# sourceMappingURL=app.5de1c8e5.js.map