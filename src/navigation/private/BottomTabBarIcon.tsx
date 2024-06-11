import React from 'react';
import {useRoute} from '@react-navigation/native';

import {useTheme} from '@/theme';
import {TabMap} from './BottomTabNavigator';

const BottomTabBarIcon = ({
  size,
  focused,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const theme = useTheme();
  const route = useRoute();

  const Icon = TabMap[route.name].icons[focused ? 'active' : 'inactive'];

  return <Icon width={size} height={size} color={theme.colors.onSurface} />;
};

export default BottomTabBarIcon;
