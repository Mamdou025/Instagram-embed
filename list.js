class carteProduit {
    constructor(titre,prix,image,description,rating,numvedeur){
        this.titre = titre;
        this.prix =prix;
        this.image =image;
        this.description=description;
        this.rating=rating;
        this.numvedeur=numvedeur;

    }
}

// creer un produit a partir de la class
const produit1 = new carteProduit('voicile titre ',50 ,'https://i.imgur.com/fqSUuRe.jpg','voici la description du premier produit que l',3,776394551)
//elements de la page
const titresoumis = document.getElementById('titresoumis');
const descriptionsoumise =document.getElementById('descriptionsoumise');
const prixsoumis =document.getElementById('prixsoumis');
const liensoumis =document.getElementById('liensoumis');
const ratingsoumis =document.getElementById('ratingsoumis');
const Ajouter = document.getElementById('btnajouter');
const Contacter = document.getElementById('bt')
//liste de produits
var produits = [{titre:'Titre article ',prix:150 ,image:'https://www.instagram.com/p/Cb3S9yBM9v2/',description:'voici la description du premier produit que vous allez mettre   xxoooxxxoooxxxooooxoxoxoxoxoxoxo------aaaaaaaaaaaaaaaa-----------------bbbbbbbbbbbbbbbbb______cdr_____2222222222222222222222222222222------333333333666666-----------888888  ____________________________________ttttttttttttttttttttttttttttttttttttttttttttt----yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy---iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii-ijdfivnuvnrevu vneurvneru nevuenvu',rating:4,numvedeur:776394551}]
//fonction beaucoup plus simplidiée de la precedente

function simplificationdeliste(){

    let etoilelist = document.createElement('ul');
    etoilelist.classList.add('list-inline','small');
    for (let i=0; i<produits.at(-1).rating;i++){
                  let etoile = document.createElement('li');
                  etoile.classList.add('list-inline-item','m-0')
                  let icone = document.createElement('i');
                  etoilelist.appendChild(etoile)
                  icone.classList.add('fa','fa-star','text-success')
                  etoile.appendChild(icone)
              }


     for (let i=produits.at(-1).rating; i<5;i++){
        let etoile = document.createElement('li');
        etoile.classList.add('list-inline-item','m-0')
        let icone = document.createElement('i');
        etoilelist.appendChild(etoile)
        icone.classList.add("fa","fa-star-o","text-gray")
        etoile.appendChild(icone)
    }



    //button whatsapp
     let buttonwhatsapp = `<div><button class="buttonwhatsapp" id="buttonw${produits.indexOf(produits.at(-1))}"><i class="bi bi-whatsapp"></i>   Contacter </button></div>`
     let blocinstagram = `<div class ="bloco"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CB736rmnwIr/embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"</iframe></div>`


     const listeproduits = document.getElementById('listeproduits') ;
     let produitelement = document.createElement('li');
     produitelement.classList.add('list-group-item');
     produitelement.innerHTML=`<div class="media align-items-lg-center flex-column flex-lg-row p-3">
     <div class="media-body order-2 order-lg-1">
     <h5 class="mt-0 font-weight-bold mb-2">${produits.at(-1).titre}</h5>
    <p class="font-italic text-muted mb-0 small">${produits.at(-1).description}</p>
     <div class="d-flex align-items-center justify-content-between mt-1">
     <h6 class="font-weight-bold my-2">${produits.at(-1).prix} $</h6>
     <ul class="list-inline small">`+etoilelist.innerHTML+`</ul></div><div >`+buttonwhatsapp+`</div></div><img src="${produits.at(-1).image}" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"></div> `
     listeproduits.appendChild(produitelement);





     document.getElementById(`buttonw${produits.indexOf(produits.at(-1))}`).addEventListener("click",(event)=>{

        let ind = Number(event.target.id.replace('buttonw',''));
        console.log(ind)
        console.log(produits[ind].numvedeur)

     })
}

//avec button instagram
 function simplificationdelisteAvecig(){
   alert("inside 1")

    let etoilelist = document.createElement('ul');
    etoilelist.classList.add('list-inline','small');
    for (let i=0; i<produits.at(-1).rating;i++){
                  let etoile = document.createElement('li');
                  etoile.classList.add('list-inline-item','m-0')
                  let icone = document.createElement('i');
                  etoilelist.appendChild(etoile)
                  icone.classList.add('fa','fa-star','text-success')
                  etoile.appendChild(icone)
              }


     for (let i=produits.at(-1).rating; i<5;i++){
        let etoile = document.createElement('li');
        etoile.classList.add('list-inline-item','m-0')
        let icone = document.createElement('i');
        etoilelist.appendChild(etoile)
        icone.classList.add("fa","fa-star-o","text-gray")
        etoile.appendChild(icone)
    }


alert("inside 2")
    //button whatsapp
     let buttonwhatsapp = `<div><button class="buttonwhatsapp" id="buttonw${produits.indexOf(produits.at(-1))}"><i class="bi bi-whatsapp"></i>   Contacter </button></div>`
     //lien Instagram  : Utiliser le lien fourni a la source
alert("inside 3")
     let blocinstagram = `<div class ="bloco"><iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${produits.at(-1).image}embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0"  data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"</iframe></div>`
alert("inside 4")

     const listeproduits = document.getElementById('listeproduits') ;
     let produitelement = document.createElement('li');
     produitelement.classList.add('list-group-item');
     produitelement.innerHTML=`<div class="media align-items-lg-center flex-column flex-lg-row p-3">
     <div class="media-body order-2 order-lg-1">
     <h5 class="mt-0 font-weight-bold mb-2">${produits.at(-1).titre}</h5>
    <p class="font-italic text-muted mb-0 small">${produits.at(-1).description}</p>
     <div class="d-flex align-items-center justify-content-between mt-1">
     <h6 class="font-weight-bold my-2">${produits.at(-1).prix} $</h6>
     <ul class="list-inline small">`+etoilelist.innerHTML+`</ul></div><div >`+buttonwhatsapp+`</div></div>`+blocinstagram+`</div> `
     listeproduits.appendChild(produitelement);
     console.log(liensoumis.value)

alert("inside 5")



     document.getElementById(`buttonw${produits.indexOf(produits.at(-1))}`).addEventListener("click",(event)=>{

        let ind = Number(event.target.id.replace('buttonw',''));
        console.log(ind)
        console.log(produits[ind].numvedeur)



     })
alert("inside 6")
}




// déclencheurs et fonction
Ajouter.onclick=()=>{

    const produitcree = new carteProduit(titresoumis.value,prixsoumis.value,liensoumis.value,descriptionsoumise.value,ratingsoumis.value,Math.floor(Math.random()*100000));
    produits.push(produitcree);

    simplificationdelisteAvecig();
    alert("inside 1")


}





//simplificationdeliste();







simplificationdelisteAvecig();
