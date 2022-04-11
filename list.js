

const liensoumis =document.getElementById('liensoumis');
const typesoumis =document.getElementById('typesoumis');
//button ajouter effacer
const Ajouter = document.getElementById('btnajouter');
const Effacer = document.getElementById('btneffacer')
//elements de page
const thumbwrapper0 =document.getElementById('thumb-wrapper0')
const copier = document.getElementById('copier')
const copier2 = document.getElementById('copier2')
const copuer3 = document.getElementById('copier3')
const dimension = document.getElementById('dimension')
const dimensionw = document.getElementById('dimensionw')
const height =document.querySelector('.dimensionsth')
const width =document.querySelector('.dimensionstw')
const carouselbloc = document.getElementById('carouselbloc')
const instagrambloc=document.getElementById('igpostsbloc')
const typelogo=document.getElementById('typelogo')
//carousell 
const carouselindic = document.getElementById('carousel-indicators')
const carousel= document.getElementById('carousel-inner')
//code snipets 
const codesnipet =  document.getElementById('codesnipet')
const codesnipet2 =  document.getElementById('codesnipet2')
const codesnipet3 = document.getElementById('codesnipethtml')


//selectionner tous les elements 
      //elements carousell
     thumbwrappercss = document.getElementsByClassName('thumb-wrapper');
     //elements IG posts
     igposts = document.getElementsByClassName('igpost')

 //Elements d'entrée     
width.innerHTML = `Epaisseur = ${dimensionw.value}%`;
height.innerHTML=`Hauteur = ${dimension.value}pixels`;
let currentrow = 1;

//Fonctions principales 


//creation de carte
class carteInstagram {
  constructor(lien){
      this.lien=lien;
      this.affichage =`<div class ="bloco"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${this.lien}embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`;
    
  }

  
}
//liste de produits 

var produits = []

