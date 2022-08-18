console.log('register.js success!');

window.addEventListener('load', () => {
  /* const $ = (element) => document.getElementById(element); */

  const regExLetter = /^[A-Z]+$/i;

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
        $('errorName').innerHTML = 'Enter name front';
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
        $('errorSurname').innerHTML = 'Enter surname front';
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
});
