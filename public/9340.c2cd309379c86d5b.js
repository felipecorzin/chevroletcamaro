"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9340],{9340:(v,C,e)=>{e.r(C),e.d(C,{AddInfoCarPageModule:()=>_});var f=e(6895),g=e(433),i=e(5133),u=e(5017),s=e(655),p=e(3900),a=e(6388),n=e(4650),h=e(9846),m=e(2332);function I(t,l){if(1&t){const o=n.EpF();n.TgZ(0,"div",12),n.NdJ("tap",function(){n.CHM(o);const d=n.oxw();return n.KtG(d.selectPhoto())}),n.qZA()}}function A(t,l){if(1&t){const o=n.EpF();n.TgZ(0,"ion-img",13)(1,"ion-input",8),n.NdJ("ngModelChange",function(d){n.CHM(o);const c=n.oxw();return n.KtG(c.infoCar.img=d)}),n.qZA()()}if(2&t){const o=n.oxw();n.Q6J("src",o.infoCar.img),n.xp6(1),n.Q6J("ngModel",o.infoCar.img)}}const P=[{path:"",component:(()=>{class t{constructor(o,r,d,c,T){this.router=o,this.route=r,this.navCtrl=d,this.uiService=c,this.infoCarService=T,this.infoCar={title:"",description:"",img:""}}ngOnInit(){!this.router.url.includes("update-info-car")||this.route.params.pipe((0,p.w)(({id:o})=>this.infoCarService.getInfoCar(o))).subscribe(o=>this.infoCar=o)}regresar(){this.navCtrl.navigateBack("/tabs/info-car")}selectPhoto(){return(0,s.mG)(this,void 0,void 0,function*(){const o=yield a.V1.getPhoto({quality:75,width:400,height:400,allowEditing:!1,source:a.oK.Prompt,resultType:a.dk.DataUrl});this.isSelected=!0,this.infoCar.img=o.dataUrl})}saveInfoCar(){0!==this.infoCar.title.trim().length&&this.infoCar.id&&this.infoCarService.updateInfoCar(this.infoCar.id,this.infoCar).subscribe(()=>{this.uiService.presentToast("Updated information car"),this.regresar()})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(u.F0),n.Y36(u.gz),n.Y36(i.SH),n.Y36(h.F),n.Y36(m.B))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-info-car"]],decls:22,vars:6,consts:[[1,"ion-no-border"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","light"],["id","img",3,"tap",4,"ngIf"],["id","imgInfoCar",3,"src",4,"ngIf"],["lines","none"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["clearOnEdit","true",3,"ngModel","ngModelChange"],["shape","round","expand","block",1,"miBoton",3,"tap"],["md","create-sharp","slot","end","color","light"],["id","img",3,"tap"],["id","imgInfoCar",3,"src"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.NdJ("tap",function(){return r.regresar()}),n._UZ(4,"ion-icon",3),n.qZA()(),n.TgZ(5,"ion-title"),n._uU(6),n.qZA()()(),n.TgZ(7,"ion-content")(8,"ion-list"),n.YNc(9,I,1,0,"div",4),n.YNc(10,A,2,2,"ion-img",5),n.TgZ(11,"ion-item",6)(12,"ion-label",7),n._uU(13,"Title"),n.qZA(),n.TgZ(14,"ion-input",8),n.NdJ("ngModelChange",function(c){return r.infoCar.title=c}),n.qZA()(),n.TgZ(15,"ion-item",6)(16,"ion-label",7),n._uU(17,"Description"),n.qZA(),n.TgZ(18,"ion-textarea",9),n.NdJ("ngModelChange",function(c){return r.infoCar.description=c}),n.qZA()()(),n.TgZ(19,"ion-button",10),n.NdJ("tap",function(){return r.saveInfoCar()}),n._uU(20),n._UZ(21,"ion-icon",11),n.qZA()()),2&o&&(n.xp6(6),n.hij(" ",r.infoCar.id?"UpdateInfoCar":"AddInfoCar"," "),n.xp6(3),n.Q6J("ngIf",!r.isSelected),n.xp6(1),n.Q6J("ngIf",r.isSelected),n.xp6(4),n.Q6J("ngModel",r.infoCar.title),n.xp6(4),n.Q6J("ngModel",r.infoCar.description),n.xp6(2),n.hij(" ",r.infoCar.id?"UpdateInfoCar":"AddInfoCar"," "))},dependencies:[f.O5,g.JJ,g.On,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Xz,i.pK,i.Ie,i.Q$,i.q_,i.g2,i.wd,i.sr,i.j9],styles:["#img[_ngcontent-%COMP%]{background:url(no-imagen-small.d6a713395f470a23.jpg);width:100px;height:100px;margin:0 auto}#imgInfoCar[_ngcontent-%COMP%]{width:100px;height:100px;margin:0 auto}ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}ion-title[_ngcontent-%COMP%]{--color: var(--ion-color-light)}ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-light)}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(P),u.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.ez,g.u5,i.Pc,M]}),t})()},9846:(v,C,e)=>{e.d(C,{F:()=>u});var f=e(655),g=e(4650),i=e(5133);let u=(()=>{class s{constructor(a,n){this.alertController=a,this.toastController=n}alertaInformativaLogin(a,n,h){return(0,f.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:a,subHeader:n,message:h,buttons:["OK"]})).present()})}alertaInformativa(a){return(0,f.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:a,buttons:["OK"]})).present()})}presentToast(a){return(0,f.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:a,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return s.\u0275fac=function(a){return new(a||s)(g.LFG(i.Br),g.LFG(i.yF))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);