//creer une nouvelle carte
function creerunproduit(){
  //verifie le lien 
  if( (String(liensoumis.value).length)>40){
 
    url=(String(liensoumis.value)).substring(0,40)
   
    
  
  
  
  }else if(liensoumis.value ==='') {

   url ="https://www.instagram.com/p/CV0almdPMAz/"

  }
  else {
    url=liensoumis.value
   
  }
 

    const carteInstagramcree = new carteInstagram(url);
    //mettre sur la liste 
    produits.push(carteInstagramcree);
}
//changer hauteur
function updatedimensions(){
    width.innerHTML = `Epaisseur ${dimensionw.value}%`;
    height.innerHTML=`Hauteur ${dimension.value} pixels`;

    for( i=0;i<produits.length;i++){
      //taille des thumbwrappers
      thumbwrappercss[i].style.width = `${dimensionw.value}%`;
      thumbwrappercss[i].style.height= `${dimension.value}px`;

      //taille des IG posts 
      igposts[i].style.height=`${dimension.value}px`;

    }
    
//faire rentrer les codes sur les petites cases
   codesnipet.value=`<div   style ="width: ${dimensionw.value}%;height:${dimension.value}px;border:1px solid rgb(26, 196, 41);
   box-shadow:3px 6px rgb(116, 112, 112);
   border-radius: 10px;
   margin: 0 auto;
     " ><iframe class="instagram-media instagram-media-rendered" style="height:95%;
   width:95%;
   position:relative;" id="instagram-embed-0" src="${produits[produits.length-1].lien}embed/captioned/?cr=1&v=14&wp=243&rd=http%3A%2F%2Flocalhost%3A5500&rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`;
   
   codesnipet2.value= `<div><iframe src="${produits[produits.length-1].lien}embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
   </div>`;

// HTML ET CSS SUR LES GRANDES CASES 
   codesnipet3.value = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
 
 <style>
 .blocvisuel{
     padding: 10px;
  background: #ebebeb;
  font-family: "Open Sans", sans-serif;
  border-radius: 30px;
  width: 98%;
  margin: 30px auto;
 }
 #carouselbloc .entete {
     font-family: "billabong";
     color: #333;
     text-align: center;
     padding-top: 6px;
     padding: 5px;
     margin-top: 15px;
 }
  #carouselbloc .row {
    
     display: flex;
     flex-wrap: wrap;
     margin-right: -15px;
     margin-left: -15px;
 }
 #coloneprinc {
     position: relative;
     width: 100%;
     padding-right: 5px;
     padding-left: 5px;
 }
 #carouselbloc .carousel {
     margin: 30px auto 60px;
     padding: 0 5px;
 }
 .carousel-indicators {
     bottom: -50px;
 }
 .carousel {
   margin: 30px auto 60px;
   padding: 0 5px;
 }
 .carousel .carousel-item {
   text-align: center;
   overflow: hidden;
 }
 .carousel .carousel-item h4 {
   font-family: 'Varela Round', sans-serif;
 }
 .carousel .carousel-item img {
   max-width: 100%;
   display: inline-block;
 }
 .carousel .carousel-item .btn {
   border-radius: 0;
   font-size: 12px;
   text-transform: uppercase;
   font-weight: bold;
   border: none;
   background: #a177ff;
   padding: 6px 15px;
   margin-top: 5px;
 }
 .carousel .carousel-item .btn:hover {
   background: #8c5bff;
 }
 .carousel .carousel-item .btn i {
   font-size: 14px;
   font-weight: bold;
   margin-left: 5px;
 }
 .carousel .thumb-wrapper {
   margin: 5px;
   /*text-align: left;*/
   background: #fff;
   /*box-shadow: 0px 0px 0px rgba(0,0,0,0.1);  */
     
 }
 .carousel .thumb-content {
   padding: 15px;
   font-size: 13px;
 }
 .carousel-control-prev i, .carousel-control-next i {
   font-size: 36px;
   position: absolute;
   top: 50%;
   display: inline-block;
   margin: -19px 0 0 0;
   z-index: 5;
   left: 0;
   right: 0;
   color: rgba(0, 0, 0, 0.8);
   text-shadow: none;
   font-weight: bold;
 }
 .carousel-control-prev i {
   margin-left: -3px;
 }
 .carousel-control-next i {
   margin-right: -3px;
 }
 
 .carousel-indicators li, .carousel-indicators li.active {
   width: 10px;
   height: 10px;
   border-radius: 50%;
   margin: 4px;
   border: none;
 }
 .carousel-indicators li {	
   background: #e96ab8;
 }
 .carousel-indicators li.active {	
   background: rgb(73, 82, 201);
 }
 .bloco{
     width: 95%;
     height:100%;
   
     border:1px solid #405de6;
     box-shadow:2px 4px rgba(203, 88, 231, 0.37);
     border-radius: 10px;
     margin: 0 auto;
       
   }
   .instagram-media.instagram-media-rendered{
     height:95%;
     width:95%;
     position:relative;
   }
 
   .carousel-control-prev, .carousel-control-next {
   height: 44px;
   width: 44px;
   background: none;	
   margin: auto 0;
   border-radius: 50%;
   border: 3px solid rgba(0, 0, 0, 0.8);
 }</style>
 <link rel="stylesheet" href="grid.css"><div class="blocvisuel" id="carouselbloc">${carouselbloc.innerHTML}</div>`;


}

//copier le texte du code snipet
function copiercode1() {
  const clip1=document.getElementById('clip1')
  clip1.className="bi bi-clipboard-check"
  
    /* Select the text field */
    codesnipet.select();
    codesnipet.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(codesnipet.value);
}
function copiercode2() {
  const clip2=document.getElementById('clip2')
  clip2.className="bi bi-clipboard-check"
  
    /* Select the text field */
    codesnipet2.select();
    codesnipet2.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(codesnipet2.value);
}
function copiercode3() {
  const clip3=document.getElementById('clip3')
  clip3.className="bi bi-clipboard-check"
  
    /* Select the text field */
    codesnipet3.select();
    codesnipet3.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(codesnipet3.value);
}

//Creer Post pour igposts
function creerpost(){

  //creer colone 4
 colone = document.createElement('div')
   colone.classList.add('col-4')
   //colone.classList.add('col-md-4')
   //creer Igpostt 
   igpost = document.createElement('div')
      igpost.classList.add('igpost')

      


      rowigposts= document.getElementById('rowigposts')
        rowigposts.prepend(colone)
           colone.appendChild(igpost)

           // inclure le post dans la page 
      igposts[0].innerHTML = produits[produits.length-1].affichage;
    

}

//Creer post pour carousel
function creerThumbwrapper(){


  if(produits.length%3  === 1 && produits.length>1 ){
    currentrow ++;
    
  
  //cree un autre bouton carrousel
  let listitem=document.createElement('li') 
       listitem.setAttribute("data-target","#mycarousel");
       listitem.setAttribute("data-slide-to",`${((produits.length-1)/3)}`)

  carouselindic.appendChild(listitem)
  //Creer des row 

  div1 = document.createElement('div')
    div1.classList.add('carousel-item')
    
       div2 = document.createElement('div')
       div2.classList.add('row')

       div2.id=`row${currentrow}`
       //test 
       carousel.appendChild(div1)
       div1.appendChild(div2)
      
  }
  
//creer un nouveau Thumbwrapper
         div3 = document.createElement('div')
         div3.classList.add('col-lg-4')
           div4 = document.createElement('div')
           div4.classList.add('thumb-wrapper')
           div4.id=`thumb-wrapper${(produits.length)-1}`

               div3.appendChild(div4)
              row=document.getElementById(`row${currentrow}`)
               row.appendChild(div3)           
               //afficher les elements sur la page 
               produits.forEach(element => {     
                const cage =document.getElementById(`thumb-wrapper${produits.indexOf(element)}`)        
                cage.innerHTML= produits[produits.indexOf(element)].affichage;
               
                
            });
               
}

//Afficher cacher elements
function choisiraffichage(){
    document.getElementById('igpostsbloc').style.display = typesoumis.value == 'Grid' ? 'block' : 'none';
    document.getElementById('carouselbloc').style.display = typesoumis.value == 'Carousel' ? 'block' : 'none';


    
    switch(typesoumis.value){
      case 'Grid':
        typelogo.className="bi bi-grid-3x3"
        break;
        case 'Carousel':
        typelogo.className="bi bi-layout-split"
        break;
       
    }
}

// déclencheurs et fonction
choisiraffichage();
copier.onclick=copiercode1;
copier2.onclick=copiercode2;
copier3.onclick=copiercode3;

dimensionw.oninput=updatedimensions;
dimension.oninput=updatedimensions;
typesoumis.oninput=choisiraffichage;
Ajouter.onclick=()=>{

   //creer un produit 
   creerunproduit();
   //Creer post pour carousel
   creerThumbwrapper();
   //Creer Post pour igposts    
       creerpost();
  //choisir affichage
  choisiraffichage();
  //cree les elements de la liste

  //changer hauteur    
      updatedimensions();
 
}
Effacer.onclick=()=>{
  produits=[]
  carouselbloc.innerHTML=`<div class="container-xl">
	<h2 class="entete">Visulisez votre galerie</h2>
	<div class="row">
		<div class="col-md-12 mx-auto"id="coloneprinc">
			<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
			<!-- Carousel indicators -->
			<ol class="carousel-indicators"id="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				
			
			</ol>   
			<!-- Wrapper for carousel items -->
			<div class="carousel-inner"  id="carousel-inner">
				<div class="carousel-item active">
					<div class="row"  id="row1">
					<!--	<div class="col-lg-4">  -->
					<!--	<div class="thumb-wrapper"id="thumb-wrapper0">      -->	
														
							
						
						
						<!-- FIN THUMB WRAPPER-->
					</div>
				</div>
				
			</div>
			<!-- Carousel controls -->
			<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i class="fa fa-angle-left"></i>
			</a>
			<a class="carousel-control-next" href="#myCarousel" data-slide="next">
				<i class="fa fa-angle-right"></i>
			</a>
		</div>
		</div>
	</div>
