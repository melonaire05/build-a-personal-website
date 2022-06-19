const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

function open(){
    navMenu.classList.add('show-menu');
}

function close(){
    navMenu.classList.remove('show-menu');
}

navToggle.addEventListener('click', open);

navClose.addEventListener('click', close);
