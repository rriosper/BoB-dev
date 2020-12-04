import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardFields } from './Card';

test('Card', () => {
  const { asFragment, getByText } = render(<Card>CHILDREN</Card>);
  expect(getByText('CHILDREN')).toBeInTheDocument();
  expect(asFragment).toMatchSnapshot();
});

test('CardFields', () => {
  const { asFragment, getByText } = render(
    <CardFields
      fields={[
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' },
      ]}
    />,
  );

  expect(getByText('Label 1')).toBeInTheDocument();
  expect(getByText('Value 1')).toBeInTheDocument();
  expect(getByText('Label 2')).toBeInTheDocument();
  expect(getByText('Value 2')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
