import { WeatherAction, WeatherActionTypes, WeatherState } from '@/interfaces/IWeather';

const initialState: WeatherState = {
  weather: [],
  loading: false,
  error: null,
};

export function reducerWeather(state = initialState, action: WeatherAction): WeatherState {
  switch (action.type) {
    case WeatherActionTypes.SET_WEATHER:
      return {
        ...state,
        weather: [],
        loading: true,
        error: null,
      };
    case WeatherActionTypes.SET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: true,
        error: null,
      };
    case WeatherActionTypes.SET_WEATHER_ERROR:
      return {
        ...state,
        weather: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
