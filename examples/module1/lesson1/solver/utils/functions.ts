export const add = (firstVal: number, secondVal: number) => firstVal + secondVal;

export const subtract = (firstVal: number, secondVal: number) => firstVal - secondVal;

export const multiply = (firstVal: number, secondVal: number) => firstVal * secondVal;

export const divide = (firstVal: number, secondVal: number) => {
  if (secondVal === 0) {
    return 'Cannot divide by zero';
  }
  return firstVal / secondVal;
};
