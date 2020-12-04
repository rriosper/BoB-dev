import styled from '@xstyled/styled-components';

export const Title = styled.h1`
  color: primary;
  margin-bottom: xs;

  + h2 {
    margin-top: xs;
  }
`;

export const Subtitle = styled.h2`
  color: foreground;
`;

export const Footer = styled.div`
  width: 100%;
  padding: md;
  background-color: card;
  color: foreground;
`;
