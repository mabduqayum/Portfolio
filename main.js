// todo: use strict

let mainNav = document.querySelectorAll('.main-nav-item > a')
let activeNav = 0;

for (let i = 0; i < mainNav.length; i++) {
    const mainNavElement = mainNav[i];
    mainNavElement.addEventListener('click', () => {
        if (!mainNavElement.hasAttribute('class=active')) {
            mainNav[activeNav].classList.remove('active')
            mainNavElement.classList.add('active');
            activeNav = i;
        }
    })
}
