import React, { useCallback, useEffect } from 'react';

import useActions from '@/hooks/useActions';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const WeatherDayInfo = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  const { getWeather } = useActions();

  const { main, wind } = weather.list[0];

  useEffect(() => {
    getWeather();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
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
          {success && `${Math.round(main.temp - 273)}`} &deg;C - ощущается как
          {success && ` ${Math.round(main.feels_like - 273)}`}
          &deg;C
        </div>
        <div>{success && Math.round(wind.speed)} м/с</div>
        <div>{success && main.humidity} %</div>
      </div>
    </div>
  );
};

export default WeatherDayInfo;
