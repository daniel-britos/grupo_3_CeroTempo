let qs = (selector) => document.querySelector(selector); //función para reemplazar todos los querySelector del archivo

window.addEventListener("load", () => {
  //carga toda la pantalla.

  //creación de todas las variables, para evitar colocar let, uso las comas ","
  let form = qs("form"),
    name = qs("#name"),
    price = qs("#price"),
    discount = qs("#discount"),
    description = qs("#description"),
    category = qs("#category-select"),
    image = qs("#image"),
    regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Formatos válidos.

  //******************No hace falta estas variables para que se muestren los errores************/
  // errorName = qs('#errorName'),
  // errorPrice = qs('#errorPrice'),
  // errorDiscount = qs('#errorDiscount'),
  // errorDescription = qs('#errorDescription'),
  // errorCategory = qs('#errorCategory');

  //validación por campo

  name.addEventListener("blur", () => {
    //uso event blur
    switch (
      true //uso switch para validar cada condicón del campo
    ) {
      case name.value.length == 0: //si existe este error
        name.classList.add("is-invalid"); // uso clase de bootstrap
        errorName.innerHTML = "Enter product's name"; //mostrar leyenda del error
        errors = true;
        break;
      case name.value.length <= 5:
        name.classList.add("is-invalid"); // uso clase de bootstrap
        errorName.innerHTML = "At least 5 characters"; //mostrar leyenda del error
        errors = true;
        break;
      default:
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
        errorName.innerHTML = "";
        errors = false;
        break;
    }
  });

  price.addEventListener("blur", () => {
    switch (true) {
      case (price.value = ""):
        price.classList.add("is-invalid");
        errorPrice.innerHTML = "Enter product's price";
        errors = true;
        break;
      case typeof price == Number:
        price.classList.add("is-invalid");
        errorPrice.innerHTML = "Only numbers";
        errors = true;
        break;
      case price.value < 1:
        price.classList.add("is-invalid");
        errorPrice.innerHTML = "Price must be more than 0";
        errors = true;
        break;
      default:
        price.classList.remove("is-invalid");
        price.classList.add("is-valid");
        errorPrice.innerHTML = "";
        errors = false;
        break;
    }
  });

  discount.addEventListener("blur", () => {
    switch (true) {
      case (discount.value = " "):
        discount.classList.add("is-invalid");
        errorDiscount.innerHTML = "Enter product's discount";
        errors = true;
        break;
      case discount.value >= 0:
        discount.classList.add("is-invalid");
        errorDiscount.innerHTML = "discount must be more than 0";
        errors = true;
        break;
      default:
        discount.classList.remove("is-invalid");
        discount.classList.add("is-valid");
        errorDiscount.innerHTML = "";
        errors = false;
        break;
    }
  });

  description.addEventListener("blur", () => {
    switch (true) {
      case (description.value = ""):
        description.classList.add("is-invalid");
        errorDescription.innerHTML = "Enter product's description";
        errors = true;
        break;
      case description.value >= 20:
        description.classList.add("is-invalid");
        errorDescription.innerHTML = "description must be more than 20";
        errors = true;
        break;
      default:
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
        errorDescription.innerHTML = "";
        errors = false;
        break;
    }
  });
  category.addEventListener("blur", () => {
    switch (true) {
      case category.value == "Seleccione una categoria":
        category.classList.add("is-invalid");
        errorCategory.innerHTML = "Debe seleccionar una categoria";
        break;

      default:
        category.classList.remove("is-invalid");
        errorCategory.innerHTML = "";
        break;
    }
  });

  image.addEventListener("change", () => {
    if (!regExExtensions.exec(image.value)) {
      image.value = "";
      image.classList.add("is-invalid");
      errorImage.innerHTML = "Only jpg, jpge, png, gif";
      errores = true;
    } else {
      image.classList.remove("is-invalid");
      image.classList.add("is-valid");
      errorImage.innerHTML = " ";
      errores = false;
    }
  });

  form.addEventListener("submit", (e) => {
    let errors = true;
    e.preventDefault();
    let elementsForm = form.elements;

    for (let i = 0; i < elementsForm.length - 1; i++) {
      if (
        elementsForm[i].value === "" ||
        elementsForm[i].classList.contains("is-invalid")
      ) {
        elementsForm[i].classList.add("is-invalid");
        errorForm.innerHTML = "Check out the required fields";
        errors = true;
      } else {
        errors = false;
      }
    }
    if (category.value.length === 0) {
      errors = true;
    }
    if (errors == false) {
      console.log("everything ok");
      errorForm.innerHTML = " ";
      alert("Carga realizada correctamente");
      form.submit();
    }
  });
});
