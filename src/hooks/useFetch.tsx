import React, { useEffect } from 'react';

import useActions from '@/hooks/useActions';

const useFetch = () => {
  const getWeather = useActions();

  useEffect(() => {
    getWeather();
  }, []);
};

export default useFetch;
