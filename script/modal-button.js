"use strict"

function closeProjectPreview(self) {
    self.parentNode.removeChild(self);
}

function openProjectPreview(self, href) {
    const popUp = document.createElement('div');
    popUp.className = 'project-preview';
    popUp.addEventListener('click', () => closeProjectPreview(popUp));
    popUp.innerHTML = `
        <a href="${href}" target="_blank">
            <div class="project case-converter">
                <img src="${self.firstElementChild.src}"
                    alt="${self.firstElementChild.alt}">
                <p>${self.lastElementChild.innerText}</p>
            </div>
        </a>
    `;
    document.body.appendChild(popUp);
}
