"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(_,s,a)=>{a.r(s),a.d(s,{HomePageModule:()=>Z});var d=a(6895),o=a(4556),l=a(4006),g=a(4228),n=a(8274),u=a(4032);const m=[{path:"",component:(()=>{class e{constructor(t){this.translate=t,this.showContact=!0,this.selectedLanguage="es"}changeLanguage(t){this.translate.use(t)}downloadResume(){fetch("../assets/resume/resume-ricardo.pdf").then(t=>t.blob()).then(t=>{const i=document.createElement("a"),c=URL.createObjectURL(t);i.href=c,i.download="Ricardo-Hoja-de-Vida.pdf",i.click(),URL.revokeObjectURL(c)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.sK))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home"]],decls:129,vars:2,consts:[[2,"font-size","1.5rem","font-weight","bold","text-transform","uppercase"],["name","create",2,"transform","rotate(-15deg)"],["name","color-wand",2,"transform","rotate(15deg)"],[2,"text-align","end"],[2,"font-size","13px","align-content","right"],["size","40px"],["interface","popover","placeholder","Language",2,"color","aliceblue","background-color","#333","size","12px","font-size","14px",3,"ngModel","ngModelChange"],["value","es"],["value","en"],["slot","end"],["slot","start"],["id","content"],[2,"text-align","justify"],["size","120px"],["src","../../assets/profile-picture/Ricardo_Supe.jpeg","alt","The Wisconsin State Capitol building in Madison, WI at night",2,"width","200px","height","200px"],["color","secondary",3,"click"],["name","download","slot","start","color","dark"],[2,"display","flex","margin-top","10px"],["href","https://instagram.com/ricardo.scythe_",2,"display","flex","align-items","left","text-decoration","none"],["name","logo-instagram"],["href","https://www.linkedin.com/in/ricardo-supe-silva-818ba2144/",2,"display","flex","align-items","left","text-decoration","none"],["name","logo-linkedin"],["href","https://github.com/Ricardo6904",2,"display","flex","align-items","left","text-decoration","none"],["name","logo-github"],["lines","none"],["name","logo-html5","slot","start"],["name","logo-css3","slot","start"],["name","logo-javascript","slot","start"],["name","logo-angular","slot","start"],["name","logo-ionic","slot","start"],["name","school","slot","start"],["name","book","slot","start"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title")(3,"ion-grid")(4,"ion-row")(5,"ion-col")(6,"ion-text",0),n._UZ(7,"ion-icon",1)(8,"ion-icon",2),n._uU(9," Creatividad a tu alcance "),n.qZA()(),n.TgZ(10,"ion-col",3)(11,"ion-label",4),n._uU(12,"Idioma:"),n.qZA()(),n.TgZ(13,"ion-col",5)(14,"ion-select",6),n.NdJ("ngModelChange",function(p){return i.selectedLanguage=p}),n.TgZ(15,"ion-select-option",7),n._uU(16,"Espa\xf1ol"),n.qZA(),n.TgZ(17,"ion-select-option",8),n._uU(18,"English"),n.qZA()()()()()(),n.TgZ(19,"ion-buttons",9)(20,"ion-button"),n._uU(21),n.qZA()(),n.TgZ(22,"ion-buttons",10),n._UZ(23,"ion-menu-button"),n.qZA()()(),n._UZ(24,"ion-router-outlet",11),n.TgZ(25,"ion-content")(26,"ion-card")(27,"ion-card-header")(28,"ion-card-subtitle"),n._uU(29,"Acerca de m\xed"),n.qZA(),n.TgZ(30,"ion-card-title"),n._uU(31,"Hola, soy Ricardo Supe"),n.qZA()(),n.TgZ(32,"ion-card-content")(33,"ion-grid")(34,"ion-row")(35,"ion-col")(36,"p",12),n._uU(37,"Soy un apasionado por la tecnolog\xeda y el aprendizaje constante. Como n\xf3mada digital, disfruto de la libertad de trabajar desde cualquier lugar del mundo mientras sigo desarrollando mis habilidades y conociendo nuevas culturas. Me esfuerzo por estar siempre al d\xeda con las \xfaltimas tendencias y tecnolog\xedas en el mundo digital, y estoy comprometido a mejorar mis habilidades y conocimientos de manera continua. Mi objetivo es utilizar mis habilidades para ayudar a las empresas y organizaciones a alcanzar sus metas a trav\xe9s del dise\xf1o y el desarrollo de soluciones digitales eficientes y atractivas."),n.qZA()(),n.TgZ(38,"ion-col",13),n._UZ(39,"ion-img",14),n.qZA()()(),n.TgZ(40,"ion-button",15),n.NdJ("click",function(){return i.downloadResume()}),n._UZ(41,"ion-icon",16),n._uU(42," Descarga mi Hoja de Vida "),n.qZA(),n.TgZ(43,"div",17)(44,"a",18),n._UZ(45,"ion-icon",19),n.qZA(),n.TgZ(46,"a",20),n._UZ(47,"ion-icon",21),n.qZA(),n.TgZ(48,"a",22),n._UZ(49,"ion-icon",23),n.qZA()()()(),n.TgZ(50,"ion-card")(51,"ion-card-header")(52,"ion-card-subtitle"),n._uU(53,"Habilidades"),n.qZA(),n.TgZ(54,"ion-card-title"),n._uU(55,"Tecnolog\xedas y Conocimiento"),n.qZA()(),n.TgZ(56,"ion-card-content")(57,"ion-list")(58,"ion-item",24),n._UZ(59,"ion-icon",25),n._uU(60," HTML5 "),n.qZA(),n.TgZ(61,"ion-item",24),n._UZ(62,"ion-icon",26),n._uU(63," CSS3 "),n.qZA(),n.TgZ(64,"ion-item",24),n._UZ(65,"ion-icon",27),n._uU(66," JavaScript "),n.qZA(),n.TgZ(67,"ion-item",24),n._UZ(68,"ion-icon",28),n._uU(69," Angular "),n.qZA(),n.TgZ(70,"ion-item",24),n._UZ(71,"ion-icon",29),n._uU(72," Ionic "),n.qZA()()()(),n.TgZ(73,"ion-card")(74,"ion-card-header")(75,"ion-card-subtitle"),n._uU(76,"Educaci\xf3n"),n.qZA(),n.TgZ(77,"ion-card-title"),n._uU(78,"Detalles sobre la formaci\xf3n acad\xe9mica"),n.qZA()(),n.TgZ(79,"ion-card-content")(80,"ion-list")(81,"ion-item"),n._UZ(82,"ion-icon",30),n.TgZ(83,"ion-text")(84,"ul")(85,"ion-label")(86,"b"),n._uU(87,"Universidad:"),n.qZA(),n._uU(88," Universidad T\xe9rcnica de Ambato "),n.qZA(),n.TgZ(89,"ion-label")(90,"b"),n._uU(91,"Carrera:"),n.qZA(),n._uU(92," Software"),n.qZA(),n.TgZ(93,"ion-label")(94,"b"),n._uU(95,"Estado:"),n.qZA(),n._uU(96," Pr\xf3ximo a egresar"),n.qZA()()()(),n.TgZ(97,"ion-item"),n._UZ(98,"ion-icon",31),n.TgZ(99,"ion-text")(100,"ul")(101,"ion-label")(102,"b"),n._uU(103,"Certificaci\xf3n:"),n.qZA(),n._uU(104," Creando aplicaciones para implementar modelos de machine learning"),n.qZA(),n.TgZ(105,"ion-label")(106,"b"),n._uU(107,"Instituci\xf3n:"),n.qZA(),n._uU(108," SEE (Sociedad Ecuatoriana de Estad\xedstica)"),n.qZA(),n.TgZ(109,"ion-label")(110,"b"),n._uU(111,"A\xf1o:"),n.qZA(),n._uU(112," 2022"),n.qZA()()()(),n.TgZ(113,"ion-item"),n._UZ(114,"ion-icon",31),n.TgZ(115,"ion-text")(116,"ul")(117,"ion-label")(118,"b"),n._uU(119,"Curso:"),n.qZA(),n._uU(120," Crea Aplicaciones Java Web Complet\xedsimo y Desde Cero!"),n.qZA(),n.TgZ(121,"ion-label")(122,"b"),n._uU(123,"Instituci\xf3n:"),n.qZA(),n._uU(124," Udemy"),n.qZA(),n.TgZ(125,"ion-label")(126,"b"),n._uU(127,"A\xf1o:"),n.qZA(),n._uU(128," 2023"),n.qZA()()()()()()()()),2&t&&(n.xp6(14),n.Q6J("ngModel",i.selectedLanguage),n.xp6(7),n.hij(" ",i.selectedLanguage," "))},dependencies:[l.JJ,l.On,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Xz,o.Ie,o.Q$,o.q_,o.fG,o.Nd,o.t9,o.n0,o.yW,o.wd,o.sr,o.QI,o.jP],styles:["ion-icon[name=logo-instagram][_ngcontent-%COMP%]{color:#833ab4;font-size:30px;transition:transform .3s ease-in-out}ion-icon[name=logo-linkedin][_ngcontent-%COMP%]{color:#0077b5;font-size:30px;transition:transform .3s ease-in-out}ion-icon[name=logo-github][_ngcontent-%COMP%]{color:#333;font-size:30px;transition:transform .3s ease-in-out}a[_ngcontent-%COMP%]:hover   ion-icon[name=logo-instagram][_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   ion-icon[name=logo-linkedin][_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   ion-icon[name=logo-github][_ngcontent-%COMP%]{transform:scale(1.1)}ion-content[_ngcontent-%COMP%]{--background: #f5f5f5}ion-icon[_ngcontent-%COMP%]{color:#488aff;font-size:30px}ion-icon[name=logo-html5][_ngcontent-%COMP%]{color:#d79a37}ion-icon[name=logo-javascript][_ngcontent-%COMP%]{color:#f5e50d}ion-icon[name=logo-angular][_ngcontent-%COMP%]{color:#f30b0b}ion-icon[name=school][_ngcontent-%COMP%]{color:#2b2828}ion-tab-button[_ngcontent-%COMP%]{--background-focused: #fff;--color-focused: #333;width:25%;text-align:center}ion-toolbar[_ngcontent-%COMP%]{--background: #333;--color: #fff}ion-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}ion-header[_ngcontent-%COMP%]{background-color:#333;color:#fff}.formal-background[_ngcontent-%COMP%]{background-color:#e0dede}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;font-size:1.2rem}ion-list[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:20px}ion-item[_ngcontent-%COMP%]{--min-height: 50px;--background: transparent;--color: #333;font-size:16px;font-weight:700}ion-card[_ngcontent-%COMP%]{background-color:#f0f0f0}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;opacity:0;transform:translateY(50px);animation:_ngcontent-%COMP%_slideInFromTop .5s ease forwards}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;opacity:0;transform:translateY(50px);animation:_ngcontent-%COMP%_slideInFromTop .5s ease forwards;animation-delay:.2s}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.5;opacity:0;transform:translateY(50px);animation:_ngcontent-%COMP%_slideInFromTop .5s ease forwards;animation-delay:.4s}@keyframes _ngcontent-%COMP%_slideInFromTop{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(m),g.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,l.u5,o.Pc,f]}),e})()}}]);