console.log('register.js success!');

/* const $ = (element) => document.getElementById(element); */

const regExLetter = /^[A-Z]+$/i;
const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

/* Hacer foco en el primer campo a completar */
let imputName = $('name');
imputName.focus();

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
      $('errorName').innerHTML = 'Enter name';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorName').innerHTML = 'Only letters';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorName').innerHTML = 'At least two characters';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorName').innerHTML = null;
      break;
  }
});

/* Validacion Surname */
/* capturo por ID del imput surname */
$('surname').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      $('errorSurname').innerHTML = 'Enter surname';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorSurname').innerHTML = 'Only letters';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorSurname').innerHTML = 'At least two characters';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorSurname').innerHTML = null;
      break;
  }
});

/* Validacion Email */
/* capturo por ID del imput email */
$('email').addEventListener('blur', async function () {
  switch (true) {
    case !this.value.trim():
      $('errorEmail').innerHTML = 'Enter email';
      this.classList.add('is-invalid');
      break;
    case !regExEmail.test(this.value.trim()):
      $('errorEmail').innerHTML = 'Only valid email';
      this.classList.add('is-invalid');
      break;
    case await verifyEmail(this.value.trim()):
      $('errorEmail').innerHTML = 'Email already register';
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
      $('errorPass1').innerHTML = 'Enter password';
      this.classList.add('is-invalid');
      break;
    case !regExPass.test(this.value.trim()):
      $('errorPass1').innerHTML =
        '8 characters or longer. It should contain at least one uppercase, lowercase, numbers and special character';
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
      $('errorPass2').innerHTML = 'Repeat password';
      this.classList.add('is-invalid');
      break;
    case !regExPass.test(this.value.trim()):
      $('errorPass2').innerHTML = 'The passwords do not match';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorPass2').innerHTML = null;
      break;
  }
});
