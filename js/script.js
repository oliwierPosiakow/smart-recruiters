//HTML Elements
const body = document.querySelector('body');
const galleryButtons = document.querySelectorAll('.gallery__item');
//Modal items
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modal-close');
const modalImage = document.querySelector('#modal-image');
//For each gallery item, add an event listener to open the modal and disable body scroll and set the modal image
galleryButtons.forEach((item) => {
    if (item.classList.contains('movie')) {
        console.log('FILM');
    }
    item.addEventListener('click', () => {
        console.log('click');
        const img = Array.from(item.children).find((child) => child instanceof HTMLImageElement);
        if (img) {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
        }
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
        modalImage.src = '';
        modalImage.alt = 'Placeholder modal image';
    }
});
