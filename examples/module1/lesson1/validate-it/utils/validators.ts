export const isEmpty = (value: string) => !value.trim();

export const isValidInteger = (value: string) => Number.isInteger(Number(value));

export const isLessThan = (lessThan: number, value: number) => value < lessThan;

export const isGreaterThan = (greaterThan: number, value: number) => value > greaterThan;

export const isEven = (value: number) => value % 2 === 0;
