import React from 'react';

import Loader from '@/components/Loader/Loader';
import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const WeatherDayInfo = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  useFetch();

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
        <div className="weatherDayInfo-info__cont-info cont-info cont-info__name">Температура: </div>
        <div className="cont-info cont-info__name">Ветер: </div>
        <div className="cont-info cont-info__name">Влажность: </div>
        <div className="cont-info cont-info__name">Давление: </div>
      </div>
      <div>
        <div className="cont-info">
          {success && `${Math.round(weather[0].main.temp - 273)}`} ° -{success && ` ${Math.round(weather[0].main.feels_like - 273)}`}°
        </div>
        <div className="cont-info">{success && Math.round(weather[0].wind.speed)} м/с</div>
        <div className="cont-info">{success && weather[0].main.humidity} %</div>
        <div className="cont-info">{success && weather[0].main.pressure} гПа</div>
      </div>
    </div>
  );
};

export default WeatherDayInfo;
