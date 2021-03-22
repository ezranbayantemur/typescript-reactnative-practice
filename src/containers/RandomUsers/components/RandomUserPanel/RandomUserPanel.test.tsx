import {render} from '@testing-library/react-native';
import React from 'react';
import {User} from '../../../../types';
import RandomUserPanel from './RandomUserPanel';

const noop = jest.fn();

test('should render correctly', () => {
  const comp = render(
    <RandomUserPanel data={[]} loading onRefresh={noop} onClear={noop} />,
  );

  expect(comp).toMatchSnapshot();
});

test('should render data correctly', () => {
  const mockData: Partial<User>[] = [
    {avatar: '', username: '', first_name: '', last_name: ''},
    {avatar: '', username: '', first_name: '', last_name: ''},
  ];

  const comp = render(
    <RandomUserPanel data={mockData} loading onRefresh={noop} onClear={noop} />,
  );

  const userItems = comp.queryAllByTestId('user-item');
  expect(userItems.length).toBe(mockData.length);
});
