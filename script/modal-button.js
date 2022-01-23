let projects = document.querySelectorAll('.project');

for (const project of projects) {
    project.addEventListener('click', () => projectModal(project));
}


function projectModal(element) {
    let title = element.firstElementChild;
    let picture = element.lastElementChild;

    let myModal = document.createElement('div');
    myModal.id = 'my-modal';
    myModal.className = 'show-modal';
    myModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal-btn">&times;</span>
            <p style="font-weight: bold; font-size: 2rem">${title.textContent}</p>
            <img src="${picture.attributes['src']}" alt="${picture.attributes['alt']}">
        </div>`;
    document.body.appendChild(myModal)

    let closeBtn = document.querySelector(".close-modal-btn");

    function closeModal() {
        myModal.remove();
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === myModal) {
            closeModal();
        }
    }
}
