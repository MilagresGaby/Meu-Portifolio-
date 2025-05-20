let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/* função para aparecer o menu em mobile */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};