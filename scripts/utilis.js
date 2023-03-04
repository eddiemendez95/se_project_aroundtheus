// export function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeByEscape);
//   document.addEventListener("mousedown", handleOverlay);
// }

// export function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeByEscape);
//   document.removeEventListener("mousedown", handleOverlay);
// }

// function closeByEscape(e) {
//   if (e.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     closePopup(openedPopup);
//   }
// }

function handleOverlay(e) {
  if (e.target.classList.contains("modal_opened")) {
    closePopup(e.target);
  }
}
