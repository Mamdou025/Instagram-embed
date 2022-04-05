//fonction experimentale avec le DOM ne sera pas utilisée
function CreationElementsSurpage(){

    //fonctions associés aux produits pour la page 
    
    //element parent
    const listeproduits = document.getElementById('listeproduits') ;
    //element enfant principal 
    let produitelement = document.createElement('li');
             //creation des elements 
             let div1= document.createElement('div');
                    let div2= document.createElement('div');
                       let titreh5 = document.createElement('h5');
                       let descriptionp = document.createElement('p');
                       let div3=document.createElement('div');
                           let prixh6=document.createElement('h6');
                           let etoilelist = document.createElement('ul');
                    let img1=document.createElement('img')   
                       let btnwhat = document.createElement('div')  ;
    
    
    
                  for (let i=0; i<produit1.rating;i++){
                      let etoile = document.createElement('li');
                      etoile.classList.add('list-inline-item','m-0')
                      let icone = document.createElement('i');
                      etoilelist.appendChild(etoile)
                      icone.classList.add('fa','fa-star','text-success')
                      etoile.appendChild(icone)
    
    
                  }
     
    //donner la classe 
    produitelement.classList.add('list-group-item');
             //autres classes 
             div1.classList.add('media', 'align-items-lg-center', 'flex-column', 'flex-lg-row', 'p-3');
                div2.classList.add('media-body', 'order-2', 'order-lg-1');
                  //elements a modifier
                          //Titre
                          titreh5.classList.add('mt-0','font-weight-bold','mb-2');
                          titreh5.innerHTML = produits.at(-1).titre;
                          //description
                          descriptionp.classList.add('font-italic','text-muted','mb-0','small')
                          descriptionp.innerHTML = produits.at(-1).description;
                          //Prix et badges 
                          div3.classList.add('d-flex','align-items-center','justify-content-between','mt-1')
                               //Prix  et etoiles
                               prixh6.classList.add('font-weight-bold','my-2')
                               prixh6.innerHTML=produits.at(-1).prix
                               //etoile liste
                               etoilelist.classList.add('list-inline','small')
                                  //etoile
                                 //// etoile.classList.add('list-inline-item','m-0')
                                   ////  icone.classList.add('fa','fa-star','text-success')
    
    
                img1.classList.add('ml-lg-5','order-1','order-lg-2')
                img1.src = produits.at(-1).image
    
    
    // le faire rentrer dans la liste 
    listeproduits.appendChild(produitelement);
    produitelement.appendChild(div1);
    div1.appendChild(div2);
        div2.appendChild(titreh5);
        div2.appendChild(descriptionp)
        div2.appendChild(div3)
          div3.appendChild(prixh6)
          div3.appendChild(etoilelist)
        div2.appendChild(btnwhat)  
             // etoilelist.appendChild(etoile)
              //  etoile.appendChild(icone)
    div1.appendChild(img1);       
    
    btnwhat.innerHTML=' </i> <button class="buttonwhatsapp"><i class="bi bi-whatsapp"> </i>Contacter </button>  '
    
    
    
    
    
     }
    






const stringig = 'https://www.instagram.com/p/Cb81lwCsJ4C/'
const stringigcdn='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/277840206_1188860831857817_4800269513640600467_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=ZZzTkC9uZ5gAX92chwA&edm=ALY_pVYBAAAA&ccb=7-4&oh=00_AT-gUeu8ZysH6ycRJYdsABwIhkQUkeLp3Z9VlpCyBOyPHA&oe=62530D66&_nc_sid=1ffb93'
