const customRadio = document.querySelector('#tip_6');
const radioButtons = document.querySelectorAll("input[type='radio']");
const customInput = document.querySelector('#radio__control__custom');

customInput.addEventListener('click', event => {
  console.log(event.target);
  customRadio.checked = true;
});
