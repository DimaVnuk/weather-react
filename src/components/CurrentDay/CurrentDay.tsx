import moment from 'moment';
import React from 'react';

import Clock from '@/components/Clock/Clock';
import Loader from '@/components/Loader/Loader';
import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { Image } from '@/styled-components/Image';
const CurrentDay = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  useFetch();

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const date = moment().format('DD.MM.YYYY');
  return (
    <div className="currentDay-cont">
      <div className="currentDay-temp__cont">
        <div className="currentDay-with-date">
          <p className="currentDay-temp__font">
            {success && `${Math.round(weather[0].main.temp - 273)}`} <span className="font-celsius">°</span>
          </p>
          <p className="currentDay-date">{success && date}</p>
        </div>
        <div className="weather-icon">{success && <Image src={`http://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`} alt="rain" />}</div>
      </div>
      <div className="currentDay-time__cont">
        <p>
          Время: <Clock />
        </p>
        <p className="city">Город: </p>
      </div>
    </div>
  );
};

export default CurrentDay;
