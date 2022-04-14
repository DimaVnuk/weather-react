import React, { useEffect } from 'react';

import Loader from '@/components/Loader/Loader';
import useActions from '@/hooks/useActions';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const WeatherDayInfo = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  const { getWeather } = useActions();

  useEffect(() => {
    getWeather();
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="weatherDayInfo-cont">
      <div className="weatherDayInfo-info">
        <div>Температура: </div>
        <div>Ветер: </div>
        <div>Влажность: </div>
      </div>
      <div>
        <div>
          {success && `${Math.round(weather.list[0].main.temp - 273)}`} &deg;C - ощущается как
          {success && ` ${Math.round(weather.list[0].main.feels_like - 273)}`}
          &deg;C
        </div>
        <div>{success && Math.round(weather.list[0].wind.speed)} м/с</div>
        <div>{success && weather.list[0].main.humidity} %</div>
      </div>
    </div>
  );
};

export default WeatherDayInfo;
