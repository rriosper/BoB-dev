declare module 'react-use' {
  import 'react-use';
  import { Dispatch, SetStateAction } from 'react';

  declare const useLocalStorage: <T>(
    key: string,
    initialValue?: T | undefined,
    options?:
    | {
      raw: true;
    }
    | {
      raw: false;
      serializer: (value: T) => string;
      deserializer: (value: string) => T;
    }
    | undefined
  ) => [T, Dispatch<SetStateAction<T>>, () => void];
}
