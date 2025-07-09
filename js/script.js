//HTML Elements
const body = document.querySelector('body');
const galleryButtons = document.querySelectorAll('.gallery__item');
//Modal items
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modal-close');
//For each gallery item, add an event listener to open the modal, and disable body scroll
galleryButtons.forEach((item) => {
    item.addEventListener('click', () => {
        if (!modal.open) {
            modal.showModal();
            body.classList.add('scroll-disabled');
        }
    });
});
//Add an event listener to the modal close button to close the modal and enable body scroll
modalCloseButton.addEventListener('click', () => {
    if (modal.open) {
        modal.close();
        body.classList.remove('scroll-disabled');
    }
});
