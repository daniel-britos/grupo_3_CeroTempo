const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("menu-bar");

// const toggleProducts = document.getElementById("toggle-products");
// const menuProducts = document.getElementById("menu-products");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("menu-horizontal--show");
});

// toggleProducts.addEventListener("click", () => {
//   menuProducts.classList.toggle("menu-vertical--show");
// });
