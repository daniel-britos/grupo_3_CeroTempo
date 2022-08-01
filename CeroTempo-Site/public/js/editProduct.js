let qs = (selector) => document.querySelector(selector)

window.addEventListener("load", () => {    //carga toda la pantalla.

  //creación de todas las variables, para evitar colocar let, uso las comas ","
  let editProduct = qs("#editProduct"),
    //***********capturo los inputs por id*****************/
    name = qs("#name"),
    price = qs("#price"),
    discount = qs("#discount"),
    description = qs("#description"),
    category = qs("#category"),
    image = qs("#image"),
    regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i, //Formatos válidos.
    errorName = qs("#errorName"),   //****************** capturo los spans por id ************/
    errorPrice = qs("#errorPrice"),
    errorDiscount = qs("#errorDiscount"),
    errorDescription = qs('#errorDescription'),
    errorCategory = qs('#errorCategory'),
    errorForm = qs('#errorForm'),
    errors;
  
    


  //validación por campo

  name.addEventListener("blur", () => {    //uso event blur
    switch (true) {   //uso switch para validar cada condición del campo
      case !name.value: //si existe este error
        name.classList.add("is-invalid"); // uso clase de bootstrap
        errorName.innerHTML = "Enter name"; //mostrar leyenda del error
        errors = true;
        break;
      case name.value.length <= 4:
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
  }); //end --- name.addEvent

  price.addEventListener("blur", () => {
    switch (true) {
      case !price.value:
        price.classList.add("is-invalid");
        errorPrice.innerHTML = "Enter price";
        errors = true;
        break;
      case price.value < 0:
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
  });   //end --- price.addEvent

  discount.addEventListener("blur", () => {
    switch (true) {
      case !discount.value :
        discount.classList.add("is-invalid");
        errorDiscount.innerHTML = "Enter discount";
        errors = true;
        break;
      case discount.value < 0:
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
  });   //end --- discount.addEvent

  description.addEventListener('blur', () => {
    switch (true) {
      case !description.value:
        description.classList.add('is-invalid');
        errorDescription.innerHTML = 'Enter description';
        errors = true;
        break;
      case description.value.length <= 20:
        description.classList.add('is-invalid');
        errorDescription.innerHTML = 'description must be more than 20 characters';
        errors = true;
        break;
      default:
        description.classList.remove('is-invalid');
        description.classList.add('is-valid');
        errorDescription.innerHTML = "";
        errors = false;
        break;
    }
  });   //end --- description.addEvent

  category.addEventListener('blur', () => {
    switch (true) {
      case category.value = '':   // == 'Categories'   --tampoco funciona, se generan dos clases
        category.classList.add('is-invalid');
        errorCategory.innerHTML = 'Select a cetegory';
        errors = true;
        break;
      default:
        category.classList.remove('is-invalid');
        category.classList.add('is-valid');
        errorCategory.innerHTML = "";
        errors = false;
        break;
    }
  });     //end --- category.addEvent


  image.addEventListener('change', () => {
    switch (true) {
      case !regExExtensions.exec(image.value):
        image.classList.add('is-invalid');
        errorImage.innerHTML = 'Only jpg, jpge, png, gif';
        errors = true;
        break;
      default:
        image.classList.remove('is-invalid');
        image.classList.add('is-valid');
        errorImage.innerHTML = "";
        errors = false;
        break;
    }
  });    //end --- image.addEvent

  editProduct.addEventListener('submit',(e) => {
    let errors = true;
    e.preventDefault()    //evita que se ejecute directamente el boton del form.
    
    let elementsForm = editProduct.elements;  //agarra a todos los elementos nativos del formulario
    // console.log(elementsForm)

    for (let i = 0; i < elementsForm.length-1; i++) {  // -1 porque no tomo el boton submit
        if(elementsForm[i].value === ""  || elementsForm[i].classList.contains('is-invalid')){
            elementsForm[i].classList.add('is-invalid');
            errorForm.innerHTML = "Complete the required inputs";
            errors = true;
        }else{
            errors= false;
        }
    }
    if(errors == false){
        errorForm.value.innerHTML = '';
        alert("Product added");
        editProduct.submit();
    }
  })
  
}); //end   --window.addEvent 