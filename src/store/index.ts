import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';

export const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      movies: moviesReducer,
      selectedMovie: selectedMovieReducer,
    },
    preloadedState,
  });
};

let store;
export const initialiseStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    console.log('AND HERE');
    console.log(store.getState);
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

// const dummyStore = initialiseStore({}); // required for types only
// console.log(dummyStore.getState());
export type RootState = ReturnType<typeof dummyStore.getState>;
export type AppDispatch = typeof dummyStore.dispatch;
