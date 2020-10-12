import logger from './util/logger';
import storage from './util/storage';

const run = async () => {
  const state = await storage.getExtensionState();
  if (state) {
    if (window.location.href.includes('google')) {
      logger.log('hello from google!');
    }
  }
};

run();
