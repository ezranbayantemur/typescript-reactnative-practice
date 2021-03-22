import {renderHook, act} from '@testing-library/react-hooks';
import useFetch from '.';
import axios from 'axios';

jest.mock('axios');

axios.get.mockResolvedValue({
  data: [{}, {}, {}],
});

test('should fetch data correctly', async () => {
  const {result, waitForNextUpdate} = renderHook(() => useFetch({url: ''}));
  await waitForNextUpdate();
  expect(result.current.response.length).toBe(3);
});

test('should clear data correctly', async () => {
  const {result, waitForNextUpdate} = renderHook(() => useFetch({url: ''}));
  await waitForNextUpdate();

  act(() => result.current.clear());

  expect(result.current.response.length).toBe(0);
});

test('should set loading while fetching data', async () => {
  const {result, waitForNextUpdate} = renderHook(() => useFetch({url: ''}));
  expect(result.current.loading).toBeTruthy();
  await waitForNextUpdate();
  expect(result.current.loading).toBeFalsy();
});
