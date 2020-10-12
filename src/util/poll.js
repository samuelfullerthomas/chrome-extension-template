import { extensionStorageKey } from '../config';

window[extensionStorageKey] = window[extensionStorageKey] || {};

export default async function poll(fn, callback) {
  window[extensionStorageKey].pollers =
    window[extensionStorageKey].pollers || {};
  if (window[extensionStorageKey].pollers[fn.toString()]) {
    return;
  }
  window[extensionStorageKey].pollers[fn.toString()] = true;
  const checkCondition = function() {
    const result = fn();
    if (result) {
      window[extensionStorageKey].pollers[fn.toString()] = false;
      callback(result);
    } else {
      setTimeout(checkCondition, 50);
    }
  };
  checkCondition();
}
