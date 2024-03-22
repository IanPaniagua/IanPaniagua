let aside;
let iconHamburguesa;
let iconCloseHamburguesa;
document.addEventListener("DOMContentLoaded", (event) =>{
    let buttonHamburguesa = document.querySelector('.layout__menu-toggle');
    aside = document.querySelector('.layout__aside');

    buttonHamburguesa.addEventListener('click', displayMenu);
   


function displayMenu(){
    let visible = document.querySelector('.layout__aside--visible');
    iconHamburguesa = document.querySelector('.fa-bars');
    iconCloseHamburguesa = document.querySelector('.fa-xmark');
    if(!visible){
        aside.classList.add('layout__aside--visible');
        iconCloseHamburguesa.style.opacity= '1';
        iconHamburguesa.style.opacity = '0';
 
    }else{
        aside.classList.remove('layout__aside--visible');
        iconCloseHamburguesa.style.opacity= '0';
        iconHamburguesa.style.opacity = '1';
    }


};

window.addEventListener("resize", () => {
    let size = parseInt(document.body.clientWidth);

    if (size <= 1060){
        aside.classList.remove('layout__aside--visible');
        iconCloseHamburguesa.style.opacity= '0';
        iconHamburguesa.style.opacity = '1';
    }
});

});