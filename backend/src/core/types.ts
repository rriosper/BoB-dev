import boom from '@hapi/boom';
import { Request, Response } from 'express';

export type Config = {
  API_PORT: string;
  ENV: Env;
  DB_MAIN_URL: string;
  DB_MAIN_PORT: string;
  DB_MAIN_NAME: string;
  DB_MAIN_USER: string;
  DB_MAIN_PASS: string;
};

export type CoreProps = {
  config: Config;
};

export type MethodControllerProps = {
  req: Request;
  res: Response;
  params: Record<string, unknown>;
  body: Record<string, unknown>;
  makeError: typeof boom;
  makeResponse: (data: unknown) => void;
};

export type MethodController = Partial<
  Record<HttpMethod, (req: Request, res: Response) => void>
>;

export type MethodControllers = Record<string, MethodController>;

export type Controllers = Record<string, MethodControllers>;
