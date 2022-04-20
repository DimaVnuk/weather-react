import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { Image } from '@/styled-components/Image';

import Loader from '../Loader/Loader';
const Card = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  useFetch();
  const { i18n } = useTranslation();

  console.log(weather);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  function getWeekDay(date: Date) {
    const daysRU = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const daysEN = ['SUN', 'MO', 'TU', 'WE', 'TH', 'FR', 'SUT'];

    return i18n.language === 'ru' ? daysRU[date.getDay()] : daysEN[date.getDay()];
  }
  const getWeatherFiveDay = () => {
    return weather.map((i: any, idx: number) => {
      return (
        <div key={idx} className="card-cont">
          <div className="wrap-date">{i.dt_txt.split(' ').shift().split('-').reverse().join('-')}</div>
          <div>{getWeekDay(new Date(i.dt_txt))}</div>
          <div>{success && <Image src={`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`} alt="rain" />}</div>
          <div>
            {success && `${Math.round(i.main.temp - 273)}`} <span className="font-celsius">°</span>
          </div>
          <div>
            {success && `${Math.round(i.main.feels_like - 273)}`} <span className="font-celsius">°</span>
          </div>
        </div>
      );
    });
  };

  return <>{getWeatherFiveDay()}</>;
};

export default Card;
