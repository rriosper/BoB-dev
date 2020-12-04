import styled, { css } from '@xstyled/styled-components';
import { up } from '@xstyled/system';
import React from 'react';

const SLayout = styled.div`
  padding-left: lg;
  padding-right: lg;
  padding-bottom: md;
  width: 100%;
  height: 100%;

  ${up(
    'xl',
    css`
      padding-left: 0;
      padding-right: 0;
      max-width: 1180px;
      margin: 0 auto;
    `,
  )}
`;

type LayoutProps = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  subTitle,
  children,
  footer,
}) => (
  <SLayout>
    {title}
    {subTitle}
    {children}
    {footer}
  </SLayout>
);

export default Layout;
