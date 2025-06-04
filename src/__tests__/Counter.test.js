import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test('1. Renderiza valor inicial do contador como 0', () => {
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 0');
  });

  test('2. Incrementa o contador', () => {
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 1');
  });

  test('3. Decrementa o contador', () => {
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: -1');
  });

  test('4. Reseta o contador após incremento', () => {
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 0');
  });

  test('5. Reseta o contador após decremento', () => {
    fireEvent.click(screen.getByTestId('decrement-button'));
    fireEvent.click(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 0');
  });

  test('6. Incrementar múltiplas vezes', () => {
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 3');
  });

  test('7. Decrementar múltiplas vezes', () => {
    fireEvent.click(screen.getByTestId('decrement-button'));
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: -2');
  });

  test('8. Botão de incremento existe e funciona', () => {
    const button = screen.getByTestId('increment-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 1');
  });

  test('9. Botão de reset funciona mesmo com valor alto', () => {
    for (let i = 0; i < 10; i++) {
      fireEvent.click(screen.getByTestId('increment-button'));
    }
    fireEvent.click(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: 0');
  });

  test('10. Contador aceita números negativos', () => {
    fireEvent.click(screen.getByTestId('decrement-button'));
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Contador: -2');
  });
});
