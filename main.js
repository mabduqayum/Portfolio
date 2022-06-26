"use strict"

let mainNav = document.querySelectorAll('.main-nav-item')
let activeNavIndex = 0;

for (let i = 0; i < mainNav.length; i++) {
    const mainNavElement = mainNav[i];
    mainNavElement.addEventListener('click', () => {
        if (!mainNavElement.hasAttribute('class=active')) {
            mainNav[activeNavIndex].classList.remove('active')
            mainNavElement.classList.add('active');
            activeNavIndex = i;
        }
    })
}


let experienceInitDate = new Date('2021/8/20');

let workTimeElement = document.getElementById('work-time')

workTimeElement.innerText = new Date(Date.now() - experienceInitDate).toLocaleDateString('ru');
