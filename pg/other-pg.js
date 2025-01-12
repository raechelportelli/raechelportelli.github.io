const headerEL = document.querySelector('.headerEl')

window.addEventListener('scroll, ()=>{
    if (window.scrollY >0.5){
        headerEL.classList.add('header-scrolled');
    } else if (window.scrollY<= 50) {
        headerEL.classList.remove('header=scrolled');
    }
});