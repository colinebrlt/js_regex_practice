const emailValidation = () => {
  const emailElmt = document.getElementById('email');
  const emailInput = emailElmt.value;
  
  const checkEmailFormat = () => {
    const emailFormatError = document.getElementById('email-error');
    if (emailFormatError) return;
    const emailFormatRgx = /[\w._%+-]+@[\w.-]+.[a-zA-Z]{2,3}/;
    if (!emailFormatRgx.test(emailInput)) {
      emailElmt.insertAdjacentHTML('afterend', `<p id='email-error' class='error' style='color: red;'>${errorMessages.email.format}</p>`);
    }
  };
  checkEmailFormat();
  
  const checkEmailConfirmation = () => {
    const emailConfirmationError = document.getElementById('email-confirmation-error');
    if(emailConfirmationError) return;
    const emailConfirmationElmt = document.getElementById('email-confirmation');
    const emailConfirmationInput = emailConfirmationElmt.value;
    if (emailConfirmationInput !== emailInput) {
    emailConfirmationElmt.insertAdjacentHTML('afterend', `<p id='email-confirmation-error' class='error' style='color: red;'>${errorMessages.email.confirmation}</p>`);
    }
  };
  checkEmailConfirmation();
  
};

const removeEmailErrors = () => {
  const emailFormatError = document.getElementById('email-error');
  if (emailFormatError) emailFormatError.remove();
  const emailConfirmationFormatError = document.getElementById('email-confirmation-error');
  if (emailConfirmationFormatError) emailConfirmationFormatError.remove();
};

const emailElmt = document.getElementById('email');
const emailConfirmationElmt = document.getElementById('email-confirmation');

emailElmt.addEventListener('click', removeEmailErrors);
emailConfirmationElmt.addEventListener('click', removeEmailErrors);
