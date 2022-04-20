import { Input } from '@mui/material';
import React, { useState } from 'react';

import { HeaderProps } from '@/interfaces/HeaderProps';

const Selected = ({ handleOnChange, value }: any) => {
  return (
    <>
      <Input className="input-weather" autoFocus={true} onChange={handleOnChange} value={value} />
    </>
  );
};

export default Selected;
