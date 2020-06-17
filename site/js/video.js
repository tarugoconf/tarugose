//Vimeo player
document.querySelectorAll('.video-ratio').forEach(
    (el) =>
        new Vimeo.Player('video', {
            id: el.dataset.id,
            title: false,
            byline: false,
            portrait: false,
            dnt: true,
            color: 'EBFF00',
        })
);
