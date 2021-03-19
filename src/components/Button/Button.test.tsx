import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '.';

test('should render correctly', () => {
  const comp = render(<Button title="" />);
  expect(comp).toMatchSnapshot();
});

test('should render given title', () => {
  const testTitle = 'test';
  const comp = render(<Button title={testTitle} />);
  const buttonTitle = comp.getByTestId('button-text').children[0];
  expect(buttonTitle).toBe(testTitle);
});

test('should trigger press event', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button title="" onPress={mockFunction} />);
  const buttonTouchable = comp.getByTestId('button-touchable');
  fireEvent(buttonTouchable, 'press');
  expect(mockFunction).toBeCalled();
});

test('should render indicator on loading state', () => {
  const comp = render(<Button title="" loading />);
  const buttonIndicator = comp.getByTestId('button-indicator');
  expect(buttonIndicator).toBeTruthy();
});

test('should not trigger press event on loading state', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button title="" loading onPress={mockFunction} />);
  const buttonTouchable = comp.getByTestId('button-touchable');
  fireEvent(buttonTouchable, 'press');
  expect(mockFunction).not.toBeCalled();
});
