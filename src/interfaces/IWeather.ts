export interface WeatherState {
  weather: any;
  loading: boolean;
  error: null | string;
}

export enum WeatherActionTypes {
  SET_WEATHER = 'SET_WEATHER',
  SET_WEATHER_SUCCESS = 'SET_WEATHER_SUCCESS',
  SET_WEATHER_ERROR = 'SET_WEATHER_ERROR',
}

interface SethWeatherAction {
  type: WeatherActionTypes.SET_WEATHER;
}

interface SethWeatherSuccessAction {
  type: WeatherActionTypes.SET_WEATHER_SUCCESS;
  payload: any[];
}

interface SethWeatherErrorAction {
  type: WeatherActionTypes.SET_WEATHER_ERROR;
  payload: string;
}

export type WeatherAction = SethWeatherAction | SethWeatherSuccessAction | SethWeatherErrorAction;
