import React from 'react';

import style from '@/components/WeatherDayInfo/WeatherDayInfo.module.scss';
const WeatherDayInfo = () => {
  return (
    <div className={style.cont}>
      <div className={style.info}>
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
