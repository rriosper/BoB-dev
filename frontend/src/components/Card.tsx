import styled from '@xstyled/styled-components';
import {
  alignItems,
  backgroundColor,
  gridGap,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
  margin,
  padding,
} from '@xstyled/system';
import React, { useMemo } from 'react';

import { ThemeSchema } from '../theme';

// Card
type CardProps = {
  padding?: ThemeSchema['space'];
  margin?: ThemeSchema['space'];
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: ThemeSchema['colors'];
};

export const Card = styled.div<CardProps>`
  margin-bottom: md;
  ${padding}
  ${margin}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${justifyContent}
  ${alignItems}
  ${backgroundColor}
  background-color: card;
  box-shadow: card;
  display: grid;
  border-radius: card;
`;

Card.defaultProps = {
  padding: 'md',
};

// CardField
type CardFieldsProps = {
  fields: Array<{
    label: string;
    value: Nullable<string | number>;
  }>;
};

const SCardFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: md;
  grid-column-gap: sm;
`;

const SCardField = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    font-weight: bold;
    color: foreground;
    text-trasnform: lowercase;
    margin-bottom: xs;

    :first-letter {
      text-transform: uppercase;
    }
  }
`;

export const CardFields: React.FC<CardFieldsProps> = ({ fields }) => {
  const fieldsComponent = useMemo(
    () => fields.map(({ label, value }) => (
      <SCardField key={label}>
        <div>{label}</div>
        <span>{value}</span>
      </SCardField>
    )),
    [fields],
  );
  return <SCardFieldsWrapper>{fieldsComponent}</SCardFieldsWrapper>;
};
