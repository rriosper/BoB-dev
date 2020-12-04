import { Button } from 'reakit';
import styled from '@xstyled/styled-components';

const SButton = styled(Button)`
  padding: sm;
  outline: none;
  border: thin;
  border-color: foregroundBorder;
  font-weight: bold;
  cursor: pointer;
  transition: fast;
  border-radius: smooth;

  :hover {
    background-color: primary;
    color: white;
  }
`;

export default SButton;
