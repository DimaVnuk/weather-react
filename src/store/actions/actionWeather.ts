import axios from 'axios';
import { Dispatch } from 'redux';

import { WeatherAction, WeatherActionTypes } from '@/interfaces/IWeather';

export const getWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.SET_WEATHER });
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=0253feb4b272e9d80b20818a745b1ec4');
      dispatch({ type: WeatherActionTypes.SET_WEATHER_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: WeatherActionTypes.SET_WEATHER_ERROR, payload: 'error weather download' });
    }
  };
};
