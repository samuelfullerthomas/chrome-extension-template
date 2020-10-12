import storage from '../util/storage';

chrome.runtime.onInstalled.addListener(async () => {
  const state = await storage.getExtensionState();
  if (!state) {
    storage.sync({});
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  console.log('hello!!!');
  if (tab.url && tab.url.includes('google')) {
    console.log('hello!!!');
    chrome.tabs.executeScript({ file: 'pink.js' });
  }
});
