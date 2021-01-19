const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  firstNameValidation();
  emailValidation();
  ageValidation();
  passwordValidation();
  tcuValidation();

  const errorsCount = document.getElementsByClassName('error').length;
  if (errorsCount === 0) window.location.href = "./success.html";
});
