// todo: use strict

let mainNav = document.querySelectorAll('.main-nav-item > a')
let activeNav = 0;

for (const mainNavElement of mainNav) {
    mainNavElement.addEventListener('click', () => {
        if (!mainNavElement.hasAttribute('active')) {
            changeActiveNav(activeNav, mainNavElement);
            console.log(mainNavElement)
        }
    })
}

function changeActiveNav(id, elem) {
    mainNav[activeNav].toggleAttribute('active');
    elem.toggleAttribute('active');
}
