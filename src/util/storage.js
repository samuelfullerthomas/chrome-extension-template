import { storageType, extensionStorageKey } from '../config';

const set = (key, value) => {
  return new Promise(resolve => {
    chrome.storage[storageType].set(
      {
        [key]: value,
      },
      resolve
    );
  });
};

const get = key => {
  return new Promise(resolve => {
    chrome.storage[storageType].get([key], storage => {
      resolve(storage[key]);
    });
  });
};

const sync = async newState => {
  const currentState = await get(extensionStorageKey);
  await set(extensionStorageKey, {
    ...currentState,
    ...newState,
  });
};

const getExtensionState = async () => {
  return get(extensionStorageKey);
};

export default {
  get,
  set,
  sync,
  getExtensionState,
};
