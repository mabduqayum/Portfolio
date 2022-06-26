"use strict"

const mainNav = document.querySelectorAll('.main-nav-item')
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


function customDateFormat(date) {
    let rez = ''
    let years = date.getFullYear() - 1970;
    let months = date.getMonth();
    if (years) {
        rez += years;
        rez += ' year'
        if (years > 1) rez += 's';
    }
    if (months) {
        if (years) {
            rez += ' and ';
        }
        rez += months;
        rez += ' month'
        if (months > 1) rez += 's';
    }
    return rez;
}


const experienceInitDate = new Date('2021/08/20');
const totalExperience = new Date(Date.now() - experienceInitDate)

const workTimeElement = document.getElementById('work-time')

workTimeElement.innerText = customDateFormat(totalExperience);
