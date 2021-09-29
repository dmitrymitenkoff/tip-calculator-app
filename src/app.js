const billInput = document.querySelector('#bill');
const customTipRadio = document.querySelector('#tip_6');
const customTipInput = document.querySelector('#custom-radio-input');
const allRadioButtons = document.querySelectorAll("input[name='tip-amount']");
const peopleInput = document.querySelector('#people');
const personTip = document.querySelector('.tipPerPerson');
const personTotal = document.querySelector('.personTotal');
const form = document.querySelectorAll('form');
const button = document.querySelector('button');

// Values to calculate
let billAmountValue;
let selectedTipAmount;
let guests;

// Calculate inputs as they're entered
function calculate() {
  if (billAmountValue && selectedTipAmount && guests) {
    let calcTip = (
      ((selectedTipAmount / 100) * billAmountValue) /
      guests
    ).toFixed(2);
    personTip.textContent = `$${calcTip}`;

    let calcTotal = (billAmountValue / guests + parseFloat(calcTip)).toFixed(2);
    personTotal.textContent = `$${calcTotal}`;
  }
}

// Remove placeholder attribute on focus
function removePlaceholder(...fields) {
  fields.forEach(field => {
    field.addEventListener('focus', () => {
      field.removeAttribute('placeholder');
    });
  });
}
removePlaceholder(billInput, customTipInput, peopleInput);

// Show input error
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.textContent = message;
}

// Show success by removing the error message
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.textContent = '';
}

// Remove errors
function removeErrorStyles(...inputs) {
  inputs.forEach(input => {
    const small = input.parentElement.querySelector('small');
    small.textContent = '';
  });
}

// Show placeholder attribute on reset
// Placeholders are required to remove the CSS style: "&:not(:focus):not(:placeholder-shown):invalid"
function addPlaceholder(...fields) {
  fields.forEach(field => {
    field.value = '';
    if (field === 'customTipInput') {
      field.setAttribute('placeholder', 'Custom');
    } else {
      field.setAttribute('placeholder', '0');
    }
  });
}

// Validate bill amount to ensure it contains only numbers
billInput.addEventListener('input', event => {
  if (event.target.validity.valid) {
    showSuccess(event.target);
    billAmountValue = parseFloat(event.target.value);
    calculate();
  } else if (event.target.validity.patternMismatch) {
    showError(event.target, 'Invalid number');
  } else if (event.target.validity.valueMissing) {
    showError(event.target, 'Cannot be zero');
  }
  button.disabled = false;
});

// Validate people number to ensure the field contains only numbers
peopleInput.addEventListener('input', event => {
  if (event.target.validity.valid) {
    showSuccess(event.target);
    guests = parseFloat(event.target.value);
    calculate();
  } else if (event.target.validity.patternMismatch) {
    showError(event.target, 'Invalid number');
  } else if (event.target.validity.valueMissing) {
    showError(event.target, 'Cannot be zero');
  }
  button.disabled = false;
});

customTipInput.addEventListener('focus', event => {
  if (event.target.validity.valid) {
    customTipInput.checked = true;
    customTipRadio.checked = true;
    allRadioButtons.forEach(btn => {
      btn.checked = false;
    });
  }
});

customTipInput.addEventListener('input', event => {
  if (event.target.validity.valid) {
    selectedTipAmount = parseFloat(customTipInput.value);
    calculate();
  }
  button.disabled = false;
});

allRadioButtons.forEach(radioButton => {
  radioButton.addEventListener('input', event => {
    if (customTipInput.value === '') {
      selectedTipAmount = parseInt(radioButton.value);
      calculate();
    }
    button.disabled = false;
  });
});

button.addEventListener('click', () => {
  removeErrorStyles(billInput, peopleInput);
  addPlaceholder(billInput, customTipInput, peopleInput);
  personTip.textContent = '$0';
  personTotal.textContent = '$0';
  button.disabled = true;
  form.reset();
});
