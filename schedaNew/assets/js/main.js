window.onload = () => {
    let sectionBtns = document.querySelectorAll('.section-labs span');
    let baseEl = document.querySelector('.section-labs');
    let img = document.querySelector('#img');

    let images = [
        new Image().src = 'assets/img/scheda/character.png',
        new Image().src = 'assets/img/scheda/corvus.png',
        new Image().src = 'assets/img/scheda/meetings.png',
        new Image().src = 'assets/img/scheda/off.png',
    ]

    sectionBtns.forEach((btn, i) => {
        btn.addEventListener('click', function (e) {
            baseEl.classList.remove('selected-0', 'selected-1', 'selected-2', 'selected-3');
            baseEl.classList.add(`selected-${i}`);

            img.src = images[i]
        });
    });
};
