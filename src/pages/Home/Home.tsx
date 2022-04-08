import React from 'react';

import Header from '@/components/Header/Header';
import CurrenDayInfoDay from '@/containers/CurrenDayInfoDay/CurrenDayInfoDay';
import WeatherCard from '@/containers/WeatherCard/WeatherCard';
import style from '@/pages/Home/Home.module.scss';

const Home = () => {
  return (
    <div className={style.home}>
      <Header />
      <CurrenDayInfoDay />
      <WeatherCard />
    </div>
  );
};

export default Home;
