import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgProps} from 'react-native-svg';
import React from 'react';

import useTheme from '@/theme/useTheme';
import {
  ActivityStackScreen,
  CommunityStackScreen,
  HomeStackScreen,
  SearchStackScreen,
} from '@/screens';
import ActivityFocused from '@/assets/icons/bell-filled.svg';
import ActivityUnfocused from '@/assets/icons/bell-outlined.svg';
import HomeFocused from '@/assets/icons/home-filled.svg';
import HomeUnfocused from '@/assets/icons/home-outlined.svg';
import CommunityFocused from '@/assets/icons/newspaper-filled.svg';
import CommunityUnfocused from '@/assets/icons/newspaper-outlined.svg';
import SearchUnfocused from '@/assets/icons/search-outlined.svg';
import SearchFocused from '@/assets/icons/search-xl-outlined.svg';

import useBottomNavigationOptions from './useBottomNavigationOptions';
import withBaseScreenOptions from './withBaseScreenOptions';

const Tab = createBottomTabNavigator();

const HomeStack = withBaseScreenOptions(HomeStackScreen);
const SearchStack = withBaseScreenOptions(SearchStackScreen);
const CommunityStack = withBaseScreenOptions(CommunityStackScreen);
const ActivityStack = withBaseScreenOptions(ActivityStackScreen);

export const TabMap: {
  [key: string]: {
    name: string;
    tabLabel: string;
    icons: {
      active: React.FC<SvgProps>;
      inactive: React.FC<SvgProps>;
    };
    component: React.FC;
  };
} = {
  HomeStack: {
    name: 'HomeStack',
    tabLabel: 'Home',
    icons: {
      active: HomeFocused,
      inactive: HomeUnfocused,
    },
    component: HomeStack,
  },
  SearchStack: {
    name: 'SearchStack',
    tabLabel: 'Search',
    icons: {
      active: SearchFocused,
      inactive: SearchUnfocused,
    },
    component: SearchStack,
  },
  CommunityStack: {
    name: 'CommunityStack',
    tabLabel: 'Community',
    icons: {
      active: CommunityFocused,
      inactive: CommunityUnfocused,
    },
    component: CommunityStack,
  },
  ActivityStack: {
    name: 'ActivityStack',
    tabLabel: 'Activity',
    icons: {
      active: ActivityFocused,
      inactive: ActivityUnfocused,
    },
    component: ActivityStack,
  },
};

const Tabs = Object.values(TabMap);

const BottomTabNavigator = () => {
  const theme = useTheme();
  const bottomNavigationOptions = useBottomNavigationOptions(theme);

  return (
    <Tab.Navigator screenOptions={bottomNavigationOptions}>
      {Tabs.map(({name, tabLabel, component}) => (
        <Tab.Screen
          options={{
            tabBarLabel: tabLabel,
          }}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
