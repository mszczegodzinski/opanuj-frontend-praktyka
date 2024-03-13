import {
  isEmpty,
  isEven,
  isGreaterThan,
  isLessThan,
  isValidInteger,
} from './utils/validators.ts';

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const inputValue = input.value;
    const isValid = validateInput(inputValue);
    result.innerHTML = isValid ? 'Valid' : 'Invalid';
  });

  function validateInput(value) {
    if (isEmpty(value) || !isValidInteger(value)) {
      return false;
    }

    const parsedValue = Number(value);
    if (isGreaterThan(100, parsedValue)) return false;
    if (isLessThan(0, parsedValue)) return false;
    if (!isEven(parsedValue)) return false;

    return true;
  }

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
