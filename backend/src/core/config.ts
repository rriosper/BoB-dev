import {
  exactDecoder,
  objectDecoder,
  oneOfDecoders,
  stringDecoder,
} from 'json-decoder';

import { Config } from './types';

const configDecoder = objectDecoder<Config>({
  API_PORT: stringDecoder,
  ENV: oneOfDecoders<Env>(
    exactDecoder('development'),
    exactDecoder('production'),
    exactDecoder('test'),
  ),
  DB_MAIN_URL: stringDecoder,
  DB_MAIN_PORT: stringDecoder,
  DB_MAIN_NAME: stringDecoder,
  DB_MAIN_USER: stringDecoder,
  DB_MAIN_PASS: stringDecoder,
});

export const getConfig = (): Config => {
  const decode = configDecoder.decode(process.env);
  if (decode.type === 'OK') {
    return decode.value;
  }
  throw new Error(decode.message);
};
