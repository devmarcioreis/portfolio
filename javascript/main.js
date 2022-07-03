const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav-menu');


// Abrir o nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})


// Fechar o nav menu
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);


// Fechar o nav menu quando selecionado a opção
if(window.innerWidth < 1024) {
    document.querySelectorAll(".nav-menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav)
    })
}






