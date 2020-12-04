import {
  append, lensProp, mergeLeft, over,
} from 'ramda';
import { combineReducers, Reducer } from 'redux';

import { Passenger } from '../domain';
import { PassengerAction } from './actions';

export type PassengerState = {
  error: Nullable<string>;
  success: boolean;
  loading: boolean;
  data: Array<Passenger>;
};

export const PASSENGER_INITIAL_STATE: PassengerState = {
  error: null,
  success: false,
  loading: false,
  data: [],
};

const passengersReducer: Reducer<PassengerState, PassengerAction> = (
  state = PASSENGER_INITIAL_STATE,
  action,
): PassengerState => {
  switch (action.type) {
    case 'PASSENGER/GET_ALL':
      return mergeLeft({ loading: true, error: null }, state);
    case 'PASSENGER/GET_ALL_SUCCESS':
      return mergeLeft(
        {
          data: action.payload,
          loading: false,
          success: true,
        },
        state,
      );

    case 'PASSENGER/GET_ALL_FAILURE':
      return mergeLeft(
        {
          loading: false,
          error: action.error.reason,
        },
        state,
      );
    case 'PASSENGER/ADD':
      return over(lensProp('data'), append(action.payload), state);
    default:
      return state;
  }
};

export default combineReducers({
  passengers: passengersReducer,
});
