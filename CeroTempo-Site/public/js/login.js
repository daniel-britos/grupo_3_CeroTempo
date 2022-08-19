console.log('login.js success!');

const regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

/* let imputEmail = $('email');
imputEmail.focus(); */

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

$('form-login').addEventListener('submit', function (e) {
  e.preventDefault();
  let error = false;
  let elements = this.elements;

  /* console.log(elements); */

  for (let i = 0; i < elements.length - 2; i++) {
    if (!elements[i].value) {
      elements[i].classList.add('is-invalid');
      $('errorLogin').innerHTML = 'Required fields';
      error = true;
    } else {
      error = false;
    }
  }

  for (let i = 0; i < elements.length - 2; i++) {
    if (elements[i].classList.contains('is-invalid')) {
      error = true;
    } else {
      error = false;
    }
  }

  if (!error) {
    $('errorLogin').innerHTML = null;
    e.target.submit();
  }
});
