import React from 'react';
import {render} from '@testing-library/react-native';
import UserItem from './UserItem';

test('should render correctly', () => {
  const comp = render(<UserItem user={{}} />);
  expect(comp).toMatchSnapshot();
});
