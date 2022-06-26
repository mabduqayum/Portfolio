let menuBtn;

function onMenuClick(icon) {
    menuBtn ??= icon;
    let src = menuBtn.src.slice(menuBtn.src.indexOf('assets'),)
    if (isMenuClosed()) {
        src = src.replace('menu', 'close')
    } else {
        src = src.replace('close', 'menu')
    }
    menuBtn.setAttribute('src', src)
    updateLayout(menuBtn);
}

function updateLayout(menuBtn) {
    menuBtn.parentNode.parentElement.classList.toggle('menu-opened');
    const urls = menuBtn.parentNode.parentNode.lastElementChild.children;
    for (const url of urls) {
        url.addEventListener('click', onMenuClick);
    }
}

function isMenuClosed() {
    return menuBtn.src.includes('menu');
}

document.addEventListener('keydown', (event) => {
    if (event.code !== 'Escape') {
        return;
    } else if (!menuBtn || isMenuClosed()) {
        return;
    }
    onMenuClick(menuBtn);
});
