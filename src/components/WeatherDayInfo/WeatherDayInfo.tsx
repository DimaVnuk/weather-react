import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypeSelector } from '@/hooks/useTypeSelector';
import { getWeather } from '@/store/actions/actionWeather';
const WeatherDayInfo = () => {
  const { weather } = useTypeSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  /* const temperat = `${Math.round(weather.main.temp - 273)} &deg`; */
  return (
    <div className="weatherDayInfo-cont">
      <div className="weatherDayInfo-info">
        <div>Температура:</div>
        <div>Давление: </div>
        <div>Осадки: </div>
        <div>Ветер: </div>
      </div>
      <div>
        <div>20 - ощущается как 17</div>
        <div>765 мм ртутного столба - нормально</div>
        <div>Без осадков </div>
        <div>3 м/с юго-запад - легкий ветер</div>
      </div>
    </div>
  );
};

export default WeatherDayInfo;
