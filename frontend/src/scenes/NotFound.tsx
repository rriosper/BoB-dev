import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { KeyboardArrowLeft as KeyboardArrowLeftIcon } from 'styled-icons/material';

import { Icon } from '../components';

const SNotFound = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SText = styled.p`
  font-size: 4;
  font-weight: bold;
`;

const SLink = styled(Link)`
  color: text;
  display: flex;
  align-items: center;
`;

const NotFound: React.FC = () => (
  <SNotFound>
    <SText>404 Page not found</SText>
    <SLink to="/">
      <Icon icon={KeyboardArrowLeftIcon} size="sm" />
      Go to the main page
    </SLink>
  </SNotFound>
);

export default NotFound;
