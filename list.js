class carteInstagram {
    constructor(lien){
        this.lien=lien;
        this.affichage =`<div class ="bloco"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${this.lien}embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`;
      
    }

    
}
//liste de produits 

var produits = []
// creer un produit a partir de la class
//const produit1 = new carteInstagram('https://www.instagram.com/p/CcDfi10Lka4/')
//produits.push(produit1);
//console.log(produits)
//elements de la page 

const titresoumis = document.getElementById('titresoumis');
const descriptionsoumise =document.getElementById('descriptionsoumise');
const prixsoumis =document.getElementById('prixsoumis');
const liensoumis =document.getElementById('liensoumis');
const typesoumis =document.getElementById('typesoumis');
const Ajouter = document.getElementById('btnajouter');
const Contacter = document.getElementById('bt')
const codesnipet =  document.getElementById('codesnipet')
const thumbwrapper0 =document.getElementById('thumb-wrapper0')
const ajouterelement =  document.getElementById('ajouterelement')
const copier = document.getElementById('copier')
const dimension = document.getElementById('dimension')
const dimensionw = document.getElementById('dimensionw')
const height =document.querySelector('.dimensionsth')
const width =document.querySelector('.dimensionstw')
const allbloc = document.getElementById('allbloc')
//carousell 
const carouselindic = document.getElementById('carousel-indicators')
const carousel= document.getElementById('carousel-inner')


thumbwrappercss = document.getElementsByClassName('thumb-wrapper');

width.innerHTML = `Epaisseur = ${dimensionw.value}%`;
height.innerHTML=`Hauteur = ${dimension.value}pixels`;
let currentrow = 1;

//code snipet 






//changer hauteur
let vraisnipet = function updatedimensions(){
    width.innerHTML = `Epaisseur ${dimensionw.value}%`;
    height.innerHTML=`Hauteur ${dimension.value} pixels`;


    
    for (let i = 0; i < thumbwrappercss.length; i++) {
      thumbwrappercss[i].style.width = `${dimensionw.value}%`;
      thumbwrappercss[i].style.height= `${dimension.value}px`;
      
    }

    let code1 = `<div   style ="width: ${dimensionw.value}%;height:${dimension.value}px;border:1px solid rgb(26, 196, 41);
    box-shadow:3px 6px rgb(116, 112, 112);
    border-radius: 10px;
    margin: 0 auto;
      " ><iframe class="instagram-media instagram-media-rendered" style="height:95%;
    width:95%;
    position:relative;" id="instagram-embed-0" src="${produits.at(-1).lien}embed/captioned/?cr=1&v=14&wp=243&rd=http%3A%2F%2Flocalhost%3A5500&rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`
    
    
   
    codesnipet.textContent = code1;
    return code1;
 
}


 

//copier le texte
copier.onclick=()=> {
   


    /* Select the text field */
    codesnipet.select();
    codesnipet.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(codesnipet.value);
}





// déclencheurs et fonction

dimension.oninput= vraisnipet;
 dimensionw.oninput= vraisnipet;





function creerThumbwrapper(){


  if(produits.length%3  === 1 && produits.length>1 ){
    currentrow ++;
    
    console.log('Actuelle colone est '+ currentrow)
  
  //cree un autre bouton carrousel
  let listitem=document.createElement('li') 
       listitem.setAttribute("data-target","#mycarousel");
       listitem.setAttribute("data-slide-to",`${((produits.length-1)/3)}`)

  
  carouselindic.appendChild(listitem)



  //Creer des row 

  div1 = document.createElement('div')
    div1.classList.add('carousel-item')
    //if(produits.length%3===1)
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
               
               
               
}








//Manipulation de Iframe 
 function manipulationdeiframe(){
  const myiframe= document.getElementsByClassName('instagram-media')
  const element1 = myiframe[0];
  console.log(element1)
  const contentwindowofelement1=element1.contentWindow 
  const contentDocumentofelement1= element1.contentDocument
  console.log(contentwindowofelement1)
  console.log(contentDocumentofelement1)
  console.log(contentwindowofelement1.document)
  console.log(contentDocumentofelement1.document)
  
  
}
















Ajouter.onclick=()=>{
  
//verifie le lien 
  if( String(liensoumis.value).includes('copy')){
 
    url=(String(liensoumis.value)).substring(0,40)
    
  }else{
    url=liensoumis.value
   
  }
    //cree une nouvelle carte 
    const carteInstagramcree = new carteInstagram(url);
    produits.push(carteInstagramcree);
    //cree les elements de la liste
    creerThumbwrapper();
    //afficher les elements de la liste sur la page 
    produits.forEach(element => {

      
      
      const cage =document.getElementById(`thumb-wrapper${produits.indexOf(element)}`)
     
      cage.innerHTML= produits[produits.indexOf(element)].affichage;
     
      
  });
  // copier le code sur les zones de snippet 
    vraisnipet();
    //capturer un element du iframe 
    manipulationdeiframe();
   

   
    

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