</div>`
instagrambloc.innerHTML=`<h2 class="entete">Visulisez votre galerie</h2>
<div class="instagramposts" id="instagramposts">
                 <div class="row" id="rowigposts">	
                     </div>              
 </div>`
}








   








 //const lientelechargement ='https://scontent.cdninstagram.com/v/t51.2885-15/259785638_469308978102691_8803107401494647710_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=OOJKITLXbMYAX8qNQGF&edm=AJBgZrYBAAAA&ccb=7-4&ig_cache_key=Mjc2NDAwNzY0NDg5OTIwMjI3Mw%3D%3D.2-ccb7-4&oh=00_AT-leKJe77kETDMCGGSoIoyO4TylA7ikzhQDDZvgXzqS-w&oe=6253EE8D&_nc_sid=78c662&dl=1'
//const lien2telechargement ='https://scontent.cdninstagram.com/v/t51.2885-15/271522547_4685273374859322_1087967682802019371_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=51Ig5_zkEkoAX--z833&edm=AJBgZrYBAAAA&ccb=7-4&oh=00_AT-zrwswYflgZ00-ciwB_V3OsylMRBGxrKIz6kbpGfE-0g&oe=6253F8EA&_nc_sid=78c662&dl=1'
//const lien3telechargement='https://scontent.cdninstagram.com/v/t51.2885-15/277840206_1188860831857817_4800269513640600467_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=ZZzTkC9uZ5gAX-7-3My&edm=AJBgZrYBAAAA&ccb=7-4&ig_cache_key=MjgwOTM1NTk1ODI0MjgxMTM5NA%3D%3D.2-ccb7-4&oh=00_AT9y2898KTDLYr1eDC79YD4gB5mcEBYQ9YBYqdobj6ZAbw&oe=62530D66&_nc_sid=78c662&dl=1'
  //      const liennormal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/259785638_469308978102691_8803107401494647710_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=OOJKITLXbMYAX-NQSFz&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT-zxJBZ0F9xo8o8JhaMyn4uv1fXcLq2KPCf82E-tKQXJA&oe=6253EE8D&_nc_sid=1ffb93'
    //    const lien2normal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/271522547_4685273374859322_1087967682802019371_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=51Ig5_zkEkoAX8YST1Y&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8TgdQZmV3xwQQ8aUFmqoytWw-qCt3wETcJHz3yemxbVA&oe=6253F8EA&_nc_sid=1ffb93'
      //  const lien3normal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/277840206_1188860831857817_4800269513640600467_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=ZZzTkC9uZ5gAX8WDRfY&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8gbURlmK_enzKk5Gb4MhP5k45Pm8Fg51hR186bRMK4FQ&oe=62530D66&_nc_sid=1ffb93'
//
  //      const reussite ='https://scontent.cdninstagram.com/v/t51.2885-15/277900579_458081222673754_3988041503705342731_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=Z-QQMwiTSFwAX8HHpSS&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8OaQdpA5vjtN2qqS0QdIdCMHzLAgsPZS7FRAH0Y0xAnw&oe=6252FE29&_nc_sid=1ffb93&dl=1'

    //    const resulution =' On enleve -alt3-1    et on ajoute  &dl=1 '