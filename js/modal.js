(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.offsetWidth + "px"
  );

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }
})();
