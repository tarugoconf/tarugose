import './menu.js';
import './dialog.js';
import './video.js';

if (document.querySelector('.js-calendar')) {
    import('./calendar.js');
}

if (document.querySelector('tarugo-carousel')) {
    import('./carousel.js');
}

if (document.querySelector('.js-parallax')) {
    import('./parallax.js');
}

if (document.querySelector('.js-space')) {
    import('./space.js');
}
