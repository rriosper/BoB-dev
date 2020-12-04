import boom from '@hapi/boom';
import { MongoError } from 'mongodb';
import {
  Express, Request, Response, Router,
} from 'express';
import { ValidationError } from 'yup';

import logger from './logger';
import { Controllers, MethodControllerProps, MethodControllers } from './types';

const setMethodControllers = (router: Router, method: MethodControllers) => {
  Object.keys(method).forEach((currPath) => {
    Object.keys(method[currPath]).forEach((currMethod) => {
      const controllerFn = method[currPath][currMethod as HttpMethod];
      if (controllerFn) {
        router[currMethod as HttpMethod](currPath, controllerFn);
      }
    });
  });
};

export const setControllers = (server: Express, controllers: Controllers) => {
  Object.keys(controllers).forEach((currNs) => {
    const router = Router();
    setMethodControllers(router, controllers[currNs]);
    server.use(`/${currNs}`, router);
  });
};

const makeResponse = (data: unknown): { data: typeof data } => ({
  data,
});

const MONGO_ERROR_CODE = Object.freeze({
  unique: 11000,
});

// TODO: Split parse error
export const makeMethodController = (
  fn: ({ req, res }: MethodControllerProps) => Promise<void>,
) => async (req: Request, res: Response) => {
  try {
    await fn({
      req,
      res,
      params: req.params,
      body: req.body,
      makeError: boom,
      makeResponse: (data) => res.json(makeResponse(data)),
    });
  } catch (err) {
    logger.verbose(err);
    if (boom.isBoom(err)) {
      const { statusCode, ...rest } = err.output.payload;
      res.status(statusCode).json(rest);
    } else if (err instanceof MongoError) {
      if (err.code === MONGO_ERROR_CODE.unique) {
        const { statusCode, ...rest } = boom.forbidden(
          err.message,
        ).output.payload;

        res.status(statusCode).json(rest);
      } else {
        res.status(500).json({
          error: 'Mongo error',
          message: err.message,
        });
      }
    } else if (err instanceof ValidationError) {
      const { statusCode, ...rest } = boom.badRequest(
        err.message,
      ).output.payload;
      res.status(statusCode).json(rest);
    } else if (err instanceof Error) {
      res.status(500).json({
        error: 'Internal server error',
        message: err.message,
      });
    } else {
      res.status(500).send({
        error: 'Unknown internal server error',
        message:
          'An unknown error has been occurred in the server, pls contact with the system admin',
      });
    }
  }
};
