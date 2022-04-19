import axios from 'axios';
import memoize from 'lodash.memoize';
import { Dispatch } from 'redux';

import { WeatherAction, WeatherActionTypes } from '@/interfaces/IWeather';
const getWeather = (city = 'Minsk') => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: WeatherActionTypes.SET_WEATHER });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=0253feb4b272e9d80b20818a745b1ec4`)
      .then((response) =>
        dispatch({
          type: WeatherActionTypes.SET_WEATHER_SUCCESS,
          payload: response.data.list.filter((reading: { dt_txt: string | string[] }) => reading.dt_txt.includes('18:00:00')),
        }),
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: WeatherActionTypes.SET_WEATHER_ERROR, payload: err.response });
      });
  };
};

export default memoize(getWeather);
