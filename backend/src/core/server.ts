import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';

import { setControllers } from './controller';
import logger from './logger';
import { Controllers, CoreProps } from './types';

export const makeServer = async (
  controllers: Controllers,
  { config }: CoreProps,
): Promise<void> => {
  const server = express();
  server.use(json());
  server.use(cors({ origin: ['http://localhost:3000'] }));
  return new Promise((res, rej) => {
    server
      .listen(config.API_PORT)
      .on('listening', () => {
        setControllers(server, controllers);
        logger.info(`Listen at port ${config.API_PORT}`);
        res();
      })
      .on('error', rej);
  });
};
