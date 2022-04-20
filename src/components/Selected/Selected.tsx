import { Input } from '@mui/material';
import React, { useState } from 'react';

import { HeaderProps } from '@/interfaces/HeaderProps';
import { ISelected } from '@/interfaces/ISelected';

const Selected = ({ handleOnChange, value }: ISelected) => {
  return (
    <>
      <Input className="input-weather" autoFocus={true} onChange={() => handleOnChange} value={value} />
    </>
  );
};

export default Selected;
