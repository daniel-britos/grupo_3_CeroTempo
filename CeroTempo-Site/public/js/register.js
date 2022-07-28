console.log('register.js success!');

/* const $ = (element) => document.getElementById(element); */

const regExLetter = /^[A-Z]+$/i;
const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

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

/* const verifyEmail = async (email) => {
  try {
    let response = await fetch('/users/api/check-email', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
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
}); */
