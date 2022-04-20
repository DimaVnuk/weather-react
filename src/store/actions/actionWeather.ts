import axios from 'axios';
import memoize from 'lodash.memoize';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

import { KEY_ID } from '@/constants/URL';
import { WeatherAction, WeatherActionTypes } from '@/interfaces/IWeather';

fetch('https://api.db-ip.com/v2/free/self')
  .then((res) => res.json())
  .then((data) => localStorage.setItem('default', data.stateProv));
const searchCity = localStorage.getItem('city');
const getWeather = (city = searchCity) => {
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
        toast.error(err.response.data.message, {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
        dispatch({ type: WeatherActionTypes.SET_WEATHER_ERROR, payload: err.response });
      });
  };
};

export default memoize(getWeather);
