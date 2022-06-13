import { Input } from '@mui/material';
import React, { useState } from 'react';

import { HeaderProps } from '@/interfaces/HeaderProps';
// i dont know type handleOnChange
const Selected = ({ handleOnChange, value, placeholder }: any) => {
  return (
    <>
      <Input className="input-weather" autoFocus={true} onChange={handleOnChange} value={value} placeholder={placeholder} />
    </>
  );
};

export default Selected;
