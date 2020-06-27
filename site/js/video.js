import Player from '../vendors/@vimeo/player/player.es.js';

//Vimeo player
document.querySelectorAll('.video-ratio').forEach(
    (el) =>
        new Player('video', {
            id: el.dataset.id,
            title: false,
            byline: false,
            portrait: false,
            dnt: true,
            color: 'ff5c9d',
        })
);
