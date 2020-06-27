import Generator from '../vendors/@oom/particles/generator.js';
import Canvas from '../vendors/@oom/particles/canvas.js';

const generator = new Generator()
    .color(['#ffffff', '#ffff66'])
    .opacity({ min: 0.2, max: 1})
    .size({ min: 0.1, max: 2 })
    .position({ 
        speed: 0.5,
        direction: 'bottomRight',
        sync: true
    })

const canvas = new Canvas(
    document.querySelector('.js-space'),
    generator,
    {
        number: 100
    }
);

canvas.start();
