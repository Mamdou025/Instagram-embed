class carteInstagram {
    constructor(titre,lien,description,rating,numvedeur){
        this.titre = titre;
        this.description=description;
        this.rating=rating;
        this.numvedeur=numvedeur;
        this.lien=lien;
        this.affichage =`<div class ="bloco"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${this.lien}embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`;
      
    }

    
}
//liste de produits 

var produits = []
// creer un produit a partir de la class
const produit1 = new carteInstagram('voicile titre ','https://www.instagram.com/p/Cb7y8OnNwYv/','voici la description du premier produit que l',3,776394551)
produits.push(produit1);
//elements de la page 

const titresoumis = document.getElementById('titresoumis');
const descriptionsoumise =document.getElementById('descriptionsoumise');
const prixsoumis =document.getElementById('prixsoumis');
const liensoumis =document.getElementById('liensoumis');
const ratingsoumis =document.getElementById('ratingsoumis');
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



thumbwrappercss = document.getElementsByClassName('thumb-wrapper');
width.innerHTML = `Epaisseur = ${dimensionw.value}%`;
height.innerHTML=`Hauteur = ${dimension.value}pixels`;

//changer hauteur
function updatedimensions(){
    width.innerHTML = `Epaisseur ${dimensionw.value}%`;
    height.innerHTML=`Hauteur ${dimension.value} pixels`;


    
    for (let i = 0; i < thumbwrappercss.length; i++) {
      thumbwrappercss[i].style.width = `${dimensionw.value}%`;
      thumbwrappercss[i].style.height= `${dimension.value}px`;
      console.log("wako")
    }

   
    
}


 dimension.oninput= updatedimensions;
 dimensionw.oninput= updatedimensions;

//copier le texte
copier.onclick=()=> {
   


    /* Select the text field */
    codesnipet.select();
    codesnipet.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(codesnipet.value);
}


//avec button instagram

function simplificationdelisteAvecig(){

    produits.forEach(element => {
        
        const cage =document.getElementById(`thumb-wrapper${produits.indexOf(element)}`)
        cage.innerHTML= produits[produits.indexOf(element)].affichage;
        
    });
    

    codesnipet.innerHTML = produit1.affichage;
    thumbwrapper0.innerHTML= produit1.affichage;
   


}


// déclencheurs et fonction
Ajouter.onclick=()=>{
    
    const carteInstagramcree = new carteInstagram(titresoumis.value,liensoumis.value,descriptionsoumise.value,ratingsoumis.value,Math.floor(Math.random()*100000));
    produits.push(carteInstagramcree);
    simplificationdelisteAvecig();
   console.log( thumbwrappercss);
}









 
simplificationdelisteAvecig()