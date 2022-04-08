import React from 'react';

import CurrentDay from '@/components/CurrentDay/CurrentDay';
import WeatherDayInfo from '@/components/WeatherDayInfo/WeatherDayInfo';
import style from '@/containers/CurrenDayInfoDay/CurrenDayInfoDay.module.scss';
const CurrenDayInfoDay = () => {
  return (
    <div className={style.cont}>
      <CurrentDay />
      <WeatherDayInfo />
    </div>
  );
};

export default CurrenDayInfoDay;
