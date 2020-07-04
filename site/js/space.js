import Generator from '../vendors/@oom/particles/generator.js';
import Canvas from '../vendors/@oom/particles/canvas.js';

const generator = new Generator()
    .color(['#ffffff', '#42e6ff'])
    .opacity({ min: 0.3, max: 0.8})
    .size([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3])
    .position({ 
        speed: 0.5,
        direction: 'bottomRight',
        sync: true
    })
    .shadowBlur(8);

const canvas = new Canvas(
    document.querySelector('.js-space'),
    generator,
    {
        number: 200,
        resize: 'ResizeObserver' in window ? 'repaint' : ''
    }
);

canvas.start();
