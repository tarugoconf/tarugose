import dialogPolyfill from '../vendors/dialog-polyfill/dialog-polyfill.esm.js';

const scrollBarWidth = getScrollbarWidth();

document.querySelectorAll('dialog').forEach((dialog) => {
    dialogPolyfill.registerDialog(dialog);

    dialog.addEventListener('close', releaseScroll);
});

document.querySelectorAll('.js-openDialog').forEach((element) =>
    element.addEventListener('click', (event) => {
        const dialog = element.dataset.target
            ? document.getElementById(element.dataset.target)
            : element.nextElementSibling;
        blockScroll();
        dialog.showModal();
        event.preventDefault();
    })
);

document.querySelectorAll('.js-closeDialog').forEach((element) =>
    element.addEventListener('click', () => {
        const dialog = element.closest('dialog');

        dialog.close();
    })
);

function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    const inner = document.createElement('div');
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}

function blockScroll() {
    const element = document.scrollingElement;

    if (element.scrollHeight > element.clientHeight) {
        element.style.overflow = 'hidden';
        element.style.paddingRight = `${scrollBarWidth}px`;
    }
}

function releaseScroll() {
    const element = document.scrollingElement;

    element.style.overflow = null;
    element.style.paddingRight = null;
}
