import React from 'react';

import Selected from '@/components/Selected/Selected';
import { HeaderProps } from '@/interfaces/HeaderProps';
const Header = ({ handleChange, selected }: HeaderProps) => {
  return (
    <header className="header-cont">
      <div>
        <h1>Weather</h1>
      </div>
      <div className="header-contInput">
        <select onChange={handleChange} defaultValue={selected}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
        <div>
          <Selected />
        </div>
      </div>
    </header>
  );
};

export default Header;
