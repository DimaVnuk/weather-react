import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Header from '@/components/Header/Header';
import Selected from '@/components/Selected/Selected';
import CurrenDayInfoDay from '@/containers/CurrenDayInfoDay/CurrenDayInfoDay';
import WeatherCard from '@/containers/WeatherCard/WeatherCard';
import { HeaderProps } from '@/interfaces/HeaderProps';
import getWeather from '@/store/actions/actionWeather';
const Home = ({ handleChange, selected }: HeaderProps) => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(getWeather(searchInput));
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
        <div className="input-search-cont">
          <Selected className="input-search" handleOnChange={(e: any) => handleOnChange(e)} value={searchInput} />
        </div>
        <div>
          <Button className="search-btn" variant="contained" onClick={handleSubmit}>
            {t('search')}
          </Button>
        </div>
      </form>
      <CurrenDayInfoDay />
      <WeatherCard />
    </div>
  );
};

export default Home;
