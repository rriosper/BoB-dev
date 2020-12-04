import styled, { keyframes } from '@xstyled/styled-components';
import {
  justifySelf,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
} from '@xstyled/system';

const spinnerAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

type SpinnerProps = {
  justifySelf?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
};

const Spinner = styled.div<SpinnerProps>`
  width: md;
  height: md;
  border: thick;
  border-color: primary;
  border-top-color: bg;
  border-radius: 100%;
  animation: ${spinnerAnimation};
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  ${justifySelf}
  ${margin}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
`;

export default Spinner;
