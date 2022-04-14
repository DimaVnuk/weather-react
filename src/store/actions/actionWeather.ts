import axios from 'axios';
import { Dispatch } from 'redux';

import { WeatherAction, WeatherActionTypes } from '@/interfaces/IWeather';
const FAKE = 'https://jsonplaceholder.typicode.com/users';
const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=625073&appid=0253feb4b272e9d80b20818a745b1ec4';
export const getWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: WeatherActionTypes.SET_WEATHER });
    axios
      .get(URL)
      .then((response) => dispatch({ type: WeatherActionTypes.SET_WEATHER_SUCCESS, payload: response.data }))
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: WeatherActionTypes.SET_WEATHER_ERROR, payload: err.response });
      });
  };
};
