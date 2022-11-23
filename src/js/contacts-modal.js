(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal__buy-open]'),
    closeModalBtn: document.querySelector('[data-modal__buy-close]'),
    modal: document.querySelector('[data-modal__buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal__card-open]'),
    closeModalBtn: document.querySelector('[data-modal__card-close]'),
    modal: document.querySelector('[data-modal__card]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
