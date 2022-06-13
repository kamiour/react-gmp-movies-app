import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import moviesReducer, { FetchedMoviesState } from './moviesReducer';
import selectedMovieReducer, { SelectedMovieState } from './selectedMovieReducer';

export interface RootState {
  movies: FetchedMoviesState;
  selectedMovie: SelectedMovieState;
}

const combinedReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

const masterReducer = (state: RootState | undefined, action: { type: typeof HYDRATE; payload: RootState }) => {
  // used to set state from server (SSR) to client
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      movies: action.payload.movies,
      selectedMovie: action.payload.selectedMovie,
    };
  }

  return combinedReducer(state, action);
};

export const createStore = () => {
  return configureStore({
    reducer: masterReducer,
  });
};

// to get AppDispatch type and to use in Storybook
export const dummyStore = configureStore({
  reducer: masterReducer,
});

export type AppDispatch = typeof dummyStore.dispatch;

export const wrapper = createWrapper(createStore, { debug: false });
