export function isEmpty(value: string): boolean {
  return Boolean(!value.trim());
}

export function isValidInteger(value: string): boolean {
  const parsedValue = Number(value);
  return Boolean(Number.isInteger(parsedValue));
}

export function isLessThan(lessThan: number, value: number): boolean {
  return value < lessThan;
}

export function isGreaterThan(greaterThan: number, value: number): boolean {
  return value > greaterThan;
}

export function isEven(value: number): boolean {
  return value % 2 === 0;
}
