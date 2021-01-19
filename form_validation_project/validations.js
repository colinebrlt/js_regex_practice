const submitButton = document.getElementById('submit');

const checkEmptyInput = (element, index) => {
  const emptyError = document.getElementById(`empty-error-${index}`);
  if (emptyError) return;
  const input = element.value;
  if (input.length === 0) {
    element.insertAdjacentHTML('afterend', `<p id='empty-error-${index}' class='error' style='color: red;'>${errorMessages.empty}</p>`);
  }
};

const emptyInputValidation = () => {
  const allInputs = document.getElementsByTagName('input');
  for (let i = 0; i < allInputs.length - 2; i++) {
    checkEmptyInput(allInputs[i], i);
  }
};

const removeEmptyError = (index) => {
  const emptyError = document.getElementById(`empty-error-${index}`);
  if (emptyError) emptyError.remove();
};

const removeEmptyErrorForAll = () => {
  const allInputs = document.getElementsByTagName('input');
  for (let i = 0; i < allInputs.length - 2; i++) {
    allInputs[i].addEventListener('click', () => {
      removeEmptyError(i);
    });
  }
};

removeEmptyErrorForAll();


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  firstNameValidation();
  emailValidation();
  ageValidation();
  passwordValidation();
  tcuValidation();
  emptyInputValidation();

  const errorsCount = document.getElementsByClassName('error').length;
  if (errorsCount === 0) window.location.href = "./success.html";
});
