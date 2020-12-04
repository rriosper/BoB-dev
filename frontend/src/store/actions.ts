import { Passenger } from '../domain';

// Passenger
const passengerTypes = {
  GET_ALL: 'PASSENGER/GET_ALL',
  GET_ALL_SUCCESS: 'PASSENGER/GET_ALL_SUCCESS',
  GET_ALL_FAILURE: 'PASSENGER/GET_ALL_FAILURE',
  ADD: 'PASSENGER/ADD',
} as const;

export type PassengerGetAllAction = {
  type: typeof passengerTypes.GET_ALL;
};

export type PassengerGetAllSuccessAction = {
  type: typeof passengerTypes.GET_ALL_SUCCESS;
  payload: Array<Passenger>;
};

export type PassengerGetAllFailureAction = {
  type: typeof passengerTypes.GET_ALL_FAILURE;
  error: AnyError;
};

export type PassengerAddAction = {
  type: typeof passengerTypes.ADD;
  payload: Passenger;
};

export type PassengerAction =
  | PassengerGetAllAction
  | PassengerGetAllSuccessAction
  | PassengerGetAllFailureAction
  | PassengerAddAction;

const passengerCreators = {
  getAll: (): PassengerGetAllAction => ({ type: 'PASSENGER/GET_ALL' }),
  getAllSuccess: (
    passengers: Array<Passenger>,
  ): PassengerGetAllSuccessAction => ({
    type: 'PASSENGER/GET_ALL_SUCCESS',
    payload: passengers,
  }),
  getAllFailure: (error: AnyError): PassengerGetAllFailureAction => ({
    type: 'PASSENGER/GET_ALL_FAILURE',
    error,
  }),
  add: (passenger: Passenger): PassengerAddAction => ({
    type: 'PASSENGER/ADD',
    payload: passenger,
  }),
};

export default {
  types: {
    passenger: passengerTypes,
  },
  creators: {
    passenger: passengerCreators,
  },
};
