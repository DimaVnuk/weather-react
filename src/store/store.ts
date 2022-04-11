import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducerWeather } from '@/store/reducers/reducerWeather';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  weather: reducerWeather,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
