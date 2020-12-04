import React from 'react';
import { render } from '@testing-library/react';

import Layout from './Layout';

test('Layout', () => {
  const { asFragment, getByText } = render(
    <Layout title={<div>Title</div>} subTitle={<div>Subtitle</div>}>
      CHILDREN
    </Layout>,
  );
  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Subtitle')).toBeInTheDocument();
  expect(getByText('CHILDREN')).toBeInTheDocument();

  expect(asFragment).toMatchSnapshot();
});
