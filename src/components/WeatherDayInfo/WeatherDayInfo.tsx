import React from 'react';
import { useTranslation } from 'react-i18next';

import Loader from '@/components/Loader/Loader';
import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const WeatherDayInfo = () => {
  const { weather, loading, success, error } = useTypeSelector((state) => state.weather);
  useFetch();
  const { t } = useTranslation();
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) {
    return <>{console.log(error)} </>;
  }

  return (
    <div className="weatherDayInfo-cont">
      <div className="weatherDayInfo-info">
        <div className="weatherDayInfo-info__cont-info cont-info cont-info__name">{t('temp')}: </div>
        <div className="cont-info cont-info__name">{t('wind')}: </div>
        <div className="cont-info cont-info__name">{t('humidity')}: </div>
        <div className="cont-info cont-info__name">{t('pressure')}: </div>
      </div>
      <div>
        <div className="cont-info">
          {success && `${Math.round(weather[0].main.temp - 273)}`} ° -{success && ` ${Math.round(weather[0].main.feels_like - 273)}`}°
        </div>
        <div className="cont-info">
          {success && Math.round(weather[0].wind.speed)} {t('speed')}
        </div>
        <div className="cont-info">{success && weather[0].main.humidity} %</div>
        <div className="cont-info">
          {success && weather[0].main.pressure} {t('hpa')}
        </div>
      </div>
    </div>
  );
};

export default WeatherDayInfo;
