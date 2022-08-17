const qs = (selector) => document.querySelector(selector);
window.addEventListener("load", () => {
  let addCategory = qs("#addCategory");
  let name = qs("#name");
  let errorName = qs("#errorName");

  name.addEventListener('blur', () => {
    //uso event blur
    switch (
      true //uso switch para validar cada condición del campo
    ) {
      case !name.value: //si existe este error
        name.classList.add('is-invalid'); // uso clase de bootstrap
        errorName.innerHTML = "Enter category's name"; //mostrar leyenda del error
        break;
      default:
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        errorName.innerHTML = '';
        break;
    }
  }); //end --- name.addEvent

  addCategory.addEventListener("submit", (e) => {
    let errores = true;
    e.preventDefault();

    let elementosForm = form.elements;

    for (let i = 0; i < elementosForm.length - 1; i++) {
      
        if (elementosForm[i].value === "") {
        errorForm.innerHTML = "*Revisa los campos señalados";
        errores = true;
      } else {
        errores = false;
      }
    }
    if (errores == false) {
      errorForm.innerHTML = "";
      addCategory.submit();
    }
  });
}); //end   --window.addEvent