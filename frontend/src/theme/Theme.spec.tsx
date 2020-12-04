import { render } from '@testing-library/react';
import { useTheme } from '@xstyled/styled-components';
import React from 'react';

import Theme from './Theme';

const Component: React.FC = () => {
  const theme = useTheme<Record<string, unknown>>();
  return <div>{JSON.stringify(theme)}</div>;
};

test('Theme', () => {
  const { asFragment } = render(
    <Theme>
      <Component />
    </Theme>,
  );

  expect(asFragment()).toMatchSnapshot();
});
