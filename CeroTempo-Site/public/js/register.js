console.log('register.js success!');

/* const $ = (element) => document.getElementById(element); */

const regExLetter = /^[A-Z]+$/i;
const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

/* Verificacion de email con la base de datos*/
const verifyEmail = async (email) => {
  console.log('>>>>>', email);
  try {
    let response = await fetch('/users/api/check-email', {
      method: 'POST',
      body: JSON.stringify({
        userEmail: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let result = await response.json();
    return result.data;
  } catch (error) {
    console.error;
  }
};

/* Validacion Name */
/* capturo por ID del imput name */
$('name').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      $('errorNombre').innerHTML = 'Debe ingresar su nombre';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorNombre').innerHTML = 'Solo caracteres alfabeticos';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorNombre').innerHTML = 'El nombre debe tener como minimo dos caracteres';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorNombre').innerHTML = null;
      break;
  }
});

/* Validacion Surname */
/* capturo por ID del imput surname */
$('surname').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      $('errorApellido').innerHTML = 'Debe ingresar su apellido';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorApellido').innerHTML = 'Solo caracteres alfabeticos';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorApellido').innerHTML = 'El apellido debe tener como minimo dos caracteres';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorApellido').innerHTML = null;
      break;
  }
});

/* Validacion Email */
/* capturo por ID del imput email */
$('email').addEventListener('blur', async function () {
  switch (true) {
    case !this.value.trim():
      $('errorEmail').innerHTML = 'Debes ingresar tu email';
      this.classList.add('is-invalid');
      break;
    case !regExEmail.test(this.value.trim()):
      $('errorEmail').innerHTML = 'El email tiene un formato invalido';
      this.classList.add('is-invalid');
      break;
    case await verifyEmail(this.value.trim()):
      $('errorEmail').innerHTML = 'El email ya se encuentra registrado';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorEmail').innerHTML = null;
      break;
  }
});

/* Validacion Pass*/
/* capturo por ID del imput pass1 */
$('pass1').addEventListener('blur', async function () {
  switch (true) {
    case !this.value.trim():
      $('errorPass1').innerHTML = 'Debes ingresar una contraseña';
      this.classList.add('is-invalid');
      break;
    case !regExPass.test(this.value.trim()):
      $('errorPass1').innerHTML =
        'La contraseña debe ser por lo menos de 8 caracteres. Debera contener al menos una mayuscula, una minuscula, un numero y un caracter especial';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorPass1').innerHTML = null;
      break;
  }
});

/* Validacion Pass2*/
/* capturo por ID del imput pass2 */
$('pass2').addEventListener('blur', async function () {
  switch (true) {
    case !this.value.trim():
      $('errorPass2').innerHTML = 'Debes ingresar una contraseña 2';
      this.classList.add('is-invalid');
      break;
    case !regExPass.test(this.value.trim()):
      $('errorPass2').innerHTML = 'Las contraseñas ingresadas no coinciden';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorPass2').innerHTML = null;
      break;
  }
});
