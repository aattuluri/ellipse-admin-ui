(this["webpackJsonpellipse-admin"]=this["webpackJsonpellipse-admin"]||[]).push([[0],{237:function(e,t,a){e.exports=a(521)},521:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),i=a(217),c=a(14),s=a(35),m=a.n(s),u=a(47),p=a(67),d=a(8),g=a(610),E=a(576),h=a(571),f=a(611),v=a(208),b=a.n(v),y=a(523),j=a(569),C=a(570),O=a(608),S=a(607),x=a(577);function k(e){return o.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}var T=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function w(e){var t=e.history,a=T(),n=localStorage.getItem("token"),r=o.a.useState({open:!1,vertical:"top",horizontal:"center",message:"success",type:"error",autoHide:300}),l=Object(d.a)(r,2),i=l[0],s=l[1],v=o.a.useState(!1),j=Object(d.a)(v,2),S=j[0],w=j[1],_=i.vertical,N=i.horizontal,I=i.open,D=i.message,B=i.type,z=i.autoHide;if(n)return o.a.createElement(c.a,{to:"/home"});var A=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(u.a)(Object(u.a)({},i),{},{open:!1}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement(C.a,{component:"main",maxWidth:"xs"},o.a.createElement(h.a,null),o.a.createElement(O.a,{anchorOrigin:{vertical:_,horizontal:N},open:I,autoHideDuration:z,onClose:A,key:_+N},o.a.createElement(k,{onClose:A,severity:B},D)),o.a.createElement("div",{className:a.paper},o.a.createElement(g.a,{className:a.avatar},o.a.createElement(b.a,{color:"primary"})),o.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),o.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),w(!0);var a=e.target.elements,n=a.username,o=a.password;try{var r=new FormData,l={username:n.value,password:o.value};r=JSON.stringify(l),fetch("https://ellipseapp.com/api/admin/signin",{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:r}).then((function(e){200===e.status?e.json().then((function(e){localStorage.setItem("token",e.token),t.push("/home"),s({open:!0,vertical:"top",horizontal:"center",message:"Signedin successfully",type:"success",autoHide:300})})):(w(!1),s({open:!0,vertical:"top",horizontal:"center",message:"invalid credentials",type:"error",autoHide:6e3}))}))}catch(i){console.log(i),w(!1),s({open:!0,vertical:"top",horizontal:"center",message:i.message,type:"error",autoHide:3e3})}}},o.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"off",autoFocus:!0}),o.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),o.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:S},S?o.a.createElement(x.a,{color:"primary",size:24}):"Sign In"))))}var _=a(57),N=a(600),I=a(601),D=a(222),B=a(10),z=a(216),A=a.n(z),P=a(584),W=a(221),H=a(605),R=a(593),q=a(578),F=a(581),L=a(580),U=a(579),G=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.secondary.main}}}));function J(e){var t=G(),a=e.event;return o.a.createElement(q.a,{className:t.root},o.a.createElement(U.a,{component:"img",height:"180",image:"https://ellipseapp.com"+"/api/image?id=".concat(a.poster_url)}),o.a.createElement(L.a,null,o.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name)),o.a.createElement(F.a,null,o.a.createElement(E.a,{onClick:function(){e.handleViewClick(e.event)},size:"small",color:"primary"},"view")))}var M=a(585),V=a(583),K=a(582),Y=a(609),Q=a(568),X=a(215),Z=a.n(X),$=a(40),ee=a(113),te=a.n(ee),ae=a(209),ne=a.n(ae);function oe(e){return o.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}function re(e){var t=Object($.a)(),a=o.a.useState(null),n=Object(d.a)(a,2),r=n[0],l=n[1],i=e.event,c=o.a.useState({open:!1,vertical:"top",horizontal:"center",message:"success",type:"error",autoHide:300}),s=Object(d.a)(c,2),g=s[0],h=s[1],v=g.vertical,b=g.horizontal,y=g.open,j=g.message,C=g.type,S=g.autoHide;o.a.useEffect((function(){l("https://ellipseapp.com/un/event/".concat(i._id))}),[i._id]);var x=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(Object(u.a)(Object(u.a)({},g),{},{open:!1}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:h({open:!0,vertical:"top",horizontal:"center",message:"Copied to clipboard",type:"success",autoHide:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),h({open:!0,vertical:"top",horizontal:"center",message:e.t0.message,type:"error",autoHide:4e3});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(O.a,{anchorOrigin:{vertical:v,horizontal:b},open:y,autoHideDuration:S,onClose:x,key:v+b},o.a.createElement(oe,{onClose:x,severity:C},j)),o.a.createElement(Y.a,{open:e.open,fullWidth:!0,PaperProps:{style:{backgroundColor:t.palette.secondary.main,boxShadow:"none"}},onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(K.a,{id:"form-dialog-title"},i.name),o.a.createElement(V.a,null,o.a.createElement(P.a,{container:!0,spacing:2},o.a.createElement(P.a,{item:!0,xs:11},o.a.createElement(f.a,{disabled:!0,autoFocus:!0,margin:"dense",id:"title",label:"Issue Title",name:"title",fullWidth:!0,value:r,required:!0,onChange:function(e){l(e.target.value)}})),o.a.createElement(P.a,{item:!0,xs:1},o.a.createElement(Q.a,{onClick:function(){return k(r)}},o.a.createElement(ne.a,null))))),o.a.createElement(M.a,null,o.a.createElement(E.a,{onClick:e.handleClose,color:"primary"},"Dismiss"))))}function le(e){return o.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}function ie(e){var t=Object($.a)(),a=localStorage.getItem("token"),n=o.a.useState({open:!1,vertical:"top",horizontal:"center",message:"success",type:"error",autoHide:300}),r=Object(d.a)(n,2),l=r[0],i=r[1],c=o.a.useState(!1),s=Object(d.a)(c,2),g=s[0],h=s[1],v=l.vertical,b=l.horizontal,y=l.open,j=l.message,C=l.type,S=l.autoHide,k=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(Object(u.a)(Object(u.a)({},l),{},{open:!1}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=o.a.useState(null),w=Object(d.a)(T,2),_=w[0],N=w[1],I=o.a.useState(null),D=Object(d.a)(I,2),B=D[0],z=D[1],A=e.event;return o.a.createElement("div",null,o.a.createElement(O.a,{anchorOrigin:{vertical:v,horizontal:b},open:y,autoHideDuration:S,onClose:k,key:v+b},o.a.createElement(le,{onClose:k,severity:C},j)),o.a.createElement(Y.a,{open:e.open,fullWidth:!0,PaperProps:{style:{backgroundColor:t.palette.secondary.main,boxShadow:"none"}},onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(K.a,{id:"form-dialog-title"},"Send email to organizer(",A.name,")"),o.a.createElement(V.a,null,o.a.createElement(P.a,{container:!0,spacing:2},o.a.createElement(P.a,{item:!0,xs:12},o.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"title",label:"Issue Title",name:"title",fullWidth:!0,value:_||"",required:!0,onChange:function(e){N(e.target.value)},autoComplete:"off"})),o.a.createElement(P.a,{item:!0,xs:12},o.a.createElement(f.a,{margin:"dense",id:"desc",label:"Issue Description",name:"desc",fullWidth:!0,value:B||"",required:!0,onChange:function(e){z(e.target.value)},autoComplete:"off"})))),o.a.createElement(M.a,null,o.a.createElement(E.a,{onClick:e.handleClose,color:"primary"},"Cancel"),o.a.createElement(E.a,{onClick:function(){h(!0);try{var t=new FormData,n={userId:A.user_id,title:_,content:B};t=JSON.stringify(n),fetch("https://ellipseapp.com/api/admin/event/sendemail",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},method:"POST",body:t}).then((function(t){t.json().then((function(t){"success"===t.message&&(h(!1),e.handleClose(),i({open:!0,vertical:"top",horizontal:"center",message:"Successfull",type:"success",autoHide:3e3}))}))}))}catch(o){h(!1),i({open:!0,vertical:"top",horizontal:"center",message:o.message,type:"error",autoHide:3e3})}},color:"primary"},g?o.a.createElement(x.a,{color:"primary",size:24}):"Send"))))}var ce=a(115),se=a(210),me=a(614),ue=a(603),pe=Object(j.a)((function(e){return{imageBox:{display:"flex",justifyContent:"center"},dialog:{minHeight:"90vh",maxHeight:"90vh"},image:{maxWidth:"100%"},icons:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},title:{backgroundColor:e.palette.secondary}}}));var de=function(e){var t=pe(),a=e.event;function n(){e.handleClose()}return o.a.createElement("div",null,o.a.createElement(Y.a,{open:e.open,onClose:n,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,maxWidth:"md",PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none"}},classes:{paper:t.dialog}},o.a.createElement(K.a,{className:t.title},a.name,o.a.createElement("div",{className:t.icons},o.a.createElement(Q.a,{"aria-label":"close",className:t.closeButton,onClick:n},o.a.createElement(te.a,{fontSize:"large"})))),o.a.createElement(V.a,null,o.a.createElement(ue.a,{className:t.imageBox},o.a.createElement("img",{className:t.image,src:"https://ellipseapp.com"+"/api/image?id=".concat(a.poster_url),alt:"profile pic"})))))},ge=Object(j.a)((function(e){return{root:{alignItems:"center",marginBottom:e.spacing(2),padding:e.spacing(1),alignContent:"center"},media:{},avatar:{backgroundColor:e.palette.primary.main,width:e.spacing(7),height:e.spacing(7),marginRight:e.spacing(1)},buttonDiv:{marginLeft:"auto"},button:{margin:e.spacing(.5)},large:{width:e.spacing(17),height:e.spacing(17)},tab:{flexGrow:1,background:e.palette.secondary.main,alignItems:"center"},adminDetails:{display:"flex",justifyContent:"flex-start",marginTop:e.spacing(2)},root0:{display:"flex",justifyContent:"center"}}}));var Ee=function(e){var t=ge(),a=localStorage.getItem("token"),n=(e.children,e.value),r=(e.url,e.index),l=Object(ce.a)(e,["children","value","url","index"]),i=e.event,c=i.tags,s=o.a.useState([]),m=Object(d.a)(s,2),u=m[0],p=m[1],E=o.a.useState("Registration Ends in"),h=Object(d.a)(E,2),f=h[0],v=h[1],b=o.a.useState({}),j=Object(d.a)(b,2),C=j[0],O=j[1],S=o.a.useState(!1),x=Object(d.a)(S,2),k=x[0],T=x[1];o.a.useEffect((function(){void 0!==i.requirements&&p(i.requirements),void 0!==i._id&&void 0!==i.user_id&&fetch("https://ellipseapp.com"+"/api/admin/event/get_organizer_details?eventId=".concat(i._id,"&userId=").concat(i.user_id),{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){e.json().then((function(e){O(e)}))}))}),[i,a]);var w=function(){var e=+new Date(i.registration_end_time)-+new Date,t={};return e<0&&(e=+new Date(i.start_time)-+new Date),e<0&&(e=+new Date(i.finish_time)-+new Date),e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},_=o.a.useState(w()),N=Object(d.a)(_,2),I=N[0],D=N[1];o.a.useEffect((function(){var e=setTimeout((function(){v(function(){var e=+new Date(i.registration_end_time)-+new Date,t="Registration ends in";return e<0&&(t="Starts in",e=+new Date(i.start_time)-+new Date),e<0&&(t="Ends in",e=+new Date(i.finish_time)-+new Date),t}()),D(w())}),1e3);return function(){Object(se.a)(),clearTimeout(e)}}));var B=[];return Object.keys(I).forEach((function(e){I[e]&&B.push(o.a.createElement("span",{key:e},I[e]," ",e," "))})),o.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==r},l),n===r&&o.a.createElement("div",{className:t.root},o.a.createElement(P.a,{container:!0,component:"main"},o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,lg:4},o.a.createElement("img",{onClick:function(e){T(!0)},style:{maxWidth:"250px"},alt:"event poster",src:"https://ellipseapp.com"+"/api/image?id=".concat(i.poster_url)})),o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:8,lg:8},o.a.createElement(y.a,null,i.description," "),o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"}},f),o.a.createElement(y.a,{variant:"h5"},B.length?B:o.a.createElement("span",null,"Time's up!")),o.a.createElement("div",{style:{marginTop:"10px"}},o.a.createElement(me.a,{variant:"outlined",color:"inherit",label:i.event_type}),o.a.createElement(me.a,{style:{marginLeft:"5px"},variant:"outlined",color:"inherit",label:i.fee_type}),o.a.createElement(me.a,{style:{marginLeft:"5px"},variant:"outlined",color:"inherit",label:i.event_mode}),null!=c&&c.map((function(e){return o.a.createElement(me.a,{key:e,style:{marginLeft:"5px"},variant:"outlined",color:"inherit",label:e})})))),o.a.createElement(ue.a,null,o.a.createElement(ue.a,{className:t.root0},o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h4"},"About")),o.a.createElement(ue.a,{className:t.root0},o.a.createElement(y.a,{color:"textSecondary",variant:"body2"},i.about)),o.a.createElement(ue.a,{className:t.root0},null!==u&&0!==u.length&&o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h5"},"Requirements")),o.a.createElement(ue.a,{className:t.root0},0!==u.length&&u.map((function(e){return o.a.createElement(me.a,{key:e,variant:"outlined",color:"inherit",label:e})}))),o.a.createElement(ue.a,{className:t.root0},"Offline"===i.event_mode&&o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h5"},"Venue Details")),o.a.createElement(ue.a,{className:t.root0},"Offline"===i.event_mode&&o.a.createElement(y.a,{color:"textSecondary",variant:"body2"},i.venue)),o.a.createElement(ue.a,{className:t.root0},"Offline"===i.event_mode&&o.a.createElement(y.a,{color:"textSecondary",variant:"body2"},i.venue_college)),o.a.createElement(ue.a,{className:t.root0},"Paid"===i.fee_type&&o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h5"},"Fee Details")),o.a.createElement(ue.a,{className:t.root0},"Paid"===i.fee_type&&o.a.createElement(y.a,{color:"textSecondary",variant:"body2"},"Rs "+i.fee)),o.a.createElement(ue.a,{className:t.root0},"Online"===i.event_mode&&o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h5"},"Platform Details")),o.a.createElement(ue.a,{className:t.root0},"Online"===i.event_mode&&o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"body2"},i.platform_details)),o.a.createElement(ue.a,{className:t.root0},o.a.createElement(y.a,{style:{marginTop:"20px",marginBottom:"20"},variant:"h5"},"Organised By")),o.a.createElement(ue.a,{className:t.root0},o.a.createElement(ue.a,{className:t.adminDetails},o.a.createElement(ue.a,null,o.a.createElement(g.a,{className:t.avatar,alt:C.name,src:"https://ellipseapp.com"+"/api/image?id=".concat(C.profile_pic)})),o.a.createElement(ue.a,null,o.a.createElement(ue.a,null,o.a.createElement(y.a,{variant:"h5"},C.name)),o.a.createElement(ue.a,null,o.a.createElement(y.a,{color:"textSecondary",variant:"body2"},C.college_name)))))),o.a.createElement(P.a,{item:!0,xs:12}),o.a.createElement(P.a,null)),o.a.createElement(de,{event:i,open:k,handleClose:function(){T(!1)}})))},he=a(586),fe=a(587),ve=a(589),be=a(591),ye=a(592),je=a(588),Ce=a(590),Oe=a(117),Se=a.n(Oe),xe=Object(j.a)((function(e){return{root:{alignItems:"center",marginBottom:e.spacing(2),padding:e.spacing(1),alignContent:"center"},media:{},avatar:{backgroundColor:e.palette.primary.main},buttonDiv:{marginLeft:"auto"},button:{margin:e.spacing(.5)},large:{width:e.spacing(17),height:e.spacing(17)},tab:{flexGrow:1,background:e.palette.secondary.main,alignItems:"center"},paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));var ke=function(e){var t=xe(),a=(e.children,e.value),n=(e.url,e.index),r=Object(ce.a)(e,["children","value","url","index"]),l=e.event,i=new Date(l.start_time),c=new Date(l.finish_time),s=new Date(l.registration_end_time);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n},r),a===n&&o.a.createElement("div",{className:t.root},o.a.createElement(he.a,{align:"alternate"},o.a.createElement(fe.a,null,o.a.createElement(je.a,null,o.a.createElement(y.a,{variant:"body2",color:"textSecondary"},s.toDateString()," "+s.toLocaleTimeString())),o.a.createElement(ve.a,null,o.a.createElement(Ce.a,{color:"primary"},o.a.createElement(Se.a,null)),o.a.createElement(be.a,null)),o.a.createElement(ye.a,null,o.a.createElement(W.a,{elevation:3,className:t.paper},o.a.createElement(y.a,{variant:"h6",component:"h1"},"Registration Ends"),o.a.createElement(y.a,null,"Your oppurtunity to participate came to an end")))),o.a.createElement(fe.a,null,o.a.createElement(je.a,null,o.a.createElement(y.a,{variant:"body2",color:"textSecondary"},i.toDateString()," "+i.toLocaleTimeString())),o.a.createElement(ve.a,null,o.a.createElement(Ce.a,{color:"primary",variant:"outlined"},o.a.createElement(Se.a,null)),o.a.createElement(be.a,null)),o.a.createElement(ye.a,null,o.a.createElement(W.a,{elevation:3,className:t.paper},o.a.createElement(y.a,{variant:"h6",component:"h1"},"Starts"),o.a.createElement(y.a,null,"Party begins")))),o.a.createElement(fe.a,null,o.a.createElement(je.a,null,o.a.createElement(y.a,{variant:"body2",color:"textSecondary"},c.toDateString()," "+c.toLocaleTimeString())),o.a.createElement(ve.a,null,o.a.createElement(Ce.a,{color:"primary"},o.a.createElement(Se.a,null)),o.a.createElement(be.a,{className:t.secondaryTail})),o.a.createElement(ye.a,null,o.a.createElement(W.a,{elevation:3,className:t.paper},o.a.createElement(y.a,{variant:"h6",component:"h1"},"Ends"),o.a.createElement(y.a,null,"Chill,event came to an end")))))))};function Te(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var we=Object(j.a)((function(e){return{icons:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},root:{},bottomTags:{position:"absolute",left:e.spacing(1),bottom:e.spacing(1)},dialog:{minHeight:"90vh",maxHeight:"90vh"},root2:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.secondary.main,padding:e.spacing(1)},bottomBar:{display:"flex",width:"90%",backgroundColor:e.palette.secondary.main},field:{width:"100%"},action:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},dialogContent:Object(_.a)({},e.breakpoints.down("md"),{padding:e.spacing(1)})}}));var _e=function(e){var t=e.event,a=o.a.useState(0),n=Object(d.a)(a,2),r=n[0],l=n[1],i=we(),c=Object($.a)(),s=localStorage.getItem("token"),m=o.a.useState(!1),u=Object(d.a)(m,2),p=u[0],g=u[1],h=o.a.useState(!1),f=Object(d.a)(h,2),v=f[0],b=f[1];function y(){e.handleClose()}return o.a.createElement(Y.a,{open:e.open,onClose:y,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,maxWidth:"md",PaperProps:{style:{backgroundColor:c.palette.secondary.main,boxShadow:"none"}},classes:{paper:i.dialog}},o.a.createElement(K.a,{id:"scroll-dialog-title"},t.name,o.a.createElement("div",{className:i.icons},o.a.createElement(Q.a,{"aria-label":"share",onClick:function(){g(!0)}},o.a.createElement(Z.a,null)),o.a.createElement(Q.a,{"aria-label":"close",className:i.closeButton,onClick:y},o.a.createElement(te.a,{fontSize:"large"}))),o.a.createElement("div",{className:i.root},o.a.createElement(W.a,{className:i.root2},o.a.createElement(H.a,{value:r,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on"},o.a.createElement(R.a,Object.assign({label:"About"},Te(0))),o.a.createElement(R.a,Object.assign({label:"Schedule"},Te(1))))))),o.a.createElement(V.a,{className:i.dialogContent,dividers:!0},o.a.createElement(re,{event:t,open:p,handleClose:function(){g(!1)}}),o.a.createElement(Ee,{value:r,index:0,event:e.event}),o.a.createElement(ke,{value:r,index:1,event:e.event})),o.a.createElement(M.a,null,"pending"===t.status&&o.a.createElement(E.a,{variant:"contained",onClick:function(){var e=new FormData,a={eventId:t._id,status:"active"};e=JSON.stringify(a),fetch("https://ellipseapp.com/api/admin/update_event_status",{headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:e}).then((function(e){200===e.status?e.json().then((function(e){console.log(e),window.location.reload(!1)})):401===e.status&&localStorage.removeItem("token")}))}},"Accept"),"pending"!==t.status&&o.a.createElement(E.a,{variant:"contained",onClick:function(){var e=new FormData,a={eventId:t._id,status:"pending"};e=JSON.stringify(a),fetch("https://ellipseapp.com/api/admin/update_event_status",{headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:e}).then((function(e){200===e.status?e.json().then((function(e){console.log(e),window.location.reload(!1)})):401===e.status&&localStorage.removeItem("token")}))}},"Make Inactive"),o.a.createElement(E.a,{variant:"contained",onClick:function(){b(!0)},style:{marginLeft:"5px"}},"Send Email")),o.a.createElement(ie,{event:t,handleClose:function(){b(!1)},open:v}))},Ne=a(30),Ie=a(5),De=a(597),Be=a(599),ze=a(594),Ae=a(596),Pe=a(598),We=a(595),He=Object(Ie.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(ze.a),Re=Object(Ie.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(We.a),qe=Object(j.a)({table:{minWidth:700}});function Fe(e){var t=qe(),a=e.users,n=o.a.useState([]),r=Object(d.a)(n,2),l=r[0],i=r[1];return o.a.useEffect((function(){a.forEach((function(e){var t,a,n,o,r,l=(t=e.name,a=e.email,n=e.college_name,o=e.designation,r=e.gender,{name:t,email:a,college:n,designation:o,gender:r});i((function(e){return[].concat(Object(Ne.a)(e),[l])}))}))}),[a]),o.a.createElement(Ae.a,{component:W.a},o.a.createElement(De.a,{className:t.table,"aria-label":"customized table"},o.a.createElement(Pe.a,null,o.a.createElement(We.a,null,o.a.createElement(He,null,"Name"),o.a.createElement(He,{align:"right"},"Email"),o.a.createElement(He,{align:"right"},"College"),o.a.createElement(He,{align:"right"},"Designation"),o.a.createElement(He,{align:"right"},"Gender"))),o.a.createElement(Be.a,null,l.map((function(e){return o.a.createElement(Re,{key:e.name},o.a.createElement(He,{component:"th",scope:"row"},e.name),o.a.createElement(He,{align:"right"},e.email),o.a.createElement(He,{align:"right"},e.college),o.a.createElement(He,{align:"right"},e.designation),o.a.createElement(He,{align:"right"},e.gender))})))))}var Le=Object(j.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});function Ue(e){var t=Le(),a=e.report;return o.a.createElement(q.a,{className:t.root},o.a.createElement(L.a,null,o.a.createElement(y.a,{variant:"h5",component:"h2"},a.title),o.a.createElement(y.a,{className:t.pos,color:"textSecondary"},a.description),o.a.createElement(y.a,{variant:"body2",component:"p"},"Event id: ",a.event_id),o.a.createElement(y.a,{variant:"body2",component:"p"},"User id: ",a.user_id)))}var Ge=Object(j.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});function Je(e){var t=Ge(),a=e.feedback;return o.a.createElement(q.a,{className:t.root},o.a.createElement(L.a,null,o.a.createElement(y.a,{variant:"h5",component:"h2"},a.description),o.a.createElement(y.a,{variant:"body2",component:"p"},"User id: ",a.user_id)))}var Me=a(604),Ve=a(613),Ke=a(575),Ye=Object(j.a)((function(e){return{button:{margin:e.spacing(.5)}}}));var Qe=function(e){var t=Ye(),a=localStorage.getItem("token"),n=o.a.useState(null),r=Object(d.a)(n,2),l=r[0],i=r[1],c=o.a.useState(null),s=Object(d.a)(c,2),m=s[0],u=s[1],p=o.a.useState([]),g=Object(d.a)(p,2),h=g[0],v=g[1],b=o.a.useState([]),j=Object(d.a)(b,2),C=j[0],O=j[1],S=o.a.useState([]),x=Object(d.a)(S,2),k=x[0],T=x[1];o.a.useEffect((function(){fetch("https://ellipseapp.com/api/admin/event/get_event_keywords",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){e.json().then((function(e){e.forEach((function(e){"EventTags"===e.type?v((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventRequirements"===e.type?O((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventTypes"===e.type&&T((function(t){return[].concat(Object(Ne.a)(t),[e])}))}))}))}))}),[a]);var w=function(e){return function(){var t=new FormData,n={id:e._id};t=JSON.stringify(n),fetch("https://ellipseapp.com/api/admin/delete_event_keywords",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:t}).then((function(e){200===e.status?(v([]),T([]),O([]),e.json().then((function(e){e.forEach((function(e){"EventTags"===e.type?v((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventRequirements"===e.type?O((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventTypes"===e.type&&T((function(t){return[].concat(Object(Ne.a)(t),[e])}))}))}))):401===e.status&&localStorage.removeItem("token")}))}};return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement(f.a,{value:l||"",label:"Name",onChange:function(e){return i(e.target.value)},fullWidth:!0,name:"title",variant:"outlined",style:{marginBottom:"6px"}}),o.a.createElement(Ke.a,{variant:"outlined",fullWidth:!0,required:!0},o.a.createElement(Ve.a,{htmlFor:"outlined-age-native-simple"},"Type"),o.a.createElement(Me.a,{fullWidth:!0,native:!0,onChange:function(e){return u(e.target.value)},label:"Type",value:m||"",inputProps:{name:"type",id:"outlined-age-native-simple"}},o.a.createElement("option",{"aria-label":"None",value:""}),o.a.createElement("option",{value:"EventTypes"},"Event Types"),o.a.createElement("option",{value:"EventTags"},"Event Tags"),o.a.createElement("option",{value:"EventRequirements"},"Requirements"))),o.a.createElement(E.a,{className:t.button,onClick:function(){var e=new FormData,t={title:l,type:m};e=JSON.stringify(t),fetch("https://ellipseapp.com/api/admin/add_event_tags",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:e}).then((function(e){200===e.status?(i(null),u(null),v([]),T([]),O([]),e.json().then((function(e){e.forEach((function(e){"EventTags"===e.type?v((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventRequirements"===e.type?O((function(t){return[].concat(Object(Ne.a)(t),[e])})):"EventTypes"===e.type&&T((function(t){return[].concat(Object(Ne.a)(t),[e])}))}))}))):401===e.status&&localStorage.removeItem("token")}))},size:"large",variant:"contained"},"Add")),o.a.createElement(y.a,{style:{margin:"10px"}},"Event Types"),k.map((function(e,t){return o.a.createElement(me.a,{color:"secondary",label:e.title,onDelete:w(e)})})),o.a.createElement(y.a,{style:{margin:"10px"}},"Event Tags"),h.map((function(e,t){return o.a.createElement(me.a,{color:"secondary",label:e.title,onDelete:w(e)})})),o.a.createElement(y.a,{style:{margin:"10px"}},"Event Requirements"),C.map((function(e,t){return o.a.createElement(me.a,{color:"secondary",label:e.title,onDelete:w(e)})})))},Xe=Object(j.a)((function(e){return{button:{margin:e.spacing(.5)}}}));var Ze=function(e){var t=Xe(),a=localStorage.getItem("token"),n=o.a.useState(null),r=Object(d.a)(n,2),l=r[0],i=r[1],c=o.a.useState(null),s=Object(d.a)(c,2),m=s[0],u=s[1],p=o.a.useState(null),g=Object(d.a)(p,2),h=g[0],v=g[1],b=o.a.useState(null),j=Object(d.a)(b,2),C=j[0],O=j[1],S=o.a.useState(null),x=Object(d.a)(S,2),k=x[0],T=x[1],w=o.a.useState([]),_=Object(d.a)(w,2),N=_[0],I=_[1];return o.a.useEffect((function(){fetch("https://ellipseapp.com/api/admin/get_all_colleges",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){e.json().then((function(e){I(e)}))}))}),[a]),o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement(f.a,{autoComplete:"off",required:!0,value:l||"",label:"College Name",onChange:function(e){return i(e.target.value)},fullWidth:!0,name:"College Name",variant:"outlined",style:{marginBottom:"6px"}}),o.a.createElement(f.a,{autoComplete:"off",value:m||"",label:"City",onChange:function(e){return u(e.target.value)},fullWidth:!0,name:"City",variant:"outlined",style:{marginBottom:"6px"}}),o.a.createElement(f.a,{autoComplete:"off",value:C||"",label:"State",onChange:function(e){return O(e.target.value)},fullWidth:!0,name:"College Name",variant:"outlined",style:{marginBottom:"6px"}}),o.a.createElement(f.a,{autoComplete:"off",value:h||"",label:"Pincode",onChange:function(e){return v(e.target.value)},fullWidth:!0,name:"College Name",variant:"outlined",style:{marginBottom:"6px"}}),o.a.createElement(Ke.a,{variant:"outlined",fullWidth:!0,required:!0},o.a.createElement(Ve.a,{htmlFor:"outlined-age-native-simple"},"Type"),o.a.createElement(Me.a,{fullWidth:!0,native:!0,onChange:function(e){return T(e.target.value)},label:"Type",value:k||"",inputProps:{name:"type",id:"type"}},o.a.createElement("option",{"aria-label":"None",value:""}),o.a.createElement("option",{value:"State University"},"State University"),o.a.createElement("option",{value:"Deemed to be University"},"Deemed to be University"),o.a.createElement("option",{value:"Central University"},"Central University"),o.a.createElement("option",{value:"Private University"},"Private University"))),o.a.createElement(E.a,{className:t.button,onClick:function(){var e=new FormData,t={name:l,college_type:k,city:m,state:C,pin_code:h};e=JSON.stringify(t),fetch("https://ellipseapp.com/api/admin/add_college",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:e}).then((function(e){200===e.status?(T(null),e.json().then((function(e){I(e)}))):401===e.status&&localStorage.removeItem("token")}))},size:"large",variant:"contained"},"Add")),o.a.createElement(y.a,{style:{margin:"10px"}},"All Colleges"),N.map((function(e,t){return o.a.createElement(me.a,{color:"secondary",label:e.name,onDelete:(n=e,function(){var e=new FormData,t={id:n._id};e=JSON.stringify(t),fetch("https://ellipseapp.com/api/admin/delete_college",{headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:e}).then((function(e){200===e.status?e.json().then((function(e){I(e)})):401===e.status&&localStorage.removeItem("token")}))})});var n})))},$e=Object(j.a)((function(e){return{root:{},icons:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},root2:{marginTop:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.primary.light,marginBottom:e.spacing(2),padding:e.spacing(1)},content:{marginTop:e.spacing(3)},fixedHeightPaper:{backgroundColor:e.palette.secondary.main,padding:e.spacing(3),height:140}}}));var et=function(e){var t=localStorage.getItem("token"),a=$e(),n=o.a.useState(!1),r=Object(d.a)(n,2),l=r[0],i=r[1],s=o.a.useState([]),m=Object(d.a)(s,2),u=m[0],p=m[1],g=o.a.useState([]),E=Object(d.a)(g,2),h=E[0],f=E[1],v=o.a.useState([]),b=Object(d.a)(v,2),j=b[0],C=b[1],O=o.a.useState([]),S=Object(d.a)(O,2),x=S[0],k=S[1],T=o.a.useState([]),w=Object(d.a)(T,2),_=w[0],N=w[1],I=o.a.useState([]),D=Object(d.a)(I,2),B=D[0],z=D[1],A=o.a.useState([]),q=Object(d.a)(A,2),F=q[0],L=q[1],U=o.a.useState(0),G=Object(d.a)(U,2),M=G[0],V=G[1];if(o.a.useEffect((function(){fetch("https://ellipseapp.com/api/admin/get_all_events",{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){200===e.status?e.json().then((function(e){e.sort((function(e,t){return new Date(e.posted_on)-new Date(t.posted_on)})),f(e),C(e.filter((function(e){return"pending"===e.status}))),k(e.filter((function(e){return"active"===e.status})))})):401===e.status&&localStorage.removeItem("token")})),fetch("https://ellipseapp.com/api/admin/get_all_users",{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){200===e.status?e.json().then((function(e){N(e)})):401===e.status&&localStorage.removeItem("token")})),fetch("https://ellipseapp.com/api/admin/reports",{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){200===e.status?e.json().then((function(e){z(e)})):401===e.status&&localStorage.removeItem("token")})),fetch("https://ellipseapp.com/api/admin/feedback",{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json",Accept:"application/json"},method:"GET"}).then((function(e){200===e.status?e.json().then((function(e){L(e)})):401===e.status&&localStorage.removeItem("token")}))}),[t]),!t)return o.a.createElement(c.a,{to:"/"});var K=function(e){return function(){i(!0),p(e)}};return o.a.createElement("div",null,o.a.createElement("div",{className:a.root},o.a.createElement(P.a,{container:!0,component:"main"},o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,lg:2}),o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:8,lg:8},o.a.createElement(P.a,{container:!0,component:"maim",spacing:1},o.a.createElement(P.a,{item:!0,xs:12,md:4,lg:3},o.a.createElement(W.a,{className:a.fixedHeightPaper},o.a.createElement(y.a,null,"Total Events"),o.a.createElement(y.a,{component:"p",variant:"h4"},h.length))),o.a.createElement(P.a,{item:!0,xs:12,md:4,lg:3},o.a.createElement(W.a,{className:a.fixedHeightPaper},o.a.createElement(y.a,null,"Total Active Events"),o.a.createElement(y.a,{component:"p",variant:"h4"},x.length))),o.a.createElement(P.a,{item:!0,xs:12,md:4,lg:3},o.a.createElement(W.a,{className:a.fixedHeightPaper},o.a.createElement(y.a,null,"All Users"),o.a.createElement(y.a,{component:"p",variant:"h4"},_.length)))),o.a.createElement(W.a,{className:a.root2},o.a.createElement(H.a,{value:M,onChange:function(e,t){V(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on"},o.a.createElement(R.a,{label:"Pending Events"}),o.a.createElement(R.a,{label:"Active Events"}),o.a.createElement(R.a,{label:"All Events"}),o.a.createElement(R.a,{label:"Users"}),o.a.createElement(R.a,{label:"Reports"}),o.a.createElement(R.a,{label:"FeedBack"}),o.a.createElement(R.a,{label:"Add Keywods"}),o.a.createElement(R.a,{label:"Add Colleges"}))),o.a.createElement("div",{className:a.content},0===M&&o.a.createElement(P.a,{container:!0,component:"main",alignItems:"center",spacing:1},j.map((function(e,t){return o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,key:t},o.a.createElement(J,{event:e,handleViewClick:K(e),name:e.name}))}))),1===M&&o.a.createElement(P.a,{container:!0,component:"main",alignItems:"center",spacing:1},x.map((function(e,t){return o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,key:t},o.a.createElement(J,{event:e,handleViewClick:K(e),name:e.name}))}))),2===M&&o.a.createElement(P.a,{container:!0,component:"main",alignItems:"center",spacing:1},h.map((function(e,t){return o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,key:t},o.a.createElement(J,{event:e,handleViewClick:K(e),name:e.name}))}))),3===M&&o.a.createElement(Fe,{users:_}),4===M&&o.a.createElement(P.a,{container:!0,component:"main",alignItems:"center",spacing:1},B.map((function(e,t){return o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,key:t},o.a.createElement(Ue,{report:e}))}))),5===M&&o.a.createElement(P.a,{container:!0,component:"main",alignItems:"center",spacing:1},F.map((function(e,t){return o.a.createElement(P.a,{item:!0,xs:12,sm:12,md:4,key:t},o.a.createElement(Je,{feedback:e}))}))),6===M&&o.a.createElement(Qe,null),7===M&&o.a.createElement(Ze,null)))),o.a.createElement("div",null,o.a.createElement(_e,{open:l,event:u,handleClose:function(){i(!1)},name:u.name,startTime:u.start_time,endTime:u.finish_time,regEndTime:u.registrationEndTime,type:u.eventType,tags:u.tags,mode:u.eventMode,feeType:u.feesType}))))},tt=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(_.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(_.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(_.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function at(e){var t=e.history,a=tt(),n=localStorage.getItem("token");return o.a.createElement("div",{className:a.root},o.a.createElement(N.a,{position:"sticky"},o.a.createElement(I.a,null,o.a.createElement(y.a,{className:a.title,variant:"h6",noWrap:!0},"Ellipse"),o.a.createElement("div",{className:a.search},o.a.createElement("div",{className:a.searchIcon},o.a.createElement(A.a,null)),o.a.createElement(D.a,{placeholder:"Search Events",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),o.a.createElement(E.a,{color:"secondary",onClick:function(){fetch("https://ellipseapp.com/api/admin/logout",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json",Accept:"application/json"},method:"POST"}).then((function(e){200===e.status?e.json().then((function(e){localStorage.removeItem("token"),t.replace("/")})):401===e.status&&localStorage.removeItem("token")}))}},"Logout"))),o.a.createElement(et,null))}var nt=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/",component:w}),o.a.createElement(c.b,{exact:!0,path:"/home",component:at}))))},ot=a(602),rt=a(218),lt=Object(rt.a)({palette:{type:"dark",primary:{main:"#00bdaa",dark:"#00bdaa",light:"#000000"},secondary:{main:"#1C1C1E"},background:{default:"#000000"}}});Object(rt.a)({palette:{type:"light",primary:{main:"#00bdaa",dark:"#00bdaa",light:"#ffffff"},secondary:{main:"#e5e5e5"},background:{default:"#ffffff"}}});l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ot.a,{theme:lt},o.a.createElement(h.a,null,o.a.createElement(nt,null)))),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.71aee268.chunk.js.map