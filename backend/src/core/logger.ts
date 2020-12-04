import { createLogger, format, transports } from 'winston';
import { resolve } from 'path';

const resolveLogs = (name: string) => resolve(__dirname, '..', '..', 'logs', `${name}.log`);

const logger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.json()),
  transports: [
    new transports.File({ filename: resolveLogs('error'), level: 'error' }),
    new transports.File({ filename: resolveLogs('combined') }),
  ],
});

logger.add(
  new transports.Console({
    format: format.simple(),
    level: 'silly',
  }),
);

export default logger;
