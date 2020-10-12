import { extensionName } from '../config';

const prefix = `${extensionName}: `;

export default {
  log: msg => console.log(`${prefix} ${msg}`),
  warn: msg => console.warn(`${prefix} ${msg}`),
  error: msg => console.error(`${prefix} ${msg}`),
  info: msg => console.info(`${prefix} ${msg}`),
};
