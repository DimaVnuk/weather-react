import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from '@/components/Card/Card.module.scss';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { getWeather } from '@/store/actions/actionWeather';
const Card = () => {
  const { weather, error, loading } = useTypeSelector((state: any) => state.weather);
  const dispatch = useDispatch();
  console.log(weather.weather);
  useEffect(() => {
    dispatch(getWeather());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
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
