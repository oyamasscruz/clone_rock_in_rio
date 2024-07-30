AOS.init();

const eventDate = new Date("Sep 13, 2024 20:00:00");
const stampEventDate = eventDate.getTime();

const countingTimeRemaining = setInterval(function() {
    
    const now = new Date();
    const stampNow = now.getTime();
    const timeWeAreLookingFor = stampEventDate - stampNow;

    const dayInMilliseconds = (1000 * 60 * 60 * 24);
    const hoursInMilliseconds = (1000 * 60 * 60);
    const minutesInMilliseconds = (1000 * 60);
    const secondsInMilliseconds = (1000);

    const dayWeAreLookingFor = Math.floor(timeWeAreLookingFor / dayInMilliseconds)
    const hourWeAreLookingFor = Math.floor(((timeWeAreLookingFor % dayInMilliseconds) / hoursInMilliseconds));
    const minutesWeAreLookingFor = Math.floor(((timeWeAreLookingFor % hoursInMilliseconds) / minutesInMilliseconds));
    const secondsWeAreLookingFor = Math.floor(((timeWeAreLookingFor % minutesInMilliseconds) / secondsInMilliseconds));

    document.getElementById('timer').innerHTML = ` ${dayWeAreLookingFor}d ${hourWeAreLookingFor}h ${minutesWeAreLookingFor}m ${secondsWeAreLookingFor}s`;

    if (timeWeAreLookingFor < 0) {
        clearInterval(countingTimeRemaining);
        document.getElementById('timer').innerHTML = 'Evento Expirado';
    }

},1000)

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

