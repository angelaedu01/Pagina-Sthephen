window.onscroll = function(){
    if(document.documentElement.scrollTop > 1000){
        document.querySelector('.contenedor-btn')
        .classList.add('show');
        
    }else{
        
        document.querySelector('.contenedor-btn')
        .classList.remove('show');
        
    }
}

document.querySelector('.contenedor-btn')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});