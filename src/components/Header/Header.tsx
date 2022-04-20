import React from 'react';
import { useTranslation } from 'react-i18next';

import iconHeader from '@/assets/svg/iconHeader.png';
import { HeaderProps } from '@/interfaces/HeaderProps';

const Header = ({ handleChange, selected }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln: string) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <header className="header-cont">
      <div className="header-cont__title-img">
        <h1 className="font-title">{t('title')}</h1>
        <img src={iconHeader} />
        <button className="btn-lang" onClick={changeLanguage('ru')}>
          {t('ru')}
        </button>
        <button className="btn-lang" onClick={changeLanguage('en')}>
          {t('en')}
        </button>
      </div>
      <div className="cont-theme">
        <select className="theme-select" onChange={handleChange} defaultValue={selected}>
          <option className="font-option" value="light">
            {t('theme-light')}
          </option>
          <option className="font-option" value="dark">
            {t('theme-dark')}
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
