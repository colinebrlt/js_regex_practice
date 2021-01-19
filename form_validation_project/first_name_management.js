const firstNameValidation = () => {
  const firstNameElmt = document.getElementById('first_name');
  const firstNameInput = firstNameElmt.value;
  if (firstNameInput.length < 3) {
    firstNameElmt.insertAdjacentHTML('afterend', `<p id='first-name-length-error' class='error' style='color: red;'>${errorMessages.firstName.length}</p>`);
  }
};

const removeFirstNameErrors = () => {
  const firstNameLengthError = document.getElementById('first-name-length-error');
  if (firstNameLengthError) firstNameLengthError.remove();
};

const firstNameElmt = document.getElementById('first_name');
firstNameElmt.addEventListener('click', removeFirstNameErrors);
