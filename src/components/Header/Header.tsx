import React from 'react';

import iconHeader from '@/assets/svg/iconHeader.png';
import { HeaderProps } from '@/interfaces/HeaderProps';
const Header = ({ handleChange, selected }: HeaderProps) => {
  return (
    <header className="header-cont">
      <div className="header-cont__title-img">
        <h1 className="font-title">Weather</h1>
        <img src={iconHeader} />
      </div>
      <div className="cont-theme">
        <select className="theme-select" onChange={handleChange} defaultValue={selected}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
