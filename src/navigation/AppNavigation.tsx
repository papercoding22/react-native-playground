import React from 'react';

import {FlowNavigator} from './@core';
import {PrivateNavigator} from './private';
import {PublicNavigator} from './public';

const AppNavigation = () => {
  return (
    <FlowNavigator
      isPublic={false}
      publicNavigator={<PrivateNavigator />}
      privateNavigator={<PublicNavigator />}
    />
  );
};

export default AppNavigation;
