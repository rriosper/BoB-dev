import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';
import React from 'react';

type IconProps = {
  icon: React.FC;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
};

const SIconWrapper = styled.svg<Omit<IconProps, 'icon'>>`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  transition: fast;
  fill: red;

  ${variant({
    prop: 'size',
    default: 'md',
    variants: {
      sm: css`
        width: sm;
        height: sm;
      `,
      md: css`
        width: md;
        height: md;
      `,
      lg: css`
        width: lg;
        height: lg;
      `,
    },
  })}


  &: hover{

  }
`;

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  onClick,
}) => (
  <SIconWrapper size={size} onClick={onClick}>
    <IconComponent />
  </SIconWrapper>
);

export default Icon;
