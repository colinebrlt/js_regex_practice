const ageValidation = () => {
  const ageElmt = document.getElementById('age');
  const ageInput = ageElmt.value;

  const ageFormatError = document.getElementById('age-format-error');
  if (ageFormatError) return;
  if (/\D/.test(ageInput)) {
    ageElmt.insertAdjacentHTML('afterend', `<p id='age-format-error' class='error' style='color: red;'>${errorMessages.age.format}</p>`);
    return;
  }
  const minimumAgeError = document.getElementById('minimum-age-error');
  if(minimumAgeError) return;
  if (ageInput < 18) {
    ageElmt.insertAdjacentHTML('afterend', `<p id='minimum-age-error' class='error' style='color: red;'>${errorMessages.age.minimum}</p>`);
  }
};

const removeAgeErrors = () => {
  const ageFormatError = document.getElementById('age-format-error');
  if (ageFormatError) ageFormatError.remove();
  const minimumAgeError = document.getElementById('minimum-age-error');
  if (minimumAgeError) minimumAgeError.remove();
};

const ageElmt = document.getElementById('age');

ageElmt.addEventListener('click', removeAgeErrors);
