const button = document.querySelector('.navbar-menu-button');
const menu = document.querySelector('.navbar-menu');

//Open-close the menu
button.addEventListener('click', e => {
    menu.classList.toggle('is-open');
    e.stopPropagation();
});

//Close the menu on click in the body
document.body.addEventListener('click', e => menu.classList.remove('is-open'));