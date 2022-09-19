
const hamburger=document.querySelector('.hamburguer');
const menu=document.querySelector('.menu-navegacion');


/*me agraga o me quita el evento de css spread,el cual este evento me muestra el nav*/ 
hamburger.addEventListener('click',()=>{
     menu.classList.toggle("spread")
})

/* quiero que cuando toquen la ventaja , quiero que dispares una funcion de flecha*/
window.addEventListener('click',e=>{
    if(menu.classList.contains('spread')&& e.target != menu && e.target !=hamburger)
    {
        menu.classList.toggle('spread');
    }
})

