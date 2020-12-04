import { config as dotenv } from 'dotenv';
import {
  getConfig, makeServer, logger, makeDBconnection,
} from './core';
import controllers from './controllers';

dotenv();

const main = async () => {
  try {
    const config = getConfig();
    await makeDBconnection({ config });
    await makeServer(controllers, { config });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
    } else {
      logger.error('Unkown error', err);
    }
  }
};

main();
