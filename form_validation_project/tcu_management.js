const tcuValidation = () => {
  const tcuButtonElmt = document.getElementById('checkbox');
  if (tcuButtonElmt.checked === false) {
    tcuButtonElmt.insertAdjacentHTML('afterend', `<p id='tcu-acceptance-error' class='error' style='color: red;'>${errorMessages.tcu.acceptance}</p>`);
  }
};

const removeTcuErrors = () => {
  const tcuAcceptanceError = document.getElementById('tcu-acceptance-error');
  if (tcuAcceptanceError) tcuAcceptanceError.remove();
};

const tcuButtonElmt = document.getElementById('checkbox');
tcuButtonElmt.addEventListener('click', removeTcuErrors);
