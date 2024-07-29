document.addEventListener('DOMContentLoaded', function() {
    const buttonTab = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttonTab.length; i++) {
        buttonTab[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${tabTarget}"]`);
            hideContain();
            tab.classList.add('attractions__tab__content--is-active');
            hideStyleButton();
            btn.target.classList.add('attractions__tab__button--is-active');
        })
    }
})

function hideContain() {
    const tabContain = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabContain.length; i++) {
        tabContain[i].classList.remove('attractions__tab__content--is-active');

    }
}

function hideStyleButton() {
    const buttonTab = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttonTab.length; i++) {
        buttonTab[i].classList.remove('attractions__tab__button--is-active');
    }
}