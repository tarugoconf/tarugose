import Player from '../vendors/@vimeo/player/player.es.js';

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
const color = primaryColor.replace('#', '').trim();

//Vimeo player
document.querySelectorAll('.video-ratio').forEach(
    (el) =>
        new Player('video', {
            id: el.dataset.id,
            title: false,
            byline: false,
            portrait: false,
            dnt: true,
            color,
        })
);
