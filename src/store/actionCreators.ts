import ActionTypes from './actionTypes';
import ACTIONS from './actionTypes';

export interface Action {
  type: ActionTypes;
  payload?: any;
  error?: Error;
  meta?: any;
}

const startFetchMovies = () => ({
  type: ACTIONS.START_FETCH_MOVIES,
});
