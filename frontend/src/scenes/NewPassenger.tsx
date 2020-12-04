import { Box } from '@xstyled/styled-components';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Layout } from '../components';
import { Passenger } from '../domain';
import services from '../services';
import { actions } from '../store';
import {
  Footer, PassengerForm, Subtitle, Title,
} from './components';

const NewPassenger: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const properOnSavePassenger = useCallback(
    async (passenger: Pick<Passenger, 'bags' | 'name'>) => {
      const newPassenger = await services.bob.passenger.add(passenger);
      dispatch(actions.creators.passenger.add(newPassenger));
    },
    [dispatch],
  );

  return (
    <Layout
      title={<Title>BoB Dev</Title>}
      subTitle={<Subtitle>Add new client</Subtitle>}
      footer={<Footer>Developed by Roberto Ríos</Footer>}
    >
      <Box marginBottom="md">
        <Button onClick={() => history.push('/')}>Summary</Button>
      </Box>
      <PassengerForm onSave={properOnSavePassenger} />
    </Layout>
  );
};

export default NewPassenger;
