import React from 'react';

import Selected from '@/components/Selected/Selected';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.cont}>
      <div>
        <h1>Weather</h1>
      </div>
      <div className={style.contInput}>
        <div>тема</div>
        <div>
          <Selected />
        </div>
      </div>
    </header>
  );
};

export default Header;
