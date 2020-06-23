import '../vendors/basicscroll/dist/basicScroll.min.js';

document.querySelectorAll('.js-parallax').forEach(element => {
    const prop = element.dataset.prop;
    const from = element.dataset.from;
    const to = element.dataset.to;
    
    basicScroll.create({
        elem: element,
        from: 'top-bottom',
        to: 'top-top',
        props: {
            [prop]: { from, to }
        }
    }).start()
})
