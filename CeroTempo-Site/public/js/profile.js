console.log('profile.js success!');

/* const $ = (element) => document.getElementById(element); */

const regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

/* Validacion Name */
/* capturo por ID del imput name */
$('name').addEventListener('blur', function () {
  switch (true) {
    case !this.value.trim():
      $('errorName').innerHTML = 'Enter name F';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorName').innerHTML = 'Only letters F';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorName').innerHTML = 'At least two characters F';
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
      $('errorSurname').innerHTML = 'Enter surname F';
      this.classList.add('is-invalid');
      break;
    case !regExLetter.test(this.value.trim()):
      $('errorSurname').innerHTML = 'Only letters F';
      this.classList.add('is-invalid');
      break;
    case this.value.trim().length < 2:
      $('errorSurname').innerHTML = 'At least two characters F';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorSurname').innerHTML = null;
      break;
  }
});


$('birth').addEventListener('blur', async function () {
  switch (true) {
    case !this.value:
      $('errorBirth').innerHTML = 'Chose birth date';
      this.classList.add('is-invalid');
      break;
    default:
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      $('errorBirth').innerHTML = null;
      break;
  }
});

$('image').addEventListener("change", () => {
  if (!regExExtensions.exec($('image').value)) {
    $('image').value = "";
    $('image').classList.add("is-invalid");
    errorAvatar.innerHTML = "Only jpg, jpge, png, gif";
    errors = true;
  } else {
    $('image').classList.remove("is-invalid");
    $('image').classList.add("is-valid");
    errorAvatar.innerHTML = "";
    errors = false;
  }
});

$('form-register').addEventListener('submit', function (e) {
  e.preventDefault();
  let error = false;
  let elements = this.elements;

  /* console.log(elements); */

  for (let i = 0; i < elements.length - 3; i++) {
    if (!elements[i].value) {
      elements[i].classList.add('is-invalid');
      $('errorMessage').innerHTML = 'Required fields F';
      error = true;
    } else {
      error = false;
    }
  }

  for (let i = 0; i < elements.length - 3; i++) {
    if (elements[i].classList.contains('is-invalid')) {
      error = true;
    } else {
      error = false;
    }
  }

  if (!error) {
    $('errorMessage').innerHTML = null;
    e.target.submit();
  }
});
