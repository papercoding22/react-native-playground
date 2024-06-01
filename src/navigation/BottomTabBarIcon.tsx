import React from 'react';
import {useRoute} from '@react-navigation/native';

import HomeFocused from '@/assets/icons/home-filled.svg';
import HomeUnfocused from '@/assets/icons/home-outlined.svg';
import SearchUnfocused from '@/assets/icons/search-outlined.svg';
import SearchFocused from '@/assets/icons/search-xl-outlined.svg';
import CommunityFocused from '@/assets/icons/newspaper-filled.svg';
import CommunityUnfocused from '@/assets/icons/newspaper-outlined.svg';
import ActivityFocused from '@/assets/icons/bell-filled.svg';
import ActivityUnfocused from '@/assets/icons/bell-outlined.svg';

import useTheme from '@/theme/useTheme';

const Bars = {
  Home: {
    Focused: HomeFocused,
    Unfocused: HomeUnfocused,
  },
  Search: {
    Focused: SearchFocused,
    Unfocused: SearchUnfocused,
  },
  Community: {
    Focused: CommunityFocused,
    Unfocused: CommunityUnfocused,
  },
  Activity: {
    Focused: ActivityFocused,
    Unfocused: ActivityUnfocused,
  },
};

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

  const Icon =
    Bars[route.name as keyof typeof Bars][focused ? 'Focused' : 'Unfocused'];

  return <Icon width={size} height={size} color={theme.colors.onSurface} />;
};

export default BottomTabBarIcon;
