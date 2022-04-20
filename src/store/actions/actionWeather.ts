import axios from 'axios';
import memoize from 'lodash.memoize';
import { Dispatch } from 'redux';

import { KEY_ID } from '@/constants/URL';
import { WeatherAction, WeatherActionTypes } from '@/interfaces/IWeather';
const getWeather = (city = 'Minsk') => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: WeatherActionTypes.SET_WEATHER });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${KEY_ID}`)
      .then((response) =>
        dispatch({
          type: WeatherActionTypes.SET_WEATHER_SUCCESS,
          payload: response.data.list.filter((timeWeather: { dt_txt: string | string[] }) => timeWeather.dt_txt.includes('18:00:00')),
        }),
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: WeatherActionTypes.SET_WEATHER_ERROR, payload: err.response });
      });
  };
};

export default memoize(getWeather);
