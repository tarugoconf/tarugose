// Calendar
const calendar = document.querySelector('.js-calendar');
const prev = document.querySelector('.js-prev');
const next = document.querySelector('.js-next');
const days = calendar.querySelectorAll(':scope > li');
const minIndex = 0;
const maxIndex = 2;
let index = 1;
days[index].classList.add('is-front');

prev.addEventListener('click', () => {
    if (index === minIndex) {
        return;
    }

    setCurrent(index - 1);
});

next.addEventListener('click', () => {
    if (index === maxIndex) {
        return;
    }

    setCurrent(index + 1);
});

days.forEach((day, i) => {
    day.addEventListener('click', (ev) => {
        setCurrent(i);
    });
});

function setCurrent(newIndex) {
    days[index].classList.remove('is-front');
    index = newIndex;
    days[index].classList.add('is-front');

    prev.disabled = false;
    next.disabled = false;

    if (index === 0) {
        days[2].classList.add('is-back');
        prev.disabled = true;
    } else {
        days[2].classList.remove('is-back');
    }

    if (index === 2) {
        days[0].classList.add('is-back');
        next.disabled = true;
    } else {
        days[0].classList.remove('is-back');
    }
}
