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
console.log(thumbwrappercss);
width.innerHTML = `Epaisseur = ${dimensionw.value}%`;
height.innerHTML=`Hauteur = ${dimension.value}pixels`;

//code snipet 






//changer hauteur
function updatedimensions(){
    width.innerHTML = `Epaisseur ${dimensionw.value}%`;
    height.innerHTML=`Hauteur ${dimension.value} pixels`;


    
    for (let i = 0; i < thumbwrappercss.length; i++) {
      thumbwrappercss[i].style.width = `${dimensionw.value}%`;
      thumbwrappercss[i].style.height= `${dimension.value}px`;
      
    }

    let vraisnipet = `<div   style ="width: ${dimensionw.value}%;height:${dimension.value}px;border:1px solid rgb(26, 196, 41);
    box-shadow:3px 6px rgb(116, 112, 112);
    border-radius: 10px;
    margin: 0 auto;
      " ><iframe class="instagram-media instagram-media-rendered" style="height:95%;
    width:95%;
    position:relative;" id="instagram-embed-0" src="${produits.at(-1).lien}embed/captioned/?cr=1&v=14&wp=243&rd=http%3A%2F%2Flocalhost%3A5500&rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0"scrolling="no"</iframe></div>`
    
    
   console.log(produits.at(-1).lien);
    console.log(vraisnipet);
    codesnipet.innerHTML = vraisnipet;
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


//Simplification de liste

function simplificationdelisteAvecig(){

    produits.forEach(element => {
        
        const cage =document.getElementById(`thumb-wrapper${produits.indexOf(element)}`)
        cage.innerHTML= produits[produits.indexOf(element)].affichage;
        
    });
    

   
    thumbwrapper0.innerHTML= produit1.affichage;
    
   


}


// déclencheurs et fonction
Ajouter.onclick=()=>{
    
    const carteInstagramcree = new carteInstagram(titresoumis.value,liensoumis.value,descriptionsoumise.value,ratingsoumis.value,Math.floor(Math.random()*100000));
    produits.push(carteInstagramcree);
    simplificationdelisteAvecig();
   console.log( thumbwrappercss);
}









 
simplificationdelisteAvecig();




   








 //const lientelechargement ='https://scontent.cdninstagram.com/v/t51.2885-15/259785638_469308978102691_8803107401494647710_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=OOJKITLXbMYAX8qNQGF&edm=AJBgZrYBAAAA&ccb=7-4&ig_cache_key=Mjc2NDAwNzY0NDg5OTIwMjI3Mw%3D%3D.2-ccb7-4&oh=00_AT-leKJe77kETDMCGGSoIoyO4TylA7ikzhQDDZvgXzqS-w&oe=6253EE8D&_nc_sid=78c662&dl=1'
//const lien2telechargement ='https://scontent.cdninstagram.com/v/t51.2885-15/271522547_4685273374859322_1087967682802019371_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=51Ig5_zkEkoAX--z833&edm=AJBgZrYBAAAA&ccb=7-4&oh=00_AT-zrwswYflgZ00-ciwB_V3OsylMRBGxrKIz6kbpGfE-0g&oe=6253F8EA&_nc_sid=78c662&dl=1'
//const lien3telechargement='https://scontent.cdninstagram.com/v/t51.2885-15/277840206_1188860831857817_4800269513640600467_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=ZZzTkC9uZ5gAX-7-3My&edm=AJBgZrYBAAAA&ccb=7-4&ig_cache_key=MjgwOTM1NTk1ODI0MjgxMTM5NA%3D%3D.2-ccb7-4&oh=00_AT9y2898KTDLYr1eDC79YD4gB5mcEBYQ9YBYqdobj6ZAbw&oe=62530D66&_nc_sid=78c662&dl=1'
  //      const liennormal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/259785638_469308978102691_8803107401494647710_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=OOJKITLXbMYAX-NQSFz&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT-zxJBZ0F9xo8o8JhaMyn4uv1fXcLq2KPCf82E-tKQXJA&oe=6253EE8D&_nc_sid=1ffb93'
    //    const lien2normal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/271522547_4685273374859322_1087967682802019371_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=51Ig5_zkEkoAX8YST1Y&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8TgdQZmV3xwQQ8aUFmqoytWw-qCt3wETcJHz3yemxbVA&oe=6253F8EA&_nc_sid=1ffb93'
      //  const lien3normal='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/277840206_1188860831857817_4800269513640600467_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=ZZzTkC9uZ5gAX8WDRfY&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8gbURlmK_enzKk5Gb4MhP5k45Pm8Fg51hR186bRMK4FQ&oe=62530D66&_nc_sid=1ffb93'
//
  //      const reussite ='https://scontent.cdninstagram.com/v/t51.2885-15/277900579_458081222673754_3988041503705342731_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=Z-QQMwiTSFwAX8HHpSS&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT8OaQdpA5vjtN2qqS0QdIdCMHzLAgsPZS7FRAH0Y0xAnw&oe=6252FE29&_nc_sid=1ffb93&dl=1'

    //    const resulution =' On enleve -alt3-1    et on ajoute  &dl=1 '