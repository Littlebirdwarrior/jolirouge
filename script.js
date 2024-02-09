//ANIMATION MANU

console.log("coucou");
document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu');
    menu.addEventListener('click', function() {
        menu.classList.toggle('active-menu');
    });
});