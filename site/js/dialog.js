import dialogPolyfill from '../vendors/dialog-polyfill/dialog-polyfill.esm.js';

document.querySelectorAll('dialog').forEach((dialog) => dialogPolyfill.registerDialog(dialog));
document.querySelectorAll('.js-openDialog').forEach((element) =>
    element.addEventListener('click', () => {
        const dialog = element.nextElementSibling;

        dialog.showModal();
    })
);

document.querySelectorAll('.js-closeDialog').forEach((element) =>
    element.addEventListener('click', () => {
        const dialog = element.closest('dialog');

        dialog.close();
    })
);
