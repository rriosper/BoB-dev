import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Passenger } from '../../domain';
import services from '../../services';
import { actions, selectors } from '../../store';

type UsePassengersState = {
  data: {
    passengers: Array<Passenger>;
  };
  loading: {
    passengers: boolean;
  };
  error: {
    passengers: Nullable<string>;
  };
  success: {
    passengers: boolean;
  };
};

type UsePassengersHandlers = {
  handlers: {
    passengers: {
      getAll: () => void;
    };
  };
};

type UsePassengersOutput = UsePassengersState & UsePassengersHandlers;

const usePassengers = (): UsePassengersOutput => {
  const state = useSelector(selectors.passengers.root);
  const dispatch = useDispatch();

  const properGetAllPassengers = useCallback(() => {
    dispatch(actions.creators.passenger.getAll());

    services.bob.passenger
      .getAll()
      .then((passengers): void => {
        dispatch(actions.creators.passenger.getAllSuccess(passengers));
      })
      .catch((err: AnyError): void => {
        dispatch(actions.creators.passenger.getAllFailure(err));
      });
  }, [dispatch]);

  useEffect(() => {
    let isSubscribed = true;
    dispatch(actions.creators.passenger.getAll());
    services.bob.passenger
      .getAll()
      .then((passengers): void => {
        if (isSubscribed) {
          dispatch(actions.creators.passenger.getAllSuccess(passengers));
        }
      })
      .catch((err: AnyError) => {
        if (isSubscribed) {
          dispatch(actions.creators.passenger.getAllFailure(err));
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [dispatch]);

  const handlers: UsePassengersHandlers['handlers'] = {
    passengers: {
      getAll: properGetAllPassengers,
    },
  };

  return {
    data: {
      passengers: state.data,
    },
    error: {
      passengers: state.error,
    },
    loading: {
      passengers: state.loading,
    },
    success: {
      passengers: state.success,
    },
    handlers,
  };
};

export default usePassengers;
