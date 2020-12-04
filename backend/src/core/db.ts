import { connect } from 'mongoose';

import { CoreProps } from './types';

export const makeDBconnection = async ({
  config,
}: CoreProps): Promise<void> => {
  await connect(
    `mongodb://${config.DB_MAIN_USER}:${config.DB_MAIN_PASS}@${config.DB_MAIN_URL}:${config.DB_MAIN_PORT}/${config.DB_MAIN_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  );
};
