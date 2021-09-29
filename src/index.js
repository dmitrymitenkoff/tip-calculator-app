import './app';
// const form = document.querySelector('form');
// const errorMessage = document.querySelector('.error');
// let numberOfPeople;

// // Custom radio button
// const customInput = document.querySelector('#radio__control__custom');
// const customRadio = document.querySelector('#tip_6');

// // Fields to calculate
// const bill = document.querySelector('#bill');
// const tip = document.querySelector("input[name='tip-amount']:checked");
// const people = document.querySelector('#number-of-people');

// function calculate() {
//   // Selects the first output element
//   const tipPerPerson = document.querySelector('.tipPerPerson');

//   // Iterates through radio inputs and assigns the value of the "checked" radio button to the var "selectedTipAmount"
//   const radios = document.querySelectorAll("input[name='tip-amount']");
//   let selectedTipAmount;
//   if (!customInput.checked) {
//     for (let radioBtn of radios) {
//       if (radioBtn.checked) {
//         selectedTipAmount = radioBtn.value;
//         // console.log(tip);
//         break;
//       }
//     }
//   } else {
//     selectedTipAmount = parseInt(customInput.value);
//   }

//   // Performs the calculations and appends the result to the output field.
//   tipPerPerson.textContent = (
//     ((selectedTipAmount / 100) * parseFloat(bill.value)) /
//     parseInt(people.value)
//   ).toFixed(2);
// }

// people.addEventListener('focus', event => {
//   console.log(event.target);
//   if ((event.target.value = '')) {
//     errorMessage.classList.remove('hidden');
//   } else {
//     numberOfPeople = event.target.value;
//     console.log(numberOfPeople);
//   }
// });

// // Removes selection from standard radio buttons and selects the custom input
// customInput.addEventListener('click', event => {
//   console.log(event.target);
//   customRadio.checked = true;
//   customInput.checked = true;
// });

// // Listens to the form element and runs the calc function
// // form.addEventListener('input', calculate);

// =============================================================================

// // Validate bill amount to ensure it contains only numbers
// billInput.addEventListener('input', event => {
//   const billErrorMsg = document.querySelector('.bill-amount small');
//   console.log(event.target);
//   if (event.target.validity.valid) {
//     billErrorMsg.classList.add('hidden');
//     billAmountValue = parseFloat(event.target.value);
//     calculate();
//     console.log(billAmountValue + ' is the bill value you entered');
//   } else if (event.target.validity.patternMismatch) {
//     billErrorMsg.textContent = 'Invalid number';
//     billErrorMsg.classList.remove('hidden');
//   } else if (event.target.validity.valueMissing) {
//     billErrorMsg.textContent = 'Cannot be zero';
//     billErrorMsg.classList.remove('hidden');
//   }
// });

// // Validate people number to ensure the field contains only numbers
// peopleInput.addEventListener('input', event => {
//   const peopleErrorMsg = document.querySelector('.people small');
//   console.log(event.target);
//   if (event.target.validity.valid) {
//     peopleErrorMsg.classList.add('hidden');
//     guests = parseFloat(event.target.value);
//     calculate();
//     console.log(guests + ' is the number of people');
//   } else if (event.target.validity.patternMismatch) {
//     peopleErrorMsg.textContent = 'Invalid number';
//     peopleErrorMsg.classList.remove('hidden');
//   } else if (event.target.validity.valueMissing) {
//     peopleErrorMsg.textContent = 'Cannot be zero';
//     peopleErrorMsg.classList.remove('hidden');
//   }
// });

// customTipInput.addEventListener('focus', event => {
//   if (event.target.validity.valid) {
//     customTipInput.checked = true;
//     customTipRadio.checked = true;
//     allRadioButtons.forEach(btn => {
//       btn.checked = false;
//     });
//   }
// });

// customTipInput.addEventListener('input', event => {
//   if (event.target.validity.valid) {
//     selectedTipAmount = parseFloat(customTipInput.value);
//     calculate();
//   }
//   button.disabled = false;
// });

// allRadioButtons.forEach(radioButton => {
//   radioButton.addEventListener('input', () => {
//     if (customTipInput.value === '') {
//       customTipInput.setAttribute('placeholder', 'Custom');
//       customTipInput.checked = false;
//       customTipRadio.checked = false;
//       console.log(customTipInput.value);
//       selectedTipAmount = parseInt(radioButton.value);
//       calculate();
//     }
//     button.disabled = false;
//   });
// });
