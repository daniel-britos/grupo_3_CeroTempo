console.log('login.js success!');

const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

/* Validacion email*/
$('email').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      this.classList.add('is-invalid');
      $('errorEmail').innerHTML = 'Debes ingresar tu email';
      break;
    case !regExEmail.test(this.value.trim()):
      this.classList.add('is-invalid');
      $('errorEmail').innerHTML = 'El email tiene un formato incorrecto';
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorEmail').innerHTML = null;
      break;
  }
});

/* Validacion pass*/
$('password').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      this.classList.add('is-invalid');
      $('errorPassword').innerHTML = 'Debes ingresar tu contraseña';
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorPassword').innerHTML = null;
      break;
  }
});
