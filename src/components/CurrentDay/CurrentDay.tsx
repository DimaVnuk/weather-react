import React from 'react';

const CurrentDay = () => {
  return (
    <div className="currentDay-cont">
      <div className="currentDay-temp__cont">
        <div>
          <p className="currentDay-temp__font">20</p>
          <p>Сегодня</p>
        </div>
        <div>Солнце</div>
      </div>
      <div className="currentDay-time__cont">
        <p>Время: 11:02</p>
        <p>Город: Могилев</p>
      </div>
    </div>
  );
};

export default CurrentDay;
