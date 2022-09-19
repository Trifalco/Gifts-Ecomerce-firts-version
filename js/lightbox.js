const imagenes=document.querySelectorAll('.img-galeria');
const imagenLight =document.querySelector('.agregar-imagen');
const hamburger1=document.querySelector('.hamburguer');


const contenedorLigth=document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
contenedorLigth.addEventListener('click',(e) => {
    if(e.target !== imagenLight){
        contenedorLigth.classList.toggle('show');
        imagenLight.classList.toggle('showImage')
        hamburger1.style.opacity ='1';
    }

})


const aparecerImagen=(imagen)=>{
    imagenLight.src=imagen;
    contenedorLigth.classList.toggle('show');
    imagenLight.classList.toggle('showImage');
    hamburger1.style.opacity ='0';
}