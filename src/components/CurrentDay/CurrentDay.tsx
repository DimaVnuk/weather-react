import moment from 'moment';
import React, { useEffect, useState } from 'react';

import rain from '@/assets/svg/rain.svg';
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

  const date = moment().format('DD:MM:YYYY');
  return (
    <div className="currentDay-cont">
      <div className="currentDay-temp__cont">
        <div>
          <p className="currentDay-temp__font">
            {success && `${Math.round(weather.list[0].main.temp - 273)}`} <span className="font-celsius">&deg;C</span>
          </p>
          <p className="currentDay-date">{success && date}</p>
        </div>
        <div>
          <Image src={rain} alt="rain" />
        </div>
      </div>
      <div className="currentDay-time__cont">
        <p>
          Время: <Clock />
        </p>
        <p>Город: Могилев</p>
      </div>
    </div>
  );
};

export default CurrentDay;
