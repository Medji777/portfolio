(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{36:function(e,t,a){e.exports={main:"Skills_main__3WfbS",skills:"Skills_skills__10HGC",container:"Skills_container__18SgR",title_skills:"Skills_title_skills__Mixac",title_progress:"Skills_title_progress__1cTFL",container__skill:"Skills_container__skill__3ogA2",skill:"Skills_skill__1Yoro",skill__img:"Skills_skill__img__1MmMF",skill__bg:"Skills_skill__bg__JiSIz",skill__title:"Skills_skill__title___WpVK",skill__desc:"Skills_skill__desc__25Co_",img__t:"Skills_img__t__YL-3w",container__progress:"Skills_container__progress__32LYv",progress_bar:"Skills_progress_bar__3w0ns",progress:"Skills_progress__27rUY",progress_title:"Skills_progress_title__3Bz8j"}},45:function(e,t,a){e.exports={main:"Projects_main__2Anz9",projects:"Projects_projects__JcK0f",container:"Projects_container__o4dlF",projects_cont:"Projects_projects_cont__ekR0R",img_prev:"Projects_img_prev__2xa0M",project:"Projects_project__2ZXVP",img_cont:"Projects_img_cont__3_J8I"}},46:function(e,t,a){e.exports={contacts:"Contacts_contacts__15BrO",container:"Contacts_container__3_fJ8",contact:"Contacts_contact__3PXU9"}},49:function(e,t,a){e.exports={nav:"Header_nav__1qNum",nav_active:"Header_nav_active__1t3ye",nav__list:"Header_nav__list__1FmnK",nav__list_active:"Header_nav__list_active__2ulCB",active__link:"Header_active__link__2WlPP",menu_btn:"Header_menu_btn__2fsfS",menu:"Header_menu__2cPFi",active:"Header_active__2ObgB",wrapper:"Header_wrapper__3kzdz",wrapper_active:"Header_wrapper_active__2PRMm",menu_btn_active:"Header_menu_btn_active__3KtuS"}},57:function(e,t,a){e.exports={section:"Wrapper_section__p-MaD",next:"Wrapper_next__1TW9d",prev:"Wrapper_prev__3dQmG"}},58:function(e,t,a){e.exports={filters:"FilterProjects_filters__3RWbJ",filter:"FilterProjects_filter__K1vx6",filter_active:"FilterProjects_filter_active__3lj7w"}},59:function(e,t,a){e.exports={contact:"Social_contact__1fcdm",contact_list:"Social_contact_list__2G3Zp"}},60:function(e,t,a){e.exports={contact_form:"ContactForm_contact_form__7ln4i",form_control:"ContactForm_form_control__14vud",form_field:"ContactForm_form_field__1MhZv"}},77:function(e,t,a){e.exports={main:"Main_main__2LI6F",about:"Main_about__GCu49",container:"Main_container__quush",title:"Main_title__3lHWX",img__cont:"Main_img__cont__gaikZ",img__avtr:"Main_img__avtr__GpQDW",img__r:"Main_img__r__1WIT9",icon:"Main_icon__1IEI2",bg:"Main_bg__-UQar"}},78:function(e,t,a){e.exports={main:"NotFound_main__Dyxme",notfound:"NotFound_notfound__laMRp",container:"NotFound_container__KoeGa",wrapper:"NotFound_wrapper__2d7BF"}},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),i=a(11),l=a(49),o=a.n(l),s=function(e){var t=e.elemClass,a=e.openMenu,n=e.menuLink,c=e.onCloseClick;return r.a.createElement("nav",{className:t(o.a.nav,o.a.nav_active)},r.a.createElement("button",{onClick:a,className:t(o.a.menu_btn,o.a.menu_btn_active)},r.a.createElement("span",{className:t(o.a.menu,o.a.active)})),r.a.createElement("div",{className:t(o.a.wrapper,o.a.wrapper_active)},r.a.createElement("ul",{className:t(o.a.nav__list,o.a.nav__list_active)},n.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{exact:e.exact,to:e.path,activeClassName:o.a.active__link,onClick:c},e.title))}))))},m={github:"https://github.com/medji777",vk:"https://vk.com/medji777",facebook:"https://facebook.com/"},u=[{id:1,img:"#",src:"#",title:"Social Network",description:"Lorem ipsum dolor sit amet, \nconsectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \neius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \nearum error nemo sequi tenetur voluptatem!",filter:"SPA"},{id:2,img:"#",src:"#",title:"Todolist",description:"Lorem ipsum dolor sit amet, \nconsectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \neius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \nearum error nemo sequi tenetur voluptatem!",filter:"SPA"},{id:3,img:"#",src:"#",title:"Html",description:"Lorem ipsum dolor sit amet, \nconsectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \neius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \nearum error nemo sequi tenetur voluptatem!",filter:"JS"}],_=[{title:"HTML | CSS3",progress:85},{title:"JavaScript - ES5/6/7/8/9",progress:96},{title:"React | Redux",progress:88},{title:"TypeScript",progress:86},{title:"Webpack | Gulp",progress:78},{title:"NPM | GIT",progress:89}],p=[{id:1,exact:!0,path:"",title:"Main"},{id:2,exact:!1,path:"skills11",title:"Skillsdd"},{id:3,exact:!1,path:"projects",title:"Projects"},{id:4,exact:!1,path:"contacts",title:"Contacts"}],d=r.a.createContext(null),f=function(e){var t=e.children;return r.a.createElement(d.Provider,{value:{menuLink:p,social:m,projects:u,progress:_}},t)},v=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useContext)(d).menuLink;return r.a.createElement(s,{elemClass:function(e,t){return a?"".concat(e," ").concat(t):e},menuLink:l,openMenu:function(){i(!a)},onCloseClick:function(e){e.currentTarget&&i(!1)}})},g=a(37),E=a(5),b=a(50),k=a.n(b),h=a(52),j=a(53),N=a(35),S=a(57),x=a.n(S),O=Object(E.f)(function(e){var t=e.routes,a=e.match,n=e.children,c=e.classSection,l=t.findIndex(function(e){return e.path===a.path}),o=function(e){var t;switch(e){case"left":t="arrow-alt-circle-left";break;case"right":t="arrow-alt-circle-right"}return["far","".concat(t)]};return r.a.createElement("section",{className:"".concat(x.a.section," ").concat(c)},l>0&&r.a.createElement(i.b,{to:t[l-1].path,className:x.a.prev},r.a.createElement(N.a,{icon:o("left")})),n,l<t.length-1&&r.a.createElement(i.b,{to:t[l+1].path,className:x.a.next},r.a.createElement(N.a,{icon:o("right")})))}),w=a(36),y=a.n(w),C=function(e){var t=e.src,a=e.title,n=e.description;return r.a.createElement("div",{className:y.a.skill},r.a.createElement("figure",null,r.a.createElement("div",{className:y.a.img__t},r.a.createElement("div",{className:y.a.skill__bg},r.a.createElement("img",{src:t,className:y.a.skill__img,alt:""})),r.a.createElement("span",{className:y.a.skill__title},a)),r.a.createElement("figcaption",null,r.a.createElement("div",{className:y.a.skill__desc},n))))},M=a(39),F=a(40),L=a(48),P=a(42),A=a(43),H=function(e){var t=e.refer,a=e.progress,n=e.title;return r.a.createElement("div",{className:y.a.progress_bar},r.a.createElement("span",{className:y.a.progress_title},n),r.a.createElement("div",{className:y.a.progress,ref:t,"data-progress":"".concat(a,"%")}))},q=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(L.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(c)))).state={count:0,isLoad:!0},a.fill=r.a.createRef(),a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.isLoad){this.setState({isLoad:!1});var n=setInterval(function(){a.setState({count:a.state.count+1}),a.state.count<=a.props.progress?a.fill.current&&(a.fill.current.style.width=a.state.count+"%"):clearInterval(n)},0)}}},{key:"render",value:function(){return r.a.createElement(H,{refer:this.fill,progress:this.props.progress,title:this.props.title})}}]),t}(r.a.Component),T=a(13),W=function(e){var t=e.skills,a=e.progress,n=e.isFetching,c=(e.Loading,Object(j.a)(e,["skills","progress","isFetching","Loading"]));return r.a.createElement(O,Object.assign({classSection:y.a.skills},c),r.a.createElement("div",{className:y.a.container},r.a.createElement("h3",{className:y.a.title_skills},"Skills"),n?r.a.createElement(T.a,{wrap:{minHeight:"302px"},loader:{width:"7em"}}):r.a.createElement("div",{className:y.a.container__skill},t.map(function(e){return r.a.createElement(C,{key:e.id,src:e.src,title:e.title,description:e.description})})),r.a.createElement("h3",{className:y.a.title_progress},"Progress"),r.a.createElement("div",{className:y.a.container__progress},a.map(function(e,t){return r.a.createElement(q,{key:t,title:e.title,progress:e.progress})}))))},z=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(c.a)(o,2),m=s[0],u=s[1],_=Object(n.useContext)(d).progress;return Object(n.useEffect)(function(){u(!0);var e=new AbortController,t=!1,a=null;return Object(h.a)(k.a.mark(function n(){var r;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("./data/skills.json",{signal:e.signal});case 2:return r=n.sent,n.next=5,r.json();case 5:if(r=n.sent,!t){n.next=8;break}return n.abrupt("return",Promise.resolve(!0));case 8:l(r),a=setTimeout(function(){u(!1)},1e3);case 10:case"end":return n.stop()}},n)}))(),function(){t=!0,e.abort(),clearTimeout(a)}},[]),r.a.createElement(W,Object.assign({skills:i,progress:_,isFetching:m,Loading:T.a},e))},I=a(45),J=a.n(I),R=function(e){var t=e.img,a=e.src,n=e.title,c=e.description;return r.a.createElement("div",{className:J.a.project},r.a.createElement("figure",null,r.a.createElement("div",{className:J.a.img_cont},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:J.a.img_prev},r.a.createElement("a",{href:a},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"))),r.a.createElement("figcaption",null,r.a.createElement("h5",null,n),r.a.createElement("p",null,c))))},Y=a(58),D=a.n(Y),G=function(e){var t=e.changeFilter,a=e.filterValue;return r.a.createElement("div",{className:D.a.filters},Object.keys(X).map(function(e){return r.a.createElement("button",{className:a===X[e]?"".concat(D.a.filter," ").concat(D.a.filter_active):D.a.filter,key:e,onClick:function(){return t(e)}},X[e])}))},V=function(e){var t=e.routes,a=e.filter,n=e.filterValue,c=e.changeFilter,i=e.projects;return r.a.createElement(O,{classSection:"".concat(J.a.projects," ").concat(J.a.main),routes:t},r.a.createElement("div",{className:J.a.container},r.a.createElement("h3",null,"My Projects"),r.a.createElement(G,{filterValue:n,changeFilter:c}),r.a.createElement("div",{className:J.a.projects_cont},a(i).map(function(e){return r.a.createElement(R,{key:e.id,img:e.img,src:e.src,title:e.title,description:e.description})}))))},X={ALL:"ALL",JS:"JS",SPA:"SPA"},B=function(e){var t=Object(n.useState)(X.ALL),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useContext)(d).projects;return r.a.createElement(V,Object.assign({filter:function(e){var t=i===X.ALL;return e.filter(function(e){return t||e.filter===i})},filterValue:i,changeFilter:function(e){l(e)},projects:o},e))},K=a(59),Z=a.n(K),U=function(e){var t=e.social;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Social contacts with me"),r.a.createElement("div",{className:Z.a.contact},r.a.createElement("ul",{className:Z.a.contact_list},Object.keys(t).map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:t[e],target:"_blank",rel:"noreferrer noopener"},r.a.createElement(N.a,{icon:["fab","".concat(e)]})))}))))},Q=a(46),$=a.n(Q),ee=a(60),te=a.n(ee),ae=function(){return r.a.createElement("form",{className:te.a.contact_form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:te.a.form_field},r.a.createElement("input",{className:te.a.form_control,type:"text",placeholder:"Name"})),r.a.createElement("div",{className:te.a.form_field},r.a.createElement("input",{className:te.a.form_control,type:"text",placeholder:"E-mail"})),r.a.createElement("div",{className:te.a.form_field},r.a.createElement("textarea",{className:te.a.form_control,placeholder:"Your message",cols:30,rows:10})),r.a.createElement("button",{className:"wow",type:"submit"},"Send Message"))},ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Contacts"),r.a.createElement("div",{className:$.a.contact},r.a.createElement(ae,null)))},re=function(e){var t=e.routes,a=Object(n.useContext)(d).social;return r.a.createElement(O,{classSection:$.a.contacts,routes:t},r.a.createElement("div",{className:$.a.container},r.a.createElement(ne,null),r.a.createElement(U,{social:a})))},ce=a(83),ie=a(77),le=a.n(ie),oe=function(e){var t=e.social,a=e.routes,n=e.onStart3d,c=e.onStop3d,i=e.config;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:le.a.bg},r.a.createElement(ce.a,{config:i})),r.a.createElement(O,{classSection:"".concat(le.a.about," ").concat(le.a.main),routes:a},r.a.createElement("div",{className:le.a.container},r.a.createElement("div",{className:le.a.title},r.a.createElement("h3",null,"Hello!"),r.a.createElement("h2",null,"My name is ",r.a.createElement("span",null,"Vladimir Dergachev")),r.a.createElement("h1",null,"I Front-end developer"),r.a.createElement("div",{className:le.a.icon},Object.keys(t).map(function(e){return r.a.createElement("a",{href:t[e],key:e,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(N.a,{icon:["fab","".concat(e)]}))}))),r.a.createElement("div",{className:le.a.img__cont,onMouseMove:n,onMouseLeave:c},r.a.createElement("img",{className:le.a.img__avtr,src:"#",alt:""}),r.a.createElement("div",{className:le.a.img__r})))))},se={showCube:!1,dimension:"3D",velocity:1,boundaryType:"bounce",antialias:!1,direction:{xMin:-1,xMax:1,yMin:-1,yMax:1,zMin:-1,zMax:1},lines:{colorMode:"solid",color:"#ccc",transparency:.9,limitConnections:!0,maxConnections:20,minDistance:150,visible:!0},particles:{colorMode:"solid",color:"#ccc",transparency:.9,shape:"circle",boundingBox:"canvas",count:150,minSize:10,maxSize:45,visible:!0},cameraControls:{enabled:!0,enableDamping:!0,dampingFactor:.2,enableZoom:!1,autoRotate:!0,autoRotateSpeed:.3,resetCameraFlag:!1}},me=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{onStart3d:function(e){var t=e.nativeEvent,a=t.offsetX,n=t.offsetY,r=e.currentTarget,c=r.offsetWidth,i=r.offsetHeight,l=r.style,o=1e3,s=function(e){var t=null;switch(e){case"X":t=-(a-c/2);break;case"Y":t=n-i/2}return+(t/15).toFixed(2)};l.transform="perspective(".concat(o,"px) rotateX(").concat(s("Y"),"deg) rotateY(").concat(s("X"),"deg) scale3d(1.05,1.05,1.05)"),l.willChange="transform"},onStop3d:function(e){e.currentTarget.style.transform="perspective(1000px) rotate(0deg) rotateY(0deg)"}}))}},ue=me(function(e){var t=Object(n.useContext)(d).social,a=Object(n.useState)(null),i=Object(c.a)(a,2),l=i[0],o=i[1];Object(n.useEffect)(function(){return o(window.screen.width),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}},[]);var s,m,u=function(e){o(e.currentTarget.innerWidth)};return r.a.createElement(oe,Object.assign({config:(s=l,m=se,null!==s&&s<=1024?Object(g.a)({},m,{cameraControls:Object(g.a)({},m.cameraControls,{enabled:!1}),particles:Object(g.a)({},m.particles,{count:50})}):null!==s&&s>=1920?Object(g.a)({},m,{cameraControls:Object(g.a)({},m.cameraControls,{enabled:!0}),particles:Object(g.a)({},m.particles,{count:250})}):m),social:t},e))}),_e=[{exact:!0,path:"/",render:function(e){return function(){return r.a.createElement(ue,{routes:e})}}},{exact:!0,path:"/skills11",render:function(e){return function(){return r.a.createElement(z,{routes:e})}}},{exact:!0,path:"/projects",render:function(e){return function(){return r.a.createElement(B,{routes:e})}}},{exact:!0,path:"/contacts",render:function(e){return function(){return r.a.createElement(re,{routes:e})}}}],pe=a(78),de=a.n(pe),fe=me(function(e){var t=e.onStart3d,a=e.onStop3d;return r.a.createElement("section",{className:"".concat(de.a.notfound," ").concat(de.a.main)},r.a.createElement("div",{className:de.a.container},r.a.createElement("div",{className:de.a.wrapper,onMouseMove:t,onMouseLeave:a},r.a.createElement("h2",null,"404 Not Found"),r.a.createElement("span",null,"404 Not Found"))))}),ve=a(79),ge=Object(E.f)(function(e){var t=e.location;return Object(ve.b)(t,function(e){return e.key},{from:{opacity:0},enter:{opacity:1},leave:{opacity:1}}).map(function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(ve.a.div,{className:"layout",key:n,style:Object(g.a)({},a)},r.a.createElement(E.c,{location:t},_e.map(function(e,t){return r.a.createElement(E.a,{key:t,exact:e.exact,path:e.path,render:e.render(_e)})}),r.a.createElement(E.a,{render:function(){return r.a.createElement(fe,null)}})))})}),Ee=a(38),be=a(80),ke=a(81),he=a(82);Ee.b.add(be.a,ke.a,he.a);t.default=function(){return r.a.createElement(f,null,r.a.createElement(v,null),r.a.createElement(ge,null))}}}]);
//# sourceMappingURL=4.8899126e.chunk.js.map