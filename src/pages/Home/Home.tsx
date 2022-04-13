import React from 'react';

import Header from '@/components/Header/Header';
import CurrenDayInfoDay from '@/containers/CurrenDayInfoDay/CurrenDayInfoDay';
import WeatherCard from '@/containers/WeatherCard/WeatherCard';
import { HeaderProps } from '@/interfaces/HeaderProps';
const Home = ({ handleChange, selected }: HeaderProps) => {
  return (
    <div className="home">
      <Header handleChange={handleChange} selected={selected} />
      <CurrenDayInfoDay />
      <WeatherCard />
    </div>
  );
};

export default Home;
