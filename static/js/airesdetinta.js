var menu = document.querySelector('#menu');
//seleccionamos botón del menu
var btn = document.querySelector('#btnMenu');

//abrir - cerrar menú
function abrirCerrarMenu(){  
    console.log(btn);
    console.log(menu);    

    if(menu.classList.length >= 2){
        menu.classList.remove("show");
    }else{
        menu.classList.add("show");
    }

}

//añadimos evento
btn.addEventListener("click", abrirCerrarMenu);



