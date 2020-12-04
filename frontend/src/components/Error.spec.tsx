import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@xstyled/styled-components';
import React from 'react';

import Error from './Error';

test('Error with retry and close', () => {
  const onRetry = jest.fn();
  const onClose = jest.fn();

  const { asFragment, getByText } = render(
    <ThemeProvider
      theme={{
        space: {
          md: '1px',
        },
      }}
    >
      <Error
        title="Error title"
        message="Error message"
        onRetry={onRetry}
        onClose={onClose}
      />
    </ThemeProvider>,
  );

  expect(getByText('Error title')).toBeInTheDocument();
  expect(getByText('Error message')).toBeInTheDocument();

  fireEvent.click(getByText('Close'));
  expect(onClose).toHaveBeenCalledTimes(1);

  fireEvent.click(getByText('Retry'));
  expect(onRetry).toHaveBeenCalledTimes(1);

  expect(asFragment).toMatchSnapshot();
});

test('Error only with close', () => {
  const onClose = jest.fn();

  const { getByText, queryByText } = render(
    <ThemeProvider
      theme={{
        space: {
          md: '1px',
        },
      }}
    >
      <Error title="Error title" message="Error message" onClose={onClose} />
    </ThemeProvider>,
  );

  expect(getByText('Error title')).toBeInTheDocument();
  expect(getByText('Error message')).toBeInTheDocument();

  fireEvent.click(getByText('Close'));
  expect(onClose).toHaveBeenCalledTimes(1);

  expect(queryByText('Retry')).not.toBeInTheDocument();
});

test('Error only with retry', () => {
  const onRetry = jest.fn();

  const { getByText, queryByText } = render(
    <ThemeProvider
      theme={{
        space: {
          md: '1px',
        },
      }}
    >
      <Error title="Error title" message="Error message" onRetry={onRetry} />
    </ThemeProvider>,
  );

  expect(getByText('Error title')).toBeInTheDocument();
  expect(getByText('Error message')).toBeInTheDocument();

  fireEvent.click(getByText('Retry'));
  expect(onRetry).toHaveBeenCalledTimes(1);

  expect(queryByText('Close')).not.toBeInTheDocument();
});
