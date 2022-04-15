import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Clock = () => {
  const currentTime = moment().format('HH:mm:ss');
  const [time, setTime] = useState(() => currentTime);

  useEffect(() => {
    const newTime = setInterval(() => {
      setTime((prev) => (prev = moment().format('HH:mm:ss')));
    }, 1000);

    return () => {
      clearInterval(newTime);
    };
  }, []);
  return <>{`${time}`}</>;
};

export default Clock;
