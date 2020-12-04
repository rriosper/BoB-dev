import { ThemeProvider } from '@xstyled/styled-components';
import PropTypes, { InferProps } from 'prop-types';
import React from 'react';

import GlobalStyle from './GlobalStyle';
import themeValues from './values';

const themePropTypes = {
  children: PropTypes.node.isRequired,
};

type ThemeProps = InferProps<typeof themePropTypes>;

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={themeValues}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

Theme.propTypes = themePropTypes;

export default Theme;
