import React from 'react';

import CurrentDay from '@/components/CurrentDay/CurrentDay';
import WeatherDayInfo from '@/components/WeatherDayInfo/WeatherDayInfo';
const CurrenDayInfoDay = () => {
  return (
    <div className="currenDayInfoDay-cont">
      <CurrentDay />
      <WeatherDayInfo />
    </div>
  );
};

export default CurrenDayInfoDay;
