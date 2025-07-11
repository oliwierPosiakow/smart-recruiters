//HTML Elements
const body = document.querySelector('body');
const galleryButtons = document.querySelectorAll('.gallery__item');
//Modal items
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modal-close');
const modalImage = document.querySelector('#modal-image');
const modalVideo = document.querySelector('#modal-video');
function closeModal() {
    modal.close();
    body.classList.remove('scroll-disabled');
    modalImage.src = '';
    modalImage.alt = 'Placeholder modal image';
    modalImage.classList.remove('hidden');
    modalVideo.classList.add('hidden');
}
//For each gallery item, add an event listener to open the modal and disable body scroll and set the modal image
galleryButtons.forEach((item) => {
    if (item.classList.contains('movie')) {
        item.innerHTML += `<button class="icon-button icon-button--primary gallery__play pl-12"><i class="fa-solid fa-play fa-xl icon-button__icon "></i></button>`;
    }
    //Listen for click to open the modal
    item.addEventListener('click', () => {
        const img = Array.from(item.children).find((child) => child instanceof HTMLImageElement);
        const videoUrl = item.getAttribute('data-video-url');
        if (img && !videoUrl) {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalVideo.classList.add('hidden');
        }
        if (videoUrl) {
            modalImage.classList.add('hidden');
            modalVideo.classList.remove('hidden');
            modalVideo.src = videoUrl;
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
        closeModal();
    }
});
