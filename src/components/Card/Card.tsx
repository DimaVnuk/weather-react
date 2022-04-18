import React from 'react';

import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { Image } from '@/styled-components/Image';

import Loader from '../Loader/Loader';
const Card = () => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  useFetch();
  console.log(weather);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const getWeatherFiveDay = () => {
    return weather.map((i: any, idx: number) => {
      return (
        <div key={idx} className="card-cont">
          <div>{i.dt_txt.split(' ').shift().split('-').reverse().join('-')}</div>
          <div>{success && <Image src={`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`} alt="rain" />}</div>
          <div>
            {success && `${Math.round(i.main.temp - 273)}`} <span className="font-celsius">°</span>
          </div>
          <div>
            {success && `${Math.round(i.main.feels_like - 273)}`} <span className="font-celsius">°</span>
          </div>
          <div>{success && i.weather[0].main}</div>
        </div>
      );
    });
  };

  return <>{getWeatherFiveDay()}</>;
};

export default Card;
