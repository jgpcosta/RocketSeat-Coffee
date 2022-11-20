const MenuHamburguer = document.querySelector('.menu-hamburguer');
const Header = document.querySelector('.header-mobile')

MenuHamburguer.addEventListener('click', MenuToggle)

function MenuToggle(){
    MenuHamburguer.classList.toggle('active');
    Header.classList.toggle('active');
    if(MenuHamburguer.classList[1] === 'active'){
        MenuHamburguer.setAttribute('src' ,'imgs/menu-buguer-close.svg')
    }else{
        MenuHamburguer.setAttribute('src', 'imgs/menu-buguer-open.svg')
    }
}