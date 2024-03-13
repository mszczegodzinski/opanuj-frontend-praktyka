export const add = (firstVal: number, secondVal: number) => firstVal + secondVal;

export const subtract = (firstVal: number, secondVal: number) => firstVal - secondVal;

export const multiply = (firstVal: number, secondVal: number) => firstVal * secondVal;

export const divide = (firstVal: number, secondVal: number) => {
  return firstVal / secondVal;
};

export const validate = (firstNumber: number, secondNumber: number) => {
  if (!firstNumber && !secondNumber) {
    return 'Cannot divide 0 by 0';
  }
  if (!secondNumber) {
    return 'Cannot divide by 0';
  }
  return '';
};
