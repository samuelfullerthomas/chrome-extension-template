import createAtom from 'tiny-atom';
import storage from '../util/storage';

// to save some states, say
const initialState = { count: 0 };

const actions = {
  initialize: (atom, initialState) => {
    atom.set(initialState);
    document.querySelector('#button-value').innerHTML = initialState.count;
  },
  increment: atom => {
    const count = atom.get().count;
    const newState = {
      ...atom.get(),
      count: count + 1,
    };
    storage.sync(newState);
    atom.set(newState);
    document.querySelector('#button-value').innerHTML = newState.count;
  },
  decrement: atom => {
    const count = atom.get().count;
    const newState = {
      ...atom.get(),
      count: count - 1,
    };
    storage.sync(newState);
    atom.set(newState);
    document.querySelector('#button-value').innerHTML = newState.count;
  },
};

const atom = createAtom(initialState, actions);

const onPageLoad = async () => {
  const initialState = await storage.getExtensionState();
  atom.actions.initialize(initialState);
  document
    .querySelector('#increment')
    .addEventListener('click', atom.actions.increment);

  document
    .querySelector('#decrement')
    .addEventListener('click', atom.actions.decrement);
};

onPageLoad();
