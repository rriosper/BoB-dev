import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

test('Spinner', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment).toMatchSnapshot();
});
