import { defaultTo, path, pipe } from 'ramda';
import { PassengerState, PASSENGER_INITIAL_STATE } from './reducers';

const passengerPath = ['passengers'];

const passengers = {
  root: pipe(
    path<PassengerState>(passengerPath),
    defaultTo(PASSENGER_INITIAL_STATE),
  ),
  data: pipe(
    path<PassengerState['data']>(passengerPath.concat('data')),
    defaultTo(PASSENGER_INITIAL_STATE.data),
  ),
  error: pipe(
    path<PassengerState['error']>(passengerPath.concat('error')),
    defaultTo(PASSENGER_INITIAL_STATE.error),
  ),
  loading: pipe(
    path<PassengerState['loading']>(passengerPath.concat('loading')),
    defaultTo(PASSENGER_INITIAL_STATE.loading),
  ),
  success: pipe(
    path<PassengerState['success']>(passengerPath.concat('success')),
    defaultTo(PASSENGER_INITIAL_STATE.success),
  ),
};

export default {
  passengers,
};
