import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes, { InferPropTypes } from 'prop-types';
import React from 'react';

import { Card } from './Card';

const propTypes = {
  onClose: PropTypes.func,
  onRetry: PropTypes.func,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  onClose: null,
  onRetry: null,
};

const SButton = styled.button`
  outline: none;
  border: none;
  border-radius: onlyTop;
  cursor: pointer;
  transition: fast;
  border: thin;
  width: fit-content;
  padding-left: md;
  padding-top: sm;
  padding-bottom: sm;
  padding-right: md;
  border-color: foregroundBorder;
  color: foreground;

  :hover {
    background-color: foreground;
    border-color: foreground;
    color: white;
  }
`;

const SBody = styled.div`
  background-color: error;
  padding: md;
  color: white;
  border-radius: card;

  > p:first-child {
    font-weight: bold;
    font-size: 3;
  }
`;

const SActions = styled.div`
  display: flex;
  justify-content: end;
  padding: sm;
  gap: ${th('space.md')};
`;

const SCard = styled(Card)`
  margin-bottom: md;
`;

const Error: React.FC<
InferPropTypes<typeof propTypes, typeof defaultProps>
> = ({
  onClose, onRetry, message, title,
}) => (
  <SCard padding="none">
    <SBody>
      <p>{title}</p>
      <p>{message}</p>
    </SBody>
    <SActions>
      {onRetry && (
        <SButton
          onClick={() => {
            onRetry();
          }}
        >
          Retry
        </SButton>
      )}
      {onClose && <SButton onClick={onClose}>Close</SButton>}
    </SActions>
  </SCard>
);

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
