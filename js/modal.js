(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", (e) => {
    // const expanded =
    //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    //   menuBtnRef.setAttribute("aria-expanded", !expanded);
    if (!e.target.closest(".menu-button").classList.contains("is-open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    menuBtnRef.classList.toggle("is-open");

    mobileMenuRef.classList.toggle("is-open");
  });

})();