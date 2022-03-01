let abreMenu = document.querySelector('#abre_menu');
let fechaMenu  = document.querySelector('#fecha_menu');
let showMenu = document.querySelector('.nav-menu-mobile');

function fecha_menu(){
    fechaMenu.style.display = 'none';
    showMenu.style.display = 'none';
    abreMenu.style.display = 'block'
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