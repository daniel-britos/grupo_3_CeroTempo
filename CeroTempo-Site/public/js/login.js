console.log('login.js success!');

const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

let imputEmail = $('email');
imputEmail.focus();

/* Validacion email*/
$('email').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      this.classList.add('is-invalid');
      $('errorEmail').innerHTML = 'Enter email';
      break;
    case !regExEmail.test(this.value.trim()):
      this.classList.add('is-invalid');
      $('errorEmail').innerHTML = 'Enter valid email';
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
      $('errorPassword').innerHTML = 'Enter password';
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorPassword').innerHTML = null;
      break;
  }
});
