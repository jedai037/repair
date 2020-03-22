const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    setTimeout(modalClose, 5000);
});

close.addEventListener('click', function() {
    modalClose();
});

let modalClose = () => {
    modal.classList.remove('modal_active');
}