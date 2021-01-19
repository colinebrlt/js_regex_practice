const passwordValidation = () => {
  const passwordElmt = document.getElementById('password');
  const passwordInput = passwordElmt.value;
  
  const checkPasswordLength = () => {
    const passwordLengthError = document.getElementById('password-error');
    if (passwordLengthError) return;
    if (passwordInput.length < 6) {
      passwordElmt.insertAdjacentHTML('afterend', `<p id='password-error' class='error' style='color: red;'>${errorMessages.password.length}</p>`);
    }
  };
  checkPasswordLength();
  
  const checkPasswordConfirmation = () => {
    const passwordConfirmationError = document.getElementById('password-confirmation-error');
    if(passwordConfirmationError) return;
    const passwordConfirmationElmt = document.getElementById('password-confirmation');
    const passwordConfirmationInput = passwordConfirmationElmt.value;
    if (passwordConfirmationInput !== passwordInput) {
    passwordConfirmationElmt.insertAdjacentHTML('afterend', `<p id='password-confirmation-error' class='error' style='color: red;'>${errorMessages.password.confirmation}</p>`);
    }
  };
  checkPasswordConfirmation();
};

const removePasswordErrors = () => {
  const passwordLengthError = document.getElementById('password-error');
  if (passwordLengthError) passwordLengthError.remove();
  const passwordConfirmationLengthError = document.getElementById('password-confirmation-error');
  if (passwordConfirmationLengthError) passwordConfirmationLengthError.remove();
};

const passwordElmt = document.getElementById('password');
const passwordConfirmationElmt = document.getElementById('password-confirmation');

passwordElmt.addEventListener('click', removePasswordErrors);
passwordConfirmationElmt.addEventListener('click', removePasswordErrors);
