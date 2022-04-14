import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreators from '@/store/actions/actionWeather';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};

export default useActions;
