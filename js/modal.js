(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    setScrollbarWidth();
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }

  function setScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      scrollbarWidth + "px"
    );
  }
})();
