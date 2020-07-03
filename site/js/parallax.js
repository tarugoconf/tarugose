import Scroll from '../vendors/@oom/scroll-styles/scroll.js';

const scroll = new Scroll();

document.querySelectorAll('.js-parallax').forEach(element => {
    scroll.observe(element)
})
