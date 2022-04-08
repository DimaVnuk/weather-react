import React from 'react';

import style from '@/components/CurrentDay/CurrentDay.module.scss';
const CurrentDay = () => {
  return (
    <div className={style.cont}>
      <div className={style.temp__cont}>
        <div>
          <p className={style.temp__font}>20</p>
          <p>Сегодня</p>
        </div>
        <div>Солнце</div>
      </div>
      <div className={style.time__cont}>
        <p>Время: 11:02</p>
        <p>Город: Могилев</p>
      </div>
    </div>
  );
};

export default CurrentDay;
