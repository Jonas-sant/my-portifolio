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