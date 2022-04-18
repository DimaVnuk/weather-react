import { WeatherAction, WeatherActionTypes, WeatherState } from '@/interfaces/IWeather';

const initialState: WeatherState = {
  weather: [],
  loading: false,
  success: false,
  error: false,
};

/* eslint-disable */
export function reducerWeather(state = initialState, action: WeatherAction): WeatherState {
  /* eslint-enable */
  switch (action.type) {
    case WeatherActionTypes.SET_WEATHER:
      return {
        ...state,
        loading: true,
      };
    case WeatherActionTypes.SET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        weather: action.payload,
      };
    case WeatherActionTypes.SET_WEATHER_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
