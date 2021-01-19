const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  emailValidation();
  ageValidation();
  tcuValidation();

  const errorsCount = document.getElementsByClassName('error').length;
  if (errorsCount === 0) window.location.href = "./success.html";
});
