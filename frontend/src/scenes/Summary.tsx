import { Box } from '@xstyled/styled-components';
import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Error, Layout, Spinner, Button,
} from '../components';
import {
  Passengers, Subtitle, Title, Footer,
} from './components';
import { usePassengers } from './hooks';

const Summary: React.FC = () => {
  const history = useHistory();
  const {
    data: { passengers },
    loading,
    error,
    success,
    handlers,
  } = usePassengers();

  return (
    <Layout
      title={<Title>BoB Dev</Title>}
      subTitle={<Subtitle>Summary</Subtitle>}
      footer={<Footer>Developed by Roberto Ríos</Footer>}
    >
      <Box marginBottom="md">
        <Button onClick={() => history.push('/new')}>New client</Button>
      </Box>

      {error.passengers && (
        <Error
          title="Error loading passengers"
          message={error.passengers}
          onRetry={handlers.passengers.getAll}
        />
      )}
      {loading.passengers && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          marginTop="xl"
          marginBottom="xl"
        >
          <Spinner />
        </Box>
      )}

      {(success.passengers || (loading && passengers.length > 0)) && (
        <Passengers passengers={passengers} />
      )}
    </Layout>
  );
};

export default Summary;
