//ANIMATION MENU
console.log("document lu");
document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu');
    menu.addEventListener('click', function() {
        menu.classList.toggle('active-menu');
    });
});

//ANIMATION SCROLL DOWN & UP

document.addEventListener('DOMContentLoaded', function() {
    let scrollButton = document.querySelector('.down');
    let message = document.querySelector('.message');

    // Je définis une fonction pour gérer le clic sur le bouton
    function handleClick() {
        // Si le bouton est en mode "down"
        if (scrollButton.classList.contains('down')) {
            message.classList.remove('overflow');
            scrollButton.classList.remove('down');
            scrollButton.classList.add('up');
            console.log("Mode up activé");
        } else { // Sinon, si le bouton est en mode "up"
            message.classList.add('overflow');
            scrollButton.classList.remove('up');
            scrollButton.classList.add('down');
            console.log("Mode down activé");
        }
    }

    // J'ajoute un écouteur d'événements de clic au bouton
    scrollButton.addEventListener('click', handleClick);
});


