import React from 'react';
import Container from '../../components/Container/Container';
import { useState } from 'react';
import ButtonSimple from '../../components/UI/Buttons/ButtonSimple';
const Testing = () => {
  const [num1, setNum1] = useState<any>(0);
  const [num2, setNum2] = useState<any>(0);
  const [result, setResult] = useState(0);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <Container>
      <div className="space-y-3 mb-4">
        <div className="text-purple-500" data-testid="result">
          {result}
        </div>
        <input
          className="w-full p-4 pr-12 text-sm border-purple-500 rounded-lg shadow-sm"
          type="number"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          className="w-full p-4 pr-12 text-sm border-purple-500 rounded-lg shadow-sm"
          type="number"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <ButtonSimple
          onClick={() => add()}
          data-testid="simpleButton"
          size="md"
        >
          Add
        </ButtonSimple>
        <ButtonSimple onClick={() => subtract()} data-testid="add" size="md">
          Subtract
        </ButtonSimple>
        <ButtonSimple onClick={() => multiply()} data-testid="add" size="sm">
          Multiply
        </ButtonSimple>
        <ButtonSimple onClick={() => divide()} data-testid="add" size="sm">
          Divide
        </ButtonSimple>
      </div>
    </Container>
  );
};
export default Testing;
