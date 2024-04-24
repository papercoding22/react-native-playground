import React from 'react';

import Bell from '@/assets/icons/bell.svg';
import House from '@/assets/icons/house-floor.svg';
import {useRoute} from '@react-navigation/native';
import {Icon} from '@ui-kitten/components';
import useTheme from '@/theme/useTheme';

const BottomTabBarIcon = ({
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const theme = useTheme();
  const route = useRoute();

  switch (route.name) {
    case 'Home':
      return <House width={size} height={size} color={theme.colors.primary} />;
    case 'Notifications':
      return <Bell width={size} height={size} color={theme.colors.primary} />;
    case 'Settings':
      // return <User width={size} height={size} color={color} />;
      return (
        <Icon
          name="settings-2-outline"
          fill={theme.colors.primary}
          style={{width: size, height: size}}
        />
      );
    default:
      return null;
  }
};

export default BottomTabBarIcon;
