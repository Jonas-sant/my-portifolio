//Jquery
$(document).ready(function(){

    trabalhosJson.forEach(trabalho=>{
        let description = trabalho.description;

        $("#projects").append(`
        <div class="card-project">
            <div class="img-project-card" id="img-project">
                <img src="${trabalho.img}" alt="modelo-project">
            </div>
            <div class="content-project-card">
                <div>
                    <h3>${trabalho.name}</h3>
                    <ion-icon name="desktop"></ion-icon>
                </div>
                <div>
                    <p>${description}</p>
                </div>
            </div>
            <a class="btn-project-card" id="btn-project-card" href="#">Ver Projeto<ion-icon name="search"></ion-icon></a>    
        </div>
        `)
    })
    
});

//Menu Mobile

let abreMenu = document.querySelector('#abre_menu');
let fechaMenu  = document.querySelector('#fecha_menu');
let showMenu = document.querySelector('.nav-menu-mobile');

let closeLinks = document.querySelectorAll('.close');
console.log(closeLinks);

for(let i = 0; i < closeLinks.length; i = i + 1 )
    closeLinks[i].addEventListener('click',function(){
        fecha_menu();
    });

function fecha_menu(){
    fechaMenu.style.display = 'none';
    showMenu.style.display = 'none';
    showMenu.style.transition = 'all 0.6s'
    abreMenu.style.display = 'block';
}

function abre_menu(){

    abreMenu.style.dispay = 'none';
    fechaMenu.style.display = 'block';
    showMenu.style.display = 'block';
    fechaMenu.style.color = '#202020';


}

abreMenu.addEventListener('click',function(){
    abre_menu();  

});

fechaMenu.addEventListener('click',()=>{
    fecha_menu();
});

