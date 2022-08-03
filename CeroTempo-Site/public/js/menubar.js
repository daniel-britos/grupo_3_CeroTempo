const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("menu-bar");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("menu-horizontal--show");
});
