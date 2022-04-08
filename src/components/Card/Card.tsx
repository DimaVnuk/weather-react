import React from 'react';

import style from '@/components/Card/Card.module.scss';
const Card = () => {
  return (
    <div className={style.cont}>
      <div>Сегодня</div>
      <div>28 авг</div>
      <div>Иконка</div>
      <div>+18</div>
      <div>+15</div>
      <div>Облачно</div>
    </div>
  );
};

export default Card;
