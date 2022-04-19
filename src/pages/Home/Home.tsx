import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '@/components/Header/Header';
import Selected from '@/components/Selected/Selected';
import CurrenDayInfoDay from '@/containers/CurrenDayInfoDay/CurrenDayInfoDay';
import WeatherCard from '@/containers/WeatherCard/WeatherCard';
import useFetch from '@/hooks/useFetch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { HeaderProps } from '@/interfaces/HeaderProps';
import getWeather from '@/store/actions/actionWeather';
const Home = ({ handleChange, selected }: HeaderProps) => {
  const { weather, loading, success } = useTypeSelector((state) => state.weather);
  useFetch();
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(getWeather(searchInput));
      console.log('f');
      setSearchInput((prev) => (prev = ''));
    }
  };

  const handleOnChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="home">
      <Header handleChange={handleChange} selected={selected} />
      <form className="cont-selected" onSubmit={handleSubmit}>
        <Selected handleOnChange={(e: any) => handleOnChange(e)} value={searchInput} />
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Найти
          </Button>
        </div>
      </form>
      <CurrenDayInfoDay />
      <WeatherCard />
    </div>
  );
};

export default Home;
