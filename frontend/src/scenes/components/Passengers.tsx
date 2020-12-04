import styled, { Box } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import React, { memo } from 'react';

import { Card } from '../../components';
import { Passenger } from '../../domain';

type PassengersProps = { passengers: Array<Passenger> };

const SPassengerProp = styled.div`
  display: flex;
  gap: ${th('space.sm')};
  margin: md;

  > b {
    color: foreground;
  }
`;

const PassengerProp: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <SPassengerProp>
    <b>
      {label}
      :
    </b>
    <span>{value}</span>
  </SPassengerProp>
);

const SCardPassenger = styled(Card)`
  display: grid;
  grid-gap: md;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
  flex-wrap: wrap;
`;

const Passengers: React.FC<PassengersProps> = memo(({ passengers }) => (
  <SCardPassenger>
    {passengers.map((passenger) => (
      <Box
        minWidth="320px"
        display="flex"
        key={passenger._id}
        padding="sm"
        marginBottom="sm"
        borderRadius="card"
        backgroundColor="bgA8"
        boxShadow="cardSmooth"
      >
        <PassengerProp label="Name" value={passenger.name} />
        <PassengerProp label="Bags" value={passenger.bags.toString()} />
      </Box>
    ))}
    {passengers.length === 0 && <p>Not Passenger found</p>}
  </SCardPassenger>
));

export default Passengers;
