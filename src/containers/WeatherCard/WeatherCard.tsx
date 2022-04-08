import React from 'react';

import Card from '@/components/Card/Card';
import style from '@/containers/WeatherCard/WeatherCard.module.scss';
const WeatherCard = () => {
  return (
    <div className={style.cont}>
      <Card />
    </div>
  );
};

export default WeatherCard;
