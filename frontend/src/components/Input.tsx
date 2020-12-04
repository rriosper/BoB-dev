import styled from '@xstyled/styled-components';
import React from 'react';
import { Input as ReakitInput, InputProps } from 'reakit';

const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > b {
    margin-bottom: xs;
    color: foreground;
  }
`;

const SInput = styled(ReakitInput)`
  outline: none;
  padding: sm;
  border-radius: smooth;
  border: thin;
  border-color: foregroundBorder;
`;

const SError = styled.p`
  color: error;
  margin-top: xs;
  margin-bottom: sm;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const Input: React.FC<InputProps & { error?: string; label: string }> = ({
  required,
  label,
  error,
  ...props
}) => (
  <SInputWrapper>
    <b>
      {label}
      {required && ' *'}
    </b>
    <SInput {...props} required={required} />
    {error && <SError>{error}</SError>}
  </SInputWrapper>
);

export default Input;
