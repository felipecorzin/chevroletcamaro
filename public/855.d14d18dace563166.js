"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[855],{855:(C,l,e)=>{e.r(l),e.d(l,{AccountLocationPageModule:()=>M});var h=e(6895),v=e(433),a=e(5133),u=e(5017),f=e(655),o=e(4650),A=e(3071);const L=[{path:"",component:(()=>{class t{constructor(n){this.userService=n}ngOnInit(){this.loadUsers()}loadUsers(){this.userService.getUsers().subscribe(n=>{console.log(n),this.usuarios=n})}ionViewDidEnter(){navigator.geolocation.getCurrentPosition(n=>(0,f.mG)(this,void 0,void 0,function*(){yield this.initMap(n.coords.latitude,n.coords.longitude)}))}initMap(n,g){const P={lat:n,lng:g};var U=new google.maps.LatLngBounds;const d=new google.maps.Map(document.getElementById("map_canvas"),{zoom:15,center:P,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,mapTypeIds:["roadmap","terrain"]}});this.userService.getUsers().subscribe(c=>{this.usuarios=c},c=>{console.log(c)});let r,i,m=new google.maps.InfoWindow;for(i=0;i<this.usuarios.length;i++){let c=this.usuarios[i];var p=new google.maps.LatLng(c.lat,c.lng);U.extend(p),r=new google.maps.Marker({position:p,draggable:!0,animation:google.maps.Animation.BOUNCE,icon:new google.maps.MarkerImage(c.avatar,null,null,null,new google.maps.Size(40,60))}),r.setMap(d),google.maps.event.addListener(r,"click",function(Z,b){return function(){m.setContent(c.name),m.open(d,Z)}}(r))}}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(A.K))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-account-location"]],decls:13,vars:0,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["color","light","defaultHref","/tabs/account"],["src","../../../assets/img/logo_small.png",1,"logo-header"],["color","light",1,"ion-text-center"],["id","map_canvas"]],template:function(n,g){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o._UZ(3,"ion-back-button",3),o.qZA(),o.TgZ(4,"ion-title"),o._UZ(5,"img",4),o._uU(6," AccountLocation "),o.qZA()(),o.TgZ(7,"ion-toolbar",1)(8,"ion-text",5)(9,"h3"),o._uU(10,"Tap on the icon!!"),o.qZA()()()(),o.TgZ(11,"ion-content"),o._UZ(12,"div",6),o.qZA())},dependencies:[a.oU,a.Sm,a.W2,a.Gu,a.yW,a.wd,a.sr,a.cs],styles:["#map_canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(L),u.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[h.ez,v.u5,a.Pc,y]}),t})()}}]);