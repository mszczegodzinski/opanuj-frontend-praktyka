import { useState } from 'react';
import { Result } from './components/Result';
import { add, divide, multiply, subtract, validate } from './utils/functions';
import { NumberInput } from './components/NumberInput';
import { Button } from './components/Button';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculate = (func: (a: number, b: number) => number) => {
    const errorMessage = validate(firstNumber, secondNumber);
    setError(errorMessage);
    if (errorMessage) {
      return;
    }
    setResult(func(firstNumber, secondNumber));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={firstNumber} onChange={setFirstNumber} />
        <NumberInput value={secondNumber} onChange={setSecondNumber} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button label="+" onClick={() => calculate(add)} />
        <Button label="-" onClick={() => calculate(subtract)} />
        <Button label="*" onClick={() => calculate(multiply)} />
        <Button label="/" onClick={() => calculate(divide)} />
      </div>
      <Result result={result} />
      <div>{error}</div>
    </div>
  );
};

export default App;
